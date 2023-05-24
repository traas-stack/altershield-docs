# Quick Start
This document explains how to quickly run the AlterShield Operator service.
## Getting Started
Before running the AlterShield Operator service, you need to read the following documents:
- [Getting Started](./getting-started)

## Running Local Sever
### Install dependencies:
```sh
go mod tidy
```
### 2. Register the CRD to the Kubernetes cluster:
```sh
kubectl apply -f config/crd/bases
```
### 3. Use the following command to start the local service:
**you need to set the environment variable ENVIRONMENT=DEV**
```sh
ENVIRONMENT=DEV make run
```
- When you see the following log, it means the service has started successfully:
```
{"level":"info","ts":"2023-05-10T14:44:33.604+0800","caller":"controller/controller.go:241","msg":"Starting workers","controller":"deployment","controllerGroup":"apps","controllerKind":"Deployment","worker count":5}
{"level":"info","ts":"2023-05-10T14:44:33.604+0800","caller":"controller/controller.go:241","msg":"Starting workers","controller":"changepod","controllerGroup":"app.ops.cloud.alipay.com","controllerKind":"ChangePod","worker count":20}
{"level":"info","ts":"2023-05-10T14:44:33.604+0800","caller":"controller/controller.go:241","msg":"Starting workers","controller":"pod","controllerGroup":"","controllerKind":"Pod","worker count":5}
{"level":"info","ts":"2023-05-10T14:44:33.605+0800","caller":"controller/controller.go:241","msg":"Starting workers","controller":"changeworkload","controllerGroup":"app.ops.cloud.alipay.com","controllerKind":"ChangeWorkload","worker count":5}
```
## Start first test deployment
### 1. Set the default namespace to be controlled
```sh
kubectl label namespace default admission-webhook-altershield=enabled
```
When you see the following log, it means the setting is successful:
```
namespace/default labeled
```
### 2. Create a Deployment resource sleep
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: sleep
  labels:
    app: sleep
spec:
  replicas: 5
  selector:
    matchLabels:
      app: sleep
  template:
    metadata:
      labels:
        app: sleep
        test: "123"
    spec:
      containers:
      - name: sleep
        image: busybox
        command: ["/bin/sleep","infinity"]
        imagePullPolicy: IfNotPresent
```
```sh
kubectl apply -f config/samples/sleep.yaml
```
- When you see the following log, it means the deployment is successful:
```
deployment.apps/sleep created
```
### 3. Check if the deployment is successful
```sh
kubectl get pods
```
- When you see 5 sleep pods running, it means the deployment is successful:
```
NAME                     READY   STATUS    RESTARTS   AGE
sleep-5c698f4449-5m5g4   1/1     Running   0          2m
sleep-5c698f4449-ctfd5   1/1     Running   0          2m
sleep-5c698f4449-jkv5r   1/1     Running   0          2m
sleep-5c698f4449-rjgkn   1/1     Running   0          2m
sleep-5c698f4449-7q9q2   1/1     Running   0          2m
```
## Self-healing rollback
### 1. Intentionally set the wrong image and modify the label test.
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: sleep
  labels:
    app: sleep
spec:
  replicas: 5
  selector:
    matchLabels:
      app: sleep
  template:
    metadata:
      labels:
        app: sleep
        test: "456"
    spec:
      containers:
        - name: sleep
          image: busybo
          command: ["/bin/sleep","infinity"]
          imagePullPolicy: IfNotPresent
```
- Reapply the sleep.yaml:
```sh
kubectl apply -f config/samples/sleep.yaml
```
- When you see the following log, it means the deployment is successful:
```
deployment.apps/sleep configured
```
### 2. Check the pod status of the sleep deployment again
```sh
kubectl get pods
```
- At this point, you will find that the pod status of the sleep deployment has 4 running and 3 ErrImagePull. This is because the deployment sets an incorrect image and uses rolling deployment, resulting in abnormal status of some pods:
```
NAME                     READY   STATUS             RESTARTS   AGE
sleep-5c698f4449-5m5g4   1/1     Running            0          2m49s
sleep-5c698f4449-ctfd5   1/1     Running            0          2m49s
sleep-5c698f4449-jkv5r   1/1     Running            0          2m49s
sleep-5c698f4449-rjgkn   1/1     Running            0          2m49s
sleep-6c55bbc8d6-m6g64   0/1     ErrImagePull       0          76s
sleep-6c55bbc8d6-nlzrf   0/1     ImagePullBackOff   0          76s
sleep-6c55bbc8d6-x7wvc   0/1     ErrImagePull       0          76s
```
### 3. Observe the rollback status
- After the abnormal pod status exceeds the threshold time (default 2 minutes), the AlterShield Operator will automatically rollback the deployment to the previous normal version (if it exists).
```sh
kubectl get pods
```
- After waiting for the threshold time, you will find that all the pod status of the sleep deployment are running:
```
NAME                     READY   STATUS    RESTARTS   AGE
sleep-5c698f4449-5m5g4   1/1     Running   0          3m49s
sleep-5c698f4449-ctfd5   1/1     Running   0          3m49s
sleep-5c698f4449-jkv5r   1/1     Running   0          3m49s
sleep-5c698f4449-rjgkn   1/1     Running   0          3m49s
sleep-5c698f4449-7q9q2   1/1     Running   0          1m49s
```
### 4. Rollback of version
```sh
kubectl get deployment sleep -o yaml
```
- The current template image of the deployment is busybox, and the test label is "123".
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    deployment.kubernetes.io/revision: "3"
    kubectl.kubernetes.io/last-applied-configuration: |
      {"apiVersion":"apps/v1","kind":"Deployment","metadata":{"annotations":{},"labels":{"app":"sleep"},"name":"sleep","namespace":"default"},"spec":{"replicas":5,"selector":{"matchLabels":{"app":"sleep"}},"template":{"metadata":{"labels":{"app":"sleep","test":"1233"}},"spec":{"containers":[{"command":["/bin/sleep","infinity"],"image":"busybo","imagePullPolicy":"IfNotPresent","name":"sleep"}]}}}}
  creationTimestamp: "2023-05-10T07:30:40Z"
  generation: 3
  labels:
    admission-webhook-altershield.antgroup.com/version: c6c45d23c098bdf181853a85b60b5d74
    altershield.defense.antgroup.com/defense-status: processed
    app: sleep
  name: sleep
  namespace: default
  resourceVersion: "174364"
  uid: 63e253a2-d18a-4100-b928-38e004263762
spec:
  progressDeadlineSeconds: 600
  replicas: 5
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      app: sleep
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      creationTimestamp: null
      labels:
        admission-webhook-altershield.antgroup.com/version: c6c45d23c098bdf181853a85b60b5d74
        app: sleep
        test: "123"
    spec:
      containers:
      - command:
        - /bin/sleep
        - infinity
        image: busybox
        imagePullPolicy: IfNotPresent
        name: sleep
        resources: {}
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext: {}
      terminationGracePeriodSeconds: 30
status:
  availableReplicas: 5
  conditions:
  - lastTransitionTime: "2023-05-10T07:30:42Z"
    lastUpdateTime: "2023-05-10T07:30:42Z"
    message: Deployment has minimum availability.
    reason: MinimumReplicasAvailable
    status: "True"
    type: Available
  - lastTransitionTime: "2023-05-10T07:30:40Z"
    lastUpdateTime: "2023-05-10T07:34:15Z"
    message: ReplicaSet "sleep-5c698f4449" has successfully progressed.
    reason: NewReplicaSetAvailable
    status: "True"
    type: Progressing
  observedGeneration: 3
  readyReplicas: 5
  replicas: 5
  updatedReplicas: 5
```
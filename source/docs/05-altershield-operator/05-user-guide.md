# User Guide
This document introduces the user guide for AlterShield Operator.

## Getting Started
**Before running AlterShield Operator, you need to read the following documents:**
- [Quick Deploy](./quick-deploy) and run it on the cluster.

**Before using AlterShield Operator, you need to understand the following concepts:**
- [CustomResourceDefinition](https://kubernetes.io/docs/reference/kubernetes-api/extend-resources/custom-resource-definition-v1/)
- [Webhook Mode](https://kubernetes.io/docs/reference/access-authn-authz/webhook/)

## Basic Principles of AlterShield Operator
- Based on the Kubernetes Webhook and Watch mechanisms, AlterShield Operator monitors Kubernetes resources.
- Defining two brand-new CRD resources, ChangeWorkload and ChangePod, to define the monitoring information for Workload and Pod resources.
- When a Deployment resource in the cluster changes, AlterShield Operator detects the changed resource. If an exception is detected, it intercepts future changes to the abnormal resource while triggering self-healing rollback.

**Next, try to use AlterShield Operator further**
## 1.  Create a Deployment Resource Sleep
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
- Run the command
```sh
kubectl apply -f config/samples/sleep.yaml
```
- When you see the following log, the deployment is complete
```
deployment.apps/sleep created
```
## 2. Check if the deployment is successful
- Run the command
```sh
kubectl get pods
```
- When you see 5 sleep pods running, it means the deployment was successful.
```
NAME                     READY   STATUS    RESTARTS   AGE
sleep-5c698f4449-8q79v   1/1     Running   0          2m
sleep-5c698f4449-fsb27   1/1     Running   0          2m
sleep-5c698f4449-gttrk   1/1     Running   0          2m
sleep-5c698f4449-mllt2   1/1     Running   0          2m
sleep-5c698f4449-qv24p   1/1     Running   0          2m
```
## 3. Observe the yaml of deployment sleep in the cluster
- Run the command
```sh
kubectl get deployment sleep -o yaml
```
- Unlike Running Local Server in [Quick-Start](./quick-start)，you will find two more labels in the yaml of Deployment sleep in the cluster.
```yaml
apiVersion: v1
items:
  - apiVersion: apps/v1
    kind: Deployment
    metadata:
      annotations:
        deployment.kubernetes.io/revision: "6"
        kubectl.kubernetes.io/last-applied-configuration: ...
      creationTimestamp: ...
      generation: 6
      labels:
        admission-webhook-altershield.antgroup.com/version: c6c45d23c098bdf181853a85b60b5d74
        altershield.defense.antgroup.com/defense-status: processed
        app: sleep
      name: sleep
      namespace: default
      resourceVersion: "196532"
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
        spec: ...
    status:
      availableReplicas: 5
      conditions:
        - lastTransitionTime: ...
        - lastTransitionTime: ...
      readyReplicas: 5
      replicas: 5
      updatedReplicas: 5
kind: List
metadata:
  resourceVersion: ""
```
- Find one more label `admission-webhook-altershield.antgroup.com/version` in the metadata.labels of deployment.
- Find one more label `admission-webhook-altershield.antgroup.com/version` in the spec.template.metadata.labels of deployment.

This is added by AlterShield Operator for deployment, used to identify that your deployment has been processed by AlterShield Operator and generates a version number according to the template.
## 4. Observe the ChangeWorkload CR resource in the cluster
- Run the command
```sh
kubectl get changeworkload -o yaml
```
```yaml
apiVersion: v1
items:
  - apiVersion: app.ops.cloud.alipay.com/v1alpha1
    kind: ChangeWorkload
    metadata:
      creationTimestamp: "2023-05-11T07:24:12Z"
      generation: 1
      labels:
        admission-webhook-altershield.antgroup.com/version: c6c45d23c098bdf181853a85b60b5d74
        app.kubernetes.io/deployment-name: sleep
      name: sleep--x--c6c45d23c098bdf181853a85b60b5d74
      namespace: default
      ownerReferences:
        - apiVersion: apps/v1
          blockOwnerDeletion: true
          controller: true
          kind: Deployment
          name: sleep
          uid: 57719e7d-fcae-4667-8e93-217184afe5a3
      resourceVersion: "197374"
      uid: 2405c4f9-e811-400c-a104-283cee03a2d8
    spec:
      appName: sleep
      changeWorkloadId: sleep--x--c6c45d23c098bdf181853a85b60b5d74
      countThreshold: 1
      createTime: "2023-05-11 07:24:12"
      createTimeUnix: 1683789852
      reversion: c6c45d23c098bdf181853a85b60b5d74
      serviceName: sleep
      waitTimeThreshold: 60
kind: List
metadata:
  resourceVersion: ""
```
- Find that AlterShield Operator has created a ChangeWorkload resource for the **c6c45d23c098bdf181853a85b60b5d74** version of deployment sleep, named **sleep--x--c6c45d23c098bdf181853a85b60b5d74**.
## 5. Wait for AlterShield Operator to complete the runtime check

**For details on the runtime check, please refer to [Open Change Management Specification](../open-change-management-specification/overview)**

**When the runtime check is completed, you will find some additional information in the status field of the ChangeWorkload resource**
- Run the command
```sh
kubectl get changeworkload -o yaml
```
- Observe the output
```yaml
apiVersion: v1
items:
  - apiVersion: app.ops.cloud.alipay.com/v1alpha1
    kind: ChangeWorkload
    metadata: ...
    spec: ...
    status:
      defenseCheckPassPods:
        - app: sleep
          hostName: sleep-5c698f4449-fsb27
          ip: 10.244.1.198
          namespace: default
          pod: sleep-5c698f4449-fsb27
          workSpace: default
        - app: sleep
          hostName: sleep-5c698f4449-gttrk
          ip: 10.244.1.201
          namespace: default
          pod: sleep-5c698f4449-gttrk
          workSpace: default
        - app: sleep
          hostName: sleep-5c698f4449-8q79v
          ip: 10.244.1.202
          namespace: default
          pod: sleep-5c698f4449-8q79v
          workSpace: default
        - app: sleep
          hostName: sleep-5c698f4449-mllt2
          ip: 10.244.1.199
          namespace: default
          pod: sleep-5c698f4449-mllt2
          workSpace: default
        - app: sleep
          hostName: sleep-5c698f4449-qv24p
          ip: 10.244.1.200
          namespace: default
          pod: sleep-5c698f4449-qv24p
          workSpace: default
      entryTime: "2023-05-11 15:46:15"
      entryTimeUnix: 1683791175
      status: Success
      updateTime: "2023-05-11 15:46:19"
      updateTimeUnix: 1683791179
kind: List
metadata:
  resourceVersion: ""
```
- defenseCheckPassPods: represents the list of Pods that have completed the run detection and have passed the AlterShield Operator detection.
- When the number of Pods in defenseCheckPassPods reaches the replicas number in the deployment, the AlterShield Operator will set the **status** field of the **ChangeWorkload** resource to **Success**, indicating that the current version has been successfully released.
## 6. Observe the ChangePod CR resources in the cluster
- Run the command:
```sh
kubectl get changepods | grep sleep
```
- Observe the output:
```
NAME                                               STATUS        MESSAGE     CREATETIME
sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--1   ExecuteDone   PreFailed   2023-05-11 15:46:13
sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--2   ExecuteDone   PreFailed   2023-05-11 15:46:14
sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--3   ExecuteDone   PreFailed   2023-05-11 15:46:14
sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--4   ExecuteDone   PreFailed   2023-05-11 15:46:15
sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--5   ExecuteDone   PreFailed   2023-05-11 15:46:15
```
- The AlterShield Operator has created 5 **ChangePod** resources for version **c6c45d23c098bdf181853a85b60b5d74** of deployment sleep.
- By default, the AlterShield Operator creates a **ChangePod** resource for each Pod in the deployment.
- The name format of the ChangePod resource is **{deployment name}--x--{version}--x--{index}**.
- The **status** field of the ChangePod resource is **ExecuteDone**, indicating that the run detection has been completed.
- The **message** field of the ChangePod resource is **PreFailed**, indicating that the detection failed to perform (requires configuring the[Open Change Management Specification](../open-change-management-specification/overview)）
- A failed execution does not necessarily mean a failed release. Only if an Pod exception is detected during the detection, it will be considered a release failure.

**In the current scenario, all ChangePods failed to execute, and no exceptions were found. The reason why the ChangeWorkload regards the release as successful is that it assumes all Pods have passed the detection.**

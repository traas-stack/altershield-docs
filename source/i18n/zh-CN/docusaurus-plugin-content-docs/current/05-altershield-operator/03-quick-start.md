# 快速入门
本文档介绍如何快速运行 AlterShield Operator 服务
## Getting Started
您在运行 AlterShield Operator 服务之前，需要阅读以下文档：
- [入门指南](./getting-started)

## 运行本地服务
### 1. 安装依赖:
```sh
go mod tidy
```
### 2. 将crd自定义资源注册到k8s集群中:
```sh
kubectl apply -f config/crd/bases
```
### 3. 使用以下命令启动本地服务:
**需要设置环境变量ENVIRONMENT=DEV**
```sh
ENVIRONMENT=DEV make run
```
- 当您看到以下日志时，表示服务已经启动成功
```
{"level":"info","ts":"2023-05-10T14:44:33.604+0800","caller":"controller/controller.go:241","msg":"Starting workers","controller":"deployment","controllerGroup":"apps","controllerKind":"Deployment","worker count":5}
{"level":"info","ts":"2023-05-10T14:44:33.604+0800","caller":"controller/controller.go:241","msg":"Starting workers","controller":"changepod","controllerGroup":"app.ops.cloud.alipay.com","controllerKind":"ChangePod","worker count":20}
{"level":"info","ts":"2023-05-10T14:44:33.604+0800","caller":"controller/controller.go:241","msg":"Starting workers","controller":"pod","controllerGroup":"","controllerKind":"Pod","worker count":5}
{"level":"info","ts":"2023-05-10T14:44:33.605+0800","caller":"controller/controller.go:241","msg":"Starting workers","controller":"changeworkload","controllerGroup":"app.ops.cloud.alipay.com","controllerKind":"ChangeWorkload","worker count":5}
```
## 首次测试部署
### 1. 将default命名空间设置为被管控
```sh
kubectl label namespace default admission-webhook-altershield=enabled
```
看到以下日志时，表示设置成功：
```
namespace/default labeled
```
### 2. 创建一个Deployment资源 sleep
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
- 当您看到以下日志时，表示部署成功
```
deployment.apps/sleep created
```
### 3. 检测是否部署成功
```sh
kubectl get pods
```
- 当您看到有5个sleep的pod running时，表示部署成功
```
NAME                     READY   STATUS    RESTARTS   AGE
sleep-5c698f4449-5m5g4   1/1     Running   0          2m
sleep-5c698f4449-ctfd5   1/1     Running   0          2m
sleep-5c698f4449-jkv5r   1/1     Running   0          2m
sleep-5c698f4449-rjgkn   1/1     Running   0          2m
sleep-5c698f4449-7q9q2   1/1     Running   0          2m
```
## 自愈回滚
### 1. 有意设置为错误的镜像，并修改label test
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
- 重新apply sleep.yaml
```sh
kubectl apply -f config/samples/sleep.yaml
```
- 当您看到以下日志时，表示部署成功
```
deployment.apps/sleep configured
```
### 2. 再次检测sleep deployment的pod状态
```sh
kubectl get pods
```
- 此时您会发现sleep deployment的pod状态有4个running，3个ErrImagePull，这是由于deployment设置错误的镜像并且采用了滚动发布，导致部分pod的状态异常
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
### 3. 观察回滚状态
- 当pod状态异常超过阈值时间（默认2分钟）后，AlterShield Operator会自动回滚deployment到上一个正常版本（如果存在）
```sh
kubectl get pods
```
- 等待阈值时间后，您会发现sleep deployment的pod状态全部为running
```
NAME                     READY   STATUS    RESTARTS   AGE
sleep-5c698f4449-5m5g4   1/1     Running   0          3m49s
sleep-5c698f4449-ctfd5   1/1     Running   0          3m49s
sleep-5c698f4449-jkv5r   1/1     Running   0          3m49s
sleep-5c698f4449-rjgkn   1/1     Running   0          3m49s
sleep-5c698f4449-7q9q2   1/1     Running   0          1m49s
```
### 4. 版本回滚
```sh
kubectl get deployment sleep -o yaml
```
- 当前deployment的template镜像为busybox，并且test标签为"123"
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
# 使用指南
本文档介绍了 AlterShield Operator 的使用指南。

## 入门指南
**您在运行 AlterShield Operator 之前，需要阅读以下文档：**
- [Quick Deploy](./quick-deploy) 并在集群上运行

**您在使用 AlterShield Operator 之前，需要了解以下概念：**
- [CustomResourceDefinition](https://kubernetes.io/docs/reference/kubernetes-api/extend-resources/custom-resource-definition-v1/)
- [Webhook Mode](https://kubernetes.io/docs/reference/access-authn-authz/webhook/)

## AlterShield Operator 基本原理
- AlterShield Operator中基于Kubernetes的Webhook机制与Watch机制实现了对Kubernetes资源的监控。
- 定义两个全新的CRD资源：ChangeWorkload与ChangePod，用于定义对Workload资源与Pod资源的监测信息。
- 当集群中的Deployment资源发生变化时，AlterShield Operator对变化的资源进行检测，如果检测到异常，则会对异常资源未来变更拦截，同时触发自愈回滚。

**接下来，尝试进一步使用 AlterShield Operator**
## 1. 创建一个 Deployment 资源 sleep
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
- 执行命令
```sh
kubectl apply -f config/samples/sleep.yaml
```
- 当您看到以下日志时，表示完成部署
```
deployment.apps/sleep created
```
## 2. 检测是否部署成功
- 执行命令
```sh
kubectl get pods
```
- 当您看到有5个sleep的pod running时，表示部署成功
```
NAME                     READY   STATUS    RESTARTS   AGE
sleep-5c698f4449-8q79v   1/1     Running   0          2m
sleep-5c698f4449-fsb27   1/1     Running   0          2m
sleep-5c698f4449-gttrk   1/1     Running   0          2m
sleep-5c698f4449-mllt2   1/1     Running   0          2m
sleep-5c698f4449-qv24p   1/1     Running   0          2m
```
## 3. 观察集群中Deployment sleep的yaml
- 执行命令
```sh
kubectl get deployment sleep -o yaml
```
- 与[Quick-Start](./quick-start)中Running Local Sever不同，您会发现在集群中的 Deployment sleep 的yaml中多了两个Label
```yaml
apiVersion: v1
items:
  - apiVersion: apps/v1
    kind: Deployment
    metadata:
      annotations:
        deployment.kubernetes.io/revision: "6"
        kubectl.kubernetes.io/last-applied-configuration: ...(此处省略)
      creationTimestamp: ...(此处省略)
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
        spec: ...(此处省略)
    status:
      availableReplicas: 5
      conditions:
        - lastTransitionTime: ...(此处省略)
        - lastTransitionTime: ...(此处省略)
      readyReplicas: 5
      replicas: 5
      updatedReplicas: 5
kind: List
metadata:
  resourceVersion: ""
```
- 发现在deployment的metadata.labels中多了一个`admission-webhook-altershield.antgroup.com/version`
- 发现在deployment的spec.template.metadata.labels中多了一个`admission-webhook-altershield.antgroup.com/version`

这是AlterShield Operator为deployment所添加，用于标识您的deployment经过AlterShield Operator处理并依据template生成版本号。
## 4. 观察集群中ChangeWorkload CR资源
- 执行命令
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
- 发现AlterShield Operator为deployment sleep的 **c6c45d23c098bdf181853a85b60b5d74** 版本创建了一个 **ChangeWorkload** 资源 **sleep--x--c6c45d23c098bdf181853a85b60b5d74**
## 5. 等待AlterShield Operator完成运行检测

**运行检测详情请参考[Open Change Management Specification](../open-change-management-specification/overview)**

**当运行检测完成后，您会发现 **ChangeWorkload** 资源的 **status** 字段中多了一些内容**
- 执行命令
```sh
kubectl get changeworkload -o yaml
```
- 观察输出
```yaml
apiVersion: v1
items:
  - apiVersion: app.ops.cloud.alipay.com/v1alpha1
    kind: ChangeWorkload
    metadata: ...(此处省略)
    spec: ...(此处省略)
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
- defenseCheckPassPods: 代表已经完成了运行检测并且通过AlterShield Operator检测的Pod列表
- 当defenseCheckPassPods中的Pod数量达到deployment的replicas数量时，AlterShield Operator会将 **ChangeWorkload** 资源的 **status** 字段设置为 **Success**，表示当前版本已经成功发布
## 6. 观察集群中ChangePod CR资源
- 执行命令
```sh
kubectl get changepods | grep sleep
```
- 观察输出
```
NAME                                               STATUS        MESSAGE     CREATETIME
sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--1   ExecuteDone   PreFailed   2023-05-11 15:46:13
sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--2   ExecuteDone   PreFailed   2023-05-11 15:46:14
sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--3   ExecuteDone   PreFailed   2023-05-11 15:46:14
sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--4   ExecuteDone   PreFailed   2023-05-11 15:46:15
sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--5   ExecuteDone   PreFailed   2023-05-11 15:46:15
```
- AlterShield Operator为deployment sleep的 **c6c45d23c098bdf181853a85b60b5d74** 版本创建了5个 **ChangePod** 资源
- 默认情况下，AlterShield Operator会为每个deployment的每个Pod创建一个 **ChangePod** 资源
- ChangePod资源的名称格式为 **{deployment名称}--x--{版本号}--x--{序号}**
- ChangePod资源的 **status** 字段为 **ExecuteDone** 代表已经完成了运行检测
- ChangePod资源的 **message** 字段为 **PreFailed** 代表执行检测失败（需完成配置[Open Change Management Specification](../open-change-management-specification/overview)）
- 执行失败并不会认为是发布失败，只有检测时发现Pod异常才会认为是发布失败

**当前场景中，ChangePod都是执行失败，未发现异常；在ChangeWorkload中认为发布成功的原因是认为所有Pod都通过了检测**

# 高级功能
本文档介绍了 AlterShield Operator 的高级功能。

## 1. AlterShield Operator 中 CRD 
**目前 AlterShield Operator 中定义有三个crd，分别是：**
  - opsconfiginfoes.app.ops.cloud.alipay.com (简称 opsconfiginfoes)
  - changeworkloads.app.ops.cloud.alipay.com (简称 changeworkloads)
  - changepods.app.ops.cloud.alipay.com (简称 changepods)

**yaml文件保存在 config/crd/bases 目录下**
### 1.1 opsconfiginfoes
**opsconfiginfoes 是用于配置 AlterShield Operator 的配置信息**
- 执行以下命令查看 opsconfiginfoes
````sh
kubectl get opsconfiginfo -n altershieldoperator-system
````
- 存在两个配置信息，分别是：
````
NAME       AGE
blocking   25h
branch     25h
````
#### 1.1.1 阻断配置
**当经过 AlterShield 对 pod 进行检测后，如果出现异常，AlterShield Operator 会根据阻断配置信息对 pod 进行阻断。**
- 执行以下命令查看 blocking 配置信息
````sh
kubectl get opsconfiginfo blocking -n altershieldoperator-system -o yaml
````
- blocking 配置信息内容如下：
````
apiVersion: app.ops.cloud.alipay.com/v1alpha1
kind: OpsConfigInfo
metadata:
  creationTimestamp: "2023-05-11T07:29:49Z"
  generation: 1
  name: blocking
  namespace: altershieldoperator-system
  resourceVersion: "197897"
  uid: 213514db-33d0-4289-8d56-e3dea227e9c1
spec:
  enable: true
  remark: 是否开启阻断
  type: isBlockingUp
````
- .spec.type 为 isBlockingUp，表示是否开启阻断
- .spec.enable 为 true，表示**开启**阻断(默认配置)
##### 说明
- 可以手动将 .spec.enable 设置为 false，表示关闭阻断
- 当 .spec.enable 为 false 时，当出现异常时，不会阻断deployment的正常发布
- 已经阻断的deployment，当 .spec.enable 为 false 时，不会恢复正常发布
#### 1.1.2 批量防控配置
**ChangePod 会对 pod 信息上报到 AlterShield，此处配置是否开启批量防控，当关闭时，每个ChangePod中将有且仅有一个pod的信息。当开启时，每个ChangePod中将有多个pod的信息（建设中）**
- 执行以下命令查看 branch 配置信息
````sh
kubectl get opsconfiginfo branch -n altershieldoperator-system -o yaml
````
- branch 配置信息内容如下：
````
apiVersion: app.ops.cloud.alipay.com/v1alpha1
kind: OpsConfigInfo
metadata:
  creationTimestamp: "2023-05-11T07:29:50Z"
  generation: 1
  name: branch
  namespace: altershieldoperator-system
  resourceVersion: "197898"
  uid: 2d18dc78-f65f-484c-8f7b-ea5e87c83fe2
spec:
  content: "10"
  enable: false
  remark: 是否开启批量防控
  type: isBranch
````
- .spec.type 为 isBranch，表示是否开启批量防控
- .spec.enable 为 false，表示**关闭**批量防控(默认配置)
- .spec.content 为 10，表示批量防控的阈值为 10
##### 说明
- 暂时不能手动将 .spec.enable 设置为 true
### 1.2 changeworkloads
**changeworkloads 是映射集群中变更的workload，目前支持Deployment**

![changeworkload-status.png](changeworkload-status.png)

**changeworkload中存在如图所示的状态，分别是：**
- Init：初始化状态，当有新的被管控的Workload创建时，会进入该状态。
- - 处于该状态时，上报到AlterShield成功（建设中，默认成功），会进入Running状态
- - 处于该状态时，上报到AlterShield失败（建设中），会进入Failed状态
- Running：运行中状态。
- - 处于该状态时，如果Finished的pod个数达到阈值（默认不开启批量，个数为1），会创建一个ChangePod
- Failed：失败状态。
- - 将不对当前版本进行检测，直到版本变更后，新的changeworkload重新进入Init状态。
- TimeOutPreThreshold：阈值前超时状态。
- - AlterShield Operator的配置[批量防控配置](./advanced-usage#112-批量防控配置)-FALSE，
    当workload处于Running状态时，如果在达到阈值时间前（默认1分钟）处于Finished的pod还未达到1个，会进入该状态
- - AlterShield Operator的配置[批量防控配置](./advanced-usage#112-批量防控配置)-TRUE，
    当workload处于Running状态时，如果在达到阈值时间前（默认1分钟）处于Finished的pod还未达到配置的个数（默认10个），会进入该状态
- Success：成功状态。
- - 当所有Pod均处于Finished状态时，并且所有Pod均通过AlterShield检测，会进入该状态
- - 当防控时未能成功上报到AlterShield，也会认为通过，只有明确返回异常时，才会进入表示未通过
- - 当有成功状态的changeworkload时，会将历史版本的changeworkload资源删除
- Suspend：暂停状态。
- - 当所有Pod均处于Finished状态时，并且存在Pod未通过AlterShield检测，会进入该状态
- - 当changeworkload处于Suspend状态时，将会对后续正常发布的Workload资源进行阻断，可以通过修改[阻断配置](./advanced-usage#111-阻断配置)来关闭阻断
### 1.3 changepods
**changepods 是映射集群中变更的pod，一个changepod对应至少一个pod**
## 2. 发布阻断与修复
### 修改changePod状态，模拟异常情况
#### 当未配置接入管控端时，暂时只能手动模拟异常情况
- 执行命令
```sh
kubectl get changepods sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--1 -o yaml
```
- 观察输出
```yaml
apiVersion: app.ops.cloud.alipay.com/v1alpha1
kind: ChangePod
metadata:
  creationTimestamp: "2023-05-11T07:46:13Z"
  generation: 2
  labels:
    admission-webhook-altershield.antgroup.com/version: c6c45d23c098bdf181853a85b60b5d74
    app.kubernetes.io/deployment-name: sleep
  name: sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--1
  namespace: default
  ownerReferences:
  - apiVersion: app.ops.cloud.alipay.com/v1alpha1
    blockOwnerDeletion: true
    controller: true
    kind: ChangeWorkload
    name: sleep--x--c6c45d23c098bdf181853a85b60b5d74
    uid: a9b8b77c-ebaa-48d7-915f-bb8c02f5ce91
  resourceVersion: "199426"
  uid: 09907f64-4eb8-47da-b46d-5ac0427ebf80
spec:
  changeWorkloadId: sleep--x--c6c45d23c098bdf181853a85b60b5d74
  createTime: "2023-05-11 15:46:13"
  createTimeUnix: 1683791173
  podInfos:
  - app: sleep
    hostName: sleep-5c698f4449-fsb27
    ip: 10.244.1.198
    namespace: default
    pod: sleep-5c698f4449-fsb27
    workSpace: default
status:
  message: PreFailed
  status: ExecuteDone
  updateTime: "2023-05-11 15:46:17"
  updateTimeUnix: 1683791177
```
- 获取.spec.podInfos字段并修改status内容
```sh
kubectl patch changepod --subresource=status sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--1 -p '{"status":{"podResults":[{"app":"sleep","hostName":"sleep-5c698f4449-fsb27","ip":"10.244.1.198","namespace":"default","pod":"sleep-5c698f4449-fsb27","workSpace":"default","verdict":"unpass","message":"find error"}], "message": "PostFinish"}}' --type merge
```
- 重新观察ChangePod与ChangeWorkload资源
```sh
kubectl get changepods
kubectl get changeworkloads
kubectl get changeworkloads -o yaml
kubectl get deployment sleep -o yaml
```
```
NAME                                               STATUS        MESSAGE      CREATETIME
sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--1   ExecuteDone   PostFinish   2023-05-11 15:46:13
sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--2   ExecuteDone   PreFailed    2023-05-11 15:46:14
sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--3   ExecuteDone   PreFailed    2023-05-11 15:46:14
sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--4   ExecuteDone   PreFailed    2023-05-11 15:46:15
sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--5   ExecuteDone   PreFailed    2023-05-11 15:46:15
---
NAME                                         STATUS    CREATETIME
sleep--x--c6c45d23c098bdf181853a85b60b5d74   Suspend   2023-05-11 15:46:12
---
apiVersion: v1
items:
- apiVersion: app.ops.cloud.alipay.com/v1alpha1
  kind: ChangeWorkload
  metadata: ...(略)
  spec: ...(略)
  status:
    ...(略)
    defenseCheckFailPods:
    - app: sleep
      hostName: sleep-5c698f4449-fsb27
      ip: 10.244.1.198
      message: find error
      namespace: default
      pod: sleep-5c698f4449-fsb27
      verdict: unpass
      workSpace: default
kind: List
metadata:
  resourceVersion: ""
---
apiVersion: apps/v1
kind: Deployment
metadata:
  ...(略)
  labels:
    admission-webhook-altershield.antgroup.com/version: c6c45d23c098bdf181853a85b60b5d74
    altershield.defense.antgroup.com/defense-status: processed
    altershield.defense.antgroup.com/suspend: "1683791175"
    app: sleep
  name: sleep
  namespace: default
spec: ...(略)
status: ...(略)
```
- ChangePod资源的 **status** 字段为 **ExecuteDone** 代表已经完成了运行检测
- ChangePod资源的 **message** 字段为 **PostFinish** 代表执行检测成功
- ChangeWorkload资源的 **status** 字段为 **Suspend** 代表发布发现异常，已经暂停后续发布
- ChangeWorkload资源的 **status.defenseCheckFailPods** 中包含了所有检测失败的Pod信息
- Deployment资源的 **labels.altershield.defense.antgroup.com/suspend** 字段为 **1683791175** 代表暂停发布的时间戳
### 修改Deployment资源，模拟正常发布
- 执行命令
```sh
kubectl patch deployment sleep -p '{"spec":{"template":{"metadata":{"labels":{"test":"test"}}}}}' --type merge
```
- 将会触发Webhook的拦截
```
Error from server (deployment sleep is suspended): admission webhook "vdeployment.kb.io" denied the request: deployment sleep is suspended
```
- 此时发布已经被暂停，需要进行修复后才能继续正常发布
### 修改Deployment资源，模拟修复发布
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: sleep
  labels:
    app: sleep
    altershield.defense.antgroup.com/ignored-suspend: "true"
spec:
  replicas: 5
  selector:
    matchLabels:
      app: sleep
  template:
    metadata:
      labels:
        app: sleep
        test: "1234"
    spec:
      containers:
        - name: sleep
          image: busybox
          command: ["/bin/sleep","infinity"]
          imagePullPolicy: IfNotPresent
```
- 执行命令
```sh
kubectl apply -f ./config/samples/sleep.yaml
```
- 命令执行成功
```
deployment.apps/sleep configured
```
- 修复sleep Deployment资源，需添加 **altershield.defense.antgroup.com/ignored-suspend** 字段
- 将会忽略拦截功能，进入发布流程
### 查看ChangeWorkload资源
- 执行命令
```sh
kubectl get changeworkloads
```
- 此时同时存在两个版本的ChangeWorkload资源
```
NAME                                         STATUS    CREATETIME
sleep--x--6a8ff823a5011291b0f02a1d83c2222d   Running   2023-05-12 14:24:12
sleep--x--c6c45d23c098bdf181853a85b60b5d74   Suspend   2023-05-12 11:02:28
```
- 等待一段时间后，执行命令
```sh
kubectl get changeworkloads
```
- 此时只存在一个最新Success版本的ChangeWorkload资源
```
NAME                                         STATUS    CREATETIME
sleep--x--6a8ff823a5011291b0f02a1d83c2222d   Success   2023-05-12 14:24:12
```
- 再次修改Deployment资源，模拟正常发布
```sh
kubectl patch deployment sleep -p '{"spec":{"template":{"metadata":{"labels":{"test":"test"}}}}}' --type merge
```
- 发现正常发布成功
```
deployment.apps/sleep patched
```
## 3. 自愈回滚
### Deployment未能正常发布
- 见Quick Start中文档 [self-healing-rollback](./quick-start#self-healing-rollback)
#### 触发当前自愈回滚功能前提条件
- 1. 发布过程中，Pod未能正常启动**（未达到Running状态）**超过阈值时间（默认2分钟）
- 2. Deployment资源的发布策略为默认状态 **RollingUpdate** 不能为 **Recreate**
- 3. 当前Deployment处于同时存在两个ReplicaSet的运行，且旧版本的ReplicaSet处于 **正常** 状态
- 4. 当达到阈值时间后，会认为当前发布失败，触发自愈回滚功能，将会回滚到旧版本的ReplicaSet
### Deployment正常发布（建设中）
- 见场景 [2-发布阻断与修复](./advanced-usage#2-发布阻断与修复)
#### 触发当前自愈回滚功能说明
- 1. 发布过程中，Pod正常启动**（达到Running状态）**，Deployment资源发布成功
- 2. Deployment资源的发布策略 **不做限制**
- 3. Deployment历史版本中存在成功发布的版本**（ChangeWorkload为Success）**
- 4. ChangePod资源与AlterShield中发现其中存在检测**未通过**的Pod信息
- 5. 当前版本的ChangeWorkload资源处于 **Suspend** 状态，会认为当前发布异常，触发自愈回滚功能
- 6. 将会回滚到历史版本中最新的成功发布的版本
#### 待定的相关说明
- 1. 触发时机：见文档 [异常Deployment的正常发布](./advanced-usage#修改deployment资源模拟正常发布)，当发现异常时会阻止正常的发布并放行修复性的发布，所以会将以接口的形式暴露出来，供用户手动触发
- 2. 历史版本：目前主要是采用Deployment的ReplicaSet的版本来进行判断，但是这个版本只能保留部分，未必能够满足用户的需求，所以会考虑增加历史版本的功能，可以自定义保留的版本数量

# 总体设计
本文档介绍了 AlterShield Operator 的总体设计。

## 1. 源码目录结构
AlterShield Operator 的源码目录结构如下：
```
./apis/
./bin/
./certs/
./config/
./controllers/
./routers/
./main.go
./Makefile
````
- `apis/`：存放自定义CRD（Custom Resource Definition）的API以及与Kubernetes原生API相关的结构体定义。
- `bin/`：存放AlterShield Operator的可执行文件。
- `certs/`：存放AlterShield Operator的证书文件，用于本地调试Webhook。
- `config/`：存放AlterShield Operator的配置文件。
- `controllers/`：存放AlterShield Operator的控制器代码。
- `routers/`：存放AlterShield Operator与AlterShield Server之间通信的路由代码。
- `runnable/`：存放AlterShield Operator的后台任务代码。
- `main.go`：AlterShield Operator 的入口文件。
- `Makefile`：AlterShield Operator 的编译文件。
## 2. 架构设计
### 2.1. 设计目标
AlterShield Operator 作为一个 Kubernetes Operator，其主要功能是通过监听 Kubernetes 中的 CRD，并通过与 AlterShield Server 之间的通信，来实现对 Workload 的管控。具体来说，AlterShield Operator 的设计目标如下：
#### 2.1.1. 版本确认与发板控制
- 通过 Webhook 的方式，对 Kubernetes 中的 Workload 进行版本确认与发板控制。当用户提交新的 Workload 版本时，AlterShield Operator 会通过 Webhook 发送请求，与 AlterShield Server 进行版本确认和发板控制，以确保用户提交的版本符合安全规范，并且可以正确部署到 Kubernetes 集群中。
#### 2.1.2. 实时监控
- 通过 Watch 的方式，对 Kubernetes 中的 Workload 与 Pod 进行实时监控。当 Kubernetes 中的 Workload 或 Pod 发生变化时，AlterShield Operator 会及时检测并处理，以确保 Kubernetes 集群中的 Workload 和 Pod 状态与 AlterShield Server 保持同步。
#### 2.1.3. 发布状态汇总
- 通过维护 ChangeWorkload，来实现汇总 Kubernetes 中的 Workload 的发布状态。当用户提交新的 Workload 版本时，AlterShield Operator 会将其状态记录到 ChangeWorkload 中，并且定期向 AlterShield Server 发送请求，以更新 Workload 的发布状态。这样一来，用户可以方便地查看 Workload 的发布状态和变化历史。
#### 2.1.4. 发布状态校验
- 通过维护 ChangePod 并与 AlterShield Server 之间的通信，来实现对 Kubernetes 中的 Pod 的发布状态的校验。当 Kubernetes 中的 Pod 发生变化时，AlterShield Operator 会检测其状态，并通过与 AlterShield Server 的通信，来验证其发布状态是否正确。
#### 2.1.5. 配置更新
- 通过变更 OpsConfigInfo，来实现 Operator 的配置更新。当用户需要修改 AlterShield Operator 的配置时，可以通过修改 OpsConfigInfo 中的参数来实现。AlterShield Operator 会及时检测到参数的变化，并相应地更新其配置，以达到用户设定的效果。
### 2.2. 系统组件
AlterShield Operator 由以下几个部分组成：
- Controller：负责监听 Kubernetes 中的 CR与自定义的 CRD，并进行相应的处理。
- Webhook：负责对 Kubernetes 中的 Workload 进行版本确认与发板控制。
- Router：负责与 AlterShield Server 之间的回调处理。
- Runnable：负责后台任务异步。
### 2.3. 运行流程
AlterShield Operator 的运行流程如下：
![img.png](img.png)
Operator Controller 间的关系如下：
![img_1.png](controller.png)
- 1. Webhook 监听 Kubernetes 中的 Deployment，如果 Deployment 的 Template 发生变更，更新 Deployment 的 Version Label，并判断是否阻断发布。Version Label 是一个用于标记 Deployment 版本的 Label，每当 Deployment 的 Template 发生变更时，Version Label 的值也会随之更新，这个 Label 用于帮助 AlterShield Operator 进行版本控制和管理。
- 2. Deployment Controller 监听 Kubernetes 中的 Deployment，并创建对应版本的 ChangeWorkload。ChangeWorkload 是 AlterShield Operator 中的一个自定义资源类型，用于记录 Deployment 的版本变更历史。当 Deployment 的 Template 发生变更时，Deployment Controller 会创建一个新的 ChangeWorkload，用于记录新版本的 Deployment 信息。
- 3. Pod Controller 监听 Kubernetes 中的 Pod，并判断当前是否为已完成发布的 Pod，如果是，则添加 Finished Label。Finished Label 是一个用于标记已完成发布的 Pod 的 Label，可以帮助 AlterShield Operator 定位已完成发布的 Pod，并计算已完成发布的 Pod 数量。
- 4. ChangeWorkload Controller 监听 Kubernetes 中的 ChangeWorkload 和已完成发布的 Pod，当 Finished Pod 达到阈值时，创建 Init 状态的 ChangePod。ChangePod 是 AlterShield Operator 中的另一个自定义资源类型，用于记录发布的 Pod 的状态和回调结果。当已完成发布的 Pod 数量达到阈值时，ChangeWorkload Controller 会创建一个 Init 状态的 ChangePod，将来会把Pod信息传递给 AlterShield Server。
- 5. ChangePod Controller 监听 Kubernetes 中的 ChangePod，当 ChangePod 的状态为 Init 时，挑选不超过阈值个数的 Finished Pod，并将信息传递给 AlterShield Server，通过 Router 和 CallBack Handle 实现回调功能。ChangePod Controller 会监听 AlterShield Server 的回调结果，并根据回调结果更新 ChangePod 的状态。
- 6. ChangePod Controller 监听 Kubernetes 中的 ChangePod，当 ChangePod 的状态为 Callback Finished 时，根据回调结果更新 ChangePod 的状态，并将 ChangePod 的状态更新为 Done。并将该信息发送给 ChangeWorkload Controller。
- 7. ChangeWorkload Controller 监听 Kubernetes 中的 ChangeWorkload 和 Done ChangePod，根据 ChangePod 的状态更新 ChangeWorkload 的状态，判断是否阻断发布。如果所有的 ChangePod 中Pod的状态均通过校验，ChangeWorkload Controller 将会将 ChangeWorkload 的状态更新为 Success，否则将更新为 Suspend。
- 8. Rollback Runnable 检查 Kubernetes 中的 Pod，如果发现 Pod 长时间（默认2分钟）未达到 Running 状态，则触发 Rollback 机制。Rollback Runnable 是 AlterShield Operator 中一个用于检查 Pod 状态的后台任务，如果发现 Pod 长时间处于非 Running 状态，则会触发自动回滚操作，确保 Kubernetes 集群的稳定性。
- 9. Rollback Runnable 监听 Kubernetes 中的 ChangeWorkload，当 ChangeWorkload 的状态为 Rollback 时，触发 Rollback 机制。Rollback Runnable 还会监听 ChangeWorkload 的状态，如果发现 ChangeWorkload 的状态为 Rollback，则会触发自动回滚操作，确保 Kubernetes 集群的稳定性。（建设中）
## 3. Webhook 调试
### 3.1. 本地调试
**本文将以 [MINIKUBE](https://minikube.sigs.k8s.io/) 为例，介绍如何在本地调试 Webhook。**
- 1. Start MiniKube
```shell
minikube start --driver=docker
```
- 2. use minikube ssh to confirm connectivity
```shell
minikube ssh
```
- 3. Get the IP address that is accessible from the cluster to the host
```
# ping host.minikube.internal
PING host.minikube.internal (192.168.64.1): 56 data bytes
64 bytes from 192.168.64.1: seq=0 ttl=64 time=0.225 ms
```
- 4. `192.168.64.1` is the IP address that is accessible from the cluster to the host，修改 `config/dev/kustomization.yaml` 中的 `{IP_Address}` 为 `192.168.64.1`
```yaml
bases:
  - ../default

patches:
  - patch: |
      - op: "remove"
        path: "/spec/dnsNames"
    target:
      kind: Certificate
  - patch: |
      - op: "add"
        path: "/spec/ipAddresses"
        value: ["{IP_Address}"]
    target:
      kind: Certificate
  - patch: |
      - op: "add"
        path: "/webhooks/0/clientConfig/url"
        value: "https://{IP_Address}:1443/mutate-apps-v1-deployment"
    target:
      kind: MutatingWebhookConfiguration
  - patch: |
      - op: "add"
        path: "/webhooks/0/clientConfig/url"
        value: "https://{IP_Address}:1443/validate-apps-v1-deployment"
    target:
      kind: ValidatingWebhookConfiguration
  - patch: |
      - op: "remove"
        path: "/webhooks/0/clientConfig/service"
    target:
      kind: MutatingWebhookConfiguration
  - patch: |
      - op: "remove"
        path: "/webhooks/0/clientConfig/service"
    target:
      kind: ValidatingWebhookConfiguration
```
- 6. 修改完成后，执行部署调试版本命令
```shell
make dev
```
- 7. 通过以下命令，查看 Webhook 是否部署成功
```shell
kubectl get mutatingwebhookconfigurations.admissionregistration.k8s.io altershieldoperator-mutating-webhook-configuration -o yaml
kubectl get validatingwebhookconfigurations.admissionregistration.k8s.io altershieldoperator-validating-webhook-configuration -o yaml
```
```yaml
apiVersion: admissionregistration.k8s.io/v1
kind: MutatingWebhookConfiguration
metadata:
  annotations:
    cert-manager.io/inject-ca-from: altershieldoperator-system/altershieldoperator-serving-cert
    kubectl.kubernetes.io/last-applied-configuration: |
      {"apiVersion":"admissionregistration.k8s.io/v1","kind":"MutatingWebhookConfiguration","metadata":{"annotations":{"cert-manager.io/inject-ca-from":"altershieldoperator-system/altershieldoperator-serving-cert"},"labels":{"app.kubernetes.io/component":"webhook","app.kubernetes.io/created-by":"altershieldoperator","app.kubernetes.io/instance":"mutating-webhook-configuration","app.kubernetes.io/managed-by":"kustomize","app.kubernetes.io/name":"mutatingwebhookconfiguration","app.kubernetes.io/part-of":"altershieldoperator"},"name":"altershieldoperator-mutating-webhook-configuration"},"webhooks":[{"admissionReviewVersions":["v1"],"clientConfig":{"url":"https://192.168.65.2:1443/mutate-apps-v1-deployment"},"failurePolicy":"Fail","name":"mdeployment.kb.io","namespaceSelector":{"matchLabels":{"admission-webhook-altershield":"enabled"}},"rules":[{"apiGroups":["apps"],"apiVersions":["v1"],"operations":["CREATE","UPDATE"],"resources":["deployments"]}],"sideEffects":"None"}]}
  creationTimestamp: "2023-05-11T07:29:29Z"
  generation: 2
  labels:
    app.kubernetes.io/component: webhook
    app.kubernetes.io/created-by: altershieldoperator
    app.kubernetes.io/instance: mutating-webhook-configuration
    app.kubernetes.io/managed-by: kustomize
    app.kubernetes.io/name: mutatingwebhookconfiguration
    app.kubernetes.io/part-of: altershieldoperator
  name: altershieldoperator-mutating-webhook-configuration
  resourceVersion: "197855"
  uid: 1b417fb7-2deb-47c1-a006-67a352a90d2e
webhooks:
  - admissionReviewVersions:
      - v1
    clientConfig:
      caBundle: ...(略)
      url: https://192.168.64.1:1443/mutate-apps-v1-deployment
    failurePolicy: Fail
    matchPolicy: Equivalent
    name: mdeployment.kb.io
    namespaceSelector:
      matchLabels:
        admission-webhook-altershield: enabled
    objectSelector: {}
    reinvocationPolicy: Never
    rules:
      - apiGroups:
          - apps
        apiVersions:
          - v1
        operations:
          - CREATE
          - UPDATE
        resources:
          - deployments
        scope: '*'
    sideEffects: None
    timeoutSeconds: 10
---
apiVersion: admissionregistration.k8s.io/v1
kind: ValidatingWebhookConfiguration
metadata:
  annotations:
    cert-manager.io/inject-ca-from: altershieldoperator-system/altershieldoperator-serving-cert
    kubectl.kubernetes.io/last-applied-configuration: |
      {"apiVersion":"admissionregistration.k8s.io/v1","kind":"ValidatingWebhookConfiguration","metadata":{"annotations":{"cert-manager.io/inject-ca-from":"altershieldoperator-system/altershieldoperator-serving-cert"},"labels":{"app.kubernetes.io/component":"webhook","app.kubernetes.io/created-by":"altershieldoperator","app.kubernetes.io/instance":"validating-webhook-configuration","app.kubernetes.io/managed-by":"kustomize","app.kubernetes.io/name":"validatingwebhookconfiguration","app.kubernetes.io/part-of":"altershieldoperator"},"name":"altershieldoperator-validating-webhook-configuration"},"webhooks":[{"admissionReviewVersions":["v1"],"clientConfig":{"url":"https://192.168.65.2:1443/validate-apps-v1-deployment"},"failurePolicy":"Fail","name":"vdeployment.kb.io","namespaceSelector":{"matchLabels":{"admission-webhook-altershield":"enabled"}},"rules":[{"apiGroups":["apps"],"apiVersions":["v1"],"operations":["CREATE","UPDATE"],"resources":["deployments"]}],"sideEffects":"None"}]}
  creationTimestamp: "2023-05-11T07:29:29Z"
  generation: 2
  labels:
    app.kubernetes.io/component: webhook
    app.kubernetes.io/created-by: altershieldoperator
    app.kubernetes.io/instance: validating-webhook-configuration
    app.kubernetes.io/managed-by: kustomize
    app.kubernetes.io/name: validatingwebhookconfiguration
    app.kubernetes.io/part-of: altershieldoperator
  name: altershieldoperator-validating-webhook-configuration
  resourceVersion: "197856"
  uid: b3ea5378-1d88-491a-8c10-0e40e5495852
webhooks:
  - admissionReviewVersions:
      - v1
    clientConfig:
      caBundle: ...(略)
      url: https://192.168.64.1:1443/validate-apps-v1-deployment
    failurePolicy: Fail
    matchPolicy: Equivalent
    name: vdeployment.kb.io
    namespaceSelector:
      matchLabels:
        admission-webhook-altershield: enabled
    objectSelector: {}
    rules:
      - apiGroups:
          - apps
        apiVersions:
          - v1
        operations:
          - CREATE
          - UPDATE
        resources:
          - deployments
        scope: '*'
    sideEffects: None
    timeoutSeconds: 10
```
**注意：** 以上配置中，Webhook 服务将会调用本地机器的 1443 端口，此时如果有Deployment发布将会因为证书问题而失败，因此需要将证书导出到本地项目中。
### 3.2. 将集群中证书导出
- 运行以下命令，查看集群中的证书：
```shell
kubectl get secret -n altershieldoperator-system -o yaml 
```
```yaml
apiVersion: v1
items:
  - apiVersion: v1
    data:
      ca.crt: ...(略)
      tls.crt: ...(略)
      tls.key: ...(略)
    kind: Secret
    metadata:
      annotations:
        cert-manager.io/alt-names: ""
        cert-manager.io/certificate-name: altershieldoperator-serving-cert
        cert-manager.io/common-name: ""
        cert-manager.io/ip-sans: 192.168.65.2
        cert-manager.io/issuer-group: ""
        cert-manager.io/issuer-kind: Issuer
        cert-manager.io/issuer-name: altershieldoperator-selfsigned-issuer
        cert-manager.io/uri-sans: ""
      creationTimestamp: "2023-05-11T07:29:29Z"
      name: webhook-server-cert
      namespace: altershieldoperator-system
      resourceVersion: "197854"
      uid: 25261ced-e462-4634-910c-d5862ed60720
    type: kubernetes.io/tls
kind: List
metadata:
  resourceVersion: ""
```
- 将证书导出到本地项目：
```shell
kubectl get secrets webhook-server-cert -n  altershieldoperator-system -o jsonpath='{..tls\.crt}' |base64 -d > ./certs/tls.crt
kubectl get secrets webhook-server-cert -n  altershieldoperator-system -o jsonpath='{..tls\.key}' |base64 -d > ./certs/tls.key
```
- 查看证书文件
```
#cat ./certs/tls.crt
-----BEGIN CERTIFICATE-----
MIICvzCCAaegAwIBAgIRAO3ytpgp5rNYOJ7X8dmJBoEwDQYJKoZIhvcNAQELBQAw
ADAeFw0yMzA1MTEwNzI5MjlaFw0yMzA4MDkwNzI5MjlaMAAwggEiMA0GCSqGSIb3
DQEBAQUAA4IBDwAwggEKAoIBAQDq5AkCmWdCKB/H2dDgiikvl0T66tnSiA2CnYme
BuoGhWLZyo0zwF+XTrbdbjsswdY0zliv4dfv4i+4vgdI0lP2uM4YdCYEw5vog68n
b7t1jwMbT8ipBqLxOWaGcqBidOrVFrUvs89gQDa1gNyUvBivzwyfTwxV/4EPf7ic
5mr7gMJY7akKz6u/zTuIL2h+C0wmge/xmfDzLKE9QY/H021Pq12X0G7tLDqweFQO
6tJTMqgICQaLCvas+iYdYReLdQDPIylFYb8Pw87f+AJB+snucmwNQWOlZTvaFi6p
S4b5NoDilUlAXco9cIS43w8JjyqzT3/Lw7+MiAJavwXe5wpxAgMBAAGjNDAyMA4G
A1UdDwEB/wQEAwIFoDAMBgNVHRMBAf8EAjAAMBIGA1UdEQEB/wQIMAaHBMCoQQIw
DQYJKoZIhvcNAQELBQADggEBAH0HQVrF0cdmK8F+eWJyY49Q9pR/h3EqGGHOmJEv
XFuPdL22n4hRV+7rRtveBX1nsuKRapdqrocyB80LrtociinQL61fxsS2eb85xOho
CfP33rIOvlaBGhZwlBWnUJmIsfbKpW0/xDKFgmeusHfV1OoClz8IKjkGGqq1s0Uw
DSW/2emxFIeGi2mrrIr3T2XZ153MKNYOZ4oYURi6iuPr2zGpvKh6OZjoHIjcAhQK
BX+djGGOa9rLgtx0b1GHqj6GYgd9y4ygQXjVvTG1wUIOapN7bU2R2cs/WiwcCk8U
nnp48sVBVYlEPxea1GmxmJPloMYVZqiXg5uOEa65Lzt+RbE=
-----END CERTIFICATE-----

#cat ./certs/tls.key
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA6uQJAplnQigfx9nQ4IopL5dE+urZ0ogNgp2JngbqBoVi2cqN
M8Bfl0623W47LMHWNM5Yr+HX7+IvuL4HSNJT9rjOGHQmBMOb6IOvJ2+7dY8DG0/I
qQai8TlmhnKgYnTq1Ra1L7PPYEA2tYDclLwYr88Mn08MVf+BD3+4nOZq+4DCWO2p
Cs+rv807iC9ofgtMJoHv8Znw8yyhPUGPx9NtT6tdl9Bu7Sw6sHhUDurSUzKoCAkG
iwr2rPomHWEXi3UAzyMpRWG/D8PO3/gCQfrJ7nJsDUFjpWU72hYuqUuG+TaA4pVJ
QF3KPXCEuN8PCY8qs09/y8O/jIgCWr8F3ucKcQIDAQABAoIBABT4dOF5hqF+aY/z
H1Xcn96y16K7MuU75lDh9bZZEa2xXOjqz35uT1p32ZWdUMUnLROb1IknVZsCC5an
yIi01nAxgZznSbmlKRcyIoIX1JmjQfi/P7/var60jDW2qCECJTEPDPAMUphaQ0gj
EA5rWJzhlFPov8YxwHj8wyOm4qg/Y8nAHSawS6t0v7MQlym/LNKY/JUJ5rZBLH3/
MBypwzcSGPCiMnn7BjN294DbH/zcijWjKnv96fd8IfSAfyI4V8e60yqa4O0gR01e
aRTP6EKy/8k2mIJq0ub8AguD+tfSdHFQotQGzvIQYczNZDabE2MAcyLVJNq4Yaua
/AIpjAECgYEA/mqCNoz2fBeigXFgr6EfVpEk7HEDPvbdkOI8eCUJoiQdN2XHvXIH
FfLT/1BdMuoEJGpO/zVCvSsT2QYh5upUuxvEzUZYUR8zHMnQTEpI9ErtmCoFZmte
dZbCFNmYps5z1R+Ze7O/3PlE62S00D4FcrBaGTFWKuuKFldbu0k2N7ECgYEA7Fpo
K4hUYScTnlBfwQeyku4PNm4PVXDUIOME0zZfkPEhjaPJSkJrRZ8urhidEw0aFAmm
PzN2UgkXuRb27PShTOqwnrN5G674XzvAbv14eIyUsFnJ78s6kHR3oIxciO6LAVpd
wpT9WpE/xm4lY1RBC4h073Nug1owWi8zLgHpbsECgYEAwEzBH3ps1F8I9c48xoOC
rGwI/K5vRahS0LAwBJ/6KBQkATttPkRyFqT0mIal61X2y4+PJlebmmB1IBUCiweU
A9l5Z69EEg0DFT91sjRz8DKyY9FfQ4rkWv0YtanDOFHUO8Mmv9mdq+i9ry7vfHdk
psulTmV8O/TM6xYcv/MWiAECgYEAwDQZCGW6MLNladX0uHX5CzFa36mLALFbYE8d
SmGqP6VH4vYxqBjxQVHc1Skg+zApZ+gc8MJ50uagCx2YukOJtJIaBUTwFMoqIs/l
gpzPzkCMXgj2hfGf838zFTVvvs817Wi+XJFqoq8BzO0frHIE30sdxOf7FAhQz9YY
aa6WVUECgYBuXdVg6zcw4YxnrWGMw7k0+vzeJF8PlNF0ajXlXEwlUJVrTFOABTwk
2d3hBI4h060PE8f+3QClEPgh1+sc8RhkLRoOUkRzFghMssKa8CKPBkG7BTpkV4Wv
bEls6FRqab96RlpLk+hjNnsCxl+EcKklxEYVXC+cRKeZERt6g7gfZg==
-----END RSA PRIVATE KEY-----

```

### 3.3. 本地启动，完成调试
您在 Webhook 的开发过程中，可以通过以下步骤进行本地启动：
- [Quick Start](./quick-start)

**此时，在集群中受到管控的 Namespace 下发布 Deployment，即可触发 Webhook 的调用至本地，可看到 Webhook 的日志输出**
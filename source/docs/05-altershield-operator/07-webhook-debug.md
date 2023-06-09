# Webhook 调试
## 1. 本地调试
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
## 2. 将集群中证书导出
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
Your tls.crd here
-----END CERTIFICATE-----

#cat ./certs/tls.key
-----BEGIN RSA PRIVATE KEY-----
Your tls.key here
-----END RSA PRIVATE KEY-----

```

## 3. 本地启动，完成调试
您在 Webhook 的开发过程中，可以通过以下步骤进行本地启动：
- [Quick Start](./quick-start)

**此时，在集群中受到管控的 Namespace 下发布 Deployment，即可触发 Webhook 的调用至本地，可看到 Webhook 的日志输出**
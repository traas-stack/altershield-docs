# Overall Design
This document introduces the overall design of AlterShield Operator.

## 1. Source directory introduction
The directory structure of AlterShield Operator's source code is as follows:
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
- `apis/`：Contains the API for custom CRD (Custom Resource Definition) as well as the struct definitions related to Kubernetes' native API.
- `bin/`：Contains the executable file for AlterShield Operator.
- `certs/`：Contains the certificate files for AlterShield Operator, used for local debugging of Webhook.
- `config/`：Contains the configuration files for AlterShield Operator.
- `controllers/`：Contains the controller code for AlterShield Operator.
- `routers/`：Contains the router code for communication between AlterShield Operator and AlterShield Server.
- `runnable/`：Contains the background task code for AlterShield Operator.
- `main.go`：The entry file for AlterShield Operator.
- `Makefile`：The compilation file for AlterShield Operator.
## 2. Architecture design
### 2.1. Design target
As a Kubernetes Operator, the main function of AlterShield Operator is to control Workload by listening to CRD in Kubernetes and communicating with AlterShield Server. Specifically, the design goals of AlterShield Operator are as follows:
#### 2.1.1. Version confirmation and release control
- Use Webhook to confirm the version and release control of Workload in Kubernetes. When a user submits a new version of Workload, AlterShield Operator sends a request through Webhook to confirm the version and release control with AlterShield Server, ensuring that the submitted version complies with security standards and can be deployed correctly to the Kubernetes cluster.
#### 2.1.2. Real-time monitoring
- Use Watch to monitor Workload and Pod in Kubernetes in real-time. When a change occurs in Workload or Pod in Kubernetes, AlterShield Operator detects and processes it in real-time to ensure that the status of Workload and Pod in the Kubernetes cluster is synchronized with AlterShield Server.
#### 2.1.3. Release status summary
- Use ChangeWorkload to summarize the release status of Workload in Kubernetes. When a user submits a new version of Workload, AlterShield Operator records its status in ChangeWorkload and periodically sends requests to AlterShield Server to update the release status of Workload. This way, users can easily check the release status and change history of Workload.
#### 2.1.4. Release status verification
- Use ChangePod and communication with AlterShield Server to verify the release status of Pod in Kubernetes. When a change occurs in Pod in Kubernetes, AlterShield Operator checks its status and verifies its release status through communication with AlterShield Server.
#### 2.1.5. Configuration update
- Use OpsConfigInfo to update the configuration of Operator. When a user needs to modify the configuration of AlterShield Operator, they can modify the parameters in OpsConfigInfo to achieve the desired effect. AlterShield Operator will detect the changes in parameters in a timely manner and update its configuration accordingly.
### 2.2. System composition
AlterShield Operator consists of the following components:
- Controller：Responsible for listening to CR and custom CRD in Kubernetes and responding accordingly.
- Webhook：Responsible for version confirmation and release control of Workload in Kubernetes.
- Router：Responsible for callback processing between AlterShield Operator and AlterShield Server.
- Runnable：Responsible for asynchronous background tasks.
### 2.3. System flow
The operating process of AlterShield Operator is as follows:
![img.png](img.png)
The relationship between Operator Controller is as follows:
![img_1.png](controller.png)
- 1. The Webhook listens to the Deployment in Kubernetes. If the Template of the Deployment is changed, it updates the Version Label of the Deployment and determines whether to block the release. The Version Label is a label used to mark the version of the Deployment. Whenever the Template of the Deployment is changed, the value of the Version Label will be updated accordingly. This label helps AlterShield Operator to perform version control and management.
- 2. The Deployment Controller listens to the Deployment in Kubernetes and creates a corresponding version of ChangeWorkload. ChangeWorkload is a custom resource type in AlterShield Operator that records the version change history of the Deployment. When the Template of the Deployment is changed, the Deployment Controller creates a new ChangeWorkload to record the information of the new version of the Deployment.
- 3. The Pod Controller listens to the Pod in Kubernetes and determines whether it is a finished Pod. If it is, it adds a Finished Label. The Finished Label is a label used to mark the finished Pod, which helps AlterShield Operator locate the finished Pod and calculate the number of finished Pods.
- 4. The ChangeWorkload Controller listens to the ChangeWorkload and finished Pod in Kubernetes. When the number of finished Pods reaches the threshold, it creates a ChangePod in the Init state. ChangePod is another custom resource type in AlterShield Operator that records the status and callback results of the released Pods. When the number of finished Pods reaches the threshold, the ChangeWorkload Controller creates a ChangePod in the Init state, which will pass the Pod information to the AlterShield Server in the future.
- 5. The ChangePod Controller listens to the ChangePod in Kubernetes. When the status of the ChangePod is Init, it selects no more than the threshold number of Finished Pods and passes the information to the AlterShield Server to achieve the callback function through Router and CallBack Handle. The ChangePod Controller listens to the callback results of the AlterShield Server and updates the status of the ChangePod according to the callback results.
- 6. The ChangePod Controller listens to the ChangePod in Kubernetes. When the status of the ChangePod is Callback Finished, it updates the status of the ChangePod according to the callback results and sets the status of the ChangePod to Done. It then sends this information to the ChangeWorkload Controller.
- 7. The ChangeWorkload Controller listens to the ChangeWorkload and Done ChangePod in Kubernetes. It updates the status of the ChangeWorkload according to the status of the ChangePod and determines whether to block the release. If the status of all the Pods in the ChangePod passes the verification, the ChangeWorkload Controller will update the status of the ChangeWorkload to Success. Otherwise, it will update it to Suspend.
- 8. The Rollback Runnable checks the Pod in Kubernetes. If a Pod has not reached the Running state for a long time (default 2 minutes), it triggers the Rollback mechanism. Rollback Runnable is a background task in AlterShield Operator used to check the status of Pods. If a Pod has been in a non Running state for a long time, it triggers an automatic rollback operation to ensure the stability of the Kubernetes cluster.
- 9. The Rollback Runnable listens to the ChangeWorkload in Kubernetes. When the status of the ChangeWorkload is Rollback, it triggers the Rollback mechanism. The Rollback Runnable also listens to the status of the ChangeWorkload. If the status of the ChangeWorkload is Rollback, it triggers an automatic rollback operation to ensure the stability of the Kubernetes cluster. (Under construction)
## 3. Webhook debugging
### 3.1. Local debugging
**This article will take [MINIKUBE](https://minikube.sigs.k8s.io/) as an example to introduce how to debug Webhook locally.**
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
- 4. `192.168.64.1` is the IP address that is accessible from the cluster to the host，Modify `{IP_Address}` in `config/dev/kustomization.yaml` to 192.168.64.1.
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
- 6. After modification, execute the command to deploy the debug version
```shell
make dev
```
- 7. Use the following command to check whether the Webhook has been successfully deployed.
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
      caBundle: ...
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
      caBundle: ...
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
**Note：** In the above configuration, the Webhook service will call the 1443 port on the local machine. If there is a Deployment release, it will fail due to certificate issues, so the certificate needs to be exported to the local project.
### 3.2. Exporting Certificates from the Cluster
- Run the following command to view the certificates in the cluster:
```shell
kubectl get secret -n altershieldoperator-system -o yaml 
```
```yaml
apiVersion: v1
items:
  - apiVersion: v1
    data:
      ca.crt: ...
      tls.crt: ...
      tls.key: ...
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
- Export the certificate to the local project:
```shell
kubectl get secrets webhook-server-cert -n  altershieldoperator-system -o jsonpath='{..tls\.crt}' |base64 -d > ./certs/tls.crt
kubectl get secrets webhook-server-cert -n  altershieldoperator-system -o jsonpath='{..tls\.key}' |base64 -d > ./certs/tls.key
```
- View the certificate files in the local project:
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

### 3.3. Local launch and debugging
During the development process of Webhook, you can launch locally using the following steps:
- [Quick Start](./quick-start)

**At this point, when a Deployment is released in the Namespace controlled by the cluster, it will trigger the call of the Webhook to the local machine, and you can see the log output of the Webhook**
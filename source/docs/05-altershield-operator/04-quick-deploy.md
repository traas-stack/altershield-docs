# Quick Deploy
This document describes how to quickly deploy the AlterShield Operator to a Kubernetes cluster.
## Getting Started
Before running the AlterShield Operator service, you need to read the following documentation:
- [Getting Started](./getting-started)

## Running on the Cluster
### Building and Pushing Docker Image
1. Build the Docker image and push it to your image repository (replace xxx in the address):
```sh
make docker-build docker-push IMG=xxx/altershieldoperator:v1.0.0
```
### Deploy Method 1 (Recommended)
1. Obtain the resource deployment file:
```sh
make deployYaml IMG=xxx/altershieldoperator:v1.0.0
```
- The resource deployment file can be found in the config/samples/tmp directory.
2. Execute the deployment:
```sh
kubectl apply -f config/samples/tmp/Deployment.yaml
```
### Deploy Method 2
1. Execute the deployment:
```sh
make deploy IMG=xxx/altershieldoperator:v1.0.0
```
- When you see the following log output in the console, it means that the deployment is successful:
```
namespace/altershieldoperator-system created
customresourcedefinition.apiextensions.k8s.io/changepods.app.ops.cloud.alipay.com created
customresourcedefinition.apiextensions.k8s.io/changeworkloads.app.ops.cloud.alipay.com created
customresourcedefinition.apiextensions.k8s.io/opsconfiginfoes.app.ops.cloud.alipay.com created
serviceaccount/altershieldoperator-controller-manager created
role.rbac.authorization.k8s.io/altershieldoperator-leader-election-role created
clusterrole.rbac.authorization.k8s.io/altershieldoperator-manager-role created
clusterrole.rbac.authorization.k8s.io/altershieldoperator-metrics-reader created
clusterrole.rbac.authorization.k8s.io/altershieldoperator-proxy-role created
rolebinding.rbac.authorization.k8s.io/altershieldoperator-leader-election-rolebinding created
clusterrolebinding.rbac.authorization.k8s.io/altershieldoperator-manager-rolebinding created
clusterrolebinding.rbac.authorization.k8s.io/altershieldoperator-proxy-rolebinding created
service/altershieldoperator-controller-manager-metrics-service created
service/altershieldoperator-webhook-service created
deployment.apps/altershieldoperator-controller-manager created
certificate.cert-manager.io/altershieldoperator-serving-cert created
issuer.cert-manager.io/altershieldoperator-selfsigned-issuer created
mutatingwebhookconfiguration.admissionregistration.k8s.io/altershieldoperator-mutating-webhook-configuration created
validatingwebhookconfiguration.admissionregistration.k8s.io/altershieldoperator-validating-webhook-configuration created
```
### Checking Whether the Service
1. Run the following command to check whether the service is deployed successfully:
```sh
kubectl get pods -n altershieldoperator-system
```
- When you see the following log output in the console, it means that the deployment is successful:
```
NAME                                                     READY   STATUS    RESTARTS   AGE
altershieldoperator-controller-manager-7f5f6f7f9-4q9q4   2/2     Running   0          2m
```
### Uninstalling the Service
```sh
make undeploy
```
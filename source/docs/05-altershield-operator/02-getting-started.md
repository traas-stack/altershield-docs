# Getting Started
This document introduces the prerequisites and preparation work for using AlterShield Operator.

## Prerequisites
### Docker
You need to install Docker to build and push images. Please refer to the [Docker Installation Guide](https://docs.docker.com/get-docker/).

### Kubernetes
You need a running Kubernetes cluster, and it is recommended to use version 1.19 and above. You can use [KIND](https://kind.sigs.k8s.io/) or [MINIKUBE](https://minikube.sigs.k8s.io/) to obtain a local cluster for testing. If you need to use a remote cluster, please configure it accordingly.

**Note：** Your controller will automatically use the current context in the kubeconfig file (any content displayed by kubectl config get-contexts).

### GoLang
You need to install GoLang to run the controller locally. Please refer to the [GoLang Installation Guide](https://golang.org/doc/install).

### Kustomize
You need to install Kustomize to use custom configuration to manage Kubernetes deployment files. Please refer to the [Kustomize Installation Guide](https://kubectl.docs.kubernetes.io/installation/kustomize/).
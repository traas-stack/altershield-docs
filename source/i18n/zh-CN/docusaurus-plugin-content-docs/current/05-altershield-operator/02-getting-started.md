# 入门指南
本文档介绍使用 AlterShield Operator 的前置条件和准备工作。

## 前置条件
### Docker
在构建和推送镜像时，您需要安装 Docker。请参阅 [Docker 安装指南](https://docs.docker.com/get-docker/)。

### Kubernetes
您需要一个运行的 Kubernetes 集群，建议使用版本 1.19 及以上。您可以使用 [KIND](https://kind.sigs.k8s.io/) 或 [MINIKUBE](https://minikube.sigs.k8s.io/) 获取本地集群进行测试。如果需要使用远程集群，请进行相应的配置。

**注意：** 您的控制器将自动使用 kubeconfig 文件中的当前上下文（即 kubectl config get-contexts 显示的任何内容）。

### GoLang
您需要安装 GoLang 以本地运行控制器。请参阅 [GoLang 安装指南](https://golang.org/doc/install)。

### Kustomize
您需要安装 Kustomize 以使用自定义配置管理 Kubernetes 部署文件。请参阅 [Kustomize 安装指南](https://kubectl.docs.kubernetes.io/installation/kustomize/)。
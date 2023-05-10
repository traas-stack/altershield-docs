# Getting Started
本文档介绍使用 AlterShield Operator 的环境要求。

## 环境要求
### Docker
您需要安装 Docker 以构建和推送镜像。请参阅 [Docker 安装指南](https://docs.docker.com/get-docker/)。

### Kubernetes
您需要一个 Kubernetes 集群来运行。可以使用 [KIND](https://kind.sigs.k8s.io/) 或 [MINIKUBE](https://minikube.sigs.k8s.io/) 获取本地集群进行测试，或针对远程集群运行。
**注意：** 您的控制器将自动使用 kubeconfig 文件中的当前上下文（即集群 'kubectl 集群信息' 显示的任何内容）。

### GoLang
您需要安装 GoLang 以本地运行控制器。请参阅 [GoLang 安装指南](https://golang.org/doc/install)。

### Kustomize
您需要安装 Kustomize 用于管理Kubernetes部署文件的自定义配置。请参阅 [Kustomize 安装指南](https://kubectl.docs.kubernetes.io/installation/kustomize/)。
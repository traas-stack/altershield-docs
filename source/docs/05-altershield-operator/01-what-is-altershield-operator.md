# What is AlterShield Operator
## Overview
AlterShield Operator是基于Operator-SKD开发的一款Kubernetes Operator，在Kubernetes集群中部署用于对Workload资源的管控，目前支持管控的Workload资源有Deployment，其他通用资源正在持续开发中。其核心设计目标是开发迅速、学习简单、易扩展

## Features

1. 准入控制，对Deployment资源的部署进行管控，防止异常状态下的资源部署

2. 运行检测，对Deployment资源下的POD进行监测，确保资源的运行状态

3. 回滚自愈，对Deployment资源(滚动发布)的异常状态进行自动回滚，取消异常的发布
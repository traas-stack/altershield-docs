---
sidebar_label: '变更信息模型'
---
# 变更信息模型
---

## 什么是变更信息模型
### 背景
变更管控系统实施"信息标准化"方式，这种信息标准化可以屏蔽不同业务场景带来的变更差异性，并将不同场景的变更进行结构化统一。另一个好处是可以将"变更执行"和"变更风险管控"拆分成两件独立的事情，让变更系统研发团队和技术风险团队（SRE/运维/质量）可以各自分工，降低沟通与重复建设成本。

### 如何定义变更

---

在思考如何建立信息模型之前，您需要了解的第一个问题是：如何定义变更？（了解变更管控系统请参考前文《[初识变更管控](/)》)  
您可以尝试从使用场景、自然语言两个角度出发。在基于这两个角度，将变更基础信息的语义化定义总结为五元组：

![图](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/78656390/1670558359332-0c7d175d-f71a-4f53-9c7a-9b5de710aca4.png)

以上是对于变更信息模型中基础信息的定义。

### 怎么定义变更的影响面

---

一次变更的影响并不局限于变更作用对象本身。实际上，由于业务系统的复杂性，一个系统自身的变更，可能波及到整条业务链路。 所以，仅从上文基础信息的定义，来归纳变更的影响范围，是远远不够用来做为后续风险识别以及应急定位辅助的。

因此，除了基础信息外，还需要一种结构，来描述变更的影响面信息。

在参考了大量的"变更动作"后，可以大致把变更分为三大类来描述变更的影响面，且发现了一个规律：
- 业务层面的变更（示例：修改某些运营活动的配置）：对于这类变更，其生效的过程一定是由某个系统来承载的。这个系统可以是服务端、前端、移动端或小程序等任何形式。
- 运维层面的变更（示例：发布某个系统的代码）：对于这类变更，其生效的过程是直接在某个系统或其所属的部署资源中。
- 基础设施层面的变更（示例：删除某个物理机节点）：对于这类变更，其生效过程可能距应用系统较远，但变更的对象，一定是某一批应用系统所依赖的部署资源。

所以，依照上述总结，通过应用系统所具备的资源、依赖、属性来解构信息技术行业相关的变更影响面信息。归纳如下图：

> TODO:贴一张应用部署模式图

根据上图内容所示，变更的影响面信息分为以下几个结构：
- 系统内部影响面：应用系统自身具备的技术"属性"，包含系统内部发布的HTTP服务、RPC服务、访问资金的SQL语句和打印的日志文件等。
- 业务链路影响面：应用系统的业务"属性"，包含系统所属业务链路的定义、上下游系统关系和业务流量中预估的影响用户数等。
- 部署资源影响面：应用系统部署的结构关系，包含系统所部署的虚拟机、物理机和命名空间等资源信息。
- 资源依赖影响面：应用系统的依赖关系，包含系统依赖的数据存储信息、数据计算信息和中间件信息等。


### 怎么定义变更的生效方式

---

了解变更生的效方式定义之前，您需要明确一件事：***一次变更想要进行严格、完全的风险管控，那么它绝对不应该是以"梭哈"形式在线上环境生效的。***

所以，在这个段落需要讨论的是"以某种方式逐步在线上环境生效的变更"怎么通过结构化的方式进行描述。

在ChangeRiskPilot里面，我们定义了几种常见的变更生效方式，欢迎您来进行补充及指正：
- 传统的机器分批模式：也是最常见的"金丝雀发布"模式。
- 按流量比例分批模式：按照流量配比，进行1%、5%、10%...的流量比例的逐步生效，常见于与业务强相关或与用户交互的变更。(示例：前端/客户端系统的升级和运营活动的生效等。）
- 无法分批变更的独立环境验证模式：对于无法进行拆分的变更（示例：DB配置类型变更），需要一个独立的环境进行灰度，来验证变更的正确性。

### JSON Schema定义
以上，是对于变更信息模型标准定义的三个维度，具体的JSON Schema定义如下：

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "planStartTime": {
      "type": "string"
    },
    "changeTitle": {
      "type": "string"
    },
    "changeUrl": {
      "type": "string"
    },
    "creator": {
      "type": "string"
    },
    "changeScenarioCode": {
      "type": "string"
    },
    "changePhases": {
      "type": "array",
      "items": [
        {
          "type": "string"
        }
      ]
    },
    "changeContents": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "contentType": {
              "type": "object",
              "properties": {
                "typeName": {
                  "type": "string"
                }
              },
              "required": [
                "typeName"
              ]
            },
            "instanceName": {
              "type": "string"
            }
          },
          "required": [
            "contentType",
            "instanceName"
          ]
        }
      ]
    },
    "changeParamJson": {
      "type": "string"
    },
    "changeApps": {
      "type": "array",
      "items": [
        {
          "type": "string"
        }
      ]
    },
    "parentOrderInfo": {
      "type": "object",
      "properties": {
        "orderId": {
          "type": "string"
        },
        "orderTitle": {
          "type": "string"
        },
        "orderUrl": {
          "type": "string"
        }
      },
      "required": [
        "orderId",
        "orderTitle",
        "orderUrl"
      ]
    },
    "trace": {
      "type": "object",
      "properties": {
        "traceId": {
          "type": "string"
        },
        "coord": {
          "type": "object",
          "properties": {
            "coord": {
              "type": "string"
            }
          },
          "required": [
            "coord"
          ]
        }
      },
      "required": [
        "traceId",
        "coord"
      ]
    },
    "changeSceneKey": {
      "type": "string"
    },
    "bizExecOrderId": {
      "type": "string"
    },
    "platform": {
      "type": "string"
    }
  },
  "required": [
    "planStartTime",
    "changeTitle",
    "changeUrl",
    "creator",
    "changeScenarioCode",
    "changePhases",
    "changeTargets",
    "changeContents",
    "changeParamJson",
    "changeApps",
    "parentOrderInfo",
    "trace",
    "tenantCode",
    "changeSceneKey",
    "bizExecOrderId",
    "platform"
  ]
}
```

[AlterShield-v0.1]:https://traas-stack.github.io/altershield-docs/blog/welcome-altershield-v0.1
---
sidebar_label: 变更管控
---
# 什么是变更管控

---
## 变更管控初读

在深入了解 Open Change Management Specification 前，您需要先了解什么是变更管控以及变更管控所涉及到的一些核心概念。本文为您介绍变更管控相关概念的具体含义。

## 首先，什么是变更

---

要做变更管控，首先需要对"变更"，或者说分布式系统稳定性领域关心的变更有个清晰的认知。通俗意义上对于变更的定义是：
> “针对服务状态产生直接或间接影响的任何内容”。

简单来说是，任何导致线上服务状态发生变化的行为统称变更。

然而这样的定义过于模糊。比如“状态”这个概念，如果说服务依赖和包含的持久化数据是一种显而易见的状态，那么服务当前所处的、实时流逝着的时钟是否算作“状态”？再比如数据显而易见是“状态”，那么如果用户打开支付宝发起一笔转账，这个行为是否属于“对账务系统的记账表数据状态做了变化”从而应该视作变更？

根据上述的问题，在分析了历史上由变更引发的线上服务故障案例后。发现一个共性：它们都是企业内部人员通过某个平台或黑屏命令进行的线上操作。这些内部人员从运维、研发、产品到活动运营等，涵盖了多种角色。于是可以得出“变更”指的就是“内部人员触发的任何导致线上服务状态发生变化的行为”。因此时钟滴答不是变更，用户转账也不是。

## 那么，什么是变更管控

---

对于变更管控的定义，有一个比较权威的解释是：
> 变更管控就是在整个生命周期中跟踪和管理变更，以最大程度降低风险的这个过程。
其中有几个关键概念需要进一步进行解释。

### 变更的生命周期

通常对于变更生命周期的理解是：变更动作的执行开始到结束这个过程。

这种描述对于负责变更执行的系统是足够的，但对于想要做变更中的风险管控来说，这种描述并不足以概括在变更过程中可能会出现的风险会被提前评估，以及实际的观测到的现象。

因此，在变更管控的场景下，变更的生命周期应当进行适当的延伸。这种延伸需要囊括变更"还未开始"以及变更"观测、总结完成"。

### 最大程序降低风险
通过制定流程标准（比如：如何制定变更计划、谁来审批、过程中应急On-Call如何协作），也可以通过人工的方式观察出一定的变更风险，但依赖人工观察无法避免出现疏漏。 因此，在建立变更管控系统时，应尽可能的使用系统化的手段来替代人工识别变更中的风险。

如果仅在变更结束后利用系统化的手段替换掉人工观察的步骤，并不能"降低风险"。因为这时的变更已经执行到了线上环境，并对实际的用户产生业务影响。

所以，想要"最大程序降低风险"，仅在变更结束后进行系统化观察是不够的，还需要结合前文提到的"变更生命周期的延伸"。在为系统预留充足时间的同时，将风险的预防、预测和观察分散到整个变更生命周期中，保障风险带来的影响最小化。

### 跟踪和管理变更
前文提到在做变更管控前，需要做到"变更生命周期的延伸"以及"具备系统化的能力降低风险"。但对于变更管控系统来说，其中还有一个较为重要的点是在发现风险时，能够快速、有效地熔断变更执行。

虽然可以通过人工观察的方式来实现此步骤，但这并不能保证变更可以被及时熔断，且会带来巨大的强通知和盯盘成本

因此，变更管控系统需要做到在前文提到的"变更生命周期"中的任何阶段的感知和干预能力，约束上游变更执行系统。

## 变更管控的意义和难点

---

随着信息技术相关企业的发展，业务越来越庞杂，导致单一系统发起的变更，其影响范围并不局限于这个系统本身，这对于研发、运维人员的经验性带来了极高的要求与分析成本。

同时，变更风险是信息技术领域中最重要的风险之一，变更也是业界公认触发线上环境故障和业务问题最多的领域。因此，想要提升线上环境的稳定性，需要具备完善的变更管控体系。

目前每个企业所处的业务背景不同，甚至同一家企业不同的业务部门之间也存在着较大的差异与壁障。这个问题导致各个企业或部门所做的变更在语义、描述方式和生效方式等方面有着巨大的差异。

# Change Access SDK
---
## What is change lifecycle integration
### Background
The change management system provides unified control capabilities and integrates change execution in different businesses upstream. In addition to **standardizing information**, it also includes two key points: **_standardizing interfaces_** and _**standardizing capabilities**_. Regardless of whether the downstream area is risk identification or emergency positioning, they can be extended in the same interaction pattern to achieve their respective goals.

However, not all changes require such a large and complex lifecycle management. For some low-risk and frequent changes, using this model can increase manual costs and reduce efficiency. Therefore, ChangeRiskPilot proposes a **_generational change lifecycle integration_** solution.

### What is a generational change
As the name suggests, the concept of 'generational' refers to 'successive derivation and inheritance with mutual connections.' In the field of change management, 'generational' refers to the fact that each generation of changes inherits the control ideas and patterns of the first generation, and 'derives' new lifecycle node definitions in this generation to add new extension perspectives and provide new capabilities.

The definition of generational changes is divided into 5 levels, namely 'G0 ~ G4,' with the following meanings:

|Generational names|                                     Meanings                                      |Lifecycle definition|Usage scenarios|
|:----:|:---------------------------------------------------------------------------------:|:----:|:----:|
|G0| Just do event synchronization access to AlterShield without control capabilities. |Only one event synchronization node.|Suitable for changes with no risk, but data needs to be provided to relevant personnel for retrieval, audit, and other scenarios.|
|G1|                                  Just do single-node change front-end and back-end control.                                   |There is only one change node in the lifecycle.|Suitable for low-risk changes that do not require complex risk control capabilities, only for scenarios that require pre-entry and post-integrity checks.|
|G2|                            There is a complete change work order, and at least one batch of sub-nodes is associated with the work order.                             |The lifecycle is divided into four stages: work order start, batch node start, batch node end, and work order end.|Suitable for most incremental changes that require risk control measures.|
|G3|                            Added perception of the change request stage based on the perception of the complete change work order.                             |On the basis of the G2 generation lifecycle, the change request stage is added as a prerequisite.|Suitable for scenarios where non-technical personnel or designated agents execute changes and require system-assisted pre-risk analysis.|
|G4|                            Added the ability to make decisions for unattended changes based on the perception of change requests.                             |On the basis of the G3 generation lifecycle, an unattended decision-making stage is added after the change request is submitted.|Suitable for scenarios where the system needs to perform unattended proxy execution of changes.|

## How should I renovate my access scenario?
Before integrating changes into AlterShield, the following preparations are required.

1. Firstly, clarify the scenarios you want to control, the degree of risk control strategy required, and which generation of control plan it corresponds to. These factors determine the complexity of your subsequent integration.
2. Secondly, clarify the correspondence between the concept of 'basic information' in the change information model and the corresponding concept in the scenario you want to control.
## SDK Define

[Integration of SDK for the G0 generation.](04-intergenerational/01-g0.md)

[Integration of SDK for the G1 generation.](04-intergenerational/02-g1.md)

[Integration of SDK for the G2 generation.](04-intergenerational/03-g2.md)

[Integration of SDK for the G3 & G4 generations.](04-intergenerational/04-g3&g4.md)

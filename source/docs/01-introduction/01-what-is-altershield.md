---
hide_title: true
sidebar_label: What Is AlterShield
pagination_next: null
slug: /
---

<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80"/>
  </a>

<h3 align="center">AlterShield</h3>

  <p align="center">
    Open Change Management Specification
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</div>

![License](https://img.shields.io/badge/license-Apache--2.0-green.svg)


**Open Change Management Specification**(OCMS)is a set of change management technical standards applicable to SRE and DevOps modes. OCMS provides universal change management solutions driven by data, which can integrate change data from different departments or enterprises. By integrating standardization, OCMS helps users to achieve the ability to perceive, intervene, analyze risks, and prevent risks in the entire life cycle of changes, thereby reducing the impact of changes on business. OCMS aims to provide an efficient change management solution for information technology-related enterprises and help users optimize system performance, enhance reliability, and stability under the SRE and DevOps modes.
Before we begin, you may need to understand [what change management is](02-what-is-change-management.md).

## What does it provide


### Has it been implemented
- A change information model, which can uniformly and structurally define changes under different business or technical backgrounds, is a prerequisite for subsequent change perception, intervention, risk analysis, and risk mitigation.
- A generational change lifecycle access framework, which covers various stages of upstream change execution systems, provides aspect-oriented entry points for change management. At the same time, the generational access standards allow managers to develop different control standards according to different change scenarios, improving flexibility.

### In planning
- A plugin-based change risk analysis framework helps risk assessors visualize the degree of danger, possible risk information, and the adequacy of corresponding risk mitigation during the change request phase, thereby reducing human analysis costs.
- A plugin-based change risk mitigation framework allows risk mitigation personnel to encapsulate their experience in the form of code during their daily work. At the same time, the framework also encapsulates the high-reusability risk mitigation capabilities and information standards for risk observability in change management scenarios that we have previously used in actual business.

### Endgame
- Based on risk analysis and risk mitigation, we ultimately provide a framework solution for unattended changes to help businesses release more manual execution, observation, and recovery costs, and improve development efficiency.


## Before use, you need to understand

1. It is not a change execution system and does not have the ability to execute changes itself.
2. As a technical framework, it defines standards for change access, risk analysis, and risk mitigation. However, before it can be used in practice, ***it needs to be embedded into a change execution platform and used for aspect-oriented control.***
3. The upcoming risk analysis framework provided by change management will need to be combined with your CMDB (or other metadata storage) to obtain data and deduce the impact of changes.
4. Change management will soon launch universal risk mitigation capabilities. In addition, if you want to better address change risk issues that are specific to your business background, you will need to customize risk mitigation plugins to encapsulate your experience.

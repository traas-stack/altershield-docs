# Open Change Management Specification

---
## Initial reading on change management



Before diving into the Open Change Management Specification, you need to first understand what change management is and some core concepts involved in change management. This article introduces the specific meanings of the concepts related to change management.

## What Is Change？

---


To implement change management, it is necessary to have a clear understanding of "change" or the changes that are of concern in the field of distributed system stability. In layman's terms, the definition of "change" is:
> "Change" refers to any content that has a direct or indirect impact on the status of a service.

In simple terms, any action that causes a change in the status of an online service is collectively referred to as a change.

However, such a definition is too vague. For example, the concept of "status" is not well-defined. If the persisted data that the service depends on and includes is a clear state, is the real-time clock that the service is currently running on also considered a "status"? For example, if data is an obvious "status," is a user opening Alipay and initiating a transfer considered a change because it "changes the accounting table data status in the financial system"?

Based on the above problem and an analysis of historical cases of online service failures caused by changes, a commonality was discovered: they were all online operations performed by internal personnel through a platform or black screen command. These internal personnel include various roles such as operations, development, products, and marketing. Therefore, it can be concluded that "change" refers to "any action triggered by internal personnel that causes a change in the status of an online service." Therefore, the ticking of a clock is not a change, and a user transferring money is not either.

## What Is Change Management?

--- 

There is a relatively authoritative explanation for the definition of change management, which is:

> Change management is the process of tracking and managing changes throughout the entire lifecycle to minimize risks. There are several key concepts that need further explanation.

### Lifecycle Of Change

The understanding of the change lifecycle is usually that it refers to the process starting from the beginning of the execution of a change action until its completion.

This description is sufficient for systems responsible for executing changes, but it is not enough to summarize the risks that may arise during the change process for those who want to perform risk management in changes. This is because risks need to be evaluated in advance during the change process, and actual observed phenomena need to be taken into account.

Therefore, in the context of change management, the change lifecycle should be appropriately extended. This extension needs to include the stages before the change "starts" as well as after the change is "observed and summarized".

### Minimize Risks To The Greatest Extent Possible

By establishing process standards (such as how to develop change plans, who approves them, and how to collaborate during emergency on-call situations), and by manually observing certain change risks, it is possible to identify and manage risks associated with changes. However, relying solely on manual observation cannot completely prevent omissions. Therefore, when building a change management system, it is advisable to use systemic means as much as possible to replace manual identification of risks associated with changes.

Simply replacing manual observation with systemic means after the completion of changes does not "minimize risks". This is because the changes have already been executed in the online environment and have affected actual users' businesses.

Therefore, in order to "minimize risks to the greatest extent possible", it is not enough to rely solely on systemic observation after the completion of changes; it is also necessary to extend the change lifecycle, as mentioned earlier. By reserving sufficient time for the system and distributing the prevention, prediction, and observation of risks throughout the entire change lifecycle, the impact of risks can be minimized.


### Track And Manage Changes

As mentioned earlier, the extension of the change lifecycle and the ability to systematically reduce risks are necessary before implementing change management. However, another important point for change management systems is the ability to quickly and effectively halt change execution when risks are detected.

Although this step can be achieved through manual observation, it cannot guarantee that changes can be halted in a timely manner, and it can result in significant communication and monitoring costs.

Therefore, change management systems need to be able to perceive and intervene at any stage of the "change lifecycle" mentioned earlier, and constrain upstream change execution systems.


## The Significance And Difficulties Of Change Management

---

With the development of IT-related enterprises, businesses are becoming more and more complex. This means that changes initiated by a single system can have an impact beyond that system itself, requiring high levels of expertise and analysis costs for R&D and operations personnel.

At the same time, change risk is one of the most critical risks in the field of information technology, and changes are widely recognized as the area that triggers the most online environment failures and business problems. Therefore, in order to improve the stability of the online environment, a comprehensive change management system is needed.

Currently, each enterprise operates in a different business context, and even within the same enterprise, there are significant differences and barriers between different business departments. This problem leads to significant differences in the semantics, description methods, and effective methods of changes made by each enterprise or department.


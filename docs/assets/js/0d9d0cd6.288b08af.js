"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[787],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=l,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={},o="Advanced Usage",i={unversionedId:"altershield-operator/advanced-usage",id:"altershield-operator/advanced-usage",title:"Advanced Usage",description:"This document introduces the advanced features of AlterShield Operator.",source:"@site/docs/05-altershield-operator/06-advanced-usage.md",sourceDirName:"05-altershield-operator",slug:"/altershield-operator/advanced-usage",permalink:"/altershield-docs/docs/altershield-operator/advanced-usage",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"User Guide",permalink:"/altershield-docs/docs/altershield-operator/user-guide"},next:{title:"Webhook \u8c03\u8bd5",permalink:"/altershield-docs/docs/altershield-operator/webhook-debug"}},s={},p=[{value:"1. CRD in AlterShield Operator",id:"1-crd-in-altershield-operator",level:2},{value:"1.1 opsconfiginfoes",id:"11-opsconfiginfoes",level:3},{value:"1.1.1 Blocking Configuration",id:"111-blocking-configuration",level:4},{value:"Note",id:"note",level:5},{value:"1.1.2 Batch Control Configuration",id:"112-batch-control-configuration",level:4},{value:"Note",id:"note-1",level:5},{value:"1.2 changeworkloads",id:"12-changeworkloads",level:3},{value:"1.3 changepods",id:"13-changepods",level:3},{value:"2. Blocking and Repairing Releases",id:"2-blocking-and-repairing-releases",level:2},{value:"Modifying the changePod Status to Simulate an Exceptional Case",id:"modifying-the-changepod-status-to-simulate-an-exceptional-case",level:3},{value:"When AlterShield is not configured, exceptional cases can only be manually simulated.",id:"when-altershield-is-not-configured-exceptional-cases-can-only-be-manually-simulated",level:4},{value:"Modifying the Deployment Resource to Simulate a Normal Release",id:"modifying-the-deployment-resource-to-simulate-a-normal-release",level:3},{value:"Modifying the Deployment Resource to Simulate a Repair Release",id:"modifying-the-deployment-resource-to-simulate-a-repair-release",level:3},{value:"View the ChangeWorkload Resource",id:"view-the-changeworkload-resource",level:3},{value:"3. Self-healing rollback",id:"3-self-healing-rollback",level:2},{value:"Deployment fails to be deployed successfully.",id:"deployment-fails-to-be-deployed-successfully",level:3},{value:"Prerequisites for triggering the current self-healing rollback feature:",id:"prerequisites-for-triggering-the-current-self-healing-rollback-feature",level:4},{value:"Deployment successful deployment (under construction).",id:"deployment-successful-deployment-under-construction",level:3},{value:"Description of the current self-healing rollback feature:",id:"description-of-the-current-self-healing-rollback-feature",level:4},{value:"Pending related instructions:",id:"pending-related-instructions",level:4}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"advanced-usage"},"Advanced Usage"),(0,l.kt)("p",null,"This document introduces the advanced features of AlterShield Operator."),(0,l.kt)("h2",{id:"1-crd-in-altershield-operator"},"1. CRD in AlterShield Operator"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Currently, there are three CRDs defined in AlterShield Operator:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"opsconfiginfoes.app.ops.cloud.alipay.com (referred to as oopsconfiginfoes)"),(0,l.kt)("li",{parentName:"ul"},"changeworkloads.app.ops.cloud.alipay.com (referred to as ochangeworkloads)"),(0,l.kt)("li",{parentName:"ul"},"changepods.app.ops.cloud.alipay.com (referred to as ochangepods)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The YAML files are saved in the config/crd/bases directory.")),(0,l.kt)("h3",{id:"11-opsconfiginfoes"},"1.1 opsconfiginfoes"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"opsconfiginfoes is used to configure the configuration information of AlterShield Operator.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run the following command to view opsconfiginfoes:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get opsconfiginfo -n altershieldoperator-system\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"There are two configuration information, which are:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME       AGE\nblocking   25h\nbranch     25h\n")),(0,l.kt)("h4",{id:"111-blocking-configuration"},"1.1.1 Blocking Configuration"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"When AlterShield detects abnormalities in a pod, AlterShield Operator will block the pod according to the blocking configuration information.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run the following command to view the blocking configuration information:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get opsconfiginfo blocking -n altershieldoperator-system -o yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The content of the blocking configuration information is as follows:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'apiVersion: app.ops.cloud.alipay.com/v1alpha1\nkind: OpsConfigInfo\nmetadata:\n  creationTimestamp: "2023-05-11T07:29:49Z"\n  generation: 1\n  name: blocking\n  namespace: altershieldoperator-system\n  resourceVersion: "197897"\n  uid: 213514db-33d0-4289-8d56-e3dea227e9c1\nspec:\n  enable: true\n  remark: Enabling Blockade\n  type: isBlockingUp\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},".spec.type is isBlockingUp, indicating whether blocking is enabled"),(0,l.kt)("li",{parentName:"ul"},".spec.enable is true, indicating that blocking is ",(0,l.kt)("strong",{parentName:"li"},"enabled")," (default configuration).")),(0,l.kt)("h5",{id:"note"},"Note"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You can manually set .spec.enable to false to disable blocking."),(0,l.kt)("li",{parentName:"ul"},"When .spec.enable is false, if an exception occurs, the deployment will be released normally without blocking."),(0,l.kt)("li",{parentName:"ul"},"If a deployment has been blocked, it will not be released normally when .spec.enable is false.")),(0,l.kt)("h4",{id:"112-batch-control-configuration"},"1.1.2 Batch Control Configuration"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ChangePod will report pod information to AlterShield. This configuration determines whether to enable batch control. When it is turned off, there will be only one pod's information in each ChangePod. When it is turned on, there will be multiple pods' information in each ChangePod (under construction).")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run the following command to view the branch configuration information:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get opsconfiginfo branch -n altershieldoperator-system -o yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The content of the branch configuration information is as follows:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'apiVersion: app.ops.cloud.alipay.com/v1alpha1\nkind: OpsConfigInfo\nmetadata:\n  creationTimestamp: "2023-05-11T07:29:50Z"\n  generation: 1\n  name: branch\n  namespace: altershieldoperator-system\n  resourceVersion: "197898"\n  uid: 2d18dc78-f65f-484c-8f7b-ea5e87c83fe2\nspec:\n  content: "10"\n  enable: false\n  remark: Enabling Batch Protection\n  type: isBranch\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},".spec.type is isBranch, indicating whether batch control is enabled."),(0,l.kt)("li",{parentName:"ul"},".spec.enable is false, indicating that batch control is ",(0,l.kt)("strong",{parentName:"li"},"disabled")," (default configuration)."),(0,l.kt)("li",{parentName:"ul"},".spec.content is 10, indicating that the threshold for batch control is 10.")),(0,l.kt)("h5",{id:"note-1"},"Note"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},".spec.enable cannot be manually set to true at present.")),(0,l.kt)("h3",{id:"12-changeworkloads"},"1.2 changeworkloads"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"changeworkloads maps the changing workloads in the cluster, currently supporting Deployment.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"changeworkload-status.png",src:n(17).Z,width:"564",height:"395"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The changeworkload has the following states:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Init\uff1aInitialization state. When a new controlled workload is created, it enters this state."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"When in this state, if the upload to AlterShield is successful (default), it will enter the Running state."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"When in this state, if the upload to AlterShield fails (under construction), it will enter the Failed state."))),(0,l.kt)("li",{parentName:"ul"},"Running\uff1aRunning state."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"When in this state, if the number of Finished pods reaches the threshold (not enabled by default, the number is 1), a ChangePod will be created."))),(0,l.kt)("li",{parentName:"ul"},"Failed\uff1aFailed state."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"It will not check the current version until the version changes. The new changeworkload will re-enter the Init state."))),(0,l.kt)("li",{parentName:"ul"},"TimeOutPreThreshold\uff1aTimeout status before threshold."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"When the ",(0,l.kt)("a",{parentName:"li",href:"./advanced-usage#112-batch-control-configuration"},"Batch Control Configuration")," of AlterShield Operator is FALSE\uff0c\nif the workload is in the Running state and the number of Finished pods has not reached 1 before reaching the threshold time (default 1 minute), it will enter this status."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"When the ",(0,l.kt)("a",{parentName:"li",href:"./advanced-usage#112-batch-control-configuration"},"Batch Control Configuration")," of AlterShield Operator is TRUE,\nif the workload is in the Running state and the number of Finished pods has not reached the configured number (default 10) before reaching the threshold time (default 1 minute), it will enter this status."))),(0,l.kt)("li",{parentName:"ul"},"Success\uff1aSuccess status."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"When all pods are in the Finished state and all pods pass the AlterShield detection, it will enter this status."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"When unable to report to AlterShield during protection, it will also be considered pass, and only when explicitly returned as abnormal will it enter the fail state."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"When there is a successful changeworkload, the historical versions of the changeworkload resources will be deleted."))),(0,l.kt)("li",{parentName:"ul"},"Suspend\uff1aSuspended status."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"When all pods are in the Finished state and there is a pod that does not pass the AlterShield detection, it will enter this status."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"When changeworkload is in the Suspend state, it will block the normal deployment of the subsequent Workload resources, and this can be turned off by modifying the ",(0,l.kt)("a",{parentName:"li",href:"./advanced-usage#111-blocking-configuration"},"Blocking Configuration"))))),(0,l.kt)("h3",{id:"13-changepods"},"1.3 changepods"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"changepods is a mapping of the changing pods in the cluster, with at least one pod corresponding to a changepod.")),(0,l.kt)("h2",{id:"2-blocking-and-repairing-releases"},"2. Blocking and Repairing Releases"),(0,l.kt)("h3",{id:"modifying-the-changepod-status-to-simulate-an-exceptional-case"},"Modifying the changePod Status to Simulate an Exceptional Case"),(0,l.kt)("h4",{id:"when-altershield-is-not-configured-exceptional-cases-can-only-be-manually-simulated"},"When AlterShield is not configured, exceptional cases can only be manually simulated."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run the command")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get changepods sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--1 -o yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Observe the output")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: app.ops.cloud.alipay.com/v1alpha1\nkind: ChangePod\nmetadata:\n  creationTimestamp: "2023-05-11T07:46:13Z"\n  generation: 2\n  labels:\n    admission-webhook-altershield.antgroup.com/version: c6c45d23c098bdf181853a85b60b5d74\n    app.kubernetes.io/deployment-name: sleep\n  name: sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--1\n  namespace: default\n  ownerReferences:\n  - apiVersion: app.ops.cloud.alipay.com/v1alpha1\n    blockOwnerDeletion: true\n    controller: true\n    kind: ChangeWorkload\n    name: sleep--x--c6c45d23c098bdf181853a85b60b5d74\n    uid: a9b8b77c-ebaa-48d7-915f-bb8c02f5ce91\n  resourceVersion: "199426"\n  uid: 09907f64-4eb8-47da-b46d-5ac0427ebf80\nspec:\n  changeWorkloadId: sleep--x--c6c45d23c098bdf181853a85b60b5d74\n  createTime: "2023-05-11 15:46:13"\n  createTimeUnix: 1683791173\n  podInfos:\n  - app: sleep\n    hostName: sleep-5c698f4449-fsb27\n    ip: 10.244.1.198\n    namespace: default\n    pod: sleep-5c698f4449-fsb27\n    workSpace: default\nstatus:\n  message: PreFailed\n  status: ExecuteDone\n  updateTime: "2023-05-11 15:46:17"\n  updateTimeUnix: 1683791177\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Retrieve the .spec.podInfos field and modify the status content")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'kubectl patch changepod --subresource=status sleep--x--c6c45d23c098bdf181853a85b60b5d74--x--1 -p \'{"status":{"podResults":[{"app":"sleep","hostName":"sleep-5c698f4449-fsb27","ip":"10.244.1.198","namespace":"default","pod":"sleep-5c698f4449-fsb27","workSpace":"default","verdict":"unpass","message":"find error"}], "message": "PostFinish"}}\' --type merge\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Re-observe the ChangePod and ChangeWorkload resources")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get changepods\nkubectl get changeworkloads\nkubectl get changeworkloads -o yaml\nkubectl get deployment sleep -o yaml\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'NAME                                               STATUS        MESSAGE      CREATETIME\nsleep--x--c6c45d23c098bdf181853a85b60b5d74--x--1   ExecuteDone   PostFinish   2023-05-11 15:46:13\nsleep--x--c6c45d23c098bdf181853a85b60b5d74--x--2   ExecuteDone   PreFailed    2023-05-11 15:46:14\nsleep--x--c6c45d23c098bdf181853a85b60b5d74--x--3   ExecuteDone   PreFailed    2023-05-11 15:46:14\nsleep--x--c6c45d23c098bdf181853a85b60b5d74--x--4   ExecuteDone   PreFailed    2023-05-11 15:46:15\nsleep--x--c6c45d23c098bdf181853a85b60b5d74--x--5   ExecuteDone   PreFailed    2023-05-11 15:46:15\n---\nNAME                                         STATUS    CREATETIME\nsleep--x--c6c45d23c098bdf181853a85b60b5d74   Suspend   2023-05-11 15:46:12\n---\napiVersion: v1\nitems:\n- apiVersion: app.ops.cloud.alipay.com/v1alpha1\n  kind: ChangeWorkload\n  metadata: ...\n  spec: ...\n  status:\n    ...\n    defenseCheckFailPods:\n    - app: sleep\n      hostName: sleep-5c698f4449-fsb27\n      ip: 10.244.1.198\n      message: find error\n      namespace: default\n      pod: sleep-5c698f4449-fsb27\n      verdict: unpass\n      workSpace: default\nkind: List\nmetadata:\n  resourceVersion: ""\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  ...\n  labels:\n    admission-webhook-altershield.antgroup.com/version: c6c45d23c098bdf181853a85b60b5d74\n    altershield.defense.antgroup.com/defense-status: processed\n    altershield.defense.antgroup.com/suspend: "1683791175"\n    app: sleep\n  name: sleep\n  namespace: default\nspec: ...\nstatus: ...\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("strong",{parentName:"li"},"status")," field of the ChangePod resource being ",(0,l.kt)("strong",{parentName:"li"},"ExecuteDone")," means that the run check has been completed."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("strong",{parentName:"li"},"message")," field of the ChangePod resource being ",(0,l.kt)("strong",{parentName:"li"},"PostFinish")," means that the check was successful."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("strong",{parentName:"li"},"status")," field of the ChangeWorkload resource being ",(0,l.kt)("strong",{parentName:"li"},"Suspend")," means that an exception was detected during the release and subsequent releases have been suspended."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("strong",{parentName:"li"},"status.defenseCheckFailPods")," field of the ChangeWorkload resource contains information about all the pods that failed the check."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("strong",{parentName:"li"},"labels.altershield.defense.antgroup.com/suspend")," field of the Deployment resource being ",(0,l.kt)("strong",{parentName:"li"},"1683791175")," means that the release was suspended at that timestamp.")),(0,l.kt)("h3",{id:"modifying-the-deployment-resource-to-simulate-a-normal-release"},"Modifying the Deployment Resource to Simulate a Normal Release"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run the command")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'kubectl patch deployment sleep -p \'{"spec":{"template":{"metadata":{"labels":{"test":"test"}}}}}\' --type merge\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This will trigger the Webhook interception.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Error from server (deployment sleep is suspended): admission webhook "vdeployment.kb.io" denied the request: deployment sleep is suspended\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"At this point, the release has been suspended and needs to be repaired before normal releases can continue."))),(0,l.kt)("h3",{id:"modifying-the-deployment-resource-to-simulate-a-repair-release"},"Modifying the Deployment Resource to Simulate a Repair Release"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: sleep\n  labels:\n    app: sleep\n    altershield.defense.antgroup.com/ignored-suspend: "true"\nspec:\n  replicas: 5\n  selector:\n    matchLabels:\n      app: sleep\n  template:\n    metadata:\n      labels:\n        app: sleep\n        test: "1234"\n    spec:\n      containers:\n        - name: sleep\n          image: busybox\n          command: ["/bin/sleep","infinity"]\n          imagePullPolicy: IfNotPresent\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run the command")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f ./config/samples/sleep.yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The command executes successfully.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"deployment.apps/sleep configured\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Repair the sleep Deployment resource by adding the ",(0,l.kt)("strong",{parentName:"li"},"altershield.defense.antgroup.com/ignored-suspend")," field."),(0,l.kt)("li",{parentName:"ul"},"The interception function will be ignored and the release will enter the release process.")),(0,l.kt)("h3",{id:"view-the-changeworkload-resource"},"View the ChangeWorkload Resource"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run the command")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get changeworkloads\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"At this point, two versions of the ChangeWorkload resource exist simultaneously.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME                                         STATUS    CREATETIME\nsleep--x--6a8ff823a5011291b0f02a1d83c2222d   Running   2023-05-12 14:24:12\nsleep--x--c6c45d23c098bdf181853a85b60b5d74   Suspend   2023-05-12 11:02:28\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"After waiting for some time, run the command again.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get changeworkloads\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"At this point, only the latest Success version of the ChangeWorkload resource exists.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME                                         STATUS    CREATETIME\nsleep--x--6a8ff823a5011291b0f02a1d83c2222d   Success   2023-05-12 14:24:12\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Modify the Deployment resource again to simulate a normal release.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'kubectl patch deployment sleep -p \'{"spec":{"template":{"metadata":{"labels":{"test":"test"}}}}}\' --type merge\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The normal release is successful.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"deployment.apps/sleep patched\n")),(0,l.kt)("h2",{id:"3-self-healing-rollback"},"3. Self-healing rollback"),(0,l.kt)("h3",{id:"deployment-fails-to-be-deployed-successfully"},"Deployment fails to be deployed successfully."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Refer to the ",(0,l.kt)("a",{parentName:"li",href:"./quick-start#self-healing-rollback"},"self-healing-rollback")," section in the Quick Start documentation for more information.")),(0,l.kt)("h4",{id:"prerequisites-for-triggering-the-current-self-healing-rollback-feature"},"Prerequisites for triggering the current self-healing rollback feature:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"During the deployment process, if a Pod fails to start ",(0,l.kt)("strong",{parentName:"li"},"(does not reach the Running state)")," for more than the threshold time (default is 2 minutes)."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:2},(0,l.kt)("li",{parentName:"ol"},"The deployment resource is in the default ",(0,l.kt)("strong",{parentName:"li"},"RollingUpdate")," deployment strategy and cannot be ",(0,l.kt)("strong",{parentName:"li"},"Recreate"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:3},(0,l.kt)("li",{parentName:"ol"},"The current deployment has two running ReplicaSets simultaneously, and the old version of the ReplicaSet is in the ",(0,l.kt)("strong",{parentName:"li"},"normal")," state."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:4},(0,l.kt)("li",{parentName:"ol"},"Once the threshold time is reached, the current deployment is considered a failure, and the self-healing rollback feature is triggered. It will roll back to the old version of the ReplicaSet.")))),(0,l.kt)("h3",{id:"deployment-successful-deployment-under-construction"},"Deployment successful deployment (under construction)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Refer to the scenario ",(0,l.kt)("a",{parentName:"li",href:"./advanced-usage#2-blocking-and-repairing-releases"},"2-blocking-and-repairing-releases"))),(0,l.kt)("h4",{id:"description-of-the-current-self-healing-rollback-feature"},"Description of the current self-healing rollback feature:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"During the deployment process, if a Pod starts normally ",(0,l.kt)("strong",{parentName:"li"},"(reaches the Running state)")," and the deployment resource is successfully deployed."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:2},(0,l.kt)("li",{parentName:"ol"},"There are ",(0,l.kt)("strong",{parentName:"li"},"no restrictions")," on the deployment strategy of the deployment resource."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:3},(0,l.kt)("li",{parentName:"ol"},"There is a successful version in the deployment history ",(0,l.kt)("strong",{parentName:"li"},"(ChangeWorkload is Success)"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:4},(0,l.kt)("li",{parentName:"ol"},"If there is any Pod information in the ChangePod resource and AlterShield that ",(0,l.kt)("strong",{parentName:"li"},"fails")," to pass the check."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:5},(0,l.kt)("li",{parentName:"ol"},"If the current version of the ChangeWorkload resource is in ",(0,l.kt)("strong",{parentName:"li"},"Suspend")," state, it is considered an abnormal deployment, and the self-healing rollback feature is triggered."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:6},(0,l.kt)("li",{parentName:"ol"},"It will roll back to the latest successfully deployed version in the deployment history.")))),(0,l.kt)("h4",{id:"pending-related-instructions"},"Pending related instructions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Trigger timing\uff1aPlease refer to the documentation ",(0,l.kt)("a",{parentName:"li",href:"./advanced-usage#modifying-the-deployment-resource-to-simulate-a-repair-release"},"Modifying the Deployment Resource to Simulate a Normal Release"),"\uff0cWhen an abnormal deployment is detected, normal deployment will be prevented, and reparative deployment will be allowed. Therefore, it will be exposed as an interface for users to trigger manually."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:2},(0,l.kt)("li",{parentName:"ol"},"Deployment history\uff1aCurrently, the version of ReplicaSet in Deployment is mainly used for judgment, but this version can only be partially retained and may not meet the needs of users. Therefore, we will consider adding the functionality of customizing the number of versions to be retained.")))))}u.isMDXComponent=!0},17:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/changeworkload-status-1af6cfd7def5d417d724374c0e94f426.png"}}]);
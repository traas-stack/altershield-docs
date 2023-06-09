"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[174],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>u});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},h=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,u=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(u,r(r({ref:n},h),{},{components:t})):a.createElement(u,r({ref:n},h))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(7462),i=(t(7294),t(3905));const o={},r="Change Model",s={unversionedId:"open-change-management-specification/change-model",id:"open-change-management-specification/change-model",title:"Change Model",description:"---",source:"@site/docs/03-open-change-management-specification/02-change-model.md",sourceDirName:"03-open-change-management-specification",slug:"/open-change-management-specification/change-model",permalink:"/altershield-docs/docs/open-change-management-specification/change-model",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Open Change Management Specification",permalink:"/altershield-docs/docs/open-change-management-specification/overview"},next:{title:"Change Access SDK",permalink:"/altershield-docs/docs/open-change-management-specification/change-access-sdk"}},c={},l=[{value:"What is a change information model",id:"what-is-a-change-information-model",level:2},{value:"Background:",id:"background",level:3},{value:"How to Define Change",id:"how-to-define-change",level:3},{value:"How to define the impact scope of changes in the change information model",id:"how-to-define-the-impact-scope-of-changes-in-the-change-information-model",level:3},{value:"How to define the implementation method of a change",id:"how-to-define-the-implementation-method-of-a-change",level:3},{value:"JSON Schema",id:"json-schema",level:3}],h={toc:l},d="wrapper";function p(e){let{components:n,...o}=e;return(0,i.kt)(d,(0,a.Z)({},h,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"change-model"},"Change Model"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"what-is-a-change-information-model"},"What is a change information model"),(0,i.kt)("h3",{id:"background"},"Background:"),(0,i.kt)("p",null,'The change control system implements an "information standardization" approach, which can shield the variability of changes brought about by different business scenarios and structure and unify changes in different scenarios. Another benefit is that it can separate "change execution" and "change risk control" into two independent tasks, allowing the change system development team and the technical risk team (SRE/Operations/Quality) to divide their work and reduce communication and duplicate construction costs.'),(0,i.kt)("h3",{id:"how-to-define-change"},"How to Define Change"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Before considering how to establish an information model, the first question you need to understand is: how to define change? (For understanding change control systems, please refer to the previous article ",(0,i.kt)("a",{parentName:"p",href:"/altershield-docs/docs/introduction/what-is-change-management"},'"Introduction to Change Control."'),")"),(0,i.kt)("p",null,"You can try to approach this question from two perspectives: usage scenarios and natural language. Based on these two perspectives, the semantic definition of the basic information of changes can be summarized into a five-tuple:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u56fe",src:t(7890).Z,width:"952",height:"562"})),(0,i.kt)("p",null,"The above is the definition of basic information in the change information model."),(0,i.kt)("h3",{id:"how-to-define-the-impact-scope-of-changes-in-the-change-information-model"},"How to define the impact scope of changes in the change information model"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The impact of a change is not limited to the object of the change itself. In fact, due to the complexity of the business system, a change to a system itself may affect the entire business chain.\nTherefore, it is not enough to infer the scope of the impact of a change only from the definition of basic information in the previous section, for subsequent risk identification and emergency positioning assistance. "),(0,i.kt)("p",null,"In addition to basic information, a structure is needed to describe the impact scope of a change. "),(0,i.kt)("p",null,"After referencing numerous 'change actions,' changes can be roughly divided into three categories to describe their impact scope, and a pattern was discovered: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Business level changes (e.g. modifying the configuration of certain operational activities): For these types of changes, their implementation is always carried out by a certain system. This system can be a server, front-end, mobile end, or mini program in any form."),(0,i.kt)("li",{parentName:"ul"},"Operations level changes (e.g. releasing the code of a system): For these types of changes, their implementation is directly in a certain system or its associated deployment resources."),(0,i.kt)("li",{parentName:"ul"},"Infrastructure level changes (e.g. deleting a physical machine node): For these types of changes, their implementation may be far from the application system, but the object of the change must be a batch of deployment resources on which some application systems depend. ")),(0,i.kt)("p",null,"Therefore, based on the resources, dependencies, and attributes possessed by application systems, we can deconstruct the change impact information related to the information technology industry. The summary is shown in the following figure:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8d34\u4e00\u5f20\u5e94\u7528\u90e8\u7f72\u6a21\u5f0f\u56fe")),(0,i.kt)("p",null,"According to the content shown in the above diagram, the impact scope information of a change can be divided into the following structures:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Internal system impact scope: Technical 'attributes' possessed by an application system itself, including HTTP services, RPC services, SQL statements accessing funds, and printed log files published within the system."),(0,i.kt)("li",{parentName:"ul"},"Business chain impact scope: Business 'attributes' of an application system, including the definition of the system's business chain, upstream and downstream system relationships, and the estimated number of affected users in business traffic."),(0,i.kt)("li",{parentName:"ul"},"Deployment resource impact scope: Structural relationships of the resources deployed by an application system, including information on the virtual machines, physical machines, and namespaces that the system is deployed on."),(0,i.kt)("li",{parentName:"ul"},"Resource dependency impact scope: Dependency relationships of an application system, including information on the data storage, data calculation, and middleware that the system depends on.")),(0,i.kt)("h3",{id:"how-to-define-the-implementation-method-of-a-change"},"How to define the implementation method of a change"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Before understanding the definition of the implementation method of a change, you need to be clear about one thing: If you want to have strict and complete risk control for a change, then it should never be implemented in an online environment as a 'gamble.'"),(0,i.kt)("p",null,"So, what needs to be discussed in this paragraph is how to describe the changes that are implemented gradually in an online environment in a structured way."),(0,i.kt)("p",null,"In AlterShield, we have defined several common implementation methods for changes, and welcome your additions and corrections:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Traditional machine batch mode: This is also the most common 'canary release' mode."),(0,i.kt)("li",{parentName:"ul"},"Batch mode based on traffic proportion: Gradual implementation based on traffic proportion, such as 1%, 5%, 10%, etc., commonly used for changes strongly related to business or user interaction. (Example: Upgrading front-end/client systems and activating operation activities, etc.)"),(0,i.kt)("li",{parentName:"ul"},"Independent environment verification mode for changes that cannot be batched: For changes that cannot be split (e.g. DB configuration type changes), an independent environment is required for gray verification to validate the correctness of the change.")),(0,i.kt)("h3",{id:"json-schema"},"JSON Schema"),(0,i.kt)("p",null,"Above are the three dimensions of the standard definition for the change information model, and the specific JSON Schema definitions are as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-04/schema#",\n  "type": "object",\n  "properties": {\n    "planStartTime": {\n      "type": "string"\n    },\n    "changeTitle": {\n      "type": "string"\n    },\n    "changeUrl": {\n      "type": "string"\n    },\n    "creator": {\n      "type": "string"\n    },\n    "changeScenarioCode": {\n      "type": "string"\n    },\n    "changePhases": {\n      "type": "array",\n      "items": [\n        {\n          "type": "string"\n        }\n      ]\n    },\n    "changeContents": {\n      "type": "array",\n      "items": [\n        {\n          "type": "object",\n          "properties": {\n            "contentType": {\n              "type": "object",\n              "properties": {\n                "typeName": {\n                  "type": "string"\n                }\n              },\n              "required": [\n                "typeName"\n              ]\n            },\n            "instanceName": {\n              "type": "string"\n            }\n          },\n          "required": [\n            "contentType",\n            "instanceName"\n          ]\n        }\n      ]\n    },\n    "changeParamJson": {\n      "type": "string"\n    },\n    "changeApps": {\n      "type": "array",\n      "items": [\n        {\n          "type": "string"\n        }\n      ]\n    },\n    "parentOrderInfo": {\n      "type": "object",\n      "properties": {\n        "orderId": {\n          "type": "string"\n        },\n        "orderTitle": {\n          "type": "string"\n        },\n        "orderUrl": {\n          "type": "string"\n        }\n      },\n      "required": [\n        "orderId",\n        "orderTitle",\n        "orderUrl"\n      ]\n    },\n    "trace": {\n      "type": "object",\n      "properties": {\n        "traceId": {\n          "type": "string"\n        },\n        "coord": {\n          "type": "object",\n          "properties": {\n            "coord": {\n              "type": "string"\n            }\n          },\n          "required": [\n            "coord"\n          ]\n        }\n      },\n      "required": [\n        "traceId",\n        "coord"\n      ]\n    },\n    "changeSceneKey": {\n      "type": "string"\n    },\n    "bizExecOrderId": {\n      "type": "string"\n    },\n    "platform": {\n      "type": "string"\n    }\n  },\n  "required": [\n    "planStartTime",\n    "changeTitle",\n    "changeUrl",\n    "creator",\n    "changeScenarioCode",\n    "changePhases",\n    "changeTargets",\n    "changeContents",\n    "changeParamJson",\n    "changeApps",\n    "parentOrderInfo",\n    "trace",\n    "tenantCode",\n    "changeSceneKey",\n    "bizExecOrderId",\n    "platform"\n  ]\n}\n')))}p.isMDXComponent=!0},7890:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/change_model-bdae69b3f9b85cc30ffc65edee123682.png"}}]);
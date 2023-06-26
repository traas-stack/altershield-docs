"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[8269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),g=l(n),h=r,m=g["".concat(s,".").concat(h)]||g[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[g]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={},o="Change Access SDK",c={unversionedId:"open-change-management-specification/change-access-sdk",id:"open-change-management-specification/change-access-sdk",title:"Change Access SDK",description:"---",source:"@site/docs/03-open-change-management-specification/03-change-access-sdk.md",sourceDirName:"03-open-change-management-specification",slug:"/open-change-management-specification/change-access-sdk",permalink:"/docs/open-change-management-specification/change-access-sdk",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Change Model",permalink:"/docs/open-change-management-specification/change-model"},next:{title:"G0 Intergenerational",permalink:"/docs/open-change-management-specification/intergenerational/g0"}},s={},l=[{value:"What is change lifecycle integration",id:"what-is-change-lifecycle-integration",level:2},{value:"Background",id:"background",level:3},{value:"What is a generational change",id:"what-is-a-generational-change",level:3},{value:"How should I renovate my access scenario?",id:"how-should-i-renovate-my-access-scenario",level:2},{value:"SDK Define",id:"sdk-define",level:2}],d={toc:l},g="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"change-access-sdk"},"Change Access SDK"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-is-change-lifecycle-integration"},"What is change lifecycle integration"),(0,r.kt)("h3",{id:"background"},"Background"),(0,r.kt)("p",null,"The change management system provides unified control capabilities and integrates change execution in different businesses upstream. In addition to ",(0,r.kt)("strong",{parentName:"p"},"standardizing information"),", it also includes two key points: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"standardizing interfaces"))," and ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"standardizing capabilities")),". Regardless of whether the downstream area is risk identification or emergency positioning, they can be extended in the same interaction pattern to achieve their respective goals."),(0,r.kt)("p",null,"However, not all changes require such a large and complex lifecycle management. For some low-risk and frequent changes, using this model can increase manual costs and reduce efficiency. Therefore, ChangeRiskPilot proposes a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"generational change lifecycle integration"))," solution."),(0,r.kt)("h3",{id:"what-is-a-generational-change"},"What is a generational change"),(0,r.kt)("p",null,"As the name suggests, the concept of 'generational' refers to 'successive derivation and inheritance with mutual connections.' In the field of change management, 'generational' refers to the fact that each generation of changes inherits the control ideas and patterns of the first generation, and 'derives' new lifecycle node definitions in this generation to add new extension perspectives and provide new capabilities."),(0,r.kt)("p",null,"The definition of generational changes is divided into 5 levels, namely 'G0 ~ G4,' with the following meanings:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Generational names"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Meanings"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Lifecycle definition"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Usage scenarios"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"G0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Just do event synchronization access to AlterShield without control capabilities."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Only one event synchronization node."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Suitable for changes with no risk, but data needs to be provided to relevant personnel for retrieval, audit, and other scenarios.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"G1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Just do single-node change front-end and back-end control."),(0,r.kt)("td",{parentName:"tr",align:"center"},"There is only one change node in the lifecycle."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Suitable for low-risk changes that do not require complex risk control capabilities, only for scenarios that require pre-entry and post-integrity checks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"G2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"There is a complete change work order, and at least one batch of sub-nodes is associated with the work order."),(0,r.kt)("td",{parentName:"tr",align:"center"},"The lifecycle is divided into four stages: work order start, batch node start, batch node end, and work order end."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Suitable for most incremental changes that require risk control measures.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"G3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Added perception of the change request stage based on the perception of the complete change work order."),(0,r.kt)("td",{parentName:"tr",align:"center"},"On the basis of the G2 generation lifecycle, the change request stage is added as a prerequisite."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Suitable for scenarios where non-technical personnel or designated agents execute changes and require system-assisted pre-risk analysis.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"G4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Added the ability to make decisions for unattended changes based on the perception of change requests."),(0,r.kt)("td",{parentName:"tr",align:"center"},"On the basis of the G3 generation lifecycle, an unattended decision-making stage is added after the change request is submitted."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Suitable for scenarios where the system needs to perform unattended proxy execution of changes.")))),(0,r.kt)("h2",{id:"how-should-i-renovate-my-access-scenario"},"How should I renovate my access scenario?"),(0,r.kt)("p",null,"Before integrating changes into AlterShield, the following preparations are required."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Firstly, clarify the scenarios you want to control, the degree of risk control strategy required, and which generation of control plan it corresponds to. These factors determine the complexity of your subsequent integration."),(0,r.kt)("li",{parentName:"ol"},"Secondly, clarify the correspondence between the concept of 'basic information' in the change information model and the corresponding concept in the scenario you want to control.")),(0,r.kt)("h2",{id:"sdk-define"},"SDK Define"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/open-change-management-specification/intergenerational/g0"},"Integration of SDK for the G0 generation.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/open-change-management-specification/intergenerational/g1"},"Integration of SDK for the G1 generation.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/open-change-management-specification/intergenerational/g2"},"Integration of SDK for the G2 generation.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/open-change-management-specification/intergenerational/g3&g4"},"Integration of SDK for the G3 & G4 generations.")))}p.isMDXComponent=!0}}]);
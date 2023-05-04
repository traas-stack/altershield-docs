"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[2051],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>u});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},h=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),m=l(t),d=i,u=m["".concat(c,".").concat(d)]||m[d]||g[d]||s;return t?a.createElement(u,r(r({ref:n},h),{},{components:t})):a.createElement(u,r({ref:n},h))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var l=2;l<s;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=t(7462),i=(t(7294),t(3905));const s={},r="Open Change Management Specification",o={unversionedId:"introduction/open-change-management-specification",id:"introduction/open-change-management-specification",title:"Open Change Management Specification",description:"---",source:"@site/docs/01-introduction/02-open-change-management-specification.md",sourceDirName:"01-introduction",slug:"/introduction/open-change-management-specification",permalink:"/docs/introduction/open-change-management-specification",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What Is AlterShield",permalink:"/docs/introduction/what-is-altershield"},next:{title:"Start With Docker",permalink:"/docs/quick-start/start-with-docker"}},c={},l=[{value:"Initial reading on change management",id:"initial-reading-on-change-management",level:2},{value:"What Is Change\uff1f",id:"what-is-change",level:2},{value:"What Is Change Management?",id:"what-is-change-management",level:2},{value:"Lifecycle Of Change",id:"lifecycle-of-change",level:3},{value:"Minimize Risks To The Greatest Extent Possible",id:"minimize-risks-to-the-greatest-extent-possible",level:3},{value:"Track And Manage Changes",id:"track-and-manage-changes",level:3},{value:"The Significance And Difficulties Of Change Management",id:"the-significance-and-difficulties-of-change-management",level:2}],h={toc:l},m="wrapper";function g(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"open-change-management-specification"},"Open Change Management Specification"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"initial-reading-on-change-management"},"Initial reading on change management"),(0,i.kt)("p",null,"Before diving into the Open Change Management Specification, you need to first understand what change management is and some core concepts involved in change management. This article introduces the specific meanings of the concepts related to change management."),(0,i.kt)("h2",{id:"what-is-change"},"What Is Change\uff1f"),(0,i.kt)("hr",null),(0,i.kt)("p",null,'To implement change management, it is necessary to have a clear understanding of "change" or the changes that are of concern in the field of distributed system stability. In layman\'s terms, the definition of "change" is:'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"Change" refers to any content that has a direct or indirect impact on the status of a service.')),(0,i.kt)("p",null,"In simple terms, any action that causes a change in the status of an online service is collectively referred to as a change."),(0,i.kt)("p",null,'However, such a definition is too vague. For example, the concept of "status" is not well-defined. If the persisted data that the service depends on and includes is a clear state, is the real-time clock that the service is currently running on also considered a "status"? For example, if data is an obvious "status," is a user opening Alipay and initiating a transfer considered a change because it "changes the accounting table data status in the financial system"?'),(0,i.kt)("p",null,'Based on the above problem and an analysis of historical cases of online service failures caused by changes, a commonality was discovered: they were all online operations performed by internal personnel through a platform or black screen command. These internal personnel include various roles such as operations, development, products, and marketing. Therefore, it can be concluded that "change" refers to "any action triggered by internal personnel that causes a change in the status of an online service." Therefore, the ticking of a clock is not a change, and a user transferring money is not either.'),(0,i.kt)("h2",{id:"what-is-change-management"},"What Is Change Management?"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"There is a relatively authoritative explanation for the definition of change management, which is:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Change management is the process of tracking and managing changes throughout the entire lifecycle to minimize risks. There are several key concepts that need further explanation.")),(0,i.kt)("h3",{id:"lifecycle-of-change"},"Lifecycle Of Change"),(0,i.kt)("p",null,"The understanding of the change lifecycle is usually that it refers to the process starting from the beginning of the execution of a change action until its completion."),(0,i.kt)("p",null,"This description is sufficient for systems responsible for executing changes, but it is not enough to summarize the risks that may arise during the change process for those who want to perform risk management in changes. This is because risks need to be evaluated in advance during the change process, and actual observed phenomena need to be taken into account."),(0,i.kt)("p",null,'Therefore, in the context of change management, the change lifecycle should be appropriately extended. This extension needs to include the stages before the change "starts" as well as after the change is "observed and summarized".'),(0,i.kt)("h3",{id:"minimize-risks-to-the-greatest-extent-possible"},"Minimize Risks To The Greatest Extent Possible"),(0,i.kt)("p",null,"By establishing process standards (such as how to develop change plans, who approves them, and how to collaborate during emergency on-call situations), and by manually observing certain change risks, it is possible to identify and manage risks associated with changes. However, relying solely on manual observation cannot completely prevent omissions. Therefore, when building a change management system, it is advisable to use systemic means as much as possible to replace manual identification of risks associated with changes."),(0,i.kt)("p",null,'Simply replacing manual observation with systemic means after the completion of changes does not "minimize risks". This is because the changes have already been executed in the online environment and have affected actual users\' businesses.'),(0,i.kt)("p",null,'Therefore, in order to "minimize risks to the greatest extent possible", it is not enough to rely solely on systemic observation after the completion of changes; it is also necessary to extend the change lifecycle, as mentioned earlier. By reserving sufficient time for the system and distributing the prevention, prediction, and observation of risks throughout the entire change lifecycle, the impact of risks can be minimized.'),(0,i.kt)("h3",{id:"track-and-manage-changes"},"Track And Manage Changes"),(0,i.kt)("p",null,"As mentioned earlier, the extension of the change lifecycle and the ability to systematically reduce risks are necessary before implementing change management. However, another important point for change management systems is the ability to quickly and effectively halt change execution when risks are detected."),(0,i.kt)("p",null,"Although this step can be achieved through manual observation, it cannot guarantee that changes can be halted in a timely manner, and it can result in significant communication and monitoring costs."),(0,i.kt)("p",null,'Therefore, change management systems need to be able to perceive and intervene at any stage of the "change lifecycle" mentioned earlier, and constrain upstream change execution systems.'),(0,i.kt)("h2",{id:"the-significance-and-difficulties-of-change-management"},"The Significance And Difficulties Of Change Management"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"With the development of IT-related enterprises, businesses are becoming more and more complex. This means that changes initiated by a single system can have an impact beyond that system itself, requiring high levels of expertise and analysis costs for R&D and operations personnel."),(0,i.kt)("p",null,"At the same time, change risk is one of the most critical risks in the field of information technology, and changes are widely recognized as the area that triggers the most online environment failures and business problems. Therefore, in order to improve the stability of the online environment, a comprehensive change management system is needed."),(0,i.kt)("p",null,"Currently, each enterprise operates in a different business context, and even within the same enterprise, there are significant differences and barriers between different business departments. This problem leads to significant differences in the semantics, description methods, and effective methods of changes made by each enterprise or department."))}g.isMDXComponent=!0}}]);
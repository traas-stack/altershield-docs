"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[256],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),h=o,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return t?n.createElement(f,l(l({ref:r},c),{},{components:t})):n.createElement(f,l({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=h;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9779:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={},l="What is AlterShield Operator",i={unversionedId:"altershield-operator/what-is-altershield-operator",id:"altershield-operator/what-is-altershield-operator",title:"What is AlterShield Operator",description:"Overview",source:"@site/docs/05-altershield-operator/01-what-is-altershield-operator.md",sourceDirName:"05-altershield-operator",slug:"/altershield-operator/what-is-altershield-operator",permalink:"/altershield-operator/what-is-altershield-operator",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is Change Defender",permalink:"/change-defender/what-is-change-defender"},next:{title:"Getting Started",permalink:"/altershield-operator/getting-started"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2}],c={toc:p},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-altershield-operator"},"What is AlterShield Operator"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"AlterShield Operator is a Kubernetes Operator developed based on Operator-SKD. Its purpose is to improve the stability and reliability of Kubernetes clusters by controlling Workload resources. Currently, AlterShield Operator supports controlling Deployment resources, while other common resources are continuously being developed. Its core design goals are rapid development, easy learning, and easy scalability."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"AlterShield Operator has the following main functions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Admission control, controlling the deployment of Workload resources to prevent deployment under abnormal conditions")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run detection, monitoring the PODs under Workload resources to ensure the running status of resources")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Rollback self-healing, automatically rolling back the abnormal state of Workload resources and self-healing the rollback exception "))),(0,o.kt)("p",null,"Through these functions, AlterShield Operator can help users better manage Workload resources in Kubernetes clusters and improve system stability and reliability."))}d.isMDXComponent=!0}}]);
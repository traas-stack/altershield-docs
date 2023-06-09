"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[256],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),p=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return o.createElement(s.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},h=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),h=n,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return t?o.createElement(f,l(l({ref:r},c),{},{components:t})):o.createElement(f,l({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=h;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9779:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=t(7462),n=(t(7294),t(3905));const a={},l="What is AlterShield Operator",i={unversionedId:"altershield-operator/what-is-altershield-operator",id:"altershield-operator/what-is-altershield-operator",title:"What is AlterShield Operator",description:"Overview",source:"@site/docs/05-altershield-operator/01-what-is-altershield-operator.md",sourceDirName:"05-altershield-operator",slug:"/altershield-operator/what-is-altershield-operator",permalink:"/altershield-docs/docs/altershield-operator/what-is-altershield-operator",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is Change Defender",permalink:"/altershield-docs/docs/change-defender/what-is-change-defender"},next:{title:"Getting Started",permalink:"/altershield-docs/docs/altershield-operator/getting-started"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2}],c={toc:p},d="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-altershield-operator"},"What is AlterShield Operator"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"AlterShield Operator is a Kubernetes Operator developed based on Operator-SKD. Its purpose is to improve the stability and reliability of Kubernetes clusters by controlling Workload resources. Currently, AlterShield Operator supports controlling Deployment resources, while other common resources are continuously being developed. Its core design goals are rapid development, easy learning, and easy scalability."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("p",null,"AlterShield Operator has the following main functions:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Admission control, controlling the deployment of Workload resources to prevent deployment under abnormal conditions")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run detection, monitoring the PODs under Workload resources to ensure the running status of resources")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Rollback self-healing, automatically rolling back the abnormal state of Workload resources and self-healing the rollback exception "))),(0,n.kt)("p",null,"Through these functions, AlterShield Operator can help users better manage Workload resources in Kubernetes clusters and improve system stability and reliability."))}u.isMDXComponent=!0}}]);
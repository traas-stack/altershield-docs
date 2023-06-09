"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[250],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),g=r,m=d["".concat(s,".").concat(g)]||d[g]||h[g]||o;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8520:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const o={},i="Open Change Management Specification",c={unversionedId:"open-change-management-specification/overview",id:"open-change-management-specification/overview",title:"Open Change Management Specification",description:"---",source:"@site/docs/03-open-change-management-specification/01-overview.md",sourceDirName:"03-open-change-management-specification",slug:"/open-change-management-specification/overview",permalink:"/altershield-docs/docs/open-change-management-specification/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Start With Docker",permalink:"/altershield-docs/docs/quick-start/start-with-docker"},next:{title:"Change Model",permalink:"/altershield-docs/docs/open-change-management-specification/change-model"}},s={},l=[{value:"In-depth Understanding Open Change Management Specification",id:"in-depth-understanding-open-change-management-specification",level:2},{value:"Change Scenario Access SDK",id:"change-scenario-access-sdk",level:3}],p={toc:l},d="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"open-change-management-specification"},"Open Change Management Specification"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"This standard includes several parts, such as the",(0,r.kt)("a",{parentName:"p",href:"/altershield-docs/docs/open-change-management-specification/change-model"},"Change Information Model"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"/altershield-docs/docs/open-change-management-specification/change-access-sdk"},"Change Scenario Access SDK,"),"\u3001Plugin-based Change Risk Control Framework (coming soon), and Change Risk Analysis Framework (coming soon)."),(0,r.kt)("h2",{id:"in-depth-understanding-open-change-management-specification"},"In-depth Understanding Open Change Management Specification"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"change-scenario-access-sdk"},"Change Scenario Access SDK"),(0,r.kt)("p",null,"In the previous section,  ",(0,r.kt)("a",{parentName:"p",href:"/altershield-docs/docs/introduction/what-is-altershield"},"AlterShield")," introduced the Open Change Management Specification as a change control solution, which includes two key points:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Change control provides a set of change information models that can unify and structure different business backgrounds of changes."),(0,r.kt)("li",{parentName:"ol"},"Change control provides a generational change lifecycle access method, which provides an aspect entry for subsequent change risk control.")),(0,r.kt)("p",null,"By relying on these two methods to define and integrate the upstream change execution process, it is called ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"change scenario access")),". "),(0,r.kt)("p",null,"According to the table of contents below, you will learn how to complete a standardized access transformation for a change scenario based on the relevant definitions of this standard."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/altershield-docs/docs/open-change-management-specification/change-model"},"Change Information Model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/altershield-docs/docs/open-change-management-specification/change-access-sdk"},"Change Scenario Access SDK"))))}h.isMDXComponent=!0}}]);
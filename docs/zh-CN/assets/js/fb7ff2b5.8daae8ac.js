"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[11],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9301:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="\u5165\u95e8\u6307\u5357",l={unversionedId:"altershield-operator/getting-started",id:"altershield-operator/getting-started",title:"\u5165\u95e8\u6307\u5357",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u4f7f\u7528 AlterShield Operator \u7684\u524d\u7f6e\u6761\u4ef6\u548c\u51c6\u5907\u5de5\u4f5c\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/05-altershield-operator/02-getting-started.md",sourceDirName:"05-altershield-operator",slug:"/altershield-operator/getting-started",permalink:"/altershield-docs/zh-CN/altershield-operator/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AlterShield Operator\u662f\u4ec0\u4e48",permalink:"/altershield-docs/zh-CN/altershield-operator/what-is-altershield-operator"},next:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/altershield-docs/zh-CN/altershield-operator/quick-start"}},s={},c=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"Docker",id:"docker",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"GoLang",id:"golang",level:3},{value:"Kustomize",id:"kustomize",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5165\u95e8\u6307\u5357"},"\u5165\u95e8\u6307\u5357"),(0,o.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u4f7f\u7528 AlterShield Operator \u7684\u524d\u7f6e\u6761\u4ef6\u548c\u51c6\u5907\u5de5\u4f5c\u3002"),(0,o.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,o.kt)("h3",{id:"docker"},"Docker"),(0,o.kt)("p",null,"\u5728\u6784\u5efa\u548c\u63a8\u9001\u955c\u50cf\u65f6\uff0c\u60a8\u9700\u8981\u5b89\u88c5 Docker\u3002\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker \u5b89\u88c5\u6307\u5357"),"\u3002"),(0,o.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,"\u60a8\u9700\u8981\u4e00\u4e2a\u8fd0\u884c\u7684 Kubernetes \u96c6\u7fa4\uff0c\u5efa\u8bae\u4f7f\u7528\u7248\u672c 1.19 \u53ca\u4ee5\u4e0a\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"KIND")," \u6216 ",(0,o.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/"},"MINIKUBE")," \u83b7\u53d6\u672c\u5730\u96c6\u7fa4\u8fdb\u884c\u6d4b\u8bd5\u3002\u5982\u679c\u9700\u8981\u4f7f\u7528\u8fdc\u7a0b\u96c6\u7fa4\uff0c\u8bf7\u8fdb\u884c\u76f8\u5e94\u7684\u914d\u7f6e\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u60a8\u7684\u63a7\u5236\u5668\u5c06\u81ea\u52a8\u4f7f\u7528 kubeconfig \u6587\u4ef6\u4e2d\u7684\u5f53\u524d\u4e0a\u4e0b\u6587\uff08\u5373 kubectl config get-contexts \u663e\u793a\u7684\u4efb\u4f55\u5185\u5bb9\uff09\u3002"),(0,o.kt)("h3",{id:"golang"},"GoLang"),(0,o.kt)("p",null,"\u60a8\u9700\u8981\u5b89\u88c5 GoLang \u4ee5\u672c\u5730\u8fd0\u884c\u63a7\u5236\u5668\u3002\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/doc/install"},"GoLang \u5b89\u88c5\u6307\u5357"),"\u3002"),(0,o.kt)("h3",{id:"kustomize"},"Kustomize"),(0,o.kt)("p",null,"\u60a8\u9700\u8981\u5b89\u88c5 Kustomize \u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u7ba1\u7406 Kubernetes \u90e8\u7f72\u6587\u4ef6\u3002\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://kubectl.docs.kubernetes.io/installation/kustomize/"},"Kustomize \u5b89\u88c5\u6307\u5357"),"\u3002"))}d.isMDXComponent=!0}}]);
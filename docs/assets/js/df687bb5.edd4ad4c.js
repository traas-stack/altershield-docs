"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[575],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,g=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},773:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},i="Getting Started",l={unversionedId:"altershield-operator/getting-started",id:"altershield-operator/getting-started",title:"Getting Started",description:"This document introduces the prerequisites and preparation work for using AlterShield Operator.",source:"@site/docs/05-altershield-operator/02-getting-started.md",sourceDirName:"05-altershield-operator",slug:"/altershield-operator/getting-started",permalink:"/altershield-docs/altershield-operator/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is AlterShield Operator",permalink:"/altershield-docs/altershield-operator/what-is-altershield-operator"},next:{title:"Quick Start",permalink:"/altershield-docs/altershield-operator/quick-start"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Docker",id:"docker",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"GoLang",id:"golang",level:3},{value:"Kustomize",id:"kustomize",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"This document introduces the prerequisites and preparation work for using AlterShield Operator."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h3",{id:"docker"},"Docker"),(0,o.kt)("p",null,"You need to install Docker to build and push images. Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker Installation Guide"),"."),(0,o.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,"You need a running Kubernetes cluster, and it is recommended to use version 1.19 and above. You can use ",(0,o.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"KIND")," or ",(0,o.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/"},"MINIKUBE")," to obtain a local cluster for testing. If you need to use a remote cluster, please configure it accordingly."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note\uff1a")," Your controller will automatically use the current context in the kubeconfig file (any content displayed by kubectl config get-contexts)."),(0,o.kt)("h3",{id:"golang"},"GoLang"),(0,o.kt)("p",null,"You need to install GoLang to run the controller locally. Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/doc/install"},"GoLang Installation Guide"),"."),(0,o.kt)("h3",{id:"kustomize"},"Kustomize"),(0,o.kt)("p",null,"You need to install Kustomize to use custom configuration to manage Kubernetes deployment files. Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://kubectl.docs.kubernetes.io/installation/kustomize/"},"Kustomize Installation Guide"),"."))}d.isMDXComponent=!0}}]);
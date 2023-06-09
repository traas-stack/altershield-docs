"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[929],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(r),h=n,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||a;return r?o.createElement(m,l(l({ref:t},d),{},{components:r})):o.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3095:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={},l="Quick Deploy",i={unversionedId:"altershield-operator/quick-deploy",id:"altershield-operator/quick-deploy",title:"Quick Deploy",description:"This document describes how to quickly deploy the AlterShield Operator to a Kubernetes cluster.",source:"@site/docs/05-altershield-operator/04-quick-deploy.md",sourceDirName:"05-altershield-operator",slug:"/altershield-operator/quick-deploy",permalink:"/docs/altershield-operator/quick-deploy",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/altershield-operator/quick-start"},next:{title:"User Guide",permalink:"/docs/altershield-operator/user-guide"}},c={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"Running on the Cluster",id:"running-on-the-cluster",level:2},{value:"Building and Pushing Docker Image",id:"building-and-pushing-docker-image",level:3},{value:"Deploy Method 1 (Recommended)",id:"deploy-method-1-recommended",level:3},{value:"Deploy Method 2",id:"deploy-method-2",level:3},{value:"Checking Whether the Service",id:"checking-whether-the-service",level:3},{value:"Uninstalling the Service",id:"uninstalling-the-service",level:3}],d={toc:s},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"quick-deploy"},"Quick Deploy"),(0,n.kt)("p",null,"This document describes how to quickly deploy the AlterShield Operator to a Kubernetes cluster."),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Before running the AlterShield Operator service, you need to read the following documentation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./getting-started"},"Getting Started"))),(0,n.kt)("h2",{id:"running-on-the-cluster"},"Running on the Cluster"),(0,n.kt)("h3",{id:"building-and-pushing-docker-image"},"Building and Pushing Docker Image"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Build the Docker image and push it to your image repository (replace xxx in the address):")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"make docker-build docker-push IMG=xxx/altershieldoperator:v1.0.0\n")),(0,n.kt)("h3",{id:"deploy-method-1-recommended"},"Deploy Method 1 (Recommended)"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Obtain the resource deployment file:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"make deployYaml IMG=xxx/altershieldoperator:v1.0.0\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The resource deployment file can be found in the config/samples/tmp directory.")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Execute the deployment:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f config/samples/tmp/Deployment.yaml\n")),(0,n.kt)("h3",{id:"deploy-method-2"},"Deploy Method 2"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Execute the deployment:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"make deploy IMG=xxx/altershieldoperator:v1.0.0\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When you see the following log output in the console, it means that the deployment is successful:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"namespace/altershieldoperator-system created\ncustomresourcedefinition.apiextensions.k8s.io/changepods.app.ops.cloud.alipay.com created\ncustomresourcedefinition.apiextensions.k8s.io/changeworkloads.app.ops.cloud.alipay.com created\ncustomresourcedefinition.apiextensions.k8s.io/opsconfiginfoes.app.ops.cloud.alipay.com created\nserviceaccount/altershieldoperator-controller-manager created\nrole.rbac.authorization.k8s.io/altershieldoperator-leader-election-role created\nclusterrole.rbac.authorization.k8s.io/altershieldoperator-manager-role created\nclusterrole.rbac.authorization.k8s.io/altershieldoperator-metrics-reader created\nclusterrole.rbac.authorization.k8s.io/altershieldoperator-proxy-role created\nrolebinding.rbac.authorization.k8s.io/altershieldoperator-leader-election-rolebinding created\nclusterrolebinding.rbac.authorization.k8s.io/altershieldoperator-manager-rolebinding created\nclusterrolebinding.rbac.authorization.k8s.io/altershieldoperator-proxy-rolebinding created\nservice/altershieldoperator-controller-manager-metrics-service created\nservice/altershieldoperator-webhook-service created\ndeployment.apps/altershieldoperator-controller-manager created\ncertificate.cert-manager.io/altershieldoperator-serving-cert created\nissuer.cert-manager.io/altershieldoperator-selfsigned-issuer created\nmutatingwebhookconfiguration.admissionregistration.k8s.io/altershieldoperator-mutating-webhook-configuration created\nvalidatingwebhookconfiguration.admissionregistration.k8s.io/altershieldoperator-validating-webhook-configuration created\n")),(0,n.kt)("h3",{id:"checking-whether-the-service"},"Checking Whether the Service"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Run the following command to check whether the service is deployed successfully:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get pods -n altershieldoperator-system\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When you see the following log output in the console, it means that the deployment is successful:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"NAME                                                     READY   STATUS    RESTARTS   AGE\naltershieldoperator-controller-manager-7f5f6f7f9-4q9q4   2/2     Running   0          2m\n")),(0,n.kt)("h3",{id:"uninstalling-the-service"},"Uninstalling the Service"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"make undeploy\n")))}p.isMDXComponent=!0}}]);
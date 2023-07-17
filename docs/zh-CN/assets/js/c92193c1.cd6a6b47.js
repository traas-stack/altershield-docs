"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[9432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},i="Webhook \u8c03\u8bd5",s={unversionedId:"altershield-operator/webhook-debug",id:"altershield-operator/webhook-debug",title:"Webhook \u8c03\u8bd5",description:"1. \u672c\u5730\u8c03\u8bd5",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/05-altershield-operator/07-webhook-debug.md",sourceDirName:"05-altershield-operator",slug:"/altershield-operator/webhook-debug",permalink:"/zh-CN/docs/altershield-operator/webhook-debug",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9ad8\u7ea7\u529f\u80fd",permalink:"/zh-CN/docs/altershield-operator/advanced-usage"}},l={},p=[{value:"1. \u672c\u5730\u8c03\u8bd5",id:"1-\u672c\u5730\u8c03\u8bd5",level:2},{value:"2. \u5c06\u96c6\u7fa4\u4e2d\u8bc1\u4e66\u5bfc\u51fa",id:"2-\u5c06\u96c6\u7fa4\u4e2d\u8bc1\u4e66\u5bfc\u51fa",level:2},{value:"3. \u672c\u5730\u542f\u52a8\uff0c\u5b8c\u6210\u8c03\u8bd5",id:"3-\u672c\u5730\u542f\u52a8\u5b8c\u6210\u8c03\u8bd5",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webhook-\u8c03\u8bd5"},"Webhook \u8c03\u8bd5"),(0,o.kt)("h2",{id:"1-\u672c\u5730\u8c03\u8bd5"},"1. \u672c\u5730\u8c03\u8bd5"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u672c\u6587\u5c06\u4ee5 ",(0,o.kt)("a",{parentName:"strong",href:"https://minikube.sigs.k8s.io/"},"MINIKUBE")," \u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u5982\u4f55\u5728\u672c\u5730\u8c03\u8bd5 Webhook\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Start MiniKube")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"minikube start --driver=docker\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:2},(0,o.kt)("li",{parentName:"ol"},"use minikube ssh to confirm connectivity")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"minikube ssh\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:3},(0,o.kt)("li",{parentName:"ol"},"Get the IP address that is accessible from the cluster to the host")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# ping host.minikube.internal\nPING host.minikube.internal (192.168.64.1): 56 data bytes\n64 bytes from 192.168.64.1: seq=0 ttl=64 time=0.225 ms\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"192.168.64.1")," is the IP address that is accessible from the cluster to the host\uff0c\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"li"},"config/dev/kustomization.yaml")," \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"{IP_Address}")," \u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"192.168.64.1"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'bases:\n  - ../default\n\npatches:\n  - patch: |\n      - op: "remove"\n        path: "/spec/dnsNames"\n    target:\n      kind: Certificate\n  - patch: |\n      - op: "add"\n        path: "/spec/ipAddresses"\n        value: ["{IP_Address}"]\n    target:\n      kind: Certificate\n  - patch: |\n      - op: "add"\n        path: "/webhooks/0/clientConfig/url"\n        value: "https://{IP_Address}:1443/mutate-apps-v1-deployment"\n    target:\n      kind: MutatingWebhookConfiguration\n  - patch: |\n      - op: "add"\n        path: "/webhooks/0/clientConfig/url"\n        value: "https://{IP_Address}:1443/validate-apps-v1-deployment"\n    target:\n      kind: ValidatingWebhookConfiguration\n  - patch: |\n      - op: "remove"\n        path: "/webhooks/0/clientConfig/service"\n    target:\n      kind: MutatingWebhookConfiguration\n  - patch: |\n      - op: "remove"\n        path: "/webhooks/0/clientConfig/service"\n    target:\n      kind: ValidatingWebhookConfiguration\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:6},(0,o.kt)("li",{parentName:"ol"},"\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u6267\u884c\u90e8\u7f72\u8c03\u8bd5\u7248\u672c\u547d\u4ee4")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"make dev\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:7},(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\uff0c\u67e5\u770b Webhook \u662f\u5426\u90e8\u7f72\u6210\u529f")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get mutatingwebhookconfigurations.admissionregistration.k8s.io altershieldoperator-mutating-webhook-configuration -o yaml\nkubectl get validatingwebhookconfigurations.admissionregistration.k8s.io altershieldoperator-validating-webhook-configuration -o yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: admissionregistration.k8s.io/v1\nkind: MutatingWebhookConfiguration\nmetadata:\n  annotations:\n    cert-manager.io/inject-ca-from: altershieldoperator-system/altershieldoperator-serving-cert\n    kubectl.kubernetes.io/last-applied-configuration: |\n      {"apiVersion":"admissionregistration.k8s.io/v1","kind":"MutatingWebhookConfiguration","metadata":{"annotations":{"cert-manager.io/inject-ca-from":"altershieldoperator-system/altershieldoperator-serving-cert"},"labels":{"app.kubernetes.io/component":"webhook","app.kubernetes.io/created-by":"altershieldoperator","app.kubernetes.io/instance":"mutating-webhook-configuration","app.kubernetes.io/managed-by":"kustomize","app.kubernetes.io/name":"mutatingwebhookconfiguration","app.kubernetes.io/part-of":"altershieldoperator"},"name":"altershieldoperator-mutating-webhook-configuration"},"webhooks":[{"admissionReviewVersions":["v1"],"clientConfig":{"url":"https://192.168.65.2:1443/mutate-apps-v1-deployment"},"failurePolicy":"Fail","name":"mdeployment.kb.io","namespaceSelector":{"matchLabels":{"admission-webhook-altershield":"enabled"}},"rules":[{"apiGroups":["apps"],"apiVersions":["v1"],"operations":["CREATE","UPDATE"],"resources":["deployments"]}],"sideEffects":"None"}]}\n  creationTimestamp: "2023-05-11T07:29:29Z"\n  generation: 2\n  labels:\n    app.kubernetes.io/component: webhook\n    app.kubernetes.io/created-by: altershieldoperator\n    app.kubernetes.io/instance: mutating-webhook-configuration\n    app.kubernetes.io/managed-by: kustomize\n    app.kubernetes.io/name: mutatingwebhookconfiguration\n    app.kubernetes.io/part-of: altershieldoperator\n  name: altershieldoperator-mutating-webhook-configuration\n  resourceVersion: "197855"\n  uid: 1b417fb7-2deb-47c1-a006-67a352a90d2e\nwebhooks:\n  - admissionReviewVersions:\n      - v1\n    clientConfig:\n      caBundle: ...(\u7565)\n      url: https://192.168.64.1:1443/mutate-apps-v1-deployment\n    failurePolicy: Fail\n    matchPolicy: Equivalent\n    name: mdeployment.kb.io\n    namespaceSelector:\n      matchLabels:\n        admission-webhook-altershield: enabled\n    objectSelector: {}\n    reinvocationPolicy: Never\n    rules:\n      - apiGroups:\n          - apps\n        apiVersions:\n          - v1\n        operations:\n          - CREATE\n          - UPDATE\n        resources:\n          - deployments\n        scope: \'*\'\n    sideEffects: None\n    timeoutSeconds: 10\n---\napiVersion: admissionregistration.k8s.io/v1\nkind: ValidatingWebhookConfiguration\nmetadata:\n  annotations:\n    cert-manager.io/inject-ca-from: altershieldoperator-system/altershieldoperator-serving-cert\n    kubectl.kubernetes.io/last-applied-configuration: |\n      {"apiVersion":"admissionregistration.k8s.io/v1","kind":"ValidatingWebhookConfiguration","metadata":{"annotations":{"cert-manager.io/inject-ca-from":"altershieldoperator-system/altershieldoperator-serving-cert"},"labels":{"app.kubernetes.io/component":"webhook","app.kubernetes.io/created-by":"altershieldoperator","app.kubernetes.io/instance":"validating-webhook-configuration","app.kubernetes.io/managed-by":"kustomize","app.kubernetes.io/name":"validatingwebhookconfiguration","app.kubernetes.io/part-of":"altershieldoperator"},"name":"altershieldoperator-validating-webhook-configuration"},"webhooks":[{"admissionReviewVersions":["v1"],"clientConfig":{"url":"https://192.168.65.2:1443/validate-apps-v1-deployment"},"failurePolicy":"Fail","name":"vdeployment.kb.io","namespaceSelector":{"matchLabels":{"admission-webhook-altershield":"enabled"}},"rules":[{"apiGroups":["apps"],"apiVersions":["v1"],"operations":["CREATE","UPDATE"],"resources":["deployments"]}],"sideEffects":"None"}]}\n  creationTimestamp: "2023-05-11T07:29:29Z"\n  generation: 2\n  labels:\n    app.kubernetes.io/component: webhook\n    app.kubernetes.io/created-by: altershieldoperator\n    app.kubernetes.io/instance: validating-webhook-configuration\n    app.kubernetes.io/managed-by: kustomize\n    app.kubernetes.io/name: validatingwebhookconfiguration\n    app.kubernetes.io/part-of: altershieldoperator\n  name: altershieldoperator-validating-webhook-configuration\n  resourceVersion: "197856"\n  uid: b3ea5378-1d88-491a-8c10-0e40e5495852\nwebhooks:\n  - admissionReviewVersions:\n      - v1\n    clientConfig:\n      caBundle: ...(\u7565)\n      url: https://192.168.64.1:1443/validate-apps-v1-deployment\n    failurePolicy: Fail\n    matchPolicy: Equivalent\n    name: vdeployment.kb.io\n    namespaceSelector:\n      matchLabels:\n        admission-webhook-altershield: enabled\n    objectSelector: {}\n    rules:\n      - apiGroups:\n          - apps\n        apiVersions:\n          - v1\n        operations:\n          - CREATE\n          - UPDATE\n        resources:\n          - deployments\n        scope: \'*\'\n    sideEffects: None\n    timeoutSeconds: 10\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u4ee5\u4e0a\u914d\u7f6e\u4e2d\uff0cWebhook \u670d\u52a1\u5c06\u4f1a\u8c03\u7528\u672c\u5730\u673a\u5668\u7684 1443 \u7aef\u53e3\uff0c\u6b64\u65f6\u5982\u679c\u6709Deployment\u53d1\u5e03\u5c06\u4f1a\u56e0\u4e3a\u8bc1\u4e66\u95ee\u9898\u800c\u5931\u8d25\uff0c\u56e0\u6b64\u9700\u8981\u5c06\u8bc1\u4e66\u5bfc\u51fa\u5230\u672c\u5730\u9879\u76ee\u4e2d\u3002"),(0,o.kt)("h2",{id:"2-\u5c06\u96c6\u7fa4\u4e2d\u8bc1\u4e66\u5bfc\u51fa"},"2. \u5c06\u96c6\u7fa4\u4e2d\u8bc1\u4e66\u5bfc\u51fa"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u67e5\u770b\u96c6\u7fa4\u4e2d\u7684\u8bc1\u4e66\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get secret -n altershieldoperator-system -o yaml \n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nitems:\n  - apiVersion: v1\n    data:\n      ca.crt: ...(\u7565)\n      tls.crt: ...(\u7565)\n      tls.key: ...(\u7565)\n    kind: Secret\n    metadata:\n      annotations:\n        cert-manager.io/alt-names: ""\n        cert-manager.io/certificate-name: altershieldoperator-serving-cert\n        cert-manager.io/common-name: ""\n        cert-manager.io/ip-sans: 192.168.65.2\n        cert-manager.io/issuer-group: ""\n        cert-manager.io/issuer-kind: Issuer\n        cert-manager.io/issuer-name: altershieldoperator-selfsigned-issuer\n        cert-manager.io/uri-sans: ""\n      creationTimestamp: "2023-05-11T07:29:29Z"\n      name: webhook-server-cert\n      namespace: altershieldoperator-system\n      resourceVersion: "197854"\n      uid: 25261ced-e462-4634-910c-d5862ed60720\n    type: kubernetes.io/tls\nkind: List\nmetadata:\n  resourceVersion: ""\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5c06\u8bc1\u4e66\u5bfc\u51fa\u5230\u672c\u5730\u9879\u76ee\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get secrets webhook-server-cert -n  altershieldoperator-system -o jsonpath='{..tls\\.crt}' |base64 -d > ./certs/tls.crt\nkubectl get secrets webhook-server-cert -n  altershieldoperator-system -o jsonpath='{..tls\\.key}' |base64 -d > ./certs/tls.key\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u67e5\u770b\u8bc1\u4e66\u6587\u4ef6")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#cat ./certs/tls.crt\n-----BEGIN CERTIFICATE-----\nYour tls.crd here\n-----END CERTIFICATE-----\n\n#cat ./certs/tls.key\n-----BEGIN RSA PRIVATE KEY-----\nYour tls.key here\n-----END RSA PRIVATE KEY-----\n\n")),(0,o.kt)("h2",{id:"3-\u672c\u5730\u542f\u52a8\u5b8c\u6210\u8c03\u8bd5"},"3. \u672c\u5730\u542f\u52a8\uff0c\u5b8c\u6210\u8c03\u8bd5"),(0,o.kt)("p",null,"\u60a8\u5728 Webhook \u7684\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u672c\u5730\u542f\u52a8\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./quick-start"},"Quick Start"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6b64\u65f6\uff0c\u5728\u96c6\u7fa4\u4e2d\u53d7\u5230\u7ba1\u63a7\u7684 Namespace \u4e0b\u53d1\u5e03 Deployment\uff0c\u5373\u53ef\u89e6\u53d1 Webhook \u7684\u8c03\u7528\u81f3\u672c\u5730\uff0c\u53ef\u770b\u5230 Webhook \u7684\u65e5\u5fd7\u8f93\u51fa")))}m.isMDXComponent=!0}}]);
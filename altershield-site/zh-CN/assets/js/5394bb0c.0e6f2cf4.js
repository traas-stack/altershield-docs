"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[406],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),i=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=i(e.components);return l.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(t),m=a,g=u["".concat(o,".").concat(m)]||u[m]||d[m]||r;return t?l.createElement(g,p(p({ref:n},c),{},{components:t})):l.createElement(g,p({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,p=new Array(r);p[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[u]="string"==typeof e?e:a,p[1]=s;for(var i=2;i<r;i++)p[i]=t[i];return l.createElement.apply(null,p)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var l=t(7462),a=(t(7294),t(3905));const r={},p="\u5feb\u901f\u5165\u95e8",s={unversionedId:"altershield-operator/quick-start",id:"altershield-operator/quick-start",title:"\u5feb\u901f\u5165\u95e8",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u8fd0\u884c AlterShield Operator \u670d\u52a1",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/05-altershield-operator/03-quick-start.md",sourceDirName:"05-altershield-operator",slug:"/altershield-operator/quick-start",permalink:"/zh-CN/altershield-operator/quick-start",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5165\u95e8\u6307\u5357",permalink:"/zh-CN/altershield-operator/getting-started"},next:{title:"\u5feb\u901f\u90e8\u7f72",permalink:"/zh-CN/altershield-operator/quick-deploy"}},o={},i=[{value:"Getting Started",id:"getting-started",level:2},{value:"\u8fd0\u884c\u672c\u5730\u670d\u52a1",id:"\u8fd0\u884c\u672c\u5730\u670d\u52a1",level:2},{value:"1. \u5b89\u88c5\u4f9d\u8d56:",id:"1-\u5b89\u88c5\u4f9d\u8d56",level:3},{value:"2. \u5c06crd\u81ea\u5b9a\u4e49\u8d44\u6e90\u6ce8\u518c\u5230k8s\u96c6\u7fa4\u4e2d:",id:"2-\u5c06crd\u81ea\u5b9a\u4e49\u8d44\u6e90\u6ce8\u518c\u5230k8s\u96c6\u7fa4\u4e2d",level:3},{value:"3. \u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u672c\u5730\u670d\u52a1:",id:"3-\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u672c\u5730\u670d\u52a1",level:3},{value:"\u9996\u6b21\u6d4b\u8bd5\u90e8\u7f72",id:"\u9996\u6b21\u6d4b\u8bd5\u90e8\u7f72",level:2},{value:"1. \u5c06default\u547d\u540d\u7a7a\u95f4\u8bbe\u7f6e\u4e3a\u88ab\u7ba1\u63a7",id:"1-\u5c06default\u547d\u540d\u7a7a\u95f4\u8bbe\u7f6e\u4e3a\u88ab\u7ba1\u63a7",level:3},{value:"2. \u521b\u5efa\u4e00\u4e2aDeployment\u8d44\u6e90 sleep",id:"2-\u521b\u5efa\u4e00\u4e2adeployment\u8d44\u6e90-sleep",level:3},{value:"3. \u68c0\u6d4b\u662f\u5426\u90e8\u7f72\u6210\u529f",id:"3-\u68c0\u6d4b\u662f\u5426\u90e8\u7f72\u6210\u529f",level:3},{value:"\u81ea\u6108\u56de\u6eda",id:"\u81ea\u6108\u56de\u6eda",level:2},{value:"1. \u6709\u610f\u8bbe\u7f6e\u4e3a\u9519\u8bef\u7684\u955c\u50cf\uff0c\u5e76\u4fee\u6539label test",id:"1-\u6709\u610f\u8bbe\u7f6e\u4e3a\u9519\u8bef\u7684\u955c\u50cf\u5e76\u4fee\u6539label-test",level:3},{value:"2. \u518d\u6b21\u68c0\u6d4bsleep deployment\u7684pod\u72b6\u6001",id:"2-\u518d\u6b21\u68c0\u6d4bsleep-deployment\u7684pod\u72b6\u6001",level:3},{value:"3. \u89c2\u5bdf\u56de\u6eda\u72b6\u6001",id:"3-\u89c2\u5bdf\u56de\u6eda\u72b6\u6001",level:3},{value:"4. \u7248\u672c\u56de\u6eda",id:"4-\u7248\u672c\u56de\u6eda",level:3}],c={toc:i},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5feb\u901f\u5165\u95e8"},"\u5feb\u901f\u5165\u95e8"),(0,a.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u8fd0\u884c AlterShield Operator \u670d\u52a1"),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"\u60a8\u5728\u8fd0\u884c AlterShield Operator \u670d\u52a1\u4e4b\u524d\uff0c\u9700\u8981\u9605\u8bfb\u4ee5\u4e0b\u6587\u6863\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./getting-started"},"\u5165\u95e8\u6307\u5357"))),(0,a.kt)("h2",{id:"\u8fd0\u884c\u672c\u5730\u670d\u52a1"},"\u8fd0\u884c\u672c\u5730\u670d\u52a1"),(0,a.kt)("h3",{id:"1-\u5b89\u88c5\u4f9d\u8d56"},"1. \u5b89\u88c5\u4f9d\u8d56:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"go mod tidy\n")),(0,a.kt)("h3",{id:"2-\u5c06crd\u81ea\u5b9a\u4e49\u8d44\u6e90\u6ce8\u518c\u5230k8s\u96c6\u7fa4\u4e2d"},"2. \u5c06crd\u81ea\u5b9a\u4e49\u8d44\u6e90\u6ce8\u518c\u5230k8s\u96c6\u7fa4\u4e2d:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f config/crd/bases\n")),(0,a.kt)("h3",{id:"3-\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u672c\u5730\u670d\u52a1"},"3. \u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u672c\u5730\u670d\u52a1:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9700\u8981\u8bbe\u7f6e\u73af\u5883\u53d8\u91cfENVIRONMENT=DEV")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ENVIRONMENT=DEV make run\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53\u60a8\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u65f6\uff0c\u8868\u793a\u670d\u52a1\u5df2\u7ecf\u542f\u52a8\u6210\u529f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{"level":"info","ts":"2023-05-10T14:44:33.604+0800","caller":"controller/controller.go:241","msg":"Starting workers","controller":"deployment","controllerGroup":"apps","controllerKind":"Deployment","worker count":5}\n{"level":"info","ts":"2023-05-10T14:44:33.604+0800","caller":"controller/controller.go:241","msg":"Starting workers","controller":"changepod","controllerGroup":"app.ops.cloud.alipay.com","controllerKind":"ChangePod","worker count":20}\n{"level":"info","ts":"2023-05-10T14:44:33.604+0800","caller":"controller/controller.go:241","msg":"Starting workers","controller":"pod","controllerGroup":"","controllerKind":"Pod","worker count":5}\n{"level":"info","ts":"2023-05-10T14:44:33.605+0800","caller":"controller/controller.go:241","msg":"Starting workers","controller":"changeworkload","controllerGroup":"app.ops.cloud.alipay.com","controllerKind":"ChangeWorkload","worker count":5}\n')),(0,a.kt)("h2",{id:"\u9996\u6b21\u6d4b\u8bd5\u90e8\u7f72"},"\u9996\u6b21\u6d4b\u8bd5\u90e8\u7f72"),(0,a.kt)("h3",{id:"1-\u5c06default\u547d\u540d\u7a7a\u95f4\u8bbe\u7f6e\u4e3a\u88ab\u7ba1\u63a7"},"1. \u5c06default\u547d\u540d\u7a7a\u95f4\u8bbe\u7f6e\u4e3a\u88ab\u7ba1\u63a7"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl label namespace default admission-webhook-altershield=enabled\n")),(0,a.kt)("p",null,"\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u65f6\uff0c\u8868\u793a\u8bbe\u7f6e\u6210\u529f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"namespace/default labeled\n")),(0,a.kt)("h3",{id:"2-\u521b\u5efa\u4e00\u4e2adeployment\u8d44\u6e90-sleep"},"2. \u521b\u5efa\u4e00\u4e2aDeployment\u8d44\u6e90 sleep"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: sleep\n  labels:\n    app: sleep\nspec:\n  replicas: 5\n  selector:\n    matchLabels:\n      app: sleep\n  template:\n    metadata:\n      labels:\n        app: sleep\n        test: "123"\n    spec:\n      containers:\n      - name: sleep\n        image: busybox\n        command: ["/bin/sleep","infinity"]\n        imagePullPolicy: IfNotPresent\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f config/samples/sleep.yaml\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53\u60a8\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u65f6\uff0c\u8868\u793a\u90e8\u7f72\u6210\u529f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"deployment.apps/sleep created\n")),(0,a.kt)("h3",{id:"3-\u68c0\u6d4b\u662f\u5426\u90e8\u7f72\u6210\u529f"},"3. \u68c0\u6d4b\u662f\u5426\u90e8\u7f72\u6210\u529f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get pods\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53\u60a8\u770b\u5230\u67095\u4e2asleep\u7684pod running\u65f6\uff0c\u8868\u793a\u90e8\u7f72\u6210\u529f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                     READY   STATUS    RESTARTS   AGE\nsleep-5c698f4449-5m5g4   1/1     Running   0          2m\nsleep-5c698f4449-ctfd5   1/1     Running   0          2m\nsleep-5c698f4449-jkv5r   1/1     Running   0          2m\nsleep-5c698f4449-rjgkn   1/1     Running   0          2m\nsleep-5c698f4449-7q9q2   1/1     Running   0          2m\n")),(0,a.kt)("h2",{id:"\u81ea\u6108\u56de\u6eda"},"\u81ea\u6108\u56de\u6eda"),(0,a.kt)("h3",{id:"1-\u6709\u610f\u8bbe\u7f6e\u4e3a\u9519\u8bef\u7684\u955c\u50cf\u5e76\u4fee\u6539label-test"},"1. \u6709\u610f\u8bbe\u7f6e\u4e3a\u9519\u8bef\u7684\u955c\u50cf\uff0c\u5e76\u4fee\u6539label test"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: sleep\n  labels:\n    app: sleep\nspec:\n  replicas: 5\n  selector:\n    matchLabels:\n      app: sleep\n  template:\n    metadata:\n      labels:\n        app: sleep\n        test: "456"\n    spec:\n      containers:\n        - name: sleep\n          image: busybo\n          command: ["/bin/sleep","infinity"]\n          imagePullPolicy: IfNotPresent\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u91cd\u65b0apply sleep.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f config/samples/sleep.yaml\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53\u60a8\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u65f6\uff0c\u8868\u793a\u90e8\u7f72\u6210\u529f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"deployment.apps/sleep configured\n")),(0,a.kt)("h3",{id:"2-\u518d\u6b21\u68c0\u6d4bsleep-deployment\u7684pod\u72b6\u6001"},"2. \u518d\u6b21\u68c0\u6d4bsleep deployment\u7684pod\u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get pods\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6b64\u65f6\u60a8\u4f1a\u53d1\u73b0sleep deployment\u7684pod\u72b6\u6001\u67094\u4e2arunning\uff0c3\u4e2aErrImagePull\uff0c\u8fd9\u662f\u7531\u4e8edeployment\u8bbe\u7f6e\u9519\u8bef\u7684\u955c\u50cf\u5e76\u4e14\u91c7\u7528\u4e86\u6eda\u52a8\u53d1\u5e03\uff0c\u5bfc\u81f4\u90e8\u5206pod\u7684\u72b6\u6001\u5f02\u5e38")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                     READY   STATUS             RESTARTS   AGE\nsleep-5c698f4449-5m5g4   1/1     Running            0          2m49s\nsleep-5c698f4449-ctfd5   1/1     Running            0          2m49s\nsleep-5c698f4449-jkv5r   1/1     Running            0          2m49s\nsleep-5c698f4449-rjgkn   1/1     Running            0          2m49s\nsleep-6c55bbc8d6-m6g64   0/1     ErrImagePull       0          76s\nsleep-6c55bbc8d6-nlzrf   0/1     ImagePullBackOff   0          76s\nsleep-6c55bbc8d6-x7wvc   0/1     ErrImagePull       0          76s\n")),(0,a.kt)("h3",{id:"3-\u89c2\u5bdf\u56de\u6eda\u72b6\u6001"},"3. \u89c2\u5bdf\u56de\u6eda\u72b6\u6001"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53pod\u72b6\u6001\u5f02\u5e38\u8d85\u8fc7\u9608\u503c\u65f6\u95f4\uff08\u9ed8\u8ba42\u5206\u949f\uff09\u540e\uff0cAlterShield Operator\u4f1a\u81ea\u52a8\u56de\u6edadeployment\u5230\u4e0a\u4e00\u4e2a\u6b63\u5e38\u7248\u672c\uff08\u5982\u679c\u5b58\u5728\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get pods\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b49\u5f85\u9608\u503c\u65f6\u95f4\u540e\uff0c\u60a8\u4f1a\u53d1\u73b0sleep deployment\u7684pod\u72b6\u6001\u5168\u90e8\u4e3arunning")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                     READY   STATUS    RESTARTS   AGE\nsleep-5c698f4449-5m5g4   1/1     Running   0          3m49s\nsleep-5c698f4449-ctfd5   1/1     Running   0          3m49s\nsleep-5c698f4449-jkv5r   1/1     Running   0          3m49s\nsleep-5c698f4449-rjgkn   1/1     Running   0          3m49s\nsleep-5c698f4449-7q9q2   1/1     Running   0          1m49s\n")),(0,a.kt)("h3",{id:"4-\u7248\u672c\u56de\u6eda"},"4. \u7248\u672c\u56de\u6eda"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get deployment sleep -o yaml\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'\u5f53\u524ddeployment\u7684template\u955c\u50cf\u4e3abusybox\uff0c\u5e76\u4e14test\u6807\u7b7e\u4e3a"123"')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  annotations:\n    deployment.kubernetes.io/revision: "3"\n    kubectl.kubernetes.io/last-applied-configuration: |\n      {"apiVersion":"apps/v1","kind":"Deployment","metadata":{"annotations":{},"labels":{"app":"sleep"},"name":"sleep","namespace":"default"},"spec":{"replicas":5,"selector":{"matchLabels":{"app":"sleep"}},"template":{"metadata":{"labels":{"app":"sleep","test":"1233"}},"spec":{"containers":[{"command":["/bin/sleep","infinity"],"image":"busybo","imagePullPolicy":"IfNotPresent","name":"sleep"}]}}}}\n  creationTimestamp: "2023-05-10T07:30:40Z"\n  generation: 3\n  labels:\n    admission-webhook-altershield.antgroup.com/version: c6c45d23c098bdf181853a85b60b5d74\n    altershield.defense.antgroup.com/defense-status: processed\n    app: sleep\n  name: sleep\n  namespace: default\n  resourceVersion: "174364"\n  uid: 63e253a2-d18a-4100-b928-38e004263762\nspec:\n  progressDeadlineSeconds: 600\n  replicas: 5\n  revisionHistoryLimit: 10\n  selector:\n    matchLabels:\n      app: sleep\n  strategy:\n    rollingUpdate:\n      maxSurge: 25%\n      maxUnavailable: 25%\n    type: RollingUpdate\n  template:\n    metadata:\n      creationTimestamp: null\n      labels:\n        admission-webhook-altershield.antgroup.com/version: c6c45d23c098bdf181853a85b60b5d74\n        app: sleep\n        test: "123"\n    spec:\n      containers:\n      - command:\n        - /bin/sleep\n        - infinity\n        image: busybox\n        imagePullPolicy: IfNotPresent\n        name: sleep\n        resources: {}\n        terminationMessagePath: /dev/termination-log\n        terminationMessagePolicy: File\n      dnsPolicy: ClusterFirst\n      restartPolicy: Always\n      schedulerName: default-scheduler\n      securityContext: {}\n      terminationGracePeriodSeconds: 30\nstatus:\n  availableReplicas: 5\n  conditions:\n  - lastTransitionTime: "2023-05-10T07:30:42Z"\n    lastUpdateTime: "2023-05-10T07:30:42Z"\n    message: Deployment has minimum availability.\n    reason: MinimumReplicasAvailable\n    status: "True"\n    type: Available\n  - lastTransitionTime: "2023-05-10T07:30:40Z"\n    lastUpdateTime: "2023-05-10T07:34:15Z"\n    message: ReplicaSet "sleep-5c698f4449" has successfully progressed.\n    reason: NewReplicaSetAvailable\n    status: "True"\n    type: Progressing\n  observedGeneration: 3\n  readyReplicas: 5\n  replicas: 5\n  updatedReplicas: 5\n')))}d.isMDXComponent=!0}}]);
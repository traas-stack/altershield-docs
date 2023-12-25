"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[1470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={hide_title:!0,sidebar_label:"\u90e8\u7f72\u6587\u6863",pagination_next:null},i="\u90e8\u7f72\u6587\u6863",o={unversionedId:"quick-start/dev-quick-start",id:"quick-start/dev-quick-start",title:"\u90e8\u7f72\u6587\u6863",description:"\u672c\u90e8\u7f72\u6559\u7a0b\u4e00\u5171\u5305\u542b\u4e86\u4e09\u4e2a\u90e8\u5206\u90e8\u7f72\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/02-quick-start/01-dev-quick-start.md",sourceDirName:"02-quick-start",slug:"/quick-start/dev-quick-start",permalink:"/zh-CN/docs/quick-start/dev-quick-start",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{hide_title:!0,sidebar_label:"\u90e8\u7f72\u6587\u6863",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"\u52a0\u5165\u6211\u4eec",permalink:"/zh-CN/docs/introduction/community"}},c={},s=[{value:"AlterShield\u4e3b\u7aef\u90e8\u7f72",id:"altershield\u4e3b\u7aef\u90e8\u7f72",level:2},{value:"\u4f7f\u7528Docker\u90e8\u7f72",id:"\u4f7f\u7528docker\u90e8\u7f72",level:3},{value:"\u4f7f\u7528K8S-yaml\u90e8\u7f72",id:"\u4f7f\u7528k8s-yaml\u90e8\u7f72",level:3},{value:"Operator\u90e8\u7f72",id:"operator\u90e8\u7f72",level:2},{value:"\u4f7f\u7528Docker\u90e8\u7f72",id:"\u4f7f\u7528docker\u90e8\u7f72-1",level:3},{value:"\u4f7f\u7528K8S\u90e8\u7f72",id:"\u4f7f\u7528k8s\u90e8\u7f72",level:3},{value:"\u7b97\u6cd5\u90e8\u7f72",id:"\u7b97\u6cd5\u90e8\u7f72",level:2},{value:"\u4f7f\u7528Docker\u90e8\u7f72",id:"\u4f7f\u7528docker\u90e8\u7f72-2",level:3},{value:"\u4f7f\u7528K8S\u90e8\u7f72",id:"\u4f7f\u7528k8s\u90e8\u7f72-1",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u90e8\u7f72\u6587\u6863"},"\u90e8\u7f72\u6587\u6863"),(0,r.kt)("p",null,"\u672c\u90e8\u7f72\u6559\u7a0b\u4e00\u5171\u5305\u542b\u4e86\u4e09\u4e2a\u90e8\u5206\u90e8\u7f72\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AlterShield\u4e3b\u7aef"),(0,r.kt)("li",{parentName:"ul"},"AlterShield-Operator"),(0,r.kt)("li",{parentName:"ul"},"AlterShield-Defender(\u7b97\u6cd5\u670d\u52a1)")),(0,r.kt)("p",null,"\u4ec5\u63d0\u4f9b\u4e86DEV\u7248\u672c\u90e8\u7f72\u65b9\u6848\uff0c\u8bf7\u8c28\u614e\u7528\u4e8e\u76f4\u63a5\u751f\u4ea7\uff01\uff01\uff01"),(0,r.kt)("h2",{id:"altershield\u4e3b\u7aef\u90e8\u7f72"},"AlterShield\u4e3b\u7aef\u90e8\u7f72"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AlterShield\u4f9d\u8d56\u7684\u4e2d\u95f4\u4ef6\uff1aMysql(\u5efa\u8bae8.0\uff09\u3002 \u76f8\u5173DDL\u89c1\u4e3b\u7aef\u6839\u76ee\u5f55\u4e0b",(0,r.kt)("inlineCode",{parentName:"strong"},"ddl.sql"))),(0,r.kt)("p",null,"\u4e00\u4e2a\u65b0\u63a5\u5165\u7684\u53d8\u66f4\u5e73\u53f0\u9700\u8981\u6ce8\u518c\uff1a\u53d8\u66f4\u7c7b\u578b\u3001\u53d8\u66f4\u5e73\u53f0\u3001\u53d8\u66f4\u573a\u666f\u3002\n\u7531\u4e8e\u5f53\u524d\u6ca1\u6709Dashboard\uff0c\u63d0\u4f9b\u4e86SQL\u7684\u65b9\u5f0f\u5feb\u901f\u521b\u5efa\u4e00\u4e2a\u7528\u4e8eOperator\u63a5\u5165\u4f7f\u7528\u7684\u53d8\u66f4\u5143\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- sequence\nINSERT INTO altershield.altershield_sequence (name, gmt_create, gmt_modified, value, min_value, max_value, step) VALUES ('seq_default', '2023-11-30 20:40:59', '2023-12-14 10:55:18', 14697005001, 0, 2821109907455, 1000);\n\n-- changeType\nINSERT INTO altershield.altershield_meta_change_type (id, gmt_create, gmt_modified, type, name, type_desc, category) VALUES ('20231207012470220000000000XX06R25Q0Q', '2023-12-07 17:06:22', '2023-12-07 17:06:22', 'pass.pod', 'pod', 'pod', 'contentType');\nINSERT INTO altershield.altershield_meta_change_type (id, gmt_create, gmt_modified, type, name, type_desc, category) VALUES ('20231207012470220000000000XX06R25Q0R', '2023-12-07 17:06:22', '2023-12-07 17:06:22', 'pass.pod', 'pod', 'pod', 'effectiveTargetType');\nINSERT INTO altershield.altershield_meta_change_type (id, gmt_create, gmt_modified, type, name, type_desc, category) VALUES ('20231207012470220000000000XX06R25Q0S', '2023-12-07 17:06:22', '2023-12-07 17:06:22', 'pass.pod', 'pod', 'pod', 'changeTargetType');\n\n-- chanePlatform\nINSERT INTO altershield.altershield_meta_platform (id, gmt_create, gmt_modified, platform_name, owner, description, token, scope, tenant) VALUES ('20231207012470240000000000XX06R25Q0P', '2023-12-07 17:06:08', '2023-12-07 17:06:08', 'kubernetes', 'system', null, 'altershield-operator', null, null);\n\n-- changeScene\nINSERT INTO altershield.altershield_meta_change_scene (id, gmt_create, gmt_modified, tenant_code, server_tenant_code, name, change_scene_key, owner, generation, risk_info, platform_name, scope, description, effective_target_type, change_content_type, change_target_type, change_effective_config_json_ref, callback_config_json_ref, tags_json_ref, status) VALUES ('20231207012470200000000000XX06R25QSJ', '2023-12-07 17:12:51', '2023-12-07 17:12:51', 'default', 'default', 'kubernetes\u5206\u6279\u53d1\u5e03', 'com.alipay.alitershield.kubernetes.rollingupdate', 'system', 'G2', null, 'kubernetes', null, null, 'paas.pod', 'paas.pod', 'paas.pod', '20231207012470100000000000XX06R25QSK', '20231207012470100000000000XX06R25QSL', null, 1);\nINSERT INTO altershield.altershield_meta_change_step (id, gmt_create, gmt_modified, name, change_scene_key, change_key, step_type, defence_config_json_ref, change_content_type, effective_target_type, change_target_type) VALUES ('20231207012470210000000000XX06R25QSH', '2023-12-07 17:12:51', '2023-12-07 19:30:30', 'kubernetes\u5206\u6279\u53d1\u5e03\u53d8\u66f4\u5de5\u5355', 'com.alipay.alitershield.kubernetes.rollingupdate', 'com.alipay.alitershield.kubernetes.rollingupdate', 'STEP_ORDER', '{\"enablePostCheck\":true,\"enablePreCheck\":true,\"postCheckTimeout\":30000,\"preCheckTimeout\":30000}', null, null, 'paas.pod');\nINSERT INTO altershield.altershield_meta_change_step (id, gmt_create, gmt_modified, name, change_scene_key, change_key, step_type, defence_config_json_ref, change_content_type, effective_target_type, change_target_type) VALUES ('20231207012470210000000000XX06R25QSI', '2023-12-07 17:12:51', '2023-12-07 19:30:30', 'kubernetes\u5206\u6279\u53d1\u5e03\u53d8\u66f4\u5206\u6279', 'com.alipay.alitershield.kubernetes.rollingupdate', 'com.alipay.alitershield.kubernetes.rollingupdate._batch', 'STEP_GRAY_BATCH', '{\"enablePostCheck\":true,\"enablePreCheck\":true,\"postCheckTimeout\":30000,\"preCheckTimeout\":30000}', null, null, 'paas.pod');\nINSERT INTO altershield.altershield_key_value (name, serial_num, gmt_create, gmt_modified, value) VALUES ('20231207012470100000000000XX06R25QSK', 1, '2023-12-07 20:39:15', '2023-12-07 20:39:15', '{\"changeGrayEnvType\":\"ENV\",\"changeGrayModeType\":\"PIPELINE\",\"enableRollback\":false}');\nINSERT INTO altershield.altershield_key_value (name, serial_num, gmt_create, gmt_modified, value) VALUES ('20231207012470100000000000XX06R25QSL', 1, '2023-12-07 20:39:15', '2023-12-07 20:39:15', '{\"callbackConfig\":{\"DEFAULT\":\"http://192.168.120.189:8080/openapi/opscloud/callback\"},\"signVersion\":\"1.0\"}');\n\n-- defenseRule\nINSERT INTO altershield.altershield_meta_defender_rule (id, gmt_create, gmt_modified, name, suggestion, owner, stage, status, exception_strategy, defense_range_type, defense_range_key, external_id, tenant, delay_second, plugin_key, main_class, plugin_invoke_type, ignore_tag, max_detect_second, arg_ref, change_filter_ref) VALUES ('20231214012474030000000000XX06R27SVZ', '2023-12-14 14:10:55', '2023-12-14 14:10:55', '\u667a\u80fd\u76d1\u63a7\u89c4\u5219', '', 'system', 'POST', 'DISABLED', 'BLOCK', 'CHANGE_BATCH', 'com.alipay.alitershield.kubernetes.rollingupdate._batch', null, null, 0, 'monitor_metric_detection_plugin', 'com.alipay.altershield.shared.pluginmarket.innerplugin.defender.MonitorMetricDetectionPlugin', 'ASYNC', 'IGNORE', 0, null, null);\n\n")),(0,r.kt)("p",null,"\u5728\u4e3b\u7aefaltershield-bootstrap\u76ee\u5f55\u66f4\u65b0",(0,r.kt)("inlineCode",{parentName:"p"},"application-dev.yaml"),"\u66f4\u65b0\u5230\u81ea\u5df1\u7684\u6570\u636e\u5e93\u5730\u5740\uff0c\u76ee\u524ddev\u955c\u50cf\u9ed8\u8ba4\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  datasource:\n    jdbc-url: jdbc:mysql://localhost:3306/altershield?allowPublicKeyRetrieval=true&useSSL=false\n    username: altershield\n    password: altershield\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528docker\u90e8\u7f72"},"\u4f7f\u7528Docker\u90e8\u7f72"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ps\uff1a\u6309\u7167\u9ed8\u8ba4\u914d\u7f6e\u521b\u5efa\u597d\u6570\u636e\u5e93\u5e76\u521d\u59cb\u5316\u6570\u636e\u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"platform\uff1alinux/amd64")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker push altershield/altershield:dev-1.0.0")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker run -d -p 8080:8080 altershield/altershield:dev-1.0.0")),(0,r.kt)("h3",{id:"\u4f7f\u7528k8s-yaml\u90e8\u7f72"},"\u4f7f\u7528K8S-yaml\u90e8\u7f72"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: altershield-deployment\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: altershield\n  template:\n    metadata:\n      labels:\n        app: altershield\n    spec:\n      containers:\n        - name: altershield\n          image: altershield/altershield:dev-1.0.0\n          ports:\n            - containerPort: 8080\n")),(0,r.kt)("h2",{id:"operator\u90e8\u7f72"},"Operator\u90e8\u7f72"),(0,r.kt)("h3",{id:"\u4f7f\u7528docker\u90e8\u7f72-1"},"\u4f7f\u7528Docker\u90e8\u7f72"),(0,r.kt)("h3",{id:"\u4f7f\u7528k8s\u90e8\u7f72"},"\u4f7f\u7528K8S\u90e8\u7f72"),(0,r.kt)("h2",{id:"\u7b97\u6cd5\u90e8\u7f72"},"\u7b97\u6cd5\u90e8\u7f72"),(0,r.kt)("p",null,"\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u524d\u5f80",(0,r.kt)("a",{parentName:"p",href:"https://github.com/traas-stack/altershield-monitorCheck/blob/main/README_CN.md"},"monitor-check\u4ed3\u5e93"),"\u67e5\u770b"),(0,r.kt)("h3",{id:"\u4f7f\u7528docker\u90e8\u7f72-2"},"\u4f7f\u7528Docker\u90e8\u7f72"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker pull altershield/altershield-defender:monitor-check-beta-1.0.0")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker run -d -p 8083:8083 altershield/altershield-defender:monitor-check-beta-1.0.0")),(0,r.kt)("h3",{id:"\u4f7f\u7528k8s\u90e8\u7f72-1"},"\u4f7f\u7528K8S\u90e8\u7f72"),(0,r.kt)("p",null,"\u521b\u5efaDeployment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: monitor-check-deployment\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: monitor-check-beta\n  template:\n    metadata:\n      labels:\n        app: monitor-check-beta\n    spec:\n      containers:\n      - name: monitor-check-beta\n        image: altershield/altershield-defender:monitor-check-beta-1.0.0\n        ports:\n        - containerPort: 8083\n")),(0,r.kt)("p",null,"\u521b\u5efaService"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: bmc-test-svc\n  namespace: bmc-test\nspec:\n  ports:\n  - port: 8083\n    protocol: TCP\n    targetPort: 8083\n  selector:\n    app: bmc-test-v3 # \u8fd9\u91cc\u9700\u8981\u7ed1\u5b9aapp\n  type: ClusterIP\n")))}u.isMDXComponent=!0}}]);
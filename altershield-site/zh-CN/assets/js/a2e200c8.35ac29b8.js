"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[6307],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(t),g=a,d=u["".concat(c,".").concat(g)]||u[g]||m[g]||i;return t?r.createElement(d,p(p({ref:n},s),{},{components:t})):r.createElement(d,p({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=g;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1758:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_label:"\u53d8\u66f4\u4fe1\u606f\u6a21\u578b"},p="\u53d8\u66f4\u4fe1\u606f\u6a21\u578b",o={unversionedId:"open-change-management-specification/change-model",id:"open-change-management-specification/change-model",title:"\u53d8\u66f4\u4fe1\u606f\u6a21\u578b",description:"---",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/03-open-change-management-specification/02-change-model.md",sourceDirName:"03-open-change-management-specification",slug:"/open-change-management-specification/change-model",permalink:"/zh-CN/docs/open-change-management-specification/change-model",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"\u53d8\u66f4\u4fe1\u606f\u6a21\u578b"},sidebar:"tutorialSidebar",previous:{title:"Start With Docker",permalink:"/zh-CN/docs/quick-start/start-with-docker"},next:{title:"\u53d8\u66f4\u63a5\u5165SDK",permalink:"/zh-CN/docs/open-change-management-specification/change-access-sdk"}},c={},l=[{value:"\u4ec0\u4e48\u662f\u53d8\u66f4\u4fe1\u606f\u6a21\u578b",id:"\u4ec0\u4e48\u662f\u53d8\u66f4\u4fe1\u606f\u6a21\u578b",level:2},{value:"\u80cc\u666f",id:"\u80cc\u666f",level:3},{value:"\u5982\u4f55\u5b9a\u4e49\u53d8\u66f4",id:"\u5982\u4f55\u5b9a\u4e49\u53d8\u66f4",level:3},{value:"\u600e\u4e48\u5b9a\u4e49\u53d8\u66f4\u7684\u5f71\u54cd\u9762",id:"\u600e\u4e48\u5b9a\u4e49\u53d8\u66f4\u7684\u5f71\u54cd\u9762",level:3},{value:"\u600e\u4e48\u5b9a\u4e49\u53d8\u66f4\u7684\u751f\u6548\u65b9\u5f0f",id:"\u600e\u4e48\u5b9a\u4e49\u53d8\u66f4\u7684\u751f\u6548\u65b9\u5f0f",level:3},{value:"JSON Schema\u5b9a\u4e49",id:"json-schema\u5b9a\u4e49",level:3}],s={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53d8\u66f4\u4fe1\u606f\u6a21\u578b"},"\u53d8\u66f4\u4fe1\u606f\u6a21\u578b"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f\u53d8\u66f4\u4fe1\u606f\u6a21\u578b"},"\u4ec0\u4e48\u662f\u53d8\u66f4\u4fe1\u606f\u6a21\u578b"),(0,a.kt)("h3",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,a.kt)("p",null,'\u53d8\u66f4\u7ba1\u63a7\u7cfb\u7edf\u5b9e\u65bd"\u4fe1\u606f\u6807\u51c6\u5316"\u65b9\u5f0f\uff0c\u8fd9\u79cd\u4fe1\u606f\u6807\u51c6\u5316\u53ef\u4ee5\u5c4f\u853d\u4e0d\u540c\u4e1a\u52a1\u573a\u666f\u5e26\u6765\u7684\u53d8\u66f4\u5dee\u5f02\u6027\uff0c\u5e76\u5c06\u4e0d\u540c\u573a\u666f\u7684\u53d8\u66f4\u8fdb\u884c\u7ed3\u6784\u5316\u7edf\u4e00\u3002\u53e6\u4e00\u4e2a\u597d\u5904\u662f\u53ef\u4ee5\u5c06"\u53d8\u66f4\u6267\u884c"\u548c"\u53d8\u66f4\u98ce\u9669\u7ba1\u63a7"\u62c6\u5206\u6210\u4e24\u4ef6\u72ec\u7acb\u7684\u4e8b\u60c5\uff0c\u8ba9\u53d8\u66f4\u7cfb\u7edf\u7814\u53d1\u56e2\u961f\u548c\u6280\u672f\u98ce\u9669\u56e2\u961f\uff08SRE/\u8fd0\u7ef4/\u8d28\u91cf\uff09\u53ef\u4ee5\u5404\u81ea\u5206\u5de5\uff0c\u964d\u4f4e\u6c9f\u901a\u4e0e\u91cd\u590d\u5efa\u8bbe\u6210\u672c\u3002'),(0,a.kt)("h3",{id:"\u5982\u4f55\u5b9a\u4e49\u53d8\u66f4"},"\u5982\u4f55\u5b9a\u4e49\u53d8\u66f4"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u5728\u601d\u8003\u5982\u4f55\u5efa\u7acb\u4fe1\u606f\u6a21\u578b\u4e4b\u524d\uff0c\u60a8\u9700\u8981\u4e86\u89e3\u7684\u7b2c\u4e00\u4e2a\u95ee\u9898\u662f\uff1a\u5982\u4f55\u5b9a\u4e49\u53d8\u66f4\uff1f\uff08\u4e86\u89e3\u53d8\u66f4\u7ba1\u63a7\u7cfb\u7edf\u8bf7\u53c2\u8003\u524d\u6587\u300a",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/introduction/what-is-change-management"},"\u521d\u8bc6\u53d8\u66f4\u7ba1\u63a7"),"\u300b)",(0,a.kt)("br",{parentName:"p"}),"\n","\u60a8\u53ef\u4ee5\u5c1d\u8bd5\u4ece\u4f7f\u7528\u573a\u666f\u3001\u81ea\u7136\u8bed\u8a00\u4e24\u4e2a\u89d2\u5ea6\u51fa\u53d1\u3002\u5728\u57fa\u4e8e\u8fd9\u4e24\u4e2a\u89d2\u5ea6\uff0c\u5c06\u53d8\u66f4\u57fa\u7840\u4fe1\u606f\u7684\u8bed\u4e49\u5316\u5b9a\u4e49\u603b\u7ed3\u4e3a\u4e94\u5143\u7ec4\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://intranetproxy.alipay.com/skylark/lark/0/2022/png/78656390/1670558359332-0c7d175d-f71a-4f53-9c7a-9b5de710aca4.png",alt:"\u56fe"})),(0,a.kt)("p",null,"\u4ee5\u4e0a\u662f\u5bf9\u4e8e\u53d8\u66f4\u4fe1\u606f\u6a21\u578b\u4e2d\u57fa\u7840\u4fe1\u606f\u7684\u5b9a\u4e49\u3002"),(0,a.kt)("h3",{id:"\u600e\u4e48\u5b9a\u4e49\u53d8\u66f4\u7684\u5f71\u54cd\u9762"},"\u600e\u4e48\u5b9a\u4e49\u53d8\u66f4\u7684\u5f71\u54cd\u9762"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u4e00\u6b21\u53d8\u66f4\u7684\u5f71\u54cd\u5e76\u4e0d\u5c40\u9650\u4e8e\u53d8\u66f4\u4f5c\u7528\u5bf9\u8c61\u672c\u8eab\u3002\u5b9e\u9645\u4e0a\uff0c\u7531\u4e8e\u4e1a\u52a1\u7cfb\u7edf\u7684\u590d\u6742\u6027\uff0c\u4e00\u4e2a\u7cfb\u7edf\u81ea\u8eab\u7684\u53d8\u66f4\uff0c\u53ef\u80fd\u6ce2\u53ca\u5230\u6574\u6761\u4e1a\u52a1\u94fe\u8def\u3002 \u6240\u4ee5\uff0c\u4ec5\u4ece\u4e0a\u6587\u57fa\u7840\u4fe1\u606f\u7684\u5b9a\u4e49\uff0c\u6765\u5f52\u7eb3\u53d8\u66f4\u7684\u5f71\u54cd\u8303\u56f4\uff0c\u662f\u8fdc\u8fdc\u4e0d\u591f\u7528\u6765\u505a\u4e3a\u540e\u7eed\u98ce\u9669\u8bc6\u522b\u4ee5\u53ca\u5e94\u6025\u5b9a\u4f4d\u8f85\u52a9\u7684\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u9664\u4e86\u57fa\u7840\u4fe1\u606f\u5916\uff0c\u8fd8\u9700\u8981\u4e00\u79cd\u7ed3\u6784\uff0c\u6765\u63cf\u8ff0\u53d8\u66f4\u7684\u5f71\u54cd\u9762\u4fe1\u606f\u3002"),(0,a.kt)("p",null,'\u5728\u53c2\u8003\u4e86\u5927\u91cf\u7684"\u53d8\u66f4\u52a8\u4f5c"\u540e\uff0c\u53ef\u4ee5\u5927\u81f4\u628a\u53d8\u66f4\u5206\u4e3a\u4e09\u5927\u7c7b\u6765\u63cf\u8ff0\u53d8\u66f4\u7684\u5f71\u54cd\u9762\uff0c\u4e14\u53d1\u73b0\u4e86\u4e00\u4e2a\u89c4\u5f8b\uff1a'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e1a\u52a1\u5c42\u9762\u7684\u53d8\u66f4\uff08\u793a\u4f8b\uff1a\u4fee\u6539\u67d0\u4e9b\u8fd0\u8425\u6d3b\u52a8\u7684\u914d\u7f6e\uff09\uff1a\u5bf9\u4e8e\u8fd9\u7c7b\u53d8\u66f4\uff0c\u5176\u751f\u6548\u7684\u8fc7\u7a0b\u4e00\u5b9a\u662f\u7531\u67d0\u4e2a\u7cfb\u7edf\u6765\u627f\u8f7d\u7684\u3002\u8fd9\u4e2a\u7cfb\u7edf\u53ef\u4ee5\u662f\u670d\u52a1\u7aef\u3001\u524d\u7aef\u3001\u79fb\u52a8\u7aef\u6216\u5c0f\u7a0b\u5e8f\u7b49\u4efb\u4f55\u5f62\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u7ef4\u5c42\u9762\u7684\u53d8\u66f4\uff08\u793a\u4f8b\uff1a\u53d1\u5e03\u67d0\u4e2a\u7cfb\u7edf\u7684\u4ee3\u7801\uff09\uff1a\u5bf9\u4e8e\u8fd9\u7c7b\u53d8\u66f4\uff0c\u5176\u751f\u6548\u7684\u8fc7\u7a0b\u662f\u76f4\u63a5\u5728\u67d0\u4e2a\u7cfb\u7edf\u6216\u5176\u6240\u5c5e\u7684\u90e8\u7f72\u8d44\u6e90\u4e2d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u7840\u8bbe\u65bd\u5c42\u9762\u7684\u53d8\u66f4\uff08\u793a\u4f8b\uff1a\u5220\u9664\u67d0\u4e2a\u7269\u7406\u673a\u8282\u70b9\uff09\uff1a\u5bf9\u4e8e\u8fd9\u7c7b\u53d8\u66f4\uff0c\u5176\u751f\u6548\u8fc7\u7a0b\u53ef\u80fd\u8ddd\u5e94\u7528\u7cfb\u7edf\u8f83\u8fdc\uff0c\u4f46\u53d8\u66f4\u7684\u5bf9\u8c61\uff0c\u4e00\u5b9a\u662f\u67d0\u4e00\u6279\u5e94\u7528\u7cfb\u7edf\u6240\u4f9d\u8d56\u7684\u90e8\u7f72\u8d44\u6e90\u3002")),(0,a.kt)("p",null,"\u6240\u4ee5\uff0c\u4f9d\u7167\u4e0a\u8ff0\u603b\u7ed3\uff0c\u901a\u8fc7\u5e94\u7528\u7cfb\u7edf\u6240\u5177\u5907\u7684\u8d44\u6e90\u3001\u4f9d\u8d56\u3001\u5c5e\u6027\u6765\u89e3\u6784\u4fe1\u606f\u6280\u672f\u884c\u4e1a\u76f8\u5173\u7684\u53d8\u66f4\u5f71\u54cd\u9762\u4fe1\u606f\u3002\u5f52\u7eb3\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8d34\u4e00\u5f20\u5e94\u7528\u90e8\u7f72\u6a21\u5f0f\u56fe")),(0,a.kt)("p",null,"\u6839\u636e\u4e0a\u56fe\u5185\u5bb9\u6240\u793a\uff0c\u53d8\u66f4\u7684\u5f71\u54cd\u9762\u4fe1\u606f\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u7ed3\u6784\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'\u7cfb\u7edf\u5185\u90e8\u5f71\u54cd\u9762\uff1a\u5e94\u7528\u7cfb\u7edf\u81ea\u8eab\u5177\u5907\u7684\u6280\u672f"\u5c5e\u6027"\uff0c\u5305\u542b\u7cfb\u7edf\u5185\u90e8\u53d1\u5e03\u7684HTTP\u670d\u52a1\u3001RPC\u670d\u52a1\u3001\u8bbf\u95ee\u8d44\u91d1\u7684SQL\u8bed\u53e5\u548c\u6253\u5370\u7684\u65e5\u5fd7\u6587\u4ef6\u7b49\u3002'),(0,a.kt)("li",{parentName:"ul"},'\u4e1a\u52a1\u94fe\u8def\u5f71\u54cd\u9762\uff1a\u5e94\u7528\u7cfb\u7edf\u7684\u4e1a\u52a1"\u5c5e\u6027"\uff0c\u5305\u542b\u7cfb\u7edf\u6240\u5c5e\u4e1a\u52a1\u94fe\u8def\u7684\u5b9a\u4e49\u3001\u4e0a\u4e0b\u6e38\u7cfb\u7edf\u5173\u7cfb\u548c\u4e1a\u52a1\u6d41\u91cf\u4e2d\u9884\u4f30\u7684\u5f71\u54cd\u7528\u6237\u6570\u7b49\u3002'),(0,a.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u8d44\u6e90\u5f71\u54cd\u9762\uff1a\u5e94\u7528\u7cfb\u7edf\u90e8\u7f72\u7684\u7ed3\u6784\u5173\u7cfb\uff0c\u5305\u542b\u7cfb\u7edf\u6240\u90e8\u7f72\u7684\u865a\u62df\u673a\u3001\u7269\u7406\u673a\u548c\u547d\u540d\u7a7a\u95f4\u7b49\u8d44\u6e90\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u4f9d\u8d56\u5f71\u54cd\u9762\uff1a\u5e94\u7528\u7cfb\u7edf\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u5305\u542b\u7cfb\u7edf\u4f9d\u8d56\u7684\u6570\u636e\u5b58\u50a8\u4fe1\u606f\u3001\u6570\u636e\u8ba1\u7b97\u4fe1\u606f\u548c\u4e2d\u95f4\u4ef6\u4fe1\u606f\u7b49\u3002")),(0,a.kt)("h3",{id:"\u600e\u4e48\u5b9a\u4e49\u53d8\u66f4\u7684\u751f\u6548\u65b9\u5f0f"},"\u600e\u4e48\u5b9a\u4e49\u53d8\u66f4\u7684\u751f\u6548\u65b9\u5f0f"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u4e86\u89e3\u53d8\u66f4\u751f\u7684\u6548\u65b9\u5f0f\u5b9a\u4e49\u4e4b\u524d\uff0c\u60a8\u9700\u8981\u660e\u786e\u4e00\u4ef6\u4e8b\uff1a",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},'\u4e00\u6b21\u53d8\u66f4\u60f3\u8981\u8fdb\u884c\u4e25\u683c\u3001\u5b8c\u5168\u7684\u98ce\u9669\u7ba1\u63a7\uff0c\u90a3\u4e48\u5b83\u7edd\u5bf9\u4e0d\u5e94\u8be5\u662f\u4ee5"\u68ad\u54c8"\u5f62\u5f0f\u5728\u7ebf\u4e0a\u73af\u5883\u751f\u6548\u7684\u3002'))),(0,a.kt)("p",null,'\u6240\u4ee5\uff0c\u5728\u8fd9\u4e2a\u6bb5\u843d\u9700\u8981\u8ba8\u8bba\u7684\u662f"\u4ee5\u67d0\u79cd\u65b9\u5f0f\u9010\u6b65\u5728\u7ebf\u4e0a\u73af\u5883\u751f\u6548\u7684\u53d8\u66f4"\u600e\u4e48\u901a\u8fc7\u7ed3\u6784\u5316\u7684\u65b9\u5f0f\u8fdb\u884c\u63cf\u8ff0\u3002'),(0,a.kt)("p",null,"\u5728ChangeRiskPilot\u91cc\u9762\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u51e0\u79cd\u5e38\u89c1\u7684\u53d8\u66f4\u751f\u6548\u65b9\u5f0f\uff0c\u6b22\u8fce\u60a8\u6765\u8fdb\u884c\u8865\u5145\u53ca\u6307\u6b63\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'\u4f20\u7edf\u7684\u673a\u5668\u5206\u6279\u6a21\u5f0f\uff1a\u4e5f\u662f\u6700\u5e38\u89c1\u7684"\u91d1\u4e1d\u96c0\u53d1\u5e03"\u6a21\u5f0f\u3002'),(0,a.kt)("li",{parentName:"ul"},"\u6309\u6d41\u91cf\u6bd4\u4f8b\u5206\u6279\u6a21\u5f0f\uff1a\u6309\u7167\u6d41\u91cf\u914d\u6bd4\uff0c\u8fdb\u884c1%\u30015%\u300110%...\u7684\u6d41\u91cf\u6bd4\u4f8b\u7684\u9010\u6b65\u751f\u6548\uff0c\u5e38\u89c1\u4e8e\u4e0e\u4e1a\u52a1\u5f3a\u76f8\u5173\u6216\u4e0e\u7528\u6237\u4ea4\u4e92\u7684\u53d8\u66f4\u3002(\u793a\u4f8b\uff1a\u524d\u7aef/\u5ba2\u6237\u7aef\u7cfb\u7edf\u7684\u5347\u7ea7\u548c\u8fd0\u8425\u6d3b\u52a8\u7684\u751f\u6548\u7b49\u3002\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u5206\u6279\u53d8\u66f4\u7684\u72ec\u7acb\u73af\u5883\u9a8c\u8bc1\u6a21\u5f0f\uff1a\u5bf9\u4e8e\u65e0\u6cd5\u8fdb\u884c\u62c6\u5206\u7684\u53d8\u66f4\uff08\u793a\u4f8b\uff1aDB\u914d\u7f6e\u7c7b\u578b\u53d8\u66f4\uff09\uff0c\u9700\u8981\u4e00\u4e2a\u72ec\u7acb\u7684\u73af\u5883\u8fdb\u884c\u7070\u5ea6\uff0c\u6765\u9a8c\u8bc1\u53d8\u66f4\u7684\u6b63\u786e\u6027\u3002")),(0,a.kt)("h3",{id:"json-schema\u5b9a\u4e49"},"JSON Schema\u5b9a\u4e49"),(0,a.kt)("p",null,"\u4ee5\u4e0a\uff0c\u662f\u5bf9\u4e8e\u53d8\u66f4\u4fe1\u606f\u6a21\u578b\u6807\u51c6\u5b9a\u4e49\u7684\u4e09\u4e2a\u7ef4\u5ea6\uff0c\u5177\u4f53\u7684JSON Schema\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'{\n  "$schema": "http://json-schema.org/draft-04/schema#",\n  "type": "object",\n  "properties": {\n    "planStartTime": {\n      "type": "string"\n    },\n    "changeTitle": {\n      "type": "string"\n    },\n    "changeUrl": {\n      "type": "string"\n    },\n    "creator": {\n      "type": "string"\n    },\n    "changeScenarioCode": {\n      "type": "string"\n    },\n    "changePhases": {\n      "type": "array",\n      "items": [\n        {\n          "type": "string"\n        }\n      ]\n    },\n    "changeTargets": {\n      "type": "array",\n      "items": [\n        {\n          "type": "object",\n          "properties": {\n            "instanceName": {\n              "type": "string"\n            },\n            "changeTargetType": {\n              "type": "object",\n              "properties": {\n                "typeName": {\n                  "type": "string"\n                }\n              },\n              "required": [\n                "typeName"\n              ]\n            }\n          },\n          "required": [\n            "instanceName",\n            "changeTargetType"\n          ]\n        }\n      ]\n    },\n    "changeContents": {\n      "type": "array",\n      "items": [\n        {\n          "type": "object",\n          "properties": {\n            "contentType": {\n              "type": "object",\n              "properties": {\n                "typeName": {\n                  "type": "string"\n                }\n              },\n              "required": [\n                "typeName"\n              ]\n            },\n            "instanceName": {\n              "type": "string"\n            }\n          },\n          "required": [\n            "contentType",\n            "instanceName"\n          ]\n        }\n      ]\n    },\n    "changeParamJson": {\n      "type": "string"\n    },\n    "changeApps": {\n      "type": "array",\n      "items": [\n        {\n          "type": "string"\n        }\n      ]\n    },\n    "parentOrderInfo": {\n      "type": "object",\n      "properties": {\n        "orderId": {\n          "type": "string"\n        },\n        "orderTitle": {\n          "type": "string"\n        },\n        "orderUrl": {\n          "type": "string"\n        }\n      },\n      "required": [\n        "orderId",\n        "orderTitle",\n        "orderUrl"\n      ]\n    },\n    "trace": {\n      "type": "object",\n      "properties": {\n        "traceId": {\n          "type": "string"\n        },\n        "coord": {\n          "type": "object",\n          "properties": {\n            "coord": {\n              "type": "string"\n            }\n          },\n          "required": [\n            "coord"\n          ]\n        }\n      },\n      "required": [\n        "traceId",\n        "coord"\n      ]\n    },\n    "changeSceneKey": {\n      "type": "string"\n    },\n    "bizExecOrderId": {\n      "type": "string"\n    },\n    "platform": {\n      "type": "string"\n    }\n  },\n  "required": [\n    "planStartTime",\n    "changeTitle",\n    "changeUrl",\n    "creator",\n    "changeScenarioCode",\n    "changePhases",\n    "changeTargets",\n    "changeContents",\n    "changeParamJson",\n    "changeApps",\n    "parentOrderInfo",\n    "trace",\n    "tldcTenantCode",\n    "changeSceneKey",\n    "bizExecOrderId",\n    "platform"\n  ]\n}\n')))}m.isMDXComponent=!0}}]);
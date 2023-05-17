"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[961],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>d});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var p=a.createContext({}),c=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},s=function(n){var e=c(n.components);return a.createElement(p.Provider,{value:e},n.children)},g="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,p=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),g=c(t),m=r,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||o;return t?a.createElement(d,i(i({ref:e},s),{},{components:t})):a.createElement(d,i({ref:e},s))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=n,l[g]="string"==typeof n?n:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5720:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_label:"G0\u4ee3\u9645"},i="G0\u4ee3\u9645",l={unversionedId:"open-change-management-specification/intergenerational/g0",id:"open-change-management-specification/intergenerational/g0",title:"G0\u4ee3\u9645",description:"---",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/03-open-change-management-specification/04-intergenerational/01-g0.md",sourceDirName:"03-open-change-management-specification/04-intergenerational",slug:"/open-change-management-specification/intergenerational/g0",permalink:"/zh-CN/open-change-management-specification/intergenerational/g0",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"G0\u4ee3\u9645"},sidebar:"tutorialSidebar",previous:{title:"\u53d8\u66f4\u63a5\u5165SDK",permalink:"/zh-CN/open-change-management-specification/change-access-sdk"},next:{title:"G1\u4ee3\u9645",permalink:"/zh-CN/open-change-management-specification/intergenerational/g1"}},p={},c=[{value:"G0\u4ee3\u9645\u53d8\u66f4\u63a5\u5165SDK",id:"g0\u4ee3\u9645\u53d8\u66f4\u63a5\u5165sdk",level:2}],s={toc:c},g="wrapper";function u(n){let{components:e,...t}=n;return(0,r.kt)(g,(0,a.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"g0\u4ee3\u9645"},"G0\u4ee3\u9645"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"g0\u4ee3\u9645\u53d8\u66f4\u63a5\u5165sdk"},"G0\u4ee3\u9645\u53d8\u66f4\u63a5\u5165SDK"),(0,r.kt)("p",null,"G0\u4ee3\u9645\u505a\u4e3a\u53d8\u66f4\u4e8b\u4ef6\u901a\u77e5\uff0c\u5728SDK\u4e2d\u53ea\u6709\u4e00\u4e2a\u5bf9\u5e94\u4e8b\u4ef6\u901a\u77e5\u63a5\u53e3\uff0c\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"public interface ChangeNotifyClient {\n\n    /**\n     * \u53d1\u9001\u53d8\u66f4\u901a\u77e5\u4e8b\u4ef6\u3002\n     * \n     * @param request\n     * @return\n     */\n    Result<SubmitChangeEventResult> submitChangeEvent(ChangeEventRequest request);\n}\n")),(0,r.kt)("p",null,"\u5176\u8bf7\u6c42\u5165\u53c2\u7ed3\u6784\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"public class ChangeEventRequest {\n\n    /**\n     * \u53d8\u66f4\u573a\u666f\u6807\u8bc6\u3002\n     */\n    @NotBlank\n    protected String changeSceneKey;\n    \n    /**\n     * \u4e0a\u6e38\u53d8\u66f4\u6267\u884c\u7cfb\u7edf\u7684\u552f\u4e00\u5355\u636e\u53f7\u3002\n     */\n    @NotBlank\n    protected String bizExecOrderId;\n\n    /**\n     * \u4e0a\u6e38\u53d8\u66f4\u6267\u884c\u5e73\u53f0\u540d\u79f0\u3002\n     */\n    @NotBlank\n    protected String platform;\n    \n    /**\n     * \u53d8\u66f4\u6267\u884c\u4eba\u3002\n     */\n    @NotNull\n    private String executor;\n\n    /**\n     * \u53d8\u66f4\u5f00\u59cb\u65f6\u95f4\u3002\u5982\u679c\u4e3anull\uff0c\u5219\u4f7f\u7528\u5f53\u524d\u4f7f\u7528\u3002\n     */\n    @NotNull\n    private Date startTime;\n\n    /**\n     * \u53d8\u66f4\u7ed3\u675f\u65f6\u95f4\u3002\n     */\n    @NotNull\n    private Date finishTime;\n\n    /**\n     * \u53d8\u66f4\u6267\u884c\u5355\u6807\u9898\u3002\n     */\n    @NotBlank\n    private String changeTitle;\n    \n    /**\n     * \u53d8\u66f4\u5355\u5730\u5740\u3002\u63a8\u8350\u586b\u5199\u3002\n     * [optional]\n     */\n    private String changeUrl;\n\n    /**\n     * \u53d8\u66f4\u5355\u521b\u5efa\u4eba\u3002\n     */\n    @NotBlank\n    private String creator;\n\n    /**\n     * \u53d8\u66f4\u60c5\u666f\u7801\u3002\n     */\n    @NotBlank\n    private String changeScenarioCode = ChangeScenarioEnum.DAILY.getCode();\n    \n    /**\n     * \u53d8\u66f4\u6267\u884c\u5355\u6d89\u53ca\u7684\u73af\u5883\u3002\n     */\n    @NotNull\n    private Set<String> changePhases;\n\n    /**\n     * \u53d8\u66f4\u76ee\u6807\u4fe1\u606f\u3002\n     */\n    @NotNull\n    private ChangeTarget[] changeTargets;\n    \n    /**\n     * \u53d8\u66f4\u5185\u5bb9\u5b9e\u4f53\u4fe1\u606f\u3002\n     */\n    @NotNull\n    private ChangeContent[] changeContents;\n\n    /**\n     * \u53d8\u66f4\u5185\u5bb9\u53c2\u6570\u3002json\u683c\u5f0f\u3002\n     */\n    @NotBlank\n    private String changeParamJson;\n\n    /**\n     * [optional] \u53d8\u66f4\u5f71\u54cd\u7684\u7cfb\u7edf\u3002\n     */\n    private Set<String> changeApps;\n\n    /**\n     * [optional] \u53d8\u66f4\u5355\u7236\u5de5\u5355\u4fe1\u606f\u3002\n     */\n    private ChangeParentOrderInfo parentOrderInfo;\n\n    /**\n     * [optional] \u53d8\u66f4trace\u3002\u5982\u679c\u4e0d\u9700\u8981\u5355\u72ec\u751f\u6210\uff0c\u5219\u4fdd\u6301null\uff0c\u5426\u5219\u7531\u4e1a\u52a1\u4fa7\u81ea\u5df1\u63a7\u5236trace\u3002\n     */\n    private OpsChngTrace trace;\n}\n")),(0,r.kt)("p",null,"\u5176\u4e2d\u4e00\u4e9b\u5b57\u6bb5\u5bf9\u5e94\u7684\u679a\u4e3e\u503c\u53ca\u5b50\u7c7b\u5b9a\u4e49\u5982\u4e0b\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u53d8\u66f4\u60c5\u666f\u7801\uff1achangeScenarioCode"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'public enum OpsCloudChangeScenarioEnum {\n\n    /** \n     * \u9ed8\u8ba4\u573a\u666f\u3002\n     */\n    DEFAULT("XX"),\n    \n    /** \n     * \u65e5\u5e38\u8fd0\u7ef4\u573a\u666f\u3002\n     */\n    DAILY("00"),\n    /** \u6545\u969c\u5e94\u6025 */\n    EMERGE("01"),\n    /** \u5927\u4fc3\u6b63\u5f0f */\n    DACU("02"),\n\n    // ---------------- \u6f14\u7ec3\u7c7b ----------------\n    /** state instance failed */\n    FAULT_INJECT("10"),\n    /** \u5927\u4fc3\u6f14\u7ec3 */\n    DACU_PRACTICE("11"),\n    /** \u5bb9\u707e\u6f14\u7ec3 */\n    FO_PRACTICE("12"),\n    /** \u6545\u969c\u6f14\u7ec3 \u7528\u6237\u53d1\u8d77*/\n    FAULT_MOCK_INJECT("13"),\n\n    // ---------------- \u65e0\u4eba\u503c\u5b88\u7c7b ----------------\n    /** \u65e0\u4eba\u503c\u5b88 */\n    UNATTENDED("30");\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u53d8\u66f4\u6267\u884c\u5355\u6d89\u53ca\u7684\u73af\u5883\uff1achangePhases\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'public enum OpsCloudChangePhaseEnum {\n    \n    /** \n     * \u9884\u53d1\u9636\u6bb5\u3002\n     */\n    PRE_PHASE("pre_phase"),\n    \n    /** \n     * \u7070\u5ea6\u9636\u6bb5\u3002 \n     */\n    GRAY_PHASE("gray_phase"),\n    \n    /** \n     * [\u63a8\u8350\u4f7f\u7528] \u7ebf\u4e0a\u73af\u5883\u7b2c\u4e00\u6279\u6b21\u3002 \n     */\n    PROD_BETA_PHASE("prod_beta_phase"),\n    \n    /** \n     * \u7ebf\u4e0a\u9636\u6bb5\u3002 \n     */\n    PROD_PHASE("prod_phase");\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u53d8\u66f4\u5bf9\u8c61\uff1achangeTargets\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"public class ChangeTarget {\n\n    @NotBlank\n    private String instanceName;\n\n    @NotNull\n    @Valid\n    private String changeTargetType;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u53d8\u66f4\u5185\u5bb9\uff1achangeContents\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"public class ChangeContent {\n\n    @NotBlank\n    private String instanceName;\n\n    @NotNull\n    @Valid\n    private String changeContentType;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u53d8\u66f4\u5355\u7236\u5de5\u5355\u4fe1\u606f\uff1aparentOrderInfo\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"public class ChangeParentOrderInfo {\n\n    /**\n     * \u7236\u5de5\u5355\u552f\u4e00\u5355\u636e\u53f7\u3002\n     */\n    @NotNull\n    private String orderId;\n\n    /**\n     * \u7236\u5de5\u5355\u6807\u9898\u3002\n     */\n    @NotNull\n    private String orderTitle;\n\n    /**\n     * \u7236\u5de5\u5355url\u3002\n     */\n    @NotNull\n    private String orderUrl;\n}\n")),(0,r.kt)("p",null,"\u5176\u8fd4\u56de\u503c\u7ed3\u6784\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"public class SubmitChangeEventResult {\n\n    /**\n     * \u53d8\u66f4\u7ba1\u63a7\u7cfb\u7edf\u751f\u6210\u7684\u552f\u4e00\u5355\u636e\u53f7\u3002\n     */\n    private String orderId;\n\n    /**\n     * \u53d8\u66f4\u7ba1\u63a7\u7cfb\u7edf\u5de5\u5355\u5730\u5740\u3002\n     */\n    private String url;\n}\n")))}u.isMDXComponent=!0}}]);
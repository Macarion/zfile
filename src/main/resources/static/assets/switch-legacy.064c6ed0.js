!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function i(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?t(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(t,i,l){return(i=function(t){var i=function(t,i){if("object"!==e(t)||null===t)return t;var l=t[Symbol.toPrimitive];if(void 0!==l){var n=l.call(t,i||"default");if("object"!==e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(t)}(t,"string");return"symbol"===e(i)?i:String(i)}(i))in t?Object.defineProperty(t,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[i]=l,t}var n=document.createElement("style");n.innerHTML=".el-switch{--el-switch-on-color: var(--el-color-primary);--el-switch-off-color: var(--el-border-color);display:inline-flex;align-items:center;position:relative;font-size:14px;line-height:20px;height:32px;vertical-align:middle}.el-switch.is-disabled .el-switch__core,.el-switch.is-disabled .el-switch__label{cursor:not-allowed}.el-switch__label{transition:var(--el-transition-duration-fast);height:20px;display:inline-block;font-size:14px;font-weight:500;cursor:pointer;vertical-align:middle;color:var(--el-text-color-primary)}.el-switch__label.is-active{color:var(--el-color-primary)}.el-switch__label--left{margin-right:10px}.el-switch__label--right{margin-left:10px}.el-switch__label *{line-height:1;font-size:14px;display:inline-block}.el-switch__label .el-icon{height:inherit}.el-switch__label .el-icon svg{vertical-align:middle}.el-switch__input{position:absolute;width:0;height:0;opacity:0;margin:0}.el-switch__input:focus-visible~.el-switch__core{outline:2px solid var(--el-switch-on-color);outline-offset:1px}.el-switch__core{display:inline-flex;position:relative;align-items:center;min-width:40px;height:20px;border:1px solid var(--el-switch-border-color, var(--el-switch-off-color));outline:none;border-radius:10px;box-sizing:border-box;background:var(--el-switch-off-color);cursor:pointer;transition:border-color var(--el-transition-duration),background-color var(--el-transition-duration)}.el-switch__core .el-switch__inner{width:100%;transition:all var(--el-transition-duration);height:16px;display:flex;justify-content:center;align-items:center;overflow:hidden;padding:0 4px 0 18px}.el-switch__core .el-switch__inner .is-icon,.el-switch__core .el-switch__inner .is-text{font-size:12px;color:var(--el-color-white);-webkit-user-select:none;user-select:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.el-switch__core .el-switch__action{position:absolute;left:1px;border-radius:var(--el-border-radius-circle);transition:all var(--el-transition-duration);width:16px;height:16px;background-color:var(--el-color-white);display:flex;justify-content:center;align-items:center;color:var(--el-switch-off-color)}.el-switch.is-checked .el-switch__core{border-color:var(--el-switch-border-color, var(--el-switch-on-color));background-color:var(--el-switch-on-color)}.el-switch.is-checked .el-switch__core .el-switch__action{left:calc(100% - 17px);color:var(--el-switch-on-color)}.el-switch.is-checked .el-switch__core .el-switch__inner{padding:0 18px 0 4px}.el-switch.is-disabled{opacity:.6}.el-switch--wide .el-switch__label.el-switch__label--left span{left:10px}.el-switch--wide .el-switch__label.el-switch__label--right span{right:10px}.el-switch .label-fade-enter-from,.el-switch .label-fade-leave-active{opacity:0}.el-switch--large{font-size:14px;line-height:24px;height:40px}.el-switch--large .el-switch__label{height:24px;font-size:14px}.el-switch--large .el-switch__label *{font-size:14px}.el-switch--large .el-switch__core{min-width:50px;height:24px;border-radius:12px}.el-switch--large .el-switch__core .el-switch__inner{height:20px;padding:0 6px 0 22px}.el-switch--large .el-switch__core .el-switch__action{width:20px;height:20px}.el-switch--large.is-checked .el-switch__core .el-switch__action{left:calc(100% - 21px)}.el-switch--large.is-checked .el-switch__core .el-switch__inner{padding:0 22px 0 6px}.el-switch--small{font-size:12px;line-height:16px;height:24px}.el-switch--small .el-switch__label{height:16px;font-size:12px}.el-switch--small .el-switch__label *{font-size:12px}.el-switch--small .el-switch__core{min-width:30px;height:16px;border-radius:8px}.el-switch--small .el-switch__core .el-switch__inner{height:12px;padding:0 2px 0 14px}.el-switch--small .el-switch__core .el-switch__action{width:12px;height:12px}.el-switch--small.is-checked .el-switch__core .el-switch__action{left:calc(100% - 13px)}.el-switch--small.is-checked .el-switch__core .el-switch__inner{padding:0 14px 0 2px}\n",document.head.appendChild(n),System.register(["./index-legacy.788c2bbd.js","./base-legacy.80db676a.js","./validator-legacy.fe6c8b4c.js","./event-legacy.39ad8904.js"],(function(e){"use strict";var t,n,r,c,o,a,s,u,h,d,p,f,v,w,b,_,g,x,m,y,k,S,j,I,O,C,V,P,T,z,B,E,N,D,H,K,U,A,F,J,L,M,W,Y,q;return{setters:[function(e){t=e.d,n=e.c,r=e.r,c=e.w,o=e.o,a=e.a,s=e.f,u=e.m,h=e.u,d=e.g,p=e.z,f=e.b,v=e.e,w=e.l,b=e.k,_=e.t,g=e.j,x=e.n,m=e.h,y=e.Y,k=e.W},function(e){S=e.b,j=e.I,I=e.d,O=e.J,C=e.k,V=e.ae,P=e.an,T=e.ac,z=e.a,B=e.H,E=e.ao,N=e.o,D=e.O,H=e.y,K=e.E,U=e.ah,A=e._,F=e.bl,J=e.t,L=e.w},function(e){M=e.i},function(e){W=e.U,Y=e.C,q=e.I}],execute:function(){var G,Q=S({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:j},inactiveIcon:{type:j},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:I(Function)},size:{type:String,validator:M},tabindex:{type:[String,Number]}}),R=(l(G={},W,(function(e){return O(e)||C(e)||V(e)})),l(G,Y,(function(e){return O(e)||C(e)||V(e)})),l(G,q,(function(e){return O(e)||C(e)||V(e)})),G),X=["onClick"],Z=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],$=["aria-hidden"],ee=["aria-hidden"],te=["aria-hidden"],ie="ElSwitch",le=t({name:ie}),ne=t(i(i({},le),{},{props:Q,emits:R,setup:function(e,t){var l=t.expose,S=t.emit,j=e,I=y(),C=P().formItem,V=T(),A=z("switch");B({from:'"value"',replacement:'"model-value" or "v-model"',scope:ie,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},n((function(){var e;return!!(null==(e=I.vnode.props)?void 0:e.value)})));var L=E(j,{formItemContext:C}).inputId,M=N(n((function(){return j.loading}))),G=r(!1!==j.modelValue),Q=r(),R=r(),le=n((function(){return[A.b(),A.m(V.value),A.is("disabled",M.value),A.is("checked",ce.value)]})),ne=n((function(){return{width:D(j.width)}}));c((function(){return j.modelValue}),(function(){G.value=!0})),c((function(){return j.value}),(function(){G.value=!1}));var re=n((function(){return G.value?j.modelValue:j.value})),ce=n((function(){return re.value===j.activeValue}));[j.activeValue,j.inactiveValue].includes(re.value)||(S(W,j.inactiveValue),S(Y,j.inactiveValue),S(q,j.inactiveValue)),c(ce,(function(e){var t;Q.value.checked=e,j.validateEvent&&(null==(t=null==C?void 0:C.validate)||t.call(C,"change").catch((function(e){return H()})))}));var oe=function(){var e=ce.value?j.inactiveValue:j.activeValue;S(W,e),S(Y,e),S(q,e),k((function(){Q.value.checked=ce.value}))},ae=function(){if(!M.value){var e=j.beforeChange;if(e){var t=e();[F(t),O(t)].includes(!0)||J(ie,"beforeChange must return type `Promise<boolean>` or `boolean`"),F(t)?t.then((function(e){e&&oe()})).catch((function(e){})):t&&oe()}else oe()}},se=n((function(){return A.cssVarBlock(i(i(i({},j.activeColor?{"on-color":j.activeColor}:null),j.inactiveColor?{"off-color":j.inactiveColor}:null),j.borderColor?{"border-color":j.borderColor}:null))}));return o((function(){Q.value.checked=ce.value})),l({focus:function(){var e,t;null==(t=null==(e=Q.value)?void 0:e.focus)||t.call(e)},checked:ce}),function(e,t){return a(),s("div",{class:d(h(le)),style:x(h(se)),onClick:m(ae,["prevent"])},[u("input",{id:h(L),ref_key:"input",ref:Q,class:d(h(A).e("input")),type:"checkbox",role:"switch","aria-checked":h(ce),"aria-disabled":h(M),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:h(M),tabindex:e.tabindex,onChange:oe,onKeydown:p(ae,["enter"])},null,42,Z),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?b("v-if",!0):(a(),s("span",{key:0,class:d([h(A).e("label"),h(A).em("label","left"),h(A).is("active",!h(ce))])},[e.inactiveIcon?(a(),f(h(K),{key:0},{default:v((function(){return[(a(),f(w(e.inactiveIcon)))]})),_:1})):b("v-if",!0),!e.inactiveIcon&&e.inactiveText?(a(),s("span",{key:1,"aria-hidden":h(ce)},_(e.inactiveText),9,$)):b("v-if",!0)],2)),u("span",{ref_key:"core",ref:R,class:d(h(A).e("core")),style:x(h(ne))},[e.inlinePrompt?(a(),s("div",{key:0,class:d(h(A).e("inner"))},[e.activeIcon||e.inactiveIcon?(a(),f(h(K),{key:0,class:d(h(A).is("icon"))},{default:v((function(){return[(a(),f(w(h(ce)?e.activeIcon:e.inactiveIcon)))]})),_:1},8,["class"])):e.activeText||e.inactiveText?(a(),s("span",{key:1,class:d(h(A).is("text")),"aria-hidden":!h(ce)},_(h(ce)?e.activeText:e.inactiveText),11,ee)):b("v-if",!0)],2)):b("v-if",!0),u("div",{class:d(h(A).e("action"))},[e.loading?(a(),f(h(K),{key:0,class:d(h(A).is("loading"))},{default:v((function(){return[g(h(U))]})),_:1},8,["class"])):b("v-if",!0)],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?b("v-if",!0):(a(),s("span",{key:1,class:d([h(A).e("label"),h(A).em("label","right"),h(A).is("active",h(ce))])},[e.activeIcon?(a(),f(h(K),{key:0},{default:v((function(){return[(a(),f(w(e.activeIcon)))]})),_:1})):b("v-if",!0),!e.activeIcon&&e.activeText?(a(),s("span",{key:1,"aria-hidden":!h(ce)},_(e.activeText),9,te)):b("v-if",!0)],2))],14,X)}}}));e("E",L(A(ne,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]])))}}}))}();

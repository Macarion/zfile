import{O as b,t as I,a as A,R,a9 as C,ab as X,a7 as G,aa as U,N as E,b as W,d as w}from"./base.a8fd8384.js";import{o as h,aa as z,D as K,P as V,at as $,w as j,a0 as q,d as J,j as Q,i as Y,a9 as Z}from"./index.8faa6d57.js";import{a as g}from"./scroll.ebf0b5bb.js";var l=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(l||{});const de=(e,t,n)=>{let s={offsetX:0,offsetY:0};const u=a=>{const i=a.clientX,m=a.clientY,{offsetX:r,offsetY:f}=s,c=e.value.getBoundingClientRect(),v=c.left,p=c.top,N=c.width,O=c.height,D=document.documentElement.clientWidth,x=document.documentElement.clientHeight,k=-v+r,_=-p+f,H=D-v-N+r,B=x-p-O+f,T=S=>{const M=Math.min(Math.max(r+S.clientX-i,k),H),L=Math.min(Math.max(f+S.clientY-m,_),B);s={offsetX:M,offsetY:L},e.value.style.transform=`translate(${b(M)}, ${b(L)})`},y=()=>{document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",y)},d=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",u)},o=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",u)};h(()=>{z(()=>{n.value?d():o()})}),K(()=>{o()})},ae=(e,t={})=>{V(e)||I("[useLockscreen]","You need to pass a ref param to this function");const n=t.ns||A("popup"),s=$(()=>n.bm("parent","hidden"));if(!R||C(document.body,s.value))return;let u=0,d=!1,o="0";const a=()=>{setTimeout(()=>{U(document==null?void 0:document.body,s.value),d&&document&&(document.body.style.width=o)},200)};j(e,i=>{if(!i){a();return}d=!C(document.body,s.value),d&&(o=document.body.style.width),u=g(n.namespace.value);const m=document.documentElement.clientHeight<document.body.scrollHeight,r=X(document.body,"overflowY");u>0&&(m||r==="scroll")&&d&&(document.body.style.width=`calc(100% - ${u}px)`),G(document.body,s.value)}),q(()=>a())},P=e=>{if(!e)return{onClick:E,onMousedown:E,onMouseup:E};let t=!1,n=!1;return{onClick:o=>{t&&n&&e(o),t=n=!1},onMousedown:o=>{t=o.target===o.currentTarget},onMouseup:o=>{n=o.target===o.currentTarget}}},F=W({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:w([String,Array,Object])},zIndex:{type:w([String,Number])}}),ee={click:e=>e instanceof MouseEvent},oe="overlay";var te=J({name:"ElOverlay",props:F,emits:ee,setup(e,{slots:t,emit:n}){const s=A(oe),u=i=>{n("click",i)},{onClick:d,onMousedown:o,onMouseup:a}=P(e.customMaskEvent?void 0:u);return()=>e.mask?Q("div",{class:[s.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:d,onMousedown:o,onMouseup:a},[Y(t,"default")],l.STYLE|l.CLASS|l.PROPS,["onClick","onMouseup","onMousedown"]):Z("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[Y(t,"default")])}});const ie=te;export{ie as E,P as a,ae as b,de as u};

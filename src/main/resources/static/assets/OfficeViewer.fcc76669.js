import{u as c}from"./useFileUpload.d52c5630.js";import{o as f,a as d,f as m,Q as l,R as _,m as u}from"./index.8faa6d57.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import{E as v}from"./request.d02d9ac4.js";import"./common.a0f0772a.js";import"./useCommon.4e25561a.js";import"./index.0df6a1d2.js";import"./base.a8fd8384.js";import"./checkbox.fa7c9518.js";import"./event.776e7e11.js";import"./index.658020e7.js";import"./_Uint8Array.280fa2fb.js";/* empty css              */import"./index.a37818b5.js";import"./use-outside-click.85a449c7.js";import"./directive.acc47f30.js";import"./XCircleIcon.b4ef596d.js";import"./index.c82c5856.js";import"./index.becd5f73.js";import"./scroll.ebf0b5bb.js";import"./focus-trap.0ffefeab.js";import"./validator.7ed733cc.js";const h=t=>(l("data-v-343b2190"),t=t(),_(),t),w={class:"zfile-office-viewer"},y=h(()=>u("div",{id:"office-body"},null,-1)),E=[y],S={__name:"OfficeViewer",props:{fileUrl:String,fileName:String},setup(t){const o=t;let a=c();f(()=>{n(`${a.globalConfig.onlyOfficeUrl}/web-apps/apps/api/documents/api.js`,()=>{const i=o.fileName.lastIndexOf("."),e={document:{fileType:o.fileName.substr(i+1),title:o.fileName,url:o.fileUrl,lang:"zh-CN"},width:"100%",editorConfig:{mode:"view",lang:"zh-CN"}};new DocsAPI.DocEditor("office-body",e)})});function n(i,r){let e=document.createElement("script"),s=document.getElementsByTagName("head")[0];e.type="text/javascript",e.charset="UTF-8",e.src=i,e.addEventListener?(e.addEventListener("load",function(){r()},!1),e.addEventListener("error",function(){v.warning("\u8C03\u7528\u5728\u7EBF\u6587\u6863\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5728\u7EBF\u6587\u6863\u670D\u52A1\u662F\u5426\u6B63\u5E38")},!1)):e.attachEvent&&e.attachEvent("onreadystatechange",function(){var p=window.event.srcElement;p.readyState==="loaded"&&r()}),s.appendChild(e)}return(i,r)=>(d(),m("div",w,E))}};var q=g(S,[["__scopeId","data-v-343b2190"]]);export{q as default};

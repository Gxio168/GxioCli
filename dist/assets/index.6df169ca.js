import{e as A,br as G,r as b,n as E,b7 as L,aG as P,q as u,t as p,x as o,A as t,v as n,as as _,G as g,P as F,H as V,y as k,D as C,au as $,av as j,aw as q}from"./index.fe16509b.js";import h from"./index.3efa2d4d.js";import{E as O,d as Q}from"./index.c5591cee.js";import{E as z}from"./index.8745d081.js";import{E as J,a as K}from"./index.d96a122c.js";import{E as W}from"./index.cd0b7b9a.js";import"./debounce.b9e85cf9.js";import"./index.b058d384.js";import"./validator.c2434db1.js";import"./index.92723648.js";import"./index.fe7fc375.js";const X=s=>($("data-v-6b234310"),s=s(),j(),s),Y=X(()=>k("hr",{style:{"border-color":"#ebeef5","margin-bottom":"10px"}},null,-1)),Z={class:"footer"},ee={name:"demo",url:"https://i.imgtg.com/2023/01/16/QR57a.jpg"},le=A({__name:"index",props:{type:null,config:null,template:null,close:null,rules:null,confirmHandler:null,cancelHandler:null},setup(s){const l=s,w=G(l.rules),i=b(!0),r=b({});for(const a in l.config)r.value[a]=l.config[a];const x=E(()=>{switch(l.type){case"get":return"\u67E5\u770B\u7528\u6237";case"edit":return"\u7F16\u8F91\u7528\u6237";case"add":return"\u65B0\u589E\u7528\u6237"}}),m=E(()=>l.type==="get"),D=l.template.filter(a=>a.canModify===void 0||a.canModify===!0),B=()=>{l.cancelHandler(),i.value=!1,setTimeout(()=>{l.close()},200)},v=b(),I=async a=>{!a||await a.validate((d,f)=>{d?(l.confirmHandler(r),i.value=!1,setTimeout(()=>{l.close()},200)):console.log("error submit!",f)})},H=()=>{i.value=!1,l.cancelHandler(),l.close()};return(a,d)=>{const f=O,R=z,S=J,U=K,M=Q,N=L,y=P,T=W;return u(),p(T,{modelValue:i.value,"onUpdate:modelValue":d[1]||(d[1]=e=>i.value=e),onClosed:H,title:t(x)},{default:o(()=>[n(N,{height:"100%"},{default:o(()=>[Y,n(M,{class:"form",model:t(r),rules:w,ref_key:"ruleFormRef",ref:v},{default:o(()=>[n(f,{label:"\u7528\u6237\u5934\u50CF:","label-width":"100px"},{default:o(()=>[n(h,{image:s.type==="add"?void 0:ee,borderRadius:"50%",disabled:t(m)},{tip:o(()=>[_(" \u5934\u50CF\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 3M ")]),_:1},8,["image","disabled"])]),_:1}),n(f,{label:"\u7528\u6237\u7167\u7247:","label-width":"100px"},{default:o(()=>[n(h,{borderRadius:"8px",disabled:t(m)},{tip:o(()=>[_(" \u7167\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 5M ")]),_:1},8,["disabled"])]),_:1}),(u(!0),g(V,null,F(t(D),e=>(u(),p(f,{label:e.label+":","label-width":"100px",prop:e.prop},{default:o(()=>[e.type==="input"?(u(),p(R,{key:0,modelValue:t(r)[e.prop],"onUpdate:modelValue":c=>t(r)[e.prop]=c,disabled:t(m)},null,8,["modelValue","onUpdate:modelValue","disabled"])):e.type==="select"?(u(),p(U,{key:1,disabled:t(m),placeholder:`\u8BF7\u9009\u62E9${e.label}`,style:{width:"100%"},modelValue:t(r)[e.prop],"onUpdate:modelValue":c=>t(r)[e.prop]=c},{default:o(()=>[(u(!0),g(V,null,F(e.children,c=>(u(),p(S,{label:c.label,value:c.value},null,8,["label","value"]))),256))]),_:2},1032,["disabled","placeholder","modelValue","onUpdate:modelValue"])):C("",!0)]),_:2},1032,["label","prop"]))),256))]),_:1},8,["model","rules"])]),_:1})]),footer:o(()=>[k("div",Z,[n(y,{onClick:B},{default:o(()=>[_("\u53D6\u6D88")]),_:1}),t(m)?C("",!0):(u(),p(y,{key:0,type:"primary",onClick:d[0]||(d[0]=e=>I(v.value))},{default:o(()=>[_("\u786E\u5B9A")]),_:1}))])]),_:1},8,["modelValue","title"])}}}),me=q(le,[["__scopeId","data-v-6b234310"]]);export{me as default};
import{e as R,aD as A,aE as F,w as M,n as H,bU as S,bV as U,E as q,aG as z,bW as W,bX as X,bY as Y,A as n,q as d,G as m,y as u,v as o,x as a,bb as Z,D as b,bZ as j,H as J,P as K,as as s,a4 as r,at as Q,aT as ee,t as h,M as ae,aw as te}from"./index.729ec0c4.js";const oe={key:0,class:"label-bar"},le={class:"label-list"},ne={class:"more"},se=R({__name:"index",setup(re){Q(e=>({"25b731e6":n(L)}));const{route:t,router:f}=A(),{labelbar:w,addToLabelbar:C,removeFromLabelbar:v,clearLabelbar:y,closeOthersLabelbar:E,labelBarIconOpen:k,labelBarOpen:I,themeColor:L}=F();M(()=>t.fullPath,()=>{const e={path:t.path,title:t.meta.title,icon:t.meta.icon};C(e)},{immediate:!0});const V=e=>{f.push(e.paneName)},i=e=>{e!==j.path&&v(e,t.path)},x=()=>{E(t.path)},D=()=>{y(t.path)},_=H(()=>t.path);return(e,c)=>{const B=S,O=U,g=ee("arrow-down"),T=q,N=z,p=W,P=X,$=Y;return n(I)?(d(),m("div",oe,[u("div",le,[o(O,{"tab-position":"top",class:"demo-tabs",type:"card",onEdit:i,onTabClick:V,modelValue:n(_),"onUpdate:modelValue":c[0]||(c[0]=l=>Z(_)?_.value=l:null)},{default:a(()=>[(d(!0),m(J,null,K(n(w),(l,G)=>(d(),h(B,{key:l,closable:G!==0,name:l.path},{label:a(()=>[n(k)?(d(),h(ae(l.icon),{key:0,style:{width:"14px"}})):b("",!0),s(" "+r(l.title),1)]),_:2},1032,["closable","name"]))),128))]),_:1},8,["modelValue"])]),u("div",ne,[o($,{trigger:"click"},{dropdown:a(()=>[o(P,null,{default:a(()=>[o(p,{icon:"remove",onClick:c[1]||(c[1]=l=>i(n(t).path))},{default:a(()=>[s(r(e.$t("tabs.closeCurrent")),1)]),_:1}),o(p,{icon:"circleClose",onClick:x},{default:a(()=>[s(r(e.$t("tabs.closeOther")),1)]),_:1}),o(p,{icon:"FolderDelete",onClick:D},{default:a(()=>[s(r(e.$t("tabs.closeAll")),1)]),_:1})]),_:1})]),default:a(()=>[o(N,{type:"primary",size:"small"},{default:a(()=>[s(r(e.$t("tabs.more")),1),o(T,{class:"el-icon--right"},{default:a(()=>[o(g)]),_:1})]),_:1})]),_:1})])])):b("",!0)}}});const de=te(se,[["__scopeId","data-v-d8792596"]]);export{de as default};
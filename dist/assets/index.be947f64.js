import{d as R,x as A,y as G,A as M,Q as S,cl as j,cm as q,E as z,B as H,cn as J,co as Q,cp as U,f as n,a as d,c as i,j as u,D as o,w as t,ag as K,C as b,cq as W,I as X,F as Y,k as h,l as Z,G as s,m as r,bw as ee,aC as te,J as ae}from"./index.7e949226.js";const oe={key:0,class:"label-bar"},le={class:"label-list"},ne={class:"more"},se=R({__name:"index",setup(re){ee(e=>({"25b731e6":n(L)}));const{route:a,router:f}=A(),{labelbar:C,addToLabelbar:w,removeFromLabelbar:k,clearLabelbar:v,closeOthersLabelbar:y,labelBarIconOpen:E,labelBarOpen:I,themeColor:L}=G();M(()=>a.fullPath,()=>{const e={path:a.path,title:a.meta.title,icon:a.meta.icon};w(e)},{immediate:!0});const x=e=>{f.push(e.paneName)},m=e=>{e!==W.path&&k(e,a.path)},B=()=>{y(a.path)},V=()=>{v(a.path)},_=S(()=>a.path);return(e,c)=>{const g=j,D=q,O=te("arrow-down"),N=z,T=H,p=J,$=Q,F=U;return n(I)?(d(),i("div",oe,[u("div",le,[o(D,{"tab-position":"top",class:"demo-tabs",type:"card",onEdit:m,onTabClick:x,modelValue:n(_),"onUpdate:modelValue":c[0]||(c[0]=l=>K(_)?_.value=l:null)},{default:t(()=>[(d(!0),i(X,null,Y(n(C),(l,P)=>(d(),h(g,{key:l,closable:P!==0,name:l.path},{label:t(()=>[n(E)?(d(),h(Z(l.icon),{key:0,style:{width:"14px"}})):b("",!0),s(" "+r(l.title),1)]),_:2},1032,["closable","name"]))),128))]),_:1},8,["modelValue"])]),u("div",ne,[o(F,{trigger:"click"},{dropdown:t(()=>[o($,null,{default:t(()=>[o(p,{icon:"remove",onClick:c[1]||(c[1]=l=>m(n(a).path))},{default:t(()=>[s(r(e.$t("tabs.closeCurrent")),1)]),_:1}),o(p,{icon:"circleClose",onClick:B},{default:t(()=>[s(r(e.$t("tabs.closeOther")),1)]),_:1}),o(p,{icon:"FolderDelete",onClick:V},{default:t(()=>[s(r(e.$t("tabs.closeAll")),1)]),_:1})]),_:1})]),default:t(()=>[o(T,{type:"primary",size:"small"},{default:t(()=>[s(r(e.$t("tabs.more")),1),o(N,{class:"el-icon--right"},{default:t(()=>[o(O)]),_:1})]),_:1})]),_:1})])])):b("",!0)}}});const de=ae(se,[["__scopeId","data-v-d8792596"]]);export{de as default};
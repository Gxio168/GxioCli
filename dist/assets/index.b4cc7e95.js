import{d as R,a6 as A,n as G,D as H,H as M,a8 as S,bb as z,bc as U,E as Z,x as l,o as c,c as p,b as i,a as t,w as e,aO as $,Z as m,bd as j,a9 as q,ab as J,aa as K,e as s,be as Q,f as W,a3 as b,a4 as X,a5 as Y,_ as ee}from"./index.123f106b.js";import{E as ae,a as te}from"./el-tab-pane.cf9ca295.js";import"./event.9443ec1f.js";const oe={key:0,class:"label-bar"},ne={class:"label-list"},le={class:"more"},se=R({__name:"index",setup(re){Q(o=>({"4cd6ad91":l(y)}));const{route:a,router:h}=q(),{labelbar:f,addToLabelbar:E,removeFromLabelbar:w,clearLabelbar:C,closeOthersLabelbar:v,labelBarIconOpen:k,labelBarOpen:x,themeColor:y}=A();G(()=>a.fullPath,()=>{const o={path:a.path,title:a.meta.title,icon:a.meta.icon};E(o)},{immediate:!0});const D=o=>{h.push(o.paneName)},u=o=>{o!==j.path&&w(o,a.path)},I=()=>{v(a.path)},L=()=>{C(a.path)},d=H(()=>a.path);return(o,r)=>{const V=ae,B=te,O=W("arrow-down"),g=M,F=S,_=z,N=U,T=Z;return l(x)?(c(),p("div",oe,[i("div",ne,[t(B,{"tab-position":"top",class:"demo-tabs",type:"card",onEdit:u,onTabClick:D,modelValue:l(d),"onUpdate:modelValue":r[0]||(r[0]=n=>$(d)?d.value=n:null)},{default:e(()=>[(c(!0),p(J,null,K(l(f),(n,P)=>(c(),b(V,{key:n,closable:P!==0,name:n.path},{label:e(()=>[l(k)?(c(),b(X(n.icon),{key:0,style:{width:"14px"}})):m("",!0),s(" "+Y(n.title),1)]),_:2},1032,["closable","name"]))),128))]),_:1},8,["modelValue"])]),i("div",le,[t(T,{trigger:"click"},{dropdown:e(()=>[t(N,null,{default:e(()=>[t(_,{icon:"remove",onClick:r[1]||(r[1]=n=>u(l(a).path))},{default:e(()=>[s("\u5173\u95ED\u5F53\u524D")]),_:1}),t(_,{icon:"circleClose",onClick:I},{default:e(()=>[s("\u5173\u95ED\u5176\u4ED6")]),_:1}),t(_,{icon:"FolderDelete",onClick:L},{default:e(()=>[s("\u5173\u95ED\u6240\u6709")]),_:1})]),_:1})]),default:e(()=>[t(F,{type:"primary",size:"small"},{default:e(()=>[s(" \u66F4\u591A"),t(g,{class:"el-icon--right"},{default:e(()=>[t(O)]),_:1})]),_:1})]),_:1})])])):m("",!0)}}});const ue=ee(se,[["__scopeId","data-v-60a50c55"]]);export{ue as default};

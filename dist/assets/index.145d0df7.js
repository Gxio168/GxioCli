import{b as I,i as D,d as f,u as x,r as B,p as T,o as O,a as s,c as k,e as w,n as _,f as t,_ as $,g as R,h as V,t as j,j as A,k as i,w as m,l as G,E as M,m as v,q,s as z,v as F,x as K,y as H,z as J,A as Q,B as U,C as W,D as X,F as Y,G as C,H as Z,I as ee,T as te,J as ae}from"./index.b0a92191.js";const E=Symbol("breadcrumbKey"),re=I({separator:{type:String,default:"/"},separatorIcon:{type:D}}),se=f({name:"ElBreadcrumb"}),ne=f({...se,props:re,setup(h){const n=h,c=x("breadcrumb"),l=B();return T(E,n),O(()=>{const a=l.value.querySelectorAll(`.${c.e("item")}`);a.length&&a[a.length-1].setAttribute("aria-current","page")}),(a,p)=>(s(),k("div",{ref_key:"breadcrumb",ref:l,class:_(t(c).b()),"aria-label":"Breadcrumb",role:"navigation"},[w(a.$slots,"default")],2))}});var oe=$(ne,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);const ce=I({to:{type:R([String,Object]),default:""},replace:{type:Boolean,default:!1}}),le=f({name:"ElBreadcrumbItem"}),ue=f({...le,props:ce,setup(h){const n=h,c=q(),l=V(E,void 0),a=x("breadcrumb"),{separator:p,separatorIcon:d}=j(l),b=c.appContext.config.globalProperties.$router,y=B(),g=()=>{!n.to||!b||(n.replace?b.replace(n.to):b.push(n.to))};return(e,o)=>(s(),k("span",{class:_(t(a).e("item"))},[A("span",{ref_key:"link",ref:y,class:_([t(a).e("inner"),t(a).is("link",!!e.to)]),role:"link",onClick:g},[w(e.$slots,"default")],2),t(d)?(s(),i(t(M),{key:0,class:_(t(a).e("separator"))},{default:m(()=>[(s(),i(G(t(d))))]),_:1},8,["class"])):(s(),k("span",{key:1,class:_(t(a).e("separator")),role:"presentation"},v(t(p)),3))],2))}});var L=$(ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const pe=z(oe,{BreadcrumbItem:L}),me=F(L);const ie=f({__name:"index",setup(h){const{route:n,router:c}=K(),{hamburgerIconOpen:l,hamburgerOpen:a}=H(),p=B(null);J(()=>{d()}),Q(()=>n.fullPath,()=>{d()});const d=()=>{let e=n.matched.filter(r=>r.meta&&r.meta.title);const o=e[0];b(o)||(e=[{path:"/dashboard",meta:{title:"\u9996\u9875",icon:"home-filled"}}].concat(e)),p.value=e.filter(r=>r.meta&&r.meta.title&&r.meta.breadcrumb!==!1)},b=e=>{const o=e&&e.name;return o?o.trim().toLocaleLowerCase()==="Dashboard".toLocaleLowerCase():!1},y=e=>e,g=e=>{const{redirect:o,path:r}=e;if(o){c.push(o);return}c.push(y(r))};return(e,o)=>{const r=U,P=me,S=pe;return t(a)?(s(),i(S,{key:0,separator:"/",class:"app-breadcrumb"},{default:m(()=>[X(te,{name:"breadcrumb"},{default:m(()=>[(s(!0),k(ee,null,Y(t(p),(u,N)=>(s(),i(P,{key:u.path},{default:m(()=>[u.redirect==="noRedirect"||N==t(p).length-1?(s(),i(r,{key:0,link:"",icon:t(l)&&u.meta.icon},{default:m(()=>[C(v(u.meta.title),1)]),_:2},1032,["icon"])):(s(),i(r,{key:1,link:"",icon:t(l)&&u.meta.icon,onClick:Z(de=>g(u),["prevent"])},{default:m(()=>[C(v(u.meta.title),1)]),_:2},1032,["icon","onClick"]))]),_:2},1024))),128))]),_:1})]),_:1})):W("",!0)}}});const _e=ae(ie,[["__scopeId","data-v-9752e6c7"]]);export{_e as default};
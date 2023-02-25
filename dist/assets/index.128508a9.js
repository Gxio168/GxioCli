import{U as Xe,ax as He,b as te,g as T,aj as ie,a5 as Oe,d as M,b2 as _e,b3 as We,b4 as Ke,al as Pe,u as Q,av as Ye,r as X,b5 as Ze,b6 as ue,Q as D,A as oe,ab as Ge,o as Je,a as v,k as B,D as h,w as E,j as C,n as m,f as e,ai as K,H as ee,C as _,E as U,b7 as ve,c as I,I as pe,ar as Qe,as as et,b8 as tt,b9 as ge,l as De,ba as st,bb as at,F as Ne,af as nt,aM as ot,e as N,bc as lt,bd as rt,_ as ne,aK as re,be as ae,bf as it,s as be,bg as ut,bh as Ue,bi as dt,bj as Ae,bk as ct,a4 as Ce,m as le,au as ye,bl as Be,bm as A,aq as ze,bn as ft,bo as Me,T as pt,ac as mt,h as vt,bp as gt,bq as bt,aa as yt,P as ht,a8 as kt,aQ as wt,p as $t,br as _t,aT as Ee,aZ as Se,bs as Fe,bt as Ct,bu as Et,bv as St,bw as Ft,a_ as Rt,a$ as Tt,J as Lt}from"./index.cf05daec.js";import{d as It}from"./debounce.46086aa5.js";var Ot="Expected a function";function fe(a,n,o){var s=!0,d=!0;if(typeof a!="function")throw new TypeError(Ot);return Xe(o)&&(s="leading"in o?!!o.leading:s,d="trailing"in o?!!o.trailing:d),It(a,n,{leading:s,maxWait:n,trailing:d})}const Pt=()=>He&&/firefox/i.test(window.navigator.userAgent),xe=Symbol("uploadContextKey"),Dt=te({urlList:{type:T(Array),default:()=>ie([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0}}),Nt={close:()=>!0,switch:a=>Oe(a)},Ut=["src"],At=M({name:"ElImageViewer"}),Bt=M({...At,props:Dt,emits:Nt,setup(a,{expose:n,emit:o}){const s=a,d={CONTAIN:{name:"contain",icon:_e(We)},ORIGINAL:{name:"original",icon:_e(Ke)}},p=Pt()?"DOMMouseScroll":"mousewheel",{t:w}=Pe(),y=Q("image-viewer"),{nextZIndex:c}=Ye(),$=X(),b=X([]),L=Ze(),r=X(!0),t=X(s.initialIndex),l=ue(d.CONTAIN),u=X({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),S=D(()=>{const{urlList:g}=s;return g.length<=1}),f=D(()=>t.value===0),z=D(()=>t.value===s.urlList.length-1),i=D(()=>s.urlList[t.value]),k=D(()=>{const{scale:g,deg:F,offsetX:P,offsetY:V,enableTransition:H}=u.value;let q=P/g,W=V/g;switch(F%360){case 90:case-270:[q,W]=[W,-q];break;case 180:case-180:[q,W]=[-q,-W];break;case 270:case-90:[q,W]=[-W,q];break}const se={transform:`scale(${g}) rotate(${F}deg) translate(${q}px, ${W}px)`,transition:H?"transform .3s":""};return l.value.name===d.CONTAIN.name&&(se.maxWidth=se.maxHeight="100%"),se}),R=D(()=>Oe(s.zIndex)?s.zIndex:c());function O(){Z(),o("close")}function x(){const g=fe(P=>{switch(P.code){case ae.esc:s.closeOnPressEscape&&O();break;case ae.space:ke();break;case ae.left:we();break;case ae.up:Y("zoomIn");break;case ae.right:$e();break;case ae.down:Y("zoomOut");break}}),F=fe(P=>{(P.wheelDelta?P.wheelDelta:-P.detail)>0?Y("zoomIn",{zoomRate:1.2,enableTransition:!1}):Y("zoomOut",{zoomRate:1.2,enableTransition:!1})});L.run(()=>{re(document,"keydown",g),re(document,p,F)})}function Z(){L.stop()}function j(){r.value=!1}function G(g){r.value=!1,g.target.alt=w("el.image.error")}function J(g){if(r.value||g.button!==0||!$.value)return;u.value.enableTransition=!1;const{offsetX:F,offsetY:P}=u.value,V=g.pageX,H=g.pageY,q=fe(se=>{u.value={...u.value,offsetX:F+se.pageX-V,offsetY:P+se.pageY-H}}),W=re(document,"mousemove",q);re(document,"mouseup",()=>{W()}),g.preventDefault()}function he(){u.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function ke(){if(r.value)return;const g=it(d),F=Object.values(d),P=l.value.name,H=(F.findIndex(q=>q.name===P)+1)%g.length;l.value=d[g[H]],he()}function ce(g){const F=s.urlList.length;t.value=(g+F)%F}function we(){f.value&&!s.infinite||ce(t.value-1)}function $e(){z.value&&!s.infinite||ce(t.value+1)}function Y(g,F={}){if(r.value)return;const{zoomRate:P,rotateDeg:V,enableTransition:H}={zoomRate:1.4,rotateDeg:90,enableTransition:!0,...F};switch(g){case"zoomOut":u.value.scale>.2&&(u.value.scale=Number.parseFloat((u.value.scale/P).toFixed(3)));break;case"zoomIn":u.value.scale<7&&(u.value.scale=Number.parseFloat((u.value.scale*P).toFixed(3)));break;case"clockwise":u.value.deg+=V;break;case"anticlockwise":u.value.deg-=V;break}u.value.enableTransition=H}return oe(i,()=>{Ge(()=>{const g=b.value[0];g!=null&&g.complete||(r.value=!0)})}),oe(t,g=>{he(),o("switch",g)}),Je(()=>{var g,F;x(),(F=(g=$.value)==null?void 0:g.focus)==null||F.call(g)}),n({setActiveItem:ce}),(g,F)=>(v(),B(rt,{to:"body",disabled:!g.teleported},[h(lt,{name:"viewer-fade",appear:""},{default:E(()=>[C("div",{ref_key:"wrapper",ref:$,tabindex:-1,class:m(e(y).e("wrapper")),style:K({zIndex:e(R)})},[C("div",{class:m(e(y).e("mask")),onClick:F[0]||(F[0]=ee(P=>g.hideOnClickModal&&O(),["self"]))},null,2),_(" CLOSE "),C("span",{class:m([e(y).e("btn"),e(y).e("close")]),onClick:O},[h(e(U),null,{default:E(()=>[h(e(ve))]),_:1})],2),_(" ARROW "),e(S)?_("v-if",!0):(v(),I(pe,{key:0},[C("span",{class:m([e(y).e("btn"),e(y).e("prev"),e(y).is("disabled",!g.infinite&&e(f))]),onClick:we},[h(e(U),null,{default:E(()=>[h(e(Qe))]),_:1})],2),C("span",{class:m([e(y).e("btn"),e(y).e("next"),e(y).is("disabled",!g.infinite&&e(z))]),onClick:$e},[h(e(U),null,{default:E(()=>[h(e(et))]),_:1})],2)],64)),_(" ACTIONS "),C("div",{class:m([e(y).e("btn"),e(y).e("actions")])},[C("div",{class:m(e(y).e("actions__inner"))},[h(e(U),{onClick:F[1]||(F[1]=P=>Y("zoomOut"))},{default:E(()=>[h(e(tt))]),_:1}),h(e(U),{onClick:F[2]||(F[2]=P=>Y("zoomIn"))},{default:E(()=>[h(e(ge))]),_:1}),C("i",{class:m(e(y).e("actions__divider"))},null,2),h(e(U),{onClick:ke},{default:E(()=>[(v(),B(De(e(l).icon)))]),_:1}),C("i",{class:m(e(y).e("actions__divider"))},null,2),h(e(U),{onClick:F[3]||(F[3]=P=>Y("anticlockwise"))},{default:E(()=>[h(e(st))]),_:1}),h(e(U),{onClick:F[4]||(F[4]=P=>Y("clockwise"))},{default:E(()=>[h(e(at))]),_:1})],2)],2),_(" CANVAS "),C("div",{class:m(e(y).e("canvas"))},[(v(!0),I(pe,null,Ne(g.urlList,(P,V)=>nt((v(),I("img",{ref_for:!0,ref:H=>b.value[V]=H,key:P,src:P,style:K(e(k)),class:m(e(y).e("img")),onLoad:j,onError:G,onMousedown:J},null,46,Ut)),[[ot,V===t.value]])),128))],2),N(g.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var zt=ne(Bt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const Mt=be(zt),xt=te({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:a=>a>=0&&a<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:T(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:T([String,Array,Function]),default:""},format:{type:T(Function),default:a=>`${a}%`}}),jt=["aria-valuenow"],Vt={viewBox:"0 0 100 100"},qt=["d","stroke","stroke-width"],Xt=["d","stroke","opacity","stroke-linecap","stroke-width"],Ht={key:0},Wt=M({name:"ElProgress"}),Kt=M({...Wt,props:xt,setup(a){const n=a,o={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},s=Q("progress"),d=D(()=>({width:`${n.percentage}%`,animationDuration:`${n.duration}s`,backgroundColor:z(n.percentage)})),p=D(()=>(n.strokeWidth/n.width*100).toFixed(1)),w=D(()=>["circle","dashboard"].includes(n.type)?Number.parseInt(`${50-Number.parseFloat(p.value)/2}`,10):0),y=D(()=>{const i=w.value,k=n.type==="dashboard";return`
          M 50 50
          m 0 ${k?"":"-"}${i}
          a ${i} ${i} 0 1 1 0 ${k?"-":""}${i*2}
          a ${i} ${i} 0 1 1 0 ${k?"":"-"}${i*2}
          `}),c=D(()=>2*Math.PI*w.value),$=D(()=>n.type==="dashboard"?.75:1),b=D(()=>`${-1*c.value*(1-$.value)/2}px`),L=D(()=>({strokeDasharray:`${c.value*$.value}px, ${c.value}px`,strokeDashoffset:b.value})),r=D(()=>({strokeDasharray:`${c.value*$.value*(n.percentage/100)}px, ${c.value}px`,strokeDashoffset:b.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),t=D(()=>{let i;return n.color?i=z(n.percentage):i=o[n.status]||o.default,i}),l=D(()=>n.status==="warning"?ut:n.type==="line"?n.status==="success"?Ue:dt:n.status==="success"?Ae:ve),u=D(()=>n.type==="line"?12+n.strokeWidth*.4:n.width*.111111+2),S=D(()=>n.format(n.percentage));function f(i){const k=100/i.length;return i.map((O,x)=>Ce(O)?{color:O,percentage:(x+1)*k}:O).sort((O,x)=>O.percentage-x.percentage)}const z=i=>{var k;const{color:R}=n;if(ct(R))return R(i);if(Ce(R))return R;{const O=f(R);for(const x of O)if(x.percentage>i)return x.color;return(k=O[O.length-1])==null?void 0:k.color}};return(i,k)=>(v(),I("div",{class:m([e(s).b(),e(s).m(i.type),e(s).is(i.status),{[e(s).m("without-text")]:!i.showText,[e(s).m("text-inside")]:i.textInside}]),role:"progressbar","aria-valuenow":i.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[i.type==="line"?(v(),I("div",{key:0,class:m(e(s).b("bar"))},[C("div",{class:m(e(s).be("bar","outer")),style:K({height:`${i.strokeWidth}px`})},[C("div",{class:m([e(s).be("bar","inner"),{[e(s).bem("bar","inner","indeterminate")]:i.indeterminate}]),style:K(e(d))},[(i.showText||i.$slots.default)&&i.textInside?(v(),I("div",{key:0,class:m(e(s).be("bar","innerText"))},[N(i.$slots,"default",{percentage:i.percentage},()=>[C("span",null,le(e(S)),1)])],2)):_("v-if",!0)],6)],6)],2)):(v(),I("div",{key:1,class:m(e(s).b("circle")),style:K({height:`${i.width}px`,width:`${i.width}px`})},[(v(),I("svg",Vt,[C("path",{class:m(e(s).be("circle","track")),d:e(y),stroke:`var(${e(s).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-width":e(p),fill:"none",style:K(e(L))},null,14,qt),C("path",{class:m(e(s).be("circle","path")),d:e(y),stroke:e(t),fill:"none",opacity:i.percentage?1:0,"stroke-linecap":i.strokeLinecap,"stroke-width":e(p),style:K(e(r))},null,14,Xt)]))],6)),(i.showText||i.$slots.default)&&!i.textInside?(v(),I("div",{key:2,class:m(e(s).e("text")),style:K({fontSize:`${e(u)}px`})},[N(i.$slots,"default",{percentage:i.percentage},()=>[i.status?(v(),B(e(U),{key:1},{default:E(()=>[(v(),B(De(e(l))))]),_:1})):(v(),I("span",Ht,le(e(S)),1))])],6)):_("v-if",!0)],10,jt))}});var Yt=ne(Kt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]);const Zt=be(Yt),Gt="ElUpload";class Jt extends Error{constructor(n,o,s,d){super(n),this.name="UploadAjaxError",this.status=o,this.method=s,this.url=d}}function Re(a,n,o){let s;return o.response?s=`${o.response.error||o.response}`:o.responseText?s=`${o.responseText}`:s=`fail to ${n.method} ${a} ${o.status}`,new Jt(s,o.status,n.method,a)}function Qt(a){const n=a.responseText||a.response;if(!n)return n;try{return JSON.parse(n)}catch{return n}}const es=a=>{typeof XMLHttpRequest>"u"&&ye(Gt,"XMLHttpRequest is undefined");const n=new XMLHttpRequest,o=a.action;n.upload&&n.upload.addEventListener("progress",p=>{const w=p;w.percent=p.total>0?p.loaded/p.total*100:0,a.onProgress(w)});const s=new FormData;if(a.data)for(const[p,w]of Object.entries(a.data))Array.isArray(w)?s.append(p,...w):s.append(p,w);s.append(a.filename,a.file,a.file.name),n.addEventListener("error",()=>{a.onError(Re(o,a,n))}),n.addEventListener("load",()=>{if(n.status<200||n.status>=300)return a.onError(Re(o,a,n));a.onSuccess(Qt(n))}),n.open(a.method,o,!0),a.withCredentials&&"withCredentials"in n&&(n.withCredentials=!0);const d=a.headers||{};if(d instanceof Headers)d.forEach((p,w)=>n.setRequestHeader(w,p));else for(const[p,w]of Object.entries(d))Be(w)||n.setRequestHeader(p,String(w));return n.send(s),n},je=["text","picture","picture-card"];let ts=1;const me=()=>Date.now()+ts++,Ve=te({action:{type:String,default:"#"},headers:{type:T(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>ie({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:T(Array),default:()=>ie([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:je,default:"text"},httpRequest:{type:T(Function),default:es},disabled:Boolean,limit:Number}),ss=te({...Ve,beforeUpload:{type:T(Function),default:A},beforeRemove:{type:T(Function)},onRemove:{type:T(Function),default:A},onChange:{type:T(Function),default:A},onPreview:{type:T(Function),default:A},onSuccess:{type:T(Function),default:A},onProgress:{type:T(Function),default:A},onError:{type:T(Function),default:A},onExceed:{type:T(Function),default:A}}),as=te({files:{type:T(Array),default:()=>ie([])},disabled:{type:Boolean,default:!1},handlePreview:{type:T(Function),default:A},listType:{type:String,values:je,default:"text"}}),ns={remove:a=>!!a},os=["onKeydown"],ls=["src"],rs=["onClick"],is=["onClick"],us=["onClick"],ds=M({name:"ElUploadList"}),cs=M({...ds,props:as,emits:ns,setup(a,{emit:n}){const{t:o}=Pe(),s=Q("upload"),d=Q("icon"),p=Q("list"),w=X(!1),y=c=>{n("remove",c)};return(c,$)=>(v(),B(pt,{tag:"ul",class:m([e(s).b("list"),e(s).bm("list",c.listType),e(s).is("disabled",c.disabled)]),name:e(p).b()},{default:E(()=>[(v(!0),I(pe,null,Ne(c.files,b=>(v(),I("li",{key:b.uid||b.name,class:m([e(s).be("list","item"),e(s).is(b.status),{focusing:w.value}]),tabindex:"0",onKeydown:ze(L=>!c.disabled&&y(b),["delete"]),onFocus:$[0]||($[0]=L=>w.value=!0),onBlur:$[1]||($[1]=L=>w.value=!1),onClick:$[2]||($[2]=L=>w.value=!1)},[N(c.$slots,"default",{file:b},()=>[c.listType==="picture"||b.status!=="uploading"&&c.listType==="picture-card"?(v(),I("img",{key:0,class:m(e(s).be("list","item-thumbnail")),src:b.url,alt:""},null,10,ls)):_("v-if",!0),b.status==="uploading"||c.listType!=="picture-card"?(v(),I("div",{key:1,class:m(e(s).be("list","item-info"))},[C("a",{class:m(e(s).be("list","item-name")),onClick:ee(L=>c.handlePreview(b),["prevent"])},[h(e(U),{class:m(e(d).m("document"))},{default:E(()=>[h(e(ft))]),_:1},8,["class"]),C("span",{class:m(e(s).be("list","item-file-name"))},le(b.name),3)],10,rs),b.status==="uploading"?(v(),B(e(Zt),{key:0,type:c.listType==="picture-card"?"circle":"line","stroke-width":c.listType==="picture-card"?6:2,percentage:Number(b.percentage),style:K(c.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):_("v-if",!0)],2)):_("v-if",!0),C("label",{class:m(e(s).be("list","item-status-label"))},[c.listType==="text"?(v(),B(e(U),{key:0,class:m([e(d).m("upload-success"),e(d).m("circle-check")])},{default:E(()=>[h(e(Ue))]),_:1},8,["class"])):["picture-card","picture"].includes(c.listType)?(v(),B(e(U),{key:1,class:m([e(d).m("upload-success"),e(d).m("check")])},{default:E(()=>[h(e(Ae))]),_:1},8,["class"])):_("v-if",!0)],2),c.disabled?_("v-if",!0):(v(),B(e(U),{key:2,class:m(e(d).m("close")),onClick:L=>y(b)},{default:E(()=>[h(e(ve))]),_:2},1032,["class","onClick"])),_(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),_(" This is a bug which needs to be fixed "),_(" TODO: Fix the incorrect navigation interaction "),c.disabled?_("v-if",!0):(v(),I("i",{key:3,class:m(e(d).m("close-tip"))},le(e(o)("el.upload.deleteTip")),3)),c.listType==="picture-card"?(v(),I("span",{key:4,class:m(e(s).be("list","item-actions"))},[C("span",{class:m(e(s).be("list","item-preview")),onClick:L=>c.handlePreview(b)},[h(e(U),{class:m(e(d).m("zoom-in"))},{default:E(()=>[h(e(ge))]),_:1},8,["class"])],10,is),c.disabled?_("v-if",!0):(v(),I("span",{key:0,class:m(e(s).be("list","item-delete")),onClick:L=>y(b)},[h(e(U),{class:m(e(d).m("delete"))},{default:E(()=>[h(e(Me))]),_:1},8,["class"])],10,us))],2)):_("v-if",!0)])],42,os))),128)),N(c.$slots,"append")]),_:3},8,["class","name"]))}});var Te=ne(cs,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const fs=te({disabled:{type:Boolean,default:!1}}),ps={file:a=>mt(a)},ms=["onDrop","onDragover"],qe="ElUploadDrag",vs=M({name:qe}),gs=M({...vs,props:fs,emits:ps,setup(a,{emit:n}){const o=a,s=vt(xe);s||ye(qe,"usage: <el-upload><el-upload-dragger /></el-upload>");const d=Q("upload"),p=X(!1),w=c=>{if(o.disabled)return;p.value=!1;const $=Array.from(c.dataTransfer.files),b=s.accept.value;if(!b){n("file",$);return}const L=$.filter(r=>{const{type:t,name:l}=r,u=l.includes(".")?`.${l.split(".").pop()}`:"",S=t.replace(/\/.*$/,"");return b.split(",").map(f=>f.trim()).filter(f=>f).some(f=>f.startsWith(".")?u===f:/\/\*$/.test(f)?S===f.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(f)?t===f:!1)});n("file",L)},y=()=>{o.disabled||(p.value=!0)};return(c,$)=>(v(),I("div",{class:m([e(d).b("dragger"),e(d).is("dragover",p.value)]),onDrop:ee(w,["prevent"]),onDragover:ee(y,["prevent"]),onDragleave:$[0]||($[0]=ee(b=>p.value=!1,["prevent"]))},[N(c.$slots,"default")],42,ms))}});var bs=ne(gs,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const ys=te({...Ve,beforeUpload:{type:T(Function),default:A},onRemove:{type:T(Function),default:A},onStart:{type:T(Function),default:A},onSuccess:{type:T(Function),default:A},onProgress:{type:T(Function),default:A},onError:{type:T(Function),default:A},onExceed:{type:T(Function),default:A}}),hs=["onKeydown"],ks=["name","multiple","accept"],ws=M({name:"ElUploadContent",inheritAttrs:!1}),$s=M({...ws,props:ys,setup(a,{expose:n}){const o=a,s=Q("upload"),d=ue({}),p=ue(),w=t=>{if(t.length===0)return;const{autoUpload:l,limit:u,fileList:S,multiple:f,onStart:z,onExceed:i}=o;if(u&&S.length+t.length>u){i(t,S);return}f||(t=t.slice(0,1));for(const k of t){const R=k;R.uid=me(),z(R),l&&y(R)}},y=async t=>{if(p.value.value="",!o.beforeUpload)return c(t);let l;try{l=await o.beforeUpload(t)}catch{l=!1}if(l===!1){o.onRemove(t);return}let u=t;l instanceof Blob&&(l instanceof File?u=l:u=new File([l],t.name,{type:t.type})),c(Object.assign(u,{uid:t.uid}))},c=t=>{const{headers:l,data:u,method:S,withCredentials:f,name:z,action:i,onProgress:k,onSuccess:R,onError:O,httpRequest:x}=o,{uid:Z}=t,j={headers:l||{},withCredentials:f,file:t,data:u,method:S,filename:z,action:i,onProgress:J=>{k(J,t)},onSuccess:J=>{R(J,t),delete d.value[Z]},onError:J=>{O(J,t),delete d.value[Z]}},G=x(j);d.value[Z]=G,G instanceof Promise&&G.then(j.onSuccess,j.onError)},$=t=>{const l=t.target.files;!l||w(Array.from(l))},b=()=>{o.disabled||(p.value.value="",p.value.click())},L=()=>{b()};return n({abort:t=>{gt(d.value).filter(t?([u])=>String(t.uid)===u:()=>!0).forEach(([u,S])=>{S instanceof XMLHttpRequest&&S.abort(),delete d.value[u]})},upload:y}),(t,l)=>(v(),I("div",{class:m([e(s).b(),e(s).m(t.listType),e(s).is("drag",t.drag)]),tabindex:"0",onClick:b,onKeydown:ze(ee(L,["self"]),["enter","space"])},[t.drag?(v(),B(bs,{key:0,disabled:t.disabled,onFile:w},{default:E(()=>[N(t.$slots,"default")]),_:3},8,["disabled"])):N(t.$slots,"default",{key:1}),C("input",{ref_key:"inputRef",ref:p,class:m(e(s).e("input")),name:t.name,multiple:t.multiple,accept:t.accept,type:"file",onChange:$,onClick:l[0]||(l[0]=ee(()=>{},["stop"]))},null,42,ks)],42,hs))}});var Le=ne($s,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const Ie="ElUpload",_s=a=>{var n;(n=a.url)!=null&&n.startsWith("blob:")&&URL.revokeObjectURL(a.url)},Cs=(a,n)=>{const o=bt(a,"fileList",void 0,{passive:!0}),s=r=>o.value.find(t=>t.uid===r.uid);function d(r){var t;(t=n.value)==null||t.abort(r)}function p(r=["ready","uploading","success","fail"]){o.value=o.value.filter(t=>!r.includes(t.status))}const w=(r,t)=>{const l=s(t);!l||(console.error(r),l.status="fail",o.value.splice(o.value.indexOf(l),1),a.onError(r,l,o.value),a.onChange(l,o.value))},y=(r,t)=>{const l=s(t);!l||(a.onProgress(r,l,o.value),l.status="uploading",l.percentage=Math.round(r.percent))},c=(r,t)=>{const l=s(t);!l||(l.status="success",l.response=r,a.onSuccess(r,l,o.value),a.onChange(l,o.value))},$=r=>{Be(r.uid)&&(r.uid=me());const t={name:r.name,percentage:0,status:"ready",size:r.size,raw:r,uid:r.uid};if(a.listType==="picture-card"||a.listType==="picture")try{t.url=URL.createObjectURL(r)}catch(l){yt(Ie,l.message),a.onError(l,t,o.value)}o.value=[...o.value,t],a.onChange(t,o.value)},b=async r=>{const t=r instanceof File?s(r):r;t||ye(Ie,"file to be removed not found");const l=u=>{d(u);const S=o.value;S.splice(S.indexOf(u),1),a.onRemove(u,S),_s(u)};a.beforeRemove?await a.beforeRemove(t,o.value)!==!1&&l(t):l(t)};function L(){o.value.filter(({status:r})=>r==="ready").forEach(({raw:r})=>{var t;return r&&((t=n.value)==null?void 0:t.upload(r))})}return oe(()=>a.listType,r=>{r!=="picture-card"&&r!=="picture"||(o.value=o.value.map(t=>{const{raw:l,url:u}=t;if(!u&&l)try{t.url=URL.createObjectURL(l)}catch(S){a.onError(S,t,o.value)}return t}))}),oe(o,r=>{for(const t of r)t.uid||(t.uid=me()),t.status||(t.status="success")},{immediate:!0,deep:!0}),{uploadFiles:o,abort:d,clearFiles:p,handleError:w,handleProgress:y,handleStart:$,handleSuccess:c,handleRemove:b,submit:L}},Es=M({name:"ElUpload"}),Ss=M({...Es,props:ss,setup(a,{expose:n}){const o=a,s=ht(),d=kt(),p=ue(),{abort:w,submit:y,clearFiles:c,uploadFiles:$,handleStart:b,handleError:L,handleRemove:r,handleSuccess:t,handleProgress:l}=Cs(o,p),u=D(()=>o.listType==="picture-card"),S=D(()=>({...o,fileList:$.value,onStart:b,onProgress:l,onSuccess:t,onError:L,onRemove:r}));return wt(()=>{$.value.forEach(({url:f})=>{f!=null&&f.startsWith("blob:")&&URL.revokeObjectURL(f)})}),$t(xe,{accept:_t(o,"accept")}),n({abort:w,submit:y,clearFiles:c,handleStart:b,handleRemove:r}),(f,z)=>(v(),I("div",null,[e(u)&&f.showFileList?(v(),B(Te,{key:0,disabled:e(d),"list-type":f.listType,files:e($),"handle-preview":f.onPreview,onRemove:e(r)},Ee({append:E(()=>[h(Le,Se({ref_key:"uploadRef",ref:p},e(S)),{default:E(()=>[e(s).trigger?N(f.$slots,"trigger",{key:0}):_("v-if",!0),!e(s).trigger&&e(s).default?N(f.$slots,"default",{key:1}):_("v-if",!0)]),_:3},16)]),_:2},[f.$slots.file?{name:"default",fn:E(({file:i})=>[N(f.$slots,"file",{file:i})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):_("v-if",!0),!e(u)||e(u)&&!f.showFileList?(v(),B(Le,Se({key:1,ref_key:"uploadRef",ref:p},e(S)),{default:E(()=>[e(s).trigger?N(f.$slots,"trigger",{key:0}):_("v-if",!0),!e(s).trigger&&e(s).default?N(f.$slots,"default",{key:1}):_("v-if",!0)]),_:3},16)):_("v-if",!0),f.$slots.trigger?N(f.$slots,"default",{key:2}):_("v-if",!0),N(f.$slots,"tip"),!e(u)&&f.showFileList?(v(),B(Te,{key:3,disabled:e(d),"list-type":f.listType,files:e($),"handle-preview":f.onPreview,onRemove:e(r)},Ee({_:2},[f.$slots.file?{name:"default",fn:E(({file:i})=>[N(f.$slots,"file",{file:i})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):_("v-if",!0)]))}});var Fs=ne(Ss,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const Rs=be(Fs);function Ts(a){return[a]}const de=a=>(Rt("data-v-799873cf"),a=a(),Tt(),a),Ls=["id"],Is={class:"content"},Os=["src"],Ps={class:"mask"},Ds=de(()=>C("span",null,"\u7F16\u8F91",-1)),Ns=["onClick"],Us=de(()=>C("span",null,"\u67E5\u770B",-1)),As=["onClick"],Bs=de(()=>C("span",null,"\u5220\u9664",-1)),zs=de(()=>C("div",{class:"tip-text"},"\u8FD9\u91CC\u662F\u63D0\u793A\u6846",-1)),Ms=M({__name:"index",props:{id:null,drag:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},type:{default:"avatar"},isRadius:{type:Boolean,default:!0},limitSize:{default:4*1024*1024},limitNums:{default:1},uploadStyle:{default:()=>({width:"140px",height:"140px"})},url:null,imageUrl:null,modelValue:null},emits:["update:modelValue"],setup(a,{expose:n,emit:o}){const s=a;Ft(k=>({"8c462a3c":e(y),"55454a12":a.uploadStyle.width,"3994fe5b":a.uploadStyle.height,"0cc5e37b":e($),ac0f91f6:e(b).cursor,42315848:e(b).borderColor}));const d=k=>k===""?[]:typeof k=="string"?Ts(k).map(R=>({name:`text_${Date.now()}`,url:R})):k.map(R=>({name:`text_${Date.now()}`,url:R}));console.log(s);const p=X(d(s.imageUrl));oe(()=>p.value,k=>{o("update:modelValue",k)},{deep:!0});const w=s.type==="avatar"?"\u8BF7\u4E0A\u4F20\u5934\u50CF":"\u8BF7\u4E0A\u4F20\u56FE\u7247",y=s.isRadius?"50%":"8px",c=X([]),$=D(()=>p.value.length===s.limitNums?"none":"flex"),b=s.disabled?{cursor:"no-drop",borderColor:"var(--el-border-color-darker)"}:{cursor:"pointer",borderColor:"var(--el-color-primary);"},L=X(),r=()=>{},t=(k,R)=>{R.length>s.limitNums&&R.shift(),k.size>s.limitSize?(Fe({type:"error",title:"\u6E29\u99A8\u63D0\u793A",message:"\u56FE\u7247\u8FC7\u5927!"}),z(k)):Fe({type:"success",title:"\u6E29\u99A8\u63D0\u793A",message:"\u56FE\u7247\u4E0A\u4F20\u6210\u529F!"})},l=()=>{document.querySelector(`#${s.id} .el-upload__input`).dispatchEvent(new MouseEvent("click"))},u=X(!1),S=()=>{u.value=!u.value},f=k=>{c.value=[k.url],S()},z=k=>{const R=p.value.findIndex(O=>O.uid===k.uid);p.value.splice(R,1)};return n({handleUpload:()=>{L.value.submit()}}),(k,R)=>{const O=U,x=Rs,Z=Mt;return v(),I("span",{style:{display:"inline-block","text-align":"center"},id:a.id},[h(x,{ref_key:"uploadRef",ref:L,accept:"image/jpg,image/png,image/jpeg,image/gif",action:a.url,"list-type":"picture-card","auto-upload":!1,drag:a.drag,"file-list":p.value,"onUpdate:file-list":R[0]||(R[0]=j=>p.value=j),"before-upload":r,"on-change":t,disabled:a.disabled},{default:E(()=>[C("div",Is,[h(O,null,{default:E(()=>[a.type==="avatar"?(v(),B(e(Ct),{key:0})):(v(),B(e(Et),{key:1}))]),_:1}),C("span",null,le(e(w)),1)])]),file:E(({file:j})=>[C("img",{src:j.url},null,8,Os),C("div",Ps,[!a.disabled&&a.limitNums===1?(v(),I("div",{key:0,onClick:l},[h(O,null,{default:E(()=>[h(e(St))]),_:1}),Ds])):_("",!0),C("div",{onClick:G=>f(j)},[h(O,null,{default:E(()=>[h(e(ge))]),_:1}),Us],8,Ns),a.disabled?_("",!0):(v(),I("div",{key:1,onClick:G=>z(j)},[h(O,null,{default:E(()=>[h(e(Me))]),_:1}),Bs],8,As))])]),_:1},8,["action","drag","file-list","disabled"]),N(k.$slots,"tip",{},()=>[zs],!0),u.value?(v(),B(Z,{key:0,onClose:S,"url-list":e(c)},null,8,["url-list"])):_("",!0)],8,Ls)}}}),Vs=Lt(Ms,[["__scopeId","data-v-799873cf"]]);export{Vs as default};

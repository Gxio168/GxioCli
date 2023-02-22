import{b as T,az as K,d as W,aS as O,aT as X,j as _,bF as P,r as u,bY as x,bZ as ee,n as w,bH as R,w as A,o as oe,p as le,aB as ae,b_ as L,a as se,e as te,b$ as ne,E as re,F as ie,bR as de,h as ue,u as fe,_ as ce,bb as B,q as i,t as ye,v as C,x as E,Q as pe,y as N,z as t,B as ve,C as me,G as h,S,a4 as be,D as d,R as Ce,T as he,U as we,Y as ke}from"./index.fe16509b.js";import{u as Be,E as Ee}from"./index.fe7fc375.js";const Se=T({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:K},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),De=T({...Se,appendToBody:{type:Boolean,default:!1},beforeClose:{type:W(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),ge={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[O]:e=>X(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ie=(e,o)=>{const a=ae().emit,{nextZIndex:f}=_();let c="";const y=P(),p=P(),s=u(!1),v=u(!1),r=u(!1),D=u(e.zIndex||f());let m,b;const M=x("namespace",ee),V=w(()=>{const l={},n=`--${M.value}-dialog`;return e.fullscreen||(e.top&&(l[`${n}-margin-top`]=e.top),e.width&&(l[`${n}-width`]=R(e.width))),l}),q=w(()=>e.alignCenter?{display:"flex"}:{});function H(){a("opened")}function U(){a("closed"),a(O,!1),e.destroyOnClose&&(r.value=!1)}function Z(){a("close")}function $(){b==null||b(),m==null||m(),e.openDelay&&e.openDelay>0?{stop:m}=L(()=>F(),e.openDelay):F()}function g(){m==null||m(),b==null||b(),e.closeDelay&&e.closeDelay>0?{stop:b}=L(()=>z(),e.closeDelay):z()}function I(){function l(n){n||(v.value=!0,s.value=!1)}e.beforeClose?e.beforeClose(l):g()}function G(){e.closeOnClickModal&&I()}function F(){!se||(s.value=!0)}function z(){s.value=!1}function Y(){a("openAutoFocus")}function j(){a("closeAutoFocus")}function Q(l){var n;((n=l.detail)==null?void 0:n.focusReason)==="pointer"&&l.preventDefault()}e.lockScroll&&Be(s);function J(){e.closeOnPressEscape&&I()}return A(()=>e.modelValue,l=>{l?(v.value=!1,$(),r.value=!0,D.value=e.zIndex?D.value++:f(),oe(()=>{a("open"),o.value&&(o.value.scrollTop=0)})):s.value&&g()}),A(()=>e.fullscreen,l=>{!o.value||(l?(c=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=c)}),le(()=>{e.modelValue&&(s.value=!0,r.value=!0,$())}),{afterEnter:H,afterLeave:U,beforeLeave:Z,handleClose:I,onModalClick:G,close:g,doClose:z,onOpenAutoFocus:Y,onCloseAutoFocus:j,onCloseRequested:J,onFocusoutPrevented:Q,titleId:y,bodyId:p,closed:v,style:V,overlayDialogStyle:q,rendered:r,visible:s,zIndex:D}},ze=T({...De,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0}}),Te=ge,$e=te({name:"ElDrawer",components:{ElOverlay:Ee,ElFocusTrap:ne,ElIcon:re,Close:ie},props:ze,emits:Te,setup(e,{slots:o}){de({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},w(()=>!!o.title));const k=u(),a=u(),f=ue("drawer"),{t:c}=fe(),y=w(()=>e.direction==="rtl"||e.direction==="ltr"),p=w(()=>R(e.size));return{...Ie(e,k),drawerRef:k,focusStartRef:a,isHorizontal:y,drawerSize:p,ns:f,t:c}}}),Fe=["aria-label","aria-labelledby","aria-describedby"],Pe=["id"],Ae=["aria-label"],Le=["id"];function Ne(e,o,k,a,f,c){const y=B("close"),p=B("el-icon"),s=B("el-focus-trap"),v=B("el-overlay");return i(),ye(we,{to:"body",disabled:!e.appendToBody},[C(he,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:E(()=>[pe(C(v,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:E(()=>[C(s,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:E(()=>[N("div",{ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId,class:t([e.ns.b(),e.direction,e.visible&&"open",e.customClass]),style:ve(e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize),role:"dialog",onClick:o[1]||(o[1]=me(()=>{},["stop"]))},[N("span",{ref:"focusStartRef",class:t(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(i(),h("header",{key:0,class:t(e.ns.e("header"))},[e.$slots.title?S(e.$slots,"title",{key:1},()=>[d(" DEPRECATED SLOT ")]):S(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},()=>[e.$slots.title?d("v-if",!0):(i(),h("span",{key:0,id:e.titleId,role:"heading",class:t(e.ns.e("title"))},be(e.title),11,Pe))]),e.showClose?(i(),h("button",{key:2,"aria-label":e.t("el.drawer.close"),class:t(e.ns.e("close-btn")),type:"button",onClick:o[0]||(o[0]=(...r)=>e.handleClose&&e.handleClose(...r))},[C(p,{class:t(e.ns.e("close"))},{default:E(()=>[C(y)]),_:1},8,["class"])],10,Ae)):d("v-if",!0)],2)):d("v-if",!0),e.rendered?(i(),h("div",{key:1,id:e.bodyId,class:t(e.ns.e("body"))},[S(e.$slots,"default")],10,Le)):d("v-if",!0),e.$slots.footer?(i(),h("div",{key:2,class:t(e.ns.e("footer"))},[S(e.$slots,"footer")],2)):d("v-if",!0)],14,Fe)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[Ce,e.visible]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}var Oe=ce($e,[["render",Ne],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]);const Ve=ke(Oe);export{Ve as E};

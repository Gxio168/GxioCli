import{D as c,ax as Me,A as Re,r as $,R as be,j as De,ay as Le,k as G,a1 as ge,m as He,Q as J,d as Ie,al as Oe,T as je,az as Ke,aA as We,aB as Ue,am as Xe,u as xe,s as Q,aC as Ye,aD as _e,aE as Ze,aF as qe,q as Ge,n as ee,p as B,aG as we,F as Je,aH as Qe,X as et,Y as tt,o as d,c as x,Z as f,ab as te,v as y,x as t,P as j,b as P,a3 as w,w as M,a4 as K,H as R,ar as ae,a as at,aI as ot,ad as st,ai as nt,a5 as W,y as lt,z as rt,aJ as it,ak as Se,$ as ut}from"./index.123f106b.js";import{U as oe}from"./event.9443ec1f.js";const dt=o=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(o),ct=["class","style"],pt=/^on[A-Z]/,ft=(o={})=>{const{excludeListeners:v=!1,excludeKeys:n}=o,a=c(()=>((n==null?void 0:n.value)||[]).concat(ct)),l=Re();return l?c(()=>{var p;return Me(Object.entries((p=l.proxy)==null?void 0:p.$attrs).filter(([i])=>!a.value.includes(i)&&!(v&&pt.test(i))))}):c(()=>({}))};function vt(o){const v=$();function n(){if(o.value==null)return;const{selectionStart:l,selectionEnd:p,value:i}=o.value;if(l==null||p==null)return;const h=i.slice(0,Math.max(0,l)),u=i.slice(Math.max(0,p));v.value={selectionStart:l,selectionEnd:p,value:i,beforeTxt:h,afterTxt:u}}function a(){if(o.value==null||v.value==null)return;const{value:l}=o.value,{beforeTxt:p,afterTxt:i,selectionStart:h}=v.value;if(p==null||i==null||h==null)return;let u=l.length;if(l.endsWith(i))u=l.length-i.length;else if(l.startsWith(p))u=p.length;else{const m=p[h-1],S=l.indexOf(m,h-1);S!==-1&&(u=S+1)}o.value.setSelectionRange(u,u)}return[n,a]}let b;const mt=`
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,yt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function ht(o){const v=window.getComputedStyle(o),n=v.getPropertyValue("box-sizing"),a=Number.parseFloat(v.getPropertyValue("padding-bottom"))+Number.parseFloat(v.getPropertyValue("padding-top")),l=Number.parseFloat(v.getPropertyValue("border-bottom-width"))+Number.parseFloat(v.getPropertyValue("border-top-width"));return{contextStyle:yt.map(i=>`${i}:${v.getPropertyValue(i)}`).join(";"),paddingSize:a,borderSize:l,boxSizing:n}}function Ce(o,v=1,n){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:l,borderSize:p,boxSizing:i,contextStyle:h}=ht(o);b.setAttribute("style",`${h};${mt}`),b.value=o.value||o.placeholder||"";let u=b.scrollHeight;const m={};i==="border-box"?u=u+p:i==="content-box"&&(u=u-l),b.value="";const S=b.scrollHeight-l;if(be(v)){let g=S*v;i==="border-box"&&(g=g+l+p),u=Math.max(g,u),m.minHeight=`${g}px`}if(be(n)){let g=S*n;i==="border-box"&&(g=g+l+p),u=Math.min(g,u)}return m.height=`${u}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,m}const bt=De({id:{type:String,default:void 0},size:Le,disabled:Boolean,modelValue:{type:G([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:G([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:ge},prefixIcon:{type:ge},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:G([Object,Array,String]),default:()=>He({})}}),gt={[oe]:o=>J(o),input:o=>J(o),change:o=>J(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},xt=["role"],wt=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],St=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],Ct=Ie({name:"ElInput",inheritAttrs:!1}),It=Ie({...Ct,props:bt,emits:gt,setup(o,{expose:v,emit:n}){const a=o,l=Oe(),p=je(),i=c(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=l["aria-haspopup"],e["aria-owns"]=l["aria-owns"],e["aria-expanded"]=l["aria-expanded"]),e}),h=ft({excludeKeys:c(()=>Object.keys(i.value))}),{form:u,formItem:m}=Ke(),{inputId:S}=We(a,{formItemContext:m}),g=Ue(),E=Xe(),s=xe("input"),se=xe("textarea"),D=Q(),z=Q(),V=$(!1),U=$(!1),N=$(!1),L=$(!1),ne=$(),X=Q(a.inputStyle),F=c(()=>D.value||z.value),le=c(()=>{var e;return(e=u==null?void 0:u.statusIcon)!=null?e:!1}),T=c(()=>(m==null?void 0:m.validateState)||""),re=c(()=>T.value&&Ye[T.value]),Ee=c(()=>L.value?_e:Ze),ze=c(()=>[l.style,a.inputStyle]),ie=c(()=>[a.inputStyle,X.value,{resize:a.resize}]),C=c(()=>qe(a.modelValue)?"":String(a.modelValue)),H=c(()=>a.clearable&&!E.value&&!a.readonly&&!!C.value&&(V.value||U.value)),Y=c(()=>a.showPassword&&!E.value&&!a.readonly&&!!C.value&&(!!C.value||V.value)),k=c(()=>a.showWordLimit&&!!h.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!E.value&&!a.readonly&&!a.showPassword),_=c(()=>Array.from(C.value).length),ke=c(()=>!!k.value&&_.value>Number(h.value.maxlength)),Pe=c(()=>!!p.suffix||!!a.suffixIcon||H.value||a.showPassword||k.value||!!T.value&&le.value),[$e,Ve]=vt(D);Ge(z,e=>{if(!k.value||a.resize!=="both")return;const r=e[0],{width:I}=r.contentRect;ne.value={right:`calc(100% - ${I+15+6}px)`}});const O=()=>{const{type:e,autosize:r}=a;if(!(!it||e!=="textarea"))if(r){const I=Se(r)?r.minRows:void 0,q=Se(r)?r.maxRows:void 0;X.value={...Ce(z.value,I,q)}}else X.value={minHeight:Ce(z.value).minHeight}},A=()=>{const e=F.value;!e||e.value===C.value||(e.value=C.value)},Z=async e=>{$e();let{value:r}=e.target;if(a.formatter&&(r=a.parser?a.parser(r):r,r=a.formatter(r)),!N.value){if(r===C.value){A();return}n(oe,r),n("input",r),await B(),A(),Ve()}},ue=e=>{n("change",e.target.value)},de=e=>{n("compositionstart",e),N.value=!0},ce=e=>{var r;n("compositionupdate",e);const I=(r=e.target)==null?void 0:r.value,q=I[I.length-1]||"";N.value=!dt(q)},pe=e=>{n("compositionend",e),N.value&&(N.value=!1,Z(e))},Ne=()=>{L.value=!L.value,fe()},fe=async()=>{var e;await B(),(e=F.value)==null||e.focus()},Fe=()=>{var e;return(e=F.value)==null?void 0:e.blur()},ve=e=>{V.value=!0,n("focus",e)},me=e=>{var r;V.value=!1,n("blur",e),a.validateEvent&&((r=m==null?void 0:m.validate)==null||r.call(m,"blur").catch(I=>we()))},Te=e=>{U.value=!1,n("mouseleave",e)},Ae=e=>{U.value=!0,n("mouseenter",e)},ye=e=>{n("keydown",e)},Be=()=>{var e;(e=F.value)==null||e.select()},he=()=>{n(oe,""),n("change",""),n("clear"),n("input","")};return ee(()=>a.modelValue,()=>{var e;B(()=>O()),a.validateEvent&&((e=m==null?void 0:m.validate)==null||e.call(m,"change").catch(r=>we()))}),ee(C,()=>A()),ee(()=>a.type,async()=>{await B(),A(),O()}),Je(()=>{!a.formatter&&a.parser,A(),B(O)}),v({input:D,textarea:z,ref:F,textareaStyle:ie,autosize:Qe(a,"autosize"),focus:fe,blur:Fe,select:Be,clear:he,resizeTextarea:O}),(e,r)=>et((d(),x("div",ae(t(i),{class:[e.type==="textarea"?t(se).b():t(s).b(),t(s).m(t(g)),t(s).is("disabled",t(E)),t(s).is("exceed",t(ke)),{[t(s).b("group")]:e.$slots.prepend||e.$slots.append,[t(s).bm("group","append")]:e.$slots.append,[t(s).bm("group","prepend")]:e.$slots.prepend,[t(s).m("prefix")]:e.$slots.prefix||e.prefixIcon,[t(s).m("suffix")]:e.$slots.suffix||e.suffixIcon||e.clearable||e.showPassword,[t(s).bm("suffix","password-clear")]:t(H)&&t(Y)},e.$attrs.class],style:t(ze),role:e.containerRole,onMouseenter:Ae,onMouseleave:Te}),[f(" input "),e.type!=="textarea"?(d(),x(te,{key:0},[f(" prepend slot "),e.$slots.prepend?(d(),x("div",{key:0,class:y(t(s).be("group","prepend"))},[j(e.$slots,"prepend")],2)):f("v-if",!0),P("div",{class:y([t(s).e("wrapper"),t(s).is("focus",V.value)])},[f(" prefix slot "),e.$slots.prefix||e.prefixIcon?(d(),x("span",{key:0,class:y(t(s).e("prefix"))},[P("span",{class:y(t(s).e("prefix-inner"))},[j(e.$slots,"prefix"),e.prefixIcon?(d(),w(t(R),{key:0,class:y(t(s).e("icon"))},{default:M(()=>[(d(),w(K(e.prefixIcon)))]),_:1},8,["class"])):f("v-if",!0)],2)],2)):f("v-if",!0),P("input",ae({id:t(S),ref_key:"input",ref:D,class:t(s).e("inner")},t(h),{type:e.showPassword?L.value?"text":"password":e.type,disabled:t(E),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:a.form,onCompositionstart:de,onCompositionupdate:ce,onCompositionend:pe,onInput:Z,onFocus:ve,onBlur:me,onChange:ue,onKeydown:ye}),null,16,wt),f(" suffix slot "),t(Pe)?(d(),x("span",{key:1,class:y(t(s).e("suffix"))},[P("span",{class:y(t(s).e("suffix-inner"))},[!t(H)||!t(Y)||!t(k)?(d(),x(te,{key:0},[j(e.$slots,"suffix"),e.suffixIcon?(d(),w(t(R),{key:0,class:y(t(s).e("icon"))},{default:M(()=>[(d(),w(K(e.suffixIcon)))]),_:1},8,["class"])):f("v-if",!0)],64)):f("v-if",!0),t(H)?(d(),w(t(R),{key:1,class:y([t(s).e("icon"),t(s).e("clear")]),onMousedown:st(t(nt),["prevent"]),onClick:he},{default:M(()=>[at(t(ot))]),_:1},8,["class","onMousedown"])):f("v-if",!0),t(Y)?(d(),w(t(R),{key:2,class:y([t(s).e("icon"),t(s).e("password")]),onClick:Ne},{default:M(()=>[(d(),w(K(t(Ee))))]),_:1},8,["class"])):f("v-if",!0),t(k)?(d(),x("span",{key:3,class:y(t(s).e("count"))},[P("span",{class:y(t(s).e("count-inner"))},W(t(_))+" / "+W(t(h).maxlength),3)],2)):f("v-if",!0),t(T)&&t(re)&&t(le)?(d(),w(t(R),{key:4,class:y([t(s).e("icon"),t(s).e("validateIcon"),t(s).is("loading",t(T)==="validating")])},{default:M(()=>[(d(),w(K(t(re))))]),_:1},8,["class"])):f("v-if",!0)],2)],2)):f("v-if",!0)],2),f(" append slot "),e.$slots.append?(d(),x("div",{key:1,class:y(t(s).be("group","append"))},[j(e.$slots,"append")],2)):f("v-if",!0)],64)):(d(),x(te,{key:1},[f(" textarea "),P("textarea",ae({id:t(S),ref_key:"textarea",ref:z,class:t(se).e("inner")},t(h),{tabindex:e.tabindex,disabled:t(E),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ie),"aria-label":e.label,placeholder:e.placeholder,form:a.form,onCompositionstart:de,onCompositionupdate:ce,onCompositionend:pe,onInput:Z,onFocus:ve,onBlur:me,onChange:ue,onKeydown:ye}),null,16,St),t(k)?(d(),x("span",{key:0,style:lt(ne.value),class:y(t(s).e("count"))},W(t(_))+" / "+W(t(h).maxlength),7)):f("v-if",!0)],64))],16,xt)),[[tt,e.type!=="hidden"]])}});var Et=rt(It,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Pt=ut(Et);export{Pt as E,ft as u};

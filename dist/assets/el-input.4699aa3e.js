import{Q as c,ah as Be,q as Re,r as V,ai as be,b as De,N as Le,g as Q,i as ge,aj as Oe,Y as oe,Z as G,d as Ie,a2 as He,P as je,ak as Ke,al as We,O as _e,a3 as Ue,u as xe,am as J,an as Ye,ao as Xe,ap as qe,aq as Ze,ar as Qe,A as ee,ac as A,as as we,o as Ge,at as Je,au as et,av as tt,a as d,c as x,C as f,I as te,n as h,f as t,e as j,j as P,k as w,w as B,l as K,E as R,a8 as ae,D as at,aw as ot,H as st,W as nt,m as W,V as lt,_ as rt,ax as it,a1 as Se,s as ut}from"./index.b0a92191.js";const dt=o=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(o),ct=["class","style"],pt=/^on[A-Z]/,ft=(o={})=>{const{excludeListeners:v=!1,excludeKeys:n}=o,a=c(()=>((n==null?void 0:n.value)||[]).concat(ct)),l=Re();return l?c(()=>{var p;return Be(Object.entries((p=l.proxy)==null?void 0:p.$attrs).filter(([i])=>!a.value.includes(i)&&!(v&&pt.test(i))))}):c(()=>({}))};function vt(o){const v=V();function n(){if(o.value==null)return;const{selectionStart:l,selectionEnd:p,value:i}=o.value;if(l==null||p==null)return;const y=i.slice(0,Math.max(0,l)),u=i.slice(Math.max(0,p));v.value={selectionStart:l,selectionEnd:p,value:i,beforeTxt:y,afterTxt:u}}function a(){if(o.value==null||v.value==null)return;const{value:l}=o.value,{beforeTxt:p,afterTxt:i,selectionStart:y}=v.value;if(p==null||i==null||y==null)return;let u=l.length;if(l.endsWith(i))u=l.length-i.length;else if(l.startsWith(p))u=p.length;else{const m=p[y-1],S=l.indexOf(m,y-1);S!==-1&&(u=S+1)}o.value.setSelectionRange(u,u)}return[n,a]}let b;const mt=`
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,ht=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function yt(o){const v=window.getComputedStyle(o),n=v.getPropertyValue("box-sizing"),a=Number.parseFloat(v.getPropertyValue("padding-bottom"))+Number.parseFloat(v.getPropertyValue("padding-top")),l=Number.parseFloat(v.getPropertyValue("border-bottom-width"))+Number.parseFloat(v.getPropertyValue("border-top-width"));return{contextStyle:ht.map(i=>`${i}:${v.getPropertyValue(i)}`).join(";"),paddingSize:a,borderSize:l,boxSizing:n}}function Ce(o,v=1,n){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:l,borderSize:p,boxSizing:i,contextStyle:y}=yt(o);b.setAttribute("style",`${y};${mt}`),b.value=o.value||o.placeholder||"";let u=b.scrollHeight;const m={};i==="border-box"?u=u+p:i==="content-box"&&(u=u-l),b.value="";const S=b.scrollHeight-l;if(be(v)){let g=S*v;i==="border-box"&&(g=g+l+p),u=Math.max(g,u),m.minHeight=`${g}px`}if(be(n)){let g=S*n;i==="border-box"&&(g=g+l+p),u=Math.min(g,u)}return m.height=`${u}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,m}const bt=De({id:{type:String,default:void 0},size:Le,disabled:Boolean,modelValue:{type:Q([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:Q([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:ge},prefixIcon:{type:ge},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:Q([Object,Array,String]),default:()=>Oe({})}}),gt={[oe]:o=>G(o),input:o=>G(o),change:o=>G(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},xt=["role"],wt=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],St=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],Ct=Ie({name:"ElInput",inheritAttrs:!1}),It=Ie({...Ct,props:bt,emits:gt,setup(o,{expose:v,emit:n}){const a=o,l=He(),p=je(),i=c(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=l["aria-haspopup"],e["aria-owns"]=l["aria-owns"],e["aria-expanded"]=l["aria-expanded"]),e}),y=ft({excludeKeys:c(()=>Object.keys(i.value))}),{form:u,formItem:m}=Ke(),{inputId:S}=We(a,{formItemContext:m}),g=_e(),E=Ue(),s=xe("input"),se=xe("textarea"),D=J(),k=J(),$=V(!1),_=V(!1),N=V(!1),L=V(!1),ne=V(),U=J(a.inputStyle),T=c(()=>D.value||k.value),le=c(()=>{var e;return(e=u==null?void 0:u.statusIcon)!=null?e:!1}),F=c(()=>(m==null?void 0:m.validateState)||""),re=c(()=>F.value&&Ye[F.value]),Ee=c(()=>L.value?Xe:qe),ke=c(()=>[l.style,a.inputStyle]),ie=c(()=>[a.inputStyle,U.value,{resize:a.resize}]),C=c(()=>Ze(a.modelValue)?"":String(a.modelValue)),O=c(()=>a.clearable&&!E.value&&!a.readonly&&!!C.value&&($.value||_.value)),Y=c(()=>a.showPassword&&!E.value&&!a.readonly&&!!C.value&&(!!C.value||$.value)),z=c(()=>a.showWordLimit&&!!y.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!E.value&&!a.readonly&&!a.showPassword),X=c(()=>Array.from(C.value).length),ze=c(()=>!!z.value&&X.value>Number(y.value.maxlength)),Pe=c(()=>!!p.suffix||!!a.suffixIcon||O.value||a.showPassword||z.value||!!F.value&&le.value),[Ve,$e]=vt(D);Qe(k,e=>{if(!z.value||a.resize!=="both")return;const r=e[0],{width:I}=r.contentRect;ne.value={right:`calc(100% - ${I+15+6}px)`}});const H=()=>{const{type:e,autosize:r}=a;if(!(!it||e!=="textarea"))if(r){const I=Se(r)?r.minRows:void 0,Z=Se(r)?r.maxRows:void 0;U.value={...Ce(k.value,I,Z)}}else U.value={minHeight:Ce(k.value).minHeight}},M=()=>{const e=T.value;!e||e.value===C.value||(e.value=C.value)},q=async e=>{Ve();let{value:r}=e.target;if(a.formatter&&(r=a.parser?a.parser(r):r,r=a.formatter(r)),!N.value){if(r===C.value){M();return}n(oe,r),n("input",r),await A(),M(),$e()}},ue=e=>{n("change",e.target.value)},de=e=>{n("compositionstart",e),N.value=!0},ce=e=>{var r;n("compositionupdate",e);const I=(r=e.target)==null?void 0:r.value,Z=I[I.length-1]||"";N.value=!dt(Z)},pe=e=>{n("compositionend",e),N.value&&(N.value=!1,q(e))},Ne=()=>{L.value=!L.value,fe()},fe=async()=>{var e;await A(),(e=T.value)==null||e.focus()},Te=()=>{var e;return(e=T.value)==null?void 0:e.blur()},ve=e=>{$.value=!0,n("focus",e)},me=e=>{var r;$.value=!1,n("blur",e),a.validateEvent&&((r=m==null?void 0:m.validate)==null||r.call(m,"blur").catch(I=>we()))},Fe=e=>{_.value=!1,n("mouseleave",e)},Me=e=>{_.value=!0,n("mouseenter",e)},he=e=>{n("keydown",e)},Ae=()=>{var e;(e=T.value)==null||e.select()},ye=()=>{n(oe,""),n("change",""),n("clear"),n("input","")};return ee(()=>a.modelValue,()=>{var e;A(()=>H()),a.validateEvent&&((e=m==null?void 0:m.validate)==null||e.call(m,"change").catch(r=>we()))}),ee(C,()=>M()),ee(()=>a.type,async()=>{await A(),M(),H()}),Ge(()=>{!a.formatter&&a.parser,M(),A(H)}),v({input:D,textarea:k,ref:T,textareaStyle:ie,autosize:Je(a,"autosize"),focus:fe,blur:Te,select:Ae,clear:ye,resizeTextarea:H}),(e,r)=>et((d(),x("div",ae(t(i),{class:[e.type==="textarea"?t(se).b():t(s).b(),t(s).m(t(g)),t(s).is("disabled",t(E)),t(s).is("exceed",t(ze)),{[t(s).b("group")]:e.$slots.prepend||e.$slots.append,[t(s).bm("group","append")]:e.$slots.append,[t(s).bm("group","prepend")]:e.$slots.prepend,[t(s).m("prefix")]:e.$slots.prefix||e.prefixIcon,[t(s).m("suffix")]:e.$slots.suffix||e.suffixIcon||e.clearable||e.showPassword,[t(s).bm("suffix","password-clear")]:t(O)&&t(Y)},e.$attrs.class],style:t(ke),role:e.containerRole,onMouseenter:Me,onMouseleave:Fe}),[f(" input "),e.type!=="textarea"?(d(),x(te,{key:0},[f(" prepend slot "),e.$slots.prepend?(d(),x("div",{key:0,class:h(t(s).be("group","prepend"))},[j(e.$slots,"prepend")],2)):f("v-if",!0),P("div",{class:h([t(s).e("wrapper"),t(s).is("focus",$.value)])},[f(" prefix slot "),e.$slots.prefix||e.prefixIcon?(d(),x("span",{key:0,class:h(t(s).e("prefix"))},[P("span",{class:h(t(s).e("prefix-inner"))},[j(e.$slots,"prefix"),e.prefixIcon?(d(),w(t(R),{key:0,class:h(t(s).e("icon"))},{default:B(()=>[(d(),w(K(e.prefixIcon)))]),_:1},8,["class"])):f("v-if",!0)],2)],2)):f("v-if",!0),P("input",ae({id:t(S),ref_key:"input",ref:D,class:t(s).e("inner")},t(y),{type:e.showPassword?L.value?"text":"password":e.type,disabled:t(E),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:a.form,onCompositionstart:de,onCompositionupdate:ce,onCompositionend:pe,onInput:q,onFocus:ve,onBlur:me,onChange:ue,onKeydown:he}),null,16,wt),f(" suffix slot "),t(Pe)?(d(),x("span",{key:1,class:h(t(s).e("suffix"))},[P("span",{class:h(t(s).e("suffix-inner"))},[!t(O)||!t(Y)||!t(z)?(d(),x(te,{key:0},[j(e.$slots,"suffix"),e.suffixIcon?(d(),w(t(R),{key:0,class:h(t(s).e("icon"))},{default:B(()=>[(d(),w(K(e.suffixIcon)))]),_:1},8,["class"])):f("v-if",!0)],64)):f("v-if",!0),t(O)?(d(),w(t(R),{key:1,class:h([t(s).e("icon"),t(s).e("clear")]),onMousedown:st(t(nt),["prevent"]),onClick:ye},{default:B(()=>[at(t(ot))]),_:1},8,["class","onMousedown"])):f("v-if",!0),t(Y)?(d(),w(t(R),{key:2,class:h([t(s).e("icon"),t(s).e("password")]),onClick:Ne},{default:B(()=>[(d(),w(K(t(Ee))))]),_:1},8,["class"])):f("v-if",!0),t(z)?(d(),x("span",{key:3,class:h(t(s).e("count"))},[P("span",{class:h(t(s).e("count-inner"))},W(t(X))+" / "+W(t(y).maxlength),3)],2)):f("v-if",!0),t(F)&&t(re)&&t(le)?(d(),w(t(R),{key:4,class:h([t(s).e("icon"),t(s).e("validateIcon"),t(s).is("loading",t(F)==="validating")])},{default:B(()=>[(d(),w(K(t(re))))]),_:1},8,["class"])):f("v-if",!0)],2)],2)):f("v-if",!0)],2),f(" append slot "),e.$slots.append?(d(),x("div",{key:1,class:h(t(s).be("group","append"))},[j(e.$slots,"append")],2)):f("v-if",!0)],64)):(d(),x(te,{key:1},[f(" textarea "),P("textarea",ae({id:t(S),ref_key:"textarea",ref:k,class:t(se).e("inner")},t(y),{tabindex:e.tabindex,disabled:t(E),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ie),"aria-label":e.label,placeholder:e.placeholder,form:a.form,onCompositionstart:de,onCompositionupdate:ce,onCompositionend:pe,onInput:q,onFocus:ve,onBlur:me,onChange:ue,onKeydown:he}),null,16,St),t(z)?(d(),x("span",{key:0,style:lt(ne.value),class:h(t(s).e("count"))},W(t(X))+" / "+W(t(y).maxlength),7)):f("v-if",!0)],64))],16,xt)),[[tt,e.type!=="hidden"]])}});var Et=rt(It,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const zt=ut(Et);export{zt as E,dt as i,ft as u};

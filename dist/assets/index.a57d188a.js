import{bC as Hl,bE as ml,bK as Ql,by as gl,bv as bl,bL as Gl,ad as Me,n as S,bM as Ae,bN as z,w as V,A as ae,bO as kl,aB as rl,e as $e,h as ue,b3 as De,aA as sl,aj as Ul,o as A,_ as Be,Q as be,R as ul,q as w,G as P,S as se,y as D,a4 as Z,z as T,C as X,r as K,p as dl,b0 as Rl,B as re,u as fl,b6 as jl,l as hl,aW as Yl,aY as Jl,ag as Xl,a2 as oe,bP as me,a as Zl,c as xl,bQ as tl,aM as yl,aJ as x,a3 as _l,W as en,aL as ql,aQ as ln,aS as nn,E as tn,aI as on,az as Sl,a0 as an,b4 as rn,bR as sn,ak as zl,aT as ne,bS as un,v as ge,x as M,t as W,H as il,P as Cl,D as R,T as dn,a8 as q,bT as fn,am as cn,M as Ol,Y as pn,aC as Vl}from"./index.729ec0c4.js";import{i as vn,E as mn}from"./index.fdfbd021.js";import{E as gn,t as bn}from"./index.fa21922e.js";import{s as hn,C as yn,i as Sn}from"./index.a63311b5.js";import{U as wl,g as Tl,b as Ll,i as El,S as ol,c as Cn}from"./index.6070ae34.js";import{d as Il}from"./debounce.4098d8e5.js";var On="__lodash_hash_undefined__";function wn(e){return this.__data__.set(e,On),this}function Tn(e){return this.__data__.has(e)}function Pe(e){var l=-1,i=e==null?0:e.length;for(this.__data__=new Hl;++l<i;)this.add(e[l])}Pe.prototype.add=Pe.prototype.push=wn;Pe.prototype.has=Tn;function Ln(e,l){for(var i=-1,s=e==null?0:e.length;++i<s;)if(l(e[i],i,e))return!0;return!1}function En(e,l){return e.has(l)}var In=1,Mn=2;function Fl(e,l,i,s,v,a){var r=i&In,d=e.length,g=l.length;if(d!=g&&!(r&&g>d))return!1;var h=a.get(e),c=a.get(l);if(h&&c)return h==l&&c==e;var y=-1,m=!0,O=i&Mn?new Pe:void 0;for(a.set(e,l),a.set(l,e);++y<d;){var o=e[y],f=l[y];if(s)var b=r?s(f,o,y,l,e,a):s(o,f,y,e,l,a);if(b!==void 0){if(b)continue;m=!1;break}if(O){if(!Ln(l,function(C,L){if(!En(O,L)&&(o===C||v(o,C,i,s,a)))return O.push(L)})){m=!1;break}}else if(!(o===f||v(o,f,i,s,a))){m=!1;break}}return a.delete(e),a.delete(l),m}function An(e){var l=-1,i=Array(e.size);return e.forEach(function(s,v){i[++l]=[v,s]}),i}function Pn(e){var l=-1,i=Array(e.size);return e.forEach(function(s){i[++l]=s}),i}var $n=1,Dn=2,Bn="[object Boolean]",Rn="[object Date]",qn="[object Error]",zn="[object Map]",Vn="[object Number]",Fn="[object RegExp]",Wn="[object Set]",Kn="[object String]",Nn="[object Symbol]",Hn="[object ArrayBuffer]",Qn="[object DataView]",Ml=ml?ml.prototype:void 0,al=Ml?Ml.valueOf:void 0;function Gn(e,l,i,s,v,a,r){switch(i){case Qn:if(e.byteLength!=l.byteLength||e.byteOffset!=l.byteOffset)return!1;e=e.buffer,l=l.buffer;case Hn:return!(e.byteLength!=l.byteLength||!a(new wl(e),new wl(l)));case Bn:case Rn:case Vn:return Ql(+e,+l);case qn:return e.name==l.name&&e.message==l.message;case Fn:case Kn:return e==l+"";case zn:var d=An;case Wn:var g=s&$n;if(d||(d=Pn),e.size!=l.size&&!g)return!1;var h=r.get(e);if(h)return h==l;s|=Dn,r.set(e,l);var c=Fl(d(e),d(l),s,v,a,r);return r.delete(e),c;case Nn:if(al)return al.call(e)==al.call(l)}return!1}var kn=1,Un=Object.prototype,jn=Un.hasOwnProperty;function Yn(e,l,i,s,v,a){var r=i&kn,d=Tl(e),g=d.length,h=Tl(l),c=h.length;if(g!=c&&!r)return!1;for(var y=g;y--;){var m=d[y];if(!(r?m in l:jn.call(l,m)))return!1}var O=a.get(e),o=a.get(l);if(O&&o)return O==l&&o==e;var f=!0;a.set(e,l),a.set(l,e);for(var b=r;++y<g;){m=d[y];var C=e[m],L=l[m];if(s)var Q=r?s(L,C,m,l,e,a):s(C,L,m,e,l,a);if(!(Q===void 0?C===L||v(C,L,i,s,a):Q)){f=!1;break}b||(b=m=="constructor")}if(f&&!b){var G=e.constructor,N=l.constructor;G!=N&&"constructor"in e&&"constructor"in l&&!(typeof G=="function"&&G instanceof G&&typeof N=="function"&&N instanceof N)&&(f=!1)}return a.delete(e),a.delete(l),f}var Jn=1,Al="[object Arguments]",Pl="[object Array]",Ie="[object Object]",Xn=Object.prototype,$l=Xn.hasOwnProperty;function Zn(e,l,i,s,v,a){var r=gl(e),d=gl(l),g=r?Pl:Ll(e),h=d?Pl:Ll(l);g=g==Al?Ie:g,h=h==Al?Ie:h;var c=g==Ie,y=h==Ie,m=g==h;if(m&&El(e)){if(!El(l))return!1;r=!0,c=!1}if(m&&!c)return a||(a=new ol),r||Cn(e)?Fl(e,l,i,s,v,a):Gn(e,l,g,i,s,v,a);if(!(i&Jn)){var O=c&&$l.call(e,"__wrapped__"),o=y&&$l.call(l,"__wrapped__");if(O||o){var f=O?e.value():e,b=o?l.value():l;return a||(a=new ol),v(f,b,i,s,a)}}return m?(a||(a=new ol),Yn(e,l,i,s,v,a)):!1}function Wl(e,l,i,s,v){return e===l?!0:e==null||l==null||!bl(e)&&!bl(l)?e!==e&&l!==l:Zn(e,l,i,s,Wl,v)}function Dl(e,l){return Wl(e,l)}const xn=e=>Gl[e||"default"],_n=e=>({focus:()=>{var l,i;(i=(l=e.value)==null?void 0:l.focus)==null||i.call(l)}}),Kl="ElSelectGroup",Re="ElSelect";function et(e,l){const i=Me(Re),s=Me(Kl,{disabled:!1}),v=S(()=>Object.prototype.toString.call(e.value).toLowerCase()==="[object object]"),a=S(()=>i.props.multiple?y(i.props.modelValue,e.value):m(e.value,i.props.modelValue)),r=S(()=>{if(i.props.multiple){const f=i.props.modelValue||[];return!a.value&&f.length>=i.props.multipleLimit&&i.props.multipleLimit>0}else return!1}),d=S(()=>e.label||(v.value?"":e.value)),g=S(()=>e.value||e.label||""),h=S(()=>e.disabled||l.groupDisabled||r.value),c=rl(),y=(f=[],b)=>{if(v.value){const C=i.props.valueKey;return f&&f.some(L=>Ae(z(L,C))===z(b,C))}else return f&&f.includes(b)},m=(f,b)=>{if(v.value){const{valueKey:C}=i.props;return z(f,C)===z(b,C)}else return f===b},O=()=>{!e.disabled&&!s.disabled&&(i.hoverIndex=i.optionsArray.indexOf(c.proxy))};V(()=>d.value,()=>{!e.created&&!i.props.remote&&i.setSelected()}),V(()=>e.value,(f,b)=>{const{remote:C,valueKey:L}=i.props;if(Object.is(f,b)||(i.onOptionDestroy(b,c.proxy),i.onOptionCreate(c.proxy)),!e.created&&!C){if(L&&typeof f=="object"&&typeof b=="object"&&f[L]===b[L])return;i.setSelected()}}),V(()=>s.disabled,()=>{l.groupDisabled=s.disabled},{immediate:!0});const{queryChange:o}=Ae(i);return V(o,f=>{const{query:b}=ae(f),C=new RegExp(kl(b),"i");l.visible=C.test(d.value)||e.created,l.visible||i.filteredOptionsCount--}),{select:i,currentLabel:d,currentValue:g,itemSelected:a,isDisabled:h,hoverItem:O}}const lt=$e({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=ue("select"),i=De({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:s,itemSelected:v,isDisabled:a,select:r,hoverItem:d}=et(e,i),{visible:g,hover:h}=sl(i),c=rl().proxy;r.onOptionCreate(c),Ul(()=>{const m=c.value,{selected:O}=r,f=(r.props.multiple?O:[O]).some(b=>b.value===c.value);A(()=>{r.cachedOptions.get(m)===c&&!f&&r.cachedOptions.delete(m)}),r.onOptionDestroy(m,c)});function y(){e.disabled!==!0&&i.groupDisabled!==!0&&r.handleOptionSelect(c,!0)}return{ns:l,currentLabel:s,itemSelected:v,isDisabled:a,select:r,hoverItem:d,visible:g,hover:h,selectOptionClick:y,states:i}}});function nt(e,l,i,s,v,a){return be((w(),P("li",{class:T([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...r)=>e.hoverItem&&e.hoverItem(...r)),onClick:l[1]||(l[1]=X((...r)=>e.selectOptionClick&&e.selectOptionClick(...r),["stop"]))},[se(e.$slots,"default",{},()=>[D("span",null,Z(e.currentLabel),1)])],34)),[[ul,e.visible]])}var cl=Be(lt,[["render",nt],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const tt=$e({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=Me(Re),l=ue("select"),i=S(()=>e.props.popperClass),s=S(()=>e.props.multiple),v=S(()=>e.props.fitInputWidth),a=K("");function r(){var d;a.value=`${(d=e.selectWrapper)==null?void 0:d.offsetWidth}px`}return dl(()=>{r(),Rl(e.selectWrapper,r)}),{ns:l,minWidth:a,popperClass:i,isMultiple:s,isFitInputWidth:v}}});function it(e,l,i,s,v,a){return w(),P("div",{class:T([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:re({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[se(e.$slots,"default")],6)}var ot=Be(tt,[["render",it],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function at(e){const{t:l}=fl();return De({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1,mouseEnter:!1})}const rt=(e,l,i)=>{const{t:s}=fl(),v=ue("select");jl({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},S(()=>e.suffixTransition===!1));const a=K(null),r=K(null),d=K(null),g=K(null),h=K(null),c=K(null),y=K(-1),m=hl({query:""}),O=hl(""),{form:o,formItem:f}=Yl(),b=S(()=>!e.filterable||e.multiple||!l.visible),C=S(()=>e.disabled||(o==null?void 0:o.disabled)),L=S(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!C.value&&l.inputHovering&&n}),Q=S(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),G=S(()=>v.is("reverse",Q.value&&l.visible&&e.suffixTransition)),N=S(()=>e.remote?300:0),de=S(()=>e.loading?e.loadingText||s("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||s("el.select.noMatch"):l.options.size===0?e.noDataText||s("el.select.noData"):null),I=S(()=>Array.from(l.options.values())),qe=S(()=>Array.from(l.cachedOptions.values())),ze=S(()=>{const n=I.value.filter(t=>!t.created).some(t=>t.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),te=Jl(),Ve=S(()=>["small"].includes(te.value)?"small":"default"),Fe=S({get(){return l.visible&&de.value!==!1},set(n){l.visible=n}});V([()=>C.value,()=>te.value,()=>o==null?void 0:o.size],()=>{A(()=>{F()})}),V(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n}),V(()=>e.modelValue,(n,t)=>{e.multiple&&(F(),n&&n.length>0||r.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",k(l.query))),fe(),e.filterable&&!e.multiple&&(l.inputLength=20),!Dl(n,t)&&e.validateEvent&&(f==null||f.validate("change").catch(u=>Xl()))},{flush:"post",deep:!0}),V(()=>l.visible,n=>{var t,u,p;n?((u=(t=d.value)==null?void 0:t.updatePopper)==null||u.call(t),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,e.multiple?(p=r.value)==null||p.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),k(l.query),!e.multiple&&!e.remote&&(m.value.query="",me(m),me(O)))):(e.filterable&&(oe(e.filterMethod)&&e.filterMethod(""),oe(e.remoteMethod)&&e.remoteMethod("")),r.value&&r.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,We(),A(()=>{r.value&&r.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),i.emit("visible-change",n)}),V(()=>l.options.entries(),()=>{var n,t,u;if(!Zl)return;(t=(n=d.value)==null?void 0:n.updatePopper)==null||t.call(n),e.multiple&&F();const p=((u=h.value)==null?void 0:u.querySelectorAll("input"))||[];Array.from(p).includes(document.activeElement)||fe(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&ye()},{flush:"post"}),V(()=>l.hoverIndex,n=>{xl(n)&&n>-1?y.value=I.value[n]||{}:y.value={},I.value.forEach(t=>{t.hover=y.value===t})});const F=()=>{e.collapseTags&&!e.filterable||A(()=>{var n,t;if(!a.value)return;const u=a.value.$el.querySelector("input"),p=g.value,E=xn(te.value||(o==null?void 0:o.size));u.style.height=`${(l.selected.length===0?E:Math.max(p?p.clientHeight+(p.clientHeight>E?6:0):0,E))-2}px`,l.tagInMultiLine=Number.parseFloat(u.style.height)>=E,l.visible&&de.value!==!1&&((t=(n=d.value)==null?void 0:n.updatePopper)==null||t.call(n))})},k=async n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(oe(e.filterMethod)||oe(e.remoteMethod))){l.previousQuery=n;return}l.previousQuery=n,A(()=>{var t,u;l.visible&&((u=(t=d.value)==null?void 0:t.updatePopper)==null||u.call(t))}),l.hoverIndex=-1,e.multiple&&e.filterable&&A(()=>{const t=r.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,t):t,he(),F()}),e.remote&&oe(e.remoteMethod)?(l.hoverIndex=-1,e.remoteMethod(n)):oe(e.filterMethod)?(e.filterMethod(n),me(O)):(l.filteredOptionsCount=l.optionsCount,m.value.query=n,me(m),me(O)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&(await A(),ye())}},he=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=r.value.value?"":l.cachedPlaceHolder)},ye=()=>{const n=I.value.filter(p=>p.visible&&!p.disabled&&!p.states.groupDisabled),t=n.find(p=>p.created),u=n[0];l.hoverIndex=ce(I.value,t||u)},fe=()=>{var n;if(e.multiple)l.selectedLabel="";else{const u=Se(e.modelValue);(n=u.props)!=null&&n.created?(l.createdLabel=u.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=u.currentLabel,l.selected=u,e.filterable&&(l.query=l.selectedLabel);return}const t=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(u=>{t.push(Se(u))}),l.selected=t,A(()=>{F()})},Se=n=>{let t;const u=tl(n).toLowerCase()==="object",p=tl(n).toLowerCase()==="null",E=tl(n).toLowerCase()==="undefined";for(let H=l.cachedOptions.size-1;H>=0;H--){const $=qe.value[H];if(u?z($.value,e.valueKey)===z(n,e.valueKey):$.value===n){t={value:n,currentLabel:$.currentLabel,isDisabled:$.isDisabled};break}}if(t)return t;const Y=u?n.label:!p&&!E?n:"",J={value:n,currentLabel:Y};return e.multiple&&(J.hitState=!1),J},We=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(t=>I.value.findIndex(u=>z(u,n)===z(t,n)))):l.hoverIndex=-1:l.hoverIndex=I.value.findIndex(t=>ve(t)===ve(l.selected))},300)},Ke=()=>{var n,t;Ne(),(t=(n=d.value)==null?void 0:n.updatePopper)==null||t.call(n),e.multiple&&!e.filterable&&F()},Ne=()=>{var n;l.inputWidth=(n=a.value)==null?void 0:n.$el.getBoundingClientRect().width},He=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,k(l.query))},Qe=Il(()=>{He()},N.value),Ge=Il(n=>{k(n.target.value)},N.value),_=n=>{Dl(e.modelValue,n)||i.emit(ql,n)},ke=n=>{if(n.target.value.length<=0&&!pe()){const t=e.modelValue.slice();t.pop(),i.emit(x,t),_(t)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)},Ue=(n,t)=>{const u=l.selected.indexOf(t);if(u>-1&&!C.value){const p=e.modelValue.slice();p.splice(u,1),i.emit(x,p),_(p),i.emit("remove-tag",t.value)}n.stopPropagation()},ee=n=>{n.stopPropagation();const t=e.multiple?[]:"";if(!_l(t))for(const u of l.selected)u.isDisabled&&t.push(u.value);i.emit(x,t),_(t),l.hoverIndex=-1,l.visible=!1,i.emit("clear")},Ce=(n,t)=>{var u;if(e.multiple){const p=(e.modelValue||[]).slice(),E=ce(p,n.value);E>-1?p.splice(E,1):(e.multipleLimit<=0||p.length<e.multipleLimit)&&p.push(n.value),i.emit(x,p),_(p),n.created&&(l.query="",k(""),l.inputLength=20),e.filterable&&((u=r.value)==null||u.focus())}else i.emit(x,n.value),_(n.value),l.visible=!1;l.isSilentBlur=t,je(),!l.visible&&A(()=>{U(n)})},ce=(n=[],t)=>{if(!yl(t))return n.indexOf(t);const u=e.valueKey;let p=-1;return n.some((E,Y)=>Ae(z(E,u))===z(t,u)?(p=Y,!0):!1),p},je=()=>{l.softFocus=!0;const n=r.value||a.value;n&&(n==null||n.focus())},U=n=>{var t,u,p,E,Y;const J=Array.isArray(n)?n[0]:n;let H=null;if(J!=null&&J.value){const $=I.value.filter(Ee=>Ee.value===J.value);$.length>0&&(H=$[0].$el)}if(d.value&&H){const $=(E=(p=(u=(t=d.value)==null?void 0:t.popperRef)==null?void 0:u.contentRef)==null?void 0:p.querySelector)==null?void 0:E.call(p,`.${v.be("dropdown","wrap")}`);$&&hn($,H)}(Y=c.value)==null||Y.handleScroll()},Ye=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n)},Je=(n,t)=>{l.options.get(n)===t&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},Xe=n=>{n.code!==en.backspace&&pe(!1),l.inputLength=r.value.value.length*15+20,F()},pe=n=>{if(!Array.isArray(l.selected))return;const t=l.selected[l.selected.length-1];if(!!t)return n===!0||n===!1?(t.hitState=n,n):(t.hitState=!t.hitState,t.hitState)},Ze=n=>{const t=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,A(()=>k(t));else{const u=t[t.length-1]||"";l.isOnComposition=!vn(u)}},xe=()=>{A(()=>U(l.selected))},j=n=>{l.softFocus?l.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),i.emit("focus",n))},Oe=()=>{var n;l.visible=!1,(n=a.value)==null||n.blur()},_e=n=>{A(()=>{l.isSilentBlur?l.isSilentBlur=!1:i.emit("blur",n)}),l.softFocus=!1},we=n=>{ee(n)},el=()=>{l.visible=!1},ll=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},Te=n=>{var t;n&&!l.mouseEnter||C.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:(!d.value||!d.value.isFocusInsideContent())&&(l.visible=!l.visible),l.visible&&((t=r.value||a.value)==null||t.focus()))},Le=()=>{l.visible?I.value[l.hoverIndex]&&Ce(I.value[l.hoverIndex],void 0):Te()},ve=n=>yl(n.value)?z(n.value,e.valueKey):n.value,nl=S(()=>I.value.filter(n=>n.visible).every(n=>n.disabled)),ie=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!nl.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const t=I.value[l.hoverIndex];(t.disabled===!0||t.states.groupDisabled===!0||!t.visible)&&ie(n),A(()=>U(y.value))}};return{optionsArray:I,selectSize:te,handleResize:Ke,debouncedOnInputChange:Qe,debouncedQueryChange:Ge,deletePrevTag:ke,deleteTag:Ue,deleteSelected:ee,handleOptionSelect:Ce,scrollToOption:U,readonly:b,resetInputHeight:F,showClose:L,iconComponent:Q,iconReverse:G,showNewOption:ze,collapseTagSize:Ve,setSelected:fe,managePlaceholder:he,selectDisabled:C,emptyText:de,toggleLastOptionHitState:pe,resetInputState:Xe,handleComposition:Ze,onOptionCreate:Ye,onOptionDestroy:Je,handleMenuEnter:xe,handleFocus:j,blur:Oe,handleBlur:_e,handleClearClick:we,handleClose:el,handleKeydownEscape:ll,toggleMenu:Te,selectOption:Le,getValueKey:ve,navigateOptions:ie,dropMenuVisible:Fe,queryChange:m,groupQueryChange:O,reference:a,input:r,tooltipRef:d,tags:g,selectWrapper:h,scrollbar:c,handleMouseEnter:()=>{l.mouseEnter=!0},handleMouseLeave:()=>{l.mouseEnter=!1}}},Bl="ElSelect",st=$e({name:Bl,componentName:Bl,components:{ElInput:mn,ElSelectMenu:ot,ElOption:cl,ElTag:gn,ElScrollbar:ln,ElTooltip:nn,ElIcon:tn},directives:{ClickOutside:yn},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:Sn},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},teleported:on.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:Sl,default:an},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:Sl,default:rn},tagType:{...bn.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:{type:Boolean,default:!1},suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:sn,default:"bottom-start"}},emits:[x,ql,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const i=ue("select"),s=ue("input"),{t:v}=fl(),a=at(e),{optionsArray:r,selectSize:d,readonly:g,handleResize:h,collapseTagSize:c,debouncedOnInputChange:y,debouncedQueryChange:m,deletePrevTag:O,deleteTag:o,deleteSelected:f,handleOptionSelect:b,scrollToOption:C,setSelected:L,resetInputHeight:Q,managePlaceholder:G,showClose:N,selectDisabled:de,iconComponent:I,iconReverse:qe,showNewOption:ze,emptyText:te,toggleLastOptionHitState:Ve,resetInputState:Fe,handleComposition:F,onOptionCreate:k,onOptionDestroy:he,handleMenuEnter:ye,handleFocus:fe,blur:Se,handleBlur:We,handleClearClick:Ke,handleClose:Ne,handleKeydownEscape:He,toggleMenu:Qe,selectOption:Ge,getValueKey:_,navigateOptions:ke,dropMenuVisible:Ue,reference:ee,input:Ce,tooltipRef:ce,tags:je,selectWrapper:U,scrollbar:Ye,queryChange:Je,groupQueryChange:Xe,handleMouseEnter:pe,handleMouseLeave:Ze}=rt(e,a,l),{focus:xe}=_n(ee),{inputWidth:j,selected:Oe,inputLength:_e,filteredOptionsCount:we,visible:el,softFocus:ll,selectedLabel:Te,hoverIndex:Le,query:ve,inputHovering:nl,currentPlaceholder:ie,menuVisibleOnFocus:pl,isOnComposition:vl,isSilentBlur:n,options:t,cachedOptions:u,optionsCount:p,prefixWidth:E,tagInMultiLine:Y}=sl(a),J=S(()=>{const B=[i.b()],le=ae(d);return le&&B.push(i.m(le)),e.disabled&&B.push(i.m("disabled")),B}),H=S(()=>({maxWidth:`${ae(j)-32}px`,width:"100%"})),$=S(()=>({maxWidth:`${ae(j)>123?ae(j)-123:ae(j)-75}px`}));zl(Re,De({props:e,options:t,optionsArray:r,cachedOptions:u,optionsCount:p,filteredOptionsCount:we,hoverIndex:Le,handleOptionSelect:b,onOptionCreate:k,onOptionDestroy:he,selectWrapper:U,selected:Oe,setSelected:L,queryChange:Je,groupQueryChange:Xe})),dl(()=>{a.cachedPlaceHolder=ie.value=e.placeholder||v("el.select.placeholder"),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(ie.value=""),Rl(U,h),e.remote&&e.multiple&&Q(),A(()=>{const B=ee.value&&ee.value.$el;if(!!B&&(j.value=B.getBoundingClientRect().width,l.slots.prefix)){const le=B.querySelector(`.${s.e("prefix")}`);E.value=Math.max(le.getBoundingClientRect().width+5,30)}}),L()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(x,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(x,"");const Ee=S(()=>{var B,le;return(le=(B=ce.value)==null?void 0:B.popperRef)==null?void 0:le.contentRef});return{tagInMultiLine:Y,prefixWidth:E,selectSize:d,readonly:g,handleResize:h,collapseTagSize:c,debouncedOnInputChange:y,debouncedQueryChange:m,deletePrevTag:O,deleteTag:o,deleteSelected:f,handleOptionSelect:b,scrollToOption:C,inputWidth:j,selected:Oe,inputLength:_e,filteredOptionsCount:we,visible:el,softFocus:ll,selectedLabel:Te,hoverIndex:Le,query:ve,inputHovering:nl,currentPlaceholder:ie,menuVisibleOnFocus:pl,isOnComposition:vl,isSilentBlur:n,options:t,resetInputHeight:Q,managePlaceholder:G,showClose:N,selectDisabled:de,iconComponent:I,iconReverse:qe,showNewOption:ze,emptyText:te,toggleLastOptionHitState:Ve,resetInputState:Fe,handleComposition:F,handleMenuEnter:ye,handleFocus:fe,blur:Se,handleBlur:We,handleClearClick:Ke,handleClose:Ne,handleKeydownEscape:He,toggleMenu:Qe,selectOption:Ge,getValueKey:_,navigateOptions:ke,dropMenuVisible:Ue,focus:xe,reference:ee,input:Ce,tooltipRef:ce,popperPaneRef:Ee,tags:je,selectWrapper:U,scrollbar:Ye,wrapperKls:J,selectTagsStyle:H,nsSelect:i,tagTextStyle:$,handleMouseEnter:pe,handleMouseLeave:Ze}}}),ut=["disabled","autocomplete"],dt={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function ft(e,l,i,s,v,a){const r=ne("el-tag"),d=ne("el-tooltip"),g=ne("el-icon"),h=ne("el-input"),c=ne("el-option"),y=ne("el-scrollbar"),m=ne("el-select-menu"),O=un("click-outside");return be((w(),P("div",{ref:"selectWrapper",class:T(e.wrapperKls),onMouseenter:l[22]||(l[22]=(...o)=>e.handleMouseEnter&&e.handleMouseEnter(...o)),onMouseleave:l[23]||(l[23]=(...o)=>e.handleMouseLeave&&e.handleMouseLeave(...o)),onClick:l[24]||(l[24]=X((...o)=>e.toggleMenu&&e.toggleMenu(...o),["stop"]))},[ge(d,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:M(()=>[D("div",{class:"select-trigger",onMouseenter:l[20]||(l[20]=o=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]=o=>e.inputHovering=!1)},[e.multiple?(w(),P("div",{key:0,ref:"tags",class:T(e.nsSelect.e("tags")),style:re(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(w(),P("span",{key:0,class:T([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[ge(r,{closable:!e.selectDisabled&&!e.selected[0].isDisabled,size:e.collapseTagSize,hit:e.selected[0].hitState,type:e.tagType,"disable-transitions":"",onClose:l[0]||(l[0]=o=>e.deleteTag(o,e.selected[0]))},{default:M(()=>[D("span",{class:T(e.nsSelect.e("tags-text")),style:re(e.tagTextStyle)},Z(e.selected[0].currentLabel),7)]),_:1},8,["closable","size","hit","type"]),e.selected.length>1?(w(),W(r,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:M(()=>[e.collapseTagsTooltip?(w(),W(d,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:M(()=>[D("span",{class:T(e.nsSelect.e("tags-text"))},"+ "+Z(e.selected.length-1),3)]),content:M(()=>[D("div",{class:T(e.nsSelect.e("collapse-tags"))},[(w(!0),P(il,null,Cl(e.selected.slice(1),(o,f)=>(w(),P("div",{key:f,class:T(e.nsSelect.e("collapse-tag"))},[(w(),W(r,{key:e.getValueKey(o),class:"in-tooltip",closable:!e.selectDisabled&&!o.isDisabled,size:e.collapseTagSize,hit:o.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:b=>e.deleteTag(b,o)},{default:M(()=>[D("span",{class:T(e.nsSelect.e("tags-text")),style:re({maxWidth:e.inputWidth-75+"px"})},Z(o.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(w(),P("span",{key:1,class:T(e.nsSelect.e("tags-text"))},"+ "+Z(e.selected.length-1),3))]),_:1},8,["size","type"])):R("v-if",!0)],2)):R("v-if",!0),R(" <div> "),e.collapseTags?R("v-if",!0):(w(),W(dn,{key:1,onAfterLeave:e.resetInputHeight},{default:M(()=>[D("span",{class:T([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(w(!0),P(il,null,Cl(e.selected,o=>(w(),W(r,{key:e.getValueKey(o),closable:!e.selectDisabled&&!o.isDisabled,size:e.collapseTagSize,hit:o.hitState,type:e.tagType,"disable-transitions":"",onClose:f=>e.deleteTag(f,o)},{default:M(()=>[D("span",{class:T(e.nsSelect.e("tags-text")),style:re({maxWidth:e.inputWidth-75+"px"})},Z(o.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],2)]),_:1},8,["onAfterLeave"])),R(" </div> "),e.filterable?be((w(),P("input",{key:2,ref:"input","onUpdate:modelValue":l[1]||(l[1]=o=>e.query=o),type:"text",class:T([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:re({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:`${e.inputLength/(e.inputWidth-32)}%`,maxWidth:`${e.inputWidth-42}px`}),onFocus:l[2]||(l[2]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onBlur:l[3]||(l[3]=(...o)=>e.handleBlur&&e.handleBlur(...o)),onKeyup:l[4]||(l[4]=(...o)=>e.managePlaceholder&&e.managePlaceholder(...o)),onKeydown:[l[5]||(l[5]=(...o)=>e.resetInputState&&e.resetInputState(...o)),l[6]||(l[6]=q(X(o=>e.navigateOptions("next"),["prevent"]),["down"])),l[7]||(l[7]=q(X(o=>e.navigateOptions("prev"),["prevent"]),["up"])),l[8]||(l[8]=q((...o)=>e.handleKeydownEscape&&e.handleKeydownEscape(...o),["esc"])),l[9]||(l[9]=q(X((...o)=>e.selectOption&&e.selectOption(...o),["stop","prevent"]),["enter"])),l[10]||(l[10]=q((...o)=>e.deletePrevTag&&e.deletePrevTag(...o),["delete"])),l[11]||(l[11]=q(o=>e.visible=!1,["tab"]))],onCompositionstart:l[12]||(l[12]=(...o)=>e.handleComposition&&e.handleComposition(...o)),onCompositionupdate:l[13]||(l[13]=(...o)=>e.handleComposition&&e.handleComposition(...o)),onCompositionend:l[14]||(l[14]=(...o)=>e.handleComposition&&e.handleComposition(...o)),onInput:l[15]||(l[15]=(...o)=>e.debouncedQueryChange&&e.debouncedQueryChange(...o))},null,46,ut)),[[fn,e.query]]):R("v-if",!0)],6)):R("v-if",!0),ge(h,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=o=>e.selectedLabel=o),type:"text",placeholder:e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:T([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=q(X(o=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[18]||(l[18]=q(X(o=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),q(X(e.selectOption,["stop","prevent"]),["enter"]),q(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=q(o=>e.visible=!1,["tab"]))]},cn({suffix:M(()=>[e.iconComponent&&!e.showClose?(w(),W(g,{key:0,class:T([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:M(()=>[(w(),W(Ol(e.iconComponent)))]),_:1},8,["class"])):R("v-if",!0),e.showClose&&e.clearIcon?(w(),W(g,{key:1,class:T([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:M(()=>[(w(),W(Ol(e.clearIcon)))]),_:1},8,["class","onClick"])):R("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:M(()=>[D("div",dt,[se(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)]),content:M(()=>[ge(m,null,{default:M(()=>[be(ge(y,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:T([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&e.filteredOptionsCount===0)])},{default:M(()=>[e.showNewOption?(w(),W(c,{key:0,value:e.query,created:!0},null,8,["value"])):R("v-if",!0),se(e.$slots,"default")]),_:3},8,["wrap-class","view-class","class"]),[[ul,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(w(),P(il,{key:0},[e.$slots.empty?se(e.$slots,"empty",{key:0}):(w(),P("p",{key:1,class:T(e.nsSelect.be("dropdown","empty"))},Z(e.emptyText),3))],64)):R("v-if",!0)]),_:3})]),_:3},8,["visible","placement","teleported","popper-class","effect","transition","persistent","onShow"])],34)),[[O,e.handleClose,e.popperPaneRef]])}var ct=Be(st,[["render",ft],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const pt=$e({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=ue("select"),i=K(!0),s=rl(),v=K([]);zl(Kl,De({...sl(e)}));const a=Me(Re);dl(()=>{v.value=r(s.subTree)});const r=g=>{const h=[];return Array.isArray(g.children)&&g.children.forEach(c=>{var y;c.type&&c.type.name==="ElOption"&&c.component&&c.component.proxy?h.push(c.component.proxy):(y=c.children)!=null&&y.length&&h.push(...r(c))}),h},{groupQueryChange:d}=Ae(a);return V(d,()=>{i.value=v.value.some(g=>g.visible===!0)},{flush:"post"}),{visible:i,ns:l}}});function vt(e,l,i,s,v,a){return be((w(),P("ul",{class:T(e.ns.be("group","wrap"))},[D("li",{class:T(e.ns.be("group","title"))},Z(e.label),3),D("li",null,[D("ul",{class:T(e.ns.b("group"))},[se(e.$slots,"default")],2)])],2)),[[ul,e.visible]])}var Nl=Be(pt,[["render",vt],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const Ct=pn(ct,{Option:cl,OptionGroup:Nl}),Ot=Vl(cl);Vl(Nl);export{Ot as E,Ct as a,Wl as b,Dl as i};

import{a as Ye,e as A,h as W,l as Ee,r as y,w as T,p as J,_ as U,q as v,G as w,y as C,z as f,B as L,aB as le,n as I,b as be,aV as qe,d as ke,aJ as Y,a3 as R,a6 as ie,aL as ne,b1 as Me,ad as Ge,b2 as je,H as he,P as fe,u as Qe,aW as Le,aY as Oe,ai as He,aX as ze,b3 as Je,o as G,ak as Ze,t as N,x as F,Q as Ve,A as o,v as P,D as V,a8 as ve,aG as Ie,as as Ne,a4 as z,E as K,b4 as xe,R as et,F as tt,aS as at,ag as pe,Y as _e,S as nt,az as Te,b5 as ee,c as ue,aK as me,b6 as lt,b7 as ot,M as te,aR as st,C as rt,b8 as Be,a5 as it,b9 as ut,ba as ct,aQ as dt,aT as ht,aw as ft}from"./index.729ec0c4.js";import{E as vt}from"./index.fdfbd021.js";import{C as pt,i as mt}from"./index.a63311b5.js";import{d as gt}from"./debounce.4098d8e5.js";import{E as bt}from"./index.2a0fb634.js";const ye=t=>{let a,n;return t.type==="touchend"?(n=t.changedTouches[0].clientY,a=t.changedTouches[0].clientX):t.type.startsWith("touch")?(n=t.touches[0].clientY,a=t.touches[0].clientX):(n=t.clientY,a=t.clientX),{clientX:a,clientY:n}};let ce=!1;function Q(t,a){if(!Ye)return;const n=function(l){var r;(r=a.drag)==null||r.call(a,l)},e=function(l){var r;document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",e),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",e),document.onselectstart=null,document.ondragstart=null,ce=!1,(r=a.end)==null||r.call(a,l)},s=function(l){var r;ce||(l.preventDefault(),document.onselectstart=()=>!1,document.ondragstart=()=>!1,document.addEventListener("mousemove",n),document.addEventListener("mouseup",e),document.addEventListener("touchmove",n),document.addEventListener("touchend",e),ce=!0,(r=a.start)==null||r.call(a,l))};t.addEventListener("mousedown",s),t.addEventListener("touchstart",s)}const kt=A({name:"ElColorAlphaSlider",props:{color:{type:Object,required:!0},vertical:{type:Boolean,default:!1}},setup(t){const a=W("color-alpha-slider"),n=le(),e=Ee(),s=Ee(),l=y(0),r=y(0),i=y();T(()=>t.color.get("alpha"),()=>{k()}),T(()=>t.color.value,()=>{k()});function m(){if(!e.value||t.vertical)return 0;const d=n.vnode.el,h=t.color.get("alpha");return d?Math.round(h*(d.offsetWidth-e.value.offsetWidth/2)/100):0}function p(){if(!e.value)return 0;const d=n.vnode.el;if(!t.vertical)return 0;const h=t.color.get("alpha");return d?Math.round(h*(d.offsetHeight-e.value.offsetHeight/2)/100):0}function $(){if(t.color&&t.color.value){const{r:d,g:h,b:c}=t.color.toRgb();return`linear-gradient(to right, rgba(${d}, ${h}, ${c}, 0) 0%, rgba(${d}, ${h}, ${c}, 1) 100%)`}return""}function _(d){d.target!==e.value&&S(d)}function S(d){if(!s.value||!e.value)return;const c=n.vnode.el.getBoundingClientRect(),{clientX:B,clientY:E}=ye(d);if(t.vertical){let g=E-c.top;g=Math.max(e.value.offsetHeight/2,g),g=Math.min(g,c.height-e.value.offsetHeight/2),t.color.set("alpha",Math.round((g-e.value.offsetHeight/2)/(c.height-e.value.offsetHeight)*100))}else{let g=B-c.left;g=Math.max(e.value.offsetWidth/2,g),g=Math.min(g,c.width-e.value.offsetWidth/2),t.color.set("alpha",Math.round((g-e.value.offsetWidth/2)/(c.width-e.value.offsetWidth)*100))}}function k(){l.value=m(),r.value=p(),i.value=$()}return J(()=>{if(!s.value||!e.value)return;const d={drag:h=>{S(h)},end:h=>{S(h)}};Q(s.value,d),Q(e.value,d),k()}),{thumb:e,bar:s,thumbLeft:l,thumbTop:r,background:i,handleClick:_,update:k,ns:a}}});function _t(t,a,n,e,s,l){return v(),w("div",{class:f([t.ns.b(),t.ns.is("vertical",t.vertical)])},[C("div",{ref:"bar",class:f(t.ns.e("bar")),style:L({background:t.background}),onClick:a[0]||(a[0]=(...r)=>t.handleClick&&t.handleClick(...r))},null,6),C("div",{ref:"thumb",class:f(t.ns.e("thumb")),style:L({left:t.thumbLeft+"px",top:t.thumbTop+"px"})},null,6)],2)}var yt=U(kt,[["render",_t],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/alpha-slider.vue"]]);const Ct=A({name:"ElColorHueSlider",props:{color:{type:Object,required:!0},vertical:Boolean},setup(t){const a=W("color-hue-slider"),n=le(),e=y(),s=y(),l=y(0),r=y(0),i=I(()=>t.color.get("hue"));T(()=>i.value,()=>{S()});function m(k){k.target!==e.value&&p(k)}function p(k){if(!s.value||!e.value)return;const h=n.vnode.el.getBoundingClientRect(),{clientX:c,clientY:B}=ye(k);let E;if(t.vertical){let g=B-h.top;g=Math.min(g,h.height-e.value.offsetHeight/2),g=Math.max(e.value.offsetHeight/2,g),E=Math.round((g-e.value.offsetHeight/2)/(h.height-e.value.offsetHeight)*360)}else{let g=c-h.left;g=Math.min(g,h.width-e.value.offsetWidth/2),g=Math.max(e.value.offsetWidth/2,g),E=Math.round((g-e.value.offsetWidth/2)/(h.width-e.value.offsetWidth)*360)}t.color.set("hue",E)}function $(){if(!e.value)return 0;const k=n.vnode.el;if(t.vertical)return 0;const d=t.color.get("hue");return k?Math.round(d*(k.offsetWidth-e.value.offsetWidth/2)/360):0}function _(){if(!e.value)return 0;const k=n.vnode.el;if(!t.vertical)return 0;const d=t.color.get("hue");return k?Math.round(d*(k.offsetHeight-e.value.offsetHeight/2)/360):0}function S(){l.value=$(),r.value=_()}return J(()=>{if(!s.value||!e.value)return;const k={drag:d=>{p(d)},end:d=>{p(d)}};Q(s.value,k),Q(e.value,k),S()}),{bar:s,thumb:e,thumbLeft:l,thumbTop:r,hueValue:i,handleClick:m,update:S,ns:a}}});function wt(t,a,n,e,s,l){return v(),w("div",{class:f([t.ns.b(),t.ns.is("vertical",t.vertical)])},[C("div",{ref:"bar",class:f(t.ns.e("bar")),onClick:a[0]||(a[0]=(...r)=>t.handleClick&&t.handleClick(...r))},null,2),C("div",{ref:"thumb",class:f(t.ns.e("thumb")),style:L({left:t.thumbLeft+"px",top:t.thumbTop+"px"})},null,6)],2)}var $t=U(Ct,[["render",wt],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/hue-slider.vue"]]);const St=be({modelValue:String,id:String,showAlpha:Boolean,colorFormat:String,disabled:Boolean,size:qe,popperClass:{type:String,default:""},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},predefine:{type:ke(Array)},validateEvent:{type:Boolean,default:!0}}),Et={[Y]:t=>R(t)||ie(t),[ne]:t=>R(t)||ie(t),activeChange:t=>R(t)||ie(t)},We=Symbol("colorPickerContextKey"),Pe=function(t,a,n){return[t,a*n/((t=(2-a)*n)<1?t:2-t)||0,t/2]},Mt=function(t){return typeof t=="string"&&t.includes(".")&&Number.parseFloat(t)===1},Vt=function(t){return typeof t=="string"&&t.includes("%")},X=function(t,a){Mt(t)&&(t="100%");const n=Vt(t);return t=Math.min(a,Math.max(0,Number.parseFloat(`${t}`))),n&&(t=Number.parseInt(`${t*a}`,10)/100),Math.abs(t-a)<1e-6?1:t%a/Number.parseFloat(a)},Fe={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},ae=t=>{t=Math.min(Math.round(t),255);const a=Math.floor(t/16),n=t%16;return`${Fe[a]||a}${Fe[n]||n}`},Ae=function({r:t,g:a,b:n}){return Number.isNaN(+t)||Number.isNaN(+a)||Number.isNaN(+n)?"":`#${ae(t)}${ae(a)}${ae(n)}`},de={A:10,B:11,C:12,D:13,E:14,F:15},H=function(t){return t.length===2?(de[t[0].toUpperCase()]||+t[0])*16+(de[t[1].toUpperCase()]||+t[1]):de[t[1].toUpperCase()]||+t[1]},It=function(t,a,n){a=a/100,n=n/100;let e=a;const s=Math.max(n,.01);n*=2,a*=n<=1?n:2-n,e*=s<=1?s:2-s;const l=(n+a)/2,r=n===0?2*e/(s+e):2*a/(n+a);return{h:t,s:r*100,v:l*100}},De=(t,a,n)=>{t=X(t,255),a=X(a,255),n=X(n,255);const e=Math.max(t,a,n),s=Math.min(t,a,n);let l;const r=e,i=e-s,m=e===0?0:i/e;if(e===s)l=0;else{switch(e){case t:{l=(a-n)/i+(a<n?6:0);break}case a:{l=(n-t)/i+2;break}case n:{l=(t-a)/i+4;break}}l/=6}return{h:l*360,s:m*100,v:r*100}},q=function(t,a,n){t=X(t,360)*6,a=X(a,100),n=X(n,100);const e=Math.floor(t),s=t-e,l=n*(1-a),r=n*(1-s*a),i=n*(1-(1-s)*a),m=e%6,p=[n,r,l,l,i,n][m],$=[i,n,n,r,l,l][m],_=[l,l,i,n,n,r][m];return{r:Math.round(p*255),g:Math.round($*255),b:Math.round(_*255)}};class j{constructor(a={}){this._hue=0,this._saturation=100,this._value=100,this._alpha=100,this.enableAlpha=!1,this.format="hex",this.value="";for(const n in a)Me(a,n)&&(this[n]=a[n]);a.value?this.fromString(a.value):this.doOnChange()}set(a,n){if(arguments.length===1&&typeof a=="object"){for(const e in a)Me(a,e)&&this.set(e,a[e]);return}this[`_${a}`]=n,this.doOnChange()}get(a){return a==="alpha"?Math.floor(this[`_${a}`]):this[`_${a}`]}toRgb(){return q(this._hue,this._saturation,this._value)}fromString(a){if(!a){this._hue=0,this._saturation=100,this._value=100,this.doOnChange();return}const n=(e,s,l)=>{this._hue=Math.max(0,Math.min(360,e)),this._saturation=Math.max(0,Math.min(100,s)),this._value=Math.max(0,Math.min(100,l)),this.doOnChange()};if(a.includes("hsl")){const e=a.replace(/hsla|hsl|\(|\)/gm,"").split(/\s|,/g).filter(s=>s!=="").map((s,l)=>l>2?Number.parseFloat(s):Number.parseInt(s,10));if(e.length===4?this._alpha=Number.parseFloat(e[3])*100:e.length===3&&(this._alpha=100),e.length>=3){const{h:s,s:l,v:r}=It(e[0],e[1],e[2]);n(s,l,r)}}else if(a.includes("hsv")){const e=a.replace(/hsva|hsv|\(|\)/gm,"").split(/\s|,/g).filter(s=>s!=="").map((s,l)=>l>2?Number.parseFloat(s):Number.parseInt(s,10));e.length===4?this._alpha=Number.parseFloat(e[3])*100:e.length===3&&(this._alpha=100),e.length>=3&&n(e[0],e[1],e[2])}else if(a.includes("rgb")){const e=a.replace(/rgba|rgb|\(|\)/gm,"").split(/\s|,/g).filter(s=>s!=="").map((s,l)=>l>2?Number.parseFloat(s):Number.parseInt(s,10));if(e.length===4?this._alpha=Number.parseFloat(e[3])*100:e.length===3&&(this._alpha=100),e.length>=3){const{h:s,s:l,v:r}=De(e[0],e[1],e[2]);n(s,l,r)}}else if(a.includes("#")){const e=a.replace("#","").trim();if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(e))return;let s,l,r;e.length===3?(s=H(e[0]+e[0]),l=H(e[1]+e[1]),r=H(e[2]+e[2])):(e.length===6||e.length===8)&&(s=H(e.slice(0,2)),l=H(e.slice(2,4)),r=H(e.slice(4,6))),e.length===8?this._alpha=H(e.slice(6))/255*100:(e.length===3||e.length===6)&&(this._alpha=100);const{h:i,s:m,v:p}=De(s,l,r);n(i,m,p)}}compare(a){return Math.abs(a._hue-this._hue)<2&&Math.abs(a._saturation-this._saturation)<1&&Math.abs(a._value-this._value)<1&&Math.abs(a._alpha-this._alpha)<1}doOnChange(){const{_hue:a,_saturation:n,_value:e,_alpha:s,format:l}=this;if(this.enableAlpha)switch(l){case"hsl":{const r=Pe(a,n/100,e/100);this.value=`hsla(${a}, ${Math.round(r[1]*100)}%, ${Math.round(r[2]*100)}%, ${this.get("alpha")/100})`;break}case"hsv":{this.value=`hsva(${a}, ${Math.round(n)}%, ${Math.round(e)}%, ${this.get("alpha")/100})`;break}case"hex":{this.value=`${Ae(q(a,n,e))}${ae(s*255/100)}`;break}default:{const{r,g:i,b:m}=q(a,n,e);this.value=`rgba(${r}, ${i}, ${m}, ${this.get("alpha")/100})`}}else switch(l){case"hsl":{const r=Pe(a,n/100,e/100);this.value=`hsl(${a}, ${Math.round(r[1]*100)}%, ${Math.round(r[2]*100)}%)`;break}case"hsv":{this.value=`hsv(${a}, ${Math.round(n)}%, ${Math.round(e)}%)`;break}case"rgb":{const{r,g:i,b:m}=q(a,n,e);this.value=`rgb(${r}, ${i}, ${m})`;break}default:this.value=Ae(q(a,n,e))}}}const Nt=A({props:{colors:{type:Array,required:!0},color:{type:Object,required:!0}},setup(t){const a=W("color-predefine"),{currentColor:n}=Ge(We),e=y(l(t.colors,t.color));T(()=>n.value,r=>{const i=new j;i.fromString(r),e.value.forEach(m=>{m.selected=i.compare(m)})}),je(()=>{e.value=l(t.colors,t.color)});function s(r){t.color.fromString(t.colors[r])}function l(r,i){return r.map(m=>{const p=new j;return p.enableAlpha=!0,p.format="rgba",p.fromString(m),p.selected=p.value===i.value,p})}return{rgbaColors:e,handleSelect:s,ns:a}}}),Tt=["onClick"];function Bt(t,a,n,e,s,l){return v(),w("div",{class:f(t.ns.b())},[C("div",{class:f(t.ns.e("colors"))},[(v(!0),w(he,null,fe(t.rgbaColors,(r,i)=>(v(),w("div",{key:t.colors[i],class:f([t.ns.e("color-selector"),t.ns.is("alpha",r._alpha<100),{selected:r.selected}]),onClick:m=>t.handleSelect(i)},[C("div",{style:L({backgroundColor:r.value})},null,4)],10,Tt))),128))],2)],2)}var Pt=U(Nt,[["render",Bt],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/predefine.vue"]]);const Ft=A({name:"ElSlPanel",props:{color:{type:Object,required:!0}},setup(t){const a=W("color-svpanel"),n=le(),e=y(0),s=y(0),l=y("hsl(0, 100%, 50%)"),r=I(()=>{const p=t.color.get("hue"),$=t.color.get("value");return{hue:p,value:$}});function i(){const p=t.color.get("saturation"),$=t.color.get("value"),_=n.vnode.el,{clientWidth:S,clientHeight:k}=_;s.value=p*S/100,e.value=(100-$)*k/100,l.value=`hsl(${t.color.get("hue")}, 100%, 50%)`}function m(p){const _=n.vnode.el.getBoundingClientRect(),{clientX:S,clientY:k}=ye(p);let d=S-_.left,h=k-_.top;d=Math.max(0,d),d=Math.min(d,_.width),h=Math.max(0,h),h=Math.min(h,_.height),s.value=d,e.value=h,t.color.set({saturation:d/_.width*100,value:100-h/_.height*100})}return T(()=>r.value,()=>{i()}),J(()=>{Q(n.vnode.el,{drag:p=>{m(p)},end:p=>{m(p)}}),i()}),{cursorTop:e,cursorLeft:s,background:l,colorValue:r,handleDrag:m,update:i,ns:a}}}),At=C("div",null,null,-1),Dt=[At];function Lt(t,a,n,e,s,l){return v(),w("div",{class:f(t.ns.b()),style:L({backgroundColor:t.background})},[C("div",{class:f(t.ns.e("white"))},null,2),C("div",{class:f(t.ns.e("black"))},null,2),C("div",{class:f(t.ns.e("cursor")),style:L({top:t.cursorTop+"px",left:t.cursorLeft+"px"})},Dt,6)],6)}var Ot=U(Ft,[["render",Lt],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/sv-panel.vue"]]);const Ht=["id","aria-label","aria-labelledby","aria-description","tabindex","onKeydown"],zt=A({name:"ElColorPicker"}),Wt=A({...zt,props:St,emits:Et,setup(t,{expose:a,emit:n}){const e=t,{t:s}=Qe(),l=W("color"),{formItem:r}=Le(),i=Oe(),m=He(),{inputId:p,isLabeledByFormItem:$}=ze(e,{formItemContext:r}),_=y(),S=y(),k=y(),d=y();let h=!0;const c=Je(new j({enableAlpha:e.showAlpha,format:e.colorFormat||"",value:e.modelValue})),B=y(!1),E=y(!1),g=y(""),oe=I(()=>!e.modelValue&&!E.value?"transparent":Z(c,e.showAlpha)),u=I(()=>!e.modelValue&&!E.value?"":c.value),M=I(()=>$.value?void 0:e.label||s("el.colorpicker.defaultLabel")),se=I(()=>$.value?r==null?void 0:r.labelId:void 0);function Z(b,D){if(!(b instanceof j))throw new TypeError("color should be instance of _color Class");const{r:O,g:$e,b:Se}=b.toRgb();return D?`rgba(${O}, ${$e}, ${Se}, ${b.get("alpha")/100})`:`rgb(${O}, ${$e}, ${Se})`}function Ue(b){B.value=b}const x=gt(Ue,100);function Ke(){x(!1),re()}function re(){G(()=>{e.modelValue?c.fromString(e.modelValue):(c.value="",G(()=>{E.value=!1}))})}function Ce(){m.value||x(!B.value)}function we(){c.fromString(g.value)}function Re(){const b=c.value;n(Y,b),n("change",b),e.validateEvent&&(r==null||r.validate("change").catch(D=>pe())),x(!1),G(()=>{const D=new j({enableAlpha:e.showAlpha,format:e.colorFormat||"",value:e.modelValue});c.compare(D)||re()})}function Xe(){x(!1),n(Y,null),n("change",null),e.modelValue!==null&&e.validateEvent&&(r==null||r.validate("change").catch(b=>pe())),re()}return J(()=>{e.modelValue&&(g.value=u.value)}),T(()=>e.modelValue,b=>{b?b&&b!==c.value&&(h=!1,c.fromString(b)):E.value=!1}),T(()=>u.value,b=>{g.value=b,h&&n("activeChange",b),h=!0}),T(()=>c.value,()=>{!e.modelValue&&!E.value&&(E.value=!0)}),T(()=>B.value,()=>{G(()=>{var b,D,O;(b=_.value)==null||b.update(),(D=S.value)==null||D.update(),(O=k.value)==null||O.update()})}),Ze(We,{currentColor:u}),a({color:c}),(b,D)=>(v(),N(o(at),{ref_key:"popper",ref:d,visible:B.value,"show-arrow":!1,"fallback-placements":["bottom","top","right","left"],offset:0,"gpu-acceleration":!1,"popper-class":[o(l).be("picker","panel"),o(l).b("dropdown"),b.popperClass],"stop-popper-mouse-event":!1,effect:"light",trigger:"click",transition:`${o(l).namespace.value}-zoom-in-top`,persistent:""},{content:F(()=>[Ve((v(),w("div",null,[C("div",{class:f(o(l).be("dropdown","main-wrapper"))},[P($t,{ref_key:"hue",ref:_,class:"hue-slider",color:o(c),vertical:""},null,8,["color"]),P(Ot,{ref:"svPanel",color:o(c)},null,8,["color"])],2),b.showAlpha?(v(),N(yt,{key:0,ref_key:"alpha",ref:k,color:o(c)},null,8,["color"])):V("v-if",!0),b.predefine?(v(),N(Pt,{key:1,ref:"predefine",color:o(c),colors:b.predefine},null,8,["color","colors"])):V("v-if",!0),C("div",{class:f(o(l).be("dropdown","btns"))},[C("span",{class:f(o(l).be("dropdown","value"))},[P(o(vt),{modelValue:g.value,"onUpdate:modelValue":D[0]||(D[0]=O=>g.value=O),"validate-event":!1,size:"small",onKeyup:ve(we,["enter"]),onBlur:we},null,8,["modelValue","onKeyup"])],2),P(o(Ie),{class:f(o(l).be("dropdown","link-btn")),text:"",size:"small",onClick:Xe},{default:F(()=>[Ne(z(o(s)("el.colorpicker.clear")),1)]),_:1},8,["class"]),P(o(Ie),{plain:"",size:"small",class:f(o(l).be("dropdown","btn")),onClick:Re},{default:F(()=>[Ne(z(o(s)("el.colorpicker.confirm")),1)]),_:1},8,["class"])],2)])),[[o(pt),Ke]])]),default:F(()=>[C("div",{id:o(p),class:f([o(l).b("picker"),o(l).is("disabled",o(m)),o(l).bm("picker",o(i))]),role:"button","aria-label":o(M),"aria-labelledby":o(se),"aria-description":o(s)("el.colorpicker.description",{color:b.modelValue||""}),tabindex:b.tabindex,onKeydown:ve(Ce,["enter"])},[o(m)?(v(),w("div",{key:0,class:f(o(l).be("picker","mask"))},null,2)):V("v-if",!0),C("div",{class:f(o(l).be("picker","trigger")),onClick:Ce},[C("span",{class:f([o(l).be("picker","color"),o(l).is("alpha",b.showAlpha)])},[C("span",{class:f(o(l).be("picker","color-inner")),style:L({backgroundColor:o(oe)})},[Ve(P(o(K),{class:f([o(l).be("picker","icon"),o(l).is("icon-arrow-down")])},{default:F(()=>[P(o(xe))]),_:1},8,["class"]),[[et,b.modelValue||E.value]]),!b.modelValue&&!E.value?(v(),N(o(K),{key:0,class:f([o(l).be("picker","empty"),o(l).is("icon-close")])},{default:F(()=>[P(o(tt))]),_:1},8,["class"])):V("v-if",!0)],6)],2)],2)],42,Ht)]),_:1},8,["visible","popper-class","transition"]))}});var Ut=U(Wt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/color-picker.vue"]]);const Kt=_e(Ut),Rt=be({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:ke(String),default:"solid"}}),Xt=A({name:"ElDivider"}),Yt=A({...Xt,props:Rt,setup(t){const a=t,n=W("divider"),e=I(()=>n.cssVar({"border-style":a.borderStyle}));return(s,l)=>(v(),w("div",{class:f([o(n).b(),o(n).m(s.direction)]),style:L(o(e)),role:"separator"},[s.$slots.default&&s.direction!=="vertical"?(v(),w("div",{key:0,class:f([o(n).e("text"),o(n).is(s.contentPosition)])},[nt(s.$slots,"default")],2)):V("v-if",!0)],6))}});var qt=U(Yt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]);const Gt=_e(qt),jt=be({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:Te},inactiveIcon:{type:Te},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:ke(Function)},size:{type:String,validator:mt},tabindex:{type:[String,Number]}}),Qt={[Y]:t=>ee(t)||R(t)||ue(t),[ne]:t=>ee(t)||R(t)||ue(t),[me]:t=>ee(t)||R(t)||ue(t)},Jt=["onClick"],Zt=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],xt=["aria-hidden"],ea=["aria-hidden"],ta=["aria-hidden"],ge="ElSwitch",aa=A({name:ge}),na=A({...aa,props:jt,emits:Qt,setup(t,{expose:a,emit:n}){const e=t,s=le(),{formItem:l}=Le(),r=Oe(),i=W("switch");lt({from:'"value"',replacement:'"model-value" or "v-model"',scope:ge,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},I(()=>{var u;return!!((u=s.vnode.props)!=null&&u.value)}));const{inputId:m}=ze(e,{formItemContext:l}),p=He(I(()=>e.loading)),$=y(e.modelValue!==!1),_=y(),S=y(),k=I(()=>[i.b(),i.m(r.value),i.is("disabled",p.value),i.is("checked",c.value)]),d=I(()=>({width:ot(e.width)}));T(()=>e.modelValue,()=>{$.value=!0}),T(()=>e.value,()=>{$.value=!1});const h=I(()=>$.value?e.modelValue:e.value),c=I(()=>h.value===e.activeValue);[e.activeValue,e.inactiveValue].includes(h.value)||(n(Y,e.inactiveValue),n(ne,e.inactiveValue),n(me,e.inactiveValue)),T(c,u=>{var M;_.value.checked=u,e.validateEvent&&((M=l==null?void 0:l.validate)==null||M.call(l,"change").catch(se=>pe()))});const B=()=>{const u=c.value?e.inactiveValue:e.activeValue;n(Y,u),n(ne,u),n(me,u),G(()=>{_.value.checked=c.value})},E=()=>{if(p.value)return;const{beforeChange:u}=e;if(!u){B();return}const M=u();[Be(M),ee(M)].includes(!0)||it(ge,"beforeChange must return type `Promise<boolean>` or `boolean`"),Be(M)?M.then(Z=>{Z&&B()}).catch(Z=>{}):M&&B()},g=I(()=>i.cssVarBlock({...e.activeColor?{"on-color":e.activeColor}:null,...e.inactiveColor?{"off-color":e.inactiveColor}:null,...e.borderColor?{"border-color":e.borderColor}:null})),oe=()=>{var u,M;(M=(u=_.value)==null?void 0:u.focus)==null||M.call(u)};return J(()=>{_.value.checked=c.value}),a({focus:oe,checked:c}),(u,M)=>(v(),w("div",{class:f(o(k)),style:L(o(g)),onClick:rt(E,["prevent"])},[C("input",{id:o(m),ref_key:"input",ref:_,class:f(o(i).e("input")),type:"checkbox",role:"switch","aria-checked":o(c),"aria-disabled":o(p),name:u.name,"true-value":u.activeValue,"false-value":u.inactiveValue,disabled:o(p),tabindex:u.tabindex,onChange:B,onKeydown:ve(E,["enter"])},null,42,Zt),!u.inlinePrompt&&(u.inactiveIcon||u.inactiveText)?(v(),w("span",{key:0,class:f([o(i).e("label"),o(i).em("label","left"),o(i).is("active",!o(c))])},[u.inactiveIcon?(v(),N(o(K),{key:0},{default:F(()=>[(v(),N(te(u.inactiveIcon)))]),_:1})):V("v-if",!0),!u.inactiveIcon&&u.inactiveText?(v(),w("span",{key:1,"aria-hidden":o(c)},z(u.inactiveText),9,xt)):V("v-if",!0)],2)):V("v-if",!0),C("span",{ref_key:"core",ref:S,class:f(o(i).e("core")),style:L(o(d))},[u.inlinePrompt?(v(),w("div",{key:0,class:f(o(i).e("inner"))},[u.activeIcon||u.inactiveIcon?(v(),N(o(K),{key:0,class:f(o(i).is("icon"))},{default:F(()=>[(v(),N(te(o(c)?u.activeIcon:u.inactiveIcon)))]),_:1},8,["class"])):u.activeText||u.inactiveText?(v(),w("span",{key:1,class:f(o(i).is("text")),"aria-hidden":!o(c)},z(o(c)?u.activeText:u.inactiveText),11,ea)):V("v-if",!0)],2)):V("v-if",!0),C("div",{class:f(o(i).e("action"))},[u.loading?(v(),N(o(K),{key:0,class:f(o(i).is("loading"))},{default:F(()=>[P(o(st))]),_:1},8,["class"])):V("v-if",!0)],2)],6),!u.inlinePrompt&&(u.activeIcon||u.activeText)?(v(),w("span",{key:1,class:f([o(i).e("label"),o(i).em("label","right"),o(i).is("active",o(c))])},[u.activeIcon?(v(),N(o(K),{key:0},{default:F(()=>[(v(),N(te(u.activeIcon)))]),_:1})):V("v-if",!0),!u.activeIcon&&u.activeText?(v(),w("span",{key:1,"aria-hidden":!o(c)},z(u.activeText),9,ta)):V("v-if",!0)],2)):V("v-if",!0)],14,Jt))}});var la=U(na,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const oa=_e(la);const sa=[{title:"\u5168\u5C40\u4E3B\u9898",icon:"Operation",themeItem:[{name:"themeColor",label:"\u4E3B\u9898\u989C\u8272",handle:"changeThemeColor",default:"color-picker"},{name:"isDark",label:"\u6697\u9ED1\u6A21\u5F0F",handle:"changeIsDark"},{name:"isGrey",label:"\u7070\u8272\u6A21\u5F0F",handle:"changeIsGrey"},{name:"isAchromatism",label:"\u8272\u5F31\u6A21\u5F0F",handle:"changeIsAchromatism"}]},{title:"\u754C\u9762\u8BBE\u7F6E",icon:"setting",themeItem:[{name:"sidebarOpen",label:"\u6298\u53E0\u83DC\u5355",handle:"toggleSidebar"},{name:"hamburgerOpen",label:"\u9762\u5305\u5C51",handle:"toggleSidebar"},{name:"hamburgerIconOpen",label:"\u9762\u5305\u5C51\u56FE\u6807",handle:"toggleSidebar"},{name:"labelBarOpen",label:"\u6807\u7B7E\u680F",handle:"toggleSidebar"},{name:"labelBarIconOpen",label:"\u6807\u7B7E\u680F\u56FE\u6807",handle:"toggleSidebar"}]}],ra={class:"skin-swtich"},ia={class:"title"},ua=A({__name:"index",setup(t){const a=ut(),n=ct(a),e=y(!1),s=()=>{e.value=!e.value};T(()=>a.isGrey,r=>{r&&a.changeIsAchromatism()}),T(()=>a.isAchromatism,r=>{r&&a.changeIsGrey()});const l=y(["#009688","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585"]);return(r,i)=>{const m=ht("svg-icon-vue"),p=Gt,$=Kt,_=oa,S=dt,k=bt;return v(),w("div",ra,[P(m,{name:"pifu",onClick:s}),P(k,{modelValue:e.value,"onUpdate:modelValue":i[0]||(i[0]=d=>e.value=d),direction:"rtl",title:"\u5E03\u5C40\u8BBE\u7F6E"},{default:F(()=>[P(S,{height:"100%"},{default:F(()=>[(v(!0),w(he,null,fe(o(sa),d=>(v(),w("div",{class:"theme-contain",key:d.title,style:{width:"300px"}},[P(p,null,{default:F(()=>[C("div",ia,[(v(),N(te(d.icon),{style:{width:"12px","margin-right":"5px"}})),C("span",null,z(d.title),1)])]),_:2},1024),(v(!0),w(he,null,fe(d.themeItem,h=>(v(),w("div",{class:"theme-item",key:h.name},[C("span",null,z(h.label),1),h.default==="color-picker"?(v(),N($,{key:0,predefine:l.value,modelValue:o(n)[h.name].value,"onUpdate:modelValue":c=>o(n)[h.name].value=c},null,8,["predefine","modelValue","onUpdate:modelValue"])):(v(),N(_,{key:1,modelValue:o(n)[h.name].value,"onUpdate:modelValue":c=>o(n)[h.name].value=c},null,8,["modelValue","onUpdate:modelValue"]))]))),128))]))),128))]),_:1})]),_:1},8,["modelValue"])])}}});const pa=ft(ua,[["__scopeId","data-v-49a4a7fb"]]);export{pa as default};

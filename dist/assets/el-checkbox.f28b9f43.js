import{b3 as O,b4 as K,b5 as de,b6 as ce,b7 as be,b8 as ve,b9 as me,N as q,a7 as R,ai as U,ay as N,h as B,H as g,ba as V,K as fe,z as J,ae as W,q as Q,r as z,a0 as L,bb as he,J as A,d as C,L as X,u as T,a as x,k as Y,w as Z,j as M,n as p,f as a,ap as I,c as y,aT as E,bc as w,e as D,G as ke,D as _,m as j,A as G,l as ee,_ as F,P as pe,b as ge,g as xe,p as ye,t as Ce,s as Se,v as ne}from"./index.d46c8804.js";import{U as $}from"./event.9443ec1f.js";import{u as P,a as ae}from"./index.1030af3d.js";import{d as le}from"./error.db406747.js";import{i as Le,a as Be}from"./_arrayPush.368451bf.js";import{f as Ie}from"./flatten.3030347f.js";function Ee(e){return e}function we(e,n,o){switch(o.length){case 0:return e.call(n);case 1:return e.call(n,o[0]);case 2:return e.call(n,o[0],o[1]);case 3:return e.call(n,o[0],o[1],o[2])}return e.apply(n,o)}var $e=800,Ne=16,Ve=Date.now;function ze(e){var n=0,o=0;return function(){var l=Ve(),u=Ne-(l-o);if(o=l,u>0){if(++n>=$e)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function Ge(e){return function(){return e}}var Te=O?function(e,n){return O(e,"toString",{configurable:!0,enumerable:!1,value:Ge(n),writable:!0})}:Ee;const De=Te;var Fe=ze(De);const Pe=Fe;var H=Math.max;function Oe(e,n,o){return n=H(n===void 0?e.length-1:n,0),function(){for(var l=arguments,u=-1,d=H(l.length-n,0),c=Array(d);++u<d;)c[u]=l[n+u];u=-1;for(var s=Array(n+1);++u<n;)s[u]=l[u];return s[n]=o(c),we(e,this,s)}}function Re(e){return Pe(Oe(e,void 0,Ie),e+"")}function Ue(e,n){return e!=null&&n in Object(e)}function Ae(e,n,o){n=K(n,e);for(var l=-1,u=n.length,d=!1;++l<u;){var c=de(n[l]);if(!(d=e!=null&&o(e,c)))break;e=e[c]}return d||++l!=u?d:(u=e==null?0:e.length,!!u&&Le(u)&&ce(c,u)&&(be(e)||Be(e)))}function Me(e,n){return e!=null&&Ae(e,n,Ue)}function He(e,n,o){for(var l=-1,u=n.length,d={};++l<u;){var c=n[l],s=ve(e,c);o(s,c)&&me(d,K(c,e),s)}return d}function Ke(e,n){return He(e,n,function(o,l){return Me(e,l)})}var qe=Re(function(e,n){return e==null?{}:Ke(e,n)});const Je=qe,S=Symbol("checkboxGroupContextKey"),te={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:q,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},oe={[$]:e=>R(e)||U(e)||N(e),change:e=>R(e)||U(e)||N(e)},We=({model:e,isChecked:n})=>{const o=B(S,void 0),l=g(()=>{var d,c;const s=(d=o==null?void 0:o.max)==null?void 0:d.value,v=(c=o==null?void 0:o.min)==null?void 0:c.value;return!V(s)&&e.value.length>=s&&!n.value||!V(v)&&e.value.length<=v&&n.value});return{isDisabled:fe(g(()=>(o==null?void 0:o.disabled.value)||l.value)),isLimitDisabled:l}},Qe=(e,{model:n,isLimitExceeded:o,hasOwnLabel:l,isDisabled:u,isLabeledByFormItem:d})=>{const c=B(S,void 0),{formItem:s}=P(),{emit:v}=Q();function i(t){var b,h;return t===e.trueLabel||t===!0?(b=e.trueLabel)!=null?b:!0:(h=e.falseLabel)!=null?h:!1}function m(t,b){v("change",i(t),b)}function k(t){if(o.value)return;const b=t.target;v("change",i(b.checked),t)}async function f(t){o.value||!l.value&&!u.value&&d.value&&(t.composedPath().some(re=>re.tagName==="LABEL")||(n.value=i([!1,e.falseLabel].includes(n.value)),await W(),m(n.value,t)))}const r=g(()=>(c==null?void 0:c.validateEvent)||e.validateEvent);return J(()=>e.modelValue,()=>{r.value&&(s==null||s.validate("change").catch(t=>le()))}),{handleChange:k,onClickRoot:f}},Xe=e=>{const n=z(!1),{emit:o}=Q(),l=B(S,void 0),u=g(()=>V(l)===!1),d=z(!1);return{model:g({get(){var s,v;return u.value?(s=l==null?void 0:l.modelValue)==null?void 0:s.value:(v=e.modelValue)!=null?v:n.value},set(s){var v,i;u.value&&L(s)?(d.value=((v=l==null?void 0:l.max)==null?void 0:v.value)!==void 0&&s.length>(l==null?void 0:l.max.value),d.value===!1&&((i=l==null?void 0:l.changeEvent)==null||i.call(l,s))):(o($,s),n.value=s)}}),isGroup:u,isLimitExceeded:d}},Ye=(e,n,{model:o})=>{const l=B(S,void 0),u=z(!1),d=g(()=>{const i=o.value;return N(i)?i:L(i)?i.map(he).includes(e.label):i!=null?i===e.trueLabel:!!i}),c=A(g(()=>{var i;return(i=l==null?void 0:l.size)==null?void 0:i.value}),{prop:!0}),s=A(g(()=>{var i;return(i=l==null?void 0:l.size)==null?void 0:i.value})),v=g(()=>!!(n.default||e.label));return{checkboxButtonSize:c,isChecked:d,isFocused:u,checkboxSize:s,hasOwnLabel:v}},Ze=(e,{model:n})=>{function o(){L(n.value)&&!n.value.includes(e.label)?n.value.push(e.label):n.value=e.trueLabel||!0}e.checked&&o()},se=(e,n)=>{const{formItem:o}=P(),{model:l,isGroup:u,isLimitExceeded:d}=Xe(e),{isFocused:c,isChecked:s,checkboxButtonSize:v,checkboxSize:i,hasOwnLabel:m}=Ye(e,n,{model:l}),{isDisabled:k}=We({model:l,isChecked:s}),{inputId:f,isLabeledByFormItem:r}=ae(e,{formItemContext:o,disableIdGeneration:m,disableIdManagement:u}),{handleChange:t,onClickRoot:b}=Qe(e,{model:l,isLimitExceeded:d,hasOwnLabel:m,isDisabled:k,isLabeledByFormItem:r});return Ze(e,{model:l}),{inputId:f,isLabeledByFormItem:r,isChecked:s,isDisabled:k,isFocused:c,checkboxButtonSize:v,checkboxSize:i,hasOwnLabel:m,model:l,handleChange:t,onClickRoot:b}},_e=["tabindex","role","aria-checked"],je=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],en=["id","aria-hidden","disabled","value","name","tabindex"],nn=C({name:"ElCheckbox"}),an=C({...nn,props:te,emits:oe,setup(e){const n=e,o=X(),{inputId:l,isLabeledByFormItem:u,isChecked:d,isDisabled:c,isFocused:s,checkboxSize:v,hasOwnLabel:i,model:m,handleChange:k,onClickRoot:f}=se(n,o),r=T("checkbox");return(t,b)=>(x(),Y(ee(!a(i)&&a(u)?"span":"label"),{class:p([a(r).b(),a(r).m(a(v)),a(r).is("disabled",a(c)),a(r).is("bordered",t.border),a(r).is("checked",a(d))]),"aria-controls":t.indeterminate?t.controls:null,onClick:a(f)},{default:Z(()=>[M("span",{class:p([a(r).e("input"),a(r).is("disabled",a(c)),a(r).is("checked",a(d)),a(r).is("indeterminate",t.indeterminate),a(r).is("focus",a(s))]),tabindex:t.indeterminate?0:void 0,role:t.indeterminate?"checkbox":void 0,"aria-checked":t.indeterminate?"mixed":void 0},[t.trueLabel||t.falseLabel?I((x(),y("input",{key:0,id:a(l),"onUpdate:modelValue":b[0]||(b[0]=h=>E(m)?m.value=h:null),class:p(a(r).e("original")),type:"checkbox","aria-hidden":t.indeterminate?"true":"false",name:t.name,tabindex:t.tabindex,disabled:a(c),"true-value":t.trueLabel,"false-value":t.falseLabel,onChange:b[1]||(b[1]=(...h)=>a(k)&&a(k)(...h)),onFocus:b[2]||(b[2]=h=>s.value=!0),onBlur:b[3]||(b[3]=h=>s.value=!1)},null,42,je)),[[w,a(m)]]):I((x(),y("input",{key:1,id:a(l),"onUpdate:modelValue":b[4]||(b[4]=h=>E(m)?m.value=h:null),class:p(a(r).e("original")),type:"checkbox","aria-hidden":t.indeterminate?"true":"false",disabled:a(c),value:t.label,name:t.name,tabindex:t.tabindex,onChange:b[5]||(b[5]=(...h)=>a(k)&&a(k)(...h)),onFocus:b[6]||(b[6]=h=>s.value=!0),onBlur:b[7]||(b[7]=h=>s.value=!1)},null,42,en)),[[w,a(m)]]),M("span",{class:p(a(r).e("inner"))},null,2)],10,_e),a(i)?(x(),y("span",{key:0,class:p(a(r).e("label"))},[D(t.$slots,"default"),t.$slots.default?G("v-if",!0):(x(),y(ke,{key:0},[_(j(t.label),1)],64))],2)):G("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var ln=F(an,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const tn=["name","tabindex","disabled","true-value","false-value"],on=["name","tabindex","disabled","value"],sn=C({name:"ElCheckboxButton"}),un=C({...sn,props:te,emits:oe,setup(e){const n=e,o=X(),{isFocused:l,isChecked:u,isDisabled:d,checkboxButtonSize:c,model:s,handleChange:v}=se(n,o),i=B(S,void 0),m=T("checkbox"),k=g(()=>{var f,r,t,b;const h=(r=(f=i==null?void 0:i.fill)==null?void 0:f.value)!=null?r:"";return{backgroundColor:h,borderColor:h,color:(b=(t=i==null?void 0:i.textColor)==null?void 0:t.value)!=null?b:"",boxShadow:h?`-1px 0 0 0 ${h}`:void 0}});return(f,r)=>(x(),y("label",{class:p([a(m).b("button"),a(m).bm("button",a(c)),a(m).is("disabled",a(d)),a(m).is("checked",a(u)),a(m).is("focus",a(l))])},[f.trueLabel||f.falseLabel?I((x(),y("input",{key:0,"onUpdate:modelValue":r[0]||(r[0]=t=>E(s)?s.value=t:null),class:p(a(m).be("button","original")),type:"checkbox",name:f.name,tabindex:f.tabindex,disabled:a(d),"true-value":f.trueLabel,"false-value":f.falseLabel,onChange:r[1]||(r[1]=(...t)=>a(v)&&a(v)(...t)),onFocus:r[2]||(r[2]=t=>l.value=!0),onBlur:r[3]||(r[3]=t=>l.value=!1)},null,42,tn)),[[w,a(s)]]):I((x(),y("input",{key:1,"onUpdate:modelValue":r[4]||(r[4]=t=>E(s)?s.value=t:null),class:p(a(m).be("button","original")),type:"checkbox",name:f.name,tabindex:f.tabindex,disabled:a(d),value:f.label,onChange:r[5]||(r[5]=(...t)=>a(v)&&a(v)(...t)),onFocus:r[6]||(r[6]=t=>l.value=!0),onBlur:r[7]||(r[7]=t=>l.value=!1)},null,42,on)),[[w,a(s)]]),f.$slots.default||f.label?(x(),y("span",{key:2,class:p(a(m).be("button","inner")),style:pe(a(u)?a(k):void 0)},[D(f.$slots,"default",{},()=>[_(j(f.label),1)])],6)):G("v-if",!0)],2))}});var ie=F(un,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const rn=ge({modelValue:{type:xe(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:q,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),dn={[$]:e=>L(e),change:e=>L(e)},cn=C({name:"ElCheckboxGroup"}),bn=C({...cn,props:rn,emits:dn,setup(e,{emit:n}){const o=e,l=T("checkbox"),{formItem:u}=P(),{inputId:d,isLabeledByFormItem:c}=ae(o,{formItemContext:u}),s=async i=>{n($,i),await W(),n("change",i)},v=g({get(){return o.modelValue},set(i){s(i)}});return ye(S,{...Je(Ce(o),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:v,changeEvent:s}),J(()=>o.modelValue,()=>{o.validateEvent&&(u==null||u.validate("change").catch(i=>le()))}),(i,m)=>{var k;return x(),Y(ee(i.tag),{id:a(d),class:p(a(l).b("group")),role:"group","aria-label":a(c)?void 0:i.label||"checkbox-group","aria-labelledby":a(c)?(k=a(u))==null?void 0:k.labelId:void 0},{default:Z(()=>[D(i.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var ue=F(bn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const gn=Se(ln,{CheckboxButton:ie,CheckboxGroup:ue});ne(ie);ne(ue);export{gn as E,Me as h,Ee as i};

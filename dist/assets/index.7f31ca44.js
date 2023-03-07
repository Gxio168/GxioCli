import{d as h,r as g,a as s,c as r,G as e,I as n,F as B,D as l,w as t,m as i,f as o,j as c,bz as p,B as L}from"./index.021762f1.js";import{E as T,a as q}from"./el-link.39b86160.js";import{E as z}from"./el-tag.dcf31744.js";import{u as k,f as M}from"./index.07348d6a.js";import{_ as N}from"./index.vue_vue_type_script_setup_true_lang.951bd7ce.js";import"./el-input.c2797dd9.js";import"./el-overlay.cf7b3581.js";import"./index.fcd9e3ea.js";import"./el-card.4c8d2a68.js";import"./el-select.57b860ce.js";import"./el-form-item.07dbdf8f.js";import"./debounce.33476141.js";import"./index.0405ff29.js";import"./index.65f88f19.js";import"./getStaticDate.4d17a53c.js";const D=[{prop:"name",label:"\u7528\u6237\u59D3\u540D",type:"input"},{prop:"gender",label:"\u6027\u522B",type:"select",children:[{label:"\u7537",value:1},{label:"\u5973",value:0}]},{prop:"age",label:"\u5E74\u9F84",type:"input"},{prop:"id",label:"\u8EAB\u4EFD\u8BC1\u53F7",type:"input"},{prop:"status",label:"\u7528\u6237\u72B6\u6001",type:"select",children:[{label:"\u542F\u7528",value:!0},{label:"\u7981\u7528",value:!1}]},{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4",type:"date",startPlaceHolder:"\u5F00\u59CB\u65F6\u95F4",endPlaceHolder:"\u7ED3\u675F\u65F6\u95F4"}],E=[{type:"avatar",label:"\u7528\u6237\u5934\u50CF",prop:"userAvatar",isHide:!0,config:{id:"upload1",type:"avatar",url:"/api/upload",imageProps:"userAvatar",limitSize:3*1024*1024,tip:"\u5934\u50CF\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 3M"}},{type:"photo",label:"\u7528\u6237\u7167\u7247",prop:"userPhoto",isHide:!0,config:{id:"upload2",type:"picture",limitNums:5,limitSize:5*1024*1024,url:"/api/upload",imageProps:"userPhoto",isRadius:!1,tip:"\u7167\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 5M"}},{type:"input",label:"\u59D3\u540D",prop:"name"},{type:"select",label:"\u6027\u522B",prop:"sex",slotName:"sex",children:[{label:"\u7537",value:1},{label:"\u5973",value:0}]},{type:"input",label:"\u5E74\u9F84",prop:"age"},{type:"input",label:"\u8EAB\u4EFD\u8BC1\u53F7",prop:"id"},{type:"input",label:"\u90AE\u7BB1",prop:"email"},{type:"input",label:"\u5C45\u4F4F\u5730",prop:"location"},{label:"\u7528\u6237\u72B6\u6001",prop:"status",slotName:"status",canModify:!1},{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",canModify:!1}],w={name:{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:"blur"},sex:{required:!0,message:"\u8BF7\u8F93\u5165\u6027\u522B",trigger:"blur"},age:{required:!0,message:"\u8BF7\u8F93\u5165\u5E74\u9F84",trigger:"blur"},id:{required:!0,message:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",trigger:"blur"},email:{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1",trigger:"blur"},location:{required:!0,message:"\u8BF7\u8F93\u5165\u5730\u5740",trigger:"blur"},userAvatar:{required:!0,message:"\u8BF7\u4E0A\u4F20\u5934\u50CF",trigger:"blur"}},V={class:"basic-form"},I=c("br",null,null,-1),R=c("br",null,null,-1),$=c("br",null,null,-1),j=c("br",null,null,-1),G=h({name:"BasicTable"}),oe=h({...G,setup(J){const b=k(),f=g(10),y=u=>{b.putInfoList("userList",f.value,u),p({type:"success",message:u})},C=u=>{f.value=u},v=()=>{p({type:"success",message:"\u91CD\u7F6E\u6210\u529F"})},d=g(),A=u=>{u.length?F.value=!1:F.value=!0,d.value=u.map(_=>_.id)},x=()=>{q.confirm("\u662F\u5426\u5220\u9664\u6240\u9009\u7528\u6237\u4FE1\u606F?","\u6E29\u99A8\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{p({type:"success",message:`\u5220\u9664${d.value}`}),b.deleteInfoList("userList",d.value)}).catch(()=>{})},S=()=>{p({message:"\u8FD9\u662F\u63D2\u69FD\u6E32\u67D3\u51FA\u6765\u7684",type:"success"})},F=g(!0);return(u,_)=>{const m=z,H=L,P=T;return s(),r("div",V,[e(" \u5F53\u524D\u8868\u5934\u914D\u7F6E: "),I,(s(!0),r(n,null,B(o(D),a=>(s(),r(n,null,[l(m,{type:"success",size:"large"},{default:t(()=>[e(i(a),1)]),_:2},1024),e(),R],64))),256)),l(N,{config:o(D),onHandleSearch:y,onHandleReset:v},null,8,["config"]),e(" \u5F53\u524D\u8868\u683C\u914D\u7F6E: "),$,(s(!0),r(n,null,B(o(E),a=>(s(),r(n,null,[l(m,{type:"success",size:"large"},{default:t(()=>[e(i(a),1)]),_:2},1024),e(),j],64))),256)),l(M,{onHandleSelectChange:A,onHandlePageSizeChange:C,config:o(E),rules:o(w),url:"userList"},{tableHead:t(()=>[l(H,{icon:"plus",type:"danger",plain:"",disabled:F.value,onClick:x},{default:t(()=>[e("\u6279\u91CF\u5220\u9664\u6570\u636E")]),_:1},8,["disabled"])]),sex:t(({row:a})=>[l(P,{underline:!1,type:"primary",onClick:S},{default:t(()=>[e(i(a.sex===1?"\u7537":"\u5973"),1)]),_:2},1024)]),status:t(({row:a})=>[l(m,{class:"ml-2"},{default:t(()=>[e(i(a.status?"\u542F\u7528":"\u7981\u7528"),1)]),_:2},1024)]),_:1},8,["config","rules"])])}}});export{oe as default};
import{e as o,cc as s,n as i,q as c,G as l,y as p,A as n,B as u}from"./index.fe16509b.js";const d=["href","fill"],y=o({__name:"index",props:{prefix:{type:String,default:"icon"},name:{type:String,required:!0},iconStyle:{type:String,default:"width: 20px; height: 20px;"}},setup(e){const t=e,{textColor:r}=s(),a=i(()=>`#${t.prefix}-${t.name}`);return(f,m)=>(c(),l("svg",{"aria-hidden":"true",style:u(e.iconStyle)},[p("use",{href:n(a),fill:n(r)},null,8,d)],4))}});export{y as default};
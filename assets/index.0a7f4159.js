import{u as o}from"./useChangeDark.2a650798.js";import{d as s,H as i,a as l,c,j as p,f as n,P as f}from"./index.d46c8804.js";const u=["href","fill"],y=s({__name:"index",props:{prefix:{type:String,default:"icon"},name:{type:String,required:!0},iconStyle:{type:String,default:"width: 20px; height: 20px;"}},setup(e){const t=e,{textColor:r}=o(),a=i(()=>`#${t.prefix}-${t.name}`);return(d,m)=>(l(),c("svg",{"aria-hidden":"true",style:f(e.iconStyle)},[p("use",{href:n(a),fill:n(r)},null,8,u)],4))}});export{y as default};
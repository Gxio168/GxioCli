import{r}from"./index.d46c8804.js";function o(n,t=50){let e=null;return()=>new Promise(i=>{e||(e=setTimeout(()=>{i(n()),e=null},t))})}function l(){let n=r(window.innerWidth);const t=o(()=>{n.value=window.innerWidth});window.addEventListener("resize",t);function e(){window.removeEventListener("resize",t)}return{pageWidth:n,cancelHandleWindow:e}}export{l as u};

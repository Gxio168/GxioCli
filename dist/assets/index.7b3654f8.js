import{e as m,h}from"./index.6070ae34.js";import{bE as e,by as l}from"./index.729ec0c4.js";var b=e?e.isConcatSpreadable:void 0;function c(n){return l(n)||m(n)||!!(b&&n&&n[b])}function r(n,o,f,a,t){var s=-1,g=n.length;for(f||(f=c),t||(t=[]);++s<g;){var i=n[s];o>0&&f(i)?o>1?r(i,o-1,f,a,t):h(t,i):a||(t[t.length]=i)}return t}function x(n){var o=n==null?0:n.length;return o?r(n,1):[]}function y(n){const o={};for(const f of n)o[f.prop]="";return o}export{r as b,x as f,y as g};
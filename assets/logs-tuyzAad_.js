import{f as p}from"./index-DIs4CkQ_.js";import{p as n,af as v,L as h,a3 as L,ai as m,I as r,aj as l}from"./index-B5lAVCDJ.js";const c=n([]),M=n(""),x=n(!1),w=v("config/log-level",h.Info);let o,a=[];const d=L.throttle(()=>{c.value=a.concat(c.value).slice(0,m.value),a=[]},500),i=[],E=()=>{i.length=0;for(const e in l.value){if(e.startsWith("/"))continue;const s=new RegExp(e+":","ig");i.push([s,`${e} (${l.value[e]}) :`])}};r(l,()=>{E()},{immediate:!0});const P=()=>{o==null||o(),c.value=[],a=[];let e=1;const s=p({level:w.value}),u=r(s.data,t=>{if(t){if(x.value){e++;return}for(const[f,g]of i)t.payload=t.payload.replace(f,g);a.unshift({...t,time:new Date().valueOf(),seq:e++}),d()}});o=()=>{u(),s.close()}};export{M as a,P as b,c,x as i,w as l};

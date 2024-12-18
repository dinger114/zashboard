import{d as U,ah as V,av as v,c,u as r,a as t,t as l,e as E,j as f,w as p,v as D,g as u,F as M,r as N,aC as j,aD as A,D as y,A as g,o as h,aB as L,J as R}from"./index-B5lAVCDJ.js";import{_ as z,r as F}from"./LanguageSelect.vue_vue_type_script_setup_true_lang-DblpuKOK.js";import{u as H}from"./setup-t_XcuyF_.js";import{r as K}from"./QuestionMarkCircleIcon-9bQg-GW2.js";const G={key:0,class:"toast toast-start toast-top max-w-64 whitespace-normal text-sm"},J={class:"breaks-all alert alert-warning w-72 whitespace-normal"},O={href:"https://github.com/Zephyruso/zashboard/blob/main/README.md",target:"_blank"},Z={class:"absolute bottom-4 right-4"},I={class:"card w-64 gap-2 px-6 py-2 sm:gap-4"},Q={class:"text-2xl font-semibold"},W={class:"form-control"},X={class:"label"},Y={class:"label-text"},q={class:"form-control"},tt={class:"label"},st={class:"label-text"},et={class:"form-control"},ot={class:"label"},at={class:"label-text"},lt={class:"form-control"},nt={class:"label flex items-center justify-start gap-1"},rt={class:"label-text"},it=["data-tip"],pt={class:"form-control"},dt={class:"label"},ct={class:"label-text"},ut={class:"flex flex-col gap-2"},ht=["onClick"],mt=["onClick"],yt=U({__name:"SetupPage",setup(ft){var b,_;const a=V({protocol:"http",host:"127.0.0.1",port:9090,secondaryPath:"",password:""}),{tipContent:$,tipShowModel:x,showTip:P}=H(),T=o=>{R.value=o,y.push({name:g.proxies})},d=async(o,e=!1)=>{const{protocol:s,host:m,port:w,password:k,secondaryPath:C}=o;if(!s||!m||!w){alert("Please fill in all the fields.");return}window.location.protocol==="https:"&&s==="http"&&!e&&P("protocolTips");try{const i=await fetch(`${s}://${m}:${w}${C}/version`,{method:"GET",headers:{Authorization:`Bearer ${k}`}});if(i.status!==200){e||alert(i.statusText);return}const{version:B,message:S}=await i.json();if(!B){e||alert(S);return}A(o),y.push({name:g.proxies})}catch(i){e||alert(i)}},n=new URLSearchParams(window.location.search||((_=(b=location.hash.match(/\?.*$/))==null?void 0:b[0])==null?void 0:_.replace("?","")));return n.has("hostname")?d({protocol:n.get("http")?"http":n.get("https")?"https":window.location.protocol.replace(":",""),secondaryPath:n.get("secondaryPath")||"",host:n.get("hostname"),port:Number(n.get("port")),password:n.get("secret")}):v.value.length===0&&d(a,!0),(o,e)=>(h(),c("div",{class:"flex h-full w-full items-center justify-center bg-base-200/40",onKeydown:e[6]||(e[6]=j(s=>d(a),["enter"]))},[r(x)?(h(),c("div",G,[t("div",J,[t("a",O,l(o.$t(r($))),1)])])):E("",!0),t("div",Z,[f(z)]),t("div",I,[t("h1",Q,l(o.$t("setup")),1),t("div",W,[t("label",X,[t("span",Y,l(o.$t("protocol")),1)]),p(t("select",{class:"select select-bordered select-sm w-full","onUpdate:modelValue":e[0]||(e[0]=s=>a.protocol=s)},e[7]||(e[7]=[t("option",{value:"http"},"HTTP",-1),t("option",{value:"https"},"HTTPS",-1)]),512),[[D,a.protocol]])]),t("div",q,[t("label",tt,[t("span",st,l(o.$t("host")),1)]),p(t("input",{type:"text",class:"input input-sm input-bordered w-full",name:"username",autocomplete:"username","onUpdate:modelValue":e[1]||(e[1]=s=>a.host=s)},null,512),[[u,a.host]])]),t("div",et,[t("label",ot,[t("span",at,l(o.$t("port")),1)]),p(t("input",{type:"text",class:"input input-sm input-bordered w-full","onUpdate:modelValue":e[2]||(e[2]=s=>a.port=s)},null,512),[[u,a.port]])]),t("div",lt,[t("label",nt,[t("span",rt,l(o.$t("secondaryPath")),1),t("span",{class:"tooltip","data-tip":o.$t("secondaryPathTip")},[f(r(K),{class:"h-4 w-4"})],8,it)]),p(t("input",{type:"text",class:"input input-sm input-bordered w-full","onUpdate:modelValue":e[3]||(e[3]=s=>a.secondaryPath=s)},null,512),[[u,a.secondaryPath]])]),t("div",pt,[t("label",dt,[t("span",ct,l(o.$t("password")),1)]),p(t("input",{type:"password",class:"input input-sm input-bordered w-full","onUpdate:modelValue":e[4]||(e[4]=s=>a.password=s)},null,512),[[u,a.password]])]),t("button",{class:"btn btn-primary btn-sm w-full",onClick:e[5]||(e[5]=s=>d(a))},l(o.$t("submit")),1),t("div",ut,[(h(!0),c(M,null,N(r(v),s=>(h(),c("div",{key:s.uuid,class:"flex items-center gap-2"},[t("button",{class:"btn btn-xs flex-1",onClick:m=>T(s.uuid)},l(s.protocol)+"://"+l(s.host)+":"+l(s.port)+l(s.secondaryPath),9,ht),t("button",{class:"btn btn-circle btn-xs",onClick:()=>r(L)(s.uuid)},[f(r(F),{class:"h-4 w-4"})],8,mt)]))),128))])])],32))}});export{yt as default};

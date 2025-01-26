import{d as h,o as t,c as n,a as s,L as C,U as w,C as Y,R as P,p as v,a4 as B,t as j,g as m,F as p,j as k,f as b,Q as S,k as L,u as T,a5 as I,e as $,b as g,w as x,H as R,I as V,v as F,x as H}from"./app-DZqbZOQU.js";import{_ as N}from"./YunComment.vue_vue_type_style_index_0_lang-CxJ2HgLG.js";import{_ as z}from"./YunSponsor.vue_vue_type_style_index_0_lang-By_Ij9z6.js";import{c as M}from"./index-x8TNrC4q.js";import"./index-C5okkQwF.js";const U=["href"],D=h({__name:"YunProjectLinkItem",props:{item:{}},setup(f){return(e,l)=>(t(),n("a",{class:"yun-project-link-item inline-flex items-center justify-center flex-1 p-2 h-full text-white",href:e.item.url,target:"_blank",style:w({"--c-brand":e.item.color})},[s("div",{class:C(e.item.icon)},null,2)],12,U))}}),E={key:0,class:"mt-4"},J=["href"],Q={text:"lg",font:"bold",m:"2"},W=["innerHTML"],q={flex:"~ center",class:"absolute left-0 right-0 bottom-0 h-10"},A=h({__name:"YunProjectCard",props:{i:{},project:{}},setup(f){const e=f,l=Y();P(l,{initial:{opacity:0,y:50},enter:{opacity:1,y:0,transition:{delay:e.i*50,type:"spring",ease:M.easeIn,damping:8,duration:400}}});const u=v(()=>{const o={color:e.project.textColor};if(e.project.color&&(typeof e.project.gradient>"u"||e.project.gradient)){const c=new B(e.project.color);o["--un-gradient-stops"]=`${c.spin(55).toHexString()}, ${e.project.color}`,o.color||(o.color=c.isDark()?"white":"black")}else o.backgroundColor=e.project.color||"rgba(255,255,255,0.9)",o.color||(o.color="black");return o}),r=v(()=>e.project.github?`https://github.com/${e.project.github}`:`https://github.com/YunYouJun/${e.project.name}`),_=v(()=>e.project.npm?`https://www.npmjs.com/package/${e.project.npm}`:""),a=v(()=>e.project.url||r.value),d=v(()=>[{url:a.value,icon:"i-ri-global-line",color:"#6eb7f9"},{url:e.project.docs,icon:"i-ri-book-line",color:"#443ed1"},{url:r.value,icon:"i-ri-github-line",color:"black"},{url:_.value,icon:"i-ri-npmjs-line",color:"red"}]);return(o,c)=>{const i=D;return t(),n("div",{ref_key:"cardRef",ref:l,flex:"~ col center",class:"m-2 w-90 transform rounded shadow-md grayscale-30",bg:"opacity-80 gradient-to-br",p:"x-2 b-12",hover:"shadow-lg grayscale-0",style:w(u.value)},[o.project.emoji?(t(),n("div",E,j(o.project.emoji),1)):m("v-if",!0),s("a",{href:a.value,target:"_blank",class:"text-unset"},[s("h2",Q,j(o.project.name||"忘记叫啥了"),1)],8,J),s("small",{class:"block",p:"2",text:"center",innerHTML:o.project.desc||"说点什么好呢"},null,8,W),s("div",q,[(t(!0),n(p,null,k(d.value,y=>(t(),n(p,{key:y.icon},[y.url?(t(),b(i,{key:0,item:y},null,8,["item"])):m("v-if",!0)],64))),128))])],4)}}}),G={class:"w-full flex justify-center",text:"xl",font:"black",m:"b-2 t-4"},K=h({__name:"YunProjectCollection",props:{title:{},projects:{}},setup(f){return(e,l)=>{const u=A;return t(),n(p,null,[s("div",G,j(e.title),1),(t(!0),n(p,null,k(e.projects,(r,_)=>(t(),b(u,{key:_,project:r,i:_},null,8,["project","i"]))),128))],64)}}}),O=h({__name:"YunProjectToggleButton",props:{active:{type:Boolean}},setup(f){return(e,l)=>(t(),n("button",{class:C(["bg-white-90 m-2 inline-flex items-center justify-center rounded px-2 gap-2 h-8",{"bg-blue-500 text-white":e.active,"hover:bg-$va-c-bg-soft":!e.active}])},[S(e.$slots,"default")],2))}}),X={flex:"~ col center"},Z={class:"mb-3 text-2xl"},ee={flex:"~ wrap",justify:"center"},te={class:"inline-flex"},oe={class:"inline-flex"},ne={flex:"~ wrap",justify:"center"},re=h({__name:"YunProjects",setup(f){const e=L(),{t:l}=T(),u=I(e.value.projects),r=Y("all");return(_,a)=>{const d=O,o=K;return t(),n("div",X,[s("h2",Z,j($(e).title||$(l)("title.projects")),1),s("div",ee,[g(d,{active:r.value==="all",onClick:a[0]||(a[0]=c=>r.value="all")},{default:x(()=>a[1]||(a[1]=[R(" 全部 ")])),_:1},8,["active"]),(t(!0),n(p,null,k(u,(c,i)=>(t(),b(d,{key:i,active:i===r.value,onClick:y=>r.value=i},{default:x(()=>[s("span",te,j(c.emoji),1),s("span",oe,j(c.title),1)]),_:2},1032,["active","onClick"]))),128))]),s("div",ne,[(t(!0),n(p,null,k(u,(c,i)=>(t(),n(p,{key:i},[r.value==="all"||r.value===i?(t(),b(o,{key:0,title:c.title,projects:u[i].collection},null,8,["title","projects"])):m("v-if",!0)],64))),128))])])}}}),se={flex:"~ col"},pe=h({__name:"projects",setup(f){const e=V(),l=L();return(u,r)=>{const _=re,a=z,d=N,o=F,c=H;return t(),n(p,null,[g(o,null,{default:x(()=>[s("div",se,[g(_),m(" <YunLayoutLeft /> "),m(" <RouterView /> "),m(" <YunLayoutRight /> "),g(a,{class:"mt-4"}),$(e).comment.enable&&$(l).comment!==!1?(t(),b(d,{key:0,class:"max-w-4xl m-auto"})):m("v-if",!0)])]),_:1}),g(c)],64)}}});export{pe as default};

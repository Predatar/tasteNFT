"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[819],{4183:function(e,t,a){a.d(t,{Z:function(){return T}});var r=a(7294),n=a(6401),l=a(1017),s=a(1972),c=a(8701),m=a(1570),i=a(818),o=a(9702),u=a(8242),E=a(2565),d=a(3327),p=a(4715),v=a(2613),N=a(9128),f=a.p+"assets/user5.jpg",g=a.p+"assets/user6.jpg",k=a.p+"assets/user7.jpg",W=a.p+"assets/user8.jpg",T=()=>r.createElement("div",{className:"v7rnQsQDqSZ6c8z6ytTm"},r.createElement(n.Z,{artWork:l,userImg:d}),r.createElement(n.Z,{artWork:s,userImg:p}),r.createElement(n.Z,{artWork:c,userImg:v}),r.createElement(n.Z,{artWork:m,userImg:N}),r.createElement(n.Z,{artWork:i,userImg:f}),r.createElement(n.Z,{artWork:o,userImg:g}),r.createElement(n.Z,{artWork:u,userImg:k}),r.createElement(n.Z,{artWork:E,userImg:W}))},6401:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),n={userInfo:"VAeyGhx5ximXt5oFq1tu",userInfoImg:"Qq4G_QXYOrzbDMDundTy",userInfoWrapper:"KdnOMyxG73xIPbfkRKZ5",userInfoName:"FPA7hKIPhbB77nlH8TTJ",userInfoTag:"WdOmMD_CuE_aQUddSRQA",artWork:"bx1iXy8lEjKL8xEJDVR_",artWorkImg:"zYpF6O3sd5tO5c6UFMQj",artWorkWrapper:"JeAM4tnVN4bBWVV0FhEH",artWorkName:"ZH__Lfu9Int_2DiRheu0",artWorkContainer:"I1VZsSYK5GilvQfpzh2l",artWorkDescr:"uo4N6lVOp6bYMgdNN5DE",artWorkTimer:"ytcXkgZNPTUZ_ayp8t3N",artWorkSold:"eymJG7ej_MqUyTuYUpgt"},l=a(3727),s=a(9264);let c=e=>r.createElement("div",{className:n.userInfo},r.createElement("div",{className:n.userInfoImg},r.createElement("img",{src:e.userImg,alt:"user"})),r.createElement("div",{className:n.userInfoWrapper},r.createElement("div",{className:n.userInfoName},"User Name"),r.createElement(l.rU,{to:"/creatorPage",className:n.userInfoTag},"@username")));var m=e=>{let[t,a]=(0,r.useState)("");(0,r.useEffect)(()=>{setInterval(()=>{m()},1e3)},[]);let m=()=>{let e="";if(31==new Date().getDate()){let t=1;e=`2023-08-0${++t}T12:00:00`}else e=new Date().getDate()+1>9?`2023-08-${new Date().getDate()+1}T12:00:00`:`2023-08-0${new Date().getDate()+1}T12:00:00`;let t=new Date(e),r=new Date().getTime(),n=t-r;n<=0?a("Time's up!"):a(`${Math.floor(n%864e5/36e5)}h ${Math.floor(n%36e5/6e4)}m ${Math.floor(n%6e4/1e3)}s`)};return r.createElement(l.rU,{to:"/artWorkPage"},r.createElement("div",{className:n.artWork},r.createElement(c,{userImg:e.userImg}),r.createElement("div",{className:n.artWorkImg},r.createElement("img",{src:e.artWork,alt:"artWork"})),r.createElement("div",{className:n.artWorkWrapper},r.createElement("div",{className:n.artWorkName},"WFH - art name"),r.createElement("div",{className:n.artWorkContainer},r.createElement("div",{className:n.artWorkDescr},"Sold for:"),r.createElement("div",{className:n.artWorkSold},r.createElement("img",{src:s,alt:"miniLogo"}),"1,5M")),r.createElement("div",{className:n.artWorkContainer},r.createElement("div",{className:n.artWorkDescr},"Ending in:"),r.createElement("div",{className:n.artWorkTimer},t)))))}},9201:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var r=a(7294),n=a(3935),l=a(3727),s=a(4593),c=a(166),m={info:"i8Uo5gR6VlhNiivN_5Rs",divider:"adslFGXchowOhVY2i6IA",bid:"wXWJ3CzTmDWHsDu3NkqQ",bidTitle:"fRFXaEpl6Y66BepdbY2v",bidPrice:"vf50vsoqOdLLiiGKabbg",countFirst:"oVqmbZDs2KwBUz5xuyIC",countSecond:"NVsaq6NDv_eGPDdH3xyu",time:"dMlWQlF4uip8cNGkD3VN",timeTitle:"KYdlycq8RJyEk8Gk4F_p",timeTime:"rR_8LRwWMsWDoEuWTEr9",btn:"PsKDECwHTMM6dctOsb9x"},i=a(9264);let o=e=>{let{hour:t,minute:a,second:n}=e;return r.createElement("div",{className:m.timeTime},t,r.createElement("span",null," h")," ",a,r.createElement("span",null," m")," ",n,r.createElement("span",null," s"))};var u=e=>{let[t,a]=(0,r.useState)(""),[n,l]=(0,r.useState)(),[s,u]=(0,r.useState)(),[E,d]=(0,r.useState)();(0,r.useEffect)(()=>{setInterval(()=>{p()},1e3)},[]);let p=()=>{let e="";if(31==new Date().getDate()){let t=1;e=`2023-08-0${++t}T12:00:00`}else e=new Date().getDate()+1>9?`2023-08-${new Date().getDate()+1}T12:00:00`:`2023-08-0${new Date().getDate()+1}T12:00:00`;let t=new Date(e),r=new Date().getTime(),n=t-r;n<=0?a("Time's up!"):(l(Math.floor(n%864e5/36e5)),u(Math.floor(n%36e5/6e4)),d(Math.floor(n%6e4/1e3)))};return r.createElement("div",{className:m.info},r.createElement("div",{className:m.bid},r.createElement("div",{className:m.bidTitle},"Current Bid:"),r.createElement("div",{className:m.bidPrice},r.createElement("img",{src:i,alt:"miniLogo"}),r.createElement("div",{className:m.countFirst},"1,5M"),r.createElement("div",{className:m.countSecond},"(1308.54$)"))),r.createElement("div",{className:m.divider}),r.createElement("div",{className:m.time},r.createElement("div",{className:m.timeTitle},"Auction ending in:"),r.createElement("div",{className:m.timeTime},t||r.createElement(o,{hour:n,minute:s,second:E}))),r.createElement("div",{className:m.divider}),r.createElement("div",{className:m.btn,onClick:e.onClick},r.createElement(c.Z,{text:"Place a bid"})))},E={row:"pkUKR_uBp9sckVdfsDSw",container:"Te5UIhWqOcadTiynByHJ",img:"CDcHezzT1VdFQbMxDgOg",info:"FErCPA1bHCq6hnZOK6yw",text:"bUx9DcucdIopv2OzPV7n",date:"hOd24kEiA_5FJcDWrOqE",detail:"lcK1DZeub5VI4pTWxyBA",cost:"hxVnNWYurqZcHGsKDwKZ",externalLink:"SmPMp9rv2Ydh6DIaYmTZ"},d=a.p+"assets/user10.png",p=()=>r.createElement("div",{className:E.row},r.createElement("div",{className:E.container},r.createElement("div",{className:E.img},r.createElement("img",{src:d,alt:"userImg"})),r.createElement("div",{className:E.info},r.createElement("div",{className:E.text},"Bid placed by 0x6FC0...14A4"),r.createElement("div",{className:E.date},"May 19, 2021 at 2:27pm"))),r.createElement("div",{className:E.container},r.createElement("div",{className:E.detail},r.createElement("img",{src:i,alt:"miniLogo"}),r.createElement("div",{className:E.cost},"1,5M ",r.createElement("span",null,"(1308.54$)")),r.createElement("div",{className:E.externalLink},r.createElement("span",{className:"icon-external-link"}))))),v=()=>{let[e,t]=(0,r.useState)(),[a,n]=(0,r.useState)();return(0,r.useEffect)(()=>{t(443/13)},[]),r.createElement("div",{className:"b3wI0A2AmLuwUnbxLQCA"},r.createElement("div",{className:"WPZul2FH7cVJ6zOBBgqr",onScroll:t=>{let a=t.target.scrollHeight-t.target.offsetHeight,r=100-e/t.target.offsetHeight*100,l=t.target.scrollTop/a*100;n(Math.min(l,r))}},r.createElement(p,null),r.createElement(p,null),r.createElement(p,null),r.createElement(p,null),r.createElement(p,null),r.createElement(p,null),r.createElement(p,null),r.createElement(p,null),r.createElement(p,null),r.createElement(p,null),r.createElement(p,null),r.createElement(p,null),r.createElement(p,null)),r.createElement("div",{className:"INsghkpbIpAaTAJwo_M7",style:{height:`${e}px`,top:`${a}%`}}))},N=a(4183),f=a(2034),g=a.n(f),k={modal:"n4GZSwKNvXrvpEXQbEph",modalActive:"uuaDffIJjmaJxsbyTsce",title:"KbgAT4mlLwFlMKMc3zOI",close:"Z3Y92EllSnszOEFThi1E",text:"hevVbHHfv_7Vq16Dw2oU",wrapper:"ymxAexQxQGRvwh5PheHd",inputWrapper:"zT1XN1e1EneYHH2Cv7uh",input:"lC4SokXLbvX1xE8o_Fql",info:"n_oTZp4NGXLeBLAhbtY5",cost:"Pm_LdDKlZDS8Fw4GRLqi",btn:"KZJNVyho9jxhWQSO0scT"},W=e=>{let{state:t,onClick:a}=e,[n,l]=(0,r.useState)(0);return(0,r.useEffect)(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[t]),r.createElement("div",{className:k.modal+" "+(t?k.modalActive:"")},r.createElement("div",{className:k.close,onClick:a},r.createElement("span",{className:"icon-close"})),r.createElement("div",{className:k.title},"Place a bid"),r.createElement("div",{className:k.text},"Min.sum"),r.createElement("div",{className:k.wrapper},r.createElement("div",{className:k.inputWrapper},r.createElement(g(),{options:{numeral:!0,delimiter:""},className:k.input,onInput:e=>{let{target:t}=e;l((130854e-9*t.value).toFixed(2))}}),r.createElement("div",{className:k.info},"TASTE")),r.createElement("div",{className:k.cost},"(",n,"$)")),r.createElement("div",{className:k.btn},r.createElement(c.Z,{text:"Place"})))},T={container:"PEn2SXkKwBcyvSOADA3G",img:"gxamV73XtwGYDkLeKFn5",info:"YeJMYd067bTulkP0rMpR",infoWrapper:"OftFDslorrv_neFR9NVG",userInfo:"TvBEJ4ne85wiayjWv5xA",userInfoImg:"rn_Ai6Fw4yVTDYaSBgYg",userInfoWrapper:"XiQCnmMw7nCnyJERJMXb",userInfoName:"bt1wmJgxdVxVqAKovnmH",userInfoTag:"uA6KXHgvjPHCzAky4Ctq",title:"YMXnjEYYC2IhMyTAK3pf",copy:"Itq9U3kvFrz0K0DSEv0V",descr:"fkZPoPGO5Jg7Qa2B4sjr",externalLinks:"xLSkHrlY89gfisB5nhZM",externalLink:"zf46lecHai2zV9on07dF",titleSecond:"dywWOicx4M3Gb3jzvHZ3",featureWorks:"zEIRXM2KXSlkl_I7cVHp",featureWorksTitle:"KrH3qsq7811HARXlyl4z"},h=a.p+"assets/artWorkBig.jpg",I=a(2127),w=()=>{let[e,t]=(0,r.useState)(!1);return r.createElement("div",{className:T.container},r.createElement(s.q,null,r.createElement("title",null,"Artwork page - TasteNFT")),r.createElement("div",{className:T.img},r.createElement("img",{src:h,alt:"artWork"}),r.createElement(u,{onClick:()=>{e||t(!e)}})),r.createElement("div",{className:T.info},r.createElement("div",{className:T.infoWrapper},r.createElement("div",{className:T.userInfo},r.createElement("div",{className:T.userInfoImg},r.createElement("img",{src:I,alt:"img"})),r.createElement("div",{className:T.userInfoWrapper},r.createElement("div",{className:T.userInfoName},"User Name"),r.createElement(l.rU,{to:"/creatorPage",className:T.userInfoTag},"@username"))),r.createElement("div",{className:T.title},"WFH - art name"),r.createElement("div",{className:T.copy},"Сopy: ",r.createElement("span",null,"2 of 10")),r.createElement("div",{className:T.descr},r.createElement("span",null,"Description:"),' The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站). The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).'),r.createElement("div",{className:T.externalLinks},r.createElement("div",{className:T.externalLink},r.createElement("span",{className:"icon-external-link"})),r.createElement("div",{className:T.externalLink},r.createElement("span",{className:"icon-share"})),r.createElement("div",{className:T.externalLink},r.createElement("span",{className:"icon-menu-vertical"})))),r.createElement("div",{className:T.infoWrapper},r.createElement("div",{className:T.titleSecond},"Activity"),r.createElement(v,null))),r.createElement("div",{className:T.featureWorks},r.createElement("div",{className:T.featureWorksTitle},"Feature works"),r.createElement("div",{className:T.featureWrapper},r.createElement(N.Z,null))),(0,n.createPortal)(r.createElement(W,{state:e,onClick:()=>{e&&t(!e)}}),document.body))}},1017:function(e,t,a){e.exports=a.p+"assets/artWork1.jpg"},1972:function(e,t,a){e.exports=a.p+"assets/artWork2.jpg"},8701:function(e,t,a){e.exports=a.p+"assets/artWork3.jpg"},1570:function(e,t,a){e.exports=a.p+"assets/artWork4.jpg"},818:function(e,t,a){e.exports=a.p+"assets/artWork5.jpg"},9702:function(e,t,a){e.exports=a.p+"assets/artWork6.jpg"},8242:function(e,t,a){e.exports=a.p+"assets/artWork7.jpg"},2565:function(e,t,a){e.exports=a.p+"assets/artWork8.jpg"},3327:function(e,t,a){e.exports=a.p+"assets/user1.jpg"},4715:function(e,t,a){e.exports=a.p+"assets/user2.jpg"},2613:function(e,t,a){e.exports=a.p+"assets/user3.jpg"},9128:function(e,t,a){e.exports=a.p+"assets/user4.jpg"}}]);
"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[667],{6401:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),s={userInfo:"VAeyGhx5ximXt5oFq1tu",userInfoImg:"Qq4G_QXYOrzbDMDundTy",userInfoWrapper:"KdnOMyxG73xIPbfkRKZ5",userInfoName:"FPA7hKIPhbB77nlH8TTJ",userInfoTag:"WdOmMD_CuE_aQUddSRQA",artWork:"bx1iXy8lEjKL8xEJDVR_",artWorkImg:"zYpF6O3sd5tO5c6UFMQj",artWorkWrapper:"JeAM4tnVN4bBWVV0FhEH",artWorkName:"ZH__Lfu9Int_2DiRheu0",artWorkContainer:"I1VZsSYK5GilvQfpzh2l",artWorkDescr:"uo4N6lVOp6bYMgdNN5DE",artWorkTimer:"ytcXkgZNPTUZ_ayp8t3N",artWorkSold:"eymJG7ej_MqUyTuYUpgt"},l=a(3727),n=a(9264);let c=e=>r.createElement("div",{className:s.userInfo},r.createElement("div",{className:s.userInfoImg},r.createElement("img",{src:e.userImg,alt:"user"})),r.createElement("div",{className:s.userInfoWrapper},r.createElement("div",{className:s.userInfoName},"User Name"),r.createElement(l.rU,{to:"/creatorPage",className:s.userInfoTag},"@username")));var m=e=>{let[t,a]=(0,r.useState)("");(0,r.useEffect)(()=>{setInterval(()=>{m()},1e3)},[]);let m=()=>{let e="";if(31==new Date().getDate()){let t=1;e=`2023-08-0${++t}T12:00:00`}else e=new Date().getDate()+1>9?`2023-08-${new Date().getDate()+1}T12:00:00`:`2023-08-0${new Date().getDate()+1}T12:00:00`;let t=new Date(e),r=new Date().getTime(),s=t-r;s<=0?a("Time's up!"):a(`${Math.floor(s%864e5/36e5)}h ${Math.floor(s%36e5/6e4)}m ${Math.floor(s%6e4/1e3)}s`)};return r.createElement(l.rU,{to:"/artWorkPage"},r.createElement("div",{className:s.artWork},r.createElement(c,{userImg:e.userImg}),r.createElement("div",{className:s.artWorkImg},r.createElement("img",{src:e.artWork,alt:"artWork"})),r.createElement("div",{className:s.artWorkWrapper},r.createElement("div",{className:s.artWorkName},"WFH - art name"),r.createElement("div",{className:s.artWorkContainer},r.createElement("div",{className:s.artWorkDescr},"Sold for:"),r.createElement("div",{className:s.artWorkSold},r.createElement("img",{src:n,alt:"miniLogo"}),"1,5M")),r.createElement("div",{className:s.artWorkContainer},r.createElement("div",{className:s.artWorkDescr},"Ending in:"),r.createElement("div",{className:s.artWorkTimer},t)))))}},516:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),s=a(3727),l=a(2127),n=()=>r.createElement("div",{className:"z6ZNnlU4lfgM5022Py4z"},r.createElement("div",{className:"DP63Lf18zcYPv7Zo8yua"},r.createElement("img",{src:l,alt:"user"})),r.createElement("div",{className:"xFwv5VzdQ4zXYxIUMw0Z"},"User Name"),r.createElement(s.rU,{to:"/creatorPage",className:"mMDtnD0GtFa0lHTNiwKr"},"@username"),r.createElement("div",{className:"Y3lZ5hNiLDDm3LY0Flnc"},"24 sales on 32ETH")),c=a(6869),m=a(7080),o={featuredCreators:"kJXtfxfzSGn5FUsR9UHQ",featuredCreatorsFirst:"jOstZ3Kf76tq9kgNpAML",featuredCreatorsSecond:"Ab6IXqCSCAgNHFnCHR4w",titleFirst:"VxCNMN6nPrnzfg8Pr0sp",titleSecond:"bEDl0vblE1OsuJAmNS15",slider:"a8UmQKed8cx_tnWpecZ8",slide:"I6k44sB6PudmP_EmPnwH"},i=e=>r.createElement("div",{className:o.featuredCreators},r.createElement("div",{className:e.mt?o.featuredCreatorsFirst:o.featuredCreatorsSecond},r.createElement("div",{className:e.mt?o.titleFirst:o.titleSecond},"Featured creators"),r.createElement(c.tq,{slidesPerView:"auto",modules:[m.LW],scrollbar:{draggable:!0},spaceBetween:16,className:o.slider,grabCursor:!0},r.createElement(c.o5,{className:o.slide},r.createElement(n,null)),r.createElement(c.o5,{className:o.slide},r.createElement(n,null)),r.createElement(c.o5,{className:o.slide},r.createElement(n,null)),r.createElement(c.o5,{className:o.slide},r.createElement(n,null)),r.createElement(c.o5,{className:o.slide},r.createElement(n,null)),r.createElement(c.o5,{className:o.slide},r.createElement(n,null)),r.createElement(c.o5,{className:o.slide},r.createElement(n,null)))))},7834:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),s={select:"OsZbeQAx2x6poCgEyZrY",selected:"M0bYXPVqD61wCkZErBxE",selectedActive:"lCpdeoLmaFHqxnCdkspr",selectList:"NGGkvL4s6hgp3PkHHv12",selectListActive:"LuxqzhsYe0jJTFEEzv8L",selectItem:"NmrLdZ_WjMyUnBDCyrQB"},l=e=>{let{items:t}=e,[a,l]=(0,r.useState)(!1),[n,c]=(0,r.useState)(t[0]);return r.createElement("div",{className:s.select,onClick:()=>{l(!a)}},r.createElement("div",{className:a?s.selectedActive:s.selected},n," ",r.createElement("span",{className:"icon-drop-down"})),r.createElement("div",{className:a?s.selectListActive:s.selectList,onClick:e=>{let{target:t}=e;c(t.innerHTML)}},t.map((e,t)=>r.createElement("div",{className:s.selectItem,key:t},e))))}},1667:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var r=a(7294),s=a(4593),l=a(7834),n=a(6401),c=a(516),m=a(1017),o=a(1972),i=a(8701),u=a(1570),d=e=>{let{text:t}=e;return r.createElement("div",{className:"KnGwUrFadS5tAbubaGZy"},r.createElement("span",null,t))},E=a(3327),N=a(4715),p=a(2613),f=a(9128),g=()=>r.createElement(r.Fragment,null,r.createElement(s.q,null,r.createElement("title",null,"Search - TasteNFT")),r.createElement("div",{className:"t8haTqEAoAkk8NNxThBP"},r.createElement("div",{className:"fsSFIYo_klxJqLjKuoVO"},r.createElement(l.Z,{items:["Recently added","Latest"]}),r.createElement(l.Z,{items:["Auctions","Sale"]})),r.createElement("div",{className:"RE7g1xo_wEdEBKo3giVw"},r.createElement(n.Z,{artWork:m,userImg:E}),r.createElement(n.Z,{artWork:o,userImg:N}),r.createElement(n.Z,{artWork:i,userImg:p}),r.createElement(n.Z,{artWork:u,userImg:f})),r.createElement(d,{text:"Show all"})),r.createElement(c.Z,{mt:!1}))},1017:function(e,t,a){e.exports=a.p+"assets/artWork1.jpg"},1972:function(e,t,a){e.exports=a.p+"assets/artWork2.jpg"},8701:function(e,t,a){e.exports=a.p+"assets/artWork3.jpg"},1570:function(e,t,a){e.exports=a.p+"assets/artWork4.jpg"},3327:function(e,t,a){e.exports=a.p+"assets/user1.jpg"},4715:function(e,t,a){e.exports=a.p+"assets/user2.jpg"},2613:function(e,t,a){e.exports=a.p+"assets/user3.jpg"},9128:function(e,t,a){e.exports=a.p+"assets/user4.jpg"}}]);
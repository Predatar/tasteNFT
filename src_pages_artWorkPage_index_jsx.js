"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["src_pages_artWorkPage_index_jsx"],{"./src/components/activityRowGroup/index.jsx":(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n),s=r(/*! ../activityRow */"./src/components/activityRow/index.jsx"),a=r(/*! ./index.module.scss */"./src/components/activityRowGroup/index.module.scss");let o=()=>{let[e,t]=(0,n.useState)(),[r,o]=(0,n.useState)();return(0,n.useEffect)(()=>{t(443/13)},[]),A().createElement("div",{className:a.default.container},A().createElement("div",{className:a.default.group,onScroll:t=>{let r=t.target.scrollHeight-t.target.offsetHeight,n=100-e/t.target.offsetHeight*100,A=t.target.scrollTop/r*100;o(Math.min(A,n))}},A().createElement(s.default,null),A().createElement(s.default,null),A().createElement(s.default,null),A().createElement(s.default,null),A().createElement(s.default,null),A().createElement(s.default,null),A().createElement(s.default,null),A().createElement(s.default,null),A().createElement(s.default,null),A().createElement(s.default,null),A().createElement(s.default,null),A().createElement(s.default,null),A().createElement(s.default,null)),A().createElement("div",{className:a.default.scroll,style:{height:`${e}px`,top:`${r}%`}}))}},"./src/components/activityRow/index.jsx":(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n),s=r(/*! ./index.module.scss */"./src/components/activityRow/index.module.scss"),a=r(/*! ../../img/user/user10.png */"./src/img/user/user10.png"),o=r(/*! ../../img/miniLogo.svg */"./src/img/miniLogo.svg");let l=()=>A().createElement("div",{className:s.default.row},A().createElement("div",{className:s.default.container},A().createElement("div",{className:s.default.img},A().createElement("img",{src:a,alt:"userImg"})),A().createElement("div",{className:s.default.info},A().createElement("div",{className:s.default.text},"Bid placed by 0x6FC0...14A4"),A().createElement("div",{className:s.default.date},"May 19, 2021 at 2:27pm"))),A().createElement("div",{className:s.default.container},A().createElement("div",{className:s.default.detail},A().createElement("img",{src:o,alt:"miniLogo"}),A().createElement("div",{className:s.default.cost},"1,5M ",A().createElement("span",null,"(1308.54$)")),A().createElement("div",{className:s.default.externalLink},A().createElement("span",{className:"icon-external-link"})))))},"./src/components/artWorkGroup/index.jsx":(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n),s=r(/*! ../card/artWork/ArtWork */"./src/components/card/artWork/ArtWork.jsx"),a=r(/*! ./index.module.scss */"./src/components/artWorkGroup/index.module.scss"),o=r(/*! ../../img/artWork/artWork1.jpg */"./src/img/artWork/artWork1.jpg"),l=r(/*! ../../img/artWork/artWork2.jpg */"./src/img/artWork/artWork2.jpg"),i=r(/*! ../../img/artWork/artWork3.jpg */"./src/img/artWork/artWork3.jpg"),d=r(/*! ../../img/artWork/artWork4.jpg */"./src/img/artWork/artWork4.jpg"),c=r(/*! ../../img/artWork/artWork5.jpg */"./src/img/artWork/artWork5.jpg"),m=r(/*! ../../img/artWork/artWork6.jpg */"./src/img/artWork/artWork6.jpg"),p=r(/*! ../../img/artWork/artWork7.jpg */"./src/img/artWork/artWork7.jpg"),u=r(/*! ../../img/artWork/artWork8.jpg */"./src/img/artWork/artWork8.jpg"),f=r(/*! ../../img/user/user1.jpg */"./src/img/user/user1.jpg"),E=r(/*! ../../img/user/user2.jpg */"./src/img/user/user2.jpg"),g=r(/*! ../../img/user/user3.jpg */"./src/img/user/user3.jpg"),x=r(/*! ../../img/user/user4.jpg */"./src/img/user/user4.jpg"),C=r(/*! ../../img/user/user5.jpg */"./src/img/user/user5.jpg"),y=r(/*! ../../img/user/user6.jpg */"./src/img/user/user6.jpg"),w=r(/*! ../../img/user/user7.jpg */"./src/img/user/user7.jpg"),h=r(/*! ../../img/user/user8.jpg */"./src/img/user/user8.jpg");let b=()=>A().createElement("div",{className:a.default.artWorkSections},A().createElement(s.default,{artWork:o,userImg:f}),A().createElement(s.default,{artWork:l,userImg:E}),A().createElement(s.default,{artWork:i,userImg:g}),A().createElement(s.default,{artWork:d,userImg:x}),A().createElement(s.default,{artWork:c,userImg:C}),A().createElement(s.default,{artWork:m,userImg:y}),A().createElement(s.default,{artWork:p,userImg:w}),A().createElement(s.default,{artWork:u,userImg:h}))},"./src/components/modal/placeBid/index.jsx":(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n),s=r(/*! cleave.js/react */"./node_modules/cleave.js/react.js"),a=r.n(s),o=r(/*! ../../button/btn/Btn */"./src/components/button/btn/Btn.jsx"),l=r(/*! ./index.module.scss */"./src/components/modal/placeBid/index.module.scss");let i=e=>{let{state:t,onClick:r}=e,[s,i]=(0,n.useState)(0);return(0,n.useEffect)(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[t]),A().createElement("div",{className:l.default.modal+" "+(t?l.default.modalActive:"")},A().createElement("div",{className:l.default.close,onClick:r},A().createElement("span",{className:"icon-close"})),A().createElement("div",{className:l.default.title},"Place a bid"),A().createElement("div",{className:l.default.text},"Min.sum"),A().createElement("div",{className:l.default.wrapper},A().createElement("div",{className:l.default.inputWrapper},A().createElement(a(),{options:{numeral:!0,delimiter:""},className:l.default.input,onInput:e=>{let{target:t}=e;i((130854e-9*t.value).toFixed(2))}}),A().createElement("div",{className:l.default.info},"TASTE")),A().createElement("div",{className:l.default.cost},"(",s,"$)")),A().createElement("div",{className:l.default.btn},A().createElement(o.default,{text:"Place"})))}},"./src/pages/artWorkPage/index.jsx":(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n),s=r(/*! react-dom */"./node_modules/react-dom/index.js"),a=r(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),o=r(/*! react-helmet */"./node_modules/react-helmet/es/Helmet.js"),l=r(/*! ./infoModal */"./src/pages/artWorkPage/infoModal/index.jsx"),i=r(/*! ../../components/activityRowGroup */"./src/components/activityRowGroup/index.jsx"),d=r(/*! ../../components/artWorkGroup */"./src/components/artWorkGroup/index.jsx"),c=r(/*! ../../components/modal/placeBid */"./src/components/modal/placeBid/index.jsx"),m=r(/*! ./index.module.scss */"./src/pages/artWorkPage/index.module.scss"),p=r(/*! ../../img/artWork/artWorkBig.jpg */"./src/img/artWork/artWorkBig.jpg"),u=r(/*! ../../img/user/user9.png */"./src/img/user/user9.png");let f=()=>{let[e,t]=(0,n.useState)(!1);return A().createElement("div",{className:m.default.container},A().createElement(o.Helmet,null,A().createElement("title",null,"Artwork page - TasteNFT")),A().createElement("div",{className:m.default.img},A().createElement("img",{src:p,alt:"artWork"}),A().createElement(l.default,{onClick:()=>{e||t(!e)}})),A().createElement("div",{className:m.default.info},A().createElement("div",{className:m.default.infoWrapper},A().createElement("div",{className:m.default.userInfo},A().createElement("div",{className:m.default.userInfoImg},A().createElement("img",{src:u,alt:"img"})),A().createElement("div",{className:m.default.userInfoWrapper},A().createElement("div",{className:m.default.userInfoName},"User Name"),A().createElement(a.Link,{to:"/creatorPage",className:m.default.userInfoTag},"@username"))),A().createElement("div",{className:m.default.title},"WFH - art name"),A().createElement("div",{className:m.default.copy},"Сopy: ",A().createElement("span",null,"2 of 10")),A().createElement("div",{className:m.default.descr},A().createElement("span",null,"Description:"),' The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站). The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).'),A().createElement("div",{className:m.default.externalLinks},A().createElement("div",{className:m.default.externalLink},A().createElement("span",{className:"icon-external-link"})),A().createElement("div",{className:m.default.externalLink},A().createElement("span",{className:"icon-share"})),A().createElement("div",{className:m.default.externalLink},A().createElement("span",{className:"icon-menu-vertical"})))),A().createElement("div",{className:m.default.infoWrapper},A().createElement("div",{className:m.default.titleSecond},"Activity"),A().createElement(i.default,null))),A().createElement("div",{className:m.default.featureWorks},A().createElement("div",{className:m.default.featureWorksTitle},"Feature works"),A().createElement("div",{className:m.default.featureWrapper},A().createElement(d.default,null))),(0,s.createPortal)(A().createElement(c.default,{state:e,onClick:()=>{e&&t(!e)}}),document.body))}},"./src/pages/artWorkPage/infoModal/index.jsx":(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n),s=r(/*! ../../../components/button/btn/Btn */"./src/components/button/btn/Btn.jsx"),a=r(/*! ./index.module.scss */"./src/pages/artWorkPage/infoModal/index.module.scss"),o=r(/*! ../../../img/miniLogo.svg */"./src/img/miniLogo.svg");let l=e=>{let{hour:t,minute:r,second:n}=e;return A().createElement("div",{className:a.default.timeTime},t,A().createElement("span",null," h")," ",r,A().createElement("span",null," m")," ",n,A().createElement("span",null," s"))},i=e=>{let[t,r]=(0,n.useState)(""),[i,d]=(0,n.useState)(),[c,m]=(0,n.useState)(),[p,u]=(0,n.useState)();(0,n.useEffect)(()=>{setInterval(()=>{f()},1e3)},[]);let f=()=>{let e="";if(31==new Date().getDate()){let t=1;e=`2023-08-0${++t}T12:00:00`}else e=new Date().getDate()+1>9?`2023-08-${new Date().getDate()+1}T12:00:00`:`2023-08-0${new Date().getDate()+1}T12:00:00`;let t=new Date(e),n=new Date().getTime(),A=t-n;A<=0?r("Time's up!"):(d(Math.floor(A%864e5/36e5)),m(Math.floor(A%36e5/6e4)),u(Math.floor(A%6e4/1e3)))};return A().createElement("div",{className:a.default.info},A().createElement("div",{className:a.default.bid},A().createElement("div",{className:a.default.bidTitle},"Current Bid:"),A().createElement("div",{className:a.default.bidPrice},A().createElement("img",{src:o,alt:"miniLogo"}),A().createElement("div",{className:a.default.countFirst},"1,5M"),A().createElement("div",{className:a.default.countSecond},"(1308.54$)"))),A().createElement("div",{className:a.default.divider}),A().createElement("div",{className:a.default.time},A().createElement("div",{className:a.default.timeTitle},"Auction ending in:"),A().createElement("div",{className:a.default.timeTime},t||A().createElement(l,{hour:i,minute:c,second:p}))),A().createElement("div",{className:a.default.divider}),A().createElement("div",{className:a.default.btn,onClick:e.onClick},A().createElement(s.default,{text:"Place a bid"})))}},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/activityRowGroup/index.module.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),A=r.n(n),s=r(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=r.n(s)()(A());a.push([e.id,`.b3wI0A2AmLuwUnbxLQCA {
  margin-top: 16px;
  position: relative;
}

.WPZul2FH7cVJ6zOBBgqr {
  height: 443px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
}
.WPZul2FH7cVJ6zOBBgqr::-webkit-scrollbar {
  display: none;
}

.INsghkpbIpAaTAJwo_M7 {
  width: 5px;
  height: 50px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 0;
  left: calc(100% + 8px);
  transition: all 0.2s;
}`,"",{version:3,sources:["webpack://./src/components/activityRowGroup/index.module.scss"],names:[],mappings:"AAAA;EACE,gBAAA;EACA,kBAAA;AACF;;AACA;EACE,aAAA;EAEA,aAAA;EACA,sBAAA;EACA,QAAA;EAEA,gBAAA;AAAF;AAEE;EACE,aAAA;AAAJ;;AAGA;EACE,UAAA;EACA,YAAA;EACA,mBAAA;EACA,oCAAA;EACA,kBAAA;EACA,MAAA;EACA,sBAAA;EACA,oBAAA;AAAF",sourcesContent:[".container {\r\n  margin-top: 16px;\r\n  position: relative;\r\n}\r\n.group {\r\n  height: 443px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n\r\n  overflow-y: auto;\r\n\r\n  &::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n}\r\n.scroll {\r\n  width: 5px;\r\n  height: 50px;\r\n  border-radius: 99px;\r\n  background: rgba(255, 255, 255, 0.5);\r\n  position: absolute;\r\n  top: 0;\r\n  left: calc(100% + 8px);\r\n  transition: all 0.2s;\r\n}\r\n"],sourceRoot:""}]),a.locals={container:"b3wI0A2AmLuwUnbxLQCA",group:"WPZul2FH7cVJ6zOBBgqr",scroll:"INsghkpbIpAaTAJwo_M7"};let o=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/activityRow/index.module.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),A=r.n(n),s=r(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=r.n(s)()(A());a.push([e.id,`.pkUKR_uBp9sckVdfsDSw {
  padding: 11px 15px;
  width: 778px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #333940;
}

.Te5UIhWqOcadTiynByHJ {
  display: flex;
  align-items: center;
}

.CDcHezzT1VdFQbMxDgOg {
  border-radius: 8px;
  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);
}

.FErCPA1bHCq6hnZOK6yw {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.bUx9DcucdIopv2OzPV7n {
  color: #fff;
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 700;
}

.hOd24kEiA_5FJcDWrOqE {
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
}

.lcK1DZeub5VI4pTWxyBA {
  width: 182px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.lcK1DZeub5VI4pTWxyBA img {
  width: 19px;
}

.hxVnNWYurqZcHGsKDwKZ {
  margin-left: 6px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  color: #fff;
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}
.hxVnNWYurqZcHGsKDwKZ span {
  margin-left: 3px;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}

.SmPMp9rv2Ydh6DIaYmTZ {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: linear-gradient(270deg, #8743ff 0%, #4136f1 100%);
  box-shadow: 0px 15px 30px 0px rgba(20, 102, 204, 0.16);
  cursor: pointer;
}
.SmPMp9rv2Ydh6DIaYmTZ span {
  color: #fff;
}`,"",{version:3,sources:["webpack://./src/components/activityRow/index.module.scss"],names:[],mappings:"AAAA;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,yBAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;AACF;;AACA;EACE,kBAAA;EACA,sDAAA;AAEF;;AAAA;EACE,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;AAGF;;AADA;EACE,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAIF;;AAFA;EACE,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAKF;;AAHA;EACE,YAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AAMF;AALE;EACE,WAAA;AAOJ;;AAJA;EACE,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAOF;AANE;EACA,gBAAA;EACE,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAQJ;;AALA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,6DAAA;EACA,sDAAA;EACA,eAAA;AAQF;AAPE;EACE,WAAA;AASJ",sourcesContent:[".row {\r\n  padding: 11px 15px;\r\n  width: 778px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border: 1px solid #333940;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.img {\r\n  border-radius: 8px;\r\n  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);\r\n}\r\n.info {\r\n  margin-left: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n}\r\n.text {\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n}\r\n.date {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n}\r\n.detail {\r\n  width: 182px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  img {\r\n    width: 19px;\r\n  }\r\n}\r\n.cost {\r\n  margin-left: 6px;\r\n  margin-right: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  span {\r\n		margin-left: 3px;\r\n    color: rgba(255, 255, 255, 0.5);\r\n    font-family: 'Raleway';\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n  }\r\n}\r\n.externalLink {\r\n  width: 32px;\r\n  height: 32px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 12px;\r\n  background: linear-gradient(270deg, #8743ff 0%, #4136f1 100%);\r\n  box-shadow: 0px 15px 30px 0px rgba(20, 102, 204, 0.16);\r\n  cursor: pointer;\r\n  span {\r\n    color: #fff;\r\n  }\r\n}\r\n"],sourceRoot:""}]),a.locals={row:"pkUKR_uBp9sckVdfsDSw",container:"Te5UIhWqOcadTiynByHJ",img:"CDcHezzT1VdFQbMxDgOg",info:"FErCPA1bHCq6hnZOK6yw",text:"bUx9DcucdIopv2OzPV7n",date:"hOd24kEiA_5FJcDWrOqE",detail:"lcK1DZeub5VI4pTWxyBA",cost:"hxVnNWYurqZcHGsKDwKZ",externalLink:"SmPMp9rv2Ydh6DIaYmTZ"};let o=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/artWorkGroup/index.module.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),A=r.n(n),s=r(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=r.n(s)()(A());a.push([e.id,`.v7rnQsQDqSZ6c8z6ytTm {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}`,"",{version:3,sources:["webpack://./src/components/artWorkGroup/index.module.scss"],names:[],mappings:"AAAA;EACC,gBAAA;EACA,aAAA;EACA,eAAA;EACA,SAAA;AACD",sourcesContent:[".artWorkSections {\r\n	margin-top: 24px;\r\n	display: flex;\r\n	flex-wrap: wrap;\r\n	gap: 16px;\r\n}"],sourceRoot:""}]),a.locals={artWorkSections:"v7rnQsQDqSZ6c8z6ytTm"};let o=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/placeBid/index.module.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),A=r.n(n),s=r(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=r.n(s)()(A());a.push([e.id,`.n4GZSwKNvXrvpEXQbEph {
  padding: 45px 24px 32px;
  width: 653px;
  display: none;
  border-radius: 32px;
  background: #30363d;
  box-shadow: 0px 25px 40px 0px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.uuaDffIJjmaJxsbyTsce {
  display: block;
}

.KbgAT4mlLwFlMKMc3zOI {
  color: #fff;
  text-align: center;
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
}

.Z3Y92EllSnszOEFThi1E {
  position: absolute;
  top: 51px;
  right: 24px;
  cursor: pointer;
}
.Z3Y92EllSnszOEFThi1E span {
  font-size: 16px;
  color: #fff;
  pointer-events: none;
}

.hevVbHHfv_7Vq16Dw2oU {
  margin-top: 24px;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}

.ymxAexQxQGRvwh5PheHd {
  margin-top: 8px;
  display: flex;
  align-items: center;
}

.zT1XN1e1EneYHH2Cv7uh {
  width: 176px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background: #1d2228;
}

.lC4SokXLbvX1xE8o_Fql {
  margin-left: 16px;
  width: 80px;
  background: transparent;
  border: none;
  color: #fff;
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}
.lC4SokXLbvX1xE8o_Fql:focus {
  border: none;
  outline: none;
}

.n_oTZp4NGXLeBLAhbtY5 {
  margin-right: 12px;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}

.Pm_LdDKlZDS8Fw4GRLqi {
  margin-left: 9px;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}

.KZJNVyho9jxhWQSO0scT {
  margin-top: 32px;
  display: flex;
  justify-content: center;
}`,"",{version:3,sources:["webpack://./src/components/modal/placeBid/index.module.scss"],names:[],mappings:"AAAA;EACE,uBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,iDAAA;EACA,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AACF;;AACA;EACE,cAAA;AAEF;;AAAA;EACE,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAGF;;AADA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;AAIF;AAHE;EACE,eAAA;EACA,WAAA;EACA,oBAAA;AAKJ;;AAFA;EACE,gBAAA;EACA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAKF;;AAHA;EACC,eAAA;EACC,aAAA;EACA,mBAAA;AAMF;;AAJA;EACE,YAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,kBAAA;EACA,mBAAA;AAOF;;AALA;EACE,iBAAA;EACA,WAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAQF;AAPE;EACE,YAAA;EACA,aAAA;AASJ;;AANA;EACE,kBAAA;EACA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AASF;;AAPA;EACE,gBAAA;EACA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAUF;;AARA;EACE,gBAAA;EACA,aAAA;EACA,uBAAA;AAWF",sourcesContent:[".modal {\r\n  padding: 45px 24px 32px;\r\n  width: 653px;\r\n  display: none;\r\n  border-radius: 32px;\r\n  background: #30363d;\r\n  box-shadow: 0px 25px 40px 0px rgba(0, 0, 0, 0.05);\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n.modalActive {\r\n  display: block;\r\n}\r\n.title {\r\n  color: #fff;\r\n  text-align: center;\r\n  font-family: 'Raleway';\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n}\r\n.close {\r\n  position: absolute;\r\n  top: 51px;\r\n  right: 24px;\r\n  cursor: pointer;\r\n  span {\r\n    font-size: 16px;\r\n    color: #fff;\r\n    pointer-events: none;\r\n  }\r\n}\r\n.text {\r\n  margin-top: 24px;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n.wrapper {\r\n	margin-top: 8px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.inputWrapper {\r\n  width: 176px;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-radius: 8px;\r\n  background: #1d2228;\r\n}\r\n.input {\r\n  margin-left: 16px;\r\n  width: 80px;\r\n  background: transparent;\r\n  border: none;\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  &:focus {\r\n    border: none;\r\n    outline: none;\r\n  }\r\n}\r\n.info {\r\n  margin-right: 12px;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n.cost {\r\n  margin-left: 9px;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n.btn {\r\n  margin-top: 32px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n"],sourceRoot:""}]),a.locals={modal:"n4GZSwKNvXrvpEXQbEph",modalActive:"uuaDffIJjmaJxsbyTsce",title:"KbgAT4mlLwFlMKMc3zOI",close:"Z3Y92EllSnszOEFThi1E",text:"hevVbHHfv_7Vq16Dw2oU",wrapper:"ymxAexQxQGRvwh5PheHd",inputWrapper:"zT1XN1e1EneYHH2Cv7uh",input:"lC4SokXLbvX1xE8o_Fql",info:"n_oTZp4NGXLeBLAhbtY5",cost:"Pm_LdDKlZDS8Fw4GRLqi",btn:"KZJNVyho9jxhWQSO0scT"};let o=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/artWorkPage/index.module.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),A=r.n(n),s=r(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=r.n(s)()(A());a.push([e.id,`.PEn2SXkKwBcyvSOADA3G {
  margin: 40px auto 0;
  width: min(100%, 1318px);
}

.gxamV73XtwGYDkLeKFn5 {
  position: relative;
}

.YeJMYd067bTulkP0rMpR {
  margin-top: 62px;
  display: flex;
  gap: 23px;
}

.OftFDslorrv_neFR9NVG:first-child {
  width: 517px;
}

.TvBEJ4ne85wiayjWv5xA {
  display: flex;
  align-items: center;
}

.rn_Ai6Fw4yVTDYaSBgYg {
  width: 49px;
  height: 49px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);
}

.XiQCnmMw7nCnyJERJMXb {
  margin-left: 12px;
}

.bt1wmJgxdVxVqAKovnmH {
  color: #fff;
  font-family: "Raleway";
  font-size: 18px;
  font-weight: 700;
}

.uA6KXHgvjPHCzAky4Ctq {
  margin-top: 4px;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.YMXnjEYYC2IhMyTAK3pf {
  margin-top: 20px;
  color: #fff;
  font-family: "Raleway";
  font-size: 32px;
  font-weight: 700;
}

.Itq9U3kvFrz0K0DSEv0V {
  margin-top: 12px;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
}
.Itq9U3kvFrz0K0DSEv0V span {
  color: #fff;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
}

.fkZPoPGO5Jg7Qa2B4sjr {
  margin-top: 10px;
  color: #fff;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
}
.fkZPoPGO5Jg7Qa2B4sjr span {
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
}

.xLSkHrlY89gfisB5nhZM {
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.zf46lecHai2zV9on07dF {
  padding: 9px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s;
  cursor: pointer;
}
.zf46lecHai2zV9on07dF:hover {
  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);
}
.zf46lecHai2zV9on07dF span {
  color: #fff;
}

.dywWOicx4M3Gb3jzvHZ3 {
  margin-top: 5px;
  color: #fff;
  font-family: "Raleway";
  font-size: 18px;
  font-weight: 700;
}

.zEIRXM2KXSlkl_I7cVHp {
  margin-top: 99px;
}

.KrH3qsq7811HARXlyl4z {
  color: #fff;
  font-family: "Raleway";
  font-size: 18px;
  font-weight: 700;
}`,"",{version:3,sources:["webpack://./src/pages/artWorkPage/index.module.scss"],names:[],mappings:"AAAA;EACE,mBAAA;EACA,wBAAA;AACF;;AACA;EACE,kBAAA;AAEF;;AAAA;EACE,gBAAA;EACA,aAAA;EACA,SAAA;AAGF;;AAAE;EACE,YAAA;AAGJ;;AACA;EACE,aAAA;EACA,mBAAA;AAEF;;AAAA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,sDAAA;AAGF;;AADA;EACE,iBAAA;AAIF;;AAFA;EACE,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAKF;;AAHA;EACE,eAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EAEA,6DAAA;EACA,qBAAA;EACA,6BAAA;EACA,oCAAA;AAKF;;AAHA;EACE,gBAAA;EACA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAMF;;AAJA;EACE,gBAAA;EACA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAOF;AANE;EACE,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAQJ;;AALA;EACE,gBAAA;EACA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAQF;AAPE;EACE,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AASJ;;AANA;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,QAAA;AASF;;AAPA;EACE,YAAA;EACA,mBAAA;EACA,0CAAA;EAEA,oBAAA;EACA,eAAA;AASF;AAPE;EACE,sDAAA;AASJ;AAPE;EACE,WAAA;AASJ;;AALA;EACE,eAAA;EACA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAQF;;AALA;EACE,gBAAA;AAQF;;AANA;EACE,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AASF",sourcesContent:[".container {\r\n  margin: 40px auto 0;\r\n  width: min(100%, 1318px);\r\n}\r\n.img {\r\n  position: relative;\r\n}\r\n.info {\r\n  margin-top: 62px;\r\n  display: flex;\r\n  gap: 23px;\r\n}\r\n.infoWrapper {\r\n  &:first-child {\r\n    width: 517px;\r\n  }\r\n}\r\n\r\n.userInfo {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.userInfoImg {\r\n  width: 49px;\r\n  height: 49px;\r\n  display: flex;\r\n  align-items: center;\r\n  border-radius: 12px;\r\n  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);\r\n}\r\n.userInfoWrapper {\r\n  margin-left: 12px;\r\n}\r\n.userInfoName {\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n}\r\n.userInfoTag {\r\n  margin-top: 4px;\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n\r\n  background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n.title {\r\n  margin-top: 20px;\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n}\r\n.copy {\r\n  margin-top: 12px;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 18px;\r\n  span {\r\n    color: #fff;\r\n    font-family: 'Raleway';\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 18px;\r\n  }\r\n}\r\n.descr {\r\n  margin-top: 10px;\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 18px;\r\n  span {\r\n    color: rgba(255, 255, 255, 0.5);\r\n    font-family: 'Raleway';\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 18px;\r\n  }\r\n}\r\n.externalLinks {\r\n  margin-top: 15px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n.externalLink {\r\n  padding: 9px;\r\n  border-radius: 12px;\r\n  border: 1px solid rgba(255, 255, 255, 0.1);\r\n\r\n  transition: all 0.2s;\r\n  cursor: pointer;\r\n\r\n  &:hover {\r\n    box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);\r\n  }\r\n  span {\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n.titleSecond {\r\n  margin-top: 5px;\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n}\r\n\r\n.featureWorks {\r\n  margin-top: 99px;\r\n}\r\n.featureWorksTitle {\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n}"],sourceRoot:""}]),a.locals={container:"PEn2SXkKwBcyvSOADA3G",img:"gxamV73XtwGYDkLeKFn5",info:"YeJMYd067bTulkP0rMpR",infoWrapper:"OftFDslorrv_neFR9NVG",userInfo:"TvBEJ4ne85wiayjWv5xA",userInfoImg:"rn_Ai6Fw4yVTDYaSBgYg",userInfoWrapper:"XiQCnmMw7nCnyJERJMXb",userInfoName:"bt1wmJgxdVxVqAKovnmH",userInfoTag:"uA6KXHgvjPHCzAky4Ctq",title:"YMXnjEYYC2IhMyTAK3pf",copy:"Itq9U3kvFrz0K0DSEv0V",descr:"fkZPoPGO5Jg7Qa2B4sjr",externalLinks:"xLSkHrlY89gfisB5nhZM",externalLink:"zf46lecHai2zV9on07dF",titleSecond:"dywWOicx4M3Gb3jzvHZ3",featureWorks:"zEIRXM2KXSlkl_I7cVHp",featureWorksTitle:"KrH3qsq7811HARXlyl4z"};let o=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/artWorkPage/infoModal/index.module.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),A=r.n(n),s=r(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=r.n(s)()(A());a.push([e.id,`.i8Uo5gR6VlhNiivN_5Rs {
  padding: 16px 20px;
  display: flex;
  border-radius: 16px;
  background: #30363d;
  box-shadow: 0px 25px 40px 0px rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 540px;
  left: 50%;
  transform: translateX(-50%);
}

.adslFGXchowOhVY2i6IA {
  width: 3px;
  height: 43px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.15);
}

.wXWJ3CzTmDWHsDu3NkqQ {
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.fRFXaEpl6Y66BepdbY2v {
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 600;
}

.vf50vsoqOdLLiiGKabbg {
  display: flex;
  align-items: center;
}

.oVqmbZDs2KwBUz5xuyIC {
  margin-left: 5px;
  margin-right: 4px;
  color: #fff;
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}

.NVsaq6NDv_eGPDdH3xyu {
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}

.dMlWQlF4uip8cNGkD3VN {
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.KYdlycq8RJyEk8Gk4F_p {
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 600;
}

.rR_8LRwWMsWDoEuWTEr9 {
  color: #fff;
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}
.rR_8LRwWMsWDoEuWTEr9 span {
  color: #fff;
  font-family: "Raleway";
  font-size: 12px;
  font-weight: 600;
}

.PsKDECwHTMM6dctOsb9x {
  margin-left: 20px;
}`,"",{version:3,sources:["webpack://./src/pages/artWorkPage/infoModal/index.module.scss"],names:[],mappings:"AAAA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,iDAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,2BAAA;AACF;;AACA;EACE,UAAA;EACA,YAAA;EACA,mBAAA;EACA,qCAAA;AAEF;;AAAA;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;AAGF;;AADA;EACE,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAIF;;AAFA;EACE,aAAA;EACA,mBAAA;AAKF;;AAHA;EACE,gBAAA;EACA,iBAAA;EAEA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAKF;;AAHA;EACE,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAMF;;AAJA;EACE,cAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;AAOF;;AALA;EACE,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAQF;;AANA;EACE,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AASF;AAPE;EACE,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AASJ;;AANA;EACC,iBAAA;AASD",sourcesContent:[".info {\r\n  padding: 16px 20px;\r\n  display: flex;\r\n  border-radius: 16px;\r\n  background: #30363d;\r\n  box-shadow: 0px 25px 40px 0px rgba(0, 0, 0, 0.05);\r\n  position: absolute;\r\n  top: 540px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n.divider {\r\n  width: 3px;\r\n  height: 43px;\r\n  border-radius: 12px;\r\n  background: rgba(255, 255, 255, 0.15);\r\n}\r\n.bid {\r\n  margin-right: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n}\r\n.bidTitle {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n}\r\n.bidPrice {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.countFirst {\r\n  margin-left: 5px;\r\n  margin-right: 4px;\r\n\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n.countSecond {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n.time {\r\n  margin: 0 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n}\r\n.timeTitle {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n}\r\n.timeTime {\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n\r\n  span {\r\n    color: #fff;\r\n    font-family: 'Raleway';\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n  }\r\n}\r\n.btn {\r\n	margin-left: 20px;\r\n}"],sourceRoot:""}]),a.locals={info:"i8Uo5gR6VlhNiivN_5Rs",divider:"adslFGXchowOhVY2i6IA",bid:"wXWJ3CzTmDWHsDu3NkqQ",bidTitle:"fRFXaEpl6Y66BepdbY2v",bidPrice:"vf50vsoqOdLLiiGKabbg",countFirst:"oVqmbZDs2KwBUz5xuyIC",countSecond:"NVsaq6NDv_eGPDdH3xyu",time:"dMlWQlF4uip8cNGkD3VN",timeTitle:"KYdlycq8RJyEk8Gk4F_p",timeTime:"rR_8LRwWMsWDoEuWTEr9",btn:"PsKDECwHTMM6dctOsb9x"};let o=a},"./src/components/activityRowGroup/index.module.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=r.n(n),s=r(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=r.n(s),o=r(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),l=r.n(o),i=r(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(i),c=r(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=r.n(c),p=r(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=r.n(p),f=r(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/activityRowGroup/index.module.scss"),E={};E.styleTagTransform=u(),E.setAttributes=d(),E.insert=l().bind(null,"head"),E.domAPI=a(),E.insertStyleElement=m(),A()(f.default,E);let g=f.default&&f.default.locals?f.default.locals:void 0},"./src/components/activityRow/index.module.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=r.n(n),s=r(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=r.n(s),o=r(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),l=r.n(o),i=r(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(i),c=r(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=r.n(c),p=r(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=r.n(p),f=r(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/activityRow/index.module.scss"),E={};E.styleTagTransform=u(),E.setAttributes=d(),E.insert=l().bind(null,"head"),E.domAPI=a(),E.insertStyleElement=m(),A()(f.default,E);let g=f.default&&f.default.locals?f.default.locals:void 0},"./src/components/artWorkGroup/index.module.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=r.n(n),s=r(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=r.n(s),o=r(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),l=r.n(o),i=r(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(i),c=r(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=r.n(c),p=r(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=r.n(p),f=r(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/artWorkGroup/index.module.scss"),E={};E.styleTagTransform=u(),E.setAttributes=d(),E.insert=l().bind(null,"head"),E.domAPI=a(),E.insertStyleElement=m(),A()(f.default,E);let g=f.default&&f.default.locals?f.default.locals:void 0},"./src/components/modal/placeBid/index.module.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=r.n(n),s=r(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=r.n(s),o=r(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),l=r.n(o),i=r(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(i),c=r(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=r.n(c),p=r(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=r.n(p),f=r(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/placeBid/index.module.scss"),E={};E.styleTagTransform=u(),E.setAttributes=d(),E.insert=l().bind(null,"head"),E.domAPI=a(),E.insertStyleElement=m(),A()(f.default,E);let g=f.default&&f.default.locals?f.default.locals:void 0},"./src/pages/artWorkPage/index.module.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=r.n(n),s=r(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=r.n(s),o=r(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),l=r.n(o),i=r(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(i),c=r(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=r.n(c),p=r(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=r.n(p),f=r(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/artWorkPage/index.module.scss"),E={};E.styleTagTransform=u(),E.setAttributes=d(),E.insert=l().bind(null,"head"),E.domAPI=a(),E.insertStyleElement=m(),A()(f.default,E);let g=f.default&&f.default.locals?f.default.locals:void 0},"./src/pages/artWorkPage/infoModal/index.module.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=r.n(n),s=r(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=r.n(s),o=r(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),l=r.n(o),i=r(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(i),c=r(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=r.n(c),p=r(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=r.n(p),f=r(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/artWorkPage/infoModal/index.module.scss"),E={};E.styleTagTransform=u(),E.setAttributes=d(),E.insert=l().bind(null,"head"),E.domAPI=a(),E.insertStyleElement=m(),A()(f.default,E);let g=f.default&&f.default.locals?f.default.locals:void 0},"./src/img/artWork/artWork5.jpg":(e,t,r)=>{e.exports=r.p+"assets/artWork5.jpg"},"./src/img/artWork/artWork6.jpg":(e,t,r)=>{e.exports=r.p+"assets/artWork6.jpg"},"./src/img/artWork/artWork7.jpg":(e,t,r)=>{e.exports=r.p+"assets/artWork7.jpg"},"./src/img/artWork/artWork8.jpg":(e,t,r)=>{e.exports=r.p+"assets/artWork8.jpg"},"./src/img/artWork/artWorkBig.jpg":(e,t,r)=>{e.exports=r.p+"assets/artWorkBig.jpg"},"./src/img/user/user10.png":(e,t,r)=>{e.exports=r.p+"assets/user10.png"},"./src/img/user/user5.jpg":(e,t,r)=>{e.exports=r.p+"assets/user5.jpg"},"./src/img/user/user6.jpg":(e,t,r)=>{e.exports=r.p+"assets/user6.jpg"},"./src/img/user/user7.jpg":(e,t,r)=>{e.exports=r.p+"assets/user7.jpg"},"./src/img/user/user8.jpg":(e,t,r)=>{e.exports=r.p+"assets/user8.jpg"}}]);
//# sourceMappingURL=src_pages_artWorkPage_index_jsx.js.map
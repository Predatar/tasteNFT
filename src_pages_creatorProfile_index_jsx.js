"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["src_pages_creatorProfile_index_jsx"],{"./src/components/artWorkGroup/index.jsx":(e,r,A)=>{A.r(r),A.d(r,{default:()=>h});var t=A(/*! react */"./node_modules/react/index.js"),n=A.n(t),s=A(/*! ../card/artWork/ArtWork */"./src/components/card/artWork/ArtWork.jsx"),a=A(/*! ./index.module.scss */"./src/components/artWorkGroup/index.module.scss"),l=A(/*! ../../img/artWork/artWork1.jpg */"./src/img/artWork/artWork1.jpg"),o=A(/*! ../../img/artWork/artWork2.jpg */"./src/img/artWork/artWork2.jpg"),i=A(/*! ../../img/artWork/artWork3.jpg */"./src/img/artWork/artWork3.jpg"),d=A(/*! ../../img/artWork/artWork4.jpg */"./src/img/artWork/artWork4.jpg"),c=A(/*! ../../img/artWork/artWork5.jpg */"./src/img/artWork/artWork5.jpg"),p=A(/*! ../../img/artWork/artWork6.jpg */"./src/img/artWork/artWork6.jpg"),u=A(/*! ../../img/artWork/artWork7.jpg */"./src/img/artWork/artWork7.jpg"),m=A(/*! ../../img/artWork/artWork8.jpg */"./src/img/artWork/artWork8.jpg"),f=A(/*! ../../img/user/user1.jpg */"./src/img/user/user1.jpg"),g=A(/*! ../../img/user/user2.jpg */"./src/img/user/user2.jpg"),E=A(/*! ../../img/user/user3.jpg */"./src/img/user/user3.jpg"),x=A(/*! ../../img/user/user4.jpg */"./src/img/user/user4.jpg"),C=A(/*! ../../img/user/user5.jpg */"./src/img/user/user5.jpg"),w=A(/*! ../../img/user/user6.jpg */"./src/img/user/user6.jpg"),b=A(/*! ../../img/user/user7.jpg */"./src/img/user/user7.jpg"),y=A(/*! ../../img/user/user8.jpg */"./src/img/user/user8.jpg");let h=()=>n().createElement("div",{className:a.default.artWorkSections},n().createElement(s.default,{artWork:l,userImg:f}),n().createElement(s.default,{artWork:o,userImg:g}),n().createElement(s.default,{artWork:i,userImg:E}),n().createElement(s.default,{artWork:d,userImg:x}),n().createElement(s.default,{artWork:c,userImg:C}),n().createElement(s.default,{artWork:p,userImg:w}),n().createElement(s.default,{artWork:u,userImg:b}),n().createElement(s.default,{artWork:m,userImg:y}))},"./src/components/modal/follower/index.jsx":(e,r,A)=>{A.r(r),A.d(r,{default:()=>o});var t=A(/*! react */"./node_modules/react/index.js"),n=A.n(t),s=A(/*! ./index.module.scss */"./src/components/modal/follower/index.module.scss"),a=A(/*! ../../../img/user/user9.png */"./src/img/user/user9.png");let l=()=>{let[e,r]=(0,t.useState)(!1);return n().createElement("div",{className:s.default.user},n().createElement("div",{className:s.default.userWrapper},n().createElement("div",{className:s.default.img},n().createElement("img",{src:a,alt:"user"})),n().createElement("div",{className:s.default.textWrapper},n().createElement("div",{className:s.default.userName},"User Name"),n().createElement("div",{className:s.default.userTag},"@username"))),n().createElement("div",{className:e?s.default.btnActive:s.default.btn,onClick:()=>{r(!e)}},e?n().createElement("span",null,"Unfollow"):"Follow"))},o=e=>{let{state:r,onClick:A}=e;return(0,t.useEffect)(()=>{r?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[r]),n().createElement("div",{className:s.default.followerModal+" "+(r?s.default.followerModalActive:"")},n().createElement("div",{className:s.default.close,onClick:A},n().createElement("span",{className:"icon-close"})),n().createElement("div",{className:s.default.tabs,onClick:e=>{let r=e.target.parentNode;r.childNodes.forEach(e=>{e.classList.contains(s.default.tabActive)&&e.classList.remove(s.default.tabActive)}),e.target.classList.add(s.default.tabActive)}},n().createElement("div",{className:`${s.default.tab} ${s.default.tabActive}`},"Following"),n().createElement("div",{className:s.default.tab},"Followers")),n().createElement("div",{className:s.default.wrapper},n().createElement(l,null),n().createElement(l,null),n().createElement(l,null),n().createElement(l,null),n().createElement(l,null),n().createElement(l,null),n().createElement(l,null)))}},"./src/pages/creatorProfile/index.jsx":(e,r,A)=>{A.r(r),A.d(r,{default:()=>u});var t=A(/*! react */"./node_modules/react/index.js"),n=A.n(t),s=A(/*! react-dom */"./node_modules/react-dom/index.js"),a=A(/*! react-helmet */"./node_modules/react-helmet/es/Helmet.js"),l=A(/*! ../../components/button/btn/Btn */"./src/components/button/btn/Btn.jsx"),o=A(/*! ../../components/spinner */"./src/components/spinner/index.jsx"),i=A(/*! ../../components/modal/follower */"./src/components/modal/follower/index.jsx"),d=A(/*! ../../components/artWorkGroup */"./src/components/artWorkGroup/index.jsx"),c=A(/*! ./index.module.scss */"./src/pages/creatorProfile/index.module.scss"),p=A(/*! ../../img/user/user9.png */"./src/img/user/user9.png");let u=()=>{let[e,r]=(0,t.useState)(!0),[A,u]=(0,t.useState)(!1),m=()=>{A||u(!A)};return n().createElement(n().Fragment,null,n().createElement(a.Helmet,null,n().createElement("title",null,"Creator profile - TasteNFT")),n().createElement("div",{className:c.default.wrapper},n().createElement("div",{className:c.default.user},n().createElement("div",{className:c.default.userInfo},n().createElement("div",{className:c.default.userImg},n().createElement("img",{src:p,alt:"userImg"})),n().createElement("div",{className:c.default.userWrapper},n().createElement("div",{className:c.default.userName},"User Name"),n().createElement("div",{className:c.default.userTag},"@username"))),n().createElement("div",{className:c.default.userDetail},n().createElement("div",{className:c.default.userFollowers},n().createElement("div",{className:c.default.userFollowersCount,onClick:m},"234"),n().createElement("div",{className:c.default.userFollowersText},"Followers")),n().createElement("div",{className:c.default.userFollowing},n().createElement("div",{className:c.default.userFollowingCount,onClick:m},"15"),n().createElement("div",{className:c.default.userFollowingText},"Following")),n().createElement("div",{className:c.default.userBtn},n().createElement(l.default,{text:"Follow"})),n().createElement("div",{className:c.default.userExternal},n().createElement("div",{className:c.default.externalLink},n().createElement("span",{className:"icon-external-link"})),n().createElement("div",{className:c.default.externalLink},n().createElement("span",{className:"icon-share"})),n().createElement("div",{className:c.default.externalLink},n().createElement("span",{className:"icon-menu-vertical"}))))),n().createElement("div",{className:c.default.social},n().createElement("div",{className:c.default.socialLink},n().createElement("span",{className:"icon-twitch"}),"Twitch"),n().createElement("div",{className:c.default.socialLink},n().createElement("span",{className:"icon-instagram"}),"Instagram"),n().createElement("div",{className:c.default.socialLink},n().createElement("span",{className:"icon-twitter"}),"Twitter"),n().createElement("div",{className:c.default.socialLink},n().createElement("span",{className:"icon-onlyfans"}),"Onlyfans")),n().createElement("div",{className:c.default.descr},n().createElement("span",null,"Description:"),' The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站). The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).'),n().createElement("div",{className:c.default.tabs},n().createElement("div",{className:c.default.selector,onClick:A=>{null==A.target.nextSibling?(A.target.previousSibling.classList.remove(c.default.selectorItemActive),A.target.previousSibling.classList.add(c.default.selectorItem)):(A.target.nextSibling.classList.remove(c.default.selectorItemActive),A.target.nextSibling.classList.add(c.default.selectorItem)),A.target.classList.add(c.default.selectorItemActive),A.target.classList.remove(c.default.selectorItem),r(!e)}},n().createElement("div",{className:c.default.selectorItemActive},"Created"),n().createElement("div",{className:c.default.selectorItem},"Collected")),n().createElement("div",{className:c.default.tab},e?n().createElement(d.default,null):n().createElement(o.default,null)))),(0,s.createPortal)(n().createElement(i.default,{state:A,onClick:()=>{A&&u(!A)}}),document.body))}},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/artWorkGroup/index.module.scss":(e,r,A)=>{A.r(r),A.d(r,{default:()=>l});var t=A(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),n=A.n(t),s=A(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=A.n(s)()(n());a.push([e.id,`.v7rnQsQDqSZ6c8z6ytTm {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}`,"",{version:3,sources:["webpack://./src/components/artWorkGroup/index.module.scss"],names:[],mappings:"AAAA;EACC,gBAAA;EACA,aAAA;EACA,eAAA;EACA,SAAA;AACD",sourcesContent:[".artWorkSections {\r\n	margin-top: 24px;\r\n	display: flex;\r\n	flex-wrap: wrap;\r\n	gap: 16px;\r\n}"],sourceRoot:""}]),a.locals={artWorkSections:"v7rnQsQDqSZ6c8z6ytTm"};let l=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/follower/index.module.scss":(e,r,A)=>{A.r(r),A.d(r,{default:()=>l});var t=A(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),n=A.n(t),s=A(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=A.n(s)()(n());a.push([e.id,`.Eajh70BU6Cex_HHYbJPm {
  padding: 45px 0 0;
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

.aVevrvSjbftb13AhqwXt {
  display: block;
}

.C01LfXQtL0R1k2pHvTuS {
  padding: 0 24px;
  display: flex;
  gap: 24px;
}

.FBUc2yVWfJFmSxIFrZQP {
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
}

.iZ0jQDc7Lk5gODdV29Aa {
  color: #fff;
}

.xK0Tcy41AoYnrkVnesPJ {
  position: absolute;
  top: 51px;
  right: 24px;
  cursor: pointer;
}
.xK0Tcy41AoYnrkVnesPJ span {
  color: #fff;
  font-size: 16px;
  pointer-events: none;
}

.Zy56hmooapamLdDoq9GA {
  padding: 32px 24px 0;
  height: 373px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow-y: scroll;
}
.Zy56hmooapamLdDoq9GA::-webkit-scrollbar {
  display: none;
}

.t7CE2dYTfNsGqpOZrwY2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.aMkhTszH2hNu3BKLlBS9 {
  display: flex;
  align-items: center;
}

.ufay0Rkdb2ZAwzlfhaLd {
  margin-left: 12px;
  display: flex;
  flex-direction: column;
}

.gBkla8l6_nY5W__w9kuX {
  color: #fff;
  font-family: "Raleway";
  font-size: 18px;
  font-weight: 700;
}

.l636fKAACN_AiQaAz_Gc {
  margin-top: 4px;
  background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
}

.hnUYuBAbPvwSKRFbMJw_ {
  width: 49px;
  height: 49px;
  border-radius: 12px;
  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);
}

.TCUN9dM3lCKM7mcJCz1r {
  width: 109px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: linear-gradient(270deg, #8743ff 0%, #4136f1 100%);
  box-shadow: 0px 15px 30px 0px rgba(20, 102, 204, 0.16);
  color: #fff;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

.g_fMMatH_3M4FEz9S9Ww {
  width: 124px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #30363d;
  box-shadow: 0px 15px 30px 0px rgba(20, 102, 204, 0.16);
  cursor: pointer;
  position: relative;
}
.g_fMMatH_3M4FEz9S9Ww::after {
  content: "";
  width: 126px;
  height: 40px;
  border-radius: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
  background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);
}
.g_fMMatH_3M4FEz9S9Ww span {
  background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 700;
}`,"",{version:3,sources:["webpack://./src/components/modal/follower/index.module.scss"],names:[],mappings:"AAAA;EACE,iBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,iDAAA;EACA,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AACF;;AACA;EACE,cAAA;AAEF;;AAAA;EACE,eAAA;EACA,aAAA;EACA,SAAA;AAGF;;AADA;EACE,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;AAIF;;AAFA;EACE,WAAA;AAKF;;AAHA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;AAMF;AALE;EACE,WAAA;EACA,eAAA;EACA,oBAAA;AAOJ;;AAJA;EACE,oBAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,kBAAA;AAOF;AALE;EACE,aAAA;AAOJ;;AAJA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AAOF;;AALA;EACE,aAAA;EACA,mBAAA;AAQF;;AANA;EACE,iBAAA;EACA,aAAA;EACA,sBAAA;AASF;;AAPA;EACE,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAUF;;AARA;EACE,eAAA;EACA,6DAAA;EACA,qBAAA;EACA,6BAAA;EACA,oCAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAWF;;AATA;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,sDAAA;AAYF;;AAVA;EACE,YAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,mBAAA;EACA,6DAAA;EACA,sDAAA;EAEA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EAEA,eAAA;AAUF;;AARA;EACE,YAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,mBAAA;EACA,mBAAA;EACA,sDAAA;EACA,eAAA;EAEA,kBAAA;AASF;AAPE;EACE,WAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,gCAAA;EACA,6DAAA;AASJ;AANE;EACE,6DAAA;EACA,qBAAA;EACA,6BAAA;EACA,oCAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAQJ",sourcesContent:[".followerModal {\r\n  padding: 45px 0 0;\r\n  width: 653px;\r\n  display: none;\r\n  border-radius: 32px;\r\n  background: #30363d;\r\n  box-shadow: 0px 25px 40px 0px rgba(0, 0, 0, 0.05);\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n.followerModalActive {\r\n  display: block;\r\n}\r\n.tabs {\r\n  padding: 0 24px;\r\n  display: flex;\r\n  gap: 24px;\r\n}\r\n.tab {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n}\r\n.tabActive {\r\n  color: #fff;\r\n}\r\n.close {\r\n  position: absolute;\r\n  top: 51px;\r\n  right: 24px;\r\n  cursor: pointer;\r\n  span {\r\n    color: #fff;\r\n    font-size: 16px;\r\n    pointer-events: none;\r\n  }\r\n}\r\n.wrapper {\r\n  padding: 32px 24px 0;\r\n  height: 373px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 32px;\r\n  overflow-y: scroll;\r\n\r\n  &::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n}\r\n.user {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.userWrapper {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.textWrapper {\r\n  margin-left: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.userName {\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n}\r\n.userTag {\r\n  margin-top: 4px;\r\n  background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n}\r\n.img {\r\n  width: 49px;\r\n  height: 49px;\r\n  border-radius: 12px;\r\n  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);\r\n}\r\n.btn {\r\n  width: 109px;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  border-radius: 12px;\r\n  background: linear-gradient(270deg, #8743ff 0%, #4136f1 100%);\r\n  box-shadow: 0px 15px 30px 0px rgba(20, 102, 204, 0.16);\r\n\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n\r\n  cursor: pointer;\r\n}\r\n.btnActive {\r\n  width: 124px;\r\n  height: 38px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  border-radius: 12px;\r\n  background: #30363d;\r\n  box-shadow: 0px 15px 30px 0px rgba(20, 102, 204, 0.16);\r\n  cursor: pointer;\r\n\r\n  position: relative;\r\n\r\n  &::after {\r\n    content: '';\r\n    width: 126px;\r\n    height: 40px;\r\n    border-radius: 12px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    z-index: -1;\r\n    transform: translate(-50%, -50%);\r\n    background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);\r\n  }\r\n\r\n  span {\r\n    background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);\r\n    background-clip: text;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    font-family: 'Raleway';\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n  }\r\n}\r\n"],sourceRoot:""}]),a.locals={followerModal:"Eajh70BU6Cex_HHYbJPm",followerModalActive:"aVevrvSjbftb13AhqwXt",tabs:"C01LfXQtL0R1k2pHvTuS",tab:"FBUc2yVWfJFmSxIFrZQP",tabActive:"iZ0jQDc7Lk5gODdV29Aa",close:"xK0Tcy41AoYnrkVnesPJ",wrapper:"Zy56hmooapamLdDoq9GA",user:"t7CE2dYTfNsGqpOZrwY2",userWrapper:"aMkhTszH2hNu3BKLlBS9",textWrapper:"ufay0Rkdb2ZAwzlfhaLd",userName:"gBkla8l6_nY5W__w9kuX",userTag:"l636fKAACN_AiQaAz_Gc",img:"hnUYuBAbPvwSKRFbMJw_",btn:"TCUN9dM3lCKM7mcJCz1r",btnActive:"g_fMMatH_3M4FEz9S9Ww"};let l=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/creatorProfile/index.module.scss":(e,r,A)=>{A.r(r),A.d(r,{default:()=>l});var t=A(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),n=A.n(t),s=A(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=A.n(s)()(n());a.push([e.id,`.XW2uDn4dku1I7KruJ2DJ {
  margin: 40px auto 0;
  width: min(100%, 1316px);
}

.aOWomWTlCRNGw0fED7No {
  display: flex;
  justify-content: space-between;
}

.JqqHyL3LDneCv1qu4XgF {
  display: flex;
  align-items: center;
}

.pyZNE79yuYD4lLEYwEN5 {
  width: 49px;
  height: 49px;
  border-radius: 12px;
  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);
}

.MkkPBpg6RL5NJAUVbglf {
  margin-left: 12px;
  display: flex;
  flex-direction: column;
}

.gBuuyonooVSa5aueN4mq {
  color: #fff;
  font-family: "Raleway";
  font-size: 18px;
  font-weight: 700;
}

.zuWreBCLWbUgiqMcjkPB {
  margin-top: 4px;
  background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
}

.tU4rw5dCXz2I80Z90XDA {
  display: flex;
  align-items: center;
}

.msC9_t8i2gTj1MvCBPq9,
.UhzETr9fCpVY6H2L5s2t {
  color: #fff;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  cursor: pointer;
}

.nS9tyUxRnjUCIUuMUHCA,
.gewBXbKyQXEDYbmjeJxw {
  margin-top: 2px;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
}

.kfNq1cgvPZH2125QwjPw {
  margin: 0 16px;
}

.gp1tO97FMeWhHkNkK5mV {
  margin-left: 12px;
  display: flex;
  gap: 8px;
}

.bMQSdrczZo_vqemiruLq {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s;
  cursor: pointer;
}
.bMQSdrczZo_vqemiruLq:hover {
  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);
}
.bMQSdrczZo_vqemiruLq span {
  color: #fff;
}

.I6I36LS5KFDbVVpl2DFh {
  margin-top: 25px;
  display: flex;
  align-items: center;
  gap: 24px;
}

.o7SfeeUPJX6Atqxp3w9a {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #fff;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  transition: all 0.2s;
  cursor: pointer;
}
.o7SfeeUPJX6Atqxp3w9a:hover {
  filter: drop-shadow(0 0 7px rgba(255, 255, 255, 0.574));
}
.o7SfeeUPJX6Atqxp3w9a span {
  color: #fff;
}

.eSLrAurDkEyfxeJY7rYA {
  margin-top: 16px;
  width: 1061px;
  color: #fff;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
}
.eSLrAurDkEyfxeJY7rYA span {
  color: rgba(255, 255, 255, 0.5);
}

.h6rUmWgwGCX3Wg4D67wk {
  margin-top: 40px;
}

.ldlZvpSSJa9Cvede7jBw {
  display: flex;
  gap: 24px;
}

.bSTX5G6MxZ5tDHz7gwDk {
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}

.WQNCAdLzjlbYd4luDBxU {
  color: #fff;
  font-family: "Raleway";
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}`,"",{version:3,sources:["webpack://./src/pages/creatorProfile/index.module.scss"],names:[],mappings:"AAAA;EACE,mBAAA;EACA,wBAAA;AACF;;AACA;EACE,aAAA;EACA,8BAAA;AAEF;;AAAA;EACE,aAAA;EACA,mBAAA;AAGF;;AADA;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,sDAAA;AAIF;;AAFA;EACE,iBAAA;EACA,aAAA;EACA,sBAAA;AAKF;;AAHA;EACE,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAMF;;AAJA;EACE,eAAA;EACA,6DAAA;EACA,qBAAA;EACA,6BAAA;EACA,oCAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAOF;;AALA;EACE,aAAA;EACA,mBAAA;AAQF;;AAJA;;EAEE,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;AAOF;;AALA;;EAEE,eAAA;EACA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAQF;;AANA;EACE,cAAA;AASF;;AALA;EACE,iBAAA;EACA,aAAA;EACA,QAAA;AAQF;;AANA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,0CAAA;EACA,oBAAA;EACA,eAAA;AASF;AAPE;EACE,sDAAA;AASJ;AAPE;EACE,WAAA;AASJ;;AANA;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;AASF;;AAPA;EACE,aAAA;EACA,mBAAA;EACA,QAAA;EACA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EAEA,oBAAA;EACA,eAAA;AASF;AAPE;EACE,uDAAA;AASJ;AAPE;EACE,WAAA;AASJ;;AANA;EACE,gBAAA;EACA,aAAA;EACA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AASF;AARE;EACE,+BAAA;AAUJ;;AAPA;EACE,gBAAA;AAUF;;AARA;EACE,aAAA;EACA,SAAA;AAWF;;AATA;EACE,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;AAYF;;AAVA;EACE,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;AAaF",sourcesContent:[".wrapper {\r\n  margin: 40px auto 0;\r\n  width: min(100%, 1316px);\r\n}\r\n.user {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.userInfo {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.userImg {\r\n  width: 49px;\r\n  height: 49px;\r\n  border-radius: 12px;\r\n  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);\r\n}\r\n.userWrapper {\r\n  margin-left: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.userName {\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n}\r\n.userTag {\r\n  margin-top: 4px;\r\n  background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n}\r\n.userDetail {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.userFollowers {\r\n}\r\n.userFollowersCount,\r\n.userFollowingCount {\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  line-height: 18px;\r\n  cursor: pointer;\r\n}\r\n.userFollowersText,\r\n.userFollowingText {\r\n  margin-top: 2px;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  line-height: 18px;\r\n}\r\n.userFollowing {\r\n  margin: 0 16px;\r\n}\r\n.userBtn {\r\n}\r\n.userExternal {\r\n  margin-left: 12px;\r\n  display: flex;\r\n  gap: 8px;\r\n}\r\n.externalLink {\r\n  width: 40px;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 12px;\r\n  border: 1px solid rgba(255, 255, 255, 0.1);\r\n  transition: all 0.2s;\r\n  cursor: pointer;\r\n\r\n  &:hover {\r\n    box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);\r\n  }\r\n  span {\r\n    color: #fff;\r\n  }\r\n}\r\n.social {\r\n  margin-top: 25px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 24px;\r\n}\r\n.socialLink {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  line-height: 18px;\r\n\r\n  transition: all 0.2s;\r\n  cursor: pointer;\r\n\r\n  &:hover {\r\n    filter: drop-shadow(0 0 7px rgba(255, 255, 255, 0.574));\r\n  }\r\n  span {\r\n    color: #fff;\r\n  }\r\n}\r\n.descr {\r\n  margin-top: 16px;\r\n  width: 1061px;\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 18px;\r\n  span {\r\n    color: rgba(255, 255, 255, 0.5);\r\n  }\r\n}\r\n.tabs {\r\n  margin-top: 40px;\r\n}\r\n.selector {\r\n  display: flex;\r\n  gap: 24px;\r\n}\r\n.selectorItem {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n}\r\n.selectorItemActive {\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n}\r\n.tab {\r\n}\r\n"],sourceRoot:""}]),a.locals={wrapper:"XW2uDn4dku1I7KruJ2DJ",user:"aOWomWTlCRNGw0fED7No",userInfo:"JqqHyL3LDneCv1qu4XgF",userImg:"pyZNE79yuYD4lLEYwEN5",userWrapper:"MkkPBpg6RL5NJAUVbglf",userName:"gBuuyonooVSa5aueN4mq",userTag:"zuWreBCLWbUgiqMcjkPB",userDetail:"tU4rw5dCXz2I80Z90XDA",userFollowersCount:"msC9_t8i2gTj1MvCBPq9",userFollowingCount:"UhzETr9fCpVY6H2L5s2t",userFollowersText:"nS9tyUxRnjUCIUuMUHCA",userFollowingText:"gewBXbKyQXEDYbmjeJxw",userFollowing:"kfNq1cgvPZH2125QwjPw",userExternal:"gp1tO97FMeWhHkNkK5mV",externalLink:"bMQSdrczZo_vqemiruLq",social:"I6I36LS5KFDbVVpl2DFh",socialLink:"o7SfeeUPJX6Atqxp3w9a",descr:"eSLrAurDkEyfxeJY7rYA",tabs:"h6rUmWgwGCX3Wg4D67wk",selector:"ldlZvpSSJa9Cvede7jBw",selectorItem:"bSTX5G6MxZ5tDHz7gwDk",selectorItemActive:"WQNCAdLzjlbYd4luDBxU"};let l=a},"./src/components/artWorkGroup/index.module.scss":(e,r,A)=>{A.r(r),A.d(r,{default:()=>E});var t=A(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=A.n(t),s=A(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=A.n(s),l=A(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=A.n(l),i=A(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=A.n(i),c=A(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=A.n(c),u=A(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),m=A.n(u),f=A(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/artWorkGroup/index.module.scss"),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),n()(f.default,g);let E=f.default&&f.default.locals?f.default.locals:void 0},"./src/components/modal/follower/index.module.scss":(e,r,A)=>{A.r(r),A.d(r,{default:()=>E});var t=A(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=A.n(t),s=A(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=A.n(s),l=A(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=A.n(l),i=A(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=A.n(i),c=A(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=A.n(c),u=A(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),m=A.n(u),f=A(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/follower/index.module.scss"),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),n()(f.default,g);let E=f.default&&f.default.locals?f.default.locals:void 0},"./src/pages/creatorProfile/index.module.scss":(e,r,A)=>{A.r(r),A.d(r,{default:()=>E});var t=A(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=A.n(t),s=A(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=A.n(s),l=A(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=A.n(l),i=A(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=A.n(i),c=A(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=A.n(c),u=A(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),m=A.n(u),f=A(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/creatorProfile/index.module.scss"),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),n()(f.default,g);let E=f.default&&f.default.locals?f.default.locals:void 0},"./src/img/artWork/artWork5.jpg":(e,r,A)=>{e.exports=A.p+"assets/artWork5.jpg"},"./src/img/artWork/artWork6.jpg":(e,r,A)=>{e.exports=A.p+"assets/artWork6.jpg"},"./src/img/artWork/artWork7.jpg":(e,r,A)=>{e.exports=A.p+"assets/artWork7.jpg"},"./src/img/artWork/artWork8.jpg":(e,r,A)=>{e.exports=A.p+"assets/artWork8.jpg"},"./src/img/user/user5.jpg":(e,r,A)=>{e.exports=A.p+"assets/user5.jpg"},"./src/img/user/user6.jpg":(e,r,A)=>{e.exports=A.p+"assets/user6.jpg"},"./src/img/user/user7.jpg":(e,r,A)=>{e.exports=A.p+"assets/user7.jpg"},"./src/img/user/user8.jpg":(e,r,A)=>{e.exports=A.p+"assets/user8.jpg"}}]);
//# sourceMappingURL=src_pages_creatorProfile_index_jsx.js.map
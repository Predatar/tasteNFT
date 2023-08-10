"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["src_pages_main_index_jsx-data_application_font-woff_charset_utf-8_base64_d09GRgABAAAAAAZgABAA-488bee"],{"./src/components/artWorkGroup/index.jsx":(A,e,r)=>{r.r(e),r.d(e,{default:()=>h});var s=r(/*! react */"./node_modules/react/index.js"),t=r.n(s),a=r(/*! ../card/artWork/ArtWork */"./src/components/card/artWork/ArtWork.jsx"),n=r(/*! ./index.module.scss */"./src/components/artWorkGroup/index.module.scss"),i=r(/*! ../../img/artWork/artWork1.jpg */"./src/img/artWork/artWork1.jpg"),l=r(/*! ../../img/artWork/artWork2.jpg */"./src/img/artWork/artWork2.jpg"),o=r(/*! ../../img/artWork/artWork3.jpg */"./src/img/artWork/artWork3.jpg"),d=r(/*! ../../img/artWork/artWork4.jpg */"./src/img/artWork/artWork4.jpg"),m=r(/*! ../../img/artWork/artWork5.jpg */"./src/img/artWork/artWork5.jpg"),c=r(/*! ../../img/artWork/artWork6.jpg */"./src/img/artWork/artWork6.jpg"),g=r(/*! ../../img/artWork/artWork7.jpg */"./src/img/artWork/artWork7.jpg"),p=r(/*! ../../img/artWork/artWork8.jpg */"./src/img/artWork/artWork8.jpg"),u=r(/*! ../../img/user/user1.jpg */"./src/img/user/user1.jpg"),f=r(/*! ../../img/user/user2.jpg */"./src/img/user/user2.jpg"),E=r(/*! ../../img/user/user3.jpg */"./src/img/user/user3.jpg"),x=r(/*! ../../img/user/user4.jpg */"./src/img/user/user4.jpg"),B=r(/*! ../../img/user/user5.jpg */"./src/img/user/user5.jpg"),j=r(/*! ../../img/user/user6.jpg */"./src/img/user/user6.jpg"),C=r(/*! ../../img/user/user7.jpg */"./src/img/user/user7.jpg"),w=r(/*! ../../img/user/user8.jpg */"./src/img/user/user8.jpg");let h=()=>t().createElement("div",{className:n.default.artWorkSections},t().createElement(a.default,{artWork:i,userImg:u}),t().createElement(a.default,{artWork:l,userImg:f}),t().createElement(a.default,{artWork:o,userImg:E}),t().createElement(a.default,{artWork:d,userImg:x}),t().createElement(a.default,{artWork:m,userImg:B}),t().createElement(a.default,{artWork:c,userImg:j}),t().createElement(a.default,{artWork:g,userImg:C}),t().createElement(a.default,{artWork:p,userImg:w}))},"./src/pages/main/artWorkSection/index.jsx":(A,e,r)=>{r.r(e),r.d(e,{default:()=>l});var s=r(/*! react */"./node_modules/react/index.js"),t=r.n(s),a=r(/*! ../../../components/select */"./src/components/select/index.jsx"),n=r(/*! ./index.module.scss */"./src/pages/main/artWorkSection/index.module.scss"),i=r(/*! ../../../components/artWorkGroup */"./src/components/artWorkGroup/index.jsx");let l=()=>t().createElement("div",{className:n.default.artWorkSections},t().createElement("div",{className:n.default.filters},t().createElement(a.default,{items:["Recently added","Latest"]}),t().createElement(a.default,{items:["Auctions","Sale"]})),t().createElement(i.default,null))},"./src/pages/main/index.jsx":(A,e,r)=>{r.r(e),r.d(e,{default:()=>o});var s=r(/*! react */"./node_modules/react/index.js"),t=r.n(s),a=r(/*! react-helmet */"./node_modules/react-helmet/es/Helmet.js"),n=r(/*! ./main */"./src/pages/main/main/index.jsx"),i=r(/*! ./artWorkSection */"./src/pages/main/artWorkSection/index.jsx"),l=r(/*! ../../components/featuredCreators */"./src/components/featuredCreators/index.jsx");let o=()=>t().createElement(t().Fragment,null,t().createElement(a.Helmet,null,t().createElement("title",null,"Main page - TasteNFT")),t().createElement(n.default,null),t().createElement(i.default,null),t().createElement(l.default,{mt:!0}))},"./src/pages/main/main/index.jsx":(A,e,r)=>{r.r(e),r.d(e,{default:()=>E});var s=r(/*! react */"./node_modules/react/index.js"),t=r.n(s),a=r(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),n=r(/*! ../../../components/button/btn/Btn */"./src/components/button/btn/Btn.jsx"),i=r(/*! swiper/modules */"./node_modules/swiper/modules/index.mjs"),l=r(/*! swiper/react */"./node_modules/swiper/swiper-react.mjs");r(/*! swiper/css */"./node_modules/swiper/swiper.css"),r(/*! swiper/css/effect-cards */"./node_modules/swiper/modules/effect-cards.css"),r(/*! swiper/css/pagination */"./node_modules/swiper/modules/pagination.css");var o=r(/*! ./index.module.scss */"./src/pages/main/main/index.module.scss"),d=r(/*! ../../../img/main/user.png */"./src/img/main/user.png"),m=r(/*! ../../../img/main/slide1.jpg */"./src/img/main/slide1.jpg"),c=r(/*! ../../../img/main/slide2.jpg */"./src/img/main/slide2.jpg"),g=r(/*! ../../../img/main/slide3.jpg */"./src/img/main/slide3.jpg"),p=r(/*! ../../../img/main/slide4.jpg */"./src/img/main/slide4.jpg"),u=r(/*! ../../../img/miniLogo.svg */"./src/img/miniLogo.svg");let f=()=>t().createElement(l.Swiper,{className:o.default.slider,modules:[i.EffectCards,i.Pagination],effect:"cards",spaceBetween:40,slidesPerView:1,pagination:{clickable:!0},cardsEffect:{slideShadows:!1,rotate:!1,perSlideRotate:0,perSlideOffset:28},scrollbar:{draggable:!0},grabCursor:!0},t().createElement(l.SwiperSlide,{className:o.default.sliderSlide},t().createElement("img",{src:m,alt:"",className:o.default.sliderImg})),t().createElement(l.SwiperSlide,{className:o.default.sliderSlide},t().createElement("img",{src:c,alt:"",className:o.default.sliderImg})),t().createElement(l.SwiperSlide,{className:o.default.sliderSlide},t().createElement("img",{src:g,alt:"",className:o.default.sliderImg})),t().createElement(l.SwiperSlide,{className:o.default.sliderSlide},t().createElement("img",{src:p,alt:"",className:o.default.sliderImg}))),E=()=>t().createElement("div",{className:o.default.wrapper},t().createElement("div",{className:o.default.container},t().createElement("div",{className:o.default.userInfo},t().createElement(a.Link,{to:"/myProfile",className:o.default.userInfoImg},t().createElement("img",{src:d,alt:"img"})),t().createElement("div",{className:o.default.userInfoWrapper},t().createElement("div",{className:o.default.userInfoName},"User Name"),t().createElement(a.Link,{to:"/creatorPage",className:o.default.userInfoTag},"@username"))),t().createElement("div",{className:o.default.info},t().createElement("div",{className:o.default.infoTitle},"WFH - art name"),t().createElement("div",{className:o.default.infoDescr},t().createElement("span",null,"Description:"),' The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).')),t().createElement("div",{className:o.default.detail},t().createElement("div",{className:o.default.detailContainer},t().createElement("div",{className:o.default.sold},"Sold for:"),t().createElement("div",{className:o.default.soldCount},t().createElement("img",{src:u,alt:"miniLogo"}),"1,5M")),t().createElement("div",{className:o.default.detailContainer},t().createElement(n.default,{text:"View"}),t().createElement("div",{className:o.default.detailWrapper},t().createElement("div",{className:o.default.detailLink},t().createElement("span",{className:"icon-external-link"})),t().createElement("div",{className:o.default.detailLink},t().createElement("span",{className:"icon-share"})),t().createElement("div",{className:o.default.detailLink},t().createElement("span",{className:"icon-menu-vertical"})))))),t().createElement("div",{className:o.default.container},t().createElement(f,null)))},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/artWorkGroup/index.module.scss":(A,e,r)=>{r.r(e),r.d(e,{default:()=>i});var s=r(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),t=r.n(s),a=r(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),n=r.n(a)()(t());n.push([A.id,`.v7rnQsQDqSZ6c8z6ytTm {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}`,"",{version:3,sources:["webpack://./src/components/artWorkGroup/index.module.scss"],names:[],mappings:"AAAA;EACC,gBAAA;EACA,aAAA;EACA,eAAA;EACA,SAAA;AACD",sourcesContent:[".artWorkSections {\r\n	margin-top: 24px;\r\n	display: flex;\r\n	flex-wrap: wrap;\r\n	gap: 16px;\r\n}"],sourceRoot:""}]),n.locals={artWorkSections:"v7rnQsQDqSZ6c8z6ytTm"};let i=n},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/artWorkSection/index.module.scss":(A,e,r)=>{r.r(e),r.d(e,{default:()=>i});var s=r(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),t=r.n(s),a=r(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),n=r.n(a)()(t());n.push([A.id,`.BBXz1jMTKS0GaUrENhE6 {
  margin: 76px auto 0;
  width: 1316px;
}

.zWNyFwz0U35367QEPbi9 {
  display: flex;
  gap: 12px;
}`,"",{version:3,sources:["webpack://./src/pages/main/artWorkSection/index.module.scss"],names:[],mappings:"AAAA;EACE,mBAAA;EACA,aAAA;AACF;;AACA;EACE,aAAA;EACD,SAAA;AAED",sourcesContent:[".artWorkSections {\r\n  margin: 76px auto 0;\r\n  width: 1316px;\r\n}\r\n.filters {\r\n  display: flex;\r\n	gap: 12px;\r\n}\r\n"],sourceRoot:""}]),n.locals={artWorkSections:"BBXz1jMTKS0GaUrENhE6",filters:"zWNyFwz0U35367QEPbi9"};let i=n},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/main/index.module.scss":(A,e,r)=>{r.r(e),r.d(e,{default:()=>i});var s=r(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),t=r.n(s),a=r(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),n=r.n(a)()(t());n.push([A.id,`.B77Yj5GwI9AGul7j96Dp {
  margin: 0 auto;
  width: 1318px;
  display: flex;
}

.fbkiQNh1CwG4Bdx9y1lr:first-child {
  margin-top: 312px;
  width: 516px;
}
.fbkiQNh1CwG4Bdx9y1lr:last-child {
  margin-top: 40px;
  margin-left: 16px;
  width: 100%;
  max-width: 786px;
  overflow: hidden;
}

.dsRLvdoj0eBWNdlLJdGY {
  display: flex;
  align-items: center;
}

.sdlR91JuFAVciUUg_xKJ {
  display: flex;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);
}

.sv8FsWAJedClHB8fr9zL {
  margin-left: 12px;
}

.tAxN5BMGWhlqLVHQcsCq {
  color: #fff;
  font-family: "Raleway";
  font-size: 18px;
  font-weight: 700;
}

.VRSkO9JJXU67Ye4tPg5p {
  margin-top: 4px;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tQPD0T4W0cLzOMmtWgzA {
  margin-top: 20px;
}

.YaJOjDhMNRlZvPg5fVHk {
  color: #fff;
  font-family: "Raleway";
  font-size: 32px;
  font-weight: 700;
}

.gUy8xdxGWt70W8WsjFIL {
  margin-top: 12px;
  color: #fff;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
}
.gUy8xdxGWt70W8WsjFIL span {
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
}

.yZ3tjniEPspiaJmnU28g {
  margin: 4px 0 0 0;
  max-width: 519px;
  height: 548px;
}

.SGXL7mypRUXFzJ9ZkyEv {
  width: 524px !important;
  height: 524px !important;
  left: -34px !important;
  bottom: 7px !important;
  transform: 0deg !important;
}

.olEnhD7wBSI1FrGxgPdt {
  width: 524px;
  height: 524px;
}

.SMugYG5xyI1MDg_KbfQi {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.YiAhc6Mys8hbVKes72j9 {
  display: flex;
  align-items: center;
}

.uINgiRr4OEAY1rD71ZIK {
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 600;
}

.R6Wr3h2JNJOd8y8tu5EQ {
  margin-left: 12px;
  display: flex;
  align-items: center;
  color: #fff;
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}
.R6Wr3h2JNJOd8y8tu5EQ img {
  margin-right: 5px;
}

.gVS8eHirpufO5vfyvmiQ {
  margin-left: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.oZF_eR3Twf8Z3rGX3b0E {
  padding: 9px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s;
  cursor: pointer;
}
.oZF_eR3Twf8Z3rGX3b0E:hover {
  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);
}
.oZF_eR3Twf8Z3rGX3b0E span {
  color: #fff;
}`,"",{version:3,sources:["webpack://./src/pages/main/main/index.module.scss"],names:[],mappings:"AAAA;EACE,cAAA;EACA,aAAA;EACA,aAAA;AACF;;AAEE;EACE,iBAAA;EACA,YAAA;AACJ;AACE;EACE,gBAAA;EACA,iBAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;AACJ;;AAEA;EACE,aAAA;EACA,mBAAA;AACF;;AACA;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,sDAAA;AAEF;;AAAA;EACE,iBAAA;AAGF;;AADA;EACE,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAIF;;AAFA;EACE,eAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EAEA,6DAAA;EACA,qBAAA;EACA,6BAAA;EACA,oCAAA;AAIF;;AADA;EACE,gBAAA;AAIF;;AAFA;EACE,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAKF;;AAHA;EACE,gBAAA;EACA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAMF;AALE;EACE,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAOJ;;AAJA;EACE,iBAAA;EACA,gBAAA;EACA,aAAA;AAOF;;AALA;EACE,uBAAA;EACA,wBAAA;EACA,sBAAA;EACA,sBAAA;EACA,0BAAA;AAQF;;AANA;EACE,YAAA;EACA,aAAA;AASF;;AANA;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AASF;;AANA;EACE,aAAA;EACA,mBAAA;AASF;;AANA;EACE,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AASF;;AANA;EACE,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AASF;AARE;EACE,iBAAA;AAUJ;;AANA;EACE,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,QAAA;AASF;;AANA;EACE,YAAA;EACA,mBAAA;EACA,0CAAA;EAEA,oBAAA;EACA,eAAA;AAQF;AANE;EACE,sDAAA;AAQJ;AANE;EACE,WAAA;AAQJ",sourcesContent:[".wrapper {\r\n  margin: 0 auto;\r\n  width: 1318px;\r\n  display: flex;\r\n}\r\n.container {\r\n  &:first-child {\r\n    margin-top: 312px;\r\n    width: 516px;\r\n  }\r\n  &:last-child {\r\n    margin-top: 40px;\r\n    margin-left: 16px;\r\n    width: 100%;\r\n    max-width: 786px;\r\n    overflow: hidden;\r\n  }\r\n}\r\n.userInfo {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.userInfoImg {\r\n  display: flex;\r\n  align-items: center;\r\n  border-radius: 12px;\r\n  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);\r\n}\r\n.userInfoWrapper {\r\n  margin-left: 12px;\r\n}\r\n.userInfoName {\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n}\r\n.userInfoTag {\r\n  margin-top: 4px;\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n\r\n  background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.info {\r\n  margin-top: 20px;\r\n}\r\n.infoTitle {\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n}\r\n.infoDescr {\r\n  margin-top: 12px;\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 18px;\r\n  span {\r\n    color: rgba(255, 255, 255, 0.5);\r\n    font-family: 'Raleway';\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n  }\r\n}\r\n.slider {\r\n  margin: 4px 0 0 0;\r\n  max-width: 519px;\r\n  height: 548px;\r\n}\r\n.sliderSlide {\r\n  width: 524px !important;\r\n  height: 524px !important;\r\n  left: -34px !important;\r\n  bottom: 7px !important;\r\n  transform: 0deg !important;\r\n}\r\n.sliderImg {\r\n  width: 524px;\r\n  height: 524px;\r\n}\r\n\r\n.detail {\r\n  margin-top: 16px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.detailContainer {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.sold {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n}\r\n\r\n.soldCount {\r\n  margin-left: 12px;\r\n  display: flex;\r\n  align-items: center;\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  img {\r\n    margin-right: 5px;\r\n  }\r\n}\r\n\r\n.detailWrapper {\r\n  margin-left: 12px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.detailLink {\r\n  padding: 9px;\r\n  border-radius: 12px;\r\n  border: 1px solid rgba(255, 255, 255, 0.1);\r\n\r\n  transition: all 0.2s;\r\n  cursor: pointer;\r\n\r\n  &:hover {\r\n    box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);\r\n  }\r\n  span {\r\n    color: #fff;\r\n  }\r\n}"],sourceRoot:""}]),n.locals={wrapper:"B77Yj5GwI9AGul7j96Dp",container:"fbkiQNh1CwG4Bdx9y1lr",userInfo:"dsRLvdoj0eBWNdlLJdGY",userInfoImg:"sdlR91JuFAVciUUg_xKJ",userInfoWrapper:"sv8FsWAJedClHB8fr9zL",userInfoName:"tAxN5BMGWhlqLVHQcsCq",userInfoTag:"VRSkO9JJXU67Ye4tPg5p",info:"tQPD0T4W0cLzOMmtWgzA",infoTitle:"YaJOjDhMNRlZvPg5fVHk",infoDescr:"gUy8xdxGWt70W8WsjFIL",slider:"yZ3tjniEPspiaJmnU28g",sliderSlide:"SGXL7mypRUXFzJ9ZkyEv",sliderImg:"olEnhD7wBSI1FrGxgPdt",detail:"SMugYG5xyI1MDg_KbfQi",detailContainer:"YiAhc6Mys8hbVKes72j9",sold:"uINgiRr4OEAY1rD71ZIK",soldCount:"R6Wr3h2JNJOd8y8tu5EQ",detailWrapper:"gVS8eHirpufO5vfyvmiQ",detailLink:"oZF_eR3Twf8Z3rGX3b0E"};let i=n},"./src/components/artWorkGroup/index.module.scss":(A,e,r)=>{r.r(e),r.d(e,{default:()=>E});var s=r(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=r.n(s),a=r(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),n=r.n(a),i=r(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),l=r.n(i),o=r(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(o),m=r(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),c=r.n(m),g=r(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),p=r.n(g),u=r(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/artWorkGroup/index.module.scss"),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=c(),t()(u.default,f);let E=u.default&&u.default.locals?u.default.locals:void 0},"./src/pages/main/artWorkSection/index.module.scss":(A,e,r)=>{r.r(e),r.d(e,{default:()=>E});var s=r(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=r.n(s),a=r(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),n=r.n(a),i=r(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),l=r.n(i),o=r(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(o),m=r(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),c=r.n(m),g=r(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),p=r.n(g),u=r(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/artWorkSection/index.module.scss"),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=c(),t()(u.default,f);let E=u.default&&u.default.locals?u.default.locals:void 0},"./src/pages/main/main/index.module.scss":(A,e,r)=>{r.r(e),r.d(e,{default:()=>E});var s=r(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=r.n(s),a=r(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),n=r.n(a),i=r(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),l=r.n(i),o=r(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(o),m=r(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),c=r.n(m),g=r(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),p=r.n(g),u=r(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/main/index.module.scss"),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=c(),t()(u.default,f);let E=u.default&&u.default.locals?u.default.locals:void 0},"data:application/font-woff;charset=utf-8;base64, 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":A=>{A.exports="data:application/font-woff;charset=utf-8;base64, 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"},"./src/img/artWork/artWork5.jpg":(A,e,r)=>{A.exports=r.p+"assets/artWork5.jpg"},"./src/img/artWork/artWork6.jpg":(A,e,r)=>{A.exports=r.p+"assets/artWork6.jpg"},"./src/img/artWork/artWork7.jpg":(A,e,r)=>{A.exports=r.p+"assets/artWork7.jpg"},"./src/img/artWork/artWork8.jpg":(A,e,r)=>{A.exports=r.p+"assets/artWork8.jpg"},"./src/img/main/slide1.jpg":(A,e,r)=>{A.exports=r.p+"assets/slide1.jpg"},"./src/img/main/slide2.jpg":(A,e,r)=>{A.exports=r.p+"assets/slide2.jpg"},"./src/img/main/slide3.jpg":(A,e,r)=>{A.exports=r.p+"assets/slide3.jpg"},"./src/img/main/slide4.jpg":(A,e,r)=>{A.exports=r.p+"assets/slide4.jpg"},"./src/img/main/user.png":(A,e,r)=>{A.exports=r.p+"assets/user.png"},"./src/img/user/user5.jpg":(A,e,r)=>{A.exports=r.p+"assets/user5.jpg"},"./src/img/user/user6.jpg":(A,e,r)=>{A.exports=r.p+"assets/user6.jpg"},"./src/img/user/user7.jpg":(A,e,r)=>{A.exports=r.p+"assets/user7.jpg"},"./src/img/user/user8.jpg":(A,e,r)=>{A.exports=r.p+"assets/user8.jpg"}}]);
//# sourceMappingURL=src_pages_main_index_jsx-data_application_font-woff_charset_utf-8_base64_d09GRgABAAAAAAZgABAA-488bee.js.map
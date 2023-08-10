"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["src_pages_myProfile_index_jsx"],{"./src/components/card/profileCard/index.jsx":(e,A,r)=>{r.r(A),r.d(A,{default:()=>d});var t=r(/*! react */"./node_modules/react/index.js"),n=r.n(t),a=r(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),o=r(/*! ./index.module.scss */"./src/components/card/profileCard/index.module.scss"),l=r(/*! ../../../img/miniLogo.svg */"./src/img/miniLogo.svg");let s=e=>{let{state:A}=e;return(()=>{switch(A){case"Approved":return n().createElement("div",{className:`${o.default.state} ${o.default.approved}`},A);case"On moderation":return n().createElement("div",{className:`${o.default.state} ${o.default.moderation}`},A);case"Declined":return n().createElement("div",{className:`${o.default.state} ${o.default.declined}`},A)}})()},i=e=>{let{state:A,onClick:r}=e,t=e=>{e.target.classList.contains(o.default.menuActive)?e.target.classList.remove(o.default.menuActive):e.target.classList.add(o.default.menuActive)};return(()=>{switch(A){case"Approved":return n().createElement(n().Fragment,null,n().createElement("div",{className:o.default.menu,onClick:t},n().createElement("span",{className:"icon-menu-vertical"})),n().createElement("div",{className:o.default.delete,style:{"--top":"66px"}},n().createElement("span",{className:"icon-delete-bin"})));case"On moderation":return n().createElement(n().Fragment,null,n().createElement("div",{className:o.default.menu,onClick:t},n().createElement("span",{className:"icon-menu-vertical"})),n().createElement("div",{className:o.default.time,style:{"--top":"66px"},onClick:r},n().createElement("span",{className:"icon-time"})));case"Declined":return n().createElement(n().Fragment,null,n().createElement("div",{className:o.default.menu,onClick:t},n().createElement("span",{className:"icon-menu-vertical"})),n().createElement("div",{className:o.default.time,style:{"--top":"66px"},onClick:r},n().createElement("span",{className:"icon-time"})),n().createElement("div",{className:o.default.edit,style:{"--top":"110px"}},n().createElement("span",{className:"icon-edit"})),n().createElement("div",{className:o.default.delete,style:{"--top":"154px"}},n().createElement("span",{className:"icon-delete-bin"})))}})()},d=e=>{let[A,r]=(0,t.useState)("");(0,t.useEffect)(()=>{setInterval(()=>{d()},1e3)},[]);let d=()=>{let e="";if(31==new Date().getDate()){let A=1;e=`2023-08-0${++A}T12:00:00`}else e=new Date().getDate()+1>9?`2023-08-${new Date().getDate()+1}T12:00:00`:`2023-08-0${new Date().getDate()+1}T12:00:00`;let A=new Date(e),t=new Date().getTime(),n=A-t;n<=0?r("Time's up!"):r(`${Math.floor(n%864e5/36e5)}h ${Math.floor(n%36e5/6e4)}m ${Math.floor(n%6e4/1e3)}s`)};return n().createElement("div",{className:o.default.artWork},n().createElement(s,{state:e.state}),n().createElement(i,{state:e.state,onClick:e.setActive}),n().createElement(a.Link,{to:"/artWorkPage",className:o.default.artWorkImg},n().createElement("img",{src:e.artWork,alt:"artWork"})),n().createElement("div",{className:o.default.artWorkWrapper},n().createElement("div",{className:o.default.artWorkName},"WFH - art name"),n().createElement("div",{className:o.default.artWorkContainer},n().createElement("div",{className:o.default.artWorkDescr},"Sold for:"),n().createElement("div",{className:o.default.artWorkSold},n().createElement("img",{src:l,alt:"miniLogo"}),"1,5M")),n().createElement("div",{className:o.default.artWorkContainer},n().createElement("div",{className:o.default.artWorkDescr},"Ending in:"),n().createElement("div",{className:o.default.artWorkTimer},A))))}},"./src/components/modal/changeTimer/index.jsx":(e,A,r)=>{r.r(A),r.d(A,{default:()=>i});var t=r(/*! react */"./node_modules/react/index.js"),n=r.n(t),a=r(/*! cleave.js/react */"./node_modules/cleave.js/react.js"),o=r.n(a),l=r(/*! ../../button/btn/Btn */"./src/components/button/btn/Btn.jsx"),s=r(/*! ./index.module.scss */"./src/components/modal/changeTimer/index.module.scss");let i=e=>{let{active:A,closeModal:r}=e;return(0,t.useEffect)(()=>{A?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[A]),n().createElement("div",{className:s.default.modal+" "+(A?s.default.modalActive:"")},n().createElement("div",{className:s.default.close,onClick:r},n().createElement("span",{className:"icon-close"})),n().createElement("div",{className:s.default.title},"Changing ending time"),n().createElement("div",{className:s.default.subtitle},"Selling will end"),n().createElement("div",{className:s.default.wrapper},n().createElement(o(),{options:{date:!0,delimiter:".",datePattern:["d","m","Y"]},className:s.default.date,placeholder:"00.00.0000"}),n().createElement(o(),{options:{time:!0,timePattern:["h","m"]},className:s.default.time,placeholder:"00:00"}),n().createElement("div",{className:s.default.timer},"05h 02m 41s"),n().createElement("div",{className:s.default.delete},n().createElement("span",{className:"icon-close"}),"delete file")),n().createElement("div",{className:s.default.btn},n().createElement(l.default,{text:"Change"})))}},"./src/components/modal/createArtwork/index.jsx":(e,A,r)=>{r.r(A),r.d(A,{default:()=>p});var t=r(/*! react */"./node_modules/react/index.js"),n=r.n(t),a=r(/*! react-dropzone */"./node_modules/react-dropzone/dist/es/index.js"),o=r(/*! cleave.js/react */"./node_modules/cleave.js/react.js"),l=r.n(o),s=r(/*! ../../button/btn/Btn */"./src/components/button/btn/Btn.jsx"),i=r(/*! ./index.module.scss */"./src/components/modal/createArtwork/index.module.scss"),d=r(/*! ../../../img/img.png */"./src/img/img.png");function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var A=1;A<arguments.length;A++){var r=arguments[A];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}let p=e=>{let{state:A,onClick:r}=e,[o,p]=(0,t.useState)(1);(0,t.useEffect)(()=>{A?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[A]);let m=(0,t.useCallback)(()=>{let e=[];for(let A=0;A<3;A++)A<o?e.push(n().createElement("div",{className:i.default.stepActive,key:A})):e.push(n().createElement("div",{className:i.default.step,key:A}));return n().createElement("div",{className:i.default.stepWrapper},e)},[o]),f=()=>{3==o?(r(),p(1)):p(o+1)};return n().createElement("div",{className:i.default.backdoor+" "+(A?i.default.backdoorActive:"")},n().createElement("div",{className:i.default.modal},n().createElement("div",{className:i.default.close,onClick:r},n().createElement("span",{className:"icon-close"})),n().createElement("div",{className:i.default.title},"Creating artwork"),m(),n().createElement("div",{className:i.default.stepCount},"Step ",o," from 3"),1==o?n().createElement(function(){let[e,A]=(0,t.useState)([]),r=(0,t.useCallback)(e=>{e.map(async e=>{let r=new FileReader;return r.onload=await function(e){A(A=>{[...A,e.target.result]})},r.readAsDataURL(e),e})},[]),{getRootProps:o,getInputProps:l,isDragActive:s}=(0,a.useDropzone)({accept:{"image/*":[]},multiple:!1,onDrop:r});return n().createElement(n().Fragment,null,n().createElement("div",{className:i.default.info},"Upload the artwork you will be selling"),n().createElement("section",null,n().createElement("div",c({},o(),{className:i.default.dropzone}),n().createElement("input",l()),s?n().createElement("p",null,"Release to drop the files here"):n().createElement(n().Fragment,null,n().createElement("div",{className:i.default.dropInfo},"1500x500px. JPG, PNG or GIF. 100MB max size."),n().createElement("p",null,"Drag and drop an image here, or click to browse")))))},null):2==o?n().createElement(function(){return n().createElement(n().Fragment,null,n().createElement("div",{className:i.default.info},"Censor the public version of artwork, if it contains 18+ content"),n().createElement("div",{className:i.default.img},n().createElement("img",{src:d,alt:"img"})),n().createElement("div",{className:i.default.tools},n().createElement("div",{className:i.default.tool},n().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n().createElement("path",{d:"M3.2001 4C2.3161 4 1.6001 4.716 1.6001 5.6V18.4C1.6001 19.284 2.3161 20 3.2001 20H20.8001C21.6841 20 22.4001 19.284 22.4001 18.4V5.6C22.4001 4.716 21.6841 4 20.8001 4H3.2001ZM18.4001 6.4C19.2841 6.4 20.0001 7.116 20.0001 8C20.0001 8.884 19.2841 9.6 18.4001 9.6C17.5161 9.6 16.8001 8.884 16.8001 8C16.8001 7.116 17.5161 6.4 18.4001 6.4ZM4.0001 8L7.97822 11.9781L8.8001 12.8L9.7251 13.725C10.0627 14.0626 10.6078 14.0595 10.9454 13.7219C11.2838 13.3843 11.2838 12.8353 10.9454 12.4969L10.0235 11.5766L11.2001 10.4L13.5782 12.7781L15.3251 14.525C15.6627 14.8626 16.2078 14.8595 16.5454 14.5219C16.8838 14.1843 16.8838 13.6353 16.5454 13.2969L16.4235 13.1766L17.6001 12L20.0001 14.4V17.6H4.0001V8Z",fill:"white"}))),n().createElement("div",{className:i.default.tool},n().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},n().createElement("path",{d:"M11.9999 2.3999C6.70753 2.3999 2.3999 6.70753 2.3999 11.9999C2.3999 17.2923 6.70753 21.5999 11.9999 21.5999C17.2923 21.5999 21.5999 17.2923 21.5999 11.9999C21.5999 11.7877 21.5156 11.5843 21.3655 11.4343L21.2468 11.3171C21.229 11.2974 21.2102 11.2786 21.1905 11.2608L12.7952 2.86396C12.7463 2.79691 12.6873 2.73787 12.6202 2.68896L12.5655 2.63428C12.4155 2.48425 12.2121 2.39994 11.9999 2.3999ZM11.2358 4.09678C11.2155 4.3289 11.1999 4.56305 11.1999 4.7999C11.1999 5.08633 11.2157 5.36957 11.2452 5.64834C8.06701 6.02236 5.5999 8.72124 5.5999 11.9999C5.5999 15.5343 8.4655 18.3999 11.9999 18.3999C15.2786 18.3999 17.9774 15.9328 18.3515 12.7546C18.6302 12.7841 18.9135 12.7999 19.1999 12.7999C19.4368 12.7999 19.6709 12.7843 19.903 12.764C19.5146 16.8232 16.1631 19.9999 11.9999 19.9999C7.57228 19.9999 3.9999 16.4275 3.9999 11.9999C3.9999 7.8367 7.17661 4.48525 11.2358 4.09678ZM12.8171 5.14834L18.8515 11.1827C15.5871 11.008 12.9918 8.41271 12.8171 5.14834Z",fill:"white"}))),n().createElement("div",{className:i.default.tool},n().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},n().createElement("path",{d:"M11.9998 0.799805C11.8744 0.79998 11.7508 0.829627 11.639 0.886352C11.5272 0.943078 11.4303 1.02529 11.3561 1.12637C11.348 1.13659 11.3402 1.14701 11.3326 1.15762C9.44372 3.58826 4.7998 11.2186 4.7998 15.1998C4.7998 19.1766 8.023 22.3998 11.9998 22.3998C15.9766 22.3998 19.1998 19.1766 19.1998 15.1998C19.1998 11.2231 14.5662 3.60815 12.6732 1.16855C12.673 1.16828 12.6735 1.16727 12.6732 1.16699C12.6638 1.15314 12.6539 1.13959 12.6436 1.12637C12.5694 1.02529 12.4724 0.943078 12.3606 0.886352C12.2488 0.829627 12.1252 0.79998 11.9998 0.799805ZM7.1998 14.3998C7.6422 14.3998 7.9998 14.7574 7.9998 15.1998C7.9998 16.8878 9.07179 18.4022 10.667 18.967C11.083 19.1142 11.3009 19.5705 11.1529 19.9873C11.0369 20.3153 10.7294 20.5201 10.3998 20.5201C10.3118 20.5201 10.2206 20.506 10.1326 20.4748C7.89982 19.6852 6.3998 17.5646 6.3998 15.1998C6.3998 14.7574 6.7574 14.3998 7.1998 14.3998Z",fill:"white"})))))},null):n().createElement(function(){let[e,A]=(0,t.useState)(1),[r,a]=(0,t.useState)(0),[o,s]=(0,t.useState)(!0),[d,c]=(0,t.useState)(!1);return n().createElement(n().Fragment,null,n().createElement("label",{htmlFor:"name",className:i.default.artworkName},"Artwork name",n().createElement("input",{type:"text",id:"name"})),n().createElement("label",{htmlFor:"descr",className:i.default.artworkDescr},"Description",n().createElement("textarea",{name:"descr",id:"descr"})),n().createElement("div",{className:i.default.typeWrapper},n().createElement("label",null,"Type"),n().createElement("div",{className:i.default.radioContainer},n().createElement("label",{className:i.default.customRadio},n().createElement("input",{type:"radio",name:"option",value:"Auction",onChange:()=>s(!0)}),n().createElement("span",{className:i.default.checkmark}),n().createElement("span",null,"Auction")),n().createElement("label",{className:i.default.customRadio},n().createElement("input",{type:"radio",name:"option",value:"Sale",onChange:()=>s(!1)}),n().createElement("span",{className:i.default.checkmark}),n().createElement("span",null,"Sale")))),n().createElement("div",{className:i.default.wrapper},n().createElement("div",{className:i.default.copiesWrapper},n().createElement("div",{className:i.default.text},"Copies"),n().createElement("div",{className:i.default.counter},n().createElement("div",{className:i.default.counterBtn+" "+(e<2?i.default.counterBtnDisable:""),onClick:()=>{e>1&&A(e-1)}},"-"),e,n().createElement("div",{className:i.default.counterBtn,onClick:()=>{A(e+1)}},"+"))),n().createElement("div",{className:i.default.placeBid},n().createElement("div",{className:i.default.text},o?"Min.sum":"Sum"),n().createElement("div",{className:i.default.placeBidWrapper},n().createElement("div",{className:i.default.inputWrapper},n().createElement(l(),{options:{numeral:!0,delimiter:""},className:i.default.input,onInput:e=>{let{target:A}=e;a(130854e-9*A.value)}}),n().createElement("div",{className:i.default.currency},"TASTE")),n().createElement("div",{className:i.default.cost},"(",(r*e).toFixed(2),"$)")))),o?n().createElement("div",{className:i.default.sell},n().createElement("div",{className:i.default.text},"Selling will end"),d?n().createElement("div",{className:i.default.sellWrapper},n().createElement(l(),{options:{date:!0,delimiter:".",datePattern:["d","m","Y"]},className:i.default.date,placeholder:"00.00.0000"}),n().createElement(l(),{options:{time:!0,timePattern:["h","m"]},className:i.default.time,placeholder:"00:00"}),n().createElement("div",{className:i.default.timer},"05h 02m 41s"),n().createElement("div",{className:i.default.delete,onClick:()=>c(!d)},n().createElement("span",{className:"icon-close"}),"delete file")):n().createElement("div",{className:i.default.btnTime,onClick:()=>c(!d)},"Set timer")):"")},null),n().createElement("div",{className:i.default.btn},3==o?n().createElement(s.default,{text:"Finish creating",onClick:f}):n().createElement(s.default,{text:"Next step",onClick:f}))))}},"./src/components/modal/editProfile/index.jsx":(e,A,r)=>{r.r(A),r.d(A,{default:()=>i});var t=r(/*! react */"./node_modules/react/index.js"),n=r.n(t),a=r(/*! ../../button/btn/Btn */"./src/components/button/btn/Btn.jsx"),o=r(/*! formik */"./node_modules/formik/dist/formik.esm.js"),l=r(/*! yup */"./node_modules/yup/index.esm.js"),s=r(/*! ./index.module.scss */"./src/components/modal/editProfile/index.module.scss");let i=e=>{let{state:A,onClick:r}=e;return(0,t.useEffect)(()=>{A?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[A]),n().createElement("div",{className:s.default.backdoor+" "+(A?s.default.backdoorActive:"")},n().createElement("div",{className:s.default.modal},n().createElement("div",{className:s.default.close,onClick:r},n().createElement("span",{className:"icon-close"})),n().createElement("div",{className:s.default.title},"Edit your Profile"),n().createElement(o.Formik,{initialValues:{name:"",userName:"",email:"",bio:"",file:"",twitch:"",instagram:"",twitter:"",Onlyfans:""},validationSchema:l.object({name:l.string().required("input name"),userName:l.string().required("input userName"),email:l.string().email("Invalid email").required("input email"),bio:l.string(),file:l.string(),twitch:l.string().url(),instagram:l.string().url(),twitter:l.string().url(),Onlyfans:l.string().url()})},n().createElement(o.Form,{className:s.default.form},n().createElement("label",{htmlFor:"name"},"Name",n().createElement(o.Field,{type:"text",id:"name",name:"name"}),n().createElement(o.ErrorMessage,{name:"name"})),n().createElement("label",{htmlFor:"userName"},"Username",n().createElement(o.Field,{type:"text",id:"userName",name:"userName"}),n().createElement(o.ErrorMessage,{name:"userName"})),n().createElement("label",{htmlFor:"email"},"Email",n().createElement(o.Field,{type:"text",id:"email",name:"email"}),n().createElement(o.ErrorMessage,{name:"email"})),n().createElement("div",{className:s.default.info},"Add your email address to receive notifications about your activity on Foundation. This will not be shown on your profile."),n().createElement("label",{htmlFor:"bio"},"BIO",n().createElement(o.Field,{type:"text",id:"bio",name:"bio",as:"textarea"}),n().createElement(o.ErrorMessage,{name:"bio"})),n().createElement("label",{htmlFor:"bio"},"Profile image",n().createElement(o.Field,{type:"file",id:"file",name:"file"}),n().createElement(o.ErrorMessage,{name:"bio"})),n().createElement("div",{className:s.default.wrapper},n().createElement("div",{className:s.default.wrapperTitle},"Contacts"),n().createElement("div",{className:s.default.inputWrapper+" "+s.default.first},n().createElement("label",{htmlFor:"twitch"},n().createElement("span",{className:"icon-twitch"}),"Twitch"),n().createElement(o.Field,{type:"text",id:"twitch",name:"twitch"}),n().createElement(o.ErrorMessage,{name:"twitch"})),n().createElement("div",{className:s.default.inputWrapper},n().createElement("label",{htmlFor:"instagram"},n().createElement("span",{className:"icon-instagram"}),"Instagram"),n().createElement(o.Field,{type:"text",id:"instagram",name:"instagram"}),n().createElement(o.ErrorMessage,{name:"instagram"})),n().createElement("div",{className:s.default.inputWrapper},n().createElement("label",{htmlFor:"twitter"},n().createElement("span",{className:"icon-twitter"}),"Twitter"),n().createElement(o.Field,{type:"text",id:"twitter",name:"twitter"}),n().createElement(o.ErrorMessage,{name:"twitter"})),n().createElement("div",{className:s.default.inputWrapper},n().createElement("label",{htmlFor:"onlyfans"},n().createElement("span",{className:"icon-onlyfans"}),"Onlyfans"),n().createElement(o.Field,{type:"text",id:"onlyfans",name:"onlyfans"}),n().createElement(o.ErrorMessage,{name:"onlyfans"}))),n().createElement("div",{className:s.default.btn},n().createElement(a.default,{text:"Save changes"}))))))}},"./src/components/profileCardGroup/index.jsx":(e,A,r)=>{r.r(A),r.d(A,{default:()=>g});var t=r(/*! react */"./node_modules/react/index.js"),n=r.n(t),a=r(/*! react-dom */"./node_modules/react-dom/index.js"),o=r(/*! ../card/profileCard */"./src/components/card/profileCard/index.jsx"),l=r(/*! ../modal/changeTimer */"./src/components/modal/changeTimer/index.jsx"),s=r(/*! ./index.module.scss */"./src/components/profileCardGroup/index.module.scss"),i=r(/*! ../../img/artWork/artWork1.jpg */"./src/img/artWork/artWork1.jpg"),d=r(/*! ../../img/artWork/artWork2.jpg */"./src/img/artWork/artWork2.jpg"),c=r(/*! ../../img/artWork/artWork3.jpg */"./src/img/artWork/artWork3.jpg"),p=r(/*! ../../img/artWork/artWork4.jpg */"./src/img/artWork/artWork4.jpg"),m=r(/*! ../../img/artWork/artWork5.jpg */"./src/img/artWork/artWork5.jpg"),f=r(/*! ../../img/artWork/artWork6.jpg */"./src/img/artWork/artWork6.jpg"),E=r(/*! ../../img/artWork/artWork7.jpg */"./src/img/artWork/artWork7.jpg"),u=r(/*! ../../img/artWork/artWork8.jpg */"./src/img/artWork/artWork8.jpg");let g=()=>{let[e,A]=(0,t.useState)(!1),r=()=>{e||A(!e)};return n().createElement("div",{className:s.default.artWorkSections},n().createElement(o.default,{artWork:i,state:"Approved",setActive:r}),n().createElement(o.default,{artWork:d,state:"On moderation",setActive:r}),n().createElement(o.default,{artWork:c,state:"Declined",setActive:r}),n().createElement(o.default,{artWork:p,state:"Approved",setActive:r}),n().createElement(o.default,{artWork:m,state:"Approved",setActive:r}),n().createElement(o.default,{artWork:f,state:"Approved",setActive:r}),n().createElement(o.default,{artWork:E,state:"Approved",setActive:r}),n().createElement(o.default,{artWork:u,state:"Approved",setActive:r}),(0,a.createPortal)(n().createElement(l.default,{active:e,closeModal:()=>{e&&A(!e)}}),document.body))}},"./src/pages/myProfile/index.jsx":(e,A,r)=>{r.r(A),r.d(A,{default:()=>m});var t=r(/*! react */"./node_modules/react/index.js"),n=r.n(t),a=r(/*! react-dom */"./node_modules/react-dom/index.js"),o=r(/*! react-helmet */"./node_modules/react-helmet/es/Helmet.js"),l=r(/*! ../../components/spinner */"./src/components/spinner/index.jsx"),s=r(/*! ../../components/profileCardGroup */"./src/components/profileCardGroup/index.jsx"),i=r(/*! ../../components/modal/editProfile */"./src/components/modal/editProfile/index.jsx"),d=r(/*! ../../components/modal/createArtwork */"./src/components/modal/createArtwork/index.jsx"),c=r(/*! ./index.module.scss */"./src/pages/myProfile/index.module.scss"),p=r(/*! ../../img/user/user9.png */"./src/img/user/user9.png");let m=e=>{let{setProfile:A,setModalEdit:r,setModalCreate:m,modalEdit:f,modalCreate:E}=e,[u,g]=(0,t.useState)(0);return(0,t.useEffect)(()=>{A(!0)},[]),(0,t.useEffect)(()=>()=>A(!1),[]),n().createElement(n().Fragment,null,n().createElement(o.Helmet,null,n().createElement("title",null,"My profile - TasteNFT")),n().createElement("div",{className:c.default.wrapper},n().createElement("div",{className:c.default.user},n().createElement("div",{className:c.default.userInfo},n().createElement("div",{className:c.default.userImg},n().createElement("img",{src:p,alt:"userImg"})),n().createElement("div",{className:c.default.userWrapper},n().createElement("div",{className:c.default.userName},"User Name"),n().createElement("div",{className:c.default.userTag},"@username"))),n().createElement("div",{className:c.default.userDetail},n().createElement("div",{className:c.default.userFollowers},n().createElement("div",{className:c.default.userFollowersCount},"234"),n().createElement("div",{className:c.default.userFollowersText},"Followers")),n().createElement("div",{className:c.default.userFollowing},n().createElement("div",{className:c.default.userFollowingCount},"15"),n().createElement("div",{className:c.default.userFollowingText},"Following")),n().createElement("div",{className:c.default.userExternal},n().createElement("div",{className:c.default.externalLink},n().createElement("span",{className:"icon-external-link"})),n().createElement("div",{className:c.default.externalLink},n().createElement("span",{className:"icon-share"})),n().createElement("div",{className:c.default.externalLink},n().createElement("span",{className:"icon-menu-vertical"}))))),n().createElement("div",{className:c.default.social},n().createElement("div",{className:c.default.socialLink},n().createElement("span",{className:"icon-twitch"}),"Twitch"),n().createElement("div",{className:c.default.socialLink},n().createElement("span",{className:"icon-instagram"}),"Instagram"),n().createElement("div",{className:c.default.socialLink},n().createElement("span",{className:"icon-twitter"}),"Twitter"),n().createElement("div",{className:c.default.socialLink},n().createElement("span",{className:"icon-onlyfans"}),"Onlyfans")),n().createElement("div",{className:c.default.descr},n().createElement("span",null,"Description:"),' The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, VK (ВКонта́кте), and Bilibili (B 站). The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).'),n().createElement("div",{className:c.default.tabs},n().createElement("div",{className:c.default.selector,onClick:e=>{let A=e.target.parentNode;switch(e.target.id){case"0":A.childNodes.forEach(e=>{e.classList.contains(c.default.selectorItemActive)&&e.classList.remove(c.default.selectorItemActive)}),A.childNodes[0].classList.add(c.default.selectorItemActive),g(0);break;case"1":A.childNodes.forEach(e=>{e.classList.contains(c.default.selectorItemActive)&&e.classList.remove(c.default.selectorItemActive)}),A.childNodes[1].classList.add(c.default.selectorItemActive),g(1);break;case"2":A.childNodes.forEach(e=>{e.classList.contains(c.default.selectorItemActive)&&e.classList.remove(c.default.selectorItemActive)}),A.childNodes[2].classList.add(c.default.selectorItemActive),g(2)}}},n().createElement("div",{className:c.default.selectorItemActive+" "+c.default.selectorItem,id:"0"},"Created"),n().createElement("div",{className:c.default.selectorItem,id:"1"},"Collected"),n().createElement("div",{className:c.default.selectorItem,id:"2"},"Bids")),(()=>{switch(u){case 0:return n().createElement(s.default,null);case 1:case 2:return n().createElement(l.default,null)}})())),(0,a.createPortal)(n().createElement(i.default,{state:f,onClick:()=>{f&&r(!f)}}),document.body),(0,a.createPortal)(n().createElement(d.default,{state:E,onClick:()=>{E&&m(!E)}}),document.body))}},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/card/profileCard/index.module.scss":(e,A,r)=>{r.r(A),r.d(A,{default:()=>l});var t=r(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),n=r.n(t),a=r(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),o=r.n(a)()(n());o.push([e.id,`.U0FSV3L1MzhJBxbtKS8q {
  width: 317px;
  position: relative;
}

.eH7IdYTBa816n7gk3QzY {
  height: 317px;
  border-radius: 1px;
}

.SwtA0mB3zFZcJZxNZELi {
  padding: 26px 15px 15px;
  border: 1px solid #333940;
  border-top: 0px solid transparent;
}

.tQRBCU5ypOoosCNSaG7S {
  margin-bottom: 14px;
  color: #fff;
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 700;
}

.X0FxDrht6MZb7AghKn23 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.X0FxDrht6MZb7AghKn23:last-child {
  margin-top: 12px;
}

.rYF1RwsKTIFa6wznZgEZ {
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 600;
}

.m7OFXnWhYV0fm49Rfq3k {
  color: #fff;
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}

.PrYK2ht7qUlG32mmK9Ow {
  margin-right: 37px;
  display: flex;
  align-items: center;
  color: #fff;
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}
.PrYK2ht7qUlG32mmK9Ow img {
  margin-right: 5px;
}

.RZf4E2lXmZFcCDmGLcwg {
  padding: 13px 14px 12px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  top: 16px;
  left: 16px;
}

.yB3P5hUUcMNYUGAJdv2i {
  color: #86d084;
}

.Pan1Y5YCjijGhCsMimbK {
  color: #ffba09;
}

.bu92HEN8tVN3kYHGGHiz {
  color: #ff5e54;
}

.C86I6jTMq7kN_eQN6hSc {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  background: #fff;
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 22px;
  right: 16px;
  z-index: 1;
  cursor: pointer;
  transition: all 0.2s;
}
.C86I6jTMq7kN_eQN6hSc span {
  font-size: 18px;
  pointer-events: none;
}

.Eh4oi8_EiYGUjUjOGlq6 {
  background: rgba(255, 255, 255, 0.5);
}
.Eh4oi8_EiYGUjUjOGlq6 span {
  color: #fff;
}

.Eh4oi8_EiYGUjUjOGlq6 ~ .Pd6auPFrXPocWg4eEWRM {
  top: var(--top);
}

.Eh4oi8_EiYGUjUjOGlq6 ~ .Wq7YEmqHt71mZaCjWhiu {
  top: var(--top);
}

.Eh4oi8_EiYGUjUjOGlq6 ~ .fFNOrDE6q0c77QeB7brG {
  top: var(--top);
}

.Pd6auPFrXPocWg4eEWRM,
.Wq7YEmqHt71mZaCjWhiu,
.fFNOrDE6q0c77QeB7brG {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  background: #fff;
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 22px;
  right: 16px;
  z-index: 0;
  cursor: pointer;
  transition: all 0.2s;
}

.Pd6auPFrXPocWg4eEWRM span {
  color: #ff5e54;
}

.Wq7YEmqHt71mZaCjWhiu span {
  color: rgb(83, 176, 81);
}

.fFNOrDE6q0c77QeB7brG span {
  color: rgb(35, 31, 32);
}`,"",{version:3,sources:["webpack://./src/components/card/profileCard/index.module.scss"],names:[],mappings:"AAAA;EACE,YAAA;EAEA,kBAAA;AAAF;;AAGA;EACE,aAAA;EACA,kBAAA;AAAF;;AAGA;EACE,uBAAA;EACA,yBAAA;EACA,iCAAA;AAAF;;AAGA;EACE,mBAAA;EACA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AAAF;AACE;EACE,gBAAA;AACJ;;AAGA;EACE,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAAF;;AAGA;EACE,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAAF;AACE;EACE,iBAAA;AACJ;;AAGA;EACE,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,gDAAA;EAEA,sBAAA;EACA,eAAA;EACA,gBAAA;EAEA,kBAAA;EACA,SAAA;EACA,UAAA;AAFF;;AAIA;EACE,cAAA;AADF;;AAGA;EACE,cAAA;AAAF;;AAEA;EACE,cAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,mBAAA;EACA,gBAAA;EACA,gDAAA;EAEA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA;EAEA,eAAA;EAEA,oBAAA;AAHF;AAKE;EACE,eAAA;EACA,oBAAA;AAHJ;;AAMA;EACE,oCAAA;AAHF;AAIE;EACE,WAAA;AAFJ;;AAKA;EACE,eAAA;AAFF;;AAIA;EACE,eAAA;AADF;;AAGA;EACE,eAAA;AAAF;;AAEA;;;EAGE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,mBAAA;EACA,gBAAA;EACA,gDAAA;EAEA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;EACA,oBAAA;AADF;;AAIE;EACE,cAAA;AADJ;;AAKE;EACE,uBAAA;AAFJ;;AAME;EACE,sBAAA;AAHJ",sourcesContent:[".artWork {\r\n  width: 317px;\r\n\r\n  position: relative;\r\n}\r\n\r\n.artWorkImg {\r\n  height: 317px;\r\n  border-radius: 1px;\r\n}\r\n\r\n.artWorkWrapper {\r\n  padding: 26px 15px 15px;\r\n  border: 1px solid #333940;\r\n  border-top: 0px solid transparent;\r\n}\r\n\r\n.artWorkName {\r\n  margin-bottom: 14px;\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n}\r\n\r\n.artWorkContainer {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  &:last-child {\r\n    margin-top: 12px;\r\n  }\r\n}\r\n\r\n.artWorkDescr {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n}\r\n\r\n.artWorkTimer {\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n\r\n.artWorkSold {\r\n  margin-right: 37px;\r\n  display: flex;\r\n  align-items: center;\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  img {\r\n    margin-right: 5px;\r\n  }\r\n}\r\n\r\n.state {\r\n  padding: 13px 14px 12px;\r\n  border-radius: 12px;\r\n  background: #fff;\r\n  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);\r\n\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n\r\n  position: absolute;\r\n  top: 16px;\r\n  left: 16px;\r\n}\r\n.approved {\r\n  color: #86d084;\r\n}\r\n.moderation {\r\n  color: #ffba09;\r\n}\r\n.declined {\r\n  color: #ff5e54;\r\n}\r\n\r\n.menu {\r\n  width: 32px;\r\n  height: 32px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  border-radius: 99px;\r\n  background: #fff;\r\n  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.15);\r\n\r\n  position: absolute;\r\n  top: 22px;\r\n  right: 16px;\r\n  z-index: 1;\r\n\r\n  cursor: pointer;\r\n\r\n  transition: all 0.2s;\r\n\r\n  span {\r\n    font-size: 18px;\r\n    pointer-events: none;\r\n  }\r\n}\r\n.menuActive {\r\n  background: rgba(255, 255, 255, 0.5);\r\n  span {\r\n    color: #fff;\r\n  }\r\n}\r\n.menuActive ~ .delete {\r\n  top: var(--top);\r\n}\r\n.menuActive ~ .edit {\r\n  top: var(--top);\r\n}\r\n.menuActive ~ .time {\r\n  top: var(--top);\r\n}\r\n.delete,\r\n.edit,\r\n.time {\r\n  width: 32px;\r\n  height: 32px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  border-radius: 99px;\r\n  background: #fff;\r\n  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.15);\r\n\r\n  position: absolute;\r\n  top: 22px;\r\n  right: 16px;\r\n  z-index: 0;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n}\r\n.delete {\r\n  span {\r\n    color: #ff5e54;\r\n  }\r\n}\r\n.edit {\r\n  span {\r\n    color: rgba(83, 176, 81, 1);\r\n  }\r\n}\r\n.time {\r\n  span {\r\n    color: rgba(35, 31, 32, 1);\r\n  }\r\n}\r\n"],sourceRoot:""}]),o.locals={artWork:"U0FSV3L1MzhJBxbtKS8q",artWorkImg:"eH7IdYTBa816n7gk3QzY",artWorkWrapper:"SwtA0mB3zFZcJZxNZELi",artWorkName:"tQRBCU5ypOoosCNSaG7S",artWorkContainer:"X0FxDrht6MZb7AghKn23",artWorkDescr:"rYF1RwsKTIFa6wznZgEZ",artWorkTimer:"m7OFXnWhYV0fm49Rfq3k",artWorkSold:"PrYK2ht7qUlG32mmK9Ow",state:"RZf4E2lXmZFcCDmGLcwg",approved:"yB3P5hUUcMNYUGAJdv2i",moderation:"Pan1Y5YCjijGhCsMimbK",declined:"bu92HEN8tVN3kYHGGHiz",menu:"C86I6jTMq7kN_eQN6hSc",menuActive:"Eh4oi8_EiYGUjUjOGlq6",delete:"Pd6auPFrXPocWg4eEWRM",edit:"Wq7YEmqHt71mZaCjWhiu",time:"fFNOrDE6q0c77QeB7brG"};let l=o},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/changeTimer/index.module.scss":(e,A,r)=>{r.r(A),r.d(A,{default:()=>l});var t=r(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),n=r.n(t),a=r(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),o=r.n(a)()(n());o.push([e.id,`.dCtk_kydgUuUmZok3Y2l {
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
  z-index: 2;
}

.MiAVTOzUdJxbIl0x_UJs {
  display: block;
}

._Eh640URhw9suHcA_J1u {
  color: #fff;
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
  text-align: center;
}

.gdn6yslK9zRGT5ei_ECH {
  margin-top: 24px;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}

.XB5DQsjvCprLd3CNBYbN {
  margin-top: 8px;
  display: flex;
}

.KTRyIJvEzzqqbLy0IQl0,
.xrhla9qHf0S7mEr8FECw {
  padding-left: 16px;
  width: 127px;
  height: 40px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 8px;
  background: #1d2228;
  color: #fff;
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}

.xrhla9qHf0S7mEr8FECw {
  margin-left: 8px;
  width: 75px;
  height: 40px;
}

.myQNBdLzrRi7ie3AAg7K {
  margin-left: 12px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}

.jgwQMR6kGcsq1Knbo_BS {
  margin-left: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #ff5e54;
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}
.jgwQMR6kGcsq1Knbo_BS span {
  font-size: 10px;
}

.RES9BfAmNHNEpiLEffXw {
  margin-top: 32px;
  display: flex;
  justify-content: center;
}

.kLMjdYbindfpG7MUsBAw {
  position: absolute;
  top: 51px;
  right: 24px;
  cursor: pointer;
}
.kLMjdYbindfpG7MUsBAw span {
  color: #fff;
  font-size: 16px;
  pointer-events: none;
}`,"",{version:3,sources:["webpack://./src/components/modal/changeTimer/index.module.scss"],names:[],mappings:"AAAA;EACE,uBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,iDAAA;EACA,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,UAAA;AACF;;AACA;EACE,cAAA;AAEF;;AAAA;EACE,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AAGF;;AADA;EACE,gBAAA;EACA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAIF;;AAFA;EACE,eAAA;EACA,aAAA;AAKF;;AAHA;;EAEE,kBAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAMF;;AAJA;EACE,gBAAA;EACA,WAAA;EACA,YAAA;AAOF;;AALA;EACE,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAQF;;AANA;EACE,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,QAAA;EACA,cAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;AASF;AARE;EACE,eAAA;AAUJ;;AAPA;EACE,gBAAA;EACA,aAAA;EACA,uBAAA;AAUF;;AARA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;AAWF;AAVE;EACE,WAAA;EACA,eAAA;EACA,oBAAA;AAYJ",sourcesContent:[".modal {\r\n  padding: 45px 24px 32px;\r\n  width: 653px;\r\n  display: none;\r\n  border-radius: 32px;\r\n  background: #30363d;\r\n  box-shadow: 0px 25px 40px 0px rgba(0, 0, 0, 0.05);\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 2;\r\n}\r\n.modalActive {\r\n  display: block;\r\n}\r\n.title {\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  text-align: center;\r\n}\r\n.subtitle {\r\n  margin-top: 24px;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n.wrapper {\r\n  margin-top: 8px;\r\n  display: flex;\r\n}\r\n.date,\r\n.time {\r\n  padding-left: 16px;\r\n  width: 127px;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  border: none;\r\n  border-radius: 8px;\r\n  background: #1d2228;\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n.time {\r\n  margin-left: 8px;\r\n  width: 75px;\r\n  height: 40px;\r\n}\r\n.timer {\r\n  margin-left: 12px;\r\n  display: flex;\r\n  align-items: center;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n.delete {\r\n  margin-left: 16px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n  color: #ff5e54;\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  span {\r\n    font-size: 10px;\r\n  }\r\n}\r\n.btn {\r\n  margin-top: 32px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.close {\r\n  position: absolute;\r\n  top: 51px;\r\n  right: 24px;\r\n  cursor: pointer;\r\n  span {\r\n    color: #fff;\r\n    font-size: 16px;\r\n    pointer-events: none;\r\n  }\r\n}\r\n"],sourceRoot:""}]),o.locals={modal:"dCtk_kydgUuUmZok3Y2l",modalActive:"MiAVTOzUdJxbIl0x_UJs",title:"_Eh640URhw9suHcA_J1u",subtitle:"gdn6yslK9zRGT5ei_ECH",wrapper:"XB5DQsjvCprLd3CNBYbN",date:"KTRyIJvEzzqqbLy0IQl0",time:"xrhla9qHf0S7mEr8FECw",timer:"myQNBdLzrRi7ie3AAg7K",delete:"jgwQMR6kGcsq1Knbo_BS",btn:"RES9BfAmNHNEpiLEffXw",close:"kLMjdYbindfpG7MUsBAw"};let l=o},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/createArtwork/index.module.scss":(e,A,r)=>{r.r(A),r.d(A,{default:()=>l});var t=r(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),n=r.n(t),a=r(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),o=r.n(a)()(n());o.push([e.id,`.gXvz0kF8oIDiUlQwIRFI {
  padding: 10px 0;
  width: 100vw;
  height: 100vh;
  display: none;
  align-items: flex-start;
  justify-content: center;
  background: rgba(35, 31, 32, 0.7);
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}

.n19oU0CeBwKg31JvdE89 {
  display: flex;
}

.TsN8__lqr4XeHsw5mSDX {
  padding: 45px 27px 32px;
  width: 653px;
  border-radius: 32px;
  background: #30363d;
  box-shadow: 0px 25px 40px 0px rgba(0, 0, 0, 0.05);
  position: relative;
}

.yNjbfImHwXs2BrMZFPLT {
  position: absolute;
  top: 51px;
  right: 24px;
  cursor: pointer;
}
.yNjbfImHwXs2BrMZFPLT span {
  font-size: 16px;
  color: #fff;
  pointer-events: none;
}

.eFnXHDUqhjB8M7DV98nZ {
  color: #fff;
  text-align: center;
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
}

.rzxcOUUnd2La8RYLcV_Y {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.g7hKkSvHwltggI6hIkWi {
  width: 150px;
  height: 5px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);
}

._jHp9zYUsPOD4i9f22d4 {
  width: 150px;
  height: 5px;
  border-radius: 12px;
  background: linear-gradient(270deg, #8743ff 0%, #4136f1 100%);
  background: var(--linear, linear-gradient(270deg, #8743ff 0%, #4136f1 100%));
}

.M9b5jpRqnl_EKJDnphL8 {
  margin-top: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 12px;
  font-weight: 600;
}

.wwjs8JgN7GUFmjpsRggn {
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}

.ZMfXN0AOyBtvXdtz47NR {
  margin-top: 12px;
  width: 599px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  border: 1px dashed #c4c4c4;
}
.ZMfXN0AOyBtvXdtz47NR p {
  margin-top: 30px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 400;
}

.qiDjAElf6GUom0Mnp33n {
  width: 110px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 400;
}

.wdE8FJqeMUw8R_A17JKB {
  padding-top: 32px;
  display: flex;
  justify-content: center;
}

.K5vwJxhVviyenpLNhp7j {
  margin-top: 12px;
}

.ouC2NkmS3isl1zZM0gdP {
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.DGtGz1ZHmAXNYuUhnfAs {
  cursor: pointer;
  transition: all 0.2s;
}
.DGtGz1ZHmAXNYuUhnfAs:hover {
  filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5));
}

.fagiYfUuaT7kvdahr1ne {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}
.fagiYfUuaT7kvdahr1ne input {
  padding-left: 15px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background: #1d2228;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}
.fagiYfUuaT7kvdahr1ne input:focus {
  outline: none;
}

.r9NVYajz2Wd_4IdYgk4Q {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}
.r9NVYajz2Wd_4IdYgk4Q textarea {
  padding: 15px;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  background: #1d2228;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
  resize: none;
}
.r9NVYajz2Wd_4IdYgk4Q textarea:focus {
  outline: none;
}

.XIZF9ZhGKhSAWopwl4bC {
  margin-top: 24px;
}
.XIZF9ZhGKhSAWopwl4bC label {
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}

.LPCqSdIBT547VNxjplCV {
  margin-top: 13px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.nVgubMOtyH0i9g6hyhww {
  padding-left: 26px;
  padding-top: 3px;
  height: 20px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
  position: relative;
  cursor: pointer;
}
.nVgubMOtyH0i9g6hyhww input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.KKTTWePHIBLgZJSx0HVR {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.nVgubMOtyH0i9g6hyhww input:checked ~ .KKTTWePHIBLgZJSx0HVR {
  border-color: #8743ff;
}

.KKTTWePHIBLgZJSx0HVR:after {
  content: "";
  position: absolute;
  display: none;
}

.nVgubMOtyH0i9g6hyhww input:checked ~ .KKTTWePHIBLgZJSx0HVR:after {
  display: block;
}

.nVgubMOtyH0i9g6hyhww input:checked ~ span {
  color: #fff;
}

.nVgubMOtyH0i9g6hyhww .KKTTWePHIBLgZJSx0HVR:after {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);
}

.RZdTJpGwAVu5PntjSp7C {
  margin-top: 24px;
  display: flex;
  gap: 30px;
}

.cUeCOGHJaIIlCIquzp_C {
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}

.KskMKxEeyJ_ngfxQuLGf {
  margin-top: 3px;
  display: flex;
  align-items: center;
  gap: 11px;
  color: #fff;
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}

.ZI4PJjxgGwFvCouyIrv1 {
  color: #fff;
  font-family: "Raleway";
  font-size: 40px;
  font-weight: 700;
  cursor: pointer;
}

.jdvwNDhRNM7cl20qQqIx {
  color: rgba(255, 255, 255, 0.5);
}

.OZdWLLNoPFAX6FTqf9SH {
  margin-top: 8px;
  display: flex;
  align-items: center;
}

.qLtMAk7OXPsr3KI5Fq0m {
  width: 176px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background: #1d2228;
}

.zJP5HTkQ8ez20L21cz62 {
  margin-left: 16px;
  width: 80px;
  background: transparent;
  border: none;
  color: #fff;
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}
.zJP5HTkQ8ez20L21cz62:focus {
  border: none;
  outline: none;
}

.Y4PVq4APExQGTpcALQe0 {
  margin-right: 12px;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}

.EDs27PrB9aENOhnMygNl {
  margin-left: 9px;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}

.ZQplVWtpwK_G5JBMImHl {
  margin-top: 24px;
}

.Y90xFvyFIYECz0NFJbiV {
  margin-top: 8px;
  display: flex;
}

.fOg7etFxqpgPgofQ09W4,
.G0v1tCRL95okKwLVdHIw {
  padding-left: 16px;
  width: 127px;
  height: 40px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 8px;
  background: #1d2228;
  color: #fff;
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}

.G0v1tCRL95okKwLVdHIw {
  margin-left: 8px;
  width: 75px;
  height: 40px;
}

.kwIEBL9vMHkcIUBUkP0Y {
  margin-left: 12px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}

.IGR2129VHxzBUXhYmrbk {
  margin-left: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #ff5e54;
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}
.IGR2129VHxzBUXhYmrbk span {
  font-size: 10px;
}

.hucmsgSJb3KSpyXJuhDD {
  margin-top: 16px;
  background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}`,"",{version:3,sources:["webpack://./src/components/modal/createArtwork/index.module.scss"],names:[],mappings:"AAAA;EACE,eAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;EACA,uBAAA;EACA,iCAAA;EACA,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;AACF;;AACA;EACE,aAAA;AAEF;;AAAA;EACE,uBAAA;EACA,YAAA;EACA,mBAAA;EACA,mBAAA;EACA,iDAAA;EACA,kBAAA;AAGF;;AADA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;AAIF;AAHE;EACE,eAAA;EACA,WAAA;EACA,oBAAA;AAKJ;;AAFA;EACE,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAKF;;AAHA;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,QAAA;AAMF;;AAJA;EACE,YAAA;EACA,WAAA;EACA,mBAAA;EACA,oCAAA;AAOF;;AALA;EACE,YAAA;EACA,WAAA;EACA,mBAAA;EACA,6DAAA;EAAA,4EAAA;AAQF;;AANA;EACE,gBAAA;EACA,kBAAA;EACA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AASF;;AAPA;EACE,gBAAA;EACA,+BAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAUF;;AARA;EACE,gBAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,0BAAA;AAWF;AATE;EACE,gBAAA;EACA,+BAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAWJ;;AARA;EACE,YAAA;EACA,+BAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAWF;;AATA;EACE,iBAAA;EACA,aAAA;EACA,uBAAA;AAYF;;AAVA;EACE,gBAAA;AAaF;;AAXA;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;AAcF;;AAZA;EACE,eAAA;EACA,oBAAA;AAeF;AAdE;EACE,yDAAA;AAgBJ;;AAbA;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;EACA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAgBF;AAfE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;EAEA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAgBJ;AAfI;EACE,aAAA;AAiBN;;AAbA;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;EACA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAgBF;AAdE;EACE,aAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;EAEA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EAEA,YAAA;AAcJ;AAbI;EACE,aAAA;AAeN;;AAXA;EACE,gBAAA;AAcF;AAbE;EACE,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAeJ;;AAZA;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;AAeF;;AAbA;EACE,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;AAgBF;AAdE;EACE,kBAAA;EACA,UAAA;EACA,eAAA;AAgBJ;;AAbA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,6BAAA;EACA,kBAAA;EACA,0CAAA;AAgBF;;AAdA;EACE,qBAAA;AAiBF;;AAdA;EACE,WAAA;EACA,kBAAA;EACA,aAAA;AAiBF;;AAdA;EACE,cAAA;AAiBF;;AAfA;EACE,WAAA;AAkBF;;AAfA;EACE,QAAA;EACA,SAAA;EACA,gCAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,6DAAA;AAkBF;;AAhBA;EACE,gBAAA;EACA,aAAA;EACA,SAAA;AAmBF;;AAfA;EACE,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAkBF;;AAhBA;EACE,eAAA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;EACA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAmBF;;AAjBA;EACE,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;AAoBF;;AAlBA;EACE,+BAAA;AAqBF;;AAjBA;EACE,eAAA;EACA,aAAA;EACA,mBAAA;AAoBF;;AAlBA;EACE,YAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,kBAAA;EACA,mBAAA;AAqBF;;AAnBA;EACE,iBAAA;EACA,WAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAsBF;AArBE;EACE,YAAA;EACA,aAAA;AAuBJ;;AApBA;EACE,kBAAA;EACA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAuBF;;AArBA;EACE,gBAAA;EACA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAwBF;;AAtBA;EACE,gBAAA;AAyBF;;AAvBA;EACE,eAAA;EACA,aAAA;AA0BF;;AAxBA;;EAEE,kBAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AA2BF;;AAzBA;EACE,gBAAA;EACA,WAAA;EACA,YAAA;AA4BF;;AA1BA;EACE,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AA6BF;;AA3BA;EACE,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,QAAA;EACA,cAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;AA8BF;AA7BE;EACE,eAAA;AA+BJ;;AA5BA;EACE,gBAAA;EACA,6DAAA;EACA,qBAAA;EACA,6BAAA;EACA,oCAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AA+BF",sourcesContent:[".backdoor {\r\n  padding: 10px 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: none;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  background: rgba(35, 31, 32, 0.7);\r\n  overflow-y: scroll;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 5;\r\n}\r\n.backdoorActive {\r\n  display: flex;\r\n}\r\n.modal {\r\n  padding: 45px 27px 32px;\r\n  width: 653px;\r\n  border-radius: 32px;\r\n  background: #30363d;\r\n  box-shadow: 0px 25px 40px 0px rgba(0, 0, 0, 0.05);\r\n  position: relative;\r\n}\r\n.close {\r\n  position: absolute;\r\n  top: 51px;\r\n  right: 24px;\r\n  cursor: pointer;\r\n  span {\r\n    font-size: 16px;\r\n    color: #fff;\r\n    pointer-events: none;\r\n  }\r\n}\r\n.title {\r\n  color: #fff;\r\n  text-align: center;\r\n  font-family: 'Raleway';\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n}\r\n.stepWrapper {\r\n  margin-top: 16px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 6px;\r\n}\r\n.step {\r\n  width: 150px;\r\n  height: 5px;\r\n  border-radius: 12px;\r\n  background: rgba(255, 255, 255, 0.2);\r\n}\r\n.stepActive {\r\n  width: 150px;\r\n  height: 5px;\r\n  border-radius: 12px;\r\n  background: var(--linear, linear-gradient(270deg, #8743ff 0%, #4136f1 100%));\r\n}\r\n.stepCount {\r\n  margin-top: 16px;\r\n  text-align: center;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n.info {\r\n  margin-top: 20px;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  text-align: center;\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n.dropzone {\r\n  margin-top: 12px;\r\n  width: 599px;\r\n  height: 360px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 16px;\r\n  border: 1px dashed #c4c4c4;\r\n\r\n  p {\r\n    margin-top: 30px;\r\n    color: rgba(255, 255, 255, 0.5);\r\n    text-align: center;\r\n    font-family: 'Raleway';\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n  }\r\n}\r\n.dropInfo {\r\n  width: 110px;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  text-align: center;\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n}\r\n.btn {\r\n  padding-top: 32px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.img {\r\n  margin-top: 12px;\r\n}\r\n.tools {\r\n  margin-top: 16px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n.tool {\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n  &:hover {\r\n    filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5));\r\n  }\r\n}\r\n.artworkName {\r\n  margin-top: 24px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  input {\r\n    padding-left: 15px;\r\n    width: 100%;\r\n    height: 40px;\r\n    border-radius: 8px;\r\n    background: #1d2228;\r\n    border: none;\r\n\r\n    color: rgba(255, 255, 255, 0.5);\r\n    font-family: 'Raleway';\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    &:focus {\r\n      outline: none;\r\n    }\r\n  }\r\n}\r\n.artworkDescr {\r\n  margin-top: 24px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n\r\n  textarea {\r\n    padding: 15px;\r\n    width: 100%;\r\n    height: 120px;\r\n    border-radius: 8px;\r\n    background: #1d2228;\r\n    border: none;\r\n\r\n    color: rgba(255, 255, 255, 0.5);\r\n    font-family: 'Raleway';\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n\r\n    resize: none;\r\n    &:focus {\r\n      outline: none;\r\n    }\r\n  }\r\n}\r\n.typeWrapper {\r\n  margin-top: 24px;\r\n  label {\r\n    color: rgba(255, 255, 255, 0.5);\r\n    font-family: 'Raleway';\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n  }\r\n}\r\n.radioContainer {\r\n  margin-top: 13px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px;\r\n}\r\n.customRadio {\r\n  padding-left: 26px;\r\n  padding-top: 3px;\r\n  height: 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  position: relative;\r\n  cursor: pointer;\r\n\r\n  input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n}\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 20px;\r\n  width: 20px;\r\n  background-color: transparent;\r\n  border-radius: 50%;\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n}\r\n.customRadio input:checked ~ .checkmark {\r\n  border-color: #8743ff;\r\n}\r\n\r\n.checkmark:after {\r\n  content: '';\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.customRadio input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n.customRadio input:checked ~ span {\r\n  color: #fff;\r\n}\r\n\r\n.customRadio .checkmark:after {\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50%;\r\n  background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);\r\n}\r\n.wrapper {\r\n  margin-top: 24px;\r\n  display: flex;\r\n  gap: 30px;\r\n}\r\n.copiesWrapper {\r\n}\r\n.text {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n.counter {\r\n  margin-top: 3px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 11px;\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n.counterBtn {\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 40px;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n}\r\n.counterBtnDisable {\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n.placeBid {\r\n}\r\n.placeBidWrapper {\r\n  margin-top: 8px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.inputWrapper {\r\n  width: 176px;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-radius: 8px;\r\n  background: #1d2228;\r\n}\r\n.input {\r\n  margin-left: 16px;\r\n  width: 80px;\r\n  background: transparent;\r\n  border: none;\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  &:focus {\r\n    border: none;\r\n    outline: none;\r\n  }\r\n}\r\n.currency {\r\n  margin-right: 12px;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n.cost {\r\n  margin-left: 9px;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n.sell {\r\n  margin-top: 24px;\r\n}\r\n.sellWrapper {\r\n  margin-top: 8px;\r\n  display: flex;\r\n}\r\n.date,\r\n.time {\r\n  padding-left: 16px;\r\n  width: 127px;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  border: none;\r\n  border-radius: 8px;\r\n  background: #1d2228;\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n.time {\r\n  margin-left: 8px;\r\n  width: 75px;\r\n  height: 40px;\r\n}\r\n.timer {\r\n  margin-left: 12px;\r\n  display: flex;\r\n  align-items: center;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n.delete {\r\n  margin-left: 16px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n  color: #ff5e54;\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  span {\r\n    font-size: 10px;\r\n  }\r\n}\r\n.btnTime {\r\n  margin-top: 16px;\r\n  background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n"],sourceRoot:""}]),o.locals={backdoor:"gXvz0kF8oIDiUlQwIRFI",backdoorActive:"n19oU0CeBwKg31JvdE89",modal:"TsN8__lqr4XeHsw5mSDX",close:"yNjbfImHwXs2BrMZFPLT",title:"eFnXHDUqhjB8M7DV98nZ",stepWrapper:"rzxcOUUnd2La8RYLcV_Y",step:"g7hKkSvHwltggI6hIkWi",stepActive:"_jHp9zYUsPOD4i9f22d4",stepCount:"M9b5jpRqnl_EKJDnphL8",info:"wwjs8JgN7GUFmjpsRggn",dropzone:"ZMfXN0AOyBtvXdtz47NR",dropInfo:"qiDjAElf6GUom0Mnp33n",btn:"wdE8FJqeMUw8R_A17JKB",img:"K5vwJxhVviyenpLNhp7j",tools:"ouC2NkmS3isl1zZM0gdP",tool:"DGtGz1ZHmAXNYuUhnfAs",artworkName:"fagiYfUuaT7kvdahr1ne",artworkDescr:"r9NVYajz2Wd_4IdYgk4Q",typeWrapper:"XIZF9ZhGKhSAWopwl4bC",radioContainer:"LPCqSdIBT547VNxjplCV",customRadio:"nVgubMOtyH0i9g6hyhww",checkmark:"KKTTWePHIBLgZJSx0HVR",wrapper:"RZdTJpGwAVu5PntjSp7C",text:"cUeCOGHJaIIlCIquzp_C",counter:"KskMKxEeyJ_ngfxQuLGf",counterBtn:"ZI4PJjxgGwFvCouyIrv1",counterBtnDisable:"jdvwNDhRNM7cl20qQqIx",placeBidWrapper:"OZdWLLNoPFAX6FTqf9SH",inputWrapper:"qLtMAk7OXPsr3KI5Fq0m",input:"zJP5HTkQ8ez20L21cz62",currency:"Y4PVq4APExQGTpcALQe0",cost:"EDs27PrB9aENOhnMygNl",sell:"ZQplVWtpwK_G5JBMImHl",sellWrapper:"Y90xFvyFIYECz0NFJbiV",date:"fOg7etFxqpgPgofQ09W4",time:"G0v1tCRL95okKwLVdHIw",timer:"kwIEBL9vMHkcIUBUkP0Y",delete:"IGR2129VHxzBUXhYmrbk",btnTime:"hucmsgSJb3KSpyXJuhDD"};let l=o},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/editProfile/index.module.scss":(e,A,r)=>{r.r(A),r.d(A,{default:()=>l});var t=r(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),n=r.n(t),a=r(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),o=r.n(a)()(n());o.push([e.id,`.dbo_OExxFROuDLAYv29U {
  padding: 10px 0;
  width: 100vw;
  height: 100vh;
  display: none;
  justify-content: center;
  background: rgba(35, 31, 32, 0.7);
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}

.lQdtAhicWHRrycEPZf3p {
  display: flex;
}

.pvzFQZ8uEmmip0jXm4NK {
  padding: 45px 24px 24px;
  width: 653px;
  height: 937px;
  border-radius: 32px;
  background: #30363d;
  box-shadow: 0px 25px 40px 0px rgba(0, 0, 0, 0.05);
  position: relative;
}

.vI_wPRRf21bvBu870JPi {
  position: absolute;
  top: 51px;
  right: 24px;
  cursor: pointer;
}
.vI_wPRRf21bvBu870JPi span {
  font-size: 16px;
  color: #fff;
  pointer-events: none;
}

.bpYgnME1uUsqkjWvsWlf {
  color: #fff;
  text-align: center;
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
}

.lRx4Ki0QV6MXK5XVyLYf {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 24px 16px;
}
.lRx4Ki0QV6MXK5XVyLYf label {
  width: 294px;
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}
.lRx4Ki0QV6MXK5XVyLYf label:nth-child(5) {
  width: 100%;
}
.lRx4Ki0QV6MXK5XVyLYf label:nth-child(6) input {
  height: 120px;
}
.lRx4Ki0QV6MXK5XVyLYf input {
  margin-top: 8px;
  padding-left: 15px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background: #1d2228;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}
.lRx4Ki0QV6MXK5XVyLYf input:focus {
  border: none;
  outline: none;
}
.lRx4Ki0QV6MXK5XVyLYf textarea {
  margin-top: 8px;
  padding: 15px;
  width: 100%;
  height: 120px;
  border: none;
  border-radius: 8px;
  background: #1d2228;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
  resize: none;
}
.lRx4Ki0QV6MXK5XVyLYf textarea:focus {
  border: none;
  outline: none;
}

.QKbvW0W9QIjg_J_nk933 {
  width: 264px;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 12px;
  font-weight: 500;
}

._lvInROsgAloMlwy76_Y {
  width: 100%;
}

.Qf17rXQeOhm4rX_XzFxq {
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 600;
}

.tiYzUuDZ_VzoqQlvQ0Y5 {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.tiYzUuDZ_VzoqQlvQ0Y5 label {
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 6px;
  color: #fff;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
}
.tiYzUuDZ_VzoqQlvQ0Y5 input {
  margin-top: 0;
  width: 504px;
}

.auSCe3ttTuo_NbzpqWUg {
  margin: 0 auto;
}

.D7bUHa2qmAFJXWyRITgw {
  margin-top: 8px;
}`,"",{version:3,sources:["webpack://./src/components/modal/editProfile/index.module.scss"],names:[],mappings:"AAAA;EACC,eAAA;EACC,YAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;EACA,iCAAA;EACA,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;AACF;;AACA;EACE,aAAA;AAEF;;AAAA;EACE,uBAAA;EACA,YAAA;EACD,aAAA;EACC,mBAAA;EACA,mBAAA;EACA,iDAAA;EACD,kBAAA;AAGD;;AADA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;AAIF;AAHE;EACE,eAAA;EACA,WAAA;EACA,oBAAA;AAKJ;;AAFA;EACE,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAKF;;AAHA;EACE,gBAAA;EACA,aAAA;EACA,eAAA;EACA,qBAAA;EACA,cAAA;AAMF;AALE;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EAEA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAMJ;AAJI;EACE,WAAA;AAMN;AAHM;EACE,aAAA;AAKR;AADE;EACE,eAAA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EAEA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAEJ;AAAI;EACE,YAAA;EACA,aAAA;AAEN;AACE;EACE,eAAA;EACA,aAAA;EACA,WAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EAEA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EAMA,YAAA;AALJ;AACI;EACE,YAAA;EACA,aAAA;AACN;;AAIA;EACE,YAAA;EACA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AADF;;AAGA;EACE,WAAA;AAAF;;AAEA;EACE,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AACF;;AACA;EACE,gBAAA;EACA,aAAA;EACA,8BAAA;AAEF;AADE;EACE,WAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,QAAA;EACA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,aAAA;AAGJ;AADE;EACA,aAAA;EACE,YAAA;AAGJ;;AAAA;EACC,cAAA;AAGD;;AADA;EACC,eAAA;AAID",sourcesContent:[".backdoor {\r\n	padding: 10px 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: none;\r\n  justify-content: center;\r\n  background: rgba(35, 31, 32, 0.7);\r\n  overflow-y: scroll;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 5;\r\n}\r\n.backdoorActive {\r\n  display: flex;\r\n}\r\n.modal {\r\n  padding: 45px 24px 24px;\r\n  width: 653px;\r\n	height: 937px;\r\n  border-radius: 32px;\r\n  background: #30363d;\r\n  box-shadow: 0px 25px 40px 0px rgba(0, 0, 0, 0.05);\r\n	position: relative;\r\n}\r\n.close {\r\n  position: absolute;\r\n  top: 51px;\r\n  right: 24px;\r\n  cursor: pointer;\r\n  span {\r\n    font-size: 16px;\r\n    color: #fff;\r\n    pointer-events: none;\r\n  }\r\n}\r\n.title {\r\n  color: #fff;\r\n  text-align: center;\r\n  font-family: 'Raleway';\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n}\r\n.form {\r\n  margin-top: 32px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: flex-end;\r\n  gap: 24px 16px;\r\n  label {\r\n    width: 294px;\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    color: rgba(255, 255, 255, 0.5);\r\n    font-family: 'Raleway';\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n\r\n    &:nth-child(5) {\r\n      width: 100%;\r\n    }\r\n    &:nth-child(6) {\r\n      input {\r\n        height: 120px;\r\n      }\r\n    }\r\n  }\r\n  input {\r\n    margin-top: 8px;\r\n    padding-left: 15px;\r\n    height: 40px;\r\n    border: none;\r\n    border-radius: 8px;\r\n    background: #1d2228;\r\n\r\n    color: rgba(255, 255, 255, 0.5);\r\n    font-family: 'Raleway';\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n\r\n    &:focus {\r\n      border: none;\r\n      outline: none;\r\n    }\r\n  }\r\n  textarea {\r\n    margin-top: 8px;\r\n    padding: 15px;\r\n    width: 100%;\r\n    height: 120px;\r\n    border: none;\r\n    border-radius: 8px;\r\n    background: #1d2228;\r\n\r\n    color: rgba(255, 255, 255, 0.5);\r\n    font-family: 'Raleway';\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n\r\n    &:focus {\r\n      border: none;\r\n      outline: none;\r\n    }\r\n    resize: none;\r\n  }\r\n}\r\n.info {\r\n  width: 264px;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n.wrapper {\r\n  width: 100%;\r\n}\r\n.wrapperTitle {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n.inputWrapper {\r\n  margin-top: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  label {\r\n    width: auto;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: row;\r\n    gap: 6px;\r\n    color: #fff;\r\n    font-family: 'Raleway';\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 18px; /* 128.571% */\r\n  }\r\n  input {\r\n		margin-top: 0;\r\n    width: 504px;\r\n  }\r\n}\r\n.btn {\r\n	margin: 0 auto;\r\n}\r\n.first {\r\n	margin-top: 8px;\r\n}"],sourceRoot:""}]),o.locals={backdoor:"dbo_OExxFROuDLAYv29U",backdoorActive:"lQdtAhicWHRrycEPZf3p",modal:"pvzFQZ8uEmmip0jXm4NK",close:"vI_wPRRf21bvBu870JPi",title:"bpYgnME1uUsqkjWvsWlf",form:"lRx4Ki0QV6MXK5XVyLYf",info:"QKbvW0W9QIjg_J_nk933",wrapper:"_lvInROsgAloMlwy76_Y",wrapperTitle:"Qf17rXQeOhm4rX_XzFxq",inputWrapper:"tiYzUuDZ_VzoqQlvQ0Y5",btn:"auSCe3ttTuo_NbzpqWUg",first:"D7bUHa2qmAFJXWyRITgw"};let l=o},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/profileCardGroup/index.module.scss":(e,A,r)=>{r.r(A),r.d(A,{default:()=>l});var t=r(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),n=r.n(t),a=r(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),o=r.n(a)()(n());o.push([e.id,`.h70l1U2GZqGmDzwJ_rP_ {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}`,"",{version:3,sources:["webpack://./src/components/profileCardGroup/index.module.scss"],names:[],mappings:"AAAA;EACC,gBAAA;EACA,aAAA;EACA,eAAA;EACA,SAAA;AACD",sourcesContent:[".artWorkSections {\r\n	margin-top: 24px;\r\n	display: flex;\r\n	flex-wrap: wrap;\r\n	gap: 16px;\r\n}"],sourceRoot:""}]),o.locals={artWorkSections:"h70l1U2GZqGmDzwJ_rP_"};let l=o},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/myProfile/index.module.scss":(e,A,r)=>{r.r(A),r.d(A,{default:()=>l});var t=r(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),n=r.n(t),a=r(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),o=r.n(a)()(n());o.push([e.id,`.i6er7kLVvwT7NFRrCAY_ {
  margin: 40px auto 0;
  width: min(100%, 1316px);
}

.mCxPmLwZLwYpdPxOjWVg {
  display: flex;
  justify-content: space-between;
}

.Axo_TfIUb4pBrd1xNWfC {
  display: flex;
  align-items: center;
}

.Tf7E_ZZMAb8XeLDAWtqB {
  width: 49px;
  height: 49px;
  border-radius: 12px;
  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);
}

.qOcUxc1uFBYHdgARMwg4 {
  margin-left: 12px;
  display: flex;
  flex-direction: column;
}

.xhvr1iuni61J_2Fxtyyv {
  color: #fff;
  font-family: "Raleway";
  font-size: 18px;
  font-weight: 700;
}

.ZMLenJ1JAS36RX8sOnc6 {
  margin-top: 4px;
  background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
}

.IDQy6KKlHVfeHePeoZBN {
  display: flex;
  align-items: center;
  gap: 16px;
}

.oVEoZxmuLP334pcpmoo9,
.Cd5tpnoS0OshD5Le52Yw {
  color: #fff;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
}

.aLZQWu8Csw9GTsOlYDit,
.nNLbBqu6MmHcw5qe8ZFj {
  margin-top: 2px;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
}

.y_9jJoh65T09DgcNG_aZ {
  display: flex;
  gap: 8px;
}

.OzLQ2xTgYe7DQ59AlFBn {
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
.OzLQ2xTgYe7DQ59AlFBn:hover {
  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);
}
.OzLQ2xTgYe7DQ59AlFBn span {
  color: #fff;
}

.hy17TIKzjlNGNdADoMbx {
  margin-top: 25px;
  display: flex;
  align-items: center;
  gap: 24px;
}

.wm4lRimbIZPOkqYvH96x {
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
.wm4lRimbIZPOkqYvH96x:hover {
  filter: drop-shadow(0 0 7px rgba(255, 255, 255, 0.574));
}
.wm4lRimbIZPOkqYvH96x span {
  color: #fff;
}

.fhCXiWKBKZWjrrm6D3GC {
  margin-top: 16px;
  width: 1061px;
  color: #fff;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
}
.fhCXiWKBKZWjrrm6D3GC span {
  color: rgba(255, 255, 255, 0.5);
}

.Uecyc49Eukz8Ik58NFvs {
  margin-top: 40px;
}

.rnKYnTF8mpqayn7AdjZW {
  display: flex;
  gap: 24px;
}

.ybJrM3xIwzKfuElGw2pq {
  color: rgba(255, 255, 255, 0.5);
  font-family: "Raleway";
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}

.c1kGRxU1MDMXJO3cowhK {
  color: #fff;
  font-family: "Raleway";
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}`,"",{version:3,sources:["webpack://./src/pages/myProfile/index.module.scss"],names:[],mappings:"AAAA;EACE,mBAAA;EACA,wBAAA;AACF;;AACA;EACE,aAAA;EACA,8BAAA;AAEF;;AAAA;EACE,aAAA;EACA,mBAAA;AAGF;;AADA;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,sDAAA;AAIF;;AAFA;EACE,iBAAA;EACA,aAAA;EACA,sBAAA;AAKF;;AAHA;EACE,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAMF;;AAJA;EACE,eAAA;EACA,6DAAA;EACA,qBAAA;EACA,6BAAA;EACA,oCAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;AAOF;;AALA;EACE,aAAA;EACA,mBAAA;EACA,SAAA;AAQF;;AAJA;;EAEE,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAOF;;AALA;;EAEE,eAAA;EACA,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAQF;;AAJA;EACE,aAAA;EACA,QAAA;AAOF;;AALA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,0CAAA;EACA,oBAAA;EACA,eAAA;AAQF;AANE;EACE,sDAAA;AAQJ;AANE;EACE,WAAA;AAQJ;;AALA;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;AAQF;;AANA;EACE,aAAA;EACA,mBAAA;EACA,QAAA;EACA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EAEA,oBAAA;EACA,eAAA;AAQF;AANE;EACE,uDAAA;AAQJ;AANE;EACE,WAAA;AAQJ;;AALA;EACE,gBAAA;EACA,aAAA;EACA,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAQF;AAPE;EACE,+BAAA;AASJ;;AANA;EACE,gBAAA;AASF;;AAPA;EACE,aAAA;EACA,SAAA;AAUF;;AARA;EACE,+BAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;AAWF;;AATA;EACE,WAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;AAYF",sourcesContent:[".wrapper {\r\n  margin: 40px auto 0;\r\n  width: min(100%, 1316px);\r\n}\r\n.user {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.userInfo {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.userImg {\r\n  width: 49px;\r\n  height: 49px;\r\n  border-radius: 12px;\r\n  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);\r\n}\r\n.userWrapper {\r\n  margin-left: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.userName {\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n}\r\n.userTag {\r\n  margin-top: 4px;\r\n  background: linear-gradient(270deg, #8743ff 0%, #d8c2ff 100%);\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n}\r\n.userDetail {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px;\r\n}\r\n.userFollowers {\r\n}\r\n.userFollowersCount,\r\n.userFollowingCount {\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  line-height: 18px;\r\n}\r\n.userFollowersText,\r\n.userFollowingText {\r\n  margin-top: 2px;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  line-height: 18px;\r\n}\r\n.userFollowing {\r\n}\r\n.userExternal {\r\n  display: flex;\r\n  gap: 8px;\r\n}\r\n.externalLink {\r\n  width: 40px;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 12px;\r\n  border: 1px solid rgba(255, 255, 255, 0.1);\r\n  transition: all 0.2s;\r\n  cursor: pointer;\r\n\r\n  &:hover {\r\n    box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);\r\n  }\r\n  span {\r\n    color: #fff;\r\n  }\r\n}\r\n.social {\r\n  margin-top: 25px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 24px;\r\n}\r\n.socialLink {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  line-height: 18px;\r\n\r\n  transition: all 0.2s;\r\n  cursor: pointer;\r\n\r\n  &:hover {\r\n    filter: drop-shadow(0 0 7px rgba(255, 255, 255, 0.574));\r\n  }\r\n  span {\r\n    color: #fff;\r\n  }\r\n}\r\n.descr {\r\n  margin-top: 16px;\r\n  width: 1061px;\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 18px;\r\n  span {\r\n    color: rgba(255, 255, 255, 0.5);\r\n  }\r\n}\r\n.tabs {\r\n  margin-top: 40px;\r\n}\r\n.selector {\r\n  display: flex;\r\n  gap: 24px;\r\n}\r\n.selectorItem {\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-family: 'Raleway';\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n}\r\n.selectorItemActive {\r\n  color: #fff;\r\n  font-family: 'Raleway';\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n}\r\n"],sourceRoot:""}]),o.locals={wrapper:"i6er7kLVvwT7NFRrCAY_",user:"mCxPmLwZLwYpdPxOjWVg",userInfo:"Axo_TfIUb4pBrd1xNWfC",userImg:"Tf7E_ZZMAb8XeLDAWtqB",userWrapper:"qOcUxc1uFBYHdgARMwg4",userName:"xhvr1iuni61J_2Fxtyyv",userTag:"ZMLenJ1JAS36RX8sOnc6",userDetail:"IDQy6KKlHVfeHePeoZBN",userFollowersCount:"oVEoZxmuLP334pcpmoo9",userFollowingCount:"Cd5tpnoS0OshD5Le52Yw",userFollowersText:"aLZQWu8Csw9GTsOlYDit",userFollowingText:"nNLbBqu6MmHcw5qe8ZFj",userExternal:"y_9jJoh65T09DgcNG_aZ",externalLink:"OzLQ2xTgYe7DQ59AlFBn",social:"hy17TIKzjlNGNdADoMbx",socialLink:"wm4lRimbIZPOkqYvH96x",descr:"fhCXiWKBKZWjrrm6D3GC",tabs:"Uecyc49Eukz8Ik58NFvs",selector:"rnKYnTF8mpqayn7AdjZW",selectorItem:"ybJrM3xIwzKfuElGw2pq",selectorItemActive:"c1kGRxU1MDMXJO3cowhK"};let l=o},"./src/components/card/profileCard/index.module.scss":(e,A,r)=>{r.r(A),r.d(A,{default:()=>g});var t=r(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=r.n(t),a=r(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),o=r.n(a),l=r(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),s=r.n(l),i=r(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(i),c=r(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=r.n(c),m=r(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),f=r.n(m),E=r(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/card/profileCard/index.module.scss"),u={};u.styleTagTransform=f(),u.setAttributes=d(),u.insert=s().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=p(),n()(E.default,u);let g=E.default&&E.default.locals?E.default.locals:void 0},"./src/components/modal/changeTimer/index.module.scss":(e,A,r)=>{r.r(A),r.d(A,{default:()=>g});var t=r(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=r.n(t),a=r(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),o=r.n(a),l=r(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),s=r.n(l),i=r(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(i),c=r(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=r.n(c),m=r(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),f=r.n(m),E=r(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/changeTimer/index.module.scss"),u={};u.styleTagTransform=f(),u.setAttributes=d(),u.insert=s().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=p(),n()(E.default,u);let g=E.default&&E.default.locals?E.default.locals:void 0},"./src/components/modal/createArtwork/index.module.scss":(e,A,r)=>{r.r(A),r.d(A,{default:()=>g});var t=r(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=r.n(t),a=r(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),o=r.n(a),l=r(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),s=r.n(l),i=r(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(i),c=r(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=r.n(c),m=r(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),f=r.n(m),E=r(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/createArtwork/index.module.scss"),u={};u.styleTagTransform=f(),u.setAttributes=d(),u.insert=s().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=p(),n()(E.default,u);let g=E.default&&E.default.locals?E.default.locals:void 0},"./src/components/modal/editProfile/index.module.scss":(e,A,r)=>{r.r(A),r.d(A,{default:()=>g});var t=r(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=r.n(t),a=r(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),o=r.n(a),l=r(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),s=r.n(l),i=r(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(i),c=r(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=r.n(c),m=r(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),f=r.n(m),E=r(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/editProfile/index.module.scss"),u={};u.styleTagTransform=f(),u.setAttributes=d(),u.insert=s().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=p(),n()(E.default,u);let g=E.default&&E.default.locals?E.default.locals:void 0},"./src/components/profileCardGroup/index.module.scss":(e,A,r)=>{r.r(A),r.d(A,{default:()=>g});var t=r(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=r.n(t),a=r(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),o=r.n(a),l=r(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),s=r.n(l),i=r(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(i),c=r(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=r.n(c),m=r(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),f=r.n(m),E=r(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/profileCardGroup/index.module.scss"),u={};u.styleTagTransform=f(),u.setAttributes=d(),u.insert=s().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=p(),n()(E.default,u);let g=E.default&&E.default.locals?E.default.locals:void 0},"./src/pages/myProfile/index.module.scss":(e,A,r)=>{r.r(A),r.d(A,{default:()=>g});var t=r(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=r.n(t),a=r(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),o=r.n(a),l=r(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),s=r.n(l),i=r(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(i),c=r(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=r.n(c),m=r(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),f=r.n(m),E=r(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/myProfile/index.module.scss"),u={};u.styleTagTransform=f(),u.setAttributes=d(),u.insert=s().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=p(),n()(E.default,u);let g=E.default&&E.default.locals?E.default.locals:void 0},"./src/img/artWork/artWork1.jpg":(e,A,r)=>{e.exports=r.p+"assets/artWork1.jpg"},"./src/img/artWork/artWork2.jpg":(e,A,r)=>{e.exports=r.p+"assets/artWork2.jpg"},"./src/img/artWork/artWork3.jpg":(e,A,r)=>{e.exports=r.p+"assets/artWork3.jpg"},"./src/img/artWork/artWork4.jpg":(e,A,r)=>{e.exports=r.p+"assets/artWork4.jpg"},"./src/img/artWork/artWork5.jpg":(e,A,r)=>{e.exports=r.p+"assets/artWork5.jpg"},"./src/img/artWork/artWork6.jpg":(e,A,r)=>{e.exports=r.p+"assets/artWork6.jpg"},"./src/img/artWork/artWork7.jpg":(e,A,r)=>{e.exports=r.p+"assets/artWork7.jpg"},"./src/img/artWork/artWork8.jpg":(e,A,r)=>{e.exports=r.p+"assets/artWork8.jpg"},"./src/img/img.png":(e,A,r)=>{e.exports=r.p+"assets/img.png"}}]);
//# sourceMappingURL=src_pages_myProfile_index_jsx.js.map
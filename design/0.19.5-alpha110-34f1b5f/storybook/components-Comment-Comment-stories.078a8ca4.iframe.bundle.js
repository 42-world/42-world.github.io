(()=>{var k=Object.defineProperty,K=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var T=(r,a,e)=>a in r?k(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e,v=(r,a)=>{for(var e in a||(a={}))O.call(a,e)&&T(r,e,a[e]);if(A)for(var e of A(a))B.call(a,e)&&T(r,e,a[e]);return r},C=(r,a)=>K(r,w(a));var h=(r,a)=>{var e={};for(var n in r)O.call(r,n)&&a.indexOf(n)<0&&(e[n]=r[n]);if(r!=null&&A)for(var n of A(r))a.indexOf(n)<0&&B.call(r,n)&&(e[n]=r[n]);return e};(self.webpackChunk_rookies_team_design=self.webpackChunk_rookies_team_design||[]).push([[196],{"./src/components/Comment/Comment.stories.ts":(r,a,e)=>{var p,_,f;"use strict";e.r(a),e.d(a,{Primary:()=>m,__namedExportsOrder:()=>g,default:()=>x});var n=e("./node_modules/classnames/index.js"),u=e.n(n),c=e("./src/components/AvatarText/index.ts"),l=e("./src/components/Badge/Badge.tsx"),s=e("./src/components/Button/index.ts"),i=e("./src/components/Text/index.ts"),t=e("./node_modules/react/jsx-runtime.js");function o({avatarSrc:y,avatarAlt:E="",username:S,time:I,content:b,isMine:R,isAuthor:j,isLiked:M,likeCount:D=0,onClickLike:P,onClickEdit:L,onClickReply:N}){return(0,t.jsxs)("div",{className:"flex w-[720px] flex-col gap-3 overflow-hidden break-words",children:[(0,t.jsxs)("div",{className:"flex flex-row items-start gap-2",children:[(0,t.jsx)(c.M,{src:y,alt:E,mainText:S,subText:I}),j&&(0,t.jsx)(l.C,{color:"outline",text:"\uC791\uC131\uC790",className:"ml-1"}),R&&(0,t.jsx)(l.C,{color:"outline",text:"\uB0B4\uB313\uAE00"})]}),(0,t.jsx)(i.x,{size:"body2",text:b,weight:"medium"}),(0,t.jsxs)("div",{className:"flex flex-row items-center gap-4",children:[(0,t.jsx)(s.z,{text:`\uC88B\uC544\uC694 ${D}`,variant:"text",className:u()("px-0",{"[&>p]:text-color-system_200 [&>p]:dark:text-color-system_200":M}),onClick:P}),(0,t.jsx)(s.z,{text:"\uB2F5\uAE00\uB2EC\uAE30",variant:"text",className:"px-0",onClick:N}),(0,t.jsx)(s.z,{text:"\uC218\uC815\uD558\uAE30",variant:"text",className:"px-0",onClick:L})]})]})}o.displayName="Comment";try{o.displayName="Comment",o.__docgenInfo={description:"",displayName:"Comment",props:{avatarSrc:{defaultValue:null,description:"",name:"avatarSrc",required:!0,type:{name:"string"}},avatarAlt:{defaultValue:{value:""},description:"",name:"avatarAlt",required:!1,type:{name:"string"}},username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}},time:{defaultValue:null,description:"",name:"time",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},isMine:{defaultValue:null,description:"",name:"isMine",required:!1,type:{name:"boolean"}},isAuthor:{defaultValue:null,description:"",name:"isAuthor",required:!1,type:{name:"boolean"}},isLiked:{defaultValue:null,description:"",name:"isLiked",required:!1,type:{name:"boolean"}},likeCount:{defaultValue:{value:"0"},description:"",name:"likeCount",required:!1,type:{name:"number"}},onClickLike:{defaultValue:null,description:"",name:"onClickLike",required:!1,type:{name:"(() => void)"}},onClickReply:{defaultValue:null,description:"",name:"onClickReply",required:!1,type:{name:"(() => void)"}},onClickEdit:{defaultValue:null,description:"",name:"onClickEdit",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Comment/Comment.tsx#Comment"]={docgenInfo:o.__docgenInfo,name:"Comment",path:"src/components/Comment/Comment.tsx#Comment"})}catch(y){}const d={title:"rookies/Comment",component:o},m={args:{avatarSrc:"https://picsum.photos/536/354",avatarAlt:"Lorem ipsum",username:"\uD64D\uAE38\uB3D9",time:"3\uC2DC\uAC04 \uC804",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",isMine:!1,isAuthor:!1,isLiked:!1,likeCount:0}},x=d;m.parameters=C(v({},m.parameters),{docs:C(v({},(p=m.parameters)==null?void 0:p.docs),{source:v({originalSource:`{
  // Add your story args here
  args: {
    avatarSrc: 'https://picsum.photos/536/354',
    avatarAlt: 'Lorem ipsum',
    username: '\uD64D\uAE38\uB3D9',
    time: '3\uC2DC\uAC04 \uC804',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    isMine: false,
    isAuthor: false,
    isLiked: false,
    likeCount: 0
  }
}`},(f=(_=m.parameters)==null?void 0:_.docs)==null?void 0:f.source)})});const g=["Primary"]},"./src/components/Avatar/Avatar.tsx":(r,a,e)=>{"use strict";e.d(a,{q:()=>l});var n=e("./node_modules/classnames/index.js"),u=e.n(n),c=e("./node_modules/react/jsx-runtime.js");function l({src:s,alt:i="",size:t="40px"}){return(0,c.jsx)("img",{src:s,alt:i,className:u()("rounded-full object-cover",{"h-10 w-10":t==="40px","h-16 w-16":t==="64px"})})}l.displayName="Avatar";try{l.displayName="Avatar",l.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"40px"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"40px"'},{value:'"64px"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:l.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(s){}},"./src/components/AvatarText/AvatarText.tsx":(r,a,e)=>{"use strict";e.d(a,{M:()=>i});var n=e("./node_modules/classnames/index.js"),u=e.n(n),c=e("./src/components/Avatar/Avatar.tsx"),l=e("./src/components/Text/index.ts"),s=e("./node_modules/react/jsx-runtime.js");function i({src:t,alt:o="",size:d="40px",mainText:m,subText:x}){return(0,s.jsxs)("div",{className:u()("flex flex-row",{"gap-3":d==="40px","gap-4":d==="64px"}),children:[(0,s.jsx)(c.q,{src:t,alt:o,size:d}),(0,s.jsxs)("div",{className:"flex flex-col items-start justify-center",children:[(0,s.jsx)(l.x,{text:m,size:d==="64px"?"heading3":"body2",weight:"medium"}),x&&(0,s.jsx)(l.x,{text:x,size:d==="64px"?"body2":"small",color:"secondary"})]})]})}i.displayName="AvatarText";try{i.displayName="AvatarText",i.__docgenInfo={description:"",displayName:"AvatarText",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"40px"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"40px"'},{value:'"64px"'}]}},mainText:{defaultValue:null,description:"",name:"mainText",required:!0,type:{name:"string"}},subText:{defaultValue:null,description:"",name:"subText",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AvatarText/AvatarText.tsx#AvatarText"]={docgenInfo:i.__docgenInfo,name:"AvatarText",path:"src/components/AvatarText/AvatarText.tsx#AvatarText"})}catch(t){}},"./src/components/AvatarText/index.ts":(r,a,e)=>{"use strict";e.d(a,{M:()=>n.M});var n=e("./src/components/AvatarText/AvatarText.tsx")},"./src/components/Badge/Badge.tsx":(r,a,e)=>{"use strict";e.d(a,{C:()=>t});var n=e("./node_modules/classnames/index.js"),u=e.n(n),c=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),l=e("./src/components/Text/index.ts"),s=e("./node_modules/react/jsx-runtime.js");const i={indigo:"bg-color-indigo",yellow:"bg-color-yellow",mint:"bg-color-mint",cyan:"bg-color-cyan",blue:"bg-color-blue_200",pink:"bg-color-pink",brown:"bg-color-brown",mono:"bg-bg-primary_dark dark:bg-bg-primary",outline:"bg-none"};function t({color:o="outline",text:d,className:m}){return(0,s.jsx)("div",{className:(0,c.m)(u()("w-fit rounded-lg px-2 py-[3px]",i[o],{"border border-border-secondary dark:border-border-secondary_dark":o==="outline"}),m),children:(0,s.jsx)(l.x,{text:d,size:"small",className:u()({"text-text-primary_dark dark:text-text-primary":o==="mono"}),color:o==="outline"?"secondary":"white"})})}t.displayName="Badge";try{t.displayName="Badge",t.__docgenInfo={description:"",displayName:"Badge",props:{color:{defaultValue:{value:"outline"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"indigo"'},{value:'"yellow"'},{value:'"mint"'},{value:'"cyan"'},{value:'"blue"'},{value:'"pink"'},{value:'"brown"'},{value:'"outline"'},{value:'"mono"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:t.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch(o){}},"./src/components/Button/Button.tsx":(r,a,e)=>{"use strict";e.d(a,{z:()=>o});var n=e("./node_modules/classnames/index.js"),u=e.n(n),c=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),l=e("./src/components/Icon/index.ts"),s=e("./src/components/Text/index.ts"),i=e("./node_modules/react/jsx-runtime.js");const t={primary:"bg-color-system_200 border-0 hover:bg-color-system_300",secondary:"border-border-primary dark:border-border-primary_dark hover:border-color-system_200 hover:dark:border-color-system_200",text:"border-0"};function o(d){var E;const y=d,{text:m,icon:x,className:g}=y,p=h(y,["text","icon","className"]),_=(E=d.variant)!=null?E:"primary",f=d.variant==="text"&&d.activated;return(0,i.jsxs)("button",C(v({className:(0,c.m)(`group flex h-8 flex-row items-center gap-2 rounded-2xl border border-solid transition-all duration-200 active:scale-92 ${t[_]}`,x&&!m?"px-2":"px-3",g)},p),{children:[x&&(0,i.jsx)(l.J,{svg:x,size:"small",className:(0,c.m)("transition-colors duration-200",_==="primary"?"fill-color-white":"fill-text-secondary group-hover:fill-color-system_200 dark:fill-text-secondary_dark",f&&"fill-color-system_200 dark:fill-color-system_200")}),m&&(0,i.jsx)(s.x,{text:m,size:"body2",weight:"medium",color:_==="primary"?"white":"secondary",className:u()("transition-colors duration-200",{"group-hover:text-color-system_200":_!=="primary","text-color-system_200 dark:text-color-system_200":f})})]}))}o.displayName="Button";try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'}]}},activated:{defaultValue:null,description:"",name:"activated",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:o.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(d){}},"./src/components/Button/index.ts":(r,a,e)=>{"use strict";e.d(a,{z:()=>n.z});var n=e("./src/components/Button/Button.tsx")},"./src/components/Icon/Icon.tsx":(r,a,e)=>{"use strict";e.d(a,{J:()=>u});var n=e("./node_modules/react/index.js");function u(t){var o=t,{svg:c,size:l="medium",className:s}=o,i=h(o,["svg","size","className"]);const d={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[l]||{width:24,height:24};return(0,n.cloneElement)(c,v({viewBox:"0 0 24 24",width:d.width,height:d.height,className:s!=null?s:"fill-black dark:fill-white"},i),null)}try{u.displayName="Icon",u.__docgenInfo={description:"",displayName:"Icon",props:{svg:{defaultValue:null,description:"",name:"svg",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'},{value:'"xsmall"'},{value:'"large"'},{value:'"xlarge"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:u.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(c){}},"./src/components/Icon/index.ts":(r,a,e)=>{"use strict";e.d(a,{J:()=>n.J});var n=e("./src/components/Icon/Icon.tsx")},"./src/components/Text/Text.tsx":(r,a,e)=>{"use strict";e.d(a,{xv:()=>t});var n=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),u=e("./node_modules/react/jsx-runtime.js");const c={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-normal",body2:"text-sm leading-normal",small:"text-xs leading-normal"},l={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},s={left:"text-left",right:"text-right",center:"text-center"},i={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function t({className:o,text:d,size:m="body1",weight:x="regular",align:g="left",color:p="primary"}){return(0,u.jsx)("p",{className:(0,n.m)("font-display",c[m],l[x],s[g],i[p],o),children:d})}t.displayName="Text";try{t.displayName="Text",t.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"regular"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:t.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(o){}},"./src/components/Text/index.ts":(r,a,e)=>{"use strict";e.d(a,{x:()=>n.xv});var n=e("./src/components/Text/Text.tsx")},"./node_modules/classnames/index.js":(r,a)=>{var e,n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var u={}.hasOwnProperty,c="[native code]";function l(){for(var s=[],i=0;i<arguments.length;i++){var t=arguments[i];if(t){var o=typeof t;if(o==="string"||o==="number")s.push(t);else if(Array.isArray(t)){if(t.length){var d=l.apply(null,t);d&&s.push(d)}}else if(o==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){s.push(t.toString());continue}for(var m in t)u.call(t,m)&&t[m]&&s.push(m)}}}return s.join(" ")}r.exports?(l.default=l,r.exports=l):(e=[],n=function(){return l}.apply(a,e),n!==void 0&&(r.exports=n))})()}}]);})();

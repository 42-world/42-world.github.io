(()=>{var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var k=(n,t,e)=>t in n?Z(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,_=(n,t)=>{for(var e in t||(t={}))U.call(t,e)&&k(n,e,t[e]);if(D)for(var e of D(t))W.call(t,e)&&k(n,e,t[e]);return n},h=(n,t)=>ee(n,te(t));var I=(n,t)=>{var e={};for(var a in n)U.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(n!=null&&D)for(var a of D(n))t.indexOf(a)<0&&W.call(n,a)&&(e[a]=n[a]);return e};(self.webpackChunk_rookies_team_design=self.webpackChunk_rookies_team_design||[]).push([[79],{"./src/components/Feed/Feed.stories.ts":(n,t,e)=>{var B,P,R,M,L,N,V,w,K;"use strict";e.r(t),e.d(t,{CommentClicked:()=>b,Liked:()=>A,Primary:()=>g,__namedExportsOrder:()=>F,default:()=>z});var a=e("./src/components/AvatarText/index.ts"),u=e("./src/components/Button/index.ts"),m=e("./src/components/Divider/index.ts"),r=e("./src/components/Text/index.ts"),o=e("./src/components/Thumbnail/index.ts"),i=e("./node_modules/react/index.js"),s;function d(){return d=Object.assign?Object.assign.bind():function(y){for(var x=1;x<arguments.length;x++){var E=arguments[x];for(var T in E)Object.prototype.hasOwnProperty.call(E,T)&&(y[T]=E[T])}return y},d.apply(this,arguments)}var l=function(x){return i.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},x),s||(s=i.createElement("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"})))};const p=l;var v;function f(){return f=Object.assign?Object.assign.bind():function(y){for(var x=1;x<arguments.length;x++){var E=arguments[x];for(var T in E)Object.prototype.hasOwnProperty.call(E,T)&&(y[T]=E[T])}return y},f.apply(this,arguments)}var O=function(x){return i.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},x),v||(v=i.createElement("path",{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"})))};const j=O;var c=e("./node_modules/react/jsx-runtime.js");function C({username:y,timestamp:x,userProfileSrc:E,thumbnailSrc:T,title:Y,contents:q,isLiked:J,likeCount:H=0,isCommentClicked:X,commentCount:$=0,onClickLike:G,onClickComment:Q}){return(0,c.jsxs)("div",{className:"group/feed w-411 transition-transform duration-200 ease-in-out active:scale-92",children:[(0,c.jsx)(a.M,{src:E,mainText:y,subText:x}),(0,c.jsx)(o.p,{src:T,width:411,className:"mt-4 transition-transform duration-200 ease-in-out group-hover/feed:translate-y-m8"}),(0,c.jsxs)("div",{className:"relative mt-6 w-411",children:[(0,c.jsx)(r.x,{size:"heading2",weight:"semibold",text:Y,className:"mb-4"}),(0,c.jsx)(r.x,{text:q,className:"line-clamp-4"}),(0,c.jsx)("div",{className:"absolute left-0 top-0 z-10 h-full w-411 bg-gradient-to-t from-bg-primary to-transparent dark:from-bg-primary_dark "})]}),(0,c.jsxs)("div",{className:" mb-4 mt-4 flex flex-row items-center justify-start",children:[(0,c.jsx)(u.z,{variant:"text",activated:J,icon:(0,c.jsx)(j,{}),text:H.toString(),onClick:G}),(0,c.jsx)(u.z,{variant:"text",activated:X,icon:(0,c.jsx)(p,{}),text:$.toString(),onClick:Q})]}),(0,c.jsx)(m.i,{variant:"primary",className:"w-411"})]})}C.displayName="Feed";try{C.displayName="Feed",C.__docgenInfo={description:"",displayName:"Feed",props:{username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}},timestamp:{defaultValue:null,description:"",name:"timestamp",required:!0,type:{name:"string"}},userProfileSrc:{defaultValue:null,description:"",name:"userProfileSrc",required:!0,type:{name:"string"}},thumbnailSrc:{defaultValue:null,description:"",name:"thumbnailSrc",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},contents:{defaultValue:null,description:"",name:"contents",required:!0,type:{name:"string"}},isLiked:{defaultValue:null,description:"",name:"isLiked",required:!1,type:{name:"boolean"}},likeCount:{defaultValue:{value:"0"},description:"",name:"likeCount",required:!1,type:{name:"number"}},isCommentClicked:{defaultValue:null,description:"",name:"isCommentClicked",required:!1,type:{name:"boolean"}},commentCount:{defaultValue:{value:"0"},description:"",name:"commentCount",required:!1,type:{name:"number"}},onClickLike:{defaultValue:null,description:"",name:"onClickLike",required:!1,type:{name:"(() => void)"}},onClickComment:{defaultValue:null,description:"",name:"onClickComment",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Feed/Feed.tsx#Feed"]={docgenInfo:C.__docgenInfo,name:"Feed",path:"src/components/Feed/Feed.tsx#Feed"})}catch(y){}const S={title:"rookies/Feed",component:C},g={args:{username:"\uD64D\uAE38\uB3D9",timestamp:"4\uC2DC\uAC04 \uC804",userProfileSrc:"https://picsum.photos/536/354",thumbnailSrc:"https://picsum.photos/536/354",title:"Lorem Ipsum",contents:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod.",isLiked:!1,likeCount:30,isCommentClicked:!1,commentCount:30}},A={args:h(_({},g.args),{isLiked:!0})},b={args:h(_({},g.args),{isCommentClicked:!0})},z=S;g.parameters=h(_({},g.parameters),{docs:h(_({},(B=g.parameters)==null?void 0:B.docs),{source:_({originalSource:`{
  // Add your story args here
  args: {
    username: '\uD64D\uAE38\uB3D9',
    timestamp: '4\uC2DC\uAC04 \uC804',
    userProfileSrc: 'https://picsum.photos/536/354',
    thumbnailSrc: 'https://picsum.photos/536/354',
    title: 'Lorem Ipsum',
    contents: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismo lorem, condimentum euismod.',
    isLiked: false,
    likeCount: 30,
    isCommentClicked: false,
    commentCount: 30
  }
}`},(R=(P=g.parameters)==null?void 0:P.docs)==null?void 0:R.source)})}),A.parameters=h(_({},A.parameters),{docs:h(_({},(M=A.parameters)==null?void 0:M.docs),{source:_({originalSource:`{
  // Add your story args here
  args: {
    ...Primary.args,
    isLiked: true
  }
}`},(N=(L=A.parameters)==null?void 0:L.docs)==null?void 0:N.source)})}),b.parameters=h(_({},b.parameters),{docs:h(_({},(V=b.parameters)==null?void 0:V.docs),{source:_({originalSource:`{
  // Add your story args here
  args: {
    ...Primary.args,
    isCommentClicked: true
  }
}`},(K=(w=b.parameters)==null?void 0:w.docs)==null?void 0:K.source)})});const F=["Primary","Liked","CommentClicked"]},"./src/components/Avatar/Avatar.tsx":(n,t,e)=>{"use strict";e.d(t,{q:()=>r});var a=e("./node_modules/classnames/index.js"),u=e.n(a),m=e("./node_modules/react/jsx-runtime.js");function r({src:o,alt:i="",size:s="40px"}){return(0,m.jsx)("img",{src:o,alt:i,className:u()("rounded-full object-cover",{"h-10 w-10":s==="40px","h-16 w-16":s==="64px"})})}r.displayName="Avatar";try{r.displayName="Avatar",r.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"40px"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"40px"'},{value:'"64px"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:r.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(o){}},"./src/components/AvatarText/AvatarText.tsx":(n,t,e)=>{"use strict";e.d(t,{M:()=>i});var a=e("./node_modules/classnames/index.js"),u=e.n(a),m=e("./src/components/Avatar/Avatar.tsx"),r=e("./src/components/Text/index.ts"),o=e("./node_modules/react/jsx-runtime.js");function i({src:s,alt:d="",size:l="40px",mainText:p,subText:v}){return(0,o.jsxs)("div",{className:u()("flex flex-row",{"gap-3":l==="40px","gap-4":l==="64px"}),children:[(0,o.jsx)(m.q,{src:s,alt:d,size:l}),(0,o.jsxs)("div",{className:"flex flex-col items-start justify-center",children:[(0,o.jsx)(r.x,{text:p,size:l==="64px"?"heading3":"body2",weight:"medium"}),v&&(0,o.jsx)(r.x,{text:v,size:l==="64px"?"body2":"small",color:"secondary"})]})]})}i.displayName="AvatarText";try{i.displayName="AvatarText",i.__docgenInfo={description:"",displayName:"AvatarText",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"40px"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"40px"'},{value:'"64px"'}]}},mainText:{defaultValue:null,description:"",name:"mainText",required:!0,type:{name:"string"}},subText:{defaultValue:null,description:"",name:"subText",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AvatarText/AvatarText.tsx#AvatarText"]={docgenInfo:i.__docgenInfo,name:"AvatarText",path:"src/components/AvatarText/AvatarText.tsx#AvatarText"})}catch(s){}},"./src/components/AvatarText/index.ts":(n,t,e)=>{"use strict";e.d(t,{M:()=>a.M});var a=e("./src/components/AvatarText/AvatarText.tsx")},"./src/components/Button/Button.tsx":(n,t,e)=>{"use strict";e.d(t,{z:()=>d});var a=e("./node_modules/classnames/index.js"),u=e.n(a),m=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),r=e("./src/components/Icon/index.ts"),o=e("./src/components/Text/index.ts"),i=e("./node_modules/react/jsx-runtime.js");const s={primary:"bg-color-system_200 border-0 enabled:hover:bg-color-system_300",secondary:"border-border-primary dark:border-border-primary_dark enabled:hover:border-color-system_200 enabled:hover:dark:border-color-system_200",text:"border-0"};function d(l){var g;const S=l,{text:p,disabled:v,icon:f,className:O}=S,j=I(S,["text","disabled","icon","className"]),c=(g=l.variant)!=null?g:"primary",C=l.variant==="text"&&l.activated;return(0,i.jsxs)("button",h(_({className:(0,m.m)(`group flex h-8 flex-row items-center gap-2 rounded-2xl border border-solid duration-200 enabled:transition-all enabled:active:scale-92 ${s[c]}`,f&&!p?"px-2":"px-3",v&&"cursor-not-allowed opacity-30",O),disabled:v},j),{children:[f&&(0,i.jsx)(r.J,{svg:f,size:"small",className:(0,m.m)("transition-colors duration-200",c==="primary"?"fill-color-white":"fill-text-secondary group-enabled:group-hover:fill-color-system_200 dark:fill-text-secondary_dark",C&&"fill-color-system_200 dark:fill-color-system_200")}),p&&(0,i.jsx)(o.x,{text:p,size:"body2",weight:"medium",color:c==="primary"?"white":"secondary",className:u()("transition-colors duration-200",{"group-enabled:group-hover:text-color-system_200":c!=="primary","text-color-system_200 dark:text-color-system_200":C})})]}))}d.displayName="Button";try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'}]}},activated:{defaultValue:null,description:"",name:"activated",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:d.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(l){}},"./src/components/Button/index.ts":(n,t,e)=>{"use strict";e.d(t,{z:()=>a.z});var a=e("./src/components/Button/Button.tsx")},"./src/components/Divider/Divider.tsx":(n,t,e)=>{"use strict";e.d(t,{i:()=>r});var a=e("./node_modules/classnames/index.js"),u=e.n(a),m=e("./node_modules/react/jsx-runtime.js");function r(d){var l=d,{variant:o="primary",className:i}=l,s=I(l,["variant","className"]);return(0,m.jsx)("div",_({className:u()("h-[1px] w-full",{"bg-border-primary dark:bg-border-primary_dark":o==="primary","bg-border-secondary dark:bg-border-secondary_dark":o==="secondary"},i)},s))}r.displayName="Divider";try{r.displayName="Divider",r.__docgenInfo={description:"",displayName:"Divider",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#Divider"]={docgenInfo:r.__docgenInfo,name:"Divider",path:"src/components/Divider/Divider.tsx#Divider"})}catch(o){}},"./src/components/Divider/index.ts":(n,t,e)=>{"use strict";e.d(t,{i:()=>a.i});var a=e("./src/components/Divider/Divider.tsx")},"./src/components/Icon/Icon.tsx":(n,t,e)=>{"use strict";e.d(t,{J:()=>u});var a=e("./node_modules/react/index.js");function u(s){var d=s,{svg:m,size:r="medium",className:o}=d,i=I(d,["svg","size","className"]);const l={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[r]||{width:24,height:24};return(0,a.cloneElement)(m,_({viewBox:"0 0 24 24",width:l.width,height:l.height,className:o!=null?o:"fill-black dark:fill-white"},i),null)}try{u.displayName="Icon",u.__docgenInfo={description:"",displayName:"Icon",props:{svg:{defaultValue:null,description:"",name:"svg",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'},{value:'"xsmall"'},{value:'"large"'},{value:'"xlarge"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:u.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(m){}},"./src/components/Icon/index.ts":(n,t,e)=>{"use strict";e.d(t,{J:()=>a.J});var a=e("./src/components/Icon/Icon.tsx")},"./src/components/Text/Text.tsx":(n,t,e)=>{"use strict";e.d(t,{xv:()=>s});var a=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),u=e("./node_modules/react/jsx-runtime.js");const m={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-normal",body2:"text-sm leading-normal",small:"text-xs leading-normal"},r={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},o={left:"text-left",right:"text-right",center:"text-center"},i={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function s({className:d,text:l,size:p="body1",weight:v="regular",align:f="left",color:O="primary"}){return(0,u.jsx)("p",{className:(0,a.m)("font-display",m[p],r[v],o[f],i[O],d),children:l})}s.displayName="Text";try{s.displayName="Text",s.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"regular"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:s.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(d){}},"./src/components/Text/index.ts":(n,t,e)=>{"use strict";e.d(t,{x:()=>a.xv});var a=e("./src/components/Text/Text.tsx")},"./src/components/Thumbnail/Thumbnail.tsx":(n,t,e)=>{"use strict";e.d(t,{p:()=>r});var a=e("./node_modules/classnames/index.js"),u=e.n(a),m=e("./node_modules/react/jsx-runtime.js");function r({src:o,alt:i="",width:s,rounded:d="16px",ratio:l="16:9",className:p}){const v={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[l],f={"8px":"rounded-lg","16px":"rounded-2xl"}[d];return(0,m.jsx)("img",{src:o,alt:i,style:{width:s},className:u()(v,f,"object-cover",p)})}r.displayName="Thumbnail";try{r.displayName="Thumbnail",r.__docgenInfo={description:"",displayName:"Thumbnail",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},rounded:{defaultValue:{value:"16px"},description:"",name:"rounded",required:!1,type:{name:"enum",value:[{value:'"8px"'},{value:'"16px"'}]}},ratio:{defaultValue:{value:"16:9"},description:"",name:"ratio",required:!1,type:{name:"enum",value:[{value:'"16:9"'},{value:'"16:10"'},{value:'"1:1"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Thumbnail/Thumbnail.tsx#Thumbnail"]={docgenInfo:r.__docgenInfo,name:"Thumbnail",path:"src/components/Thumbnail/Thumbnail.tsx#Thumbnail"})}catch(o){}},"./src/components/Thumbnail/index.ts":(n,t,e)=>{"use strict";e.d(t,{p:()=>a.p});var a=e("./src/components/Thumbnail/Thumbnail.tsx")},"./node_modules/classnames/index.js":(n,t)=>{var e,a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var u={}.hasOwnProperty,m="[native code]";function r(){for(var o=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var d=typeof s;if(d==="string"||d==="number")o.push(s);else if(Array.isArray(s)){if(s.length){var l=r.apply(null,s);l&&o.push(l)}}else if(d==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){o.push(s.toString());continue}for(var p in s)u.call(s,p)&&s[p]&&o.push(p)}}}return o.join(" ")}n.exports?(r.default=r,n.exports=r):(e=[],a=function(){return r}.apply(t,e),a!==void 0&&(n.exports=a))})()}}]);})();

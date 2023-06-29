(()=>{var ce=Object.defineProperty,ue=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var te=(s,t,e)=>t in s?ce(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,l=(s,t)=>{for(var e in t||(t={}))ne.call(t,e)&&te(s,e,t[e]);if(L)for(var e of L(t))ae.call(t,e)&&te(s,e,t[e]);return s},g=(s,t)=>ue(s,me(t));var B=(s,t)=>{var e={};for(var n in s)ne.call(s,n)&&t.indexOf(n)<0&&(e[n]=s[n]);if(s!=null&&L)for(var n of L(s))t.indexOf(n)<0&&ae.call(s,n)&&(e[n]=s[n]);return e};(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[216],{"./src/components/ListItem/ListItem.stories.tsx":(s,t,e)=>{var R,P,w,N,W,K,V,F,U,k,z,Y,G,J,H,q,Q,X,Z,$,ee;"use strict";e.r(t),e.d(t,{OnlyOneSecondaryText:()=>b,Primary:()=>S,SingleMetadata:()=>C,WithoutBorder:()=>A,WithoutMetaData:()=>D,WithoutSecondaryText:()=>j,WithoutThumbnail:()=>O,__namedExportsOrder:()=>oe,default:()=>se});var n=e("./node_modules/react/index.js"),c;function p(){return p=Object.assign?Object.assign.bind():function(_){for(var u=1;u<arguments.length;u++){var y=arguments[u];for(var f in y)Object.prototype.hasOwnProperty.call(y,f)&&(_[f]=y[f])}return _},p.apply(this,arguments)}var i=function(u){return n.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},u),c||(c=n.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"})))};const o=i;var x;function a(){return a=Object.assign?Object.assign.bind():function(_){for(var u=1;u<arguments.length;u++){var y=arguments[u];for(var f in y)Object.prototype.hasOwnProperty.call(y,f)&&(_[f]=y[f])}return _},a.apply(this,arguments)}var m=function(u){return n.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},u),x||(x=n.createElement("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})))};const d=m;var v=e("./src/components/Divider/index.ts"),E=e("./src/components/Thumbnail/index.ts"),T=e("./src/components/Text/Text.tsx"),r=e("./node_modules/react/jsx-runtime.js");const M=(_,u)=>(0,r.jsxs)("div",{className:"flex flex-row items-center gap-1",children:[_&&(0,r.jsx)(T.xv,{text:_,size:"body2",color:"secondary"}),_&&u&&(0,r.jsx)(T.xv,{text:"\xB7",size:"body2",color:"secondary"}),u&&(0,r.jsx)(T.xv,{text:u,size:"body2",color:"secondary"})]});M.displayName="MergedSecondaryText";function I({title:_,thumbnailSrc:u,secondaryTextFirst:y,secondaryTextSecond:f,hasBorder:ie=!0,rightAddon:le,onClick:de}){return(0,r.jsxs)("div",{className:"w-full cursor-pointer select-none transition-transform duration-200 ease-out active:scale-92",onClick:de,children:[(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between py-4",children:[(0,r.jsxs)("div",{className:"flex flex-row items-center",children:[u&&(0,r.jsx)(E.p,{src:u,alt:_,width:85,rounded:"8px",ratio:"16:9"}),(0,r.jsxs)("div",{className:"ml-3 flex-1",children:[M(y,f),(0,r.jsx)(T.xv,{text:_,size:"body1",weight:"medium",color:"primary"})]})]}),(0,r.jsx)("div",{className:"flex flex-row items-center gap-2 text-text-secondary dark:text-text-secondary_dark",children:le})]}),ie&&(0,r.jsx)(v.i,{variant:"secondary"})]})}I.displayName="ListItem";try{I.displayName="ListItem",I.__docgenInfo={description:"",displayName:"ListItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},thumbnailSrc:{defaultValue:null,description:"",name:"thumbnailSrc",required:!1,type:{name:"string"}},secondaryTextFirst:{defaultValue:null,description:"",name:"secondaryTextFirst",required:!1,type:{name:"string"}},secondaryTextSecond:{defaultValue:null,description:"",name:"secondaryTextSecond",required:!1,type:{name:"string"}},hasBorder:{defaultValue:{value:"true"},description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},rightAddon:{defaultValue:null,description:"",name:"rightAddon",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ListItem/ListItem.tsx#ListItem"]={docgenInfo:I.__docgenInfo,name:"ListItem",path:"src/components/ListItem/ListItem.tsx#ListItem"})}catch(_){}var h=e("./src/components/IconText/IconText.tsx");const re={title:"rookies/ListItem",component:I},S={args:{title:"Lorem ipsum",thumbnailSrc:"https://picsum.photos/536/354",secondaryTextFirst:"2021.10.20",secondaryTextSecond:"\uD64D\uAE38\uB3D9",rightAddon:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.j,{svg:o,text:"16"}),(0,r.jsx)(h.j,{svg:d,text:"32"})]})}},O={args:{title:"Lorem ipsum",secondaryTextFirst:"2021.10.20",secondaryTextSecond:"\uD64D\uAE38\uB3D9",rightAddon:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.j,{svg:o,text:"16"}),(0,r.jsx)(h.j,{svg:d,text:"32"})]})}},b={args:{title:"Lorem ipsum",secondaryTextFirst:"\uAC8C\uC2DC\uD310 1",rightAddon:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.j,{svg:o,text:"16"}),(0,r.jsx)(h.j,{svg:d,text:"32"})]})}},j={args:{title:"Lorem ipsum",rightAddon:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.j,{svg:o,text:"16"}),(0,r.jsx)(h.j,{svg:d,text:"32"})]})}},C={args:{title:"Lorem ipsum",rightAddon:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(h.j,{svg:o,text:"16"})})}},D={args:{title:"Lorem ipsum"}},A={args:{title:"Lorem ipsum",hasBorder:!1}},se=re;S.parameters=g(l({},S.parameters),{docs:g(l({},(R=S.parameters)==null?void 0:R.docs),{source:l({originalSource:`{
  args: {
    title: 'Lorem ipsum',
    thumbnailSrc: 'https://picsum.photos/536/354',
    secondaryTextFirst: '2021.10.20',
    secondaryTextSecond: '\uD64D\uAE38\uB3D9',
    rightAddon: <>
        <IconText svg={ChatBubble} text="16" />
        <IconText svg={Favorite} text="32" />
      </>
  }
}`},(w=(P=S.parameters)==null?void 0:P.docs)==null?void 0:w.source)})}),O.parameters=g(l({},O.parameters),{docs:g(l({},(N=O.parameters)==null?void 0:N.docs),{source:l({originalSource:`{
  args: {
    title: 'Lorem ipsum',
    secondaryTextFirst: '2021.10.20',
    secondaryTextSecond: '\uD64D\uAE38\uB3D9',
    rightAddon: <>
        <IconText svg={ChatBubble} text="16" />
        <IconText svg={Favorite} text="32" />
      </>
  }
}`},(K=(W=O.parameters)==null?void 0:W.docs)==null?void 0:K.source)})}),b.parameters=g(l({},b.parameters),{docs:g(l({},(V=b.parameters)==null?void 0:V.docs),{source:l({originalSource:`{
  args: {
    title: 'Lorem ipsum',
    secondaryTextFirst: '\uAC8C\uC2DC\uD310 1',
    rightAddon: <>
        <IconText svg={ChatBubble} text="16" />
        <IconText svg={Favorite} text="32" />
      </>
  }
}`},(U=(F=b.parameters)==null?void 0:F.docs)==null?void 0:U.source)})}),j.parameters=g(l({},j.parameters),{docs:g(l({},(k=j.parameters)==null?void 0:k.docs),{source:l({originalSource:`{
  args: {
    title: 'Lorem ipsum',
    rightAddon: <>
        <IconText svg={ChatBubble} text="16" />
        <IconText svg={Favorite} text="32" />
      </>
  }
}`},(Y=(z=j.parameters)==null?void 0:z.docs)==null?void 0:Y.source)})}),C.parameters=g(l({},C.parameters),{docs:g(l({},(G=C.parameters)==null?void 0:G.docs),{source:l({originalSource:`{
  args: {
    title: 'Lorem ipsum',
    rightAddon: <>
        <IconText svg={ChatBubble} text="16" />
      </>
  }
}`},(H=(J=C.parameters)==null?void 0:J.docs)==null?void 0:H.source)})}),D.parameters=g(l({},D.parameters),{docs:g(l({},(q=D.parameters)==null?void 0:q.docs),{source:l({originalSource:`{
  args: {
    title: 'Lorem ipsum'
  }
}`},(X=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:X.source)})}),A.parameters=g(l({},A.parameters),{docs:g(l({},(Z=A.parameters)==null?void 0:Z.docs),{source:l({originalSource:`{
  args: {
    title: 'Lorem ipsum',
    hasBorder: false
  }
}`},(ee=($=A.parameters)==null?void 0:$.docs)==null?void 0:ee.source)})});const oe=["Primary","WithoutThumbnail","OnlyOneSecondaryText","WithoutSecondaryText","SingleMetadata","WithoutMetaData","WithoutBorder"]},"./src/components/Divider/Divider.tsx":(s,t,e)=>{"use strict";e.d(t,{i:()=>i});var n=e("./node_modules/classnames/index.js"),c=e.n(n),p=e("./node_modules/react/jsx-runtime.js");function i(m){var d=m,{variant:o="primary",className:x}=d,a=B(d,["variant","className"]);return(0,p.jsx)("div",l({className:c()("h-[1px] w-full",{"bg-border-primary dark:bg-border-primary_dark":o==="primary","bg-border-secondary dark:bg-border-secondary_dark":o==="secondary"},x)},a))}i.displayName="Divider";try{i.displayName="Divider",i.__docgenInfo={description:"",displayName:"Divider",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#Divider"]={docgenInfo:i.__docgenInfo,name:"Divider",path:"src/components/Divider/Divider.tsx#Divider"})}catch(o){}},"./src/components/Divider/index.ts":(s,t,e)=>{"use strict";e.d(t,{i:()=>n.i});var n=e("./src/components/Divider/Divider.tsx")},"./src/components/Icon/Icon.tsx":(s,t,e)=>{"use strict";e.d(t,{J:()=>c});var n=e("./node_modules/react/jsx-runtime.js");function c(a){var m=a,{svg:p,size:i="medium",className:o}=m,x=B(m,["svg","size","className"]);const d={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[i]||{width:24,height:24};return(0,n.jsx)(p,l({viewBox:"0 0 24 24",width:d.width,height:d.height,className:o!=null?o:"fill-black dark:fill-white"},x))}c.displayName="Icon";try{c.displayName="Icon",c.__docgenInfo={description:"",displayName:"Icon",props:{svg:{defaultValue:null,description:"",name:"svg",required:!0,type:{name:"FC<SVGAttributes<SVGElement>>"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'},{value:'"xlarge"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:c.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(p){}},"./src/components/Icon/index.ts":(s,t,e)=>{"use strict";e.d(t,{J:()=>n.J});var n=e("./src/components/Icon/Icon.tsx")},"./src/components/IconText/IconText.tsx":(s,t,e)=>{"use strict";e.d(t,{j:()=>a});var n=e("./node_modules/classnames/index.js"),c=e.n(n),p=e("./src/components/Icon/index.ts"),i=e("./src/components/Text/index.ts"),o=e("./node_modules/react/jsx-runtime.js");const x={medium:"body1",small:"body2",xsmall:"small"};function a({svg:m,size:d="medium",text:v}){return(0,o.jsxs)("div",{className:c()("flex flex-row items-center",{"gap-2":d!=="xsmall","gap-1":d==="xsmall"}),children:[(0,o.jsx)(p.J,{svg:m,size:d,className:"fill-text-secondary dark:fill-text-secondary_dark"}),(0,o.jsx)(i.x,{text:v,size:x[d],color:"secondary"})]})}a.displayName="IconText";try{a.displayName="IconText",a.__docgenInfo={description:"",displayName:"IconText",props:{svg:{defaultValue:null,description:"",name:"svg",required:!0,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/IconText/IconText.tsx#IconText"]={docgenInfo:a.__docgenInfo,name:"IconText",path:"src/components/IconText/IconText.tsx#IconText"})}catch(m){}},"./src/components/Text/Text.tsx":(s,t,e)=>{"use strict";e.d(t,{xv:()=>a});var n=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),c=e("./node_modules/react/jsx-runtime.js");const p={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-normal",body2:"text-sm leading-normal",small:"text-xs leading-normal"},i={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},o={left:"text-left",right:"text-right",center:"text-center"},x={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function a({className:m,text:d,size:v="body1",weight:E="regular",align:T="left",color:r="primary"}){return(0,c.jsx)("p",{className:(0,n.m)("font-display",p[v],i[E],o[T],x[r],m),children:d})}a.displayName="Text";try{a.displayName="Text",a.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'},{value:'"small"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:a.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(m){}},"./src/components/Text/index.ts":(s,t,e)=>{"use strict";e.d(t,{x:()=>n.xv});var n=e("./src/components/Text/Text.tsx")},"./src/components/Thumbnail/Thumbnail.tsx":(s,t,e)=>{"use strict";e.d(t,{p:()=>i});var n=e("./node_modules/classnames/index.js"),c=e.n(n),p=e("./node_modules/react/jsx-runtime.js");function i({src:o,alt:x="",width:a,rounded:m="16px",ratio:d="16:9",className:v}){const E={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[d],T={"8px":"rounded-lg","16px":"rounded-2xl"}[m];return(0,p.jsx)("img",{src:o,alt:x,style:{width:a},className:c()(E,T,"object-cover",v)})}i.displayName="Thumbnail";try{i.displayName="Thumbnail",i.__docgenInfo={description:"",displayName:"Thumbnail",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},rounded:{defaultValue:{value:"16px"},description:"",name:"rounded",required:!1,type:{name:"enum",value:[{value:'"8px"'},{value:'"16px"'}]}},ratio:{defaultValue:{value:"16:9"},description:"",name:"ratio",required:!1,type:{name:"enum",value:[{value:'"16:9"'},{value:'"16:10"'},{value:'"1:1"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Thumbnail/Thumbnail.tsx#Thumbnail"]={docgenInfo:i.__docgenInfo,name:"Thumbnail",path:"src/components/Thumbnail/Thumbnail.tsx#Thumbnail"})}catch(o){}},"./src/components/Thumbnail/index.ts":(s,t,e)=>{"use strict";e.d(t,{p:()=>n.p});var n=e("./src/components/Thumbnail/Thumbnail.tsx")},"./node_modules/classnames/index.js":(s,t)=>{var e,n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var c={}.hasOwnProperty,p="[native code]";function i(){for(var o=[],x=0;x<arguments.length;x++){var a=arguments[x];if(a){var m=typeof a;if(m==="string"||m==="number")o.push(a);else if(Array.isArray(a)){if(a.length){var d=i.apply(null,a);d&&o.push(d)}}else if(m==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){o.push(a.toString());continue}for(var v in a)c.call(a,v)&&a[v]&&o.push(v)}}}return o.join(" ")}s.exports?(i.default=i,s.exports=i):(e=[],n=function(){return i}.apply(t,e),n!==void 0&&(s.exports=n))})()}}]);})();

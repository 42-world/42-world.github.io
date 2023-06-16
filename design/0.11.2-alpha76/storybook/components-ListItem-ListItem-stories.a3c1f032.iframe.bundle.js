(()=>{var de=Object.defineProperty,ce=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var ae=(a,t,e)=>t in a?de(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,s=(a,t)=>{for(var e in t||(t={}))re.call(t,e)&&ae(a,e,t[e]);if(j)for(var e of j(t))se.call(t,e)&&ae(a,e,t[e]);return a},p=(a,t)=>ce(a,me(t));var A=(a,t)=>{var e={};for(var n in a)re.call(a,n)&&t.indexOf(n)<0&&(e[n]=a[n]);if(a!=null&&j)for(var n of j(a))t.indexOf(n)<0&&se.call(a,n)&&(e[n]=a[n]);return e};(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[216],{"./src/components/ListItem/ListItem.stories.ts":(a,t,e)=>{var R,M,N,P,W,k,V,K,F,z,U,Y,J,$,q,G,H,Q,X,Z,ee;"use strict";e.r(t),e.d(t,{OnlyOneSecondaryText:()=>S,Primary:()=>T,WithoutBorder:()=>I,WithoutCommentMeta:()=>O,WithoutMetaData:()=>E,WithoutSecondaryText:()=>b,WithoutThumbnail:()=>B,__namedExportsOrder:()=>le,default:()=>oe});var n=e("./node_modules/react/index.js"),d;function _(){return _=Object.assign?Object.assign.bind():function(m){for(var u=1;u<arguments.length;u++){var v=arguments[u];for(var h in v)Object.prototype.hasOwnProperty.call(v,h)&&(m[h]=v[h])}return m},_.apply(this,arguments)}var i=function(u){return n.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},u),d||(d=n.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"})))};const o=i;var l;function r(){return r=Object.assign?Object.assign.bind():function(m){for(var u=1;u<arguments.length;u++){var v=arguments[u];for(var h in v)Object.prototype.hasOwnProperty.call(v,h)&&(m[h]=v[h])}return m},r.apply(this,arguments)}var g=function(u){return n.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},u),l||(l=n.createElement("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})))};const x=g;var C=e("./src/components/Divider/Divider.tsx"),D=e("./src/components/Icon/index.ts"),w=e("./src/components/Thumbnail/index.ts"),y=e("./src/components/Text/Text.tsx"),c=e("./node_modules/react/jsx-runtime.js");const L=(m,u)=>(0,c.jsxs)("div",{className:"flex flex-row items-center gap-1",children:[m&&(0,c.jsx)(y.xv,{text:m,size:"body2",weight:"medium",color:"secondary"}),m&&u&&"\xB7",u&&(0,c.jsx)(y.xv,{text:u,size:"body2",weight:"regular",color:"secondary"})]});L.displayName="MergedSecondaryText";function f({title:m,thumbnailSrc:u,secondaryTextFirst:v,secondaryTextSecond:h,commentCnt:te,likeCnt:ne,hasBorder:ue=!0}){return(0,c.jsxs)("div",{className:"w-[540px] cursor-pointer active:scale-95 transition-transform duration-300 ease-out select-none",children:[(0,c.jsxs)("div",{className:"flex flex-row items-center py-4",children:[u&&(0,c.jsx)(w.p,{src:u,alt:m,width:85,ratio:"16:9"}),(0,c.jsxs)("div",{className:"ml-3 flex-1",children:[L(v,h),(0,c.jsx)(y.xv,{text:m,size:"body1",weight:"medium",color:"primary"})]}),(0,c.jsxs)("div",{className:"flex flex-row items-center gap-2 text-text-secondary dark:text-text-secondary_dark",children:[te&&(0,c.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,c.jsx)(D.J,{svg:o,className:"w-4 h-4"}),(0,c.jsx)(y.xv,{text:te.toString(),size:"body2",weight:"regular",color:"secondary"})]}),ne&&(0,c.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,c.jsx)(D.J,{svg:x,className:"w-4 h-4"}),(0,c.jsx)(y.xv,{text:ne.toString(),size:"body2",weight:"regular",color:"secondary"})]})]})]}),ue&&(0,c.jsx)(C.i,{variant:"secondary"})]})}f.displayName="ListItem";try{f.displayName="ListItem",f.__docgenInfo={description:"",displayName:"ListItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},thumbnailSrc:{defaultValue:null,description:"",name:"thumbnailSrc",required:!1,type:{name:"string"}},secondaryTextFirst:{defaultValue:null,description:"",name:"secondaryTextFirst",required:!1,type:{name:"string"}},secondaryTextSecond:{defaultValue:null,description:"",name:"secondaryTextSecond",required:!1,type:{name:"string"}},commentCnt:{defaultValue:null,description:"",name:"commentCnt",required:!1,type:{name:"number"}},likeCnt:{defaultValue:null,description:"",name:"likeCnt",required:!1,type:{name:"number"}},hasBorder:{defaultValue:{value:"true"},description:"",name:"hasBorder",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ListItem/ListItem.tsx#ListItem"]={docgenInfo:f.__docgenInfo,name:"ListItem",path:"src/components/ListItem/ListItem.tsx#ListItem"})}catch(m){}const ie={title:"rookies/ListItem",component:f},T={args:{thumbnailSrc:"https://picsum.photos/536/354",title:"\uC9C0\uBC14: \uC9C0\uCD5C\uB294 \uBC14\uBCF4\uB77C\uB294 \uB73B",secondaryTextFirst:"\uC9C0\uCD5C",secondaryTextSecond:"2021-10-20",commentCnt:16,likeCnt:32}},B={args:{title:"\uC9C0\uBC14: \uC9C0\uCD5C\uB294 \uBC14\uBCF4\uB77C\uB294 \uB73B",secondaryTextFirst:"\uC9C0\uCD5C",secondaryTextSecond:"2021-10-20",commentCnt:16,likeCnt:32}},S={args:{title:"\uC9C0\uBC14 -> \uC9C0\uCD5C\uB294 \uBC14\uBCF4\uB77C\uB294 \uB73B",secondaryTextFirst:"\uC9C0\uCD5C",commentCnt:16,likeCnt:32}},b={args:{title:"\uC9C0\uBC14: \uC9C0\uCD5C\uB294 \uBC14\uBCF4\uB77C\uB294 \uB73B",commentCnt:16,likeCnt:32}},O={args:{title:"\uC9C0\uBC14: \uC9C0\uCD5C\uB294 \uBC14\uBCF4\uB77C\uB294 \uB73B",likeCnt:32}},E={args:{title:"\uC9C0\uBC14: \uC9C0\uCD5C\uB294 \uBC14\uBCF4\uB77C\uB294 \uB73B"}},I={args:{title:"\uC9C0\uBC14: \uC9C0\uCD5C\uB294 \uBC14\uBCF4\uB77C\uB294 \uB73B",hasBorder:!1}},oe=ie;T.parameters=p(s({},T.parameters),{docs:p(s({},(R=T.parameters)==null?void 0:R.docs),{source:s({originalSource:`{
  args: {
    thumbnailSrc: 'https://picsum.photos/536/354',
    title: '\uC9C0\uBC14: \uC9C0\uCD5C\uB294 \uBC14\uBCF4\uB77C\uB294 \uB73B',
    secondaryTextFirst: '\uC9C0\uCD5C',
    secondaryTextSecond: '2021-10-20',
    commentCnt: 16,
    likeCnt: 32
  }
}`},(N=(M=T.parameters)==null?void 0:M.docs)==null?void 0:N.source)})}),B.parameters=p(s({},B.parameters),{docs:p(s({},(P=B.parameters)==null?void 0:P.docs),{source:s({originalSource:`{
  args: {
    title: '\uC9C0\uBC14: \uC9C0\uCD5C\uB294 \uBC14\uBCF4\uB77C\uB294 \uB73B',
    secondaryTextFirst: '\uC9C0\uCD5C',
    secondaryTextSecond: '2021-10-20',
    commentCnt: 16,
    likeCnt: 32
  }
}`},(k=(W=B.parameters)==null?void 0:W.docs)==null?void 0:k.source)})}),S.parameters=p(s({},S.parameters),{docs:p(s({},(V=S.parameters)==null?void 0:V.docs),{source:s({originalSource:`{
  args: {
    title: '\uC9C0\uBC14 -> \uC9C0\uCD5C\uB294 \uBC14\uBCF4\uB77C\uB294 \uB73B',
    secondaryTextFirst: '\uC9C0\uCD5C',
    commentCnt: 16,
    likeCnt: 32
  }
}`},(F=(K=S.parameters)==null?void 0:K.docs)==null?void 0:F.source)})}),b.parameters=p(s({},b.parameters),{docs:p(s({},(z=b.parameters)==null?void 0:z.docs),{source:s({originalSource:`{
  args: {
    title: '\uC9C0\uBC14: \uC9C0\uCD5C\uB294 \uBC14\uBCF4\uB77C\uB294 \uB73B',
    commentCnt: 16,
    likeCnt: 32
  }
}`},(Y=(U=b.parameters)==null?void 0:U.docs)==null?void 0:Y.source)})}),O.parameters=p(s({},O.parameters),{docs:p(s({},(J=O.parameters)==null?void 0:J.docs),{source:s({originalSource:`{
  args: {
    title: '\uC9C0\uBC14: \uC9C0\uCD5C\uB294 \uBC14\uBCF4\uB77C\uB294 \uB73B',
    likeCnt: 32
  }
}`},(q=($=O.parameters)==null?void 0:$.docs)==null?void 0:q.source)})}),E.parameters=p(s({},E.parameters),{docs:p(s({},(G=E.parameters)==null?void 0:G.docs),{source:s({originalSource:`{
  args: {
    title: '\uC9C0\uBC14: \uC9C0\uCD5C\uB294 \uBC14\uBCF4\uB77C\uB294 \uB73B'
  }
}`},(Q=(H=E.parameters)==null?void 0:H.docs)==null?void 0:Q.source)})}),I.parameters=p(s({},I.parameters),{docs:p(s({},(X=I.parameters)==null?void 0:X.docs),{source:s({originalSource:`{
  args: {
    title: '\uC9C0\uBC14: \uC9C0\uCD5C\uB294 \uBC14\uBCF4\uB77C\uB294 \uB73B',
    hasBorder: false
  }
}`},(ee=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:ee.source)})});const le=["Primary","WithoutThumbnail","OnlyOneSecondaryText","WithoutSecondaryText","WithoutCommentMeta","WithoutMetaData","WithoutBorder"]},"./src/components/Divider/Divider.tsx":(a,t,e)=>{"use strict";e.d(t,{i:()=>i});var n=e("./node_modules/classnames/index.js"),d=e.n(n),_=e("./node_modules/react/jsx-runtime.js");function i(g){var x=g,{variant:o="primary",className:l}=x,r=A(x,["variant","className"]);return(0,_.jsx)("div",s({className:d()("w-full h-[1px]",{"bg-border-primary dark:bg-border-primary_dark":o==="primary","bg-border-secondary dark:bg-border-secondary_dark":o==="secondary"},l)},r))}i.displayName="Divider";try{i.displayName="Divider",i.__docgenInfo={description:"",displayName:"Divider",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#Divider"]={docgenInfo:i.__docgenInfo,name:"Divider",path:"src/components/Divider/Divider.tsx#Divider"})}catch(o){}},"./src/components/Icon/Icon.tsx":(a,t,e)=>{"use strict";e.d(t,{J:()=>d});var n=e("./node_modules/react/jsx-runtime.js");function d(r){var g=r,{svg:_,size:i="medium",className:o}=g,l=A(g,["svg","size","className"]);const x={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[i]||{width:24,height:24};return(0,n.jsx)(_,s({viewBox:"0 0 24 24",width:x.width,height:x.height,className:o!=null?o:"fill-black dark:fill-white"},l))}d.displayName="Icon";try{d.displayName="Icon",d.__docgenInfo={description:"",displayName:"Icon",props:{svg:{defaultValue:null,description:"",name:"svg",required:!0,type:{name:"FC<SVGAttributes<SVGElement>>"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'},{value:'"xlarge"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:d.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(_){}},"./src/components/Icon/index.ts":(a,t,e)=>{"use strict";e.d(t,{J:()=>n.J});var n=e("./src/components/Icon/Icon.tsx")},"./src/components/Text/Text.tsx":(a,t,e)=>{"use strict";e.d(t,{xv:()=>l});var n=e("./node_modules/react/jsx-runtime.js");const d={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-normal",body2:"text-sm leading-normal",small:"text-xs leading-normal"},_={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},i={left:"text-left",right:"text-right",center:"text-center"},o={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function l({className:r,text:g,size:x="body1",weight:C="regular",align:D="left",color:w="primary"}){return(0,n.jsx)("p",{className:`font-display
        ${d[x]}
        ${_[C]}
        ${i[D]}
        ${o[w]}
        ${r}
        `,children:g})}l.displayName="Text";try{l.displayName="Text",l.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'},{value:'"small"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:l.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(r){}},"./src/components/Thumbnail/Thumbnail.tsx":(a,t,e)=>{"use strict";e.d(t,{p:()=>i});var n=e("./node_modules/classnames/index.js"),d=e.n(n),_=e("./node_modules/react/jsx-runtime.js");function i({src:o,alt:l="",width:r,ratio:g="16:9"}){const x={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[g];return(0,_.jsx)("img",{src:o,alt:l,style:{width:r},className:d()(x,"object-cover rounded-2xl")})}i.displayName="Thumbnail";try{i.displayName="Thumbnail",i.__docgenInfo={description:"",displayName:"Thumbnail",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},ratio:{defaultValue:{value:"16:9"},description:"",name:"ratio",required:!1,type:{name:"enum",value:[{value:'"16:9"'},{value:'"16:10"'},{value:'"1:1"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Thumbnail/Thumbnail.tsx#Thumbnail"]={docgenInfo:i.__docgenInfo,name:"Thumbnail",path:"src/components/Thumbnail/Thumbnail.tsx#Thumbnail"})}catch(o){}},"./src/components/Thumbnail/index.ts":(a,t,e)=>{"use strict";e.d(t,{p:()=>n.p});var n=e("./src/components/Thumbnail/Thumbnail.tsx")},"./node_modules/classnames/index.js":(a,t)=>{var e,n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var d={}.hasOwnProperty,_="[native code]";function i(){for(var o=[],l=0;l<arguments.length;l++){var r=arguments[l];if(r){var g=typeof r;if(g==="string"||g==="number")o.push(r);else if(Array.isArray(r)){if(r.length){var x=i.apply(null,r);x&&o.push(x)}}else if(g==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){o.push(r.toString());continue}for(var C in r)d.call(r,C)&&r[C]&&o.push(C)}}}return o.join(" ")}a.exports?(i.default=i,a.exports=i):(e=[],n=function(){return i}.apply(t,e),n!==void 0&&(a.exports=n))})()}}]);})();

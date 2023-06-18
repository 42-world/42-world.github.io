"use strict";(()=>{var A=Object.defineProperty,P=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var B=(a,t,e)=>t in a?A(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,v=(a,t)=>{for(var e in t||(t={}))C.call(t,e)&&B(a,e,t[e]);if(h)for(var e of h(t))j.call(t,e)&&B(a,e,t[e]);return a},E=(a,t)=>P(a,R(t));var T=(a,t)=>{var e={};for(var n in a)C.call(a,n)&&t.indexOf(n)<0&&(e[n]=a[n]);if(a!=null&&h)for(var n of h(a))t.indexOf(n)<0&&j.call(a,n)&&(e[n]=a[n]);return e};(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[110],{"./src/components/Footer/Footer.stories.ts":(a,t,e)=>{var y,I,w;e.r(t),e.d(t,{Primary:()=>_,__namedExportsOrder:()=>S,default:()=>O});var n=e("./src/components/Button/index.ts"),l=e("./src/components/Text/index.ts"),i=e("./node_modules/react/index.js"),m;function d(){return d=Object.assign?Object.assign.bind():function(p){for(var g=1;g<arguments.length;g++){var f=arguments[g];for(var b in f)Object.prototype.hasOwnProperty.call(f,b)&&(p[b]=f[b])}return p},d.apply(this,arguments)}var o=function(g){return i.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},g),m||(m=i.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"})))};const u=o;var s=e("./src/assets/icons/Github.svg"),r=e("./node_modules/react/jsx-runtime.js");function c({githubLink:p="",mailLink:g="",text:f}){return(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsxs)("div",{className:"mb-6 w-full flex flex-row align-center justify-center gap-2",children:[(0,r.jsx)("a",{href:p,target:"_blank",className:"w-fit h-fit inline-block",children:(0,r.jsx)(n.z,{variant:"secondary",icon:s.Z})}),(0,r.jsx)("a",{href:g,target:"_blank",className:"w-fit h-fit inline-block",children:(0,r.jsx)(n.z,{variant:"secondary",icon:u})})]}),(0,r.jsx)("div",{className:"flex align-center justify-center",children:(0,r.jsx)(l.x,{size:"body2",color:"secondary",text:f})})]})}c.displayName="Footer";try{c.displayName="Footer",c.__docgenInfo={description:"",displayName:"Footer",props:{githubLink:{defaultValue:{value:""},description:"",name:"githubLink",required:!1,type:{name:"string"}},mailLink:{defaultValue:{value:""},description:"",name:"mailLink",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Footer/Footer.tsx#Footer"]={docgenInfo:c.__docgenInfo,name:"Footer",path:"src/components/Footer/Footer.tsx#Footer"})}catch(p){}const x={title:"rookies/Footer",component:c},_={args:{githubLink:"https://github.com",mailLink:"mailto:asdf@naver.com",text:"@ 2022. Team ROOK!ES"}},O=x;_.parameters=E(v({},_.parameters),{docs:E(v({},(y=_.parameters)==null?void 0:y.docs),{source:v({originalSource:`{
  // Add your story args here
  args: {
    githubLink: 'https://github.com',
    mailLink: 'mailto:asdf@naver.com',
    text: '@ 2022. Team ROOK!ES'
  }
}`},(w=(I=_.parameters)==null?void 0:I.docs)==null?void 0:w.source)})});const S=["Primary"]},"./src/components/Button/Button.tsx":(a,t,e)=>{e.d(t,{z:()=>s});var n=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),l=e("./node_modules/classnames/index.js"),i=e.n(l),m=e("./src/components/Icon/index.ts"),d=e("./src/components/Text/index.ts"),o=e("./node_modules/react/jsx-runtime.js");const u={primary:"bg-color-system_200 border-0 hover:bg-color-system_300",secondary:"border-border-primary dark:border-border-primary_dark hover:border-color-system_200 hover:dark:border-color-system_200",text:"border-0"};function s(S){var y=S,{variant:r="primary",text:c,icon:x,className:_}=y,O=T(y,["variant","text","icon","className"]);return(0,o.jsxs)("button",E(v({className:(0,n.m)(`group h-8 flex flex-row items-center gap-2 rounded-2xl border border-solid transition-all duration-300 active:scale-95 ${u[r]}`,x&&!c?"px-2":"px-3",_)},O),{children:[x&&(0,o.jsx)(m.J,{svg:x,size:"small",className:i()(r==="primary"?"fill-color-white":"fill-text-secondary dark:fill-text-secondary_dark","transition-colors duration-300",{"group-hover:fill-color-system_200":r!=="primary"})}),c&&(0,o.jsx)(d.x,{text:c,size:"body2",weight:"medium",color:r==="primary"?"white":"secondary",className:i()("transition-colors duration-300",{"group-hover:text-color-system_200":r!=="primary"})})]}))}s.displayName="Button";try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"FC<SVGAttributes<SVGSVGElement>>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:s.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(r){}},"./src/components/Button/index.ts":(a,t,e)=>{e.d(t,{z:()=>n.z});var n=e("./src/components/Button/Button.tsx")},"./src/components/Icon/Icon.tsx":(a,t,e)=>{e.d(t,{J:()=>l});var n=e("./node_modules/react/jsx-runtime.js");function l(u){var s=u,{svg:i,size:m="medium",className:d}=s,o=T(s,["svg","size","className"]);const r={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[m]||{width:24,height:24};return(0,n.jsx)(i,v({viewBox:"0 0 24 24",width:r.width,height:r.height,className:d!=null?d:"fill-black dark:fill-white"},o))}l.displayName="Icon";try{l.displayName="Icon",l.__docgenInfo={description:"",displayName:"Icon",props:{svg:{defaultValue:null,description:"",name:"svg",required:!0,type:{name:"FC<SVGAttributes<SVGElement>>"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'},{value:'"xlarge"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:l.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(i){}},"./src/components/Icon/index.ts":(a,t,e)=>{e.d(t,{J:()=>n.J});var n=e("./src/components/Icon/Icon.tsx")},"./src/components/Text/Text.tsx":(a,t,e)=>{e.d(t,{xv:()=>o});var n=e("./node_modules/react/jsx-runtime.js");const l={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-normal",body2:"text-sm leading-normal",small:"text-xs leading-normal"},i={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},m={left:"text-left",right:"text-right",center:"text-center"},d={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function o({className:u,text:s,size:r="body1",weight:c="regular",align:x="left",color:_="primary"}){return(0,n.jsx)("p",{className:`font-display
        ${l[r]}
        ${i[c]}
        ${m[x]}
        ${d[_]}
        ${u}
        `,children:s})}o.displayName="Text";try{o.displayName="Text",o.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'},{value:'"small"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:o.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(u){}},"./src/components/Text/index.ts":(a,t,e)=>{e.d(t,{x:()=>n.xv});var n=e("./src/components/Text/Text.tsx")},"./src/assets/icons/Github.svg":(a,t,e)=>{e.d(t,{Z:()=>d});var n=e("./node_modules/react/index.js"),l;function i(){return i=Object.assign?Object.assign.bind():function(o){for(var u=1;u<arguments.length;u++){var s=arguments[u];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(o[r]=s[r])}return o},i.apply(this,arguments)}var m=function(u){return n.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},u),l||(l=n.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"})))};const d=m}}]);})();
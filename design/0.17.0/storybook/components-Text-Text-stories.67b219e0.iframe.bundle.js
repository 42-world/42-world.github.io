"use strict";(()=>{var T=Object.defineProperty,b=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var g=(a,t,e)=>t in a?T(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,o=(a,t)=>{for(var e in t||(t={}))k.call(t,e)&&g(a,e,t[e]);if(x)for(var e of x(t))w.call(t,e)&&g(a,e,t[e]);return a},m=(a,t)=>b(a,h(t));(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[874],{"./src/components/Text/Text.stories.ts":(a,t,e)=>{var i,l,n;e.r(t),e.d(t,{Primary:()=>r,__namedExportsOrder:()=>_,default:()=>s});var u=e("./src/components/Text/Text.tsx");const d={title:"rookies/Text",component:u.xv},r={args:{text:"\uD14C\uC2A4\uD2B8 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4!",size:"body1",weight:"medium"}},s=d;r.parameters=m(o({},r.parameters),{docs:m(o({},(i=r.parameters)==null?void 0:i.docs),{source:o({originalSource:`{
  args: {
    text: '\uD14C\uC2A4\uD2B8 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4!',
    size: 'body1',
    weight: 'medium'
  }
}`},(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source)})});const _=["Primary"]},"./src/components/Text/Text.tsx":(a,t,e)=>{e.d(t,{xv:()=>l});var u=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),d=e("./node_modules/react/jsx-runtime.js");const r={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-normal",body2:"text-sm leading-normal",small:"text-xs leading-normal"},s={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},_={left:"text-left",right:"text-right",center:"text-center"},i={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function l({className:n,text:c,size:y="body1",weight:v="regular",align:p="left",color:f="primary"}){return(0,d.jsx)("p",{className:(0,u.m)("font-display",r[y],s[v],_[p],i[f],n),children:c})}l.displayName="Text";try{l.displayName="Text",l.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'},{value:'"small"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:l.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(n){}}}]);})();
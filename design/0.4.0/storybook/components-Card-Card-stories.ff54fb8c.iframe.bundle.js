(()=>{var T=Object.defineProperty,B=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var g=(s,a,e)=>a in s?T(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,c=(s,a)=>{for(var e in a||(a={}))v.call(a,e)&&g(s,e,a[e]);if(x)for(var e of x(a))S.call(a,e)&&g(s,e,a[e]);return s},p=(s,a)=>B(s,D(a));(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[518],{"./src/components/Card/Card.stories.ts":(s,a,e)=>{var d,m,C,_,h,A,y,f,E;"use strict";e.r(a),e.d(a,{Primary:()=>i,PrimaryNoPrimaryText:()=>n,PrimaryWithDetail:()=>r,__namedExportsOrder:()=>t,default:()=>l});var o=e("./src/components/Card/Card.tsx");const u={title:"rookies/Card",component:o.Z},i={args:{imageSrc:"https://picsum.photos/536/354",imageAlt:"42world",primary:"\uC5D0\uBCA0\uBCA0\uC190",secondary:"2023.04.32"}},r={args:{imageSrc:"https://picsum.photos/536/354",imageAlt:"42world",primary:"\uC5D0\uBCA0\uBCA0\uC190",secondary:"2023.04.32",detail:"\uC9C0\uCD5C\uB294 \uBC30\uAC00 \uACE0\uD504\uACE0 \uB0B4\uC77C\uC740 \uB2ED\uAC00\uC2B4\uC0B4 \uC18C\uC138\uC9C0 \uBA39\uC744 \uAC70\uACE0 \uC2A4\uD0C0\uBC85\uC2A4 \uAC00\uC11C \uC774\uAC70 \uD558\uACE0"}},n={args:{imageSrc:"https://picsum.photos/536/354",imageAlt:"42world",secondary:"\uC9C0\uCD5C",detail:"\uC9C0\uCD5C\uB294 \uBC30\uAC00 \uACE0\uD504\uACE0 \uB0B4\uC77C\uC740 \uB2ED\uAC00\uC2B4\uC0B4 \uC18C\uC138\uC9C0 \uBA39\uC744 \uAC70\uACE0 \uC2A4\uD0C0\uBC85\uC2A4 \uAC00\uC11C \uC774\uAC70 \uD558\uACE0"}},l=u;i.parameters=p(c({},i.parameters),{docs:p(c({},(d=i.parameters)==null?void 0:d.docs),{source:c({originalSource:`{
  args: {
    imageSrc: 'https://picsum.photos/536/354',
    imageAlt: '42world',
    primary: '\uC5D0\uBCA0\uBCA0\uC190',
    secondary: '2023.04.32'
  }
}`},(C=(m=i.parameters)==null?void 0:m.docs)==null?void 0:C.source)})}),r.parameters=p(c({},r.parameters),{docs:p(c({},(_=r.parameters)==null?void 0:_.docs),{source:c({originalSource:`{
  args: {
    imageSrc: 'https://picsum.photos/536/354',
    imageAlt: '42world',
    primary: '\uC5D0\uBCA0\uBCA0\uC190',
    secondary: '2023.04.32',
    detail: '\uC9C0\uCD5C\uB294 \uBC30\uAC00 \uACE0\uD504\uACE0 \uB0B4\uC77C\uC740 \uB2ED\uAC00\uC2B4\uC0B4 \uC18C\uC138\uC9C0 \uBA39\uC744 \uAC70\uACE0 \uC2A4\uD0C0\uBC85\uC2A4 \uAC00\uC11C \uC774\uAC70 \uD558\uACE0'
  }
}`},(A=(h=r.parameters)==null?void 0:h.docs)==null?void 0:A.source)})}),n.parameters=p(c({},n.parameters),{docs:p(c({},(y=n.parameters)==null?void 0:y.docs),{source:c({originalSource:`{
  args: {
    imageSrc: 'https://picsum.photos/536/354',
    imageAlt: '42world',
    secondary: '\uC9C0\uCD5C',
    detail: '\uC9C0\uCD5C\uB294 \uBC30\uAC00 \uACE0\uD504\uACE0 \uB0B4\uC77C\uC740 \uB2ED\uAC00\uC2B4\uC0B4 \uC18C\uC138\uC9C0 \uBA39\uC744 \uAC70\uACE0 \uC2A4\uD0C0\uBC85\uC2A4 \uAC00\uC11C \uC774\uAC70 \uD558\uACE0'
  }
}`},(E=(f=n.parameters)==null?void 0:f.docs)==null?void 0:E.source)})});const t=["Primary","PrimaryWithDetail","PrimaryNoPrimaryText"]},"./src/components/Card/Card.tsx":(s,a,e)=>{"use strict";e.d(a,{Z:()=>i});var o=e("./src/components/Thumbnail/index.ts"),u=e("./node_modules/react/jsx-runtime.js");function i({imageSrc:r,imageAlt:n,primary:l="",secondary:t="",detail:d}){return(0,u.jsxs)("div",{className:"w-[278px] flex flex-col group",children:[(0,u.jsx)("div",{className:"group-hover:mt-[-8px] transition-spacing ease-in-out duration-300",children:(0,u.jsx)(o.p,{src:r,alt:n,width:278,ratio:"16:9"})}),(0,u.jsxs)("div",{className:"mt-3 group-hover:mt-5 transition-spacing ease-in-out duration-300 text-sm font-normal text-text-secondary dark:text-text-secondary_dark",children:[(0,u.jsx)("span",{children:l}),(0,u.jsx)("span",{className:"mx-1",children:"\xB7"}),(0,u.jsx)("span",{children:t})]}),d&&(0,u.jsx)("p",{className:"text-base font-medium line-clamp-1 text-text-primary dark:text-text-primary_dark",children:d})]})}i.displayName="Card";try{i.displayName="Card",i.__docgenInfo={description:"",displayName:"Card",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}},primary:{defaultValue:{value:""},description:"",name:"primary",required:!1,type:{name:"string"}},secondary:{defaultValue:{value:""},description:"",name:"secondary",required:!1,type:{name:"string"}},detail:{defaultValue:null,description:"",name:"detail",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:i.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(r){}},"./src/components/Thumbnail/Thumbnail.tsx":(s,a,e)=>{"use strict";e.d(a,{p:()=>r});var o=e("./node_modules/classnames/index.js"),u=e.n(o),i=e("./node_modules/react/jsx-runtime.js");function r({src:n,alt:l="",width:t,ratio:d="16:9"}){const m={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[d];return(0,i.jsx)("img",{src:n,alt:l,style:{width:t},className:u()(m,"object-cover rounded-2xl")})}r.displayName="Thumbnail";try{r.displayName="Thumbnail",r.__docgenInfo={description:"",displayName:"Thumbnail",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},ratio:{defaultValue:{value:"16:9"},description:"",name:"ratio",required:!1,type:{name:"enum",value:[{value:'"16:9"'},{value:'"16:10"'},{value:'"1:1"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Thumbnail/Thumbnail.tsx#Thumbnail"]={docgenInfo:r.__docgenInfo,name:"Thumbnail",path:"src/components/Thumbnail/Thumbnail.tsx#Thumbnail"})}catch(n){}},"./src/components/Thumbnail/index.ts":(s,a,e)=>{"use strict";e.d(a,{p:()=>o.p});var o=e("./src/components/Thumbnail/Thumbnail.tsx")},"./node_modules/classnames/index.js":(s,a)=>{var e,o;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var u={}.hasOwnProperty,i="[native code]";function r(){for(var n=[],l=0;l<arguments.length;l++){var t=arguments[l];if(t){var d=typeof t;if(d==="string"||d==="number")n.push(t);else if(Array.isArray(t)){if(t.length){var m=r.apply(null,t);m&&n.push(m)}}else if(d==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){n.push(t.toString());continue}for(var C in t)u.call(t,C)&&t[C]&&n.push(C)}}}return n.join(" ")}s.exports?(r.default=r,s.exports=r):(e=[],o=function(){return r}.apply(a,e),o!==void 0&&(s.exports=o))})()}}]);})();

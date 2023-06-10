(()=>{var D=Object.defineProperty,L=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var j=(n,a,e)=>a in n?D(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e,x=(n,a)=>{for(var e in a||(a={}))C.call(a,e)&&j(n,e,a[e]);if(v)for(var e of v(a))A.call(a,e)&&j(n,e,a[e]);return n},g=(n,a)=>L(n,B(a));var N=(n,a)=>{var e={};for(var r in n)C.call(n,r)&&a.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&v)for(var r of v(n))a.indexOf(r)<0&&A.call(n,r)&&(e[r]=n[r]);return e};(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[195],{"./src/components/Input/Input.stories.ts":(n,a,e)=>{var u,t,l;"use strict";e.r(a),e.d(a,{Primary:()=>o,__namedExportsOrder:()=>s,default:()=>d});var r=e("./src/components/Input/Input.tsx");const f={title:"rookies/Input",component:r.I},o={args:{placeholder:"",maxLength:10,variant:"outline",hasError:!1}},d=f;o.parameters=g(x({},o.parameters),{docs:g(x({},(u=o.parameters)==null?void 0:u.docs),{source:x({originalSource:`{
  args: {
    placeholder: '',
    maxLength: 10,
    variant: 'outline',
    hasError: false
  }
}`},(l=(t=o.parameters)==null?void 0:t.docs)==null?void 0:l.source)})});const s=["Primary"]},"./src/components/Input/Input.tsx":(n,a,e)=>{"use strict";e.d(a,{I:()=>u});var r=e("./node_modules/classnames/index.js"),f=e.n(r),o=e("./node_modules/react/index.js");const d=({state:t,defaultState:l,onChange:p})=>{const[i,_]=(0,o.useState)(typeof l=="function"?l():l),m=t!=null,h=m?t:i,y=(0,o.useCallback)(c=>{typeof c=="function"&&(c=c()),m||_(c),p==null||p(c)},[]);return[h,y]};var s=e("./node_modules/react/jsx-runtime.js");const u=(0,o.forwardRef)((K,V)=>{var I=K,{id:t,label:l,value:p,defaultValue:i,subLabel:_,variant:m,rightAddon:h,hasError:y,maxLength:c,onValueChange:O}=I,S=N(I,["id","label","value","defaultValue","subLabel","variant","rightAddon","hasError","maxLength","onValueChange"]);const b=(0,o.useId)(),[E,k]=d({state:p,defaultState:i!=null?i:"",onChange:O}),R=w=>{k(w.target.value)};return(0,s.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,s.jsxs)("div",{className:"flex w-full",children:[l&&(0,s.jsx)("label",{htmlFor:t!=null?t:b,className:'before:content-["*"] before:mr-1 text-sm leading-[1.8] font-normal text-text-secondary dark:text-text-secondary_dark',children:l}),c&&(0,s.jsxs)("span",{className:"text-sm leading-[1.8] font-normal ml-auto text-text-secondary dark:text-text-secondary_dark",children:["(",E.length,"/",c,")"]})]}),(0,s.jsxs)("div",{className:f()("flex items-center w-full rounded-lg px-4",{"border border-solid border-border-primary bg-bg-primary_alpha_0 focus-within:border-color-blue_200":m==="outline","bg-bg-secondary dark:bg-bg-secondary_dark":m==="filled","border-color-red focus-within:border-color-red":y}),children:[(0,s.jsx)("input",x({ref:V,id:t!=null?t:b,className:"w-full h-[44px] bg-transparent focus:outline-none text-base font-normal leading-[1.5] text-text-primary dark:text-text-primary_dark placeholder:text-text-tertiary dark:placeholder:text-text-tertiary_dark",value:E,onChange:R,maxLength:c},S)),h&&(0,s.jsx)("span",{className:"flex",children:h})]}),_&&(0,s.jsx)("span",{className:f()("text-sm leading-[1.8] font-normal text-text-secondary dark:text-text-secondary_dark",{"!text-color-red":y}),children:_})]})});try{u.displayName="Input",u.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"outline"'},{value:'"filled"'}]}},hasError:{defaultValue:null,description:"",name:"hasError",required:!0,type:{name:"boolean"}},rightAddon:{defaultValue:null,description:"",name:"rightAddon",required:!0,type:{name:"ReactNode"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(value: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:u.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(t){}},"./node_modules/classnames/index.js":(n,a)=>{var e,r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var f={}.hasOwnProperty,o="[native code]";function d(){for(var s=[],u=0;u<arguments.length;u++){var t=arguments[u];if(t){var l=typeof t;if(l==="string"||l==="number")s.push(t);else if(Array.isArray(t)){if(t.length){var p=d.apply(null,t);p&&s.push(p)}}else if(l==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){s.push(t.toString());continue}for(var i in t)f.call(t,i)&&t[i]&&s.push(i)}}}return s.join(" ")}n.exports?(d.default=d,n.exports=d):(e=[],r=function(){return d}.apply(a,e),r!==void 0&&(n.exports=r))})()}}]);})();
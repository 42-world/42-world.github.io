(()=>{var A=Object.defineProperty,P=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var y=(r,s,e)=>s in r?A(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e,c=(r,s)=>{for(var e in s||(s={}))E.call(s,e)&&y(r,e,s[e]);if(v)for(var e of v(s))O.call(s,e)&&y(r,e,s[e]);return r},l=(r,s)=>P(r,g(s));var S=(r,s)=>{var e={};for(var n in r)E.call(r,n)&&s.indexOf(n)<0&&(e[n]=r[n]);if(r!=null&&v)for(var n of v(r))s.indexOf(n)<0&&O.call(r,n)&&(e[n]=r[n]);return e};(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[953],{"./src/components/Divider/Divider.stories.ts":(r,s,e)=>{var i,u,d,m,f,D;"use strict";e.r(s),e.d(s,{Primary:()=>o,Secondary:()=>a,__namedExportsOrder:()=>_,default:()=>t});var n=e("./src/components/Divider/Divider.tsx");const p={title:"rookies/Divder",component:n.i},o={args:{variant:"primary"}},a={args:{variant:"secondary"}},t=p;o.parameters=l(c({},o.parameters),{docs:l(c({},(i=o.parameters)==null?void 0:i.docs),{source:c({originalSource:`{
  args: {
    variant: 'primary'
  }
}`},(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source)})}),a.parameters=l(c({},a.parameters),{docs:l(c({},(m=a.parameters)==null?void 0:m.docs),{source:c({originalSource:`{
  args: {
    variant: 'secondary'
  }
}`},(D=(f=a.parameters)==null?void 0:f.docs)==null?void 0:D.source)})});const _=["Primary","Secondary"]},"./src/components/Divider/Divider.tsx":(r,s,e)=>{"use strict";e.d(s,{i:()=>a});var n=e("./node_modules/classnames/index.js"),p=e.n(n),o=e("./node_modules/react/jsx-runtime.js");function a(u){var d=u,{variant:t="primary",className:_}=d,i=S(d,["variant","className"]);return(0,o.jsx)("div",c({className:p()("h-[1px] w-full",{"bg-border-primary dark:bg-border-primary_dark":t==="primary","bg-border-secondary dark:bg-border-secondary_dark":t==="secondary"},_)},i))}a.displayName="Divider";try{a.displayName="Divider",a.__docgenInfo={description:"",displayName:"Divider",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#Divider"]={docgenInfo:a.__docgenInfo,name:"Divider",path:"src/components/Divider/Divider.tsx#Divider"})}catch(t){}},"./node_modules/classnames/index.js":(r,s)=>{var e,n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var p={}.hasOwnProperty,o="[native code]";function a(){for(var t=[],_=0;_<arguments.length;_++){var i=arguments[_];if(i){var u=typeof i;if(u==="string"||u==="number")t.push(i);else if(Array.isArray(i)){if(i.length){var d=a.apply(null,i);d&&t.push(d)}}else if(u==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){t.push(i.toString());continue}for(var m in i)p.call(i,m)&&i[m]&&t.push(m)}}}return t.join(" ")}r.exports?(a.default=a,r.exports=a):(e=[],n=function(){return a}.apply(s,e),n!==void 0&&(r.exports=n))})()}}]);})();
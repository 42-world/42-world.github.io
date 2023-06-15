(()=>{var K=Object.defineProperty,V=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var B=(c,n,e)=>n in c?K(c,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[n]=e,S=(c,n)=>{for(var e in n||(n={}))M.call(n,e)&&B(c,e,n[e]);if(D)for(var e of D(n))w.call(n,e)&&B(c,e,n[e]);return c},N=(c,n)=>V(c,W(n));var j=(c,n)=>{var e={};for(var t in c)M.call(c,t)&&n.indexOf(t)<0&&(e[t]=c[t]);if(c!=null&&D)for(var t of D(c))n.indexOf(t)<0&&w.call(c,t)&&(e[t]=c[t]);return e};(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[511],{"./src/components/AvatarText/AvatarText.stories.ts":(c,n,e)=>{var T,O,I;"use strict";e.r(n),e.d(n,{Primary:()=>v,__namedExportsOrder:()=>E,default:()=>C});var t=e("./node_modules/classnames/index.js"),u=e.n(t),l=e("./src/components/Avatar/Avatar.tsx"),a=e("./src/components/Card/Card.tsx"),o=e("./src/components/Chip/Chip.tsx"),r=e("./src/components/Divider/index.ts"),s=e("./src/components/GroupHeader/GroupHeader.tsx"),d=e("./src/components/Icon/index.ts"),i=e("./src/components/Input/Input.tsx"),m=e("./src/components/ListItem/ListItem.tsx"),p=e("./src/components/Sample/Sample.tsx"),f=e("./src/components/Text/index.ts"),g=e("./src/components/Thumbnail/index.ts"),x=e("./src/components/CommentInput/CommentInput.tsx"),y=e("./node_modules/react/jsx-runtime.js");function _({src:b,alt:R="",size:A="40px",mainText:P,subText:L}){return(0,y.jsxs)("div",{className:u()("flex flex-row",{"gap-3":A==="40px","gap-4":A==="64px"}),children:[(0,y.jsx)(l.q,{src:b,alt:R,size:A}),(0,y.jsxs)("div",{className:"flex flex-col items-start justify-center",children:[(0,y.jsx)(f.x,{text:P,size:A==="64px"?"heading3":"body2",weight:"medium"}),L&&(0,y.jsx)(f.x,{text:L,size:A==="64px"?"body2":"small",color:"secondary"})]})]})}_.displayName="AvatarText";try{_.displayName="AvatarText",_.__docgenInfo={description:"",displayName:"AvatarText",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"40px"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"40px"'},{value:'"64px"'}]}},mainText:{defaultValue:null,description:"",name:"mainText",required:!0,type:{name:"string"}},subText:{defaultValue:null,description:"",name:"subText",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AvatarText/AvatarText.tsx#AvatarText"]={docgenInfo:_.__docgenInfo,name:"AvatarText",path:"src/components/AvatarText/AvatarText.tsx#AvatarText"})}catch(b){}const h={title:"rookies/AvatarText",component:_},v={args:{src:"https://picsum.photos/536/354",alt:"42world",size:"40px",mainText:"\uADDC\uB3D9\uD55C\uADF8\uB987\uC8FC\uC18C"}},C=h;v.parameters=N(S({},v.parameters),{docs:N(S({},(T=v.parameters)==null?void 0:T.docs),{source:S({originalSource:`{
  // Add your story args here
  args: {
    src: 'https://picsum.photos/536/354',
    alt: '42world',
    size: '40px',
    mainText: '\uADDC\uB3D9\uD55C\uADF8\uB987\uC8FC\uC18C'
  }
}`},(I=(O=v.parameters)==null?void 0:O.docs)==null?void 0:I.source)})});const E=["Primary"]},"./src/components/Avatar/Avatar.tsx":(c,n,e)=>{"use strict";e.d(n,{q:()=>a});var t=e("./node_modules/classnames/index.js"),u=e.n(t),l=e("./node_modules/react/jsx-runtime.js");function a({src:o,alt:r="",size:s="40px"}){return(0,l.jsx)("img",{src:o,alt:r,className:u()("rounded-full object-cover",{"w-10 h-10":s==="40px","w-16 h-16":s==="64px"})})}a.displayName="Avatar";try{a.displayName="Avatar",a.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"40px"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"40px"'},{value:'"64px"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:a.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(o){}},"./src/components/Card/Card.tsx":(c,n,e)=>{"use strict";e.d(n,{Z:()=>a});var t=e("./src/components/Text/index.ts"),u=e("./src/components/Thumbnail/index.ts"),l=e("./node_modules/react/jsx-runtime.js");function a({imageSrc:o,imageAlt:r,primary:s="",secondary:d="",detail:i}){return(0,l.jsxs)("div",{className:"w-[278px] flex flex-col group",children:[(0,l.jsx)("div",{className:"group-hover:mt-[-8px] transition-spacing ease-in-out duration-300",children:(0,l.jsx)(u.p,{src:o,alt:r,width:278,ratio:"16:9"})}),(0,l.jsx)("div",{className:"mt-3 group-hover:mt-5 transition-spacing ease-in-out duration-300",children:(0,l.jsx)(t.x,{text:`${s} \xB7 ${d}`,size:"body2",weight:"regular",color:"secondary"})}),i&&(0,l.jsx)(t.x,{text:i,size:"body1",weight:"medium",color:"primary",className:"line-clamp-1"})]})}a.displayName="Card";try{a.displayName="Card",a.__docgenInfo={description:"",displayName:"Card",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}},primary:{defaultValue:{value:""},description:"",name:"primary",required:!1,type:{name:"string"}},secondary:{defaultValue:{value:""},description:"",name:"secondary",required:!1,type:{name:"string"}},detail:{defaultValue:null,description:"",name:"detail",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:a.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(o){}},"./src/components/Chip/Chip.tsx":(c,n,e)=>{"use strict";e.d(n,{A:()=>r});var t=e("./node_modules/classnames/index.js"),u=e.n(t),l=e("./src/components/Icon/index.ts"),a=e("./src/components/Text/index.ts"),o=e("./node_modules/react/jsx-runtime.js");function r({icon:s,text:d,selected:i}){return(0,o.jsxs)("div",{className:u()("w-fit h-8 flex flex-row items-center rounded-lg select-none",d?"px-3":"px-2",i?"bg-bg-secondary dark:bg-bg-secondary_dark":"bg-bg-tertiary_alpha_0 dark:bg-bg-primary_alpha_0_dark"),children:[s&&(0,o.jsx)(l.J,{svg:s,className:"mr-2"}),d&&(0,o.jsx)(a.x,{text:d,size:"body2",weight:"medium",color:i?"primary":"secondary"})]})}r.displayName="Chip";try{r.displayName="Chip",r.__docgenInfo={description:"",displayName:"Chip",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"FC<SVGAttributes<SVGElement>>"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Chip/Chip.tsx#Chip"]={docgenInfo:r.__docgenInfo,name:"Chip",path:"src/components/Chip/Chip.tsx#Chip"})}catch(s){}},"./src/components/CommentInput/CommentInput.tsx":(c,n,e)=>{"use strict";e.d(n,{_:()=>o});var t=e("./node_modules/react/index.js"),u=e("./node_modules/classnames/index.js"),l=e.n(u),a=e("./node_modules/react/jsx-runtime.js");const o=(0,t.forwardRef)((i,d)=>{var m=i,{className:r}=m,s=j(m,["className"]);return(0,a.jsxs)("div",{className:"flex items-center rounded-3xl p-2 border-border-secondary border focus-within:border-color-system_200",children:[(0,a.jsx)("input",S({ref:d,className:l()("flex-1 w-full h-8 text-sm bg-transparent outline-none",r)},s)),(0,a.jsx)("button",{children:"\uADDC\uB3D9\uB2D8 \uBC84\uD2BC \uB9CC\uB4E4\uC5B4\uC8FC\uC138\uC694"})]})});try{o.displayName="CommentInput",o.__docgenInfo={description:"\uB313\uAE00 \uC785\uB825\uCC3D",displayName:"CommentInput",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CommentInput/CommentInput.tsx#CommentInput"]={docgenInfo:o.__docgenInfo,name:"CommentInput",path:"src/components/CommentInput/CommentInput.tsx#CommentInput"})}catch(r){}},"./src/components/Divider/Divider.tsx":(c,n,e)=>{"use strict";e.d(n,{i:()=>a});var t=e("./node_modules/classnames/index.js"),u=e.n(t),l=e("./node_modules/react/jsx-runtime.js");function a(d){var i=d,{variant:o="primary",className:r}=i,s=j(i,["variant","className"]);return(0,l.jsx)("div",S({className:u()("w-full h-[1px]",{"bg-border-primary dark:bg-border-primary_dark":o==="primary","bg-border-secondary dark:bg-border-secondary_dark":o==="secondary"},r)},s))}a.displayName="Divider";try{a.displayName="Divider",a.__docgenInfo={description:"",displayName:"Divider",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#Divider"]={docgenInfo:a.__docgenInfo,name:"Divider",path:"src/components/Divider/Divider.tsx#Divider"})}catch(o){}},"./src/components/Divider/index.ts":(c,n,e)=>{"use strict";e.d(n,{i:()=>t.i});var t=e("./src/components/Divider/Divider.tsx")},"./src/components/GroupHeader/GroupHeader.tsx":(c,n,e)=>{"use strict";e.d(n,{t:()=>i});var t=e("./node_modules/react/index.js"),u;function l(){return l=Object.assign?Object.assign.bind():function(m){for(var p=1;p<arguments.length;p++){var f=arguments[p];for(var g in f)Object.prototype.hasOwnProperty.call(f,g)&&(m[g]=f[g])}return m},l.apply(this,arguments)}var a=function(p){return t.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},p),u||(u=t.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))};const o=a;var r=e("./src/components/Icon/index.ts"),s=e("./src/components/Text/index.ts"),d=e("./node_modules/react/jsx-runtime.js");function i({href:m,text:p}){return(0,d.jsxs)("a",{className:"flex flex-row items-center gap-1 hover:gap-2 transition-gap duration-300 ease-in-out text-text-primary dark:text-text-primary_dark",href:m,children:[(0,d.jsx)(s.x,{text:p,size:"heading3",weight:"semibold"}),(0,d.jsx)(r.J,{svg:o,className:"w-6 h-6"})]})}i.displayName="GroupHeader";try{i.displayName="GroupHeader",i.__docgenInfo={description:"",displayName:"GroupHeader",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/GroupHeader/GroupHeader.tsx#GroupHeader"]={docgenInfo:i.__docgenInfo,name:"GroupHeader",path:"src/components/GroupHeader/GroupHeader.tsx#GroupHeader"})}catch(m){}},"./src/components/Icon/Icon.tsx":(c,n,e)=>{"use strict";e.d(n,{J:()=>u});var t=e("./node_modules/react/jsx-runtime.js");function u(s){var d=s,{svg:l,size:a="medium",className:o}=d,r=j(d,["svg","size","className"]);const i={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[a]||{width:24,height:24};return(0,t.jsx)(l,S({viewBox:"0 0 24 24",width:i.width,height:i.height,className:o!=null?o:"fill-black dark:fill-white"},r))}u.displayName="Icon";try{u.displayName="Icon",u.__docgenInfo={description:"",displayName:"Icon",props:{svg:{defaultValue:null,description:"",name:"svg",required:!0,type:{name:"FC<SVGAttributes<SVGElement>>"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'},{value:'"xlarge"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:u.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(l){}},"./src/components/Icon/index.ts":(c,n,e)=>{"use strict";e.d(n,{J:()=>t.J});var t=e("./src/components/Icon/Icon.tsx")},"./src/components/Input/Input.tsx":(c,n,e)=>{"use strict";e.d(n,{I:()=>s});var t=e("./node_modules/classnames/index.js"),u=e.n(t),l=e("./node_modules/react/index.js");const a=({state:d,defaultState:i,onChange:m})=>{const[p,f]=(0,l.useState)(typeof i=="function"?i():i),g=d!=null,x=g?d:p,y=(0,l.useCallback)(_=>{typeof _=="function"&&(_=_()),g||f(_),m==null||m(_)},[]);return[x,y]};var o=e("./src/components/Text/index.ts"),r=e("./node_modules/react/jsx-runtime.js");const s=(0,l.forwardRef)((E,C)=>{var T=E,{id:d,label:i,value:m,defaultValue:p,subLabel:f,variant:g,rightAddon:x,hasError:y,maxLength:_,onValueChange:h}=T,v=j(T,["id","label","value","defaultValue","subLabel","variant","rightAddon","hasError","maxLength","onValueChange"]);const O=(0,l.useId)(),[I,b]=a({state:m,defaultState:p!=null?p:"",onChange:h}),R=A=>{b(A.target.value)};return(0,r.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,r.jsxs)("div",{className:"flex w-full",children:[i&&(0,r.jsx)("label",{htmlFor:d!=null?d:O,className:'before:content-["*"] before:mr-1 text-sm leading-[1.8] font-normal text-text-secondary dark:text-text-secondary_dark',children:i}),_&&(0,r.jsx)(o.x,{className:"ml-auto",text:`(${I.length}/${_})`,size:"body2",weight:"regular",color:"secondary"})]}),(0,r.jsxs)("div",{className:u()("flex items-center w-full rounded-lg px-4",{"border border-solid border-border-primary bg-bg-primary_alpha_0 focus-within:border-color-blue_200":g==="outline","bg-bg-secondary dark:bg-bg-secondary_dark":g==="filled","border-color-red focus-within:border-color-red":y}),children:[(0,r.jsx)("input",S({ref:C,id:d!=null?d:O,className:"w-full h-[44px] bg-transparent focus:outline-none text-base font-normal leading-[1.5] text-text-primary dark:text-text-primary_dark placeholder:text-text-tertiary dark:placeholder:text-text-tertiary_dark",value:I,onChange:R,maxLength:_},v)),x&&(0,r.jsx)("span",{className:"flex",children:x})]}),f&&(0,r.jsx)(o.x,{text:f,size:"body2",weight:"regular",color:y?"red_200":"secondary"})]})});try{s.displayName="Input",s.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"outline"'},{value:'"filled"'}]}},hasError:{defaultValue:null,description:"",name:"hasError",required:!0,type:{name:"boolean"}},rightAddon:{defaultValue:null,description:"",name:"rightAddon",required:!0,type:{name:"ReactNode"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(value: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:s.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(d){}},"./src/components/ListItem/ListItem.tsx":(c,n,e)=>{"use strict";e.d(n,{H:()=>_});var t=e("./node_modules/react/index.js"),u;function l(){return l=Object.assign?Object.assign.bind():function(h){for(var v=1;v<arguments.length;v++){var C=arguments[v];for(var E in C)Object.prototype.hasOwnProperty.call(C,E)&&(h[E]=C[E])}return h},l.apply(this,arguments)}var a=function(v){return t.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},v),u||(u=t.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"})))};const o=a;var r;function s(){return s=Object.assign?Object.assign.bind():function(h){for(var v=1;v<arguments.length;v++){var C=arguments[v];for(var E in C)Object.prototype.hasOwnProperty.call(C,E)&&(h[E]=C[E])}return h},s.apply(this,arguments)}var d=function(v){return t.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},v),r||(r=t.createElement("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})))};const i=d;var m=e("./src/components/Divider/index.ts"),p=e("./src/components/Icon/index.ts"),f=e("./src/components/Thumbnail/index.ts"),g=e("./src/components/Text/Text.tsx"),x=e("./node_modules/react/jsx-runtime.js");const y=(h,v)=>(0,x.jsxs)("div",{className:"flex flex-row items-center gap-1",children:[h&&(0,x.jsx)(g.xv,{text:h,size:"body2",weight:"medium",color:"secondary"}),h&&v&&"\xB7",v&&(0,x.jsx)(g.xv,{text:v,size:"body2",weight:"regular",color:"secondary"})]});y.displayName="MergedSecondaryText";function _({title:h,thumbnailSrc:v,secondaryTextFirst:C,secondaryTextSecond:E,commentCnt:T,likeCnt:O,hasBorder:I=!0}){return(0,x.jsxs)("div",{className:"w-[540px] cursor-pointer active:scale-95 transition-transform duration-300 ease-out select-none",children:[(0,x.jsxs)("div",{className:"flex flex-row items-center py-4",children:[v&&(0,x.jsx)(f.p,{src:v,alt:h,width:85,ratio:"16:9"}),(0,x.jsxs)("div",{className:"ml-3 flex-1",children:[y(C,E),(0,x.jsx)(g.xv,{text:h,size:"body1",weight:"medium",color:"primary"})]}),(0,x.jsxs)("div",{className:"flex flex-row items-center gap-2 text-text-secondary dark:text-text-secondary_dark",children:[T&&(0,x.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,x.jsx)(p.J,{svg:o,className:"w-4 h-4"}),(0,x.jsx)(g.xv,{text:T.toString(),size:"body2",weight:"regular",color:"secondary"})]}),O&&(0,x.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,x.jsx)(p.J,{svg:i,className:"w-4 h-4"}),(0,x.jsx)(g.xv,{text:O.toString(),size:"body2",weight:"regular",color:"secondary"})]})]})]}),I&&(0,x.jsx)(m.i,{variant:"secondary"})]})}_.displayName="ListItem";try{_.displayName="ListItem",_.__docgenInfo={description:"",displayName:"ListItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},thumbnailSrc:{defaultValue:null,description:"",name:"thumbnailSrc",required:!1,type:{name:"string"}},secondaryTextFirst:{defaultValue:null,description:"",name:"secondaryTextFirst",required:!1,type:{name:"string"}},secondaryTextSecond:{defaultValue:null,description:"",name:"secondaryTextSecond",required:!1,type:{name:"string"}},commentCnt:{defaultValue:null,description:"",name:"commentCnt",required:!1,type:{name:"number"}},likeCnt:{defaultValue:null,description:"",name:"likeCnt",required:!1,type:{name:"number"}},hasBorder:{defaultValue:{value:"true"},description:"",name:"hasBorder",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ListItem/ListItem.tsx#ListItem"]={docgenInfo:_.__docgenInfo,name:"ListItem",path:"src/components/ListItem/ListItem.tsx#ListItem"})}catch(h){}},"./src/components/Sample/Sample.tsx":(c,n,e)=>{"use strict";e.d(n,{d:()=>m});var t=e("./node_modules/@material-design-icons/svg/filled/face.svg"),u=e("./node_modules/react/index.js"),l;function a(){return a=Object.assign?Object.assign.bind():function(p){for(var f=1;f<arguments.length;f++){var g=arguments[f];for(var x in g)Object.prototype.hasOwnProperty.call(g,x)&&(p[x]=g[x])}return p},a.apply(this,arguments)}var o=function(f){return u.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},f),l||(l=u.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"})))};const r=o;var s=e("./src/components/Icon/index.ts"),d=e("./src/components/Text/index.ts"),i=e("./node_modules/react/jsx-runtime.js");function m({text:p}){return(0,i.jsxs)("div",{className:"flex flex-row items-center",children:[(0,i.jsx)(d.x,{text:`This is Samp3le! "${p}"`,size:"heading3",weight:"semibold",className:"mr-2"}),(0,i.jsx)(s.J,{svg:r,size:"xsmall"}),(0,i.jsx)(s.J,{svg:t.Z,size:"medium",className:"inline-block dark:fill-white fill-yellow-400 ml-1"})]})}m.displayName="Sample";try{m.displayName="Sample",m.__docgenInfo={description:"",displayName:"Sample",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Sample/Sample.tsx#Sample"]={docgenInfo:m.__docgenInfo,name:"Sample",path:"src/components/Sample/Sample.tsx#Sample"})}catch(p){}},"./src/components/Text/Text.tsx":(c,n,e)=>{"use strict";e.d(n,{xv:()=>r});var t=e("./node_modules/react/jsx-runtime.js");const u={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-[1.8rem]",body2:"text-sm leading-[1.8rem]",small:"text-xs leading-normal"},l={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},a={left:"text-left",right:"text-right",center:"text-center"},o={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function r({className:s,text:d,size:i="body1",weight:m="regular",align:p="left",color:f="primary"}){return(0,t.jsx)("p",{className:`font-display
        ${u[i]}
        ${l[m]}
        ${a[p]}
        ${o[f]}
        ${s}
        `,children:d})}r.displayName="Text";try{r.displayName="Text",r.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'},{value:'"small"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:r.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(s){}},"./src/components/Text/index.ts":(c,n,e)=>{"use strict";e.d(n,{x:()=>t.xv});var t=e("./src/components/Text/Text.tsx")},"./src/components/Thumbnail/Thumbnail.tsx":(c,n,e)=>{"use strict";e.d(n,{p:()=>a});var t=e("./node_modules/classnames/index.js"),u=e.n(t),l=e("./node_modules/react/jsx-runtime.js");function a({src:o,alt:r="",width:s,ratio:d="16:9"}){const i={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[d];return(0,l.jsx)("img",{src:o,alt:r,style:{width:s},className:u()(i,"object-cover rounded-2xl")})}a.displayName="Thumbnail";try{a.displayName="Thumbnail",a.__docgenInfo={description:"",displayName:"Thumbnail",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},ratio:{defaultValue:{value:"16:9"},description:"",name:"ratio",required:!1,type:{name:"enum",value:[{value:'"16:9"'},{value:'"16:10"'},{value:'"1:1"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Thumbnail/Thumbnail.tsx#Thumbnail"]={docgenInfo:a.__docgenInfo,name:"Thumbnail",path:"src/components/Thumbnail/Thumbnail.tsx#Thumbnail"})}catch(o){}},"./src/components/Thumbnail/index.ts":(c,n,e)=>{"use strict";e.d(n,{p:()=>t.p});var t=e("./src/components/Thumbnail/Thumbnail.tsx")},"./node_modules/@material-design-icons/svg/filled/face.svg":(c,n,e)=>{"use strict";e.d(n,{Z:()=>o});var t=e("./node_modules/react/index.js"),u;function l(){return l=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var d=arguments[s];for(var i in d)Object.prototype.hasOwnProperty.call(d,i)&&(r[i]=d[i])}return r},l.apply(this,arguments)}var a=function(s){return t.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},s),u||(u=t.createElement("path",{d:"M9 11.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37a9.974 9.974 0 0 0 10.41 3.97c.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"})))};const o=a},"./node_modules/classnames/index.js":(c,n)=>{var e,t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var u={}.hasOwnProperty,l="[native code]";function a(){for(var o=[],r=0;r<arguments.length;r++){var s=arguments[r];if(s){var d=typeof s;if(d==="string"||d==="number")o.push(s);else if(Array.isArray(s)){if(s.length){var i=a.apply(null,s);i&&o.push(i)}}else if(d==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){o.push(s.toString());continue}for(var m in s)u.call(s,m)&&s[m]&&o.push(m)}}}return o.join(" ")}c.exports?(a.default=a,c.exports=a):(e=[],t=function(){return a}.apply(n,e),t!==void 0&&(c.exports=t))})()}}]);})();
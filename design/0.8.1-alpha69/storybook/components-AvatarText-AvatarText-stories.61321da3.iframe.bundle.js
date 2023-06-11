(()=>{var P=Object.defineProperty,V=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var N=(d,n,e)=>n in d?P(d,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[n]=e,C=(d,n)=>{for(var e in n||(n={}))M.call(n,e)&&N(d,e,n[e]);if(S)for(var e of S(n))K.call(n,e)&&N(d,e,n[e]);return d},B=(d,n)=>V(d,w(n));var I=(d,n)=>{var e={};for(var a in d)M.call(d,a)&&n.indexOf(a)<0&&(e[a]=d[a]);if(d!=null&&S)for(var a of S(d))n.indexOf(a)<0&&K.call(d,a)&&(e[a]=d[a]);return e};(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[511],{"./src/components/AvatarText/AvatarText.stories.ts":(d,n,e)=>{var R,E,T;"use strict";e.r(n),e.d(n,{Primary:()=>y,__namedExportsOrder:()=>j,default:()=>A});var a=e("./node_modules/classnames/index.js"),u=e.n(a),l=e("./src/components/Avatar/Avatar.tsx"),s=e("./src/components/Card/Card.tsx"),r=e("./src/components/Chip/Chip.tsx"),t=e("./src/components/Divider/index.ts"),o=e("./src/components/GroupHeader/GroupHeader.tsx"),i=e("./src/components/Icon/index.ts"),c=e("./src/components/Input/Input.tsx"),m=e("./src/components/ListItem/ListItem.tsx"),x=e("./src/components/Sample/Sample.tsx"),p=e("./src/components/Text/index.ts"),g=e("./src/components/Thumbnail/index.ts"),_=e("./node_modules/react/jsx-runtime.js");function v({src:O,alt:b="",size:h="40px",mainText:D,subText:L}){return(0,_.jsxs)("div",{className:u()("flex flex-row",{"gap-3":h==="40px","gap-4":h==="64px"}),children:[(0,_.jsx)(l.q,{src:O,alt:b,size:h}),(0,_.jsxs)("div",{className:"flex flex-col items-start justify-center",children:[(0,_.jsx)(p.x,{text:D,size:h==="64px"?"heading3":"body2",weight:"medium"}),L&&(0,_.jsx)(p.x,{text:L,size:h==="64px"?"body2":"small",color:"secondary"})]})]})}v.displayName="AvatarText";try{v.displayName="AvatarText",v.__docgenInfo={description:"",displayName:"AvatarText",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"40px"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"40px"'},{value:'"64px"'}]}},mainText:{defaultValue:null,description:"",name:"mainText",required:!0,type:{name:"string"}},subText:{defaultValue:null,description:"",name:"subText",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AvatarText/AvatarText.tsx#AvatarText"]={docgenInfo:v.__docgenInfo,name:"AvatarText",path:"src/components/AvatarText/AvatarText.tsx#AvatarText"})}catch(O){}const f={title:"rookies/AvatarText",component:v},y={args:{src:"https://picsum.photos/536/354",alt:"42world",size:"40px",mainText:"\uADDC\uB3D9\uD55C\uADF8\uB987\uC8FC\uC18C"}},A=f;y.parameters=B(C({},y.parameters),{docs:B(C({},(R=y.parameters)==null?void 0:R.docs),{source:C({originalSource:`{
  // Add your story args here
  args: {
    src: 'https://picsum.photos/536/354',
    alt: '42world',
    size: '40px',
    mainText: '\uADDC\uB3D9\uD55C\uADF8\uB987\uC8FC\uC18C'
  }
}`},(T=(E=y.parameters)==null?void 0:E.docs)==null?void 0:T.source)})});const j=["Primary"]},"./src/assets/icons/index.ts":(d,n,e)=>{"use strict";e.d(n,{Dk:()=>u,IW:()=>l,_Q:()=>s,rF:()=>r});var a=e("./node_modules/react/jsx-runtime.js");const u=()=>(0,a.jsx)("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z"})});u.displayName="BellIcon";try{u.displayName="BellIcon",u.__docgenInfo={description:"",displayName:"BellIcon",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/BellIcon.tsx#BellIcon"]={docgenInfo:u.__docgenInfo,name:"BellIcon",path:"src/assets/icons/BellIcon.tsx#BellIcon"})}catch(t){}const l=()=>(0,a.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v15.59c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"})});l.displayName="ChatBubble";try{l.displayName="ChatBubble",l.__docgenInfo={description:"",displayName:"ChatBubble",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/ChatBubble.tsx#ChatBubble"]={docgenInfo:l.__docgenInfo,name:"ChatBubble",path:"src/assets/icons/ChatBubble.tsx#ChatBubble"})}catch(t){}const s=()=>(0,a.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M9.29 15.46l3.88-3.88L9.29 7.7a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"})});s.displayName="ChevronRight";try{s.displayName="ChevronRight",s.__docgenInfo={description:"",displayName:"ChevronRight",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/ChevronRight.tsx#ChevronRight"]={docgenInfo:s.__docgenInfo,name:"ChevronRight",path:"src/assets/icons/ChevronRight.tsx#ChevronRight"})}catch(t){}const r=()=>(0,a.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M10.67 19.8C5.15 14.85 1.95 12.16 2 8.41c.04-2.97 2.3-4.39 2.35-4.43 3.61-2.46 6.89.22 7.65 1.11.75-.88 3.99-3.51 7.56-1.16.52.34 2.23 1.65 2.42 4.12.32 4.28-4.14 7.76-8.65 11.76-.38.34-.86.5-1.34.5-.47 0-.94-.17-1.32-.51z"})});r.displayName="Favorite";try{r.displayName="Favorite",r.__docgenInfo={description:"",displayName:"Favorite",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/Favorite.tsx#Favorite"]={docgenInfo:r.__docgenInfo,name:"Favorite",path:"src/assets/icons/Favorite.tsx#Favorite"})}catch(t){}},"./src/components/Avatar/Avatar.tsx":(d,n,e)=>{"use strict";e.d(n,{q:()=>s});var a=e("./node_modules/classnames/index.js"),u=e.n(a),l=e("./node_modules/react/jsx-runtime.js");function s({src:r,alt:t="",size:o="40px"}){return(0,l.jsx)("img",{src:r,alt:t,className:u()("rounded-full object-cover",{"w-10 h-10":o==="40px","w-16 h-16":o==="64px"})})}s.displayName="Avatar";try{s.displayName="Avatar",s.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"40px"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"40px"'},{value:'"64px"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:s.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(r){}},"./src/components/Card/Card.tsx":(d,n,e)=>{"use strict";e.d(n,{Z:()=>s});var a=e("./src/components/Text/index.ts"),u=e("./src/components/Thumbnail/index.ts"),l=e("./node_modules/react/jsx-runtime.js");function s({imageSrc:r,imageAlt:t,primary:o="",secondary:i="",detail:c}){return(0,l.jsxs)("div",{className:"w-[278px] flex flex-col group",children:[(0,l.jsx)("div",{className:"group-hover:mt-[-8px] transition-spacing ease-in-out duration-300",children:(0,l.jsx)(u.p,{src:r,alt:t,width:278,ratio:"16:9"})}),(0,l.jsx)("div",{className:"mt-3 group-hover:mt-5 transition-spacing ease-in-out duration-300",children:(0,l.jsx)(a.x,{text:`${o} \xB7 ${i}`,size:"body2",weight:"regular",color:"secondary"})}),c&&(0,l.jsx)(a.x,{text:c,size:"body1",weight:"medium",color:"primary",className:"line-clamp-1"})]})}s.displayName="Card";try{s.displayName="Card",s.__docgenInfo={description:"",displayName:"Card",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}},primary:{defaultValue:{value:""},description:"",name:"primary",required:!1,type:{name:"string"}},secondary:{defaultValue:{value:""},description:"",name:"secondary",required:!1,type:{name:"string"}},detail:{defaultValue:null,description:"",name:"detail",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:s.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(r){}},"./src/components/Chip/Chip.tsx":(d,n,e)=>{"use strict";e.d(n,{A:()=>t});var a=e("./node_modules/classnames/index.js"),u=e.n(a),l=e("./src/components/Icon/index.ts"),s=e("./src/components/Text/index.ts"),r=e("./node_modules/react/jsx-runtime.js");function t({icon:o,text:i,selected:c}){return(0,r.jsxs)("div",{className:u()("w-fit h-8 flex flex-row items-center rounded-lg select-none",i?"px-3":"px-2",c?"bg-bg-secondary dark:bg-bg-secondary_dark":"bg-bg-tertiary_alpha_0 dark:bg-bg-primary_alpha_0_dark"),children:[(0,r.jsx)("div",{className:u()([{hidden:!o},"mr-2"]),children:o&&(0,r.jsx)(l.J,{svg:o})}),i&&(0,r.jsx)(s.x,{text:i,size:"body2",weight:"medium",color:c?"primary":"secondary"})]})}t.displayName="Chip";try{t.displayName="Chip",t.__docgenInfo={description:"",displayName:"Chip",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"FC<SVGAttributes<SVGElement>>"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Chip/Chip.tsx#Chip"]={docgenInfo:t.__docgenInfo,name:"Chip",path:"src/components/Chip/Chip.tsx#Chip"})}catch(o){}},"./src/components/Divider/Divider.tsx":(d,n,e)=>{"use strict";e.d(n,{i:()=>s});var a=e("./node_modules/classnames/index.js"),u=e.n(a),l=e("./node_modules/react/jsx-runtime.js");function s(i){var c=i,{variant:r="primary",className:t}=c,o=I(c,["variant","className"]);return(0,l.jsx)("div",C({className:u()("w-full h-[1px]",{"bg-border-primary dark:bg-border-primary_dark":r==="primary","bg-border-secondary dark:bg-border-secondary_dark":r==="secondary"},t)},o))}s.displayName="Divider";try{s.displayName="Divider",s.__docgenInfo={description:"",displayName:"Divider",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#Divider"]={docgenInfo:s.__docgenInfo,name:"Divider",path:"src/components/Divider/Divider.tsx#Divider"})}catch(r){}},"./src/components/Divider/index.ts":(d,n,e)=>{"use strict";e.d(n,{i:()=>a.i});var a=e("./src/components/Divider/Divider.tsx")},"./src/components/GroupHeader/GroupHeader.tsx":(d,n,e)=>{"use strict";e.d(n,{t:()=>r});var a=e("./src/assets/icons/index.ts"),u=e("./src/components/Icon/index.ts"),l=e("./src/components/Text/index.ts"),s=e("./node_modules/react/jsx-runtime.js");function r({href:t,text:o}){return(0,s.jsxs)("a",{className:"flex flex-row items-center gap-1 hover:gap-2 transition-gap duration-300 ease-in-out text-text-primary dark:text-text-primary_dark",href:t,children:[(0,s.jsx)(l.x,{text:o,size:"heading3",weight:"semibold"}),(0,s.jsx)(u.J,{svg:a._Q,className:"w-6 h-6"})]})}r.displayName="GroupHeader";try{r.displayName="GroupHeader",r.__docgenInfo={description:"",displayName:"GroupHeader",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/GroupHeader/GroupHeader.tsx#GroupHeader"]={docgenInfo:r.__docgenInfo,name:"GroupHeader",path:"src/components/GroupHeader/GroupHeader.tsx#GroupHeader"})}catch(t){}},"./src/components/Icon/Icon.tsx":(d,n,e)=>{"use strict";e.d(n,{J:()=>u});var a=e("./node_modules/react/index.js");function u(t){var o=t,{svg:l,size:s="medium"}=o,r=I(o,["svg","size"]);const i={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[s]||{width:24,height:24};return(0,a.createElement)(l,C({viewBox:"0 0 24 24",width:i.width,height:i.height},r))}try{u.displayName="Icon",u.__docgenInfo={description:"",displayName:"Icon",props:{svg:{defaultValue:null,description:"",name:"svg",required:!0,type:{name:"FC<SVGAttributes<SVGElement>>"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'},{value:'"xlarge"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:u.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(l){}},"./src/components/Icon/index.ts":(d,n,e)=>{"use strict";e.d(n,{J:()=>a.J});var a=e("./src/components/Icon/Icon.tsx")},"./src/components/Input/Input.tsx":(d,n,e)=>{"use strict";e.d(n,{I:()=>o});var a=e("./node_modules/classnames/index.js"),u=e.n(a),l=e("./node_modules/react/index.js");const s=({state:i,defaultState:c,onChange:m})=>{const[x,p]=(0,l.useState)(typeof c=="function"?c():c),g=i!=null,_=g?i:x,v=(0,l.useCallback)(f=>{typeof f=="function"&&(f=f()),g||p(f),m==null||m(f)},[]);return[_,v]};var r=e("./src/components/Text/index.ts"),t=e("./node_modules/react/jsx-runtime.js");const o=(0,l.forwardRef)((R,j)=>{var E=R,{id:i,label:c,value:m,defaultValue:x,subLabel:p,variant:g,rightAddon:_,hasError:v,maxLength:f,onValueChange:y}=E,A=I(E,["id","label","value","defaultValue","subLabel","variant","rightAddon","hasError","maxLength","onValueChange"]);const T=(0,l.useId)(),[O,b]=s({state:m,defaultState:x!=null?x:"",onChange:y}),h=D=>{b(D.target.value)};return(0,t.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,t.jsxs)("div",{className:"flex w-full",children:[c&&(0,t.jsx)("label",{htmlFor:i!=null?i:T,className:'before:content-["*"] before:mr-1 text-sm leading-[1.8] font-normal text-text-secondary dark:text-text-secondary_dark',children:c}),f&&(0,t.jsx)(r.x,{className:"ml-auto",text:`(${O.length}/${f})`,size:"body2",weight:"regular",color:"secondary"})]}),(0,t.jsxs)("div",{className:u()("flex items-center w-full rounded-lg px-4",{"border border-solid border-border-primary bg-bg-primary_alpha_0 focus-within:border-color-blue_200":g==="outline","bg-bg-secondary dark:bg-bg-secondary_dark":g==="filled","border-color-red focus-within:border-color-red":v}),children:[(0,t.jsx)("input",C({ref:j,id:i!=null?i:T,className:"w-full h-[44px] bg-transparent focus:outline-none text-base font-normal leading-[1.5] text-text-primary dark:text-text-primary_dark placeholder:text-text-tertiary dark:placeholder:text-text-tertiary_dark",value:O,onChange:h,maxLength:f},A)),_&&(0,t.jsx)("span",{className:"flex",children:_})]}),p&&(0,t.jsx)(r.x,{text:p,size:"body2",weight:"regular",color:v?"red_200":"secondary"})]})});try{o.displayName="Input",o.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"outline"'},{value:'"filled"'}]}},hasError:{defaultValue:null,description:"",name:"hasError",required:!0,type:{name:"boolean"}},rightAddon:{defaultValue:null,description:"",name:"rightAddon",required:!0,type:{name:"ReactNode"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(value: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:o.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(i){}},"./src/components/ListItem/ListItem.tsx":(d,n,e)=>{"use strict";e.d(n,{H:()=>i});var a=e("./src/assets/icons/index.ts"),u=e("./src/components/Divider/index.ts"),l=e("./src/components/Icon/index.ts"),s=e("./src/components/Thumbnail/index.ts"),r=e("./src/components/Text/Text.tsx"),t=e("./node_modules/react/jsx-runtime.js");const o=(c,m)=>(0,t.jsxs)("div",{className:"flex flex-row items-center gap-1",children:[c&&(0,t.jsx)(r.xv,{text:c,size:"body2",weight:"medium",color:"secondary"}),c&&m&&"\xB7",m&&(0,t.jsx)(r.xv,{text:m,size:"body2",weight:"regular",color:"secondary"})]});o.displayName="MergedSecondaryText";function i({title:c,thumbnailSrc:m,secondaryTextFirst:x,secondaryTextSecond:p,commentCnt:g,likeCnt:_,hasBorder:v=!0}){return(0,t.jsxs)("div",{className:"w-[540px] cursor-pointer active:scale-95 transition-transform duration-300 ease-out select-none",children:[(0,t.jsxs)("div",{className:"flex flex-row items-center py-4",children:[m&&(0,t.jsx)(s.p,{src:m,alt:c,width:85,ratio:"16:9"}),(0,t.jsxs)("div",{className:"ml-3 flex-1",children:[o(x,p),(0,t.jsx)(r.xv,{text:c,size:"body1",weight:"medium",color:"primary"})]}),(0,t.jsxs)("div",{className:"flex flex-row items-center gap-2 text-text-secondary dark:text-text-secondary_dark",children:[g&&(0,t.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,t.jsx)(l.J,{svg:a.IW,className:"w-4 h-4"}),(0,t.jsx)(r.xv,{text:g.toString(),size:"body2",weight:"regular",color:"secondary"})]}),_&&(0,t.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,t.jsx)(l.J,{svg:a.rF,className:"w-4 h-4"}),(0,t.jsx)(r.xv,{text:_.toString(),size:"body2",weight:"regular",color:"secondary"})]})]})]}),v&&(0,t.jsx)(u.i,{variant:"secondary"})]})}i.displayName="ListItem";try{i.displayName="ListItem",i.__docgenInfo={description:"",displayName:"ListItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},thumbnailSrc:{defaultValue:null,description:"",name:"thumbnailSrc",required:!1,type:{name:"string"}},secondaryTextFirst:{defaultValue:null,description:"",name:"secondaryTextFirst",required:!1,type:{name:"string"}},secondaryTextSecond:{defaultValue:null,description:"",name:"secondaryTextSecond",required:!1,type:{name:"string"}},commentCnt:{defaultValue:null,description:"",name:"commentCnt",required:!1,type:{name:"number"}},likeCnt:{defaultValue:null,description:"",name:"likeCnt",required:!1,type:{name:"number"}},hasBorder:{defaultValue:{value:"true"},description:"",name:"hasBorder",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ListItem/ListItem.tsx#ListItem"]={docgenInfo:i.__docgenInfo,name:"ListItem",path:"src/components/ListItem/ListItem.tsx#ListItem"})}catch(c){}},"./src/components/Sample/Sample.tsx":(d,n,e)=>{"use strict";e.d(n,{d:()=>i});var a=e("./node_modules/react/index.js"),u;function l(){return l=Object.assign?Object.assign.bind():function(c){for(var m=1;m<arguments.length;m++){var x=arguments[m];for(var p in x)Object.prototype.hasOwnProperty.call(x,p)&&(c[p]=x[p])}return c},l.apply(this,arguments)}var s=function(m){return a.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},m),u||(u=a.createElement("path",{d:"M9 11.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37a9.974 9.974 0 0 0 10.41 3.97c.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"})))};const r=s;var t=e("./src/components/Icon/index.ts"),o=e("./node_modules/react/jsx-runtime.js");function i({text:c}){return(0,o.jsxs)("div",{children:[(0,o.jsx)(t.J,{svg:r,className:"inline-block"}),(0,o.jsxs)("span",{className:"text-blue-500 dark:text-pink-600",children:['This is Sample! "',c,'"']})]})}i.displayName="Sample";try{i.displayName="Sample",i.__docgenInfo={description:"",displayName:"Sample",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Sample/Sample.tsx#Sample"]={docgenInfo:i.__docgenInfo,name:"Sample",path:"src/components/Sample/Sample.tsx#Sample"})}catch(c){}},"./src/components/Text/Text.tsx":(d,n,e)=>{"use strict";e.d(n,{xv:()=>t});var a=e("./node_modules/react/jsx-runtime.js");const u={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-[1.8rem]",body2:"text-sm leading-[1.8rem]",small:"text-xs leading-normal"},l={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},s={left:"text-left",right:"text-right",center:"text-center"},r={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function t({className:o,text:i,size:c="body1",weight:m="regular",align:x="left",color:p="primary"}){return(0,a.jsx)("p",{className:`font-display
        ${u[c]}
        ${l[m]}
        ${s[x]}
        ${r[p]}
        ${o}
        `,children:i})}t.displayName="Text";try{t.displayName="Text",t.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'},{value:'"small"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:t.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(o){}},"./src/components/Text/index.ts":(d,n,e)=>{"use strict";e.d(n,{x:()=>a.xv});var a=e("./src/components/Text/Text.tsx")},"./src/components/Thumbnail/Thumbnail.tsx":(d,n,e)=>{"use strict";e.d(n,{p:()=>s});var a=e("./node_modules/classnames/index.js"),u=e.n(a),l=e("./node_modules/react/jsx-runtime.js");function s({src:r,alt:t="",width:o,ratio:i="16:9"}){const c={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[i];return(0,l.jsx)("img",{src:r,alt:t,style:{width:o},className:u()(c,"object-cover rounded-2xl")})}s.displayName="Thumbnail";try{s.displayName="Thumbnail",s.__docgenInfo={description:"",displayName:"Thumbnail",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},ratio:{defaultValue:{value:"16:9"},description:"",name:"ratio",required:!1,type:{name:"enum",value:[{value:'"16:9"'},{value:'"16:10"'},{value:'"1:1"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Thumbnail/Thumbnail.tsx#Thumbnail"]={docgenInfo:s.__docgenInfo,name:"Thumbnail",path:"src/components/Thumbnail/Thumbnail.tsx#Thumbnail"})}catch(r){}},"./src/components/Thumbnail/index.ts":(d,n,e)=>{"use strict";e.d(n,{p:()=>a.p});var a=e("./src/components/Thumbnail/Thumbnail.tsx")},"./node_modules/classnames/index.js":(d,n)=>{var e,a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var u={}.hasOwnProperty,l="[native code]";function s(){for(var r=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if(i==="string"||i==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var c=s.apply(null,o);c&&r.push(c)}}else if(i==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var m in o)u.call(o,m)&&o[m]&&r.push(m)}}}return r.join(" ")}d.exports?(s.default=s,d.exports=s):(e=[],a=function(){return s}.apply(n,e),a!==void 0&&(d.exports=a))})()}}]);})();

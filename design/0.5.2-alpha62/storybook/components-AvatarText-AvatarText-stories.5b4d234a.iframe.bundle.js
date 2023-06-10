(()=>{var L=Object.defineProperty,K=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var N=(_,r,e)=>r in _?L(_,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):_[r]=e,f=(_,r)=>{for(var e in r||(r={}))b.call(r,e)&&N(_,e,r[e]);if(O)for(var e of O(r))D.call(r,e)&&N(_,e,r[e]);return _},A=(_,r)=>K(_,P(r));var B=(_,r)=>{var e={};for(var s in _)b.call(_,s)&&r.indexOf(s)<0&&(e[s]=_[s]);if(_!=null&&O)for(var s of O(_))r.indexOf(s)<0&&D.call(_,s)&&(e[s]=_[s]);return e};(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[511],{"./src/components/AvatarText/AvatarText.stories.ts":(_,r,e)=>{var S,T,R;"use strict";e.r(r),e.d(r,{Primary:()=>y,__namedExportsOrder:()=>k,default:()=>h});var s=e("./node_modules/classnames/index.js"),g=e.n(s),o=e("./src/components/Avatar/Avatar.tsx"),a=e("./src/components/Card/Card.tsx"),t=e("./src/components/Chip/Chip.tsx"),n=e("./src/components/Divider/Divider.tsx"),l=e("./src/components/GroupHeader/GroupHeader.tsx"),i=e("./src/components/Input/Input.tsx"),u=e("./src/components/Sample/Sample.tsx"),c=e("./src/components/Text/index.ts"),v=e("./src/components/Thumbnail/index.ts"),p=e("./node_modules/react/jsx-runtime.js");function m({src:C,alt:I="",size:x="40px",mainText:j,subText:E}){return(0,p.jsxs)("div",{className:g()("flex flex-row",{"gap-3":x==="40px","gap-4":x==="64px"}),children:[(0,p.jsx)(o.q,{src:C,alt:I,size:x}),(0,p.jsxs)("div",{className:"flex flex-col items-start justify-center",children:[(0,p.jsx)(c.x,{text:j,size:x==="64px"?"heading3":"body2",weight:"medium"}),E&&(0,p.jsx)(c.x,{text:E,size:x==="64px"?"body2":"small",color:"secondary"})]})]})}m.displayName="AvatarText";try{m.displayName="AvatarText",m.__docgenInfo={description:"",displayName:"AvatarText",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"40px"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"40px"'},{value:'"64px"'}]}},mainText:{defaultValue:null,description:"",name:"mainText",required:!0,type:{name:"string"}},subText:{defaultValue:null,description:"",name:"subText",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AvatarText/AvatarText.tsx#AvatarText"]={docgenInfo:m.__docgenInfo,name:"AvatarText",path:"src/components/AvatarText/AvatarText.tsx#AvatarText"})}catch(C){}const d={title:"rookies/AvatarText",component:m},y={args:{src:"https://picsum.photos/536/354",alt:"42world",size:"40px",mainText:"\uADDC\uB3D9\uD55C\uADF8\uB987\uC8FC\uC18C"}},h=d;y.parameters=A(f({},y.parameters),{docs:A(f({},(S=y.parameters)==null?void 0:S.docs),{source:f({originalSource:`{
  // Add your story args here
  args: {
    src: 'https://picsum.photos/536/354',
    alt: '42world',
    size: '40px',
    mainText: '\uADDC\uB3D9\uD55C\uADF8\uB987\uC8FC\uC18C'
  }
}`},(R=(T=y.parameters)==null?void 0:T.docs)==null?void 0:R.source)})});const k=["Primary"]},"./src/assets/icons/index.ts":(_,r,e)=>{"use strict";e.d(r,{Dk:()=>t,_Q:()=>i});const o={color:{main_green_5:"#9CDD9F",main_green_10:"#41C464",main_green_20:"#009929",red_5_light:"#FFD4D1",red_10_light:"#FF5D5D",red_20_light:"#F34247",red_5_dark:"#5F2121",grey_5_light:"#FEFEFE",grey_10_light:"#FDFDFD",grey_20_light:"#F7F8F9",grey_30_light:"#E9EBEE",grey_40_light:"#C5C8CE",grey_50_light:"#646F7C",grey_60_light:"#374553",grey_70_light:"#28323C",grey_80_light:"#161D24",grey_5_dark:"#171B1C",grey_10_dark:"#1E2427",grey_20_dark:"#2E363A",grey_30_dark:"#41474C",grey_40_dark:"#5A6166",grey_50_dark:"#999FA4",grey_60_dark:"#C5C8CE",grey_70_dark:"#F7F8F9",grey_80_dark:"#FDFDFD"},screenSize:{TABLET_SIZE:"700px"}};var a=e("./node_modules/react/jsx-runtime.js");const t=({color:d})=>(0,a.jsx)("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"24",height:"24",color:o.color[d],children:(0,a.jsx)("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z"})});t.displayName="BellIcon";try{t.displayName="BellIcon",t.__docgenInfo={description:"",displayName:"BellIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"main_green_5"'},{value:'"main_green_10"'},{value:'"main_green_20"'},{value:'"red_5_light"'},{value:'"red_10_light"'},{value:'"red_20_light"'},{value:'"red_5_dark"'},{value:'"grey_5_light"'},{value:'"grey_10_light"'},{value:'"grey_20_light"'},{value:'"grey_30_light"'},{value:'"grey_40_light"'},{value:'"grey_50_light"'},{value:'"grey_60_light"'},{value:'"grey_70_light"'},{value:'"grey_80_light"'},{value:'"grey_5_dark"'},{value:'"grey_10_dark"'},{value:'"grey_20_dark"'},{value:'"grey_30_dark"'},{value:'"grey_40_dark"'},{value:'"grey_50_dark"'},{value:'"grey_60_dark"'},{value:'"grey_70_dark"'},{value:'"grey_80_dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/BellIcon.tsx#BellIcon"]={docgenInfo:t.__docgenInfo,name:"BellIcon",path:"src/assets/icons/BellIcon.tsx#BellIcon"})}catch(d){}const n=({color:d})=>(0,a.jsx)("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:"18",height:"18",color:o.color[d],children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})});n.displayName="ChatIcon";try{n.displayName="ChatIcon",n.__docgenInfo={description:"",displayName:"ChatIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"main_green_5"'},{value:'"main_green_10"'},{value:'"main_green_20"'},{value:'"red_5_light"'},{value:'"red_10_light"'},{value:'"red_20_light"'},{value:'"red_5_dark"'},{value:'"grey_5_light"'},{value:'"grey_10_light"'},{value:'"grey_20_light"'},{value:'"grey_30_light"'},{value:'"grey_40_light"'},{value:'"grey_50_light"'},{value:'"grey_60_light"'},{value:'"grey_70_light"'},{value:'"grey_80_light"'},{value:'"grey_5_dark"'},{value:'"grey_10_dark"'},{value:'"grey_20_dark"'},{value:'"grey_30_dark"'},{value:'"grey_40_dark"'},{value:'"grey_50_dark"'},{value:'"grey_60_dark"'},{value:'"grey_70_dark"'},{value:'"grey_80_dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/ChatIcon.tsx#ChatIcon"]={docgenInfo:n.__docgenInfo,name:"ChatIcon",path:"src/assets/icons/ChatIcon.tsx#ChatIcon"})}catch(d){}const l=({color:d,className:y})=>(0,a.jsx)("svg",{className:`checkmarkSvg ${y}`,viewBox:"0 0 20 20",fill:"currentColor",color:o.color[d],children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})});l.displayName="CheckMarkIcon";try{l.displayName="CheckMarkIcon",l.__docgenInfo={description:"",displayName:"CheckMarkIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"main_green_5"'},{value:'"main_green_10"'},{value:'"main_green_20"'},{value:'"red_5_light"'},{value:'"red_10_light"'},{value:'"red_20_light"'},{value:'"red_5_dark"'},{value:'"grey_5_light"'},{value:'"grey_10_light"'},{value:'"grey_20_light"'},{value:'"grey_30_light"'},{value:'"grey_40_light"'},{value:'"grey_50_light"'},{value:'"grey_60_light"'},{value:'"grey_70_light"'},{value:'"grey_80_light"'},{value:'"grey_5_dark"'},{value:'"grey_10_dark"'},{value:'"grey_20_dark"'},{value:'"grey_30_dark"'},{value:'"grey_40_dark"'},{value:'"grey_50_dark"'},{value:'"grey_60_dark"'},{value:'"grey_70_dark"'},{value:'"grey_80_dark"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/CheckMarkIcon.tsx#CheckMarkIcon"]={docgenInfo:l.__docgenInfo,name:"CheckMarkIcon",path:"src/assets/icons/CheckMarkIcon.tsx#CheckMarkIcon"})}catch(d){}const i=d=>(0,a.jsx)("svg",A(f({},d),{viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M9.29 15.46l3.88-3.88L9.29 7.7a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"})}));i.displayName="ChevronRight";try{i.displayName="ChevronRight",i.__docgenInfo={description:"",displayName:"ChevronRight",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/ChevronRight.tsx#ChevronRight"]={docgenInfo:i.__docgenInfo,name:"ChevronRight",path:"src/assets/icons/ChevronRight.tsx#ChevronRight"})}catch(d){}const u=({color:d})=>(0,a.jsx)("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"24",height:"24",color:o.color[d],children:(0,a.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})});u.displayName="MoonIcon";try{u.displayName="MoonIcon",u.__docgenInfo={description:"",displayName:"MoonIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"main_green_5"'},{value:'"main_green_10"'},{value:'"main_green_20"'},{value:'"red_5_light"'},{value:'"red_10_light"'},{value:'"red_20_light"'},{value:'"red_5_dark"'},{value:'"grey_5_light"'},{value:'"grey_10_light"'},{value:'"grey_20_light"'},{value:'"grey_30_light"'},{value:'"grey_40_light"'},{value:'"grey_50_light"'},{value:'"grey_60_light"'},{value:'"grey_70_light"'},{value:'"grey_80_light"'},{value:'"grey_5_dark"'},{value:'"grey_10_dark"'},{value:'"grey_20_dark"'},{value:'"grey_30_dark"'},{value:'"grey_40_dark"'},{value:'"grey_50_dark"'},{value:'"grey_60_dark"'},{value:'"grey_70_dark"'},{value:'"grey_80_dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/MoonIcon.tsx#MoonIcon"]={docgenInfo:u.__docgenInfo,name:"MoonIcon",path:"src/assets/icons/MoonIcon.tsx#MoonIcon"})}catch(d){}const c=({color:d})=>(0,a.jsx)("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"24",height:"24",color:o.color[d],children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd"})});c.displayName="PlusIcon";try{c.displayName="PlusIcon",c.__docgenInfo={description:"",displayName:"PlusIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"main_green_5"'},{value:'"main_green_10"'},{value:'"main_green_20"'},{value:'"red_5_light"'},{value:'"red_10_light"'},{value:'"red_20_light"'},{value:'"red_5_dark"'},{value:'"grey_5_light"'},{value:'"grey_10_light"'},{value:'"grey_20_light"'},{value:'"grey_30_light"'},{value:'"grey_40_light"'},{value:'"grey_50_light"'},{value:'"grey_60_light"'},{value:'"grey_70_light"'},{value:'"grey_80_light"'},{value:'"grey_5_dark"'},{value:'"grey_10_dark"'},{value:'"grey_20_dark"'},{value:'"grey_30_dark"'},{value:'"grey_40_dark"'},{value:'"grey_50_dark"'},{value:'"grey_60_dark"'},{value:'"grey_70_dark"'},{value:'"grey_80_dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/PlusIcon.tsx#PlusIcon"]={docgenInfo:c.__docgenInfo,name:"PlusIcon",path:"src/assets/icons/PlusIcon.tsx#PlusIcon"})}catch(d){}const v=({color:d})=>(0,a.jsx)("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"24",height:"24",color:o.color[d],children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})});v.displayName="SearchIcon";try{v.displayName="SearchIcon",v.__docgenInfo={description:"",displayName:"SearchIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"main_green_5"'},{value:'"main_green_10"'},{value:'"main_green_20"'},{value:'"red_5_light"'},{value:'"red_10_light"'},{value:'"red_20_light"'},{value:'"red_5_dark"'},{value:'"grey_5_light"'},{value:'"grey_10_light"'},{value:'"grey_20_light"'},{value:'"grey_30_light"'},{value:'"grey_40_light"'},{value:'"grey_50_light"'},{value:'"grey_60_light"'},{value:'"grey_70_light"'},{value:'"grey_80_light"'},{value:'"grey_5_dark"'},{value:'"grey_10_dark"'},{value:'"grey_20_dark"'},{value:'"grey_30_dark"'},{value:'"grey_40_dark"'},{value:'"grey_50_dark"'},{value:'"grey_60_dark"'},{value:'"grey_70_dark"'},{value:'"grey_80_dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/SearchIcon.tsx#SearchIcon"]={docgenInfo:v.__docgenInfo,name:"SearchIcon",path:"src/assets/icons/SearchIcon.tsx#SearchIcon"})}catch(d){}const p=({color:d})=>(0,a.jsx)("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"24",height:"24",color:o.color[d],children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})});p.displayName="SunIcon";try{p.displayName="SunIcon",p.__docgenInfo={description:"",displayName:"SunIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"main_green_5"'},{value:'"main_green_10"'},{value:'"main_green_20"'},{value:'"red_5_light"'},{value:'"red_10_light"'},{value:'"red_20_light"'},{value:'"red_5_dark"'},{value:'"grey_5_light"'},{value:'"grey_10_light"'},{value:'"grey_20_light"'},{value:'"grey_30_light"'},{value:'"grey_40_light"'},{value:'"grey_50_light"'},{value:'"grey_60_light"'},{value:'"grey_70_light"'},{value:'"grey_80_light"'},{value:'"grey_5_dark"'},{value:'"grey_10_dark"'},{value:'"grey_20_dark"'},{value:'"grey_30_dark"'},{value:'"grey_40_dark"'},{value:'"grey_50_dark"'},{value:'"grey_60_dark"'},{value:'"grey_70_dark"'},{value:'"grey_80_dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/SunIcon.tsx#SunIcon"]={docgenInfo:p.__docgenInfo,name:"SunIcon",path:"src/assets/icons/SunIcon.tsx#SunIcon"})}catch(d){}const m=({color:d})=>(0,a.jsx)("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:"18",height:"18",color:o.color[d],children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"})});m.displayName="ThumbIcon";try{m.displayName="ThumbIcon",m.__docgenInfo={description:"",displayName:"ThumbIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"main_green_5"'},{value:'"main_green_10"'},{value:'"main_green_20"'},{value:'"red_5_light"'},{value:'"red_10_light"'},{value:'"red_20_light"'},{value:'"red_5_dark"'},{value:'"grey_5_light"'},{value:'"grey_10_light"'},{value:'"grey_20_light"'},{value:'"grey_30_light"'},{value:'"grey_40_light"'},{value:'"grey_50_light"'},{value:'"grey_60_light"'},{value:'"grey_70_light"'},{value:'"grey_80_light"'},{value:'"grey_5_dark"'},{value:'"grey_10_dark"'},{value:'"grey_20_dark"'},{value:'"grey_30_dark"'},{value:'"grey_40_dark"'},{value:'"grey_50_dark"'},{value:'"grey_60_dark"'},{value:'"grey_70_dark"'},{value:'"grey_80_dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/ThumbIcon.tsx#ThumbIcon"]={docgenInfo:m.__docgenInfo,name:"ThumbIcon",path:"src/assets/icons/ThumbIcon.tsx#ThumbIcon"})}catch(d){}},"./src/components/Avatar/Avatar.tsx":(_,r,e)=>{"use strict";e.d(r,{q:()=>a});var s=e("./node_modules/classnames/index.js"),g=e.n(s),o=e("./node_modules/react/jsx-runtime.js");function a({src:t,alt:n="",size:l="40px"}){return(0,o.jsx)("img",{src:t,alt:n,className:g()("rounded-full object-cover",{"w-10 h-10":l==="40px","w-16 h-16":l==="64px"})})}a.displayName="Avatar";try{a.displayName="Avatar",a.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"40px"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"40px"'},{value:'"64px"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:a.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(t){}},"./src/components/Card/Card.tsx":(_,r,e)=>{"use strict";e.d(r,{Z:()=>a});var s=e("./src/components/Text/index.ts"),g=e("./src/components/Thumbnail/index.ts"),o=e("./node_modules/react/jsx-runtime.js");function a({imageSrc:t,imageAlt:n,primary:l="",secondary:i="",detail:u}){return(0,o.jsxs)("div",{className:"w-[278px] flex flex-col group",children:[(0,o.jsx)("div",{className:"group-hover:mt-[-8px] transition-spacing ease-in-out duration-300",children:(0,o.jsx)(g.p,{src:t,alt:n,width:278,ratio:"16:9"})}),(0,o.jsx)("div",{className:"mt-3 group-hover:mt-5 transition-spacing ease-in-out duration-300",children:(0,o.jsx)(s.x,{text:`${l} \xB7 ${i}`,size:"body2",weight:"regular",color:"secondary"})}),u&&(0,o.jsx)(s.x,{text:u,size:"body1",weight:"medium",color:"primary",className:"line-clamp-1"})]})}a.displayName="Card";try{a.displayName="Card",a.__docgenInfo={description:"",displayName:"Card",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}},primary:{defaultValue:{value:""},description:"",name:"primary",required:!1,type:{name:"string"}},secondary:{defaultValue:{value:""},description:"",name:"secondary",required:!1,type:{name:"string"}},detail:{defaultValue:null,description:"",name:"detail",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:a.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(t){}},"./src/components/Chip/Chip.tsx":(_,r,e)=>{"use strict";e.d(r,{A:()=>t});var s=e("./node_modules/classnames/index.js"),g=e.n(s),o=e("./src/components/Text/index.ts"),a=e("./node_modules/react/jsx-runtime.js");function t({children:n,text:l,selected:i}){return(0,a.jsxs)("div",{className:g()("w-fit h-8 flex flex-row items-center rounded-lg select-none",l?"px-3":"px-2",i?"bg-bg-secondary dark:bg-bg-secondary_dark":"bg-bg-tertiary_alpha_0 dark:bg-bg-primary_alpha_0_dark"),children:[(0,a.jsx)("div",{className:g()([{hidden:!n},"mr-2"]),children:n}),l&&(0,a.jsx)(o.x,{text:l,size:"body2",weight:"medium",color:i?"primary":"secondary"})]})}t.displayName="Chip";try{t.displayName="Chip",t.__docgenInfo={description:"",displayName:"Chip",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Chip/Chip.tsx#Chip"]={docgenInfo:t.__docgenInfo,name:"Chip",path:"src/components/Chip/Chip.tsx#Chip"})}catch(n){}},"./src/components/Divider/Divider.tsx":(_,r,e)=>{"use strict";e.d(r,{i:()=>a});var s=e("./node_modules/classnames/index.js"),g=e.n(s),o=e("./node_modules/react/jsx-runtime.js");function a(i){var u=i,{variant:t="primary",className:n}=u,l=B(u,["variant","className"]);return(0,o.jsx)("div",f({className:g()("w-full h-[1px]",{"bg-border-primary dark:bg-border-primary_dark":t==="primary","bg-border-secondary dark:bg-border-secondary_dark":t==="secondary"},n)},l))}a.displayName="Divider";try{a.displayName="Divider",a.__docgenInfo={description:"",displayName:"Divider",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#Divider"]={docgenInfo:a.__docgenInfo,name:"Divider",path:"src/components/Divider/Divider.tsx#Divider"})}catch(t){}},"./src/components/GroupHeader/GroupHeader.tsx":(_,r,e)=>{"use strict";e.d(r,{t:()=>a});var s=e("./src/assets/icons/index.ts"),g=e("./src/components/Text/index.ts"),o=e("./node_modules/react/jsx-runtime.js");function a({href:t,text:n}){return(0,o.jsxs)("a",{className:"flex flex-row items-center gap-1 hover:gap-2 transition-gap duration-300 ease-in-out text-text-primary dark:text-text-primary_dark",href:t,children:[(0,o.jsx)(g.x,{text:n,size:"heading3",weight:"semibold"}),(0,o.jsx)(s._Q,{className:"w-6 h-6"})]})}a.displayName="GroupHeader";try{a.displayName="GroupHeader",a.__docgenInfo={description:"",displayName:"GroupHeader",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/GroupHeader/GroupHeader.tsx#GroupHeader"]={docgenInfo:a.__docgenInfo,name:"GroupHeader",path:"src/components/GroupHeader/GroupHeader.tsx#GroupHeader"})}catch(t){}},"./src/components/Input/Input.tsx":(_,r,e)=>{"use strict";e.d(r,{I:()=>l});var s=e("./node_modules/classnames/index.js"),g=e.n(s),o=e("./node_modules/react/index.js");const a=({state:i,defaultState:u,onChange:c})=>{const[v,p]=(0,o.useState)(typeof u=="function"?u():u),m=i!=null,d=m?i:v,y=(0,o.useCallback)(h=>{typeof h=="function"&&(h=h()),m||p(h),c==null||c(h)},[]);return[d,y]};var t=e("./src/components/Text/index.ts"),n=e("./node_modules/react/jsx-runtime.js");const l=(0,o.forwardRef)((R,T)=>{var C=R,{id:i,label:u,value:c,defaultValue:v,subLabel:p,variant:m,rightAddon:d,hasError:y,maxLength:h,onValueChange:k}=C,S=B(C,["id","label","value","defaultValue","subLabel","variant","rightAddon","hasError","maxLength","onValueChange"]);const I=(0,o.useId)(),[x,j]=a({state:c,defaultState:v!=null?v:"",onChange:k}),E=M=>{j(M.target.value)};return(0,n.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,n.jsxs)("div",{className:"flex w-full",children:[u&&(0,n.jsx)("label",{htmlFor:i!=null?i:I,className:'before:content-["*"] before:mr-1 text-sm leading-[1.8] font-normal text-text-secondary dark:text-text-secondary_dark',children:u}),h&&(0,n.jsx)(t.x,{className:"ml-auto",text:`(${x.length}/${h})`,size:"body2",weight:"regular",color:"secondary"})]}),(0,n.jsxs)("div",{className:g()("flex items-center w-full rounded-lg px-4",{"border border-solid border-border-primary bg-bg-primary_alpha_0 focus-within:border-color-blue_200":m==="outline","bg-bg-secondary dark:bg-bg-secondary_dark":m==="filled","border-color-red focus-within:border-color-red":y}),children:[(0,n.jsx)("input",f({ref:T,id:i!=null?i:I,className:"w-full h-[44px] bg-transparent focus:outline-none text-base font-normal leading-[1.5] text-text-primary dark:text-text-primary_dark placeholder:text-text-tertiary dark:placeholder:text-text-tertiary_dark",value:x,onChange:E,maxLength:h},S)),d&&(0,n.jsx)("span",{className:"flex",children:d})]}),p&&(0,n.jsx)(t.x,{text:p,size:"body2",weight:"regular",color:y?"red_200":"secondary"})]})});try{l.displayName="Input",l.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"outline"'},{value:'"filled"'}]}},hasError:{defaultValue:null,description:"",name:"hasError",required:!0,type:{name:"boolean"}},rightAddon:{defaultValue:null,description:"",name:"rightAddon",required:!0,type:{name:"ReactNode"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(value: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:l.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(i){}},"./src/components/Sample/Sample.tsx":(_,r,e)=>{"use strict";e.d(r,{d:()=>i});var s=e("./node_modules/classnames/index.js"),g=e.n(s),o=e("./node_modules/react/index.js");const a=u=>{const c=(0,o.createContext)(u),v=c.Provider;function p(m){const d=(0,o.useContext)(c);if(!d)throw new Error(`useContext must be used within a Provider, check this ${m!=null?m:""}`);return d}return[p,v]},[t,n]=a("light");try{t.displayName="useTheme",t.__docgenInfo={description:"",displayName:"useTheme",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/context/themeContext.tsx#useTheme"]={docgenInfo:t.__docgenInfo,name:"useTheme",path:"src/context/themeContext.tsx#useTheme"})}catch(u){}try{n.displayName="ThemeProvider",n.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/context/themeContext.tsx#ThemeProvider"]={docgenInfo:n.__docgenInfo,name:"ThemeProvider",path:"src/context/themeContext.tsx#ThemeProvider"})}catch(u){}var l=e("./node_modules/react/jsx-runtime.js");function i({text:u}){const c=t();return(0,l.jsxs)("div",{className:c==="dark"?"bg-pink-200":"bg-gray-300",children:['\uB098 \uC798\uB798 "',u,'" and \uC878\uB824 "',c,'" \uC640\uC774\uCC28 \uC2E0\uB098\uD558\uB2E4..',(0,l.jsx)("br",{}),g()(["bg-pink-200 text-lg hover:ring-4 hover:ring-offset-3 hover:opacity-50",{"bg-gray-300":c==="light"}])]})}i.displayName="Sample";try{i.displayName="Sample",i.__docgenInfo={description:"",displayName:"Sample",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Sample/Sample.tsx#Sample"]={docgenInfo:i.__docgenInfo,name:"Sample",path:"src/components/Sample/Sample.tsx#Sample"})}catch(u){}},"./src/components/Text/Text.tsx":(_,r,e)=>{"use strict";e.d(r,{xv:()=>n});var s=e("./node_modules/react/jsx-runtime.js");const g={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-[1.8rem]",body2:"text-sm leading-[1.8rem]",small:"text-xs leading-normal"},o={regular:"font-light",medium:"font-normal",semibold:"font-semibold"},a={left:"text-left",right:"text-right",center:"text-center"},t={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function n({className:l,text:i,size:u="body1",weight:c="regular",align:v="left",color:p="primary"}){return(0,s.jsx)("p",{className:`font-display
        ${g[u]}
        ${o[c]}
        ${a[v]}
        ${t[p]}
        ${l}
        `,children:i})}n.displayName="Text";try{n.displayName="Text",n.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'},{value:'"small"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:n.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(l){}},"./src/components/Text/index.ts":(_,r,e)=>{"use strict";e.d(r,{x:()=>s.xv});var s=e("./src/components/Text/Text.tsx")},"./src/components/Thumbnail/Thumbnail.tsx":(_,r,e)=>{"use strict";e.d(r,{p:()=>a});var s=e("./node_modules/classnames/index.js"),g=e.n(s),o=e("./node_modules/react/jsx-runtime.js");function a({src:t,alt:n="",width:l,ratio:i="16:9"}){const u={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[i];return(0,o.jsx)("img",{src:t,alt:n,style:{width:l},className:g()(u,"object-cover rounded-2xl")})}a.displayName="Thumbnail";try{a.displayName="Thumbnail",a.__docgenInfo={description:"",displayName:"Thumbnail",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},ratio:{defaultValue:{value:"16:9"},description:"",name:"ratio",required:!1,type:{name:"enum",value:[{value:'"16:9"'},{value:'"16:10"'},{value:'"1:1"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Thumbnail/Thumbnail.tsx#Thumbnail"]={docgenInfo:a.__docgenInfo,name:"Thumbnail",path:"src/components/Thumbnail/Thumbnail.tsx#Thumbnail"})}catch(t){}},"./src/components/Thumbnail/index.ts":(_,r,e)=>{"use strict";e.d(r,{p:()=>s.p});var s=e("./src/components/Thumbnail/Thumbnail.tsx")},"./node_modules/classnames/index.js":(_,r)=>{var e,s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var g={}.hasOwnProperty,o="[native code]";function a(){for(var t=[],n=0;n<arguments.length;n++){var l=arguments[n];if(l){var i=typeof l;if(i==="string"||i==="number")t.push(l);else if(Array.isArray(l)){if(l.length){var u=a.apply(null,l);u&&t.push(u)}}else if(i==="object"){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){t.push(l.toString());continue}for(var c in l)g.call(l,c)&&l[c]&&t.push(c)}}}return t.join(" ")}_.exports?(a.default=a,_.exports=a):(e=[],s=function(){return a}.apply(r,e),s!==void 0&&(_.exports=s))})()}}]);})();

"use strict";(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[518],{"./src/components/Card/Card.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,PrimaryNoPrimaryText:()=>PrimaryNoPrimaryText,PrimaryWithDetail:()=>PrimaryWithDetail,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),context=__webpack_require__("./src/context/index.ts"),Thumbnail=__webpack_require__("./src/components/Thumbnail/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Card({imageSrc,imageAlt,primary="",secondary="",detail}){const theme=(0,context.F)();return(0,jsx_runtime.jsxs)("div",{className:"w-[278px] flex flex-col group",children:[(0,jsx_runtime.jsx)("div",{className:"group-hover:mt-[-8px] transition-spacing ease-in-out duration-300",children:(0,jsx_runtime.jsx)(Thumbnail.p,{src:imageSrc,alt:imageAlt,width:278,ratio:"16:9"})}),(0,jsx_runtime.jsxs)("div",{className:classnames_default()("mt-3 group-hover:mt-5 transition-spacing ease-in-out duration-300 text-sm font-normal",{"text-text-secondary":"light"===theme,"text-text-secondary_dark":"dark"===theme}),children:[(0,jsx_runtime.jsx)("span",{children:primary}),(0,jsx_runtime.jsx)("span",{className:"mx-1",children:"·"}),(0,jsx_runtime.jsx)("span",{children:secondary})]}),detail&&(0,jsx_runtime.jsx)("p",{className:classnames_default()("text-base font-medium line-clamp-1",{"text-text-primary":"light"===theme,"text-text-primary_dark":"dark"===theme}),children:detail})]})}Card.displayName="Card";try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}},primary:{defaultValue:{value:""},description:"",name:"primary",required:!1,type:{name:"string"}},secondary:{defaultValue:{value:""},description:"",name:"secondary",required:!1,type:{name:"string"}},detail:{defaultValue:null,description:"",name:"detail",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}const Primary={args:{imageSrc:"https://picsum.photos/536/354",imageAlt:"42world",primary:"에베베손",secondary:"2023.04.32"}},PrimaryWithDetail={args:{imageSrc:"https://picsum.photos/536/354",imageAlt:"42world",primary:"에베베손",secondary:"2023.04.32",detail:"지최는 배가 고프고 내일은 닭가슴살 소세지 먹을 거고 스타벅스 가서 이거 하고"}},PrimaryNoPrimaryText={args:{imageSrc:"https://picsum.photos/536/354",imageAlt:"42world",secondary:"지최",detail:"지최는 배가 고프고 내일은 닭가슴살 소세지 먹을 거고 스타벅스 가서 이거 하고"}},Card_stories={title:"rookies/Card",component:Card};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    imageSrc: 'https://picsum.photos/536/354',\n    imageAlt: '42world',\n    primary: '에베베손',\n    secondary: '2023.04.32'\n  }\n}",...Primary.parameters?.docs?.source}}},PrimaryWithDetail.parameters={...PrimaryWithDetail.parameters,docs:{...PrimaryWithDetail.parameters?.docs,source:{originalSource:"{\n  args: {\n    imageSrc: 'https://picsum.photos/536/354',\n    imageAlt: '42world',\n    primary: '에베베손',\n    secondary: '2023.04.32',\n    detail: '지최는 배가 고프고 내일은 닭가슴살 소세지 먹을 거고 스타벅스 가서 이거 하고'\n  }\n}",...PrimaryWithDetail.parameters?.docs?.source}}},PrimaryNoPrimaryText.parameters={...PrimaryNoPrimaryText.parameters,docs:{...PrimaryNoPrimaryText.parameters?.docs,source:{originalSource:"{\n  args: {\n    imageSrc: 'https://picsum.photos/536/354',\n    imageAlt: '42world',\n    secondary: '지최',\n    detail: '지최는 배가 고프고 내일은 닭가슴살 소세지 먹을 거고 스타벅스 가서 이거 하고'\n  }\n}",...PrimaryNoPrimaryText.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","PrimaryWithDetail","PrimaryNoPrimaryText"]}}]);
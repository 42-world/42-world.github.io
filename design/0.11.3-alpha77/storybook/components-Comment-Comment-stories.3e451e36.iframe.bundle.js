"use strict";(()=>{var N=Object.defineProperty,k=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var B=(r,t,e)=>t in r?N(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,p=(r,t)=>{for(var e in t||(t={}))T.call(t,e)&&B(r,e,t[e]);if(y)for(var e of y(t))h.call(t,e)&&B(r,e,t[e]);return r},f=(r,t)=>k(r,w(t));var A=(r,t)=>{var e={};for(var n in r)T.call(r,n)&&t.indexOf(n)<0&&(e[n]=r[n]);if(r!=null&&y)for(var n of y(r))t.indexOf(n)<0&&h.call(r,n)&&(e[n]=r[n]);return e};(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[196],{"./src/components/Comment/Comment.stories.ts":(r,t,e)=>{var g,C,v;e.r(t),e.d(t,{Primary:()=>c,__namedExportsOrder:()=>_,default:()=>x});var n=e("./node_modules/classnames/index.js"),d=e.n(n),m=e("./src/components/AvatarText/AvatarText.tsx"),i=e("./src/components/Badge/Badge.tsx"),l=e("./src/components/Button/Button.tsx"),o=e("./src/components/Text/index.ts"),a=e("./node_modules/react/jsx-runtime.js");function s({avatarSrc:E,avatarAlt:O="",username:S,time:I,content:b,isMine:j,isAuthor:D,isLiked:R,numOfLikes:L=0,onClickLike:M,onClickEdit:P,onClickReply:V}){return(0,a.jsxs)("div",{className:"flex flex-col gap-3 w-[720px] overflow-hidden break-words",children:[(0,a.jsxs)("div",{className:"flex flex-row items-start gap-2",children:[(0,a.jsx)(m.M,{src:E,alt:O,mainText:S,subText:I}),D&&(0,a.jsx)(i.C,{color:"outline",text:"\uC791\uC131\uC790",className:"ml-1"}),j&&(0,a.jsx)(i.C,{color:"outline",text:"\uB0B4\uB313\uAE00"})]}),(0,a.jsx)(o.x,{size:"body2",text:b}),(0,a.jsxs)("div",{className:"flex flex-row items-center gap-4",children:[(0,a.jsx)(l.z,{text:`\uC88B\uC544\uC694 ${L}`,variant:"text",className:d()("px-0",{"[&>p]:text-color-system_200 [&>p]:dark:text-color-system_200":R}),onClick:M}),(0,a.jsx)(l.z,{text:"\uB2F5\uAE00\uB2EC\uAE30",variant:"text",className:"px-0 mx-4",onClick:V}),(0,a.jsx)(l.z,{text:"\uC218\uC815\uD558\uAE30",variant:"text",className:"px-0",onClick:P})]})]})}s.displayName="Comment";try{s.displayName="Comment",s.__docgenInfo={description:"",displayName:"Comment",props:{avatarSrc:{defaultValue:null,description:"",name:"avatarSrc",required:!0,type:{name:"string"}},avatarAlt:{defaultValue:{value:""},description:"",name:"avatarAlt",required:!1,type:{name:"string"}},username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}},time:{defaultValue:null,description:"",name:"time",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},isMine:{defaultValue:null,description:"",name:"isMine",required:!1,type:{name:"boolean"}},isAuthor:{defaultValue:null,description:"",name:"isAuthor",required:!1,type:{name:"boolean"}},isLiked:{defaultValue:null,description:"",name:"isLiked",required:!1,type:{name:"boolean"}},numOfLikes:{defaultValue:{value:"0"},description:"",name:"numOfLikes",required:!1,type:{name:"number"}},onClickLike:{defaultValue:null,description:"",name:"onClickLike",required:!1,type:{name:"(() => void)"}},onClickReply:{defaultValue:null,description:"",name:"onClickReply",required:!1,type:{name:"(() => void)"}},onClickEdit:{defaultValue:null,description:"",name:"onClickEdit",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Comment/Comment.tsx#Comment"]={docgenInfo:s.__docgenInfo,name:"Comment",path:"src/components/Comment/Comment.tsx#Comment"})}catch(E){}const u={title:"rookies/Comment",component:s},c={args:{avatarSrc:"https://picsum.photos/536/354",avatarAlt:"WeL0ve42World",username:"\uC5D0\uBCA0\uBCA0\uC190",time:"3\uC2DC\uAC04 \uC804",content:"\uC624\uB298 \uC800\uB141\uC740 \uB9DB\uC788\uB294 \uB5A1\uAC08\uBE44\uC5D0 \uC5F4\uBB34\uAE40\uCE58\uC5D0 \uBA85\uC774\uB098\uBB3C\uC744 \uBA39\uC5C8\uACE0 \uB3D9\uBB3C\uC758\uC232 \uD558\uACE0\uC2F6\uACE0 \uB3C8\uBC8C\uACE0\uC2F6\uACE0 \uC5B4\uCA4C\uAD6C\uC800\uCA4C\uAD6C \uC544\uC27D\uAC8C\uB3C4 transition\uC740 \uC544\uC9C1 \uB9AC\uC561\uD2B8 18\uC5D0\uC11C\uB3C4 \uAC1C\uBC1C\uC911\uC778 \uAE30\uB2A5 \uC911 \uD558\uB098\uC774\uAE30\uC5D0...",isMine:!1,isAuthor:!1,isLiked:!1,numOfLikes:0}},x=u;c.parameters=f(p({},c.parameters),{docs:f(p({},(g=c.parameters)==null?void 0:g.docs),{source:p({originalSource:`{
  // Add your story args here
  args: {
    avatarSrc: 'https://picsum.photos/536/354',
    avatarAlt: 'WeL0ve42World',
    username: '\uC5D0\uBCA0\uBCA0\uC190',
    time: '3\uC2DC\uAC04 \uC804',
    content: '\uC624\uB298 \uC800\uB141\uC740 \uB9DB\uC788\uB294 \uB5A1\uAC08\uBE44\uC5D0 \uC5F4\uBB34\uAE40\uCE58\uC5D0 \uBA85\uC774\uB098\uBB3C\uC744 \uBA39\uC5C8\uACE0 \uB3D9\uBB3C\uC758\uC232 \uD558\uACE0\uC2F6\uACE0 \uB3C8\uBC8C\uACE0\uC2F6\uACE0 \uC5B4\uCA4C\uAD6C\uC800\uCA4C\uAD6C \uC544\uC27D\uAC8C\uB3C4 transition\uC740 \uC544\uC9C1 \uB9AC\uC561\uD2B8 18\uC5D0\uC11C\uB3C4 \uAC1C\uBC1C\uC911\uC778 \uAE30\uB2A5 \uC911 \uD558\uB098\uC774\uAE30\uC5D0...',
    isMine: false,
    isAuthor: false,
    isLiked: false,
    numOfLikes: 0
  }
}`},(v=(C=c.parameters)==null?void 0:C.docs)==null?void 0:v.source)})});const _=["Primary"]},"./src/components/Avatar/Avatar.tsx":(r,t,e)=>{e.d(t,{q:()=>i});var n=e("./node_modules/classnames/index.js"),d=e.n(n),m=e("./node_modules/react/jsx-runtime.js");function i({src:l,alt:o="",size:a="40px"}){return(0,m.jsx)("img",{src:l,alt:o,className:d()("rounded-full object-cover",{"w-10 h-10":a==="40px","w-16 h-16":a==="64px"})})}i.displayName="Avatar";try{i.displayName="Avatar",i.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"40px"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"40px"'},{value:'"64px"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:i.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(l){}},"./src/components/AvatarText/AvatarText.tsx":(r,t,e)=>{e.d(t,{M:()=>o});var n=e("./node_modules/classnames/index.js"),d=e.n(n),m=e("./src/components/Avatar/Avatar.tsx"),i=e("./src/components/Text/index.ts"),l=e("./node_modules/react/jsx-runtime.js");function o({src:a,alt:s="",size:u="40px",mainText:c,subText:x}){return(0,l.jsxs)("div",{className:d()("flex flex-row",{"gap-3":u==="40px","gap-4":u==="64px"}),children:[(0,l.jsx)(m.q,{src:a,alt:s,size:u}),(0,l.jsxs)("div",{className:"flex flex-col items-start justify-center",children:[(0,l.jsx)(i.x,{text:c,size:u==="64px"?"heading3":"body2",weight:"medium"}),x&&(0,l.jsx)(i.x,{text:x,size:u==="64px"?"body2":"small",color:"secondary"})]})]})}o.displayName="AvatarText";try{o.displayName="AvatarText",o.__docgenInfo={description:"",displayName:"AvatarText",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"40px"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"40px"'},{value:'"64px"'}]}},mainText:{defaultValue:null,description:"",name:"mainText",required:!0,type:{name:"string"}},subText:{defaultValue:null,description:"",name:"subText",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AvatarText/AvatarText.tsx#AvatarText"]={docgenInfo:o.__docgenInfo,name:"AvatarText",path:"src/components/AvatarText/AvatarText.tsx#AvatarText"})}catch(a){}},"./src/components/Badge/Badge.tsx":(r,t,e)=>{e.d(t,{C:()=>a});var n=e("./node_modules/classnames/index.js"),d=e.n(n),m=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),i=e("./src/components/Text/index.ts"),l=e("./node_modules/react/jsx-runtime.js");const o={indigo:"bg-color-indigo",yellow:"bg-color-yellow",mint:"bg-color-mint",cyan:"bg-color-cyan",blue:"bg-color-blue_200",pink:"bg-color-pink",brown:"bg-color-brown",mono:"bg-bg-primary_dark dark:bg-bg-primary",outline:"bg-none"};function a({color:s="outline",text:u,className:c}){return(0,l.jsx)("div",{className:(0,m.m)(d()("px-2 py-[3px] w-fit rounded-lg",o[s],{"border border-border-secondary dark:border-border-secondary_dark":s==="outline"}),c),children:(0,l.jsx)(i.x,{text:u,size:"small",className:d()({"text-text-primary_dark dark:text-text-primary":s==="mono"}),color:s==="outline"?"secondary":"white"})})}a.displayName="Badge";try{a.displayName="Badge",a.__docgenInfo={description:"",displayName:"Badge",props:{color:{defaultValue:{value:"outline"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"indigo"'},{value:'"yellow"'},{value:'"mint"'},{value:'"cyan"'},{value:'"blue"'},{value:'"pink"'},{value:'"brown"'},{value:'"mono"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:a.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch(s){}},"./src/components/Button/Button.tsx":(r,t,e)=>{e.d(t,{z:()=>s});var n=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),d=e("./node_modules/classnames/index.js"),m=e.n(d),i=e("./src/components/Icon/index.ts"),l=e("./src/components/Text/index.ts"),o=e("./node_modules/react/jsx-runtime.js");const a={primary:"bg-color-system_200 border-0 hover:bg-color-system_300",secondary:"border-border-primary dark:border-border-primary_dark hover:border-color-system_200 hover:dark:border-color-system_200",text:"border-0"};function s(C){var v=C,{variant:u="primary",text:c,icon:x,className:_}=v,g=A(v,["variant","text","icon","className"]);return(0,o.jsxs)("button",f(p({className:(0,n.m)(`group h-8 flex flex-row items-center gap-2 rounded-2xl border border-solid transition-all duration-300 active:scale-95 ${a[u]}`,x&&!c?"px-2":"px-3",_)},g),{children:[x&&(0,o.jsx)(i.J,{svg:x,size:"small",className:m()(u==="primary"?"fill-color-white":"fill-text-secondary dark:fill-text-secondary_dark","transition-colors duration-300",{"group-hover:fill-color-system_200":u!=="primary"})}),c&&(0,o.jsx)(l.x,{text:c,size:"body2",weight:"medium",color:u==="primary"?"white":"secondary",className:m()("transition-colors duration-300",{"group-hover:text-color-system_200":u!=="primary"})})]}))}s.displayName="Button";try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"FC<SVGAttributes<SVGSVGElement>>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:s.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(u){}},"./src/components/Icon/Icon.tsx":(r,t,e)=>{e.d(t,{J:()=>d});var n=e("./node_modules/react/jsx-runtime.js");function d(a){var s=a,{svg:m,size:i="medium",className:l}=s,o=A(s,["svg","size","className"]);const u={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[i]||{width:24,height:24};return(0,n.jsx)(m,p({viewBox:"0 0 24 24",width:u.width,height:u.height,className:l!=null?l:"fill-black dark:fill-white"},o))}d.displayName="Icon";try{d.displayName="Icon",d.__docgenInfo={description:"",displayName:"Icon",props:{svg:{defaultValue:null,description:"",name:"svg",required:!0,type:{name:"FC<SVGAttributes<SVGElement>>"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'},{value:'"xlarge"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:d.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(m){}},"./src/components/Icon/index.ts":(r,t,e)=>{e.d(t,{J:()=>n.J});var n=e("./src/components/Icon/Icon.tsx")},"./src/components/Text/Text.tsx":(r,t,e)=>{e.d(t,{xv:()=>o});var n=e("./node_modules/react/jsx-runtime.js");const d={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-normal",body2:"text-sm leading-normal",small:"text-xs leading-normal"},m={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},i={left:"text-left",right:"text-right",center:"text-center"},l={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function o({className:a,text:s,size:u="body1",weight:c="regular",align:x="left",color:_="primary"}){return(0,n.jsx)("p",{className:`font-display
        ${d[u]}
        ${m[c]}
        ${i[x]}
        ${l[_]}
        ${a}
        `,children:s})}o.displayName="Text";try{o.displayName="Text",o.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'},{value:'"small"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:o.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(a){}},"./src/components/Text/index.ts":(r,t,e)=>{e.d(t,{x:()=>n.xv});var n=e("./src/components/Text/Text.tsx")}}]);})();

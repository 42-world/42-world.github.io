import*as a from"react";import{ControlType as e}from"framer";import{useEffect as n,useState as i}from"react";import{applyFramerProperties as p,FramerProvider as s}from"../../common/framer/index.js";import{Input as m}from"./Input.js";var d=t=>{let{helperText:l,...r}=t;return{...r,subLabel:l}};function f(t){let[l,r]=i(t.value);n(()=>{r(t.value)},[t.value]);let{children:o,...u}=d(t);return a.createElement(s,null,a.createElement(m,{...u,value:l,onValueChange:r}))}p(f,{size:{title:"Size",type:e.Enum,options:["small","medium"],defaultValue:"medium"},variant:{title:"Variant",type:e.Enum,options:["outlined","filled"],defaultValue:"outlined"},focused:{title:"Focused",type:e.Boolean,defaultValue:!1},required:{title:"Required",type:e.Boolean,defaultValue:!0},placeholder:{title:"Placeholder",type:e.String,defaultValue:"\uD50C\uB808\uC774\uC2A4\uD640\uB354"},value:{title:"Value",type:e.String,defaultValue:""},label:{title:"Label",type:e.String,defaultValue:"\uB808\uC774\uBE14"},hasError:{title:"Has Error",type:e.Boolean,defaultValue:!1},helperText:{title:"Helper Text",type:e.String,defaultValue:"\uD5EC\uD37C\uD14D\uC2A4\uD2B8"},maxLength:{title:"Max Length",type:e.Number,defaultValue:20}});export{f as Input};
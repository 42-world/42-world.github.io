var h=Object.create;var m=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var I=t=>m(t,"__esModule",{value:!0});var g=(t,e)=>()=>(t&&(e=t(t=0)),e);var S=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var M=(t,e,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of w(e))!y.call(t,r)&&r!=="default"&&m(t,r,{get:()=>e[r],enumerable:!(o=b(e,r))||o.enumerable});return t},j=t=>M(I(m(t!=null?h(x(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);import*as s from"react";var i=g(()=>{});var c=S((B,f)=>{i();(function(){"use strict";var t={}.hasOwnProperty,e="[native code]";function o(){for(var r=[],u=0;u<arguments.length;u++){var n=arguments[u];if(!!n){var p=typeof n;if(p==="string"||p==="number")r.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&r.push(a)}}else if(p==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){r.push(n.toString());continue}for(var l in n)t.call(n,l)&&n[l]&&r.push(l)}}}return r.join(" ")}typeof f!="undefined"&&f.exports?(o.default=o,f.exports=o):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return o}):window.classNames=o})()});i();i();function d(t){return s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...t},s.createElement("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}))}var v=j(c());import{forwardRef as A}from"react";import{Button as C}from"../Button/index.js";var T=A(({className:t,...e},o)=>s.createElement("div",{className:"flex items-center rounded-3xl border border-border-secondary p-2 pl-4 focus-within:border-color-system_200"},s.createElement("input",{ref:o,className:(0,v.default)("h-8 w-full flex-1 bg-transparent text-sm outline-none",t),...e}),s.createElement(C,{type:"submit",icon:s.createElement(d,null),"aria-label":"\uB313\uAE00 \uC791\uC131"})));export{T as CommentInput};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

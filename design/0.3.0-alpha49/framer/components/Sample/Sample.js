var v=Object.create;var u=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var x=e=>u(e,"__esModule",{value:!0});var S=(e,t)=>()=>(e&&(t=e(e=0)),t);var j=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var w=(e,t,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of b(t))!y.call(e,i)&&i!=="default"&&u(e,i,{get:()=>t[i],enumerable:!(o=h(t,i))||o.enumerable});return e},N=e=>w(x(u(e!=null?v(g(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);import*as s from"react";var r=S(()=>{});var m=j((k,f)=>{r();(function(){"use strict";var e={}.hasOwnProperty,t="[native code]";function o(){for(var i=[],a=0;a<arguments.length;a++){var n=arguments[a];if(!!n){var c=typeof n;if(c==="string"||c==="number")i.push(n);else if(Array.isArray(n)){if(n.length){var l=o.apply(null,n);l&&i.push(l)}}else if(c==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){i.push(n.toString());continue}for(var p in n)e.call(n,p)&&n[p]&&i.push(p)}}}return i.join(" ")}typeof f!="undefined"&&f.exports?(o.default=o,f.exports=o):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return o}):window.classNames=o})()});r();var d=N(m());import{useTheme as O}from"../../context/index.js";function q({text:e}){let t=O();return s.createElement("div",{className:t==="dark"?"bg-pink-200":"bg-gray-300"},'\uB098 \uC798\uB798 "',e,'" and \uC878\uB824 "',t,'" \uC640\uC774\uCC28 \uC2E0\uB098\uD558\uB2E4..',s.createElement("br",null),(0,d.default)(["bg-pink-200 text-lg hover:ring-4 hover:ring-offset-3 hover:opacity-50",{"bg-gray-300":t==="light"}]))}export{q as Sample};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

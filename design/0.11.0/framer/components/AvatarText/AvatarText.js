var h=Object.create;var x=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames;var b=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var A=t=>x(t,"__esModule",{value:!0});var I=(t,e)=>()=>(t&&(e=t(t=0)),e);var S=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var C=(t,e,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of T(e))!g.call(t,o)&&o!=="default"&&x(t,o,{get:()=>e[o],enumerable:!(r=y(e,o))||r.enumerable});return t},w=t=>C(A(x(t!=null?h(b(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);import*as i from"react";var s=I(()=>{});var c=S((N,a)=>{s();(function(){"use strict";var t={}.hasOwnProperty,e="[native code]";function r(){for(var o=[],p=0;p<arguments.length;p++){var n=arguments[p];if(!!n){var f=typeof n;if(f==="string"||f==="number")o.push(n);else if(Array.isArray(n)){if(n.length){var u=r.apply(null,n);u&&o.push(u)}}else if(f==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){o.push(n.toString());continue}for(var m in n)t.call(n,m)&&n[m]&&o.push(m)}}}return o.join(" ")}typeof a!="undefined"&&a.exports?(r.default=r,a.exports=r):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return r}):window.classNames=r})()});s();var v=w(c());s();import{Avatar as d}from"./Avatar/index.js";import{AvatarText as G}from"./AvatarText/index.js";import{Card as L}from"./Card/index.js";import{Chip as z}from"./Chip/index.js";import{Comment as F}from"./Comment/index.js";import{Divider as K}from"./Divider/index.js";import{GroupHeader as Q}from"./GroupHeader/index.js";import{Icon as V}from"./Icon/index.js";import{Input as X}from"./Input/index.js";import{ListItem as Z}from"./ListItem/index.js";import{Sample as $}from"./Sample/index.js";import{Text as l}from"./Text/index.js";import{Thumbnail as tt}from"./Thumbnail/index.js";import{Badge as rt}from"./Badge/index.js";import{IconText as nt}from"./IconText/index.js";import{Button as st}from"./Button/index.js";function at({src:t,alt:e="",size:r="40px",mainText:o,subText:p}){return i.createElement("div",{className:(0,v.default)("flex flex-row",{"gap-3":r==="40px","gap-4":r==="64px"})},i.createElement(d,{src:t,alt:e,size:r}),i.createElement("div",{className:"flex flex-col items-start justify-center"},i.createElement(l,{text:o,size:r==="64px"?"heading3":"body2",weight:"medium"}),p&&i.createElement(l,{text:p,size:r==="64px"?"body2":"small",color:"secondary"})))}export{at as AvatarText};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
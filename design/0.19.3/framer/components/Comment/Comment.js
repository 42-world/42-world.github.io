var g=Object.create;var d=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var C=Object.getPrototypeOf,N=Object.prototype.hasOwnProperty;var S=t=>d(t,"__esModule",{value:!0});var A=(t,e)=>()=>(t&&(e=t(t=0)),e);var j=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var B=(t,e,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of y(e))!N.call(t,i)&&i!=="default"&&d(t,i,{get:()=>e[i],enumerable:!(s=k(e,i))||s.enumerable});return t},T=t=>B(S(d(t!=null?g(C(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);import*as n from"react";var f=A(()=>{});var u=j((z,c)=>{f();(function(){"use strict";var t={}.hasOwnProperty,e="[native code]";function s(){for(var i=[],r=0;r<arguments.length;r++){var o=arguments[r];if(!!o){var a=typeof o;if(a==="string"||a==="number")i.push(o);else if(Array.isArray(o)){if(o.length){var m=s.apply(null,o);m&&i.push(m)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){i.push(o.toString());continue}for(var l in o)t.call(o,l)&&o[l]&&i.push(l)}}}return i.join(" ")}typeof c!="undefined"&&c.exports?(s.default=s,c.exports=s):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return s}):window.classNames=s})()});f();var x=T(u());import{AvatarText as O}from"../AvatarText/index.js";import{Badge as v}from"../Badge/index.js";import{Button as p}from"../Button/index.js";import{Text as P}from"../Text/index.js";function D({avatarSrc:t,avatarAlt:e="",username:s,time:i,content:r,isMine:o,isAuthor:a,isLiked:m,likeCount:l=0,onClickLike:b,onClickEdit:h,onClickReply:w}){return n.createElement("div",{className:"flex w-[720px] flex-col gap-3 overflow-hidden break-words"},n.createElement("div",{className:"flex flex-row items-start gap-2"},n.createElement(O,{src:t,alt:e,mainText:s,subText:i}),a&&n.createElement(v,{color:"outline",text:"\uC791\uC131\uC790",className:"ml-1"}),o&&n.createElement(v,{color:"outline",text:"\uB0B4\uB313\uAE00"})),n.createElement(P,{size:"body2",text:r,weight:"medium"}),n.createElement("div",{className:"flex flex-row items-center gap-4"},n.createElement(p,{text:`\uC88B\uC544\uC694 ${l}`,variant:"text",className:(0,x.default)("px-0",{"[&>p]:text-color-system_200 [&>p]:dark:text-color-system_200":m}),onClick:b}),n.createElement(p,{text:"\uB2F5\uAE00\uB2EC\uAE30",variant:"text",className:"px-0",onClick:w}),n.createElement(p,{text:"\uC218\uC815\uD558\uAE30",variant:"text",className:"px-0",onClick:h})))}export{D as Comment};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

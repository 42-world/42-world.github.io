var S=Object.create;var p=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var H=Object.getPrototypeOf,M=Object.prototype.hasOwnProperty;var T=e=>p(e,"__esModule",{value:!0});var j=(e,t)=>()=>(e&&(t=e(e=0)),t);var A=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var E=(e,t,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of k(t))!M.call(e,n)&&n!=="default"&&p(e,n,{get:()=>t[n],enumerable:!(o=_(t,n))||o.enumerable});return e},L=e=>E(T(p(e!=null?S(H(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);import*as a from"react";var u=j(()=>{});var v=A((D,c)=>{u();(function(){"use strict";var e={}.hasOwnProperty,t="[native code]";function o(){for(var n=[],l=0;l<arguments.length;l++){var r=arguments[l];if(!!r){var i=typeof r;if(i==="string"||i==="number")n.push(r);else if(Array.isArray(r)){if(r.length){var d=o.apply(null,r);d&&n.push(d)}}else if(i==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){n.push(r.toString());continue}for(var s in r)e.call(r,s)&&r[s]&&n.push(s)}}}return n.join(" ")}typeof c!="undefined"&&c.exports?(o.default=o,c.exports=o):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return o}):window.classNames=o})()});u();var b=L(v());import{forwardRef as O,useId as z}from"react";import{useControllableState as $}from"./useControllableState.js";import{Text as g}from"../Text/index.js";var Q=O(({id:e,label:t,value:o,defaultValue:n,subLabel:l,variant:r,required:i,rightAddon:d,hasError:s,maxLength:f,onValueChange:h,...y},w)=>{let m=z(),[x,N]=$({state:o,defaultState:n!=null?n:"",onChange:h}),C=I=>{N(I.target.value)};return a.createElement("div",{className:"flex flex-col space-y-2"},a.createElement("div",{className:"flex w-full"},t&&a.createElement("label",{htmlFor:e!=null?e:m,className:(0,b.default)("before:mr-1 text-sm leading-[1.8] font-normal text-text-secondary dark:text-text-secondary_dark",{'before:content-["*"]':i})},t),f?a.createElement(g,{className:"ml-auto",text:`(${x.length}/${f})`,size:"body2",weight:"regular",color:"secondary"}):null),a.createElement("div",{className:(0,b.default)("flex items-center w-full rounded-lg px-4",{"border border-solid border-border-primary bg-bg-primary_alpha_0 focus-within:border-color-blue_200":r==="outline","bg-bg-secondary dark:bg-bg-secondary_dark":r==="filled","border-color-red focus-within:border-color-red":s})},a.createElement("input",{ref:w,id:e!=null?e:m,className:"w-full h-[44px] bg-transparent focus:outline-none text-base font-normal leading-[1.5] text-text-primary dark:text-text-primary_dark placeholder:text-text-tertiary dark:placeholder:text-text-tertiary_dark",value:x,onChange:C,maxLength:f,...y}),d&&a.createElement("span",{className:"flex"},d)),l&&a.createElement(g,{text:l,size:"body2",weight:"regular",color:s?"red_200":"secondary"}))});export{Q as Input};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

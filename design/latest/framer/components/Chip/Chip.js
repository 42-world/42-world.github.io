var y=Object.create;var p=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var b=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty;var g=e=>p(e,"__esModule",{value:!0});var _=(e,t)=>()=>(e&&(t=e(e=0)),t);var w=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var S=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of x(t))!h.call(e,i)&&i!=="default"&&p(e,i,{get:()=>t[i],enumerable:!(r=v(t,i))||r.enumerable});return e},k=e=>S(g(p(e!=null?y(b(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);import*as n from"react";var s=_(()=>{});var u=w((O,a)=>{s();(function(){"use strict";var e={}.hasOwnProperty,t="[native code]";function r(){for(var i=[],l=0;l<arguments.length;l++){var o=arguments[l];if(!!o){var f=typeof o;if(f==="string"||f==="number")i.push(o);else if(Array.isArray(o)){if(o.length){var m=r.apply(null,o);m&&i.push(m)}}else if(f==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){i.push(o.toString());continue}for(var c in o)e.call(o,c)&&o[c]&&i.push(c)}}}return i.join(" ")}typeof a!="undefined"&&a.exports?(r.default=r,a.exports=r):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return r}):window.classNames=r})()});s();var d=k(u());import{Icon as N}from"../Icon/index.js";import{Text as j}from"../Text/index.js";function I({icon:e,text:t,isSelected:r}){return n.createElement("div",{className:(0,d.default)("w-fit h-8 flex flex-row items-center rounded-lg select-none group",t?"px-3":"px-2",r?"bg-bg-secondary dark:bg-bg-secondary_dark":"bg-bg-tertiary_alpha_0 dark:bg-bg-primary_alpha_0_dark")},e&&n.createElement(N,{svg:e,className:(0,d.default)("mr-2  transition-[fill] group-hover:fill-color-system_200",r?"fill-text-primary dark:fill-text-primary_dark":"fill-text-secondary dark:fill-text-secondary_dark")}),t&&n.createElement(j,{text:t,size:"body2",weight:"medium",color:r?"primary":"secondary",className:"transition-colors group-hover:text-color-system_200"}))}export{I as Chip};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

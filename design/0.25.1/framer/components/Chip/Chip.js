var y=Object.create;var p=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty;var g=e=>p(e,"__esModule",{value:!0});var _=(e,t)=>()=>(e&&(t=e(e=0)),t);var w=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var k=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of x(t))!b.call(e,i)&&i!=="default"&&p(e,i,{get:()=>t[i],enumerable:!(r=v(t,i))||r.enumerable});return e},N=e=>k(g(p(e!=null?y(h(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);import*as n from"react";var s=_(()=>{});var u=w((A,a)=>{s();(function(){"use strict";var e={}.hasOwnProperty,t="[native code]";function r(){for(var i=[],l=0;l<arguments.length;l++){var o=arguments[l];if(!!o){var f=typeof o;if(f==="string"||f==="number")i.push(o);else if(Array.isArray(o)){if(o.length){var d=r.apply(null,o);d&&i.push(d)}}else if(f==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){i.push(o.toString());continue}for(var c in o)e.call(o,c)&&o[c]&&i.push(c)}}}return i.join(" ")}typeof a!="undefined"&&a.exports?(r.default=r,a.exports=r):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return r}):window.classNames=r})()});s();var m=N(u());import{Icon as S}from"../Icon/index.js";import{Text as j}from"../Text/index.js";function I({icon:e,text:t,isSelected:r}){return n.createElement("div",{className:(0,m.default)("group flex h-8 w-fit select-none flex-row items-center rounded-lg duration-200 ease-out active:scale-92",t?"px-3":"px-2",r?"bg-bg-secondary dark:bg-bg-secondary_dark":"bg-bg-tertiary_alpha_0 dark:bg-bg-primary_alpha_0_dark")},e&&n.createElement(S,{svg:e,className:(0,m.default)("mr-2  transition-[fill] group-hover:fill-color-system_200",r?"fill-text-primary dark:fill-text-primary_dark":"fill-text-secondary dark:fill-text-secondary_dark")}),t&&n.createElement(j,{text:t,size:"body2",weight:"medium",color:r?"primary":"secondary",className:"transition-colors group-hover:text-color-system_200"}))}export{I as Chip};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

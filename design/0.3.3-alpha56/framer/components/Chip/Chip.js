var x=Object.create;var l=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var b=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty;var g=e=>l(e,"__esModule",{value:!0});var _=(e,t)=>()=>(e&&(t=e(e=0)),t);var S=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var k=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of y(t))!h.call(e,s)&&s!=="default"&&l(e,s,{get:()=>t[s],enumerable:!(n=v(t,s))||n.enumerable});return e},w=e=>k(g(l(e!=null?x(b(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);import*as i from"react";var o=_(()=>{});var u=S((O,a)=>{o();(function(){"use strict";var e={}.hasOwnProperty,t="[native code]";function n(){for(var s=[],f=0;f<arguments.length;f++){var r=arguments[f];if(!!r){var p=typeof r;if(p==="string"||p==="number")s.push(r);else if(Array.isArray(r)){if(r.length){var m=n.apply(null,r);m&&s.push(m)}}else if(p==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){s.push(r.toString());continue}for(var c in r)e.call(r,c)&&r[c]&&s.push(c)}}}return s.join(" ")}typeof a!="undefined"&&a.exports?(n.default=n,a.exports=n):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return n}):window.classNames=n})()});o();var d=w(u());function P({children:e,text:t,selected:n}){return i.createElement("div",{className:(0,d.default)("w-fit h-8 flex flex-row items-center rounded-lg select-none",t?"px-3":"px-2",n?"bg-bg-secondary dark:bg-bg-secondary_dark":"bg-bg-tertiary_alpha_0 dark:bg-bg-primary_alpha_0_dark")},i.createElement("div",{className:(0,d.default)([{hidden:!e},"mr-2"])},e),i.createElement("span",{className:(0,d.default)("text-sm font-medium",n?"text-text-primary dark:text-text-primary_dark":"text-text-secondary dark:text-text-secondary_dark")},t))}export{P as Chip};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var v=Object.create;var p=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty;var b=e=>p(e,"__esModule",{value:!0});var j=(e,t)=>()=>(e&&(t=e(e=0)),t);var y=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var A=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of x(t))!S.call(e,i)&&i!=="default"&&p(e,i,{get:()=>t[i],enumerable:!(n=h(t,i))||n.enumerable});return e},N=e=>A(b(p(e!=null?v(w(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);import*as u from"react";var o=j(()=>{});var d=y((g,r)=>{o();(function(){"use strict";var e={}.hasOwnProperty,t="[native code]";function n(){for(var i=[],f=0;f<arguments.length;f++){var s=arguments[f];if(!!s){var c=typeof s;if(c==="string"||c==="number")i.push(s);else if(Array.isArray(s)){if(s.length){var l=n.apply(null,s);l&&i.push(l)}}else if(c==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){i.push(s.toString());continue}for(var a in s)e.call(s,a)&&s[a]&&i.push(a)}}}return i.join(" ")}typeof r!="undefined"&&r.exports?(n.default=n,r.exports=n):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return n}):window.classNames=n})()});o();var m=N(d());function C({src:e,alt:t="",size:n="40px"}){return u.createElement("img",{src:e,alt:t,className:(0,m.default)("rounded-full object-cover",{"h-10 w-10":n==="40px","h-16 w-16":n==="64px"})})}export{C as Avatar};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var cr=Object.create;var tt=Object.defineProperty;var pr=Object.getOwnPropertyDescriptor;var mr=Object.getOwnPropertyNames;var gr=Object.getPrototypeOf,ur=Object.prototype.hasOwnProperty;var br=t=>tt(t,"__esModule",{value:!0});var fr=(t,r)=>()=>(t&&(r=t(t=0)),r);var xr=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports);var wr=(t,r,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of mr(r))!ur.call(t,i)&&i!=="default"&&tt(t,i,{get:()=>r[i],enumerable:!(o=pr(r,i))||o.enumerable});return t},z=t=>wr(br(tt(t!=null?cr(gr(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);import*as e from"react";var n=fr(()=>{});var _=xr((Yr,D)=>{n();(function(){"use strict";var t={}.hasOwnProperty,r="[native code]";function o(){for(var i=[],a=0;a<arguments.length;a++){var s=arguments[a];if(!!s){var l=typeof s;if(l==="string"||l==="number")i.push(s);else if(Array.isArray(s)){if(s.length){var d=o.apply(null,s);d&&i.push(d)}}else if(l==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){i.push(s.toString());continue}for(var c in s)t.call(s,c)&&s[c]&&i.push(c)}}}return i.join(" ")}typeof D!="undefined"&&D.exports?(o.default=o,D.exports=o):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return o}):window.classNames=o})()});n();n();var ft="43da39888eb53c52c3e835ce02db4272dcbd44da931ead2bc8ddcb938e64ef1e",yr=`@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css');

*,
::before,
::after{
  box-sizing:border-box;
  border-width:0;
  border-style:solid;
  border-color:#e5e7eb;
}

::before,
::after{
  --tw-content:'';
}

html{
  line-height:1.5;
  -webkit-text-size-adjust:100%;
  -moz-tab-size:4;
  -o-tab-size:4;
     tab-size:4;
  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings:normal;
  font-variation-settings:normal;
}

body{
  margin:0;
  line-height:inherit;
}

hr{
  height:0;
  color:inherit;
  border-top-width:1px;
}

abbr:where([title]){
  -webkit-text-decoration:underline dotted;
          text-decoration:underline dotted;
}

h1,
h2,
h3,
h4,
h5,
h6{
  font-size:inherit;
  font-weight:inherit;
}

a{
  color:inherit;
  text-decoration:inherit;
}

b,
strong{
  font-weight:bolder;
}

code,
kbd,
samp,
pre{
  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size:1em;
}

small{
  font-size:80%;
}

sub,
sup{
  font-size:75%;
  line-height:0;
  position:relative;
  vertical-align:baseline;
}

sub{
  bottom:-0.25em;
}

sup{
  top:-0.5em;
}

table{
  text-indent:0;
  border-color:inherit;
  border-collapse:collapse;
}

button,
input,
optgroup,
select,
textarea{
  font-family:inherit;
  font-size:100%;
  font-weight:inherit;
  line-height:inherit;
  color:inherit;
  margin:0;
  padding:0;
}

button,
select{
  text-transform:none;
}

button,
[type='button'],
[type='reset'],
[type='submit']{
  -webkit-appearance:button;
  background-color:transparent;
  background-image:none;
}

:-moz-focusring{
  outline:auto;
}

:-moz-ui-invalid{
  box-shadow:none;
}

progress{
  vertical-align:baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button{
  height:auto;
}

[type='search']{
  -webkit-appearance:textfield;
  outline-offset:-2px;
}

::-webkit-search-decoration{
  -webkit-appearance:none;
}

::-webkit-file-upload-button{
  -webkit-appearance:button;
  font:inherit;
}

summary{
  display:list-item;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre{
  margin:0;
}

fieldset{
  margin:0;
  padding:0;
}

legend{
  padding:0;
}

ol,
ul,
menu{
  list-style:none;
  margin:0;
  padding:0;
}

textarea{
  resize:vertical;
}

input::-moz-placeholder, textarea::-moz-placeholder{
  opacity:1;
  color:#9ca3af;
}

input::placeholder,
textarea::placeholder{
  opacity:1;
  color:#9ca3af;
}

button,
[role="button"]{
  cursor:pointer;
}

:disabled{
  cursor:default;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object{
  display:block;
  vertical-align:middle;
}

img,
video{
  max-width:100%;
  height:auto;
}

[hidden]{
  display:none;
}

html,
  body{
  font-family:Pretendard Variable;
}

*, ::before, ::after{
  --tw-border-spacing-x:0;
  --tw-border-spacing-y:0;
  --tw-translate-x:0;
  --tw-translate-y:0;
  --tw-rotate:0;
  --tw-skew-x:0;
  --tw-skew-y:0;
  --tw-scale-x:1;
  --tw-scale-y:1;
  --tw-pan-x:;
  --tw-pan-y:;
  --tw-pinch-zoom:;
  --tw-scroll-snap-strictness:proximity;
  --tw-gradient-from-position:;
  --tw-gradient-via-position:;
  --tw-gradient-to-position:;
  --tw-ordinal:;
  --tw-slashed-zero:;
  --tw-numeric-figure:;
  --tw-numeric-spacing:;
  --tw-numeric-fraction:;
  --tw-ring-inset:;
  --tw-ring-offset-width:0px;
  --tw-ring-offset-color:#fff;
  --tw-ring-color:rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow:0 0 #0000;
  --tw-ring-shadow:0 0 #0000;
  --tw-shadow:0 0 #0000;
  --tw-shadow-colored:0 0 #0000;
  --tw-blur:;
  --tw-brightness:;
  --tw-contrast:;
  --tw-grayscale:;
  --tw-hue-rotate:;
  --tw-invert:;
  --tw-saturate:;
  --tw-sepia:;
  --tw-drop-shadow:;
  --tw-backdrop-blur:;
  --tw-backdrop-brightness:;
  --tw-backdrop-contrast:;
  --tw-backdrop-grayscale:;
  --tw-backdrop-hue-rotate:;
  --tw-backdrop-invert:;
  --tw-backdrop-opacity:;
  --tw-backdrop-saturate:;
  --tw-backdrop-sepia:;
}

::backdrop{
  --tw-border-spacing-x:0;
  --tw-border-spacing-y:0;
  --tw-translate-x:0;
  --tw-translate-y:0;
  --tw-rotate:0;
  --tw-skew-x:0;
  --tw-skew-y:0;
  --tw-scale-x:1;
  --tw-scale-y:1;
  --tw-pan-x:;
  --tw-pan-y:;
  --tw-pinch-zoom:;
  --tw-scroll-snap-strictness:proximity;
  --tw-gradient-from-position:;
  --tw-gradient-via-position:;
  --tw-gradient-to-position:;
  --tw-ordinal:;
  --tw-slashed-zero:;
  --tw-numeric-figure:;
  --tw-numeric-spacing:;
  --tw-numeric-fraction:;
  --tw-ring-inset:;
  --tw-ring-offset-width:0px;
  --tw-ring-offset-color:#fff;
  --tw-ring-color:rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow:0 0 #0000;
  --tw-ring-shadow:0 0 #0000;
  --tw-shadow:0 0 #0000;
  --tw-shadow-colored:0 0 #0000;
  --tw-blur:;
  --tw-brightness:;
  --tw-contrast:;
  --tw-grayscale:;
  --tw-hue-rotate:;
  --tw-invert:;
  --tw-saturate:;
  --tw-sepia:;
  --tw-drop-shadow:;
  --tw-backdrop-blur:;
  --tw-backdrop-brightness:;
  --tw-backdrop-contrast:;
  --tw-backdrop-grayscale:;
  --tw-backdrop-hue-rotate:;
  --tw-backdrop-invert:;
  --tw-backdrop-opacity:;
  --tw-backdrop-saturate:;
  --tw-backdrop-sepia:;
}

.mx-4{
  margin-left:1rem;
  margin-right:1rem;
}

.ml-1{
  margin-left:0.25rem;
}

.ml-3{
  margin-left:0.75rem;
}

.ml-auto{
  margin-left:auto;
}

.mr-2{
  margin-right:0.5rem;
}

.mt-3{
  margin-top:0.75rem;
}

.line-clamp-1{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:1;
}

.inline-block{
  display:inline-block;
}

.flex{
  display:flex;
}

.aspect-16\\/10{
  aspect-ratio:16 / 10;
}

.aspect-square{
  aspect-ratio:1 / 1;
}

.aspect-video{
  aspect-ratio:16 / 9;
}

.h-10{
  height:2.5rem;
}

.h-16{
  height:4rem;
}

.h-4{
  height:1rem;
}

.h-6{
  height:1.5rem;
}

.h-8{
  height:2rem;
}

.h-\\[1px\\]{
  height:1px;
}

.h-\\[44px\\]{
  height:44px;
}

.w-10{
  width:2.5rem;
}

.w-16{
  width:4rem;
}

.w-4{
  width:1rem;
}

.w-6{
  width:1.5rem;
}

.w-\\[278px\\]{
  width:278px;
}

.w-\\[540px\\]{
  width:540px;
}

.w-\\[720px\\]{
  width:720px;
}

.w-fit{
  width:-moz-fit-content;
  width:fit-content;
}

.w-full{
  width:100%;
}

.flex-1{
  flex:1 1 0%;
}

.cursor-pointer{
  cursor:pointer;
}

.select-none{
  -webkit-user-select:none;
     -moz-user-select:none;
          user-select:none;
}

.flex-row{
  flex-direction:row;
}

.flex-col{
  flex-direction:column;
}

.items-start{
  align-items:flex-start;
}

.items-center{
  align-items:center;
}

.justify-center{
  justify-content:center;
}

.gap-1{
  gap:0.25rem;
}

.gap-2{
  gap:0.5rem;
}

.gap-3{
  gap:0.75rem;
}

.gap-4{
  gap:1rem;
}

.space-y-2 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse:0;
  margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom:calc(0.5rem * var(--tw-space-y-reverse));
}

.overflow-hidden{
  overflow:hidden;
}

.break-words{
  overflow-wrap:break-word;
}

.rounded{
  border-radius:0.25rem;
}

.rounded-2xl{
  border-radius:1rem;
}

.rounded-3xl{
  border-radius:1.5rem;
}

.rounded-full{
  border-radius:9999px;
}

.rounded-lg{
  border-radius:0.5rem;
}

.border{
  border-width:1px;
}

.border-0{
  border-width:0px;
}

.border-solid{
  border-style:solid;
}

.border-border-primary{
  --tw-border-opacity:1;
  border-color:rgb(209 213 219 / var(--tw-border-opacity));
}

.border-border-secondary{
  --tw-border-opacity:1;
  border-color:rgb(243 244 246 / var(--tw-border-opacity));
}

.border-border-secondary_dark{
  --tw-border-opacity:1;
  border-color:rgb(38 38 38 / var(--tw-border-opacity));
}

.border-color-red{
  --tw-border-opacity:1;
  border-color:rgb(255 59 48 / var(--tw-border-opacity));
}

.bg-bg-primary_alpha_0{
  background-color:#FFFFFF00;
}

.bg-bg-primary_dark{
  --tw-bg-opacity:1;
  background-color:rgb(10 10 10 / var(--tw-bg-opacity));
}

.bg-bg-secondary{
  --tw-bg-opacity:1;
  background-color:rgb(244 245 246 / var(--tw-bg-opacity));
}

.bg-bg-secondary_dark{
  --tw-bg-opacity:1;
  background-color:rgb(20 20 20 / var(--tw-bg-opacity));
}

.bg-bg-tertiary_alpha_0{
  background-color:#E3E3E300;
}

.bg-border-primary{
  --tw-bg-opacity:1;
  background-color:rgb(209 213 219 / var(--tw-bg-opacity));
}

.bg-border-primary_dark{
  --tw-bg-opacity:1;
  background-color:rgb(82 82 82 / var(--tw-bg-opacity));
}

.bg-border-secondary{
  --tw-bg-opacity:1;
  background-color:rgb(243 244 246 / var(--tw-bg-opacity));
}

.bg-border-secondary_dark{
  --tw-bg-opacity:1;
  background-color:rgb(38 38 38 / var(--tw-bg-opacity));
}

.bg-color-blue_200{
  --tw-bg-opacity:1;
  background-color:rgb(56 189 248 / var(--tw-bg-opacity));
}

.bg-color-brown{
  --tw-bg-opacity:1;
  background-color:rgb(162 132 94 / var(--tw-bg-opacity));
}

.bg-color-cyan{
  --tw-bg-opacity:1;
  background-color:rgb(50 173 230 / var(--tw-bg-opacity));
}

.bg-color-indigo{
  --tw-bg-opacity:1;
  background-color:rgb(88 86 214 / var(--tw-bg-opacity));
}

.bg-color-mint{
  --tw-bg-opacity:1;
  background-color:rgb(0 199 190 / var(--tw-bg-opacity));
}

.bg-color-pink{
  --tw-bg-opacity:1;
  background-color:rgb(255 45 85 / var(--tw-bg-opacity));
}

.bg-color-system_200{
  --tw-bg-opacity:1;
  background-color:rgb(56 189 248 / var(--tw-bg-opacity));
}

.bg-color-yellow{
  --tw-bg-opacity:1;
  background-color:rgb(255 204 0 / var(--tw-bg-opacity));
}

.bg-transparent{
  background-color:transparent;
}

.bg-none{
  background-image:none;
}

.fill-black{
  fill:#000;
}

.fill-color-white{
  fill:#FFFFFF;
}

.fill-text-primary{
  fill:#000000;
}

.fill-text-secondary{
  fill:#737373;
}

.fill-yellow-400{
  fill:#facc15;
}

.object-cover{
  -o-object-fit:cover;
     object-fit:cover;
}

.p-2{
  padding:0.5rem;
}

.px-0{
  padding-left:0px;
  padding-right:0px;
}

.px-2{
  padding-left:0.5rem;
  padding-right:0.5rem;
}

.px-3{
  padding-left:0.75rem;
  padding-right:0.75rem;
}

.px-4{
  padding-left:1rem;
  padding-right:1rem;
}

.py-4{
  padding-top:1rem;
  padding-bottom:1rem;
}

.py-\\[3px\\]{
  padding-top:3px;
  padding-bottom:3px;
}

.pl-4{
  padding-left:1rem;
}

.text-left{
  text-align:left;
}

.text-center{
  text-align:center;
}

.text-right{
  text-align:right;
}

.text-2xl{
  font-size:1.5rem;
  line-height:2rem;
}

.text-4xl{
  font-size:2.25rem;
  line-height:2.5rem;
}

.text-base{
  font-size:1rem;
  line-height:1.5rem;
}

.text-lg{
  font-size:1.125rem;
  line-height:1.75rem;
}

.text-sm{
  font-size:0.875rem;
  line-height:1.25rem;
}

.text-xs{
  font-size:0.75rem;
  line-height:1rem;
}

.font-medium{
  font-weight:500;
}

.font-normal{
  font-weight:400;
}

.font-semibold{
  font-weight:600;
}

.leading-\\[1\\.5\\]{
  line-height:1.5;
}

.leading-\\[1\\.8\\]{
  line-height:1.8;
}

.leading-normal{
  line-height:1.5;
}

.text-black{
  --tw-text-opacity:1;
  color:rgb(0 0 0 / var(--tw-text-opacity));
}

.text-blue-300{
  --tw-text-opacity:1;
  color:rgb(147 197 253 / var(--tw-text-opacity));
}

.text-blue-500{
  --tw-text-opacity:1;
  color:rgb(59 130 246 / var(--tw-text-opacity));
}

.text-blue-700{
  --tw-text-opacity:1;
  color:rgb(29 78 216 / var(--tw-text-opacity));
}

.text-color-system_200{
  --tw-text-opacity:1;
  color:rgb(56 189 248 / var(--tw-text-opacity));
}

.text-green-300{
  --tw-text-opacity:1;
  color:rgb(134 239 172 / var(--tw-text-opacity));
}

.text-green-500{
  --tw-text-opacity:1;
  color:rgb(34 197 94 / var(--tw-text-opacity));
}

.text-green-700{
  --tw-text-opacity:1;
  color:rgb(21 128 61 / var(--tw-text-opacity));
}

.text-indigo-300{
  --tw-text-opacity:1;
  color:rgb(165 180 252 / var(--tw-text-opacity));
}

.text-indigo-500{
  --tw-text-opacity:1;
  color:rgb(99 102 241 / var(--tw-text-opacity));
}

.text-indigo-700{
  --tw-text-opacity:1;
  color:rgb(67 56 202 / var(--tw-text-opacity));
}

.text-lime-300{
  --tw-text-opacity:1;
  color:rgb(190 242 100 / var(--tw-text-opacity));
}

.text-lime-500{
  --tw-text-opacity:1;
  color:rgb(132 204 22 / var(--tw-text-opacity));
}

.text-lime-700{
  --tw-text-opacity:1;
  color:rgb(77 124 15 / var(--tw-text-opacity));
}

.text-orange-300{
  --tw-text-opacity:1;
  color:rgb(253 186 116 / var(--tw-text-opacity));
}

.text-orange-500{
  --tw-text-opacity:1;
  color:rgb(249 115 22 / var(--tw-text-opacity));
}

.text-orange-700{
  --tw-text-opacity:1;
  color:rgb(194 65 12 / var(--tw-text-opacity));
}

.text-red-300{
  --tw-text-opacity:1;
  color:rgb(252 165 165 / var(--tw-text-opacity));
}

.text-red-500{
  --tw-text-opacity:1;
  color:rgb(239 68 68 / var(--tw-text-opacity));
}

.text-red-700{
  --tw-text-opacity:1;
  color:rgb(185 28 28 / var(--tw-text-opacity));
}

.text-sky-300{
  --tw-text-opacity:1;
  color:rgb(125 211 252 / var(--tw-text-opacity));
}

.text-sky-500{
  --tw-text-opacity:1;
  color:rgb(14 165 233 / var(--tw-text-opacity));
}

.text-sky-700{
  --tw-text-opacity:1;
  color:rgb(3 105 161 / var(--tw-text-opacity));
}

.text-text-primary{
  --tw-text-opacity:1;
  color:rgb(0 0 0 / var(--tw-text-opacity));
}

.text-text-primary_dark{
  --tw-text-opacity:1;
  color:rgb(255 255 255 / var(--tw-text-opacity));
}

.text-text-secondary{
  --tw-text-opacity:1;
  color:rgb(115 115 115 / var(--tw-text-opacity));
}

.text-text-tertiary{
  --tw-text-opacity:1;
  color:rgb(181 181 181 / var(--tw-text-opacity));
}

.text-white{
  --tw-text-opacity:1;
  color:rgb(255 255 255 / var(--tw-text-opacity));
}

.text-yellow-300{
  --tw-text-opacity:1;
  color:rgb(253 224 71 / var(--tw-text-opacity));
}

.text-yellow-500{
  --tw-text-opacity:1;
  color:rgb(234 179 8 / var(--tw-text-opacity));
}

.text-yellow-700{
  --tw-text-opacity:1;
  color:rgb(161 98 7 / var(--tw-text-opacity));
}

.outline-none{
  outline:2px solid transparent;
  outline-offset:2px;
}

.outline{
  outline-style:solid;
}

.transition{
  transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration:150ms;
}

.transition-\\[fill\\]{
  transition-property:fill;
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration:150ms;
}

.transition-all{
  transition-property:all;
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration:150ms;
}

.transition-colors{
  transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration:150ms;
}

.transition-gap{
  transition-property:gap;
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration:150ms;
}

.transition-spacing{
  transition-property:margin, padding;
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration:150ms;
}

.transition-transform{
  transition-property:transform;
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration:150ms;
}

.duration-300{
  transition-duration:300ms;
}

.ease-in-out{
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
}

.ease-out{
  transition-timing-function:cubic-bezier(0, 0, 0.2, 1);
}

.placeholder\\:text-text-tertiary::-moz-placeholder{
  --tw-text-opacity:1;
  color:rgb(181 181 181 / var(--tw-text-opacity));
}

.placeholder\\:text-text-tertiary::placeholder{
  --tw-text-opacity:1;
  color:rgb(181 181 181 / var(--tw-text-opacity));
}

.before\\:mr-1::before{
  content:var(--tw-content);
  margin-right:0.25rem;
}

.before\\:content-\\[\\"\\*\\"\\]::before{
  --tw-content:"*";
  content:var(--tw-content);
}

.focus-within\\:border-color-blue_200:focus-within{
  --tw-border-opacity:1;
  border-color:rgb(56 189 248 / var(--tw-border-opacity));
}

.focus-within\\:border-color-red:focus-within{
  --tw-border-opacity:1;
  border-color:rgb(255 59 48 / var(--tw-border-opacity));
}

.focus-within\\:border-color-system_200:focus-within{
  --tw-border-opacity:1;
  border-color:rgb(56 189 248 / var(--tw-border-opacity));
}

.hover\\:gap-2:hover{
  gap:0.5rem;
}

.hover\\:border-color-system_200:hover{
  --tw-border-opacity:1;
  border-color:rgb(56 189 248 / var(--tw-border-opacity));
}

.hover\\:bg-color-system_300:hover{
  --tw-bg-opacity:1;
  background-color:rgb(2 132 199 / var(--tw-bg-opacity));
}

.focus\\:outline-none:focus{
  outline:2px solid transparent;
  outline-offset:2px;
}

.active\\:scale-95:active{
  --tw-scale-x:.95;
  --tw-scale-y:.95;
  transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\\:mt-5{
  margin-top:1.25rem;
}

.group:hover .group-hover\\:mt-\\[-8px\\]{
  margin-top:-8px;
}

.group:hover .group-hover\\:fill-color-system_200{
  fill:#38BDF8;
}

.group:hover .group-hover\\:text-color-system_200{
  --tw-text-opacity:1;
  color:rgb(56 189 248 / var(--tw-text-opacity));
}

:is(.dark .dark\\:border-border-primary_dark){
  --tw-border-opacity:1;
  border-color:rgb(82 82 82 / var(--tw-border-opacity));
}

:is(.dark .dark\\:border-border-secondary_dark){
  --tw-border-opacity:1;
  border-color:rgb(38 38 38 / var(--tw-border-opacity));
}

:is(.dark .dark\\:bg-bg-primary){
  --tw-bg-opacity:1;
  background-color:rgb(255 255 255 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:bg-bg-primary_alpha_0_dark){
  background-color:#00000000;
}

:is(.dark .dark\\:bg-bg-secondary_dark){
  --tw-bg-opacity:1;
  background-color:rgb(20 20 20 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:bg-border-primary_dark){
  --tw-bg-opacity:1;
  background-color:rgb(82 82 82 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:bg-border-secondary_dark){
  --tw-bg-opacity:1;
  background-color:rgb(38 38 38 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:fill-text-primary_dark){
  fill:#FFFFFF;
}

:is(.dark .dark\\:fill-text-secondary_dark){
  fill:#BABABA;
}

:is(.dark .dark\\:fill-white){
  fill:#fff;
}

:is(.dark .dark\\:text-text-primary){
  --tw-text-opacity:1;
  color:rgb(0 0 0 / var(--tw-text-opacity));
}

:is(.dark .dark\\:text-text-primary_dark){
  --tw-text-opacity:1;
  color:rgb(255 255 255 / var(--tw-text-opacity));
}

:is(.dark .dark\\:text-text-secondary_dark){
  --tw-text-opacity:1;
  color:rgb(186 186 186 / var(--tw-text-opacity));
}

:is(.dark .dark\\:text-text-tertiary_dark){
  --tw-text-opacity:1;
  color:rgb(122 122 122 / var(--tw-text-opacity));
}

:is(.dark .dark\\:placeholder\\:text-text-tertiary_dark)::-moz-placeholder{
  --tw-text-opacity:1;
  color:rgb(122 122 122 / var(--tw-text-opacity));
}

:is(.dark .dark\\:placeholder\\:text-text-tertiary_dark)::placeholder{
  --tw-text-opacity:1;
  color:rgb(122 122 122 / var(--tw-text-opacity));
}

:is(.dark .hover\\:dark\\:border-color-system_200):hover{
  --tw-border-opacity:1;
  border-color:rgb(56 189 248 / var(--tw-border-opacity));
}

.\\[\\&\\>p\\]\\:text-color-system_200>p{
  --tw-text-opacity:1;
  color:rgb(56 189 248 / var(--tw-text-opacity));
}

:is(.dark .\\[\\&\\>p\\]\\:dark\\:text-color-system_200)>p{
  --tw-text-opacity:1;
  color:rgb(56 189 248 / var(--tw-text-opacity));
}
`;(function(){if(!document.getElementById(ft)){var t=document.createElement("style");t.id=ft,t.textContent=yr,document.head.appendChild(t)}})();n();n();n();var xt=z(_());function q({src:t,alt:r="",size:o="40px"}){return e.createElement("img",{src:t,alt:r,className:(0,xt.default)("rounded-full object-cover",{"w-10 h-10":o==="40px","w-16 h-16":o==="64px"})})}n();n();var wt=z(_());n();n();var hr={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-normal",body2:"text-sm leading-normal",small:"text-xs leading-normal"},vr={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},kr={left:"text-left",right:"text-right",center:"text-center"},Tr={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function p({className:t,text:r,size:o="body1",weight:i="regular",align:a="left",color:s="primary"}){return e.createElement("p",{className:`font-display
        ${hr[o]}
        ${vr[i]}
        ${kr[a]}
        ${Tr[s]}
        ${t}
        `},r)}function J({src:t,alt:r="",size:o="40px",mainText:i,subText:a}){return e.createElement("div",{className:(0,wt.default)("flex flex-row",{"gap-3":o==="40px","gap-4":o==="64px"})},e.createElement(q,{src:t,alt:r,size:o}),e.createElement("div",{className:"flex flex-col items-start justify-center"},e.createElement(p,{text:i,size:o==="64px"?"heading3":"body2",weight:"medium"}),a&&e.createElement(p,{text:a,size:o==="64px"?"body2":"small",color:"secondary"})))}n();n();n();n();var yt=z(_());function j({src:t,alt:r="",width:o,rounded:i="16px",ratio:a="16:9"}){let s={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[a],l={"8px":"rounded-lg","16px":"rounded-2xl"}[i];return e.createElement("img",{src:t,alt:r,style:{width:o},className:(0,yt.default)(s,l,"object-cover")})}function ht({imageSrc:t,imageAlt:r,primary:o="",secondary:i="",detail:a}){return e.createElement("div",{className:"w-[278px] flex flex-col group"},e.createElement("div",{className:"group-hover:mt-[-8px] transition-spacing ease-in-out duration-300"},e.createElement(j,{src:t,alt:r,width:278,ratio:"16:9"})),e.createElement("div",{className:"mt-3 group-hover:mt-5 transition-spacing ease-in-out duration-300"},e.createElement(p,{text:`${o} \xB7 ${i}`,size:"body2",weight:"regular",color:"secondary"})),a&&e.createElement(p,{text:a,size:"body1",weight:"medium",color:"primary",className:"line-clamp-1"}))}n();n();var rt=z(_());n();n();function w({svg:t,size:r="medium",className:o,...i}){let a={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[r]||{width:24,height:24};return e.createElement(t,{viewBox:"0 0 24 24",width:a.width,height:a.height,className:o!=null?o:"fill-black dark:fill-white",...i})}function vt({icon:t,text:r,isSelected:o}){return e.createElement("div",{className:(0,rt.default)("w-fit h-8 flex flex-row items-center rounded-lg select-none group",r?"px-3":"px-2",o?"bg-bg-secondary dark:bg-bg-secondary_dark":"bg-bg-tertiary_alpha_0 dark:bg-bg-primary_alpha_0_dark")},t&&e.createElement(w,{svg:t,className:(0,rt.default)("mr-2  transition-[fill] group-hover:fill-color-system_200",o?"fill-text-primary dark:fill-text-primary_dark":"fill-text-secondary dark:fill-text-secondary_dark")}),r&&e.createElement(p,{text:r,size:"body2",weight:"medium",color:o?"primary":"secondary",className:"transition-colors group-hover:text-color-system_200"}))}n();n();var $t=z(_());n();n();var it=z(_());n();n();function kt(){for(var t=0,r,o,i="";t<arguments.length;)(r=arguments[t++])&&(o=Tt(r))&&(i&&(i+=" "),i+=o);return i}function Tt(t){if(typeof t=="string")return t;for(var r,o="",i=0;i<t.length;i++)t[i]&&(r=Tt(t[i]))&&(o&&(o+=" "),o+=r);return o}n();n();n();var et="-";function _t(t){var r=Cr(t),o=t.conflictingClassGroups,i=t.conflictingClassGroupModifiers,a=i===void 0?{}:i;function s(d){var c=d.split(et);return c[0]===""&&c.length!==1&&c.shift(),Ct(c,r)||_r(d)}function l(d,c){var m=o[d]||[];return c&&a[d]?[].concat(m,a[d]):m}return{getClassGroupId:s,getConflictingClassGroupIds:l}}function Ct(t,r){var l;if(t.length===0)return r.classGroupId;var o=t[0],i=r.nextPart.get(o),a=i?Ct(t.slice(1),i):void 0;if(a)return a;if(r.validators.length!==0){var s=t.join(et);return(l=r.validators.find(function(d){var c=d.validator;return c(s)}))==null?void 0:l.classGroupId}}var zt=/^\[(.+)\]$/;function _r(t){if(zt.test(t)){var r=zt.exec(t)[1],o=r==null?void 0:r.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}}function Cr(t){var r=t.theme,o=t.prefix,i={nextPart:new Map,validators:[]},a=Sr(Object.entries(t.classGroups),o);return a.forEach(function(s){var l=s[0],d=s[1];nt(d,i,l,r)}),i}function nt(t,r,o,i){t.forEach(function(a){if(typeof a=="string"){var s=a===""?r:St(r,a);s.classGroupId=o;return}if(typeof a=="function"){if(zr(a)){nt(a(i),r,o,i);return}r.validators.push({validator:a,classGroupId:o});return}Object.entries(a).forEach(function(l){var d=l[0],c=l[1];nt(c,St(r,d),o,i)})})}function St(t,r){var o=t;return r.split(et).forEach(function(i){o.nextPart.has(i)||o.nextPart.set(i,{nextPart:new Map,validators:[]}),o=o.nextPart.get(i)}),o}function zr(t){return t.isThemeGetter}function Sr(t,r){return r?t.map(function(o){var i=o[0],a=o[1],s=a.map(function(l){return typeof l=="string"?r+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(function(d){var c=d[0],m=d[1];return[r+c,m]})):l});return[i,s]}):t}n();function It(t){if(t<1)return{get:function(){},set:function(){}};var r=0,o=new Map,i=new Map;function a(s,l){o.set(s,l),r++,r>t&&(r=0,i=o,o=new Map)}return{get:function(l){var d=o.get(l);if(d!==void 0)return d;if((d=i.get(l))!==void 0)return a(l,d),d},set:function(l,d){o.has(l)?o.set(l,d):a(l,d)}}}n();var ot="!";function At(t){var r=t.separator||":",o=r.length===1,i=r[0],a=r.length;return function(l){for(var d=[],c=0,m=0,b,g=0;g<l.length;g++){var x=l[g];if(c===0){if(x===i&&(o||l.slice(g,g+a)===r)){d.push(l.slice(m,g)),m=g+a;continue}if(x==="/"){b=g;continue}}x==="["?c++:x==="]"&&c--}var y=d.length===0?l:l.substring(m),v=y.startsWith(ot),h=v?y.substring(1):y,k=b&&b>m?b-m:void 0;return{modifiers:d,hasImportantModifier:v,baseClassName:h,maybePostfixModifierPosition:k}}}function Mt(t){if(t.length<=1)return t;var r=[],o=[];return t.forEach(function(i){var a=i[0]==="[";a?(r.push.apply(r,o.sort().concat([i])),o=[]):o.push(i)}),r.push.apply(r,o.sort()),r}function Nt(t){return{cache:It(t.cacheSize),splitModifiers:At(t),..._t(t)}}n();var Ir=/\s+/;function Gt(t,r){var o=r.splitModifiers,i=r.getClassGroupId,a=r.getConflictingClassGroupIds,s=new Set;return t.trim().split(Ir).map(function(l){var d=o(l),c=d.modifiers,m=d.hasImportantModifier,b=d.baseClassName,g=d.maybePostfixModifierPosition,x=i(g?b.substring(0,g):b),y=Boolean(g);if(!x){if(!g)return{isTailwindClass:!1,originalClassName:l};if(x=i(b),!x)return{isTailwindClass:!1,originalClassName:l};y=!1}var v=Mt(c).join(":"),h=m?v+ot:v;return{isTailwindClass:!0,modifierId:h,classGroupId:x,originalClassName:l,hasPostfixModifier:y}}).reverse().filter(function(l){if(!l.isTailwindClass)return!0;var d=l.modifierId,c=l.classGroupId,m=l.hasPostfixModifier,b=d+c;return s.has(b)?!1:(s.add(b),a(c,m).forEach(function(g){return s.add(d+g)}),!0)}).reverse().map(function(l){return l.originalClassName}).join(" ")}function Pt(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var i,a,s,l=d;function d(m){var b=r[0],g=r.slice(1),x=g.reduce(function(y,v){return v(y)},b());return i=Nt(x),a=i.cache.get,s=i.cache.set,l=c,c(m)}function c(m){var b=a(m);if(b)return b;var g=Gt(m,i);return s(m,g),g}return function(){return l(kt.apply(null,arguments))}}n();n();function u(t){var r=function(i){return i[t]||[]};return r.isThemeGetter=!0,r}n();var jt=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ar=/^\d+\/\d+$/,Mr=new Set(["px","full","screen"]),Nr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Gr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|^0$/,Pr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function C(t){return N(t)||Mr.has(t)||Ar.test(t)||I(t)}function I(t){return P(t,"length",jr)}function Bt(t){return P(t,"size",Ht)}function Lt(t){return P(t,"position",Ht)}function Et(t){return P(t,"url",Br)}function F(t){return P(t,"number",N)}function N(t){return!Number.isNaN(Number(t))}function Vt(t){return t.endsWith("%")&&N(t.slice(0,-1))}function B(t){return Ot(t)||P(t,"number",Ot)}function f(t){return jt.test(t)}function L(){return!0}function A(t){return Nr.test(t)}function Ft(t){return P(t,"",Lr)}function P(t,r,o){var i=jt.exec(t);return i?i[1]?i[1]===r:o(i[2]):!1}function jr(t){return Gr.test(t)}function Ht(){return!1}function Br(t){return t.startsWith("url(")}function Ot(t){return Number.isInteger(Number(t))}function Lr(t){return Pr.test(t)}function Wt(){var t=u("colors"),r=u("spacing"),o=u("blur"),i=u("brightness"),a=u("borderColor"),s=u("borderRadius"),l=u("borderSpacing"),d=u("borderWidth"),c=u("contrast"),m=u("grayscale"),b=u("hueRotate"),g=u("invert"),x=u("gap"),y=u("gradientColorStops"),v=u("gradientColorStopPositions"),h=u("inset"),k=u("margin"),M=u("opacity"),S=u("padding"),st=u("saturate"),Y=u("scale"),lt=u("sepia"),dt=u("skew"),ct=u("space"),pt=u("translate"),Z=function(){return["auto","contain","none"]},K=function(){return["auto","hidden","clip","visible","scroll"]},Q=function(){return["auto",r]},mt=function(){return["",C]},W=function(){return["auto",N,f]},gt=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},$=function(){return["solid","dashed","dotted","double","none"]},ut=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},R=function(){return["start","end","center","between","around","evenly","stretch"]},E=function(){return["","0",f]},bt=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},V=function(){return[N,F]},U=function(){return[N,f]};return{cacheSize:500,theme:{colors:[L],spacing:[C],blur:["none","",A,I],brightness:V(),borderColor:[t],borderRadius:["none","","full",A,I],borderSpacing:[r],borderWidth:mt(),contrast:V(),grayscale:E(),hueRotate:U(),invert:E(),gap:[r],gradientColorStops:[t],gradientColorStopPositions:[Vt,I],inset:Q(),margin:Q(),opacity:V(),padding:[r],saturate:V(),scale:V(),sepia:E(),skew:U(),space:[r],translate:[r]},classGroups:{aspect:[{aspect:["auto","square","video",f]}],container:["container"],columns:[{columns:[A]}],"break-after":[{"break-after":bt()}],"break-before":[{"break-before":bt()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(gt(),[f])}],overflow:[{overflow:K()}],"overflow-x":[{"overflow-x":K()}],"overflow-y":[{"overflow-y":K()}],overscroll:[{overscroll:Z()}],"overscroll-x":[{"overscroll-x":Z()}],"overscroll-y":[{"overscroll-y":Z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",B]}],basis:[{basis:Q()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",f]}],grow:[{grow:E()}],shrink:[{shrink:E()}],order:[{order:["first","last","none",B]}],"grid-cols":[{"grid-cols":[L]}],"col-start-end":[{col:["auto",{span:[B]},f]}],"col-start":[{"col-start":W()}],"col-end":[{"col-end":W()}],"grid-rows":[{"grid-rows":[L]}],"row-start-end":[{row:["auto",{span:[B]},f]}],"row-start":[{"row-start":W()}],"row-end":[{"row-end":W()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",f]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",f]}],gap:[{gap:[x]}],"gap-x":[{"gap-x":[x]}],"gap-y":[{"gap-y":[x]}],"justify-content":[{justify:["normal"].concat(R())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(R(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(R(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[S]}],px:[{px:[S]}],py:[{py:[S]}],ps:[{ps:[S]}],pe:[{pe:[S]}],pt:[{pt:[S]}],pr:[{pr:[S]}],pb:[{pb:[S]}],pl:[{pl:[S]}],m:[{m:[k]}],mx:[{mx:[k]}],my:[{my:[k]}],ms:[{ms:[k]}],me:[{me:[k]}],mt:[{mt:[k]}],mr:[{mr:[k]}],mb:[{mb:[k]}],ml:[{ml:[k]}],"space-x":[{"space-x":[ct]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ct]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",r]}],"min-w":[{"min-w":["min","max","fit",C]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[A]},A,I]}],h:[{h:[r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",C]}],"max-h":[{"max-h":[r,"min","max","fit"]}],"font-size":[{text:["base",A,I]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",F]}],"font-family":[{font:[L]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",I]}],"line-clamp":[{"line-clamp":["none",N,F]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",C]}],"list-image":[{"list-image":["none",f]}],"list-style-type":[{list:["none","disc","decimal",f]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[M]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[M]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat($(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",C]}],"underline-offset":[{"underline-offset":["auto",C]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[r]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",I]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",f]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[M]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(gt(),[Lt])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Bt]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Et]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[M]}],"border-style":[{border:[].concat($(),["hidden"])}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[M]}],"divide-style":[{divide:$()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:[""].concat($())}],"outline-offset":[{"outline-offset":[C]}],"outline-w":[{outline:[C]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:mt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[M]}],"ring-offset-w":[{"ring-offset":[C]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",A,Ft]}],"shadow-color":[{shadow:[L]}],opacity:[{opacity:[M]}],"mix-blend":[{"mix-blend":ut()}],"bg-blend":[{"bg-blend":ut()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[i]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",A,f]}],grayscale:[{grayscale:[m]}],"hue-rotate":[{"hue-rotate":[b]}],invert:[{invert:[g]}],saturate:[{saturate:[st]}],sepia:[{sepia:[lt]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[m]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[b]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[M]}],"backdrop-saturate":[{"backdrop-saturate":[st]}],"backdrop-sepia":[{"backdrop-sepia":[lt]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",f]}],duration:[{duration:U()}],ease:[{ease:["linear","in","out","in-out",f]}],delay:[{delay:U()}],animate:[{animate:["none","spin","ping","pulse","bounce",f]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[Y]}],"scale-x":[{"scale-x":[Y]}],"scale-y":[{"scale-y":[Y]}],rotate:[{rotate:[B,f]}],"translate-x":[{"translate-x":[pt]}],"translate-y":[{"translate-y":[pt]}],"skew-x":[{"skew-x":[dt]}],"skew-y":[{"skew-y":[dt]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",f]}],accent:[{accent:["auto",t]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",f]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[r]}],"scroll-mx":[{"scroll-mx":[r]}],"scroll-my":[{"scroll-my":[r]}],"scroll-ms":[{"scroll-ms":[r]}],"scroll-me":[{"scroll-me":[r]}],"scroll-mt":[{"scroll-mt":[r]}],"scroll-mr":[{"scroll-mr":[r]}],"scroll-mb":[{"scroll-mb":[r]}],"scroll-ml":[{"scroll-ml":[r]}],"scroll-p":[{"scroll-p":[r]}],"scroll-px":[{"scroll-px":[r]}],"scroll-py":[{"scroll-py":[r]}],"scroll-ps":[{"scroll-ps":[r]}],"scroll-pe":[{"scroll-pe":[r]}],"scroll-pt":[{"scroll-pt":[r]}],"scroll-pr":[{"scroll-pr":[r]}],"scroll-pb":[{"scroll-pb":[r]}],"scroll-pl":[{"scroll-pl":[r]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",f]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[C,F]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}n();var H=Pt(Wt);var Er={indigo:"bg-color-indigo",yellow:"bg-color-yellow",mint:"bg-color-mint",cyan:"bg-color-cyan",blue:"bg-color-blue_200",pink:"bg-color-pink",brown:"bg-color-brown",mono:"bg-bg-primary_dark dark:bg-bg-primary",outline:"bg-none"};function O({color:t="outline",text:r,className:o}){return e.createElement("div",{className:H((0,it.default)("px-2 py-[3px] w-fit rounded-lg",Er[t],{"border border-border-secondary dark:border-border-secondary_dark":t==="outline"}),o)},e.createElement(p,{text:r,size:"small",className:(0,it.default)({"text-text-primary_dark dark:text-text-primary":t==="mono"}),color:t==="outline"?"secondary":"white"}))}n();n();var at=z(_());var Vr={primary:"bg-color-system_200 border-0 hover:bg-color-system_300",secondary:"border-border-primary dark:border-border-primary_dark hover:border-color-system_200 hover:dark:border-color-system_200",text:"border-0"};function G({variant:t="primary",text:r,icon:o,className:i,...a}){return e.createElement("button",{className:H(`group h-8 flex flex-row items-center gap-2 rounded-2xl border border-solid transition-all duration-300 active:scale-95 ${Vr[t]}`,o&&!r?"px-2":"px-3",i),...a},o&&e.createElement(w,{svg:o,size:"small",className:(0,at.default)(t==="primary"?"fill-color-white":"fill-text-secondary dark:fill-text-secondary_dark","transition-colors duration-300",{"group-hover:fill-color-system_200":t!=="primary"})}),r&&e.createElement(p,{text:r,size:"body2",weight:"medium",color:t==="primary"?"white":"secondary",className:(0,at.default)("transition-colors duration-300",{"group-hover:text-color-system_200":t!=="primary"})}))}function Ut({avatarSrc:t,avatarAlt:r="",username:o,time:i,content:a,isMine:s,isAuthor:l,isLiked:d,numOfLikes:c=0,onClickLike:m,onClickEdit:b,onClickReply:g}){return e.createElement("div",{className:"flex flex-col gap-3 w-[720px] overflow-hidden break-words"},e.createElement("div",{className:"flex flex-row items-start gap-2"},e.createElement(J,{src:t,alt:r,mainText:o,subText:i}),l&&e.createElement(O,{color:"outline",text:"\uC791\uC131\uC790",className:"ml-1"}),s&&e.createElement(O,{color:"outline",text:"\uB0B4\uB313\uAE00"})),e.createElement(p,{size:"body2",text:a}),e.createElement("div",{className:"flex flex-row items-center gap-4"},e.createElement(G,{text:`\uC88B\uC544\uC694 ${c}`,variant:"text",className:(0,$t.default)("px-0",{"[&>p]:text-color-system_200 [&>p]:dark:text-color-system_200":d}),onClick:m}),e.createElement(G,{text:"\uB2F5\uAE00\uB2EC\uAE30",variant:"text",className:"px-0 mx-4",onClick:g}),e.createElement(G,{text:"\uC218\uC815\uD558\uAE30",variant:"text",className:"px-0",onClick:b})))}n();n();var Dt=z(_());function X({variant:t="primary",className:r,...o}){return e.createElement("div",{className:(0,Dt.default)("w-full h-[1px]",{"bg-border-primary dark:bg-border-primary_dark":t==="primary","bg-border-secondary dark:bg-border-secondary_dark":t==="secondary"},r),...o})}n();n();n();var qt=t=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...t},e.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}));function Jt({href:t,text:r}){return e.createElement("a",{className:"flex flex-row items-center gap-1 hover:gap-2 transition-gap duration-300 ease-in-out text-text-primary dark:text-text-primary_dark",href:t},e.createElement(p,{text:r,size:"heading3",weight:"semibold"}),e.createElement(w,{svg:qt,className:"w-6 h-6"}))}n();n();var Yt=z(_());import{forwardRef as Or,useId as Wr}from"react";n();import{useCallback as Fr,useState as Hr}from"react";var Xt=({state:t,defaultState:r,onChange:o})=>{let[i,a]=Hr(typeof r=="function"?r():r),s=t!=null,l=s?t:i,d=Fr(c=>{typeof c=="function"&&(c=c()),s||a(c),o==null||o(c)},[]);return[l,d]};var Zt=Or(({id:t,label:r,value:o,defaultValue:i,subLabel:a,variant:s,rightAddon:l,hasError:d,maxLength:c,onValueChange:m,...b},g)=>{let x=Wr(),[y,v]=Xt({state:o,defaultState:i!=null?i:"",onChange:m}),h=k=>{v(k.target.value)};return e.createElement("div",{className:"flex flex-col space-y-2"},e.createElement("div",{className:"flex w-full"},r&&e.createElement("label",{htmlFor:t!=null?t:x,className:'before:content-["*"] before:mr-1 text-sm leading-[1.8] font-normal text-text-secondary dark:text-text-secondary_dark'},r),c&&e.createElement(p,{className:"ml-auto",text:`(${y.length}/${c})`,size:"body2",weight:"regular",color:"secondary"})),e.createElement("div",{className:(0,Yt.default)("flex items-center w-full rounded-lg px-4",{"border border-solid border-border-primary bg-bg-primary_alpha_0 focus-within:border-color-blue_200":s==="outline","bg-bg-secondary dark:bg-bg-secondary_dark":s==="filled","border-color-red focus-within:border-color-red":d})},e.createElement("input",{ref:g,id:t!=null?t:x,className:"w-full h-[44px] bg-transparent focus:outline-none text-base font-normal leading-[1.5] text-text-primary dark:text-text-primary_dark placeholder:text-text-tertiary dark:placeholder:text-text-tertiary_dark",value:y,onChange:h,maxLength:c,...b}),l&&e.createElement("span",{className:"flex"},l)),a&&e.createElement(p,{text:a,size:"body2",weight:"regular",color:d?"red_200":"secondary"}))});n();n();n();var Kt=t=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...t},e.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"}));n();var Qt=t=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...t},e.createElement("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}));var $r=(t,r)=>e.createElement("div",{className:"flex flex-row items-center gap-1"},t&&e.createElement(p,{text:t,size:"body2",weight:"medium",color:"secondary"}),t&&r&&"\xB7",r&&e.createElement(p,{text:r,size:"body2",weight:"regular",color:"secondary"}));function Rt({title:t,thumbnailSrc:r,secondaryTextFirst:o,secondaryTextSecond:i,commentCnt:a,likeCnt:s,hasBorder:l=!0}){return e.createElement("div",{className:"w-[540px] cursor-pointer active:scale-95 transition-transform duration-300 ease-out select-none"},e.createElement("div",{className:"flex flex-row items-center py-4"},r&&e.createElement(j,{src:r,alt:t,width:85,ratio:"16:9"}),e.createElement("div",{className:"ml-3 flex-1"},$r(o,i),e.createElement(p,{text:t,size:"body1",weight:"medium",color:"primary"})),e.createElement("div",{className:"flex flex-row items-center gap-2 text-text-secondary dark:text-text-secondary_dark"},a&&e.createElement("div",{className:"flex flex-row items-center gap-2"},e.createElement(w,{svg:Kt,className:"w-4 h-4"}),e.createElement(p,{text:a.toString(),size:"body2",weight:"regular",color:"secondary"})),s&&e.createElement("div",{className:"flex flex-row items-center gap-2"},e.createElement(w,{svg:Qt,className:"w-4 h-4"}),e.createElement(p,{text:s.toString(),size:"body2",weight:"regular",color:"secondary"})))),l&&e.createElement(X,{variant:"secondary"}))}n();n();n();var tr=t=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...t},e.createElement("path",{d:"M9 11.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37a9.974 9.974 0 0 0 10.41 3.97c.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"}));n();var rr=t=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...t},e.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}));function er({text:t}){return e.createElement("div",{className:"flex flex-row items-center"},e.createElement(p,{text:`This is Samp3le! "${t}"`,size:"heading3",weight:"semibold",className:"mr-2"}),e.createElement(w,{svg:rr,size:"xsmall"}),e.createElement(w,{svg:tr,size:"medium",className:"inline-block dark:fill-white fill-yellow-400 ml-1"}))}n();n();n();var nr=t=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...t},e.createElement("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}));var or=z(_());import{forwardRef as Ur}from"react";var ir=Ur(({className:t,...r},o)=>e.createElement("div",{className:"flex items-center rounded-3xl p-2 pl-4 border-border-secondary border focus-within:border-color-system_200"},e.createElement("input",{ref:o,className:(0,or.default)("flex-1 w-full h-8 text-sm bg-transparent outline-none",t),...r}),e.createElement(G,{type:"submit",icon:nr,"aria-label":"\uB313\uAE00 \uC791\uC131"})));n();n();var ar=z(_());var Dr={medium:"body1",small:"body2",xsmall:"small"};function sr({svg:t,size:r="medium",text:o}){return e.createElement("div",{className:(0,ar.default)("flex flex-row items-center",{"gap-2":r!=="xsmall","gap-1":r==="xsmall"})},e.createElement(w,{svg:t,size:r,className:"fill-text-secondary dark:fill-text-secondary_dark"}),e.createElement(p,{text:o,size:Dr[r],color:"secondary"}))}n();n();function lr(){return typeof window=="undefined"?!1:window.document.documentElement.classList.contains("dark")}n();function Ao(){return typeof window=="undefined"?!1:window.matchMedia("(prefers-color-scheme: dark)").matches}n();function dr(t){if(typeof window=="undefined")return;let r=window.document;t==="dark"?r.documentElement.classList.add("dark"):r.documentElement.classList.remove("dark")}n();function jo(){typeof window!="undefined"&&dr(lr()?"light":"dark")}export{q as Avatar,J as AvatarText,O as Badge,G as Button,ht as Card,vt as Chip,Ut as Comment,ir as CommentInput,X as Divider,Jt as GroupHeader,w as Icon,sr as IconText,Zt as Input,Rt as ListItem,er as Sample,p as Text,j as Thumbnail,lr as isDarkTheme,Ao as isOsDarkTheme,dr as setTheme,jo as toggleTheme};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

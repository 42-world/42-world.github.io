import*as e from"react";import{Divider as l}from"../Divider/index.js";import{Thumbnail as m}from"../Thumbnail/index.js";import{Text as i}from"./../Text/Text.js";var c=(r,t)=>e.createElement("div",{className:"flex flex-row items-center gap-1"},r&&e.createElement(i,{text:r,size:"body2",weight:"regular",color:"secondary"}),r&&t&&e.createElement(i,{text:"\xB7",size:"body2",weight:"regular",color:"secondary"}),t&&e.createElement(i,{text:t,size:"body2",weight:"regular",color:"secondary"}));function u({title:r,thumbnailSrc:t,secondaryTextFirst:o,secondaryTextSecond:s,hasBorder:n=!0,rightAddon:a,onClick:d}){return e.createElement("div",{className:"w-full cursor-pointer active:scale-95 transition-transform duration-300 ease-out select-none",onClick:d},e.createElement("div",{className:"flex flex-row justify-between items-center py-4"},e.createElement("div",{className:"flex flex-row items-center"},t&&e.createElement(m,{src:t,alt:r,width:85,ratio:"16:9"}),e.createElement("div",{className:"ml-3 flex-1"},c(o,s),e.createElement(i,{text:r,size:"body1",weight:"medium",color:"primary"}))),e.createElement("div",{className:"flex flex-row items-center gap-2 text-text-secondary dark:text-text-secondary_dark"},a)),n&&e.createElement(l,{variant:"secondary"}))}export{u as ListItem};
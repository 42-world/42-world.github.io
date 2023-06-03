import*as e from"react";import{useTheme as n}from"../../context/index.js";var g={heading1:"text-4xl",heading2:"text-2xl",heading3:"text-lg",body1:"text-base",body2:"text-sm",small:"text-xs"},_={regular:"font-light",medium:"font-normal",semibold:"font-semibold"},a={left:"text-left",right:"text-right",center:"text-center"},d={light:{primary:"text-text-primary",secondary:"text-text-secondary",tertiary:"text-text-tertiary",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"},dark:{primary:"text-text-primary_dark",secondary:"text-text-secondary_dark",tertiary:"text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"}};function m({text:t,size:r="body1",weight:i="regular",align:x="left",color:o="primary"}){let l=n();return e.createElement("p",{className:`font-display
        ${g[r]}
        ${_[i]}
        ${a[x]}
        ${d[l][o]}
        `},t)}export{m as Text,a as textAlignConfig,d as textColorConfig,g as textSizeConfig,_ as textWeightConfig};
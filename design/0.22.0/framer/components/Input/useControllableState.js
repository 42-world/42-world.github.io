import*as u from"react";import{useCallback as n,useState as i}from"react";var d=({state:a,defaultState:t,onChange:e})=>{let[r,c]=i(typeof t=="function"?t():t),l=a!=null,s=l?a:r,T=n(o=>{typeof o=="function"&&(o=o(s)),l||c(o),e==null||e(o)},[l,e,s]);return[s,T]};export{d as useControllableState};
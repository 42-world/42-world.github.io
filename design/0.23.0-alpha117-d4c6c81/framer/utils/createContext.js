import*as i from"react";import{useMemo as x}from"react";import{createContext as d,useContext as p}from"react";function m(o,t){let n=d(t);function c(r){let{children:e,...a}=r,u=x(()=>a,Object.values(a));return i.createElement(n.Provider,{value:u},e)}function s(r){let e=p(n);if(e)return e;if(t!==void 0)return t;throw new Error(`${r} \uCEF4\uD3EC\uB10C\uD2B8\uB294 ${o}.Provider \uD558\uC704\uC5D0\uC11C \uC0AC\uC6A9\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.`)}return c.displayName=`${o}.Provider`,[c,s]}export{m as createContext};
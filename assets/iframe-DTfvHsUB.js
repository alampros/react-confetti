const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ReactConfetti.stories-D9xMI_36.js","./index-DlA0hZqf.js","./v4-CQkTLCs1.js","./ReactConfetti-7ETnhRRr.css","./entry-preview-wfr4-9Ya.js","./chunk-XP5HYGXS-BGCqD1aY.js","./entry-preview-docs-BB5JZhLU.js","./index-CHGET4sZ.js","./preview-D0N1Y6iQ.js","./preview-D77C14du.js","./index-DrFu-skq.js","./preview-BWzBA1C2.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const R="modulepreload",T=function(t,_){return new URL(t,_).href},f={},n=function(_,l,u){let e=Promise.resolve();if(l&&l.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),d=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.allSettled(l.map(s=>{if(s=T(s,u),s in f)return;f[s]=!0;const a=s.endsWith(".css"),p=a?'[rel="stylesheet"]':"";if(!!u)for(let O=i.length-1;O>=0;O--){const m=i[O];if(m.href===s&&(!a||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${p}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":R,a||(c.as="script"),c.crossOrigin="",c.href=s,d&&c.setAttribute("nonce",d),document.head.appendChild(c),a)return new Promise((O,m)=>{c.addEventListener("load",O),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})}))}function r(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return e.then(i=>{for(const o of i||[])o.status==="rejected"&&r(o.reason);return _().catch(r)})},{createBrowserChannel:L}=__STORYBOOK_MODULE_CHANNELS__,{addons:S}=__STORYBOOK_MODULE_PREVIEW_API__,E=L({page:"preview"});S.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const P={"./src/stories/ReactConfetti.stories.tsx":async()=>n(()=>import("./ReactConfetti.stories-D9xMI_36.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)};async function y(t){return P[t]()}const{composeConfigs:w,PreviewWeb:h,ClientApi:v}=__STORYBOOK_MODULE_PREVIEW_API__,I=async(t=[])=>{const _=await Promise.all([t[0]??n(()=>import("./entry-preview-wfr4-9Ya.js"),__vite__mapDeps([4,5,1]),import.meta.url),t[1]??n(()=>import("./entry-preview-docs-BB5JZhLU.js"),__vite__mapDeps([6,5,7,1]),import.meta.url),t[2]??n(()=>import("./preview-B2NCHv-s.js"),[],import.meta.url),t[3]??n(()=>import("./preview-D0N1Y6iQ.js"),__vite__mapDeps([8,2]),import.meta.url),t[4]??n(()=>import("./preview-D77C14du.js"),__vite__mapDeps([9,10]),import.meta.url),t[5]??n(()=>import("./preview-DFmD0pui.js"),[],import.meta.url),t[6]??n(()=>import("./preview-CFgKly6U.js"),[],import.meta.url),t[7]??n(()=>import("./preview-BWzBA1C2.js"),__vite__mapDeps([11,10]),import.meta.url),t[8]??n(()=>import("./preview-DGUiP6tS.js"),[],import.meta.url)]);return w(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new h(y,I);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{n as _};

function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire368a;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequire368a=r);var l=r("4vA6L");const i=document.querySelector(".js-form"),u=document.querySelector(".js-container");function s(e,t){e.textContent=t}function a(e,t,n,o){const r=Math.random();return new Promise(((l,i)=>{setTimeout((()=>{r>e?l(t):i(n)}),o)}))}i.addEventListener("submit",(function(t){t.preventDefault();const n=[],o=[],r=u.children.length,{level:{value:i},start:d}=t.currentTarget.elements;d.disabled=!0;for(let t=0;t<r;t+=1){const c=u.children[t];c.textContent="",a(Number(i),"✅","❌",500*t).then((e=>{s(c,e),n.push(e)})).catch((e=>{s(c,e),o.push(e)})).finally((()=>{t===r-1&&(d.disabled=!1);const i=n.length===r,u=o.length===r;i&&e(l).Notify.success("You are WINNER! "),u&&e(l).Notify.failure("You are lose!")}))}}));
//# sourceMappingURL=9-07-games-slots.93e2d91e.js.map
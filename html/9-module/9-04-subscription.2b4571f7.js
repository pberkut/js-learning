/*!
  * Native JavaScript for Bootstrap v4.2.0 (https://thednp.github.io/bootstrap.native/)
  * Copyright 2015-2022 © dnp_theme
  * Licensed under MIT (https://github.com/thednp/bootstrap.native/blob/master/LICENSE)
  */const t={};function e(e){const n=this,{type:s}=e;[...t[s]].forEach((t=>{const[i,r]=t;i===n&&[...r].forEach((t=>{const[n,r]=t;n.apply(i,[e]),r&&r.once&&o(i,s,n,r)}))}))}const n=(n,o,s,i)=>{t[o]||(t[o]=new Map);const r=t[o];r.has(n)||r.set(n,new Map);const c=r.get(n),{size:l}=c;c.set(s,i),l||n.addEventListener(o,e,i)},o=(n,o,s,i)=>{const r=t[o],c=r&&r.get(n),l=c&&c.get(s),{options:a}=void 0!==l?l:{options:i};c&&c.has(s)&&c.delete(s),!r||c&&c.size||r.delete(n),r&&r.size||delete t[o],c&&c.size||n.removeEventListener(o,e,a)},s={on:n,off:o,globalListener:e,registry:t},i="click",r="transitionend",c="transitionProperty";function l(t,e){const n=getComputedStyle(t);return e.includes("--")?n.getPropertyValue(e):n[e]}function a(t){const e=l(t,c),n=l(t,"transitionDuration"),o=n.includes("ms")?1:1e3,s=e&&"none"!==e?parseFloat(n)*o:0;return Number.isNaN(s)?0:s}const d=(t,e)=>t.dispatchEvent(e);function u(t,e){let n=0;const o=new Event(r),s=a(t),i=function(t){const e=l(t,c),n=l(t,"transitionDelay"),o=n.includes("ms")?1:1e3,s=e&&"none"!==e?parseFloat(n)*o:0;return Number.isNaN(s)?0:s}(t);if(s){const c=o=>{o.target===t&&(e.apply(t,[o]),t.removeEventListener(r,c),n=1)};t.addEventListener(r,c),setTimeout((()=>{n||d(t,o)}),s+i+17)}else e.apply(t,[o])}const h=t=>t&&[1,2,3,4,5,6,7,8,9,10,11].some((e=>+t.nodeType===e))||!1,f=t=>t&&"Window"===t.constructor.name||!1,g=t=>t&&9===t.nodeType||!1;function p(t){return g(t)?t:h(t)?t.ownerDocument:f(t)?t.document:window.document}function m(t,e){if(h(t))return t;return(h(e)?e:p()).querySelector(t)}function b(t,e){return t?t.closest(e)||b(t.getRootNode().host,e):null}const $=(t,e)=>Object.assign(t,e);function v(t,e){return t.classList.contains(e)}function w(t,e){t.classList.remove(e)}const y=t=>t&&1===t.nodeType||!1,T=new Map,E={set:(t,e,n)=>{if(!y(t))return;T.has(e)||T.set(e,new Map);T.get(e).set(t,n)},getAllFor:t=>T.get(t)||null,get:(t,e)=>{if(!y(t)||!e)return null;const n=E.getAllFor(e);return t&&n&&n.get(t)||null},remove:(t,e)=>{const n=T.get(e);n&&y(t)&&(n.delete(t),0===n.size&&T.delete(e))}},x=(t,e)=>E.get(t,e);function N(t,e){const n=new CustomEvent(t,{cancelable:!0,bubbles:!0});return"object"==typeof e&&$(n,e),n}const A="fade",P="show",H="data-bs-dismiss",S="alert",D="Alert",k=(t,e)=>t.getAttribute(e);function C(t){return!!["true",!0].includes(t)||!["false",!1].includes(t)&&(""===t||"null"===t?null:""===t||Number.isNaN(+t)?t:+t)}const L=t=>Object.keys(t),M=t=>t.toLowerCase();const I="4.2.0";class R{constructor(t,e){const n=this,o=m(t);if(!o)throw Error(`${n.name} Error: "${t}" is not a valid selector.`);n.options={};const s=E.get(o,n.name);s&&s.dispose(),n.element=o,n.defaults&&L(n.defaults).length&&(n.options=function(t,e,n,o){const s={...t.dataset},i={},r={},c="title";return L(s).forEach((t=>{const e=o&&t.includes(o)?t.replace(o,"").replace(/[A-Z]/,(t=>M(t))):t;r[e]=C(s[t])})),L(n).forEach((t=>{n[t]=C(n[t])})),L(e).forEach((o=>{i[o]=o in n?n[o]:o in r?r[o]:o===c?k(t,c):e[o]})),i}(o,n.defaults,e||{},"bs")),E.set(o,n.name,n)}get version(){return I}get name(){return this.constructor.name}get defaults(){return this.constructor.defaults}dispose(){const t=this;E.remove(t.element,t.name),L(t).forEach((e=>{t[e]=null}))}}const F=`.${S}`,O=`[${H}="${S}"]`,W=t=>x(t,D),B=N(`close.bs.${S}`),z=N(`closed.bs.${S}`);function X(t){const{element:e}=t;j(t),d(e,z),t.dispose(),e.remove()}function j(t,e){const s=e?n:o,{dismiss:r}=t;r&&s(r,i,t.close)}class V extends R{constructor(t){super(t);const e=this,{element:n}=e;e.dismiss=m(O,n),j(e,!0)}get name(){return D}close(t){const e=t?W(b(this,F)):this,{element:n}=e;if(n&&v(n,P)){if(d(n,B),B.defaultPrevented)return;w(n,P),v(n,A)?u(n,(()=>X(e))):X(e)}}dispose(){j(this),super.dispose()}}$(V,{selector:F,init:t=>new V(t),getInstance:W});const Y="aria-pressed",q=(t,e,n)=>t.setAttribute(e,n);function U(t,e){t.classList.add(e)}const G="active",Z="data-bs-toggle",J="Button",K=`[${Z}="button"]`,Q=t=>x(t,J);function _(t,e){(e?n:o)(t.element,i,t.toggle)}class tt extends R{constructor(t){super(t);const e=this,{element:n}=e;e.isActive=v(n,G),q(n,Y,`${!!e.isActive}`),_(e,!0)}get name(){return J}toggle(t){t&&t.preventDefault();const e=t?Q(this):this;if(!e.element)return;const{element:n,isActive:o}=e;if(v(n,"disabled"))return;(o?w:U)(n,G),q(n,Y,o?"false":"true"),e.isActive=v(n,G)}dispose(){_(this),super.dispose()}}$(tt,{selector:K,init:t=>new tt(t),getInstance:Q});const et="mouseenter",nt="mouseleave",ot="keydown",st="ArrowLeft",it="ArrowRight";function rt(t,e){const{width:n,height:o,top:s,right:i,bottom:r,left:c}=t.getBoundingClientRect();let l=1,a=1;if(e&&y(t)){const{offsetWidth:e,offsetHeight:s}=t;l=e>0?Math.round(n)/e:1,a=s>0?Math.round(o)/s:1}return{width:n/l,height:o/a,top:s/a,right:i/l,bottom:r/a,left:c/l,x:c/l,y:s/a}}function ct(t){return p(t).documentElement}const lt=t=>{if(!t||!h(t))return!1;const{top:e,bottom:n}=rt(t),{clientHeight:o}=ct(t);return e<=o&&n>=0},at=t=>"rtl"===ct(t).dir;function dt(t,e){return(h(e)?e:p()).querySelectorAll(t)}function ut(t,e){return(h(e)?e:p()).getElementsByClassName(t)}const ht=new Map,ft=(t,e,n,o)=>{if(y(t))if(o&&o.length){ht.has(t)||ht.set(t,new Map);ht.get(t).set(o,setTimeout(e,n))}else ht.set(t,setTimeout(e,n))},gt=(t,e)=>{if(!y(t))return null;const n=ht.get(t);return e&&e.length&&n&&n.get?n.get(e)||null:n||null},pt=(t,e)=>{if(y(t))if(e&&e.length){const n=ht.get(t);n&&n.get&&(clearTimeout(n.get(e)),n.delete(e),0===n.size&&ht.delete(t))}else clearTimeout(ht.get(t)),ht.delete(t)},mt=t=>t.offsetHeight,bt={passive:!0},$t="data-bs-target",vt="carousel",wt="Carousel",yt="data-bs-parent";function Tt(t){const e=[$t,yt,"data-bs-container","href"],n=p(t);return e.map((e=>{const o=k(t,e);return o?e===yt?b(t,o):m(o,n):null})).filter((t=>t))[0]}const Et=`[data-bs-ride="${vt}"]`,xt=`${vt}-item`,Nt="data-bs-slide-to",At="data-bs-slide",Pt="paused",Ht={pause:"hover",keyboard:!1,touch:!0,interval:5e3},St=t=>x(t,wt);let Dt=0,kt=0,Ct=0;const Lt=N(`slide.bs.${vt}`),Mt=N(`slid.bs.${vt}`);function It(){const t=this,e=St(t);!e||e.isPaused||gt(t,Pt)||U(t,Pt)}function Rt(){const t=St(this);t&&t.isPaused&&!gt(this,Pt)&&t.cycle()}function Ft(t){t.preventDefault();const e=this,n=b(e,Et)||Tt(e),o=St(n);if(!o||o.isAnimating)return;const s=+k(e,Nt);!e||v(e,G)||Number.isNaN(s)||o.to(s)}function Ot(t){t.preventDefault();const e=this,n=b(e,Et)||Tt(e),o=St(n);if(!o||o.isAnimating)return;const s=k(e,At);"next"===s?o.next():"prev"===s&&o.prev()}function Wt({code:t,target:e}){const n=p(e),[o]=[...dt(Et,n)].filter((t=>lt(t))),s=St(o);if(!s||s.isAnimating||/textarea|input/i.test(e.tagName))return;const i=at(o),r=i?st:it;t===(i?it:st)?s.prev():t===r&&s.next()}function Bt(t){const{target:e}=t,n=St(this),{controls:o,indicators:s}=n;[...o,...s].some((t=>t===e||t.contains(e)))||!n||n.isAnimating||n.isTouch||(Dt=t.pageX,this.contains(e)&&(n.isTouch=!0,Vt(n,!0)))}function zt(t){kt=t.pageX}function Xt(t){const{target:e}=t,n=p(e),o=[...dt(Et,n)].map((t=>St(t))).find((t=>t.isTouch));if(!o)return;const{element:s,index:i}=o,r=at(e);return o.isTouch=!1,Vt(o),n.getSelection().toString().length?(Dt=0,kt=0,void(Ct=0)):(Ct=t.pageX,!s.contains(e)||Math.abs(Dt-Ct)<120?(Dt=0,kt=0,void(Ct=0)):(kt<Dt?o.to(i+(r?-1:1)):kt>Dt&&o.to(i+(r?1:-1)),Dt=0,kt=0,void(Ct=0)))}function jt(t,e){const{indicators:n}=t;[...n].forEach((t=>w(t,G))),t.indicators[e]&&U(n[e],G)}function Vt(t,e){const{element:s}=t,i=e?n:o;i(p(s),"pointermove",zt,bt),i(p(s),"pointerup",Xt,bt)}function Yt(t,e){const{element:s,options:r,slides:c,controls:l,indicators:a}=t,{touch:d,pause:u,interval:h,keyboard:f}=r,g=e?n:o;u&&h&&(g(s,et,It),g(s,nt,Rt)),d&&c.length>2&&g(s,"pointerdown",Bt,bt),l.length&&l.forEach((t=>{t&&g(t,i,Ot)})),a.length&&a.forEach((t=>{g(t,i,Ft)})),f&&g(p(s),ot,Wt)}function qt(t){const{slides:e,element:n}=t,o=m(`.${xt}.${G}`,n);return[...e].indexOf(o)}class Ut extends R{constructor(t,e){super(t,e);const n=this,{element:o}=n;n.direction=at(o)?"right":"left",n.index=0,n.isTouch=!1,n.slides=ut(xt,o);const{slides:s}=n;if(s.length<2)return;const i=p(o);n.controls=[...dt(`[${At}]`,o),...dt(`[${At}][${$t}="#${o.id}"]`,i)],n.indicator=m(`.${vt}-indicators`,o),n.indicators=[...n.indicator?dt(`[${Nt}]`,n.indicator):[],...dt(`[${Nt}][${$t}="#${o.id}"]`,i)];const{options:r}=n;n.options.interval=!0===r.interval?Ht.interval:r.interval,qt(n)<0&&(U(s[0],G),n.indicators.length&&jt(n,0)),Yt(n,!0),r.interval&&n.cycle()}get name(){return wt}get defaults(){return Ht}get isPaused(){return v(this.element,Pt)}get isAnimating(){return null!==m(`.${xt}-next,.${xt}-prev`,this.element)}cycle(){const t=this,{element:e,options:n,isPaused:o,index:s}=t;pt(e,vt),o&&(pt(e,Pt),w(e,Pt)),ft(e,(()=>{t.element&&!t.isPaused&&!t.isTouch&&lt(e)&&t.to(s+1)}),n.interval,vt)}pause(){const{element:t,options:e}=this;!this.isPaused&&e.interval&&(U(t,Pt),ft(t,(()=>{}),1,Pt))}next(){const t=this;t.isAnimating||t.to(t.index+1)}prev(){const t=this;t.isAnimating||t.to(t.index-1)}to(t){const e=this,{element:n,slides:o,options:s}=e,i=qt(e),r=at(n);let c=t;if(e.isAnimating||i===c||gt(n,At))return;i<c||0===i&&c===o.length-1?e.direction=r?"right":"left":(i>c||i===o.length-1&&0===c)&&(e.direction=r?"left":"right");const{direction:l}=e;c<0?c=o.length-1:c>=o.length&&(c=0);const h="left"===l?"next":"prev",f="left"===l?"start":"end",g={relatedTarget:o[c],from:i,to:c,direction:l};$(Lt,g),$(Mt,g),d(n,Lt),Lt.defaultPrevented||(e.index=c,jt(e,c),a(o[c])&&v(n,"slide")?ft(n,(()=>{U(o[c],`${xt}-${h}`),mt(o[c]),U(o[c],`${xt}-${f}`),U(o[i],`${xt}-${f}`),u(o[c],(()=>function(t){const{index:e,direction:n,element:o,slides:s,options:i}=t;if(t.isAnimating&&St(o)){const r=qt(t),c="left"===n?"next":"prev",l="left"===n?"start":"end";U(s[e],G),w(s[e],`${xt}-${c}`),w(s[e],`${xt}-${l}`),w(s[r],G),w(s[r],`${xt}-${l}`),d(o,Mt),pt(o,At),p(o).hidden||!i.interval||t.isPaused||t.cycle()}}(e)))}),0,At):(U(o[c],G),w(o[i],G),ft(n,(()=>{pt(n,At),n&&s.interval&&!e.isPaused&&e.cycle(),d(n,Mt)}),0,At)))}dispose(){const t=this,{slides:e}=t,n=["start","end","prev","next"];[...e].forEach(((e,o)=>{v(e,G)&&jt(t,o),n.forEach((t=>w(e,`${xt}-${t}`)))})),Yt(t),super.dispose()}}$(Ut,{selector:Et,init:t=>new Ut(t),getInstance:St});const Gt="aria-expanded",Zt=(t,e)=>{var n;(n=e,Object.entries(n)).forEach((([e,n])=>{if(e.includes("--"))t.style.setProperty(e,n);else{const o={};o[e]=n,$(t.style,o)}}))},Jt="collapsing",Kt="collapse",Qt="Collapse",_t=`.${Kt}`,te=`[${Z}="${Kt}"]`,ee={parent:null},ne=t=>x(t,Qt),oe=N(`show.bs.${Kt}`),se=N(`shown.bs.${Kt}`),ie=N(`hide.bs.${Kt}`),re=N(`hidden.bs.${Kt}`);function ce(t){const{element:e,parent:n,triggers:o}=t;d(e,ie),ie.defaultPrevented||(ft(e,(()=>{}),17),n&&ft(n,(()=>{}),17),Zt(e,{height:`${e.scrollHeight}px`}),w(e,Kt),w(e,P),U(e,Jt),mt(e),Zt(e,{height:"0px"}),u(e,(()=>{pt(e),n&&pt(n),o.forEach((t=>q(t,Gt,"false"))),w(e,Jt),U(e,Kt),Zt(e,{height:""}),d(e,re)})))}function le(t,e){const s=e?n:o,{triggers:r}=t;r.length&&r.forEach((t=>s(t,i,ae)))}function ae(t){const{target:e}=t,n=e&&b(e,te),o=n&&Tt(n),s=o&&ne(o);s&&s.toggle(),n&&"A"===n.tagName&&t.preventDefault()}class de extends R{constructor(t,e){super(t,e);const n=this,{element:o,options:s}=n,i=p(o);n.triggers=[...dt(te,i)].filter((t=>Tt(t)===o)),n.parent=m(s.parent,i)||Tt(o)||null,le(n,!0)}get name(){return Qt}get defaults(){return ee}toggle(){const t=this;v(t.element,P)?t.hide():t.show()}hide(){const{triggers:t,element:e}=this;gt(e)||(ce(this),t.length&&t.forEach((t=>U(t,`${Kt}d`))))}show(){const t=this,{element:e,parent:n,triggers:o}=t;let s,i;n&&(s=[...dt(`.${Kt}.${P}`,n)].find((t=>ne(t))),i=s&&ne(s)),n&&gt(n)||gt(e)||(i&&s!==e&&(ce(i),i.triggers.forEach((t=>{U(t,`${Kt}d`)}))),function(t){const{element:e,parent:n,triggers:o}=t;d(e,oe),oe.defaultPrevented||(ft(e,(()=>{}),17),n&&ft(n,(()=>{}),17),U(e,Jt),w(e,Kt),Zt(e,{height:`${e.scrollHeight}px`}),u(e,(()=>{pt(e),n&&pt(n),o.forEach((t=>q(t,Gt,"true"))),w(e,Jt),U(e,Kt),U(e,P),Zt(e,{height:""}),d(e,se)})))}(t),o.length&&o.forEach((t=>w(t,`${Kt}d`))))}dispose(){le(this),super.dispose()}}$(de,{selector:_t,init:t=>new de(t),getInstance:ne});const ue="focus",he="scroll",fe="resize",ge="ArrowUp",pe="ArrowDown",me="Escape",be=(t,e)=>t.hasAttribute(e),$e=t=>t.focus();function ve(t){return t?g(t)?t.defaultView:h(t)?t.ownerDocument.defaultView:t:window}const we=["dropdown","dropup","dropstart","dropend"],ye="Dropdown",Te="dropdown-menu";function Ee(t){const e=b(t,"A");return y(t)&&(be(t,"href")&&"#"===t.href.slice(-1)||e&&be(e,"href")&&"#"===e.href.slice(-1))}const[xe,Ne,Ae,Pe]=we,He=`[${Z}="${xe}"]`,Se=t=>x(t,ye),De=`${Te}-end`,ke=[xe,Ne],Ce=[Ae,Pe],Le=["A","BUTTON"],Me={offset:5,display:"dynamic"},Ie=N(`show.bs.${xe}`),Re=N(`shown.bs.${xe}`),Fe=N(`hide.bs.${xe}`),Oe=N(`hidden.bs.${xe}`);function We(t){const{element:e,menu:n,parentElement:o,options:s}=t,{offset:i}=s;if("static"===l(n,"position"))return;const r=at(e),c=v(n,De);["margin","top","bottom","left","right"].forEach((t=>{n.style[t]=""}));let a=we.find((t=>v(o,t)))||xe,d={dropdown:[i,0,0],dropup:[0,0,i],dropstart:r?[-1,0,0,i]:[-1,i,0],dropend:r?[-1,i,0]:[-1,0,0,i]};const u={dropdown:{top:"100%"},dropup:{top:"auto",bottom:"100%"},dropstart:r?{left:"100%",right:"auto"}:{left:"auto",right:"100%"},dropend:r?{left:"auto",right:"100%"}:{left:"100%",right:"auto"},menuStart:r?{right:0,left:"auto"}:{right:"auto",left:0},menuEnd:r?{right:"auto",left:0}:{right:0,left:"auto"}},{offsetWidth:h,offsetHeight:f}=n,{clientWidth:g,clientHeight:p}=ct(e),{left:m,top:b,width:w,height:y}=rt(e),T=m-h-i<0,E=m+h+w+i>=g,x=b+f+i>=p,N=b+f+y+i>=p,A=b-f-i<0,P=(!r&&c||r&&!c)&&m+w-h<0,H=(r&&c||!r&&!c)&&m+h>=g;if(Ce.includes(a)&&T&&E&&(a=xe),a===Ae&&(r?E:T)&&(a=Pe),a===Pe&&(r?T:E)&&(a=Ae),a===Ne&&A&&!N&&(a=xe),a===xe&&N&&!A&&(a=Ne),Ce.includes(a)&&x&&$(u[a],{top:"auto",bottom:0}),ke.includes(a)&&(P||H)){let t;P||!H||r||(t={left:"auto",right:0}),P&&!H&&r&&(t={left:0,right:"auto"}),t&&$(u[a],t)}if(d=d[a],Zt(n,{...u[a],margin:`${d.map((t=>t?`${t}px`:t)).join(" ")}`}),ke.includes(a)&&c&&c){Zt(n,u[!r&&P||r&&H?"menuStart":"menuEnd"])}}function Be(t){const{element:e,options:s}=t,r=t.open?n:o,c=p(e);r(c,i,je),r(c,ue,je),r(c,ot,Ye),r(c,"keyup",qe),"dynamic"===s.display&&[he,fe].forEach((t=>{r(ve(e),t,Ue,bt)}))}function ze(t,e){(e?n:o)(t.element,i,Ve)}function Xe(t){const e=[...we,"btn-group","input-group"].map((e=>ut(`${e} ${P}`,p(t)))).find((t=>t.length));return e&&e.length?[...e[0].children].find((t=>be(t,Z))):null}function je(t){const{target:e,type:n}=t;if(!e||!e.closest)return;const o=Xe(e),s=Se(o);if(!s)return;const{parentElement:r,menu:c}=s,l=null!==b(e,He),a=r&&r.contains(e)&&("form"===e.tagName||null!==b(e,"form"));n===i&&Ee(e)&&t.preventDefault(),(n!==ue||e!==o&&e!==c&&!c.contains(e))&&(a||l||s&&s.hide())}function Ve(t){const{target:e}=t,n=Se(this);n&&(n.toggle(),e&&Ee(e)&&t.preventDefault())}function Ye(t){[pe,ge].includes(t.code)&&t.preventDefault()}function qe(t){const{code:e}=t,n=Xe(this),o=n&&Se(n),{activeElement:s}=n&&p(n);if(!o||!s)return;const{menu:i,open:r}=o,c=function(t){return[...t.children].map((t=>{if(t&&Le.includes(t.tagName))return t;const{firstElementChild:e}=t;return e&&Le.includes(e.tagName)?e:null})).filter((t=>t))}(i);if(c&&c.length&&[pe,ge].includes(e)){let t=c.indexOf(s);s===n?t=0:e===ge?t=t>1?t-1:0:e===pe&&(t=t<c.length-1?t+1:t),c[t]&&$e(c[t])}me===e&&r&&(o.toggle(),$e(n))}function Ue(){const t=Xe(this),e=t&&Se(t);e&&e.open&&We(e)}class Ge extends R{constructor(t,e){super(t,e);const n=this,{element:o}=n,{parentElement:s}=o;n.parentElement=s,n.menu=m(`.${Te}`,s),n.open=!1,ze(n,!0)}get name(){return ye}get defaults(){return Me}toggle(){const t=this;t.open?t.hide():t.show()}show(){const t=this,{element:e,open:n,menu:o,parentElement:s}=t;if(n)return;const i=Xe(e),r=i&&Se(i);r&&r.hide(),[Ie,Re].forEach((t=>{t.relatedTarget=e})),d(s,Ie),Ie.defaultPrevented||(U(o,P),U(s,P),q(e,Gt,"true"),We(t),t.open=!n,$e(e),Be(t),d(s,Re))}hide(){const t=this,{element:e,open:n,menu:o,parentElement:s}=t;n&&([Fe,Oe].forEach((t=>{t.relatedTarget=e})),d(s,Fe),Fe.defaultPrevented||(w(o,P),w(s,P),q(e,Gt,"false"),t.open=!n,Be(t),d(s,Oe)))}dispose(){const t=this;t.open&&t.hide(),ze(t),super.dispose()}}$(Ge,{selector:He,init:t=>new Ge(t),getInstance:Se});const Ze="aria-hidden",Je="aria-modal",Ke=(t,e)=>t.removeAttribute(e);function Qe(t){return p(t).body}const _e="modal",tn="Modal",en=t=>t&&"ShadowRoot"===t.constructor.name||!1;const nn=t=>t&&["TABLE","TD","TH"].includes(t.tagName)||!1;function on(t,e){const n=["HTML","BODY"];if(e){let{offsetParent:e}=t;const o=ve(t);for(;e&&(nn(e)||y(e)&&!["sticky","fixed"].includes(l(e,"position")));)e=e.offsetParent;return e&&!n.includes(e.tagName)&&"static"!==l(e,"position")||(e=o),e}const o=[];let{parentNode:s}=t;for(;s&&!n.includes(s.nodeName);)s="HTML"===(i=s).nodeName?i:i.assignedSlot||i.parentNode||en(i)&&i.host||ct(i),en(s)||s.shadowRoot||nn(s)||o.push(s);var i;return o.find(((t,e)=>"relative"!==l(t,"position")&&o.slice(e+1).every((t=>"static"===l(t,"position")))?t:null))||Qe(t)}const sn="sticky-top",rn="position-sticky",cn=t=>[...ut("fixed-top",t),...ut("fixed-bottom",t),...ut(sn,t),...ut(rn,t),...ut("is-fixed",t)];function ln(t){const{clientWidth:e}=ct(t),{innerWidth:n}=ve(t);return Math.abs(n-e)}function an(t,e){const n=Qe(t),o=parseInt(l(n,"paddingRight"),10),s="hidden"===l(n,"overflow")&&o?0:ln(t),i=cn(n);e&&(Zt(n,{overflow:"hidden",paddingRight:`${o+s}px`}),i.length&&i.forEach((t=>{const e=l(t,"paddingRight");if(t.style.paddingRight=`${parseInt(e,10)+s}px`,[sn,rn].some((e=>v(t,e)))){const e=l(t,"marginRight");t.style.marginRight=parseInt(e,10)-s+"px"}})))}function dn(t){if(!t)return null;if("string"==typeof t)return p().createElement(t);const{tagName:e}=t,n={...t},o=dn(e);return delete n.tagName,$(o,n),o}const un="offcanvas",hn="backdrop",fn=`${_e}-${hn}`,gn=`${un}-${hn}`,pn=`.${_e}.${P}`,mn=`.${un}.${P}`,bn=dn("div");function $n(t){return m(`${pn},${mn}`,p(t))}function vn(t){const e=t?fn:gn;[fn,gn].forEach((t=>{w(bn,t)})),U(bn,e)}function wn(t,e,n){vn(n),t.append(bn),e&&U(bn,A)}function yn(){v(bn,P)||(U(bn,P),mt(bn))}function Tn(){w(bn,P)}function En(t){$n(t)||(w(bn,A),bn.remove(),function(t){const e=Qe(t);Zt(e,{paddingRight:"",overflow:""});const n=cn(e);n.length&&n.forEach((t=>{Zt(t,{paddingRight:"",marginRight:""})}))}(t))}function xn(t){return y(t)&&"hidden"!==l(t,"visibility")&&null!==t.offsetParent}const Nn=`.${_e}`,An=`[${Z}="${_e}"]`,Pn=`[${H}="${_e}"]`,Hn=`${_e}-static`,Sn={backdrop:!0,keyboard:!0},Dn=t=>x(t,tn),kn=N(`show.bs.${_e}`),Cn=N(`shown.bs.${_e}`),Ln=N(`hide.bs.${_e}`),Mn=N(`hidden.bs.${_e}`);function In(t){const{element:e}=t,n=ln(e),{clientHeight:o,scrollHeight:s}=ct(e),{clientHeight:i,scrollHeight:r}=e,c=i!==r;if(!c&&n){const t={};t[at(e)?"paddingLeft":"paddingRight"]=`${n}px`,Zt(e,t)}an(e,c||o!==s)}function Rn(t,e){const s=e?n:o,{element:r}=t;s(r,i,Vn),s(ve(r),fe,t.update,bt),s(p(r),ot,jn)}function Fn(t,e){const s=e?n:o,{triggers:r}=t;r.length&&r.forEach((t=>s(t,i,Xn)))}function On(t,e){const{triggers:n,element:o,relatedTarget:s}=t;En(o),Zt(o,{paddingRight:"",display:""}),Rn(t);const i=kn.relatedTarget||n.find(xn);i&&$e(i),e&&e(),Mn.relatedTarget=s,d(o,Mn)}function Wn(t){const{element:e,relatedTarget:n}=t;$e(e),Rn(t,!0),Cn.relatedTarget=n,d(e,Cn)}function Bn(t){const{element:e,hasFade:n}=t;Zt(e,{display:"block"}),In(t),$n(e)||Zt(Qe(e),{overflow:"hidden"}),U(e,P),Ke(e,Ze),q(e,Je,"true"),n?u(e,(()=>Wn(t))):Wn(t)}function zn(t,e){const{element:n,options:o,hasFade:s}=t;o.backdrop&&!e&&s&&v(bn,P)&&!$n(n)?(Tn(),u(bn,(()=>On(t)))):On(t,e)}function Xn(t){const{target:e}=t,n=e&&b(e,An),o=n&&Tt(n),s=o&&Dn(o);n&&"A"===n.tagName&&t.preventDefault(),s.relatedTarget=n,s.toggle()}function jn({code:t,target:e}){const n=m(pn,p(e)),o=n&&Dn(n),{options:s}=o;s.keyboard&&t===me&&v(n,P)&&(o.relatedTarget=null,o.hide())}function Vn(t){const e=this,n=Dn(e);if(!n||gt(e))return;const{options:o,isStatic:s,modalDialog:i}=n,{backdrop:r}=o,{target:c}=t,l=p(e).getSelection().toString().length,d=i.contains(c),h=c&&b(c,Pn);s&&!d?ft(e,(()=>{U(e,Hn),u(i,(()=>function(t){const{element:e,modalDialog:n}=t,o=a(n)+17;w(e,Hn),ft(e,(()=>pt(e)),o)}(n)))}),17):(h||!l&&!s&&!d&&r)&&(n.relatedTarget=h||null,n.hide(),t.preventDefault())}class Yn extends R{constructor(t,e){super(t,e);const n=this,{element:o}=n;n.modalDialog=m(`.${_e}-dialog`,o),n.triggers=[...dt(An,p(o))].filter((t=>Tt(t)===o)),n.isStatic="static"===n.options.backdrop,n.hasFade=v(o,A),n.relatedTarget=null,n.container=on(o),Fn(n,!0),n.update=n.update.bind(n)}get name(){return tn}get defaults(){return Sn}toggle(){const t=this;v(t.element,P)?t.hide():t.show()}show(){const t=this,{element:e,options:n,hasFade:o,relatedTarget:s,container:i}=t,{backdrop:r}=n;let c=0;if(v(e,P))return;if(kn.relatedTarget=s||null,d(e,kn),kn.defaultPrevented)return;const l=$n(e);if(l&&l!==e){(Dn(l)||x(l,"Offcanvas")).hide()}r?(i.contains(bn)?vn(!0):wn(i,o,!0),c=a(bn),yn(),setTimeout((()=>Bn(t)),c)):(Bn(t),l&&v(bn,P)&&Tn())}hide(t){const e=this,{element:n,hasFade:o,relatedTarget:s}=e;v(n,P)&&(Ln.relatedTarget=s||null,d(n,Ln),Ln.defaultPrevented||(w(n,P),q(n,Ze,"true"),Ke(n,Je),o?u(n,(()=>zn(e,t))):zn(e,t)))}update(){v(this.element,P)&&In(this)}dispose(){Fn(this),this.hide((()=>super.dispose()))}}$(Yn,{selector:Nn,init:t=>new Yn(t),getInstance:Dn});const qn="Offcanvas",Un=`.${un}`,Gn=`[${Z}="${un}"]`,Zn=`[${H}="${un}"]`,Jn=`${un}-toggling`,Kn={backdrop:!0,keyboard:!0,scroll:!1},Qn=t=>x(t,qn),_n=N(`show.bs.${un}`),to=N(`shown.bs.${un}`),eo=N(`hide.bs.${un}`),no=N(`hidden.bs.${un}`);function oo(t,e){const s=e?n:o;t.triggers.forEach((t=>s(t,i,co)))}function so(t,e){const s=e?n:o,r=p(t.element);s(r,ot,ao),s(r,i,lo)}function io(t){const{element:e,options:n}=t;n.scroll||(!function(t){const{element:e}=t,{clientHeight:n,scrollHeight:o}=ct(e);an(e,n!==o)}(t),Zt(Qe(e),{overflow:"hidden"})),U(e,Jn),U(e,P),Zt(e,{visibility:"visible"}),u(e,(()=>function(t){const{element:e}=t;w(e,Jn),Ke(e,Ze),q(e,Je,"true"),q(e,"role","dialog"),d(e,to),so(t,!0),$e(e)}(t)))}function ro(t,e){const{element:n,options:o}=t,s=$n(n);n.blur(),!s&&o.backdrop&&v(bn,P)?(Tn(),u(bn,(()=>uo(t,e)))):uo(t,e)}function co(t){const e=b(this,Gn),n=e&&Tt(e),o=n&&Qn(n);o&&(o.relatedTarget=e,o.toggle(),e&&"A"===e.tagName&&t.preventDefault())}function lo(t){const{target:e}=t,n=m(mn,p(e)),o=m(Zn,n),s=Qn(n);if(!s)return;const{options:i,triggers:r}=s,{backdrop:c}=i,l=b(e,Gn),a=p(n).getSelection();bn.contains(e)&&"static"===c||(a&&a.toString().length||!(!n.contains(e)&&c&&(!l||r.includes(e))||o&&o.contains(e))||(s.relatedTarget=o&&o.contains(e)?o:null,s.hide()),l&&"A"===l.tagName&&t.preventDefault())}function ao({code:t,target:e}){const n=m(mn,p(e)),o=Qn(n);o&&o.options.keyboard&&t===me&&(o.relatedTarget=null,o.hide())}function uo(t,e){const{element:n,triggers:o}=t;q(n,Ze,"true"),Ke(n,Je),Ke(n,"role"),Zt(n,{visibility:""});const s=_n.relatedTarget||o.find((t=>xn(t)));s&&$e(s),En(n),d(n,no),w(n,Jn),$n(n)||so(t),e&&e()}class ho extends R{constructor(t,e){super(t,e);const n=this,{element:o}=n;n.triggers=[...dt(Gn,p(o))].filter((t=>Tt(t)===o)),n.container=on(o),n.relatedTarget=null,oo(n,!0)}get name(){return qn}get defaults(){return Kn}toggle(){const t=this;v(t.element,P)?t.hide():t.show()}show(){const t=this,{element:e,options:n,container:o,relatedTarget:s}=t;let i=0;if(v(e,P))return;if(_n.relatedTarget=s,to.relatedTarget=s,d(e,_n),_n.defaultPrevented)return;const r=$n(e);if(r&&r!==e){(Qn(r)||x(r,"Modal")).hide()}n.backdrop?(o.contains(bn)?vn():wn(o,!0),i=a(bn),yn(),setTimeout((()=>io(t)),i)):(io(t),r&&v(bn,P)&&Tn())}hide(t){const e=this,{element:n,relatedTarget:o}=e;v(n,P)&&(eo.relatedTarget=o,no.relatedTarget=o,d(n,eo),eo.defaultPrevented||(U(n,Jn),w(n,P),t?ro(e,t):u(n,(()=>ro(e,t)))))}dispose(){oo(this),this.hide((()=>super.dispose()))}}$(ho,{selector:Un,init:t=>new ho(t),getInstance:Qn});const fo="popover",go="Popover",po="tooltip";function mo(t){const e=t===po;return`<div class="${t}" role="${po}">${(e?"":`<h3 class="${t}-header"></h3>`)+`<div class="${t}-arrow"></div>`+`<div class="${e?`${t}-inner`:`${t}-body`}"></div>`}</div>`}const bo=t=>t&&1===t.nodeType&&["SVG","Image","Video"].some((e=>t.constructor.name.includes(e)))||!1;function $o(t,e,n){const o=y(e),s=rt(t,o&&function(t){if(!t||!y(t))return!1;const{width:e,height:n}=rt(t),{offsetWidth:o,offsetHeight:s}=t;return Math.round(e)!==o||Math.round(n)!==s}(e)),i={x:0,y:0};if(o){const t=rt(e,!0);i.x=t.x+e.clientLeft,i.y=t.y+e.clientTop}return{x:s.left+n.x-i.x,y:s.top+n.y-i.y,width:s.width,height:s.height}}const vo={top:"top",bottom:"bottom",left:"start",right:"end"};function wo(t,e){const{element:n,tooltip:o,options:s,arrow:i,offsetParent:r}=t,c={...vo},a=at(n);a&&(c.left="end",c.right="start"),Zt(o,{top:"",left:"",right:"",bottom:""});const d=t.name===go,{offsetWidth:u,offsetHeight:h}=o,{clientWidth:f,clientHeight:g}=ct(n),{container:p}=s;let{placement:m}=s;const{left:b,right:$,top:v}=rt(p,!0),{clientWidth:w,offsetWidth:T}=p,E=Math.abs(w-T),x=l(p,"position"),N="fixed"===x,A="static"===x,P="sticky"===x&&v===parseFloat(l(p,"top")),H=a&&N?E:0,S=N?w+b+(a?E:0):w+b+(f-$)-1,{width:D,height:k,left:C,right:L,top:M}=rt(n,!0),I=function(t){const e="scrollX"in t;return{x:e?t.scrollX:t.scrollLeft,y:e?t.scrollY:t.scrollTop}}(r),{x:R,y:F}=$o(n,r,I);let O,W,B,z,X,j;Zt(i,{top:"",left:"",right:"",bottom:""});const V=i.offsetWidth||0,Y=i.offsetHeight||0,q=V/2;let U=M-h-Y<0,G=M+h+k+Y>=g,Z=C-u-V<H,J=C+u+D+V>=S;const K=["left","right"],Q=["top","bottom"];if(U=K.includes(m)?M+k/2-h/2-Y<0:U,G=K.includes(m)?M+h/2+k/2+Y>=g:G,Z=Q.includes(m)?C+D/2-u/2<H:Z,J=Q.includes(m)?C+u/2+D/2>=S:J,m=K.includes(m)&&Z&&J?"top":m,m="top"===m&&U?"bottom":m,m="bottom"===m&&G?"top":m,m="left"===m&&Z?"right":m,m="right"===m&&J?"left":m,o.className.includes(m)||(o.className=o.className.replace(/\b(top|bottom|start|end)+/,c[m])),K.includes(m))W="left"===m?R-u-(d?V:0):R+D+(d?V:0),U?(O=F,O+=P?-v-I.y:0,z=k/2-V):G?(O=F-h+k,O+=P?-v-I.y:0,z=h-k/2-V):(O=F-h/2+k/2,O+=P?-v-I.y:0,z=h/2-Y/2);else if(Q.includes(m))if(e&&bo(n)){let t=0,n=0;A?(t=e.pageX,n=e.pageY):(t=e.clientX-b+(N?I.x:0),n=e.clientY-v+(N?I.y:0)),t-=a&&N&&E?E:0,O="top"===m?n-h-V:n+V,e.clientX-u/2<H?(W=0,X=t-q):e.clientX+u/2>S?(W="auto",B=0,j=S-t-q,j-=N?b+(a?E:0):0):(W=t-u/2,X=u/2-q)}else O="top"===m?F-h-(d?Y:0):F+k+(d?Y:0),Z?(W=0,X=R+D/2-q):J?(W="auto",B=0,j=D/2+S-L-q):(W=R-u/2+D/2,X=u/2-q);Zt(o,{top:`${O}px`,left:"auto"===W?W:`${W}px`,right:void 0!==B?`${B}px`:""}),y(i)&&(void 0!==z&&(i.style.top=`${z}px`),void 0!==X?i.style.left=`${X}px`:void 0!==j&&(i.style.right=`${j}px`))}const yo={template:mo(po),title:null,customClass:null,trigger:"hover focus",placement:"top",sanitizeFn:null,animation:!0,delay:200,container:null},To="aria-describedby",Eo="focusin",xo="focusout",No="touchstart";let Ao=0,Po=0;const Ho=new Map;function So(t,e){let n=e?Ao:Po;if(e){const o=So(t),s=Ho.get(o)||new Map;Ho.has(o)||Ho.set(o,s),s.has(e)?n=s.get(e):(s.set(e,n),Ao+=1)}else{const e=t.id||t;Ho.has(e)?n=Ho.get(e):(Ho.set(e,n),Po+=1)}return n}const Do=t=>t&&"Function"===t.constructor.name||!1,{userAgentData:ko}=navigator,Co=ko,{userAgent:Lo}=navigator,Mo=Lo,Io=/(iPhone|iPod|iPad)/,Ro=Co?Co.brands.some((t=>Io.test(t.brand))):Io.test(Mo),Fo="data-original-title",Oo="Tooltip",Wo=t=>"string"==typeof t;function Bo(t,e,n){var o,s;if(y(t)&&(!Wo(e)||e.length))if(Wo(e)){let o=e.trim();Do(n)&&(o=n(o));const s=(new(ve(t).DOMParser)).parseFromString(o,"text/html");t.append(...s.body.childNodes)}else y(e)?t.append(e):((s=e)&&"NodeList"===s.constructor.name||(o=e,Array.isArray(o)&&e.every(h)))&&t.append(...e)}function zo(t,e){return y(t)&&e.contains(t)}const Xo=`[${Z}="${po}"],[data-tip="${po}"]`,jo="title";let Vo=t=>x(t,Oo);function Yo(t,e){const s=e?n:o,{element:i}=t;s(p(i),No,t.handleTouch,bt),bo(i)||[he,fe].forEach((e=>{s(ve(i),e,t.update,bt)}))}function qo(t){const{element:e}=t,n=N(`shown.bs.${M(t.name)}`);Yo(t,!0),d(e,n),pt(e,"in")}function Uo(t,e){const{element:n}=t,o=N(`hidden.bs.${M(t.name)}`);Yo(t),function(t){const{element:e,tooltip:n}=t;Ke(e,To),n.remove()}(t),d(n,o),Do(e)&&e(),pt(n,"out")}function Go(t,e){const s=e?n:o,{element:r,options:c,btn:l}=t,{trigger:a,dismissible:d}=c;if(a.includes("manual"))return;t.enabled=!!e;const u=a.split(" "),h=bo(r);h&&s(r,"mousemove",t.update,bt),u.forEach((e=>{h||"hover"===e?(s(r,"mousedown",t.show),s(r,et,t.show),d&&l?s(l,i,t.hide):(s(r,nt,t.hide),s(p(r),No,t.handleTouch,bt))):e===i?s(r,e,d?t.show:t.toggle):e===ue&&(s(r,Eo,t.show),d||s(r,xo,t.hide),Ro&&s(r,i,(()=>$e(r))))}))}function Zo(t,e){const s=e?n:o,{element:i,options:r,offsetParent:c}=t,{container:l}=r,{offsetHeight:a,scrollHeight:d}=l,u=b(i,`.${_e}`),h=b(i,`.${un}`);if(!bo(i)){const e=ve(i),n=a!==d||c!==e?l:e;s(e,fe,t.update,bt),s(n,he,t.update,bt)}u&&s(u,`hide.bs.${_e}`,t.hide),h&&s(h,`hide.bs.${un}`,t.hide)}function Jo(t,e){const n=[Fo,jo],{element:o}=t;q(o,n[e?0:1],e||k(o,n[0])),Ke(o,n[e?1:0])}class Ko extends R{constructor(t,e){super(t,e);const n=this,{element:o}=n,s=n.name===Oo,i=s?po:fo,r=s?Oo:go;Vo=t=>x(t,r),n.tooltip={},s||(n.btn=null),n.arrow={},n.offsetParent={},n.enabled=!0,n.id=`${i}-${So(o,i)}`;const{options:c}=n;if(!c.title&&s||!s&&!c.content)return;const a=m(c.container,p(o)),d=on(o);n.options.container=!a||a&&["static","relative"].includes(l(a,"position"))?d:a||Qe(o),yo[jo]=null,n.handleTouch=n.handleTouch.bind(n),n.update=n.update.bind(n),n.show=n.show.bind(n),n.hide=n.hide.bind(n),n.toggle=n.toggle.bind(n),be(o,jo)&&s&&Jo(n,c.title),function(t){const{id:e,element:n,options:o}=t,{animation:s,customClass:i,sanitizeFn:r,placement:c,dismissible:l,title:a,content:d,template:u,btnClose:h}=o,f=t.name===Oo,g=f?po:fo,p={...vo};let b=[],$=[];at(n)&&(p.left="end",p.right="start");const w=`bs-${g}-${p[c]}`;let T;if(y(u))T=u;else{const t=dn("div");Bo(t,u,r),T=t.firstChild}t.tooltip=y(T)&&T.cloneNode(!0);const{tooltip:E}=t;q(E,"id",e),q(E,"role",po);const x=f?`${po}-inner`:`${fo}-body`,N=f?null:m(`.${fo}-header`,E),P=m(`.${x}`,E);t.arrow=m(`.${g}-arrow`,E);const{arrow:H}=t;if(y(a))b=[a.cloneNode(!0)];else{const t=dn("div");Bo(t,a,r),b=[...t.childNodes]}if(y(d))$=[d.cloneNode(!0)];else{const t=dn("div");Bo(t,d,r),$=[...t.childNodes]}if(l)if(a)if(y(h))b=[...b,h.cloneNode(!0)];else{const t=dn("div");Bo(t,h,r),b=[...b,t.firstChild]}else if(N&&N.remove(),y(h))$=[...$,h.cloneNode(!0)];else{const t=dn("div");Bo(t,h,r),$=[...$,t.firstChild]}f?a&&P&&Bo(P,a,r):(a&&N&&Bo(N,b,r),d&&P&&Bo(P,$,r),t.btn=m(".btn-close",E)),U(E,"position-absolute"),U(H,"position-absolute"),v(E,g)||U(E,g),s&&!v(E,A)&&U(E,A),i&&!v(E,i)&&U(E,i),v(E,w)||U(E,w)}(n),Go(n,!0)}get name(){return Oo}get defaults(){return yo}show(t){const e=this,{options:n,tooltip:o,element:s,id:i}=e,{container:r,animation:c}=n,l=gt(s,"out");pt(s,"out"),!o||l||zo(o,r)||ft(s,(()=>{const n=N(`show.bs.${M(e.name)}`);d(s,n),n.defaultPrevented||(r.append(o),q(s,To,`#${i}`),e.offsetParent=on(o,!0),e.update(t),Zo(e,!0),v(o,P)||U(o,P),c?u(o,(()=>qo(e))):qo(e))}),17,"in")}hide(t){const e=this,{options:n,tooltip:o,element:s}=e,{container:i,animation:r,delay:c}=n;pt(s,"in"),o&&zo(o,i)&&ft(s,(()=>{const n=N(`hide.bs.${M(e.name)}`);d(s,n),n.defaultPrevented||(w(o,P),Zo(e),r?u(o,(()=>Uo(e,t))):Uo(e,t))}),c+17,"out")}update(t){wo(this,t)}toggle(t){const e=this,{tooltip:n,options:o}=e;zo(n,o.container)?e.hide():e.show(t)}enable(){const t=this,{enabled:e}=t;e||(Go(t,!0),t.enabled=!e)}disable(){const t=this,{tooltip:e,options:n,enabled:o}=t,{animation:s,container:i}=n;o&&(zo(e,i)&&s?t.hide((()=>Go(t))):Go(t),t.enabled=!o)}toggleEnabled(){const t=this;t.enabled?t.disable():t.enable()}handleTouch({target:t}){const{tooltip:e,element:n}=this;e.contains(t)||t===n||t&&n.contains(t)||this.hide()}dispose(){const t=this,{tooltip:e,options:n}=t,o=()=>function(t,e){const{element:n}=t;Go(t),be(n,Fo)&&t.name===Oo&&Jo(t),e&&e()}(t,(()=>super.dispose()));n.animation&&zo(e,n.container)?(t.options.delay=0,t.hide(o)):o()}}$(Ko,{selector:Xo,init:t=>new Ko(t),getInstance:Vo,styleTip:wo});const Qo=`[${Z}="${fo}"],[data-tip="${fo}"]`,_o={...yo,template:mo(fo),btnClose:'<button class="btn-close" aria-label="Close"></button>',dismissible:!1,content:null};class ts extends Ko{constructor(t,e){super(t,e)}get name(){return go}get defaults(){return _o}show(){super.show();const{options:t,btn:e}=this;t.dismissible&&e&&setTimeout((()=>$e(e)),17)}}function es(t,e){return(h(e)?e:p()).getElementsByTagName(t)}$(ts,{selector:Qo,init:t=>new ts(t),getInstance:t=>x(t,go),styleTip:wo});const ns="ScrollSpy",os={offset:10,target:null},ss=N("activate.bs.scrollspy");function is(t){const{target:e,scrollTarget:n,options:o,itemsLength:s,scrollHeight:i,element:r}=t,{offset:c}=o,l=f(n),a=e&&es("A",e),d=n&&function(t){return y(t)?t.scrollHeight:ct(t).scrollHeight}(n);if(t.scrollTop=l?n.scrollY:n.scrollTop,a&&(s!==a.length||d!==i)){let e,n,o;t.items=[],t.offsets=[],t.scrollHeight=d,t.maxScroll=t.scrollHeight-function({element:t,scrollTarget:e}){return f(e)?e.innerHeight:rt(t).height}(t),[...a].forEach((s=>{e=k(s,"href"),n=e&&"#"===e.charAt(0)&&"#"!==e.slice(-1)&&m(e,p(r)),n&&(t.items.push(s),o=rt(n),t.offsets.push((l?o.top+t.scrollTop:n.offsetTop)-c))})),t.itemsLength=t.items.length}}function rs(t){[...es("A",t)].forEach((t=>{v(t,G)&&w(t,G)}))}function cs(t,e){const{target:n,element:o}=t;rs(n),t.activeItem=e,U(e,G);const s=[];let i=e;for(;i!==Qe(o);)i=i.parentElement,(v(i,"nav")||v(i,"dropdown-menu"))&&s.push(i);s.forEach((t=>{const e=t.previousElementSibling;e&&!v(e,G)&&U(e,G)})),ss.relatedTarget=e,d(o,ss)}function ls(t,e){(e?n:o)(t.scrollTarget,he,t.refresh,bt)}class as extends R{constructor(t,e){super(t,e);const n=this,{element:o,options:s}=n;n.target=m(s.target,p(o)),n.target&&(n.scrollTarget=o.clientHeight<o.scrollHeight?o:ve(o),n.scrollTop=0,n.maxScroll=0,n.scrollHeight=0,n.activeItem=null,n.items=[],n.itemsLength=0,n.offsets=[],n.refresh=n.refresh.bind(n),ls(n,!0),n.refresh())}get name(){return ns}get defaults(){return os}refresh(){const t=this,{target:e}=t;if(0===e.offsetHeight)return;is(t);const{scrollTop:n,maxScroll:o,itemsLength:s,items:i,activeItem:r}=t;if(n>=o){const e=i[s-1];return void(r!==e&&cs(t,e))}const{offsets:c}=t;if(r&&n<c[0]&&c[0]>0)return t.activeItem=null,void rs(e);i.forEach(((e,o)=>{r!==e&&n>=c[o]&&(void 0===c[o+1]||n<c[o+1])&&cs(t,e)}))}dispose(){ls(this),super.dispose()}}$(as,{selector:'[data-bs-spy="scroll"]',init:t=>new as(t),getInstance:t=>x(t,ns)});const ds="aria-selected",us="tab",hs=`[${Z}="${us}"]`,fs=t=>x(t,"Tab"),gs=N(`show.bs.${us}`),ps=N(`shown.bs.${us}`),ms=N(`hide.bs.${us}`),bs=N(`hidden.bs.${us}`),$s=new Map;function vs(t){const{tabContent:e,nav:n}=t;e&&v(e,Jt)&&(e.style.height="",w(e,Jt)),n&&pt(n)}function ws(t){const{element:e,tabContent:n,content:o,nav:s}=t,{tab:i}=s&&$s.get(s);if(n&&v(o,A)){const{currentHeight:o,nextHeight:s}=$s.get(e);o===s?vs(t):setTimeout((()=>{n.style.height=`${s}px`,mt(n),u(n,(()=>vs(t)))}),50)}else s&&pt(s);ps.relatedTarget=i,d(e,ps)}function ys(t){const{element:e,content:n,tabContent:o,nav:s}=t,{tab:i,content:r}=s&&$s.get(s);let c=0;if(o&&v(n,A)&&([r,n].forEach((t=>{U(t,"overflow-hidden")})),c=r.scrollHeight||0),gs.relatedTarget=i,bs.relatedTarget=e,d(e,gs),!gs.defaultPrevented){if(U(n,G),w(r,G),o&&v(n,A)){const t=n.scrollHeight;$s.set(e,{currentHeight:c,nextHeight:t}),U(o,Jt),o.style.height=`${c}px`,mt(o),[r,n].forEach((t=>{w(t,"overflow-hidden")}))}n&&v(n,A)?setTimeout((()=>{U(n,P),u(n,(()=>{ws(t)}))}),1):(U(n,P),ws(t)),d(i,bs)}}function Ts(t){const{nav:e}=t,n=ut(G,e);let o;1!==n.length||we.some((t=>v(n[0].parentElement,t)))?n.length>1&&(o=n[n.length-1]):[o]=n;return{tab:o,content:o?Tt(o):null}}function Es(t){const e=b(t,`.${we.join(",.")}`);return e?m(`.${we[0]}-toggle`,e):null}function xs(t,e){(e?n:o)(t.element,i,Ns)}function Ns(t){const e=fs(this);e&&(t.preventDefault(),e.show())}class As extends R{constructor(t){super(t);const e=this,{element:n}=e,o=Tt(n);if(!o)return;const s=b(n,".nav"),i=b(o,".tab-content");e.nav=s,e.content=o,e.tabContent=i,e.dropdown=Es(n);const{tab:r}=Ts(e);if(s&&!r){const t=m(hs,s),e=t&&Tt(t);e&&(U(t,G),U(e,P),U(e,G),q(n,ds,"true"))}xs(e,!0)}get name(){return"Tab"}show(){const t=this,{element:e,content:n,nav:o,dropdown:s}=t;if(!(o&&gt(o)||v(e,G))){const{tab:i,content:r}=Ts(t);if(o&&$s.set(o,{tab:i,content:r}),ms.relatedTarget=e,d(i,ms),ms.defaultPrevented)return;U(e,G),q(e,ds,"true");const c=Es(i);if(c&&v(c,G)&&w(c,G),o){const t=()=>{w(i,G),q(i,ds,"false"),s&&!v(s,G)&&U(s,G)};v(r,A)||v(n,A)?ft(o,t,1):t()}w(r,P),v(r,A)?u(r,(()=>ys(t))):ys(t)}}dispose(){xs(this),super.dispose()}}$(As,{selector:hs,init:t=>new As(t),getInstance:fs});const Ps="toast",Hs="Toast",Ss=`.${Ps}`,Ds=`[${H}="${Ps}"]`,ks=`[${Z}="${Ps}"]`,Cs="showing",Ls="hide",Ms={animation:!0,autohide:!0,delay:5e3},Is=t=>x(t,Hs),Rs=N(`show.bs.${Ps}`),Fs=N(`shown.bs.${Ps}`),Os=N(`hide.bs.${Ps}`),Ws=N(`hidden.bs.${Ps}`);function Bs(t){const{element:e,options:n}=t;w(e,Cs),pt(e,Cs),d(e,Fs),n.autohide&&ft(e,(()=>t.hide()),n.delay,Ps)}function zs(t){const{element:e}=t;w(e,Cs),w(e,P),U(e,Ls),pt(e,Ps),d(e,Ws)}function Xs(t,e){const s=e?n:o,{element:r,triggers:c,dismiss:l,options:a}=t;l&&s(l,i,t.hide),a.autohide&&[Eo,xo,et,nt].forEach((t=>s(r,t,Vs))),c.length&&c.forEach((t=>s(t,i,js)))}function js(t){const{target:e}=t,n=e&&b(e,ks),o=n&&Tt(n),s=o&&Is(o);n&&"A"===n.tagName&&t.preventDefault(),s.relatedTarget=n,s.show()}function Vs(t){const e=this,n=Is(e),{type:o,relatedTarget:s}=t;n&&e!==s&&!e.contains(s)&&([et,Eo].includes(o)?pt(e,Ps):ft(e,(()=>n.hide()),n.options.delay,Ps))}class Ys extends R{constructor(t,e){super(t,e);const n=this,{element:o,options:s}=n;s.animation&&!v(o,A)?U(o,A):!s.animation&&v(o,A)&&w(o,A),n.dismiss=m(Ds,o),n.triggers=[...dt(ks,p(o))].filter((t=>Tt(t)===o)),n.show=n.show.bind(n),n.hide=n.hide.bind(n),Xs(n,!0)}get name(){return Hs}get defaults(){return Ms}get isShown(){return v(this.element,P)}show(){const t=this,{element:e,isShown:n}=t;if(e&&!n){if(d(e,Rs),Rs.defaultPrevented)return;!function(t){const{element:e,options:n}=t;ft(e,(()=>{w(e,Ls),mt(e),U(e,P),U(e,Cs),n.animation?u(e,(()=>Bs(t))):Bs(t)}),17,Cs)}(t)}}hide(){const t=this,{element:e,isShown:n}=t;if(e&&n){if(d(e,Os),Os.defaultPrevented)return;!function(t){const{element:e,options:n}=t;U(e,Cs),n.animation?(mt(e),u(e,(()=>zs(t)))):zs(t)}(t)}}dispose(){const{element:t,isShown:e}=this;e&&w(t,P),function(t){pt(t.element,Ps),Xs(t)}(this),super.dispose()}}$(Ys,{selector:Ss,init:t=>new Ys(t),getInstance:Is});const qs={Alert:V,Button:tt,Carousel:Ut,Collapse:de,Dropdown:Ge,Modal:Yn,Offcanvas:ho,Popover:ts,ScrollSpy:as,Tab:As,Toast:Ys,Tooltip:Ko};function Us(t){const e=[...es("*",t&&t.nodeName?t:document)];L(qs).forEach((t=>{const{init:n,selector:o}=qs[t];var s,i;s=n,i=e.filter((t=>function(t,e){return t.matches(e)}(t,o))),[...i].forEach((t=>s(t)))}))}document.body?Us():n(document,"DOMContentLoaded",(()=>Us()),{once:!0});const Gs={Alert:V,Button:tt,Carousel:Ut,Collapse:de,Dropdown:Ge,Modal:Yn,Offcanvas:ho,Popover:ts,ScrollSpy:as,Tab:As,Toast:Ys,Tooltip:Ko,initCallback:Us,removeDataAPI:function(t){const e=t&&t.nodeName?t:document;L(qs).forEach((t=>{!function(t,e){const n=E.getAllFor(t);n&&[...n].forEach((t=>{const[n,o]=t;e.contains(n)&&o.dispose()}))}(t,e)}))},Version:I,EventListener:s},Zs={modal:document.querySelector("#subscription-modal"),subscribeBtn:document.querySelector("button[data-subscribe]")};let Js=0,Ks=!1;const Qs=new Gs.Modal("#subscription-modal");function _s(){3===Js||Ks?console.log("Максимальное кол-во надоеданий или подписался"):setTimeout((()=>{console.log("Открываем надоедалку"),Qs.show(),Js+=1}),2e3)}_s(),Zs.modal.addEventListener("hide.bs.modal",_s),Zs.subscribeBtn.addEventListener("click",(function(){Ks=!0,Qs.hide()}));
//# sourceMappingURL=9-04-subscription.2b4571f7.js.map
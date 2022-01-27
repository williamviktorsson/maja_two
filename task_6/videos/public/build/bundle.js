var app=function(){"use strict";function e(){}const t=e=>e;function n(e,t){for(const n in t)e[n]=t[n];return e}function c(e){return e()}function a(){return Object.create(null)}function i(e){e.forEach(c)}function r(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let o;function s(e,t,n,c){if(e){const a=f(e,t,n,c);return e[0](a)}}function f(e,t,c,a){return e[1]&&a?n(c.ctx.slice(),e[1](a(t))):c.ctx}function d(e,t,n,c){if(e[2]&&c){const a=e[2](c(n));if(void 0===t.dirty)return a;if("object"==typeof a){const e=[],n=Math.max(t.dirty.length,a.length);for(let c=0;c<n;c+=1)e[c]=t.dirty[c]|a[c];return e}return t.dirty|a}return t.dirty}function u(e,t,n,c,a,i){if(a){const r=f(t,n,c,i);e.p(r,a)}}function p(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function g(e,t){const n={};t=new Set(t);for(const c in e)t.has(c)||"$"===c[0]||(n[c]=e[c]);return n}function b(t){return t&&r(t.destroy)?t.destroy:e}const h="undefined"!=typeof window;let m=h?()=>window.performance.now():()=>Date.now(),$=h?e=>requestAnimationFrame(e):e;const y=new Set;function v(e){y.forEach((t=>{t.c(e)||(y.delete(t),t.f())})),0!==y.size&&$(v)}function k(e){let t;return 0===y.size&&$(v),{promise:new Promise((n=>{y.add(t={c:e,f:n})})),abort(){y.delete(t)}}}function x(e,t){e.appendChild(t)}function _(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function w(e){const t=O("style");return function(e,t){x(e.head||e,t)}(_(e),t),t}function z(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode.removeChild(e)}function O(e){return document.createElement(e)}function j(e){return document.createTextNode(e)}function C(){return j(" ")}function L(e,t,n,c){return e.addEventListener(t,n,c),()=>e.removeEventListener(t,n,c)}function T(e){return function(t){return t.preventDefault(),e.call(this,t)}}function D(e){return function(t){return t.stopPropagation(),e.call(this,t)}}function N(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function R(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const c in t)null==t[c]?e.removeAttribute(c):"style"===c?e.style.cssText=t[c]:"__value"===c?e.value=e[c]=t[c]:n[c]&&n[c].set?e[c]=t[c]:N(e,c,t[c])}function F(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function A(e,t,n,c){e.style.setProperty(t,n,c?"important":"")}function M(e,t,n){e.classList[n?"add":"remove"](t)}const S=new Set;let q,P=0;function B(e,t,n,c,a,i,r,l=0){const o=16.666/c;let s="{\n";for(let e=0;e<=1;e+=o){const c=t+(n-t)*i(e);s+=100*e+`%{${r(c,1-c)}}\n`}const f=s+`100% {${r(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(f)}_${l}`,u=_(e);S.add(u);const p=u.__svelte_stylesheet||(u.__svelte_stylesheet=w(e).sheet),g=u.__svelte_rules||(u.__svelte_rules={});g[d]||(g[d]=!0,p.insertRule(`@keyframes ${d} ${f}`,p.cssRules.length));const b=e.style.animation||"";return e.style.animation=`${b?`${b}, `:""}${d} ${c}ms linear ${a}ms 1 both`,P+=1,d}function X(e,t){const n=(e.style.animation||"").split(", "),c=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),a=n.length-c.length;a&&(e.style.animation=c.join(", "),P-=a,P||$((()=>{P||(S.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),S.clear())})))}function I(e){q=e}function Y(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}const G=[],H=[],W=[],J=[],K=Promise.resolve();let Q=!1;function U(e){W.push(e)}let V=!1;const Z=new Set;function ee(){if(!V){V=!0;do{for(let e=0;e<G.length;e+=1){const t=G[e];I(t),te(t.$$)}for(I(null),G.length=0;H.length;)H.pop()();for(let e=0;e<W.length;e+=1){const t=W[e];Z.has(t)||(Z.add(t),t())}W.length=0}while(G.length);for(;J.length;)J.pop()();Q=!1,V=!1,Z.clear()}}function te(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(U)}}let ne;function ce(){return ne||(ne=Promise.resolve(),ne.then((()=>{ne=null}))),ne}function ae(e,t,n){e.dispatchEvent(function(e,t,n=!1){const c=document.createEvent("CustomEvent");return c.initCustomEvent(e,n,!1,t),c}(`${t?"intro":"outro"}${n}`))}const ie=new Set;let re;function le(){re={r:0,c:[],p:re}}function oe(){re.r||i(re.c),re=re.p}function se(e,t){e&&e.i&&(ie.delete(e),e.i(t))}function fe(e,t,n,c){if(e&&e.o){if(ie.has(e))return;ie.add(e),re.c.push((()=>{ie.delete(e),c&&(n&&e.d(1),c())})),e.o(t)}}const de={duration:0};const ue="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function pe(e){e&&e.c()}function ge(e,t,n,a){const{fragment:l,on_mount:o,on_destroy:s,after_update:f}=e.$$;l&&l.m(t,n),a||U((()=>{const t=o.map(c).filter(r);s?s.push(...t):i(t),e.$$.on_mount=[]})),f.forEach(U)}function be(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function he(e,t){-1===e.$$.dirty[0]&&(G.push(e),Q||(Q=!0,K.then(ee)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function me(t,n,c,r,l,o,s,f=[-1]){const d=q;I(t);const u=t.$$={fragment:null,ctx:null,props:o,update:e,not_equal:l,bound:a(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:a(),dirty:f,skip_bound:!1,root:n.target||d.$$.root};s&&s(u.root);let p=!1;if(u.ctx=c?c(t,n.props||{},((e,n,...c)=>{const a=c.length?c[0]:n;return u.ctx&&l(u.ctx[e],u.ctx[e]=a)&&(!u.skip_bound&&u.bound[e]&&u.bound[e](a),p&&he(t,e)),n})):[],u.update(),p=!0,i(u.before_update),u.fragment=!!r&&r(u.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);u.fragment&&u.fragment.l(e),e.forEach(E)}else u.fragment&&u.fragment.c();n.intro&&se(t.$$.fragment),ge(t,n.target,n.anchor,n.customElement),ee()}I(d)}class $e{$destroy(){be(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ye={color:"currentColor",class:"",opacity:.1,centered:!1,spreadingDuration:".4s",spreadingDelay:"0s",spreadingTimingFunction:"linear",clearingDuration:"1s",clearingDelay:"0s",clearingTimingFunction:"ease-in-out"};function ve(e,t={}){e.stopImmediatePropagation();const n={...ye,...t},c=!!e.touches&&!!e.touches[0],a=c?e.touches[0].currentTarget:e.currentTarget,i=document.createElement("div"),r=i.style;i.className=`material-ripple ${n.class}`,r.position="absolute",r.color="inherit",r.borderRadius="50%",r.pointerEvents="none",r.width="100px",r.height="100px",r.marginTop="-50px",r.marginLeft="-50px",a.appendChild(i),r.opacity=n.opacity,r.transition=`transform ${n.spreadingDuration} ${n.spreadingTimingFunction} ${n.spreadingDelay},opacity ${n.clearingDuration} ${n.clearingTimingFunction} ${n.clearingDelay}`,r.transform="scale(0) translate(0,0)",r.background=n.color;const l=a.getBoundingClientRect();if(n.centered)r.top=l.height/2+"px",r.left=l.width/2+"px";else{const t=c?e.touches[0].clientY:e.clientY,n=c?e.touches[0].clientX:e.clientX;r.top=t-l.top+"px",r.left=n-l.left+"px"}return r.transform=`scale(${.02*Math.max(l.width,l.height)}) translate(0,0)`,i}var ke=(e,t={})=>{let n,c=t,a=!1,i=!1;const r=e=>{n=ve(e,c)},l=()=>function(e){e&&(e.addEventListener("transitionend",(t=>{"opacity"===t.propertyName&&e.remove()})),e.style.opacity=0)}(n),o=e=>{i||13!==e.keyCode&&32!==e.keyCode||(n=ve(e,{...c,centered:!0}),i=!0)},s=()=>{i=!1,l()};function f(){e.classList.add("s-ripple-container"),e.addEventListener("pointerdown",r),e.addEventListener("pointerup",l),e.addEventListener("pointerleave",l),e.addEventListener("keydown",o),e.addEventListener("keyup",s),a=!1}function d(){e.classList.remove("s-ripple-container"),e.removeEventListener("pointerdown",r),e.removeEventListener("pointerup",l),e.removeEventListener("pointerleave",l),e.removeEventListener("keydown",o),e.removeEventListener("keyup",s),a=!0}return c&&f(),{update(e){c=e,c&&a?f():c||a||d()},destroy:d}};const xe=e=>e.split(" ").filter((e=>!!e));var _e=(e,t)=>{let n=t;return e.classList.add(...xe((e=>e.filter((e=>!!e)))(n).join(" "))),{update(t){const c=t;c.forEach(((t,c)=>{t?e.classList.add(...xe(t)):n[c]&&e.classList.remove(...xe(n[c]))})),n=c}}};function we(e){let t,c,a,l,o,f,g,h;const m=e[19].default,$=s(m,e,e[18],null);let y=[{class:a="s-btn size-"+e[5]+" "+e[1]},{type:e[14]},{style:e[16]},{disabled:e[11]},{"aria-disabled":e[11]},e[17]],v={};for(let e=0;e<y.length;e+=1)v=n(v,y[e]);return{c(){t=O("button"),c=O("span"),$&&$.c(),N(c,"class","s-btn__content"),R(t,v),M(t,"s-btn--fab",e[2]),M(t,"icon",e[3]),M(t,"block",e[4]),M(t,"tile",e[6]),M(t,"text",e[7]||e[3]),M(t,"depressed",e[8]||e[7]||e[11]||e[9]||e[3]),M(t,"outlined",e[9]),M(t,"rounded",e[10]),M(t,"disabled",e[11])},m(n,a){z(n,t,a),x(t,c),$&&$.m(c,null),t.autofocus&&t.focus(),e[21](t),f=!0,g||(h=[b(l=_e.call(null,t,[e[12]&&e[13]])),b(o=ke.call(null,t,e[15])),L(t,"click",e[20])],g=!0)},p(e,[n]){$&&$.p&&(!f||262144&n)&&u($,m,e,e[18],f?d(m,e[18],n,null):p(e[18]),null),R(t,v=function(e,t){const n={},c={},a={$$scope:1};let i=e.length;for(;i--;){const r=e[i],l=t[i];if(l){for(const e in r)e in l||(c[e]=1);for(const e in l)a[e]||(n[e]=l[e],a[e]=1);e[i]=l}else for(const e in r)a[e]=1}for(const e in c)e in n||(n[e]=void 0);return n}(y,[(!f||34&n&&a!==(a="s-btn size-"+e[5]+" "+e[1]))&&{class:a},(!f||16384&n)&&{type:e[14]},(!f||65536&n)&&{style:e[16]},(!f||2048&n)&&{disabled:e[11]},(!f||2048&n)&&{"aria-disabled":e[11]},131072&n&&e[17]])),l&&r(l.update)&&12288&n&&l.update.call(null,[e[12]&&e[13]]),o&&r(o.update)&&32768&n&&o.update.call(null,e[15]),M(t,"s-btn--fab",e[2]),M(t,"icon",e[3]),M(t,"block",e[4]),M(t,"tile",e[6]),M(t,"text",e[7]||e[3]),M(t,"depressed",e[8]||e[7]||e[11]||e[9]||e[3]),M(t,"outlined",e[9]),M(t,"rounded",e[10]),M(t,"disabled",e[11])},i(e){f||(se($,e),f=!0)},o(e){fe($,e),f=!1},d(n){n&&E(t),$&&$.d(n),e[21](null),g=!1,i(h)}}}function ze(e,t,c){const a=["class","fab","icon","block","size","tile","text","depressed","outlined","rounded","disabled","active","activeClass","type","ripple","style","button"];let i=g(t,a),{$$slots:r={},$$scope:l}=t,{class:o=""}=t,{fab:s=!1}=t,{icon:f=!1}=t,{block:d=!1}=t,{size:u="default"}=t,{tile:p=!1}=t,{text:b=!1}=t,{depressed:h=!1}=t,{outlined:m=!1}=t,{rounded:$=!1}=t,{disabled:y=null}=t,{active:v=!1}=t,{activeClass:k="active"}=t,{type:x="button"}=t,{ripple:_={}}=t,{style:w=null}=t,{button:z=null}=t;return e.$$set=e=>{t=n(n({},t),function(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}(e)),c(17,i=g(t,a)),"class"in e&&c(1,o=e.class),"fab"in e&&c(2,s=e.fab),"icon"in e&&c(3,f=e.icon),"block"in e&&c(4,d=e.block),"size"in e&&c(5,u=e.size),"tile"in e&&c(6,p=e.tile),"text"in e&&c(7,b=e.text),"depressed"in e&&c(8,h=e.depressed),"outlined"in e&&c(9,m=e.outlined),"rounded"in e&&c(10,$=e.rounded),"disabled"in e&&c(11,y=e.disabled),"active"in e&&c(12,v=e.active),"activeClass"in e&&c(13,k=e.activeClass),"type"in e&&c(14,x=e.type),"ripple"in e&&c(15,_=e.ripple),"style"in e&&c(16,w=e.style),"button"in e&&c(0,z=e.button),"$$scope"in e&&c(18,l=e.$$scope)},[z,o,s,f,d,u,p,b,h,m,$,y,v,k,x,_,w,i,l,r,function(t){Y.call(this,e,t)},function(e){H[e?"unshift":"push"]((()=>{z=e,c(0,z)}))}]}class Ee extends $e{constructor(e){super(),me(this,e,ze,we,l,{class:1,fab:2,icon:3,block:4,size:5,tile:6,text:7,depressed:8,outlined:9,rounded:10,disabled:11,active:12,activeClass:13,type:14,ripple:15,style:16,button:0})}}let Oe=36,je="";for(;Oe--;)je+=Oe.toString(36);function Ce(e,{delay:n=0,duration:c=400,easing:a=t}={}){const i=+getComputedStyle(e).opacity;return{delay:n,duration:c,easing:a,css:e=>"opacity: "+e*i}}const Le=["primary","secondary","success","info","warning","error"];function Te(e,t){if(/^(#|rgb|hsl|currentColor)/.test(t))return e.style.backgroundColor=t,!1;if(t.startsWith("--"))return e.style.backgroundColor=`var(${t})`,!1;const n=function(e){return e.split(" ").map((e=>Le.includes(e)?`${e}-color`:e))}(t);return e.classList.add(...n),n}var De=(e,t)=>{let n;return"string"==typeof t&&(n=Te(e,t)),{update(t){n?e.classList.remove(...n):e.style.backgroundColor=null,"string"==typeof t&&(n=Te(e,t))}}};function Ne(n){let c,a,l,o,f,g,h,$,y,v,_,w;const j=n[11].default,T=s(j,n,n[10],null);return{c(){c=O("div"),a=O("div"),o=C(),f=O("div"),T&&T.c(),N(a,"class","s-overlay__scrim svelte-zop6hb"),A(a,"opacity",n[5]),N(f,"class","s-overlay__content svelte-zop6hb"),N(c,"class",g="s-overlay "+n[0]+" svelte-zop6hb"),N(c,"style",h="z-index:"+n[7]+";"+n[9]),M(c,"absolute",n[8])},m(e,t){z(e,c,t),x(c,a),x(c,o),x(c,f),T&&T.m(f,null),v=!0,_||(w=[b(l=De.call(null,a,n[6])),L(c,"click",n[12])],_=!0)},p(e,t){n=e,(!v||32&t)&&A(a,"opacity",n[5]),l&&r(l.update)&&64&t&&l.update.call(null,n[6]),T&&T.p&&(!v||1024&t)&&u(T,j,n,n[10],v?d(j,n[10],t,null):p(n[10]),null),(!v||1&t&&g!==(g="s-overlay "+n[0]+" svelte-zop6hb"))&&N(c,"class",g),(!v||640&t&&h!==(h="z-index:"+n[7]+";"+n[9]))&&N(c,"style",h),257&t&&M(c,"absolute",n[8])},i(a){v||(se(T,a),U((()=>{y&&y.end(1),$=function(n,c,a){let i,l,o=c(n,a),s=!1,f=0;function d(){i&&X(n,i)}function u(){const{delay:c=0,duration:a=300,easing:r=t,tick:u=e,css:p}=o||de;p&&(i=B(n,0,1,a,c,r,p,f++)),u(0,1);const g=m()+c,b=g+a;l&&l.abort(),s=!0,U((()=>ae(n,!0,"start"))),l=k((e=>{if(s){if(e>=b)return u(1,0),ae(n,!0,"end"),d(),s=!1;if(e>=g){const t=r((e-g)/a);u(t,1-t)}}return s}))}let p=!1;return{start(){p||(p=!0,X(n),r(o)?(o=o(),ce().then(u)):u())},invalidate(){p=!1},end(){s&&(d(),s=!1)}}}(c,n[1],n[2]),$.start()})),v=!0)},o(a){fe(T,a),$&&$.invalidate(),y=function(n,c,a){let l,o=c(n,a),s=!0;const f=re;function d(){const{delay:c=0,duration:a=300,easing:r=t,tick:d=e,css:u}=o||de;u&&(l=B(n,1,0,a,c,r,u));const p=m()+c,g=p+a;U((()=>ae(n,!1,"start"))),k((e=>{if(s){if(e>=g)return d(0,1),ae(n,!1,"end"),--f.r||i(f.c),!1;if(e>=p){const t=r((e-p)/a);d(1-t,t)}}return s}))}return f.r+=1,r(o)?ce().then((()=>{o=o(),d()})):d(),{end(e){e&&o.tick&&o.tick(1,0),s&&(l&&X(n,l),s=!1)}}}(c,n[1],n[3]),v=!1},d(e){e&&E(c),T&&T.d(e),e&&y&&y.end(),_=!1,i(w)}}}function Re(e){let t,n,c=e[4]&&Ne(e);return{c(){c&&c.c(),t=j("")},m(e,a){c&&c.m(e,a),z(e,t,a),n=!0},p(e,[n]){e[4]?c?(c.p(e,n),16&n&&se(c,1)):(c=Ne(e),c.c(),se(c,1),c.m(t.parentNode,t)):c&&(le(),fe(c,1,1,(()=>{c=null})),oe())},i(e){n||(se(c),n=!0)},o(e){fe(c),n=!1},d(e){c&&c.d(e),e&&E(t)}}}function Fe(e,t,n){let{$$slots:c={},$$scope:a}=t,{class:i=""}=t,{transition:r=Ce}=t,{inOpts:l={duration:250}}=t,{outOpts:o={duration:250}}=t,{active:s=!0}=t,{opacity:f=.46}=t,{color:d="rgb(33, 33, 33)"}=t,{index:u=5}=t,{absolute:p=!1}=t,{style:g=""}=t;return e.$$set=e=>{"class"in e&&n(0,i=e.class),"transition"in e&&n(1,r=e.transition),"inOpts"in e&&n(2,l=e.inOpts),"outOpts"in e&&n(3,o=e.outOpts),"active"in e&&n(4,s=e.active),"opacity"in e&&n(5,f=e.opacity),"color"in e&&n(6,d=e.color),"index"in e&&n(7,u=e.index),"absolute"in e&&n(8,p=e.absolute),"style"in e&&n(9,g=e.style),"$$scope"in e&&n(10,a=e.$$scope)},[i,r,l,o,s,f,d,u,p,g,a,c,function(t){Y.call(this,e,t)}]}class Ae extends $e{constructor(e){super(),me(this,e,Fe,Re,l,{class:0,transition:1,inOpts:2,outOpts:3,active:4,opacity:5,color:6,index:7,absolute:8,style:9})}}const{isNaN:Me}=ue;function Se(t){let n,c,a,r,l,s,f,d,u,p,g,b,h,m,y,v,k,_,w=!1,R=!0,M=qe(t[0])+"",S=qe(t[1])+"";function q(){cancelAnimationFrame(r),c.paused||(r=$(q),w=!0),t[8].call(c)}return{c(){var e,i;n=O("div"),c=O("video"),c.innerHTML='<track kind="captions"/>',l=C(),s=O("div"),f=O("div"),d=O("span"),u=j(M),p=C(),g=O("span"),b=O("span"),h=j(S),m=C(),y=O("progress"),N(c,"id","vid"),N(c,"poster","https://sveltejs.github.io/assets/caminandes-llamigos.jpg"),e=c.src,i=a="https://sveltejs.github.io/assets/caminandes-llamigos.mp4",o||(o=document.createElement("a")),o.href=i,e!==o.href&&N(c,"src","https://sveltejs.github.io/assets/caminandes-llamigos.mp4"),N(c,"class","svelte-l3mufg"),void 0===t[1]&&U((()=>t[9].call(c))),N(d,"class","time svelte-l3mufg"),N(b,"class","time svelte-l3mufg"),N(g,"class","svelte-l3mufg"),N(f,"class","info svelte-l3mufg"),y.value=v=t[0]/t[1]||0,N(y,"class","svelte-l3mufg"),N(s,"class","controls svelte-l3mufg"),A(s,"opacity",t[1]&&t[3]?1:0),N(n,"id","container"),N(n,"class","svelte-l3mufg")},m(e,a){z(e,n,a),x(n,c),x(n,l),x(n,s),x(s,f),x(f,d),x(d,u),x(f,p),x(f,g),x(g,b),x(b,h),x(s,m),x(s,y),k||(_=[L(window,"keydown",T(t[7])),L(c,"mousedown",D(T(t[5]))),L(c,"mouseup",D(T(t[6]))),L(c,"timeupdate",q),L(c,"durationchange",t[9]),L(c,"play",t[10]),L(c,"pause",t[10]),L(s,"mousemove",D(T(t[4]))),L(s,"touchmove",D(T(t[4]))),L(s,"mousedown",D(T(t[4]))),L(s,"mouseup",D(T(t[4])))],k=!0)},p(e,[t]){!w&&1&t&&!Me(e[0])&&(c.currentTime=e[0]),w=!1,4&t&&R!==(R=e[2])&&c[R?"pause":"play"](),1&t&&M!==(M=qe(e[0])+"")&&F(u,M),2&t&&S!==(S=qe(e[1])+"")&&F(h,S),3&t&&v!==(v=e[0]/e[1]||0)&&(y.value=v),10&t&&A(s,"opacity",e[1]&&e[3]?1:0)},i:e,o:e,d(e){e&&E(n),k=!1,i(_)}}}function qe(e){if(isNaN(e))return"...";const t=Math.floor(e/60);return(e=Math.floor(e%60))<10&&(e="0"+e),`${t}:${e}`}function Pe(e,t,n){let c,a,i,r=0,l=!0,o=!0;return[r,c,l,o,function(e){if(clearTimeout(a),a=setTimeout((()=>n(3,o=!1)),2500),n(3,o=!0),!c)return;if("touchmove"!==e.type&&!(1&e.buttons))return;const t="touchmove"===e.type?e.touches[0].clientX:e.clientX,{left:i,right:l}=this.getBoundingClientRect();n(0,r=c*(t-i)/(l-i))},function(e){i=new Date},function(e){new Date-i<300&&(l?e.target.play():e.target.pause())},function(e){let t=document.getElementById("vid");e&&" "==e.key&&(l?t.play():t.pause())},function(){r=this.currentTime,n(0,r)},function(){c=this.duration,n(1,c)},function(){l=this.paused,n(2,l)}]}class Be extends $e{constructor(e){super(),me(this,e,Pe,Se,l,{})}}function Xe(e,t,n){const c=e.slice();return c[7]=t[n],c[9]=n,c}function Ie(t){let n,c,a;return{c(){n=O("div"),N(n,"class","grid-item svelte-1bwyydc")},m(e,i){z(e,n,i),c||(a=L(n,"click",t[2]),c=!0)},p:e,d(e){e&&E(n),c=!1,a()}}}function Ye(e){let t;return{c(){t=j("Close")},m(e,n){z(e,t,n)},d(e){e&&E(t)}}}function Ge(e){let t,n=e[1]?"Minimize":"Theatre Mode";return{c(){t=j(n)},m(e,n){z(e,t,n)},p(e,c){2&c&&n!==(n=e[1]?"Minimize":"Theatre Mode")&&F(t,n)},d(e){e&&E(t)}}}function He(e){let t,n,c;return n=new Ee({props:{size:"small",class:"secondary-color",$$slots:{default:[We]},$$scope:{ctx:e}}}),n.$on("click",e[5]),{c(){t=O("div"),pe(n.$$.fragment),N(t,"id","gigascreen"),N(t,"class","svelte-1bwyydc")},m(e,a){z(e,t,a),ge(n,t,null),c=!0},p(e,t){const c={};1024&t&&(c.$$scope={dirty:t,ctx:e}),n.$set(c)},i(e){c||(se(n.$$.fragment,e),c=!0)},o(e){fe(n.$$.fragment,e),c=!1},d(e){e&&E(t),be(n)}}}function We(t){let n;return{c(){n=j("Gigascreen")},m(e,t){z(e,n,t)},p:e,d(e){e&&E(n)}}}function Je(e){let t,n,c,a,i,r,l,o,s,f,d,u;c=new Ee({props:{class:"error-color",size:"small",$$slots:{default:[Ye]},$$scope:{ctx:e}}}),c.$on("click",e[3]),r=new Ee({props:{size:"small",class:"primary-color",$$slots:{default:[Ge]},$$scope:{ctx:e}}}),r.$on("click",e[4]);let p=e[1]&&He(e);return s=new Be({}),{c(){t=O("div"),n=O("div"),pe(c.$$.fragment),a=C(),i=O("div"),pe(r.$$.fragment),l=C(),p&&p.c(),o=C(),pe(s.$$.fragment),N(n,"id","close"),N(n,"class","svelte-1bwyydc"),N(i,"id","fullscreen"),N(i,"class","svelte-1bwyydc"),N(t,"id","video"),N(t,"class","svelte-1bwyydc"),M(t,"fullscreen",1==e[1])},m(e,g){z(e,t,g),x(t,n),ge(c,n,null),x(t,a),x(t,i),ge(r,i,null),x(t,l),p&&p.m(t,null),x(t,o),ge(s,t,null),f=!0,d||(u=L(t,"click",Qe),d=!0)},p(e,n){const a={};1024&n&&(a.$$scope={dirty:n,ctx:e}),c.$set(a);const i={};1026&n&&(i.$$scope={dirty:n,ctx:e}),r.$set(i),e[1]?p?(p.p(e,n),2&n&&se(p,1)):(p=He(e),p.c(),se(p,1),p.m(t,o)):p&&(le(),fe(p,1,1,(()=>{p=null})),oe()),2&n&&M(t,"fullscreen",1==e[1])},i(e){f||(se(c.$$.fragment,e),se(r.$$.fragment,e),se(p),se(s.$$.fragment,e),f=!0)},o(e){fe(c.$$.fragment,e),fe(r.$$.fragment,e),fe(p),fe(s.$$.fragment,e),f=!1},d(e){e&&E(t),be(c),be(r),p&&p.d(),be(s),d=!1,u()}}}function Ke(e){let t,n,c,a,i,r,l,o=Array(100),s=[];for(let t=0;t<o.length;t+=1)s[t]=Ie(Xe(e,o,t));return r=new Ae({props:{opacity:e[1]?1:.7,color:"black",active:e[0],$$slots:{default:[Je]},$$scope:{ctx:e}}}),r.$on("click",e[6]),{c(){t=O("main"),n=O("h1"),n.textContent="Neblix",c=C(),a=O("div");for(let e=0;e<s.length;e+=1)s[e].c();i=C(),pe(r.$$.fragment),N(n,"id","title"),N(n,"class","svelte-1bwyydc"),N(a,"class","grid svelte-1bwyydc"),N(t,"class","svelte-1bwyydc")},m(e,o){z(e,t,o),x(t,n),x(t,c),x(t,a);for(let e=0;e<s.length;e+=1)s[e].m(a,null);x(t,i),ge(r,t,null),l=!0},p(e,[t]){if(1&t){let n;for(o=Array(100),n=0;n<o.length;n+=1){const c=Xe(e,o,n);s[n]?s[n].p(c,t):(s[n]=Ie(c),s[n].c(),s[n].m(a,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=o.length}const n={};2&t&&(n.opacity=e[1]?1:.7),1&t&&(n.active=e[0]),1027&t&&(n.$$scope={dirty:t,ctx:e}),r.$set(n)},i(e){l||(se(r.$$.fragment,e),l=!0)},o(e){fe(r.$$.fragment,e),l=!1},d(e){e&&E(t),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(s,e),be(r)}}}Object.freeze({base:"#f44336","lighten-5":"#ffebee","lighten-4":"#ffcdd2","lighten-3":"#ef9a9a","lighten-2":"#e57373","lighten-1":"#ef5350","darken-1":"#e53935","darken-2":"#d32f2f","darken-3":"#c62828","darken-4":"#b71c1c","accent-1":"#ff8a80","accent-2":"#ff5252","accent-3":"#ff1744","accent-4":"#d50000"}),Object.freeze({base:"#e91e63","lighten-5":"#fce4ec","lighten-4":"#f8bbd0","lighten-3":"#f48fb1","lighten-2":"#f06292","lighten-1":"#ec407a","darken-1":"#d81b60","darken-2":"#c2185b","darken-3":"#ad1457","darken-4":"#880e4f","accent-1":"#ff80ab","accent-2":"#ff4081","accent-3":"#f50057","accent-4":"#c51162"}),Object.freeze({base:"#9c27b0","lighten-5":"#f3e5f5","lighten-4":"#e1bee7","lighten-3":"#ce93d8","lighten-2":"#ba68c8","lighten-1":"#ab47bc","darken-1":"#8e24aa","darken-2":"#7b1fa2","darken-3":"#6a1b9a","darken-4":"#4a148c","accent-1":"#ea80fc","accent-2":"#e040fb","accent-3":"#d500f9","accent-4":"#aa00ff"}),Object.freeze({base:"#673ab7","lighten-5":"#ede7f6","lighten-4":"#d1c4e9","lighten-3":"#b39ddb","lighten-2":"#9575cd","lighten-1":"#7e57c2","darken-1":"#5e35b1","darken-2":"#512da8","darken-3":"#4527a0","darken-4":"#311b92","accent-1":"#b388ff","accent-2":"#7c4dff","accent-3":"#651fff","accent-4":"#6200ea"}),Object.freeze({base:"#3f51b5","lighten-5":"#e8eaf6","lighten-4":"#c5cae9","lighten-3":"#9fa8da","lighten-2":"#7986cb","lighten-1":"#5c6bc0","darken-1":"#3949ab","darken-2":"#303f9f","darken-3":"#283593","darken-4":"#1a237e","accent-1":"#8c9eff","accent-2":"#536dfe","accent-3":"#3d5afe","accent-4":"#304ffe"}),Object.freeze({base:"#2196f3","lighten-5":"#e3f2fd","lighten-4":"#bbdefb","lighten-3":"#90caf9","lighten-2":"#64b5f6","lighten-1":"#42a5f5","darken-1":"#1e88e5","darken-2":"#1976d2","darken-3":"#1565c0","darken-4":"#0d47a1","accent-1":"#82b1ff","accent-2":"#448aff","accent-3":"#2979ff","accent-4":"#2962ff"}),Object.freeze({base:"#03a9f4","lighten-5":"#e1f5fe","lighten-4":"#b3e5fc","lighten-3":"#81d4fa","lighten-2":"#4fc3f7","lighten-1":"#29b6f6","darken-1":"#039be5","darken-2":"#0288d1","darken-3":"#0277bd","darken-4":"#01579b","accent-1":"#80d8ff","accent-2":"#40c4ff","accent-3":"#00b0ff","accent-4":"#0091ea"}),Object.freeze({base:"#00bcd4","lighten-5":"#e0f7fa","lighten-4":"#b2ebf2","lighten-3":"#80deea","lighten-2":"#4dd0e1","lighten-1":"#26c6da","darken-1":"#00acc1","darken-2":"#0097a7","darken-3":"#00838f","darken-4":"#006064","accent-1":"#84ffff","accent-2":"#18ffff","accent-3":"#00e5ff","accent-4":"#00b8d4"}),Object.freeze({base:"#009688","lighten-5":"#e0f2f1","lighten-4":"#b2dfdb","lighten-3":"#80cbc4","lighten-2":"#4db6ac","lighten-1":"#26a69a","darken-1":"#00897b","darken-2":"#00796b","darken-3":"#00695c","darken-4":"#004d40","accent-1":"#a7ffeb","accent-2":"#64ffda","accent-3":"#1de9b6","accent-4":"#00bfa5"}),Object.freeze({base:"#4caf50","lighten-5":"#e8f5e9","lighten-4":"#c8e6c9","lighten-3":"#a5d6a7","lighten-2":"#81c784","lighten-1":"#66bb6a","darken-1":"#43a047","darken-2":"#388e3c","darken-3":"#2e7d32","darken-4":"#1b5e20","accent-1":"#b9f6ca","accent-2":"#69f0ae","accent-3":"#00e676","accent-4":"#00c853"}),Object.freeze({base:"#8bc34a","lighten-5":"#f1f8e9","lighten-4":"#dcedc8","lighten-3":"#c5e1a5","lighten-2":"#aed581","lighten-1":"#9ccc65","darken-1":"#7cb342","darken-2":"#689f38","darken-3":"#558b2f","darken-4":"#33691e","accent-1":"#ccff90","accent-2":"#b2ff59","accent-3":"#76ff03","accent-4":"#64dd17"}),Object.freeze({base:"#cddc39","lighten-5":"#f9fbe7","lighten-4":"#f0f4c3","lighten-3":"#e6ee9c","lighten-2":"#dce775","lighten-1":"#d4e157","darken-1":"#c0ca33","darken-2":"#afb42b","darken-3":"#9e9d24","darken-4":"#827717","accent-1":"#f4ff81","accent-2":"#eeff41","accent-3":"#c6ff00","accent-4":"#aeea00"}),Object.freeze({base:"#ffeb3b","lighten-5":"#fffde7","lighten-4":"#fff9c4","lighten-3":"#fff59d","lighten-2":"#fff176","lighten-1":"#ffee58","darken-1":"#fdd835","darken-2":"#fbc02d","darken-3":"#f9a825","darken-4":"#f57f17","accent-1":"#ffff8d","accent-2":"#ffff00","accent-3":"#ffea00","accent-4":"#ffd600"}),Object.freeze({base:"#ffc107","lighten-5":"#fff8e1","lighten-4":"#ffecb3","lighten-3":"#ffe082","lighten-2":"#ffd54f","lighten-1":"#ffca28","darken-1":"#ffb300","darken-2":"#ffa000","darken-3":"#ff8f00","darken-4":"#ff6f00","accent-1":"#ffe57f","accent-2":"#ffd740","accent-3":"#ffc400","accent-4":"#ffab00"}),Object.freeze({base:"#ff9800","lighten-5":"#fff3e0","lighten-4":"#ffe0b2","lighten-3":"#ffcc80","lighten-2":"#ffb74d","lighten-1":"#ffa726","darken-1":"#fb8c00","darken-2":"#f57c00","darken-3":"#ef6c00","darken-4":"#e65100","accent-1":"#ffd180","accent-2":"#ffab40","accent-3":"#ff9100","accent-4":"#ff6d00"}),Object.freeze({base:"#ff5722","lighten-5":"#fbe9e7","lighten-4":"#ffccbc","lighten-3":"#ffab91","lighten-2":"#ff8a65","lighten-1":"#ff7043","darken-1":"#f4511e","darken-2":"#e64a19","darken-3":"#d84315","darken-4":"#bf360c","accent-1":"#ff9e80","accent-2":"#ff6e40","accent-3":"#ff3d00","accent-4":"#dd2c00"}),Object.freeze({base:"#795548","lighten-5":"#efebe9","lighten-4":"#d7ccc8","lighten-3":"#bcaaa4","lighten-2":"#a1887f","lighten-1":"#8d6e63","darken-1":"#6d4c41","darken-2":"#5d4037","darken-3":"#4e342e","darken-4":"#3e2723"}),Object.freeze({base:"#607d8b","lighten-5":"#eceff1","lighten-4":"#cfd8dc","lighten-3":"#b0bec5","lighten-2":"#90a4ae","lighten-1":"#78909c","darken-1":"#546e7a","darken-2":"#455a64","darken-3":"#37474f","darken-4":"#263238"}),Object.freeze({base:"#9e9e9e","lighten-5":"#fafafa","lighten-4":"#f5f5f5","lighten-3":"#eeeeee","lighten-2":"#e0e0e0","lighten-1":"#bdbdbd","darken-1":"#757575","darken-2":"#616161","darken-3":"#424242","darken-4":"#212121"}),Object.freeze({black:"#000000",white:"#ffffff",transparent:"transparent"});const Qe=e=>{e.stopPropagation()};function Ue(e,t,n){let c=!1,a=!1;return[c,a,()=>{n(0,c=!0)},()=>{n(0,c=!1)},()=>{n(1,a=!a),document.activeElement!=document.body&&document.activeElement.blur()},()=>{document.activeElement!=document.body&&document.activeElement.blur();let e=document.getElementById("vid");e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullScreen&&e.msRequestFullScreen()},()=>{n(0,c=!1)}]}return new class extends $e{constructor(e){super(),me(this,e,Ue,Ke,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map

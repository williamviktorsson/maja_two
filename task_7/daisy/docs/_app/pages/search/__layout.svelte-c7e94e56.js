import{S as y,i as b,s as w,e as _,c,a as m,d as u,b as f,g as S,J as p,R as d,K as h,T as q,Q as $,U as E,F as I,w as M,k as N,x as F,m as R,y as T,L as U,M as k,N as z,q as v,o as g,B as A}from"../../chunks/vendor-548886bf.js";import{r as B}from"../../chunks/singletons-a6a7384f.js";const C=D;async function D(r,e){return B.goto(r,e,[])}function J(r){let e,a,n,l,i;return{c(){e=_("div"),a=_("form"),n=_("input"),this.h()},l(s){e=c(s,"DIV",{class:!0});var t=m(e);a=c(t,"FORM",{class:!0});var o=m(a);n=c(o,"INPUT",{class:!0}),o.forEach(u),t.forEach(u),this.h()},h(){f(n,"class","svelte-10awlpb"),f(a,"class","svelte-10awlpb"),f(e,"class","svelte-10awlpb")},m(s,t){S(s,e,t),p(e,a),p(a,n),d(n,r[0]),l||(i=[h(n,"input",r[1]),h(a,"submit",q(r[2]))],l=!0)},p(s,[t]){t&1&&n.value!==s[0]&&d(n,s[0])},i:$,o:$,d(s){s&&u(e),l=!1,E(i)}}}function K(r,e,a){let n;function l(){n=this.value,a(0,n)}return[n,l,()=>{C(`/search/${n}`)}]}class L extends y{constructor(e){super();b(this,e,K,J,w,{})}}function O(r){let e,a,n,l;a=new L({});const i=r[1].default,s=I(i,r,r[0],null);return{c(){e=_("main"),M(a.$$.fragment),n=N(),s&&s.c(),this.h()},l(t){e=c(t,"MAIN",{class:!0});var o=m(e);F(a.$$.fragment,o),n=R(o),s&&s.l(o),o.forEach(u),this.h()},h(){f(e,"class","svelte-1uz4agv")},m(t,o){S(t,e,o),T(a,e,null),p(e,n),s&&s.m(e,null),l=!0},p(t,[o]){s&&s.p&&(!l||o&1)&&U(s,i,t,t[0],l?z(i,t[0],o,null):k(t[0]),null)},i(t){l||(v(a.$$.fragment,t),v(s,t),l=!0)},o(t){g(a.$$.fragment,t),g(s,t),l=!1},d(t){t&&u(e),A(a),s&&s.d(t)}}}function P(r,e,a){let{$$slots:n={},$$scope:l}=e;return r.$$set=i=>{"$$scope"in i&&a(0,l=i.$$scope)},[l,n]}class j extends y{constructor(e){super();b(this,e,P,O,w,{})}}export{j as default};
(function(e){function t(t){for(var o,r,s=t[0],c=t[1],i=t[2],l=0,f=[];l<s.length;l++)r=s[l],a[r]&&f.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a={app:0},u=[];function s(e){return c.p+"js/"+({contacto:"contacto",home:"home",juegos:"juegos"}[e]||e)+"."+{contacto:"f5574539",home:"6d3e66e6",juegos:"c9b9f82f"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={contacto:1,home:1,juegos:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var o="css/"+({contacto:"contacto",home:"home",juegos:"juegos"}[e]||e)+"."+{contacto:"0df95e11",home:"55ca5704",juegos:"ec89b5b9"}[e]+".css",a=c.p+o,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var i=u[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===o||l===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){i=f[s],l=i.getAttribute("data-href");if(l===o||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.request=o,delete r[e],p.parentNode.removeChild(p),n(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){r[e]=0}));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var u=new Promise(function(t,n){o=a[e]=[t,n]});t.push(o[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e),i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");u.type=o,u.request=r,n[1](u)}a[e]=void 0}};var f=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/TemplarKnightsGuild/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("div",{staticClass:"nav"},[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/juegos"}},[e._v("¿Qué jugamos?")])],1),n("li",[n("router-link",{attrs:{to:"/contacto"}},[e._v("Contacto")])],1)]),n("router-view"),e._m(0)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("small",[e._v("© CopyRight 2019. Todos los derechos reservados. Todas las marcas registradas pertenecen a sus respectivos dueños en EE. UU. y otros países. No afiliados con ninguna organización religiosa.")])])}],u=(n("034f"),n("2877")),s={},c=Object(u["a"])(s,r,a,!1,null,null,null),i=c.exports,l=n("8c4f");o["a"].use(l["a"]);var f=new l["a"]({mode:"history",base:"/TemplarKnightsGuild/",routes:[{path:"/",name:"home",component:()=>n.e("home").then(n.bind(null,"bb51"))},{path:"/juegos",name:"juegos",component:()=>n.e("juegos").then(n.bind(null,"decf"))},{path:"/contacto",name:"contacto",component:()=>n.e("contacto").then(n.bind(null,"c098"))}]});o["a"].config.productionTip=!1,new o["a"]({router:f,render:e=>e(i)}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.bdb94f4a.js.map
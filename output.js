(()=>{function s(e){return e!=null&&typeof e=="object"&&e["@@functional/placeholder"]===!0}function p(e){return function t(r){return arguments.length===0||s(r)?t:e.apply(this,arguments)}}function n(e){return function t(r,a){switch(arguments.length){case 0:return t;case 1:return s(r)?t:p(function(o){return e(r,o)});default:return s(r)&&s(a)?t:s(r)?p(function(o){return e(o,a)}):s(a)?p(function(o){return e(r,o)}):e(r,a)}}}function x(e,t){switch(e){case 0:return function(){return t.apply(this,arguments)};case 1:return function(r){return t.apply(this,arguments)};case 2:return function(r,a){return t.apply(this,arguments)};case 3:return function(r,a,o){return t.apply(this,arguments)};case 4:return function(r,a,o,f){return t.apply(this,arguments)};case 5:return function(r,a,o,f,u){return t.apply(this,arguments)};case 6:return function(r,a,o,f,u,m){return t.apply(this,arguments)};case 7:return function(r,a,o,f,u,m,l){return t.apply(this,arguments)};case 8:return function(r,a,o,f,u,m,l,W){return t.apply(this,arguments)};case 9:return function(r,a,o,f,u,m,l,W,E){return t.apply(this,arguments)};case 10:return function(r,a,o,f,u,m,l,W,E,z){return t.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function i(e,t,r){return function(){for(var a=[],o=0,f=e,u=0,m=!1;u<t.length||o<arguments.length;){var l;u<t.length&&(!s(t[u])||o>=arguments.length)?l=t[u]:(l=arguments[o],o+=1),a[u]=l,s(l)?m=!0:f-=1,u+=1}return!m&&f<=0?r.apply(this,a):x(Math.max(0,f),i(e,a,r))}}var B=n(function(t,r){return t===1?p(r):x(t,i(t,[],r))}),c=B;var b=Array.isArray||function(t){return t!=null&&t.length>=0&&Object.prototype.toString.call(t)==="[object Array]"};function h(e){return e!=null&&typeof e["@@transducer/step"]=="function"}function y(e,t,r){return function(){if(arguments.length===0)return r();var a=arguments[arguments.length-1];if(!b(a)){for(var o=0;o<e.length;){if(typeof a[e[o]]=="function")return a[e[o]].apply(a,Array.prototype.slice.call(arguments,0,-1));o+=1}if(h(a)){var f=t.apply(null,Array.prototype.slice.call(arguments,0,-1));return f(a)}}return r.apply(this,arguments)}}var g={init:function(){return this.xf["@@transducer/init"]()},result:function(e){return this.xf["@@transducer/result"](e)}};function d(e,t){return Object.prototype.hasOwnProperty.call(t,e)}var O=Object.prototype.toString,N=function(){return O.call(arguments)==="[object Arguments]"?function(t){return O.call(t)==="[object Arguments]"}:function(t){return d("callee",t)}}(),P=N;var L=!{toString:null}.propertyIsEnumerable("toString"),j=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],k=function(){"use strict";return arguments.propertyIsEnumerable("length")}(),S=function(t,r){for(var a=0;a<t.length;){if(t[a]===r)return!0;a+=1}return!1},R=typeof Object.keys=="function"&&!k?p(function(t){return Object(t)!==t?[]:Object.keys(t)}):p(function(t){if(Object(t)!==t)return[];var r,a,o=[],f=k&&P(t);for(r in t)d(r,t)&&(!f||r!=="length")&&(o[o.length]=r);if(L)for(a=j.length-1;a>=0;)r=j[a],d(r,t)&&!S(o,r)&&(o[o.length]=r),a-=1;return o}),v=R;function _(e,t){for(var r=0,a=t.length,o=Array(a);r<a;)o[r]=e(t[r]),r+=1;return o}function w(e,t,r){for(var a=0,o=r.length;a<o;)t=e(t,r[a]),a+=1;return t}var q=function(){function e(t,r){this.xf=r,this.f=t}return e.prototype["@@transducer/init"]=g.init,e.prototype["@@transducer/result"]=g.result,e.prototype["@@transducer/step"]=function(t,r){return this.xf["@@transducer/step"](t,this.f(r))},e}(),D=function(t){return function(r){return new q(t,r)}},I=D;var T=n(y(["fantasy-land/map","map"],I,function(t,r){switch(Object.prototype.toString.call(r)){case"[object Function]":return c(r.length,function(){return t.call(this,r.apply(this,arguments))});case"[object Object]":return w(function(a,o){return a[o]=t(r[o]),a},{},v(r));default:return _(t,r)}})),A=T;function Om(e,t){return A(a=>a*t,e)}function Pm(){return 0}})();

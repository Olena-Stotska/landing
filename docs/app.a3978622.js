parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({18:[function(require,module,exports) {

},{"./../font/fontello.eot":[["fontello.a9cfae89.eot",34],34],"./../font/fontello.woff2":[["fontello.fdabf6e9.woff2",35],35],"./../font/fontello.woff":[["fontello.dac428a3.woff",36],36],"./../font/fontello.ttf":[["fontello.82cfbcdb.ttf",37],37],"./../font/fontello.svg":[["fontello.c19076bc.svg",38],38],"./../img/play.svg":[["play.a6c47ddc.svg",39],39]}],24:[function(require,module,exports) {
var t=null;function r(){return t||(t=e()),t}function e(){try{throw new Error}catch(r){var t=(""+r.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return n(t[0])}return"/"}function n(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=r,exports.getBaseURL=n;
},{}],20:[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new u(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(s))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function s(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),s=n[i];return s?o[e]=s(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}):void 0}function u(r){this.executor=r,this.promise=null}u.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},u.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":24}],10:[function(require,module,exports) {
"use strict";var t=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function e(){return i(),c(),n().then(r).catch(function(t){console.error(t)})}function n(){return fetch("db.json").then(function(t){return t.json()})}function r(t){var e=document.getElementById("post-container"),n=document.getElementById("container");t.forEach(function(t){var r=e.content.cloneNode(!0);n.appendChild(o(r,t))})}function o(e,n){return Array.from(e.querySelectorAll("[data-bind]")).forEach(function(e){e.getAttribute("data-bind").split(",").forEach(function(r){var o=r.split(":"),i=t(o,2),c=i[0],a=i[1];a?e.setAttribute(a,n[c]):e.textContent=n[c]})}),e}function i(){document.addEventListener("click",function(t){var e=t.target;if("play"===e.name){var n=e.parentNode.querySelector("video"),r=function t(r){n.removeEventListener(r.type,t),e.parentNode.classList.remove("hide"),n.pause()};e.parentNode.classList.add("hide"),n.play(),n.addEventListener("pause",r),n.addEventListener("click",r)}})}function c(){var t=document.getElementById("scroll-btn");t.addEventListener("click",function(e){e.preventDefault();var n=t.getAttribute("href"),r=document.querySelector(n).getBoundingClientRect().top,o=window.pageYOffset,i=(r-o)/50;!function t(){o+=i,window.scrollTo(0,o),o<r?requestAnimationFrame(t):location.hash=n}()})}require("../css/style.scss"),"function"!=typeof window.fetch&&require("_bundle_loader")(require.resolve("whatwg-fetch")),e();
},{"../css/style.scss":18,"_bundle_loader":20,"whatwg-fetch":[["fetch.a1ee072b.js",21],"fetch.a1ee072b.map",21]}],40:[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require(20);b.register("js",require(40));
},{}]},{},[0,10], null)
//# sourceMappingURL=app.a3978622.map
"use strict";var precacheConfig=[["/presto/index.html","eba112e241cf8a48d83860ee3dd26c82"],["/presto/static/css/main.e079e5cd.css","3414b25ab4b717bfb044ba0330d98301"],["/presto/static/js/main.db3042ea.js","c54e8bc583f0df99b62bb12720e8c1d6"],["/presto/static/media/Noteworthy-Light.a0fca3f8.ttf","a0fca3f8141d76e654d5d4224fa3742f"],["/presto/static/media/bar-buffet.31055491.jpg","31055491e257fc56534608209353367f"],["/presto/static/media/chinese-food.7be70cb1.jpg","7be70cb13f4188ef0dc59cd06c62b1c0"],["/presto/static/media/incognito.59027c3f.png","59027c3f942f3656306a0aa5a3bb45c3"],["/presto/static/media/loader-big.a770b679.gif","a770b6797b68e3f8920e473eb824bac0"],["/presto/static/media/mexican-food.e162a2a2.jpg","e162a2a28b19714c293ae24fb7057a71"],["/presto/static/media/rw-widgets.12f0820c.woff","12f0820c451bdc75f4d1ef97732bf6e8"],["/presto/static/media/rw-widgets.792dcd18.svg","792dcd18baf5f544aabcad1883d673c2"],["/presto/static/media/rw-widgets.bc7c4a59.eot","bc7c4a59f924cf037aad6e1f9edba366"],["/presto/static/media/rw-widgets.eceddf47.ttf","eceddf474df95d8d4a7e316668c3be85"],["/presto/static/media/turkish-food.03816e2e.jpg","03816e2ef3cec3de75bcd5d90d50f08d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,r,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,t){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,r,/\.\w{8}\./);return[n.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!t.has(r)){var n=new Request(r,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+r+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(r,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(r){return Promise.all(r.map(function(r){if(!t.has(r.url))return e.delete(r)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,r=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,n),t=urlsToCacheKeys.has(r));var a="/presto/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(r=new URL(a,self.location).toString(),t=urlsToCacheKeys.has(r)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});
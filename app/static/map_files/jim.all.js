+function(t,e,n){"use strict";if("undefined"==typeof e)throw new Error("jim requires jQuery which is missed.");var r=e.fn.jquery.split(" ")[0].split(".");if(1e3*r[0]+100*r[1]+1*r[2]<1803)throw new Error("jim requires jQuery 1.8.3+");if("undefined"==typeof n)throw new Error("jim requires underscore.js which is missed.");if("undefined"==typeof window.jim||"jim"!==window.jim.ns){var i=function(){};i.pluginName="jim",i.ns="jim",i.plugins={},i.BUILD_NUM="be18e11",i.$=e,i._=n;var o=window.jim;i.old=o,window.jim=i,i.noConflict=function(){return window.jim=o,this};var s=function(t){return t["$"+this.pluginName]=this.old,this};i.registerPlugin=function(t,e,r){if("undefined"==typeof t)throw Error("Can't register plugin because context is undefined.");var i="$"+e;return r.old=t[i],r.pluginName=e,t[i]=r,r.ns=t.ns+"."+e,this.plugins[r.ns]=r,r.noConflict=n.bind(s,r,t),r},e(function(){e("body").addClass("jim")})}}(this,this.$,this._),function(t){var e=t.$,n=e.when,r=t._,i=r.bind,o=r.clone,s=r.extend,u=r.find,a=r.flatten,l=r.map,f=r.partial,c=r.property,h=r.isFunction,d=r.isArray,p=(r.has,r.isString),v=r.uniqueId,g=r.keys,m=r.toArray,y=e.Deferred,_=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,j=function(t,e,n,r){return r||""},w=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,b=/^[^'"\s]+$/g,x=function(t){return b.lastIndex=0,!!(t&&p(t)&&b.test(t))},O=function(t){t=t.replace(_,j);for(var e=[],n=w.exec(t);null!==n;)e.push(n[1]),n=w.exec(t);return w.lastIndex=0,e},E=function(t,e,n){var r=e[n];if(void 0===r&&(r=y(),e[n]=r),"pending"===r.state()){clearTimeout(r.timeout);var o=t.config("timeout");r.timeout=setTimeout(i(r.reject,r,void 0),o)}return r},S=function(t,r,o,s,u){var c=E(t,r,o);if("rejected"===c.state()&&(clearTimeout(c.timeout),c=y(),c.timeout=setTimeout(i(c.reject,c,void 0),t.config("timeout")),r[o]=c),"pending"===c.state()){var h=u.toString(),s=a([s,O(h)]),d=l(s,f(E,t,r));n.apply(e,d).done(function(){var e=m(arguments),n=new T(t,r,o,e,u);c.exports=n.exports,c.resolve(n.exports)}).fail(function(){c.reject(void 0)})}return c},D=function(t,e,n){if(x(n)){var r=e[n];return r&&r.exports}},T=function(t,e,n,r,i){this.exports={},i.apply(t,a([f(D,t,e),this.exports,this,r]))},A=function(t,e,n){var r=o(t)||{};return void 0===e?r:void 0===n?r[e]:void(t[e]=n)},q=function(){this.config=f(A,{timeout:5e3});var t={};this.module=function(e,n,r){if(h(e)&&(r=e,n=[],e=v("__module__")),d(e)&&(r=n,n=e,e=v("__module__")),x(e)&&h(n)&&(r=n,n=[]),d(n)){var i=u(n,function(t){return!x(t)});if(void 0!==i)throw Error("the name "+i+" is invalid.")}return x(e)&&d(n)&&h(r)&&S(this,t,e,n,r),this},this.require=f(D,this,t),this.ready=function(){var r=function(t,e){h(e)&&e.apply(t,Array.prototype.slice.call(arguments,2))};return function(i,o,s){d(i)||(s=o,o=i,i=g(t));var u=l(i,f(E,this,t));return n.apply(e,u).done(f(r,this,o)).fail(f(r,this,s)),this}}()};if(s(q.prototype,{extend:function(t){var e=c("loader")(t),n=new q;return n.noConflict=function(){return s(t,{loader:e}),this},s(t,{loader:n}),n}}),t.jim){var $=new q;$.extend(t.jim)}}(this),function(t){var e=t.jim,n=e._;e||((e=t.jim={}).registerPlugin=function(t,e,n){return t["$"+e]=n,n});var r={},i=function(){},o=e.registerPlugin(e,"config",i),s=function(t){return n.isString(t)&&/^[\w\.]+$/.test(t)},u=function(t){return n.isString(t)&&/^[\w]+$/.test(t)},a=function(t,e){if(e.length>0&&n.isObject(t)&&u(e[0])){var r=t[e.shift(0)];return e.length>0?a(r,e):r}},l=function(){if(arguments.length<3)throw Error("Argument Error: arguments length must be at least 2.");if(n.isObject(arguments[0])&&u(arguments[1])){if(3===arguments.length)return arguments[0][arguments[1]]=arguments[2],this;var t=arguments[0][arguments[1]];n.isObject(t)||(arguments[0][arguments[1]]=t={});var e=[];return n.each(arguments,function(n,r){0===r?e.push(t):1===r||e.push(n)}),l.apply(this,e)}throw Error("Argument Error: argument type error.")};o.all=function(){return r},o.get=function(t){if(0===arguments.length)return this.all();if(1===arguments.length){if(s(t))return a(r,t.split("."));throw Error("Argument Error: key is invalid.")}return a(r,n.map(arguments,function(t){return t}))},o.set=function(){var t=[];if(t.push(r),2===arguments.length&&s(arguments[0]))n.each(arguments[0].split("."),function(e){t.push(e)}),t.push(arguments[1]);else{if(!(arguments.length>2))throw Error("Argument Error: arguments length must be at least 2.");n.each(arguments,function(e){t.push(e)})}return l.apply(this,t)},o.getObject=function(t){if(n.isObject(t))return 2===arguments.length&&n.isString(arguments[1])?a(t,arguments[1].split(".")):a(t,n.map(arguments,function(t){return t}).slice(1))},o.setObject=function(t){if(n.isObject(t)&&!(arguments.length<3)){var e=[];if(e.push(t),3===arguments.length&&s(arguments[1]))n.each(arguments[1].split("."),function(t){e.push(t)}),e.push(arguments[2]);else{if(!(arguments.length>3))throw Error("Argument Error: arguments length must be at least 3.");n.each(Array.prototype.slice.call(arguments,1),function(t){e.push(t)})}return l.apply(this,e)}};var f=function(t){this.obj=t};f.prototype.set=function(){var t=Array.prototype.slice.call(arguments,0);return t.unshift(this.obj),o.setObject.apply(this,t)},f.prototype.get=function(){var t=Array.prototype.slice.call(arguments,0);return t.unshift(this.obj),o.getObject.apply(this,t)},o.wrapper=function(t){return new f(t)}}(this),function(t){var e=t.jim,n=e._;e||((e=t.jim={}).registerPlugin=function(t,e,n){return t["$"+e]=n,n});var r=function(t,e,r){if(void 0===e||null===e)return t;void 0===r&&(r="0");var i=n.map(n.range(e),function(){return r});return i.push(t),i.join("").slice(-1*e)},i=function(t){var e={year:t.getFullYear(),month:t.getMonth()+1,date:t.getDate(),hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()};return e},o=function(t){var e=[[4,/y{4}/g,"year"],[2,/y{2}/g,"year"],[2,/m{2}/g,"month"],[2,/d{2}/g,"date"],[2,/H{2}/g,"hours"],[2,/M{2}/g,"minutes"],[2,/S{2}/g,"seconds"],[null,/m/g,"month"],[null,/d/g,"date"],[null,/H/g,"hours"],[null,/M/g,"minutes"],[null,/S/g,"seconds"]],r=function(e,n){var r=n[0],i=n[1],o=this.dict[n[2]];return e.replace(i,t(o,r))};return function(t,i){var o=n.bind(r,{dict:t});return n.reduce(e,o,i)}}(r),s=function(t,e){var r=null;if(t instanceof Date)r=t;else if(n.isNumber(t)&&!n.isNaN(t))r=new Date(t);else{if(null!==t)return null;r=new Date}return o(i(r),e)},u=function(t){if(t instanceof Date)return new Date(t.getTime()).setHours(0,0,0,0)},a=function(t){var e=null;e=t instanceof Date?t:n.isNumber(t)&&!n.isNaN(t)?new Date(t):new Date,this.dateObj=e;var r=i(e);n.extend(this,r),this.dateDict=r};n.extend(a,{format:s,fulfill:r,midNight:u}),n.extend(a.prototype,{format:function(t){return n.isString(t)?o(this.dateDict,t):null},fulfill:r,getTime:function(){return this.dateObj.getTime()},midNight:function(){return u(this.dateObj)}}),e.registerPlugin(e,"date",a)}(this),function(t){var e=t.jim,n=t._;e||((e=t.jim={}).registerPlugin=function(t,e,n){return t["$"+e]=n,n});var r=function(t){return t&&t.toString&&"[object Object]"===t.toString()},i=/\s+/,o=n.partial(n.uniqueId,"id"),s=function(t,e,o,u,a,l,f,c){var h=n.toArray(arguments);if(r(u)){for(var d in u)if(u.hasOwnProperty(d)){var p=n.flatten([[t,e,o,d,u[d]],h.slice(4)],!0);s.apply(this,p)}}else if(u&&i.test(u))for(var v=u.split(i),g=v.length,m=0;m<g;m++){var p=n.flatten([[t,e,o,v[m]],h.slice(4)],!0);s.apply(this,p)}else t.apply(this,h.slice(1));return o},u=function(t,e,r,i,s,u,a){if(r&&n.isFunction(i)){var l=e[r]||(e[r]=[]),f=o(),c={callback:i,context:s,listener:u,id:f,once:a};if(l.push(c),u){var h=t.__listenId||(t.__listenId=o()),d=u.__listenings||(u.__listenings={}),p=d[h]||(d[h]={listenTo:t,handlers:{}});p.handlers[f]=c}}return e},a=function(t,e,r){var i=t.__listenings[e],o=i.handlers;delete o[r.id],n.isEmpty(o)&&delete t.__listenings[e]},l=function(t,e,n,r){var i=e[n];if(!i)return e;var o=i.indexOf(r);return o>=0&&(i.splice(o,1),r.listener&&a(r.listener,t.__listenId,r)),e},f=function(t,e,r,i,o,s){if(r){var u=e[r];if(!u)return e;for(var l=[],c=u.length,h=0;h<c;h++){var d=u[h];if(i&&d.callback!==i||o&&d.context!==o||s&&d.listenTo!==listenTo)l.push(d);else{var s=d.listener;s&&a(s,t.__listenId,d)}}0===l.length?delete e[r]:e[r]=l}else{var p=n.keys(e);for(var v in p)f(t,e,p[v],i,o,s)}return e},c=function(){var t=n.toArray(arguments),e=t[0],r=t[1],i=t[2],o=t.slice(3);if(i){var s=r[i];if(s){for(var u=[],a=s.length,f=0;f<a;f++){var c=s[f],h=c.callback,d=c.context,p=c.listener;h.apply(d||p||e,o),c.once&&(c.callback=n.noop,u.push(c))}for(var v=0;v<u.length;v++){var c=u[v];l(e,r,i,c)}}}return r},h=function(t,e,r,i,o,s){if(s){var u=e[s];if(u){var a=u.listenTo;if(a){var l=a.__events;l&&f(a,l,r,i,o,t)}}}else{var c=n.keys(e);for(var d in c)h(t,e,r,i,o,c[d])}return e},d={on:function(t,e,n){return this.__events=s(u,this,this.__events||{},t,e,n),this},once:function(t,e,n){return this.__events=s(u,this,this.__events||{},t,e,n,null,!0),this},off:function(t,e,n){return this.__events?(s(f,this,this.__events,t,e,n),this):this},trigger:function(t){if(!this.__events)return this;var e=n.toArray(arguments);return e.unshift(this.__events),e.unshift(this),e.unshift(c),s.apply(this,e),this},listenTo:function(t,e,n,r){return t.__events=s(u,t,t.__events||{},e,n,r,this),this},listenToOnce:function(t,e,n,r){return t.__events=s(u,t,t.__events||{},e,n,r,this,!0),this},stopListening:function(t,e,n,r){return this.__listenings?(h(this,this.__listenings,e,n,r,t?t.__listenId:null),this):this}},p={Events:d,extend:function(t){return n.extend(t,d)}};e.registerPlugin(e,"events",p)}(this),function(t){var e=t.jim;e||((e=t.jim={}).registerPlugin=function(t,e,n){return t["$"+e]=n,n});var n=window.console||{log:function(){},error:function(){}},r=function(){},i=e.registerPlugin(e,"switcher",r),o={};i.create=function(t,e){return o[t]=new s((!!e)),o[t]},i.get=function(t){return o[t]};var s=function(t){this.isOn=!!t};s.prototype.debug=function(t,e){return this.isOn&&t.apply(e||this,Array.prototype.slice.call(arguments,2)),this},s.prototype.log=function(){this.isOn&&(Function.prototype.bind&&n&&"object"==typeof n.log&&(n.log=Function.prototype.call.bind(n.log,n)),n.log.apply(n,arguments))},s.prototype.error=function(){this.isOn&&(Function.prototype.bind&&n&&"object"==typeof n.error&&(n.error=Function.prototype.call.bind(n.error,n)),n.error.apply(n,arguments))},s.prototype.turnOn=function(){return this.isOn=!0,this},s.prototype.turnOff=function(){return this.isOn=!1,this}}(this),function(t){var e=t.jim;e._;e||((e=t.jim={}).registerPlugin=function(t,e,n){return t["$"+e]=n,n});var n=function(t){return new r(t)},r=(e.registerPlugin(e,"urlparse",n),function(t){var e,n,r,i=document.createElement("a"),o={};for(i.href=t,e=i.search.replace(/^\?/,"").split("&"),r=0;r<e.length;r++)n=e[r].split("="),o[n[0]]=n[1];return{protocol:i.protocol,host:i.host,hostname:i.hostname,port:i.port,pathname:i.pathname,queryString:i.search,queries:o,hash:i.hash}})}(this),function(t){var e=t.jim,n=e._,r=e.$;e||((e=t.jim={}).registerPlugin=function(t,e,n){return t["$"+e]=n,n});var i=r.Deferred,o=r.when,s=n.bind,u=n.isFunction,a=n.isEqual,l=(n.each,n.extend),f=n.partial,c=n.isString,h=n.map,d=function(t,e){return h(e,function(e){return u(e)?s(e,t):e})},p=function(t,e,n,r,i,l){n.id=t.id?t.id+1:1,n.round=t.round?t.round+1:1;var f=n.deferred;f.done(u(i)?s(i,t):i).fail(u(l)?s(l,t):l);var c=u(r)?r(e):a(r,e);return void 0===c||c===!1||null===c?f.reject(e):c===!0?f.resolve(e):o(c).done(function(){f.resolve(e)}).fail(function(){f.reject(e)}),f},v=function(t,e,n){return n.id=t.id?t.id+1:1,n.round=t.round?t.round:1,n.deferred.reject(e)},g=function(t){this.obj=t,this.deferred=i(),this.id=0,this.round=0};l(g.prototype,{then:function(t,e,n,r){var r=void 0===r?this.obj:r,i=this.deferred,o=new g(r);return i.then(f(p,this,r,o,t,e,n),f(v,this,r,o)),o},result:function(){var t=this.deferred.state();return"resolved"===t||"rejected"!==t&&null},always:function(){return this.deferred.always.apply(this.deferred,d(this,arguments)),this},done:function(){return this.deferred.done.apply(this.deferred,d(this,arguments)),this},fail:function(){return this.deferred.fail.apply(this.deferred,d(this,arguments)),this}});var m=function(t){this.obj=t};l(m.prototype,{then:function(t,e,n,r){var r=void 0===r?this.obj:r,i=new g(r);return p(this,r,i,t,e,n),i},result:function(){return null}});var y=function(t){return new m(t)};y.register=function(t,e,n,r){if(c(t)&&u(e)){var i=function(t,i,o){return this.then(e,t||n,i||r,o)};m.prototype[t]=i,g.prototype[t]=i}return this},e.registerPlugin(e,"validate",y)}(this),function(t){var e=t.jim,n=e.loader;n.module("dateformatter",function(t,n,r){var i=e._,o=(i.bind,i.extend),s=(i.map,i.range,i.reduce,i.isNumber),u=i.isNaN,a=i.isString,l=i.partial,f=function(t){return s(t)&&!u(t)},c=function(t,e,n){if(a(t)||f(t)&&e&&f(e)){void 0===n&&(n="0");for(var r=[],i=0;i<e;i++)r.push(n);return r.push(t),r.join("").slice(-1*e)}return t},h=function(t){var e={year:t.getFullYear(),month:t.getMonth()+1,date:t.getDate(),hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()};return e},d=function(){var t=[[4,/y{4}/g,"year"],[2,/y{2}/g,"year"],[2,/m{2}/g,"month"],[2,/d{2}/g,"date"],[2,/H{2}/g,"hours"],[2,/M{2}/g,"minutes"],[2,/S{2}/g,"seconds"],[null,/m/g,"month"],[null,/d/g,"date"],[null,/H/g,"hours"],[null,/M/g,"minutes"],[null,/S/g,"seconds"]],e=t.length;return function(n,r){for(var i=0;i<e;i++){var o=t[i];r=r.replace(o[1],c(n[o[2]],o[0]))}return r}}(),p=function(t){f(t)&&(t=new Date(t)),t instanceof Date||(t=new Date),this.midnight=new Date(t.getTime()).setHours(0,0,0,0),this.time=t.getTime();var e=h(t);this.getDate=function(){return t},this.format=l(d,e),o(this,e)},v=function(t){return new p(t)};v.fulfill=c,r.exports=v})}(this),function(t){var e=t.jim,n=t._,r=n.extend,i=function(t){return t&&t.toString&&"[object Object]"===t.toString()},o=/\s+/,s=n.partial(n.uniqueId,"id"),u=function(t,e,r,s,a,l,f,c){var h=n.toArray(arguments);if(i(s)){for(var d in s)if(s.hasOwnProperty(d)){var p=n.flatten([[t,e,r,d,s[d]],h.slice(4)],!0);u.apply(this,p)}}else if(s&&o.test(s))for(var v=s.split(o),g=v.length,m=0;m<g;m++){var p=n.flatten([[t,e,r,v[m]],h.slice(4)],!0);u.apply(this,p)}else t.apply(this,h.slice(1));return r},a=function(t,e,r,i,o,u,a){if(r&&n.isFunction(i)){var l=e[r]||(e[r]=[]),f=s(),c={callback:i,context:o,listener:u,id:f,once:a};if(l.push(c),u){var h=t.__listenId||(t.__listenId=s()),d=u.__listenings||(u.__listenings={}),p=d[h]||(d[h]={listenTo:t,handlers:{}});p.handlers[f]=c}}return e},l=function(t,e,r){var i=t.__listenings[e],o=i.handlers;delete o[r.id],n.isEmpty(o)&&delete t.__listenings[e]},f=function(t,e,n,r){var i=e[n];if(!i)return e;var o=i.indexOf(r);return o>=0&&(i.splice(o,1),r.listener&&l(r.listener,t.__listenId,r)),e},c=function(t,e,r,i,o,s){if(r){var u=e[r];if(!u)return e;for(var a=[],f=u.length,h=0;h<f;h++){var d=u[h];if(i&&d.callback!==i||o&&d.context!==o||s&&d.listenTo!==listenTo)a.push(d);else{var s=d.listener;s&&l(s,t.__listenId,d)}}0===a.length?delete e[r]:e[r]=a}else{var p=n.keys(e);for(var v in p)c(t,e,p[v],i,o,s)}return e},h=function(){var t=n.toArray(arguments),e=t[0],r=t[1],i=t[2],o=t.slice(3);if(i){var s=r[i];if(s){for(var u=[],a=s.length,l=0;l<a;l++){var c=s[l],h=c.callback,d=c.context,p=c.listener;h.apply(d||p||e,o),c.once&&(c.callback=n.noop,u.push(c))}for(var v=0;v<u.length;v++){var c=u[v];f(e,r,i,c)}}}return r},d=function(t,e,r,i,o,s){if(s){var u=e[s];if(u){var a=u.listenTo;if(a){var l=a.__events;l&&c(a,l,r,i,o,t)}}}else{var f=n.keys(e);for(var h in f)d(t,e,r,i,o,f[h])}return e},p={on:function(t,e,n){return this.__events=u(a,this,this.__events||{},t,e,n),this},once:function(t,e,n){return this.__events=u(a,this,this.__events||{},t,e,n,null,!0),this},off:function(t,e,n){return this.__events?(u(c,this,this.__events,t,e,n),this):this},trigger:function(t){if(!this.__events)return this;var e=n.toArray(arguments);return e.unshift(this.__events),e.unshift(this),e.unshift(h),u.apply(this,e),this},listenTo:function(t,e,n,r){return t.__events=u(a,t,t.__events||{},e,n,r,this),this},listenToOnce:function(t,e,n,r){return t.__events=u(a,t,t.__events||{},e,n,r,this,!0),this},stopListening:function(t,e,n,r){return this.__listenings?(d(this,this.__listenings,e,n,r,t?t.__listenId:null),this):this}},v=e.loader;v.module("events",function(t,e,n){n.exports={extend:function(t){return r(t,p)}}})}(this),function(t){var e=t.jim,n=e.loader,r=e._,i=r.noop,o=r.each,s=r.extend,u=function(t){var e={active:!!t};this.state=function(){return e.active},this.turnOn=function(){return e.active=!0,this},this.turnOff=function(){return e.active=!1,this},this.toggle=function(){return e.active=!e.active,this}},a=Array.prototype,l=Function.prototype,f=window.console||{debug:i,error:i,info:i,log:i,warn:i};l.bind&&o(["debug","error","info","log","warn"],function(t){var e=f[t];"object"==typeof e&&(f[t]=l.call.bind(e,f))});var c={run:function(t){return this.state()&&t.apply(this,a.slice.call(arguments,1)),this}};o(["debug","error","info","log","warn"],function(t){c[t]=function(){this.state()&&f[t].apply(f,arguments)}}),s(u.prototype,c);var h=n.extend(),d=function(t,e){return h.module(t,function(t,n,r){r.exports=new u((!!e))}),h.require(t)};n.module("switcher",function(t,e,n){n.exports={create:function(t,e){return void 0===e&&(e=!0),d(t,e)},get:function(t){return h.require(t)}}})}(this),+function(t){var e=t.jim,n=e.loader,r=e._,i=(r.map,r.reduce);n.module("urlparse",function(t,e,n){var r=/^\?/,o=function(t){var e=document.createElement("a");e.href=t;var n=e.search.replace(r,"");return n=n?i(n.split("&"),function(t,e){var n=e.split("=");return t[n[0]]=n[1],t},{}):{},{hash:e.hash,host:e.host,hostname:e.hostname,pathname:e.pathname,port:e.port,protocol:e.protocol,queries:n,queryString:e.search}};n.exports={parse:o}})}(this),function(t){var e=t.jim,n=e._,r=e.$,i=r.Deferred,o=r.when,s=n.bind,u=n.isFunction,a=n.isEqual,l=(n.each,n.extend),f=n.partial,c=n.isString,h=n.map,d=function(t,e){return h(e,function(e){return u(e)?s(e,t):e})},p=function(t,e,n,r,i,l){n.id=t.id?t.id+1:1,n.round=t.round?t.round+1:1;var f=n.deferred;f.done(u(i)?s(i,t):i).fail(u(l)?s(l,t):l);var c=u(r)?r(e):a(r,e);return void 0===c||c===!1||null===c?f.reject(e):c===!0?f.resolve(e):o(c).done(function(){f.resolve(e)}).fail(function(){f.reject(e)}),f},v=function(t,e,n){return n.id=t.id?t.id+1:1,n.round=t.round?t.round:1,n.deferred.reject(e)},g=function(t){this.obj=t,this.deferred=i(),this.id=0,this.round=0};l(g.prototype,{then:function(t,e,n,r){var r=void 0===r?this.obj:r,i=this.deferred,o=this.constructor,s=new o(r);return i.then(f(p,this,r,s,t,e,n),f(v,this,r,s)),s},result:function(){var t=this.deferred.state();return"resolved"===t||"rejected"!==t&&null},always:function(){return this.deferred.always.apply(this.deferred,d(this,arguments)),this},done:function(){return this.deferred.done.apply(this.deferred,d(this,arguments)),this},fail:function(){return this.deferred.fail.apply(this.deferred,d(this,arguments)),this},register:function(t,e,n,r){if(c(t)&&u(e)){var i=function(t,i,o){return this.then(e,t||n,i||r,o)};this.constructor.prototype[t]=i}return this}});var m=function(t){var e=function(){return g.apply(this,arguments)},n=function(){this.constructor=e};n.prototype=g.prototype,e.prototype=new n;var r=new e(t);return r.then=function(t,n,r,i){var i=void 0===i?this.obj:i,o=new e(i);return p(this,i,o,t,n,r),o},r};e.loader.module("validate",function(t,e,n){n.exports=m});var y=function(t){this.obj=t};l(y.prototype,{then:function(t,e,n,r){var r=void 0===r?this.obj:r,i=new g(r);return p(this,r,i,t,e,n),i},result:function(){return null}});var _=function(t){return new y(t)};_.register=function(t,e,n,r){if(c(t)&&u(e)){var i=function(t,i,o){return this.then(e,t||n,i||r,o)};y.prototype[t]=i,g.prototype[t]=i}return this}}(this);
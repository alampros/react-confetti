import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as P,b as Je,R as b,a as U,g as Ze}from"./index-DlA0hZqf.js";import{v as et}from"./v4-CtRu48qb.js";var H=function(i,e){return H=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])},H(i,e)};function Pe(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");H(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var B=function(){return B=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},B.apply(this,arguments)};function Se(i,e){var t={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(t[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(i);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(i,r[o])&&(t[r[o]]=i[r[o]]);return t}function be(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n}function xe(i,e){return function(t,r){e(t,r,i)}}function Ee(i,e,t,r,o,n){function a(v){if(v!==void 0&&typeof v!="function")throw new TypeError("Function expected");return v}for(var s=r.kind,u=s==="getter"?"get":s==="setter"?"set":"value",c=!e&&i?r.static?i:i.prototype:null,f=e||(c?Object.getOwnPropertyDescriptor(c,r.name):{}),l,g=!1,h=t.length-1;h>=0;h--){var p={};for(var d in r)p[d]=d==="access"?{}:r[d];for(var d in r.access)p.access[d]=r.access[d];p.addInitializer=function(v){if(g)throw new TypeError("Cannot add initializers after decoration has completed");n.push(a(v||null))};var y=(0,t[h])(s==="accessor"?{get:f.get,set:f.set}:f[u],p);if(s==="accessor"){if(y===void 0)continue;if(y===null||typeof y!="object")throw new TypeError("Object expected");(l=a(y.get))&&(f.get=l),(l=a(y.set))&&(f.set=l),(l=a(y.init))&&o.unshift(l)}else(l=a(y))&&(s==="field"?o.unshift(l):f[u]=l)}c&&Object.defineProperty(c,r.name,f),g=!0}function Re(i,e,t){for(var r=arguments.length>2,o=0;o<e.length;o++)t=r?e[o].call(i,t):e[o].call(i);return r?t:void 0}function Me(i){return typeof i=="symbol"?i:"".concat(i)}function je(i,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(i,"name",{configurable:!0,value:t?"".concat(t," ",e):e})}function Ie(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)}function Ce(i,e,t,r){function o(n){return n instanceof t?n:new t(function(a){a(n)})}return new(t||(t=Promise))(function(n,a){function s(f){try{c(r.next(f))}catch(l){a(l)}}function u(f){try{c(r.throw(f))}catch(l){a(l)}}function c(f){f.done?n(f.value):o(f.value).then(s,u)}c((r=r.apply(i,e||[])).next())})}function De(i,e){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},r,o,n,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=s(0),a.throw=s(1),a.return=s(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(f){return u([c,f])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(t=0)),t;)try{if(r=1,o&&(n=c[0]&2?o.return:c[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,c[1])).done)return n;switch(o=0,n&&(c=[c[0]&2,n.value]),c[0]){case 0:case 1:n=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,o=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!n||c[1]>n[0]&&c[1]<n[3])){t.label=c[1];break}if(c[0]===6&&t.label<n[1]){t.label=n[1],n=c;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(c);break}n[2]&&t.ops.pop(),t.trys.pop();continue}c=e.call(i,t)}catch(f){c=[6,f],o=0}finally{r=n=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}var Y=Object.create?function(i,e,t,r){r===void 0&&(r=t);var o=Object.getOwnPropertyDescriptor(e,t);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(i,r,o)}:function(i,e,t,r){r===void 0&&(r=t),i[r]=e[t]};function Te(i,e){for(var t in i)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&Y(e,i,t)}function V(i){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&i[e],r=0;if(t)return t.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&r>=i.length&&(i=void 0),{value:i&&i[r++],done:!i}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function z(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var r=t.call(i),o,n=[],a;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)n.push(o.value)}catch(s){a={error:s}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(a)throw a.error}}return n}function Fe(){for(var i=[],e=0;e<arguments.length;e++)i=i.concat(z(arguments[e]));return i}function Ae(){for(var i=0,e=0,t=arguments.length;e<t;e++)i+=arguments[e].length;for(var r=Array(i),o=0,e=0;e<t;e++)for(var n=arguments[e],a=0,s=n.length;a<s;a++,o++)r[o]=n[a];return r}function Be(i,e,t){if(t||arguments.length===2)for(var r=0,o=e.length,n;r<o;r++)(n||!(r in e))&&(n||(n=Array.prototype.slice.call(e,0,r)),n[r]=e[r]);return i.concat(n||Array.prototype.slice.call(e))}function S(i){return this instanceof S?(this.v=i,this):new S(i)}function Ve(i,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(i,e||[]),o,n=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),o[Symbol.asyncIterator]=function(){return this},o;function a(h){return function(p){return Promise.resolve(p).then(h,l)}}function s(h,p){r[h]&&(o[h]=function(d){return new Promise(function(y,v){n.push([h,d,y,v])>1||u(h,d)})},p&&(o[h]=p(o[h])))}function u(h,p){try{c(r[h](p))}catch(d){g(n[0][3],d)}}function c(h){h.value instanceof S?Promise.resolve(h.value.v).then(f,l):g(n[0][2],h)}function f(h){u("next",h)}function l(h){u("throw",h)}function g(h,p){h(p),n.shift(),n.length&&u(n[0][0],n[0][1])}}function qe(i){var e,t;return e={},r("next"),r("throw",function(o){throw o}),r("return"),e[Symbol.iterator]=function(){return this},e;function r(o,n){e[o]=i[o]?function(a){return(t=!t)?{value:S(i[o](a)),done:!1}:n?n(a):a}:n}}function Ue(i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=i[Symbol.asyncIterator],t;return e?e.call(i):(i=typeof V=="function"?V(i):i[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=i[n]&&function(a){return new Promise(function(s,u){a=i[n](a),o(s,u,a.done,a.value)})}}function o(n,a,s,u){Promise.resolve(u).then(function(c){n({value:c,done:s})},a)}}function Ye(i,e){return Object.defineProperty?Object.defineProperty(i,"raw",{value:e}):i.raw=e,i}var tt=Object.create?function(i,e){Object.defineProperty(i,"default",{enumerable:!0,value:e})}:function(i,e){i.default=e},$=function(i){return $=Object.getOwnPropertyNames||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[t.length]=r);return t},$(i)};function Ne(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t=$(i),r=0;r<t.length;r++)t[r]!=="default"&&Y(e,i,t[r]);return tt(e,i),e}function We(i){return i&&i.__esModule?i:{default:i}}function Le(i,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!r:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(i):r?r.value:e.get(i)}function He(i,e,t,r,o){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?i!==e||!o:!e.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?o.call(i,t):o?o.value=t:e.set(i,t),t}function $e(i,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof i=="function"?e===i:i.has(e)}function Xe(i,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,o;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],t&&(o=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");o&&(r=function(){try{o.call(this)}catch(n){return Promise.reject(n)}}),i.stack.push({value:e,dispose:r,async:t})}else t&&i.stack.push({async:!0});return e}var nt=typeof SuppressedError=="function"?SuppressedError:function(i,e,t){var r=new Error(t);return r.name="SuppressedError",r.error=i,r.suppressed=e,r};function ze(i){function e(n){i.error=i.hasError?new nt(n,i.error,"An error was suppressed during disposal."):n,i.hasError=!0}var t,r=0;function o(){for(;t=i.stack.pop();)try{if(!t.async&&r===1)return r=0,i.stack.push(t),Promise.resolve().then(o);if(t.dispose){var n=t.dispose.call(t.value);if(t.async)return r|=2,Promise.resolve(n).then(o,function(a){return e(a),o()})}else r|=1}catch(a){e(a)}if(r===1)return i.hasError?Promise.reject(i.error):Promise.resolve();if(i.hasError)throw i.error}return o()}function Ge(i,e){return typeof i=="string"&&/^\.\.?\//.test(i)?i.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(t,r,o,n,a){return r?e?".jsx":".js":o&&(!n||!a)?t:o+n+"."+a.toLowerCase()+"js"}):i}const rt={__extends:Pe,__assign:B,__rest:Se,__decorate:be,__param:xe,__esDecorate:Ee,__runInitializers:Re,__propKey:Me,__setFunctionName:je,__metadata:Ie,__awaiter:Ce,__generator:De,__createBinding:Y,__exportStar:Te,__values:V,__read:z,__spread:Fe,__spreadArrays:Ae,__spreadArray:Be,__await:S,__asyncGenerator:Ve,__asyncDelegator:qe,__asyncValues:Ue,__makeTemplateObject:Ye,__importStar:Ne,__importDefault:We,__classPrivateFieldGet:Le,__classPrivateFieldSet:He,__classPrivateFieldIn:$e,__addDisposableResource:Xe,__disposeResources:ze,__rewriteRelativeImportExtension:Ge},it=Object.freeze(Object.defineProperty({__proto__:null,__addDisposableResource:Xe,get __assign(){return B},__asyncDelegator:qe,__asyncGenerator:Ve,__asyncValues:Ue,__await:S,__awaiter:Ce,__classPrivateFieldGet:Le,__classPrivateFieldIn:$e,__classPrivateFieldSet:He,__createBinding:Y,__decorate:be,__disposeResources:ze,__esDecorate:Ee,__exportStar:Te,__extends:Pe,__generator:De,__importDefault:We,__importStar:Ne,__makeTemplateObject:Ye,__metadata:Ie,__param:xe,__propKey:Me,__read:z,__rest:Se,__rewriteRelativeImportExtension:Ge,__runInitializers:Re,__setFunctionName:je,__spread:Fe,__spreadArray:Be,__spreadArrays:Ae,__values:V,default:rt},Symbol.toStringTag,{value:"Module"}));function ot(i){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];i&&i.addEventListener&&i.addEventListener.apply(i,e)}function at(i){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];i&&i.removeEventListener&&i.removeEventListener.apply(i,e)}var N=typeof window<"u",st=function(i){P.useEffect(i,[])},ct=function(i){var e=P.useRef(i);e.current=i,st(function(){return function(){return e.current()}})},ut=function(i){var e=P.useRef(0),t=P.useState(i),r=t[0],o=t[1],n=P.useCallback(function(a){cancelAnimationFrame(e.current),e.current=requestAnimationFrame(function(){o(a)})},[]);return ct(function(){cancelAnimationFrame(e.current)}),[r,n]};const G=Je(it);var Q=function(i){var e={},t=e.initialWidth,r=t===void 0?1/0:t,o=e.initialHeight,n=o===void 0?1/0:o,a=e.onChange,s=ut({width:N?window.innerWidth:r,height:N?window.innerHeight:n}),u=s[0],c=s[1];return P.useEffect(function(){if(N){var f=function(){var l=window.innerWidth,g=window.innerHeight;c({width:l,height:g}),a&&a(l,g)};return ot(window,"resize",f),function(){at(window,"resize",f)}}},[]),u},W,Z;function ft(){if(Z)return W;Z=1;var i={linear:function(e,t,r,o){var n=r-t;return n*e/o+t},easeInQuad:function(e,t,r,o){var n=r-t;return n*(e/=o)*e+t},easeOutQuad:function(e,t,r,o){var n=r-t;return-n*(e/=o)*(e-2)+t},easeInOutQuad:function(e,t,r,o){var n=r-t;return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,r,o){var n=r-t;return n*(e/=o)*e*e+t},easeOutCubic:function(e,t,r,o){var n=r-t;return n*((e=e/o-1)*e*e+1)+t},easeInOutCubic:function(e,t,r,o){var n=r-t;return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,r,o){var n=r-t;return n*(e/=o)*e*e*e+t},easeOutQuart:function(e,t,r,o){var n=r-t;return-n*((e=e/o-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,r,o){var n=r-t;return(e/=o/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,r,o){var n=r-t;return n*(e/=o)*e*e*e*e+t},easeOutQuint:function(e,t,r,o){var n=r-t;return n*((e=e/o-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,r,o){var n=r-t;return(e/=o/2)<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,r,o){var n=r-t;return-n*Math.cos(e/o*(Math.PI/2))+n+t},easeOutSine:function(e,t,r,o){var n=r-t;return n*Math.sin(e/o*(Math.PI/2))+t},easeInOutSine:function(e,t,r,o){var n=r-t;return-n/2*(Math.cos(Math.PI*e/o)-1)+t},easeInExpo:function(e,t,r,o){var n=r-t;return e==0?t:n*Math.pow(2,10*(e/o-1))+t},easeOutExpo:function(e,t,r,o){var n=r-t;return e==o?t+n:n*(-Math.pow(2,-10*e/o)+1)+t},easeInOutExpo:function(e,t,r,o){var n=r-t;return e===0?t:e===o?t+n:(e/=o/2)<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,r,o){var n=r-t;return-n*(Math.sqrt(1-(e/=o)*e)-1)+t},easeOutCirc:function(e,t,r,o){var n=r-t;return n*Math.sqrt(1-(e=e/o-1)*e)+t},easeInOutCirc:function(e,t,r,o){var n=r-t;return(e/=o/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,r,o){var n=r-t,a,s,u;return u=1.70158,s=0,a=n,e===0?t:(e/=o)===1?t+n:(s||(s=o*.3),a<Math.abs(n)?(a=n,u=s/4):u=s/(2*Math.PI)*Math.asin(n/a),-(a*Math.pow(2,10*(e-=1))*Math.sin((e*o-u)*(2*Math.PI)/s))+t)},easeOutElastic:function(e,t,r,o){var n=r-t,a,s,u;return u=1.70158,s=0,a=n,e===0?t:(e/=o)===1?t+n:(s||(s=o*.3),a<Math.abs(n)?(a=n,u=s/4):u=s/(2*Math.PI)*Math.asin(n/a),a*Math.pow(2,-10*e)*Math.sin((e*o-u)*(2*Math.PI)/s)+n+t)},easeInOutElastic:function(e,t,r,o){var n=r-t,a,s,u;return u=1.70158,s=0,a=n,e===0?t:(e/=o/2)===2?t+n:(s||(s=o*(.3*1.5)),a<Math.abs(n)?(a=n,u=s/4):u=s/(2*Math.PI)*Math.asin(n/a),e<1?-.5*(a*Math.pow(2,10*(e-=1))*Math.sin((e*o-u)*(2*Math.PI)/s))+t:a*Math.pow(2,-10*(e-=1))*Math.sin((e*o-u)*(2*Math.PI)/s)*.5+n+t)},easeInBack:function(e,t,r,o,n){var a=r-t;return n===void 0&&(n=1.70158),a*(e/=o)*e*((n+1)*e-n)+t},easeOutBack:function(e,t,r,o,n){var a=r-t;return n===void 0&&(n=1.70158),a*((e=e/o-1)*e*((n+1)*e+n)+1)+t},easeInOutBack:function(e,t,r,o,n){var a=r-t;return n===void 0&&(n=1.70158),(e/=o/2)<1?a/2*(e*e*(((n*=1.525)+1)*e-n))+t:a/2*((e-=2)*e*(((n*=1.525)+1)*e+n)+2)+t},easeInBounce:function(e,t,r,o){var n=r-t,a;return a=i.easeOutBounce(o-e,0,n,o),n-a+t},easeOutBounce:function(e,t,r,o){var n=r-t;return(e/=o)<1/2.75?n*(7.5625*e*e)+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,r,o){var n=r-t,a;return e<o/2?(a=i.easeInBounce(e*2,0,n,o),a*.5+t):(a=i.easeOutBounce(e*2-o,0,n,o),a*.5+n*.5+t)}};return W=i,W}var lt=ft();function ht(i){return i*Math.PI/180}function _(i,e){return i+Math.random()*(e-i)}function K(i,e){return Math.floor(i+Math.random()*(e-i+1))}const pt=1e3/60;class dt{constructor(e,t,r,o){this.getOptions=t;const{colors:n,initialVelocityX:a,initialVelocityY:s}=this.getOptions();this.context=e,this.x=r,this.y=o,this.w=_(5,20),this.h=_(5,20),this.radius=_(5,10),this.vx=typeof a=="number"?_(-a,a):_(a.min,a.max),this.vy=typeof s=="number"?_(-s,0):_(s.min,s.max),this.shape=K(0,2),this.angle=ht(_(0,360)),this.angularSpin=_(-.2,.2),this.color=n[Math.floor(Math.random()*n.length)],this.rotateY=_(0,1),this.rotationDirection=_(0,1)?1:-1}update(e){const{gravity:t,wind:r,friction:o,opacity:n,drawShape:a}=this.getOptions(),s=e/pt;this.x+=this.vx*s,this.y+=this.vy*s,this.vy+=t*s,this.vx+=r*s,this.vx*=o**s,this.vy*=o**s,this.rotateY>=1&&this.rotationDirection===1?this.rotationDirection=-1:this.rotateY<=-1&&this.rotationDirection===-1&&(this.rotationDirection=1);const u=.1*this.rotationDirection*s;if(this.rotateY+=u,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=n,this.context.lineCap="round",this.context.lineWidth=2,a&&typeof a=="function")a.call(this,this.context);else switch(this.shape){case 0:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case 1:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case 2:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class yt{constructor(e,t){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenInitTime=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=o=>{this.particles.splice(o,1)},this.getParticle=()=>{const o=_(this.x,this.w+this.x),n=_(this.y,this.h+this.y);return new dt(this.context,this.getOptions,o,n)},this.animate=o=>{const{canvas:n,context:a,particlesGenerated:s,lastNumberOfPieces:u}=this,{run:c,recycle:f,numberOfPieces:l,debug:g,tweenFunction:h,tweenDuration:p}=this.getOptions();if(!c)return!1;const d=this.particles.length,y=f?d:s;if(y<l){u!==l&&(this.tweenInitTime=0,this.lastNumberOfPieces=l),this.tweenInitTime+=o;const v=h(this.tweenInitTime,y,l,p),O=Math.round(v-y);for(let E=0;E<O;E++)this.particles.push(this.getParticle());this.particlesGenerated+=O}g&&(a.font="12px sans-serif",a.fillStyle="#333",a.textAlign="right",a.fillText(`Particles: ${d}`,n.width-10,n.height-20));for(let v=this.particles.length-1;v>=0;v--){const O=this.particles[v];O.update(o),(O.y>n.height||O.y<-100||O.x>n.width+100||O.x<-100)&&(f&&y<=l?this.particles[v]=this.getParticle():this.removeParticleAt(v))}return d>0||y<l},this.canvas=e;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.getOptions=t}}const k={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:lt.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class vt{constructor(e,t){this.lastFrameTime=0,this.setOptionsWithDefaults=o=>{const n={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...n,...k,...o},Object.assign(this,o.confettiSource)},this.update=(o=0)=>{const{options:{run:n,onConfettiComplete:a,frameRate:s},canvas:u,context:c}=this,f=Math.min(o-this.lastFrameTime,50);if(s&&f<1e3/s){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=o-(s?f%s:0),n&&(c.fillStyle="white",c.clearRect(0,0,u.width,u.height)),this.generator.animate(f)?this.rafId=requestAnimationFrame(this.update):(a&&typeof a=="function"&&this.generator.particlesGenerated>0&&a.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=e;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.generator=new yt(this.canvas,()=>this.options),this.options=t,this.update()}get options(){return this._options}set options(e){var o,n;const t=(o=this._options)==null?void 0:o.run,r=(n=this._options)==null?void 0:n.recycle;this.setOptionsWithDefaults(e),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof e.recycle=="boolean"&&e.recycle&&r===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof e.run=="boolean"&&e.run&&t===!1&&this.update()}}const mt=b.createRef(),q=class q extends b.Component{constructor(e){super(e),this.canvas=b.createRef(),this.canvas=e.canvasRef||mt}componentDidMount(){if(this.canvas.current){const e=L(this.props)[0];this.confetti=new vt(this.canvas.current,e)}}componentDidUpdate(){const e=L(this.props)[0];this.confetti&&(this.confetti.options=e)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[e,t]=L(this.props),r={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...t.style};return m.jsx("canvas",{width:e.width,height:e.height,ref:this.canvas,...t,style:r})}};q.defaultProps={...k},q.displayName="ReactConfetti";let X=q;function L(i){const e={},t={},r={},o=[...Object.keys(k),"confettiSource","drawShape","onConfettiComplete","frameRate"],n=["canvasRef"];for(const a in i){const s=i[a];o.includes(a)?e[a]=s:n.includes(a)?n[a]=s:r[a]=s}return[e,r,t]}const x=b.forwardRef((i,e)=>m.jsx(X,{canvasRef:e,...i}));x.__docgenInfo={description:"",methods:[],displayName:"ReactConfetti",props:{canvasRef:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLCanvasElement>",elements:[{name:"HTMLCanvasElement"}]},description:""}}};var R={},M={},j={},I={},ee;function gt(){if(ee)return I;ee=1,Object.defineProperty(I,"__esModule",{value:!0});var i=U(),e=function(t){i.useEffect(t,[])};return I.default=e,I}var te;function wt(){if(te)return j;te=1,Object.defineProperty(j,"__esModule",{value:!0});var i=G,e=U(),t=i.__importDefault(gt()),r=function(o){var n=e.useRef(o);n.current=o,t.default(function(){return function(){return n.current()}})};return j.default=r,j}var ne;function _t(){if(ne)return M;ne=1,Object.defineProperty(M,"__esModule",{value:!0});var i=G,e=U(),t=i.__importDefault(wt()),r=function(o){var n=e.useRef(0),a=e.useState(o),s=a[0],u=a[1],c=e.useCallback(function(f){cancelAnimationFrame(n.current),n.current=requestAnimationFrame(function(){u(f)})},[]);return t.default(function(){cancelAnimationFrame(n.current)}),[s,c]};return M.default=r,M}var w={},re;function Ot(){if(re)return w;re=1,Object.defineProperty(w,"__esModule",{value:!0}),w.isNavigator=w.isBrowser=w.off=w.on=w.noop=void 0;var i=function(){};w.noop=i;function e(r){for(var o=[],n=1;n<arguments.length;n++)o[n-1]=arguments[n];r&&r.addEventListener&&r.addEventListener.apply(r,o)}w.on=e;function t(r){for(var o=[],n=1;n<arguments.length;n++)o[n-1]=arguments[n];r&&r.removeEventListener&&r.removeEventListener.apply(r,o)}return w.off=t,w.isBrowser=typeof window<"u",w.isNavigator=typeof navigator<"u",w}var ie;function Pt(){if(ie)return R;ie=1,Object.defineProperty(R,"__esModule",{value:!0});var i=G,e=U(),t=i.__importDefault(_t()),r=Ot(),o=function(n){var a=t.default({docX:0,docY:0,posX:0,posY:0,elX:0,elY:0,elH:0,elW:0}),s=a[0],u=a[1];return e.useEffect(function(){var c=function(f){if(n&&n.current){var l=n.current.getBoundingClientRect(),g=l.left,h=l.top,p=l.width,d=l.height,y=g+window.pageXOffset,v=h+window.pageYOffset,O=f.pageX-y,E=f.pageY-v;u({docX:f.pageX,docY:f.pageY,posX:y,posY:v,elX:O,elY:E,elH:d,elW:p})}};return r.on(document,"mousemove",c),function(){r.off(document,"mousemove",c)}},[n]),s};return R.default=o,R}var St=Pt();const bt=Ze(St),Qe=i=>{const e=P.useRef(null),{docX:t}=bt(e),{width:r,height:o}=Q(),n=t?{confettiSource:{w:50,h:0,x:t,y:-10}}:{run:!1};return m.jsxs("div",{style:{minHeight:200,width:"100%"},children:[m.jsx("p",{style:{textAlign:"center",fontFamily:"sans-serif",color:"#999",margin:"20%"},children:"Move your mouse"}),m.jsx(x,{...i,width:r,height:o,style:{pointerEvents:"none"},ref:e,gravity:.5,...n})]})};Qe.__docgenInfo={description:"",methods:[],displayName:"MouseRain"};const{addons:xt}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:Et}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:oe}=__STORYBOOK_MODULE_GLOBAL__;var Rt="storybook/actions",Mt=`${Rt}/action-event`,jt={depth:10,clearOnStoryChange:!0,limit:50},Ke=(i,e)=>{let t=Object.getPrototypeOf(i);return!t||e(t)?t:Ke(t,e)},It=i=>!!(typeof i=="object"&&i&&Ke(i,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof i.persist=="function"),Ct=i=>{if(It(i)){let e=Object.create(i.constructor.prototype,Object.getOwnPropertyDescriptors(i));e.persist();let t=Object.getOwnPropertyDescriptor(e,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...t,value:Object.create(r.constructor.prototype)}),e}return i},Dt=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?et():Date.now().toString(36)+Math.random().toString(36).substring(2);function ae(i,e={}){let t={...jt,...e},r=function(...o){var l,g;if(e.implicit){let h=(l="__STORYBOOK_PREVIEW__"in oe?oe.__STORYBOOK_PREVIEW__:void 0)==null?void 0:l.storyRenders.find(p=>p.phase==="playing"||p.phase==="rendering");if(h){let p=!((g=window==null?void 0:window.FEATURES)!=null&&g.disallowImplicitActionsInRenderV8),d=new Et({phase:h.phase,name:i,deprecated:p});if(p)console.warn(d);else throw d}}let n=xt.getChannel(),a=Dt(),s=5,u=o.map(Ct),c=o.length>1?u:u[0],f={id:a,count:0,data:{name:i,args:c},options:{...t,maxDepth:s+(t.depth||3),allowFunction:t.allowFunction||!1}};n.emit(Mt,f)};return r.isAction=!0,r.implicit=e.implicit,r}const J=b.forwardRef((i,e)=>{const{width:t,height:r}=Q();return m.jsx(x,{...i,ref:e,width:t,height:r})}),ke=()=>{const[i,e]=P.useState(!1),t=ae("letsGetThisPartyStarted"),r=ae("onConfettiComplete");return m.jsxs("div",{className:`root${i?" party":""}`,children:[m.jsx(J,{style:{pointerEvents:"none"},numberOfPieces:i?500:0,recycle:!1,onConfettiComplete:o=>{r(o),e(!1),o.reset()}}),m.jsx("div",{className:"party-container",children:m.jsx("button",{type:"button",onClick:()=>{t(),e(!i)},className:"party-button",children:"Party"})})]})};ke.__docgenInfo={description:"",methods:[],displayName:"PartyMode"};const qt={title:"ReactConfetti",component:x,parameters:{layout:"fullscreen",docs:{description:{component:"A React component that renders confetti."},preview:{height:"500px"}},controls:{disableSaveFromUI:!0,exclude:["canvasRef"]}},tags:["autodocs"],argTypes:{run:{description:"Whether to run the confetti animation.",control:{type:"boolean"}},recycle:{description:"Whether to recycle confetti pieces back into the active `numberOfPieces` when they exit the canvas.",control:{type:"boolean"}},gravity:{control:{type:"range",min:-1,max:1,step:.001}},numberOfPieces:{control:{type:"range",min:0,max:1e3,step:1}},wind:{control:{type:"range",min:-1,max:1,step:.001}},initialVelocityX:{control:{type:"range",min:0,max:5,step:.001}},initialVelocityY:{control:{type:"range",min:0,max:5,step:.001}},opacity:{control:{type:"range",min:0,max:1,step:.01}},canvasRef:{control:{disable:!0}}}},C={name:"Default",render:i=>{const{width:e,height:t}=Q();return m.jsx("div",{style:{minHeight:200},children:m.jsx(x,{...i,width:e,height:t})})},args:{run:!0,recycle:!0,numberOfPieces:200,gravity:.1,wind:0,opacity:1,initialVelocityX:2,initialVelocityY:2}},D={name:"Mouse Rain",render:i=>m.jsx(Qe,{...i}),args:{run:!0,recycle:!0,numberOfPieces:100,gravity:.1,wind:0,opacity:1,initialVelocityX:2,initialVelocityY:5}},T={render:()=>m.jsx(ke,{}),parameters:{layout:"fullscreen",controls:{disable:!0,include:[]}}};function Tt(i){const e=this.numPoints||K(3,4)*2;this.numPoints=e;const t=this.radius*.2,r=this.radius*.8;i.beginPath(),i.moveTo(0,0-r);for(let o=1;o<e*2;o++){const n=o%2===0?r:t,a=n*Math.sin(o*Math.PI/e),s=-1*n*Math.cos(o*Math.PI/e);i.lineTo(a,s)}i.fill(),i.stroke(),i.closePath()}const F={render:i=>m.jsx("div",{style:{minHeight:200},children:m.jsx(J,{drawShape:Tt,colors:["#AEE1FF","#CBDDF8"],gravity:.03,wind:.01,...i})}),parameters:{layout:"fullscreen"}};function Ft(i){const e=this.numPoints||K(4,6);this.numPoints=e;const t=this.w,r=t/2;i.beginPath(),i.moveTo(0,0-t);for(let o=1;o<e*2;o++){const n=o%2===0?t:r,a=n*Math.sin(o*Math.PI/e),s=-1*n*Math.cos(o*Math.PI/e);i.lineTo(a,s)}i.fill(),i.closePath()}const A={render:i=>m.jsx("div",{style:{minHeight:200},children:m.jsx(J,{drawShape:Ft,...i})}),parameters:{layout:"fullscreen"}};var se,ce,ue;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Default',
  render: args => {
    const {
      width,
      height
    } = useWindowSize();
    return <div style={{
      minHeight: 200
    }}>
        <ReactConfetti {...args} width={width} height={height} />
      </div>;
  },
  args: {
    run: true,
    recycle: true,
    numberOfPieces: 200,
    gravity: 0.1,
    wind: 0,
    opacity: 1,
    initialVelocityX: 2,
    initialVelocityY: 2
  }
}`,...(ue=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var fe,le,he;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Mouse Rain',
  render: args => {
    return <MouseRain {...args} />;
  },
  args: {
    run: true,
    recycle: true,
    numberOfPieces: 100,
    gravity: 0.1,
    wind: 0,
    opacity: 1,
    initialVelocityX: 2,
    initialVelocityY: 5
  }
}`,...(he=(le=D.parameters)==null?void 0:le.docs)==null?void 0:he.source}}};var pe,de,ye;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <PartyMode />,
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
      include: []
    }
  }
}`,...(ye=(de=T.parameters)==null?void 0:de.docs)==null?void 0:ye.source}}};var ve,me,ge;F.parameters={...F.parameters,docs:{...(ve=F.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: args => <div style={{
    minHeight: 200
  }}>
      <SizedConfetti drawShape={drawSnowflake} colors={['#AEE1FF', '#CBDDF8']} gravity={0.03} wind={0.01} {...args} />
    </div>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...(ge=(me=F.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var we,_e,Oe;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: args => <div style={{
    minHeight: 200
  }}>
      <SizedConfetti drawShape={drawStar} {...args} />
    </div>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...(Oe=(_e=A.parameters)==null?void 0:_e.docs)==null?void 0:Oe.source}}};const Ut=["Default","MouseRainStory","Party","Snow","Stars"];export{C as Default,D as MouseRainStory,T as Party,F as Snow,A as Stars,Ut as __namedExportsOrder,qt as default};

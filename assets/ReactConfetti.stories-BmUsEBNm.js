import{j as v}from"./jsx-runtime-D_zvdyIk.js";import{r as O,b as et,R as b,a as q,g as tt}from"./index-DlA0hZqf.js";import{v as nt}from"./v4-CQkTLCs1.js";var L=function(i,e){return L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])},L(i,e)};function be(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");L(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var A=function(){return A=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},A.apply(this,arguments)};function xe(i,e){var t={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(t[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(i);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(i,r[o])&&(t[r[o]]=i[r[o]]);return t}function Ee(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n}function Re(i,e){return function(t,r){e(t,r,i)}}function Me(i,e,t,r,o,n){function a(y){if(y!==void 0&&typeof y!="function")throw new TypeError("Function expected");return y}for(var s=r.kind,u=s==="getter"?"get":s==="setter"?"set":"value",c=!e&&i?r.static?i:i.prototype:null,f=e||(c?Object.getOwnPropertyDescriptor(c,r.name):{}),h,g=!1,l=t.length-1;l>=0;l--){var p={};for(var d in r)p[d]=d==="access"?{}:r[d];for(var d in r.access)p.access[d]=r.access[d];p.addInitializer=function(y){if(g)throw new TypeError("Cannot add initializers after decoration has completed");n.push(a(y||null))};var m=(0,t[l])(s==="accessor"?{get:f.get,set:f.set}:f[u],p);if(s==="accessor"){if(m===void 0)continue;if(m===null||typeof m!="object")throw new TypeError("Object expected");(h=a(m.get))&&(f.get=h),(h=a(m.set))&&(f.set=h),(h=a(m.init))&&o.unshift(h)}else(h=a(m))&&(s==="field"?o.unshift(h):f[u]=h)}c&&Object.defineProperty(c,r.name,f),g=!0}function je(i,e,t){for(var r=arguments.length>2,o=0;o<e.length;o++)t=r?e[o].call(i,t):e[o].call(i);return r?t:void 0}function Ie(i){return typeof i=="symbol"?i:"".concat(i)}function De(i,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(i,"name",{configurable:!0,value:t?"".concat(t," ",e):e})}function Ce(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)}function Te(i,e,t,r){function o(n){return n instanceof t?n:new t(function(a){a(n)})}return new(t||(t=Promise))(function(n,a){function s(f){try{c(r.next(f))}catch(h){a(h)}}function u(f){try{c(r.throw(f))}catch(h){a(h)}}function c(f){f.done?n(f.value):o(f.value).then(s,u)}c((r=r.apply(i,e||[])).next())})}function Fe(i,e){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},r,o,n,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=s(0),a.throw=s(1),a.return=s(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(f){return u([c,f])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(t=0)),t;)try{if(r=1,o&&(n=c[0]&2?o.return:c[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,c[1])).done)return n;switch(o=0,n&&(c=[c[0]&2,n.value]),c[0]){case 0:case 1:n=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,o=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!n||c[1]>n[0]&&c[1]<n[3])){t.label=c[1];break}if(c[0]===6&&t.label<n[1]){t.label=n[1],n=c;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(c);break}n[2]&&t.ops.pop(),t.trys.pop();continue}c=e.call(i,t)}catch(f){c=[6,f],o=0}finally{r=n=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}var Y=Object.create?function(i,e,t,r){r===void 0&&(r=t);var o=Object.getOwnPropertyDescriptor(e,t);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(i,r,o)}:function(i,e,t,r){r===void 0&&(r=t),i[r]=e[t]};function Ae(i,e){for(var t in i)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&Y(e,i,t)}function B(i){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&i[e],r=0;if(t)return t.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&r>=i.length&&(i=void 0),{value:i&&i[r++],done:!i}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function z(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var r=t.call(i),o,n=[],a;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)n.push(o.value)}catch(s){a={error:s}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(a)throw a.error}}return n}function Be(){for(var i=[],e=0;e<arguments.length;e++)i=i.concat(z(arguments[e]));return i}function Ve(){for(var i=0,e=0,t=arguments.length;e<t;e++)i+=arguments[e].length;for(var r=Array(i),o=0,e=0;e<t;e++)for(var n=arguments[e],a=0,s=n.length;a<s;a++,o++)r[o]=n[a];return r}function qe(i,e,t){if(t||arguments.length===2)for(var r=0,o=e.length,n;r<o;r++)(n||!(r in e))&&(n||(n=Array.prototype.slice.call(e,0,r)),n[r]=e[r]);return i.concat(n||Array.prototype.slice.call(e))}function S(i){return this instanceof S?(this.v=i,this):new S(i)}function Ye(i,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(i,e||[]),o,n=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),o[Symbol.asyncIterator]=function(){return this},o;function a(l){return function(p){return Promise.resolve(p).then(l,h)}}function s(l,p){r[l]&&(o[l]=function(d){return new Promise(function(m,y){n.push([l,d,m,y])>1||u(l,d)})},p&&(o[l]=p(o[l])))}function u(l,p){try{c(r[l](p))}catch(d){g(n[0][3],d)}}function c(l){l.value instanceof S?Promise.resolve(l.value.v).then(f,h):g(n[0][2],l)}function f(l){u("next",l)}function h(l){u("throw",l)}function g(l,p){l(p),n.shift(),n.length&&u(n[0][0],n[0][1])}}function Ue(i){var e,t;return e={},r("next"),r("throw",function(o){throw o}),r("return"),e[Symbol.iterator]=function(){return this},e;function r(o,n){e[o]=i[o]?function(a){return(t=!t)?{value:S(i[o](a)),done:!1}:n?n(a):a}:n}}function Ne(i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=i[Symbol.asyncIterator],t;return e?e.call(i):(i=typeof B=="function"?B(i):i[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=i[n]&&function(a){return new Promise(function(s,u){a=i[n](a),o(s,u,a.done,a.value)})}}function o(n,a,s,u){Promise.resolve(u).then(function(c){n({value:c,done:s})},a)}}function We(i,e){return Object.defineProperty?Object.defineProperty(i,"raw",{value:e}):i.raw=e,i}var rt=Object.create?function(i,e){Object.defineProperty(i,"default",{enumerable:!0,value:e})}:function(i,e){i.default=e},$=function(i){return $=Object.getOwnPropertyNames||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[t.length]=r);return t},$(i)};function He(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t=$(i),r=0;r<t.length;r++)t[r]!=="default"&&Y(e,i,t[r]);return rt(e,i),e}function Le(i){return i&&i.__esModule?i:{default:i}}function $e(i,e,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!r:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(i):r?r.value:e.get(i)}function Xe(i,e,t,r,o){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?i!==e||!o:!e.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?o.call(i,t):o?o.value=t:e.set(i,t),t}function ze(i,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof i=="function"?e===i:i.has(e)}function Ge(i,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,o;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],t&&(o=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");o&&(r=function(){try{o.call(this)}catch(n){return Promise.reject(n)}}),i.stack.push({value:e,dispose:r,async:t})}else t&&i.stack.push({async:!0});return e}var it=typeof SuppressedError=="function"?SuppressedError:function(i,e,t){var r=new Error(t);return r.name="SuppressedError",r.error=i,r.suppressed=e,r};function Qe(i){function e(n){i.error=i.hasError?new it(n,i.error,"An error was suppressed during disposal."):n,i.hasError=!0}var t,r=0;function o(){for(;t=i.stack.pop();)try{if(!t.async&&r===1)return r=0,i.stack.push(t),Promise.resolve().then(o);if(t.dispose){var n=t.dispose.call(t.value);if(t.async)return r|=2,Promise.resolve(n).then(o,function(a){return e(a),o()})}else r|=1}catch(a){e(a)}if(r===1)return i.hasError?Promise.reject(i.error):Promise.resolve();if(i.hasError)throw i.error}return o()}function Ke(i,e){return typeof i=="string"&&/^\.\.?\//.test(i)?i.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(t,r,o,n,a){return r?e?".jsx":".js":o&&(!n||!a)?t:o+n+"."+a.toLowerCase()+"js"}):i}const ot={__extends:be,__assign:A,__rest:xe,__decorate:Ee,__param:Re,__esDecorate:Me,__runInitializers:je,__propKey:Ie,__setFunctionName:De,__metadata:Ce,__awaiter:Te,__generator:Fe,__createBinding:Y,__exportStar:Ae,__values:B,__read:z,__spread:Be,__spreadArrays:Ve,__spreadArray:qe,__await:S,__asyncGenerator:Ye,__asyncDelegator:Ue,__asyncValues:Ne,__makeTemplateObject:We,__importStar:He,__importDefault:Le,__classPrivateFieldGet:$e,__classPrivateFieldSet:Xe,__classPrivateFieldIn:ze,__addDisposableResource:Ge,__disposeResources:Qe,__rewriteRelativeImportExtension:Ke},at=Object.freeze(Object.defineProperty({__proto__:null,__addDisposableResource:Ge,get __assign(){return A},__asyncDelegator:Ue,__asyncGenerator:Ye,__asyncValues:Ne,__await:S,__awaiter:Te,__classPrivateFieldGet:$e,__classPrivateFieldIn:ze,__classPrivateFieldSet:Xe,__createBinding:Y,__decorate:Ee,__disposeResources:Qe,__esDecorate:Me,__exportStar:Ae,__extends:be,__generator:Fe,__importDefault:Le,__importStar:He,__makeTemplateObject:We,__metadata:Ce,__param:Re,__propKey:Ie,__read:z,__rest:xe,__rewriteRelativeImportExtension:Ke,__runInitializers:je,__setFunctionName:De,__spread:Be,__spreadArray:qe,__spreadArrays:Ve,__values:B,default:ot},Symbol.toStringTag,{value:"Module"}));function st(i){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];i&&i.addEventListener&&i.addEventListener.apply(i,e)}function ct(i){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];i&&i.removeEventListener&&i.removeEventListener.apply(i,e)}var N=typeof window<"u",ut=function(i){O.useEffect(i,[])},ft=function(i){var e=O.useRef(i);e.current=i,ut(function(){return function(){return e.current()}})},lt=function(i){var e=O.useRef(0),t=O.useState(i),r=t[0],o=t[1],n=O.useCallback(function(a){cancelAnimationFrame(e.current),e.current=requestAnimationFrame(function(){o(a)})},[]);return ft(function(){cancelAnimationFrame(e.current)}),[r,n]};const G=et(at);var Q=function(i){var e={},t=e.initialWidth,r=t===void 0?1/0:t,o=e.initialHeight,n=o===void 0?1/0:o,a=e.onChange,s=lt({width:N?window.innerWidth:r,height:N?window.innerHeight:n}),u=s[0],c=s[1];return O.useEffect(function(){if(N){var f=function(){var h=window.innerWidth,g=window.innerHeight;c({width:h,height:g}),a&&a(h,g)};return st(window,"resize",f),function(){ct(window,"resize",f)}}},[]),u},W,te;function ht(){if(te)return W;te=1;var i={linear:function(e,t,r,o){var n=r-t;return n*e/o+t},easeInQuad:function(e,t,r,o){var n=r-t;return n*(e/=o)*e+t},easeOutQuad:function(e,t,r,o){var n=r-t;return-n*(e/=o)*(e-2)+t},easeInOutQuad:function(e,t,r,o){var n=r-t;return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,r,o){var n=r-t;return n*(e/=o)*e*e+t},easeOutCubic:function(e,t,r,o){var n=r-t;return n*((e=e/o-1)*e*e+1)+t},easeInOutCubic:function(e,t,r,o){var n=r-t;return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,r,o){var n=r-t;return n*(e/=o)*e*e*e+t},easeOutQuart:function(e,t,r,o){var n=r-t;return-n*((e=e/o-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,r,o){var n=r-t;return(e/=o/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,r,o){var n=r-t;return n*(e/=o)*e*e*e*e+t},easeOutQuint:function(e,t,r,o){var n=r-t;return n*((e=e/o-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,r,o){var n=r-t;return(e/=o/2)<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,r,o){var n=r-t;return-n*Math.cos(e/o*(Math.PI/2))+n+t},easeOutSine:function(e,t,r,o){var n=r-t;return n*Math.sin(e/o*(Math.PI/2))+t},easeInOutSine:function(e,t,r,o){var n=r-t;return-n/2*(Math.cos(Math.PI*e/o)-1)+t},easeInExpo:function(e,t,r,o){var n=r-t;return e==0?t:n*Math.pow(2,10*(e/o-1))+t},easeOutExpo:function(e,t,r,o){var n=r-t;return e==o?t+n:n*(-Math.pow(2,-10*e/o)+1)+t},easeInOutExpo:function(e,t,r,o){var n=r-t;return e===0?t:e===o?t+n:(e/=o/2)<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,r,o){var n=r-t;return-n*(Math.sqrt(1-(e/=o)*e)-1)+t},easeOutCirc:function(e,t,r,o){var n=r-t;return n*Math.sqrt(1-(e=e/o-1)*e)+t},easeInOutCirc:function(e,t,r,o){var n=r-t;return(e/=o/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,r,o){var n=r-t,a,s,u;return u=1.70158,s=0,a=n,e===0?t:(e/=o)===1?t+n:(s||(s=o*.3),a<Math.abs(n)?(a=n,u=s/4):u=s/(2*Math.PI)*Math.asin(n/a),-(a*Math.pow(2,10*(e-=1))*Math.sin((e*o-u)*(2*Math.PI)/s))+t)},easeOutElastic:function(e,t,r,o){var n=r-t,a,s,u;return u=1.70158,s=0,a=n,e===0?t:(e/=o)===1?t+n:(s||(s=o*.3),a<Math.abs(n)?(a=n,u=s/4):u=s/(2*Math.PI)*Math.asin(n/a),a*Math.pow(2,-10*e)*Math.sin((e*o-u)*(2*Math.PI)/s)+n+t)},easeInOutElastic:function(e,t,r,o){var n=r-t,a,s,u;return u=1.70158,s=0,a=n,e===0?t:(e/=o/2)===2?t+n:(s||(s=o*(.3*1.5)),a<Math.abs(n)?(a=n,u=s/4):u=s/(2*Math.PI)*Math.asin(n/a),e<1?-.5*(a*Math.pow(2,10*(e-=1))*Math.sin((e*o-u)*(2*Math.PI)/s))+t:a*Math.pow(2,-10*(e-=1))*Math.sin((e*o-u)*(2*Math.PI)/s)*.5+n+t)},easeInBack:function(e,t,r,o,n){var a=r-t;return n===void 0&&(n=1.70158),a*(e/=o)*e*((n+1)*e-n)+t},easeOutBack:function(e,t,r,o,n){var a=r-t;return n===void 0&&(n=1.70158),a*((e=e/o-1)*e*((n+1)*e+n)+1)+t},easeInOutBack:function(e,t,r,o,n){var a=r-t;return n===void 0&&(n=1.70158),(e/=o/2)<1?a/2*(e*e*(((n*=1.525)+1)*e-n))+t:a/2*((e-=2)*e*(((n*=1.525)+1)*e+n)+2)+t},easeInBounce:function(e,t,r,o){var n=r-t,a;return a=i.easeOutBounce(o-e,0,n,o),n-a+t},easeOutBounce:function(e,t,r,o){var n=r-t;return(e/=o)<1/2.75?n*(7.5625*e*e)+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,r,o){var n=r-t,a;return e<o/2?(a=i.easeInBounce(e*2,0,n,o),a*.5+t):(a=i.easeOutBounce(e*2-o,0,n,o),a*.5+n*.5+t)}};return W=i,W}var pt=ht();function dt(i){return i*Math.PI/180}function _(i,e){return i+Math.random()*(e-i)}function K(i,e){return Math.floor(i+Math.random()*(e-i+1))}class yt{constructor(e,t,r,o){this.getOptions=t;const{colors:n,initialVelocityX:a,initialVelocityY:s}=this.getOptions();this.context=e,this.x=r,this.y=o,this.w=_(5,20),this.h=_(5,20),this.radius=_(5,10),this.vx=typeof a=="number"?_(-a,a):_(a.min,a.max),this.vy=typeof s=="number"?_(-s,0):_(s.min,s.max),this.shape=K(0,2),this.angle=dt(_(0,360)),this.angularSpin=_(-.2,.2),this.color=n[Math.floor(Math.random()*n.length)],this.rotateY=_(0,1),this.rotationDirection=_(0,1)?1:-1}update(){const{gravity:e,wind:t,friction:r,opacity:o,drawShape:n}=this.getOptions();this.x+=this.vx,this.y+=this.vy,this.vy+=e,this.vx+=t,this.vx*=r,this.vy*=r,this.rotateY>=1&&this.rotationDirection===1?this.rotationDirection=-1:this.rotateY<=-1&&this.rotationDirection===-1&&(this.rotationDirection=1);const a=.1*this.rotationDirection;if(this.rotateY+=a,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=o,this.context.lineCap="round",this.context.lineWidth=2,n&&typeof n=="function")n.call(this,this.context);else switch(this.shape){case 0:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case 1:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case 2:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class vt{constructor(e,t){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenInitTime=Date.now(),this.particles=[],this.particlesGenerated=0,this.removeParticleAt=o=>{this.particles.splice(o,1)},this.getParticle=()=>{const o=_(this.x,this.w+this.x),n=_(this.y,this.h+this.y);return new yt(this.context,this.getOptions,o,n)},this.animate=()=>{const{canvas:o,context:n,particlesGenerated:a,lastNumberOfPieces:s}=this,{run:u,recycle:c,numberOfPieces:f,debug:h,tweenFunction:g,tweenDuration:l}=this.getOptions();if(!u)return!1;const p=this.particles.length,d=c?p:a,m=Date.now();if(d<f){s!==f&&(this.tweenInitTime=m,this.lastNumberOfPieces=f);const{tweenInitTime:y}=this,P=m-y>l?l:Math.max(0,m-y),U=g(P,d,f,l),Z=Math.round(U-d);for(let ee=0;ee<Z;ee++)this.particles.push(this.getParticle());this.particlesGenerated+=Z}return h&&(n.font="12px sans-serif",n.fillStyle="#333",n.textAlign="right",n.fillText(`Particles: ${p}`,o.width-10,o.height-20)),this.particles.forEach((y,P)=>{y.update(),(y.y>o.height||y.y<-100||y.x>o.width+100||y.x<-100)&&(c&&d<=f?this.particles[P]=this.getParticle():this.removeParticleAt(P))}),p>0||d<f},this.canvas=e;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.getOptions=t}}const k={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:pt.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class mt{constructor(e,t){this.lastFrameTime=Date.now(),this.setOptionsWithDefaults=o=>{const n={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...n,...k,...o},Object.assign(this,o.confettiSource)},this.update=()=>{const{options:{run:o,onConfettiComplete:n,frameRate:a},canvas:s,context:u}=this;if(a){const c=Date.now(),f=c-this.lastFrameTime;if(f<1e3/a){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=c-f%a}o&&(u.fillStyle="white",u.clearRect(0,0,s.width,s.height)),this.generator.animate()?this.rafId=requestAnimationFrame(this.update):(n&&typeof n=="function"&&this.generator.particlesGenerated>0&&n.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=e;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.generator=new vt(this.canvas,()=>this.options),this.options=t,this.update()}get options(){return this._options}set options(e){var o,n;const t=(o=this._options)==null?void 0:o.run,r=(n=this._options)==null?void 0:n.recycle;this.setOptionsWithDefaults(e),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof e.recycle=="boolean"&&e.recycle&&r===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof e.run=="boolean"&&e.run&&t===!1&&this.update()}}const gt=b.createRef(),V=class V extends b.Component{constructor(e){super(e),this.canvas=b.createRef(),this.canvas=e.canvasRef||gt}componentDidMount(){if(this.canvas.current){const e=H(this.props)[0];this.confetti=new mt(this.canvas.current,e)}}componentDidUpdate(){const e=H(this.props)[0];this.confetti&&(this.confetti.options=e)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[e,t]=H(this.props),r={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...t.style};return v.jsx("canvas",{width:e.width,height:e.height,ref:this.canvas,...t,style:r})}};V.defaultProps={...k},V.displayName="ReactConfetti";let X=V;function H(i){const e={},t={},r={},o=[...Object.keys(k),"confettiSource","drawShape","onConfettiComplete","frameRate"],n=["canvasRef"];for(const a in i){const s=i[a];o.includes(a)?e[a]=s:n.includes(a)?n[a]=s:r[a]=s}return[e,r,t]}const x=b.forwardRef((i,e)=>v.jsx(X,{canvasRef:e,...i}));x.__docgenInfo={description:"",methods:[],displayName:"ReactConfetti",props:{canvasRef:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLCanvasElement>",elements:[{name:"HTMLCanvasElement"}]},description:""}}};var E={},R={},M={},j={},ne;function wt(){if(ne)return j;ne=1,Object.defineProperty(j,"__esModule",{value:!0});var i=q(),e=function(t){i.useEffect(t,[])};return j.default=e,j}var re;function _t(){if(re)return M;re=1,Object.defineProperty(M,"__esModule",{value:!0});var i=G,e=q(),t=i.__importDefault(wt()),r=function(o){var n=e.useRef(o);n.current=o,t.default(function(){return function(){return n.current()}})};return M.default=r,M}var ie;function Ot(){if(ie)return R;ie=1,Object.defineProperty(R,"__esModule",{value:!0});var i=G,e=q(),t=i.__importDefault(_t()),r=function(o){var n=e.useRef(0),a=e.useState(o),s=a[0],u=a[1],c=e.useCallback(function(f){cancelAnimationFrame(n.current),n.current=requestAnimationFrame(function(){u(f)})},[]);return t.default(function(){cancelAnimationFrame(n.current)}),[s,c]};return R.default=r,R}var w={},oe;function Pt(){if(oe)return w;oe=1,Object.defineProperty(w,"__esModule",{value:!0}),w.isNavigator=w.isBrowser=w.off=w.on=w.noop=void 0;var i=function(){};w.noop=i;function e(r){for(var o=[],n=1;n<arguments.length;n++)o[n-1]=arguments[n];r&&r.addEventListener&&r.addEventListener.apply(r,o)}w.on=e;function t(r){for(var o=[],n=1;n<arguments.length;n++)o[n-1]=arguments[n];r&&r.removeEventListener&&r.removeEventListener.apply(r,o)}return w.off=t,w.isBrowser=typeof window<"u",w.isNavigator=typeof navigator<"u",w}var ae;function St(){if(ae)return E;ae=1,Object.defineProperty(E,"__esModule",{value:!0});var i=G,e=q(),t=i.__importDefault(Ot()),r=Pt(),o=function(n){var a=t.default({docX:0,docY:0,posX:0,posY:0,elX:0,elY:0,elH:0,elW:0}),s=a[0],u=a[1];return e.useEffect(function(){var c=function(f){if(n&&n.current){var h=n.current.getBoundingClientRect(),g=h.left,l=h.top,p=h.width,d=h.height,m=g+window.pageXOffset,y=l+window.pageYOffset,P=f.pageX-m,U=f.pageY-y;u({docX:f.pageX,docY:f.pageY,posX:m,posY:y,elX:P,elY:U,elH:d,elW:p})}};return r.on(document,"mousemove",c),function(){r.off(document,"mousemove",c)}},[n]),s};return E.default=o,E}var bt=St();const xt=tt(bt),ke=i=>{const e=O.useRef(null),{docX:t}=xt(e),{width:r,height:o}=Q(),n=t?{confettiSource:{w:50,h:0,x:t,y:-10}}:{run:!1};return v.jsxs("div",{style:{minHeight:200,width:"100%"},children:[v.jsx("p",{style:{textAlign:"center",fontFamily:"sans-serif",color:"#999",margin:"20%"},children:"Move your mouse"}),v.jsx(x,{...i,width:r,height:o,style:{pointerEvents:"none"},ref:e,gravity:.5,...n})]})};ke.__docgenInfo={description:"",methods:[],displayName:"MouseRain"};const{addons:Et}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:Rt}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:se}=__STORYBOOK_MODULE_GLOBAL__;var Mt="storybook/actions",jt=`${Mt}/action-event`,It={depth:10,clearOnStoryChange:!0,limit:50},Je=(i,e)=>{let t=Object.getPrototypeOf(i);return!t||e(t)?t:Je(t,e)},Dt=i=>!!(typeof i=="object"&&i&&Je(i,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof i.persist=="function"),Ct=i=>{if(Dt(i)){let e=Object.create(i.constructor.prototype,Object.getOwnPropertyDescriptors(i));e.persist();let t=Object.getOwnPropertyDescriptor(e,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...t,value:Object.create(r.constructor.prototype)}),e}return i},Tt=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?nt():Date.now().toString(36)+Math.random().toString(36).substring(2);function ce(i,e={}){let t={...It,...e},r=function(...o){var h,g;if(e.implicit){let l=(h="__STORYBOOK_PREVIEW__"in se?se.__STORYBOOK_PREVIEW__:void 0)==null?void 0:h.storyRenders.find(p=>p.phase==="playing"||p.phase==="rendering");if(l){let p=!((g=window==null?void 0:window.FEATURES)!=null&&g.disallowImplicitActionsInRenderV8),d=new Rt({phase:l.phase,name:i,deprecated:p});if(p)console.warn(d);else throw d}}let n=Et.getChannel(),a=Tt(),s=5,u=o.map(Ct),c=o.length>1?u:u[0],f={id:a,count:0,data:{name:i,args:c},options:{...t,maxDepth:s+(t.depth||3),allowFunction:t.allowFunction||!1}};n.emit(jt,f)};return r.isAction=!0,r.implicit=e.implicit,r}const J=b.forwardRef((i,e)=>{const{width:t,height:r}=Q();return v.jsx(x,{...i,ref:e,width:t,height:r})}),Ze=()=>{const[i,e]=O.useState(!1),t=ce("letsGetThisPartyStarted"),r=ce("onConfettiComplete");return v.jsxs("div",{className:`root${i?" party":""}`,children:[v.jsx(J,{style:{pointerEvents:"none"},numberOfPieces:i?500:0,recycle:!1,onConfettiComplete:o=>{r(o),e(!1),o.reset()}}),v.jsx("div",{className:"party-container",children:v.jsx("button",{type:"button",onClick:()=>{t(),e(!i)},className:"party-button",children:"Party"})})]})};Ze.__docgenInfo={description:"",methods:[],displayName:"PartyMode"};const Yt={title:"ReactConfetti",component:x,parameters:{layout:"fullscreen",docs:{description:{component:"A React component that renders confetti."},preview:{height:"500px"}},controls:{disableSaveFromUI:!0,exclude:["canvasRef"]}},tags:["autodocs"],argTypes:{run:{description:"Whether to run the confetti animation.",control:{type:"boolean"}},recycle:{description:"Whether to recycle confetti pieces back into the active `numberOfPieces` when they exit the canvas.",control:{type:"boolean"}},gravity:{control:{type:"range",min:-1,max:1,step:.001}},numberOfPieces:{control:{type:"range",min:0,max:1e3,step:1}},wind:{control:{type:"range",min:-1,max:1,step:.001}},initialVelocityX:{control:{type:"range",min:0,max:5,step:.001}},initialVelocityY:{control:{type:"range",min:0,max:5,step:.001}},opacity:{control:{type:"range",min:0,max:1,step:.01}},canvasRef:{control:{disable:!0}}}},I={name:"Default",render:i=>{const{width:e,height:t}=Q();return v.jsx("div",{style:{minHeight:200},children:v.jsx(x,{...i,width:e,height:t})})},args:{run:!0,recycle:!0,numberOfPieces:200,gravity:.1,wind:0,opacity:1,initialVelocityX:2,initialVelocityY:2}},D={name:"Mouse Rain",render:i=>v.jsx(ke,{...i}),args:{run:!0,recycle:!0,numberOfPieces:100,gravity:.1,wind:0,opacity:1,initialVelocityX:2,initialVelocityY:5}},C={render:()=>v.jsx(Ze,{}),parameters:{layout:"fullscreen",controls:{disable:!0,include:[]}}};function Ft(i){const e=this.numPoints||K(3,4)*2;this.numPoints=e;const t=this.radius*.2,r=this.radius*.8;i.beginPath(),i.moveTo(0,0-r);for(let o=1;o<e*2;o++){const n=o%2===0?r:t,a=n*Math.sin(o*Math.PI/e),s=-1*n*Math.cos(o*Math.PI/e);i.lineTo(a,s)}i.fill(),i.stroke(),i.closePath()}const T={render:i=>v.jsx("div",{style:{minHeight:200},children:v.jsx(J,{drawShape:Ft,colors:["#AEE1FF","#CBDDF8"],gravity:.03,wind:.01,...i})}),parameters:{layout:"fullscreen"}};function At(i){const e=this.numPoints||K(4,6);this.numPoints=e;const t=this.w,r=t/2;i.beginPath(),i.moveTo(0,0-t);for(let o=1;o<e*2;o++){const n=o%2===0?t:r,a=n*Math.sin(o*Math.PI/e),s=-1*n*Math.cos(o*Math.PI/e);i.lineTo(a,s)}i.fill(),i.closePath()}const F={render:i=>v.jsx("div",{style:{minHeight:200},children:v.jsx(J,{drawShape:At,...i})}),parameters:{layout:"fullscreen"}};var ue,fe,le;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(le=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:le.source}}};var he,pe,de;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(de=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ye,ve,me;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <PartyMode />,
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
      include: []
    }
  }
}`,...(me=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:me.source}}};var ge,we,_e;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: args => <div style={{
    minHeight: 200
  }}>
      <SizedConfetti drawShape={drawSnowflake} colors={['#AEE1FF', '#CBDDF8']} gravity={0.03} wind={0.01} {...args} />
    </div>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...(_e=(we=T.parameters)==null?void 0:we.docs)==null?void 0:_e.source}}};var Oe,Pe,Se;F.parameters={...F.parameters,docs:{...(Oe=F.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: args => <div style={{
    minHeight: 200
  }}>
      <SizedConfetti drawShape={drawStar} {...args} />
    </div>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...(Se=(Pe=F.parameters)==null?void 0:Pe.docs)==null?void 0:Se.source}}};const Ut=["Default","MouseRainStory","Party","Snow","Stars"];export{I as Default,D as MouseRainStory,C as Party,T as Snow,F as Stars,Ut as __namedExportsOrder,Yt as default};
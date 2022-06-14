/*! For license information please see customization.js.LICENSE.txt */
!function(){"use strict";const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t=Symbol(),i=new Map;class o{constructor(e,i){if(this._$cssResult$=!0,i!==t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let t=i.get(this.cssText);return e&&void 0===t&&(i.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const a=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let i="";for(const t of e.cssRules)i+=t.cssText;return(e=>new o("string"==typeof e?e:e+"",t))(i)})(e):e;var s;const n=window.trustedTypes,l=n?n.emptyScript:"",r=window.reactiveElementPolyfillSupport,d={toAttribute(e,t){switch(t){case Boolean:e=e?l:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},u=(e,t)=>t!==e&&(t==t||e==e),c={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:u};class h extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const o=this._$Eh(i,t);void 0!==o&&(this._$Eu.set(o,i),e.push(o))})),e}static createProperty(e,t=c){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const a=this[e];this[t]=o,this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eh(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),o=window.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ES(e,t,i=c){var o,a;const s=this.constructor._$Eh(e,i);if(void 0!==s&&!0===i.reflect){const n=(null!==(a=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==a?a:d.toAttribute)(t,i.type);this._$Ei=e,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Ei=null}}_$AK(e,t){var i,o,a;const s=this.constructor,n=s._$Eu.get(e);if(void 0!==n&&this._$Ei!==n){const e=s.getPropertyOptions(n),l=e.converter,r=null!==(a=null!==(o=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==o?o:"function"==typeof l?l:null)&&void 0!==a?a:d.fromAttribute;this._$Ei=n,this[n]=r(t,e.type),this._$Ei=null}}requestUpdate(e,t,i){let o=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||u)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Ei!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}var p;h.finalized=!0,h.elementProperties=new Map,h.elementStyles=[],h.shadowRootOptions={mode:"open"},null==r||r({ReactiveElement:h}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.3.2");const _=globalThis.trustedTypes,g=_?_.createPolicy("lit-html",{createHTML:e=>e}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,m="?"+b,f=`<${m}>`,v=document,x=(e="")=>v.createComment(e),y=e=>null===e||"object"!=typeof e&&"function"!=typeof e,k=Array.isArray,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$=/-->/g,I=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,S=/'/g,T=/"/g,A=/^(?:script|style|textarea|title)$/i,C=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),D=C(1),V=C(2),B=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),M=new WeakMap,H=v.createTreeWalker(v,129,null,!1),O=(e,t)=>{const i=e.length-1,o=[];let a,s=2===t?"<svg>":"",n=w;for(let t=0;t<i;t++){const i=e[t];let l,r,d=-1,u=0;for(;u<i.length&&(n.lastIndex=u,r=n.exec(i),null!==r);)u=n.lastIndex,n===w?"!--"===r[1]?n=$:void 0!==r[1]?n=I:void 0!==r[2]?(A.test(r[2])&&(a=RegExp("</"+r[2],"g")),n=E):void 0!==r[3]&&(n=E):n===E?">"===r[0]?(n=null!=a?a:w,d=-1):void 0===r[1]?d=-2:(d=n.lastIndex-r[2].length,l=r[1],n=void 0===r[3]?E:'"'===r[3]?T:S):n===T||n===S?n=E:n===$||n===I?n=w:(n=E,a=void 0);const c=n===E&&e[t+1].startsWith("/>")?" ":"";s+=n===w?i+f:d>=0?(o.push(l),i.slice(0,d)+"$lit$"+i.slice(d)+b+c):i+b+(-2===d?(o.push(void 0),t):c)}const l=s+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(l):l,o]};class N{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let a=0,s=0;const n=e.length-1,l=this.parts,[r,d]=O(e,t);if(this.el=N.createElement(r,i),H.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(o=H.nextNode())&&l.length<n;){if(1===o.nodeType){if(o.hasAttributes()){const e=[];for(const t of o.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(b)){const i=d[s++];if(e.push(t),void 0!==i){const e=o.getAttribute(i.toLowerCase()+"$lit$").split(b),t=/([.?@])?(.*)/.exec(i);l.push({type:1,index:a,name:t[2],strings:e,ctor:"."===t[1]?z:"?"===t[1]?F:"@"===t[1]?K:j})}else l.push({type:6,index:a})}for(const t of e)o.removeAttribute(t)}if(A.test(o.tagName)){const e=o.textContent.split(b),t=e.length-1;if(t>0){o.textContent=_?_.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],x()),H.nextNode(),l.push({type:2,index:++a});o.append(e[t],x())}}}else if(8===o.nodeType)if(o.data===m)l.push({type:2,index:a});else{let e=-1;for(;-1!==(e=o.data.indexOf(b,e+1));)l.push({type:7,index:a}),e+=b.length-1}a++}}static createElement(e,t){const i=v.createElement("template");return i.innerHTML=e,i}}function U(e,t,i=e,o){var a,s,n,l;if(t===B)return t;let r=void 0!==o?null===(a=i._$Cl)||void 0===a?void 0:a[o]:i._$Cu;const d=y(t)?void 0:t._$litDirective$;return(null==r?void 0:r.constructor)!==d&&(null===(s=null==r?void 0:r._$AO)||void 0===s||s.call(r,!1),void 0===d?r=void 0:(r=new d(e),r._$AT(e,i,o)),void 0!==o?(null!==(n=(l=i)._$Cl)&&void 0!==n?n:l._$Cl=[])[o]=r:i._$Cu=r),void 0!==r&&(t=U(e,r._$AS(e,t.values),r,o)),t}class P{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:o}=this._$AD,a=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:v).importNode(i,!0);H.currentNode=a;let s=H.nextNode(),n=0,l=0,r=o[0];for(;void 0!==r;){if(n===r.index){let t;2===r.type?t=new R(s,s.nextSibling,this,e):1===r.type?t=new r.ctor(s,r.name,r.strings,this,e):6===r.type&&(t=new q(s,this,e)),this.v.push(t),r=o[++l]}n!==(null==r?void 0:r.index)&&(s=H.nextNode(),n++)}return a}m(e){let t=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class R{constructor(e,t,i,o){var a;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cg=null===(a=null==o?void 0:o.isConnected)||void 0===a||a}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=U(this,e,t),y(e)?e===L||null==e||""===e?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==B&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):(e=>{var t;return k(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==L&&y(this._$AH)?this._$AA.nextSibling.data=e:this.k(v.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:o}=e,a="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=N.createElement(o.h,this.options)),o);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===a)this._$AH.m(i);else{const e=new P(a,this),t=e.p(this.options);e.m(i),this.k(t),this._$AH=e}}_$AC(e){let t=M.get(e.strings);return void 0===t&&M.set(e.strings,t=new N(e)),t}S(e){k(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const a of e)o===t.length?t.push(i=new R(this.M(x()),this.M(x()),this,this.options)):i=t[o],i._$AI(a),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class j{constructor(e,t,i,o,a){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const a=this.strings;let s=!1;if(void 0===a)e=U(this,e,t,0),s=!y(e)||e!==this._$AH&&e!==B,s&&(this._$AH=e);else{const o=e;let n,l;for(e=a[0],n=0;n<a.length-1;n++)l=U(this,o[i+n],t,n),l===B&&(l=this._$AH[n]),s||(s=!y(l)||l!==this._$AH[n]),l===L?e=L:e!==L&&(e+=(null!=l?l:"")+a[n+1]),this._$AH[n]=l}s&&!o&&this.C(e)}C(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class z extends j{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===L?void 0:e}}const G=_?_.emptyScript:"";class F extends j{constructor(){super(...arguments),this.type=4}C(e){e&&e!==L?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class K extends j{constructor(e,t,i,o,a){super(e,t,i,o,a),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=U(this,e,t,0))&&void 0!==i?i:L)===B)return;const o=this._$AH,a=e===L&&o!==L||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==L&&(o===L||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class q{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){U(this,e)}}const Y=window.litHtmlPolyfillSupport;var W,Z;null==Y||Y(N,R),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.2.5");class Q extends h{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,i)=>{var o,a;const s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:t;let n=s._$litPart$;if(void 0===n){const e=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:null;s._$litPart$=n=new R(t.insertBefore(x(),e),e,void 0,null!=i?i:{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return B}}Q.finalized=!0,Q._$litElement$=!0,null===(W=globalThis.litElementHydrateSupport)||void 0===W||W.call(globalThis,{LitElement:Q});const J=globalThis.litElementPolyfillSupport;null==J||J({LitElement:Q}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.2.0");const X=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function ee(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):X(e,t)}function te(e){return ee({...e,state:!0})}const ie=({finisher:e,descriptor:t})=>(i,o)=>{var a;if(void 0===o){const o=null!==(a=i.originalKey)&&void 0!==a?a:i.key,s=null!=t?{kind:"method",placement:"prototype",key:o,descriptor:t(i.key)}:{...i,key:o};return null!=e&&(s.finisher=function(t){e(t,o)}),s}{const a=i.constructor;void 0!==t&&Object.defineProperty(i,o,t(o)),null==e||e(a,o)}};function oe(e,t){return ie({descriptor:i=>{const o={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():"__"+i;o.get=function(){var i,o;return void 0===this[t]&&(this[t]=null!==(o=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==o?o:null),this[t]}}return o}})}function ae(e){return ie({descriptor:t=>({get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}var se;null===(se=window.HTMLSlotElement)||void 0===se||se.prototype.assignedElements;var ne,le=new Uint8Array(16);function re(){if(!ne&&!(ne="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ne(le)}for(var de=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,ue=function(e){return"string"==typeof e&&de.test(e)},ce=[],he=0;he<256;++he)ce.push((he+256).toString(16).substr(1));var pe=function(e,t,i){var o=(e=e||{}).random||(e.rng||re)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){i=i||0;for(var a=0;a<16;++a)t[i+a]=o[a];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(ce[e[t+0]]+ce[e[t+1]]+ce[e[t+2]]+ce[e[t+3]]+"-"+ce[e[t+4]]+ce[e[t+5]]+"-"+ce[e[t+6]]+ce[e[t+7]]+"-"+ce[e[t+8]]+ce[e[t+9]]+"-"+ce[e[t+10]]+ce[e[t+11]]+ce[e[t+12]]+ce[e[t+13]]+ce[e[t+14]]+ce[e[t+15]]).toLowerCase();if(!ue(i))throw TypeError("Stringified UUID is invalid");return i}(o)};class _e extends Q{createRenderRoot(){return this}}const ge=(e,t,i)=>{const o=new CustomEvent(t,{detail:i,bubbles:!0,composed:!0});return e.dispatchEvent(o)},be=()=>pe();class me extends class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}{constructor(e){if(super(e),this.it=L,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===L||null==e)return this.ft=void 0,this.it=e;if(e===B)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}me.directiveName="unsafeHTML",me.resultType=1;const fe=(Oe=me,(...e)=>({_$litDirective$:Oe,values:e})),ve={MONTH_SELECT:["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"],YEAR_SELECT_POSTFIX:"",WEEK_DAYS:[{text:"SUN",abbr:"Sunday"},{text:"MON",abbr:"Monday"},{text:"TUE",abbr:"Tuesday"},{text:"WED",abbr:"Wednesday"},{text:"THU",abbr:"Thursday"},{text:"FRI",abbr:"Friday"},{text:"SAT",abbr:"Saturday"}],INVALID_FORMAT:"Format is not valid.",CALENDAR_FOOTER_TEXT:{none:"None",today:"Today"}},xe={MONTH_SELECT:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],YEAR_SELECT_POSTFIX:"年",WEEK_DAYS:[{text:"日",abbr:"日"},{text:"月",abbr:"月"},{text:"火",abbr:"火"},{text:"水",abbr:"水"},{text:"木",abbr:"木"},{text:"金",abbr:"金"},{text:"土",abbr:"土"}],INVALID_FORMAT:"日付の形式が不正です。",CALENDAR_FOOTER_TEXT:{none:"選択を解除",today:"今日"}},ye={MONTH_SELECT:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],YEAR_SELECT_POSTFIX:"年",WEEK_DAYS:[{text:"周日",abbr:"周日"},{text:"周一",abbr:"周一"},{text:"周二",abbr:"周二"},{text:"周三",abbr:"周三"},{text:"周四",abbr:"周四"},{text:"周五",abbr:"周五"},{text:"周六",abbr:"周六"}],INVALID_FORMAT:"日期格式不正确。",CALENDAR_FOOTER_TEXT:{none:"清空",today:"今天"}},ke=24,we=12,$e="AM",Ie="PM",Ee="Format is not valid.",Se=(e,t)=>{let i,o;i=Math.floor(e/60),o=e%60;const a=i%ke<we?$e:Ie;return i=t?i%we:i%ke,0===i&&t&&(i=we),i<10&&(i="0"+i),o<10&&(o="0"+o),{label:i+":"+o+(t?" "+a:""),value:i+":"+o+(t?" "+a:"")}},Te=e=>{const[t,i]=e.split(" "),[o,a]=t.split(":");return i?`${Ae(o,i)}:${a}`:e},Ae=(e,t)=>{const i=parseInt(e,10);return Le(t===Ie?i===we?12:i+12:i===we?0:i)},Ce=e=>{const t=new Date(e),i=t.getFullYear(),o=Le(t.getMonth()+1),a=Le(t.getDate());return{text:`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`,attr:`${i}-${o}-${a}`}},De=(e,t)=>{if(Ve(t))return t;const i="en"===e,o=i?"/":"-",a=t.split(o);return`${i?a[2]:a[0]}-${i?a[0]:a[1]}-${i?a[1]:a[2]}`},Ve=e=>null==e||0===e.length||!/[^(^\s*)|(\s*$)]/.test(e),Be=(e="ja")=>{const t=new Date,i=t.getFullYear(),o=Le(t.getMonth()+1),a=Le(t.getDate());return"ja"===e||"zh"===e?i+"-"+o+"-"+a:o+"/"+a+"/"+i},Le=(e,t=2)=>{const i=`0000000000${e}`;return i.substr(i.length-t)},Me=e=>{switch(e){case"en":default:return ve;case"zh":return ye;case"ja":return xe}},He=()=>V`
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5V1.2764L6 7.5L12 1.2764V0.5L6 6.5L0 0.5Z" fill="#888888"/>
    </svg>
    `;var Oe;function Ne(e,t){const i=e.querySelector(".kuc-base-datetime-listbox__listbox"),o=Ue(e);if(!e.parentElement||!i||!o)return;const{inputToBottom:a,inputToTop:s}=o,n="KUC-BASE-DATETIME-HEADER-MONTH"===e.tagName?360:300,l=e.parentElement.getBoundingClientRect().height;return i.style.maxHeight=n+"px",e.parentElement.style.position="relative",a>=n?(i.style.height=n+"px","bottom"===t?void(i.style.top=l+"px"):void(i.style.bottom=l+"px")):"bottom"===t?(i.style.top=l+"px",void(i.style.height=a-18+"px")):(i.style.height=s-18+"px",i.style.top="auto",void(i.style.bottom=e.parentElement.getBoundingClientRect().height+"px"))}const Ue=e=>e.parentElement?{inputToBottom:window.innerHeight-e.parentElement.getBoundingClientRect().bottom,inputToTop:e.parentElement.getBoundingClientRect().top,inputToRight:window.innerWidth-e.parentElement.getBoundingClientRect().left,inputToLeft:e.parentElement.getBoundingClientRect().left+100}:{inputToBottom:0,inputToTop:0,inputToRight:0,inputToLeft:0},Pe={fromAttribute:e=>null===e,toAttribute:e=>e?null:""},Re=e=>e instanceof HTMLElement?e:fe(e),je=e=>{if(void 0===e||""===e)return"";let t=[];return e.indexOf("-")>0&&(t=e.split("-")),t.length<2?`${e}-01-01`:2===t.length?`${Le(t[0],4)}-${Le(t[1])}-01`:t.length>2?`${Le(t[0],4)}-${Le(t[1])}-${Le(t[2])}`:""},ze=e=>{if(5===e.length||""===e)return e;const t=e.indexOf(":"),i=e.substr(0,t),o=e.substr(t+1,5);return`${Le(i)}:${Le(o)}`};function Ge(e){if(!e||"object"!=typeof e)return{};const t=Object.assign({},e);for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&void 0===t[e]&&delete t[e];return t}function Fe(e){const[t,i,o]=e.split("-"),a=new Date(e),s=a.getFullYear(),n=a.getMonth(),l=a.getDate();return s===Number(t)&&n===Number(i)-1&&l===Number(o)}function Ke(e){return!!Array.isArray(e)}function qe(e){return!!Array.isArray(e)}function Ye(e){return"string"==typeof e}function We(e){return!!Array.isArray(e)}function Ze(e){return"number"==typeof e}function Qe(e,t){return function(e,t,i,o){return new(i||(i=Promise))((function(a,s){function n(e){try{r(o.next(e))}catch(e){s(e)}}function l(e){try{r(o.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,l)}r((o=o.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){throw yield e.updateComplete,new Error(t)}))}var Je=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class Xe extends _e{constructor(e){super(),this.className="",this.id="",this.text="",this.type="normal",this.disabled=!1,this.visible=!0;const t=Ge(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),ge(this,"click")}_getButtonColorType(){return"normal"===this.type||"submit"===this.type||"alert"===this.type?this.type:"normal"}render(){return D`
      ${this._getStyleTagTemplate()}
      <button
        type="button"
        class="kuc-button__button kuc-button__button--${this._getButtonColorType()}"
        ?disabled="${this.disabled}"
        @click="${this._handleClickButton}"
      >
        ${this.text}
      </button>
    `}_getStyleTagTemplate(){return D`
      <style>
        kuc-button,
        kuc-button *,
        :lang(en) kuc-button,
        :lang(en) kuc-button * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-button,
        :lang(ja) kuc-button * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-button,
        :lang(zh) kuc-button * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-button {
          display: inline-block;
          vertical-align: top;
        }
        kuc-button[hidden] {
          display: none;
        }
        .kuc-button__button {
          font-size: 16px;
          min-width: 163px;
          height: 48px;
          padding: 0px 16px;
          user-select: none;
        }
        .kuc-button__button:focus {
          outline: none;
        }
        .kuc-button__button--normal {
          border: 1px solid #e3e7e8;
          background-color: #f7f9fa;
          box-shadow: 1px 1px 1px #ffffff inset;
          color: #3498db;
        }
        .kuc-button__button--normal:hover,
        .kuc-button__button--normal:focus,
        .kuc-button__button--normal:active {
          background-color: #c8d6dd;
          box-shadow: none;
          cursor: pointer;
        }
        .kuc-button__button--submit {
          border: 1px solid #e3e7e8;
          background-color: #3498db;
          color: #ffffff;
        }
        .kuc-button__button--submit:hover,
        .kuc-button__button--submit:focus,
        .kuc-button__button--submit:active {
          background-color: #1d6fa5;
          cursor: pointer;
        }
        .kuc-button__button--alert {
          border: 0 none;
          background-color: #e74c3c;
          box-shadow: 1px 1px 1px #ffffff inset;
          color: #ffffff;
        }
        .kuc-button__button--alert:hover,
        .kuc-button__button--alert:focus,
        .kuc-button__button--alert:active {
          background-color: #bf2718;
          box-shadow: none;
          cursor: pointer;
        }
        .kuc-button__button:disabled {
          border: 1px solid #e3e7e8;
          background-color: #d4d7d7;
          box-shadow: none;
          color: #888888;
          cursor: default;
        }
      </style>
    `}}Je([ee({type:String,reflect:!0,attribute:"class"})],Xe.prototype,"className",void 0),Je([ee({type:String,reflect:!0,attribute:"id"})],Xe.prototype,"id",void 0),Je([ee({type:String})],Xe.prototype,"text",void 0),Je([ee({type:String})],Xe.prototype,"type",void 0),Je([ee({type:Boolean})],Xe.prototype,"disabled",void 0),Je([ee({type:Boolean,attribute:"hidden",reflect:!0,converter:Pe})],Xe.prototype,"visible",void 0),window.customElements.get("kuc-button")||window.customElements.define("kuc-button",Xe);const et="'items' property is not array",tt="'value' property is not array",it="'value' property is not string",ot="'selectedIndex' property is not array",at="'selectedIndex' property is not number";var st=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class nt extends _e{constructor(e){super(),this.className="",this.error="",this.id="",this.itemLayout="horizontal",this.label="",this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=be();const t=Ge(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,o=e.selectedIndex||[];if(!t&&i){if(!We(o))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,o)}}shouldUpdate(e){return e.has("items")&&!Ke(this.items)?(Qe(this,et),!1):e.has("value")&&!qe(this.value)?(Qe(this,tt),!1):!(e.has("selectedIndex")&&!We(this.selectedIndex)&&(Qe(this,ot),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}_getNewValueMapping(e,t){const i=parseInt(t,10),o=Object.keys(this._valueMapping),a=Object.assign({},this._valueMapping);return o.indexOf(t)>-1?(delete a[i],a):(a[i]=e,a)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.dataset.index||"0",o=t.value,a=this.value?[...this.value]:this.value,s=this._getNewValueMapping(o,i),n=this.items.map((e=>e.value)),l=Object.values(s).filter((e=>n.indexOf(e)>-1));if(l===a)return;const r=Object.keys(s).map((e=>parseInt(e,10)));this.value=l,this.selectedIndex=r,ge(this,"change",{oldValue:a,value:l})}_handleFocusInput(e){e.target.parentNode.setAttribute("focused","")}_handleBlurInput(e){e.target.parentNode.removeAttribute("focused")}_getCheckboxIconSvgTemplate(e,t){return V`
    <svg
      class="kuc-checkbox__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="19"
        height="19"
        rx="1"
        fill="white"
        stroke="${this._getSVGStrokeValue(e,t)}"
        stroke-width="2"/>
      ${t?V`<path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z"
            fill="${e?"#d8d8d8":"#3498db"}"/>`:""}
    </svg>
  `}_getSVGStrokeValue(e,t){return e?"#d8d8d8":t?"#3498db":"#d8d8d8"}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),o=Object.keys(this._valueMapping);return i.filter(((i,a)=>i===e.value&&t===parseInt(o[a],10))).length>0}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return D`
      <div
        class="kuc-checkbox__group__select-menu__item"
        itemLayout="${this.itemLayout}"
      >
        <input
          type="checkbox"
          aria-describedby="${this._GUID}-error"
          aria-required="${this.requiredIcon}"
          data-index="${t}"
          id="${this._GUID}-item-${t}"
          class="kuc-checkbox__group__select-menu__item__input"
          name="${this._GUID}-group"
          value="${void 0!==e.value?e.value:""}"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeInput}"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
        />
        <label
          for="${this._GUID}-item-${t}"
          class="kuc-checkbox__group__select-menu__item__label"
          >${this._getCheckboxIconSvgTemplate(this.disabled,i)}${void 0===e.label?e.value:e.label}
        </label>
      </div>
    `}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return D`
      ${this._getStyleTagTemplate()}
      <div
        class="kuc-checkbox__group"
        role="group"
        aria-labelledby="${this._GUID}-group"
      >
        <div class="kuc-checkbox__group__label" ?hidden="${!this.label}">
          <span
            id="${this._GUID}-group"
            class="kuc-checkbox__group__label__text"
            >${this.label}</span
          ><!--
          --><span
            class="kuc-checkbox__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </div>
        <div
          class="kuc-checkbox__group__select-menu"
          ?borderVisible="${this.borderVisible}"
          itemLayout="${this.itemLayout}"
        >
          ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
        </div>
        <div
          class="kuc-checkbox__group__error"
          id="${this._GUID}-error"
          role="alert"
          aria-live="assertive"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </div>
    `}updated(){this._inputEls.forEach((e=>{e.checked=this.value.indexOf(e.value)>-1}))}_getValueMapping(e){const t=e.items||[],i=e.value||[],o=e.selectedIndex||[],a=t.map((e=>e.value||"")),s=Object.assign({},a),n={};if(0===i.length){const e=this._getValidValue(s,o);return o.forEach(((t,i)=>n[t]=e[i])),n}return this._getValidSelectedIndex(s).forEach(((e,t)=>n[e]=i[t])),n}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const o=this.selectedIndex[i];if(e[o]===this.value[i]){t.push(o);continue}const a=this.items.findIndex((e=>e.value===this.value[i]));t.push(a)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}_getStyleTagTemplate(){return D`
      <style>
        kuc-checkbox,
        kuc-checkbox *,
        :lang(en) kuc-checkbox,
        :lang(en) kuc-checkbox * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-checkbox,
        :lang(ja) kuc-checkbox * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-checkbox,
        :lang(zh) kuc-checkbox * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-checkbox {
          font-size: 14px;
          color: #333333;
          display: inline-table;
          vertical-align: top;
          width: 239px;
          min-width: 239px;
          line-height: 1.5;
        }
        kuc-checkbox[hidden] {
          display: none;
        }
        .kuc-checkbox__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
          width: 100%;
          margin: 0px;
        }
        .kuc-checkbox__group__select-menu {
          white-space: nowrap;
        }
        .kuc-checkbox__group__label {
          display: inline-block;
          padding: 4px 0 8px 0;
          white-space: nowrap;
        }
        .kuc-checkbox__group__label[hidden] {
          display: none;
        }
        .kuc-checkbox__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-checkbox__group__label__required-icon[hidden] {
          display: none;
        }
        .kuc-checkbox__group__select-menu[borderVisible] {
          border-color: #e3e7e8;
          border-width: 1px;
          border-style: solid;
          padding: 4px 0 0 4px;
        }
        .kuc-checkbox__group__select-menu__item {
          margin-bottom: 4px;
          margin-right: 16px;
          padding: 4px;
          border: 1px solid transparent;
          position: relative;
          white-space: normal;
          word-wrap: normal;
          display: inline-block;
          height: 24px;
          line-height: 24px;
        }
        .kuc-checkbox__group__select-menu__item[itemLayout="vertical"] {
          display: block;
        }
        .kuc-checkbox__group__select-menu__item[focused] {
          border: 1px solid #3498db;
        }
        .kuc-checkbox__group__select-menu__item__input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }
        .kuc-checkbox__group__select-menu__item__input:hover
          + .kuc-checkbox__group__select-menu__item__label {
          color: #666666;
        }
        .kuc-checkbox__group__select-menu__item__label__icon {
          position: absolute;
          top: 50%;
          left: -30px;
          box-sizing: border-box;
          margin-top: -11px;
          width: 21px;
          height: 21px;
          box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
          content: "";
        }
        .kuc-checkbox__group__select-menu__item__input[disabled]
          + .kuc-checkbox__group__select-menu__item__label {
          color: #888888;
          cursor: not-allowed;
        }
        .kuc-checkbox__group__select-menu__item__label {
          cursor: pointer;
          position: relative;
          margin-left: 32px;
          display: inline-block;
          vertical-align: middle;
          white-space: nowrap;
        }
        .kuc-checkbox__group__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0;
          word-break: break-all;
          white-space: normal;
        }
        .kuc-checkbox__group__error[hidden] {
          display: none;
        }
      </style>
    `}}st([ee({type:String,reflect:!0,attribute:"class"})],nt.prototype,"className",void 0),st([ee({type:String})],nt.prototype,"error",void 0),st([ee({type:String,reflect:!0,attribute:"id"})],nt.prototype,"id",void 0),st([ee({type:String})],nt.prototype,"itemLayout",void 0),st([ee({type:String})],nt.prototype,"label",void 0),st([ee({type:Boolean})],nt.prototype,"borderVisible",void 0),st([ee({type:Boolean})],nt.prototype,"disabled",void 0),st([ee({type:Boolean})],nt.prototype,"requiredIcon",void 0),st([ee({type:Boolean,attribute:"hidden",reflect:!0,converter:Pe})],nt.prototype,"visible",void 0),st([ee({type:Array})],nt.prototype,"items",void 0),st([ee({type:Array})],nt.prototype,"selectedIndex",void 0),st([ee({type:Array})],nt.prototype,"value",void 0),st([ae(".kuc-checkbox__group__select-menu__item__input")],nt.prototype,"_inputEls",void 0),st([te()],nt.prototype,"_valueMapping",void 0),window.customElements.get("kuc-checkbox")||window.customElements.define("kuc-checkbox",nt);const lt=e=>{const t=(e=>{const t=document.createElement("div");return t.style.cssText=`\n  height: 0px;\n  overflow: hidden;\n  display: inline-block;\n  font-size: 14px;\n  font-family: ${window.getComputedStyle(e).fontFamily};\n  `,t})(e),i=e.cloneNode(!0);if(i.hasAttribute("hidden"))return 0;t.appendChild(i),document.body.appendChild(t);const o=t.getBoundingClientRect().width;return document.body.removeChild(t),o};var rt=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class dt extends _e{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.value="",this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._selectorVisible=!1,this._GUID=be();const t=Ge(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}_getSelectedLabel(){const e=this.items.filter(((e,t)=>this._isCheckedItem(e,t)));return 0===e.length?"":void 0===e[0].label?e[0].value:e[0].label}_getToggleIconSvgTemplate(){return V`
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.2122 15.6665L25 16.1392L19.7332 21.4998H18.2668L13 16.1392L13.7878 15.6665L18.765 20.6866H19.235L24.2122 15.6665Z"
          fill="#3498db"/>
      </svg>
    `}shouldUpdate(e){return e.has("items")&&!Ke(this.items)?(Qe(this,et),!1):e.has("value")&&!Ye(this.value)?(Qe(this,it),!1):!(e.has("selectedIndex")&&!Ze(this.selectedIndex)&&(Qe(this,at),1))}willUpdate(e){if(e.has("value")){if(""!==this.value)return;this.selectedIndex=-1}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}render(){return D`
      ${this._getStyleTagTemplate()}
      <div class="kuc-dropdown__group">
        <div
          class="kuc-dropdown__group__label"
          id="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <span class="kuc-dropdown__group__label__text">${this.label}</span
          ><!--
          --><span
            class="kuc-dropdown__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </div>
        <button
          class="kuc-dropdown__group__toggle"
          id="${this._GUID}-toggle"
          type="button"
          aria-haspopup="true"
          aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
          aria-describedby="${this._GUID}-error"
          aria-required="${this.requiredIcon}"
          ?disabled="${this.disabled}"
          @mouseup="${this._handleMouseUpDropdownToggle}"
          @mousedown="${this._handleMouseDownDropdownToggle}"
          @click="${this._handleClickDropdownToggle}"
          @keydown="${this._handleKeyDownDropdownToggle}"
        >
          <span class="kuc-dropdown__group__toggle__selected-item-label"
            >${this._getSelectedLabel()}</span
          >
          <span class="kuc-dropdown__group__toggle__icon">
            ${this._getToggleIconSvgTemplate()}
          </span>
        </button>
        <ul
          class="kuc-dropdown__group__select-menu"
          role="listbox"
          aria-hidden="${!this._selectorVisible}"
          ?hidden="${!this._selectorVisible}"
          @mouseleave="${this._handleMouseLeaveMenu}"
          @mousedown="${this._handleMouseDownMenu}"
        >
          ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
        </ul>
        <div
          class="kuc-dropdown__group__error"
          id="${this._GUID}-error"
          role="alert"
          aria-live="assertive"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </div>
    `}firstUpdated(){window.addEventListener("resize",(()=>{this._actionResizeScrollWindow()})),window.addEventListener("scroll",(()=>{this._actionResizeScrollWindow()}))}updated(){this._updateContainerWidth(),this._selectorVisible?(this._setMenuPosition(),this._scrollToView(),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument,!0)}),1)):setTimeout((()=>{document.removeEventListener("click",this._handleClickDocument,!0)}),1)}_handleMouseDownDropdownItem(e){const t=e.target,i=t.getAttribute("value"),o=t.dataset.index||"0";this._actionUpdateValue(i,o)}_handleMouseOverDropdownItem(e){const t=e.target;this._actionHighlightMenuItem(t)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_handleMouseDownMenu(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleClickDropdownToggle(e){e.stopPropagation(),this._actionToggleMenu()}_handleClickDocument(e){(e.target===this._buttonEl||this._buttonEl.contains(e.target))&&e.stopPropagation(),this._actionHideMenu()}_handleKeyDownDropdownToggle(e){switch(e.key){case"Up":case"ArrowUp":if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case"Tab":this._selectorVisible&&this._actionHideMenu();break;case"Down":case"ArrowDown":if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case"Enter":{if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}const t=this._highlightItemEl;if(null===t)break;const i=t.getAttribute("value"),o=t.dataset.index||"0";this._actionUpdateValue(i,o),this._actionHideMenu();break}case"Escape":e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._actionHideMenu();break;case"Home":this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case"End":this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem())}}_actionShowMenu(){this._buttonEl.focus(),this._selectorVisible=!0,null!==this._selectedItemEl&&this._setHighlightAndActiveDescendantMenu(this._selectedItemEl)}_actionHideMenu(){this._selectorVisible=!1,this._actionRemoveActiveDescendant()}_actionToggleMenu(){this._selectorVisible?this._actionHideMenu():this._actionShowMenu()}_actionHighlightFirstMenuItem(){this._setHighlightAndActiveDescendantMenu(this._firstItemEl)}_actionHighlightLastMenuItem(){this._setHighlightAndActiveDescendantMenu(this._lastItemEl)}_actionHighlightPrevMenuItem(){let e=null;null!==this._highlightItemEl&&(e=this._highlightItemEl.previousElementSibling,this._highlightItemEl.classList.remove("kuc-dropdown__group__select-menu__highlight")),null===e&&(e=this._lastItemEl),this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;null!==this._highlightItemEl&&(e=this._highlightItemEl.nextElementSibling,this._highlightItemEl.classList.remove("kuc-dropdown__group__select-menu__highlight")),null===e&&(e=this._firstItemEl),this._setHighlightAndActiveDescendantMenu(e)}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach((e=>{e.classList.remove("kuc-dropdown__group__select-menu__highlight")})),this._actionRemoveActiveDescendant()}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.classList.add("kuc-dropdown__group__select-menu__highlight")}_actionUpdateValue(e,t){const i=parseInt(t,10);if(this.value===e&&this.selectedIndex===i)return;const o={oldValue:this.value,value:e};this.value=e,this.selectedIndex=i,ge(this,"change",o)}_actionSetActiveDescendant(e){void 0!==e&&null!==this._buttonEl&&this._buttonEl.setAttribute("aria-activedescendant",e)}_actionRemoveActiveDescendant(){this._buttonEl.removeAttribute("aria-activedescendant")}_updateContainerWidth(){let e=this._labelEl.getBoundingClientRect().width;0===e&&(e=lt(this._labelEl)),e=e>180?e:180,this._groupEl.style.width=e+"px"}_getScrollbarWidthHeight(){const e=document.createElement("div");e.style.cssText="overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth,i=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{scrollbarWidth:t,scrollbarHeight:i}}_getDistanceToggleButton(){const{scrollbarWidth:e,scrollbarHeight:t}=this._getScrollbarWidthHeight(),i=document.body.scrollHeight>window.innerHeight,o=document.body.scrollWidth>window.innerWidth;return{toTop:this._buttonEl.getBoundingClientRect().top,toBottom:window.innerHeight-this._buttonEl.getBoundingClientRect().bottom-(o?t:0),toLeft:this._buttonEl.getBoundingClientRect().left,toRight:window.innerWidth-this._buttonEl.getBoundingClientRect().left-(i?e:0)}}_setMenuPositionAboveOrBelow(){this._menuEl.style.height="auto",this._menuEl.style.bottom="auto",this._menuEl.style.overflowY="";const e=this._menuEl.getBoundingClientRect().height,t=this._getDistanceToggleButton();if(!(t.toBottom>=e))if(t.toBottom<t.toTop){const i=this._errorEl.offsetHeight?this._errorEl.offsetHeight+16:0;if(this._menuEl.style.bottom=`${this._buttonEl.offsetHeight+i}px`,t.toTop>=e)return;this._menuEl.style.height=`${t.toTop}px`,this._menuEl.style.overflowY="scroll"}else this._menuEl.style.height=`${t.toBottom}px`,this._menuEl.style.overflowY="scroll"}_setMenuPositionLeftOrRight(){this._menuEl.style.right="auto";const e=this._menuEl.getBoundingClientRect().width,t=this._getDistanceToggleButton();if(t.toRight>=e||t.toLeft<e||t.toRight<0)return;const i=this._buttonEl.offsetWidth-t.toRight;this._menuEl.style.right=i>0?`${i}px`:"0px"}_setMenuPosition(){this._setMenuPositionAboveOrBelow(),this._setMenuPositionLeftOrRight()}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;const e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionResizeScrollWindow(){!this._timeoutID&&this._selectorVisible&&(this._timeoutID=window.setTimeout((()=>{this._timeoutID=null,this._setMenuPosition()}),50))}_getStyleTagTemplate(){return D`
      <style>
        kuc-dropdown,
        kuc-dropdown *,
        :lang(en) kuc-dropdown,
        :lang(en) kuc-dropdown * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-dropdown,
        :lang(ja) kuc-dropdown * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-dropdown,
        :lang(zh) kuc-dropdown * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-dropdown {
          display: inline-table;
          font-size: 14px;
          color: #333333;
          vertical-align: top;
          width: 180px;
          min-width: 180px;
          line-height: 1.5;
        }
        kuc-dropdown[hidden] {
          display: none;
        }
        .kuc-dropdown__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
          width: 100%;
          margin: 0px;
          position: relative;
        }
        .kuc-dropdown__group__label {
          padding: 4px 0px 8px 0px;
          display: inline-block;
          white-space: nowrap;
        }
        .kuc-dropdown__group__label[hidden] {
          display: none;
        }
        .kuc-dropdown__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-dropdown__group__label__required-icon[hidden] {
          display: none;
        }
        .kuc-dropdown__group__toggle {
          height: 40px;
          box-sizing: border-box;
          box-shadow: 1px 1px 1px #ffffff inset;
          border: 1px solid #e3e7e8;
          color: #3498db;
          background-color: #f7f9fa;
          padding: 0 0 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          cursor: pointer;
        }
        .kuc-dropdown__group__toggle:focus {
          outline: none;
          border: 1px solid #3498db;
        }
        .kuc-dropdown__group__toggle:disabled {
          background-color: #d4d7d7;
          box-shadow: none;
          cursor: not-allowed;
          color: #888888;
        }
        .kuc-dropdown__group__toggle__selected-item-label {
          font-size: 14px;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .kuc-dropdown__group__toggle__icon {
          flex: none;
          width: 38px;
          height: 38px;
        }
        .kuc-dropdown__group__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0px;
          word-break: break-all;
          white-space: normal;
        }
        .kuc-dropdown__group__error[hidden] {
          display: none;
        }
        .kuc-dropdown__group__select-menu {
          position: absolute;
          min-width: 280px;
          margin: 0;
          padding: 8px 0;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
          background-color: #ffffff;
          z-index: 2000;
          list-style: none;
          box-sizing: border-box;
        }
        .kuc-dropdown__group__select-menu[hidden] {
          display: none;
        }
        .kuc-dropdown__group__select-menu__item {
          padding: 8px 16px 8px 24px;
          line-height: 1;
          position: relative;
          cursor: pointer;
        }
        .kuc-dropdown__group__select-menu__item__icon {
          position: absolute;
          top: 50%;
          left: 6px;
          margin-top: -5px;
        }
        .kuc-dropdown__group__select-menu__item[aria-selected="true"] {
          color: #3498db;
        }
        .kuc-dropdown__group__select-menu__highlight[role="option"] {
          background-color: #e2f2fe;
        }
      </style>
    `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return D`
      <li
        class="kuc-dropdown__group__select-menu__item"
        role="option"
        tabindex="${i?"0":"-1"}"
        aria-selected="${i?"true":"false"}"
        data-index="${t}"
        value="${void 0!==e.value?e.value:""}"
        id="${this._GUID}-menuitem-${t}"
        @mousedown="${this._handleMouseDownDropdownItem}"
        @mouseover="${this._handleMouseOverDropdownItem}"
      >
        ${this._getDropdownIconSvgTemplate(i)}
        ${void 0===e.label?e.value:e.label}
      </li>
    `}_getDropdownIconSvgTemplate(e){return V`
      ${e?V`<svg
          class="kuc-dropdown__group__select-menu__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="#3498db"/>
        </svg>`:""}`}}rt([ee({type:String,reflect:!0,attribute:"class"})],dt.prototype,"className",void 0),rt([ee({type:String})],dt.prototype,"error",void 0),rt([ee({type:String,reflect:!0,attribute:"id"})],dt.prototype,"id",void 0),rt([ee({type:String})],dt.prototype,"label",void 0),rt([ee({type:String})],dt.prototype,"value",void 0),rt([ee({type:Number})],dt.prototype,"selectedIndex",void 0),rt([ee({type:Boolean})],dt.prototype,"disabled",void 0),rt([ee({type:Boolean})],dt.prototype,"requiredIcon",void 0),rt([ee({type:Boolean,attribute:"hidden",reflect:!0,converter:Pe})],dt.prototype,"visible",void 0),rt([ee({type:Array})],dt.prototype,"items",void 0),rt([te()],dt.prototype,"_selectorVisible",void 0),rt([oe(".kuc-dropdown__group")],dt.prototype,"_groupEl",void 0),rt([oe(".kuc-dropdown__group__select-menu")],dt.prototype,"_menuEl",void 0),rt([ae(".kuc-dropdown__group__select-menu__item")],dt.prototype,"_itemsEl",void 0),rt([oe("button.kuc-dropdown__group__toggle")],dt.prototype,"_buttonEl",void 0),rt([oe(".kuc-dropdown__group__label")],dt.prototype,"_labelEl",void 0),rt([oe(".kuc-dropdown__group__select-menu__item")],dt.prototype,"_firstItemEl",void 0),rt([oe(".kuc-dropdown__group__select-menu__item:last-child")],dt.prototype,"_lastItemEl",void 0),rt([oe(".kuc-dropdown__group__select-menu__item[aria-selected=true]")],dt.prototype,"_selectedItemEl",void 0),rt([oe(".kuc-dropdown__group__select-menu__highlight")],dt.prototype,"_highlightItemEl",void 0),rt([oe(".kuc-dropdown__group__error")],dt.prototype,"_errorEl",void 0),window.customElements.get("kuc-dropdown")||window.customElements.define("kuc-dropdown",dt);var ut=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class ct extends _e{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=be();const t=Ge(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,o=e.selectedIndex||[];if(!t&&i){if(!We(o))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,o)}}shouldUpdate(e){return e.has("items")&&!Ke(this.items)?(Qe(this,et),!1):e.has("value")&&!qe(this.value)?(Qe(this,tt),!1):!(e.has("selectedIndex")&&!We(this.selectedIndex)&&(Qe(this,ot),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return D`
      ${this._getStyleTagTemplate()}
      <div class="kuc-multi-choice__group">
        <div
          class="kuc-multi-choice__group__label"
          id="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <span class="kuc-multi-choice__group__label__text">${this.label}</span
          ><!--
          --><span
            class="kuc-multi-choice__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </div>
        <div
          class="kuc-multi-choice__group__menu"
          role="listbox"
          aria-multiselectable="true"
          aria-describedby="${this._GUID}-error"
          aria-labelledby="${this._GUID}-label"
          ?disabled="${this.disabled}"
          tabindex="${this.disabled?"-1":"0"}"
          @keydown="${this._handleKeyDownMultiChoice}"
        >
          ${this.items.map(((e,t)=>this._getMenuItemTemplate(e,t)))}
        </div>
        <div
          class="kuc-multi-choice__group__error"
          id="${this._GUID}-error"
          role="alert"
          aria-live="assertive"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </div>
    `}_getValueMapping(e){const t=e.items||[],i=e.value||[],o=e.selectedIndex||[],a=t.map((e=>e.value||"")),s=Object.assign({},a),n={};if(0===i.length){const e=this._getValidValue(s,o);return o.forEach(((t,i)=>n[t]=e[i])),n}return this._getValidSelectedIndex(s).forEach(((e,t)=>n[e]=i[t])),n}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const o=this.selectedIndex[i];if(e[o]===this.value[i]){t.push(o);continue}const a=this.items.findIndex((e=>e.value===this.value[i]));t.push(a)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}_handleMouseDownMultiChoiceItem(e){if(this.disabled)return;const t=e.target,i=t.getAttribute("value"),o=t.dataset.index||"0";this._handleChangeValue(i,o)}_handleMouseOverMultiChoiceItem(e){if(this.disabled)return;this._itemsEl.forEach((e=>{e.classList.contains("kuc-multi-choice__group__menu__highlight")&&e.classList.remove("kuc-multi-choice__group__menu__highlight")}));const t=e.currentTarget;t.classList.add("kuc-multi-choice__group__menu__highlight"),this._setActiveDescendant(t.id)}_handleMouseLeaveMultiChoiceItem(e){this.disabled||(e.currentTarget.classList.remove("kuc-multi-choice__group__menu__highlight"),this._setActiveDescendant())}_handleKeyDownMultiChoice(e){if(this.disabled)return;let t=0;switch(e.key){case"Up":case"ArrowUp":{e.preventDefault(),this._itemsEl.forEach(((e,i)=>{e.classList.contains("kuc-multi-choice__group__menu__highlight")&&(e.classList.remove("kuc-multi-choice__group__menu__highlight"),t=i-1)})),t=t<=-1?this._itemsEl.length-1:t;const i=this._itemsEl[t];i.classList.add("kuc-multi-choice__group__menu__highlight"),this._setActiveDescendant(i.id);break}case"Down":case"ArrowDown":{e.preventDefault(),this._itemsEl.forEach(((e,i)=>{e.classList.contains("kuc-multi-choice__group__menu__highlight")&&(e.classList.remove("kuc-multi-choice__group__menu__highlight"),t=i+1)})),t=t>=this._itemsEl.length?0:t;const i=this._itemsEl[t];i.classList.add("kuc-multi-choice__group__menu__highlight"),this._setActiveDescendant(i.id);break}case"Spacebar":case" ":e.preventDefault(),this._itemsEl.forEach((e=>{if(e.classList.contains("kuc-multi-choice__group__menu__highlight")){const t=e.getAttribute("value"),i=e.dataset.index||"0";this._handleChangeValue(t,i)}}))}}_getMultiChoiceCheckedIconSvgTemplate(e,t){return V`
      ${t?V`<svg
          class="kuc-multi-choice__group__menu__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="${e?"#888888":"#3498db"}"
          />
        </svg>`:""}`}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),o=Object.keys(this._valueMapping);return i.filter(((i,a)=>i===e.value&&t===parseInt(o[a],10))).length>0}_getMenuItemTemplate(e,t){const i=this._isCheckedItem(e,t);return D`
      <div
        class="kuc-multi-choice__group__menu__item"
        role="option"
        aria-selected="${i}"
        aria-required="${this.requiredIcon}"
        data-index="${t}"
        value="${void 0!==e.value?e.value:""}"
        id="${this._GUID}-menuitem-${t}"
        @mousedown="${this._handleMouseDownMultiChoiceItem}"
        @mouseover="${this._handleMouseOverMultiChoiceItem}"
        @mouseleave="${this._handleMouseLeaveMultiChoiceItem}"
      >
        ${this._getMultiChoiceCheckedIconSvgTemplate(this.disabled,i)}
        ${void 0===e.label?e.value:e.label}
      </div>
    `}_getStyleTagTemplate(){return D`
      <style>
        kuc-multi-choice,
        kuc-multi-choice *,
        :lang(en) kuc-multi-choice,
        :lang(en) kuc-multi-choice * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-multi-choice,
        :lang(ja) kuc-multi-choice * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-multi-choice,
        :lang(zh) kuc-multi-choice * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-multi-choice {
          display: inline-table;
          font-size: 14px;
          color: #333333;
          width: 180px;
          min-width: 180px;
          line-height: 1.5;
        }
        kuc-multi-choice[hidden] {
          display: none;
        }
        .kuc-multi-choice__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
          width: 100%;
          margin: 0px;
        }
        .kuc-multi-choice__group__label {
          padding: 4px 0px 8px 0px;
          display: inline-block;
          white-space: nowrap;
        }
        .kuc-multi-choice__group__label[hidden] {
          display: none;
        }
        .kuc-multi-choice__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-multi-choice__group__label__required-icon[hidden] {
          display: none;
        }
        .kuc-multi-choice__group__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0px;
          word-break: break-all;
          white-space: normal;
        }
        .kuc-multi-choice__group__error[hidden] {
          display: none;
        }
        .kuc-multi-choice__group__menu {
          position: relative;
          background: #ffffff;
          border: 1px solid #e3e7e8;
          box-sizing: border-box;
          box-shadow: 1px 1px 12px #f5f5f5 inset, -1px -1px 12px #f5f5f5 inset;
          padding: 6px 0;
          overflow-y: auto;
          overflow-x: hidden;
          max-height: 134px;
          width: 100%;
        }
        .kuc-multi-choice__group__menu:not([disabled]):focus {
          outline: none;
          border: 1px solid #3498db;
        }
        .kuc-multi-choice__group__menu[disabled] {
          background-color: #dbdcdd;
          box-shadow: none;
          cursor: not-allowed;
          color: #888888;
          outline: none;
        }
        .kuc-multi-choice__group__menu__item {
          padding: 4px 16px;
          margin-bottom: 2px;
          line-height: 1;
          position: relative;
          white-space: nowrap;
        }
        .kuc-multi-choice__group__menu__item__icon {
          position: absolute;
          top: 50%;
          left: 16px;
          margin-top: -6px;
          pointer-events: none;
        }
        .kuc-multi-choice__group__menu__item[aria-selected="true"] {
          color: #3498db;
          padding-left: 32px;
        }
        .kuc-multi-choice__group__menu[disabled]
          .kuc-multi-choice__group__menu__item[aria-selected="true"] {
          color: #888888;
        }
        .kuc-multi-choice__group__menu__highlight[role="option"] {
          background-color: #e2f2fe;
          cursor: pointer;
        }
      </style>
    `}_setActiveDescendant(e){void 0!==e&&null!==this._menuEl?this._menuEl.setAttribute("aria-activedescendant",e):this._menuEl.removeAttribute("aria-activedescendant")}_handleChangeValue(e,t){const i=this.value?[...this.value]:this.value,o=this._getNewValueMapping(e,t),a=this.items.map((e=>e.value)),s=Object.values(o).filter((e=>a.indexOf(e)>-1));if(s===i)return;const n=Object.keys(o).map((e=>parseInt(e,10)));this.value=s,this.selectedIndex=n,ge(this,"change",{oldValue:i,value:s})}_getNewValueMapping(e,t){const i=parseInt(t,10),o=Object.keys(this._valueMapping),a=Object.assign({},this._valueMapping);return o.indexOf(t)>-1?(delete a[i],a):(a[i]=e,a)}}ut([ee({type:String,reflect:!0,attribute:"class"})],ct.prototype,"className",void 0),ut([ee({type:String})],ct.prototype,"error",void 0),ut([ee({type:String,reflect:!0,attribute:"id"})],ct.prototype,"id",void 0),ut([ee({type:String})],ct.prototype,"label",void 0),ut([ee({type:Boolean})],ct.prototype,"disabled",void 0),ut([ee({type:Boolean})],ct.prototype,"requiredIcon",void 0),ut([ee({type:Boolean,attribute:"hidden",reflect:!0,converter:Pe})],ct.prototype,"visible",void 0),ut([ee({type:Array})],ct.prototype,"items",void 0),ut([ee({type:Array})],ct.prototype,"selectedIndex",void 0),ut([ee({type:Array})],ct.prototype,"value",void 0),ut([oe(".kuc-multi-choice__group__menu")],ct.prototype,"_menuEl",void 0),ut([ae(".kuc-multi-choice__group__menu__item")],ct.prototype,"_itemsEl",void 0),ut([te()],ct.prototype,"_valueMapping",void 0),window.customElements.get("kuc-multi-choice")||window.customElements.define("kuc-multi-choice",ct);var ht=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class pt extends _e{constructor(e){super(),this.className="",this.text="",this.type="danger",this.duration=-1,this._isOpened=!1;const t=Ge(e);Object.assign(this,t)}_handleClickCloseButton(e){this.close()}_getCloseButtonColor(){switch(this.type){case"info":return"#448aca";case"success":return"#9bbc65";default:return"#c65040"}}_getCloseButtonSvgTemplate(){return V`
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>close button</title>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
          fill="${this._getCloseButtonColor()}"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
          fill="white"
        />
      </svg>
    `}open(){document.body.appendChild(this),this.performUpdate(),this.classList.remove("kuc-notification-fadeout"),this.classList.add("kuc-notification-fadein"),this._isOpened=!0,this._setAutoCloseTimer()}close(){this._isOpened=!1,this.classList.remove("kuc-notification-fadein"),this.classList.add("kuc-notification-fadeout"),this._clearAutoCloseTimer(),ge(this,"close")}render(){return D`
      ${this._getStyleTagTemplate()}
      <div
        class="kuc-notification__notification kuc-notification__notification--${this.type}"
      >
        <pre
          class="kuc-notification__notification__title"
          aria-live="assertive"
          role="${this._isOpened?"alert":""}"
        ><!--
        -->${this.text}</pre>
        <button
          class="kuc-notification__notification__close-button"
          type="button"
          aria-label="close"
          @click="${this._handleClickCloseButton}"
        >
          ${this._getCloseButtonSvgTemplate()}
        </button>
      </div>
    `}_getStyleTagTemplate(){return D`
      <style>
        kuc-notification,
        kuc-notification *,
        :lang(en) kuc-notification,
        :lang(en) kuc-notification * {
          font-family: "HelveticaNeueW02-65Medi", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-notification,
        :lang(ja) kuc-notification * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-notification,
        :lang(zh) kuc-notification * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-notification {
          color: #ffffff;
          font-weight: 700;
          text-align: center;
          text-shadow: 1px -1px 0 rgba(0, 0, 0, 0.5);
        }
        kuc-notification {
          position: fixed;
          display: inline-block;
          top: 0;
          width: 100%;
          line-height: 1.5;
          z-index: 10000;
          margin-top: 16px;
          pointer-events: none;
          visibility: hidden;
          animation-fill-mode: forwards;
        }
        .kuc-notification-fadein {
          animation-name: kuc-notification-fade-in;
          animation-duration: 250ms;
          animation-timing-function: ease-out;
        }
        .kuc-notification-fadeout {
          animation-name: kuc-notification-fade-out;
          animation-duration: 250ms;
          animation-timing-function: ease-out;
        }
        .kuc-notification__notification {
          position: relative;
          display: inline-block;
          text-align: left;
          padding: 16px 56px 16px 24px;
          background-color: #e74c3c;
        }
        .kuc-notification__notification--info {
          background-color: #3498db;
        }
        .kuc-notification__notification--success {
          background-color: #91c36c;
        }
        .kuc-notification__notification--danger {
          background-color: #e74c3c;
        }
        .kuc-notification__notification__title {
          display: block;
          margin: 0px;
          font-size: 16px;
          max-width: 500px;
          min-height: 24px;
          word-break: break-word;
          white-space: pre-wrap;
        }
        .kuc-notification__notification__close-button {
          position: absolute;
          top: 5px;
          right: 0px;
          width: 48px;
          height: 48px;
          background-color: transparent;
          outline: none;
          border: none;
          pointer-events: auto;
          cursor: pointer;
        }
        @keyframes kuc-notification-fade-in {
          0% {
            visibility: visible;
            top: -56px;
          }
          100% {
            visibility: visible;
            top: 0;
          }
        }
        @keyframes kuc-notification-fade-out {
          0% {
            visibility: visible;
            top: 0;
          }
          10% {
            visibility: visible;
            top: 14px;
          }
          100% {
            top: -56px;
          }
        }
      </style>
    `}_setAutoCloseTimer(){!Number.isFinite(this.duration)||this.duration<0||(this._clearAutoCloseTimer(),this._timeoutID=window.setTimeout((()=>{this.close()}),this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}}ht([ee({type:String,reflect:!0,attribute:"class"})],pt.prototype,"className",void 0),ht([ee({type:String})],pt.prototype,"text",void 0),ht([ee({type:String})],pt.prototype,"type",void 0),ht([ee({type:Number})],pt.prototype,"duration",void 0),ht([te()],pt.prototype,"_isOpened",void 0),window.customElements.get("kuc-notification")||window.customElements.define("kuc-notification",pt);var _t=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class gt extends _e{constructor(e){super(),this.className="",this.error="",this.id="",this.itemLayout="horizontal",this.label="",this.value="",this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=be();const t=Ge(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}shouldUpdate(e){return e.has("items")&&!Ke(this.items)?(Qe(this,et),!1):e.has("value")&&!Ye(this.value)?(Qe(this,it),!1):!(e.has("selectedIndex")&&!Ze(this.selectedIndex)&&(Qe(this,at),1))}willUpdate(e){if(e.has("value")){if(""!==this.value)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.value,o=t.dataset.index||"0",a=parseInt(o,10);if(this.value===i&&this.selectedIndex===a)return;const s={oldValue:this.value,value:i};this.value=i,this.selectedIndex=a,ge(this,"change",s)}_handleFocusInput(e){e.target.parentNode.setAttribute("focused","")}_handleBlurInput(e){e.target.parentNode.removeAttribute("focused")}_getRadioIconSvgTemplate(e,t){return V`
    <svg
      class="kuc-radio-button__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10.5"
        cy="10.5"
        r="10"
        fill="white"
        stroke="#e3e7e8" stroke-width="1"/>
      ${t?V`<circle cx="10.5" cy="10.5" r="6.5" fill="${e?"#e3e7e8":"#3498db"}"/>`:""}
    </svg>
  `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return D`
      <div
        class="kuc-radio-button__group__select-menu__item"
        itemLayout="${this.itemLayout}"
      >
        <input
          type="radio"
          aria-checked="${i}"
          aria-describedby="${this._GUID}-error"
          data-index="${t}"
          id="${this._GUID}-item-${t}"
          class="kuc-radio-button__group__select-menu__item__input"
          name="${this._GUID}-group"
          value="${void 0!==e.value?e.value:""}"
          tabindex="${this._getTabIndex(t,e,this.items)}"
          aria-required="${this.requiredIcon}"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeInput}"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
        />
        <label
          class="kuc-radio-button__group__select-menu__item__label"
          for="${this._GUID}-item-${t}"
          >${this._getRadioIconSvgTemplate(this.disabled,i)}${void 0===e.label?e.value:e.label}
        </label>
      </div>
    `}_getTabIndex(e,t,i){return 0===e&&0===i.filter((e=>e.value===this.value)).length||t.value===this.value?"0":"-1"}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}render(){return D`
      ${this._getStyleTagTemplate()}
      <div
        class="kuc-radio-button__group"
        role="radiogroup"
        aria-labelledby="${this._GUID}-group"
      >
        <div class="kuc-radio-button__group__label" ?hidden="${!this.label}">
          <span
            id="${this._GUID}-group"
            class="kuc-radio-button__group__label__text"
            >${this.label}</span
          ><!--
            --><span
            class="kuc-radio-button__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </div>
        <div
          class="kuc-radio-button__group__select-menu"
          ?borderVisible="${this.borderVisible}"
          itemLayout="${this.itemLayout}"
        >
          ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
        </div>
        <div
          class="kuc-radio-button__group__error"
          id="${this._GUID}-error"
          role="alert"
          aria-live="assertive"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </div>
    `}updated(){this._updateErrorWidth()}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}_updateErrorWidth(){const e=lt(this._labelEl),t=lt(this._selectMenuEl);let i=e>239?e:239;t>i&&(i=t),this._errorEl.style.width=i+"px"}_getStyleTagTemplate(){return D`
      <style>
        kuc-radio-button,
        kuc-radio-button *,
        :lang(en) kuc-radio-button,
        :lang(en) kuc-radio-button * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-radio-button,
        :lang(ja) kuc-radio-button * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-radio-button,
        :lang(zh) kuc-radio-button * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-radio-button {
          font-size: 14px;
          color: #333333;
          display: inline-table;
          min-width: 239px;
          vertical-align: top;
          line-height: 1.5;
        }

        kuc-radio-button[hidden] {
          display: none;
        }

        .kuc-radio-button__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
          margin: 0px;
          width: 100%;
        }

        .kuc-radio-button__group__label {
          display: inline-block;
          padding: 4px 0 8px 0;
          white-space: nowrap;
        }

        .kuc-radio-button__group__label[hidden] {
          display: none;
        }

        .kuc-radio-button__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }

        .kuc-radio-button__group__label__required-icon[hidden] {
          display: none;
        }

        .kuc-radio-button__group__select-menu {
          display: block;
          min-width: 239px;
          width: 100%;
        }

        .kuc-radio-button__group__select-menu[bordervisible] {
          border-color: #e3e7e8;
          border-width: 1px;
          border-style: solid;
          padding-top: 4px;
          box-sizing: border-box;
        }

        .kuc-radio-button__group__select-menu__item {
          margin-left: 4px;
          margin-bottom: 4px;
          margin-right: 16px;
          padding: 4px;
          border: 1px solid transparent;
          position: relative;
          white-space: normal;
          word-wrap: normal;
          display: inline-block;
          height: 24px;
          line-height: 24px;
        }

        .kuc-radio-button__group__select-menu__item[itemlayout="vertical"] {
          display: block;
        }

        .kuc-radio-button__group__select-menu__item[focused] {
          border: 1px solid #3498db;
        }

        .kuc-radio-button__group__select-menu__item__input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }

        .kuc-radio-button__group__select-menu__item__input:hover
          + .kuc-radio-button__group__select-menu__item__label {
          color: #666666;
        }

        .kuc-radio-button__group__select-menu__item__label__icon {
          position: absolute;
          top: 50%;
          left: -30px;
          box-sizing: border-box;
          margin-top: -11px;
          width: 21px;
          height: 21px;
          box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
          content: "";
          border-radius: 9px;
        }

        .kuc-radio-button__group__select-menu__item__input[disabled]
          + .kuc-radio-button__group__select-menu__item__label {
          color: #888888;
          cursor: not-allowed;
        }

        .kuc-radio-button__group__select-menu__item__label {
          cursor: pointer;
          position: relative;
          margin-left: 32px;
          display: inline-block;
          vertical-align: middle;
          white-space: nowrap;
        }

        .kuc-radio-button__group__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0;
          word-break: break-all;
          white-space: normal;
        }

        .kuc-radio-button__group__error[hidden] {
          display: none;
        }
      </style>
    `}}_t([ee({type:String,reflect:!0,attribute:"class"})],gt.prototype,"className",void 0),_t([ee({type:String})],gt.prototype,"error",void 0),_t([ee({type:String,reflect:!0,attribute:"id"})],gt.prototype,"id",void 0),_t([ee({type:String})],gt.prototype,"itemLayout",void 0),_t([ee({type:String})],gt.prototype,"label",void 0),_t([ee({type:String})],gt.prototype,"value",void 0),_t([ee({type:Number})],gt.prototype,"selectedIndex",void 0),_t([ee({type:Boolean})],gt.prototype,"borderVisible",void 0),_t([ee({type:Boolean})],gt.prototype,"disabled",void 0),_t([ee({type:Boolean})],gt.prototype,"requiredIcon",void 0),_t([ee({type:Boolean,attribute:"hidden",reflect:!0,converter:Pe})],gt.prototype,"visible",void 0),_t([ee({type:Array})],gt.prototype,"items",void 0),_t([oe(".kuc-radio-button__group__label")],gt.prototype,"_labelEl",void 0),_t([oe(".kuc-radio-button__group__error")],gt.prototype,"_errorEl",void 0),_t([oe(".kuc-radio-button__group__select-menu")],gt.prototype,"_selectMenuEl",void 0),window.customElements.get("kuc-radio-button")||window.customElements.define("kuc-radio-button",gt);class bt extends _e{constructor(e){super(),this._body=document.getElementsByTagName("BODY")[0],this.text="";const t=Ge(e);Object.assign(this,t)}_getSpinnerSvgTemplate(){return V`
      <svg
        class="kuc-spinner__spinner__loader"
        viewBox="0 0 50 50"
        aria-hidden="true"
      >
        <circle r="4" cx="30.43" cy="4.72" opacity="0.3" />
        <circle r="4" cx="39.85" cy="10.15" opacity="0.3" />
        <circle r="4" cx="45.28" cy="19.56" opacity="0.3" />
        <circle r="4" cx="45.28" cy="30.43" opacity="0.3" />
        <circle r="4" cx="39.85" cy="39.85" opacity="0.3" />
        <circle r="4" cx="30.44" cy="45.28" opacity="0.4" />
        <circle r="4" cx="19.56" cy="45.28" opacity="0.5" />
        <circle r="4" cx="10.15" cy="39.85" opacity="0.6" />
        <circle r="4" cx="4.7" cy="30.44" opacity="0.7" />
        <circle r="4" cx="4.7" cy="19.56" opacity="0.8" />
        <circle r="4" cx="10.15" cy="10.15" opacity="0.9" />
        <circle r="4" cx="19.56" cy="4.72" opacity="1" />
      </svg>
    `}open(){!1===this._body.classList.contains("kuc--has-spinner")&&this._body.classList.add("kuc--has-spinner"),this._body.appendChild(this)}close(){this._body.classList.remove("kuc--has-spinner"),this.parentNode&&this.parentNode.removeChild(this)}render(){return D`
      ${this._getStyleTagTemplate()}
      <div class="kuc-spinner__spinner" aria-live="assertive" role="alert">
        ${this._getSpinnerSvgTemplate()}
        <div
          class="kuc-spinner__spinner__text${this.text?"":" visually-hidden"}"
        >
          ${this.text?this.text:"now loading…"}
        </div>
      </div>
      <div class="kuc-spinner__mask"></div>
    `}_getStyleTagTemplate(){return D`
      <style>
        kuc-spinner,
        kuc-spinner *,
        :lang(en) kuc-spinner,
        :lang(en) kuc-spinner * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-spinner,
        :lang(ja) kuc-spinner * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-spinner,
        :lang(zh) kuc-spinner * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-spinner {
          font-size: 14px;
          color: #333333;
        }
        .kuc-spinner__spinner {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 10000;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .kuc-spinner__spinner__loader {
          width: 50px;
          height: 50px;
          animation: rotate-loading 1s steps(12) infinite;
          fill: #99ccff;
        }
        .kuc-spinner__spinner__text {
          margin: 10px 0;
        }
        .visually-hidden {
          position: absolute;
          white-space: nowrap;
          width: 1px;
          height: 1px;
          overflow: hidden;
          border: 0;
          padding: 0;
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          margin: -1px;
        }
        .kuc-spinner__mask {
          position: fixed;
          top: 0;
          right: 0;
          display: block;
          width: 100%;
          height: 100%;
          background-color: #666666;
          opacity: 0.6;
          z-index: 9999;
        }
        .kuc--has-spinner {
          overflow: hidden;
        }
        @keyframes rotate-loading {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      </style>
    `}}(function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);s>3&&n&&Object.defineProperty(t,i,n)})([ee({type:String})],bt.prototype,"text",void 0),window.customElements.get("kuc-spinner")||window.customElements.define("kuc-spinner",bt);var mt=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class ft extends _e{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.prefix="",this.suffix="",this.textAlign="left",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=be();const t=Ge(e);Object.assign(this,t)}_handleFocusInput(e){const t={value:this.value};ge(this,"focus",t)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,ge(this,"change",i)}_handleInputText(e){e.stopPropagation();const t={value:e.target.value,data:e.data};ge(this,"input",t)}render(){return D`
      ${this._getStyleTagTemplate()}
      <div class="kuc-text__group">
        <label
          class="kuc-text__group__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <span class="kuc-text__group__label__text">${this.label}</span
          ><!--
            --><span
            class="kuc-text__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </label>
        <div class="kuc-text__group__input-form">
          <div class="kuc-text__group__input-form__prefix-outer">
            <span
              class="kuc-text__group__input-form__prefix-outer__prefix"
              ?hidden="${!this.prefix}"
              >${this.prefix}</span
            >
          </div>
          <div class="kuc-text__group__input-form__input-outer">
            <input
              class="kuc-text__group__input-form__input-outer__input"
              id="${this._GUID}-label"
              placeholder="${this.placeholder}"
              textAlign="${this.textAlign}"
              type="text"
              .value="${this.value}"
              aria-required="${this.requiredIcon}"
              aria-invalid="${""!==this.error}"
              aria-describedby="${this._GUID}-error"
              @focus="${this._handleFocusInput}"
              @change="${this._handleChangeInput}"
              @input="${this._handleInputText}"
              ?disabled="${this.disabled}"
            />
          </div>
          <div class="kuc-text__group__input-form__suffix-outer">
            <span
              class="kuc-text__group__input-form__suffix-outer__suffix"
              ?hidden="${!this.suffix}"
              >${this.suffix}</span
            >
          </div>
        </div>
        <div
          class="kuc-text__group__error"
          id="${this._GUID}-error"
          role="alert"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </div>
    `}_getStyleTagTemplate(){return D`
      <style>
        kuc-text,
        kuc-text *,
        :lang(en) kuc-text,
        :lang(en) kuc-text * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-text,
        :lang(ja) kuc-text * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-text,
        :lang(zh) kuc-text * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-text {
          font-size: 14px;
          color: #333333;
          display: inline-table;
          vertical-align: top;
          min-width: 193px;
          width: 193px;
          line-height: 1.5;
        }
        kuc-text[hidden] {
          display: none;
        }
        .kuc-text__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
          margin: 0px;
        }
        .kuc-text__group__label {
          display: inline-block;
          padding: 4px 0px 8px 0px;
          white-space: nowrap;
        }
        .kuc-text__group__label[hidden] {
          display: none;
        }
        .kuc-text__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-text__group__label__required-icon[hidden] {
          display: none;
        }
        .kuc-text__group__input-form {
          display: table;
          width: 100%;
        }
        .kuc-text__group__input-form__prefix-outer,
        .kuc-text__group__input-form__input-outer,
        .kuc-text__group__input-form__suffix-outer {
          display: table-cell;
        }
        .kuc-text__group__input-form__prefix-outer__prefix {
          padding-right: 4px;
          white-space: nowrap;
        }
        .kuc-text__group__input-form__input-outer {
          min-width: 26px;
          width: 100%;
        }
        .kuc-text__group__input-form__input-outer__input {
          min-width: 100%;
          width: 100%;
          height: 40px;
          padding: 0 8px;
          border: 1px solid #e3e7e8;
          box-sizing: border-box;
          font-size: 14px;
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
        }
        .kuc-text__group__input-form__input-outer__input[textAlign="left"] {
          text-align: left;
        }
        .kuc-text__group__input-form__input-outer__input[textAlign="right"] {
          text-align: right;
        }
        .kuc-text__group__input-form__input-outer__input:focus {
          outline: none;
          border: 1px solid #3498db;
        }
        .kuc-text__group__input-form__input-outer__input:disabled {
          color: #888888;
          background-color: #d4d7d7;
          box-shadow: none;
          cursor: not-allowed;
        }
        .kuc-text__group__input-form__suffix-outer__suffix {
          padding-left: 4px;
          white-space: nowrap;
        }
        .kuc-text__group__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0px;
          word-break: break-all;
          white-space: normal;
        }
        .kuc-text__group__error[hidden] {
          display: none;
        }
      </style>
    `}}mt([ee({type:String,reflect:!0,attribute:"class"})],ft.prototype,"className",void 0),mt([ee({type:String})],ft.prototype,"error",void 0),mt([ee({type:String,reflect:!0,attribute:"id"})],ft.prototype,"id",void 0),mt([ee({type:String})],ft.prototype,"label",void 0),mt([ee({type:String})],ft.prototype,"placeholder",void 0),mt([ee({type:String})],ft.prototype,"prefix",void 0),mt([ee({type:String})],ft.prototype,"suffix",void 0),mt([ee({type:String})],ft.prototype,"textAlign",void 0),mt([ee({type:String})],ft.prototype,"value",void 0),mt([ee({type:Boolean})],ft.prototype,"disabled",void 0),mt([ee({type:Boolean})],ft.prototype,"requiredIcon",void 0),mt([ee({type:Boolean,attribute:"hidden",reflect:!0,converter:Pe})],ft.prototype,"visible",void 0),window.customElements.get("kuc-text")||window.customElements.define("kuc-text",ft);var vt=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class xt extends _e{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._onResize=!1,this._GUID=be();const t=Ge(e);Object.assign(this,t)}_handleFocusTextarea(e){const t={value:this.value};ge(this,"focus",t)}_handleChangeTextarea(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,ge(this,"change",i)}_handleInputTextArea(e){e.stopPropagation();const t={value:e.target.value,data:e.data};ge(this,"input",t)}_handleMouseDownResize(){this._onResize=!0}_handleMouseUpDocument(){this._onResize=!1}_handleMouseMoveDocument(e){if(!this._onResize)return;const t=this._textarea.getBoundingClientRect();let i=e.clientX-t.left,o=e.clientY-t.top;i<299&&(i=299),o<125&&(o=125),this.style.width=i+"px",this._textarea.style.height=o+"px"}render(){return D`
      ${this._getStyleTagTemplate()}
      <div class="kuc-textarea__group">
        <label
          class="kuc-textarea__group__label"
          ?hidden="${!this.label}"
          for="${this._GUID}-label"
        >
          <span class="kuc-textarea__group__label__text">${this.label}</span
          ><!--
          --><span
            class="kuc-textarea__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </label>
        <textarea
          id="${this._GUID}-label"
          class="kuc-textarea__group__textarea"
          placeholder="${this.placeholder}"
          .value="${this.value}"
          aria-describedby="${this._GUID}-error"
          aria-required="${this.requiredIcon}"
          aria-invalid="${!this.error}"
          @change="${this._handleChangeTextarea}"
          @focus="${this._handleFocusTextarea}"
          @input="${this._handleInputTextArea}"
          ?disabled="${this.disabled}"
        >
        </textarea>
        <div
          class="kuc-textarea__group__resizer"
          @mousedown="${this._handleMouseDownResize}"
          ?hidden="${this.disabled}"
        >
          ${this._getResizerButtonSvgTemplate()}
        </div>
        <div
          class="kuc-textarea__group__error"
          id="${this._GUID}-error"
          role="alert"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </div>
    `}_getResizerButtonSvgTemplate(){return V`
    <svg height="16" width="16">
      <g fill="none" stroke="#b6b6b6" stroke-width="2">
        <line x1="14" x2="16" y1="15" y2="15" />
        <line x1="14" x2="16" y1="11" y2="11" />
        <line x1="14" x2="16" y1="7" y2="7" />
        <line x1="10" x2="12" y1="15" y2="15" />
        <line x1="6" x2="8" y1="15" y2="15" />
        <line x1="10" x2="12" y1="11" y2="11" />
      </g>
    </svg>
    `}firstUpdated(){document.addEventListener("mousemove",(e=>this._handleMouseMoveDocument(e))),document.addEventListener("mouseup",(e=>this._handleMouseUpDocument()))}_getStyleTagTemplate(){return D`
      <style>
        kuc-textarea,
        kuc-textarea *,
        :lang(en) kuc-textarea,
        :lang(en) kuc-textarea * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-textarea,
        :lang(ja) kuc-textarea * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-textarea,
        :lang(zh) kuc-textarea * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-textarea {
          font-size: 14px;
          color: #333333;
          display: inline-table;
          vertical-align: top;
          width: 299px;
          line-height: 1.5;
        }
        kuc-textarea[hidden] {
          display: none;
        }
        .kuc-textarea__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
          width: 100%;
          margin: 0px;
        }
        .kuc-textarea__group__label {
          white-space: nowrap;
          display: inline-block;
          padding: 4px 0px 8px 0px;
        }
        .kuc-textarea__group__label[hidden] {
          display: none;
        }
        .kuc-textarea__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-textarea__group__label__required-icon[hidden] {
          display: none;
        }
        textarea.kuc-textarea__group__textarea {
          display: block;
          border: 1px solid #e3e7e8;
          box-sizing: border-box;
          font-size: 14px;
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
          min-width: 299px;
          min-height: 125px;
          padding: 8px;
          resize: none;
          width: 100%;
          background-color: #ffffff;
        }
        .kuc-textarea__group__textarea:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
          border: 1px solid #3498db;
          background-color: #ffffff;
          color: #333333;
        }
        .kuc-textarea__group__textarea:disabled {
          color: #888888;
          background-color: #d4d7d7;
          box-shadow: none;
          cursor: not-allowed;
          resize: none;
        }
        .kuc-textarea__group__resizer {
          position: relative;
          width: 16px;
          height: 16px;
          cursor: se-resize;
          float: right;
          margin: -16px 0px;
        }
        .kuc-textarea__group__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0px;
          word-break: break-all;
          white-space: normal;
        }
        .kuc-textarea__group__error[hidden] {
          display: none;
        }
      </style>
    `}}vt([ee({type:String,reflect:!0,attribute:"class"})],xt.prototype,"className",void 0),vt([ee({type:String})],xt.prototype,"error",void 0),vt([ee({type:String,reflect:!0,attribute:"id"})],xt.prototype,"id",void 0),vt([ee({type:String})],xt.prototype,"label",void 0),vt([ee({type:String})],xt.prototype,"placeholder",void 0),vt([ee({type:String})],xt.prototype,"value",void 0),vt([ee({type:Boolean})],xt.prototype,"disabled",void 0),vt([ee({type:Boolean})],xt.prototype,"requiredIcon",void 0),vt([ee({type:Boolean,attribute:"hidden",reflect:!0,converter:Pe})],xt.prototype,"visible",void 0),vt([oe(".kuc-textarea__group__textarea")],xt.prototype,"_textarea",void 0),window.customElements.get("kuc-textarea")||window.customElements.define("kuc-textarea",xt);var yt=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class kt extends _e{constructor(e){super(),this.title="",this.content="",this.footer="",this._triggeredElement=null,this._content="",this._footer="",this._GUID=be();const t=Ge(e);Object.assign(this,t)}update(e){e.has("content")&&(this._content=Re(this.content)),e.has("footer")&&(this._footer=Re(this.footer)),super.update(e)}open(){const e=document.getElementsByTagName("body")[0];e.appendChild(this),e.classList.add("kuc--has-dialog"),this.performUpdate(),this.setAttribute("opened",""),this._triggeredElement=document.activeElement,this._dialogEl&&this._dialogEl.focus()}close(){document.getElementsByTagName("body")[0].classList.remove("kuc--has-dialog"),this.removeAttribute("opened"),this._triggeredElement instanceof HTMLElement&&this._triggeredElement.focus(),ge(this,"close")}render(){return D`
      ${this._getStyleTagTemplate()}
      <span
        class="kuc-dialog__first-dummy"
        tabIndex="0"
        @focus="${this._handleFocusFirstDummy}"
      ></span>
      <div
        class="kuc-dialog__dialog"
        role="dialog"
        tabindex="-1"
        aria-labelledby="${this._GUID}-title"
        aria-modal="true"
        @keydown="${this._handleKeyDownDialog}"
      >
        <div class="kuc-dialog__dialog__header">
          <h2
            class="kuc-dialog__dialog__header__title"
            id="${this._GUID}-title"
          >
            ${this.title}
          </h2>
          <button
            class="kuc-dialog__dialog__header__close-button"
            type="button"
            aria-label="close"
            @click="${this._handleClickCloseButton}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
        <div class="kuc-dialog__dialog__content">${this._content}</div>
        <div class="kuc-dialog__dialog__footer">${this._footer}</div>
      </div>
      <span
        class="kuc-dialog__last-dummy"
        tabIndex="0"
        @focus="${this._handleFocusLastDummy}"
      ></span>
      <div class="kuc-dialog__mask"></div>
    `}_handleFocusFirstDummy(){const e=this._focusableElements[this._focusableElements.length-2];e&&e.focus()}_handleFocusLastDummy(){this._dialogEl.focus()}_handleKeyDownDialog(e){"Escape"===e.key&&(e.preventDefault(),this.close())}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return V`
      <svg
        class="kuc-dialog__dialog__header__close-button-svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
          fill="#f7f9fa"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
          fill="#888888"
        />
      </svg>
    `}_getStyleTagTemplate(){return D`
      <style>
        kuc-dialog,
        kuc-dialog *,
        :lang(en) kuc-dialog,
        :lang(en) kuc-dialog * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-dialog,
        :lang(ja) kuc-dialog * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-dialog,
        :lang(zh) kuc-dialog * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }

        kuc-dialog {
          display: none;
        }

        kuc-dialog[opened] {
          display: block;
        }

        .kuc-dialog__dialog {
          min-width: 320px;
          font-size: 20px;
          background-color: #ffffff;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10000;
        }

        .kuc-dialog__dialog__header {
          min-height: 64px;
          border-bottom: 1px solid #e3e7e8;
          display: flex;
          justify-content: space-between;
        }

        .kuc-dialog__dialog__header__title {
          font-size: 24px;
          padding: 0 24px;
          align-self: center;
          font-weight: 400;
        }

        .kuc-dialog__dialog__header__close-button {
          width: 48px;
          height: 48px;
          border: none;
          background-color: #ffffff;
          margin-right: 12px;
          margin-top: 11px;
          cursor: pointer;
        }

        .kuc-dialog__dialog__header__close-button:focus-visible {
          outline: -webkit-focus-ring-color auto 1px;
        }

        /* Firefox */
        @-moz-document url-prefix() {
          .kuc-dialog__dialog__header__close-button:focus-visible {
            outline: 1px dotted;
          }
        }

        /* Safari */
        @media screen and (-webkit-min-device-pixel-ratio: 0) {
          _::-webkit-full-page-media,
          _:future,
          :root .kuc-dialog__dialog__header__close-button:focus {
            outline: 5px auto -webkit-focus-ring-color;
          }
        }

        .kuc-dialog__dialog__header__close-button-svg {
          vertical-align: middle;
        }

        .kuc-dialog__dialog__content {
          border-bottom: #e3e7e8 solid 1px;
          background-color: #f7f9fa;
          padding: 24px;
        }

        .kuc-dialog__dialog__footer {
          padding: 24px;
        }

        .kuc-dialog__mask {
          position: fixed;
          top: 0;
          right: 0;
          display: block;
          width: 100%;
          height: 100%;
          background-color: #000000;
          opacity: 0.6;
          z-index: 9999;
        }

        .kuc--has-dialog {
          overflow: hidden;
        }

        .kuc--has-dialog .kuc-dialog__dialog {
          overflow-x: hidden;
          overflow-y: auto;
          max-height: 80vh;
        }
      </style>
    `}}yt([ee({type:String})],kt.prototype,"title",void 0),yt([ee()],kt.prototype,"content",void 0),yt([ee()],kt.prototype,"footer",void 0),yt([oe(".kuc-dialog__dialog")],kt.prototype,"_dialogEl",void 0),yt([ae("a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled]),[tabindex='0']")],kt.prototype,"_focusableElements",void 0),window.customElements.get("kuc-dialog")||window.customElements.define("kuc-dialog",kt);var wt=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class $t extends _e{constructor(){super(),this.year=2021,this.postfix="",this._listBoxVisible=!1,this._handleScrollDocument=this._handleScrollDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("scroll",this._handleScrollDocument)}),1)}disconnectedCallback(){document.removeEventListener("scroll",this._handleScrollDocument),super.disconnectedCallback()}update(e){this._listBoxItems=this._getYearOptions().map((e=>({value:`${e}`,label:`${e}${this.postfix}`}))),super.update(e)}render(){return D`
      ${this._getStyleTagTemplate()}
      <button
        class="kuc-base-datetime-header-year__toggle"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible?"-1":"0"}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownYearToggle}"
        @keydown="${this._handleKeyDownYearToggle}"
      >
        <span class="kuc-base-datetime-header-year__toggle__label"
          >${this.year}${this.postfix}</span
        >
        <span class="kuc-base-datetime-header-year__toggle__icon"
          >${He()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}updated(e){const t=Object.create(null,{update:{get:()=>super.update}});return function(e,t,i,o){return new(i||(i=Promise))((function(a,s){function n(e){try{r(o.next(e))}catch(e){s(e)}}function l(e){try{r(o.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,l)}r((o=o.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){yield this.updateComplete,e.has("_listBoxVisible")&&this._listBoxVisible&&this._handleScrollDocument(),t.update.call(this,e)}))}closeListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_handleScrollDocument(){const e=Ue(this);e.inputToBottom>=e.inputToTop?Ne(this,"bottom"):Ne(this,"top")}_getListBoxTemplate(){return this._listBoxVisible?D`
          <kuc-base-datetime-listbox
            .items="${this._listBoxItems||[]}"
            .value="${this.year.toString()}"
            class="kuc-base-datetime-header-year__listbox"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleFocusOutListBox}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
            aria-hidden="${!this._listBoxVisible}"
          >
          </kuc-base-datetime-listbox>
        `:""}_handleFocusOutListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_handleListBoxEscape(){this._handleFocusOutListBox()}_getStyleTagTemplate(){return D`
      <style>
        .kuc-base-datetime-header-year__toggle {
          position: relative;
          box-sizing: border-box;
          height: 32px;
          padding: 0 24px 0 8px;
          line-height: 30px;
          overflow: hidden;
          background-color: white;
          border: 1px solid transparent;
          cursor: pointer;
        }
        .kuc-base-datetime-header-year__toggle__icon {
          position: absolute;
          flex: none;
          width: 24px;
          height: 32px;
        }
        .kuc-base-datetime-header-year__toggle__label {
          font-size: 13px;
          color: #333333;
        }
        .kuc-base-datetime-header-year__toggle:focus {
          border: 1px solid #3498db;
          outline: none;
        }
      </style>
    `}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleClickDropdownYearToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),ge(this,"kuc:year-dropdown-click",{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleKeyDownYearToggle(e){"Tab"!==e.key&&(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[" ","Up","ArrowUp","Down","ArrowDown","Enter"].indexOf(e)>-1&&this._openListBox()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.year=Number(e.detail.value);const t={value:`${this.year}`};ge(this,"kuc:year-dropdown-change",t)}_openListBox(){this._listBoxVisible=!0}_getYearOptions(){const e=[];Number.isInteger(this.year)||(this.year=2021);let t=this.year<100?0:this.year-100;const i=this.year>=9899?9999:this.year+100;for(;t<=i;t++)e.push(t);return e}}wt([ee({type:Number})],$t.prototype,"year",void 0),wt([ee({type:String})],$t.prototype,"postfix",void 0),wt([te()],$t.prototype,"_listBoxVisible",void 0),wt([oe(".kuc-base-datetime-header-year__toggle")],$t.prototype,"_toggleEl",void 0),window.customElements.get("kuc-base-datetime-header-year")||window.customElements.define("kuc-base-datetime-header-year",$t);var It=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class Et extends _e{constructor(){super(),this.language="en",this.month=1,this._listBoxVisible=!1,this._locale=Me("en"),this._monthLabel="",this._maxHeight=1e3,this._handleScrollDocument=this._handleScrollDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("scroll",this._handleScrollDocument)}),1)}disconnectedCallback(){document.removeEventListener("scroll",this._handleScrollDocument),super.disconnectedCallback()}update(e){e.has("language")&&(this._locale=Me(this.language),this._listBoxItems=this._getListBoxItems()),e.has("month")&&(this._monthLabel=this._getMonthLabel()),super.update(e)}render(){return D`
      ${this._getStyleTagTemplate()}
      <button
        class="kuc-base-datetime-header-month__toggle"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible?"-1":"0"}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownMonthToggle}"
        @keydown="${this._handleKeyDownMonthToggle}"
      >
        <span class="kuc-base-datetime-header-month__toggle__label"
          >${this._monthLabel}</span
        >
        <span class="kuc-base-datetime-header-month__toggle__icon"
          >${He()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}updated(e){const t=Object.create(null,{update:{get:()=>super.update}});return function(e,t,i,o){return new(i||(i=Promise))((function(a,s){function n(e){try{r(o.next(e))}catch(e){s(e)}}function l(e){try{r(o.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,l)}r((o=o.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){yield this.updateComplete,e.has("_listBoxVisible")&&this._listBoxVisible&&this._handleScrollDocument(),t.update.call(this,e)}))}_handleScrollDocument(){const e=Ue(this);e.inputToBottom>=e.inputToTop?Ne(this,"bottom"):Ne(this,"top")}closeListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_getListBoxTemplate(){return this._listBoxVisible?D`
          <kuc-base-datetime-listbox
            .items="${this._listBoxItems||[]}"
            .value="${this.month.toString()}"
            .maxHeight="${this._maxHeight}"
            class="kuc-base-datetime-header-month__listbox"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleFocusOutListBox}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
            aria-hidden="${!this._listBoxVisible}"
          >
          </kuc-base-datetime-listbox>
        `:""}_handleFocusOutListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_handleListBoxEscape(){this._handleFocusOutListBox()}_getStyleTagTemplate(){return D`
      <style>
        .kuc-base-datetime-header-month__toggle {
          position: relative;
          box-sizing: border-box;
          height: 32px;
          padding: 0 24px 0 8px;
          line-height: 30px;
          overflow: hidden;
          background-color: white;
          border: 1px solid transparent;
          cursor: pointer;
        }
        .kuc-base-datetime-header-month__toggle__icon {
          position: absolute;
          flex: none;
          width: 24px;
          height: 32px;
        }
        .kuc-base-datetime-header-month__toggle__label {
          font-size: 13px;
          color: #333333;
        }
        .kuc-base-datetime-header-month__toggle:focus {
          border: 1px solid #3498db;
          outline: none;
        }
      </style>
    `}_handleClickDropdownMonthToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),ge(this,"kuc:month-dropdown-click",{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleKeyDownMonthToggle(e){this._handleTabKey(e.key)||(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[" ","Up","ArrowUp","Down","ArrowDown","Enter"].indexOf(e)>-1&&this._openListBox()}_handleTabKey(e){return"Tab"===e}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.month=Number(e.detail.value);const t={value:`${this.month}`};ge(this,"kuc:month-dropdown-change",t)}_openListBox(){this._listBoxVisible=!0}_getListBoxItems(){return this._locale.MONTH_SELECT.map(((e,t)=>({value:`${t+1}`,label:`${e}`})))}_getMonthLabel(){const e=this._locale.MONTH_SELECT.filter(((e,t)=>this.month===t+1));return e.length>0?e[0]:"JANUARY"}}It([ee({type:String})],Et.prototype,"language",void 0),It([ee({type:Number})],Et.prototype,"month",void 0),It([te()],Et.prototype,"_listBoxVisible",void 0),It([oe(".kuc-base-datetime-header-month__toggle")],Et.prototype,"_toggleEl",void 0),window.customElements.get("kuc-base-datetime-header-month")||window.customElements.define("kuc-base-datetime-header-month",Et);var St=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class Tt extends _e{constructor(){super(...arguments),this.language="en",this.month=1,this.year=2021,this._locale=Me("en")}update(e){e.has("language")&&(this._locale=Me(this.language)),super.update(e)}render(){return D`
      ${this._getStyleTagTemplate()}
      <div class="kuc-base-datetime-calendar-header__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-datetime-calendar-header__group__button kuc-base-datetime-calendar-header__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
          @keydown="${this._handleKeyDownCalendarPrevMonthBtn}"
        >
          ${V`
    <svg
      class="kuc-base-datetime-calendar-header__group__button-icon"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.06077 7L8.53044 1.53033L7.46978 0.469666L0.939453 7L7.46978 13.5303L8.53044 12.4697L3.06077 7Z"
        fill="#888888"
      />
    </svg>`}
        </button>
        <div class="kuc-base-datetime-calendar-header__group__center">
          ${this._getYearMonthTemplate()}
        </div>
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-datetime-calendar-header__group__button kuc-base-datetime-calendar-header__group__button--next-month"
          @click="${this._handleClickCalendarNextMonthBtn}"
        >
          ${V`
    <svg
      class="kuc-base-datetime-calendar-header__group__button-icon"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.93923 7L0.469557 1.53033L1.53022 0.469666L8.06055 7L1.53022 13.5303L0.469557 12.4697L5.93923 7Z"
        fill="#888888"
      />
    </svg>`}
        </button>
      </div>
    `}_getStyleTagTemplate(){return D`
      <style>
        kuc-base-datetime-calendar-header,
        kuc-base-datetime-calendar-header *,
        :lang(en) kuc-base-datetime-calendar-header,
        :lang(en) kuc-base-datetime-calendar-header * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-base-datetime-calendar-header,
        :lang(ja) kuc-base-datetime-calendar-header * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
          font-weight: 700;
        }
        :lang(zh) kuc-base-datetime-calendar-header,
        :lang(zh) kuc-base-datetime-calendar-header * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        .kuc-base-datetime-calendar-header__group {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          border-bottom: 1px solid #e3e7e8;
          padding: 0;
          white-space: nowrap;
          width: 266px;
          height: 44px;
        }
        .kuc-base-datetime-calendar-header__group__button {
          background: transparent;
          border: none;
          cursor: pointer;
          outline: none;
          width: 38px;
          height: 32px;
          margin: 0;
          text-align: center;
        }
        .kuc-base-datetime-calendar-header__group__button:focus {
          border: 1px solid #3498db;
          outline: none;
        }
        .kuc-base-datetime-calendar-header__group__button-icon {
          vertical-align: middle;
        }
        .kuc-base-datetime-calendar-header__group__center {
          width: 190px;
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .kuc-base-datetime-calendar-header__month {
          margin: 0 4px 0 4px;
        }
      </style>
    `}_getYearTemplate(){return D`
      <kuc-base-datetime-header-year
        class="kuc-base-datetime-calendar-header__year"
        .postfix="${this._locale.YEAR_SELECT_POSTFIX}"
        .year="${this.year}"
        @kuc:year-dropdown-change="${this._handleYearDropdownChange}"
        @kuc:year-dropdown-click="${this._handleYearDropdownClick}"
      >
      </kuc-base-datetime-header-year>
    `}_getMonthTemplate(){return D`
      <kuc-base-datetime-header-month
        class="kuc-base-datetime-calendar-header__month"
        .month="${this.month}"
        .language="${this.language}"
        @kuc:month-dropdown-change="${this._handleMonthDropdownChange}"
        @kuc:month-dropdown-click="${this._handleMonthDropdownClick}"
      >
      </kuc-base-datetime-header-month>
    `}_getYearMonthTemplate(){return"zh"===this.language||"ja"===this.language?D`
          ${this._getYearTemplate()}${this._getMonthTemplate()}
        `:D`
          ${this._getMonthTemplate()}${this._getYearTemplate()}
        `}_handleMonthDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.month=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.year=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownClick(){this._listBoxMonthEl&&this._baseDateTimeHeaderMonthEl.closeListBox()}_handleMonthDropdownClick(){this._listBoxYearEl&&this._baseDateTimeHeaderYearEl.closeListBox()}_handleClickCalendarPrevMonthBtn(e){e.stopPropagation(),1===this.month?(this.month=12,this.year--):this.month-=1,this._dispatchCalendarHeaderChangeEvent()}_handleKeyDownCalendarPrevMonthBtn(e){e.shiftKey&&"Tab"===e.key&&(e.preventDefault(),ge(this,"kuc:calendar-header-previous-shifttab"))}_handleClickCalendarNextMonthBtn(e){e.stopPropagation(),12===this.month?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){const e=this.year,t=this.month;ge(this,"kuc:calendar-header-change",{value:`${e}-${t}`})}}St([ee({type:String})],Tt.prototype,"language",void 0),St([ee({type:Number,hasChanged(e){return(t=e)>0&&t<13;var t}})],Tt.prototype,"month",void 0),St([ee({type:Number,hasChanged(e){return(t=e)>=0&&t<1e4;var t}})],Tt.prototype,"year",void 0),St([oe(".kuc-base-datetime-calendar-header__month")],Tt.prototype,"_baseDateTimeHeaderMonthEl",void 0),St([oe(".kuc-base-datetime-calendar-header__year")],Tt.prototype,"_baseDateTimeHeaderYearEl",void 0),St([oe(".kuc-base-datetime-header-month__listbox")],Tt.prototype,"_listBoxMonthEl",void 0),St([oe(".kuc-base-datetime-header-year__listbox")],Tt.prototype,"_listBoxYearEl",void 0),window.customElements.get("kuc-base-datetime-calendar-header")||window.customElements.define("kuc-base-datetime-calendar-header",Tt);var At=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class Ct extends _e{constructor(){super(),this.month=1,this.year=2021,this.language="en",this.value="",this._month=1,this._year=2021,this._locale=Me("en"),this._handleClickDocument=this._handleClickDocument.bind(this),this._handleKeyDownDocument=this._handleKeyDownDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument),document.addEventListener("keydown",this._handleKeyDownDocument)}),1)}disconnectedCallback(){document.removeEventListener("click",this._handleClickDocument),document.removeEventListener("keydown",this._handleKeyDownDocument),super.disconnectedCallback()}update(e){if(e.forEach(((e,t)=>{"language"===t&&(this._locale=Me(this.language))})),e.has("month")&&(this._month=this.month),e.has("year")&&(this._year=this.year),e.has("value")){const{month:e,year:t}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(t,10)}super.update(e)}render(){return D`
      ${this._getStyleTagTemplate()}
      <table class="kuc-base-datetime-calendar-body__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}updated(e){e.has("value")&&this._focusDateButtonEl(),super.update(e)}_handleClickDocument(){ge(this,"kuc:calendar-body-blur",{})}_handleKeyDownDocument(e){"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),ge(this,"kuc:calendar-body-blur",{}))}_handleClickDateBtn(e){e.preventDefault(),e.stopPropagation();const t=e.target;t.setAttribute("aria-current","true");const i=t.getAttribute("data-date")||"";this._dispatchClickEvent(i)}_handleKeyDownDateBtn(e){let t=!1;switch(e.key){case"Up":case"ArrowUp":t=!0,this._moveToDate(-7);break;case"Down":case"ArrowDown":t=!0,this._moveToDate(7);break;case"Left":case"ArrowLeft":t=!0,this._moveToDate(-1);break;case"Right":case"ArrowRight":t=!0,this._moveToDate(1);break;case" ":case"Enter":{t=!0;const e=this._getSelectedValue();this._dispatchClickEvent(e);break}}t&&(e.stopPropagation(),e.preventDefault())}_dispatchClickEvent(e){const t={oldValue:this.value,value:e};ge(this,"kuc:calendar-body-click-date",t),this.value=e}_isToday(e){const t=new Date;return parseInt(e[0],10)===t.getFullYear()&&parseInt(e[1],10)===t.getMonth()+1&&parseInt(e[2],10)===t.getDate()}_moveToDate(e){let t=this.value;const i=this._getSelectedValue(),{day:o}=this._separateDateValue(i);t=`${this._year}-${Le(this._month)}-${o}`;const a=new Date(t||this._getValueItemFocused());if(isNaN(a.getTime()))return;a.setDate(a.getDate()+e);const s=this._getDateString(a),n=t;this.value=s,ge(this,"kuc:calendar-body-change-date",{oldValue:n,value:s})}_separateDateValue(e=this.value){const t=e.split("-");return{day:t[2],month:t[1],year:t[0]}}_getSelectedValue(){return this._highlightItem?this._highlightItem.children[0].dataset.date||"":this._selectedItem&&this._selectedItem.getAttribute("data-date")||""}_getValueItemFocused(){return this._focusedItem&&this._focusedItem.getAttribute("data-date")||""}_getDateClass(e,t){return t?this._isToday(e)?" kuc-base-datetime-calendar-body__table__date__button--today":"":this._isToday(e)?" kuc-base-datetime-calendar-body__table__date__button--today":" kuc-base-datetime-calendar-body__table__date__button--other-month"}_getDateString(e=new Date){return`${e.getFullYear()}-${Le(e.getMonth()+1)}-${Le(e.getDate())}`}_isSameDayOfMoment(e){const t=parseInt(e[1],10),i=parseInt(e[2],10),o=parseInt(e[0],10);let a=(new Date).getDate();if(!this.value.split("-")[2])return!1;if(this.value&&(a=new Date(this.value).getDate()),a===i&&t===this._month)return!0;const s=new Date(o,this._month,0).getDate();return a>s&&s===i&&t===this._month}_getHeaderItemsTemplate(){return D`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map((e=>D`
              <th
                class="kuc-base-datetime-calendar-body__table__header"
                role="columnheader"
                abbr="${e.abbr}"
              >
                ${e.text}
              </th>
            `))}
        </tr>
      </thead>
    `}_getDateItemsTemplate(){const e=((e,t)=>{const i=((e,t)=>{const i=new Date(e,t);i.setDate(1);const o=new Date(i);o.setDate(o.getDate()-o.getDay());const a=new Date(e,t);a.setMonth(a.getMonth()+1,0);const s=new Date(a);s.setDate(s.getDate()+(6-s.getDay()));const n=(s.getTime()-o.getTime())/864e5;return s.setDate(s.getDate()+(42-n)),{start:o,end:s}})(this._year,this._month-1);let o=new Date(i.start),a=[];const s=[];for(;o<=i.end;)a.push(Ce(o)),7===a.length&&(s.push(a),a=[]),o.setDate(o.getDate()+1),o=new Date(o);return s})();return D`
      <tbody>
        ${e.map((e=>D`
            <tr>
              ${e.map((e=>{const t=e.text.split("-"),i=this._isSameDayOfMoment(t),o=parseInt(t[1],10)===this._month;return D`
                  <td
                    role="gridcell"
                    class="kuc-base-datetime-calendar-body__table__date${(this.value===e.attr||i)&&o?"--selected":""}"
                  >
                    <button
                      aria-current="${this.value===e.attr}"
                      tabindex="${(this.value===e.attr||i)&&o?"0":"-1"}"
                      class="kuc-base-datetime-calendar-body__table__date__button${this._getDateClass(t,o)}"
                      data-date="${e.attr}"
                      @click="${this._handleClickDateBtn}"
                      @keydown="${this._handleKeyDownDateBtn}"
                    >
                      ${t[2]||""}
                    </button>
                  </td>
                `}))}
            </tr>
          `))}
      </tbody>
    `}_focusDateButtonEl(){const e=this._focusedItem;e&&e.focus({preventScroll:!0})}_getStyleTagTemplate(){return D`
      <style>
        kuc-base-datetime-calendar-body,
        kuc-base-datetime-calendar-body *,
        :lang(en) kuc-base-datetime-calendar-body,
        :lang(en) kuc-base-datetime-calendar-body * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-base-datetime-calendar-body,
        :lang(ja) kuc-base-datetime-calendar-body * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-base-datetime-calendar-body,
        :lang(zh) kuc-base-datetime-calendar-body * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        .kuc-base-datetime-calendar-body__table,
        .kuc-base-datetime-calendar-body__table tr {
          border-collapse: separate;
          border-spacing: 0;
        }
        .kuc-base-datetime-calendar-body__table__date,
        .kuc-base-datetime-calendar-body__table__date--selected {
          border-spacing: 1px;
          padding: 0px;
          border: 1px solid #ffffff;
        }
        .kuc-base-datetime-calendar-body__table__date
          .kuc-base-datetime-calendar-body__table__date__button,
        .kuc-base-datetime-calendar-body__table__date--selected
          .kuc-base-datetime-calendar-body__table__date__button,
        .kuc-base-datetime-calendar-body__table__header {
          text-align: center;
          text-transform: uppercase;
          font-size: 10px;
          font-weight: 400;
          color: #333333;
        }
        :lang(ja) th.kuc-base-datetime-calendar-body__table__header {
          font-weight: 700;
        }
        .kuc-base-datetime-calendar-body__table__date--selected
          .kuc-base-datetime-calendar-body__table__date__button,
        .kuc-base-datetime-calendar-body__table__date
          .kuc-base-datetime-calendar-body__table__date__button,
        .kuc-base-datetime-calendar-body__table__header {
          box-sizing: border-box;
          padding: 8px 0;
          width: 36px;
          height: 31px;
          border: 1px solid #ffffff;
        }
        .kuc-base-datetime-calendar-body__table__header:nth-child(1),
        .kuc-base-datetime-calendar-body__table__header:nth-child(7) {
          color: #d4d7d7;
        }
        .kuc-base-datetime-calendar-body__table__date--selected
          .kuc-base-datetime-calendar-body__table__date__button,
        .kuc-base-datetime-calendar-body__table__date
          .kuc-base-datetime-calendar-body__table__date__button {
          background: none;
          cursor: pointer;
        }
        .kuc-base-datetime-calendar-body__table__date
          .kuc-base-datetime-calendar-body__table__date__button:hover {
          color: #000000;
        }
        .kuc-base-datetime-calendar-body__table__date--selected {
          border: 1px solid #3498db;
          box-sizing: border-box;
        }
        .kuc-base-datetime-calendar-body__table__date--selected
          .kuc-base-datetime-calendar-body__table__date__button {
          outline: none;
        }
        .kuc-base-datetime-calendar-body__table__date
          .kuc-base-datetime-calendar-body__table__date__button:focus-visible {
          outline: none;
        }
        .kuc-base-datetime-calendar-body__table__date--selected
          .kuc-base-datetime-calendar-body__table__date__button--today,
        .kuc-base-datetime-calendar-body__table__date
          .kuc-base-datetime-calendar-body__table__date__button--today {
          color: #ffffff;
          background: #888888;
          border: none;
        }
        .kuc-base-datetime-calendar-body__table__date__button--today:hover {
          color: #333333;
        }
        .kuc-base-datetime-calendar-body__table__date
          .kuc-base-datetime-calendar-body__table__date__button--other-month,
        .kuc-base-datetime-calendar-body__table__date
          .kuc-base-datetime-calendar-body__table__date__button--other-month:hover {
          color: #d4d7d7;
        }
      </style>
    `}}At([ee({type:Number})],Ct.prototype,"month",void 0),At([ee({type:Number})],Ct.prototype,"year",void 0),At([ee({type:String})],Ct.prototype,"language",void 0),At([ee({type:String,reflect:!0})],Ct.prototype,"value",void 0),At([te()],Ct.prototype,"_month",void 0),At([te()],Ct.prototype,"_year",void 0),At([oe('.kuc-base-datetime-calendar-body__table__date__button[aria-current="true"]')],Ct.prototype,"_selectedItem",void 0),At([oe(".kuc-base-datetime-calendar-body__table__date--selected")],Ct.prototype,"_highlightItem",void 0),At([oe('.kuc-base-datetime-calendar-body__table__date__button[tabindex="0"]')],Ct.prototype,"_focusedItem",void 0),window.customElements.get("kuc-base-datetime-calendar-body")||window.customElements.define("kuc-base-datetime-calendar-body",Ct);var Dt=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class Vt extends _e{constructor(){super(...arguments),this.language="en",this._locale=Me("en")}update(e){e.has("language")&&(this._locale=Me(this.language)),super.update(e)}_handleClickCalendarFooterButtonNone(e){e.stopPropagation(),ge(this,"kuc:calendar-footer-click-none")}_handleClickCalendarFooterButtonToday(e){e.stopPropagation(),ge(this,"kuc:calendar-footer-click-today")}_handleKeyDownCalendarFooterButtonNone(e){"Tab"===e.key&&(e.shiftKey||(e.preventDefault(),ge(this,"kuc:calendar-footer-tab-none")))}render(){return D`
      ${this._getStyleTagTemplate()}
      <div class="kuc-base-datetime-calendar-footer__group">
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer__group__button kuc-base-datetime-calendar-footer__group__button--today"
          @click="${this._handleClickCalendarFooterButtonToday}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.today}
        </button>
        <span class="kuc-base-datetime-calendar-footer__group__center"></span>
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer__group__button kuc-base-datetime-calendar-footer__group__button--none"
          @click="${this._handleClickCalendarFooterButtonNone}"
          @keydown="${this._handleKeyDownCalendarFooterButtonNone}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.none}
        </button>
      </div>
    `}_getStyleTagTemplate(){return D`
      <style>
        kuc-base-datetime-calendar-footer,
        kuc-base-datetime-calendar-footer *,
        :lang(en) kuc-base-datetime-calendar-footer,
        :lang(en) kuc-base-datetime-calendar-footer * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-base-datetime-calendar-footer,
        :lang(ja) kuc-base-datetime-calendar-footer * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-base-datetime-calendar-footer,
        :lang(zh) kuc-base-datetime-calendar-footer * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        .kuc-base-datetime-calendar-footer__group {
          display: flex;
          align-items: flex-end;
          box-sizing: border-box;
          padding: 0;
          height: 27px;
          white-space: nowrap;
          width: 272px;
        }
        .kuc-base-datetime-calendar-footer__group__button {
          background: transparent;
          border: 1px solid transparent;
          color: #3498db;
          cursor: pointer;
          font-size: 13px;
          outline: none;
        }
        .kuc-base-datetime-calendar-footer__group__button:hover {
          color: #217dbb;
        }
        .kuc-base-datetime-calendar-footer__group__button:focus {
          border: 1px solid #3498db;
          outline: none;
        }
        .kuc-base-datetime-calendar-footer__group__center {
          width: 100%;
        }
      </style>
    `}}Dt([ee({type:String})],Vt.prototype,"language",void 0),Dt([te()],Vt.prototype,"_locale",void 0),window.customElements.get("kuc-base-datetime-calendar-footer")||window.customElements.define("kuc-base-datetime-calendar-footer",Vt);var Bt=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class Lt extends _e{constructor(){super(...arguments),this.language="en",this.value="",this._month=1,this._year=2021}update(e){e.has("value")&&this._updateValue(),super.update(e)}render(){return D`
      ${this._getStyleTagTemplate()}
      <div
        class="kuc-base-datetime-calendar__group"
        role="dialog"
        aria-modal="true"
        aria-label="Calender"
        @click="${this._handleClickCalendarGroup}"
        @keydown="${this._handleKeyDownCalendarGroup}"
      >
        <kuc-base-datetime-calendar-header
          .year="${this._year}"
          .month="${this._month}"
          .language="${this.language}"
          @kuc:calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-datetime-calendar-header>
        <kuc-base-datetime-calendar-body
          .year="${this._year}"
          .month="${this._month}"
          .value="${this.value}"
          .language="${this.language}"
          @kuc:calendar-body-change-date="${this._handleCalendarBodyChangeDate}"
        ></kuc-base-datetime-calendar-body>
        <kuc-base-datetime-calendar-footer
          .language="${this.language}"
        ></kuc-base-datetime-calendar-footer>
      </div>
    `}updated(e){const t=Object.create(null,{updated:{get:()=>super.updated}});return function(e,t,i,o){return new(i||(i=Promise))((function(a,s){function n(e){try{r(o.next(e))}catch(e){s(e)}}function l(e){try{r(o.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,l)}r((o=o.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){yield this.updateComplete,this._calculateBodyCalendarPosition(),t.updated.call(this,e)}))}_handleKeyDownCalendarGroup(e){"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),ge(this,"kuc:calendar-escape",{}))}_handleClickCalendarGroup(e){e.stopPropagation(),this._listBoxMonthEl&&this._monthEl.closeListBox(),this._listBoxYearEl&&this._yearEl.closeListBox()}_calculateBodyCalendarPosition(){const{inputToBottom:e,inputToTop:t,inputToRight:i,inputToLeft:o}=Ue(this);e>=this._baseCalendarGroupEl.getBoundingClientRect().height||t<0||e>t?this._calculateCalendarPosition(i,o,"bottom"):this._calculateCalendarPosition(i,o,"top")}_calculateCalendarPosition(e,t,i){if(!this.parentElement)return;if(e<336&&e<t){const e=this.parentElement.getBoundingClientRect().width,t="bottom"===i?40:"auto",o="bottom"===i?"auto":40,a=e>100?e-100:0;return void this._setCalendarPosition({top:t,bottom:o,right:a})}const o="bottom"===i?40:"auto",a="bottom"===i?"auto":40;this._setCalendarPosition({bottom:a,top:o,left:0})}_setCalendarPosition({top:e="auto",left:t="auto",right:i="auto",bottom:o="auto"}){const a=this._baseCalendarGroupEl.parentElement;this.parentElement&&a&&(this.parentElement.style.position="relative",a.style.bottom="auto"===o?o:o+"px",a.style.top="auto"===e?e:e+"px",a.style.left="auto"===t?t:t+"px",a.style.right="auto"===i?i:i+"px")}_getStyleTagTemplate(){return D`
      <style>
        .kuc-base-datetime-calendar__group {
          display: inline-block;
          box-sizing: border-box;
          width: 336px;
          padding: 32px 32px 24px;
          background: #ffffff;
          box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);
          text-align: center;
          font-size: 13px;
        }
      </style>
    `}_handleCalendarHeaderChange(e){const{year:t,month:i}=this._separateValue(e.detail.value);this._year=t,this._month=i}_handleCalendarBodyChangeDate(e){const{year:t,month:i}=this._separateValue(e.detail.value);this._year=t,this._month=i}_updateValue(){""===this.value&&(this.value=Be().slice(0,7)+"-01");const{year:e,month:t}=this._separateValue(this.value);this._year=e,this._month=t}_separateValue(e){const t=e.split("-");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}}Bt([ee({type:String})],Lt.prototype,"language",void 0),Bt([ee({type:String,reflect:!0})],Lt.prototype,"value",void 0),Bt([oe(".kuc-base-datetime-calendar__group")],Lt.prototype,"_baseCalendarGroupEl",void 0),Bt([oe(".kuc-base-datetime-calendar-header__month")],Lt.prototype,"_monthEl",void 0),Bt([oe(".kuc-base-datetime-calendar-header__year")],Lt.prototype,"_yearEl",void 0),Bt([oe(".kuc-base-datetime-header-month__listbox")],Lt.prototype,"_listBoxMonthEl",void 0),Bt([oe(".kuc-base-datetime-header-year__listbox")],Lt.prototype,"_listBoxYearEl",void 0),Bt([te()],Lt.prototype,"_month",void 0),Bt([te()],Lt.prototype,"_year",void 0),window.customElements.get("kuc-base-datetime-calendar")||window.customElements.define("kuc-base-datetime-calendar",Lt);var Mt=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class Ht extends _e{constructor(){super(...arguments),this.inputAriaLabel="",this.inputId="",this.language="en",this.value="",this.disabled=!1,this.inputAriaInvalid=!1,this.required=!1,this._dateTimeCalendarVisible=!1,this._locale=Me("en"),this._calendarValue="",this._inputValue="",this._valueForReset=""}update(e){e.has("inputId")&&(this._GUID=this.inputId),e.has("language")&&(this._locale=Me(this.language),this._updateValueProp()),e.has("value")&&this._updateValueProp(),super.update(e)}render(){return D`
      ${this._getStyleTagTemplate()}
      <input
        class="kuc-base-date__input"
        id="${this._GUID}-label"
        type="text"
        text-align="center"
        .value="${this._inputValue}"
        aria-describedby="${this._GUID}-error"
        aria-invalid="${this.inputAriaInvalid}"
        aria-required="${this.required}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        @click="${this._handleClickInput}"
        @change="${this._handleChangeInput}"
        @keydown="${this._handleKeyDownInput}"
        @input="${this._handleInputValue}"
      />
      <button
        aria-haspopup="dialog"
        aria-expanded="${this._dateTimeCalendarVisible}"
        class="kuc-base-date__assistive-text"
        @keydown="${this._handleKeyDownButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show date picker
      </button>
      ${this._dateTimeCalendarVisible?D`
            <kuc-base-datetime-calendar
              class="kuc-base-date__calendar"
              .language="${this.language}"
              .value="${this._calendarValue}"
              ?hidden="${!this._dateTimeCalendarVisible}"
              @kuc:calendar-header-previous-shifttab="${this._handleShiftTabCalendarPrevMonth}"
              @kuc:calendar-body-change-date="${this._handleClickCalendarChangeDate}"
              @kuc:calendar-body-click-date="${this._handleClickCalendarClickDate}"
              @kuc:calendar-footer-click-none="${this._handleClickCalendarFooterButtonNone}"
              @kuc:calendar-footer-tab-none="${this._handleTabCalendarFooterButtonNone}"
              @kuc:calendar-footer-click-today="${this._handleClickCalendarFooterButtonToday}"
              @kuc:calendar-escape="${this._handleCalendarEscape}"
              @kuc:calendar-body-blur="${this._handleCalendarBlurBody}"
            >
            </kuc-base-datetime-calendar>
          `:""}
    `}updated(e){e.has("inputAriaLabel")&&this.inputAriaLabel&&this._dateInput.setAttribute("aria-label",this.inputAriaLabel),super.updated(e)}_getStyleTagTemplate(){return D`
      <style>
        input.kuc-base-date__input {
          width: 100px;
          height: 40px;
          padding: 0px;
          text-align: center;
          border: 1px solid #e3e7e8;
          color: #333333;
          box-sizing: border-box;
          font-size: 14px;
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
        }

        input.kuc-base-date__input:focus {
          outline: none;
          border: 1px solid #3498db;
        }
        input.kuc-base-date__input--focus {
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
          border: 1px solid #3498db;
          background-color: #ffffff;
          color: #333333;
        }
        .kuc-datetime-picker__group__inputs--date
          input.kuc-base-date__input--focus {
          border-color: #3498db;
        }
        input.kuc-base-date__input:disabled {
          color: #888888;
          background-color: #d4d7d7;
          box-shadow: none;
          cursor: not-allowed;
        }
        .kuc-base-date__calendar {
          position: absolute;
          z-index: 2000;
          background-color: #ffffff;
          text-align: center;
          box-sizing: border-box;
        }
        .kuc-base-date__assistive-text {
          clip: rect(1px, 1px, 1px, 1px);
          overflow: hidden;
          position: absolute !important;
          padding: 0px !important;
          border: 0px !important;
          height: 1px !important;
          width: 1px !important;
        }
      </style>
    `}_handleInputValue(e){const t=e.target.value;this._inputValue=t||""}_handleClickInput(){if(!this._dateTimeCalendarVisible)return this._valueForReset=this.value,this._calendarValue=this._getNewCalendarValue(this._inputValue||""),void this._openCalendar();this._closeCalendar()}_updateValueProp(){if(this.value){const e=this._setCalendarValueWhenInvalidValue();return this._inputValue=((e,t)=>{if(t&&!Ve(t)){const i=t.split("-");if(3!==i.length)return t;const o=i[0],a=i[1],s=i[2];return"en"===e?`${a}/${s}/${o}`:`${o}-${a}-${s}`}return t})(this.language,this.value),void(this._calendarValue=e||this.value)}const e=Be();this._inputValue="",this._calendarValue=this._calendarValue?this._calendarValue.slice(0,7)+"-01":e.slice(0,7)}_setCalendarValueWhenInvalidValue(){if(this.value&&!Fe(this.value)){const e=Be();return this._calendarValue||e.slice(0,7)}return""}_getNewCalendarValue(e){if(((e,t)=>{if(t&&!Ve(t)){const i="en"===e,o=i?"/":"-";if(new Date(t).getDate()!==parseInt(t.split(o)[i?1:2],10))return!1;const a=/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{4})$/;if("en"===e)return null!==t.match(a);const s=/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g;return null!==t.match(s)}return!1})(this.language,e))return De(this.language,e);if(!this._calendarValue)return"";let t=this._calendarValue.slice(0,7);return""===e&&(t=this._calendarValue.slice(0,7)+"-01"),t}_handleChangeInput(e){e.stopPropagation();const t=(null==e?void 0:e.target).value;if(this._calendarValue=this._getNewCalendarValue(t),this._calendarValue.length>7)return void this._dispathDateChangeCustomEvent(De(this.language,t));const i={value:void 0,oldValue:this.value,error:this._locale.INVALID_FORMAT};this._inputValue=t,ge(this,"kuc:base-date-change",i)}_handleKeyDownInput(e){"Escape"===e.key&&this._closeCalendar()}_closeCalendar(){this._dateTimeCalendarVisible=!1}_openCalendar(){this._dateTimeCalendarVisible=!0}_handleShiftTabCalendarPrevMonth(){this._footerNoneBtn.focus()}_handleClickCalendarChangeDate(e){e.detail.oldValue=this.value,this.value=e.detail.value,ge(this,"kuc:base-date-change",e.detail)}_handleClickCalendarClickDate(e){this._closeCalendar(),e.detail.oldValue=this.value,this._dateInput.focus(),e.detail.oldValue!==e.detail.value&&(this.value=e.detail.value,ge(this,"kuc:base-date-change",e.detail))}_handleClickCalendarFooterButtonNone(){this._closeCalendar(),this._dateInput.focus(),this._inputValue="";const e=Be();let t=this._setCalendarValueWhenInvalidValue();t||(t=this._calendarValue?this._calendarValue.slice(0,7)+"-01":e.slice(0,7)+"-01"),this._calendarValue=t,this._dispathDateChangeCustomEvent(void 0)}_handleTabCalendarFooterButtonNone(){this._previousMonth.focus()}_handleClickCalendarFooterButtonToday(){this._closeCalendar();const e=Be();this._dateInput.focus(),this._dispathDateChangeCustomEvent(e)}_handleCalendarEscape(){const e=this._valueForReset;if(this._closeCalendar(),this._dateInput.focus(),e===this.value)return;const t={oldValue:this.value,value:e};this.value=e,ge(this,"kuc:base-date-change",t)}_handleCalendarBlurBody(e){e.preventDefault(),this._dateTimeCalendarVisible=!1}_dispathDateChangeCustomEvent(e){const t={value:e,oldValue:this.value};this.value=void 0===e?"":e,ge(this,"kuc:base-date-change",t)}_openCalendarByKeyCode(){this._valueForReset=this.value,this._openCalendar(),this._toggleEl.blur()}_handleBlurButton(){this._dateInput.classList.remove("kuc-base-date__input--focus")}_handleFocusButton(){this._dateInput.classList.add("kuc-base-date__input--focus")}_handleTabKey(e){return"Tab"===e.key}_handleKeyDownButton(e){this._handleTabKey(e)||this._handleSupportedKey(e)}_handleSupportedKey(e){switch(e.preventDefault(),e.key){case"ArrowUp":case"ArrowDown":case"Enter":case" ":this._openCalendarByKeyCode()}}}Mt([ee({type:String})],Ht.prototype,"inputAriaLabel",void 0),Mt([ee({type:String})],Ht.prototype,"inputId",void 0),Mt([ee({type:String,reflect:!0})],Ht.prototype,"language",void 0),Mt([ee({type:String,reflect:!0})],Ht.prototype,"value",void 0),Mt([ee({type:Boolean})],Ht.prototype,"disabled",void 0),Mt([ee({type:Boolean})],Ht.prototype,"inputAriaInvalid",void 0),Mt([ee({type:Boolean})],Ht.prototype,"required",void 0),Mt([oe(".kuc-base-date__input")],Ht.prototype,"_dateInput",void 0),Mt([oe(".kuc-base-date__assistive-text")],Ht.prototype,"_toggleEl",void 0),Mt([oe(".kuc-base-datetime-calendar-header__group__button--previous-month")],Ht.prototype,"_previousMonth",void 0),Mt([oe(".kuc-base-datetime-calendar-footer__group__button--none")],Ht.prototype,"_footerNoneBtn",void 0),Mt([te()],Ht.prototype,"_dateTimeCalendarVisible",void 0),window.customElements.get("kuc-base-date")||window.customElements.define("kuc-base-date",Ht);var Ot=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class Nt extends _e{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.language="auto",this.value="",this.visible=!0,this._errorFormat="",this._errorText="",this._inputValue="",this._invalidValue="",this._valueConverted="",this._GUID=be();const t=Ge(e);Object.assign(this,t)}shouldUpdate(e){return!(void 0!==this.value&&""!==this.value&&("string"!=typeof this.value||""!==(t=this.value)&&void 0!==t&&!/(^(\d{1,4})-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$)|(^(\d{1,4})$)|(^(\d{1,4})-(0?[1-9]|1[0-2])$)/g.test(t)?(Qe(this,Ee),1):(this._valueConverted=je(this.value),this._valueConverted&&!Fe(this._valueConverted)&&(Qe(this,Ee),1))));var t}update(e){e.has("value")&&(void 0===this.value?this._inputValue=this._invalidValue:(this.value=""===this.value?this.value:this._valueConverted,this._inputValue=this.value,this._errorFormat="")),super.update(e)}render(){return D`
      ${this._getStyleTagTemplate()}
      <div class="kuc-date-picker__group">
        <label
          class="kuc-date-picker__group__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <span class="kuc-date-picker__group__label__text">${this.label}</span
          ><!--
--><span
            class="kuc-date-picker__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </label>
        <kuc-base-date
          .inputId="${this._GUID}"
          .inputAriaInvalid="${""!==this.error}"
          .disabled="${this.disabled}"
          .value="${this._inputValue}"
          .required="${this.requiredIcon}"
          .language="${this._getLanguage()}"
          @kuc:base-date-change="${this._handleDateChange}"
        >
        </kuc-base-date>
        <div
          class="kuc-date-picker__group__error"
          id="${this._GUID}-error"
          role="alert"
          ?hidden="${!this._errorText}"
        >
          ${this._errorText}
        </div>
      </div>
    `}updated(){this._updateErrorText(),this._invalidValue=""}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getStyleTagTemplate(){return D`
      <style>
        kuc-date-picker,
        kuc-date-picker *,
        :lang(en) kuc-date-picker,
        :lang(en) kuc-date-picker * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-date-picker,
        :lang(ja) kuc-date-picker * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-date-picker,
        :lang(zh) kuc-date-picker * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-date-picker {
          font-size: 14px;
          color: #333333;
          display: inline-table;
          vertical-align: top;
          max-width: 100px;
          width: 100px;
          line-height: 1.5;
        }
        kuc-date-picker[hidden] {
          display: none;
        }
        .kuc-date-picker__group {
          display: flex;
          flex-direction: column;
          border: none;
          padding: 0px;
          height: auto;
          margin: 0px;
        }
        .kuc-date-picker__group__label {
          display: inline-block;
          padding: 4px 0px 8px 0px;
          white-space: nowrap;
        }
        .kuc-date-picker__group__label[hidden] {
          display: none;
        }
        .kuc-date-picker__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-date-picker__group__label__required-icon[hidden] {
          display: none;
        }
        .kuc-date-picker__group input.kuc-base-date__input {
          width: 100px;
          height: 40px;
          padding: 0px;
          text-align: center;
          border: 1px solid #e3e7e8;
          box-sizing: border-box;
          font-size: 14px;
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
        }

        .kuc-date-picker__group input.kuc-base-date__input:focus {
          outline: none;
          border: 1px solid #3498db;
        }
        .kuc-date-picker__group input.kuc-base-date__input--focus {
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
          border: 1px solid #3498db;
          background-color: #ffffff;
          color: #333333;
        }
        .kuc-date-picker__group input.kuc-base-date__input:disabled {
          color: #888888;
          background-color: #d4d7d7;
          box-shadow: none;
          cursor: not-allowed;
        }
        .kuc-date-picker__group__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0px;
          word-break: break-all;
          white-space: normal;
        }
      </style>
    `}_getLanguage(){const e=["en","ja","zh"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}_handleDateChange(e){e.stopPropagation(),e.preventDefault();const t={oldValue:this.value,value:""};e.detail.error?(this.value=void 0,this._invalidValue=this._dateInput.value,this._errorFormat=e.detail.error,this.error="",t.value=void 0):(this._errorFormat="",this.value=void 0===e.detail.value?"":e.detail.value,t.value=this.value),this._disptchChangeEvent(t)}_disptchChangeEvent(e){ge(this,"change",e)}}Ot([ee({type:String,reflect:!0,attribute:"class"})],Nt.prototype,"className",void 0),Ot([ee({type:String})],Nt.prototype,"error",void 0),Ot([ee({type:String,reflect:!0,attribute:"id"})],Nt.prototype,"id",void 0),Ot([ee({type:String})],Nt.prototype,"label",void 0),Ot([ee({type:Boolean})],Nt.prototype,"disabled",void 0),Ot([ee({type:Boolean})],Nt.prototype,"requiredIcon",void 0),Ot([ee({type:String})],Nt.prototype,"language",void 0),Ot([ee({type:String})],Nt.prototype,"value",void 0),Ot([ee({type:Boolean,attribute:"hidden",reflect:!0,converter:Pe})],Nt.prototype,"visible",void 0),Ot([te()],Nt.prototype,"_errorFormat",void 0),Ot([te()],Nt.prototype,"_errorText",void 0),Ot([oe(".kuc-base-date__input")],Nt.prototype,"_dateInput",void 0),window.customElements.get("kuc-date-picker")||window.customElements.define("kuc-date-picker",Nt);var Ut=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class Pt extends _e{constructor(){super(),this.value="",this.items=[],this.maxHeight=300,this.doFocus=!0,this._actionKeyboard=!1,this._firstHighlight=!0,this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument)}),1)}disconnectedCallback(){document.removeEventListener("click",this._handleClickDocument),super.disconnectedCallback()}getHighlightItemEl(){return this._highlightItemEl}render(){return D`
      ${this._getStyleTagTemplate()}
      <ul
        style="max-height: ${this.maxHeight}px;"
        class="kuc-base-datetime-listbox__listbox"
        role="listbox"
        @mousedown="${this._handleMouseDownListBox}"
        @click="${this._handleClickListBox}"
      >
        ${this.items.map((e=>this._getListBoxItemTemplate(e)))}
      </ul>
    `}updated(e){e.has("value")&&this._highlightSelectedItem(),this._setListBoxPosition(),this._scrollToView(),super.updated(e)}_handleClickDocument(){ge(this,"kuc:listbox-blur",{})}_handleClickListBox(e){e.stopPropagation()}_handleKeyDownListBox(e){switch(e.preventDefault(),e.stopPropagation(),e.key){case"Up":case"ArrowUp":this._actionKeyboard=!0,this._highlightPrevItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case"Down":case"ArrowDown":this._actionKeyboard=!0,this._highlightNextItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case"Home":this._actionKeyboard=!0,this._highlightFirstItem(),this._focusHighlightItemEl();break;case"End":this._actionKeyboard=!0,this._highlightLastItem(),this._focusHighlightItemEl();break;case"Tab":ge(this,"kuc:listbox-click",{});break;case"Escape":ge(this,"kuc:listbox-escape",{});break;case" ":case"Enter":{const e=this._highlightItemEl.getAttribute("value");ge(this,"kuc:listbox-click",{value:e||""});break}}}_handleMouseDownListBox(e){if(e.preventDefault(),e.stopPropagation(),e.target===e.currentTarget)return;const t=e.target.getAttribute("value")||"";ge(this,"kuc:listbox-click",{value:t})}_handleMouseOverItem(e){if(this._actionKeyboard)return void(this._actionKeyboard=!1);const t=e.target;this._setHighlightItemEl(t),this.doFocus&&this._focusHighlightItemEl(!1)}_setListBoxPosition(){const e=this._listBoxEl.getBoundingClientRect().height;if(!this._listBoxEl.parentElement||!this.parentElement)return;const t=window.innerHeight-this.parentElement.getBoundingClientRect().bottom,i=this.parentElement.offsetHeight;this._listBoxEl.style.bottom="auto",this._listBoxEl.style.left="auto",t>=e||(this.parentElement.style.position="relative",this._listBoxEl.style.bottom=i+"px",this._listBoxEl.style.left="0px")}_setHighlightItemEl(e){this._removeHighlight(),e.classList.add("kuc-base-datetime-listbox__listbox--highlight"),e.setAttribute("tabindex","0")}_highlightSelectedItem(){if(!this.doFocus)return;const e=Array.from(this._itemsEl).filter((e=>"true"===e.getAttribute("aria-selected")))[0];e&&(this._itemSelectedEl=e,this._setHighlightItemEl(e),this._focusHighlightItemEl())}_highlightFirstItem(){this._itemSelectedEl=this._firstItemEl,this._setHighlightItemEl(this._firstItemEl)}_highlightLastItem(){this._itemSelectedEl=this._lastItemEl,this._setHighlightItemEl(this._lastItemEl)}_highlightNextItemEl(){if(null===this._highlightItemEl||null===this._iconChecked)return void this._highlightFirstItem();const e=this._getNextItemEl();if(e)return this._setHighlightItemEl(e),this._firstHighlight=!1,void(this._itemSelectedEl=e);this._highlightFirstItem()}_getNextItemEl(){const e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.nextElementSibling;return this._itemSelectedEl?this._itemSelectedEl.nextElementSibling?(t=this._itemSelectedEl.nextElementSibling,t):this._firstItemEl:t}_highlightPrevItemEl(){if(null===this._highlightItemEl||null===this._iconChecked)return void this._highlightLastItem();const e=this._getPreviousItemEl();if(e)return this._setHighlightItemEl(e),this._firstHighlight=!1,void(this._itemSelectedEl=e);this._highlightLastItem()}_getPreviousItemEl(){const e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.previousElementSibling;return this._itemSelectedEl?this._itemSelectedEl.previousElementSibling?(t=this._itemSelectedEl.previousElementSibling,t):this._lastItemEl:t}_removeHighlight(){this._highlightItemEl&&(this._highlightItemEl.setAttribute("tabindex","-1"),this._highlightItemEl.classList.remove("kuc-base-datetime-listbox__listbox--highlight"))}_focusHighlightItemEl(e){const t=this._highlightItemEl;t&&(t.focus({preventScroll:!0}),!1!==e&&this._dispatchListBoxFocusChange())}_dispatchListBoxFocusChange(){const e=this._highlightItemEl.getAttribute("value")||"";ge(this,"kuc:listbox-focus-change",{value:e})}_scrollToView(){const e=this._highlightItemEl||this._getHighlightItemByValue();if(!e||!this._listBoxEl)return;const t=e.offsetHeight,i=this._listBoxEl.clientHeight/t/2;let o=e.offsetTop-i*t;o<0&&(o=0),this._listBoxEl.scrollTop=o}_getHighlightItemByValue(){const e=Array.from(this._listBoxEl.children),t=new Date(Date.parse(`2021/01/01 ${this.value}`));let i=e.find((e=>new Date(Date.parse(`2021/01/01 ${e.title}`))>=t));return i||(i=e[e.length-1]),this.doFocus&&i?(this._setHighlightItemEl(i),this._focusHighlightItemEl(),i):i}_getListBoxItemTemplate(e){const t=this.value===e.value&&this.doFocus;return D`
      <li
        class="kuc-base-datetime-listbox__listbox__item"
        role="option"
        tabindex="${t?"0":"-1"}"
        aria-selected="${t}"
        title="${e.label||""}"
        value="${void 0!==e.value?e.value:""}"
        @mouseover="${this._handleMouseOverItem}"
        @keydown="${this._handleKeyDownListBox}"
      >
        ${t?this._getCheckedIconSvgTemplate():""}
        ${void 0===e.label?e.value:e.label}
      </li>
    `}_getCheckedIconSvgTemplate(){return V`<svg
          class="kuc-base-datetime-listbox__listbox__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="#3498db"
          />
        </svg>`}_getStyleTagTemplate(){return D`
      <style>
        kuc-base-datetime-listbox,
        kuc-base-datetime-listbox *,
        :lang(en) kuc-base-datetime-listbox,
        :lang(en) kuc-base-datetime-listbox * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-base-datetime-listbox,
        :lang(ja) kuc-base-datetime-listbox * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-base-datetime-listbox,
        :lang(zh) kuc-base-datetime-listbox * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        .kuc-base-datetime-listbox__listbox {
          position: absolute;
          z-index: 2000;
          min-width: 280px;
          margin: 0;
          padding: 8px 0;
          border: 1px solid #e3e7e8;
          background-color: #ffffff;
          list-style: none;
          line-height: 1;
          overflow-y: auto;
          -webkit-tap-highlight-color: transparent;
          box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
        }
        .kuc-base-datetime-listbox__listbox__item {
          position: relative;
          display: block;
          box-sizing: border-box;
          width: 100%;
          padding: 8px 16px 8px 25px;
          color: #333333;
          cursor: pointer;
          -webkit-tap-highlight-color: initial;
          text-align: left;
          font-size: 14px;
          user-select: none;
        }
        .kuc-base-datetime-listbox__listbox__item[aria-selected="true"] {
          color: #3498db;
        }
        .kuc-base-datetime-listbox__listbox--highlight {
          background-color: #e2f2fe;
          cursor: pointer;
        }
        .kuc-base-datetime-listbox__listbox__item__icon {
          position: absolute;
          left: 8px;
          top: 10px;
          background-color: transparent;
        }
        .kuc-base-datetime-listbox__listbox__item:focus {
          outline: none;
        }
      </style>
    `}}Ut([ee({type:String})],Pt.prototype,"value",void 0),Ut([ee({type:Array})],Pt.prototype,"items",void 0),Ut([ee({type:Number})],Pt.prototype,"maxHeight",void 0),Ut([ee({type:Boolean})],Pt.prototype,"doFocus",void 0),Ut([oe(".kuc-base-datetime-listbox__listbox")],Pt.prototype,"_listBoxEl",void 0),Ut([ae(".kuc-base-datetime-listbox__listbox__item")],Pt.prototype,"_itemsEl",void 0),Ut([oe(".kuc-base-datetime-listbox__listbox__item")],Pt.prototype,"_firstItemEl",void 0),Ut([oe(".kuc-base-datetime-listbox__listbox__item:last-child")],Pt.prototype,"_lastItemEl",void 0),Ut([oe(".kuc-base-datetime-listbox__listbox--highlight")],Pt.prototype,"_highlightItemEl",void 0),Ut([oe(".kuc-base-datetime-listbox__listbox__item__icon")],Pt.prototype,"_iconChecked",void 0),Ut([te()],Pt.prototype,"_actionKeyboard",void 0),Ut([te()],Pt.prototype,"_firstHighlight",void 0),Ut([te()],Pt.prototype,"_itemSelectedEl",void 0),window.customElements.get("kuc-base-datetime-listbox")||window.customElements.define("kuc-base-datetime-listbox",Pt);var Rt=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class jt extends _e{constructor(){super(...arguments),this.value="",this.disabled=!1,this.hour12=!1,this._timeStep=30,this._listBoxVisible=!1,this._valueLabel="",this._doFocusListBox=!1,this._hours="",this._minutes="",this._suffix="",this._valueForReset=""}update(e){e.has("hour12")&&(this._listBoxItems=((e,t=30)=>{const i=[],o=60/t*ke;for(let a=0;a<=t*o-1;a+=t){const t=Se(a,e);i.push(t)}return i})(this.hour12,this._timeStep),this._updateInputValue()),e.has("value")&&this._updateInputValue(),super.update(e)}render(){return D`
      ${this._getStyleTagTemplate()}
      <div class="kuc-base-time__group" @click="${this._handleClickInputGroup}">
        <input
          type="text"
          class="kuc-base-time__group__hours"
          role="spinbutton"
          tabindex="${this._hours?"0":"-1"}"
          aria-label="Hour"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          ?disabled="${this.disabled}"
          value="${this._hours}"
        />
        ${this._getColonTemplate()}
        <input
          type="text"
          class="kuc-base-time__group__minutes"
          role="spinbutton"
          tabindex="${this._minutes?"0":"-1"}"
          aria-label="Minute"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          ?disabled="${this.disabled}"
          value="${this._minutes}"
        />
        ${this._getSuffixTemplate()}
      </div>
      <button
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        class="kuc-base-time__assistive-text"
        @keydown="${this._handleKeyDownButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show time picker
      </button>
      ${this._getListBoxTemplate()}
    `}updated(e){e.has("disabled")&&this._toggleDisabledGroup(),super.update(e)}_handleClickInputGroup(e){if(this.disabled)return;if(""===this.value)return this._toggleEl.focus(),void this._openListBox();const t=e.target;this._openListBox(),"INPUT"!==t.tagName.toUpperCase()?this._hoursEl.select():t.select()}_handleBlurListBox(e){e.preventDefault(),this._inputFocusEl||(this._listBoxVisible=!1)}_toggleDisabledGroup(){return this.disabled?this._inputGroupEl.classList.add("kuc-base-time__group--disabled"):this._inputGroupEl.classList.remove("kuc-base-time__group--disabled")}_updateInputValue(){var e;const t=((e,t)=>{const i=e.split(":"),o=parseInt(i[0],10),a=parseInt(i[1],10),s=o%ke;return isNaN(s)||isNaN(a)?{hours:"",minutes:"",suffix:""}:t?((e,t)=>{const i=e>=we?Ie:$e;let o=e%we;return o=0===o?we:o,{hours:Le(o),minutes:Le(t),suffix:i}})(o,a):{hours:Le(s),minutes:Le(a),suffix:""}})(this.value,this.hour12);this._hours=t.hours,this._minutes=t.minutes,this._suffix=t.suffix||"",this._valueLabel=this._getValueLabel(t),this._inputGroupEl&&(this._setValueToInput(t),null===(e=this._inputFocusEl)||void 0===e||e.select())}_getValueLabel(e){if(!e.hours||!e.minutes)return"";const t=`${e.hours}:${e.minutes}`;return e.suffix?t+` ${e.suffix}`:t}_setValueToInput(e){this._hoursEl.value=e.hours,this._minutesEl.value=e.minutes,this._suffixEl&&(this._suffixEl.value=e.suffix||"")}_handleKeyDownButton(e){switch(e.key){case"Tab":case"Escape":if("Escape"===e.key&&e.preventDefault(),!this._listBoxVisible)return;this._closeListBox();break;case"Enter":case" ":case"ArrowUp":case"ArrowDown":e.preventDefault(),e.stopPropagation(),this._openListBoxByKey();break;default:e.preventDefault(),e.stopPropagation(),this._handleDefaultKeyButton(e.key)}}_handleBlurButton(){this._inputGroupEl.classList.remove("kuc-base-time__group--focus")}_handleFocusButton(e){e.stopPropagation(),this._inputGroupEl.classList.add("kuc-base-time__group--focus")}_openListBoxByKey(){return!this._listBoxVisible&&(this._valueForReset=this.value,this._doFocusListBox=!0,this._listBoxVisible=!0,this._inputGroupEl.classList.remove("kuc-base-time__group--focus"),!0)}_handleListBoxEscape(){this._closeListBox(),this.value=this._valueForReset,this._actionUpdateInputValue(this.value),""!==this.value?this._hoursEl.select():this._toggleEl.focus()}_handleDefaultKeyButton(e){if(!/^[0-9]$/i.test(e)||""!==this.value)return;const t=this._computeNumberKeyValueHours(e);this._actionUpdateInputValue(t),this._hoursEl.select()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this._closeListBox(),this._inputFocusEl=this._hoursEl,this._hoursEl.select(),!e.detail.value)return;const t=e.detail.value;this._actionUpdateInputValue(t)}_handleListBoxFocusChange(e){const t=e.detail.value,i=Te(t);this._actionUpdateInputValue(i)}_handleFocusInput(e){this._inputFocusEl=e.target,this._inputFocusEl.select(),this._inputGroupEl.classList.add("kuc-base-time__group--focus")}_handleBlurInput(e){this._inputFocusEl=null;const t=e.relatedTarget;t&&t instanceof HTMLInputElement&&[this._hoursEl,this._minutesEl,this._suffixEl].indexOf(t)>-1||(this._closeListBox(),this._inputGroupEl.classList.remove("kuc-base-time__group--focus"))}_handleTabKey(e){return"Tab"===e.key}_handleKeyDownInput(e){this._closeListBox(),this._handleTabKey(e)||this._handleSupportedKey(e)}_handlePasteInput(e){e.preventDefault()}_handleSupportedKey(e){e.preventDefault();const t=e.key;let i;switch(t){case"Enter":case"ArrowRight":this._actionSelectNextRange();break;case"ArrowLeft":this._actionSelectPreviousRange();break;case"ArrowUp":i=this._computeArrowUpDownValue(1),this._actionUpdateInputValue(i);break;case"ArrowDown":i=this._computeArrowUpDownValue(-1),this._actionUpdateInputValue(i);break;case"Backspace":case"Delete":i=this._computeDeleteValue(),this._actionUpdateInputValue(i);break;default:i=this._computeDefaultKeyValue(t),this._actionUpdateInputValue(i)}}_actionUpdateInputValue(e){const t=""===this.value?this.value:this._formatKeyDownValue(),i=Te(t),o=Te(e);i!==o&&(this.value=o,this._dispatchEventTimeChange(o,i))}_computeDeleteValue(){return this._inputFocusEl===this._minutesEl?this._formatKeyDownValue({minutes:"00"}):this._inputFocusEl===this._hoursEl?this._formatKeyDownValue({hours:"00"}):this._formatKeyDownValue()}_computeArrowUpDownValue(e){return this._inputFocusEl===this._hoursEl?this._computeArrowUpDownHourValue(e):this._inputFocusEl===this._minutesEl?this._computeArrowUpDownMinuteValue(e):this._computeKeyDownSuffixValue()}_computeKeyDownSuffixValue(e){if(!e){const e=this._suffix===$e?Ie:$e;return this._formatKeyDownValue({suffix:e})}if(-1===["a","A","p","P"].indexOf(e))return this._formatKeyDownValue();const t="a"===e||"A"===e?$e:Ie;return""===this.value&&this._hoursEl.select(),this._formatKeyDownValue({suffix:t})}_computeArrowUpDownHourValue(e){let t=parseInt(this._hours,10)+e;return this.hour12?(t%=we,t=t<=0?we:t):(t%=ke,t=t<0?23:t),this._formatKeyDownValue({hours:t.toString()})}_computeArrowUpDownMinuteValue(e){let t=parseInt(this._minutes,10)+e;return t%=60,t=t<0?59:t,this._formatKeyDownValue({minutes:t.toString()})}_computeDefaultKeyValue(e){return/^[0-9]$/i.test(e)?this._computeNumberKeyValue(e):this._inputFocusEl===this._suffixEl?this._computeKeyDownSuffixValue(e):this._formatKeyDownValue()}_computeNumberKeyValue(e){return this._inputFocusEl===this._minutesEl?this._computeNumberKeyValueMinutes(e):this._inputFocusEl===this._hoursEl?this._computeNumberKeyValueHours(e):this._formatKeyDownValue()}_computeNumberKeyValueMinutes(e){const t=this._getPreviousMinutes(this._minutes),i=Le(t+e);return""===this.value?(this._hoursEl.select(),this._computeNumberKeyValueHours(e)):this._formatKeyDownValue({minutes:i})}_computeNumberKeyValueHours(e){const t=this._getPreviousHours(this._hours,e),i=Le(t+e);return""===this.value?this._formatKeyDownValue({hours:i,minutes:"00"}):this._formatKeyDownValue({hours:i})}_getPreviousMinutes(e){let t;return t=parseInt(e,10)>10?(""+e)[1]:""+e,t=parseInt(t,10)>5?"0":t,t}_getPreviousHours(e,t){let i;i=parseInt(e,10)>10?(""+e)[1]:""+e;const o=parseInt(i+t,10);return i=this.hour12&&o>we||!this.hour12&&o>=ke?"0":i,i}_actionSelectNextRange(){this._inputFocusEl!==this._hoursEl?this.hour12&&this._inputFocusEl===this._minutesEl&&this._suffixEl.select():this._minutesEl.select()}_actionSelectPreviousRange(){this._inputFocusEl!==this._suffixEl?this._inputFocusEl===this._minutesEl&&this._hoursEl.select():this._minutesEl.select()}_dispatchEventTimeChange(e,t){ge(this,"kuc:base-time-change",{value:e,oldValue:t})}_formatKeyDownValue(e={hours:this._hours,minutes:this._minutes,suffix:this._suffix}){const t=e.hours||this._hours,i=e.minutes||this._minutes,o=e.suffix||this._suffix,a=`${Le(t)}:${Le(i)}`;return o?`${a} ${o}`:a}_openListBox(){this._listBoxVisible||(this._doFocusListBox=!1,this._listBoxVisible=!0)}_closeListBox(){this._doFocusListBox=!1,this._listBoxVisible=!1}_getColonTemplate(){return this._hours?D`
          <span class="kuc-base-time__group__colon">:</span>
        `:""}_getSuffixTemplate(){return this.hour12?D`
          <input
            class="kuc-base-time__group__suffix"
            role="spinbutton"
            tabindex="${this._suffix?"0":"-1"}"
            aria-label="${this._suffix||"suffix"}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
            @keydown="${this._handleKeyDownInput}"
            @paste="${this._handlePasteInput}"
            ?disabled="${this.disabled}"
            value="${this._suffix}"
          />
        `:""}_getListBoxTemplate(){return this._listBoxVisible?D`
          <kuc-base-datetime-listbox
            maxHeight="165"
            aria-hidden="${!this._listBoxVisible}"
            class="kuc-base-time__group__listbox"
            .items="${this._listBoxItems||[]}"
            .value="${this._valueLabel}"
            .doFocus="${this._doFocusListBox}"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleBlurListBox}"
            @kuc:listbox-focus-change="${this._handleListBoxFocusChange}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
          ></kuc-base-datetime-listbox>
        `:""}_getStyleTagTemplate(){return D`
      <style>
        :lang(ja) .kuc-base-time__group input.kuc-base-time__group__hours,
        :lang(ja) .kuc-base-time__group input.kuc-base-time__group__minutes {
          width: 18px;
        }
        .kuc-base-time__group {
          display: inline-flex;
          position: relative;
          justify-content: center;
          -webkit-box-align: center;
          align-items: center;
          max-width: 85px;
          width: 85px;
          height: 40px;
          color: #333333;
          border: solid 1px #e3e7e8;
          box-sizing: border-box;
          padding: 0px 8px;
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
          background-color: #ffffff;
        }
        .kuc-base-time__group input.kuc-base-time__group__hours {
          border: 0px;
          padding: 0px;
          width: 16px;
          font-size: 14px;
          outline: none;
          background-color: transparent;
          color: #333333;
          caret-color: transparent;
          user-select: none;
        }
        .kuc-base-time__group input.kuc-base-time__group__minutes {
          border: 0px;
          padding: 0px;
          width: 16px;
          font-size: 14px;
          outline: none;
          background-color: transparent;
          color: #333333;
          caret-color: transparent;
          user-select: none;
        }
        .kuc-base-time__group input.kuc-base-time__group__hours:focus {
          border: 0px;
        }
        .kuc-base-time__group input.kuc-base-time__group__minutes:focus {
          border: 0px;
        }
        .kuc-base-time__group__colon {
          width: 4px;
          text-align: center;
        }
        .kuc-base-time__group input.kuc-base-time__group__suffix {
          border: 0px;
          width: 24px;
          text-align: right;
          font-size: 14px;
          outline: none;
          appearance: none;
          margin-left: 1px;
          padding: 0px;
          background-color: transparent;
          color: #333333;
          caret-color: transparent;
          user-select: none;
        }
        .kuc-base-time__group--focus {
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
          border: 1px solid #3498db;
          background-color: #ffffff;
          color: #333333;
        }
        .kuc-base-time__assistive-text {
          clip: rect(1px, 1px, 1px, 1px);
          overflow: hidden;
          position: absolute !important;
          padding: 0px !important;
          border: 0px !important;
          height: 1px !important;
          width: 1px !important;
        }
        .kuc-base-time__group--disabled {
          background-color: #d4d7d7;
          box-shadow: none;
          color: #888888;
          cursor: not-allowed;
        }
        .kuc-base-time__group--disabled input {
          cursor: not-allowed;
          color: #888888;
          -webkit-text-fill-color: #888888;
        }
      </style>
    `}}Rt([ee({type:String})],jt.prototype,"value",void 0),Rt([ee({type:Boolean})],jt.prototype,"disabled",void 0),Rt([ee({type:Boolean})],jt.prototype,"hour12",void 0),Rt([te()],jt.prototype,"_timeStep",void 0),Rt([te()],jt.prototype,"_listBoxVisible",void 0),Rt([te()],jt.prototype,"_valueLabel",void 0),Rt([te()],jt.prototype,"_doFocusListBox",void 0),Rt([te()],jt.prototype,"_hours",void 0),Rt([te()],jt.prototype,"_minutes",void 0),Rt([te()],jt.prototype,"_suffix",void 0),Rt([te()],jt.prototype,"_inputFocusEl",void 0),Rt([oe(".kuc-base-time__group__hours")],jt.prototype,"_hoursEl",void 0),Rt([oe(".kuc-base-time__group__minutes")],jt.prototype,"_minutesEl",void 0),Rt([oe(".kuc-base-time__group__suffix")],jt.prototype,"_suffixEl",void 0),Rt([oe(".kuc-base-time__assistive-text")],jt.prototype,"_toggleEl",void 0),Rt([oe(".kuc-base-time__group")],jt.prototype,"_inputGroupEl",void 0),window.customElements.get("kuc-base-time")||window.customElements.define("kuc-base-time",jt);var zt=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class Gt extends _e{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._dateValue="",this._timeValue="",this._previousTimeValue="",this._previousDateValue="",this._errorFormat="",this._errorText="",this._dateConverted="",this._changeDateByUI=!1,this._changeTimeByUI=!1,this._GUID=be();const t=Ge(e);Object.assign(this,t)}shouldUpdate(e){return void 0===this.value||""===this.value||("string"!=typeof this.value?(Qe(this,Ee),!1):(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=je(this._dateAndTime.date),!(t=this._dateAndTime.date,i=this._dateAndTime.time,(!/(^(\d{4})-(0[0-9]|1[0-2])-(0[1-9]|([12][0-9]|3[01]))$)|(^(\d{4})$)|(^(\d{4})-(0[0-9]|1[0-2])$)/g.test(t)||!/(^([01][0-9]|2[0-3])$)|(^([01][0-9]|2[0-3]):([0-5][0-9]))$|(^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9])$/.test(i)||!Fe(this._dateConverted))&&(Qe(this,Ee),1))));var t,i}willUpdate(e){this._changeDateByUI||this._changeTimeByUI?this._updateValueChangeByUI():this._updateValueWhenSetter()}_updateValueChangeByUI(){const e=this._validateDateTimeFormat();this.value=e?this.value:void 0,this._changeTimeByUI||(this._errorText=e?this.error:this._errorFormat)}_validateDateTimeFormat(){const e=Boolean(this._timeValue)&&!this._dateValue,t=Boolean(this._dateValue)&&!this._timeValue;return!this._errorFormat&&!e&&!t}_updateValueWhenSetter(){if(this._errorText=this.error,""===this.value||void 0===this.value)return this._previousTimeValue="",void(this._errorFormat="");this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString()}_setDateTimeValueSeparate(e,t){this._dateValue=t||this._dateInput.value,this._timeValue=this._dateValue&&Fe(t)?ze(e.time.slice(0,5)):this._previousTimeValue}update(e){e.has("value")&&(void 0===this.value&&this._setUndefinedValue(),""===this.value&&this._setEmptyValue()),super.update(e)}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat)return this._changeDateByUI?void(this._dateValue=this._dateInput.value):(this._dateValue="",void(this._timeValue=""));this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue="",this._timeValue="",this._previousTimeValue="",this._previousDateValue="",this._errorFormat=""}render(){return D`
      ${this._getStyleTagTemplate()}
      <fieldset
        class="kuc-datetime-picker__group"
        aria-describedby="${this._GUID}-error"
      >
        <legend
          class="kuc-datetime-picker__group__label"
          ?hidden="${!this.label}"
        >
          <span class="kuc-datetime-picker__group__label__text"
            >${this.label}</span
          ><!--
          --><span
            class="kuc-datetime-picker__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </legend>
        <div class="kuc-datetime-picker__group__inputs">
          <kuc-base-date
            class="kuc-datetime-picker__group__inputs--date"
            .value="${this._dateValue}"
            .language="${this._getLanguage()}"
            .disabled="${this.disabled}"
            inputAriaLabel="date"
            @kuc:base-date-change="${this._handleDateChange}"
          ></kuc-base-date
          ><kuc-base-time
            class="kuc-datetime-picker__group__inputs--time"
            .value="${this._timeValue}"
            .hour12="${this.hour12}"
            .disabled="${this.disabled}"
            @kuc:base-time-change="${this._handleTimeChange}"
          ></kuc-base-time>
        </div>
        <div
          class="kuc-datetime-picker__group__error"
          id="${this._GUID}-error"
          role="alert"
          ?hidden="${!this._errorText}"
        >
          ${this._errorText}
        </div>
      </fieldset>
    `}updated(){this._updateErrorWidth(),this._resetState()}_resetState(){this._previousTimeValue="",this._previousDateValue="",this._changeDateByUI=!1,this._changeTimeByUI=!1}_updateErrorWidth(){const e=lt(this._labelEl);this._errorEl.style.width=e>185?e+"px":"185px"}_handleDateChange(e){e.stopPropagation(),e.preventDefault(),this._changeDateByUI=!0;let t=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=""):(t=e.detail.value,this._errorFormat=""),this._updateDateTimeValue(t,"date")}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0;const t=e.detail.value;this._updateDateTimeValue(t,"time")}_updateDateTimeValue(e,t){const i=this.value;"date"===t?this._dateValue=e||"":this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;const o=this._errorFormat?void 0:this._getDateTimeString(),a=this._errorFormat?void 0:o;this.value=a,ge(this,"change",{value:a,oldValue:i,changedPart:t})}_getDateTimeString(){if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;const e=this.value.split(":");return 3===e.length?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}_getDateTimeValue(e){if(""===e||void 0===e)return{date:"",time:""};const t=e.split("T"),i=t[0],o=t[1];if(e.indexOf("T")===e.length-1||t.length>2)return{date:i,time:""};if(!o)return{date:i,time:"00:00"};const[a,s,n]=o.split(":");if(""===a||""===s||""===n)return{date:i,time:o};const l=`${a}:${s||"00"}`;return n?{date:i,time:`${l}:${n}`}:{date:i,time:l}}_getLanguage(){const e=["en","ja","zh"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}_getStyleTagTemplate(){return D`
      <style>
        kuc-datetime-picker,
        kuc-datetime-picker *,
        :lang(en) kuc-datetime-picker,
        :lang(en) kuc-datetime-picker * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-datetime-picker,
        :lang(ja) kuc-datetime-picker * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-datetime-picker,
        :lang(zh) kuc-datetime-picker * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-datetime-picker {
          font-size: 14px;
          display: inline-table;
          vertical-align: top;
          line-height: 1.5;
        }
        kuc-datetime-picker[hidden] {
          display: none;
        }
        .kuc-datetime-picker__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
          margin: 0px;
        }
        .kuc-datetime-picker__group__label {
          display: inline-block;
          padding: 4px 0px 8px 0px;
          white-space: nowrap;
        }
        .kuc-datetime-picker__group__label[hidden] {
          display: none;
        }
        .kuc-datetime-picker__group__label__text {
          color: #333333;
          font-size: 14px;
        }
        .kuc-datetime-picker__group__label__required-icon {
          margin-left: 4px;
          line-height: 1;
          vertical-align: -3px;
          color: #e74c3c;
          font-size: 20px;
        }
        .kuc-datetime-picker__group__label__required-icon[hidden] {
          display: none;
        }
        .kuc-datetime-picker__group__inputs {
          display: flex;
          max-width: 185px;
        }
        .kuc-datetime-picker__group__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0px;
          word-break: break-all;
          white-space: normal;
        }
        .kuc-datetime-picker__group__error[hidden] {
          display: none;
        }
      </style>
    `}}zt([ee({type:String,reflect:!0,attribute:"class"})],Gt.prototype,"className",void 0),zt([ee({type:String})],Gt.prototype,"error",void 0),zt([ee({type:String,reflect:!0,attribute:"id"})],Gt.prototype,"id",void 0),zt([ee({type:String})],Gt.prototype,"label",void 0),zt([ee({type:String})],Gt.prototype,"language",void 0),zt([ee({type:String,hasChanged:(e,t)=>(""===e||void 0===e)&&e===t||e!==t})],Gt.prototype,"value",void 0),zt([ee({type:Boolean})],Gt.prototype,"disabled",void 0),zt([ee({type:Boolean})],Gt.prototype,"hour12",void 0),zt([ee({type:Boolean})],Gt.prototype,"requiredIcon",void 0),zt([ee({type:Boolean,attribute:"hidden",reflect:!0,converter:Pe})],Gt.prototype,"visible",void 0),zt([oe(".kuc-base-date__input")],Gt.prototype,"_dateInput",void 0),zt([oe(".kuc-datetime-picker__group__error")],Gt.prototype,"_errorEl",void 0),zt([oe(".kuc-datetime-picker__group__label")],Gt.prototype,"_labelEl",void 0),window.customElements.get("kuc-datetime-picker")||window.customElements.define("kuc-datetime-picker",Gt);var Ft=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class Kt extends _e{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._inputValue="",this._GUID=be();const t=Ge(e);Object.assign(this,t)}shouldUpdate(e){return!(void 0!==this.value&&""!==this.value&&""!==(t=this.value)&&!/^(2[0-3]|[01]?[0-9]):([0-9]|[0-5][0-9])$/.test(t)&&(Qe(this,Ee),1));var t}willUpdate(e){void 0!==this.value&&""!==this.value&&(this.value=ze(this.value))}update(e){if(e.has("value")){const e=void 0===this.value||""===this.value;this._inputValue=e?"":this.value}super.update(e)}render(){return D`
      ${this._getStyleTagTemplate()}
      <fieldset
        class="kuc-time-picker__group"
        aria-describedby="${this._GUID}-error"
      >
        <legend class="kuc-time-picker__group__label">
          <span class="kuc-time-picker__group__label__text">${this.label}</span
          ><!--
          --><span
            class="kuc-time-picker__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </legend>
        <kuc-base-time
          class="kuc-time-picker__group__input"
          .value="${this._inputValue}"
          .hour12="${this.hour12}"
          .disabled="${this.disabled}"
          @kuc:base-time-change="${this._handleTimeChange}"
        >
        </kuc-base-time>
        <div
          class="kuc-time-picker__group__error"
          id="${this._GUID}-error"
          role="alert"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </fieldset>
    `}updated(){this._updateErrorWidth()}_updateErrorWidth(){const e=lt(this._labelEl);this._errorEl.style.width=e>85?e+"px":"85px"}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();const t={value:e.detail.value,oldValue:this.value};this.value=e.detail.value,ge(this,"change",t)}_getStyleTagTemplate(){return D`
      <style>
        kuc-time-picker,
        kuc-time-picker *,
        :lang(en) kuc-time-picker,
        :lang(en) kuc-time-picker * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-time-picker,
        :lang(ja) kuc-time-picker * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-time-picker,
        :lang(zh) kuc-time-picker * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-time-picker {
          font-size: 14px;
          color: #333333;
          display: inline-block;
          vertical-align: top;
          line-height: 1.5;
        }
        .kuc-time-picker__group__input {
          position: relative;
        }
        kuc-time-picker[hidden] {
          display: none;
        }
        .kuc-time-picker__group {
          display: flex;
          flex-direction: column;
          border: none;
          padding: 0px;
          height: auto;
          margin: 0px;
        }
        .kuc-time-picker__group__label {
          padding: 4px 0px 8px 0px;
          display: inline-block;
          white-space: nowrap;
        }
        .kuc-time-picker__group__label[hidden] {
          display: none;
        }
        .kuc-time-picker__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-time-picker__group__label__required-icon[hidden] {
          display: none;
        }
        .kuc-time-picker__group__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0px;
          word-break: break-all;
          white-space: normal;
        }
        .kuc-time-picker__group__error[hidden] {
          display: none;
        }
      </style>
    `}}Ft([ee({type:String,reflect:!0,attribute:"class"})],Kt.prototype,"className",void 0),Ft([ee({type:String})],Kt.prototype,"error",void 0),Ft([ee({type:String,reflect:!0,attribute:"id"})],Kt.prototype,"id",void 0),Ft([ee({type:String})],Kt.prototype,"label",void 0),Ft([ee({type:String})],Kt.prototype,"value",void 0),Ft([ee({type:Boolean})],Kt.prototype,"disabled",void 0),Ft([ee({type:Boolean})],Kt.prototype,"hour12",void 0),Ft([ee({type:Boolean})],Kt.prototype,"requiredIcon",void 0),Ft([ee({type:Boolean,attribute:"hidden",reflect:!0,converter:Pe})],Kt.prototype,"visible",void 0),Ft([oe(".kuc-time-picker__group__label")],Kt.prototype,"_labelEl",void 0),Ft([oe(".kuc-time-picker__group__error")],Kt.prototype,"_errorEl",void 0),window.customElements.get("kuc-time-picker")||window.customElements.define("kuc-time-picker",Kt);var qt=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class Yt extends _e{constructor(e){super(),this.className="",this.id="",this.text="",this.type="normal",this.disabled=!1,this.visible=!0;const t=Ge(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),ge(this,"click")}_getButtonColorType(){return"normal"===this.type||"submit"===this.type?this.type:"normal"}render(){return D`
      ${this._getStyleTagTemplate()}
      <button
        type="button"
        class="kuc-mobile-button__button kuc-mobile-button__button--${this._getButtonColorType()}"
        ?disabled="${this.disabled}"
        @click="${this._handleClickButton}"
      >
        ${this.text}
      </button>
    `}_getStyleTagTemplate(){return D`
      <style>
        kuc-mobile-button,
        kuc-mobile-button * {
          font-size: 14px;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }
        :lang(zh) kuc-mobile-button,
        :lang(zh) kuc-mobile-button * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }
        kuc-mobile-button {
          display: inline-block;
          vertical-align: top;
        }
        kuc-mobile-button[hidden] {
          display: none;
        }
        .kuc-mobile-button__button {
          min-width: 100px;
          height: 42px;
          padding: 12px 12px;
          user-select: none;
          font-weight: 700;
          line-height: 1;
        }
        .kuc-mobile-button__button:focus {
          outline: none;
        }
        .kuc-mobile-button__button--submit {
          border: 2px solid #206694;
          background-color: #206694;
          color: #ffffff;
          border-radius: 6px;
        }
        .kuc-mobile-button__button--submit:disabled {
          border-color: #a5a5a5;
          background: #a5a5a5;
        }
        .kuc-mobile-button__button--normal {
          border: 2px solid #206694;
          background-color: #ffffff;
          color: #206694;
          border-radius: 6px;
        }
        .kuc-mobile-button__button--normal:disabled {
          color: #a5a5a5;
          border-color: #a5a5a5;
          cursor: default;
        }
      </style>
    `}}qt([ee({type:String,reflect:!0,attribute:"class"})],Yt.prototype,"className",void 0),qt([ee({type:String,reflect:!0,attribute:"id"})],Yt.prototype,"id",void 0),qt([ee({type:String})],Yt.prototype,"text",void 0),qt([ee({type:String})],Yt.prototype,"type",void 0),qt([ee({type:Boolean})],Yt.prototype,"disabled",void 0),qt([ee({type:Boolean,attribute:"hidden",reflect:!0,converter:Pe})],Yt.prototype,"visible",void 0),window.customElements.get("kuc-mobile-button")||window.customElements.define("kuc-mobile-button",Yt);var Wt=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class Zt extends _e{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=be();const t=Ge(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,o=e.selectedIndex||[];if(!t&&i){if(!We(o))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,o)}}_getNewValueMapping(e,t){const i=parseInt(t,10),o=Object.keys(this._valueMapping),a=Object.assign({},this._valueMapping);return o.indexOf(t)>-1?(delete a[i],a):(a[i]=e,a)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.dataset.index||"0",o=t.value,a=this.value?[...this.value]:this.value,s=this._getNewValueMapping(o,i),n=this.items.map((e=>e.value)),l=Object.values(s).filter((e=>n.indexOf(e)>-1));if(l===a)return;const r=Object.keys(s).map((e=>parseInt(e,10)));this.value=l,this.selectedIndex=r,ge(this,"change",{oldValue:a,value:l})}_getCheckboxIconSvgTemplate(e){return V`
     <svg
       class="kuc-mobile-checkbox__group__select-menu__item__label__icon"
       xmlns="http://www.w3.org/2000/svg"
       x="0px"
       y="0px"
       width="44px"
       height="34px"
       viewBox="0 0 44 34"
       enable-background="new 0 0 44 34"
       xml:space="preserve">
       <image width="44" height="34" x="0" y="0" href="${this._getSVGStrokeValue(e)}"/>
    </svg>
     `}_getSVGStrokeValue(e){return e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFITUNIbrXAAADHklEQVRIx63US2sTURQH8P9kmsykQtoMSbStreZRkRBxY3BR7EJwEyuo WQiCmy4EBXHhyi8g4qYfQCjYpRgQBK0GEoUmohYUsURjKz4WrTTNNDYzmUcz42Lymkfz0nN298z9 zeXcM0OgJeLoJxLkhTn14+P5uJJoWR3oy9Kx5xcCl6s4RybuQ2muk60PhXtmWc/xh8GL+0GBnvGu 599D/S9wwetOH51yg4UEt4H+B7jgZVKTkX0oQYUKEcNwttB9wwUvkwpFHOCg1lLEMOgZX43uE9ZY OwTdqgh3g7b12NYGG4yQ4KEYkoUD9nsnfX2NW8HLpAIRG3iLGge2/G32AweiZ1hjCUuWB8vlr6+8 gWRqBetRFljPXmiC4CaZlD+iWjRBAQeWy19bSaMACWiFCW5yKB24MpQueK3ZWHRwORRRLFke23VW hAoQTTYWpZMBFwkRPz4VT3s2zSydDLkEwyTUm8Dp2CZMxKJ0MuiqoAInSPw00Inaa/+gasEK2FnL Xi3km2wdJmJROul3lWrbnLDr6IShrg8R5bXXs5t5sJCa/wpbnT3sYiE3rkHEeIRJab1OmOqtKWjs Z2zFxSYLDGjsIVdRdxoOCsYjxGrlzNPl2AlzvR4yeI1l47K+QsJxbGnMV8Ru45vXUoKKEap8KVCi H0y4tkx1FSpkVHRsTgdTeEdOgSEstvHwU9TZUWrDkt2FaDitHkaBK2ZHThEMTFsV7MCHX5ZsFZKp CXpYhcRzxczoNMFYbWdRtWBVyBa9NZwY1TptY1R0k4CQeXtj84vxyowwoGj02LSNUTqyBCrPn93k vmPbOAlmuAeaRGVx8RbWUYrvGofPCm7QB6dtTHVPdgCCxv6JW4y1NdwFbYfYht0bRlzJSTzHLh04 Yp8wj5gDUlu2DRxGWMlJXPnrK3+ACulbSHdk28JAWMlJkFYz/qAjJDdOS0PuyHaAa7S8mg0EHSEJ KkjQEB69uN2J7QgDYTUnazQVUkCBvftyDuvYac92AbfSzhB7JzOPDZQ7sV3BDXrJkV1+gt/g4kon Vg8TbZ8kMQg7BAjogtXHX2EwhA6/OKOlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTA3VDA1 OjMzOjUzKzAwOjAwOdR5sgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0wN1QwNTozMzo1Mysw MDowMEiJwQ4AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFIRBGJW6QAAACvklEQVRIx6XWQZKbRhSA4Z8GBhACenwC5wZUypXKMlRlmUVcXrtKHMEn meQEUmWfmnHZe65ATpDcIA3MMGKEhBdgGRAaWZqnjarp94H6PTWtNWg0tPEX54fARNzwT72qed8b Ny6weqFzhbO0Fg1rHlf9Ky+CdSw5X3q/O+x4WAro0S+ADSw5T4LQw6LBRFt+5rc9LV7CeokMA1xs bOYE+MvPixfCBpb0ExkGzDDR0bFG9EVwywahzwwDAWiIPf1pcSHcZ/U90NIuHrObv+UF8DTb0hoG utKjd+qgKzSA/R9mirWlN8lCw5Yn9RT9kh4shc6VtJdXUp9ENQzs18fZmkrdR2/Sr4/QC+e1dWuG m3AdVaqeYJ3QS3zp4xxhi+jHdD//215xF84TV17xRJEWI7pl/SSQ8wl2x5a1uu+xvaW4C/3kWl4T IJGhn1jSGLCz0E+k9HC6Bhuyj2nxg0r7o92cj13aDBsXn6BHt6yXSOlhY3QFHrJ59L/KOIA/9tJ0 dGYdbUsD0WOtSbZMs0ipnMcxfDtKE+jMCJBh8K8b2rgn2DzKVM6aYbkNcG496Q7SBOAAQhpJ/cG8 8eT8BFsx7iIBRmSmBmKQJtBx8HklXy2vL2BBwK//raNNumM3umBg4xFwrGTPsV3xflZ5VKbbEa2h Y2Jhoh+w9Ql2324/HaEFYrRIsGNDedd2wjEWxNctZ5o+jB0bylX2VqniGXawCX0PvWPDwyqLFcVB gx2FITtBt2weKwoqts/+sgGcd3Q9SX9j70+yI7giR6ksKu82B/SQPVWJEVxTUaBU9rZcDelz2YNX U03TfuIGd2F29z2fnTgJbaloaCAGd2Gitewf+YfsDHbyiLWlar/EMFvobCjjfJXxcAZ75Oy26+gm 3mIuqrhYZTyexR49FLZ0wyY2/qzSkpKns1jQmrOmf398ARuVc7WA4gOtAAAAJXRFWHRkYXRlOmNy ZWF0ZQAyMDIwLTA5LTA3VDA1OjMzOjE2KzAwOjAw76ZY7wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAy MC0wOS0wN1QwNTozMzoxNiswMDowMJ774FMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVh ZHlxyWU8AAAAAElFTkSuQmCC"}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),o=Object.keys(this._valueMapping);return i.filter(((i,a)=>i===e.value&&t===parseInt(o[a],10))).length>0}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return D`
      <label
        for="${this._GUID}-item-${t}"
        class="kuc-mobile-checkbox__group__select-menu__item"
        ?borderVisible="${this.borderVisible}"
      >
        <input
          type="checkbox"
          id="${this._GUID}-item-${t}"
          class="kuc-mobile-checkbox__group__select-menu__item__input"
          name="${this._GUID}-group"
          data-index="${t}"
          value="${void 0!==e.value?e.value:""}"
          aria-describedby="${this._GUID}-error}"
          aria-required="${this.requiredIcon}"
          aria-invalid="${!this.error}"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeInput}"
        />
        <div class="kuc-mobile-checkbox__group__select-menu__item__label">
          ${this._getCheckboxIconSvgTemplate(i)}${void 0===e.label?e.value:e.label}
        </div>
      </label>
    `}shouldUpdate(e){return e.has("items")&&!Ke(this.items)?(Qe(this,et),!1):e.has("value")&&!qe(this.value)?(Qe(this,tt),!1):!(e.has("selectedIndex")&&!We(this.selectedIndex)&&(Qe(this,ot),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return D`
      ${this._getStyleTagTemplate()}
      <fieldset class="kuc-mobile-checkbox__group">
        <legend
          class="kuc-mobile-checkbox__group__label"
          ?hidden="${!this.label}"
        >
          <span class="kuc-mobile-checkbox__group__label__text"
            >${this.label}</span
          ><!--
          --><span
            class="kuc-mobile-checkbox__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </legend>
        <div
          class="kuc-mobile-checkbox__group__select-menu ${this.requiredIcon?"kuc-mobile-checkbox__group__select-menu--required":""}"
          ?borderVisible="${this.borderVisible}"
          ?disabled="${this.disabled}"
        >
          ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
        </div>
        <div
          class="kuc-mobile-checkbox__group__error"
          id="${this._GUID}-error"
          role="alert"
          aria-live="assertive"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </fieldset>
    `}updated(){this._inputEls.forEach((e=>{e.checked=this.value.indexOf(e.value)>-1}))}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}_getValueMapping(e){const t=e.items||[],i=e.value||[],o=e.selectedIndex||[],a=t.map((e=>e.value||"")),s=Object.assign({},a),n={};if(0===i.length){const e=this._getValidValue(s,o);return o.forEach(((t,i)=>n[t]=e[i])),n}return this._getValidSelectedIndex(s).forEach(((e,t)=>n[e]=i[t])),n}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const o=this.selectedIndex[i];if(e[o]===this.value[i]){t.push(o);continue}const a=this.items.findIndex((e=>e.value===this.value[i]));t.push(a)}return t}_getStyleTagTemplate(){return D`
      <style>
        kuc-mobile-checkbox,
        kuc-mobile-checkbox * {
          font-size: 13px;
          color: #333333;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }

        :lang(zh) kuc-mobile-checkbox,
        :lang(zh) kuc-mobile-checkbox * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }

        kuc-mobile-checkbox {
          width: 100%;
          display: inline-block;
        }

        kuc-mobile-checkbox[hidden] {
          display: none;
        }

        .kuc-mobile-checkbox__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
          width: 100%;
          box-sizing: border-box;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }

        .kuc-mobile-checkbox__group__label {
          display: inline-block;
          font-size: 86%;
          font-weight: bold;
          line-height: 1.5;
          padding: 0px;
          margin: 0 0 4px 0;
          white-space: nowrap;
        }

        .kuc-mobile-checkbox__group__label[hidden] {
          display: none;
        }

        .kuc-mobile-checkbox__group__label__text {
          text-shadow: 0 1px 0 #ffffff;
          color: #888888;
          white-space: normal;
          font-size: inherit;
        }

        .kuc-mobile-checkbox__group__label__required-icon {
          position: relative;
          left: 3px;
          color: #d01212;
        }

        .kuc-mobile-checkbox__group__label__required-icon[hidden] {
          display: none;
        }

        .kuc-mobile-checkbox__group__select-menu {
          margin-left: 0.5em;
          margin-right: 0.5em;
        }

        .kuc-mobile-checkbox__group__select-menu[bordervisible] {
          border-color: #b3b3b3;
          border-width: 1px;
          border-style: solid;
          border-radius: 8px;
        }

        .kuc-mobile-checkbox__group__select-menu[disabled] {
          background-color: #d5d7d9;
          color: #999999;
          -webkit-text-fill-color: #999999;
          background-color: #d5d7d9;
          opacity: 1;
        }

        .kuc-mobile-checkbox__group__select-menu--required[bordervisible] {
          border-color: #cf4a38;
          border-width: 1px;
          border-style: solid;
          border-radius: 8px;
        }

        .kuc-mobile-checkbox__group__select-menu__item[bordervisible] {
          padding: 4px;
          border: 1px solid transparent;
          position: relative;
          white-space: normal;
          word-wrap: normal;
          height: 30px;
          display: block;
          border-bottom: 1px solid #b3b3b3;
          padding: 8px;
        }

        .kuc-mobile-checkbox__group__select-menu__item {
          padding: 4px;
          border: 1px solid transparent;
          position: relative;
          white-space: normal;
          word-wrap: normal;
          height: 30px;
          display: block;
          padding: 8px;
        }

        .kuc-mobile-checkbox__group__select-menu__item:last-child {
          border-bottom: 0px;
        }

        .kuc-mobile-checkbox__group__select-menu__item__input {
          position: absolute;
          opacity: 0;
        }

        .kuc-mobile-checkbox__group__select-menu__item__input[disabled]
          + .kuc-mobile-checkbox__group__select-menu__item__label {
          background-color: #d5d7d9;
          color: #999999;
          -webkit-text-fill-color: #999999;
          background-color: #d5d7d9;
          opacity: 1;
        }

        .kuc-mobile-checkbox__group__select-menu__item__label {
          position: relative;
          margin: -7px 0px 0px 34px;
          display: inline-block;
          vertical-align: middle;
          white-space: nowrap;
          padding: 11px 13px 13px 0px;
          font-size: 14.04px;
        }

        .kuc-mobile-checkbox__group__select-menu__item__label__icon {
          position: absolute;
          top: 50%;
          left: -30px;
          margin-top: -13px;
          box-sizing: border-box;
          width: 22px;
          height: 22px;
          background-size: 22px 17px;
          content: "";
        }

        .kuc-mobile-checkbox__group__error {
          line-height: 1.5;
          border: 1px solid #e5db68;
          background-color: #fdffc9;
          margin-top: 0.3em;
          margin-left: 0.5em;
          padding: 0.4em 1em;
          border-radius: 0.4em;
          color: #000000;
        }

        .kuc-mobile-checkbox__group__error[hidden] {
          display: none;
        }
      </style>
    `}}Wt([ee({type:String,reflect:!0,attribute:"class"})],Zt.prototype,"className",void 0),Wt([ee({type:String})],Zt.prototype,"error",void 0),Wt([ee({type:String,reflect:!0,attribute:"id"})],Zt.prototype,"id",void 0),Wt([ee({type:String})],Zt.prototype,"label",void 0),Wt([ee({type:Boolean})],Zt.prototype,"borderVisible",void 0),Wt([ee({type:Boolean})],Zt.prototype,"disabled",void 0),Wt([ee({type:Boolean})],Zt.prototype,"requiredIcon",void 0),Wt([ee({type:Boolean,attribute:"hidden",reflect:!0,converter:Pe})],Zt.prototype,"visible",void 0),Wt([ee({type:Array})],Zt.prototype,"items",void 0),Wt([ee({type:Array})],Zt.prototype,"selectedIndex",void 0),Wt([ee({type:Array})],Zt.prototype,"value",void 0),Wt([ae(".kuc-mobile-checkbox__group__select-menu__item__input")],Zt.prototype,"_inputEls",void 0),Wt([te()],Zt.prototype,"_valueMapping",void 0),window.customElements.get("kuc-mobile-checkbox")||window.customElements.define("kuc-mobile-checkbox",Zt);var Qt=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class Jt extends _e{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.value="",this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=be();const t=Ge(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.value;if(this.value===i&&this.selectedIndex===t.selectedIndex)return;const o={oldValue:this.value,value:i};this.value=i,this.selectedIndex=t.selectedIndex,ge(this,"change",o)}shouldUpdate(e){return e.has("items")&&!Ke(this.items)?(Qe(this,et),!1):e.has("value")&&!Ye(this.value)?(Qe(this,it),!1):!(e.has("selectedIndex")&&!Ze(this.selectedIndex)&&(Qe(this,at),1))}willUpdate(e){if(e.has("value")){if(""!==this.value)return;this.selectedIndex=-1}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return D`
      <option value="${e.value||""}" ?selected="${i}">
        ${void 0===e.label?e.value:e.label}
      </option>
    `}render(){return D`
      ${this._getStyleTagTemplate()}
      <label
        class="kuc-mobile-dropdown__label"
        for="${this._GUID}-label"
        ?hidden="${!this.label}"
      >
        <span class="kuc-mobile-dropdown__label__text">${this.label}</span
        ><!--
        --><span
          class="kuc-mobile-dropdown__label__required-icon"
          ?hidden="${!this.requiredIcon}"
          >*</span
        >
      </label>
      <div class="kuc-mobile-dropdown__input-form">
        <div
          class="kuc-mobile-dropdown__input-form__select
          ${this.requiredIcon?"kuc--required":""}"
        >
          <select
            class="kuc-mobile-dropdown__input-form__select__input"
            id="${this._GUID}-label"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            aria-invalid="${""!==this.error}"
            ?disabled="${this.disabled}"
            @change="${this._handleChangeInput}"
          >
            ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
          </select>
        </div>
      </div>
      <div
        class="kuc-mobile-dropdown__error"
        id="${this._GUID}-error"
        role="alert"
        aria-live="assertive"
        ?hidden="${!this.error}"
      >
        ${this.error}
      </div>
    `}updated(e){e.has("selectedIndex")&&(this._selectEl.selectedIndex=this.selectedIndex),super.update(e)}_getStyleTagTemplate(){return D`
      <style>
        kuc-mobile-dropdown,
        kuc-mobile-dropdown * {
          font-size: 13px;
          color: #333333;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }

        :lang(zh) kuc-mobile-dropdown,
        :lang(zh) kuc-mobile-dropdown * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }

        kuc-mobile-dropdown {
          display: inline-block;
          width: 100%;
        }

        kuc-mobile-dropdown[hidden] {
          display: none;
        }

        .kuc-mobile-dropdown__label {
          display: inline-block;
          font-size: 86%;
          font-weight: bold;
          line-height: 1.5;
          padding: 0px;
          margin: 0 0 4px 0;
          white-space: nowrap;
        }

        .kuc-mobile-dropdown__label[hidden] {
          display: none;
        }

        .kuc-mobile-dropdown__label__text {
          text-shadow: 0 1px 0 #ffffff;
          color: #888888;
          white-space: normal;
          font-size: inherit;
        }

        .kuc-mobile-dropdown__label__required-icon {
          color: #d01212;
          left: 3px;
          position: relative;
        }

        .kuc-mobile-dropdown__label__required-icon[hidden] {
          display: none;
        }

        .kuc-mobile-dropdown__input-form {
          word-wrap: break-word;
          min-height: 1em;
          padding-left: 0.5em;
          padding-right: 0.5em;
        }

        .kuc-mobile-dropdown__input-form__select {
          display: inline-block;
          border-radius: 0.4em;
          max-width: 100%;
        }

        .kuc-mobile-dropdown__input-form__select.kuc--required {
          border: 1px solid #cf4a38;
        }

        .kuc-mobile-dropdown__input-form__select__input {
          min-width: 100px;
          max-width: 100%;
        }

        .kuc-mobile-dropdown__input-form__select__input:disabled {
          color: #999999;
          -webkit-text-fill-color: #999999;
          background-color: #d5d7d9;
          opacity: 1;
        }

        .kuc-mobile-dropdown__error {
          line-height: 1.5;
          color: #000000;
          background-color: #fdffc9;
          border: 1px solid #e5db68;
          border-radius: 0.4em;
          padding: 0.4em 1em;
          margin-top: 0.3em;
          margin-left: 0.5em;
        }
      </style>
    `}}Qt([ee({type:String,reflect:!0,attribute:"class"})],Jt.prototype,"className",void 0),Qt([ee({type:String})],Jt.prototype,"error",void 0),Qt([ee({type:String,reflect:!0,attribute:"id"})],Jt.prototype,"id",void 0),Qt([ee({type:String})],Jt.prototype,"label",void 0),Qt([ee({type:String})],Jt.prototype,"value",void 0),Qt([ee({type:Number})],Jt.prototype,"selectedIndex",void 0),Qt([ee({type:Boolean})],Jt.prototype,"disabled",void 0),Qt([ee({type:Boolean})],Jt.prototype,"requiredIcon",void 0),Qt([ee({type:Boolean,attribute:"hidden",reflect:!0,converter:Pe})],Jt.prototype,"visible",void 0),Qt([ee({type:Array})],Jt.prototype,"items",void 0),Qt([oe(".kuc-mobile-dropdown__input-form__select__input")],Jt.prototype,"_selectEl",void 0),window.customElements.get("kuc-mobile-dropdown")||window.customElements.define("kuc-mobile-dropdown",Jt);var Xt=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class ei extends _e{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=be();const t=Ge(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,o=e.selectedIndex||[];if(!t&&i){if(!We(o))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,o)}}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=this.value?[...this.value]:this.value,o=Array.from(t.selectedOptions,(e=>e.value)),a=Array.from(t.selectedOptions,(e=>e.dataset.index)),s={value:o,oldValue:i};this.value=o,this.selectedIndex=a.map((e=>e?parseInt(e,10):0)),ge(this,"change",s)}shouldUpdate(e){return e.has("items")&&!Ke(this.items)?(Qe(this,et),!1):e.has("value")&&!qe(this.value)?(Qe(this,tt),!1):!(e.has("selectedIndex")&&!We(this.selectedIndex)&&(Qe(this,ot),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}_getValueMapping(e){const t=e.items||[],i=e.value||[],o=e.selectedIndex||[],a=t.map((e=>e.value||"")),s=Object.assign({},a),n={};if(0===i.length){const e=this._getValidValue(s,o);return o.forEach(((t,i)=>n[t]=e[i])),n}return this._getValidSelectedIndex(s).forEach(((e,t)=>n[e]=i[t])),n}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const o=this.selectedIndex[i];if(e[o]===this.value[i]){t.push(o);continue}const a=this.items.findIndex((e=>e.value===this.value[i]));t.push(a)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),o=Object.keys(this._valueMapping);return i.filter(((i,a)=>i===e.value&&t===parseInt(o[a],10))).length>0}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return D`
      <option
        value="${e.value||""}"
        data-index="${t}"
        ?selected="${void 0!==e.value&&i}"
      >
        ${void 0===e.label?e.value:e.label}
      </option>
    `}render(){return D`
      ${this._getStyleTagTemplate()}
      <label
        class="kuc-mobile-multi-choice__label"
        for="${this._GUID}-label"
        ?hidden="${!this.label}"
      >
        <span class="kuc-mobile-multi-choice__label__text">${this.label}</span
        ><!--
        --><span
          class="kuc-mobile-multi-choice__label__required-icon"
          ?hidden="${!this.requiredIcon}"
          >*</span
        >
      </label>
      <div class="kuc-mobile-multi-choice__input-form">
        <div
          class="kuc-mobile-multi-choice__input-form__select
          ${this.requiredIcon?"kuc--required":""}"
        >
          <select
            class="kuc-mobile-multi-choice__input-form__select__input"
            id="${this._GUID}-label"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            aria-invalid="${""!==this.error}"
            ?disabled="${this.disabled}"
            multiple
            @change="${this._handleChangeInput}"
          >
            ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
          </select>
        </div>
      </div>
      <div
        class="kuc-mobile-multi-choice__error"
        id="${this._GUID}-error"
        role="alert"
        aria-live="assertive"
        ?hidden="${!this.error}"
      >
        ${this.error}
      </div>
    `}_getStyleTagTemplate(){return D`
      <style>
        kuc-mobile-multi-choice,
        kuc-mobile-multi-choice * {
          font-size: 13px;
          color: #333333;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }

        :lang(zh) kuc-mobile-multi-choice,
        :lang(zh) kuc-mobile-multi-choice * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }

        kuc-mobile-multi-choice {
          display: inline-block;
          width: 100%;
        }

        kuc-mobile-multi-choice[hidden] {
          display: none;
        }

        .kuc-mobile-multi-choice__label {
          display: inline-block;
          font-size: 86%;
          font-weight: bold;
          line-height: 1.5;
          padding: 0px;
          margin: 0 0 4px 0;
          white-space: nowrap;
        }

        .kuc-mobile-multi-choice__label[hidden] {
          display: none;
        }

        .kuc-mobile-multi-choice__label__text {
          text-shadow: 0 1px 0 #ffffff;
          color: #888888;
          white-space: normal;
          font-size: inherit;
        }

        .kuc-mobile-multi-choice__label__required-icon {
          color: #d01212;
          left: 3px;
          position: relative;
        }

        .kuc-mobile-multi-choice__label__required-icon[hidden] {
          display: none;
        }

        .kuc-mobile-multi-choice__input-form {
          word-wrap: break-word;
          min-height: 1em;
          padding-left: 0.5em;
          padding-right: 0.5em;
        }

        .kuc-mobile-multi-choice__input-form__select {
          display: inline-block;
          border-radius: 0.4em;
          max-width: 100%;
        }

        .kuc-mobile-multi-choice__input-form__select.kuc--required {
          border: 1px solid #cf4a38;
        }

        .kuc-mobile-multi-choice__input-form__select__input {
          min-width: 100px;
          max-width: 100%;
        }

        .kuc-mobile-multi-choice__input-form__select__input:disabled {
          color: #999999;
          -webkit-text-fill-color: #999999;
          background-color: #d5d7d9;
          opacity: 1;
        }

        .kuc-mobile-multi-choice__error {
          line-height: 1.5;
          color: #000000;
          background-color: #fdffc9;
          border: 1px solid #e5db68;
          border-radius: 0.4em;
          padding: 0.4em 1em;
          margin-top: 0.3em;
          margin-left: 0.5em;
        }
      </style>
    `}}Xt([ee({type:String,reflect:!0,attribute:"class"})],ei.prototype,"className",void 0),Xt([ee({type:String})],ei.prototype,"error",void 0),Xt([ee({type:String,reflect:!0,attribute:"id"})],ei.prototype,"id",void 0),Xt([ee({type:String})],ei.prototype,"label",void 0),Xt([ee({type:Boolean})],ei.prototype,"disabled",void 0),Xt([ee({type:Boolean})],ei.prototype,"requiredIcon",void 0),Xt([ee({type:Boolean,attribute:"hidden",reflect:!0,converter:Pe})],ei.prototype,"visible",void 0),Xt([ee({type:Array})],ei.prototype,"items",void 0),Xt([ee({type:Array})],ei.prototype,"selectedIndex",void 0),Xt([ee({type:Array})],ei.prototype,"value",void 0),Xt([te()],ei.prototype,"_valueMapping",void 0),window.customElements.get("kuc-mobile-multi-choice")||window.customElements.define("kuc-mobile-multi-choice",ei);var ti=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class ii extends _e{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.value="",this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=be();const t=Ge(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}willUpdate(e){if(e.has("value")){if(""!==this.value)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.value,o=t.dataset.index||"0",a=parseInt(o,10);if(this.value===i&&this.selectedIndex===a)return;const s={oldValue:this.value,value:i};this.value=i,this.selectedIndex=a,ge(this,"change",s)}_getRadioIconSvgTemplate(e,t){return V`
    <svg
      class="kuc-mobile-radio-button__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    <defs>
      <radialGradient id="${this._GUID}-shadow">
        <stop offset="0%" style="stop-color:#5b5b5b;stop-opacity:0" />
        <stop offset="30%" style="stop-color:#5b5b5b;stop-opacity:0" />
        <stop offset="80%" style="stop-color:#5b5b5b;stop-opacity:0.1" />
        <stop offset="90%" style="stop-color:#5b5b5b;stop-opacity:0.15" />
        <stop offset="100%" style="stop-color:#5b5b5b;stop-opacity:0.2" />
      </radialGradient>
    </defs>
      <circle
        fill="url(#shadow)"
        cx="10.5"
        cy="10.5"
        r="10.15"
        stroke="#bbbbbb" stroke-width="1"/>
      ${t?V`<circle cx="10.5" cy="10.5" r="6.5" fill="${"#5b5b5b"}"/>`:""}
    </svg>
  `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return D`
      <div class="kuc-mobile-radio-button__group__select-menu__item">
        <input
          type="radio"
          aria-describedby="${this._GUID}-error"
          id="${this._GUID}-item-${t}"
          data-index="${t}"
          class="kuc-mobile-radio-button__group__select-menu__item__input"
          name="${this._GUID}-group"
          value="${void 0!==e.value?e.value:""}"
          aria-invalid="${""!==this.error}"
          aria-required="${this.requiredIcon}"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeInput}"
        />
        <label
          class="kuc-mobile-radio-button__group__select-menu__item__label"
          for="${this._GUID}-item-${t}"
          >${this._getRadioIconSvgTemplate(this.disabled,i)}
          <div
            class="kuc-mobile-radio-button__group__select-menu__item__label__value"
          >
            ${void 0===e.label?e.value:e.label}
          </div>
        </label>
      </div>
    `}shouldUpdate(e){return e.has("items")&&!Ke(this.items)?(Qe(this,et),!1):e.has("value")&&!Ye(this.value)?(Qe(this,it),!1):!(e.has("selectedIndex")&&!Ze(this.selectedIndex)&&(Qe(this,at),1))}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}render(){return D`
      ${this._getStyleTagTemplate()}
      <div class="kuc-mobile-radio-button__group">
        <div
          class="kuc-mobile-radio-button__group__label"
          ?hidden="${!this.label}"
        >
          <span class="kuc-mobile-radio-button__group__label__text"
            ><!--
            -->${this.label}</span
          ><!--
            --><span
            class="kuc-mobile-radio-button__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </div>
        <div
          class="kuc-mobile-radio-button__group__select-menu"
          ?borderVisible="${this.borderVisible}"
          ?disabled="${this.disabled}"
        >
          ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
        </div>
        <div
          class="kuc-mobile-radio-button__group__error"
          id="${this._GUID}-error"
          role="alert"
          aria-live="assertive"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </div>
    `}updated(){this._inputEls.forEach(((e,t)=>{e.checked=this.value===e.value&&t===this.selectedIndex}))}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}_getStyleTagTemplate(){return D`
      <style>
        kuc-mobile-radio-button,
        kuc-mobile-radio-button * {
          font-size: 13px;
          color: #333333;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }

        :lang(zh) kuc-mobile-radio-button,
        :lang(zh) kuc-mobile-radio-button * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }

        kuc-mobile-radio-button {
          width: 100%;
          display: inline-block;
        }

        kuc-mobile-radio-button[hidden] {
          display: none;
        }

        .kuc-mobile-radio-button__group {
          border: none;
          height: auto;
          display: inline-block;
          width: 100%;
        }

        .kuc-mobile-radio-button__group__label {
          display: inline-block;
          font-size: 86%;
          font-weight: bold;
          line-height: 1.5;
          padding: 0px;
          margin: 0 0 4px 0;
          white-space: nowrap;
        }

        .kuc-mobile-radio-button__group__label__text {
          text-shadow: 0 1px 0 #ffffff;
          color: #888888;
          white-space: normal;
          font-size: inherit;
        }

        .kuc-mobile-radio-button__group__label[hidden] {
          display: none;
        }

        .kuc-mobile-radio-button__group__label__required-icon {
          position: relative;
          left: 3px;
          color: #d01212;
        }

        .kuc-mobile-radio-button__group__label__required-icon[hidden] {
          display: none;
        }

        .kuc-mobile-radio-button__group__select-menu {
          margin-right: 0.5em;
          margin-left: 0.5em;
        }

        .kuc-mobile-radio-button__group__select-menu[bordervisible] {
          border-color: #b3b3b3;
          border-width: 1px;
          border-style: solid;
          border-radius: 0.4em;
        }

        .kuc-mobile-radio-button__group__select-menu__item {
          border: 1px solid transparent;
          position: relative;
          white-space: normal;
          word-wrap: normal;
          height: 45px;
          display: block;
        }

        .kuc-mobile-radio-button__group__select-menu[bordervisible]
          .kuc-mobile-radio-button__group__select-menu__item {
          border-bottom: 1px solid #b3b3b3;
        }

        .kuc-mobile-radio-button__group__select-menu[bordervisible]
          .kuc-mobile-radio-button__group__select-menu__item:last-child {
          border-bottom: 0px;
        }

        .kuc-mobile-radio-button__group__select-menu__item__input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }

        .kuc-mobile-radio-button__group__select-menu__item__label__icon {
          position: absolute;
          top: 50%;
          box-sizing: border-box;
          margin-top: -11px;
          width: 21px;
          height: 21px;
          box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
          content: "";
          border-radius: 9px;
          left: 8px;
        }

        .kuc-mobile-radio-button__group__select-menu__item__label__value {
          height: 45px;
          line-height: 45px;
          padding-left: 35px;
        }

        .kuc-mobile-radio-button__group__select-menu[disabled] {
          background-color: #d5d7d9;
          color: #999999;
          -webkit-text-fill-color: #999999;
          background-color: #d5d7d9;
          opacity: 1;
        }

        .kuc-mobile-radio-button__group__select-menu__item__label {
          position: absolute;
          white-space: nowrap;
          width: 100%;
          top: 50%;
          transform: translateY(-50%);
          height: 100%;
          padding: 0px;
        }

        .kuc-mobile-radio-button__group__error {
          line-height: 1.5;
          color: #000000;
          border: 1px solid #e5db68;
          background-color: #fdffc9;
          margin-top: 0.3em;
          padding: 0.4em 1em;
          border-radius: 0.4em;
          margin-left: 0.5em;
        }

        .kuc-mobile-radio-button__group__error[hidden] {
          display: none;
        }
      </style>
    `}}ti([ee({type:String,reflect:!0,attribute:"class"})],ii.prototype,"className",void 0),ti([ee({type:String})],ii.prototype,"error",void 0),ti([ee({type:String,reflect:!0,attribute:"id"})],ii.prototype,"id",void 0),ti([ee({type:String})],ii.prototype,"label",void 0),ti([ee({type:String})],ii.prototype,"value",void 0),ti([ee({type:Number})],ii.prototype,"selectedIndex",void 0),ti([ee({type:Boolean})],ii.prototype,"borderVisible",void 0),ti([ee({type:Boolean})],ii.prototype,"disabled",void 0),ti([ee({type:Boolean})],ii.prototype,"requiredIcon",void 0),ti([ee({type:Boolean,attribute:"hidden",reflect:!0,converter:Pe})],ii.prototype,"visible",void 0),ti([ee({type:Array})],ii.prototype,"items",void 0),ti([ae(".kuc-mobile-radio-button__group__select-menu__item__input")],ii.prototype,"_inputEls",void 0),window.customElements.get("kuc-mobile-radio-button")||window.customElements.define("kuc-mobile-radio-button",ii);var oi=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class ai extends _e{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.prefix="",this.suffix="",this.textAlign="left",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=be();const t=Ge(e);Object.assign(this,t)}_handleFocusInput(e){const t={value:this.value};ge(this,"focus",t)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,ge(this,"change",i)}_handleInputText(e){e.stopPropagation();const t={value:e.target.value,data:e.data};ge(this,"input",t)}render(){return D`
      ${this._getStyleTagTemplate()}
      <label
        class="kuc-mobile-text__label"
        for="${this._GUID}-label"
        ?hidden="${!this.label}"
      >
        <span class="kuc-mobile-text__label__text">${this.label}</span
        ><!--
        --><span
          class="kuc-mobile-text__label__required-icon"
          ?hidden="${!this.requiredIcon}"
          >*</span
        >
      </label>
      <div class="kuc-mobile-text__input-form">
        <span
          class="kuc-mobile-text__input-form__prefix"
          ?hidden="${!this.prefix}"
          >${this.prefix}</span
        >
        <input
          class="kuc-mobile-text__input-form__input"
          id="${this._GUID}-label"
          placeholder="${this.placeholder}"
          textAlign="${this.textAlign}"
          type="text"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          aria-invalid="${""!==this.error}"
          aria-describedby="${this._GUID}-error"
          aria-required="${this.requiredIcon}"
          @focus="${this._handleFocusInput}"
          @change="${this._handleChangeInput}"
          @input="${this._handleInputText}"
        />
        <span
          class="kuc-mobile-text__input-form__suffix"
          ?hidden="${!this.suffix}"
          >${this.suffix}</span
        >
      </div>
      <div
        class="kuc-mobile-text__error"
        id="${this._GUID}-error"
        role="alert"
        ?hidden="${!this.error}"
      >
        ${this.error}
      </div>
    `}_getStyleTagTemplate(){return D`
      <style>
        kuc-mobile-text {
          display: block;
          font-size: 13px;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }
        :lang(zh) kuc-mobile-text,
        :lang(zh) kuc-mobile-text * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }
        kuc-mobile-text[hidden] {
          display: none;
        }
        .kuc-mobile-text__label {
          display: inline-block;
          font-size: 86%;
          font-weight: bold;
          line-height: 1.5;
          padding: 0;
          margin: 0 0 4px 0;
          white-space: nowrap;
        }
        .kuc-mobile-text__label[hidden] {
          display: none;
        }
        .kuc-mobile-text__label__text {
          text-shadow: 0 1px 0 #ffffff;
          color: #888888;
          white-space: normal;
        }
        .kuc-mobile-text__label__required-icon {
          position: relative;
          left: 3px;
          color: #d01212;
        }
        .kuc-mobile-text__label__required-icon[hidden] {
          display: none;
        }
        .kuc-mobile-text__input-form {
          padding-left: 0.5em;
          padding-right: 0.5em;
          display: flex;
          align-items: center;
        }
        .kuc-mobile-text__input-form__prefix {
          margin-right: 4px;
          color: #888888;
        }
        .kuc-mobile-text__input-form__prefix[hidden] {
          display: none;
        }
        .kuc-mobile-text__input-form__input {
          width: 100%;
          min-width: 20px;
          padding: 0.4em;
          border: 1px solid #b3b3b3;
          outline: 0;
          box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;
          border-radius: 0.4em;
          box-sizing: border-box;
          text-align: left;
        }
        .kuc-mobile-text__input-form__input[aria-required="true"] {
          border: 1px solid #cf4a38;
        }
        .kuc-mobile-text__input-form__input[textAlign="right"] {
          text-align: right;
        }
        .kuc-mobile-text__input-form__input:disabled {
          color: #999999;
          background-color: #d5d7d9;
          -webkit-text-fill-color: #999999;
          opacity: 1;
          -webkit-opacity: 1;
        }
        .kuc-mobile-text__input-form__suffix {
          margin-left: 4px;
          color: #888888;
        }
        .kuc-mobile-text__input-form__suffix[hidden] {
          display: none;
        }
        .kuc-mobile-text__error {
          line-height: 1.5;
          color: #000000;
          background-color: #fdffc9;
          border: 1px solid #e5db68;
          border-radius: 0.4em;
          padding: 0.4em 1em;
          margin-top: 0.3em;
          margin-left: 0.5em;
        }
        .kuc-mobile-text__error[hidden] {
          display: none;
        }
      </style>
    `}}oi([ee({type:String,reflect:!0,attribute:"class"})],ai.prototype,"className",void 0),oi([ee({type:String})],ai.prototype,"error",void 0),oi([ee({type:String,reflect:!0,attribute:"id"})],ai.prototype,"id",void 0),oi([ee({type:String})],ai.prototype,"label",void 0),oi([ee({type:String})],ai.prototype,"placeholder",void 0),oi([ee({type:String})],ai.prototype,"prefix",void 0),oi([ee({type:String})],ai.prototype,"suffix",void 0),oi([ee({type:String})],ai.prototype,"textAlign",void 0),oi([ee({type:String})],ai.prototype,"value",void 0),oi([ee({type:Boolean})],ai.prototype,"disabled",void 0),oi([ee({type:Boolean})],ai.prototype,"requiredIcon",void 0),oi([ee({type:Boolean,attribute:"hidden",reflect:!0,converter:Pe})],ai.prototype,"visible",void 0),window.customElements.get("kuc-mobile-text")||window.customElements.define("kuc-mobile-text",ai);var si=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class ni extends _e{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=be();const t=Ge(e);Object.assign(this,t)}_handleFocusInput(e){const t={value:this.value};ge(this,"focus",t)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,ge(this,"change",i)}_handleInputTextArea(e){e.stopPropagation();const t={value:e.target.value,data:e.data};ge(this,"input",t)}render(){return D`
      ${this._getStyleTagTemplate()}
      <label
        class="kuc-mobile-textarea__label"
        for="${this._GUID}-label"
        ?hidden="${!this.label}"
      >
        <span class="kuc-mobile-textarea__label__text">${this.label}</span
        ><!--
        --><span
          class="kuc-mobile-textarea__label__required-icon"
          ?hidden="${!this.requiredIcon}"
          >*</span
        >
      </label>
      <div class="kuc-mobile-textarea__form">
        <textarea
          class="kuc-mobile-textarea__form__textarea"
          id="${this._GUID}-label"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          .value="${this.value}"
          aria-invalid="${""!==this.error}"
          aria-describedby="${this._GUID}-error"
          aria-required="${this.requiredIcon}"
          @focus="${this._handleFocusInput}"
          @change="${this._handleChangeInput}"
          @input="${this._handleInputTextArea}"
        /></textarea>
      </div>
      <div
        class="kuc-mobile-textarea__error"
        id="${this._GUID}-error"
        role="alert"
        ?hidden="${!this.error}"
      >
        ${this.error}
      </div>
    `}_getStyleTagTemplate(){return D`
      <style>
        kuc-mobile-textarea {
          display: block;
          font-size: 13px;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }
        :lang(zh) kuc-mobile-textarea,
        :lang(zh) kuc-mobile-textarea * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }
        kuc-mobile-textarea[hidden] {
          display: none;
        }
        .kuc-mobile-textarea__label {
          padding: 0;
          margin: 0 0 4px 0;
          display: inline-block;
          font-size: 86%;
          font-weight: bold;
          line-height: 1.5;
          white-space: nowrap;
        }
        .kuc-mobile-textarea__label[hidden] {
          display: none;
        }
        .kuc-mobile-textarea__label__text {
          text-shadow: 0 1px 0 #ffffff;
          color: #888888;
          white-space: normal;
        }
        .kuc-mobile-textarea__label__required-icon {
          position: relative;
          left: 3px;
          color: #d01212;
        }
        .kuc-mobile-textarea__label__required-icon[hidden] {
          display: none;
        }
        .kuc-mobile-textarea__form {
          padding-left: 0.5em;
          padding-right: 0.5em;
        }
        .kuc-mobile-textarea__form__textarea {
          width: 100%;
          height: 120px;
          padding: 0.4em;
          border: 1px solid #b3b3b3;
          outline: 0;
          box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;
          border-radius: 0.4em;
          box-sizing: border-box;
        }
        .kuc-mobile-textarea__form__textarea[aria-required="true"] {
          border: 1px solid #cf4a38;
        }
        .kuc-mobile-textarea__form__textarea:disabled {
          color: #999999;
          background-color: #d5d7d9;
          opacity: 1;
        }
        .kuc-mobile-textarea__error {
          line-height: 1.5;
          color: #000000;
          background-color: #fdffc9;
          border: 1px solid #e5db68;
          border-radius: 0.4em;
          padding: 0.4em 1em;
          margin-top: 0.3em;
          margin-left: 0.5em;
        }
        .kuc-mobile-textarea__error[hidden] {
          display: none;
        }
      </style>
    `}}si([ee({type:String,reflect:!0,attribute:"class"})],ni.prototype,"className",void 0),si([ee({type:String})],ni.prototype,"error",void 0),si([ee({type:String,reflect:!0,attribute:"id"})],ni.prototype,"id",void 0),si([ee({type:String})],ni.prototype,"label",void 0),si([ee({type:String})],ni.prototype,"placeholder",void 0),si([ee({type:String})],ni.prototype,"value",void 0),si([ee({type:Boolean})],ni.prototype,"disabled",void 0),si([ee({type:Boolean})],ni.prototype,"requiredIcon",void 0),si([ee({type:Boolean,attribute:"hidden",reflect:!0,converter:Pe})],ni.prototype,"visible",void 0),window.customElements.get("kuc-mobile-textarea")||window.customElements.define("kuc-mobile-textarea",ni);var li=function(e,t,i,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};class ri extends _e{constructor(e){super(),this.className="",this.text="",this.duration=-1,this._isOpened=!1;const t=Ge(e);Object.assign(this,t)}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return V`
    <svg
      height="12"
      width="12"
      viewBox="0 0 512.001 512.001"
      xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853 84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853-171.148-171.148z"/>
        </g>
      </svg>
    `}open(){document.body.appendChild(this),this.performUpdate(),this.classList.remove("kuc-mobile-notification-fadeout"),this.classList.add("kuc-mobile-notification-fadein"),this._isOpened=!0,this._setAutoCloseTimer()}close(){this._isOpened=!1,this.classList.remove("kuc-mobile-notification-fadein"),this.classList.add("kuc-mobile-notification-fadeout"),this._clearAutoCloseTimer(),ge(this,"close")}render(){return D`
      ${this._getStyleTagTemplate()}
      <div class="kuc-mobile-notification__notification">
        <pre
          class="kuc-mobile-notification__notification__title"
          aria-live="assertive"
          role="${this._isOpened?"alert":""}"
        ><!---->${this.text}</pre>
        <button
          class="kuc-mobile-notification__notification__close-button"
          type="button"
          aria-label="close"
          @click="${this._handleClickCloseButton}"
        >
          ${this._getCloseButtonSvgTemplate()}
        </button>
      </div>
    `}_getStyleTagTemplate(){return D`
      <style>
        kuc-mobile-notification {
          display: block;
          font-size: 13px;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
          visibility: hidden;
          animation-fill-mode: forwards;
          position: relative;
          top: -100px;
          left: 0;
        }

        :lang(zh) kuc-mobile-notification,
        :lang(zh) kuc-mobile-notification * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }

        .kuc-mobile-notification-fadein {
          animation-name: kuc-mobile-notification-fade-in;
          animation-duration: 250ms;
          animation-timing-function: ease-out;
          width: 100%;
          position: fixed;
          visibility: visible;
        }

        .kuc-mobile-notification-fadeout {
          animation-name: kuc-mobile-notification-fade-out;
          animation-duration: 250ms;
          animation-timing-function: ease-out;
          width: 100%;
          position: fixed;
        }

        .kuc-mobile-notification__notification {
          background-color: #ffffcf;
          background: linear-gradient(#ffda4a, #ffc32c);
          width: 100%;
          min-height: 48px;
          z-index: 20;
          font-size: 12px;
          font-weight: 700;
          line-height: 14px;
          text-shadow: rgba(255, 255, 255, 0.5) 0 1px 0;
          color: #333333;
          text-align: center;
          vertical-align: top;
        }

        .kuc-mobile-notification__notification__title {
          display: inline-block;
          vertical-align: middle;
          padding: 17px 44px 11px 44px;
          margin: 0 0 0 -20px;
          text-align: left;
          font-weight: inherit;
          font-family: inherit;
          word-break: break-word;
          white-space: pre-wrap;
        }

        .kuc-mobile-notification__notification__close-button {
          position: absolute;
          right: 0;
          top: 0;
          width: 44px;
          height: 48px;
          padding: 0;
          background-color: transparent;
          border: none;
          vertical-align: middle;
          pointer-events: auto;
          outline: none;
        }
        @keyframes kuc-mobile-notification-fade-in {
          0% {
            top: -100px;
            left: 0;
          }
          50% {
            top: -50px;
            left: 0;
          }
          100% {
            top: 0;
            left: 0;
          }
        }
        @keyframes kuc-mobile-notification-fade-out {
          0% {
            visibility: visible;
            top: 0;
            left: 0;
          }
          50% {
            visibility: visible;
            top: -50px;
            left: 0;
          }
          100% {
            top: -100px;
            left: 0;
          }
        }
      </style>
    `}_setAutoCloseTimer(){!Number.isFinite(this.duration)||this.duration<0||(this._clearAutoCloseTimer(),this._timeoutID=window.setTimeout((()=>{this.close()}),this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}}li([ee({type:String,reflect:!0,attribute:"class"})],ri.prototype,"className",void 0),li([ee({type:String})],ri.prototype,"text",void 0),li([ee({type:Number})],ri.prototype,"duration",void 0),li([te()],ri.prototype,"_isOpened",void 0),window.customElements.get("kuc-mobile-notification")||window.customElements.define("kuc-mobile-notification",ri);var di={d:(e,t)=>{for(var i in t)di.o(t,i)&&!di.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};di.d({},{i:()=>ui});var ui="1.3.2",ci={d:(e,t)=>{for(var i in t)ci.o(t,i)&&!ci.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};ci.d({},{t:()=>hi});var hi=void 0;const pi=kintone.app.getHeaderMenuSpaceElement();if(null===pi)throw new Error("The header menu element is unavailable on t/docs/rules/no-undefhis page");{const e=new Xe({text:"testing",type:"normal"});pi.appendChild(e)}}();
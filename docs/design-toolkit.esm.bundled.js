/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=globalThis,e$4=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$6=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$6.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$6.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$4=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$4)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$3.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$3,defineProperty:e$3,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$5,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$3(t,s),b={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$3(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$3(t),...o$5(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){const e=this.constructor,h=this[t];if(i??=e.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(e._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,i$2=t$2.trustedTypes,s$1=i$2?i$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$2="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$4="?"+h,n$1=`<${o$4}>`,r$2=document,l=()=>r$2.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$2.createTreeWalker(r$2,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$1:d>=0?(o.push(a),s.slice(0,d)+e$2+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$2)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$2?i$2.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$4)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$2.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$2).importNode(i,true);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=C.nextNode(),o++);}return C.currentNode=r$2,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$2.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(false,true,i);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=S(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===E?void 0:t;}}class I extends k{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E);}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const j=t$2.litHtmlPolyfillSupport;j?.(N,R),(t$2.litHtmlVersions??=[]).push("3.3.1");const B=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new R(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;let i$1 = class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return T}};i$1._$litElement$=true,i$1["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i$1});const o$3=s.litElementPolyfillSupport;o$3?.({LitElement:i$1});(s.litElementVersions??=[]).push("4.2.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=t=>(e,o)=>{ void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$2={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r$1=(t=o$2,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return n({...r,state:true,attribute:false})}

/**
 * Shared context color styles for Design Toolkit components
 *
 * This module provides CSS custom properties for different context colors
 * that can be reused across multiple web components.
 *
 * Usage:
 * ```typescript
 * import { contextColors } from '../styles/context-colors.js';
 *
 * static styles = css`
 *   ${contextColors}
 *   // ... other styles
 * `;
 * ```
 */
const contextColors = i$4 `
  /* Context Colors */
  .context--default {
    --context-color: #6b7280;
    --context-color-hover: #4b5563;
    --context-color-alpha: rgba(107, 114, 128, 0.05);
  }

  .context--primary {
    --context-color: #3b82f6;
    --context-color-hover: #2563eb;
    --context-color-alpha: rgba(59, 130, 246, 0.1);
  }

  .context--secondary {
    --context-color: #6b7280;
    --context-color-hover: #4b5563;
    --context-color-alpha: rgba(107, 114, 128, 0.1);
  }

  .context--success {
    --context-color: #10b981;
    --context-color-hover: #059669;
    --context-color-alpha: rgba(16, 185, 129, 0.1);
  }

  .context--danger {
    --context-color: #ef4444;
    --context-color-hover: #dc2626;
    --context-color-alpha: rgba(239, 68, 68, 0.1);
  }

  .context--warning {
    --context-color: #f59e0b;
    --context-color-hover: #d97706;
    --context-color-alpha: rgba(245, 158, 11, 0.1);
  }

  .context--info {
    --context-color: #06b6d4;
    --context-color-hover: #0891b2;
    --context-color-alpha: rgba(6, 182, 212, 0.1);
  }
`;
/**
 * Context color CSS custom properties as a plain CSS string
 * Useful for non-Lit components or when you need raw CSS
 */
const contextColorsCSS = `
  /* Context Colors */
  .context--default {
    --context-color: #6b7280;
    --context-color-hover: #4b5563;
    --context-color-alpha: rgba(107, 114, 128, 0.05);
  }

  .context--primary {
    --context-color: #3b82f6;
    --context-color-hover: #2563eb;
    --context-color-alpha: rgba(59, 130, 246, 0.1);
  }

  .context--secondary {
    --context-color: #6b7280;
    --context-color-hover: #4b5563;
    --context-color-alpha: rgba(107, 114, 128, 0.1);
  }

  .context--success {
    --context-color: #10b981;
    --context-color-hover: #059669;
    --context-color-alpha: rgba(16, 185, 129, 0.1);
  }

  .context--danger {
    --context-color: #ef4444;
    --context-color-hover: #dc2626;
    --context-color-alpha: rgba(239, 68, 68, 0.1);
  }

  .context--warning {
    --context-color: #f59e0b;
    --context-color-hover: #d97706;
    --context-color-alpha: rgba(245, 158, 11, 0.1);
  }

  .context--info {
    --context-color: #06b6d4;
    --context-color-hover: #0891b2;
    --context-color-alpha: rgba(6, 182, 212, 0.1);
  }
`;
/**
 * Available context color names
 */
const contextColorNames = [
    'default',
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
];

/**
 * Shared size styles for Design Toolkit components
 *
 * This module provides CSS classes for different component sizes
 * that can be reused across multiple web components.
 *
 * Usage:
 * ```typescript
 * import { componentSizes } from '../styles/component-sizes.js';
 *
 * static styles = css`
 *   ${componentSizes}
 *   // ... other styles
 * `;
 * ```
 */
const componentSizes = i$4 `
  /* Component Sizes */
  .size--xs {
    padding: 4px 8px;
    font-size: 12px;
    height: 24px;
  }

  .size--small {
    padding: 6px 12px;
    font-size: 14px;
    height: 32px;
  }

  .size--medium {
    padding: 8px 16px;
    font-size: 16px;
    height: 40px;
  }

  .size--large {
    padding: 12px 24px;
    font-size: 18px;
    height: 48px;
  }
`;
/**
 * Component size CSS custom properties as a plain CSS string
 * Useful for non-Lit components or when you need raw CSS
 */
const componentSizesCSS = `
  /* Component Sizes */
  .size--xs {
    padding: 4px 8px;
    font-size: 12px;
    height: 24px;
  }

  .size--small {
    padding: 6px 12px;
    font-size: 14px;
    height: 32px;
  }

  .size--medium {
    padding: 8px 16px;
    font-size: 16px;
    height: 40px;
  }

  .size--large {
    padding: 12px 24px;
    font-size: 18px;
    height: 48px;
  }
`;
/**
 * Available component size names
 */
const componentSizeNames = ['xs', 'small', 'medium', 'large'];

/**
 * Shared styles for button and link components
 * This allows both components to have consistent styling while maintaining semantic HTML
 */
const buttonLinkStyles = [
    contextColors,
    componentSizes,
    i$4 `
    :host {
      display: inline-block;
    }

    :host(.u-block) {
      display: block !important;
    }

    :host(.u-inline-block) {
      display: inline-block !important;
    }

    :host(.u-inline) {
      display: inline !important;
    }

    :host(.u-flex) {
      display: flex !important;
    }

    :host(.u-inline-flex) {
      display: inline-flex !important;
    }

    :host(.u-grid) {
      display: grid !important;
    }

    :host(.u-hidden) {
      display: none !important;
    }

    :host(.u-w-100) {
      width: 100% !important;
    }

    .button-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--button-gap, 8px);
      border: none;
      border-radius: 4px;
      font-family:
        -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.124s ease-in-out;
      text-decoration: none;
      outline: none;
      vertical-align: middle;
      line-height: 1;
      /* Force consistent sizing - override browser defaults */
      box-sizing: border-box;
      margin: 0;
      padding: 8px 16px;
      font-size: 16px;
      height: 40px;
    }

    .button-link:focus-visible {
      box-shadow: 0 0 0 2px currentColor;
    }

    .button-link:disabled,
    .button-link[aria-disabled='true'] {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Variants */
    .button-link--default {
      background-color: var(--context-color);
      color: white;
    }

    .button-link--default:hover:not(:disabled):not([aria-disabled='true']) {
      background-color: var(--context-color-hover);
    }

    .button-link--link {
      background-color: transparent;
      color: var(--context-color);
    }

    .button-link--link:hover:not(:disabled):not([aria-disabled='true']) {
      color: var(--context-color-hover);
      text-decoration: underline;
    }

    .button-link--outline {
      background-color: transparent;
      color: var(--context-color);
      border: 1px solid var(--context-color);
    }

    .button-link--outline:hover:not(:disabled):not([aria-disabled='true']) {
      background-color: var(--context-color);
      color: white;
    }

    .button-link--ghost {
      background-color: transparent;
      color: var(--context-color);
      border: none;
    }

    .button-link--ghost:hover:not(:disabled):not([aria-disabled='true']) {
      background-color: var(--context-color-alpha);
    }

    .button-link--soft {
      background-color: var(--context-color-alpha);
      color: var(--context-color);
      border: none;
    }

    .button-link--soft:hover:not(:disabled):not([aria-disabled='true']) {
      background-color: var(--context-color);
      color: white;
    }

    /* Icon styling */
    .button-link__icon {
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
      line-height: 1;
    }

    /* Size overrides - ensure consistent sizing across button and link */
    .button-link.size--xs {
      padding: 4px 8px !important;
      font-size: 12px !important;
      height: 24px !important;
      --button-gap: 4px;
    }

    .button-link.size--small {
      padding: 6px 12px !important;
      font-size: 14px !important;
      height: 32px !important;
      --button-gap: 6px;
    }

    .button-link.size--medium {
      padding: 8px 16px !important;
      font-size: 16px !important;
      height: 40px !important;
      --button-gap: 8px;
    }

    .button-link.size--large {
      padding: 12px 24px !important;
      font-size: 18px !important;
      height: 48px !important;
      --button-gap: 10px;
    }
  `,
];

/**
 * Utility styles for Design Toolkit components
 *
 * This module provides utility CSS classes for common styling needs
 * like margins, paddings, display properties, and widths.
 *
 * Usage:
 * ```typescript
 * import { utilityStyles } from '../styles/utility-styles.js';
 *
 * static styles = css`
 *   ${utilityStyles}
 *   // ... other styles
 * `;
 * ```
 */
const utilityStyles = i$4 `
  /* Display utilities */
  .u-block {
    display: block !important;
  }

  .u-inline-block {
    display: inline-block !important;
  }

  .u-inline {
    display: inline !important;
  }

  .u-flex {
    display: flex !important;
  }

  .u-inline-flex {
    display: inline-flex !important;
  }

  .u-grid {
    display: grid !important;
  }

  .u-hidden {
    display: none !important;
  }

  /* Width utilities */
  .u-w-100 {
    width: 100% !important;
  }

  .u-w-auto {
    width: auto !important;
  }

  .u-w-fit {
    width: fit-content !important;
  }

  .u-w-max {
    width: max-content !important;
  }

  .u-w-min {
    width: min-content !important;
  }

  /* Margin utilities */
  .u-m-none {
    margin: 0 !important;
  }

  .u-m-xs {
    margin: 4px !important;
  }

  .u-m-sm {
    margin: 8px !important;
  }

  .u-m-md {
    margin: 16px !important;
  }

  .u-m-lg {
    margin: 24px !important;
  }

  .u-m-xl {
    margin: 32px !important;
  }

  /* Margin top */
  .u-mt-none {
    margin-top: 0 !important;
  }

  .u-mt-xs {
    margin-top: 4px !important;
  }

  .u-mt-sm {
    margin-top: 8px !important;
  }

  .u-mt-md {
    margin-top: 16px !important;
  }

  .u-mt-lg {
    margin-top: 24px !important;
  }

  .u-mt-xl {
    margin-top: 32px !important;
  }

  /* Margin bottom */
  .u-mb-none {
    margin-bottom: 0 !important;
  }

  .u-mb-xs {
    margin-bottom: 4px !important;
  }

  .u-mb-sm {
    margin-bottom: 8px !important;
  }

  .u-mb-md {
    margin-bottom: 16px !important;
  }

  .u-mb-lg {
    margin-bottom: 24px !important;
  }

  .u-mb-xl {
    margin-bottom: 32px !important;
  }

  /* Margin left */
  .u-ml-none {
    margin-left: 0 !important;
  }

  .u-ml-xs {
    margin-left: 4px !important;
  }

  .u-ml-sm {
    margin-left: 8px !important;
  }

  .u-ml-md {
    margin-left: 16px !important;
  }

  .u-ml-lg {
    margin-left: 24px !important;
  }

  .u-ml-xl {
    margin-left: 32px !important;
  }

  /* Margin right */
  .u-mr-none {
    margin-right: 0 !important;
  }

  .u-mr-xs {
    margin-right: 4px !important;
  }

  .u-mr-sm {
    margin-right: 8px !important;
  }

  .u-mr-md {
    margin-right: 16px !important;
  }

  .u-mr-lg {
    margin-right: 24px !important;
  }

  .u-mr-xl {
    margin-right: 32px !important;
  }

  /* Margin horizontal */
  .u-mx-none {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .u-mx-xs {
    margin-left: 4px !important;
    margin-right: 4px !important;
  }

  .u-mx-sm {
    margin-left: 8px !important;
    margin-right: 8px !important;
  }

  .u-mx-md {
    margin-left: 16px !important;
    margin-right: 16px !important;
  }

  .u-mx-lg {
    margin-left: 24px !important;
    margin-right: 24px !important;
  }

  .u-mx-xl {
    margin-left: 32px !important;
    margin-right: 32px !important;
  }

  /* Margin vertical */
  .u-my-none {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .u-my-xs {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }

  .u-my-sm {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .u-my-md {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }

  .u-my-lg {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }

  .u-my-xl {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }

  /* Padding utilities */
  .u-p-none {
    padding: 0 !important;
  }

  .u-p-xs {
    padding: 4px !important;
  }

  .u-p-sm {
    padding: 8px !important;
  }

  .u-p-md {
    padding: 16px !important;
  }

  .u-p-lg {
    padding: 24px !important;
  }

  .u-p-xl {
    padding: 32px !important;
  }

  /* Padding top */
  .u-pt-none {
    padding-top: 0 !important;
  }

  .u-pt-xs {
    padding-top: 4px !important;
  }

  .u-pt-sm {
    padding-top: 8px !important;
  }

  .u-pt-md {
    padding-top: 16px !important;
  }

  .u-pt-lg {
    padding-top: 24px !important;
  }

  .u-pt-xl {
    padding-top: 32px !important;
  }

  /* Padding bottom */
  .u-pb-none {
    padding-bottom: 0 !important;
  }

  .u-pb-xs {
    padding-bottom: 4px !important;
  }

  .u-pb-sm {
    padding-bottom: 8px !important;
  }

  .u-pb-md {
    padding-bottom: 16px !important;
  }

  .u-pb-lg {
    padding-bottom: 24px !important;
  }

  .u-pb-xl {
    padding-bottom: 32px !important;
  }

  /* Padding left */
  .u-pl-none {
    padding-left: 0 !important;
  }

  .u-pl-xs {
    padding-left: 4px !important;
  }

  .u-pl-sm {
    padding-left: 8px !important;
  }

  .u-pl-md {
    padding-left: 16px !important;
  }

  .u-pl-lg {
    padding-left: 24px !important;
  }

  .u-pl-xl {
    padding-left: 32px !important;
  }

  /* Padding right */
  .u-pr-none {
    padding-right: 0 !important;
  }

  .u-pr-xs {
    padding-right: 4px !important;
  }

  .u-pr-sm {
    padding-right: 8px !important;
  }

  .u-pr-md {
    padding-right: 16px !important;
  }

  .u-pr-lg {
    padding-right: 24px !important;
  }

  .u-pr-xl {
    padding-right: 32px !important;
  }

  /* Padding horizontal */
  .u-px-none {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .u-px-xs {
    padding-left: 4px !important;
    padding-right: 4px !important;
  }

  .u-px-sm {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }

  .u-px-md {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  .u-px-lg {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }

  .u-px-xl {
    padding-left: 32px !important;
    padding-right: 32px !important;
  }

  /* Padding vertical */
  .u-py-none {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .u-py-xs {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }

  .u-py-sm {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .u-py-md {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }

  .u-py-lg {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }

  .u-py-xl {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
`;

let EchoButton = class EchoButton extends i$1 {
    constructor() {
        super(...arguments);
        this.variant = 'default';
        this.size = 'medium';
        this.context = 'primary';
        this.disabled = false;
        this.icon = null;
        this.iconPosition = 'left';
        this.iconSize = null;
        this.iconVariant = null;
        this.iconStrokeWidth = null;
        this.display = 'inline';
        this.class = '';
    }
    firstUpdated() {
        this._applyUtilityClasses();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('display')) {
            this._applyUtilityClasses();
        }
    }
    _applyUtilityClasses() {
        // Remove old utility classes
        this.classList.remove('u-block', 'u-inline-block', 'u-inline', 'u-flex', 'u-inline-flex', 'u-grid', 'u-hidden', 'u-w-100');
        // Apply utility classes to the host element
        const displayClass = this.display !== 'inline' ? `u-${this.display}` : '';
        const widthClass = this.display === 'block' ? 'u-w-100' : '';
        const hostClasses = [
            displayClass,
            widthClass,
        ]
            .filter(Boolean);
        if (hostClasses.length > 0) {
            this.classList.add(...hostClasses);
        }
        // Apply styles directly to ensure width: 100% works
        if (this.display === 'block') {
            this.style.display = 'block';
            this.style.width = '100%';
        }
    }
    render() {
        const iconElement = this.icon
            ? x `
          <echo-icon
            name=${this.icon}
            size=${this.iconSize || this._getIconSizeFromButtonSize()}
            variant=${this.iconVariant || 'default'}
            stroke-width=${this.iconStrokeWidth || 1.5}
            class="button-link__icon button-link__icon--${this.iconPosition}"
            style="--icon-color: currentColor;"
          ></echo-icon>
        `
            : null;
        const content = this.icon
            ? this.iconPosition === 'left'
                ? x `${iconElement}<slot></slot>`
                : x `<slot></slot>${iconElement}`
            : x `<slot></slot>`;
        const buttonClasses = [
            'button-link',
            `button-link--${this.variant}`,
            `context--${this.context}`,
            `size--${this.size}`,
            this.class,
        ]
            .filter(Boolean)
            .join(' ');
        return x `
      <button
        class="${buttonClasses}"
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        ${content}
      </button>
    `;
    }
    _getIconSizeFromButtonSize() {
        const sizeMap = {
            xs: 'small',
            small: 'small',
            medium: 'medium',
            large: 'large',
        };
        return sizeMap[this.size];
    }
    _handleClick(event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        this.dispatchEvent(new CustomEvent('echo-button-click', {
            detail: { originalEvent: event },
            bubbles: true,
            composed: true,
        }));
    }
    /**
     * Handle attribute changes to reset properties to default values when attributes are removed
     */
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        // If attribute is removed (newValue is null), reset property to default value
        if (newValue === null) {
            switch (name) {
                case 'variant':
                    this.variant = 'default';
                    break;
                case 'size':
                    this.size = 'medium';
                    break;
                case 'context':
                    this.context = 'primary';
                    break;
                case 'disabled':
                    this.disabled = false;
                    break;
                case 'icon':
                    this.icon = null;
                    break;
                case 'icon-position':
                    this.iconPosition = 'left';
                    break;
                case 'icon-size':
                    this.iconSize = null;
                    break;
                case 'icon-variant':
                    this.iconVariant = null;
                    break;
                case 'icon-stroke-width':
                    this.iconStrokeWidth = null;
                    break;
                case 'display':
                    this.display = 'inline';
                    break;
                case 'class':
                    this.class = '';
                    break;
            }
        }
    }
};
EchoButton.styles = [buttonLinkStyles, utilityStyles];
__decorate([
    n({ type: String })
], EchoButton.prototype, "variant", void 0);
__decorate([
    n({ type: String })
], EchoButton.prototype, "size", void 0);
__decorate([
    n({ type: String })
], EchoButton.prototype, "context", void 0);
__decorate([
    n({ type: Boolean })
], EchoButton.prototype, "disabled", void 0);
__decorate([
    n({ type: String })
], EchoButton.prototype, "icon", void 0);
__decorate([
    n({ type: String, attribute: 'icon-position' })
], EchoButton.prototype, "iconPosition", void 0);
__decorate([
    n({ type: String, attribute: 'icon-size' })
], EchoButton.prototype, "iconSize", void 0);
__decorate([
    n({ type: String, attribute: 'icon-variant' })
], EchoButton.prototype, "iconVariant", void 0);
__decorate([
    n({ type: Number, attribute: 'icon-stroke-width' })
], EchoButton.prototype, "iconStrokeWidth", void 0);
__decorate([
    n({ type: String })
], EchoButton.prototype, "display", void 0);
__decorate([
    n({ type: String })
], EchoButton.prototype, "class", void 0);
EchoButton = __decorate([
    t$1('echo-button')
], EchoButton);

let EchoLink = class EchoLink extends i$1 {
    constructor() {
        super(...arguments);
        this.variant = 'default';
        this.size = 'medium';
        this.context = 'primary';
        this.disabled = false;
        this.href = null;
        this.target = null;
        this.rel = null;
        this.icon = null;
        this.iconPosition = 'left';
        this.iconSize = null;
        this.iconVariant = null;
        this.iconStrokeWidth = null;
        this.display = 'inline';
        this.class = '';
    }
    render() {
        const iconElement = this.icon
            ? x `
          <echo-icon
            name=${this.icon}
            size=${this.iconSize || this._getIconSizeFromLinkSize()}
            variant=${this.iconVariant || 'default'}
            stroke-width=${this.iconStrokeWidth || 1.5}
            class="button-link__icon button-link__icon--${this.iconPosition}"
            style="--icon-color: currentColor;"
          ></echo-icon>
        `
            : null;
        const content = this.icon
            ? this.iconPosition === 'left'
                ? x `${iconElement}<slot></slot>`
                : x `<slot></slot>${iconElement}`
            : x `<slot></slot>`;
        const displayClass = this.display !== 'inline' ? `u-${this.display}` : '';
        const classes = [
            'button-link',
            `button-link--${this.variant}`,
            `context--${this.context}`,
            `size--${this.size}`,
            displayClass,
            this.class,
        ]
            .filter(Boolean)
            .join(' ');
        // If disabled or no href, render as span
        if (this.disabled || !this.href) {
            return x `
        <span
          class="${classes}"
          role="button"
          tabindex=${this.disabled ? '-1' : '0'}
          aria-disabled=${this.disabled}
          @click=${this._handleClick}
          @keydown=${this._handleKeydown}
        >
          ${content}
        </span>
      `;
        }
        // Render as proper link
        return x `
      <a
        class="${classes}"
        href=${this.href}
        target=${this.target || ''}
        rel=${this.rel || ''}
        @click=${this._handleClick}
      >
        ${content}
      </a>
    `;
    }
    _getIconSizeFromLinkSize() {
        const sizeMap = {
            xs: 'small',
            small: 'small',
            medium: 'medium',
            large: 'large',
        };
        return sizeMap[this.size];
    }
    _handleClick(event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        this.dispatchEvent(new CustomEvent('echo-link-click', {
            detail: { originalEvent: event, href: this.href },
            bubbles: true,
            composed: true,
        }));
    }
    _handleKeydown(event) {
        // Handle Enter and Space keys for disabled links rendered as spans
        if (this.disabled || !this.href) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this._handleClick(event);
            }
        }
    }
    /**
     * Handle attribute changes to reset properties to default values when attributes are removed
     */
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        // If attribute is removed (newValue is null), reset property to default value
        if (newValue === null) {
            switch (name) {
                case 'variant':
                    this.variant = 'default';
                    break;
                case 'size':
                    this.size = 'medium';
                    break;
                case 'context':
                    this.context = 'primary';
                    break;
                case 'disabled':
                    this.disabled = false;
                    break;
                case 'href':
                    this.href = null;
                    break;
                case 'target':
                    this.target = null;
                    break;
                case 'rel':
                    this.rel = null;
                    break;
                case 'icon':
                    this.icon = null;
                    break;
                case 'icon-position':
                    this.iconPosition = 'left';
                    break;
                case 'icon-size':
                    this.iconSize = null;
                    break;
                case 'icon-variant':
                    this.iconVariant = null;
                    break;
                case 'icon-stroke-width':
                    this.iconStrokeWidth = null;
                    break;
                case 'display':
                    this.display = 'inline';
                    break;
                case 'class':
                    this.class = '';
                    break;
            }
        }
    }
};
EchoLink.styles = [buttonLinkStyles, utilityStyles];
__decorate([
    n({ type: String })
], EchoLink.prototype, "variant", void 0);
__decorate([
    n({ type: String })
], EchoLink.prototype, "size", void 0);
__decorate([
    n({ type: String })
], EchoLink.prototype, "context", void 0);
__decorate([
    n({ type: Boolean })
], EchoLink.prototype, "disabled", void 0);
__decorate([
    n({ type: String })
], EchoLink.prototype, "href", void 0);
__decorate([
    n({ type: String })
], EchoLink.prototype, "target", void 0);
__decorate([
    n({ type: String })
], EchoLink.prototype, "rel", void 0);
__decorate([
    n({ type: String })
], EchoLink.prototype, "icon", void 0);
__decorate([
    n({ type: String, attribute: 'icon-position' })
], EchoLink.prototype, "iconPosition", void 0);
__decorate([
    n({ type: String, attribute: 'icon-size' })
], EchoLink.prototype, "iconSize", void 0);
__decorate([
    n({ type: String, attribute: 'icon-variant' })
], EchoLink.prototype, "iconVariant", void 0);
__decorate([
    n({ type: Number, attribute: 'icon-stroke-width' })
], EchoLink.prototype, "iconStrokeWidth", void 0);
__decorate([
    n({ type: String })
], EchoLink.prototype, "display", void 0);
__decorate([
    n({ type: String })
], EchoLink.prototype, "class", void 0);
EchoLink = __decorate([
    t$1('echo-link')
], EchoLink);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={CHILD:2},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends i{constructor(i){if(super(i),this.it=E,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===E||null==r)return this._t=void 0,this.it=r;if(r===T)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o$1=e$1(e);

/**
 * Clean icon library inspired by Lucide icons
 *
 * This module contains clean, well-formed SVG path definitions for all icons
 * in the Design Toolkit icon system. Icons are based on Lucide design principles
 * with consistent stroke width, proper viewBox, and no duplicates.
 */
const iconLibrary = {
    // Navigation & Arrows
    'arrow-left': '<path d="m15 18-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'arrow-right': '<path d="m9 18 6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'arrow-up': '<path d="m18 15-6-6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'arrow-down': '<path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'chevron-left': '<path d="m15 18-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'chevron-right': '<path d="m9 18 6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'chevron-up': '<path d="m18 15-6-6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    menu: '<path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    x: '<path d="m18 6-12 12M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    search: '<circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/><path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    filter: '<polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'more-horizontal': '<circle cx="12" cy="12" r="1" stroke="currentColor" stroke-width="2"/><circle cx="19" cy="12" r="1" stroke="currentColor" stroke-width="2"/><circle cx="5" cy="12" r="1" stroke="currentColor" stroke-width="2"/>',
    'more-vertical': '<circle cx="12" cy="12" r="1" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="19" r="1" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="5" r="1" stroke="currentColor" stroke-width="2"/>',
    // Actions
    plus: '<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    minus: '<path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    trash: '<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 21v-8H7v8M7 3v8h10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    check: '<path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 3v5h-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 16H3v5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="7,10 12,15 17,10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="17,8 12,3 7,8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="16,6 12,2 8,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="2" x2="12" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'external-link': '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 3h6v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 14 21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    // Media & Files
    image: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><circle cx="9" cy="9" r="2" stroke="currentColor" stroke-width="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'folder-open': '<path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    video: '<polygon points="23,7 16,12 23,17 23,7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect width="15" height="13" x="1" y="5" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>',
    music: '<path d="M9 18V5l12-2v13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6" cy="18" r="3" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="16" r="3" stroke="currentColor" stroke-width="2"/>',
    camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="13" r="3" stroke="currentColor" stroke-width="2"/>',
    // Communication
    mail: '<rect width="20" height="16" x="2" y="4" rx="2" stroke="currentColor" stroke-width="2"/><path d="m22 7-10 5L2 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'message-circle': '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    star: '<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    // Settings & Tools
    settings: '<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/><path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    unlock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    // Status & Feedback
    'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 4 12 14.01l-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'x-circle': '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="m15 9-6 6M9 9l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'alert-circle': '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M12 8v4M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    info: '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M12 16v-4M12 8h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    // Technology
    wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.42 9a16 16 0 0 1 21.16 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="20" x2="12.01" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    globe: '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    code: '<polyline points="16,18 22,12 16,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="8,6 2,12 8,18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    battery: '<rect width="18" height="10" x="2" y="7" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><line x1="22" y1="11" x2="22" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 2v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    bolt: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    play: '<polygon points="5,3 19,12 5,21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    pause: '<rect width="4" height="16" x="6" y="4" stroke="currentColor" stroke-width="2"/><rect width="4" height="16" x="14" y="4" stroke="currentColor" stroke-width="2"/>',
    stop: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>',
    volume: '<polygon points="11,5 6,9 2,9 2,15 6,15 11,19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'volume-off': '<polygon points="11,5 6,9 2,9 2,15 6,15 11,19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    // Weather & Nature
    sun: '<circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    // Business & Finance
    'dollar-sign': '<line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'credit-card': '<rect width="20" height="14" x="2" y="5" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'shopping-cart': '<circle cx="9" cy="21" r="1" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="21" r="1" stroke="currentColor" stroke-width="2"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    // Data & Analytics
    'bar-chart': '<line x1="12" y1="20" x2="12" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="18" y1="20" x2="18" y2="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="6" y1="20" x2="6" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'pie-chart': '<path d="M21.21 15.89A10 10 0 1 1 8 2.83" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 12A10 10 0 0 0 12 2v10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    calendar: '<rect width="18" height="18" x="3" y="4" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    clock: '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    // Additional Navigation & UI
    grid: '<rect width="7" height="7" x="3" y="3" rx="1" stroke="currentColor" stroke-width="2"/><rect width="7" height="7" x="14" y="3" rx="1" stroke="currentColor" stroke-width="2"/><rect width="7" height="7" x="14" y="14" rx="1" stroke="currentColor" stroke-width="2"/><rect width="7" height="7" x="3" y="14" rx="1" stroke="currentColor" stroke-width="2"/>',
    list: '<line x1="8" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="8" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="8" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="3" y1="6" x2="3.01" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="3" y1="12" x2="3.01" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="3" y1="18" x2="3.01" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    layout: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><rect width="9" height="7" x="3" y="3" stroke="currentColor" stroke-width="2"/><rect width="5" height="7" x="16" y="3" stroke="currentColor" stroke-width="2"/><rect width="9" height="7" x="3" y="14" stroke="currentColor" stroke-width="2"/><rect width="5" height="7" x="16" y="14" stroke="currentColor" stroke-width="2"/>',
    sidebar: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><rect width="5" height="18" x="3" y="3" stroke="currentColor" stroke-width="2"/>',
    'panel-left': '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><rect width="9" height="18" x="3" y="3" stroke="currentColor" stroke-width="2"/>',
    'panel-right': '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><rect width="9" height="18" x="12" y="3" stroke="currentColor" stroke-width="2"/>',
    'sidebar-open': '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><path d="M9 3v18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'sidebar-close': '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><path d="M9 3v18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M16 21h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3M21 8h-3a2 2 0 0 1-2-2V3M16 21v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'maximize-2': '<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'minimize-2': '<path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    // Additional Actions
    undo: '<path d="M3 7v6h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    redo: '<path d="M21 7v6h-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    cut: '<circle cx="6" cy="6" r="3" stroke="currentColor" stroke-width="2"/><circle cx="6" cy="18" r="3" stroke="currentColor" stroke-width="2"/><line x1="20" y1="4" x2="8.12" y2="15.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="14.47" y1="14.48" x2="20" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="8.12" y1="8.12" x2="12" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    paste: '<path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    scissors: '<circle cx="6" cy="6" r="3" stroke="currentColor" stroke-width="2"/><circle cx="6" cy="18" r="3" stroke="currentColor" stroke-width="2"/><line x1="20" y1="4" x2="8.12" y2="15.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="14.47" y1="14.48" x2="20" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="8.12" y1="8.12" x2="12" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    move: '<polyline points="5,9 2,12 5,15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="9,5 12,2 15,5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="15,19 12,22 9,19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="19,9 22,12 19,15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'rotate-cw': '<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 3v5h-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'rotate-ccw': '<path d="M3 12a9 9 0 1 0 9-9c-2.52 0-4.93 1-6.74 2.74L3 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 3v5h5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'zoom-in': '<circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/><path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="11" y1="8" x2="11" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="8" y1="11" x2="14" y2="11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'zoom-out': '<circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/><path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="8" y1="11" x2="14" y2="11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    // Additional Media & Files
    'folder-plus': '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="11" x2="12" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="9" y1="14" x2="15" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'folder-minus': '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="9" y1="14" x2="15" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'file-plus': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="18" x2="12" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="9" y1="15" x2="15" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'file-minus': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="9" y1="15" x2="15" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'file-text': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="10,9 9,9 8,9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'file-image': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="13" r="2" stroke="currentColor" stroke-width="2"/><path d="m20 17-1.09-1.09a2 2 0 0 0-2.83 0L6 29" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'file-video': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polygon points="10,12 10,17 15,14.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'file-audio': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 12v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="19" r="2" stroke="currentColor" stroke-width="2"/>',
    archive: '<rect width="20" height="5" x="2" y="3" rx="1" stroke="currentColor" stroke-width="2"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="10" y1="12" x2="14" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    package: '<path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="3.27,6.96 12,12.01 20.73,6.96" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    // Text & Typography
    text: '<path d="M17 6.1H3M21 12H3M15 17.9H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    // Additional Communication
    'mail-open': '<path d="M21 8v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 8l7.5 5c.83.56 1.17.56 2 0l7.5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 8l9-6 9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'mail-check': '<path d="M16 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 7l7 5c.83.56 1.17.56 2 0l4-2.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 3l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'mail-plus': '<path d="M16 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 7l7 5c.83.56 1.17.56 2 0l4-2.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 3v6M16 6h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'message-square': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'message-square-plus': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="9" y1="9" x2="15" y2="9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="6" x2="12" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    send: '<path d="M22 2 11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 2 15 22 11 13 2 9 22 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    reply: '<polyline points="9,17 4,12 9,7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 18v-2a4 4 0 0 0-4-4H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    forward: '<polyline points="15,17 20,12 15,7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 18v-2a4 4 0 0 1 4-4h12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'at-sign': '<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    hash: '<line x1="4" y1="9" x2="20" y2="9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="4" y1="15" x2="20" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="10" y1="3" x2="8" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="16" y1="3" x2="14" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    // Additional Settings & Tools
    tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    hammer: '<path d="M14 12l-9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 5l7 7 3-3-7-7-3 3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    screwdriver: '<path d="M14 2l8 8-3 3-8-8 3-3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 9 3 13l8 8 4-4-8-8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    key: '<circle cx="7" cy="7" r="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M7 11v10m0-6h3m-3 3h3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'shield-check': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'shield-alert': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8v4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'shield-x': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 9l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 9l-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    // Gaming & Rewards
    trophy: 
    //'<path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 20H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 3H9v6a3 3 0 0 0 6 0V3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 14h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 14v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    `
    <path d="M8 21h8M10 21v-4h4v4M6 5h12v4a6 6 0 0 1-12 0V5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 5H4a2 2 0 0 0 0 4h2M18 5h2a2 2 0 0 1 0 4h-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  `,
    medal: 
    //'<circle cx="12" cy="15" r="6" stroke="currentColor" stroke-width="2"/><path d="M15.5 9 12 2 8.5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 9 8.5 9 12 2 15.5 9 15 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    `
    <circle cx="12" cy="13" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 9L6 3h4l2 6M16 9l2-6h-4l-2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  `,
    //'<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 3v18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 7.5C16 6.12 14.21 5 12 5S8 6.12 8 7.5 9.79 10 12 10s4 1.12 4 2.5-1.79 2.5-4 2.5-4-1.12-4-2.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    coin: `
    <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  `,
    //'<path d="M3 12l3-6h12l3 6-3 6H6z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 6l3 6-3 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 6l-3 6 3 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    gold: `
    <rect x="4" y="10" width="16" height="8" rx="2" ry="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 10V6h8v4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="4" y1="14" x2="20" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  `,
    sword: `
    <path d="M12 20l-2-2 6-6 2 2-6 6z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 10L20 6l-2-2-4 4-2-2-8 8 2 2 8-8 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  `,
    ingot: `
    <path d="M4 8h16l-1 8H5l-1-8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 8l2-4h12l2 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="6" y1="12" x2="18" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="7" y1="14" x2="17" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  `,
    ticket: `
  <path d="M2 6h20c0.6 0 1 0.4 1 1v3a2.5 2.5 0 0 0 0 5v3c0 0.6-0.4 1-1 1H2c-0.6 0-1-0.4-1-1v-3a2.5 2.5 0 0 0 0-5V7c0-0.6 0.4-1 1-1z"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="6.5" y="9" width="11" height="6" rx="1"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  `,
    crm: `
    <!-- Tête centrale -->
    <circle cx="12" cy="7" r="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Corps central -->
    <path d="M9 12c0-1.1 1.3-2 3-2s3 .9 3 2v1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- Tête gauche -->
    <circle cx="5" cy="15" r="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Corps gauche -->
    <path d="M3 20c0-1.1 1.3-2 3-2s3 .9 3 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- Tête droite -->
    <circle cx="19" cy="15" r="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Corps droit -->
    <path d="M17 20c0-1.1 1.3-2 3-2s3 .9 3 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- Liaisons -->
    <path d="M8 14l2-2M16 14l-2-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  `,
    crm2: `
  <!-- Centre = CRM -->
  <circle cx="12" cy="12" r="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="12" cy="12" r="0.5" fill="currentColor"/>

  <!-- Clients -->
  <circle cx="12" cy="4" r="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="5" cy="18" r="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="19" cy="18" r="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Connexions précises centre-à-centre -->
  <line x1="12" y1="6"  x2="12" y2="10"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="10.3" y1="13.7" x2="6.7" y2="16.3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="13.7" y1="13.7" x2="17.3" y2="16.3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
`,
};

/**
 * Icon registry for Design Toolkit
 *
 * This module manages the SVG icon library and provides
 * efficient loading and caching of icon data.
 */
/**
 * Icon registry map storing SVG content for each icon
 */
const iconRegistry = new Map();
/**
 * Icon loading promises cache to prevent duplicate requests
 */
const loadingPromises = new Map();
/**
 * Base SVG template with consistent styling
 */
const createSVGTemplate = (content) => {
    return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
    ${content}
  </svg>`;
};
/**
 * Generate SVG path for an icon based on its name
 * Uses the comprehensive icon library
 */
const generateIconSVG = (iconName) => {
    const exists = Object.prototype.hasOwnProperty.call(iconLibrary, iconName);
    const path = exists ? iconLibrary[iconName] : iconLibrary['x']; // fallback to x icon
    if (!exists) {
        console.warn(`[design-toolkit] Icon "${String(iconName)}" is not implemented. Falling back to "x".`);
    }
    return createSVGTemplate(path);
};
/**
 * List all icon names that are actually available in the compiled library.
 * This is the single source of truth for UI/demo listings to avoid showing
 * fallback icons when a requested name is not implemented yet.
 */
const getAvailableIconNames = () => {
    return Object.keys(iconLibrary);
};
/**
 * Load an icon by name
 * @param iconName The name of the icon to load
 * @returns Promise that resolves to the SVG content
 */
const loadIcon = async (iconName) => {
    // Return cached icon if available
    if (iconRegistry.has(iconName)) {
        return iconRegistry.get(iconName);
    }
    // Return existing loading promise if available
    if (loadingPromises.has(iconName)) {
        return loadingPromises.get(iconName);
    }
    // Create new loading promise
    const loadingPromise = new Promise((resolve) => {
        // Simulate async loading (in real implementation, this would load from files)
        setTimeout(() => {
            const svgContent = generateIconSVG(iconName);
            iconRegistry.set(iconName, svgContent);
            loadingPromises.delete(iconName);
            resolve(svgContent);
        }, 0);
    });
    loadingPromises.set(iconName, loadingPromise);
    return loadingPromise;
};
/**
 * Preload multiple icons
 * @param iconNames Array of icon names to preload
 * @returns Promise that resolves when all icons are loaded
 */
const preloadIcons = async (iconNames) => {
    await Promise.all(iconNames.map(loadIcon));
};
/**
 * Get all loaded icon names
 * @returns Array of loaded icon names
 */
const getLoadedIcons = () => {
    return Array.from(iconRegistry.keys());
};
/**
 * Clear the icon registry (useful for testing)
 */
const clearIconRegistry = () => {
    iconRegistry.clear();
    loadingPromises.clear();
};

let EchoIcon = class EchoIcon extends i$1 {
    constructor() {
        super(...arguments);
        this.name = 'x';
        this.size = 'medium';
        this.variant = 'default';
        this.color = 'currentColor';
        this.context = null;
        this.ariaLabel = null;
        this.disabled = false;
        this.strokeWidth = 1.5;
        this._svgContent = '';
        this._isLoading = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this._loadIcon();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('name') ||
            changedProperties.has('variant') ||
            changedProperties.has('strokeWidth')) {
            this._loadIcon();
        }
    }
    async _loadIcon() {
        if (this._isLoading)
            return;
        this._isLoading = true;
        this.requestUpdate();
        try {
            let svgContent = await loadIcon(this.name);
            this._svgContent = this._transformSVGForVariant(svgContent);
        }
        catch (error) {
            console.error(`Failed to load icon: ${this.name}`, error);
            // Fallback to a default icon
            let svgContent = await loadIcon('x');
            this._svgContent = this._transformSVGForVariant(svgContent);
        }
        finally {
            this._isLoading = false;
            this.requestUpdate();
        }
    }
    _transformSVGForVariant(svgContent) {
        let transformed = svgContent;
        // Apply stroke-width
        transformed = transformed.replace(/stroke-width="[^"]*"/g, `stroke-width="${this.strokeWidth}"`);
        // Add stroke-width if not present on path elements
        if (!transformed.includes('stroke-width=')) {
            transformed = transformed.replace(/<path /g, `<path stroke-width="${this.strokeWidth}" `);
        }
        if (this.variant === 'filled') {
            // For filled variant, replace stroke with fill and set stroke to none
            transformed = transformed
                .replace(/stroke="currentColor"/g, 'fill="currentColor" stroke="none"')
                .replace(/fill="none"/g, '');
        }
        return transformed;
    }
    render() {
        const classes = [
            'icon',
            `icon--${this.size}`,
            `icon--${this.variant}`,
            this.context ? `context--${this.context}` : '',
            this._isLoading ? 'icon--loading' : '',
            this.disabled ? 'icon--disabled' : '',
        ]
            .filter(Boolean)
            .join(' ');
        const style = this.color !== 'currentColor' ? `--icon-color: ${this.color}` : '';
        return x `
      <div
        class="${classes}"
        style="${style}"
        role="img"
        aria-label="${this.ariaLabel || this.name}"
        ?disabled="${this.disabled}"
        tabindex="${this.disabled ? -1 : 0}"
        @keydown="${this._handleKeydown}"
      >
        ${this._svgContent
            ? o$1(this._svgContent)
            : x `<div class="icon-placeholder"></div>`}
      </div>
    `;
    }
    _handleKeydown(event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        // Handle Enter and Space key presses
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.dispatchEvent(new CustomEvent('echo-icon-click', {
                detail: {
                    iconName: this.name,
                    originalEvent: event,
                },
                bubbles: true,
                composed: true,
            }));
        }
    }
};
EchoIcon.styles = [
    contextColors,
    i$4 `
      :host {
        display: inline-block;
        vertical-align: middle;
      }

      .icon {
        display: inline-block;
        color: var(--icon-color, var(--context-color, currentColor));
        transition: color 0.124s ease-in-out;
      }

      .icon:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      /* Size variants */
      .icon--small {
        width: 16px;
        height: 16px;
      }

      .icon--medium {
        width: 24px;
        height: 24px;
      }

      .icon--large {
        width: 32px;
        height: 32px;
      }

      /* Variant styles */
      .icon--outline {
        /* Outline variant uses stroke only */
      }

      .icon--filled {
        /* Filled variant uses fill */
      }

      .icon--default {
        /* Default variant uses stroke */
      }

      /* Loading state */
      .icon--loading {
        opacity: 0.6;
      }

      /* Accessibility */
      .icon:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 2px;
        border-radius: 2px;
      }
    `,
];
__decorate([
    n({ type: String })
], EchoIcon.prototype, "name", void 0);
__decorate([
    n({ type: String })
], EchoIcon.prototype, "size", void 0);
__decorate([
    n({ type: String })
], EchoIcon.prototype, "variant", void 0);
__decorate([
    n({ type: String })
], EchoIcon.prototype, "color", void 0);
__decorate([
    n({ type: String })
], EchoIcon.prototype, "context", void 0);
__decorate([
    n({ type: String, attribute: 'aria-label' })
], EchoIcon.prototype, "ariaLabel", void 0);
__decorate([
    n({ type: Boolean })
], EchoIcon.prototype, "disabled", void 0);
__decorate([
    n({ type: Number, attribute: 'stroke-width' })
], EchoIcon.prototype, "strokeWidth", void 0);
EchoIcon = __decorate([
    t$1('echo-icon')
], EchoIcon);

let EchoSeparator = class EchoSeparator extends i$1 {
    constructor() {
        super(...arguments);
        this.variant = 'solid';
        this.margin = 'medium';
        this.orientation = 'horizontal';
        this.thickness = 'thin';
        this.context = 'secondary';
        this.color = null;
        this._hasContent = false;
    }
    render() {
        const classes = [
            `separator--${this.variant}`,
            `thickness--${this.thickness}`,
            `margin--${this.margin}`,
            `context--${this.context}`,
        ].join(' ');
        const customColor = this.color ? `--separator-color: ${this.color}` : '';
        if (this._hasContent) {
            // Render separator with content
            const containerClasses = [
                'separator-container',
                this.orientation === 'vertical' ? 'separator-container--vertical' : '',
                this.variant === 'gradient' ? 'separator-container--gradient' : '',
                `thickness--${this.thickness}`,
                `margin--${this.margin}`,
                `context--${this.context}`,
            ]
                .filter(Boolean)
                .join(' ');
            const lineClasses = [
                this.orientation === 'vertical'
                    ? 'separator-line--vertical'
                    : 'separator-line',
                `separator--${this.variant}`,
            ].join(' ');
            const contentClasses = [
                'separator-content',
                this.orientation === 'vertical' ? 'separator-content--vertical' : '',
            ]
                .filter(Boolean)
                .join(' ');
            return x `
        <div class="${containerClasses}" style="${customColor}">
          <hr class="${lineClasses}" aria-hidden="true" />
          <div class="${contentClasses}">
            <slot @slotchange=${this._handleSlotChange}></slot>
          </div>
          <hr class="${lineClasses}" aria-hidden="true" />
        </div>
      `;
        }
        // Render simple separator (but always include the slot to detect content)
        return x `
      <hr
        class="separator--${this.orientation} ${classes}"
        style="${customColor}"
        role="separator"
        aria-orientation="${this.orientation}"
      />
      <slot @slotchange=${this._handleSlotChange} style="display: none;"></slot>
    `;
    }
    _handleSlotChange(e) {
        const slot = e.target;
        const nodes = slot.assignedNodes({ flatten: true });
        const hasContent = nodes.some((node) => node.nodeType === Node.ELEMENT_NODE ||
            (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()));
        if (hasContent !== this._hasContent) {
            this._hasContent = hasContent;
        }
    }
};
EchoSeparator.styles = [
    contextColors,
    i$4 `
      :host {
        display: block;
      }

      /* Horizontal separator */
      .separator--horizontal {
        width: 100%;
        border: none;
        border-top-style: var(--separator-variant);
        border-top-width: var(--separator-thickness);
        border-top-color: var(
          --separator-color,
          var(--context-color, currentColor)
        );
        margin: var(--separator-margin) 0;
      }

      /* Vertical separator */
      .separator--vertical {
        display: inline-block;
        height: 100%;
        min-height: 20px;
        width: 0;
        border: none;
        border-left-style: var(--separator-variant);
        border-left-width: var(--separator-thickness);
        border-left-color: var(
          --separator-color,
          var(--context-color, currentColor)
        );
        margin: 0 var(--separator-margin);
        vertical-align: middle;
      }

      /* Variants */
      .separator--solid {
        --separator-variant: solid;
      }

      .separator--dotted {
        --separator-variant: dotted;
      }

      .separator--dashed {
        --separator-variant: dashed;
      }

      .separator--double {
        --separator-variant: double;
      }

      .separator--gradient {
        border: none;
        background: linear-gradient(
          to right,
          transparent,
          var(--separator-color, var(--context-color, currentColor)),
          transparent
        );
        height: var(--separator-thickness);
      }

      .separator--gradient.separator--vertical {
        width: var(--separator-thickness);
        height: 100%;
        background: linear-gradient(
          to bottom,
          transparent,
          var(--separator-color, var(--context-color, currentColor)),
          transparent
        );
      }

      /* Thickness */
      .thickness--thin {
        --separator-thickness: 1px;
      }

      .thickness--medium {
        --separator-thickness: 2px;
      }

      .thickness--thick {
        --separator-thickness: 4px;
      }

      /* Margins */
      .margin--small {
        --separator-margin: 8px;
      }

      .margin--medium {
        --separator-margin: 16px;
      }

      .margin--large {
        --separator-margin: 32px;
      }

      /* Separator with content */
      .separator-container {
        display: flex;
        align-items: center;
        width: 100%;
        margin: var(--separator-margin) 0;
      }

      .separator-container--vertical {
        flex-direction: column;
        height: 100%;
        width: auto;
        margin: 0 var(--separator-margin);
      }

      .separator-line {
        flex: 1;
        border: none;
        border-top-style: var(--separator-variant);
        border-top-width: var(--separator-thickness);
        border-top-color: var(
          --separator-color,
          var(--context-color, currentColor)
        );
        margin: 0;
      }

      .separator-line--vertical {
        flex: 1;
        border: none;
        border-left-style: var(--separator-variant);
        border-left-width: var(--separator-thickness);
        border-left-color: var(
          --separator-color,
          var(--context-color, currentColor)
        );
        min-height: 20px;
      }

      .separator-content {
        padding: 0 12px;
        color: var(--separator-color, var(--context-color, currentColor));
        font-size: 14px;
        white-space: nowrap;
      }

      .separator-content--vertical {
        padding: 12px 0;
      }

      /* Gradient variant for content separator */
      .separator-container--gradient .separator-line {
        border: none;
        background: linear-gradient(
          to right,
          transparent,
          var(--separator-color, var(--context-color, currentColor)),
          transparent
        );
        height: var(--separator-thickness);
      }

      .separator-container--gradient.separator-container--vertical
        .separator-line--vertical {
        border: none;
        background: linear-gradient(
          to bottom,
          transparent,
          var(--separator-color, var(--context-color, currentColor)),
          transparent
        );
        width: var(--separator-thickness);
        height: auto;
      }
    `,
];
__decorate([
    n({ type: String })
], EchoSeparator.prototype, "variant", void 0);
__decorate([
    n({ type: String })
], EchoSeparator.prototype, "margin", void 0);
__decorate([
    n({ type: String })
], EchoSeparator.prototype, "orientation", void 0);
__decorate([
    n({ type: String })
], EchoSeparator.prototype, "thickness", void 0);
__decorate([
    n({ type: String })
], EchoSeparator.prototype, "context", void 0);
__decorate([
    n({ type: String })
], EchoSeparator.prototype, "color", void 0);
__decorate([
    r()
], EchoSeparator.prototype, "_hasContent", void 0);
EchoSeparator = __decorate([
    t$1('echo-separator')
], EchoSeparator);

let EchoCard = class EchoCard extends i$1 {
    constructor() {
        super(...arguments);
        this.variant = 'default';
        this.size = 'medium';
        this.context = 'default';
        this.cardTitle = '';
        this.icon = null;
        this.iconSize = null;
        this.iconVariant = null;
        this.closable = false;
        this.disabled = false;
        this._isVisible = true;
        this._hasFooterContent = false;
        this._hasMainContent = true;
    }
    render() {
        if (!this._isVisible) {
            return x `<div class="card--hidden"></div>`;
        }
        const classes = [
            'card',
            `card--${this.variant}`,
            `card--${this.size}`,
            `context--${this.context}`,
            this.disabled ? 'card--disabled' : '',
        ]
            .filter(Boolean)
            .join(' ');
        const hasHeader = !!this.cardTitle || !!this.icon || this.closable;
        return x `
      <div class="${classes}" ?disabled=${this.disabled}>
        ${hasHeader ? this._renderHeader() : ''}
        ${this._renderContent(hasHeader)} ${this._renderFooter()}
      </div>
    `;
    }
    _renderHeader() {
        const titleClasses = ['card__title', `card__title--${this.size}`].join(' ');
        const iconElement = this.icon
            ? x `
          <echo-icon
            name=${this.icon}
            size=${this.iconSize || this._getIconSizeFromCardSize()}
            variant=${this.iconVariant || 'default'}
            context=${this.context}
          ></echo-icon>
        `
            : null;
        const closeButton = this.closable
            ? x `
          <echo-button
            variant="ghost"
            size="small"
            @click=${this._handleClose}
            ?disabled=${this.disabled}
            aria-label="Close card"
            icon="x"
          >
          </echo-button>
        `
            : null;
        return x `
      <div class="card__header">
        <div class="card__header-content">
          ${iconElement}
          ${this.cardTitle
            ? x `<h3 class="${titleClasses}">${this.cardTitle}</h3>`
            : ''}
          <slot name="header-actions"></slot>
        </div>
        <div class="card__header-actions">${closeButton}</div>
      </div>
    `;
    }
    _renderContent(hasHeader) {
        const contentClasses = [
            'card__content',
            !hasHeader ? 'card__content--no-header' : '',
            !this._hasMainContent ? 'card__content--hidden' : '',
        ]
            .filter(Boolean)
            .join(' ');
        return x `
      <div class="${contentClasses}">
        <slot
          data-main-content
          @slotchange=${this._handleMainContentSlotChange}
        ></slot>
      </div>
    `;
    }
    _renderFooter() {
        return x `
      <div class="card__footer" ?hidden=${!this._hasFooterContent}>
        <slot name="footer" @slotchange=${this._handleFooterSlotChange}></slot>
      </div>
    `;
    }
    _getIconSizeFromCardSize() {
        const sizeMap = {
            small: 'small',
            medium: 'medium',
            large: 'large',
        };
        return sizeMap[this.size];
    }
    _handleFooterSlotChange(e) {
        const slot = e.target;
        const nodes = slot.assignedNodes({ flatten: true });
        const hasContent = nodes.some((node) => node.nodeType === Node.ELEMENT_NODE ||
            (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()));
        if (hasContent !== this._hasFooterContent) {
            this._hasFooterContent = hasContent;
        }
    }
    _handleMainContentSlotChange(e) {
        const slot = e.target;
        const nodes = slot.assignedNodes({ flatten: true });
        const hasContent = nodes.some((node) => node.nodeType === Node.ELEMENT_NODE ||
            (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()));
        if (hasContent !== this._hasMainContent) {
            this._hasMainContent = hasContent;
        }
    }
    firstUpdated() {
        // Use setTimeout to ensure slots are fully initialized
        setTimeout(() => {
            this._checkSlotContent();
        }, 0);
    }
    _checkSlotContent() {
        // Check footer slot
        const footerSlot = this.shadowRoot?.querySelector('slot[name="footer"]');
        if (footerSlot) {
            const nodes = footerSlot.assignedNodes({ flatten: true });
            const hasContent = nodes.some((node) => node.nodeType === Node.ELEMENT_NODE ||
                (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()));
            if (hasContent !== this._hasFooterContent) {
                this._hasFooterContent = hasContent;
                this.requestUpdate();
            }
        }
        // Check main content slot
        const mainContentSlot = this.shadowRoot?.querySelector('slot[data-main-content]');
        if (mainContentSlot) {
            const nodes = mainContentSlot.assignedNodes({ flatten: true });
            const hasContent = nodes.some((node) => node.nodeType === Node.ELEMENT_NODE ||
                (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()));
            if (hasContent !== this._hasMainContent) {
                this._hasMainContent = hasContent;
                this.requestUpdate();
            }
        }
    }
    _handleClose() {
        if (this.disabled)
            return;
        this._isVisible = false;
        this.dispatchEvent(new CustomEvent('echo-card-close', {
            detail: { card: this },
            bubbles: true,
            composed: true,
        }));
    }
    // Public method to show the card again
    show() {
        this._isVisible = true;
    }
    // Public method to hide the card
    hide() {
        this._isVisible = false;
    }
};
EchoCard.styles = [
    contextColors,
    componentSizes,
    i$4 `
      :host {
        display: block;
        --card-border-radius: 1px;
        --card-padding: 10px;
        --card-shadow:
          0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06);
        --card-border: 1px solid rgba(0, 0, 0, 0.06);
        --card-hover-shadow:
          0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06);
      }

      .card {
        display: flex;
        flex-direction: column;
        border-radius: var(--card-border-radius);
        background-color: white;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;
        font-family:
          -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      /*
      .card:hover {
        box-shadow: var(--card-hover-shadow);
      }
      */

      .card:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      /* Variants */
      .card--default {
        box-shadow: var(--card-shadow);
        border: var(--card-border);
      }

      .card--outlined {
        border: 1px solid var(--context-color);
        box-shadow: none;
        background-color: rgba(255, 255, 255, 0.95);
      }

      .card--elevated {
        box-shadow:
          0 8px 25px rgba(0, 0, 0, 0.12),
          0 3px 10px rgba(0, 0, 0, 0.08);
        border: none;
        background-color: white;
      }

      .card--flat {
        box-shadow: none;
        border: none;
        background-color: var(--context-color-alpha);
      }

      /* Sizes */
      .card--small {
        --card-padding: 12px;
        --card-border-radius: 6px;
      }

      .card--medium {
        --card-padding: 16px;
        --card-border-radius: 8px;
      }

      .card--large {
        --card-padding: 24px;
        --card-border-radius: 12px;
      }

      /* Header */
      .card__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--card-padding);
        padding-bottom: 12px;
        min-height: 52px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      }

      .card__header-content {
        display: flex;
        align-items: center;
        flex: 1;
        gap: 14px;
      }

      .card__title {
        font-size: 17px;
        font-weight: 500;
        color: #1a1a1a;
        margin: 0;
        line-height: 1.3;
        letter-spacing: -0.01em;
      }

      .card__title--small {
        font-size: 15px;
      }

      .card__title--large {
        font-size: 19px;
      }

      .card__header-actions {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .card__close-button {
        background: none;
        border: none;
        padding: 6px;
        cursor: pointer;
        border-radius: 6px;
        color: #666;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.7;
      }

      .card__close-button:hover:not(:disabled) {
        background-color: rgba(0, 0, 0, 0.05);
        opacity: 1;
        color: #333;
      }

      .card__close-button:focus-visible {
        outline: 2px solid var(--context-color);
        outline-offset: 2px;
      }

      .card__close-button:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }

      /* Content */
      .card__content {
        padding: var(--card-padding);
        flex: 1;
        color: #4a4a4a;
        line-height: 1.6;
        font-size: 14px;
      }

      .card__content--no-header {
        padding-top: var(--card-padding);
      }

      .card__content--no-footer {
        padding-bottom: var(--card-padding);
      }

      .card__content--hidden {
        display: none;
      }

      /* Footer */
      .card__footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: var(--card-padding);
        padding-top: 16px;
        gap: 10px;
        min-height: 52px;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        background-color: rgba(0, 0, 0, 0.01);
      }

      .card__footer[hidden] {
        display: none;
      }

      .card__footer--left {
        justify-content: flex-start;
      }

      .card__footer--center {
        justify-content: center;
      }

      .card__footer--space-between {
        justify-content: space-between;
      }

      /* Separator */
      .card__separator {
        margin: 0 var(--card-padding);
      }

      /* Hidden state */
      .card--hidden {
        display: none;
      }

      /* Context colors - inspired by echo-pop implementation */

      /* Default context - no special styling */
      .card.context--default {
        /* No additional styling for default context */
      }

      /* Primary context */
      .card.context--primary {
        border-left: 4px solid var(--context-color);
      }

      .card.context--primary .card__title {
        color: var(--context-color);
      }

      .card.context--primary .card__header {
        background-color: var(--context-color-alpha);
      }

      /* Secondary context */
      .card.context--secondary {
        border-left: 4px solid var(--context-color);
      }

      .card.context--secondary .card__title {
        color: var(--context-color);
      }

      .card.context--secondary .card__header {
        background-color: var(--context-color-alpha);
      }

      /* Success context */
      .card.context--success {
        border-left: 4px solid var(--context-color);
      }

      .card.context--success .card__title {
        color: var(--context-color);
      }

      .card.context--success .card__header {
        background-color: var(--context-color-alpha);
      }

      /* Warning context */
      .card.context--warning {
        border-left: 4px solid var(--context-color);
      }

      .card.context--warning .card__title {
        color: var(--context-color);
      }

      .card.context--warning .card__header {
        background-color: var(--context-color-alpha);
      }

      /* Danger context */
      .card.context--danger {
        border-left: 4px solid var(--context-color);
      }

      .card.context--danger .card__title {
        color: var(--context-color);
      }

      .card.context--danger .card__header {
        background-color: var(--context-color-alpha);
      }

      /* Info context */
      .card.context--info {
        border-left: 4px solid var(--context-color);
      }

      .card.context--info .card__title {
        color: var(--context-color);
      }

      .card.context--info .card__header {
        background-color: var(--context-color-alpha);
      }

      /* Flat variant with context colors */
      .card--flat.context--primary {
        background-color: var(--context-color-alpha);
      }

      .card--flat.context--secondary {
        background-color: var(--context-color-alpha);
      }

      .card--flat.context--success {
        background-color: var(--context-color-alpha);
      }

      .card--flat.context--warning {
        background-color: var(--context-color-alpha);
      }

      .card--flat.context--danger {
        background-color: var(--context-color-alpha);
      }

      .card--flat.context--info {
        background-color: var(--context-color-alpha);
      }
    `,
];
__decorate([
    n({ type: String })
], EchoCard.prototype, "variant", void 0);
__decorate([
    n({ type: String })
], EchoCard.prototype, "size", void 0);
__decorate([
    n({ type: String })
], EchoCard.prototype, "context", void 0);
__decorate([
    n({ type: String, attribute: 'card-title' })
], EchoCard.prototype, "cardTitle", void 0);
__decorate([
    n({ type: String })
], EchoCard.prototype, "icon", void 0);
__decorate([
    n({ type: String, attribute: 'icon-size' })
], EchoCard.prototype, "iconSize", void 0);
__decorate([
    n({ type: String, attribute: 'icon-variant' })
], EchoCard.prototype, "iconVariant", void 0);
__decorate([
    n({ type: Boolean, attribute: 'closable' })
], EchoCard.prototype, "closable", void 0);
__decorate([
    n({ type: Boolean })
], EchoCard.prototype, "disabled", void 0);
__decorate([
    r()
], EchoCard.prototype, "_isVisible", void 0);
__decorate([
    r()
], EchoCard.prototype, "_hasFooterContent", void 0);
__decorate([
    r()
], EchoCard.prototype, "_hasMainContent", void 0);
EchoCard = __decorate([
    t$1('echo-card')
], EchoCard);

/**
 * Shared layout styles for Design Toolkit components
 *
 * This module provides CSS classes for different layout properties
 * that can be reused across multiple web components.
 *
 * Usage:
 * ```typescript
 * import { layoutStyles } from '../styles/layout-styles.js';
 *
 * static styles = css`
 *   ${layoutStyles}
 *   // ... other styles
 * `;
 * ```
 */
const layoutStyles = i$4 `
  /* Layout Display */
  .layout--flex {
    display: flex;
  }

  .layout--grid {
    display: grid;
  }

  .layout--block {
    display: block;
  }

  .layout--inline-flex {
    display: inline-flex;
  }

  .layout--inline-grid {
    display: inline-grid;
  }

  /* Flex Direction */
  .layout--row {
    flex-direction: row;
  }

  .layout--column {
    flex-direction: column;
  }

  .layout--row-reverse {
    flex-direction: row-reverse;
  }

  .layout--column-reverse {
    flex-direction: column-reverse;
  }

  /* Flex Wrap */
  .layout--nowrap {
    flex-wrap: nowrap;
  }

  .layout--wrap {
    flex-wrap: wrap;
  }

  .layout--wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* Alignment */
  .layout--align-start {
    align-items: flex-start;
  }

  .layout--align-end {
    align-items: flex-end;
  }

  .layout--align-center {
    align-items: center;
  }

  .layout--align-stretch {
    align-items: stretch;
  }

  .layout--align-baseline {
    align-items: baseline;
  }

  /* Justification */
  .layout--justify-start {
    justify-content: flex-start;
  }

  .layout--justify-end {
    justify-content: flex-end;
  }

  .layout--justify-center {
    justify-content: center;
  }

  .layout--justify-between {
    justify-content: space-between;
  }

  .layout--justify-around {
    justify-content: space-around;
  }

  .layout--justify-evenly {
    justify-content: space-evenly;
  }

  /* Gap Sizes */
  .layout--gap-none {
    gap: 0;
  }

  .layout--gap-xs {
    gap: 4px;
  }

  .layout--gap-small {
    gap: 8px;
  }

  .layout--gap-medium {
    gap: 16px;
  }

  .layout--gap-large {
    gap: 24px;
  }

  .layout--gap-xl {
    gap: 32px;
  }

  /* Grid specific */
  .layout--grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .layout--grid-auto-fill {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .layout--grid-auto-fit {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
/**
 * Layout styles CSS custom properties as a plain CSS string
 * Useful for non-Lit components or when you need raw CSS
 */
const layoutStylesCSS = `
  /* Layout Display */
  .layout--flex {
    display: flex;
  }

  .layout--grid {
    display: grid;
  }

  .layout--block {
    display: block;
  }

  .layout--inline-flex {
    display: inline-flex;
  }

  .layout--inline-grid {
    display: inline-grid;
  }

  /* Flex Direction */
  .layout--row {
    flex-direction: row;
  }

  .layout--column {
    flex-direction: column;
  }

  .layout--row-reverse {
    flex-direction: row-reverse;
  }

  .layout--column-reverse {
    flex-direction: column-reverse;
  }

  /* Flex Wrap */
  .layout--nowrap {
    flex-wrap: nowrap;
  }

  .layout--wrap {
    flex-wrap: wrap;
  }

  .layout--wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* Alignment */
  .layout--align-start {
    align-items: flex-start;
  }

  .layout--align-end {
    align-items: flex-end;
  }

  .layout--align-center {
    align-items: center;
  }

  .layout--align-stretch {
    align-items: stretch;
  }

  .layout--align-baseline {
    align-items: baseline;
  }

  /* Justification */
  .layout--justify-start {
    justify-content: flex-start;
  }

  .layout--justify-end {
    justify-content: flex-end;
  }

  .layout--justify-center {
    justify-content: center;
  }

  .layout--justify-between {
    justify-content: space-between;
  }

  .layout--justify-around {
    justify-content: space-around;
  }

  .layout--justify-evenly {
    justify-content: space-evenly;
  }

  /* Gap Sizes */
  .layout--gap-none {
    gap: 0;
  }

  .layout--gap-xs {
    gap: 4px;
  }

  .layout--gap-small {
    gap: 8px;
  }

  .layout--gap-medium {
    gap: 16px;
  }

  .layout--gap-large {
    gap: 24px;
  }

  .layout--gap-xl {
    gap: 32px;
  }

  /* Grid specific */
  .layout--grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .layout--grid-auto-fill {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .layout--grid-auto-fit {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

let EchoLayout = class EchoLayout extends i$1 {
    constructor() {
        super(...arguments);
        this.display = 'flex';
        this.direction = 'row';
        this.wrap = 'nowrap';
        this.align = 'stretch';
        this.justify = 'start';
        this.gap = 'medium';
        this.columns = 'auto';
        this.rows = 'auto';
    }
    render() {
        const classes = this._buildClassList();
        const styles = this._buildCustomStyles();
        return x `
      <div class="${classes}" style="${styles}">
        <slot></slot>
      </div>
    `;
    }
    _buildClassList() {
        const classes = [
            'layout',
            `layout--${this.display}`,
            `layout--gap-${this.gap}`,
        ];
        // Add flex-specific classes
        if (this.display === 'flex' || this.display === 'inline-flex') {
            classes.push(`layout--${this.direction}`, `layout--${this.wrap}`, `layout--align-${this.align}`, `layout--justify-${this.justify}`);
        }
        // Add grid-specific classes
        if (this.display === 'grid' || this.display === 'inline-grid') {
            if (typeof this.columns === 'number') {
                classes.push('layout--grid-custom-columns');
            }
            else if (this.columns === 'auto-fit') {
                classes.push('layout--grid-auto-fit');
            }
            else if (this.columns === 'auto-fill') {
                classes.push('layout--grid-auto-fill');
            }
            else {
                classes.push('layout--grid-auto');
            }
            if (typeof this.rows === 'number') {
                classes.push('layout--grid-custom-rows');
            }
        }
        return classes.filter(Boolean).join(' ');
    }
    _buildCustomStyles() {
        const styles = [];
        // Handle custom grid columns
        if (this.display === 'grid' || this.display === 'inline-grid') {
            if (typeof this.columns === 'number') {
                styles.push(`--layout-columns-custom: repeat(${this.columns}, 1fr)`);
            }
        }
        // Handle custom grid rows
        if (this.display === 'grid' || this.display === 'inline-grid') {
            if (typeof this.rows === 'number') {
                styles.push(`--layout-rows-custom: repeat(${this.rows}, 1fr)`);
            }
        }
        return styles.join('; ');
    }
    // Public methods for dynamic updates
    setDisplay(display) {
        this.display = display;
    }
    setDirection(direction) {
        this.direction = direction;
    }
    setAlign(align) {
        this.align = align;
    }
    setJustify(justify) {
        this.justify = justify;
    }
    setGap(gap) {
        this.gap = gap;
    }
    setColumns(columns) {
        this.columns = columns;
    }
    setRows(rows) {
        this.rows = rows;
    }
};
EchoLayout.styles = [
    layoutStyles,
    i$4 `
      :host {
        display: block;
        --layout-columns: var(--layout-columns-custom, auto);
        --layout-rows: var(--layout-rows-custom, auto);
      }

      .layout {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }

      /* Grid specific styles */
      .layout--grid-custom-columns {
        grid-template-columns: var(--layout-columns);
      }

      .layout--grid-custom-rows {
        grid-template-rows: var(--layout-rows);
      }

      /* Responsive behavior */
      @media (max-width: 768px) {
        .layout--responsive {
          flex-direction: column;
        }
      }
    `,
];
__decorate([
    n({ type: String })
], EchoLayout.prototype, "display", void 0);
__decorate([
    n({ type: String })
], EchoLayout.prototype, "direction", void 0);
__decorate([
    n({ type: String })
], EchoLayout.prototype, "wrap", void 0);
__decorate([
    n({ type: String })
], EchoLayout.prototype, "align", void 0);
__decorate([
    n({ type: String })
], EchoLayout.prototype, "justify", void 0);
__decorate([
    n({ type: String })
], EchoLayout.prototype, "gap", void 0);
__decorate([
    n({ type: [Number, String] })
], EchoLayout.prototype, "columns", void 0);
__decorate([
    n({ type: [Number, String] })
], EchoLayout.prototype, "rows", void 0);
EchoLayout = __decorate([
    t$1('echo-layout')
], EchoLayout);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=o=>o??E;

let EchoInput = class EchoInput extends i$1 {
    constructor() {
        super(...arguments);
        this.variant = 'default';
        this.size = 'medium';
        this.context = 'primary';
        this.type = 'text';
        this.label = '';
        this.placeholder = '';
        this.value = '';
        this.description = '';
        this.icon = null;
        this.iconPosition = 'left';
        this.iconSize = null;
        this.iconVariant = null;
        this.disabled = false;
        this.required = false;
        this.readonly = false;
        this.name = '';
        this.id = '';
        this.minlength = null;
        this.maxlength = null;
        this.pattern = null;
        this.step = null;
        this.min = null;
        this.max = null;
    }
    render() {
        const inputId = this.id || `echo-input-${Math.random().toString(36).substr(2, 9)}`;
        const inputClasses = [
            'input-field',
            `input-field--${this.variant}`,
            `input-field--${this.size}`,
            this.icon ? `input-field--with-icon-${this.iconPosition}` : '',
            this.disabled ? 'input-field--disabled' : '',
            this.readonly ? 'input-field--readonly' : '',
        ]
            .filter(Boolean)
            .join(' ');
        const labelClasses = [
            'input-label',
            `input-label--${this.size}`,
            this.required ? 'input-label--required' : '',
        ]
            .filter(Boolean)
            .join(' ');
        const descriptionClasses = [
            'input-description',
            `input-description--${this.size}`,
        ]
            .filter(Boolean)
            .join(' ');
        const iconElement = this.icon
            ? x `
          <echo-icon
            name=${this.icon}
            size=${this.iconSize || this._getIconSizeFromInputSize()}
            variant=${this.iconVariant || 'default'}
            class="input-icon input-icon--${this
                .iconPosition} input-icon--${this.size}"
            style="--icon-color: #6b7280;"
          ></echo-icon>
        `
            : null;
        return x `
      <div class="input-container context--${this.context}">
        ${this.label
            ? x `
              <label for="${inputId}" class="${labelClasses}">
                ${this.label}
              </label>
            `
            : ''}

        <div class="input-wrapper">
          <input
            id="${inputId}"
            class="${inputClasses}"
            type="${this.type}"
            placeholder="${this.placeholder}"
            .value="${this.value}"
            ?disabled="${this.disabled}"
            ?required="${this.required}"
            ?readonly="${this.readonly}"
            name="${this.name}"
            minlength="${o(this.minlength)}"
            maxlength="${o(this.maxlength)}"
            pattern="${o(this.pattern)}"
            step="${o(this.step)}"
            min="${o(this.min)}"
            max="${o(this.max)}"
            @input="${this._handleInput}"
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
            @change="${this._handleChange}"
          />
          ${iconElement}
        </div>

        ${this.description
            ? x `<div class="${descriptionClasses}">
              ${o$1(this.description)}
            </div>`
            : ''}
      </div>
    `;
    }
    _getIconSizeFromInputSize() {
        const sizeMap = {
            small: 'small',
            medium: 'medium',
            large: 'large',
        };
        return sizeMap[this.size];
    }
    _handleInput(event) {
        const input = event.target;
        this.value = input.value;
        this.dispatchEvent(new CustomEvent('echo-input-change', {
            detail: {
                value: this.value,
                originalEvent: event,
            },
            bubbles: true,
            composed: true,
        }));
    }
    _handleFocus(event) {
        this.dispatchEvent(new CustomEvent('echo-input-focus', {
            detail: { originalEvent: event },
            bubbles: true,
            composed: true,
        }));
    }
    _handleBlur(event) {
        this.dispatchEvent(new CustomEvent('echo-input-blur', {
            detail: { originalEvent: event },
            bubbles: true,
            composed: true,
        }));
    }
    _handleChange(event) {
        const input = event.target;
        this.value = input.value;
        this.dispatchEvent(new CustomEvent('echo-input-change', {
            detail: {
                value: this.value,
                originalEvent: event,
            },
            bubbles: true,
            composed: true,
        }));
    }
    /**
     * Handle attribute changes to reset properties to default values when attributes are removed
     */
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        // If attribute is removed (newValue is null), reset property to default value
        if (newValue === null) {
            switch (name) {
                case 'variant':
                    this.variant = 'default';
                    break;
                case 'size':
                    this.size = 'medium';
                    break;
                case 'context':
                    this.context = 'primary';
                    break;
                case 'type':
                    this.type = 'text';
                    break;
                case 'label':
                    this.label = '';
                    break;
                case 'placeholder':
                    this.placeholder = '';
                    break;
                case 'value':
                    this.value = '';
                    break;
                case 'description':
                    this.description = '';
                    break;
                case 'icon':
                    this.icon = null;
                    break;
                case 'icon-position':
                    this.iconPosition = 'left';
                    break;
                case 'icon-size':
                    this.iconSize = null;
                    break;
                case 'icon-variant':
                    this.iconVariant = null;
                    break;
                case 'disabled':
                    this.disabled = false;
                    break;
                case 'required':
                    this.required = false;
                    break;
                case 'readonly':
                    this.readonly = false;
                    break;
                case 'name':
                    this.name = '';
                    break;
                case 'id':
                    this.id = '';
                    break;
                case 'minlength':
                    this.minlength = null;
                    break;
                case 'maxlength':
                    this.maxlength = null;
                    break;
                case 'pattern':
                    this.pattern = null;
                    break;
                case 'step':
                    this.step = null;
                    break;
                case 'min':
                    this.min = null;
                    break;
                case 'max':
                    this.max = null;
                    break;
            }
        }
    }
    // Public methods
    focus() {
        const input = this.shadowRoot?.querySelector('input');
        if (input) {
            input.focus();
        }
    }
    blur() {
        const input = this.shadowRoot?.querySelector('input');
        if (input) {
            input.blur();
        }
    }
    select() {
        const input = this.shadowRoot?.querySelector('input');
        if (input) {
            input.select();
        }
    }
    get validity() {
        const input = this.shadowRoot?.querySelector('input');
        return input ? input.validity : null;
    }
    checkValidity() {
        const input = this.shadowRoot?.querySelector('input');
        return input ? input.checkValidity() : false;
    }
    reportValidity() {
        const input = this.shadowRoot?.querySelector('input');
        return input ? input.reportValidity() : false;
    }
};
EchoInput.styles = [
    contextColors,
    componentSizes,
    i$4 `
      :host {
        display: block;
        font-family:
          -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .input-container {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
      }

      .input-label {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 500;
        color: #374151;
        margin-bottom: 4px;
      }

      .input-label--required::after {
        content: '*';
        color: #ef4444;
        margin-left: 2px;
      }

      .input-field {
        width: 100%;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        padding: 12px 16px;
        font-size: 14px;
        font-family: inherit;
        background-color: white;
        color: #111827;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        outline: none;
        box-sizing: border-box;
      }

      .input-field:focus {
        border-color: var(--context-color);
        box-shadow: 0 0 0 3px var(--context-color-alpha);
      }

      .input-field:disabled {
        background-color: #f9fafb;
        color: #9ca3af;
        cursor: not-allowed;
        border-color: #e5e7eb;
      }

      .input-field:read-only {
        background-color: #f9fafb;
        cursor: default;
      }

      .input-field::placeholder {
        color: #9ca3af;
      }

      .input-icon {
        position: absolute;
        color: #6b7280;
        pointer-events: none;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        transform: translateY(-50%);
      }

      .input-icon--left {
        left: 12px;
      }

      .input-icon--right {
        right: 12px;
      }

      .input-description {
        font-size: 12px;
        color: #6b7280;
        margin-top: 2px;
        line-height: 1.4;
      }

      /* Variants */
      .input-field--default {
        border: 1px solid #d1d5db;
        background-color: white;
      }

      .input-field--outlined {
        border: 2px solid #d1d5db;
        background-color: white;
      }

      .input-field--outlined:focus {
        border-color: var(--context-color);
        box-shadow: 0 0 0 3px var(--context-color-alpha);
      }

      .input-field--filled {
        border: none;
        background-color: #f3f4f6;
        border-bottom: 2px solid #d1d5db;
        border-radius: 6px 6px 0 0;
      }

      .input-field--filled:focus {
        background-color: white;
        border-bottom-color: var(--context-color);
        box-shadow: 0 2px 0 0 var(--context-color);
      }

      .input-field--underlined {
        border: none;
        border-bottom: 2px solid #d1d5db;
        background-color: transparent;
        border-radius: 0;
        padding-left: 0;
        padding-right: 0;
      }

      .input-field--underlined:focus {
        border-bottom-color: var(--context-color);
        box-shadow: 0 2px 0 0 var(--context-color);
      }

      .input-field--underlined.input-field--with-icon {
        padding-left: 28px;
      }

      /* Sizes */
      .input-field--small {
        padding: 8px 12px;
        font-size: 13px;
      }

      .input-field--medium {
        padding: 12px 16px;
        font-size: 14px;
      }

      .input-field--large {
        padding: 16px 20px;
        font-size: 16px;
      }

      /* Icon padding overrides for different sizes */
      .input-field--small.input-field--with-icon-left {
        padding-left: 36px !important;
      }

      .input-field--small.input-field--with-icon-right {
        padding-right: 36px !important;
      }

      .input-field--medium.input-field--with-icon-left {
        padding-left: 40px !important;
      }

      .input-field--medium.input-field--with-icon-right {
        padding-right: 40px !important;
      }

      .input-field--large.input-field--with-icon-left {
        padding-left: 48px !important;
      }

      .input-field--large.input-field--with-icon-right {
        padding-right: 48px !important;
      }

      .input-label--small {
        font-size: 13px;
      }

      .input-label--large {
        font-size: 15px;
      }

      .input-description--small {
        font-size: 11px;
      }

      .input-description--large {
        font-size: 13px;
      }

      /* Icon sizing */
      .input-icon--small.input-icon--left {
        left: 10px;
      }

      .input-icon--small.input-icon--right {
        right: 10px;
      }

      .input-icon--large.input-icon--left {
        left: 14px;
      }

      .input-icon--large.input-icon--right {
        right: 14px;
      }

      /* Error state */
      .input-field--error {
        border-color: #ef4444;
      }

      .input-field--error:focus {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
      }

      .input-description--error {
        color: #ef4444;
      }

      /* Success state */
      .input-field--success {
        border-color: #10b981;
      }

      .input-field--success:focus {
        border-color: #10b981;
        box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
      }

      .input-description--success {
        color: #10b981;
      }
    `,
];
__decorate([
    n({ type: String })
], EchoInput.prototype, "variant", void 0);
__decorate([
    n({ type: String })
], EchoInput.prototype, "size", void 0);
__decorate([
    n({ type: String })
], EchoInput.prototype, "context", void 0);
__decorate([
    n({ type: String })
], EchoInput.prototype, "type", void 0);
__decorate([
    n({ type: String })
], EchoInput.prototype, "label", void 0);
__decorate([
    n({ type: String })
], EchoInput.prototype, "placeholder", void 0);
__decorate([
    n({ type: String })
], EchoInput.prototype, "value", void 0);
__decorate([
    n({ type: String })
], EchoInput.prototype, "description", void 0);
__decorate([
    n({ type: String })
], EchoInput.prototype, "icon", void 0);
__decorate([
    n({ type: String, attribute: 'icon-position' })
], EchoInput.prototype, "iconPosition", void 0);
__decorate([
    n({ type: String, attribute: 'icon-size' })
], EchoInput.prototype, "iconSize", void 0);
__decorate([
    n({ type: String, attribute: 'icon-variant' })
], EchoInput.prototype, "iconVariant", void 0);
__decorate([
    n({ type: Boolean })
], EchoInput.prototype, "disabled", void 0);
__decorate([
    n({ type: Boolean })
], EchoInput.prototype, "required", void 0);
__decorate([
    n({ type: Boolean })
], EchoInput.prototype, "readonly", void 0);
__decorate([
    n({ type: String })
], EchoInput.prototype, "name", void 0);
__decorate([
    n({ type: String })
], EchoInput.prototype, "id", void 0);
__decorate([
    n({ type: Number })
], EchoInput.prototype, "minlength", void 0);
__decorate([
    n({ type: Number })
], EchoInput.prototype, "maxlength", void 0);
__decorate([
    n({ type: String })
], EchoInput.prototype, "pattern", void 0);
__decorate([
    n({ type: Number })
], EchoInput.prototype, "step", void 0);
__decorate([
    n({ type: Number })
], EchoInput.prototype, "min", void 0);
__decorate([
    n({ type: Number })
], EchoInput.prototype, "max", void 0);
EchoInput = __decorate([
    t$1('echo-input')
], EchoInput);

let EchoSelect = class EchoSelect extends i$1 {
    constructor() {
        super(...arguments);
        this.variant = 'default';
        this.size = 'medium';
        this.context = 'primary';
        this.label = '';
        this.placeholder = '';
        this.value = '';
        this.description = '';
        this.icon = null;
        this.iconPosition = 'left';
        this.iconSize = null;
        this.iconVariant = null;
        this.disabled = false;
        this.required = false;
        this.name = '';
        this.id = '';
        this.multiple = false;
        this.options = [];
    }
    render() {
        const selectId = this.id || `echo-select-${Math.random().toString(36).substr(2, 9)}`;
        const selectClasses = [
            'select-field',
            `select-field--${this.variant}`,
            `select-field--${this.size}`,
            this.icon ? `select-field--with-icon-${this.iconPosition}` : '',
            this.disabled ? 'select-field--disabled' : '',
            this.multiple ? 'select-field--multiple' : '',
        ]
            .filter(Boolean)
            .join(' ');
        const labelClasses = [
            'select-label',
            `select-label--${this.size}`,
            this.required ? 'select-label--required' : '',
        ]
            .filter(Boolean)
            .join(' ');
        const descriptionClasses = [
            'select-description',
            `select-description--${this.size}`,
        ]
            .filter(Boolean)
            .join(' ');
        const iconElement = this.icon
            ? x `
          <echo-icon
            name=${this.icon}
            size=${this.iconSize || this._getIconSizeFromSelectSize()}
            variant=${this.iconVariant || 'default'}
            class="select-icon select-icon--${this
                .iconPosition} select-icon--${this.size}"
            style="--icon-color: #6b7280;"
          ></echo-icon>
        `
            : null;
        return x `
      <div class="select-container context--${this.context}">
        ${this.label
            ? x `
              <label for="${selectId}" class="${labelClasses}">
                ${this.label}
              </label>
            `
            : ''}

        <div class="select-wrapper">
          <select
            id="${selectId}"
            class="${selectClasses}"
            .value="${this.value}"
            ?disabled="${this.disabled}"
            ?required="${this.required}"
            ?multiple="${this.multiple}"
            name="${this.name}"
            @change="${this._handleChange}"
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
          >
            ${this.placeholder && !this.multiple
            ? x `<option value="" disabled>${this.placeholder}</option>`
            : ''}
            ${this.options.map((option) => x `
                <option
                  value="${option.value}"
                  ?disabled="${option.disabled}"
                  ?selected="${option.selected}"
                >
                  ${option.label}
                </option>
              `)}
          </select>
          ${iconElement}
        </div>

        ${this.description
            ? x `<div class="${descriptionClasses}">
              ${o$1(this.description)}
            </div>`
            : ''}
      </div>
    `;
    }
    _getIconSizeFromSelectSize() {
        const sizeMap = {
            small: 'small',
            medium: 'medium',
            large: 'large',
        };
        return sizeMap[this.size];
    }
    _handleChange(event) {
        const select = event.target;
        this.value = select.value;
        this.dispatchEvent(new CustomEvent('echo-select-change', {
            detail: {
                value: this.value,
                selectedIndex: select.selectedIndex,
                originalEvent: event,
            },
            bubbles: true,
            composed: true,
        }));
    }
    _handleFocus(event) {
        this.dispatchEvent(new CustomEvent('echo-select-focus', {
            detail: { originalEvent: event },
            bubbles: true,
            composed: true,
        }));
    }
    _handleBlur(event) {
        this.dispatchEvent(new CustomEvent('echo-select-blur', {
            detail: { originalEvent: event },
            bubbles: true,
            composed: true,
        }));
    }
    /**
     * Handle attribute changes to reset properties to default values when attributes are removed
     */
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        // If attribute is removed (newValue is null), reset property to default value
        if (newValue === null) {
            switch (name) {
                case 'variant':
                    this.variant = 'default';
                    break;
                case 'size':
                    this.size = 'medium';
                    break;
                case 'context':
                    this.context = 'primary';
                    break;
                case 'label':
                    this.label = '';
                    break;
                case 'placeholder':
                    this.placeholder = '';
                    break;
                case 'value':
                    this.value = '';
                    break;
                case 'description':
                    this.description = '';
                    break;
                case 'icon':
                    this.icon = null;
                    break;
                case 'icon-position':
                    this.iconPosition = 'left';
                    break;
                case 'icon-size':
                    this.iconSize = null;
                    break;
                case 'icon-variant':
                    this.iconVariant = null;
                    break;
                case 'disabled':
                    this.disabled = false;
                    break;
                case 'required':
                    this.required = false;
                    break;
                case 'name':
                    this.name = '';
                    break;
                case 'id':
                    this.id = '';
                    break;
                case 'multiple':
                    this.multiple = false;
                    break;
            }
        }
    }
    // Public methods
    focus() {
        const select = this.shadowRoot?.querySelector('select');
        if (select) {
            select.focus();
        }
    }
    blur() {
        const select = this.shadowRoot?.querySelector('select');
        if (select) {
            select.blur();
        }
    }
    get validity() {
        const select = this.shadowRoot?.querySelector('select');
        return select ? select.validity : null;
    }
    checkValidity() {
        const select = this.shadowRoot?.querySelector('select');
        return select ? select.checkValidity() : false;
    }
    reportValidity() {
        const select = this.shadowRoot?.querySelector('select');
        return select ? select.reportValidity() : false;
    }
    addOption(option) {
        this.options = [...this.options, option];
    }
    removeOption(value) {
        this.options = this.options.filter((option) => option.value !== value);
    }
    clearOptions() {
        this.options = [];
    }
};
EchoSelect.styles = [
    contextColors,
    componentSizes,
    i$4 `
      :host {
        display: block;
        font-family:
          -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .select-container {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .select-wrapper {
        position: relative;
        display: flex;
        align-items: center;
      }

      .select-label {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 500;
        color: #374151;
        margin-bottom: 4px;
      }

      .select-label--required::after {
        content: '*';
        color: #ef4444;
        margin-left: 2px;
      }

      .select-field {
        width: 100%;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        padding: 12px 16px;
        font-size: 14px;
        font-family: inherit;
        background-color: white;
        color: #111827;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        outline: none;
        box-sizing: border-box;
        cursor: pointer;
        appearance: none;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
        background-position: right 12px center;
        background-repeat: no-repeat;
        background-size: 16px;
        padding-right: 40px;
      }

      .select-field:focus {
        border-color: var(--context-color);
        box-shadow: 0 0 0 3px var(--context-color-alpha);
      }

      .select-field:disabled {
        background-color: #f9fafb;
        color: #9ca3af;
        cursor: not-allowed;
        border-color: #e5e7eb;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
      }

      .select-field::placeholder {
        color: #9ca3af;
      }

      .select-icon {
        position: absolute;
        color: #6b7280;
        pointer-events: none;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        transform: translateY(-50%);
      }

      .select-icon--left {
        left: 12px;
      }

      .select-icon--right {
        right: 12px;
      }

      .select-description {
        font-size: 12px;
        color: #6b7280;
        margin-top: 2px;
        line-height: 1.4;
      }

      /* Variants */
      .select-field--default {
        border: 1px solid #d1d5db;
        background-color: white;
      }

      .select-field--outlined {
        border: 2px solid #d1d5db;
        background-color: white;
      }

      .select-field--outlined:focus {
        border-color: var(--context-color);
        box-shadow: 0 0 0 3px var(--context-color-alpha);
      }

      .select-field--filled {
        border: none;
        background-color: #f3f4f6;
        border-bottom: 2px solid #d1d5db;
        border-radius: 6px 6px 0 0;
      }

      .select-field--filled:focus {
        background-color: white;
        border-bottom-color: var(--context-color);
        box-shadow: 0 2px 0 0 var(--context-color);
      }

      .select-field--underlined {
        border: none;
        border-bottom: 2px solid #d1d5db;
        background-color: transparent;
        border-radius: 0;
        padding-left: 0;
        padding-right: 0;
      }

      .select-field--underlined:focus {
        border-bottom-color: var(--context-color);
        box-shadow: 0 2px 0 0 var(--context-color);
      }

      .select-field--underlined.select-field--with-icon {
        padding-left: 28px;
      }

      /* Sizes */
      .select-field--small {
        padding: 8px 12px;
        font-size: 13px;
        padding-right: 36px;
      }

      .select-field--medium {
        padding: 12px 16px;
        font-size: 14px;
        padding-right: 40px;
      }

      .select-field--large {
        padding: 16px 20px;
        font-size: 16px;
        padding-right: 48px;
      }

      /* Icon padding overrides for different sizes */
      .select-field--small.select-field--with-icon-left {
        padding-left: 36px !important;
      }

      .select-field--small.select-field--with-icon-right {
        padding-right: 60px !important;
      }

      .select-field--medium.select-field--with-icon-left {
        padding-left: 40px !important;
      }

      .select-field--medium.select-field--with-icon-right {
        padding-right: 64px !important;
      }

      .select-field--large.select-field--with-icon-left {
        padding-left: 48px !important;
      }

      .select-field--large.select-field--with-icon-right {
        padding-right: 72px !important;
      }

      .select-label--small {
        font-size: 13px;
      }

      .select-label--large {
        font-size: 15px;
      }

      .select-description--small {
        font-size: 11px;
      }

      .select-description--large {
        font-size: 13px;
      }

      /* Icon sizing */
      .select-icon--small.select-icon--left {
        left: 10px;
      }

      .select-icon--small.select-icon--right {
        right: 10px;
      }

      .select-icon--large.select-icon--left {
        left: 14px;
      }

      .select-icon--large.select-icon--right {
        right: 14px;
      }

      /* Error state */
      .select-field--error {
        border-color: #ef4444;
      }

      .select-field--error:focus {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
      }

      .select-description--error {
        color: #ef4444;
      }

      /* Success state */
      .select-field--success {
        border-color: #10b981;
      }

      .select-field--success:focus {
        border-color: #10b981;
        box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
      }

      .select-description--success {
        color: #10b981;
      }

      /* Multiple select styling */
      .select-field--multiple {
        min-height: 40px;
        padding: 8px 12px;
      }

      .select-field--multiple option {
        padding: 8px 12px;
      }
    `,
];
__decorate([
    n({ type: String })
], EchoSelect.prototype, "variant", void 0);
__decorate([
    n({ type: String })
], EchoSelect.prototype, "size", void 0);
__decorate([
    n({ type: String })
], EchoSelect.prototype, "context", void 0);
__decorate([
    n({ type: String })
], EchoSelect.prototype, "label", void 0);
__decorate([
    n({ type: String })
], EchoSelect.prototype, "placeholder", void 0);
__decorate([
    n({ type: String })
], EchoSelect.prototype, "value", void 0);
__decorate([
    n({ type: String })
], EchoSelect.prototype, "description", void 0);
__decorate([
    n({ type: String })
], EchoSelect.prototype, "icon", void 0);
__decorate([
    n({ type: String, attribute: 'icon-position' })
], EchoSelect.prototype, "iconPosition", void 0);
__decorate([
    n({ type: String, attribute: 'icon-size' })
], EchoSelect.prototype, "iconSize", void 0);
__decorate([
    n({ type: String, attribute: 'icon-variant' })
], EchoSelect.prototype, "iconVariant", void 0);
__decorate([
    n({ type: Boolean })
], EchoSelect.prototype, "disabled", void 0);
__decorate([
    n({ type: Boolean })
], EchoSelect.prototype, "required", void 0);
__decorate([
    n({ type: String })
], EchoSelect.prototype, "name", void 0);
__decorate([
    n({ type: String })
], EchoSelect.prototype, "id", void 0);
__decorate([
    n({ type: Boolean })
], EchoSelect.prototype, "multiple", void 0);
__decorate([
    n({ type: Array })
], EchoSelect.prototype, "options", void 0);
EchoSelect = __decorate([
    t$1('echo-select')
], EchoSelect);

let EchoCheckbox = class EchoCheckbox extends i$1 {
    constructor() {
        super(...arguments);
        this.type = 'checkbox';
        this.variant = 'default';
        this.size = 'medium';
        this.context = 'primary';
        this.label = '';
        this.description = '';
        this.checked = false;
        this.disabled = false;
        this.required = false;
        this.name = '';
        this.id = '';
        this.value = '';
    }
    render() {
        const checkboxId = this.id || `echo-checkbox-${Math.random().toString(36).substr(2, 9)}`;
        const wrapperClasses = [
            'checkbox-wrapper',
            this.disabled ? 'checkbox-wrapper--disabled' : '',
        ]
            .filter(Boolean)
            .join(' ');
        const visualClasses = [
            'checkbox-visual',
            `checkbox-visual--${this.type}`,
            `checkbox-visual--${this.size}`,
            `checkbox-visual--${this.variant}`,
            this.checked ? 'checkbox-visual--checked' : '',
            this.disabled ? 'checkbox-visual--disabled' : '',
        ]
            .filter(Boolean)
            .join(' ');
        const labelClasses = [
            'checkbox-label',
            `checkbox-label--${this.size}`,
            this.required ? 'checkbox-label--required' : '',
        ]
            .filter(Boolean)
            .join(' ');
        const descriptionClasses = [
            'checkbox-description',
            `checkbox-description--${this.size}`,
        ]
            .filter(Boolean)
            .join(' ');
        const visualElement = this._renderVisualElement();
        return x `
      <div class="checkbox-container context--${this.context}">
        <div class="${wrapperClasses}" @click="${this._handleClick}">
          <input
            id="${checkboxId}"
            class="checkbox-input"
            type="${this.type === 'toggle' ? 'checkbox' : this.type}"
            ?checked="${this.checked}"
            ?disabled="${this.disabled}"
            ?required="${this.required}"
            name="${o(this.name || undefined)}"
            value="${o(this.value || undefined)}"
            @change="${this._handleChange}"
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
          />
          <div
            class="${visualClasses}"
            tabindex="0"
            role="checkbox"
            aria-checked="${this.checked}"
          >
            ${visualElement}
          </div>
          <div class="checkbox-content">
            ${this.label
            ? x `
                  <label for="${checkboxId}" class="${labelClasses}">
                    ${this.label}
                  </label>
                `
            : ''}
            ${this.description
            ? x `<div class="${descriptionClasses}">
                  ${this.description}
                </div>`
            : ''}
          </div>
        </div>
      </div>
    `;
    }
    _renderVisualElement() {
        switch (this.type) {
            case 'checkbox':
                return x `
          <echo-icon
            name="check"
            size="${this._getIconSizeFromCheckboxSize()}"
            variant="default"
            class="checkbox-checkmark"
            color="white"
            stroke-width="2"
          ></echo-icon>
        `;
            case 'radio':
                return x `<div class="checkbox-radio-dot"></div>`;
            case 'toggle':
                return x `<div class="checkbox-toggle-thumb"></div>`;
            default:
                return x `
          <echo-icon
            name="check"
            size="${this._getIconSizeFromCheckboxSize()}"
            variant="default"
            class="checkbox-checkmark"
            style="--icon-color: white;"
          ></echo-icon>
        `;
        }
    }
    _getIconSizeFromCheckboxSize() {
        const sizeMap = {
            small: 'small',
            medium: 'small', // Use smaller icon for better centering
            large: 'medium', // Use smaller icon for better centering
        };
        return sizeMap[this.size];
    }
    _handleClick(event) {
        if (this.disabled) {
            return;
        }
        event.preventDefault();
        this.checked = !this.checked;
        this._dispatchChangeEvent();
    }
    _handleChange(event) {
        const input = event.target;
        this.checked = input.checked;
        this._dispatchChangeEvent();
    }
    _handleFocus(event) {
        this.dispatchEvent(new CustomEvent('echo-checkbox-focus', {
            detail: {
                checked: this.checked,
                originalEvent: event,
            },
            bubbles: true,
            composed: true,
        }));
    }
    _handleBlur(event) {
        this.dispatchEvent(new CustomEvent('echo-checkbox-blur', {
            detail: {
                checked: this.checked,
                originalEvent: event,
            },
            bubbles: true,
            composed: true,
        }));
    }
    _dispatchChangeEvent() {
        this.dispatchEvent(new CustomEvent('echo-checkbox-change', {
            detail: {
                checked: this.checked,
                value: this.value,
                type: this.type,
            },
            bubbles: true,
            composed: true,
        }));
    }
    /**
     * Handle attribute changes to reset properties to default values when attributes are removed
     */
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        // If attribute is removed (newValue is null), reset property to default value
        if (newValue === null) {
            switch (name) {
                case 'type':
                    this.type = 'checkbox';
                    break;
                case 'variant':
                    this.variant = 'default';
                    break;
                case 'size':
                    this.size = 'medium';
                    break;
                case 'context':
                    this.context = 'primary';
                    break;
                case 'label':
                    this.label = '';
                    break;
                case 'description':
                    this.description = '';
                    break;
                case 'checked':
                    this.checked = false;
                    break;
                case 'disabled':
                    this.disabled = false;
                    break;
                case 'required':
                    this.required = false;
                    break;
                case 'name':
                    this.name = '';
                    break;
                case 'id':
                    this.id = '';
                    break;
                case 'value':
                    this.value = '';
                    break;
            }
        }
    }
    // Public methods
    focus() {
        const visual = this.shadowRoot?.querySelector('.checkbox-visual');
        if (visual) {
            visual.focus();
        }
    }
    blur() {
        const visual = this.shadowRoot?.querySelector('.checkbox-visual');
        if (visual) {
            visual.blur();
        }
    }
    click() {
        if (!this.disabled) {
            this.checked = !this.checked;
            this._dispatchChangeEvent();
        }
    }
};
EchoCheckbox.styles = [
    contextColors,
    componentSizes,
    i$4 `
      :host {
        display: block;
        font-family:
          -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .checkbox-container {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .checkbox-wrapper {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        cursor: pointer;
      }

      .checkbox-wrapper--disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }

      .checkbox-input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }

      .checkbox-visual {
        position: relative;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #d1d5db;
        background-color: white;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
      }

      .checkbox-visual--checked {
        border-color: var(--context-color);
        background-color: var(--context-color);
      }

      .checkbox-visual--disabled {
        border-color: #e5e7eb;
        background-color: #f9fafb;
        cursor: not-allowed;
      }

      .checkbox-visual--disabled.checkbox-visual--checked {
        border-color: #9ca3af;
        background-color: #9ca3af;
      }

      /* Checkbox styles */
      .checkbox-visual--checkbox {
        width: 18px;
        height: 18px;
        border-radius: 4px;
      }

      .checkbox-visual--checkbox.checkbox-visual--small {
        width: 16px;
        height: 16px;
        border-radius: 3px;
      }

      .checkbox-visual--checkbox.checkbox-visual--large {
        width: 20px;
        height: 20px;
        border-radius: 5px;
      }

      .checkbox-checkmark {
        opacity: 0;
        transform: scale(0.8);
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }

      .checkbox-checkmark echo-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        transform: translateY(-1px);
      }

      .checkbox-visual--checked .checkbox-checkmark {
        opacity: 1;
        transform: scale(1);
      }

      /* Radio styles */
      .checkbox-visual--radio {
        width: 18px;
        height: 18px;
        border-radius: 50%;
      }

      .checkbox-visual--radio.checkbox-visual--small {
        width: 16px;
        height: 16px;
      }

      .checkbox-visual--radio.checkbox-visual--large {
        width: 20px;
        height: 20px;
      }

      .checkbox-radio-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: white;
        opacity: 0;
        transform: scale(0);
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .checkbox-visual--radio.checkbox-visual--small .checkbox-radio-dot {
        width: 6px;
        height: 6px;
      }

      .checkbox-visual--radio.checkbox-visual--large .checkbox-radio-dot {
        width: 10px;
        height: 10px;
      }

      .checkbox-visual--checked .checkbox-radio-dot {
        opacity: 1;
        transform: scale(1);
      }

      /* Toggle styles */
      .checkbox-visual--toggle {
        width: 44px;
        height: 24px;
        border-radius: 12px;
        background-color: #e5e7eb;
        position: relative;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .checkbox-visual--toggle.checkbox-visual--small {
        width: 36px;
        height: 20px;
        border-radius: 10px;
      }

      .checkbox-visual--toggle.checkbox-visual--large {
        width: 52px;
        height: 28px;
        border-radius: 14px;
      }

      .checkbox-visual--toggle.checkbox-visual--checked {
        background-color: var(--context-color);
        border-color: var(--context-color);
      }

      .checkbox-toggle-thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .checkbox-visual--toggle.checkbox-visual--small .checkbox-toggle-thumb {
        width: 16px;
        height: 16px;
        top: 2px;
        left: 2px;
      }

      .checkbox-visual--toggle.checkbox-visual--large .checkbox-toggle-thumb {
        width: 24px;
        height: 24px;
        top: 2px;
        left: 2px;
      }

      .checkbox-visual--toggle.checkbox-visual--checked .checkbox-toggle-thumb {
        transform: translateX(20px);
      }

      .checkbox-visual--toggle.checkbox-visual--small.checkbox-visual--checked
        .checkbox-toggle-thumb {
        transform: translateX(16px);
      }

      .checkbox-visual--toggle.checkbox-visual--large.checkbox-visual--checked
        .checkbox-toggle-thumb {
        transform: translateX(24px);
      }

      .checkbox-content {
        display: flex;
        flex-direction: column;
        gap: 2px;
        flex: 1;
      }

      .checkbox-label {
        font-size: 14px;
        font-weight: 500;
        color: #374151;
        line-height: 1.4;
        user-select: none;
      }

      .checkbox-label--small {
        font-size: 13px;
      }

      .checkbox-label--large {
        font-size: 15px;
      }

      .checkbox-label--required::after {
        content: '*';
        color: #ef4444;
        margin-left: 2px;
      }

      .checkbox-description {
        font-size: 12px;
        color: #6b7280;
        line-height: 1.4;
      }

      .checkbox-description--small {
        font-size: 11px;
      }

      .checkbox-description--large {
        font-size: 13px;
      }

      /* Focus styles */
      .checkbox-visual:focus-within {
        outline: 2px solid var(--context-color);
        outline-offset: 2px;
      }

      /* Variants */
      .checkbox-visual--outlined {
        border-width: 2px;
      }

      .checkbox-visual--filled {
        background-color: #f3f4f6;
        border-color: #d1d5db;
      }

      .checkbox-visual--filled.checkbox-visual--checked {
        background-color: var(--context-color);
        border-color: var(--context-color);
      }
    `,
];
__decorate([
    n({ type: String })
], EchoCheckbox.prototype, "type", void 0);
__decorate([
    n({ type: String })
], EchoCheckbox.prototype, "variant", void 0);
__decorate([
    n({ type: String })
], EchoCheckbox.prototype, "size", void 0);
__decorate([
    n({ type: String })
], EchoCheckbox.prototype, "context", void 0);
__decorate([
    n({ type: String })
], EchoCheckbox.prototype, "label", void 0);
__decorate([
    n({ type: String })
], EchoCheckbox.prototype, "description", void 0);
__decorate([
    n({ type: Boolean })
], EchoCheckbox.prototype, "checked", void 0);
__decorate([
    n({ type: Boolean })
], EchoCheckbox.prototype, "disabled", void 0);
__decorate([
    n({ type: Boolean })
], EchoCheckbox.prototype, "required", void 0);
__decorate([
    n({ type: String })
], EchoCheckbox.prototype, "name", void 0);
__decorate([
    n({ type: String })
], EchoCheckbox.prototype, "id", void 0);
__decorate([
    n({ type: String })
], EchoCheckbox.prototype, "value", void 0);
EchoCheckbox = __decorate([
    t$1('echo-checkbox')
], EchoCheckbox);

let EchoPop = class EchoPop extends i$1 {
    constructor() {
        super(...arguments);
        this.variant = 'default';
        this.size = 'medium';
        this.context = 'primary';
        this.placement = 'auto';
        this.trigger = 'click';
        this.open = false;
        this.dismissible = true;
        this.persistent = false;
        this.title = '';
        this.content = '';
        this.icon = null;
        this.iconSize = null;
        this.iconVariant = null;
        this.anchorSelector = '';
        this._isVisible = false;
        this._position = { x: 0, y: 0, placement: 'bottom' };
        this._isMouseOverPopup = false;
        this._anchorElement = null;
        this._portalElement = null;
        this._resizeObserver = null;
        this._scrollListener = null;
        this._previousFocus = null;
        this._handleTriggerClick = () => {
            if (this.trigger === 'click' || this.trigger === 'manual') {
                this.toggle();
            }
        };
        this._handleTriggerMouseEnter = () => {
            if (this.trigger === 'hover') {
                this.show();
            }
        };
        this._handleTriggerMouseLeave = () => {
            if (this.trigger === 'hover') {
                // Add a small delay to prevent flickering when moving to popup content
                setTimeout(() => {
                    if (!this._isMouseOverPopup) {
                        this.hide();
                    }
                }, 100);
            }
        };
        this._handlePopupMouseEnter = () => {
            if (this.trigger === 'hover') {
                this._isMouseOverPopup = true;
            }
        };
        this._handlePopupMouseLeave = () => {
            if (this.trigger === 'hover') {
                this._isMouseOverPopup = false;
                this.hide();
            }
        };
        this._handleKeydown = (event) => {
            if (!this._isVisible)
                return;
            if (event.key === 'Escape' && this.dismissible) {
                this._handleClose();
            }
        };
        this._handleOutsideClick = (event) => {
            if (!this._isVisible || this.persistent)
                return;
            const target = event.target;
            const isInsidePop = this.shadowRoot?.contains(target) || this.contains(target);
            if (!isInsidePop) {
                this._handleClose();
            }
        };
        this._handlePortalClick = (event) => {
            if (this.persistent)
                return;
            const target = event.target;
            if (target.classList.contains('pop-portal')) {
                this._handleClose();
            }
        };
        this._handleContentClick = (event) => {
            // Prevent event bubbling for content clicks
            event.stopPropagation();
        };
        this._handleClose = () => {
            this.open = false;
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this._setupEventListeners();
        this._setupResizeObserver();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._cleanupEventListeners();
        this._cleanupResizeObserver();
        this._removePortal();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('open')) {
            this._handleOpenChange();
        }
        if (changedProperties.has('anchorSelector')) {
            this._updateAnchorElement();
        }
    }
    render() {
        return x `
      <slot
        name="trigger"
        @click="${this._handleTriggerClick}"
        @mouseenter="${this._handleTriggerMouseEnter}"
        @mouseleave="${this._handleTriggerMouseLeave}"
      ></slot>
      ${this._isVisible ? this._renderPortal() : ''}
    `;
    }
    _renderPortal() {
        if (this.variant === 'modal') {
            return this._renderModalPortal();
        }
        return this._renderPopupPortal();
    }
    _renderModalPortal() {
        const classes = [
            'pop-content',
            'pop-content--modal',
            `pop-content--${this.size}`,
            `context--${this.context}`,
        ];
        if (this._isVisible) {
            classes.push('pop-content--visible');
        }
        return x `
      <div
        class="pop-portal pop-portal--modal"
        @click="${this._handlePortalClick}"
      >
        <div
          class="${classes.join(' ')}"
          @click="${this._handleContentClick}"
          @mouseenter="${this._handlePopupMouseEnter}"
          @mouseleave="${this._handlePopupMouseLeave}"
        >
          ${this._renderHeader()} ${this._renderBody()} ${this._renderFooter()}
        </div>
      </div>
    `;
    }
    _renderPopupPortal() {
        const classes = [
            'pop-content',
            `pop-content--${this.variant}`,
            `pop-content--${this.size}`,
            `context--${this.context}`,
        ];
        if (this._isVisible) {
            classes.push('pop-content--visible');
        }
        return x `
      <div class="pop-portal">
        <div
          class="${classes.join(' ')}"
          data-placement="${this._position.placement}"
          style="left: ${this._position.x}px; top: ${this._position.y}px;"
          @click="${this._handleContentClick}"
          @mouseenter="${this._handlePopupMouseEnter}"
          @mouseleave="${this._handlePopupMouseLeave}"
        >
          ${this._renderHeader()} ${this._renderBody()} ${this._renderFooter()}
        </div>
      </div>
    `;
    }
    _renderHeader() {
        if (!this.title && !this.icon)
            return x ``;
        return x `
      <div class="pop-header">
        <div class="pop-header-content">
          ${this.icon
            ? x `
                <echo-icon
                  name="${this.icon}"
                  size="${this.iconSize || 'medium'}"
                  variant="${this.iconVariant || 'default'}"
                ></echo-icon>
              `
            : ''}
          ${this.title ? x `<h3 class="pop-title">${this.title}</h3>` : ''}
        </div>
        ${this.dismissible
            ? x `
              <echo-button
                @click="${this._handleClose}"
                aria-label="Close"
                variant="ghost"
                size="small"
                icon="x"
              ></echo-button>
            `
            : ''}
      </div>
    `;
    }
    _renderBody() {
        const hasHeader = this.title || this.icon;
        const hasFooter = this._hasFooterSlot();
        const bodyClasses = ['pop-body'];
        if (!hasHeader) {
            bodyClasses.push('pop-body--no-header');
        }
        if (!hasFooter) {
            bodyClasses.push('pop-body--no-footer');
        }
        return x `
      <div class="${bodyClasses.join(' ')}">
        ${this.content ? x `<p>${this.content}</p>` : ''}
        <slot></slot>
      </div>
    `;
    }
    _renderFooter() {
        if (!this._hasFooterSlot())
            return x ``;
        return x `
      <div class="pop-footer">
        <slot name="footer"></slot>
      </div>
    `;
    }
    _hasFooterSlot() {
        return this.querySelector('[slot="footer"]') !== null;
    }
    _handleOpenChange() {
        if (this.open) {
            this._show();
        }
        else {
            this._hide();
        }
    }
    _show() {
        // Store current focus
        this._previousFocus = document.activeElement;
        // Step 1: Make popup visible in DOM but not animated (opacity: 0)
        this._isVisible = true;
        // Step 2: Force a reflow to ensure popup is rendered
        requestAnimationFrame(() => {
            // Step 3: Calculate position with real dimensions
            this._updatePosition();
            // Step 4: Start fade in animation
            requestAnimationFrame(() => {
                // The CSS transition will handle the fade in
            });
        });
        this.dispatchEvent(new CustomEvent('echo-pop-open', {
            detail: { placement: this._position.placement },
            bubbles: true,
            composed: true,
        }));
        // Focus management
        this._trapFocus();
    }
    _hide() {
        this._isVisible = false;
        this.dispatchEvent(new CustomEvent('echo-pop-close', {
            bubbles: true,
            composed: true,
        }));
        // Restore focus
        this._restoreFocus();
    }
    _updatePosition() {
        if (this.variant === 'modal') {
            return; // Modal doesn't need positioning
        }
        // Find anchor element
        if (!this._anchorElement) {
            if (this.anchorSelector) {
                this._anchorElement = document.querySelector(this.anchorSelector);
            }
            else {
                // Use the trigger slot element
                const triggerSlot = this.querySelector('[slot="trigger"]');
                this._anchorElement = triggerSlot;
            }
        }
        if (!this._anchorElement) {
            console.warn('EchoPop: No anchor element found');
            return;
        }
        const anchorRect = this._anchorElement.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        // Get popup size - now the popup is in DOM so we can get real dimensions
        const popupElement = this.shadowRoot?.querySelector('.pop-content');
        const popupSize = popupElement
            ? {
                width: popupElement.offsetWidth,
                height: popupElement.offsetHeight,
            }
            : { width: 200, height: 100 };
        // Calculate optimal placement with collision detection
        const computedPlacement = this._calculateOptimalPlacement(anchorRect, viewportWidth, viewportHeight, popupSize);
        // Calculate position based on computed placement
        let x = 0;
        let y = 0;
        switch (computedPlacement) {
            case 'top':
                x = anchorRect.left + anchorRect.width / 2;
                y = anchorRect.top - popupSize.height - 8;
                break;
            case 'bottom':
                x = anchorRect.left + anchorRect.width / 2;
                y = anchorRect.bottom + 8;
                break;
            case 'left':
                x = anchorRect.left - popupSize.width - 8;
                y = anchorRect.top + anchorRect.height / 2;
                break;
            case 'right':
                x = anchorRect.right + 8;
                y = anchorRect.top + anchorRect.height / 2;
                break;
            default:
                x = anchorRect.left + anchorRect.width / 2;
                y = anchorRect.bottom + 8;
        }
        // Adjust position if popup would go outside viewport
        const adjustedPosition = this._adjustPositionForViewport({ x, y, placement: computedPlacement }, popupSize, viewportWidth, viewportHeight);
        this._position = adjustedPosition;
    }
    _calculateOptimalPlacement(anchorRect, viewportWidth, viewportHeight, popupSize) {
        if (this.placement !== 'auto') {
            return this.placement;
        }
        // Estimate popup size if not provided
        const estimatedPopupSize = popupSize || { width: 200, height: 100 };
        const margin = 16; // Minimum margin from viewport edge
        const spaceAbove = anchorRect.top - margin;
        const spaceBelow = viewportHeight - anchorRect.bottom - margin;
        const spaceLeft = anchorRect.left - margin;
        const spaceRight = viewportWidth - anchorRect.right - margin;
        // Check if popup fits in each direction
        const fitsAbove = spaceAbove >= estimatedPopupSize.height;
        const fitsBelow = spaceBelow >= estimatedPopupSize.height;
        const fitsLeft = spaceLeft >= estimatedPopupSize.width;
        const fitsRight = spaceRight >= estimatedPopupSize.width;
        // Smart placement logic
        // 1. If both vertical directions fit, prefer bottom
        if (fitsAbove && fitsBelow)
            return 'bottom';
        // 2. If both horizontal directions fit, prefer right
        if (fitsLeft && fitsRight)
            return 'right';
        // 3. Choose the direction that fits
        if (fitsBelow)
            return 'bottom';
        if (fitsAbove)
            return 'top';
        if (fitsRight)
            return 'right';
        if (fitsLeft)
            return 'left';
        // 4. Fallback: choose placement with most space
        const maxSpace = Math.max(spaceAbove, spaceBelow, spaceLeft, spaceRight);
        if (maxSpace === spaceAbove)
            return 'top';
        if (maxSpace === spaceBelow)
            return 'bottom';
        if (maxSpace === spaceLeft)
            return 'left';
        return 'right';
    }
    _adjustPositionForViewport(position, popupSize, viewportWidth, viewportHeight) {
        if (!popupSize || !viewportWidth || !viewportHeight) {
            return position;
        }
        const margin = 16;
        let { x, y, placement } = position;
        // Adjust horizontal position
        if (placement === 'top' || placement === 'bottom') {
            const halfWidth = popupSize.width / 2;
            if (x - halfWidth < margin) {
                x = margin + halfWidth;
            }
            else if (x + halfWidth > viewportWidth - margin) {
                x = viewportWidth - margin - halfWidth;
            }
        }
        // Adjust vertical position
        if (placement === 'left' || placement === 'right') {
            const halfHeight = popupSize.height / 2;
            if (y - halfHeight < margin) {
                y = margin + halfHeight;
            }
            else if (y + halfHeight > viewportHeight - margin) {
                y = viewportHeight - margin - halfHeight;
            }
        }
        return { x, y, placement };
    }
    _updateAnchorElement() {
        if (this.anchorSelector) {
            this._anchorElement = document.querySelector(this.anchorSelector);
        }
        else {
            this._anchorElement = null;
        }
    }
    _setupEventListeners() {
        // Keyboard events
        document.addEventListener('keydown', this._handleKeydown);
        // Click outside
        document.addEventListener('click', this._handleOutsideClick);
        // Scroll events for position updates
        this._scrollListener = () => this._updatePosition();
        window.addEventListener('scroll', this._scrollListener, true);
    }
    _cleanupEventListeners() {
        document.removeEventListener('keydown', this._handleKeydown);
        document.removeEventListener('click', this._handleOutsideClick);
        if (this._scrollListener) {
            window.removeEventListener('scroll', this._scrollListener, true);
        }
    }
    _setupResizeObserver() {
        if (typeof ResizeObserver !== 'undefined') {
            this._resizeObserver = new ResizeObserver(() => {
                this._updatePosition();
            });
            if (this._anchorElement) {
                this._resizeObserver.observe(this._anchorElement);
            }
        }
    }
    _cleanupResizeObserver() {
        if (this._resizeObserver) {
            this._resizeObserver.disconnect();
        }
    }
    _removePortal() {
        if (this._portalElement) {
            this._portalElement.remove();
            this._portalElement = null;
        }
    }
    _trapFocus() {
        // Simple focus trap - can be enhanced
        const focusableElements = this.shadowRoot?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }
    _restoreFocus() {
        // Restore focus to previous element
        if (this._previousFocus) {
            this._previousFocus.focus();
            this._previousFocus = null;
        }
    }
    // Public methods
    show() {
        this.open = true;
    }
    hide() {
        this.open = false;
    }
    toggle() {
        this.open = !this.open;
    }
    updatePosition() {
        this._updatePosition();
    }
};
EchoPop.styles = [
    contextColors,
    componentSizes,
    i$4 `
      :host {
        display: inline-block;
        position: relative;
        font-family:
          -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      /* Portal container for popup content */
      .pop-portal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        pointer-events: none;
      }

      .pop-portal--modal {
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(2px);
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: auto;
      }

      /* Popup content */
      .pop-content {
        position: fixed;
        z-index: 1001;
        background: white;
        border-radius: 8px;
        box-shadow:
          0 4px 6px rgba(0, 0, 0, 0.07),
          0 2px 4px rgba(0, 0, 0, 0.06);
        border: 1px solid rgba(0, 0, 0, 0.06);
        opacity: 0;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: auto;
        overflow: hidden;
        max-width: 90vw;
        max-height: 90vh;
      }

      .pop-content--visible {
        opacity: 1;
      }

      .pop-content--animating {
        transition-duration: var(--animation-duration, 200ms);
      }

      /* Variants */
      .pop-content--default {
        background: white;
        border: 1px solid rgba(0, 0, 0, 0.06);
        box-shadow:
          0 4px 6px rgba(0, 0, 0, 0.07),
          0 2px 4px rgba(0, 0, 0, 0.06);
      }

      .pop-content--overlay {
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(4px);
        border: none;
        box-shadow:
          0 8px 25px rgba(0, 0, 0, 0.12),
          0 3px 10px rgba(0, 0, 0, 0.08);
        color: white;
      }

      .pop-content--tooltip {
        background: #1f2937;
        color: white;
        border: none;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        font-size: 12px;
        padding: 6px 8px;
        border-radius: 4px;
        max-width: 200px;
      }

      .pop-content--dropdown {
        background: white;
        border: 1px solid #e5e7eb;
        box-shadow:
          0 10px 15px rgba(0, 0, 0, 0.1),
          0 4px 6px rgba(0, 0, 0, 0.05);
        border-radius: 6px;
        min-width: 120px;
      }

      .pop-content--modal {
        background: white;
        border: none;
        box-shadow:
          0 20px 25px rgba(0, 0, 0, 0.1),
          0 10px 10px rgba(0, 0, 0, 0.04);
        border-radius: 12px;
        max-width: 90vw;
        max-height: 90vh;
        position: relative;
        transform: none;
      }

      /* Sizes */
      .pop-content--small {
        font-size: 13px;
        min-width: 80px;
      }

      .pop-content--medium {
        font-size: 14px;
        min-width: 120px;
      }

      .pop-content--large {
        font-size: 16px;
        min-width: 200px;
      }

      .pop-content--auto {
        font-size: 14px;
        width: max-content;
        max-width: 300px;
      }

      /* Header */
      .pop-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        background-color: rgba(0, 0, 0, 0.01);
      }

      .pop-header-content {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
      }

      .pop-header-content echo-icon {
        flex-shrink: 0;
        margin-top: 1px; /* Fine adjustment for visual alignment */
      }

      .pop-title {
        font-size: 16px;
        font-weight: 500;
        color: #1a1a1a;
        margin: 0;
        line-height: 1.3;
      }

      /* Content */
      .pop-body {
        padding: 12px 16px;
        color: #4a4a4a;
        line-height: 1.6;
      }

      .pop-body--no-header {
        padding-top: 16px;
      }

      .pop-body--no-footer {
        padding-bottom: 16px;
      }

      /* Footer */
      .pop-footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 12px 16px;
        gap: 8px;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        background-color: rgba(0, 0, 0, 0.01);
      }

      .pop-footer[hidden] {
        display: none;
      }

      /* Placement-specific transform origins and centering */
      .pop-content[data-placement='top'] {
        transform-origin: center bottom;
        transform: translateX(-50%) scale(0.95);
      }

      .pop-content[data-placement='bottom'] {
        transform-origin: center top;
        transform: translateX(-50%) scale(0.95);
      }

      .pop-content[data-placement='left'] {
        transform-origin: right center;
        transform: translateY(-50%) scale(0.95);
      }

      .pop-content[data-placement='right'] {
        transform-origin: left center;
        transform: translateY(-50%) scale(0.95);
      }

      /* Simple fade animation */
      .pop-content {
        opacity: 0;
        transition: opacity 0.15s ease-in-out;
      }

      .pop-content--visible {
        opacity: 1;
      }

      /* Context colors */
      .pop-content.context--primary {
        --context-color: #3b82f6;
        --context-color-alpha: rgba(59, 130, 246, 0.1);
        border-left: 4px solid var(--context-color);
      }

      .pop-content.context--primary .pop-title {
        color: var(--context-color);
      }

      .pop-content.context--primary .pop-header {
        background-color: var(--context-color-alpha);
      }

      .pop-content.context--secondary {
        --context-color: #6b7280;
        --context-color-alpha: rgba(107, 114, 128, 0.1);
        border-left: 4px solid var(--context-color);
      }

      .pop-content.context--secondary .pop-title {
        color: var(--context-color);
      }

      .pop-content.context--secondary .pop-header {
        background-color: var(--context-color-alpha);
      }

      .pop-content.context--success {
        --context-color: #10b981;
        --context-color-alpha: rgba(16, 185, 129, 0.1);
        border-left: 4px solid var(--context-color);
      }

      .pop-content.context--success .pop-title {
        color: var(--context-color);
      }

      .pop-content.context--success .pop-header {
        background-color: var(--context-color-alpha);
      }

      .pop-content.context--warning {
        --context-color: #f59e0b;
        --context-color-alpha: rgba(245, 158, 11, 0.1);
        border-left: 4px solid var(--context-color);
      }

      .pop-content.context--warning .pop-title {
        color: var(--context-color);
      }

      .pop-content.context--warning .pop-header {
        background-color: var(--context-color-alpha);
      }

      .pop-content.context--danger {
        --context-color: #ef4444;
        --context-color-alpha: rgba(239, 68, 68, 0.1);
        border-left: 4px solid var(--context-color);
      }

      .pop-content.context--danger .pop-title {
        color: var(--context-color);
      }

      .pop-content.context--danger .pop-header {
        background-color: var(--context-color-alpha);
      }

      .pop-content.context--info {
        --context-color: #3b82f6;
        --context-color-alpha: rgba(59, 130, 246, 0.1);
        border-left: 4px solid var(--context-color);
      }

      .pop-content.context--info .pop-title {
        color: var(--context-color);
      }

      .pop-content.context--info .pop-header {
        background-color: var(--context-color-alpha);
      }
    `,
];
__decorate([
    n({ type: String })
], EchoPop.prototype, "variant", void 0);
__decorate([
    n({ type: String })
], EchoPop.prototype, "size", void 0);
__decorate([
    n({ type: String })
], EchoPop.prototype, "context", void 0);
__decorate([
    n({ type: String })
], EchoPop.prototype, "placement", void 0);
__decorate([
    n({ type: String })
], EchoPop.prototype, "trigger", void 0);
__decorate([
    n({ type: Boolean })
], EchoPop.prototype, "open", void 0);
__decorate([
    n({ type: Boolean })
], EchoPop.prototype, "dismissible", void 0);
__decorate([
    n({ type: Boolean })
], EchoPop.prototype, "persistent", void 0);
__decorate([
    n({ type: String })
], EchoPop.prototype, "title", void 0);
__decorate([
    n({ type: String })
], EchoPop.prototype, "content", void 0);
__decorate([
    n({ type: String })
], EchoPop.prototype, "icon", void 0);
__decorate([
    n({ type: String, attribute: 'icon-size' })
], EchoPop.prototype, "iconSize", void 0);
__decorate([
    n({ type: String, attribute: 'icon-variant' })
], EchoPop.prototype, "iconVariant", void 0);
__decorate([
    n({ type: String, attribute: 'anchor-selector' })
], EchoPop.prototype, "anchorSelector", void 0);
__decorate([
    r()
], EchoPop.prototype, "_isVisible", void 0);
__decorate([
    r()
], EchoPop.prototype, "_position", void 0);
__decorate([
    r()
], EchoPop.prototype, "_isMouseOverPopup", void 0);
EchoPop = __decorate([
    t$1('echo-pop')
], EchoPop);

/**
 * Icon system types for Design Toolkit
 *
 * This module defines the types and constants for the icon system,
 * including icon names, sizes, and variants.
 */
/**
 * Available icon size names
 */
const echoIconSizeNames = ['small', 'medium', 'large'];
/**
 * Available icon variant names
 */
const echoIconVariantNames = ['default', 'outline', 'filled'];
/**
 * Icon names for the icon library
 * These represent the available icons in the system
 */
const iconNames = [
    // Navigation & Arrows
    'arrow-left',
    'arrow-right',
    'arrow-up',
    'arrow-down',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'chevron-down',
    'menu',
    'x',
    'search',
    'filter',
    'more-horizontal',
    'more-vertical',
    // Actions
    'plus',
    'minus',
    'edit',
    'trash',
    'save',
    'check',
    'refresh',
    'copy',
    'download',
    'upload',
    'share',
    'link',
    'external-link',
    // Media & Files
    'image',
    'file',
    'folder',
    'folder-open',
    'video',
    'music',
    'camera',
    // Communication
    'mail',
    'phone',
    'message-circle',
    'bell',
    'heart',
    'star',
    // Settings & Tools
    'settings',
    'user',
    'users',
    'lock',
    'unlock',
    // Status & Feedback
    'check-circle',
    'x-circle',
    'alert-circle',
    'info',
    // Technology
    'wifi',
    'battery',
    'power',
    'play',
    'pause',
    'stop',
    'volume',
    'volume-off',
    // Weather & Nature
    'sun',
    'moon',
    'cloud',
    'droplet',
    // Business & Finance
    'dollar-sign',
    'credit-card',
    'shopping-cart',
    'home',
    // Data & Analytics
    'bar-chart',
    'pie-chart',
    'calendar',
    'clock',
    // Additional Navigation & UI
    'grid',
    'list',
    'layout',
    'sidebar',
    'panel-left',
    'panel-right',
    'sidebar-open',
    'sidebar-close',
    'maximize',
    'minimize',
    'maximize-2',
    'minimize-2',
    // Additional Actions
    'undo',
    'redo',
    'cut',
    'paste',
    'scissors',
    'move',
    'rotate-cw',
    'rotate-ccw',
    'zoom-in',
    'zoom-out',
    // Additional Media & Files
    'folder-plus',
    'folder-minus',
    'file-plus',
    'file-minus',
    'file-text',
    'file-image',
    'file-video',
    'file-audio',
    'archive',
    'package',
    // Additional Communication
    'mail-open',
    'mail-check',
    'mail-plus',
    'message-square',
    'message-square-plus',
    'send',
    'reply',
    'forward',
    'at-sign',
    'hash',
    // Additional Settings & Tools
    'tool',
    'wrench',
    'hammer',
    'screwdriver',
    'key',
    'shield',
    'shield-check',
    'shield-alert',
    'shield-x',
];

// Export arrays of values for runtime use
const echoButtonVariantNames = [
    'default',
    'link',
    'outline',
    'ghost',
    'soft',
];
const echoLinkVariantNames = echoButtonVariantNames;
const echoLinkTargetNames = [
    '_blank',
    '_self',
    '_parent',
    '_top',
];
const echoLinkRelNames = [
    'noopener',
    'noreferrer',
    'noopener noreferrer',
];
const echoSizeNames = ['xs', 'small', 'medium', 'large'];
const echoContextNames = [
    'default',
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
];

export { EchoButton, EchoCard, EchoCheckbox, EchoIcon, EchoInput, EchoLayout, EchoLink, EchoPop, EchoSelect, EchoSeparator, clearIconRegistry, componentSizeNames, componentSizes, componentSizesCSS, contextColorNames, contextColors, contextColorsCSS, echoButtonVariantNames, echoContextNames, echoIconSizeNames, echoIconVariantNames, echoLinkRelNames, echoLinkTargetNames, echoLinkVariantNames, echoSizeNames, getAvailableIconNames, getLoadedIcons, iconNames, layoutStyles, layoutStylesCSS, loadIcon, preloadIcons };
//# sourceMappingURL=design-toolkit.esm.bundled.js.map

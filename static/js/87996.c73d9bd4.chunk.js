"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[87996],{87996:(e,t,n)=>{n.r(t),n.d(t,{code:()=>Ct,decode:()=>It,encode:()=>xt,name:()=>At});const r=["string","number","bigint","symbol"],o=["Function","Generator","AsyncGenerator","GeneratorFunction","AsyncGeneratorFunction","AsyncFunction","Observable","Array","Buffer","Object","RegExp","Date","Error","Map","Set","WeakMap","WeakSet","ArrayBuffer","SharedArrayBuffer","DataView","Promise","URL","HTMLElement","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","BigInt64Array","BigUint64Array"];function i(e){if(null===e)return"null";if(void 0===e)return"undefined";if(!0===e||!1===e)return"boolean";const t=typeof e;if(r.includes(t))return t;if("function"===t)return"Function";if(Array.isArray(e))return"Array";if(function(e){return e&&e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer.call(null,e)}(e))return"Buffer";const n=function(e){const t=Object.prototype.toString.call(e).slice(8,-1);if(o.includes(t))return t;return}(e);return n||"Object"}class s{constructor(e,t,n){this.major=e,this.majorEncoded=e<<5,this.name=t,this.terminal=n}toString(){return`Type[${this.major}].${this.name}`}compare(e){return this.major<e.major?-1:this.major>e.major?1:0}}s.uint=new s(0,"uint",!0),s.negint=new s(1,"negint",!0),s.bytes=new s(2,"bytes",!0),s.string=new s(3,"string",!0),s.array=new s(4,"array",!1),s.map=new s(5,"map",!1),s.tag=new s(6,"tag",!1),s.float=new s(7,"float",!0),s.false=new s(7,"false",!0),s.true=new s(7,"true",!0),s.null=new s(7,"null",!0),s.undefined=new s(7,"undefined",!0),s.break=new s(7,"break",!0);class a{constructor(e,t,n){this.type=e,this.value=t,this.encodedLength=n,this.encodedBytes=void 0,this.byteValue=void 0}toString(){return`Token[${this.type}].${this.value}`}}const u=globalThis.process&&!globalThis.process.browser&&globalThis.Buffer&&"function"===typeof globalThis.Buffer.isBuffer,c=new TextDecoder,f=new TextEncoder;function l(e){return u&&globalThis.Buffer.isBuffer(e)}function h(e){return e instanceof Uint8Array?l(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e:Uint8Array.from(e)}const d=u?(e,t,n)=>n-t>64?globalThis.Buffer.from(e.subarray(t,n)).toString("utf8"):v(e,t,n):(e,t,n)=>n-t>64?c.decode(e.subarray(t,n)):v(e,t,n),p=u?e=>e.length>64?globalThis.Buffer.from(e):m(e):e=>e.length>64?f.encode(e):m(e),w=e=>Uint8Array.from(e),g=u?(e,t,n)=>l(e)?new Uint8Array(e.subarray(t,n)):e.slice(t,n):(e,t,n)=>e.slice(t,n),y=u?(e,t)=>(e=e.map((e=>e instanceof Uint8Array?e:globalThis.Buffer.from(e))),h(globalThis.Buffer.concat(e,t))):(e,t)=>{const n=new Uint8Array(t);let r=0;for(let o of e)r+o.length>n.length&&(o=o.subarray(0,n.length-r)),n.set(o,r),r+=o.length;return n},b=u?e=>globalThis.Buffer.allocUnsafe(e):e=>new Uint8Array(e);function m(e,t=1/0){let n;const r=e.length;let o=null;const i=[];for(let s=0;s<r;++s){if(n=e.charCodeAt(s),n>55295&&n<57344){if(!o){if(n>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(s+1===r){(t-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(t-=3)>-1&&i.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((t-=1)<0)break;i.push(n)}else if(n<2048){if((t-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function v(e,t,n){const r=[];for(;t<n;){const o=e[t];let i=null,s=o>239?4:o>223?3:o>191?2:1;if(t+s<=n){let n,r,a,u;switch(s){case 1:o<128&&(i=o);break;case 2:n=e[t+1],128===(192&n)&&(u=(31&o)<<6|63&n,u>127&&(i=u));break;case 3:n=e[t+1],r=e[t+2],128===(192&n)&&128===(192&r)&&(u=(15&o)<<12|(63&n)<<6|63&r,u>2047&&(u<55296||u>57343)&&(i=u));break;case 4:n=e[t+1],r=e[t+2],a=e[t+3],128===(192&n)&&128===(192&r)&&128===(192&a)&&(u=(15&o)<<18|(63&n)<<12|(63&r)<<6|63&a,u>65535&&u<1114112&&(i=u))}}null===i?(i=65533,s=1):i>65535&&(i-=65536,r.push(i>>>10&1023|55296),i=56320|1023&i),r.push(i),t+=s}return function(e){const t=e.length;if(t<=E)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=E));return n}(r)}const E=4096;class k{constructor(e=256){this.chunkSize=e,this.cursor=0,this.maxCursor=-1,this.chunks=[],this._initReuseChunk=null}reset(){this.cursor=0,this.maxCursor=-1,this.chunks.length&&(this.chunks=[]),null!==this._initReuseChunk&&(this.chunks.push(this._initReuseChunk),this.maxCursor=this._initReuseChunk.length-1)}push(e){let t=this.chunks[this.chunks.length-1];if(this.cursor+e.length<=this.maxCursor+1){const n=t.length-(this.maxCursor-this.cursor)-1;t.set(e,n)}else{if(t){const e=t.length-(this.maxCursor-this.cursor)-1;e<t.length&&(this.chunks[this.chunks.length-1]=t.subarray(0,e),this.maxCursor=this.cursor-1)}e.length<64&&e.length<this.chunkSize?(t=b(this.chunkSize),this.chunks.push(t),this.maxCursor+=t.length,null===this._initReuseChunk&&(this._initReuseChunk=t),t.set(e,0)):(this.chunks.push(e),this.maxCursor+=e.length)}this.cursor+=e.length}toBytes(e=!1){let t;if(1===this.chunks.length){const n=this.chunks[0];e&&this.cursor>n.length/2?(t=this.cursor===n.length?n:n.subarray(0,this.cursor),this._initReuseChunk=null,this.chunks=[]):t=g(n,0,this.cursor)}else t=y(this.chunks,this.cursor);return e&&this.reset(),t}}const A="CBOR decode error:",C="CBOR encode error:",x=[];function I(e,t,n){if(e.length-t<n)throw new Error(`${A} not enough data for type`)}x[23]=1,x[24]=2,x[25]=3,x[26]=5,x[27]=9;const $=[24,256,65536,4294967296,BigInt("18446744073709551616")];function U(e,t,n){I(e,t,1);const r=e[t];if(!0===n.strict&&r<$[0])throw new Error(`${A} integer encoded in more bytes than necessary (strict decode)`);return r}function B(e,t,n){I(e,t,2);const r=e[t]<<8|e[t+1];if(!0===n.strict&&r<$[1])throw new Error(`${A} integer encoded in more bytes than necessary (strict decode)`);return r}function S(e,t,n){I(e,t,4);const r=16777216*e[t]+(e[t+1]<<16)+(e[t+2]<<8)+e[t+3];if(!0===n.strict&&r<$[2])throw new Error(`${A} integer encoded in more bytes than necessary (strict decode)`);return r}function N(e,t,n){I(e,t,8);const r=16777216*e[t]+(e[t+1]<<16)+(e[t+2]<<8)+e[t+3],o=16777216*e[t+4]+(e[t+5]<<16)+(e[t+6]<<8)+e[t+7],i=(BigInt(r)<<BigInt(32))+BigInt(o);if(!0===n.strict&&i<$[3])throw new Error(`${A} integer encoded in more bytes than necessary (strict decode)`);if(i<=Number.MAX_SAFE_INTEGER)return Number(i);if(!0===n.allowBigInt)return i;throw new Error(`${A} integers outside of the safe integer range are not supported`)}function j(e,t){return T(e,0,t.value)}function T(e,t,n){if(n<$[0]){const r=Number(n);e.push([t|r])}else if(n<$[1]){const r=Number(n);e.push([24|t,r])}else if(n<$[2]){const r=Number(n);e.push([25|t,r>>>8,255&r])}else if(n<$[3]){const r=Number(n);e.push([26|t,r>>>24&255,r>>>16&255,r>>>8&255,255&r])}else{const r=BigInt(n);if(!(r<$[4]))throw new Error(`${A} encountered BigInt larger than allowable range`);{const n=[27|t,0,0,0,0,0,0,0];let o=Number(r&BigInt(4294967295)),i=Number(r>>BigInt(32)&BigInt(4294967295));n[8]=255&o,o>>=8,n[7]=255&o,o>>=8,n[6]=255&o,o>>=8,n[5]=255&o,n[4]=255&i,i>>=8,n[3]=255&i,i>>=8,n[2]=255&i,i>>=8,n[1]=255&i,e.push(n)}}}j.encodedSize=function(e){return T.encodedSize(e.value)},T.encodedSize=function(e){return e<$[0]?1:e<$[1]?2:e<$[2]?3:e<$[3]?5:9},j.compareTokens=function(e,t){return e.value<t.value?-1:e.value>t.value?1:0};const D=BigInt(-1),z=BigInt(1);function M(e,t){const n=t.value,r="bigint"===typeof n?n*D-z:-1*n-1;T(e,t.type.majorEncoded,r)}function O(e,t,n,r){I(e,t,n+r);const o=g(e,t+n,t+n+r);return new a(s.bytes,o,n+r)}function L(e,t,n,r){return O(e,t,1,n)}function V(e){return void 0===e.encodedBytes&&(e.encodedBytes=e.type===s.string?p(e.value):e.value),e.encodedBytes}function R(e,t){const n=V(t);T(e,t.type.majorEncoded,n.length),e.push(n)}function P(e,t,n,r,o){const i=n+r;I(e,t,i);const u=new a(s.string,d(e,t+n,t+i),i);return!0===o.retainStringBytes&&(u.byteValue=g(e,t+n,t+i)),u}function F(e,t,n,r){return P(e,t,1,n,r)}M.encodedSize=function(e){const t=e.value,n="bigint"===typeof t?t*D-z:-1*t-1;return n<$[0]?1:n<$[1]?2:n<$[2]?3:n<$[3]?5:9},M.compareTokens=function(e,t){return e.value<t.value?1:e.value>t.value?-1:0},R.encodedSize=function(e){const t=V(e);return T.encodedSize(t.length)+t.length},R.compareTokens=function(e,t){return n=V(e),r=V(t),n.length<r.length?-1:n.length>r.length?1:function(e,t){if(l(e)&&l(t))return e.compare(t);for(let n=0;n<e.length;n++)if(e[n]!==t[n])return e[n]<t[n]?-1:1;return 0}(n,r);var n,r};const q=R;function G(e,t,n,r){return new a(s.array,r,n)}function _(e,t,n,r){return G(0,0,1,n)}function J(e,t){T(e,s.array.majorEncoded,t.value)}function K(e,t,n,r){return new a(s.map,r,n)}function Q(e,t,n,r){return K(0,0,1,n)}function W(e,t){T(e,s.map.majorEncoded,t.value)}function H(e,t,n,r){return new a(s.tag,n,1)}function X(e,t){T(e,s.tag.majorEncoded,t.value)}J.compareTokens=j.compareTokens,J.encodedSize=function(e){return T.encodedSize(e.value)},W.compareTokens=j.compareTokens,W.encodedSize=function(e){return T.encodedSize(e.value)},X.compareTokens=j.compareTokens,X.encodedSize=function(e){return T.encodedSize(e.value)};const Z=20,Y=21,ee=22,te=23;function ne(e,t,n){if(n){if(!1===n.allowNaN&&Number.isNaN(e))throw new Error(`${A} NaN values are not supported`);if(!1===n.allowInfinity&&(e===1/0||e===-1/0))throw new Error(`${A} Infinity values are not supported`)}return new a(s.float,e,t)}function re(e,t,n){const r=t.value;if(!1===r)e.push([s.float.majorEncoded|Z]);else if(!0===r)e.push([s.float.majorEncoded|Y]);else if(null===r)e.push([s.float.majorEncoded|ee]);else if(void 0===r)e.push([s.float.majorEncoded|te]);else{let t,i=!1;n&&!0===n.float64||(ae(r),t=ue(se,1),r===t||Number.isNaN(r)?(se[0]=249,e.push(se.slice(0,3)),i=!0):(ce(r),t=fe(se,1),r===t&&(se[0]=250,e.push(se.slice(0,5)),i=!0))),i||(o=r,ie.setFloat64(0,o,!1),t=le(se,1),se[0]=251,e.push(se.slice(0,9)))}var o}re.encodedSize=function(e,t){const n=e.value;if(!1===n||!0===n||null===n||void 0===n)return 1;if(!t||!0!==t.float64){ae(n);let e=ue(se,1);if(n===e||Number.isNaN(n))return 3;if(ce(n),e=fe(se,1),n===e)return 5}return 9};const oe=new ArrayBuffer(9),ie=new DataView(oe,1),se=new Uint8Array(oe,0);function ae(e){if(e===1/0)ie.setUint16(0,31744,!1);else if(e===-1/0)ie.setUint16(0,64512,!1);else if(Number.isNaN(e))ie.setUint16(0,32256,!1);else{ie.setFloat32(0,e);const t=ie.getUint32(0),n=(2139095040&t)>>23,r=8388607&t;if(255===n)ie.setUint16(0,31744,!1);else if(0===n)ie.setUint16(0,(2147483648&e)>>16|r>>13,!1);else{const e=n-127;e<-24?ie.setUint16(0,0):e<-14?ie.setUint16(0,(2147483648&t)>>16|1<<24+e,!1):ie.setUint16(0,(2147483648&t)>>16|e+15<<10|r>>13,!1)}}}function ue(e,t){if(e.length-t<2)throw new Error(`${A} not enough data for float16`);const n=(e[t]<<8)+e[t+1];if(31744===n)return 1/0;if(64512===n)return-1/0;if(32256===n)return NaN;const r=n>>10&31,o=1023&n;let i;return i=0===r?o*2**-24:31!==r?(o+1024)*2**(r-25):0===o?1/0:NaN,32768&n?-i:i}function ce(e){ie.setFloat32(0,e,!1)}function fe(e,t){if(e.length-t<4)throw new Error(`${A} not enough data for float32`);const n=(e.byteOffset||0)+t;return new DataView(e.buffer,n,4).getFloat32(0,!1)}function le(e,t){if(e.length-t<8)throw new Error(`${A} not enough data for float64`);const n=(e.byteOffset||0)+t;return new DataView(e.buffer,n,8).getFloat64(0,!1)}function he(e,t,n){throw new Error(`${A} encountered invalid minor (${n}) for major ${e[t]>>>5}`)}function de(e){return()=>{throw new Error(`${A} ${e}`)}}re.compareTokens=j.compareTokens;const pe=[];for(let $t=0;$t<=23;$t++)pe[$t]=he;pe[24]=function(e,t,n,r){return new a(s.uint,U(e,t+1,r),2)},pe[25]=function(e,t,n,r){return new a(s.uint,B(e,t+1,r),3)},pe[26]=function(e,t,n,r){return new a(s.uint,S(e,t+1,r),5)},pe[27]=function(e,t,n,r){return new a(s.uint,N(e,t+1,r),9)},pe[28]=he,pe[29]=he,pe[30]=he,pe[31]=he;for(let $t=32;$t<=55;$t++)pe[$t]=he;pe[56]=function(e,t,n,r){return new a(s.negint,-1-U(e,t+1,r),2)},pe[57]=function(e,t,n,r){return new a(s.negint,-1-B(e,t+1,r),3)},pe[58]=function(e,t,n,r){return new a(s.negint,-1-S(e,t+1,r),5)},pe[59]=function(e,t,n,r){const o=N(e,t+1,r);if("bigint"!==typeof o){const e=-1-o;if(e>=Number.MIN_SAFE_INTEGER)return new a(s.negint,e,9)}if(!0!==r.allowBigInt)throw new Error(`${A} integers outside of the safe integer range are not supported`);return new a(s.negint,D-BigInt(o),9)},pe[60]=he,pe[61]=he,pe[62]=he,pe[63]=he;for(let $t=64;$t<=87;$t++)pe[$t]=L;pe[88]=function(e,t,n,r){return O(e,t,2,U(e,t+1,r))},pe[89]=function(e,t,n,r){return O(e,t,3,B(e,t+1,r))},pe[90]=function(e,t,n,r){return O(e,t,5,S(e,t+1,r))},pe[91]=function(e,t,n,r){const o=N(e,t+1,r);if("bigint"===typeof o)throw new Error(`${A} 64-bit integer bytes lengths not supported`);return O(e,t,9,o)},pe[92]=he,pe[93]=he,pe[94]=he,pe[95]=de("indefinite length bytes/strings are not supported");for(let $t=96;$t<=119;$t++)pe[$t]=F;pe[120]=function(e,t,n,r){return P(e,t,2,U(e,t+1,r),r)},pe[121]=function(e,t,n,r){return P(e,t,3,B(e,t+1,r),r)},pe[122]=function(e,t,n,r){return P(e,t,5,S(e,t+1,r),r)},pe[123]=function(e,t,n,r){const o=N(e,t+1,r);if("bigint"===typeof o)throw new Error(`${A} 64-bit integer string lengths not supported`);return P(e,t,9,o,r)},pe[124]=he,pe[125]=he,pe[126]=he,pe[127]=de("indefinite length bytes/strings are not supported");for(let $t=128;$t<=151;$t++)pe[$t]=_;pe[152]=function(e,t,n,r){return G(0,0,2,U(e,t+1,r))},pe[153]=function(e,t,n,r){return G(0,0,3,B(e,t+1,r))},pe[154]=function(e,t,n,r){return G(0,0,5,S(e,t+1,r))},pe[155]=function(e,t,n,r){const o=N(e,t+1,r);if("bigint"===typeof o)throw new Error(`${A} 64-bit integer array lengths not supported`);return G(0,0,9,o)},pe[156]=he,pe[157]=he,pe[158]=he,pe[159]=function(e,t,n,r){if(!1===r.allowIndefinite)throw new Error(`${A} indefinite length items not allowed`);return G(0,0,1,1/0)};for(let $t=160;$t<=183;$t++)pe[$t]=Q;pe[184]=function(e,t,n,r){return K(0,0,2,U(e,t+1,r))},pe[185]=function(e,t,n,r){return K(0,0,3,B(e,t+1,r))},pe[186]=function(e,t,n,r){return K(0,0,5,S(e,t+1,r))},pe[187]=function(e,t,n,r){const o=N(e,t+1,r);if("bigint"===typeof o)throw new Error(`${A} 64-bit integer map lengths not supported`);return K(0,0,9,o)},pe[188]=he,pe[189]=he,pe[190]=he,pe[191]=function(e,t,n,r){if(!1===r.allowIndefinite)throw new Error(`${A} indefinite length items not allowed`);return K(0,0,1,1/0)};for(let $t=192;$t<=215;$t++)pe[$t]=H;pe[216]=function(e,t,n,r){return new a(s.tag,U(e,t+1,r),2)},pe[217]=function(e,t,n,r){return new a(s.tag,B(e,t+1,r),3)},pe[218]=function(e,t,n,r){return new a(s.tag,S(e,t+1,r),5)},pe[219]=function(e,t,n,r){return new a(s.tag,N(e,t+1,r),9)},pe[220]=he,pe[221]=he,pe[222]=he,pe[223]=he;for(let $t=224;$t<=243;$t++)pe[$t]=de("simple values are not supported");pe[244]=he,pe[245]=he,pe[246]=he,pe[247]=function(e,t,n,r){if(!1===r.allowUndefined)throw new Error(`${A} undefined values are not supported`);return!0===r.coerceUndefinedToNull?new a(s.null,null,1):new a(s.undefined,void 0,1)},pe[248]=de("simple values are not supported"),pe[249]=function(e,t,n,r){return ne(ue(e,t+1),3,r)},pe[250]=function(e,t,n,r){return ne(fe(e,t+1),5,r)},pe[251]=function(e,t,n,r){return ne(le(e,t+1),9,r)},pe[252]=he,pe[253]=he,pe[254]=he,pe[255]=function(e,t,n,r){if(!1===r.allowIndefinite)throw new Error(`${A} indefinite length items not allowed`);return new a(s.break,void 0,1)};const we=[];for(let $t=0;$t<24;$t++)we[$t]=new a(s.uint,$t,1);for(let $t=-1;$t>=-24;$t--)we[31-$t]=new a(s.negint,$t,1);we[64]=new a(s.bytes,new Uint8Array(0),1),we[96]=new a(s.string,"",1),we[128]=new a(s.array,0,1),we[160]=new a(s.map,0,1),we[244]=new a(s.false,!1,1),we[245]=new a(s.true,!0,1),we[246]=new a(s.null,null,1);const ge={float64:!1,mapSorter:function(e,t){const n=Array.isArray(e[0])?e[0][0]:e[0],r=Array.isArray(t[0])?t[0][0]:t[0];if(n.type!==r.type)return n.type.compare(r.type);const o=n.type.major,i=ye[o].compareTokens(n,r);0===i&&console.warn("WARNING: complex key types used, CBOR key sorting guarantees are gone");return i},quickEncodeToken:function(e){switch(e.type){case s.false:return w([244]);case s.true:return w([245]);case s.null:return w([246]);case s.bytes:return e.value.length?void 0:w([64]);case s.string:return""===e.value?w([96]):void 0;case s.array:return 0===e.value?w([128]):void 0;case s.map:return 0===e.value?w([160]):void 0;case s.uint:return e.value<24?w([Number(e.value)]):void 0;case s.negint:if(e.value>=-24)return w([31-Number(e.value)])}}};const ye=function(){const e=[];return e[s.uint.major]=j,e[s.negint.major]=M,e[s.bytes.major]=R,e[s.string.major]=q,e[s.array.major]=J,e[s.map.major]=W,e[s.tag.major]=X,e[s.float.major]=re,e}(),be=new k;class me{constructor(e,t){this.obj=e,this.parent=t}includes(e){let t=this;do{if(t.obj===e)return!0}while(t=t.parent);return!1}static createCheck(e,t){if(e&&e.includes(t))throw new Error(`${C} object contains circular references`);return new me(t,e)}}const ve={null:new a(s.null,null),undefined:new a(s.undefined,void 0),true:new a(s.true,!0),false:new a(s.false,!1),emptyArray:new a(s.array,0),emptyMap:new a(s.map,0)},Ee={number:(e,t,n,r)=>Number.isInteger(e)&&Number.isSafeInteger(e)?new a(e>=0?s.uint:s.negint,e):new a(s.float,e),bigint:(e,t,n,r)=>e>=BigInt(0)?new a(s.uint,e):new a(s.negint,e),Uint8Array:(e,t,n,r)=>new a(s.bytes,e),string:(e,t,n,r)=>new a(s.string,e),boolean:(e,t,n,r)=>e?ve.true:ve.false,null:(e,t,n,r)=>ve.null,undefined:(e,t,n,r)=>ve.undefined,ArrayBuffer:(e,t,n,r)=>new a(s.bytes,new Uint8Array(e)),DataView:(e,t,n,r)=>new a(s.bytes,new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),Array(e,t,n,r){if(!e.length)return!0===n.addBreakTokens?[ve.emptyArray,new a(s.break)]:ve.emptyArray;r=me.createCheck(r,e);const o=[];let i=0;for(const s of e)o[i++]=ke(s,n,r);return n.addBreakTokens?[new a(s.array,e.length),o,new a(s.break)]:[new a(s.array,e.length),o]},Object(e,t,n,r){const o="Object"!==t,i=o?e.keys():Object.keys(e),u=o?e.size:i.length;if(!u)return!0===n.addBreakTokens?[ve.emptyMap,new a(s.break)]:ve.emptyMap;r=me.createCheck(r,e);const c=[];let f=0;for(const s of i)c[f++]=[ke(s,n,r),ke(o?e.get(s):e[s],n,r)];return function(e,t){t.mapSorter&&e.sort(t.mapSorter)}(c,n),n.addBreakTokens?[new a(s.map,u),c,new a(s.break)]:[new a(s.map,u),c]}};Ee.Map=Ee.Object,Ee.Buffer=Ee.Uint8Array;for(const $t of"Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64".split(" "))Ee[`${$t}Array`]=Ee.DataView;function ke(e,t={},n){const r=i(e),o=t&&t.typeEncoders&&t.typeEncoders[r]||Ee[r];if("function"===typeof o){const i=o(e,r,t,n);if(null!=i)return i}const s=Ee[r];if(!s)throw new Error(`${C} unsupported type: ${r}`);return s(e,r,t,n)}function Ae(e,t,n,r){if(Array.isArray(t))for(const o of t)Ae(e,o,n,r);else n[t.type.major](e,t,r)}function Ce(e,t,n){const r=ke(e,n);if(!Array.isArray(r)&&n.quickEncodeToken){const e=n.quickEncodeToken(r);if(e)return e;const o=t[r.type.major];if(o.encodedSize){const e=o.encodedSize(r,n),t=new k(e);if(o(t,r,n),1!==t.chunks.length)throw new Error(`Unexpected error: pre-calculated length for ${r} was wrong`);return h(t.chunks[0])}}return be.reset(),Ae(be,r,t,n),be.toBytes(!0)}const xe={strict:!1,allowIndefinite:!0,allowUndefined:!0,allowBigInt:!0};class Ie{constructor(e,t={}){this.pos=0,this.data=e,this.options=t}done(){return this.pos>=this.data.length}next(){const e=this.data[this.pos];let t=we[e];if(void 0===t){const n=pe[e];if(!n)throw new Error(`${A} no decoder for major type ${e>>>5} (byte 0x${e.toString(16).padStart(2,"0")})`);const r=31&e;t=n(this.data,this.pos,r,this.options)}return this.pos+=t.encodedLength,t}}const $e=Symbol.for("DONE"),Ue=Symbol.for("BREAK");function Be(e,t){if(e.done())return $e;const n=e.next();if(n.type===s.break)return Ue;if(n.type.terminal)return n.value;if(n.type===s.array)return function(e,t,n){const r=[];for(let o=0;o<e.value;o++){const i=Be(t,n);if(i===Ue){if(e.value===1/0)break;throw new Error(`${A} got unexpected break to lengthed array`)}if(i===$e)throw new Error(`${A} found array but not enough entries (got ${o}, expected ${e.value})`);r[o]=i}return r}(n,e,t);if(n.type===s.map)return function(e,t,n){const r=!0===n.useMaps,o=r?void 0:{},i=r?new Map:void 0;for(let s=0;s<e.value;s++){const a=Be(t,n);if(a===Ue){if(e.value===1/0)break;throw new Error(`${A} got unexpected break to lengthed map`)}if(a===$e)throw new Error(`${A} found map but not enough entries (got ${s} [no key], expected ${e.value})`);if(!0!==r&&"string"!==typeof a)throw new Error(`${A} non-string keys not supported (got ${typeof a})`);if(!0===n.rejectDuplicateMapKeys&&(r&&i.has(a)||!r&&a in o))throw new Error(`${A} found repeat map key "${a}"`);const u=Be(t,n);if(u===$e)throw new Error(`${A} found map but not enough entries (got ${s} [no value], expected ${e.value})`);r?i.set(a,u):o[a]=u}return r?i:o}(n,e,t);if(n.type===s.tag){if(t.tags&&"function"===typeof t.tags[n.value]){const r=Be(e,t);return t.tags[n.value](r)}throw new Error(`${A} tag not supported (${n.value})`)}throw new Error("unsupported")}var Se=function e(t,n,r){n=n||[];var o=r=r||0;for(;t>=Te;)n[r++]=255&t|Ne,t/=128;for(;t&je;)n[r++]=255&t|Ne,t>>>=7;return n[r]=0|t,e.bytes=r-o+1,n},Ne=128,je=-128,Te=Math.pow(2,31);var De=function e(t,n){var r,o=0,i=0,s=n=n||0,a=t.length;do{if(s>=a)throw e.bytes=0,new RangeError("Could not decode varint");r=t[s++],o+=i<28?(r&Me)<<i:(r&Me)*Math.pow(2,i),i+=7}while(r>=ze);return e.bytes=s-n,o},ze=128,Me=127;var Oe=Math.pow(2,7),Le=Math.pow(2,14),Ve=Math.pow(2,21),Re=Math.pow(2,28),Pe=Math.pow(2,35),Fe=Math.pow(2,42),qe=Math.pow(2,49),Ge=Math.pow(2,56),_e=Math.pow(2,63);const Je={encode:Se,decode:De,encodingLength:function(e){return e<Oe?1:e<Le?2:e<Ve?3:e<Re?4:e<Pe?5:e<Fe?6:e<qe?7:e<Ge?8:e<_e?9:10}},Ke=(e,t=0)=>[Je.decode(e,t),Je.decode.bytes],Qe=(e,t,n=0)=>(Je.encode(e,t,n),t),We=e=>Je.encodingLength(e),He=(new Uint8Array(0),e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Unknown type, must be binary type")});class Xe{constructor(e,t,n,r){this.code=e,this.size=t,this.digest=n,this.bytes=r}}var Ze=function(e,t){if(e.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),r=0;r<n.length;r++)n[r]=255;for(var o=0;o<e.length;o++){var i=e.charAt(o),s=i.charCodeAt(0);if(255!==n[s])throw new TypeError(i+" is ambiguous");n[s]=o}var a=e.length,u=e.charAt(0),c=Math.log(a)/Math.log(256),f=Math.log(256)/Math.log(a);function l(e){if("string"!==typeof e)throw new TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[t]){for(var r=0,o=0;e[t]===u;)r++,t++;for(var i=(e.length-t)*c+1>>>0,s=new Uint8Array(i);e[t];){var f=n[e.charCodeAt(t)];if(255===f)return;for(var l=0,h=i-1;(0!==f||l<o)&&-1!==h;h--,l++)f+=a*s[h]>>>0,s[h]=f%256>>>0,f=f/256>>>0;if(0!==f)throw new Error("Non-zero carry");o=l,t++}if(" "!==e[t]){for(var d=i-o;d!==i&&0===s[d];)d++;for(var p=new Uint8Array(r+(i-d)),w=r;d!==i;)p[w++]=s[d++];return p}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===t.length)return"";for(var n=0,r=0,o=0,i=t.length;o!==i&&0===t[o];)o++,n++;for(var s=(i-o)*f+1>>>0,c=new Uint8Array(s);o!==i;){for(var l=t[o],h=0,d=s-1;(0!==l||h<r)&&-1!==d;d--,h++)l+=256*c[d]>>>0,c[d]=l%a>>>0,l=l/a>>>0;if(0!==l)throw new Error("Non-zero carry");r=h,o++}for(var p=s-r;p!==s&&0===c[p];)p++;for(var w=u.repeat(n);p<s;++p)w+=e.charAt(c[p]);return w},decodeUnsafe:l,decode:function(e){var n=l(e);if(n)return n;throw new Error(`Non-${t} character`)}}};const Ye=Ze;class et{constructor(e,t,n){this.name=e,this.prefix=t,this.baseEncode=n}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class tt{constructor(e,t,n){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw new Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=n}decode(e){if("string"===typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return rt(this,e)}}class nt{constructor(e){this.decoders=e}or(e){return rt(this,e)}decode(e){const t=e[0],n=this.decoders[t];if(n)return n.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const rt=(e,t)=>new nt({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class ot{constructor(e,t,n,r){this.name=e,this.prefix=t,this.baseEncode=n,this.baseDecode=r,this.encoder=new et(e,t,n),this.decoder=new tt(e,t,r)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const it=({name:e,prefix:t,encode:n,decode:r})=>new ot(e,t,n,r),st=({prefix:e,name:t,alphabet:n})=>{const{encode:r,decode:o}=Ye(n,t);return it({prefix:e,name:t,encode:r,decode:e=>He(o(e))})},at=({name:e,prefix:t,bitsPerChar:n,alphabet:r})=>it({prefix:t,name:e,encode:e=>((e,t,n)=>{const r="="===t[t.length-1],o=(1<<n)-1;let i="",s=0,a=0;for(let u=0;u<e.length;++u)for(a=a<<8|e[u],s+=8;s>n;)s-=n,i+=t[o&a>>s];if(s&&(i+=t[o&a<<n-s]),r)for(;i.length*n&7;)i+="=";return i})(e,r,n),decode:t=>((e,t,n,r)=>{const o={};for(let f=0;f<t.length;++f)o[t[f]]=f;let i=e.length;for(;"="===e[i-1];)--i;const s=new Uint8Array(i*n/8|0);let a=0,u=0,c=0;for(let f=0;f<i;++f){const t=o[e[f]];if(void 0===t)throw new SyntaxError(`Non-${r} character`);u=u<<n|t,a+=n,a>=8&&(a-=8,s[c++]=255&u>>a)}if(a>=n||255&u<<8-a)throw new SyntaxError("Unexpected end of data");return s})(t,r,n,e)}),ut=st({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),ct=(st({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),at({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5})),ft=(at({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),at({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),at({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),at({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),at({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),at({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),at({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),at({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),(e,t)=>{const{bytes:n,version:r}=e;return 0===r?wt(n,ht(e),t||ut.encoder):gt(n,ht(e),t||ct.encoder)}),lt=new WeakMap,ht=e=>{const t=lt.get(e);if(null==t){const t=new Map;return lt.set(e,t),t}return t};class dt{constructor(e,t,n,r){this.code=t,this.version=e,this.multihash=n,this.bytes=r,this["/"]=r}get asCID(){return this}get byteOffset(){return this.bytes.byteOffset}get byteLength(){return this.bytes.byteLength}toV0(){switch(this.version){case 0:return this;case 1:{const{code:e,multihash:t}=this;if(e!==yt)throw new Error("Cannot convert a non dag-pb CID to CIDv0");if(t.code!==bt)throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");return dt.createV0(t)}default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}toV1(){switch(this.version){case 0:{const{code:e,digest:t}=this.multihash,n=((e,t)=>{const n=t.byteLength,r=We(e),o=r+We(n),i=new Uint8Array(o+n);return Qe(e,i,0),Qe(n,i,r),i.set(t,o),new Xe(e,n,t,i)})(e,t);return dt.createV1(this.code,n)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 1. This is a bug please report`)}}equals(e){return dt.equals(this,e)}static equals(e,t){const n=t;return n&&e.code===n.code&&e.version===n.version&&((e,t)=>{if(e===t)return!0;{const n=t;return e.code===n.code&&e.size===n.size&&n.bytes instanceof Uint8Array&&((e,t)=>{if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;for(let n=0;n<e.byteLength;n++)if(e[n]!==t[n])return!1;return!0})(e.bytes,n.bytes)}})(e.multihash,n.multihash)}toString(e){return ft(this,e)}toJSON(){return{"/":ft(this)}}link(){return this}get[Symbol.toStringTag](){return"CID"}[Symbol.for("nodejs.util.inspect.custom")](){return`CID(${this.toString()})`}static asCID(e){if(null==e)return null;const t=e;if(t instanceof dt)return t;if(null!=t["/"]&&t["/"]===t.bytes||t.asCID===t){const{version:e,code:n,multihash:r,bytes:o}=t;return new dt(e,n,r,o||mt(e,n,r.bytes))}if(!0===t[vt]){const{version:e,multihash:n,code:r}=t,o=(e=>{const t=He(e),[n,r]=Ke(t),[o,i]=Ke(t.subarray(r)),s=t.subarray(r+i);if(s.byteLength!==o)throw new Error("Incorrect length");return new Xe(n,o,s,t)})(n);return dt.create(e,r,o)}return null}static create(e,t,n){if("number"!==typeof t)throw new Error("String codecs are no longer supported");if(!(n.bytes instanceof Uint8Array))throw new Error("Invalid digest");switch(e){case 0:if(t!==yt)throw new Error(`Version 0 CID must use dag-pb (code: ${yt}) block encoding`);return new dt(e,t,n,n.bytes);case 1:{const r=mt(e,t,n.bytes);return new dt(e,t,n,r)}default:throw new Error("Invalid version")}}static createV0(e){return dt.create(0,yt,e)}static createV1(e,t){return dt.create(1,e,t)}static decode(e){const[t,n]=dt.decodeFirst(e);if(n.length)throw new Error("Incorrect length");return t}static decodeFirst(e){const t=dt.inspectBytes(e),n=t.size-t.multihashSize,r=He(e.subarray(n,n+t.multihashSize));if(r.byteLength!==t.multihashSize)throw new Error("Incorrect length");const o=r.subarray(t.multihashSize-t.digestSize),i=new Xe(t.multihashCode,t.digestSize,o,r);return[0===t.version?dt.createV0(i):dt.createV1(t.codec,i),e.subarray(t.size)]}static inspectBytes(e){let t=0;const n=()=>{const[n,r]=Ke(e.subarray(t));return t+=r,n};let r=n(),o=yt;if(18===r?(r=0,t=0):o=n(),0!==r&&1!==r)throw new RangeError(`Invalid CID version ${r}`);const i=t,s=n(),a=n(),u=t+a;return{version:r,codec:o,multihashCode:s,digestSize:a,multihashSize:u-i,size:u}}static parse(e,t){const[n,r]=pt(e,t),o=dt.decode(r);if(0===o.version&&"Q"!==e[0])throw Error("Version 0 CID string must not include multibase prefix");return ht(o).set(n,e),o}}const pt=(e,t)=>{switch(e[0]){case"Q":{const n=t||ut;return[ut.prefix,n.decode(`${ut.prefix}${e}`)]}case ut.prefix:{const n=t||ut;return[ut.prefix,n.decode(e)]}case ct.prefix:{const n=t||ct;return[ct.prefix,n.decode(e)]}default:if(null==t)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[e[0],t.decode(e)]}},wt=(e,t,n)=>{const{prefix:r}=n;if(r!==ut.prefix)throw Error(`Cannot string encode V0 in ${n.name} encoding`);const o=t.get(r);if(null==o){const o=n.encode(e).slice(1);return t.set(r,o),o}return o},gt=(e,t,n)=>{const{prefix:r}=n,o=t.get(r);if(null==o){const o=n.encode(e);return t.set(r,o),o}return o},yt=112,bt=18,mt=(e,t,n)=>{const r=We(e),o=r+We(t),i=new Uint8Array(o+n.byteLength);return Qe(e,i,0),Qe(t,i,r),i.set(n,o),i},vt=Symbol.for("@ipld/js-cid/CID");const Et={float64:!0,typeEncoders:{Object:function(e){if(e.asCID!==e&&e["/"]!==e.bytes)return null;const t=dt.asCID(e);if(!t)return null;const n=new Uint8Array(t.bytes.byteLength+1);return n.set(t.bytes,1),[new a(s.tag,42),new a(s.bytes,n)]},undefined:function(){throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded")},number:function(e){if(Number.isNaN(e))throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");if(e===1/0||e===-1/0)throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");return null}}};const kt={allowIndefinite:!1,coerceUndefinedToNull:!0,allowNaN:!1,allowInfinity:!1,allowBigInt:!0,strict:!0,useMaps:!1,rejectDuplicateMapKeys:!0,tags:[]};kt.tags[42]=function(e){if(0!==e[0])throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");return dt.decode(e.subarray(1))};const At="dag-cbor",Ct=113,xt=e=>{return t=e,n=Et,n=Object.assign({},ge,n),Ce(t,ye,n);var t,n},It=e=>function(e,t){if(!(e instanceof Uint8Array))throw new Error(`${A} data to decode must be a Uint8Array`);const n=(t=Object.assign({},xe,t)).tokenizer||new Ie(e,t),r=Be(n,t);if(r===$e)throw new Error(`${A} did not find any content to decode`);if(r===Ue)throw new Error(`${A} got unexpected break`);if(!n.done())throw new Error(`${A} too many terminals, data makes no sense`);return r}(e,kt)}}]);
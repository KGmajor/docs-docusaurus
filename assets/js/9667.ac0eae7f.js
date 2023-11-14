"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9667,8110],{78110:(e,n,r)=>{r.r(n),r.d(n,{C:()=>s,c:()=>o});var t=r(1159);function a(e,n){for(var r=0;r<n.length;r++){const t=n[r];if("string"!=typeof t&&!Array.isArray(t))for(const n in t)if("default"!==n&&!(n in e)){const r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:()=>t[n]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(0,Object.defineProperty)(a,"name",{value:"_mergeNamespaces",configurable:!0});var i=(0,t.r)();const s=(0,t.g)(i),o=a({__proto__:null,default:s},[i])},29667:(e,n,r)=>{r.r(n);var t=r(78110),a=r(86395),i=(r(1159),Object.defineProperty),s=(e,n)=>i(e,"name",{value:n,configurable:!0});function o(e){c=e,u=e.length,l=f=d=-1,j(),S();const n=m();return h("EOF"),n}let c,u,l,f,d,p,b;function m(){const e=l,n=[];if(h("{"),!N("}")){do{n.push(v())}while(N(","));h("}")}return{kind:"Object",start:e,end:d,members:n}}function v(){const e=l,n="String"===b?g():null;h("String"),h(":");const r=k();return{kind:"Member",start:e,end:d,key:n,value:r}}function y(){const e=l,n=[];if(h("["),!N("]")){do{n.push(k())}while(N(","));h("]")}return{kind:"Array",start:e,end:d,values:n}}function k(){switch(b){case"[":return y();case"{":return m();case"String":case"Number":case"Boolean":case"Null":const e=g();return S(),e}h("Value")}function g(){return{kind:b,start:l,end:f,value:JSON.parse(c.slice(l,f))}}function h(e){if(b===e)return void S();let n;if("EOF"===b)n="[end of file]";else if(f-l>1)n="`"+c.slice(l,f)+"`";else{const e=c.slice(l).match(/^.+?\b/);n="`"+(e?e[0]:c[l])+"`"}throw w(`Expected ${e} but found ${n}.`)}s(o,"jsonParse"),s(m,"parseObj"),s(v,"parseMember"),s(y,"parseArr"),s(k,"parseVal"),s(g,"curToken"),s(h,"expect");class O extends Error{constructor(e,n){super(e),this.position=n}}function w(e){return new O(e,{start:l,end:f})}function N(e){if(b===e)return S(),!0}function j(){return f<u&&(f++,p=f===u?0:c.charCodeAt(f)),p}function S(){for(d=f;9===p||10===p||13===p||32===p;)j();if(0!==p){switch(l=f,p){case 34:return b="String",x();case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return b="Number",$();case 102:if("false"!==c.slice(l,l+5))break;return f+=4,j(),void(b="Boolean");case 110:if("null"!==c.slice(l,l+4))break;return f+=3,j(),void(b="Null");case 116:if("true"!==c.slice(l,l+4))break;return f+=3,j(),void(b="Boolean")}b=c[l],j()}else b="EOF"}function x(){for(j();34!==p&&p>31;)if(92===p)switch(p=j(),p){case 34:case 47:case 92:case 98:case 102:case 110:case 114:case 116:j();break;case 117:j(),E(),E(),E(),E();break;default:throw w("Bad character escape sequence.")}else{if(f===u)throw w("Unterminated string.");j()}if(34!==p)throw w("Unterminated string.");j()}function E(){if(p>=48&&p<=57||p>=65&&p<=70||p>=97&&p<=102)return j();throw w("Expected hexadecimal digit.")}function $(){45===p&&j(),48===p?j():F(),46===p&&(j(),F()),(69===p||101===p)&&(p=j(),(43===p||45===p)&&j(),F())}function F(){if(p<48||p>57)throw w("Expected decimal digit.");do{j()}while(p>=48&&p<=57)}function T(e,n,r){var t;const a=[];for(const i of r.members)if(i){const r=null===(t=i.key)||void 0===t?void 0:t.value,s=n[r];if(s)for(const[n,t]of A(s,i.value))a.push(B(e,n,t));else a.push(B(e,i.key,`Variable "$${r}" does not appear in any GraphQL query.`))}return a}function A(e,n){if(!e||!n)return[];if(e instanceof a.bM)return"Null"===n.kind?[[n,`Type "${e}" is non-nullable and cannot be null.`]]:A(e.ofType,n);if("Null"===n.kind)return[];if(e instanceof a.p2){const r=e.ofType;if("Array"===n.kind){return C(n.values||[],(e=>A(r,e)))}return A(r,n)}if(e instanceof a.sR){if("Object"!==n.kind)return[[n,`Type "${e}" must be an Object.`]];const r=Object.create(null),t=C(n.members,(n=>{var t;const a=null===(t=null==n?void 0:n.key)||void 0===t?void 0:t.value;r[a]=!0;const i=e.getFields()[a];if(!i)return[[n.key,`Type "${e}" does not have a field "${a}".`]];return A(i?i.type:void 0,n.value)}));for(const i of Object.keys(e.getFields())){const s=e.getFields()[i];!r[i]&&s.type instanceof a.bM&&!s.defaultValue&&t.push([n,`Object of type "${e}" is missing required field "${i}".`])}return t}return"Boolean"===e.name&&"Boolean"!==n.kind||"String"===e.name&&"String"!==n.kind||"ID"===e.name&&"Number"!==n.kind&&"String"!==n.kind||"Float"===e.name&&"Number"!==n.kind||"Int"===e.name&&("Number"!==n.kind||(0|n.value)!==n.value)||(e instanceof a.mR||e instanceof a.n2)&&("String"!==n.kind&&"Number"!==n.kind&&"Boolean"!==n.kind&&"Null"!==n.kind||V(e.parseValue(n.value)))?[[n,`Expected value of type "${e}".`]]:[]}function B(e,n,r){return{message:r,severity:"error",type:"validation",from:e.posFromIndex(n.start),to:e.posFromIndex(n.end)}}function V(e){return null==e||e!=e}function C(e,n){return Array.prototype.concat.apply([],e.map(n))}s(O,"JSONSyntaxError"),s(w,"syntaxError"),s(N,"skip"),s(j,"ch"),s(S,"lex"),s(x,"readString"),s(E,"readHex"),s($,"readNumber"),s(F,"readDigits"),t.C.registerHelper("lint","graphql-variables",((e,n,r)=>{if(!e)return[];let t;try{t=o(e)}catch(i){if(i instanceof O)return[B(r,i.position,i.message)];throw i}const{variableToType:a}=n;return a?T(r,a,t):[]})),s(T,"validateVariables"),s(A,"validateValue"),s(B,"lintError"),s(V,"isNullish"),s(C,"mapCat")}}]);
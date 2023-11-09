"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1546],{1546:(e,n,r)=>{r.r(n);var t=r(8252),a=r(6395),i=(r(2689),r(9496),r(4637),r(7995),Object.defineProperty),s=(e,n)=>i(e,"name",{value:n,configurable:!0});function o(e){c=e,u=e.length,l=f=d=-1,O(),S();const n=m();return g("EOF"),n}let c,u,l,f,d,p,b;function m(){const e=l,n=[];if(g("{"),!x("}")){do{n.push(k())}while(x(","));g("}")}return{kind:"Object",start:e,end:d,members:n}}function k(){const e=l,n="String"===b?y():null;g("String"),g(":");const r=v();return{kind:"Member",start:e,end:d,key:n,value:r}}function h(){const e=l,n=[];if(g("["),!x("]")){do{n.push(v())}while(x(","));g("]")}return{kind:"Array",start:e,end:d,values:n}}function v(){switch(b){case"[":return h();case"{":return m();case"String":case"Number":case"Boolean":case"Null":const e=y();return S(),e}g("Value")}function y(){return{kind:b,start:l,end:f,value:JSON.parse(c.slice(l,f))}}function g(e){if(b===e)return void S();let n;if("EOF"===b)n="[end of file]";else if(f-l>1)n="`"+c.slice(l,f)+"`";else{const e=c.slice(l).match(/^.+?\b/);n="`"+(e?e[0]:c[l])+"`"}throw N(`Expected ${e} but found ${n}.`)}s(o,"jsonParse"),s(m,"parseObj"),s(k,"parseMember"),s(h,"parseArr"),s(v,"parseVal"),s(y,"curToken"),s(g,"expect");class w extends Error{constructor(e,n){super(e),this.position=n}}function N(e){return new w(e,{start:l,end:f})}function x(e){if(b===e)return S(),!0}function O(){return f<u&&(f++,p=f===u?0:c.charCodeAt(f)),p}function S(){for(d=f;9===p||10===p||13===p||32===p;)O();if(0!==p){switch(l=f,p){case 34:return b="String",E();case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return b="Number",j();case 102:if("false"!==c.slice(l,l+5))break;return f+=4,O(),void(b="Boolean");case 110:if("null"!==c.slice(l,l+4))break;return f+=3,O(),void(b="Null");case 116:if("true"!==c.slice(l,l+4))break;return f+=3,O(),void(b="Boolean")}b=c[l],O()}else b="EOF"}function E(){for(O();34!==p&&p>31;)if(92===p)switch(p=O(),p){case 34:case 47:case 92:case 98:case 102:case 110:case 114:case 116:O();break;case 117:O(),$(),$(),$(),$();break;default:throw N("Bad character escape sequence.")}else{if(f===u)throw N("Unterminated string.");O()}if(34!==p)throw N("Unterminated string.");O()}function $(){if(p>=48&&p<=57||p>=65&&p<=70||p>=97&&p<=102)return O();throw N("Expected hexadecimal digit.")}function j(){45===p&&O(),48===p?O():F(),46===p&&(O(),F()),69!==p&&101!==p||(p=O(),43!==p&&45!==p||O(),F())}function F(){if(p<48||p>57)throw N("Expected decimal digit.");do{O()}while(p>=48&&p<=57)}function T(e,n,r){var t;const a=[];for(const i of r.members)if(i){const r=null===(t=i.key)||void 0===t?void 0:t.value,s=n[r];if(s)for(const[n,t]of B(s,i.value))a.push(V(e,n,t));else a.push(V(e,i.key,`Variable "$${r}" does not appear in any GraphQL query.`))}return a}function B(e,n){if(!e||!n)return[];if(e instanceof a.bM)return"Null"===n.kind?[[n,`Type "${e}" is non-nullable and cannot be null.`]]:B(e.ofType,n);if("Null"===n.kind)return[];if(e instanceof a.p2){const r=e.ofType;if("Array"===n.kind){return C(n.values||[],(e=>B(r,e)))}return B(r,n)}if(e instanceof a.sR){if("Object"!==n.kind)return[[n,`Type "${e}" must be an Object.`]];const r=Object.create(null),t=C(n.members,(n=>{var t;const a=null===(t=null==n?void 0:n.key)||void 0===t?void 0:t.value;r[a]=!0;const i=e.getFields()[a];if(!i)return[[n.key,`Type "${e}" does not have a field "${a}".`]];return B(i?i.type:void 0,n.value)}));for(const i of Object.keys(e.getFields())){const s=e.getFields()[i];!r[i]&&s.type instanceof a.bM&&!s.defaultValue&&t.push([n,`Object of type "${e}" is missing required field "${i}".`])}return t}return"Boolean"===e.name&&"Boolean"!==n.kind||"String"===e.name&&"String"!==n.kind||"ID"===e.name&&"Number"!==n.kind&&"String"!==n.kind||"Float"===e.name&&"Number"!==n.kind||"Int"===e.name&&("Number"!==n.kind||(0|n.value)!==n.value)||(e instanceof a.mR||e instanceof a.n2)&&("String"!==n.kind&&"Number"!==n.kind&&"Boolean"!==n.kind&&"Null"!==n.kind||A(e.parseValue(n.value)))?[[n,`Expected value of type "${e}".`]]:[]}function V(e,n,r){return{message:r,severity:"error",type:"validation",from:e.posFromIndex(n.start),to:e.posFromIndex(n.end)}}function A(e){return null==e||e!=e}function C(e,n){return Array.prototype.concat.apply([],e.map(n))}s(w,"JSONSyntaxError"),s(N,"syntaxError"),s(x,"skip"),s(O,"ch"),s(S,"lex"),s(E,"readString"),s($,"readHex"),s(j,"readNumber"),s(F,"readDigits"),t.C.registerHelper("lint","graphql-variables",((e,n,r)=>{if(!e)return[];let t;try{t=o(e)}catch(i){if(i instanceof w)return[V(r,i.position,i.message)];throw i}const{variableToType:a}=n;return a?T(r,a,t):[]})),s(T,"validateVariables"),s(B,"validateValue"),s(V,"lintError"),s(A,"isNullish"),s(C,"mapCat")}}]);
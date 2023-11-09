"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7219],{7219:(e,t,r)=>{r.r(t),r.d(t,{c:()=>l});var n=r(8252),a=Object.defineProperty,i=(e,t)=>a(e,"name",{value:t,configurable:!0});function s(e,t){return t.forEach((function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(r){if("default"!==r&&!(r in e)){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})}}))})),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}i(s,"_mergeNamespaces");var o={exports:{}};!function(e){var t={pairs:"()[]{}''\"\"",closeBefore:")]}'\":;>",triples:"",explode:"[]{}"},r=e.Pos;function n(e,r){return"pairs"==r&&"string"==typeof e?e:"object"==typeof e&&null!=e[r]?e[r]:t[r]}e.defineOption("autoCloseBrackets",!1,(function(t,r,i){i&&i!=e.Init&&(t.removeKeyMap(a),t.state.closeBrackets=null),r&&(s(n(r,"pairs")),t.state.closeBrackets=r,t.addKeyMap(a))})),i(n,"getOption");var a={Backspace:c,Enter:u};function s(e){for(var t=0;t<e.length;t++){var r=e.charAt(t),n="'"+r+"'";a[n]||(a[n]=o(r))}}function o(e){return function(t){return p(t,e)}}function l(e){var t=e.state.closeBrackets;return!t||t.override?t:e.getModeAt(e.getCursor()).closeBrackets||t}function c(t){var a=l(t);if(!a||t.getOption("disableInput"))return e.Pass;for(var i=n(a,"pairs"),s=t.listSelections(),o=0;o<s.length;o++){if(!s[o].empty())return e.Pass;var c=d(t,s[o].head);if(!c||i.indexOf(c)%2!=0)return e.Pass}for(o=s.length-1;o>=0;o--){var u=s[o].head;t.replaceRange("",r(u.line,u.ch-1),r(u.line,u.ch+1),"+delete")}}function u(t){var r=l(t),a=r&&n(r,"explode");if(!a||t.getOption("disableInput"))return e.Pass;for(var i=t.listSelections(),s=0;s<i.length;s++){if(!i[s].empty())return e.Pass;var o=d(t,i[s].head);if(!o||a.indexOf(o)%2!=0)return e.Pass}t.operation((function(){var e=t.lineSeparator()||"\n";t.replaceSelection(e+e,null),f(t,-1),i=t.listSelections();for(var r=0;r<i.length;r++){var n=i[r].head.line;t.indentLine(n,null,!0),t.indentLine(n+1,null,!0)}}))}function f(e,t){for(var r=[],n=e.listSelections(),a=0,i=0;i<n.length;i++){var s=n[i];s.head==e.getCursor()&&(a=i);var o=s.head.ch||t>0?{line:s.head.line,ch:s.head.ch+t}:{line:s.head.line-1};r.push({anchor:o,head:o})}e.setSelections(r,a)}function h(t){var n=e.cmpPos(t.anchor,t.head)>0;return{anchor:new r(t.anchor.line,t.anchor.ch+(n?-1:1)),head:new r(t.head.line,t.head.ch+(n?1:-1))}}function p(t,a){var i=l(t);if(!i||t.getOption("disableInput"))return e.Pass;var s=n(i,"pairs"),o=s.indexOf(a);if(-1==o)return e.Pass;for(var c,u=n(i,"closeBefore"),p=n(i,"triples"),d=s.charAt(o+1)==a,v=t.listSelections(),b=o%2==0,k=0;k<v.length;k++){var y,S=v[k],O=S.head,P=t.getRange(O,r(O.line,O.ch+1));if(b&&!S.empty())y="surround";else if(!d&&b||P!=a)if(d&&O.ch>1&&p.indexOf(a)>=0&&t.getRange(r(O.line,O.ch-2),O)==a+a){if(O.ch>2&&/\bstring/.test(t.getTokenTypeAt(r(O.line,O.ch-2))))return e.Pass;y="addFour"}else if(d){var x=0==O.ch?" ":t.getRange(r(O.line,O.ch-1),O);if(e.isWordChar(P)||x==a||e.isWordChar(x))return e.Pass;y="both"}else{if(!b||!(0===P.length||/\s/.test(P)||u.indexOf(P)>-1))return e.Pass;y="both"}else y=d&&g(t,O)?"both":p.indexOf(a)>=0&&t.getRange(O,r(O.line,O.ch+3))==a+a+a?"skipThree":"skip";if(c){if(c!=y)return e.Pass}else c=y}var A=o%2?s.charAt(o-1):a,m=o%2?a:s.charAt(o+1);t.operation((function(){if("skip"==c)f(t,1);else if("skipThree"==c)f(t,3);else if("surround"==c){for(var e=t.getSelections(),r=0;r<e.length;r++)e[r]=A+e[r]+m;for(t.replaceSelections(e,"around"),e=t.listSelections().slice(),r=0;r<e.length;r++)e[r]=h(e[r]);t.setSelections(e)}else"both"==c?(t.replaceSelection(A+m,null),t.triggerElectric(A+m),f(t,-1)):"addFour"==c&&(t.replaceSelection(A+A+A+A,"before"),f(t,1))}))}function d(e,t){var n=e.getRange(r(t.line,t.ch-1),r(t.line,t.ch+1));return 2==n.length?n:null}function g(e,t){var n=e.getTokenAt(r(t.line,t.ch+1));return/\bstring/.test(n.type)&&n.start==t.ch&&(0==t.ch||!/\bstring/.test(e.getTokenTypeAt(t)))}i(s,"ensureBound"),s(t.pairs+"`"),i(o,"handler"),i(l,"getConfig"),i(c,"handleBackspace"),i(u,"handleEnter"),i(f,"moveSel"),i(h,"contractSelection"),i(p,"handleChar"),i(d,"charsAround"),i(g,"stringStartsAfter")}(n.a.exports);var l=s({__proto__:null,default:o.exports},[o.exports])}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2536],{76608:(e,t,n)=>{n.d(t,{r:()=>s});var r,i=n(1159),o=Object.defineProperty,l=(e,t)=>o(e,"name",{value:t,configurable:!0}),a={exports:{}};function s(){return r||(r=1,function(e){var t=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||document.documentMode<8),n=e.Pos,r={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function i(e){return e&&e.bracketRegex||/[(){}[\]]/}function o(e,t,o){var l=e.getLineHandle(t.line),s=t.ch-1,c=o&&o.afterCursor;null==c&&(c=/(^| )cm-fat-cursor($| )/.test(e.getWrapperElement().className));var f=i(o),u=!c&&s>=0&&f.test(l.text.charAt(s))&&r[l.text.charAt(s)]||f.test(l.text.charAt(s+1))&&r[l.text.charAt(++s)];if(!u)return null;var h=">"==u.charAt(1)?1:-1;if(o&&o.strict&&h>0!=(s==t.ch))return null;var d=e.getTokenTypeAt(n(t.line,s+1)),m=a(e,n(t.line,s+(h>0?1:0)),h,d,o);return null==m?null:{from:n(t.line,s),to:m&&m.pos,match:m&&m.ch==u.charAt(0),forward:h>0}}function a(e,t,o,l,a){for(var s=a&&a.maxScanLineLength||1e4,c=a&&a.maxScanLines||1e3,f=[],u=i(a),h=o>0?Math.min(t.line+c,e.lastLine()+1):Math.max(e.firstLine()-1,t.line-c),d=t.line;d!=h;d+=o){var m=e.getLine(d);if(m){var g=o>0?0:m.length-1,p=o>0?m.length:-1;if(!(m.length>s))for(d==t.line&&(g=t.ch-(o<0?1:0));g!=p;g+=o){var C=m.charAt(g);if(u.test(C)&&(void 0===l||(e.getTokenTypeAt(n(d,g+1))||"")==(l||""))){var v=r[C];if(v&&">"==v.charAt(1)==o>0)f.push(C);else{if(!f.length)return{pos:n(d,g),ch:C};f.pop()}}}}}return d-o!=(o>0?e.lastLine():e.firstLine())&&null}function s(e,r,i){for(var a=e.state.matchBrackets.maxHighlightLineLength||1e3,s=i&&i.highlightNonMatching,c=[],f=e.listSelections(),u=0;u<f.length;u++){var h=f[u].empty()&&o(e,f[u].head,i);if(h&&(h.match||!1!==s)&&e.getLine(h.from.line).length<=a){var d=h.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";c.push(e.markText(h.from,n(h.from.line,h.from.ch+1),{className:d})),h.to&&e.getLine(h.to.line).length<=a&&c.push(e.markText(h.to,n(h.to.line,h.to.ch+1),{className:d}))}}if(c.length){t&&e.state.focused&&e.focus();var m=l((function(){e.operation((function(){for(var e=0;e<c.length;e++)c[e].clear()}))}),"clear");if(!r)return m;setTimeout(m,800)}}function c(e){e.operation((function(){e.state.matchBrackets.currentlyHighlighted&&(e.state.matchBrackets.currentlyHighlighted(),e.state.matchBrackets.currentlyHighlighted=null),e.state.matchBrackets.currentlyHighlighted=s(e,!1,e.state.matchBrackets)}))}function f(e){e.state.matchBrackets&&e.state.matchBrackets.currentlyHighlighted&&(e.state.matchBrackets.currentlyHighlighted(),e.state.matchBrackets.currentlyHighlighted=null)}l(i,"bracketRegex"),l(o,"findMatchingBracket"),l(a,"scanForBracket"),l(s,"matchBrackets"),l(c,"doMatchBrackets"),l(f,"clearHighlighted"),e.defineOption("matchBrackets",!1,(function(t,n,r){r&&r!=e.Init&&(t.off("cursorActivity",c),t.off("focus",c),t.off("blur",f),f(t)),n&&(t.state.matchBrackets="object"==typeof n?n:{},t.on("cursorActivity",c),t.on("focus",c),t.on("blur",f))})),e.defineExtension("matchBrackets",(function(){s(this,!0)})),e.defineExtension("findMatchingBracket",(function(e,t,n){return(n||"boolean"==typeof t)&&(n?(n.strict=t,t=n):t=t?{strict:!0}:null),o(this,e,t)})),e.defineExtension("scanForBracket",(function(e,t,n,r){return a(this,e,t,n,r)}))}((0,i.r)())),a.exports}l(s,"requireMatchbrackets")},20650:(e,t,n)=>{n.d(t,{r:()=>s});var r,i=n(1159),o=Object.defineProperty,l=(e,t)=>o(e,"name",{value:t,configurable:!0}),a={exports:{}};function s(){return r||(r=1,function(e){var t,n,r=e.Pos;function i(e){return e.flags??(e.ignoreCase?"i":"")+(e.global?"g":"")+(e.multiline?"m":"")}function o(e,t){for(var n=i(e),r=n,o=0;o<t.length;o++)-1==r.indexOf(t.charAt(o))&&(r+=t.charAt(o));return n==r?e:new RegExp(e.source,r)}function a(e){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)}function s(e,t,n){t=o(t,"g");for(var i=n.line,l=n.ch,a=e.lastLine();i<=a;i++,l=0){t.lastIndex=l;var s=e.getLine(i),c=t.exec(s);if(c)return{from:r(i,c.index),to:r(i,c.index+c[0].length),match:c}}}function c(e,t,n){if(!a(t))return s(e,t,n);t=o(t,"gm");for(var i,l=1,c=n.line,f=e.lastLine();c<=f;){for(var u=0;u<l&&!(c>f);u++){var h=e.getLine(c++);i=null==i?h:i+"\n"+h}l*=2,t.lastIndex=n.ch;var d=t.exec(i);if(d){var m=i.slice(0,d.index).split("\n"),g=d[0].split("\n"),p=n.line+m.length-1,C=m[m.length-1].length;return{from:r(p,C),to:r(p+g.length-1,1==g.length?C+g[0].length:g[g.length-1].length),match:d}}}}function f(e,t,n){for(var r,i=0;i<=e.length;){t.lastIndex=i;var o=t.exec(e);if(!o)break;var l=o.index+o[0].length;if(l>e.length-n)break;(!r||l>r.index+r[0].length)&&(r=o),i=o.index+1}return r}function u(e,t,n){t=o(t,"g");for(var i=n.line,l=n.ch,a=e.firstLine();i>=a;i--,l=-1){var s=e.getLine(i),c=f(s,t,l<0?0:s.length-l);if(c)return{from:r(i,c.index),to:r(i,c.index+c[0].length),match:c}}}function h(e,t,n){if(!a(t))return u(e,t,n);t=o(t,"gm");for(var i,l=1,s=e.getLine(n.line).length-n.ch,c=n.line,h=e.firstLine();c>=h;){for(var d=0;d<l&&c>=h;d++){var m=e.getLine(c--);i=null==i?m:m+"\n"+i}l*=2;var g=f(i,t,s);if(g){var p=i.slice(0,g.index).split("\n"),C=g[0].split("\n"),v=c+p.length,S=p[p.length-1].length;return{from:r(v,S),to:r(v+C.length-1,1==C.length?S+C[0].length:C[C.length-1].length),match:g}}}}function d(e,t,n,r){if(e.length==t.length)return n;for(var i=0,o=n+Math.max(0,e.length-t.length);;){if(i==o)return i;var l=i+o>>1,a=r(e.slice(0,l)).length;if(a==n)return l;a>n?o=l:i=l+1}}function m(e,i,o,l){if(!i.length)return null;var a=l?t:n,s=a(i).split(/\r|\n\r?/);e:for(var c=o.line,f=o.ch,u=e.lastLine()+1-s.length;c<=u;c++,f=0){var h=e.getLine(c).slice(f),m=a(h);if(1==s.length){var g=m.indexOf(s[0]);if(-1==g)continue e;return o=d(h,m,g,a)+f,{from:r(c,d(h,m,g,a)+f),to:r(c,d(h,m,g+s[0].length,a)+f)}}var p=m.length-s[0].length;if(m.slice(p)==s[0]){for(var C=1;C<s.length-1;C++)if(a(e.getLine(c+C))!=s[C])continue e;var v=e.getLine(c+s.length-1),S=a(v),k=s[s.length-1];if(S.slice(0,k.length)==k)return{from:r(c,d(h,m,p,a)+f),to:r(c+s.length-1,d(v,S,k.length,a))}}}}function g(e,i,o,l){if(!i.length)return null;var a=l?t:n,s=a(i).split(/\r|\n\r?/);e:for(var c=o.line,f=o.ch,u=e.firstLine()-1+s.length;c>=u;c--,f=-1){var h=e.getLine(c);f>-1&&(h=h.slice(0,f));var m=a(h);if(1==s.length){var g=m.lastIndexOf(s[0]);if(-1==g)continue e;return{from:r(c,d(h,m,g,a)),to:r(c,d(h,m,g+s[0].length,a))}}var p=s[s.length-1];if(m.slice(0,p.length)==p){var C=1;for(o=c-s.length+1;C<s.length-1;C++)if(a(e.getLine(o+C))!=s[C])continue e;var v=e.getLine(c+1-s.length),S=a(v);if(S.slice(S.length-s[0].length)==s[0])return{from:r(c+1-s.length,d(v,S,v.length-s[0].length,a)),to:r(c,d(h,m,p.length,a))}}}}function p(e,t,n,i){var l;this.atOccurrence=!1,this.afterEmptyMatch=!1,this.doc=e,n=n?e.clipPos(n):r(0,0),this.pos={from:n,to:n},"object"==typeof i?l=i.caseFold:(l=i,i=null),"string"==typeof t?(null==l&&(l=!1),this.matches=function(n,r){return(n?g:m)(e,t,r,l)}):(t=o(t,"gm"),i&&!1===i.multiline?this.matches=function(n,r){return(n?u:s)(e,t,r)}:this.matches=function(n,r){return(n?h:c)(e,t,r)})}l(i,"regexpFlags"),l(o,"ensureFlags"),l(a,"maybeMultiline"),l(s,"searchRegexpForward"),l(c,"searchRegexpForwardMultiline"),l(f,"lastMatchIn"),l(u,"searchRegexpBackward"),l(h,"searchRegexpBackwardMultiline"),String.prototype.normalize?(t=l((function(e){return e.normalize("NFD").toLowerCase()}),"doFold"),n=l((function(e){return e.normalize("NFD")}),"noFold")):(t=l((function(e){return e.toLowerCase()}),"doFold"),n=l((function(e){return e}),"noFold")),l(d,"adjustPos"),l(m,"searchStringForward"),l(g,"searchStringBackward"),l(p,"SearchCursor"),p.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){var n=this.doc.clipPos(t?this.pos.from:this.pos.to);if(this.afterEmptyMatch&&this.atOccurrence&&(n=r(n.line,n.ch),t?(n.ch--,n.ch<0&&(n.line--,n.ch=(this.doc.getLine(n.line)||"").length)):(n.ch++,n.ch>(this.doc.getLine(n.line)||"").length&&(n.ch=0,n.line++)),0!=e.cmpPos(n,this.doc.clipPos(n))))return this.atOccurrence=!1;var i=this.matches(t,n);if(this.afterEmptyMatch=i&&0==e.cmpPos(i.from,i.to),i)return this.pos=i,this.atOccurrence=!0,this.pos.match||!0;var o=r(t?this.doc.firstLine():this.doc.lastLine()+1,0);return this.pos={from:o,to:o},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(t,n){if(this.atOccurrence){var i=e.splitLines(t);this.doc.replaceRange(i,this.pos.from,this.pos.to,n),this.pos.to=r(this.pos.from.line+i.length-1,i[i.length-1].length+(1==i.length?this.pos.from.ch:0))}}},e.defineExtension("getSearchCursor",(function(e,t,n){return new p(this.doc,e,t,n)})),e.defineDocExtension("getSearchCursor",(function(e,t,n){return new p(this,e,t,n)})),e.defineExtension("selectMatches",(function(t,n){for(var r=[],i=this.getSearchCursor(t,this.getCursor("from"),n);i.findNext()&&!(e.cmpPos(i.to(),this.getCursor("to"))>0);)r.push({anchor:i.from(),head:i.to()});r.length&&this.setSelections(r,0)}))}((0,i.r)())),a.exports}l(s,"requireSearchcursor")},92536:(e,t,n)=>{n.r(t),n.d(t,{s:()=>f});var r=n(1159),i=n(20650),o=n(76608),l=Object.defineProperty,a=(e,t)=>l(e,"name",{value:t,configurable:!0});function s(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}a(s,"_mergeNamespaces");!function(e){var t=e.commands,n=e.Pos;function r(t,r,i){if(i<0&&0==r.ch)return t.clipPos(n(r.line-1));var o=t.getLine(r.line);if(i>0&&r.ch>=o.length)return t.clipPos(n(r.line+1,0));for(var l,a="start",s=r.ch,c=s,f=i<0?0:o.length,u=0;c!=f;c+=i,u++){var h=o.charAt(i<0?c-1:c),d="_"!=h&&e.isWordChar(h)?"w":"o";if("w"==d&&h.toUpperCase()==h&&(d="W"),"start"==a)"o"!=d?(a="in",l=d):s=c+i;else if("in"==a&&l!=d){if("w"==l&&"W"==d&&i<0&&c--,"W"==l&&"w"==d&&i>0){if(c==s+1){l="w";continue}c--}break}}return n(r.line,c)}function i(e,t){e.extendSelectionsBy((function(n){return e.display.shift||e.doc.extend||n.empty()?r(e.doc,n.head,t):t<0?n.from():n.to()}))}function o(t,r){if(t.isReadOnly())return e.Pass;t.operation((function(){for(var e=t.listSelections().length,i=[],o=-1,l=0;l<e;l++){var a=t.listSelections()[l].head;if(!(a.line<=o)){var s=n(a.line+(r?0:1),0);t.replaceRange("\n",s,null,"+insertLine"),t.indentLine(s.line,null,!0),i.push({head:s,anchor:s}),o=a.line+1}}t.setSelections(i)})),t.execCommand("indentAuto")}function l(t,r){for(var i=r.ch,o=i,l=t.getLine(r.line);i&&e.isWordChar(l.charAt(i-1));)--i;for(;o<l.length&&e.isWordChar(l.charAt(o));)++o;return{from:n(r.line,i),to:n(r.line,o),word:l.slice(i,o)}}function s(e,t){for(var n=e.listSelections(),r=[],i=0;i<n.length;i++){var o=n[i],l=e.findPosV(o.anchor,t,"line",o.anchor.goalColumn),a=e.findPosV(o.head,t,"line",o.head.goalColumn);l.goalColumn=null!=o.anchor.goalColumn?o.anchor.goalColumn:e.cursorCoords(o.anchor,"div").left,a.goalColumn=null!=o.head.goalColumn?o.head.goalColumn:e.cursorCoords(o.head,"div").left;var s={anchor:l,head:a};r.push(o),r.push(s)}e.setSelections(r)}function c(t,n,r){for(var i=0;i<t.length;i++)if(0==e.cmpPos(t[i].from(),n)&&0==e.cmpPos(t[i].to(),r))return!0;return!1}a(r,"findPosSubword"),a(i,"moveSubword"),t.goSubwordLeft=function(e){i(e,-1)},t.goSubwordRight=function(e){i(e,1)},t.scrollLineUp=function(e){var t=e.getScrollInfo();if(!e.somethingSelected()){var n=e.lineAtHeight(t.top+t.clientHeight,"local");e.getCursor().line>=n&&e.execCommand("goLineUp")}e.scrollTo(null,t.top-e.defaultTextHeight())},t.scrollLineDown=function(e){var t=e.getScrollInfo();if(!e.somethingSelected()){var n=e.lineAtHeight(t.top,"local")+1;e.getCursor().line<=n&&e.execCommand("goLineDown")}e.scrollTo(null,t.top+e.defaultTextHeight())},t.splitSelectionByLine=function(e){for(var t=e.listSelections(),r=[],i=0;i<t.length;i++)for(var o=t[i].from(),l=t[i].to(),a=o.line;a<=l.line;++a)l.line>o.line&&a==l.line&&0==l.ch||r.push({anchor:a==o.line?o:n(a,0),head:a==l.line?l:n(a)});e.setSelections(r,0)},t.singleSelectionTop=function(e){var t=e.listSelections()[0];e.setSelection(t.anchor,t.head,{scroll:!1})},t.selectLine=function(e){for(var t=e.listSelections(),r=[],i=0;i<t.length;i++){var o=t[i];r.push({anchor:n(o.from().line,0),head:n(o.to().line+1,0)})}e.setSelections(r)},a(o,"insertLine"),t.insertLineAfter=function(e){return o(e,!1)},t.insertLineBefore=function(e){return o(e,!0)},a(l,"wordAt"),t.selectNextOccurrence=function(t){var r=t.getCursor("from"),i=t.getCursor("to"),o=t.state.sublimeFindFullWord==t.doc.sel;if(0==e.cmpPos(r,i)){var a=l(t,r);if(!a.word)return;t.setSelection(a.from,a.to),o=!0}else{var s=t.getRange(r,i),f=o?new RegExp("\\b"+s+"\\b"):s,u=t.getSearchCursor(f,i),h=u.findNext();if(h||(h=(u=t.getSearchCursor(f,n(t.firstLine(),0))).findNext()),!h||c(t.listSelections(),u.from(),u.to()))return;t.addSelection(u.from(),u.to())}o&&(t.state.sublimeFindFullWord=t.doc.sel)},t.skipAndSelectNextOccurrence=function(n){var r=n.getCursor("anchor"),i=n.getCursor("head");t.selectNextOccurrence(n),0!=e.cmpPos(r,i)&&n.doc.setSelections(n.doc.listSelections().filter((function(e){return e.anchor!=r||e.head!=i})))},a(s,"addCursorToSelection"),t.addCursorToPrevLine=function(e){s(e,-1)},t.addCursorToNextLine=function(e){s(e,1)},a(c,"isSelectedRange");var f="(){}[]";function u(t){for(var r=t.listSelections(),i=[],o=0;o<r.length;o++){var l=r[o],a=l.head,s=t.scanForBracket(a,-1);if(!s)return!1;for(;;){var c=t.scanForBracket(a,1);if(!c)return!1;if(c.ch==f.charAt(f.indexOf(s.ch)+1)){var u=n(s.pos.line,s.pos.ch+1);if(0!=e.cmpPos(u,l.from())||0!=e.cmpPos(c.pos,l.to())){i.push({anchor:u,head:c.pos});break}if(!(s=t.scanForBracket(s.pos,-1)))return!1}a=n(c.pos.line,c.pos.ch+1)}}return t.setSelections(i),!0}function h(e){return e?/\bpunctuation\b/.test(e)?e:void 0:null}function d(t,r,i){if(t.isReadOnly())return e.Pass;for(var o,l=t.listSelections(),a=[],s=0;s<l.length;s++){var c=l[s];if(!c.empty()){for(var f=c.from().line,u=c.to().line;s<l.length-1&&l[s+1].from().line==u;)u=l[++s].to().line;l[s].to().ch||u--,a.push(f,u)}}a.length?o=!0:a.push(t.firstLine(),t.lastLine()),t.operation((function(){for(var e=[],l=0;l<a.length;l+=2){var s=a[l],c=a[l+1],f=n(s,0),u=n(c),h=t.getRange(f,u,!1);r?h.sort((function(e,t){return e<t?-i:e==t?0:i})):h.sort((function(e,t){var n=e.toUpperCase(),r=t.toUpperCase();return n!=r&&(e=n,t=r),e<t?-i:e==t?0:i})),t.replaceRange(h,f,u),o&&e.push({anchor:f,head:n(c+1,0)})}o&&t.setSelections(e,0)}))}function m(t,n){t.operation((function(){for(var r=t.listSelections(),i=[],o=[],a=0;a<r.length;a++)(c=r[a]).empty()?(i.push(a),o.push("")):o.push(n(t.getRange(c.from(),c.to())));var s;for(t.replaceSelections(o,"around","case"),a=i.length-1;a>=0;a--){var c=r[i[a]];if(!(s&&e.cmpPos(c.head,s)>0)){var f=l(t,c.head);s=f.from,t.replaceRange(n(f.word),f.from,f.to)}}}))}function g(t){var n=t.getCursor("from"),r=t.getCursor("to");if(0==e.cmpPos(n,r)){var i=l(t,n);if(!i.word)return;n=i.from,r=i.to}return{from:n,to:r,query:t.getRange(n,r),word:i}}function p(e,t){var r=g(e);if(r){var i=r.query,o=e.getSearchCursor(i,t?r.to:r.from);(t?o.findNext():o.findPrevious())?e.setSelection(o.from(),o.to()):(o=e.getSearchCursor(i,t?n(e.firstLine(),0):e.clipPos(n(e.lastLine()))),(t?o.findNext():o.findPrevious())?e.setSelection(o.from(),o.to()):r.word&&e.setSelection(r.from,r.to))}}a(u,"selectBetweenBrackets"),t.selectScope=function(e){u(e)||e.execCommand("selectAll")},t.selectBetweenBrackets=function(t){if(!u(t))return e.Pass},a(h,"puncType"),t.goToBracket=function(t){t.extendSelectionsBy((function(r){var i=t.scanForBracket(r.head,1,h(t.getTokenTypeAt(r.head)));if(i&&0!=e.cmpPos(i.pos,r.head))return i.pos;var o=t.scanForBracket(r.head,-1,h(t.getTokenTypeAt(n(r.head.line,r.head.ch+1))));return o&&n(o.pos.line,o.pos.ch+1)||r.head}))},t.swapLineUp=function(t){if(t.isReadOnly())return e.Pass;for(var r=t.listSelections(),i=[],o=t.firstLine()-1,l=[],a=0;a<r.length;a++){var s=r[a],c=s.from().line-1,f=s.to().line;l.push({anchor:n(s.anchor.line-1,s.anchor.ch),head:n(s.head.line-1,s.head.ch)}),0==s.to().ch&&!s.empty()&&--f,c>o?i.push(c,f):i.length&&(i[i.length-1]=f),o=f}t.operation((function(){for(var e=0;e<i.length;e+=2){var r=i[e],o=i[e+1],a=t.getLine(r);t.replaceRange("",n(r,0),n(r+1,0),"+swapLine"),o>t.lastLine()?t.replaceRange("\n"+a,n(t.lastLine()),null,"+swapLine"):t.replaceRange(a+"\n",n(o,0),null,"+swapLine")}t.setSelections(l),t.scrollIntoView()}))},t.swapLineDown=function(t){if(t.isReadOnly())return e.Pass;for(var r=t.listSelections(),i=[],o=t.lastLine()+1,l=r.length-1;l>=0;l--){var a=r[l],s=a.to().line+1,c=a.from().line;0==a.to().ch&&!a.empty()&&s--,s<o?i.push(s,c):i.length&&(i[i.length-1]=c),o=c}t.operation((function(){for(var e=i.length-2;e>=0;e-=2){var r=i[e],o=i[e+1],l=t.getLine(r);r==t.lastLine()?t.replaceRange("",n(r-1),n(r),"+swapLine"):t.replaceRange("",n(r,0),n(r+1,0),"+swapLine"),t.replaceRange(l+"\n",n(o,0),null,"+swapLine")}t.scrollIntoView()}))},t.toggleCommentIndented=function(e){e.toggleComment({indent:!0})},t.joinLines=function(e){for(var t=e.listSelections(),r=[],i=0;i<t.length;i++){for(var o=t[i],l=o.from(),a=l.line,s=o.to().line;i<t.length-1&&t[i+1].from().line==s;)s=t[++i].to().line;r.push({start:a,end:s,anchor:!o.empty()&&l})}e.operation((function(){for(var t=0,i=[],o=0;o<r.length;o++){for(var l,a=r[o],s=a.anchor&&n(a.anchor.line-t,a.anchor.ch),c=a.start;c<=a.end;c++){var f=c-t;c==a.end&&(l=n(f,e.getLine(f).length+1)),f<e.lastLine()&&(e.replaceRange(" ",n(f),n(f+1,/^\s*/.exec(e.getLine(f+1))[0].length)),++t)}i.push({anchor:s||l,head:l})}e.setSelections(i,0)}))},t.duplicateLine=function(e){e.operation((function(){for(var t=e.listSelections().length,r=0;r<t;r++){var i=e.listSelections()[r];i.empty()?e.replaceRange(e.getLine(i.head.line)+"\n",n(i.head.line,0)):e.replaceRange(e.getRange(i.from(),i.to()),i.from())}e.scrollIntoView()}))},a(d,"sortLines"),t.sortLines=function(e){d(e,!0,1)},t.reverseSortLines=function(e){d(e,!0,-1)},t.sortLinesInsensitive=function(e){d(e,!1,1)},t.reverseSortLinesInsensitive=function(e){d(e,!1,-1)},t.nextBookmark=function(e){var t=e.state.sublimeBookmarks;if(t)for(;t.length;){var n=t.shift(),r=n.find();if(r)return t.push(n),e.setSelection(r.from,r.to)}},t.prevBookmark=function(e){var t=e.state.sublimeBookmarks;if(t)for(;t.length;){t.unshift(t.pop());var n=t[t.length-1].find();if(n)return e.setSelection(n.from,n.to);t.pop()}},t.toggleBookmark=function(e){for(var t=e.listSelections(),n=e.state.sublimeBookmarks||(e.state.sublimeBookmarks=[]),r=0;r<t.length;r++){for(var i=t[r].from(),o=t[r].to(),l=t[r].empty()?e.findMarksAt(i):e.findMarks(i,o),a=0;a<l.length;a++)if(l[a].sublimeBookmark){l[a].clear();for(var s=0;s<n.length;s++)n[s]==l[a]&&n.splice(s--,1);break}a==l.length&&n.push(e.markText(i,o,{sublimeBookmark:!0,clearWhenEmpty:!1}))}},t.clearBookmarks=function(e){var t=e.state.sublimeBookmarks;if(t)for(var n=0;n<t.length;n++)t[n].clear();t.length=0},t.selectBookmarks=function(e){var t=e.state.sublimeBookmarks,n=[];if(t)for(var r=0;r<t.length;r++){var i=t[r].find();i?n.push({anchor:i.from,head:i.to}):t.splice(r--,0)}n.length&&e.setSelections(n,0)},a(m,"modifyWordOrSelection"),t.smartBackspace=function(t){if(t.somethingSelected())return e.Pass;t.operation((function(){for(var r=t.listSelections(),i=t.getOption("indentUnit"),o=r.length-1;o>=0;o--){var l=r[o].head,a=t.getRange({line:l.line,ch:0},l),s=e.countColumn(a,null,t.getOption("tabSize")),c=t.findPosH(l,-1,"char",!1);if(a&&!/\S/.test(a)&&s%i==0){var f=new n(l.line,e.findColumn(a,s-i,i));f.ch!=l.ch&&(c=f)}t.replaceRange("",c,l,"+delete")}}))},t.delLineRight=function(e){e.operation((function(){for(var t=e.listSelections(),r=t.length-1;r>=0;r--)e.replaceRange("",t[r].anchor,n(t[r].to().line),"+delete");e.scrollIntoView()}))},t.upcaseAtCursor=function(e){m(e,(function(e){return e.toUpperCase()}))},t.downcaseAtCursor=function(e){m(e,(function(e){return e.toLowerCase()}))},t.setSublimeMark=function(e){e.state.sublimeMark&&e.state.sublimeMark.clear(),e.state.sublimeMark=e.setBookmark(e.getCursor())},t.selectToSublimeMark=function(e){var t=e.state.sublimeMark&&e.state.sublimeMark.find();t&&e.setSelection(e.getCursor(),t)},t.deleteToSublimeMark=function(t){var n=t.state.sublimeMark&&t.state.sublimeMark.find();if(n){var r=t.getCursor(),i=n;if(e.cmpPos(r,i)>0){var o=i;i=r,r=o}t.state.sublimeKilled=t.getRange(r,i),t.replaceRange("",r,i)}},t.swapWithSublimeMark=function(e){var t=e.state.sublimeMark&&e.state.sublimeMark.find();t&&(e.state.sublimeMark.clear(),e.state.sublimeMark=e.setBookmark(e.getCursor()),e.setCursor(t))},t.sublimeYank=function(e){null!=e.state.sublimeKilled&&e.replaceSelection(e.state.sublimeKilled,null,"paste")},t.showInCenter=function(e){var t=e.cursorCoords(null,"local");e.scrollTo(null,(t.top+t.bottom)/2-e.getScrollInfo().clientHeight/2)},a(g,"getTarget"),a(p,"findAndGoTo"),t.findUnder=function(e){p(e,!0)},t.findUnderPrevious=function(e){p(e,!1)},t.findAllUnder=function(e){var t=g(e);if(t){for(var n=e.getSearchCursor(t.query),r=[],i=-1;n.findNext();)r.push({anchor:n.from(),head:n.to()}),n.from().line<=t.from.line&&n.from().ch<=t.from.ch&&i++;e.setSelections(r,i)}};var C=e.keyMap;C.macSublime={"Cmd-Left":"goLineStartSmart","Shift-Tab":"indentLess","Shift-Ctrl-K":"deleteLine","Alt-Q":"wrapLines","Ctrl-Left":"goSubwordLeft","Ctrl-Right":"goSubwordRight","Ctrl-Alt-Up":"scrollLineUp","Ctrl-Alt-Down":"scrollLineDown","Cmd-L":"selectLine","Shift-Cmd-L":"splitSelectionByLine",Esc:"singleSelectionTop","Cmd-Enter":"insertLineAfter","Shift-Cmd-Enter":"insertLineBefore","Cmd-D":"selectNextOccurrence","Shift-Cmd-Space":"selectScope","Shift-Cmd-M":"selectBetweenBrackets","Cmd-M":"goToBracket","Cmd-Ctrl-Up":"swapLineUp","Cmd-Ctrl-Down":"swapLineDown","Cmd-/":"toggleCommentIndented","Cmd-J":"joinLines","Shift-Cmd-D":"duplicateLine",F5:"sortLines","Shift-F5":"reverseSortLines","Cmd-F5":"sortLinesInsensitive","Shift-Cmd-F5":"reverseSortLinesInsensitive",F2:"nextBookmark","Shift-F2":"prevBookmark","Cmd-F2":"toggleBookmark","Shift-Cmd-F2":"clearBookmarks","Alt-F2":"selectBookmarks",Backspace:"smartBackspace","Cmd-K Cmd-D":"skipAndSelectNextOccurrence","Cmd-K Cmd-K":"delLineRight","Cmd-K Cmd-U":"upcaseAtCursor","Cmd-K Cmd-L":"downcaseAtCursor","Cmd-K Cmd-Space":"setSublimeMark","Cmd-K Cmd-A":"selectToSublimeMark","Cmd-K Cmd-W":"deleteToSublimeMark","Cmd-K Cmd-X":"swapWithSublimeMark","Cmd-K Cmd-Y":"sublimeYank","Cmd-K Cmd-C":"showInCenter","Cmd-K Cmd-G":"clearBookmarks","Cmd-K Cmd-Backspace":"delLineLeft","Cmd-K Cmd-1":"foldAll","Cmd-K Cmd-0":"unfoldAll","Cmd-K Cmd-J":"unfoldAll","Ctrl-Shift-Up":"addCursorToPrevLine","Ctrl-Shift-Down":"addCursorToNextLine","Cmd-F3":"findUnder","Shift-Cmd-F3":"findUnderPrevious","Alt-F3":"findAllUnder","Shift-Cmd-[":"fold","Shift-Cmd-]":"unfold","Cmd-I":"findIncremental","Shift-Cmd-I":"findIncrementalReverse","Cmd-H":"replace",F3:"findNext","Shift-F3":"findPrev",fallthrough:"macDefault"},e.normalizeKeyMap(C.macSublime),C.pcSublime={"Shift-Tab":"indentLess","Shift-Ctrl-K":"deleteLine","Alt-Q":"wrapLines","Ctrl-T":"transposeChars","Alt-Left":"goSubwordLeft","Alt-Right":"goSubwordRight","Ctrl-Up":"scrollLineUp","Ctrl-Down":"scrollLineDown","Ctrl-L":"selectLine","Shift-Ctrl-L":"splitSelectionByLine",Esc:"singleSelectionTop","Ctrl-Enter":"insertLineAfter","Shift-Ctrl-Enter":"insertLineBefore","Ctrl-D":"selectNextOccurrence","Shift-Ctrl-Space":"selectScope","Shift-Ctrl-M":"selectBetweenBrackets","Ctrl-M":"goToBracket","Shift-Ctrl-Up":"swapLineUp","Shift-Ctrl-Down":"swapLineDown","Ctrl-/":"toggleCommentIndented","Ctrl-J":"joinLines","Shift-Ctrl-D":"duplicateLine",F9:"sortLines","Shift-F9":"reverseSortLines","Ctrl-F9":"sortLinesInsensitive","Shift-Ctrl-F9":"reverseSortLinesInsensitive",F2:"nextBookmark","Shift-F2":"prevBookmark","Ctrl-F2":"toggleBookmark","Shift-Ctrl-F2":"clearBookmarks","Alt-F2":"selectBookmarks",Backspace:"smartBackspace","Ctrl-K Ctrl-D":"skipAndSelectNextOccurrence","Ctrl-K Ctrl-K":"delLineRight","Ctrl-K Ctrl-U":"upcaseAtCursor","Ctrl-K Ctrl-L":"downcaseAtCursor","Ctrl-K Ctrl-Space":"setSublimeMark","Ctrl-K Ctrl-A":"selectToSublimeMark","Ctrl-K Ctrl-W":"deleteToSublimeMark","Ctrl-K Ctrl-X":"swapWithSublimeMark","Ctrl-K Ctrl-Y":"sublimeYank","Ctrl-K Ctrl-C":"showInCenter","Ctrl-K Ctrl-G":"clearBookmarks","Ctrl-K Ctrl-Backspace":"delLineLeft","Ctrl-K Ctrl-1":"foldAll","Ctrl-K Ctrl-0":"unfoldAll","Ctrl-K Ctrl-J":"unfoldAll","Ctrl-Alt-Up":"addCursorToPrevLine","Ctrl-Alt-Down":"addCursorToNextLine","Ctrl-F3":"findUnder","Shift-Ctrl-F3":"findUnderPrevious","Alt-F3":"findAllUnder","Shift-Ctrl-[":"fold","Shift-Ctrl-]":"unfold","Ctrl-I":"findIncremental","Shift-Ctrl-I":"findIncrementalReverse","Ctrl-H":"replace",F3:"findNext","Shift-F3":"findPrev",fallthrough:"pcDefault"},e.normalizeKeyMap(C.pcSublime);var v=C.default==C.macDefault;C.sublime=v?C.macSublime:C.pcSublime}((0,r.r)(),(0,i.r)(),(0,o.r)());var c={};const f=s({__proto__:null,default:(0,r.g)(c)},[c])}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4477],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(7605),i=(n(9496),n(9613));const a={},s="Pinning",o={unversionedId:"protocol/js-ceramic/guides/ceramic-clients/javascript-clients/pinning",id:"protocol/js-ceramic/guides/ceramic-clients/javascript-clients/pinning",title:"Pinning",description:"Pinning allows you to persist and make streams available on a Ceramic node beyond a single session. This guide demonstrates how to add and remove streams from your node's pinset, and how to list the streams currently in the pinset. In order to interact with a pinset, you must have installed a Ceramic client.",source:"@site/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/pinning.md",sourceDirName:"protocol/js-ceramic/guides/ceramic-clients/javascript-clients",slug:"/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/pinning",permalink:"/docs-docusaurus/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/pinning",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"protocol",previous:{title:"Queries",permalink:"/docs-docusaurus/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/queries"},next:{title:"DID JSON-RPC client",permalink:"/docs-docusaurus/docs/protocol/js-ceramic/guides/ceramic-clients/authentication/did-jsonrpc"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"<strong>Pin a stream while creating it</strong>",id:"pin-a-stream-while-creating-it",level:2},{value:"<strong>Add to pinset</strong>",id:"add-to-pinset",level:2},{value:"<strong>Remove from pinset</strong>",id:"remove-from-pinset",level:2},{value:"<strong>List streams in pinset</strong>",id:"list-streams-in-pinset",level:2}],p={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pinning"},"Pinning"),(0,i.kt)("p",null,"Pinning allows you to persist and make streams available on a Ceramic node beyond a single session. This guide demonstrates how to add and remove streams from your node's pinset, and how to list the streams currently in the pinset. In order to interact with a pinset, you must have ",(0,i.kt)("a",{parentName:"p",href:"/docs-docusaurus/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/ceramic-http"},"installed a Ceramic client"),"."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"By default Ceramic will garbage collect any stream that has been written or ",(0,i.kt)("a",{parentName:"p",href:"/docs-docusaurus/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/queries"},"queried")," on your node after some period of time. In order to prevent the loss of streams due to garbage collection, you need to explicitly pin the streams that you wish to persist. Pinning instructs the node to keep them around in persistent storage until they are explicitly unpinned."),(0,i.kt)("h2",{id:"pin-a-stream-while-creating-it"},(0,i.kt)("strong",{parentName:"h2"},"Pin a stream while creating it")),(0,i.kt)("p",null,"Most StreamTypes will allow you to request that a Stream be pinned at the same time that you create the Stream. An example using the TileDocument Streamtype is below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"await TileDocument.create(ceramic, content, null, { pin: true })\n")),(0,i.kt)("h2",{id:"add-to-pinset"},(0,i.kt)("strong",{parentName:"h2"},"Add to pinset")),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"pin.add()")," method to add an existing stream to your permanent pinset."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const streamId = 'kjzl6cwe1jw14...'\nawait ceramic.pin.add(streamId)\n")),(0,i.kt)("h2",{id:"remove-from-pinset"},(0,i.kt)("strong",{parentName:"h2"},"Remove from pinset")),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"pin.rm()")," method to remove a stream from your permanent pinset."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const streamId = 'kjzl6cwe1jw14...'\nawait ceramic.pin.rm(streamId)\n")),(0,i.kt)("h2",{id:"list-streams-in-pinset"},(0,i.kt)("strong",{parentName:"h2"},"List streams in pinset")),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"pin.ls()")," method to list streams currently in your permanent pinset."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const streamIds = await ceramic.pin.ls()\n")))}u.isMDXComponent=!0}}]);
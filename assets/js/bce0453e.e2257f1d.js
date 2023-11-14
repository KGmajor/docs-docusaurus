"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4477],{50116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(11527),i=n(63883);const r={},a="Pinning",c={id:"protocol/js-ceramic/guides/ceramic-clients/javascript-clients/pinning",title:"Pinning",description:"Pinning allows you to persist and make streams available on a Ceramic node beyond a single session. This guide demonstrates how to add and remove streams from your node's pinset, and how to list the streams currently in the pinset. In order to interact with a pinset, you must have installed a Ceramic client.",source:"@site/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/pinning.md",sourceDirName:"protocol/js-ceramic/guides/ceramic-clients/javascript-clients",slug:"/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/pinning",permalink:"/docs-docusaurus/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/pinning",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"protocol",previous:{title:"Queries",permalink:"/docs-docusaurus/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/queries"},next:{title:"DID JSON-RPC client",permalink:"/docs-docusaurus/docs/protocol/js-ceramic/guides/ceramic-clients/authentication/did-jsonrpc"}},o={},l=[{value:"Overview",id:"overview",level:2},{value:"<strong>Pin a stream while creating it</strong>",id:"pin-a-stream-while-creating-it",level:2},{value:"<strong>Add to pinset</strong>",id:"add-to-pinset",level:2},{value:"<strong>Remove from pinset</strong>",id:"remove-from-pinset",level:2},{value:"<strong>List streams in pinset</strong>",id:"list-streams-in-pinset",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"pinning",children:"Pinning"}),"\n",(0,s.jsxs)(t.p,{children:["Pinning allows you to persist and make streams available on a Ceramic node beyond a single session. This guide demonstrates how to add and remove streams from your node's pinset, and how to list the streams currently in the pinset. In order to interact with a pinset, you must have ",(0,s.jsx)(t.a,{href:"/docs-docusaurus/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/ceramic-http",children:"installed a Ceramic client"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:["By default Ceramic will garbage collect any stream that has been written or ",(0,s.jsx)(t.a,{href:"/docs-docusaurus/docs/protocol/js-ceramic/guides/ceramic-clients/javascript-clients/queries",children:"queried"})," on your node after some period of time. In order to prevent the loss of streams due to garbage collection, you need to explicitly pin the streams that you wish to persist. Pinning instructs the node to keep them around in persistent storage until they are explicitly unpinned."]}),"\n",(0,s.jsx)(t.h2,{id:"pin-a-stream-while-creating-it",children:(0,s.jsx)(t.strong,{children:"Pin a stream while creating it"})}),"\n",(0,s.jsx)(t.p,{children:"Most StreamTypes will allow you to request that a Stream be pinned at the same time that you create the Stream. An example using the TileDocument Streamtype is below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"await TileDocument.create(ceramic, content, null, { pin: true })\n"})}),"\n",(0,s.jsx)(t.h2,{id:"add-to-pinset",children:(0,s.jsx)(t.strong,{children:"Add to pinset"})}),"\n",(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.code,{children:"pin.add()"})," method to add an existing stream to your permanent pinset."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const streamId = 'kjzl6cwe1jw14...'\nawait ceramic.pin.add(streamId)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"remove-from-pinset",children:(0,s.jsx)(t.strong,{children:"Remove from pinset"})}),"\n",(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.code,{children:"pin.rm()"})," method to remove a stream from your permanent pinset."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const streamId = 'kjzl6cwe1jw14...'\nawait ceramic.pin.rm(streamId)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"list-streams-in-pinset",children:(0,s.jsx)(t.strong,{children:"List streams in pinset"})}),"\n",(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.code,{children:"pin.ls()"})," method to list streams currently in your permanent pinset."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const streamIds = await ceramic.pin.ls()\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},63883:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var s=n(50959);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
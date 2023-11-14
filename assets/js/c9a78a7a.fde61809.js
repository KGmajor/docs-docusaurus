"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1797],{7080:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=o(11527),a=o(63883);const r={},s="Data Storage",i={id:"composedb/guides/composedb-server/data-storage",title:"Data Storage",description:"Store and remove data from your node",source:"@site/docs/composedb/guides/composedb-server/data-storage.mdx",sourceDirName:"composedb/guides/composedb-server",slug:"/composedb/guides/composedb-server/data-storage",permalink:"/docs-docusaurus/docs/composedb/guides/composedb-server/data-storage",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"composedb",previous:{title:"Access Ceramic Mainnet",permalink:"/docs-docusaurus/docs/composedb/guides/composedb-server/access-mainnet"},next:{title:"Data Interactions",permalink:"/docs-docusaurus/docs/composedb/guides/data-interactions/"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Storage &amp; Removal",id:"storage--removal",level:2},{value:"Deletion",id:"deletion",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"data-storage",children:"Data Storage"}),"\n",(0,n.jsx)(t.p,{children:"Store and remove data from your node"}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"In production, node operators can choose what content to store on their node by pinning and unpinning models or streams. Unpinning is not synonymous with deletion."}),"\n",(0,n.jsx)(t.h2,{id:"storage--removal",children:"Storage & Removal"}),"\n",(0,n.jsxs)(t.p,{children:["In order to prevent the loss of streams due to garbage collection, you need to explicitly pin the streams that you wish to persist. Pinning instructs the node to keep them around in persistent storage until they are explicitly unpinned. To view the commands for pinning & unpinning, see the ",(0,n.jsx)(t.a,{href:"../../../protocol/js-ceramic/guides/ceramic-clients/javascript-clients/pinning",children:"Ceramic docs"})," here."]}),"\n",(0,n.jsx)(t.h2,{id:"deletion",children:"Deletion"}),"\n",(0,n.jsx)(t.p,{children:"When using or participating in the Ceramic Network you should know that the data streams created have a slightly different set of operations that can be performed on them from the standard CRUD operations you may be used to in other tech stacks."}),"\n",(0,n.jsx)(t.p,{children:"All data streams are globally readable.  If you know the streamID of any and all data streams that exist on the network you, and any other app in the world, can access the data values.  This is the backbone of composability.  Without this globally readable trait data created on Ceramic would not be portable from app to app."}),"\n",(0,n.jsx)(t.p,{children:"There is no \u201cdelete\u201d operation on a Ceramic data stream.  By nature the blockchain is a public ledger, and as such once a Ceramic stream is anchored on-chain, it will forever exist there.  Although this data may end up becoming stale over time, it is forever preserved in the state it was last anchored.  Since we cannot mutate the blockchain, we cannot ever perform a full deletion of a Ceramic data stream.  Take this into consideration when deciding what types of data you plan to store on the Ceramic network."})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},63883:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>s});var n=o(50959);const a={},r=n.createContext(a);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
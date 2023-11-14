"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5747],{6908:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=n(11527),o=n(63883);const a={},t="Managing Sessions",r={id:"dids/managing-sessions",title:"Managing Sessions",description:"A session can be managed in a few different ways. All sessions consist of a session key in the form of a did:key and a CACAO object-capability.",source:"@site/docs/dids/managing-sessions.md",sourceDirName:"dids",slug:"/dids/managing-sessions",permalink:"/docs-docusaurus/docs/dids/managing-sessions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"dids",previous:{title:"Configuration",permalink:"/docs-docusaurus/docs/dids/configuration"},next:{title:"Concepts overview",permalink:"/docs-docusaurus/docs/dids/guides/concepts-overview"}},c={},d=[{value:"Automatically persisted sessions",id:"automatically-persisted-sessions",level:2},{value:"Session lifecycle management",id:"session-lifecycle-management",level:2},{value:"Manual session management",id:"manual-session-management",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"managing-sessions",children:"Managing Sessions"}),"\n",(0,i.jsxs)(s.p,{children:["A session can be managed in a few different ways. All sessions consist of a session key in the form of a ",(0,i.jsx)(s.code,{children:"did:key"})," and a CACAO object-capability."]}),"\n",(0,i.jsx)(s.h2,{id:"automatically-persisted-sessions",children:"Automatically persisted sessions"}),"\n",(0,i.jsxs)(s.p,{children:["By default (when using ",(0,i.jsx)(s.code,{children:"DIDSession.get(...)"}),") sessions are persisted to ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",children:"IndexedDB"})," in the background. The private key for this session is always a ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey/extractable",children:"non-extractable"})," key, which means that they key itself can't be stolen by a malicious browser extension or script."]}),"\n",(0,i.jsxs)(s.p,{children:["You can check if there already exists an authorized session for any given account using the ",(0,i.jsx)(s.code,{children:"hasSessionFor"})," method. This can be useful if you want to know if the ",(0,i.jsx)(s.code,{children:"DIDSession.get"})," call with result in a wallet interaction from the user, which will happen if ",(0,i.jsx)(s.code,{children:"hasSessionFor"})," returns ",(0,i.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"if (await DIDSession.hasSessionFor(accountId, resources: [...])) {\n  console.log(`There is an active session for ${accountId}`)\n}\n"})}),"\n",(0,i.jsx)(s.h2,{id:"session-lifecycle-management",children:"Session lifecycle management"}),"\n",(0,i.jsx)(s.p,{children:"Additional helper functions are available on DIDSession instances to help you manage a session lifecycle and the user experience."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"// Check if authorized or created from existing session string\ndidsession.hasSession\n\n// Check if session expired\ndidsession.isExpired\n\n// Get resources session is authorized for\ndidsession.authorizations\n\n// Check number of seconds till expiration, may want to re auth user at a time before expiration\ndidsession.expiresInSecs\n"})}),"\n",(0,i.jsx)(s.h2,{id:"manual-session-management",children:"Manual session management"}),"\n",(0,i.jsxs)(s.p,{children:["If you don't want to rely on browsers non-extractable keys, or you are not in a browser environment you can use the ",(0,i.jsx)(s.code,{children:"DIDSession.authorize(...)"})," function. This function creates a session that can be serialized to a string. You can store this for later and then re-initialize. Currently sessions are valid\nfor 1 week by default."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"// Create session as above, store for later\nconst session = await DIDSession.authorize(authMethod, { resources: [...]})\nconst sessionString = session.serialize()\n\n// write/save session string where you want (e.g. filesystem)\n// ...\n\n// Later re initialize session\nconst session2 = await DIDSession.fromSession(sessionString)\n"})})]})}function u(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},63883:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>t});var i=n(50959);const o={},a=i.createContext(o);function t(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);
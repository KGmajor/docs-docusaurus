"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1708],{79628:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var i=n(11527),r=n(63883);const t={},d="Module: did-session",o={id:"protocol/js-ceramic/guides/ceramic-clients/authentication/did-session",title:"Module: did-session",description:"Manages user account DIDs in web based environments.",source:"@site/docs/protocol/js-ceramic/guides/ceramic-clients/authentication/did-session.md",sourceDirName:"protocol/js-ceramic/guides/ceramic-clients/authentication",slug:"/protocol/js-ceramic/guides/ceramic-clients/authentication/did-session",permalink:"/docs-docusaurus/docs/protocol/js-ceramic/guides/ceramic-clients/authentication/did-session",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"protocol",previous:{title:"Key DID libraries",permalink:"/docs-docusaurus/docs/protocol/js-ceramic/guides/ceramic-clients/authentication/key-did"},next:{title:"CAIP-10 Link client",permalink:"/docs-docusaurus/docs/protocol/js-ceramic/guides/ceramic-clients/stream-api/caip10-link"}},c={},a=[{value:"Purpose",id:"purpose",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Typical usage pattern",id:"typical-usage-pattern",level:2},{value:"Upgrading from <code>did-session@0.x.x</code> to <code>did-session@1.x.x</code>",id:"upgrading-from-did-session0xx-to-did-session1xx",level:2},{value:"Upgrading from <code>@glazed/did-session</code> to <code>did-session</code>",id:"upgrading-from-glazeddid-session-to-did-session",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Accessors",id:"accessors",level:2},{value:"authorizations",id:"authorizations",level:3},{value:"Returns",id:"returns",level:4},{value:"cacao",id:"cacao",level:3},{value:"Returns",id:"returns-1",level:4},{value:"did",id:"did",level:3},{value:"Returns",id:"returns-2",level:4},{value:"expireInSecs",id:"expireinsecs",level:3},{value:"Returns",id:"returns-3",level:4},{value:"hasSession",id:"hassession",level:3},{value:"Returns",id:"returns-4",level:4},{value:"id",id:"id",level:3},{value:"Returns",id:"returns-5",level:4},{value:"isExpired",id:"isexpired",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Methods",id:"methods",level:2},{value:"isAuthorized",id:"isauthorized",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-7",level:4},{value:"serialize",id:"serialize",level:3},{value:"Returns",id:"returns-8",level:4},{value:"authorize",id:"authorize",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-9",level:4},{value:"fromSession",id:"fromsession",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-10",level:4},{value:"initDID",id:"initdid",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-11",level:4}];function l(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"module-did-session",children:"Module: did-session"}),"\n",(0,i.jsx)(s.p,{children:"Manages user account DIDs in web based environments."}),"\n",(0,i.jsx)(s.h2,{id:"purpose",children:"Purpose"}),"\n",(0,i.jsxs)(s.p,{children:["Manages, creates and authorizes a DID session key for a user. Returns an authenticated DIDs instance\nto be used in other Ceramic libraries. Supports did",":pkh"," for blockchain accounts with Sign-In with\nEthereum and CACAO for authorization."]}),"\n",(0,i.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"npm install did-session\n"})}),"\n",(0,i.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(s.p,{children:"Authorize and use DIDs where needed. Import the AuthMethod you need, Ethereum accounts are used here for example."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"import { DIDSession } from 'did-session'\nimport { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum'\n\nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.enable()\nconst accountId = await getAccountId(ethProvider, addresses[0])\nconst authMethod = await EthereumWebAuth.getAuthMethod(ethProvider, accountId)\n\nconst session = await DIDSession.authorize(authMethod, { resources: [...]})\n\n// Uses DIDs in ceramic, combosedb & glaze libraries, ie\nconst ceramic = new CeramicClient()\nceramic.did = session.did\n\n// pass ceramic instance where needed\n"})}),"\n",(0,i.jsx)(s.p,{children:"You can serialize a session to store for later and then re-initialize. Currently sessions are valid\nfor 1 day by default."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"// Create session as above, store for later\nconst session = await DIDSession.authorize(authMethod, { resources: [...]})\nconst sessionString = session.serialize()\n\n// write/save session string where you want (ie localstorage)\n// ...\n\n// Later re initialize session\nconst session2 = await DIDSession.fromSession(sessionString)\nconst ceramic = new CeramicClient()\nceramic.did = session2.did\n"})}),"\n",(0,i.jsx)(s.p,{children:"Additional helper functions are available to help you manage a session lifecycle and the user experience."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"// Check if authorized or created from existing session string\ndidsession.hasSession\n\n// Check if session expired\ndidsession.isExpired\n\n// Get resources session is authorized for\ndidsession.authorizations\n\n// Check number of seconds till expiration, may want to re auth user at a time before expiration\ndidsession.expiresInSecs\n"})}),"\n",(0,i.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(s.p,{children:["The resources your app needs to write access to must be passed during authorization. Resources are an array\nof Model Stream Ids or Streams Ids. Typically you will just pass resources from ",(0,i.jsx)(s.code,{children:"@composedb"})," libraries as\nyou will already manage your Composites and Models there. For example:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"import { ComposeClient } from '@composedb/client'\n\n//... Reference above and `@composedb` docs for additional configuration here\n\nconst client = new ComposeClient({ ceramic, definition })\nconst resources = client.resources\nconst session = await DIDSession.authorize(authMethod, { resources })\nclient.setDID(session.did)\n"})}),"\n",(0,i.jsxs)(s.p,{children:["By default a session will expire in 1 day. You can change this time by passing the ",(0,i.jsx)(s.code,{children:"expiresInSecs"})," option to\nindicate how many seconds from the current time you want this session to expire."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"const oneWeek = 60 * 60 * 24 * 7\nconst session = await DIDSession.authorize(authMethod, { resources: [...], expiresInSecs: oneWeek })\n"})}),"\n",(0,i.jsxs)(s.p,{children:["A domain/app name is used when making requests, by default in a browser based environment the library will use\nthe domain name of your app. If you are using the library in a non web based environment you will need to pass\nthe ",(0,i.jsx)(s.code,{children:"domain"})," option otherwise an error will thrown."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"const session = await DIDSession.authorize(authMethod, { resources: [...], domain: 'YourAppName' })\n"})}),"\n",(0,i.jsx)(s.h2,{id:"typical-usage-pattern",children:"Typical usage pattern"}),"\n",(0,i.jsx)(s.p,{children:"A typical pattern is to store a serialized session in local storage and load on use if available. Then\ncheck that a session is still valid before making writes."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Warning:"})," LocalStorage is used for illustrative purposes here and may not be best for your app, as\nthere is a number of known issues with storing secret material in browser storage. The session string\nallows anyone with access to that string to make writes for that user for the time and resources that\nsession is valid for. How that session string is stored and managed is the responsibility of the application."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"import { DIDSession } from 'did-session'\nimport type { AuthMethod } from '@didtools/cacao'\nimport { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum'\n\nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.enable()\nconst accountId = await getAccountId(ethProvider, addresses[0])\nconst authMethod = await EthereumWebAuth.getAuthMethod(ethProvider, accountId)\n\nconst loadSession = async(authMethod: AuthMethod):Promise<DIDSession> => {\n  const sessionStr = localStorage.getItem('didsession')\n  let session\n\n  if (sessionStr) {\n    session = await DIDSession.fromSession(sessionStr)\n  }\n\n  if (!session || (session.hasSession && session.isExpired)) {\n    session = await DIDSession.authorize(authMethod, { resources: [...]})\n    localStorage.setItem('didsession', session.serialize())\n  }\n\n  return session\n}\n\nconst session = await loadSession(authMethod)\nconst ceramic = new CeramicClient()\nceramic.did = session.did\n\n// pass ceramic instance where needed, ie ceramic, composedb, glaze\n// ...\n\n// before ceramic writes, check if session is still valid, if expired, create new\nif (session.isExpired) {\n  const session = loadSession(authMethod)\n  ceramic.did = session.did\n}\n\n// continue to write\n"})}),"\n",(0,i.jsxs)(s.h2,{id:"upgrading-from-did-session0xx-to-did-session1xx",children:["Upgrading from ",(0,i.jsx)(s.code,{children:"did-session@0.x.x"})," to ",(0,i.jsx)(s.code,{children:"did-session@1.x.x"})]}),"\n",(0,i.jsx)(s.p,{children:"AuthProviders change to AuthMethod interfaces. Similarly you can import the auth libraries you need. How you configure and manage\nthese AuthMethods may differ, but each will return an AuthMethod function to be used with did-session."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"// Before with v0.x.x\n//...\nimport { EthereumAuthProvider } from '@ceramicnetwork/blockchain-utils-linking'\n\nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.enable()\nconst authProvider = new EthereumAuthProvider(ethProvider, addresses[0])\nconst session = new DIDSession({ authProvider })\nconst did = await session.authorize()\n\n// Now did-session@1.0.0\n...\nimport { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum'\n\nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.enable()\nconst accountId = await getAccountId(ethProvider, addresses[0])\nconst authMethod = await EthereumWebAuth.getAuthMethod(ethProvider, accountId)\nconst session = await DIDSession.authorize(authMethod, { resources: [...]})\nconst did = session.did\n"})}),"\n",(0,i.jsxs)(s.h2,{id:"upgrading-from-glazeddid-session-to-did-session",children:["Upgrading from ",(0,i.jsx)(s.code,{children:"@glazed/did-session"})," to ",(0,i.jsx)(s.code,{children:"did-session"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"authorize"})," changes to a static method which returns a did-session instance and ",(0,i.jsx)(s.code,{children:"getDID()"})," becomes a ",(0,i.jsx)(s.code,{children:"did"})," getter. For example:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"// Before @glazed/did-session\nconst session = new DIDSession({ authProvider })\nconst did = await session.authorize()\n\n// Now did-session\nconst session = await DIDSession.authorize(authMethod, { resources: [...]})\nconst did = session.did\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Requesting resources are required now when authorizing, before wildcard (access all) was the default. You can continue to use\nwildcard by passing the following _ below. Wildcard is typically only used with ",(0,i.jsx)(s.code,{children:"@glazed"})," libraries and/or tile documents and\nit is best to switch over when possible, as the wildcard option may be _ deprecated in the future. When using with\ncomposites/models you should request the minimum needed resources instead."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"const session = await DIDSession.authorize(authMethod, { resources: [`ceramic://*`] })\nconst did = session.did\n"})}),"\n",(0,i.jsx)(s.h1,{id:"class-didsession",children:"Class: DIDSession"}),"\n",(0,i.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsx)(s.h3,{id:"constructor",children:"constructor"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"new DIDSession"}),"(",(0,i.jsx)(s.code,{children:"params"}),")"]}),"\n",(0,i.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"params"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"SessionParams"})})]})})]}),"\n",(0,i.jsx)(s.h2,{id:"accessors",children:"Accessors"}),"\n",(0,i.jsx)(s.h3,{id:"authorizations",children:"authorizations"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.code,{children:"get"})," ",(0,i.jsx)(s.strong,{children:"authorizations"}),"(): ",(0,i.jsx)(s.code,{children:"string"}),"[]"]}),"\n",(0,i.jsx)(s.p,{children:"Get the list of resources a session is authorized for"}),"\n",(0,i.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"string"}),"[]"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"cacao",children:"cacao"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.code,{children:"get"})," ",(0,i.jsx)(s.strong,{children:"cacao"}),"(): ",(0,i.jsx)(s.code,{children:"Cacao"})]}),"\n",(0,i.jsx)(s.p,{children:"Get the session CACAO"}),"\n",(0,i.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"Cacao"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"did",children:"did"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.code,{children:"get"})," ",(0,i.jsx)(s.strong,{children:"did"}),"(): ",(0,i.jsx)(s.code,{children:"DID"})]}),"\n",(0,i.jsx)(s.p,{children:"Get DID instance, if authorized"}),"\n",(0,i.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"DID"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"expireinsecs",children:"expireInSecs"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.code,{children:"get"})," ",(0,i.jsx)(s.strong,{children:"expireInSecs"}),"(): ",(0,i.jsx)(s.code,{children:"number"})]}),"\n",(0,i.jsx)(s.p,{children:"Number of seconds until a session expires"}),"\n",(0,i.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"number"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"hassession",children:"hasSession"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.code,{children:"get"})," ",(0,i.jsx)(s.strong,{children:"hasSession"}),"(): ",(0,i.jsx)(s.code,{children:"boolean"})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"boolean"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"id",children:"id"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.code,{children:"get"})," ",(0,i.jsx)(s.strong,{children:"id"}),"(): ",(0,i.jsx)(s.code,{children:"string"})]}),"\n",(0,i.jsx)(s.p,{children:"DID string associated to the session instance. session.id == session.getDID().parent"}),"\n",(0,i.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"string"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"isexpired",children:"isExpired"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.code,{children:"get"})," ",(0,i.jsx)(s.strong,{children:"isExpired"}),"(): ",(0,i.jsx)(s.code,{children:"boolean"})]}),"\n",(0,i.jsx)(s.p,{children:"Determine if a session is expired or not"}),"\n",(0,i.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"boolean"})}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"isauthorized",children:"isAuthorized"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"isAuthorized"}),"(",(0,i.jsx)(s.code,{children:"resources?"}),"): ",(0,i.jsx)(s.code,{children:"boolean"})]}),"\n",(0,i.jsx)(s.p,{children:"Determine if session is available and optionally if authorized for given resources"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"resources?"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"string"}),"[]"]})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-7",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"boolean"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"serialize",children:"serialize"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"serialize"}),"(): ",(0,i.jsx)(s.code,{children:"string"})]}),"\n",(0,i.jsx)(s.p,{children:"Serialize session into string, can store and initalize the same session again while valid"}),"\n",(0,i.jsx)(s.h4,{id:"returns-8",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"string"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"authorize",children:"authorize"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.code,{children:"Static"})," ",(0,i.jsx)(s.strong,{children:"authorize"}),"(",(0,i.jsx)(s.code,{children:"authMethod"}),", ",(0,i.jsx)(s.code,{children:"authOpts?"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"DIDSession"}),">"]}),"\n",(0,i.jsx)(s.p,{children:"Request authorization for session"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"authMethod"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"AuthMethod"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"authOpts"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"AuthOpts"})})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-9",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"DIDSession"}),">"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"fromsession",children:"fromSession"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.code,{children:"Static"})," ",(0,i.jsx)(s.strong,{children:"fromSession"}),"(",(0,i.jsx)(s.code,{children:"session"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"DIDSession"}),">"]}),"\n",(0,i.jsx)(s.p,{children:"Initialize a session from a serialized session string"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"session"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"string"})})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-10",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"DIDSession"}),">"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"initdid",children:"initDID"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.code,{children:"Static"})," ",(0,i.jsx)(s.strong,{children:"initDID"}),"(",(0,i.jsx)(s.code,{children:"didKey"}),", ",(0,i.jsx)(s.code,{children:"cacao"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"DID"}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"didKey"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"DID"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"cacao"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"Cacao"})})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-11",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"DID"}),">"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},63883:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>d});var i=n(50959);const r={},t=i.createContext(r);function d(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);
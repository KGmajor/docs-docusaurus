"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4644],{90606:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=o(11527),r=o(63883);o(37421),o(81779);const i={},a="Wheel reference",s={id:"wheel/wheel-reference",title:"Wheel reference",description:"This reference explains Wheel prompt options and covers Ceramic configurations in more detail.",source:"@site/docs/wheel/wheel-reference.mdx",sourceDirName:"wheel",slug:"/wheel/wheel-reference",permalink:"/docs-docusaurus/docs/wheel/wheel-reference",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"wheel"},l={},c=[{value:"Wheel prompt reference",id:"wheel-prompt-reference",level:2},{value:"Project Type",id:"project-type",level:3},{value:"Project Name",id:"project-name",level:3},{value:"Project Path",id:"project-path",level:3},{value:"Include Ceramic",id:"include-ceramic",level:3},{value:"Include ComposeDB",id:"include-composedb",level:3},{value:"Include ComposeDB Sample Application?",id:"include-composedb-sample-application",level:3},{value:"Admin DID Configuration",id:"admin-did-configuration",level:3},{value:"File to save DID private key to?",id:"file-to-save-did-private-key-to",level:3},{value:"CAS URL",id:"cas-url",level:3},{value:"CAS Authentication",id:"cas-authentication",level:3},{value:"Wheel config file location",id:"wheel-config-file-location",level:3},{value:"Configure Ceramic",id:"configure-ceramic",level:3},{value:"Would you like ceramic started as a daemon?",id:"would-you-like-ceramic-started-as-a-daemon",level:3},{value:"Ceramic configuration",id:"ceramic-configuration",level:2},{value:"Bundled or Remote IPFS",id:"bundled-or-remote-ipfs",level:3},{value:"State Store",id:"state-store",level:3},{value:"Bind address",id:"bind-address",level:3},{value:"Bind port",id:"bind-port",level:3},{value:"Cors origins",id:"cors-origins",level:3},{value:"Run as gateway?",id:"run-as-gateway",level:3},{value:"Indexing Database",id:"indexing-database",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"wheel-reference",children:"Wheel reference"}),"\n",(0,t.jsx)(n.p,{children:"This reference explains Wheel prompt options and covers Ceramic configurations in more detail."}),"\n",(0,t.jsx)(n.h2,{id:"wheel-prompt-reference",children:"Wheel prompt reference"}),"\n",(0,t.jsx)(n.p,{children:"With Wheel, you can fully customize your working directory. Below you can find a prompt reference\ncovering each step of the Wheel prompt."}),"\n",(0,t.jsx)(n.h3,{id:"project-type",children:"Project Type"}),"\n",(0,t.jsx)(n.p,{children:"Your project type based on the project development stage. You can choose one of\nthe following options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"InMemory"})," - recommended project type for developers who are new to Ceramic and ComposeDB.\nIt\u2019s the best option for projects in an early prototyping stage and getting familiar with Ceramic stack.\nThis option runs all of the processes in-memory and doesn\u2019t require you to configure Ceramic Anchor Service.\nThis also means that the data generated for your project will not be anchored on a blockchain and will be lost\nonce you close your terminal."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Dev"})," - or projects in early testing/development stage. This is a recommended option for projects in an early\nideation stage or testing. Your node will connect to a dev-unstable network which is a Ceramic network dedicated\nto testing. Important thing to remember about dev-unstable network is that the data stored on this network is wiped\nout periodically as part of regular housekeeping. This means that the data streams generated for your project can be lost."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Clay"})," - for projects in the active development stage. It\u2019s a recommended option for projects that are past the ideation\nstage. Your node will connect to the clay-testnet network and anchor the data streams so that they are available for you\nproject at any point of the development. Clay testnet, just like dev-unstable network gets wiped out periodically for\nhousekeeping reasons."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Mainnet"})," - for projects in the production stage. This option will require you to do more advanced configurations for\nyour working environment. Generally, this option is only recommended for generating a production cofiguration file to be\nused with a production deployment like ",(0,t.jsx)(n.a,{href:"../composedb/guides/composedb-server/running-in-the-cloud",children:"Kubernetes"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"project-name",children:"Project Name"}),"\n",(0,t.jsx)(n.p,{children:"Set the name for your project. You can use a default option ceramic-test-app or type a custom one. This\nname will be used to create a local directory of your project."}),"\n",(0,t.jsx)(n.h3,{id:"project-path",children:"Project Path"}),"\n",(0,t.jsx)(n.p,{children:"Path to your project local directory. You can use the default suggested path or specify a custom one."}),"\n",(0,t.jsx)(n.h3,{id:"include-ceramic",children:"Include Ceramic"}),"\n",(0,t.jsxs)(n.p,{children:["An option to install Ceramic CLI and Ceramic dependencies in your working environment.\nDefaults to ",(0,t.jsx)(n.code,{children:"Y"})," - yes. To skip Ceramic installation, type ",(0,t.jsx)(n.code,{children:"n"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"include-composedb",children:"Include ComposeDB"}),"\n",(0,t.jsxs)(n.p,{children:["An option to install ComposeDB CLI and dependencies in your working environment.\nDefaults to ",(0,t.jsx)(n.code,{children:"Y"})," - yes. To skip ComposeDB installation, type ",(0,t.jsx)(n.code,{children:"n"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"include-composedb-sample-application",children:"Include ComposeDB Sample Application?"}),"\n",(0,t.jsxs)(n.p,{children:["An option to include and set up an example web3 social application built using ComposeDB\non Ceramic. This application can be used as an easy way to test ComposeDB features or use\nthis project as a basis for a new unique application. Defaults to ",(0,t.jsx)(n.code,{children:"n"})," - no. To opt-in, type ",(0,t.jsx)(n.code,{children:"Y"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"admin-did-configuration",children:"Admin DID Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Indexing is one of the key features of ComposeDB. In order to notify the Ceramic node which models have to be indexed, the\nComposeDB tools have to interact with the restricted Admin API. Calling the API requires an authenticated Decentralized\nIdentifier (DID) to be provided in the node configuration file. You can choose from the following options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Generate DID and Private Key - generate a new admin DID as well as a private key (recommended for all new projects)"}),"\n",(0,t.jsx)(n.li,{children:"Input From File - you will be given an option to input an existing private key as well as a corresponding admin DID"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"file-to-save-did-private-key-to",children:"File to save DID private key to?"}),"\n",(0,t.jsx)(n.p,{children:"An option to store your DID private key on a specified local file. You can use a default path,\nspecify a custom one or skip this step if you don\u2019t want to store a DID private key on a local file by pressing esc on your keyboard."}),"\n",(0,t.jsx)(n.h3,{id:"cas-url",children:"CAS URL"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Dev"}),", ",(0,t.jsx)(n.code,{children:"Clay"})," and ",(0,t.jsx)(n.code,{children:"Mainnet"})," projects run a node that connects to CAS (Ceramic Anchor Service) to create anchor\ncommits on the blockchain for the data streams generated for your project. You will be given an option to specify CAS URL - you can\nuse the default suggestion (recommended in most of the cases) or specify a custom url if you run your own anchor service."]}),"\n",(0,t.jsx)(n.h3,{id:"cas-authentication",children:"CAS Authentication"}),"\n",(0,t.jsxs)(n.p,{children:["In order to control the nodes connected to CAS (Ceramic Anchor Service), you will have to ",(0,t.jsx)(n.a,{href:"../composedb/guides/composedb-server/access-mainnet",children:"configure the authentication"}),".\nThis will allow you to set or revoke DIDs for your nodes. You can choose from the following options:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Email Based Authentication - an email authentication methid. You will be asked to provide an email that will be used to provide you with an OTP code (a passcode) needed for the authentication."}),"\n",(0,t.jsx)(n.li,{children:"IP Based Authentication (Deprecated) - currently deprecated authentication method. Not recommended for new Ceramic users."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"wheel-config-file-location",children:"Wheel config file location"}),"\n",(0,t.jsx)(n.p,{children:"Specifies the path to the Wheel configuration file. This file contains all parameters set during the Wheel configuration process. You can use the default suggestion\nor set a custom one."}),"\n",(0,t.jsx)(n.h3,{id:"configure-ceramic",children:"Configure Ceramic"}),"\n",(0,t.jsx)(n.p,{children:"When installing Ceramic you can either go with default configurations (recommended if you are new to Ceramic) or you can configure a bunch of parameters for how your node is set up.\nYou can choose one of the following options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Skip: Use default configuration based on network"}),"\n",(0,t.jsx)(n.li,{children:"Advanced: Configure all ceramic options"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Check out Ceramic configurations section to learn the details about the parameters you can configure for Basic and Advanced options."}),"\n",(0,t.jsx)(n.h3,{id:"would-you-like-ceramic-started-as-a-daemon",children:"Would you like ceramic started as a daemon?"}),"\n",(0,t.jsxs)(n.p,{children:["An option to start your Ceramic daemon which will spin up the node using the Ceramic configuration you chose. Defaults to ",(0,t.jsx)(n.code,{children:"Y"})," - yes. If you want to skip and run your node later, type ",(0,t.jsx)(n.code,{children:"n"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"ceramic-configuration",children:"Ceramic configuration"}),"\n",(0,t.jsxs)(n.p,{children:["This section dives deeper into the Ceramic parameters you can configure when you choose ",(0,t.jsx)(n.code,{children:"Advanced: Configure all ceramic options"})," option in your wheel prompt."]}),"\n",(0,t.jsx)(n.h3,{id:"bundled-or-remote-ipfs",children:"Bundled or Remote IPFS"}),"\n",(0,t.jsx)(n.p,{children:"An option to define if IFPS runs in the same compute process as Ceramic. You have two options to choose from:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Bundled - IPFS running in same compute process as Ceramic; recommended for early prototyping."}),"\n",(0,t.jsx)(n.li,{children:"Remote - IPFS running in separate compute process; recommended for production and everything besides early prototyping.\nThis assumes that you have the IPFS process setup and can provide an IPFS Hostname."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"state-store",children:"State Store"}),"\n",(0,t.jsxs)(n.p,{children:["An option to choose where your data will be persisted. To run a Ceramic node in production, it is critical to persist the\xa0",(0,t.jsx)(n.a,{href:"https://developers.ceramic.network/run/nodes/nodes/#ceramic-state-store",children:"Ceramic state store"}),"\nand the\xa0",(0,t.jsx)(n.a,{href:"https://github.com/ipfs/go-ipfs/blob/master/docs/config.md#datastorespec",children:"IPFS datastore"}),". You can choose from two options:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Local - Ceramic state store will be stored on your machine's filesystem. This is a good option for early development and prototyping.\nIf you choose this option, you will be asked to provide a path to your preferred state store directory or you can go with a provided default option."}),"\n",(0,t.jsx)(n.li,{children:"S3 - cloud statestore. It\u2019s a recommended option for production use cases. This assumes that you have an S3 bucked already setup and can provide\nthe path to your bucket running on the cloud."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"bind-address",children:"Bind address"}),"\n",(0,t.jsxs)(n.p,{children:["Specifies the url for the Ceramic daemon. Defaults to ",(0,t.jsx)(n.code,{children:"127.0.0.1"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"bind-port",children:"Bind port"}),"\n",(0,t.jsxs)(n.p,{children:["Specifies the port for Ceramic daemon. Defaults to ",(0,t.jsx)(n.code,{children:"7071"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"cors-origins",children:"Cors origins"}),"\n",(0,t.jsx)(n.p,{children:"An option to define which domains are allowed to access the node using the http-api. Default option allows access to all domains."}),"\n",(0,t.jsx)(n.h3,{id:"run-as-gateway",children:"Run as gateway?"}),"\n",(0,t.jsx)(n.p,{children:"An option to run the node in a read-only mode. This option doesn\u2019t support data mutations."}),"\n",(0,t.jsx)(n.h3,{id:"indexing-database",children:"Indexing Database"}),"\n",(0,t.jsx)(n.p,{children:"Indexing is one of the key features of ComposeDB on Ceramic. ComposeDB indexes data to improve the query performance. You can choose which database will be used to store indexed data:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Sqlite - simple ",(0,t.jsx)(n.a,{href:"https://sqlite.org/index.html",children:"sqlite"})," database running on your local machine. This option is very lightweight, doesn\u2019t require advanced configurations and is\nrecommended for projects in an early development stage. When choosing this option you will be asked to configure the sqlite database location - either use your current working directory or specify a custom one."]}),"\n",(0,t.jsx)(n.li,{children:"Postgres - a Postgres database running on your local machine. This option requires a little bit more configuration and is required for production use cases. When you choose this option, you will be asked to provide\nthe Postgres Database connection string."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},81779:(e,n,o)=>{o.d(n,{Z:()=>a});o(50959);var t=o(45924);const r={tabItem:"tabItem_e7Wc"};var i=o(11527);function a(e){let{children:n,hidden:o,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,a),hidden:o,children:n})}},37421:(e,n,o)=>{o.d(n,{Z:()=>w});var t=o(50959),r=o(45924),i=o(71988),a=o(28903),s=o(739),l=o(99965),c=o(43251),d=o(76698);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:o}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:o,attributes:t,default:r}}=e;return{value:n,label:o,attributes:t,default:r}}))}(o);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function p(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:o}=e;const r=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,l._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function f(e){const{defaultValue:n,queryString:o=!1,groupId:r}=e,i=h(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=o.find((e=>e.default))??o[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:o,groupId:r}),[f,g]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Nk)(o);return[r,(0,t.useCallback)((e=>{o&&i.set(e)}),[o,i])]}({groupId:r}),y=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{y&&l(y)}),[y]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=o(12049);const y={tabList:"tabList_c3am",tabItem:"tabItem_iDuG"};var v=o(11527);function j(e){let{className:n,block:o,selectedValue:t,selectValue:a,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,o=l.indexOf(n),r=s[o].value;r!==t&&(c(n),a(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;n=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;n=l[o]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},n),children:s.map((e=>{let{value:n,label:o,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":t===n}),children:o??n},n)}))})}function b(e){let{lazy:n,children:o,selectedValue:r}=e;const i=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function x(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",y.tabList),children:[(0,v.jsx)(j,{...e,...n}),(0,v.jsx)(b,{...e,...n})]})}function w(e){const n=(0,g.Z)();return(0,v.jsx)(x,{...e,children:u(e.children)},String(n))}},63883:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>a});var t=o(50959);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
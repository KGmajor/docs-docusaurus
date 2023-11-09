"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7412],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(b,s(s({ref:t},c),{},{components:n})):a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7270:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(9496),r=n(5924),o=n(9465),s=n(6224),l=n(6084),i=n(935);const u={cardContainer:"cardContainer_UF6P",cardTitle:"cardTitle_z1zL",cardDescription:"cardDescription_qotf"};function c(e){let{href:t,children:n}=e;return a.createElement(s.Z,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer)},n)}function p(e){let{href:t,icon:n,title:o,description:s}=e;return a.createElement(c,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",u.cardTitle),title:o},n," ",o),s&&a.createElement("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:s},s))}function d(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?a.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,i.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return a.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(m,{item:t});case"category":return a.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,o.jA)();return a.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return a.createElement(f,e);const s=(0,o.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",n)},s.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(b,{item:e})))))}},1559:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(9496),r=n(5924);const o={tabItem:"tabItem_O8e8"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n},t)}},306:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7605),r=n(9496),o=n(5924),s=n(5724),l=n(3442),i=n(3440),u=n(7688),c=n(1528);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=b({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=i??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var h=n(417);const g={tabList:"tabList_STZg",tabItem:"tabItem_Fukr"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(7605),r=(n(9496),n(9613)),o=n(306),s=n(1559),l=n(7270);const i={},u="JavaScript Client",c={unversionedId:"composedb/guides/composedb-client/javascript-client",id:"composedb/guides/composedb-client/javascript-client",title:"JavaScript Client",description:"APIs to interact with ComposeDB from JavaScript, TypeScript, or React.",source:"@site/docs/composedb/guides/composedb-client/javascript-client.mdx",sourceDirName:"composedb/guides/composedb-client",slug:"/composedb/guides/composedb-client/javascript-client",permalink:"/docs-docusaurus/docs/composedb/guides/composedb-client/javascript-client",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"composedb",previous:{title:"ComposeDB Client",permalink:"/docs-docusaurus/docs/composedb/guides/composedb-client/"},next:{title:"Using Apollo GraphQL Client",permalink:"/docs-docusaurus/docs/composedb/guides/composedb-client/using-apollo"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Queries",id:"queries",level:2},{value:"Executing Queries",id:"executing-queries",level:3},{value:"Mutations",id:"mutations",level:2},{value:"Enabling Mutations",id:"enabling-mutations",level:3},{value:"Executing mutations",id:"executing-mutations",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Related Guides",id:"related-guides",level:2}],m={toc:d},b="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"javascript-client"},"JavaScript Client"),(0,r.kt)("p",null,"APIs to interact with ComposeDB from JavaScript, TypeScript, or React. "),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"/docs-docusaurus/docs/composedb/guides/data-modeling/composites#compiling-composites"},"compiled composite"))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Install the ComposeDB client package:"),(0,r.kt)(o.Z,{defaultValue:"pnpm",groupId:"npm-or-pnpm-or-yarn",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @composedb/client\n"))),(0,r.kt)(s.Z,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @composedb/client\n"))),(0,r.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @composedb/client\n")))),(0,r.kt)("p",null,"If you\u2019re using TypeScript, you may also need to install ComposeDB Types:"),(0,r.kt)(o.Z,{defaultValue:"pnpm",groupId:"npm-or-pnpm-or-yarn",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D @composedb/types\n"))),(0,r.kt)(s.Z,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add -D @composedb/types\n"))),(0,r.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D @composedb/types\n")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Create a client instance by passing your server URL and your compiled composite:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// Import ComposeDB client\n\nimport { ComposeClient }from '@composedb/client'\n\n// Import your compiled composite\n\nimport { definition }from './__generated__/definition.js'\n\n// Create an instance of ComposeClient\n// Pass the URL of your Ceramic server\n// Pass reference to your compiled composite\n\nconst compose = new ComposeClient({ ceramic: 'http://localhost:7007', definition })\n\n")),(0,r.kt)("p",null,"More details:\xa0",(0,r.kt)("a",{parentName:"p",href:"https://composedb.js.org/docs/0.5.x/api/classes/client.ComposeClient"},(0,r.kt)("inlineCode",{parentName:"a"},"ComposeClient"))),(0,r.kt)("h2",{id:"queries"},"Queries"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"executing-queries"},"Executing Queries"),(0,r.kt)("p",null,"Execute GraphQL ",(0,r.kt)("a",{parentName:"p",href:"/docs-docusaurus/docs/composedb/guides/data-interactions/queries"},"Queries")," using the schema that is auto-generated from your compiled composite:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// Get account of authenticated user\n\nawait compose.executeQuery(`\n  query {\n    viewer {\n      id\n    }\n  }\n`)\n\n")),(0,r.kt)("p",null,"More details:\xa0",(0,r.kt)("a",{parentName:"p",href:"https://composedb.js.org/docs/0.5.x/api/classes/client.ComposeClient#executequery"},(0,r.kt)("inlineCode",{parentName:"a"},"executeQuery"))),(0,r.kt)("h2",{id:"mutations"},"Mutations"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"enabling-mutations"},"Enabling Mutations"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Before enabling mutations you must ",(0,r.kt)("a",{parentName:"p",href:"/docs-docusaurus/docs/composedb/guides/composedb-client/authenticate-users"},"authenticate the user"),".")),(0,r.kt)("p",null,"After you have an authenticated user, enable ",(0,r.kt)("a",{parentName:"p",href:"/docs-docusaurus/docs/composedb/guides/data-interactions/mutations"},"mutations")," by setting their authenticated account on the ComposeDB client:"),(0,r.kt)(o.Z,{defaultValue:"with-sessions",groupId:"with-or-without-sessions",values:[{label:"With Sessions",value:"with-sessions"},{label:"Without Sessions",value:"without-sessions"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"with-sessions",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// Assign the authorized did from your session to your client\n\ncompose.setDID(session.did)\n"))),(0,r.kt)(s.Z,{value:"without-sessions",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// Call setDID method on ComposeClient instance\n// Using authenticated did instance\n\ncompose.setDID(did)\n")))),(0,r.kt)("h3",{id:"executing-mutations"},"Executing mutations"),(0,r.kt)("p",null,"In your client, you can execute GraphQL mutations using the schema that is auto-generated from your compiled composite. Follow examples in the ",(0,r.kt)("a",{parentName:"p",href:"/docs-docusaurus/docs/composedb/guides/data-interactions/mutations"},"mutations")," guide."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Learn how to ",(0,r.kt)("a",{parentName:"p",href:"/docs-docusaurus/docs/composedb/guides/composedb-client/authenticate-users"},(0,r.kt)("strong",{parentName:"a"},"Authenticate Users \u2192"))),(0,r.kt)("h2",{id:"related-guides"},"Related Guides"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"ComposeDB\u2019s JavaScript client optionally works with popular GraphQL clients:"),(0,r.kt)(l.Z,{mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);
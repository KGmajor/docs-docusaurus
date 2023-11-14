"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1563],{1509:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>a});var t=s(11527),i=s(63883);const n={},l="Create your composite",d={id:"composedb/create-your-composite",title:"Create your composite",description:"Create your composite to serve as your graph database schema. In this guide, we will create your first composite.",source:"@site/docs/composedb/create-your-composite.mdx",sourceDirName:"composedb",slug:"/composedb/create-your-composite",permalink:"/docs-docusaurus/docs/composedb/create-your-composite",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"composedb",previous:{title:"Set up your environment",permalink:"/docs-docusaurus/docs/composedb/set-up-your-environment"},next:{title:"Interact with data",permalink:"/docs-docusaurus/docs/composedb/interact-with-data"}},c={},a=[{value:"Overview",id:"overview",level:2},{value:"Data Model Catalog",id:"data-model-catalog",level:2},{value:"List all models",id:"list-all-models",level:3},{value:"Creating the composite",id:"creating-the-composite",level:2},{value:"Using a single model",id:"using-a-single-model",level:3},{value:"Using multiple models",id:"using-multiple-models",level:3},{value:"Using the composite",id:"using-the-composite",level:2},{value:"Deploying the composite",id:"deploying-the-composite",level:3},{value:"Compiling the composite",id:"compiling-the-composite",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Related Guides",id:"related-guides",level:2}];function r(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"create-your-composite",children:"Create your composite"}),"\n",(0,t.jsx)(o.p,{children:"Create your composite to serve as your graph database schema. In this guide, we will create your first composite."}),"\n",(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsxs)(o.p,{children:["Before continuing, you must have ",(0,t.jsx)(o.a,{href:"/docs-docusaurus/docs/composedb/set-up-your-environment",children:"set up your environment"})," in the previous step"]})}),"\n",(0,t.jsx)(o.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(o.hr,{}),"\n",(0,t.jsx)(o.p,{children:"A composite is your database schema for ComposeDB, which includes a collection of data models. Once created, your composite instructs your node which models to index and also allows your client to perform queries and mutations on these models."}),"\n",(0,t.jsx)(o.h2,{id:"data-model-catalog",children:"Data Model Catalog"}),"\n",(0,t.jsx)(o.hr,{}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.a,{href:"/docs-docusaurus/docs/composedb/guides/data-modeling/model-catalog",children:"Model Catalog"})," contains all models created by other ComposeDB developers. By creating or reusing models within the model catalog in your composite, you can instantly share and sync data with other applications. This brings native app data composability to Web3 -- no more API integrations."]}),"\n",(0,t.jsx)(o.h3,{id:"list-all-models",children:"List all models"}),"\n",(0,t.jsx)(o.p,{children:"To list all models in the model catalog, run the following command:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"composedb model:list --table\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Here, the flag ",(0,t.jsx)(o.code,{children:"--table"})," will display the output in an organized table view and provide more details about each model\u2019s functionality.  By default, this command lists models in production on mainnet.  To see models being developed on clay testnet, specify ",(0,t.jsx)(o.code,{children:"--network=testnet-clay"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"composedb model:list --network=testnet-clay --table\n"})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Data Model Table",src:s(50150).Z+"",width:"2824",height:"1422"})}),"\n",(0,t.jsx)(o.p,{children:"Notice each model has the following properties:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Name"})," - model name"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Unique ID"})," - unique identifier (stream ID) for the model"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Description"})," - description of the model\u2019s functionality"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"creating-the-composite",children:"Creating the composite"}),"\n",(0,t.jsx)(o.hr,{}),"\n",(0,t.jsx)(o.p,{children:"In this section we will show how to create a composite by downloading models from the model catalog."}),"\n",(0,t.jsx)(o.h3,{id:"using-a-single-model",children:"Using a single model"}),"\n",(0,t.jsxs)(o.p,{children:["You can fetch any existing model from the catalog by referencing the model\u2019s unique ID. For example, for your basic social media app, use the existing model ",(0,t.jsx)(o.code,{children:"SimpleProfile"}),". To fetch the model, to your working directory, take note of the model stream ID in the table above and run the following command:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"composedb composite:from-model kjzl6hvfrbw6c5ajfmes842lu09vjxu5956e3xq0xk12gp2jcf9s90cagt2god9 --ceramic-url=http://localhost:7007 --output=my-first-composite-single.json\n"})}),"\n",(0,t.jsxs)(o.p,{children:["After running the command above, your will have the ",(0,t.jsx)(o.code,{children:"SimpleProfile"})," model stored locally in a file called ",(0,t.jsx)(o.code,{children:"my-first-composite-single.json"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"using-multiple-models",children:"Using multiple models"}),"\n",(0,t.jsxs)(o.p,{children:["If your application needs multiple models, for example the ",(0,t.jsx)(o.code,{children:"SimpleProfile"})," and ",(0,t.jsx)(o.code,{children:"Post"})," models, you can. To fetch them, take note of the model stream IDs and provide them in a ComposeDB CLI command as follows:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"composedb composite:from-model kjzl6hvfrbw6c5ajfmes842lu09vjxu5956e3xq0xk12gp2jcf9s90cagt2god9 kjzl6hvfrbw6c99mdfpjx1z3fue7sesgua6gsl1vu97229lq56344zu9bawnf96 --ceramic-url=http://localhost:7007 --output=my-first-composite.json\n"})}),"\n",(0,t.jsxs)(o.p,{children:["The output of this command will be a composite file named ",(0,t.jsx)(o.code,{children:"my-first-composite.json"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"using-the-composite",children:"Using the composite"}),"\n",(0,t.jsx)(o.hr,{}),"\n",(0,t.jsx)(o.h3,{id:"deploying-the-composite",children:"Deploying the composite"}),"\n",(0,t.jsx)(o.p,{children:"You will have to deploy the composite with fetched models to your local Ceramic node so that they can be used when building and running your applications. This can be achieved by using ComposeDB CLI and referencing the composite file of fetched models in your local environment as shown below. Note that you have to provide your did private key to deploy the model:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"composedb composite:deploy my-first-composite.json --ceramic-url=http://localhost:7007 --did-private-key=your_private_key\n"})}),"\n",(0,t.jsx)(o.p,{children:"Whenever composites are deployed, the models will be automatically indexed. This also means that these models are shared across the network (at the moment, only Clay testnet). If you check the output produced by the terminal that runs your Ceramic local node, you should see a similar output:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"IMPORTANT: Starting indexing for Model kjzl6hvfrbw6c5ajfmes842lu09vjxu5956e3xq0xk12gp2jcf9s90cagt2god9\n\nIMPORTANT: Starting indexing for Model kjzl6hvfrbw6c99mdfpjx1z3fue7sesgua6gsl1vu97229lq56344zu9bawnf96\n\nIMPORTANT: Creating Compose DB Indexing table for model: kjzl6hvfrbw6c5ajfmes842lu09vjxu5956e3xq0xk12gp2jcf9s90cagt2god9\n\nIMPORTANT: Creating Compose DB Indexing table for model: kjzl6hvfrbw6c99mdfpjx1z3fue7sesgua6gsl1vu97229lq56344zu9bawnf96\n"})}),"\n",(0,t.jsx)(o.p,{children:"This means that the composite was deployed and the models were indexed on your local node successfully! \ud83c\udf89"}),"\n",(0,t.jsx)(o.h3,{id:"compiling-the-composite",children:"Compiling the composite"}),"\n",(0,t.jsx)(o.p,{children:"The last step left is compiling the composite. This is necessary to interact with the data in the next step of this guide:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"composedb composite:compile my-first-composite.json runtime-composite.json\n"})}),"\n",(0,t.jsxs)(o.p,{children:["The output of this command will be a json file called ",(0,t.jsx)(o.code,{children:"runtime-composite.json"})]}),"\n",(0,t.jsx)(o.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsx)(o.hr,{}),"\n",(0,t.jsxs)(o.p,{children:["Now that you have created your composite, you are ready to use it: ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"/docs-docusaurus/docs/composedb/interact-with-data",children:"Interact with data \u2192"})})]}),"\n",(0,t.jsx)(o.h2,{id:"related-guides",children:"Related Guides"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"/docs-docusaurus/docs/composedb/guides/data-modeling/",children:"Intro to Modeling"})}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"/docs-docusaurus/docs/composedb/guides/data-modeling/model-catalog",children:"Model Catalog"})}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"/docs-docusaurus/docs/composedb/guides/data-modeling/writing-models",children:"Writing Models"})}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"/docs-docusaurus/docs/composedb/guides/data-modeling/composites",children:"Composites"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},50150:(e,o,s)=>{s.d(o,{Z:()=>t});const t=s.p+"assets/images/data-model-table-9edfb95dc33320c39c7c54bf99facad5.png"},63883:(e,o,s)=>{s.d(o,{Z:()=>d,a:()=>l});var t=s(50959);const i={},n=t.createContext(i);function l(e){const o=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);
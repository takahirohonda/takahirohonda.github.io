"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[1782],{9431:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(74848),a=t(28453);const i={sidebar_position:6},r="How To Optimise Memory Allocation For Lambda Functions",s={id:"Infrastructure/AWS/optimise-memory-allocation",title:"How To Optimise Memory Allocation For Lambda Functions",description:"In terms of computing, the lambda has only one parameter to tune, memory allocation. We can allocate any amount of memory between 128MB and 3008MB to your function today. The amount of memory you allocate is proportional to the amount of CPC allocated for the function. The lambda pricing is based on the amount of memory allocated and the execution time.",source:"@site/docs/Infrastructure/AWS/6.optimise-memory-allocation.md",sourceDirName:"Infrastructure/AWS",slug:"/Infrastructure/AWS/optimise-memory-allocation",permalink:"/docs/Infrastructure/AWS/optimise-memory-allocation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"AWS CDK ERROR: There is already a Construct with name \u2018XYZ\u2019",permalink:"/docs/Infrastructure/AWS/aws-cdk-error"},next:{title:"Getting Started with AWS CDK with TypeScript",permalink:"/docs/Infrastructure/AWS/aws-cdk-ts"}},c={},l=[];function m(e){const o={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"how-to-optimise-memory-allocation-for-lambda-functions",children:"How To Optimise Memory Allocation For Lambda Functions"}),"\n",(0,n.jsx)(o.p,{children:"In terms of computing, the lambda has only one parameter to tune, memory allocation. We can allocate any amount of memory between 128MB and 3008MB to your function today. The amount of memory you allocate is proportional to the amount of CPC allocated for the function. The lambda pricing is based on the amount of memory allocated and the execution time."}),"\n",(0,n.jsx)(o.p,{children:"The more memory you allocate, the more you get charged. This does not mean giving your function less memory costs less. Because less memory allocation means less CPU, the function runs slower, and hence you may get charged more."}),"\n",(0,n.jsx)(o.p,{children:"To optimise the cost and performance for your lambda function, you need to find the sweet spot for the memory allocation. Finding the optimal memory amount manually is not easy. At the moment, you can set your memory in 64MB increments from 128MB to 3008MB. There are 64 variations."}),"\n",(0,n.jsx)(o.p,{children:"Luckily, there is an open-source tool created by an AWS engineer that runs your lambda function with different memory configurations (see aws-lambnda-power-tuning). It gives you the optimal memory allocation according to your need. There are three options for optimisation, cost, speed and balanced (between cost and speed). With balanced mode, you can even put weight on whether you care more about cost or speed (or put 0.5 for both)."}),"\n",(0,n.jsx)(o.p,{children:"AWS lambda power tuning is basically the step functions. It will invoke your lambda with multiple power configuration, analyse the logs and suggest the best configuration. It will also give you the URL for the graph that shows performance and cost in relation to different memory amounts."}),"\n",(0,n.jsx)(o.p,{children:"Deployment is fairly simple. You can use AWS serverless application repository, SAM CLI, AWS CDK or Lumigo CLI (instruction is here). Then you can start execution with adding a config JSON through the console. The full documentation for the config options is here."}),"\n",(0,n.jsx)(o.p,{children:"For example, I gave the execution config as below to find out most balanced memory allocation for my lambda. When you put strategy as balanced, it will give you 0.5 for cost and performance by default."}),"\n",(0,n.jsx)(o.p,{children:"The payload is an event data. For example, if the function is triggered by S3 Put request, we have to add event data there."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:'{\n  "lambdaARN": "my-lambda-arn",\n  "powerValues": [128, 256, 512, 1024, 2048, 3008],\n  "num": 10,\n  "payload": "{\\"Records\\":[{\\"eventVersion\\":\\"2.0\\",\\"eventSource\\":\\"aws:s3\\", ...",\n  "parallelInvocation": true,\n  "strategy": "balanced"\n}\n'})}),"\n",(0,n.jsx)(o.p,{children:"This will give you the output below. Power means the recommended memory allocation for the strategy you choose. In this instance, the recommended amount is 2048MB."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:'{\n  "power": 2048,\n  "cost": 0.0000033328,\n  "duration": 88.21499999999999,\n  "stateMachine": {\n    "executionCost": 0.0003,\n    "lambdaCost": 0.00021579880000000004,\n    "visualization": "https://lambda-power-tuning.show/{some hashed value}"\n  }\n}\n'})}),"\n",(0,n.jsx)(o.p,{children:"The visualisation URL will take you to the dashboard. It will not send any information regarding your lambda function except the cost and performance data and is safe."}),"\n",(0,n.jsx)(o.p,{children:"The visualisation really helps you to find out the outcome. As you can see below, the cost does not increase until 2048MB, but the execution time decreases significantly up to the amount. Above 2048MB, there is not much performance gain while the cost goes up. It looks like 2048MB is the best memory allocation for this function."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"img",src:t(49353).A+"",width:"1157",height:"605"})}),"\n",(0,n.jsx)(o.p,{children:"Optimising memory allocation for lambda is easy and fun with AWS lambda power tuning. This works for any lambda function with any event source and any language. You should try it and let us know how you went!"}),"\n",(0,n.jsx)(o.p,{children:"(2020-08-10)"})]})}function u(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},49353:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/AWS-Lambda-Power-Tuning-result-8fb38355188453c34f354849e51e42f3.webp"},28453:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>s});var n=t(96540);const a={},i=n.createContext(a);function r(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);
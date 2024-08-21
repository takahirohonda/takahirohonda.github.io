"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[7264],{82914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(74848),r=n(28453);const o={sidebar_position:7},i="Getting Started with AWS CDK with TypeScript",s={id:"Infrastructure/AWS/aws-cdk-ts",title:"Getting Started with AWS CDK with TypeScript",description:"There is something really delightful about using actual programming language to code infrastructure. AWS CDK allows us to write infrastructure code in a totally different way from writing YAML or JSON type of code like CloudFormation or Terraform. The infrastructure code feels more familiar and it is more fun if you are a programmer.",source:"@site/docs/Infrastructure/AWS/7.aws-cdk-ts.md",sourceDirName:"Infrastructure/AWS",slug:"/Infrastructure/AWS/aws-cdk-ts",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Infrastructure/AWS/aws-cdk-ts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"How To Optimise Memory Allocation For Lambda Functions",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Infrastructure/AWS/optimise-memory-allocation"},next:{title:"Deploying Static Website to S3 with AWS CodeBuild",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Infrastructure/AWS/static-site-s3"}},c={},l=[];function d(e){const t={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"getting-started-with-aws-cdk-with-typescript",children:"Getting Started with AWS CDK with TypeScript"}),"\n",(0,a.jsx)(t.p,{children:"There is something really delightful about using actual programming language to code infrastructure. AWS CDK allows us to write infrastructure code in a totally different way from writing YAML or JSON type of code like CloudFormation or Terraform. The infrastructure code feels more familiar and it is more fun if you are a programmer."}),"\n",(0,a.jsx)(t.p,{children:"Getting started with AWS CDK is fairly simple as long as you have previous experience with other tools to code AWS infrastructure. In the end, the code gets converted to CloudFormation, just like any other tools. It is more concise and pleasant than writing native CloudFormation code because we can use everything comes with a programming language, like loop, conditions and so on. The code structure becomes cleaner, too."}),"\n",(0,a.jsx)(t.p,{children:"In this post, I want to show you the steps to create a project with TypeScript. For the actual code example, you can check out my repo here."}),"\n",(0,a.jsx)(t.p,{children:"AWS CDK Code Structure"}),"\n",(0,a.jsx)(t.p,{children:"AWS CDK organises code into App, Stack and Construct. An app contains stacks. The stack is the unit of deployment. Each stack is equivalent to a CloudFormation stack. With CDK, we can deploy multiple stacks. Each stack contains constructs. A construct is a group of resources. For example, it can contain EC2 and load balancer. The main resource creation logic goes to constructs."}),"\n",(0,a.jsx)(t.p,{children:"So, this is the simple code structure diagram."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"img",src:n(66789).A+"",width:"700",height:"599"})}),"\n",(0,a.jsx)(t.p,{children:"Setting up a project"}),"\n",(0,a.jsx)(t.p,{children:"Let\u2019s set up a TypeScript project. The basic project can be set up with command line tool. Then, we can create folders to make it a little bit cleaner."}),"\n",(0,a.jsx)(t.p,{children:"(1) Install AWS CDK"}),"\n",(0,a.jsx)(t.p,{children:"AWS CDK is a command line tool that can be installed by npm."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"npm i -g aws-cdk"})}),"\n",(0,a.jsx)(t.p,{children:"(2) Create a template"}),"\n",(0,a.jsx)(t.p,{children:"Once CDK is installed, we can create a template for TypeScript. cdk init will name the app and stack from the folder name where the project is created. Of course, the names can be changed."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"cdk init --language typescript"})}),"\n",(0,a.jsx)(t.p,{children:"(3) Create a folder structure"}),"\n",(0,a.jsx)(t.p,{children:"When you initialise the project, it creates a bunch of files with all the configuration done. It has App and Stack. However, the initial project does not have any construct. We move the stack file to a stacks folder and create a constructs folder where we can write our construct."}),"\n",(0,a.jsx)(t.p,{children:"The bin folder contains the entry file that instantiate App()."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"- bin\n  - myapp.ts\n- lib\n  - constructs\n    - mykinesis.ts\n    - mylambda.ts\n  - stacks\n    - mysimplestack.ts\n"})}),"\n",(0,a.jsx)(t.p,{children:"(4) Create constructs and instantiate it in the stack class"}),"\n",(0,a.jsx)(t.p,{children:"In the stack code which extends cdk.Stack, you can see the comment the code that defines your stack goes here. That is where we can instantiate construct classes."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// The code that defines your stack goes here\nnew MyKinesis(this, id);\nnew MyLambda(this, id);\n"})}),"\n",(0,a.jsx)(t.p,{children:"(5) Deploy"}),"\n",(0,a.jsx)(t.p,{children:"We can deploy the stack now. You may need to do cdk bootstrap if it throws error first time. The error message gives you the instruction on how to do cdk bootstrap. So you can follow it just in case you get error."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"cdk deploy"})}),"\n",(0,a.jsx)(t.p,{children:"Now you can check the simple CDK example that creates lambda function here. I have a little bit more complex example that creates S3, Kinesis and Kinesis firehose here."}),"\n",(0,a.jsx)(t.p,{children:"(2020-07-31)"})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},66789:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/AWS-CDK-code-structure-360887c8cfae9e30edfeba3ca97c2bc4.webp"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var a=n(96540);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);
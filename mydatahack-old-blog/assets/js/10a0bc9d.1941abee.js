"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[6133],{64039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=n(74848),s=n(28453);const a={sidebar_position:12},i="AWS Lambda Function Node.js Boilerplate",r={id:"Web/Node.js/nodejs-aws-lambda-boilerplate",title:"AWS Lambda Function Node.js Boilerplate",description:"Most of the time, it is only useful when you have other AWS services interacting with it. You need to create an event source, which can be events sent from services such as API Gateway, S3, CloudWatch etc. You may also need to have targets which are AWS services like RDS, Redshift, S3, DynamoDB, Load Balancer and so on. To access various services, the function needs to run in the correct subnet and have the right IAM roles.",source:"@site/docs/Web/Node.js/12.nodejs-aws-lambda-boilerplate.md",sourceDirName:"Web/Node.js",slug:"/Web/Node.js/nodejs-aws-lambda-boilerplate",permalink:"/docs/Web/Node.js/nodejs-aws-lambda-boilerplate",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Using TSLint VS Code Extension",permalink:"/docs/Web/Node.js/vscode-tslint-extension"},next:{title:"Using EditorConfig and ESLint in Node.js Project",permalink:"/docs/Web/Node.js/editorconfig-eslint-nodejs"}},c={},l=[];function d(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"aws-lambda-function-nodejs-boilerplate",children:"AWS Lambda Function Node.js Boilerplate"}),"\n",(0,o.jsx)(t.p,{children:"Most of the time, it is only useful when you have other AWS services interacting with it. You need to create an event source, which can be events sent from services such as API Gateway, S3, CloudWatch etc. You may also need to have targets which are AWS services like RDS, Redshift, S3, DynamoDB, Load Balancer and so on. To access various services, the function needs to run in the correct subnet and have the right IAM roles."}),"\n",(0,o.jsx)(t.p,{children:"When I started deploying lambda functions, I was in fact spending more time in configuring AWS resources than writing the function itself. Deployment was another issue. To have a good CD/CI pipeline, I needed to couple the lambda function deployment to the creation of all the related AWS resources."}),"\n",(0,o.jsx)(t.p,{children:"The first ever lambda function I deployed was done with AWS CLI command. Yes, you can deploy lambda with a bunch of command lines (this is documented in the previous post here). Then, I discovered the framework called serverless that makes packaging of lambda function easy. With serverless, you can configure your lambda function and create associated resources in ymal files. I have introductory lambda function posts that uses serverless with Python here and Node.js here."}),"\n",(0,o.jsx)(t.p,{children:"Configuring serverless for proper CD/CI deployment requires a bit of learning curve. You need to deploy the same lambda function and associated resources throughout the environment by changing the environment parameter."}),"\n",(0,o.jsx)(t.p,{children:"For production grade code, you also want to include unit & integration tests as well as test coverage report."}),"\n",(0,o.jsx)(t.p,{children:"After a few attempts, I now created a boilerplate that allows you to create production level Node.js lambda functions and deploy it with any CD/CI tool such as Jenkins."}),"\n",(0,o.jsx)(t.p,{children:"Check this out on our git repo: nodejs-lambda-serverless-bilerplate"}),"\n",(0,o.jsx)(t.p,{children:"For creating basic lambda function driven API, all you need to do is to change the place holders in the yaml files. The environment variable is passed through the stage argument in the sls deploy command."}),"\n",(0,o.jsx)(t.p,{children:"I also curated the unit testing and code coverage tool (mocha and Istanbul) with test examples, so that you can get it started straight away. I have a solid README and comments throughout the config files. So, hopefully, that helps."}),"\n",(0,o.jsx)(t.p,{children:"Now, simply pull the repo and try running tests to see if it works!"}),"\n",(0,o.jsxs)(t.p,{children:["git clone ",(0,o.jsx)(t.a,{href:"https://github.com/mydatahack/nodejs-lambda-serverless-boilerplate.git",children:"https://github.com/mydatahack/nodejs-lambda-serverless-boilerplate.git"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install\nnpm test\nnpm run-script integration\n"})}),"\n",(0,o.jsx)(t.p,{children:"See what you think. Let us know what you think of this boilerplate. Hopefully, it helps you to create awesome lambda functions!"}),"\n",(0,o.jsx)(t.p,{children:"(2019-02-25)"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(96540);const s={},a=o.createContext(s);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);
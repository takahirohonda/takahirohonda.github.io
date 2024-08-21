"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[3948],{85742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(74848),s=t(28453);const o={sidebar_position:4},i="Advanced AWS Lambda Python Function Deployment with Serverless",a={id:"Infrastructure/Miscellaneous/serverless-python",title:"Advanced AWS Lambda Python Function Deployment with Serverless",description:"You can deploy lambda functions manually with hard-coded environment variables. But, that is not a good development practice. When we deploy the function to production, the deployment process eliminates the necessity of changing any input parameters or configuration. Serverless is a lambda function deployment tools that enable good development practice by automating packaging and controlling the parameters depending on which environment you are deploying.",source:"@site/docs/Infrastructure/Miscellaneous/4.serverless-python.md",sourceDirName:"Infrastructure/Miscellaneous",slug:"/Infrastructure/Miscellaneous/serverless-python",permalink:"/docs/Infrastructure/Miscellaneous/serverless-python",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to Set up Dual-Authentication to GitHub and AWS CodeCommit",permalink:"/docs/Infrastructure/Miscellaneous/git-dual-auth"},next:{title:"How to Deploy Python Lambda Function with Serverless in AWS (Introduction)",permalink:"/docs/Infrastructure/Miscellaneous/serveless-python-intro"}},c={},l=[];function d(e){const n={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"advanced-aws-lambda-python-function-deployment-with-serverless",children:"Advanced AWS Lambda Python Function Deployment with Serverless"}),"\n",(0,r.jsx)(n.p,{children:"You can deploy lambda functions manually with hard-coded environment variables. But, that is not a good development practice. When we deploy the function to production, the deployment process eliminates the necessity of changing any input parameters or configuration. Serverless is a lambda function deployment tools that enable good development practice by automating packaging and controlling the parameters depending on which environment you are deploying."}),"\n",(0,r.jsx)(n.p,{children:"In the previous post, I wrote a quick deployment guide with Serverless (How to Deploy Python Lambda Fnction with Serverless in AWS). The post was intended to be a quick introduction for Python lambda function deployment. Once you got the basic, it is time for us to dive into the advanced features of this amazing deployment tool."}),"\n",(0,r.jsx)(n.p,{children:"As an example, let\u2019s use the use case from the previous blog (Event-Driven Data Ingestion with AWS Lambda S3 to RDS). The aim is to ingest S3 data into Postgres RDS trigged by the creation of a file in the source bucket."}),"\n",(0,r.jsx)(n.p,{children:"Improvement from the previous post"}),"\n",(0,r.jsx)(n.p,{children:"With Serveless, we can improve the manual deployment we did here. Typing lengthy AWS CLI commands is no longer necessary."}),"\n",(0,r.jsx)(n.p,{children:"Store connection details in Parameter Store and set them as environment variables\nAutomatically set the permission of the function.\nRecursively reference properties in the serveless.yml config file to set parameters for different environments.\nRetrieve Security Group IDs and Subnet Ids depending on the environment.\nRetrieve correct parameters depending on the environment.\nSet the correct source bucket depending on the environment.\nSet the correct deployment bucket depending on the environment.\nSteps"}),"\n",(0,r.jsx)(n.p,{children:"(1) Create parameters in Parameter Store"}),"\n",(0,r.jsx)(n.p,{children:"You can create parameters from Parameter Store in EC2 dashboard or by using AWS CLI. Parameter Store is a free AWS service where you can manage your parameters (such as connection details or encryption keys)."}),"\n",(0,r.jsxs)(n.p,{children:["The key point here is to set the parameter with the prefix for the target environment. For example, ",(0,r.jsx)(n.code,{children:"dev\\_"})," for the development environment. The correct parameter names will be used by the serverless.yml config file depending on the environment."]}),"\n",(0,r.jsx)(n.p,{children:"Let\u2019s use AWS CLI to create parameters. The recommended approach is to encrypt the parameter with AWS managed key."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'aws ssm put-parameter --name "dev_db_username" --value "db.username" --type SecureString\naws ssm put-parameter --name "dev_db_password" --value "db.password" --type SecureString\naws ssm put-parameter --name "dev_db_name" --value "db.name" --type SecureString\naws ssm put-parameter --name "dev_db_endpoint" --value "db.endpoint" --type SecureString\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can check your parameters in the console."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(61445).A+"",width:"646",height:"261"})}),"\n",(0,r.jsx)(n.p,{children:"(2) Set up the correct folder structure"}),"\n",(0,r.jsx)(n.p,{children:"After running the serverless create command, you need to create a proper folder structure. You can set the folders as you like. You will be using the file path to retrieve values from different files in the main config file. My suggestion is to have a config folder with env.yml (for setting environment variable from Parameter Store) and permissions.yml (for setting permissions) with the subfolder vpc containing files for vpc parameters on different environment."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(8424).A+"",width:"264",height:"245"})}),"\n",(0,r.jsx)(n.p,{children:"(3) Update yml files"}),"\n",(0,r.jsx)(n.p,{children:"The most important point here is that we are using -s parameter to specify which stage (dev or prod). The stage parameter is initially set to tbc, which will be overridden when you call the serverless deploy command."}),"\n",(0,r.jsx)(n.p,{children:"serverless.yml"}),"\n",(0,r.jsx)(n.p,{children:"This is the main file. It can use the parameter within the file recursively. This is how we propagate the value for which environment. Make sure to get pythonRequirements for Python."}),"\n",(0,r.jsx)(n.p,{children:"Names for environment, vpc, deployment bucket and source bucket will be changed depending on the environment."}),"\n",(0,r.jsx)(n.p,{children:"service: move-s3-to-pg"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"custom:\n  stage: ${opt:stage, self:provider.stage}\n  region: ${opt:region, self:provider.region}\n  env: ${opt:env, self:custom.stage}\n  pythonRequirements:\n    dockerizePip: linux\n\nprovider:\n  name: aws\n  runtime: python3.6\n  memorySize: 1024\n  stage: tbc\n  region: ap-southeast-2\n  environment: ${file(config/env.yml)}\n  vpc: ${file(config/vpc/${self:custom.env}.yml)}\n  iamRoleStatements: ${file(config/permissions.yml)}\n  deploymentBucket:\n    name: ${self:custom.env}.lambda.function.bucket\n    serverSideEncryption: AES256\n\nfunctions:\n  hello:\n    handler: handler.handler\n    events:\n      - s3:\n        bucket: ${self:custom.env}.source.lambda\n        event: s3:ObjectCreated:*\n\nplugins:\n  - serverless-python-requirements\n"})}),"\n",(0,r.jsx)(n.p,{children:"env.yml"}),"\n",(0,r.jsx)(n.p,{children:"This will retrieve database connection parameters from Parameter Store. Each environment has parameters with the environment prefix."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ENV: ${self:custom.env}\nPG_DATABASENAME: ${ssm:${self:custom.env}_db_name~true}\nPG_USERNAME: ${ssm:${self:custom.env}_db_username~true}\nPG_HOST: ${ssm:${self:custom.env}_db_endpoint~true}\nPG_PASSWORD: ${ssm:${self:custom.env}_db_password~true}\n"})}),"\n",(0,r.jsx)(n.p,{children:"permissions.yml"}),"\n",(0,r.jsx)(n.p,{children:"Adding necessary permission to the function."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'- Effect: Allow\n  Action:\n    - s3:GetObject\n    - s3:ListBucket\n    - logs:CreateLogGroup\n    - logs:CreateLogStream\n    - logs:PutLogEvents\n    - ec2:CreateNetworkInterface\n    - ec2:DescribeNetworkInterfaces\n    - ec2:DeleteNetworkInterface\n  Resource: "*"\n'})}),"\n",(0,r.jsx)(n.p,{children:"vpc configuration files"}),"\n",(0,r.jsxs)(n.p,{children:["The file name should be the environment name (e.g. dev.yml or prod.yml). Depending on the input parameter in serverless deploy command, it will pick the right vpc configuration based on the file name as specified in the main config file, ",(0,r.jsx)(n.code,{children:"vpc: ${file(config/vpc/${self:custom.env}.yml)}"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"securityGroupIds:\n  - sg-xxxxxxxx\nsubnetIds:\n  - subnet-xxxxxxxx\n  - subnet-xxxxxxxx\n  - subnet-xxxxxxxx\n"})}),"\n",(0,r.jsx)(n.p,{children:"(4) Deploy with stage parameter"}),"\n",(0,r.jsx)(n.p,{children:"The stage parameter sets which environment the function is going to be deployed."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"sls deploy -s dev"}),"\nWhen you are ready for production, you can simply change the stage value."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"sls deploy -s prod"})}),"\n",(0,r.jsx)(n.p,{children:"(2018-03-17)"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},61445:(e,n,t)=>{t.d(n,{A:()=>r});const r="data:image/webp;base64,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"},8424:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/serverless-folder-structure-f0a267e7e95fdaae5d4e5ba048ae17a3.webp"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
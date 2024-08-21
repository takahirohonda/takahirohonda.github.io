"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[6568],{76812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=n(74848),o=n(28453);const s={sidebar_position:8},a="Deploying Static Website to S3 with AWS CodeBuild",d={id:"Infrastructure/AWS/static-site-s3",title:"Deploying Static Website to S3 with AWS CodeBuild",description:"There are a few AWS devops services, CodeDeploy, CodeBuild and CodePipeline. They have similar name and it\u2019s confusing at first. CodeBuild is the service to create an artefact. In CodeBuild, we can install dependencies, run unit tests, create an artefact and push to the artefact repository. CodeDeploy uses the artefact and deploy the code to the environment. CodePipeline is the orchestrator.",source:"@site/docs/Infrastructure/AWS/8.static-site-s3.md",sourceDirName:"Infrastructure/AWS",slug:"/Infrastructure/AWS/static-site-s3",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Infrastructure/AWS/static-site-s3",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Getting Started with AWS CDK with TypeScript",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Infrastructure/AWS/aws-cdk-ts"},next:{title:"Deploying Multi-Container Applications to AWS Elastic Beanstalk",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Infrastructure/AWS/elastic-beanstalk"}},r={},c=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"deploying-static-website-to-s3-with-aws-codebuild",children:"Deploying Static Website to S3 with AWS CodeBuild"}),"\n",(0,i.jsx)(t.p,{children:"There are a few AWS devops services, CodeDeploy, CodeBuild and CodePipeline. They have similar name and it\u2019s confusing at first. CodeBuild is the service to create an artefact. In CodeBuild, we can install dependencies, run unit tests, create an artefact and push to the artefact repository. CodeDeploy uses the artefact and deploy the code to the environment. CodePipeline is the orchestrator."}),"\n",(0,i.jsx)(t.p,{children:"When we want to deploy a static website or frontend widget to S3 and directly serves those static assets from there, CodeBuild itself can do all of it. In the build project, we specify the repo and use buildspec.yml to install dependencies, run tests, compile and push to S3. Then, those assets can be served from the bucket directly."}),"\n",(0,i.jsx)(t.p,{children:"buildspec.yml defines the actions that happens in CodeBuild. Each phase, we can run Linux command. It also allows to pass the variables from the CodeBuild. It will read the buildspec file at the root of your repo."}),"\n",(0,i.jsx)(t.p,{children:"Now, let\u2019s see the example to push JavaScript widget to S3 bucket. Since the bucket uses CloudFront as CDN, we need to clear CloudFront cache after each deployment. It can be done with aws cli command."}),"\n",(0,i.jsx)(t.p,{children:"The buildspec file only creates an artefact. In CodeBuild, we need to specify the Artifact upload location to the target S3 bucket."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",children:'# Aws Doc: https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html\n# Ref : https://github.com/backspace-academy/aws-nodejs-sample-codebuild/blob/master/buildspec.yml\n# Do not change version. This is the version of aws buildspec, not the version of your buldspec file.\nversion: 0.2\n\nenv:\n  exported-variables:\n    - env\n    - cfdistid #CloudFront Distribution ID to clear the cache\n\nphases:\n  install:\n    runtime-versions:\n      nodejs: 12\n    commands:\n      - echo Build is starting now...\n      - echo Installing source NPM dependencies...\n      - npm i\n\n  pre_build:\n    commands:\n      - echo Running unit tests...\n      - npm run test\n\n  build:\n    commands:\n      - echo Dev Build starting...\n      - npm run build:$env\n      - echo Checking build artifacts\n      - cd dist && ls -la\n      - cd ..\n  post_build:\n    commands:\n      - echo Checking Environment Variables\n      - echo environment - $env\n      - echo cfdistid - $cfdistid\n\n      # (1) Version control bundle\n      - echo "Getting Git Commit Sha for bundle version control"\n      - export bundleVersion=$(git rev-parse --short HEAD)\n      - cp dist/my-widget-$env.min.css dist/my-widget-$env-${bundleVersion}.min.css\n      - cp dist/my-widget-$env.min.js dist/my-widget-$env-${bundleVersion}.min.js\n\n      # (2) Clearing CloudFront Cache\n      - echo "Calling cloudfront create-invalidation"\n      - aws cloudfront create-invalidation --distribution-id $cfdistid --paths "/*"\n      - echo "Clear cache on cloudfront"\n      - echo "Job completed successfully! Wait for CloudFront Cache to be cleared for a few nimutes"\nartifacts:\n  discard-paths: yes\n  # base-directory: \'dist\'\n  files:\n    - dist/*\n'})}),"\n",(0,i.jsx)(t.p,{children:"That\u2019s it. We don\u2019t need to use CodeDeploy or CodePipeline to deploy frontend widget to S3 bucket. Pretty cool."}),"\n",(0,i.jsx)(t.p,{children:"(2020-07-30)"})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var i=n(96540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
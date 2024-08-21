"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[6734],{31911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var a=n(74848),o=n(28453);const i={sidebar_position:2},s="Uploading and Downloading Files in S3 with Ruby",d={id:"data-ingestion/s3-data-ruby",title:"Uploading and Downloading Files in S3 with Ruby",description:"To date, the latest Ruby AWS SDK is version 3. In this version, each resources has its own module while the version 2 had the one with everything, aws-sdk. To interact with S3 with the v3 SDK, let\u2019s use the aws-sdk-s3 module.",source:"@site/docs/data-ingestion/2.s3-data-ruby.md",sourceDirName:"data-ingestion",slug:"/data-ingestion/s3-data-ruby",permalink:"/mydatahack-old-blog/docs/data-ingestion/s3-data-ruby",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Event-Driven S3 Data Ingestion With Node.js Lambda Function and Deploy it with Serverless",permalink:"/mydatahack-old-blog/docs/data-ingestion/s3-data-node-1"},next:{title:"Uploading and Downloading Files in S3 with Node.js",permalink:"/mydatahack-old-blog/docs/data-ingestion/s3-data-node-2"}},r={},l=[];function c(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"uploading-and-downloading-files-in-s3-with-ruby",children:"Uploading and Downloading Files in S3 with Ruby"}),"\n",(0,a.jsx)(t.p,{children:"To date, the latest Ruby AWS SDK is version 3. In this version, each resources has its own module while the version 2 had the one with everything, aws-sdk. To interact with S3 with the v3 SDK, let\u2019s use the aws-sdk-s3 module."}),"\n",(0,a.jsx)(t.p,{children:"Ruby has its own way to upload to S3. First of all, you need to create the s3 object and then call methods on that object. With Node.js, we first read the file and convert to the binary format and upload the data into the object (see here). With Python, we can simply pass the bucket name, key, and local file path in the upload function on the S3 object (see here)."}),"\n",(0,a.jsx)(t.p,{children:"Downloading is the same. We first need to create the S3 object that you want to retrieve and call the get() method."}),"\n",(0,a.jsx)(t.p,{children:"The authentication is handled by configuring AWS CLI on your local machine or server. To configure AWS CLI, you can check the link here."}),"\n",(0,a.jsx)(t.p,{children:"First of all, you need to install the module."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"gem install aws-sdk-s3\n"})}),"\n",(0,a.jsx)(t.p,{children:"Uploading File"}),"\n",(0,a.jsx)(t.p,{children:"The function takes 3 arguments, bucket name, prefix and local file path. From the File object, you can extract the file name in the path with basename(). Once the target S3 object is created, you can all the upload_file() function."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ruby",children:"require 'aws-sdk-s3'\n\ndef s3_uploader(bucketName, prefix, filePath)\n    # (1) Create S3 object\n    s3 = Aws::S3::Resource.new(region: 'ap-southeast-2')\n    # (2) Get file name from the file path\n    fileName = File.basename(filePath)\n    # (3) Create the target object\n    targetObj = s3.bucket(bucketName).object(prefix+'/'+fileName)\n    # (4) Upload\n    targetObj.upload_file(filePath)\n    puts \"File #{fileName} has been uploaded to #{bucketName}/#{prefix}\"\nend\n"})}),"\n",(0,a.jsx)(t.p,{children:"Downloading File"}),"\n",(0,a.jsx)(t.p,{children:"Downloading takes the same flow as uploading. You first need to create the object you want to retrieve with bucket name and object key. Then, call the get() method."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ruby",children:"def s3_downloader(bucketName, key, localPath)\n    # (1) Create S3 object\n    s3 = Aws::S3::Resource.new(region: 'ap-southeast-2')\n    # (2) Create the source object\n    sourceObj = s3.bucket(bucketName).object(key)\n    # (3) Download the file\n    sourceObj.get(response_target: localPath)\n    puts \"s3://#{bucketName}/#{key} has been downloaded to #{localPath}\"\nend\n"})}),"\n",(0,a.jsx)(t.p,{children:"(2018-08-17)"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var a=n(96540);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[2450],{54377:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=a(74848),o=a(28453);const s={sidebar_position:3},i="Uploading and Downloading Files in S3 with Node.js",r={id:"data-ingestion/s3-data-node-2",title:"Uploading and Downloading Files in S3 with Node.js",description:"AWS S3 is probably the most utilised AWS storage services. It is affordable, highly available, convenient and easy to use. To interact with any AWS services, Node.js requires AWS SDK for JavaScript.",source:"@site/docs/data-ingestion/3.s3-data-node-2.md",sourceDirName:"data-ingestion",slug:"/data-ingestion/s3-data-node-2",permalink:"/mydatahack-old-blog/docs/data-ingestion/s3-data-node-2",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Uploading and Downloading Files in S3 with Ruby",permalink:"/mydatahack-old-blog/docs/data-ingestion/s3-data-ruby"},next:{title:"How to Ingest Data Into MongoDB with Node.js",permalink:"/mydatahack-old-blog/docs/data-ingestion/mongo-node-1"}},d={},l=[];function c(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"uploading-and-downloading-files-in-s3-with-nodejs",children:"Uploading and Downloading Files in S3 with Node.js"}),"\n",(0,t.jsx)(n.p,{children:"AWS S3 is probably the most utilised AWS storage services. It is affordable, highly available, convenient and easy to use. To interact with any AWS services, Node.js requires AWS SDK for JavaScript."}),"\n",(0,t.jsx)(n.p,{children:"Let\u2019s first create a project folder called nodeS3 and install SDK. Then, create the main program file and data folder. In the data folder, drop any file you want. In this example, I am using a json file called data.json."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir nodeS3\nnpm init -y\nnpm install aws-sdk\ntouch app.js\nmkdir data\n"})}),"\n",(0,t.jsx)(n.p,{children:"Next, you need to create a bucket for uploading a file (after configuring your AWS CLI). Let\u2019s create a bucket with the s3 command."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"aws s3 mb s3://your.bucket.name\n"})}),"\n",(0,t.jsx)(n.p,{children:"Uploading File"}),"\n",(0,t.jsx)(n.p,{children:"First of all, you need to import the aws-sdk module and create a new S3 object. It uses the credentials that you set for your AWS CLI. Locking in API version for S3 object is optional. Here is the further document on the S3 class."}),"\n",(0,t.jsx)(n.p,{children:"There are two methods you can use to upload a file, upload() and putObject(). Both methods are using different API calls. The major difference is upload() allows you to define concurrency and part size for large files while putObject() has lesser control. For a smaller file, both methods are fine. In general, I recommend to use upload()."}),"\n",(0,t.jsx)(n.p,{children:"Simple File Upload Example"}),"\n",(0,t.jsx)(n.p,{children:"In this example, we are using the async readFile function and uploading the file in the callback. As the file is read, the data is converted to a binary format and passed it to the upload Body parameter."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const AWS = require("aws-sdk");\nconst fs = require("fs");\n\nvar s3 = new AWS.S3();\nconst filePath = "./data/data.json";\nconst bucketName = "your.bucket.name";\nconst key = "data/data.json";\n\nconst uploadFile = (filePath, bucketName, key) => {\n  fs.readFile(filePath, (err, data) => {\n    if (err) console.error(err);\n    var base64data = new Buffer(data, "binary");\n    var params = {\n      Bucket: bucketName,\n      Key: key,\n      Body: base64data,\n    };\n    s3.upload(params, (err, data) => {\n      if (err) console.error(`Upload Error ${err}`);\n      console.log("Upload Completed");\n    });\n  });\n};\n\nuploadFile(filePath, bucketName, key);\n'})}),"\n",(0,t.jsx)(n.p,{children:"Downloading File"}),"\n",(0,t.jsx)(n.p,{children:"To download a file, we can use getObject().The data from S3 comes in a binary format. In the example below, the data from S3 gets converted into a String object with toString() and write to a file with writeFileSync method. Alternatively, you can create the stream reader on getObject method and pipe to a stream writer as described here."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const AWS = require("aws-sdk");\nconst fs = require("fs");\n\nconst filePath = "./data/downloaded.json";\nconst bucketName = "your.bucket.name";\nconst key = "data/data.json";\n\nvar s3 = new AWS.S3();\n\nconst downloadFile = (filePath, bucketName, key) => {\n  const params = {\n    Bucket: bucketName,\n    Key: key,\n  };\n  s3.getObject(params, (err, data) => {\n    if (err) console.error(err);\n    fs.writeFileSync(filePath, data.Body.toString());\n    console.log(`${filePath} has been created!`);\n  });\n};\n\ndownloadFile(filePath, bucketName, key);\n'})}),"\n",(0,t.jsx)(n.p,{children:"(2018-08-12)"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>r});var t=a(96540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
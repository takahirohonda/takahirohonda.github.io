"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[7861],{72744:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=o(74848),i=o(28453);const r={sidebar_position:53},s="Uploading File from Browser to S3 with JavaScript",a={id:"Web/Frontend/upload-file-to-s3",title:"Uploading File from Browser to S3 with JavaScript",description:"Uploading a file from a browser to S3 for only authorised users is a pretty cool trick. It is even cooler if we can build it in a serverless way. Here is the entire solution for a simple serverless app to authenticate with AWS Cognito and upload a file to S3 through IAM role assigned to the authenticated user.",source:"@site/docs/Web/Frontend/53.upload-file-to-s3.md",sourceDirName:"Web/Frontend",slug:"/Web/Frontend/upload-file-to-s3",permalink:"/mydatahack-old-blog/docs/Web/Frontend/upload-file-to-s3",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:53,frontMatter:{sidebar_position:53},sidebar:"tutorialSidebar",previous:{title:"Sorting JSON Array by Multiple Keys with JavaScript",permalink:"/mydatahack-old-blog/docs/Web/Frontend/json-array-sort"},next:{title:"Serverless Authentication with AWS Cognito and JavaScript",permalink:"/mydatahack-old-blog/docs/Web/Frontend/auth-cognito-js"}},l={},d=[];function c(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"uploading-file-from-browser-to-s3-with-javascript",children:"Uploading File from Browser to S3 with JavaScript"}),"\n",(0,n.jsx)(t.p,{children:"Uploading a file from a browser to S3 for only authorised users is a pretty cool trick. It is even cooler if we can build it in a serverless way. Here is the entire solution for a simple serverless app to authenticate with AWS Cognito and upload a file to S3 through IAM role assigned to the authenticated user."}),"\n",(0,n.jsx)(t.p,{children:"For serverless user authentication with Cognito, check out the post here. This post focuses on client-side JavaScript to enable S3 uploading."}),"\n",(0,n.jsx)(t.p,{children:"As mentioned in the previous post, the most important concept with AWS Cognito is User Pool and Identity Pool. User Pool manages authentication while Identity Pool manages authorisation to AWS resources through IAM role."}),"\n",(0,n.jsx)(t.p,{children:"To enable S3 upload, we need to assign IAM policy that enables S3 upload to the authenticated user."}),"\n",(0,n.jsx)(t.p,{children:"As the file is uploaded through AJAX call from a browser, we need to enable CORS on the target S3 bucket."}),"\n",(0,n.jsx)(t.p,{children:"When you have the right IAM policy to access the bucket and enable CORS, you are pretty much ready. The cool thing about this is that you can trigger a lambda function on S3 upload event and further do data processing, then bring back the result with another lambda function. The possibility is endless!"}),"\n",(0,n.jsx)(t.p,{children:"Dependencies"}),"\n",(0,n.jsx)(t.p,{children:"We can simply import aws-sdk-js in the script tag at the end of the body. We also need to use another SDK, amazon-cognito-identity, which is part of aws-amplify. Here is the example of html file."}),"\n",(0,n.jsx)(t.p,{children:"Set Credential"}),"\n",(0,n.jsx)(t.p,{children:"We first need to set credential from the cognito user. This will give the browser access to S3 bucket. Cognito user can be retrived by getCurrentUser()."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'var IdentityPoolId = "identity_pool_id";\nvar idKey = "cognito-idp.ap-southeast-2.amazonaws.com/" + userPoolId;\nvar cognitoUser = userPool.getCurrentUser();\nfunction setCredential() {\n  if (cognitoUser != null) {\n    cognitoUser.getSession(function (err, result) {\n      if (err) {\n        console.log("Error in getSession()");\n        console.error(err);\n      }\n      if (result) {\n        console.log("User currently logged in.");\n        AWS.config.update({\n          region: bucketRegion,\n          credentials: new AWS.CognitoIdentityCredentials({\n            IdentityPoolId: IdentityPoolId,\n            Logins: { [idKey]: result.getIdToken().getJwtToken() },\n          }),\n        });\n      }\n    });\n  }\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Upload Code"}),"\n",(0,n.jsx)(t.p,{children:"This is based on AWS official documentation with an example of photo upload. Once you set up Identity pool, you can retrieve the identity pool id from Sample Code section on the identity pool dashboard. The rest is super simple. Here is the entire code that does file checking and produce modal message accordingly."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'function uploadS3() {\n  var s3 = new AWS.S3({ params: { Bucket: bucketName } });\n  var files = document.getElementById("fileinput").files;\n  var params = {\n    Bucket: bucketName,\n    Key: file.name,\n    Body: file,\n  };\n\n  s3.upload(params, function (err, data) {\n    if (err) {\n      console.log(err, err.stack);\n      showModal("Failed to upload", "Network Error. Please contact admin.");\n    } else {\n      console.log(data.key + " successfully uploaded to" + data.Location);\n      showModal("Upload Success!", data.key + " successfully uploaded!");\n    }\n  });\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"(2019-01-09)"})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var n=o(96540);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
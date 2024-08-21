"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[2853],{57104:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=t(74848),i=t(28453);const s={sidebar_position:54},a="Serverless Authentication with AWS Cognito and JavaScript",r={id:"Web/Frontend/auth-cognito-js",title:"Serverless Authentication with AWS Cognito and JavaScript",description:"In a traditional web application, authentication is handled by server-side code and users are managed in the database layer. In the world of serverless apps, we can offload the heavy-lifting to a managed authentication service like AWS Cognito to simplify it.",source:"@site/docs/Web/Frontend/54.auth-cognito-js.md",sourceDirName:"Web/Frontend",slug:"/Web/Frontend/auth-cognito-js",permalink:"/mydatahack-old-blog/docs/Web/Frontend/auth-cognito-js",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:54,frontMatter:{sidebar_position:54},sidebar:"tutorialSidebar",previous:{title:"Uploading File from Browser to S3 with JavaScript",permalink:"/mydatahack-old-blog/docs/Web/Frontend/upload-file-to-s3"},next:{title:"Using setInterval() and setTimeout() with JavaScript",permalink:"/mydatahack-old-blog/docs/Web/Frontend/setInterval-setTimeout"}},c={},l=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"serverless-authentication-with-aws-cognito-and-javascript",children:"Serverless Authentication with AWS Cognito and JavaScript"}),"\n",(0,o.jsx)(n.p,{children:"In a traditional web application, authentication is handled by server-side code and users are managed in the database layer. In the world of serverless apps, we can offload the heavy-lifting to a managed authentication service like AWS Cognito to simplify it."}),"\n",(0,o.jsx)(n.p,{children:"This post focuses on JavaScript code to authenticate users and manage sessions through AWS Cognito."}),"\n",(0,o.jsx)(n.p,{children:"The entire solution can be found in this repo."}),"\n",(0,o.jsx)(n.p,{children:"The most important concept with AWS Cognito is to understand the difference between User Pools and Identity Pools. In a nutshell, User Pools manage user authentication and Identity Pools manage user authorization through IAM roles and permissions. For authentication, user pool is all you need. However, without setting up IAM role through Identity Pool, the authenticated user cannot take action on AWS resources, such as uploading files to S3 or interacting with DynamoDB. This NewStack blog post is excellent in explaining the difference."}),"\n",(0,o.jsx)(n.p,{children:"Setting up users in Cognito"}),"\n",(0,o.jsx)(n.p,{children:"Users can be set up in Cognito through user interface (see AWS official documentation). Usually, we need to write both sign in and sign up logics to manage users. When the user base is limited, sign up logic might not be needed. Without sign up logic, we need to run AWS command to confirm the user by manually changing their password."}),"\n",(0,o.jsx)(n.p,{children:"Once the user is created in Cognito, we can run the command below to reset the password so that the user status becomes confirmed."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"aws cognito-idp admin-initiate-auth --user-pool-id pool_id ^\n--client-id client_id --auth-flow ADMIN_NO_SRP_AUTH ^\n--auth-parameters USERNAME=your_user_name,PASSWORD=initial_password\n\naws cognito-idp admin-respond-to-auth-challenge ^\n--user-pool-id pool_id --client-id client_id ^\n--challenge-name NEW_PASSWORD_REQUIRED ^\n--challenge-responses NEW_PASSWORD=new_password,USERNAME=your_user_name ^\n--session session_string_from_the_previsou_command\n"})}),"\n",(0,o.jsx)(n.p,{children:"Dependencies"}),"\n",(0,o.jsx)(n.p,{children:"Interacting with any AWS service is easy thanks to their excellent SDK. We are using Congito specific JavaScript SDK, amazon-cognito-identity, which is part of aws-amplify. All you need to do is to import them in the script tag at the bottom of the body. Here is the example of sign in html page."}),"\n",(0,o.jsx)(n.p,{children:"Signing in"}),"\n",(0,o.jsx)(n.p,{children:"The function can be invoked on clicking the sign in button. It makes an API call to Cognito and returns a token. If successful, redirect the user to the protected page. You need to obtain user_pool_id and client_id from Cognito console, which should be straight-forward. The code is base on the example from AWS."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'var userPoolId = "your_user_pool_id";\nvar clientId = "your_client_id";\n\nvar poolData = { UserPoolId: userPoolId, ClientId: clientId };\n\nvar userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);\n\nfunction login() {\n  var username = $("#username").val();\n  var authenticationData = {\n    Username: username,\n    Password: $("#password").val(),\n  };\n\n  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(\n    authenticationData\n  );\n\n  var userData = {\n    Username: username,\n    Pool: userPool,\n  };\n  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);\n\n  console.log(cognitoUser);\n  cognitoUser.authenticateUser(authenticationDetails, {\n    onSuccess: function (result) {\n      var accessToken = result.getAccessToken().getJwtToken();\n      console.log("Authentication successful", accessToken);\n      window.location = "./index.html";\n    },\n\n    onFailure: function (err) {\n      console.log("failed to authenticate");\n      console.log(JSON.stringify(err));\n      alert("Failed to Log in.\\nPlease check your credentials.");\n    },\n  });\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Checking user"}),"\n",(0,o.jsx)(n.p,{children:"We can call getCurrentUser() method to see if the user is logged in or not. If there is not current cognito user in the session, it redirects to the sign in page. Index page is not visible when the user is not logged in and hits the index page url."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'function checkLogin(redirectOnRec, redirectOnUnrec) {\n  var cognitoUser = userPool.getCurrentUser();\n  if (cognitoUser != null) {\n    console.log("user exists");\n    if (redirectOnRec) {\n      window.location = "./index.html";\n    } else {\n      $("#body").css({ visibility: "visible" });\n    }\n  } else {\n    if (redirectOnUnrec) {\n      window.location = "./signin.html";\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Signing out"}),"\n",(0,o.jsx)(n.p,{children:"To sign out, we call signOut() method on the user. It will sign out the user and redirect to sign in page."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'function logOut() {\n  var cognitoUser = userPool.getCurrentUser();\n  console.log(cognitoUser, "signing out...");\n  cognitoUser.signOut();\n  window.location = "./signin.html";\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"(2019-01-09)"})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(96540);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
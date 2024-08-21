"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[4798],{86097:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var t=r(74848),n=r(28453);const s={sidebar_position:9},o="Node Module to Retrieve Multiple Parameters from AWS Parameter Store",m={id:"Web/Node.js/node-aws-param-store",title:"Node Module to Retrieve Multiple Parameters from AWS Parameter Store",description:"I created a node module to retrieve multiple parameters as the parameterName-parameterValue Json object from AWS Parameter Store. It is called aws-ssm-parameters and is available from Npm. The module is namespaced. So, you need to add the namespace @mdhnpm when you install it.",source:"@site/docs/Web/Node.js/9.node-aws-param-store.md",sourceDirName:"Web/Node.js",slug:"/Web/Node.js/node-aws-param-store",permalink:"/mydatahack-old-blog/docs/Web/Node.js/node-aws-param-store",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"JavaScript Workout",permalink:"/mydatahack-old-blog/docs/Web/Node.js/javascript-workout"},next:{title:"TypeScript AWS Lambda Boilerplate",permalink:"/mydatahack-old-blog/docs/Web/Node.js/ts-aws-lambda-boilerplate"}},i={},d=[];function l(e){const a={code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"node-module-to-retrieve-multiple-parameters-from-aws-parameter-store",children:"Node Module to Retrieve Multiple Parameters from AWS Parameter Store"}),"\n",(0,t.jsx)(a.p,{children:"I created a node module to retrieve multiple parameters as the parameterName-parameterValue Json object from AWS Parameter Store. It is called aws-ssm-parameters and is available from Npm. The module is namespaced. So, you need to add the namespace @mdhnpm when you install it."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"npm i @mdhnpm/aws-ssm-parameters\n"})}),"\n",(0,t.jsx)(a.p,{children:"The main motivation for creating this module is to use it in lambda functions where I add parameter names in environment variables and use aws-sdk to retrieve them. I find this pattern cleaner than just adding real database passwords or API credentials to environment variables. It creates an extra layer of security and rotating credentials do not require re-deployment of lambda functions (or worse editing credentials directly in the lambda console). I just didn\u2019t want to repeat the same logic again and again in all the lambda functions."}),"\n",(0,t.jsx)(a.p,{children:"The great thing about npm is that the module does not need to be big. It can be namespaced and your private module feels a little more personal although it\u2019s accessible to the public. It also allows you to create a private repo for an organisation. This is a great way to share node modules within the enterprise."}),"\n",(0,t.jsx)(a.p,{children:"My module is super simple. It is based on aws-sdk. It has a method getParameters() which retrieves all the parameters at once. What I did was creating a thin wrapper to make it usable with one line."}),"\n",(0,t.jsx)(a.p,{children:"Here is the source code."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",children:'"use strict";\nconst AWS = require("aws-sdk");\n\nlet ssm;\n\nconst getParameters = async (\n  parameterNames,\n  region,\n  apiVersion = "2014-11-06"\n) => {\n  if (!ssm) {\n    ssm = new AWS.SSM({ apiVersion: apiVersion, region: region });\n  }\n  const params = {\n    Names: parameterNames,\n    WithDecryption: true,\n  };\n  try {\n    const parameters = await ssm.getParameters(params).promise();\n    return formatParameters(parameters);\n  } catch (e) {\n    return e;\n  }\n};\n\nconst formatParameters = (parameters) => {\n  return parameters.Parameters.reduce((object, param) => {\n    return { ...object, [param.Name]: param.Value };\n  }, {});\n};\n\nmodule.exports = { getParameters };\n'})}),"\n",(0,t.jsx)(a.p,{children:"The usage is simple. My recommendation is to use ES7 async/await pattern. It makes code nicer."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",children:'"use strict";\n\nconst { getParameters } = require("@mdhnpm/aws-ssm-parameters");\n\n// Input is an array of parameter names\nconst parameterNames = [\n  "my.db.endpoint",\n  "my.db.name",\n  "my.db.password",\n  "my.db.username",\n];\n\nconst getParams = async () => {\n  // Argument is (1) an array of parameter name & (2) AWS region\n  const parameters = await getParameters(parameterNames, "ap-southeast-2");\n  console.log(parameters);\n};\n\n// The module creates a Json object\n// with parameter name as key and actual value as value\n// Decrypt option is enabled. It works on secure string.\n// {\n//   my.db.endpoint:\'endpoint-url\',\n//   my.db.name: \'database-name\',\n//   my.db.password: \'database-pw\',\n//   my.db.usernme: \'database-username\'\n// }\ngetParams();\n'})}),"\n",(0,t.jsx)(a.p,{children:"There are more \u2026"}),"\n",(0,t.jsx)(a.p,{children:"Now the sdk has a method to retrieve a single parameter getParameter()."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",children:'"use strict";\n\nconst getParameter = (parameterName, ssm) => {\n  const value = ssm\n    .getParameter({ Name: parameterName, WithDecryption: true })\n    .promise();\n\n  return value\n    .then((data) => {\n      return data.Parameter.Value;\n    })\n    .catch((err) => {\n      return err;\n    });\n};\n\nmodule.exports = { getParameter };\n'})}),"\n",(0,t.jsx)(a.p,{children:"Then, we can loop through them and use reduce() function to create home-made getParameters function. Isn\u2019t it fun?"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",children:'"use strict";\nconst AWS = require("aws-sdk");\nconst { getParameter } = require("../play/get-parameter");\nlet ssm;\n\nconst getParameters = (\n  parameterNames,\n  region,\n  getParameterFunc = getParameter\n) => {\n  if (!ssm) {\n    ssm = new AWS.SSM({ apiVersion: "2014-11-06", region: region });\n  }\n\n  return Promise.all(\n    parameterNames.map((parameterName) => getParameterFunc(parameterName, ssm))\n  )\n    .then((values) =>\n      parameterNames.reduce(\n        (obj, paramName, index) => ({ ...obj, [paramName]: values[index] }),\n        {}\n      )\n    )\n    .catch((err) => err);\n};\n\nmodule.exports = { getParameters };\n'})}),"\n",(0,t.jsx)(a.p,{children:"(2019-08-19)"})]})}function c(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>o,x:()=>m});var t=r(96540);const n={},s=t.createContext(n);function o(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function m(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);
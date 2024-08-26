"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[6723],{96619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(74848),s=t(28453);const o={sidebar_position:11},r="Using TSLint VS Code Extension",a={id:"Web/Node.js/vscode-tslint-extension",title:"Using TSLint VS Code Extension",description:"Wouldn\u2019t you rather spend time coding than fixing pesky lint errors? The best time saver for developing TypeScript apps is auto-fixing lint on save. This is a quick instruction to endow this magical power to your VS code.",source:"@site/docs/Web/Node.js/11.vscode-tslint-extension.md",sourceDirName:"Web/Node.js",slug:"/Web/Node.js/vscode-tslint-extension",permalink:"/mydatahack-old-blog/docs/Web/Node.js/vscode-tslint-extension",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"TypeScript AWS Lambda Boilerplate",permalink:"/mydatahack-old-blog/docs/Web/Node.js/ts-aws-lambda-boilerplate"},next:{title:"AWS Lambda Function Node.js Boilerplate",permalink:"/mydatahack-old-blog/docs/Web/Node.js/nodejs-aws-lambda-boilerplate"}},l={},c=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"using-tslint-vs-code-extension",children:"Using TSLint VS Code Extension"}),"\n",(0,i.jsx)(n.p,{children:"Wouldn\u2019t you rather spend time coding than fixing pesky lint errors? The best time saver for developing TypeScript apps is auto-fixing lint on save. This is a quick instruction to endow this magical power to your VS code."}),"\n",(0,i.jsx)(n.p,{children:"Steps"}),"\n",(0,i.jsx)(n.p,{children:"(1) Install tslint in your project."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm i \u2013save-dev tslint\n"})}),"\n",(0,i.jsx)(n.p,{children:"(2) Add tslint.json file into your root folder"}),"\n",(0,i.jsx)(n.p,{children:"You can define whatever linting rules you want to use in this file. Here is the example."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "rules": {\n    "no-trailing-whitespace": [true, "always"],\n    "prefer-const": [true, { "destructuring": "any" }],\n    "semicolon": [true, "always"],\n    "space-before-function-paren": [true, "never"],\n    "quotemark": [true, "single"]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"(3) Install VS code TS Lint Extension"}),"\n",(0,i.jsx)(n.p,{children:"I use the deprecated version, TSLint (deprecated) because it does the auto fix on save. In the future, the newer one will probably have the same functionality. Until then, this one is better!"}),"\n",(0,i.jsxs)(n.p,{children:["(4) Set ",(0,i.jsx)(n.code,{children:"tslint.autoFixOnSave"})," to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.code,{children:"File > Preference > Settings"}),". Search for tslint. You will see TSLint: Auto Fix On Save will come up under UserSetting. Click Edit in settings.json."]}),"\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"tslint.autoFixOnSave"})," to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"That\u2019s it. Now the VS code fixes lint on save automatically according to your definition in tslint.json."}),"\n",(0,i.jsx)(n.p,{children:"(2019-04-17)"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
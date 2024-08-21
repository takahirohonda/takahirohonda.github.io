"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[6978],{41723:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=t(74848),s=t(28453);const a={sidebar_position:33},r="Why Istanbul Is Not Working After Cloning A Repo",i={id:"Web/Frontend/istanbul-not-working",title:"Why Istanbul Is Not Working After Cloning A Repo",description:"I got a new laptop. I installed the latest Node.js and cloned a repo to keep continuing with my React project. I ran npm i to install all dependencies. The app started fine and built fine. However, when I ran npm test, the test was not running.",source:"@site/docs/Web/Frontend/33.istanbul-not-working.md",sourceDirName:"Web/Frontend",slug:"/Web/Frontend/istanbul-not-working",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Web/Frontend/istanbul-not-working",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:33,frontMatter:{sidebar_position:33},sidebar:"tutorialSidebar",previous:{title:"SVG Attributes for Sizing Doesn\u2019t Work on iPhone",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Web/Frontend/svg-attribute-not-working-iphone"},next:{title:"Releasing Multiple PWAs to GooglePlay By Using a Single GitHub Page Root",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Web/Frontend/release-multiple-pwas"}},l={},d=[];function c(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"why-istanbul-is-not-working-after-cloning-a-repo",children:"Why Istanbul Is Not Working After Cloning A Repo"}),"\n",(0,o.jsx)(n.p,{children:"I got a new laptop. I installed the latest Node.js and cloned a repo to keep continuing with my React project. I ran npm i to install all dependencies. The app started fine and built fine. However, when I ran npm test, the test was not running."}),"\n",(0,o.jsx)(n.p,{children:"My test script was this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nyc --reporter=html --reporter=text mocha -r ts-node/register -r jsdom-global/register ^\n-r unitTestSetup.ts **/tests/**/*.ts  --recursive --timeout 5000\n"})}),"\n",(0,o.jsx)(n.p,{children:"The error message was this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"internal/modules/cjs/loader.js:800\n    throw err;\n    ^\nError: Cannot find module 'C:\\Users\\takah\\Projects\\my-to-do-app-typescript-react-hooks\\node'\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:797:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:690:27)\n    at Function.Module.runMain (internal/modules/cjs/loader.js:1047:10)\n    at internal/main/run_main_module.js:17:11 {\n  code: 'MODULE_NOT_FOUND',\n  requireStack: []\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"After a little bit of investigation, I realised that Istanbul (nyc) was not working for some reason. The module was used for test coverage."}),"\n",(0,o.jsx)(n.p,{children:"I actually struggled to solve this issue, but in the end I worked out that I needed to upgrade the version of nyc. The version of nyc was 13.3.0. So I uninstalled module and reinstalled it. This upgraded nyc to 15.0.0."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm uninstall nyc\nnpm i --save-dev nyc\n"})}),"\n",(0,o.jsx)(n.p,{children:"For some reason, the older version of nyc is not compatible with the newer version of node and npm. If you are having the same issue with running nyc, just upgrade it. It will start running again."}),"\n",(0,o.jsx)(n.p,{children:"It took me a while to resolve this. Hopefully this post saves you a bit of time troubleshooting the same problem I had!"}),"\n",(0,o.jsx)(n.p,{children:"(2020-01-17)"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var o=t(96540);const s={},a=o.createContext(s);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);
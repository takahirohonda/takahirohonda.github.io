"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[3209],{55286:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=t(74848),r=t(28453);const s={sidebar_position:58},a="When My Webpack 4 Server Suddenly Stopped Working",i={id:"Web/Frontend/webpack-4-server-issue",title:"When My Webpack 4 Server Suddenly Stopped Working",description:"Now, I have a React development environment with webpack 4 set up on my local Windows 10 machine (How to set up local development environment for React with webpack 4 and babel 7).",source:"@site/docs/Web/Frontend/58.webpack-4-server-issue.md",sourceDirName:"Web/Frontend",slug:"/Web/Frontend/webpack-4-server-issue",permalink:"/mydatahack-old-blog/docs/Web/Frontend/webpack-4-server-issue",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:58,frontMatter:{sidebar_position:58},sidebar:"tutorialSidebar",previous:{title:"Unit Testing React Form with Jest and Enzyme",permalink:"/mydatahack-old-blog/docs/Web/Frontend/react-jst-enzyme"},next:{title:"Starting React.js in 30 seconds",permalink:"/mydatahack-old-blog/docs/Web/Frontend/react-in-30-sec"}},c={},d=[];function p(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"when-my-webpack-4-server-suddenly-stopped-working",children:"When My Webpack 4 Server Suddenly Stopped Working"}),"\n",(0,o.jsx)(n.p,{children:"Now, I have a React development environment with webpack 4 set up on my local Windows 10 machine (How to set up local development environment for React with webpack 4 and babel 7)."}),"\n",(0,o.jsx)(n.p,{children:"I have encountered a few occasions that the webpack server suddenly stopped starting and giving me the error below. This happens to the folder where it was working previously."}),"\n",(0,o.jsx)(n.p,{children:"It took me a while to why this is happening, but I found out a workaround to get the server going. I hope you are not having this issues, but if you are, this post might help you to save a few hours of banging your head against the brick wall."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"events.js:183\n      throw er; // Unhandled 'error' event\n      ^\n\nError: listen EADDRINUSE 127.0.0.1:3000\n    at Object._errnoException (util.js:1024:11)\n    at _exceptionWithHostPort (util.js:1046:20)\n    at Server.setupListenHandle [as _listen2] (net.js:1351:14)\n    at listenInCluster (net.js:1392:12)\n    at GetAddrInfoReqWrap.doListen [as callback] (net.js:1501:7)\n    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:97:10)\nnpm ERR! code ELIFECYCLE\nnpm ERR! errno 1\nnpm ERR! ReactNpm@1.0.0 start: `webpack-dev-server`\nnpm ERR! Exit status 1\nnpm ERR!\nnpm ERR! Failed at the ReactNpm@1.0.0 start script.\nnpm ERR! This is probably not a problem with npm. There is likely additional logging output above.\n"})}),"\n",(0,o.jsx)(n.p,{children:"In my case, this happens when the server doesn\u2019t get terminated correctly. From the command line interface, you should see the below termination confirmation message as below after pressing ctrl + c."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"Terminate batch job (Y/N)?"})}),"\n",(0,o.jsx)(n.p,{children:"For a few occasions, the server terminated without asking the confirmation. This is when the server doesn\u2019t get terminated correctly and you cannot start another webpack server."}),"\n",(0,o.jsx)(n.p,{children:"The workaround is to terminate the node task from Task Manager. Once this is done, you can restart the server with npm start."}),"\n",(0,o.jsx)(n.p,{children:"(2018-10-02)"})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(96540);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
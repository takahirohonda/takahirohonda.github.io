"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[4220],{27588:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=o(74848),n=o(28453);const s={sidebar_position:11},i="How To Resolve Refusing to serve hidden directory, via 404 Error with Jupyter notebook.",a={id:"Infrastructure/Miscellaneous/jupyter-error",title:"How To Resolve Refusing to serve hidden directory, via 404 Error with Jupyter notebook.",description:"I hate 404 errors. Whenever I get it, I stare at the screen with disdain because it cannot be fixed most of the time. What cannot be found cannot be found. But, fixing this one is easy!",source:"@site/docs/Infrastructure/Miscellaneous/11.jupyter-error.md",sourceDirName:"Infrastructure/Miscellaneous",slug:"/Infrastructure/Miscellaneous/jupyter-error",permalink:"/mydatahack-old-blog/docs/Infrastructure/Miscellaneous/jupyter-error",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"How To Install Apache Spark On Windows",permalink:"/mydatahack-old-blog/docs/Infrastructure/Miscellaneous/spark-on-windows"},next:{title:"How To Install a List of Python Packages From a Text File",permalink:"/mydatahack-old-blog/docs/Infrastructure/Miscellaneous/py-package-text-file"}},c={},d=[];function u(e){const t={code:"code",h1:"h1",p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"how-to-resolve-refusing-to-serve-hidden-directory-via-404-error-with-jupyter-notebook",children:"How To Resolve Refusing to serve hidden directory, via 404 Error with Jupyter notebook."}),"\n",(0,r.jsx)(t.p,{children:"I hate 404 errors. Whenever I get it, I stare at the screen with disdain because it cannot be fixed most of the time. What cannot be found cannot be found. But, fixing this one is easy!"}),"\n",(0,r.jsx)(t.p,{children:"By default, Anaconda serves notebooks from local directory: C:\\ in Windows. To resolve this error, you need to change the startup folder."}),"\n",(0,r.jsx)(t.p,{children:"(1) Open cmd and run the command below to generate a config file."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"jupyter notebook --generate-config"}),"\n(2) The command creates a file to ",(0,r.jsx)(t.code,{children:"C:\\User\\username\\.jupyter\\jupyter_notebook_config"}),". Go to the folder and open the config file."]}),"\n",(0,r.jsxs)(t.p,{children:["(3) Find ",(0,r.jsx)(t.code,{children:"c.NotebookApp.notebook_dir = u\u2019\u2019"})," and add the path for the start folder that is not a hidden directory (for example, ",(0,r.jsx)(t.code,{children:"C:\\User\\username\\"}),")."]}),"\n",(0,r.jsx)(t.p,{children:"This should fix the error!"}),"\n",(0,r.jsx)(t.p,{children:"(2017-12-21)"})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>a});var r=o(96540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
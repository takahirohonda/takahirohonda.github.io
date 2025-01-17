"use strict";(self.webpackChunkdocusaurus_portfolio_site=self.webpackChunkdocusaurus_portfolio_site||[]).push([[3338],{3650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(5893),r=t(1151);const o={title:"Deploying PWA to GitPage with React and Vite",sidebar_position:97},s=void 0,a={id:"current/pwa-vite-gitpage/index",title:"Deploying PWA to GitPage with React and Vite",description:"There are a few things we need to do if you want to get a react app working in the git page as PWA if the base path is not the root.",source:"@site/my-learning-notes/current/96-pwa-vite-gitpage/index.md",sourceDirName:"current/96-pwa-vite-gitpage",slug:"/current/pwa-vite-gitpage/",permalink:"/my-learning-notes/current/pwa-vite-gitpage/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:97,frontMatter:{title:"Deploying PWA to GitPage with React and Vite",sidebar_position:97},sidebar:"firstDocSidebar",previous:{title:"Quick CSS/ Tailwind Reminders",permalink:"/my-learning-notes/current/quick-css-tailwind-reminder/"},next:{title:"Start new project with Nx",permalink:"/my-learning-notes/current/starting-new-project-with-nx/"}},c={},d=[];function l(e){const n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"There are a few things we need to do if you want to get a react app working in the git page as PWA if the base path is not the root."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"BrowserRouter"})," needs a basename. Use ",(0,i.jsx)(n.code,{children:"import.meta.env.MODE"})," to add basename when it's build with ",(0,i.jsx)(n.code,{children:"vite build"})," during deployment."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:" <BrowserRouter\n      basename={\n        import.meta.env.MODE === 'development' ? '/' : '/voice-recorder'\n      }\n    >\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Make sure too add base property in ",(0,i.jsx)(n.code,{children:"vite.config.ts"}),". We can use the ",(0,i.jsx)(n.code,{children:"GIT_PAGE_DEPLOY"})," env variable to add the base path during deployment."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const isGitPageDeploy = Boolean(process.env.GIT_PAGE_DEPLOY)\n\nexport default defineConfig({\n  root: __dirname,\n  cacheDir: '../../node_modules/.vite/apps/react-voice-recorder',\n  base: isGitPageDeploy ? '/voice-recorder' : '',\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Configure ",(0,i.jsx)(n.code,{children:"VitePWA"})," plugin."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { VitePWA } from 'vite-plugin-pwa'\nimport manifestObj from './public/manifest.json'\n\n...\n plugins: [\n    ...,\n    VitePWA({\n      registerType: 'autoUpdate',\n      manifest: manifestObj as any,\n      workbox: {\n        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],\n      },\n    }),\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"manifest.json"})," in the public folder needs to have the ",(0,i.jsx)(n.code,{children:"start_url"}),". Shouldn't include the index.html in the path."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u2705 ",(0,i.jsx)(n.code,{children:'"start_url": "/voice-recorder",'})]}),"\n",(0,i.jsxs)(n.p,{children:["\u274c ",(0,i.jsx)(n.code,{children:'"start_url": "/voice-recorder/index.html",'})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
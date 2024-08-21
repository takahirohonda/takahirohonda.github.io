"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[1458],{91741:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=o(74848),s=o(28453);const i={sidebar_position:9},a="9. Should We Use Squash and Merge Option?",r={id:"Git/squash-vs-merge",title:"9. Should We Use Squash and Merge Option?",description:"When we merge PR into the base branch, we have an option to do Squash and Merge. My preference is to use it all the time. Let's talk about why this is the case.",source:"@site/docs/Git/9-squash-vs-merge.md",sourceDirName:"Git",slug:"/Git/squash-vs-merge",permalink:"/docs/Git/squash-vs-merge",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"8. Deploying Jekyll Site to Github Page with Github Actions",permalink:"/docs/Git/jekyll-github-action"},next:{title:"10. How to specify which Node version to use in Github Actions",permalink:"/docs/Git/node-ver-gitbub-action"}},h={},c=[];function u(e){const t={h1:"h1",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"9-should-we-use-squash-and-merge-option",children:"9. Should We Use Squash and Merge Option?"}),"\n",(0,n.jsx)(t.p,{children:"When we merge PR into the base branch, we have an option to do Squash and Merge. My preference is to use it all the time. Let's talk about why this is the case."}),"\n",(0,n.jsx)(t.p,{children:"First of all, what do we want from our commit history? We want to have a clean commit history with no noise. We also want to retain the history of change so that we can understand the change and context when we look back."}),"\n",(0,n.jsx)(t.p,{children:"One commit should be sufficient for a lot of PRs. If you need to have multiple commits, the PR is too large and it should be broken down into smaller pieces."}),"\n",(0,n.jsx)(t.p,{children:"However, there are many cases where you want to have a few commit histories so that we can trace the change and the PR history itself works as a documentation for the context of the change. In this case, we can retain the commit history in the PR while having a single clean commit to the base branch without noise with Squash and Merge option."}),"\n",(0,n.jsx)(t.p,{children:"The caveat is that we do not want to abuse it. We want to make sure we retain a good commit history in the PR if it makes sense to have the change history. We can do fixup, squash and so on. As long as we stick to good git practice, the Squash and Merge option works really well."}),"\n",(0,n.jsx)(t.p,{children:"(2020-11-16)"})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>r});var n=o(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
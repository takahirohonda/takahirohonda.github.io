"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[9657],{70641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=t(74848),o=t(28453);const r={sidebar_position:4},i="How To Run More Than 2 Data Synchronization Tasks Concurrently",s={id:"ETL/informatica/run-concurrent-data-sync",title:"How To Run More Than 2 Data Synchronization Tasks Concurrently",description:"By default, the secure agent can run 2 data synchronisation tasks at a time. This constraint can become limiting quickly especially when multiple developers are building and testing the data synchronisation tasks at the same time. By adding a custom property on the secure agent, you can run more than 2 jobs concurrently.",source:"@site/docs/ETL/informatica/4.run-concurrent-data-sync.md",sourceDirName:"ETL/informatica",slug:"/ETL/informatica/run-concurrent-data-sync",permalink:"/mydatahack-old-blog/docs/ETL/informatica/run-concurrent-data-sync",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How To Optimise Joiner Performance In Mapping Designer",permalink:"/mydatahack-old-blog/docs/ETL/informatica/optimise-joiner"},next:{title:"How To Use Hierarchy Parser To Transform JSON File",permalink:"/mydatahack-old-blog/docs/ETL/informatica/hierarchy-parser"}},c={},u=[];function l(e){const n={h1:"h1",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"how-to-run-more-than-2-data-synchronization-tasks-concurrently",children:"How To Run More Than 2 Data Synchronization Tasks Concurrently"}),"\n",(0,a.jsx)(n.p,{children:"By default, the secure agent can run 2 data synchronisation tasks at a time. This constraint can become limiting quickly especially when multiple developers are building and testing the data synchronisation tasks at the same time. By adding a custom property on the secure agent, you can run more than 2 jobs concurrently."}),"\n",(0,a.jsx)(n.p,{children:"Steps"}),"\n",(0,a.jsx)(n.p,{children:"(1) Log in to Informatica cloud"}),"\n",(0,a.jsx)(n.p,{children:"(2) Configure -> Runtime Environment -> Pick the secure agent"}),"\n",(0,a.jsx)(n.p,{children:"(3) Go all the way down and you will find Custom Configuration tab. Select service as Data integration server. Set Type as Tomcat and Name as maxDTMProcesses. Value would be the number of jobs you want to run concurrently. For example, setting 4 means 4 jobs run concurrently."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"img",src:t(24665).A+"",width:"1334",height:"66"})}),"\n",(0,a.jsx)(n.p,{children:"Note"}),"\n",(0,a.jsx)(n.p,{children:"Informatica recommend to distribute the load among the available secure agents instead of running all the tasks using one secure agents. The number of secure agent you can have depends on the contract."}),"\n",(0,a.jsx)(n.p,{children:"However, running jobs in multiple secure agent servers makes it harder to manage. If you just want to increase it to 4 or 5 jobs, it\u2019s usually fine with updating the configuration."}),"\n",(0,a.jsx)(n.p,{children:"The max number of concurrent jobs you can run with one secure agent depends on the volume of data as well as the size of the secure agent server. Running concurrent tasks may slow down the speed of individual tasks. The best practice is to experiment it and find the magic number where performance compromise is minimum. I recommend to monitor the server performance and capacity while you are running concurrent tasks."}),"\n",(0,a.jsx)(n.p,{children:"Data Synchronization is probably the best tool to do one-to-one copy between relational databases in the market. It is super easy to build jobs. It is so solid and never really fails unless source database changes. Coming from the DataStage world, I found that Data Synchronisation minimises the time worrying about one-to-one copy jobs and makes me really focus on transformation, adding more value to the business."}),"\n",(0,a.jsx)(n.p,{children:"If you are interested in incremental load with Data Synchronization tasks, check out the post here."}),"\n",(0,a.jsx)(n.p,{children:"Enjoy!"}),"\n",(0,a.jsx)(n.p,{children:"(2018-01-19)"})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},24665:(e,n,t)=>{t.d(n,{A:()=>a});const a="data:image/webp;base64,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"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(96540);const o={},r=a.createContext(o);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
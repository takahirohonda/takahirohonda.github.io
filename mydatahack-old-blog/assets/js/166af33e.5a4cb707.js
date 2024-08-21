"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[5480],{64719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(74848),a=n(28453);const i={sidebar_position:16},r="How To Configure ODBC Connector For Informatica Cloud Secure Agent",c={id:"ETL/informatica/configure-odbc",title:"How To Configure ODBC Connector For Informatica Cloud Secure Agent",description:"Informatica does not have a dedicated Postgres database connector. Therefore, we need to use the ODBC connector. In this post, I will discuss how to configure Postgres ODBC in both Linux and Windows servers for the Informatica Cloud ODBC connector.",source:"@site/docs/ETL/informatica/16.configure-odbc.md",sourceDirName:"ETL/informatica",slug:"/ETL/informatica/configure-odbc",permalink:"/mydatahack-old-blog/docs/ETL/informatica/configure-odbc",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"How To Read Flat Files",permalink:"/mydatahack-old-blog/docs/ETL/informatica/read-flat-file"},next:{title:"DataStage",permalink:"/mydatahack-old-blog/docs/category/datastage"}},s={},d=[];function l(e){const t={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"how-to-configure-odbc-connector-for-informatica-cloud-secure-agent",children:"How To Configure ODBC Connector For Informatica Cloud Secure Agent"}),"\n",(0,o.jsx)(t.p,{children:"Informatica does not have a dedicated Postgres database connector. Therefore, we need to use the ODBC connector. In this post, I will discuss how to configure Postgres ODBC in both Linux and Windows servers for the Informatica Cloud ODBC connector."}),"\n",(0,o.jsx)(t.p,{children:"Linux Server (Red Hat)"}),"\n",(0,o.jsx)(t.p,{children:"There are a few instructions, but none of them is clear and it took me a while to figure it out. The steps below works fine."}),"\n",(0,o.jsxs)(t.p,{children:["(1) Install 64-bit postgres ODBC in ",(0,o.jsx)(t.code,{children:"/usr/lib64/"})," (see details here)."]}),"\n",(0,o.jsx)(t.p,{children:"(2) Edit /etc/odbc.ini as below. Note that the Data Source Name (DSN) is the one in []."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"[datalake]\nDescription = PostgreSQL connection to insightsdb\nDriver = /usr/lib64/psqlodbc.so\nDatabase =\nServername =\nUserName =\nPassword = Port = 5432\nProtocol = 9.3\nReadOnly = No\nRowVersioning = No\nShowSystemTables = No\nConnSettings =\n"})}),"\n",(0,o.jsx)(t.p,{children:"(3) Check if ODBC is working with isql command."}),"\n",(0,o.jsx)(t.p,{children:"isql datalake\n(4) Add these two variables in .bash_profile of the user under which the secure agent is running."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'Sudo -su\nVi ~/.bash_profile\n#Then add two variables below\n\nexport ODBCINI="/etc/odbc.ini"\nexport LD_LIBRARY_PATH="/usr/lib64/psqlodbc.so"\n'})}),"\n",(0,o.jsx)(t.p,{children:"(5) Restart the secure agent."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"/opt/infaagent/apps/agentcore/infaagent shutdown\n/opt/infaagent/apps/agentcore/infaagent startup\n"})}),"\n",(0,o.jsx)(t.p,{children:"Windows Servers"}),"\n",(0,o.jsx)(t.p,{children:"Configuring ODBC in a Windows Server is a relatively easy task because you can do it with the GUI tool. You can use the 64-bit version of ODBC Data Source Administrator just like you do it with your Windows desktop."}),"\n",(0,o.jsx)(t.p,{children:"There are two things you need to know."}),"\n",(0,o.jsx)(t.p,{children:"ODBC Data Source has to be configured as System DSN.\nChoose Unicode, if the database server charset is set to UTF8.\nHere is what it looks like."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img",src:n(86608).A+"",width:"604",height:"428"})}),"\n",(0,o.jsx)(t.p,{children:"(2017-11-11)"})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},86608:(e,t,n)=>{n.d(t,{A:()=>o});const o="data:image/webp;base64,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"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var o=n(96540);const a={},i=o.createContext(a);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);
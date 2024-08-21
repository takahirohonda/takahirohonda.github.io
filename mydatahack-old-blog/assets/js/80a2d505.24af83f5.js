"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[146],{66999:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var o=a(74848),r=a(28453);const n={sidebar_position:4},s="Script To Deploy Jobs",i={id:"ETL/DataStage/deploy-job",title:"Script To Deploy Jobs",description:"I have written a batch script to deploy DataStage jobs. The script itself runs on your computer and can push jobs wherever you want. The script is leveraging the DSXImportService that comes with DataStage installation.",source:"@site/docs/ETL/DataStage/4.deploy-job.md",sourceDirName:"ETL/DataStage",slug:"/ETL/DataStage/deploy-job",permalink:"/mydatahack-old-blog/mydatahack-old-blog/ETL/DataStage/deploy-job",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Join vs Lookup vs Merge",permalink:"/mydatahack-old-blog/mydatahack-old-blog/ETL/DataStage/join-lookup-merge"},next:{title:"How To Resolve Scratch Space Full Error",permalink:"/mydatahack-old-blog/mydatahack-old-blog/ETL/DataStage/scratch-space-full-error"}},c={},l=[];function p(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"script-to-deploy-jobs",children:"Script To Deploy Jobs"}),"\n",(0,o.jsx)(t.p,{children:"I have written a batch script to deploy DataStage jobs. The script itself runs on your computer and can push jobs wherever you want. The script is leveraging the DSXImportService that comes with DataStage installation."}),"\n",(0,o.jsx)(t.p,{children:"The script can:"}),"\n",(0,o.jsx)(t.p,{children:"Push both parallel and sequence jobs and parameter files.\nWorks between projects as well as between environments (for example, dev to prod)\nSteps"}),"\n",(0,o.jsx)(t.p,{children:"(1) Export the job into a folder on your computer."}),"\n",(0,o.jsx)(t.p,{children:"(2) Prepare the authentication file in the same folder where the script is."}),"\n",(0,o.jsx)(t.p,{children:"(3) Open Windows Command Prompt and run the batch script with the folder path of the exported job as an argument."}),"\n",(0,o.jsx)(t.p,{children:"script.bat ./Desktop/Exported/"}),"\n",(0,o.jsx)(t.p,{children:"Script"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'@ECHO off\nsetlocal enabledelayedexpansion\nset "dir1=%1\nFOR /R %dir1% %%X in (*.dsx) DO (\n<your installation path>\\bin\\DSXImportService  -ISAuthFile auth_file.txt \\\n-DSProject <Your Project Name> -DSXFile %%X -Overwrite -Verbose\necho %%X\n)\n'})}),"\n",(0,o.jsx)(t.p,{children:"auth_file.txt"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"user=<Your DataStage User name>\npassword=Your Password>\ndomain=<DataStage Server URL>:<Port No. Usually 9445>\nserver=<DataStage Server URL>\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>i});var o=a(96540);const r={},n=o.createContext(r);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);
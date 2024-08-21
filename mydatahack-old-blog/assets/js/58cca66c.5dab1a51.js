"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[334],{27996:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=a(74848),i=a(28453);const o={sidebar_position:9},s="Incremental Load With Data Synchronization Task",r={id:"ETL/informatica/incremental-data-load",title:"Incremental Load With Data Synchronization Task",description:"Data Synchronization is a great tool to ingest source data into Data Lake, ODS, or Staging Area. Currently, Data Synchronization does not read database logs to do incremental loads (this is in their road map). Instead, each task automatically stores the last run time stamp ($LastRunTime) in the default task parameter file (which can be found in the server or computer where the secure agent is installed). Implementing incremental load is simply to use $LastRunTime stored in the filter condition.",source:"@site/docs/ETL/informatica/9.incremental-data-load.md",sourceDirName:"ETL/informatica",slug:"/ETL/informatica/incremental-data-load",permalink:"/mydatahack-old-blog/docs/ETL/informatica/incremental-data-load",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Compatibility with AWS Redshift",permalink:"/mydatahack-old-blog/docs/ETL/informatica/compatibility-with-redshit"},next:{title:"How To Do Ranking",permalink:"/mydatahack-old-blog/docs/ETL/informatica/ranking"}},c={},d=[];function l(e){const t={code:"code",h1:"h1",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"incremental-load-with-data-synchronization-task",children:"Incremental Load With Data Synchronization Task"}),"\n",(0,n.jsx)(t.p,{children:"Data Synchronization is a great tool to ingest source data into Data Lake, ODS, or Staging Area. Currently, Data Synchronization does not read database logs to do incremental loads (this is in their road map). Instead, each task automatically stores the last run time stamp ($LastRunTime) in the default task parameter file (which can be found in the server or computer where the secure agent is installed). Implementing incremental load is simply to use $LastRunTime stored in the filter condition."}),"\n",(0,n.jsx)(t.p,{children:"Note that $LastRunTime is stored in GMT (this does not change even if you change the timezone for your Org within Informatica Cloud). Therefore, it can be used without any change when the Source System uses GMT (like Salesforce or MarketingCloud). If the Source System uses local time, we have to convert the time stamp column in the source system to GMT in the filter condition (we will look into this case in the second example). With this approach, we can achieve near real-time integration down to 5 minutes at minimum."}),"\n",(0,n.jsx)(t.p,{children:"Let\u2019s have a look at three common ingestion patterns."}),"\n",(0,n.jsx)(t.p,{children:"Incremental Upsert\nIncremental Insert\nTruncate and Load\nIncremental Upsert"}),"\n",(0,n.jsx)(t.p,{children:"In this example, we will do incremental upsert on Salesforce Account table into a relational database."}),"\n",(0,n.jsx)(t.p,{children:"(1) Name the task and choose operation as Upsert."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img",src:a(16026).A+"",width:"819",height:"494"})}),"\n",(0,n.jsx)(t.p,{children:"(2) Define Source by selecting the source connection (Salesforce Connection) and choose the object (Account). It will automatically read the account object."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img",src:a(95547).A+"",width:"1152",height:"640"})}),"\n",(0,n.jsx)(t.p,{children:"(3) Define the Target by choosing the target database connection."}),"\n",(0,n.jsx)(t.p,{children:"(4) Salesforce objects have a field called LastModifiedDate. This is the timestamp for the newly inserted/updated record. We will use this field to find all the records that got inserted or updated since the last time the synchronisation task was run."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"LastModifiedDate >= $LastRunTime"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img",src:a(52728).A+"",width:"860",height:"481"})}),"\n",(0,n.jsx)(t.p,{children:"(5) Map the field. Data Synchronisation can create table for you. It is sometimes a good idea to create a table by yourself and include only the fields that are relevant and Last_Uploaded_Timestamp where it indicates the last time the row was uploaded to the table by Informatica."}),"\n",(0,n.jsx)(t.p,{children:"(6) You can schedule the task on it own or add to the task flow that has other Salesforce tasks. Informatica can schedule the job down to 5 minutes."}),"\n",(0,n.jsx)(t.p,{children:"Incremental Insert when Source Table Uses Local Timestamp"}),"\n",(0,n.jsx)(t.p,{children:"When we ingest event tables (where only new records get inserted and existing records don\u2019t get updated), the best approach is to grab only the records that have gotten inserted since the last run."}),"\n",(0,n.jsx)(t.p,{children:"We are ingesting an event table from Oracle database where the application stores time in the local time (Sydney/Australia). ACTION_DTE in the source table indicate when the record gets inserted."}),"\n",(0,n.jsx)(t.p,{children:"(1) Name the Task and choose Insert as Task Operation."}),"\n",(0,n.jsx)(t.p,{children:"(2) Choose the source connection and table."}),"\n",(0,n.jsx)(t.p,{children:"(3) Choose the target connection and table."}),"\n",(0,n.jsx)(t.p,{children:"(4) In the filter, we convert ACTION_DTE into GMT with Oracle syntax (as the source database is Oracle) and use it to find the records inserted after the last run. In the Filter tab, use advanced option to write the condition."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"from_tz(cast(ACTION_DTE as timestamp), \u2018Australia/Sydney\u2019) at time zone \u2018GMT\u2019 > $LastRunTime"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img",src:a(8273).A+"",width:"1492",height:"474"})}),"\n",(0,n.jsx)(t.p,{children:"(5) Map fields, configure Target Properties and set schedule."}),"\n",(0,n.jsx)(t.p,{children:"Truncate and Load"}),"\n",(0,n.jsx)(t.p,{children:"This is not the best approach for ingesting data. However, there is always a time and place for good ol\u2019 Truncate and Load."}),"\n",(0,n.jsx)(t.p,{children:"To achieve this, you simply have to write the truncate table statement in Pre-sql command in the Advanced Target Properties. This can be set in the step 6 (Schedule) of the Task Wizard."}),"\n",(0,n.jsx)(t.p,{children:"(2017-08-13)"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},16026:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/img-1-ca0f5637001643813578676625d9bdc9.webp"},95547:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/img-2-92fa89b4ddc9e547d79f8d79a524177c.webp"},52728:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/img-3-a87c99c4712808ecfea16103b294c84b.webp"},8273:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/img-4-3c9da566b77a294482c88551534da39a.webp"},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>r});var n=a(96540);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
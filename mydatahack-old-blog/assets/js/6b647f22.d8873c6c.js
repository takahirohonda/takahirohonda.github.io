"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[5398],{13423:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=n(74848),o=n(28453);const r={sidebar_position:16},a="How To Format Output in Pretty JSON With Postgres",i={id:"Infrastructure/DBA/format-output-postgres",title:"How To Format Output in Pretty JSON With Postgres",description:"In the previous post, we discussed the new JSON ingestion strategy by using the power of Postgres native JSON support functionality (New JSON Data Ingestion Strategy By Using the Power of Postgres). Since Postgres 9.5, it\u2019s got a cool function jsonb_pretty() which automatically formats the output in the pretty JSON format. Before 9.5, the best way to format json was to write a function in Python or any other programming language that Postgres supports. Making JSON pretty is so much easier now!",source:"@site/docs/Infrastructure/DBA/16.format-output-postgres.md",sourceDirName:"Infrastructure/DBA",slug:"/Infrastructure/DBA/format-output-postgres",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Infrastructure/DBA/format-output-postgres",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"How To Create User Credentials And Grant Privileges In Postgres",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Infrastructure/DBA/pg-user-credentials"},next:{title:"Miscellaneous",permalink:"/mydatahack-old-blog/mydatahack-old-blog/category/miscellaneous"}},u={},c=[];function h(t){const e={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,o.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"how-to-format-output-in-pretty-json-with-postgres",children:"How To Format Output in Pretty JSON With Postgres"}),"\n",(0,s.jsx)(e.p,{children:"In the previous post, we discussed the new JSON ingestion strategy by using the power of Postgres native JSON support functionality (New JSON Data Ingestion Strategy By Using the Power of Postgres). Since Postgres 9.5, it\u2019s got a cool function jsonb_pretty() which automatically formats the output in the pretty JSON format. Before 9.5, the best way to format json was to write a function in Python or any other programming language that Postgres supports. Making JSON pretty is so much easier now!"}),"\n",(0,s.jsx)(e.p,{children:"We will use the same data set (restaurants_json) used here. You can check the post for further details."}),"\n",(0,s.jsx)(e.p,{children:"In the restaurants dataset, let\u2019s pick the records for Japanese Restaurant."}),"\n",(0,s.jsx)(e.p,{children:"Pretty JSON Output"}),"\n",(0,s.jsx)(e.p,{children:"The data type for the jsonb_pretty() function is jsonb. If the data column contains the data type of json. Before using the function, you need to convert the format to jsonb."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT jsonb_pretty(DATA::jsonb)\nFROM  mongodb.restaurants_json\nWHERE data->>'cuisine'='Japanese';\n"})}),"\n",(0,s.jsx)(e.p,{children:"For the query performance, the jsonb is more recommended option. When you create a table, you should make the data type as jsonb. here is a good blog post about the difference between json and jsonb data types."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE usermanaged.transaction\n(\nDATA jsonb\n);\n"})}),"\n",(0,s.jsx)(e.p,{children:"The editor does not work with multiple lines of output. So, you won\u2019t see the pretty json format there. Once you export it into a csv file, you will see the pretty format. If you do it from a command line tool, you will see the results in the pretty format."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img",src:n(27168).A+"",width:"580",height:"166"})}),"\n",(0,s.jsx)(e.p,{children:"To export the data with pgAdmin4, you can highlight the query and press the export button highlighted in yellow."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img",src:n(21837).A+"",width:"697",height:"170"})}),"\n",(0,s.jsx)(e.p,{children:"Now, check out the pretty format!"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img",src:n(96898).A+"",width:"792",height:"522"})}),"\n",(0,s.jsx)(e.p,{children:"Normal Output"}),"\n",(0,s.jsx)(e.p,{children:"Let\u2019s compare it to the normal format."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT DATA\nFROM  mongodb.restaurants_json\nWHERE data->>'cuisine'='Japanese';\n"})}),"\n",(0,s.jsx)(e.p,{children:"When you export the data with a normal query, your data export looks like this."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img",src:n(92799).A+"",width:"848",height:"337"})}),"\n",(0,s.jsx)(e.p,{children:"Postgres is cool!"}),"\n",(0,s.jsx)(e.p,{children:"(2020-02-20)"})]})}function l(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(h,{...t})}):h(t)}},27168:(t,e,n)=>{n.d(e,{A:()=>s});const s="data:image/webp;base64,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"},21837:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/img-2-a6fd56a5665931bb66f38b2ae3dba113.webp"},96898:(t,e,n)=>{n.d(e,{A:()=>s});const s="data:image/webp;base64,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"},92799:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/img-4-9b25d45d2c7e18ba8bebbc40df883e3c.webp"},28453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>i});var s=n(96540);const o={},r=s.createContext(o);function a(t){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),s.createElement(r.Provider,{value:e},t.children)}}}]);
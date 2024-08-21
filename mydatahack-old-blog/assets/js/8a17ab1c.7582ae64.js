"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[8976],{59255:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(74848),s=t(28453);const o={sidebar_position:1},i="mysqldump Error: Unknown table \u2018COLUMN_STATISTICS\u2019 in information_schema (1109)",a={id:"Infrastructure/DBA/mysqldump-error",title:"mysqldump Error: Unknown table \u2018COLUMN_STATISTICS\u2019 in information_schema (1109)",description:"mysqldump 8 enabled a new flag called columm-statistics by default. When you have MySQL client above 8 and try to run mysqldump on older MySQL versions, you will get the error below.",source:"@site/docs/Infrastructure/DBA/1.mysqldump-error.md",sourceDirName:"Infrastructure/DBA",slug:"/Infrastructure/DBA/mysqldump-error",permalink:"/mydatahack-old-blog/docs/Infrastructure/DBA/mysqldump-error",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"DBA",permalink:"/mydatahack-old-blog/docs/category/dba"},next:{title:"Deleting Records in Nested BSON Array from MongoDB",permalink:"/mydatahack-old-blog/docs/Infrastructure/DBA/nested-bson-array"}},c={},l=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"mysqldump-error-unknown-table-column_statistics-in-information_schema-1109",children:"mysqldump Error: Unknown table \u2018COLUMN_STATISTICS\u2019 in information_schema (1109)"}),"\n",(0,r.jsx)(n.p,{children:"mysqldump 8 enabled a new flag called columm-statistics by default. When you have MySQL client above 8 and try to run mysqldump on older MySQL versions, you will get the error below."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mysqldump: Couldn't execute 'SELECT COLUMN_NAME, JSON_EXTRACT(HISTOGRAM '$\"number-of-buckets-specified\"')\nFROM information_schema.COLUMN_STATISTICS WHERE SCHEMA_NAME = 'myschema'\nAND TABLE_NAME = 'craue_config_setting';': Unknown table 'COLUMN_STATISTICS' in information_schema (1109)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The solution is simple. We can either run ",(0,r.jsx)(n.code,{children:"mysqldump"})," with ",(0,r.jsx)(n.code,{children:"\u2013column-statistics=0"})," as below."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"mysqldump --column-statistics=0 ..."})}),"\n",(0,r.jsx)(n.p,{children:"We can also disable this globally by adding mysqldump config in my.cnf file."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[mysqldump]\ncolumn-statistics=0\n"})}),"\n",(0,r.jsxs)(n.p,{children:["With Mac, my.cnf is in /usr/local/etc. You can check the version of your mysqldume with mysqldump ",(0,r.jsx)(n.code,{children:"\u2013version"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"(2021-06-09)"})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
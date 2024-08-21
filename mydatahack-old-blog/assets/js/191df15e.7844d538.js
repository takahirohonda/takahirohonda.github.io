"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[1267],{61056:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(74848),o=t(28453);const r={sidebar_position:9},s="User Management with MongoDB",i={id:"Infrastructure/DBA/user-mgmtpmongo",title:"User Management with MongoDB",description:"MongoDB does not have authentication out of box. When you install it, the first thing you have to do is to create an admin user in the admin database and enable authentication.",source:"@site/docs/Infrastructure/DBA/9.user-mgmtpmongo.md",sourceDirName:"Infrastructure/DBA",slug:"/Infrastructure/DBA/user-mgmtpmongo",permalink:"/docs/Infrastructure/DBA/user-mgmtpmongo",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"MongoDB Skills Essential Exercise",permalink:"/docs/Infrastructure/DBA/mongo-skills-exercise"},next:{title:"How to Prevent Blocked Host Connection from Many Connection Errors in MySQL",permalink:"/docs/Infrastructure/DBA/mysql-connection-error"}},d={},c=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"user-management-with-mongodb",children:"User Management with MongoDB"}),"\n",(0,a.jsx)(n.p,{children:"MongoDB does not have authentication out of box. When you install it, the first thing you have to do is to create an admin user in the admin database and enable authentication."}),"\n",(0,a.jsx)(n.p,{children:"After installation, you can get into MongoDB with the mongo command from the Mongo Shell."}),"\n",(0,a.jsx)(n.p,{children:"mongo\nLet\u2019s create an admin user in the admin database. In MongoDB, the database you create your user is used for authentication only. It can have access privileges to other databases. It really does not matter which database you create a user unless you want to create a user who has access to only a particular database."}),"\n",(0,a.jsx)(n.p,{children:"First of all, let\u2019s create a root user & admin user. We will use admin user to create other credentials."}),"\n",(0,a.jsx)(n.p,{children:"(1) Root and Admin User Creation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'use admin\n\ndb.createUser({\n  user: "root",\n  pwd: "your_password",\n  roles: ["root"]\n})\n\ndb.createUser({\n  user: "admin",\n  pwd: "your_password",\n  roles: ["readWriteAnyDatabase", "clusterAdmin",\n  "userAdminAnyDatabase", "dbAdminAnyDatabase"]\n})\n'})}),"\n",(0,a.jsx)(n.p,{children:"(2) Enable Authentication"}),"\n",(0,a.jsx)(n.p,{children:"Once the admin user is created, let\u2019s restart MongoDB with authentication enabled. After restarting the DB server, you cannot do any operations if you are not an authenticated user. The better way is change the config file in this post."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"mongod --auth --port 27017 --dbpath /data/db"})}),"\n",(0,a.jsx)(n.p,{children:"Once the authentication is enabled, connect to database as admin"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"mongo admin --host localhost --port 27017 -u admin -p your_password"})}),"\n",(0,a.jsx)(n.p,{children:"(3) User Creations"}),"\n",(0,a.jsx)(n.p,{children:"We will create 3 types of users below."}),"\n",(0,a.jsx)(n.p,{children:"Writer: access to read & write operations to all databases\nReadonly : access to read operations to all databases\nSpecial: Read access to all databases and write access to usermanaged"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'# (1) Create Writer Credential\nuse admin\ndb.createUser ({\n  user: "writer",\n  pwd: "your_password",\n  roles: ["readWriteAnyDatabase"]\n})\n\n\n# (2) Create Readonly Credential\nuse admin\ndb.createUser ({\n  user: "readonly",\n  pwd: "your_password",\n  roles: ["readAnyDatabase"]\n})\n\n# (3) Create a special Credential\nuse admin\ndb.createUser(\n   {\n     user: "special",\n     pwd: "your_password",\n     roles:\n       [\n         { role: "readWrite", db: "usermanaged" },\n         "readAnyDatabase"\n       ]\n   }\n)\n'})}),"\n",(0,a.jsx)(n.p,{children:"(4) Test Credentials"}),"\n",(0,a.jsx)(n.p,{children:"Let\u2019s test each users by logging into the database to see if you can do the desired operations. Make sure to specify the database (admin) where you created them as the first argument in the mongo command."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mongo admin --host localhost --port 27017 -u root -p your_password\nmongo admin --host localhost --port 27017 -u writer -p your_password\nmongo admin --host localhost --port 27017 -u readonly -p your_password\nmongo admin --host localhost --port 27017 -u special -p your_password\n"})}),"\n",(0,a.jsx)(n.p,{children:"That\u2019s it. Depending on your requirements, you need to set up a finer access control than these examples. For further details, you can check out the documentations below."}),"\n",(0,a.jsx)(n.p,{children:"Create Users with MongoDB\nMongoDB Built-In Roles"}),"\n",(0,a.jsx)(n.p,{children:"(2018-04-23)"})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var a=t(96540);const o={},r=a.createContext(o);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
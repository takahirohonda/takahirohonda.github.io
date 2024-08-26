"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[8302],{18110:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(74848),r=t(28453);const s={sidebar_position:7},i="How to Prevent Creating Duplicate Keys in MongoDB",c={id:"Infrastructure/DBA/mongo-no-dup-key",title:"How to Prevent Creating Duplicate Keys in MongoDB",description:"In MongoDB, the primary key is reserved for the _id field. This is a system field and gets created by default when inserting new records. When you want to enforce the uniqueness in other fields, you can use unique index.",source:"@site/docs/Infrastructure/DBA/7.mongo-no-dup-key.md",sourceDirName:"Infrastructure/DBA",slug:"/Infrastructure/DBA/mongo-no-dup-key",permalink:"/mydatahack-old-blog/docs/Infrastructure/DBA/mongo-no-dup-key",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"How to Enable User Login with SQL Server Express",permalink:"/mydatahack-old-blog/docs/Infrastructure/DBA/sql-server-user-login"},next:{title:"MongoDB Skills Essential Exercise",permalink:"/mydatahack-old-blog/docs/Infrastructure/DBA/mongo-skills-exercise"}},l={},d=[];function u(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"how-to-prevent-creating-duplicate-keys-in-mongodb",children:"How to Prevent Creating Duplicate Keys in MongoDB"}),"\n",(0,o.jsxs)(n.p,{children:["In MongoDB, the primary key is reserved for the ",(0,o.jsx)(n.code,{children:"_id"})," field. This is a system field and gets created by default when inserting new records. When you want to enforce the uniqueness in other fields, you can use unique index."]}),"\n",(0,o.jsx)(n.p,{children:"Here is how to create unique index with Mongo Shell. Unique key can be a compound key. You can use getIndexes() to get indexes on the collection."}),"\n",(0,o.jsx)(n.h1,{id:"1-single",children:"(1) Single"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'db.students.createIndex( { "studentId": 1 }, { unique: true } )\n'})}),"\n",(0,o.jsx)(n.h1,{id:"2-compound",children:"(2) Compound"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'db.students.createIndex(\n    { "studentId": 1, lastname: 1, firstname: 1  },\n     { unique: true } )\n'})}),"\n",(0,o.jsx)(n.h1,{id:"3-get-indexes",children:"(3) Get indexes"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"db.students.getIndexes()\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now, let\u2019s check out how it can be done with Node.js. In Node, you can use createIndex() as in the Mongo shell. As usual, it is asynchronous and you need a callback function with the usual error-first signature."}),"\n",(0,o.jsx)(n.p,{children:"When you first run the code, it inserts the records and create unique index on the studentId field. When you run it for the second time and try to insert the same records, you will get an error on insertion because it is violating the unique index rule."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'// Setting up\nconst MongoClient = require("mongodb").MongoClient;\nconst url = "mongodb://yourUsername:yourPassword@localhost:27017/admin";\n\n// Data\nconst initialData = [\n  {\n    studentId: 1,\n    firstName: "John",\n    lastName: "West",\n    Major: "Psychology",\n  },\n  {\n    studentId: 2,\n    firstName: "John",\n    lastName: "Doe",\n    Major: "Science",\n  },\n  {\n    studentId: 3,\n    firstName: "Shane",\n    lastName: "West",\n    Major: "IT",\n  },\n];\n\n// function to create uniqe index\nconst uniqueIndex = (collection, callback) => {\n  collection.createIndex({ studentId: 1 }, { unique: true }, (err, result) => {\n    if (err) {\n      console.error(`Failed to create index ${err}`);\n      process.exit(1);\n    }\n    console.log(`Unique Index created successfully: ${result}`);\n    callback(result);\n  });\n};\n\n// function to insert student records\nconst insertStudents = (collection, callback) => {\n  collection.insert(initialData, (err, result) => {\n    if (err) {\n      console.error(`Error in insertion: ${err}`);\n      process.exit(1);\n    }\n    console.log(`No of records (result.result.n): ${result.result.n}`);\n    console.log(`No of records (result.ops.length): ${result.ops.length}`);\n    callback(result);\n  });\n};\n\n// put them all together\nMongoClient.connect(url, (err, client) => {\n  if (err) return process.exit(1);\n  console.log("Connection successful.");\n  const db = client.db("usermanaged");\n  const collection = db.collection("students");\n  insertStudents(collection, () => {\n    uniqueIndex(collection, () => {\n      client.close();\n      console.log("Connection closed");\n    });\n  });\n});\n'})}),"\n",(0,o.jsx)(n.p,{children:"(2018-04-25)"})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(96540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
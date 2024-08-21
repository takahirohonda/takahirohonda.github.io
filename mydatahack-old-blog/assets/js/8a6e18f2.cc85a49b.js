"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[4366],{3670:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(74848),i=t(28453);const a={sidebar_position:2},o="Deleting Records in Nested BSON Array from MongoDB",s={id:"Infrastructure/DBA/nested-bson-array",title:"Deleting Records in Nested BSON Array from MongoDB",description:"When you are trying to manipulate data within nested BSON array in MongoDB, things get complex. Luckily, MongoDB has the ability to pass a JavaScript-like function to forEach to manipulate or query data. Let\u2019s take a look at the data below.",source:"@site/docs/Infrastructure/DBA/2.nested-bson-array.md",sourceDirName:"Infrastructure/DBA",slug:"/Infrastructure/DBA/nested-bson-array",permalink:"/docs/Infrastructure/DBA/nested-bson-array",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"mysqldump Error: Unknown table \u2018COLUMN_STATISTICS\u2019 in information_schema (1109)",permalink:"/docs/Infrastructure/DBA/mysqldump-error"},next:{title:"How to Manually Create Database Backup for SQL Server",permalink:"/docs/Infrastructure/DBA/create-db-backup"}},c={},d=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"deleting-records-in-nested-bson-array-from-mongodb",children:"Deleting Records in Nested BSON Array from MongoDB"}),"\n",(0,r.jsx)(n.p,{children:"When you are trying to manipulate data within nested BSON array in MongoDB, things get complex. Luckily, MongoDB has the ability to pass a JavaScript-like function to forEach to manipulate or query data. Let\u2019s take a look at the data below."}),"\n",(0,r.jsx)(n.p,{children:"Sample Data"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "_id": ObjectId("5a2f38458bcodgerce87vds"),\n    "customerId": "45632",\n    "cart": {\n        "cartId": "e235",\n        "items": [\n            {\n                "itemId": "\xc41234",\n                "count": 3,\n                "unitprice": 800\n            },\n            {\n                "itemId": null,\n                "count": 3,\n                "unitprice": 800\n            }\n        ]\n    }\n},\n{\n    "_id": ObjectId("5a2f384345psdflver87vds"),\n    "customerId": "584932",\n    "cart": {\n        "cartId": "e237",\n        "items": [\n            {\n            "itemId": "\xc4345",\n            "count": 8,\n            "unitprice": 457\n            },\n            {\n                "itemId": null,\n                "count": 3,\n                "unitprice": 789.6\n            }\n        ]\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"We would like to delete only the item with null itemId form the database. When you look at the data, it is pretty complex to write a query. This cannot be done with a regular MongoDb query. But, it is possible because we can pass a function while looping the documents with forEach."}),"\n",(0,r.jsx)(n.p,{children:"Queries"}),"\n",(0,r.jsx)(n.p,{children:"(1) Find customers with null itemId"}),"\n",(0,r.jsx)(n.p,{children:"This is a straight forward MongoDb query to find the record that matches with nested bson array value."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mongo",children:"db.getCollection('Transaction')\n  .find({'cart.items': {$elemMatch:{'itemId': null}}});\n"})}),"\n",(0,r.jsx)(n.p,{children:"(2) Get the null itemId list"}),"\n",(0,r.jsx)(n.p,{children:"This is how we can use forEach and pass function to print out the null itemId records."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"db.getCollection('Transaction')\n  .find({'cart.items': {$elemMatch:{'itemId': null}}})\n  .forEach(function (document) {\n    var items = cart.items;\n    var len = items.length;\n    for (var i = 0; i < len; i++) {\n      if (items[i].itemId == null) {\n        print(items[i])\n      }\n    }\n  });\n"})}),"\n",(0,r.jsx)(n.p,{children:"(3) Delete only null itemId items"}),"\n",(0,r.jsx)(n.p,{children:"This is the magic query to delete only null itemId items. The trick is to create an index array to store the index for null id items and then delete them from the actual array."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"db.getCollection('Transaction')\n  .find({'cart.items': {$elemMatch:{'itemId': null}}})\n  .forEach(function (document) {\n    var items = document.cart.items;\n    var len = items.length;\n    var indexArray = [];\n    for (var i = 0; i < len; i++) {\n      if (items[i].itemId == null) {\n        indexArray.push(i)\n        print('Deleted Records adding index to index array: ',document.customerId,',', i)\n      }\n    }\n    indexArray.forEach( function(index) {\n        print('Deleted Records according to index array: ',document.customerId,',', index)\n        items.pop(index);\n    })\n    db.Transaction.save(document);\n  });\n"})}),"\n",(0,r.jsx)(n.p,{children:"(2020-01-17)"})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(96540);const i={},a=r.createContext(i);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
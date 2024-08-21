"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[6449],{13432:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=t(74848),a=t(28453);const s={sidebar_position:5},r="How to Ingest Data From MongoDB with Node.js",i={id:"data-ingestion/mong-node-2",title:"How to Ingest Data From MongoDB with Node.js",description:"Data ingestion from a NoSQL database often involves the denormalisation of their schema-less data before loading into a relational database. In this post, we will try to grab the restaurant data from MongoDB, denormalise the collection into a parent and a child table, and load them into Postgres.",source:"@site/docs/data-ingestion/5.mong-node-2.md",sourceDirName:"data-ingestion",slug:"/data-ingestion/mong-node-2",permalink:"/docs/data-ingestion/mong-node-2",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to Ingest Data Into MongoDB with Node.js",permalink:"/docs/data-ingestion/mongo-node-1"},next:{title:"REST API Data Ingestion with Node.js",permalink:"/docs/data-ingestion/rest-api-node"}},c={},l=[];function d(e){const n={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"how-to-ingest-data-from-mongodb-with-nodejs",children:"How to Ingest Data From MongoDB with Node.js"}),"\n",(0,o.jsx)(n.p,{children:"Data ingestion from a NoSQL database often involves the denormalisation of their schema-less data before loading into a relational database. In this post, we will try to grab the restaurant data from MongoDB, denormalise the collection into a parent and a child table, and load them into Postgres."}),"\n",(0,o.jsx)(n.p,{children:"This exercise has been previously done with Python. The post includes how to get the restaurants dataset and load it to MongoDB. If you need a little bit of guidance on the preparation, you can refer to How to Get Data From MongoDB with Python."}),"\n",(0,o.jsx)(n.p,{children:"If you need a little bit of MongoDB refresher, check out the posts below:"}),"\n",(0,o.jsx)(n.p,{children:"MongoDB Skills Essential Exercise\nUser Management with MongoDB\nMongoDB CRUD Operation with Node.js\nDataset"}),"\n",(0,o.jsx)(n.p,{children:"We are using the restaurant dataset from here. Download it as a JSON file and upload it to MongoDB (see here for detailed instruction)."}),"\n",(0,o.jsx)(n.p,{children:"Data Model"}),"\n",(0,o.jsx)(n.p,{children:"We are going to denormalise the dataset into the main restaurants table as a parent and the grades table as a child. Data model is below. For further information including SQL create table statements, see the previous post here."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"img",src:t(79945).A+"",width:"967",height:"560"})}),"\n",(0,o.jsx)(n.p,{children:"Code"}),"\n",(0,o.jsx)(n.p,{children:"Our ingestion strategy is:"}),"\n",(0,o.jsx)(n.p,{children:"Get data from MongoDB.\nTransform the format of the timestamp field for the child table.\nConvert it into two csv files\nUse the Postgres copy function to bulk insert data from the csv files.\nFirst of all, we will create a module to perform truncate & load operations. The function is straight-forward. It takes csv file and upload it to a target table. Save it as copyPg.js. At the end of the file, we can export it with the module.export function."}),"\n",(0,o.jsx)(n.p,{children:"I have covered the topic of bulk-loading data into Postgres with Node.js previously. It discusses the modules used for bulk-loading as well as using the config.json file to define connection details. Check out this post if you need a refresher (Converting JSON to CSV and Loading it to Postgress with Node.js)."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const fs = require("fs");\nconst { Client } = require("pg");\nconst copyFrom = require("pg-copy-streams").from;\nconst config = require("./config/config.json");\n\nconst truncateLoad = (inputPath, targetTable, callback) => {\n  const client = new Client({\n    user: config.pgUser,\n    host: config.pgHost,\n    database: config.pgDbname,\n    password: config.pgPw,\n    port: config.pgPort,\n  });\n\n  client.connect();\n  console.log("Connected to database.");\n\n  const queryExecute = (inputPathF, targetTableF, callback) => {\n    console.log("Truncating Table...");\n    client.query(`Truncate ${targetTableF} cascade;`, (err, results) => {\n      if (err) {\n        console.error(err);\n        process.exit(1);\n      }\n      console.log(`Truncated ${targetTable}`);\n      callback(inputPathF, targetTableF);\n    });\n  };\n\n  queryExecute(inputPath, targetTable, () => {\n    var stream = client.query(\n      copyFrom(`COPY ${targetTable} FROM STDIN CSV HEADER`)\n    );\n    var fileStream = fs.createReadStream(inputPath);\n    fileStream.on("error", (err) => {\n      console.log(err);\n      process.exit(1);\n    });\n    fileStream\n      .pipe(stream)\n      .on("error", (err) => {\n        console.log(err);\n        process.exit(1);\n      })\n      .on("end", (data) => {\n        console.log(`Uploaded file to ${targetTable}`);\n        client.end();\n        console.log("PG connection closed.");\n        callback();\n      });\n  });\n};\n'})}),"\n",(0,o.jsx)(n.p,{children:"Once, we have the custom module to load data, let\u2019s write the main part. We first connect to MongoDB with the mongodb module. Then query the collection. The data from the query results is already a JSON object. Therefore, we can pass it to the json2csv converter without data type conversion."}),"\n",(0,o.jsxs)(n.p,{children:["Before passing it to the converter, we are going to reformat the date field from the ISODate format to the YYY-MM-DD HH:MM",":SS"," format. The code snippet below is looping every date field in every grades array to pass the format functions."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'records.forEach((record, index, list) => {\n  record.grades.forEach((grade, index, list) => {\n    record.grades[index].date = grade.date\n      .toISOString()\n      .replace("T", " ")\n      .substring(0, 19);\n  });\n});\n'})}),"\n",(0,o.jsx)(n.p,{children:"To convert JSON into csv, I am using the json2csv module. It makes JSON manipulation easier and covers most of the conversion scenarios."}),"\n",(0,o.jsx)(n.p,{children:"Finally, I am using the callback function to ensure the truncate & load event happens sequentially for two tables. The rest should be relatively simple."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const config = require("./config/config.json");\nconst fs = require("fs");\nconst { MongoClient } = require("mongodb");\nconst json2csv = require("json2csv").parse;\nconst mongoUrl = config.mongoConnection;\nconst pgLoad = require("./copyPg.js");\n\nconst createCsv = (data, callback) => {\n  const mainCsv = "./data/restaurants.csv";\n  const fields = [\n    { label: "id", value: "_id" },\n    { label: "address_building", value: "address.building" },\n    { label: "address_coord1", value: "address.coord[0]" },\n    { label: "address_coord2", value: "address.coord[1]" },\n    { label: "address_street", value: "address.street" },\n    { label: "address_zipcode", value: "address.zipcode" },\n    "borough",\n    "cuisine",\n    "name",\n    "restaurant_id",\n  ];\n  const csv = json2csv(data, { fields });\n  fs.writeFileSync(mainCsv, csv);\n  console.log(`File created as ${mainCsv}`);\n  callback();\n};\n\nconst createGradeCsv = (data, callback) => {\n  const gradesCsv = "./data/grades.csv";\n  const fields = [\n    { label: "id", value: "_id" },\n    { label: "date", value: "grades.date" },\n    { label: "grade", value: "grades.grade" },\n    { label: "score", value: "grades.score" },\n  ];\n  const csv = json2csv(data, { fields, unwind: "grades" });\n  fs.writeFileSync(gradesCsv, csv);\n  console.log(`File created as ${gradesCsv}`);\n  callback();\n};\n\nconst fetchData = (callback) => {\n  var buff = "";\n  MongoClient.connect(mongoUrl, (err, client) => {\n    if (err) {\n      console.error(err);\n      process.exit(1);\n    } else {\n      console.log("Connected to mongodb.");\n      var db = client.db("test");\n      var collection = db.collection("restaurants");\n      collection.find({}).toArray((err, records) => {\n        client.close();\n        records.forEach((record, index, list) => {\n          record.grades.forEach((grade, index, list) => {\n            record.grades[index].date = grade.date\n              .toISOString()\n              .replace("T", " ")\n              .substring(0, 19);\n          });\n        });\n        console.log(records[0].grades[0].date);\n        createCsv(records, () => {\n          createGradeCsv(records, () => {\n            callback();\n          });\n        });\n      });\n    }\n  });\n};\n\nfetchData(() => {\n  pgLoad("./data/restaurants.csv", "mongodb.restaurants", () => {\n    pgLoad("./data/grades.csv", "mongodb.grades", () => {\n      console.log("All operations finished.");\n    });\n  });\n});\n'})}),"\n",(0,o.jsx)(n.p,{children:"(2018-05-08)"})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},79945:(e,n,t)=>{t.d(n,{A:()=>o});const o="data:image/webp;base64,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"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var o=t(96540);const a={},s=o.createContext(a);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
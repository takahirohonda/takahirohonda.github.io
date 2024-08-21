"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[9916],{40482:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=t(74848),a=t(28453);const r={sidebar_position:7},s="Converting JSON to CSV and Loading it to Postgres with Node.js",i={id:"data-ingestion/json-to-csv-to-pg-node",title:"Converting JSON to CSV and Loading it to Postgres with Node.js",description:"To convert JSON to CSV, I love using json2csv. It really does all the hard work of working the JSON structure out and converting it to a flat file. For nested JSON elements, you can simply specify them by the dot notation (like transaction.itemId). When it contains an array element, it automatically expands it and creates a denormalised table for you. Well, let\u2019s see how it works.",source:"@site/docs/data-ingestion/7.json-to-csv-to-pg-node.md",sourceDirName:"data-ingestion",slug:"/data-ingestion/json-to-csv-to-pg-node",permalink:"/mydatahack-old-blog/docs/data-ingestion/json-to-csv-to-pg-node",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"REST API Data Ingestion with Node.js",permalink:"/mydatahack-old-blog/docs/data-ingestion/rest-api-node"},next:{title:"Converting CSV to JSON and Loading it to Postgres with Node.js",permalink:"/mydatahack-old-blog/docs/data-ingestion/csv-to-json-pg-node"}},c={},l=[];function d(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"converting-json-to-csv-and-loading-it-to-postgres-with-nodejs",children:"Converting JSON to CSV and Loading it to Postgres with Node.js"}),"\n",(0,o.jsx)(e.p,{children:"To convert JSON to CSV, I love using json2csv. It really does all the hard work of working the JSON structure out and converting it to a flat file. For nested JSON elements, you can simply specify them by the dot notation (like transaction.itemId). When it contains an array element, it automatically expands it and creates a denormalised table for you. Well, let\u2019s see how it works."}),"\n",(0,o.jsx)(e.p,{children:"Input Data"}),"\n",(0,o.jsx)(e.p,{children:"Here is the input data, transaction.json. I think it is a good representation of standard JSON file you are likely to ingest. It has nested elements in Payment and an array element in Transaction. It follows schemaless patterns with missing elements when they do not exist in the dataset."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:'[\n  {\n    "Id": 100,\n    "Name": "John",\n    "TransactionId": "tran1",\n    "Transaction": [\n      {\n        "ItemId": "a100",\n        "price": 200\n      },\n      {\n        "ItemId": "a110",\n        "price": 200\n      }\n    ],\n    "Subscriber": true,\n\n    "Payment": {\n      "Type": "Credit-Card",\n      "Total": 400,\n      "Success": true\n    },\n    "Note": "1st Complete Record"\n  },\n  {\n    "Id": 101,\n    "Name": "Tom",\n    "TransactionId": "tran2",\n    "Transaction": [\n      {\n        "ItemId": "a100",\n        "price": 200\n      },\n      {\n        "ItemId": "a110",\n        "price": 200\n      }\n    ],\n    "Subscriber": true,\n\n    "Payment": {\n      "Type": "Debit-Card",\n      "Total": 400,\n      "Success": true\n    },\n    "Note": null\n  },\n  {\n    "Id": 102,\n    "Name": "Margaret",\n    "TransactionId": "tran3",\n    "Transaction": [\n      {\n        "ItemId": "a100",\n        "price": 200\n      },\n      {\n        "ItemId": "a110",\n        "price": 200\n      }\n    ],\n    "Subscriber": true,\n\n    "Payment": {\n      "Type": "Credit-Card",\n      "Total": 400,\n      "Success": true\n    }\n  },\n  {\n    "Id": 103,\n    "Name": "Dylan",\n    "TransactionId": "tran4",\n    "Transaction": [\n      {\n        "ItemId": "a100",\n        "price": 200\n      },\n      {\n        "ItemId": "a110",\n        "price": 200\n      }\n    ],\n    "Subscriber": true,\n    "Payment": null,\n    "Note": "Payment is Null"\n  },\n  {\n    "Id": 104,\n    "Name": "Oliver",\n    "TransactionId": "tran5",\n    "Transaction": [\n      {\n        "ItemId": "a100",\n        "price": 200\n      },\n      {\n        "ItemId": "a110",\n        "price": 200\n      }\n    ],\n    "Subscriber": true,\n\n    "Payment": {\n      "Total": 400,\n      "Success": true\n    },\n    "Note": "Payment Type is missing"\n  },\n  {\n    "Id": 105,\n    "Name": "Sarah",\n    "TransactionId": "tran6",\n    "Transaction": [\n      {\n        "ItemId": "a100",\n        "price": 200\n      },\n      {\n        "ItemId": "a123",\n        "price": 1000\n      },\n      {\n        "ItemId": "a134",\n        "price": 400\n      }\n    ],\n    "Subscriber": true,\n    "Note": "Payment is missing"\n  }\n]\n'})}),"\n",(0,o.jsx)(e.p,{children:"Setup"}),"\n",(0,o.jsx)(e.p,{children:"As usual, let\u2019s create a project folder and install required modules."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"mkdir node-csv-load\ncd node-csv-load\nnpm init\nnpm i pg -ES\nnpm i pg-copy-streams -ES\nnpm i json2csv -ES\n"})}),"\n",(0,o.jsx)(e.p,{children:"We also need to create a table that contains all the elements in the source file."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE usermanaged.trans (\n    Id VARCHAR(20) PRIMARY KEY\n    ,Name VARCHAR(255)\n    ,TransactionId VARCHAR(20)\n    ,Transaction_ItemId VARCHAR(20)\n    ,Transaction_price INTEGER\n    ,Subscriber bool\n    ,Payment_Type VARCHAR(100)\n    ,Payment_Total INTEGER\n    ,Payment_Success bool\n    ,Note text\n);\n"})}),"\n",(0,o.jsx)(e.p,{children:"Code"}),"\n",(0,o.jsx)(e.p,{children:"For bulk loading data in to Postgres, see the post here. The key to convert JSON to CSV is to define the fields and which element to unwind. As Transaction has an array, we will unwind with it. This will automatically create a denormalised table."}),"\n",(0,o.jsx)(e.p,{children:"There are a few different ways to convert json to csv as in the documentation. In this example, we are going to use readable stream and pipe the conversion function. This method is memory efficient especially when you have a large JSON file."}),"\n",(0,o.jsx)(e.p,{children:"After json2csv emits the \u2018end\u2019 event, we will call the query execution function. This will ensure that the queries get executed after the csv file creation."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'// Loading required modules\nconst fs = require("fs");\nconst path = require("path");\nconst Json2csvTransform = require("json2csv").Transform;\nconst { Client } = require("pg");\nconst copyFrom = require("pg-copy-streams").from;\nconst config = require("./config.json");\n\n// Defining file path\nconst inputFile = path.join(__dirname, "/data/transaction.json");\nconst outputFile = path.join(__dirname, "/data/transaction.csv");\n\n// Defining fields\nconst fields = [\n  "Id",\n  "Name",\n  "TransactionId",\n  "Transaction.ItemId",\n  "Transaction.price",\n  "Subscriber",\n  "Payment.Type",\n  "Payment.Total",\n  "Payment.Success",\n  "Note",\n];\n\n// target table\nvar table = "usermanaged.trans";\n\n// Getting connectin parameters from config.json\nconst host = config.host;\nconst user = config.user;\nconst pw = config.pw;\nconst db = config.db;\nconst port = config.port;\nconst conString = `postgres://${user}:${pw}@${host}:${port}/${db}`;\n\nconst executeQuery = (targetTable) => {\n  console.log("Starting executeQuery function");\n  // Connecting to Database\n  const client = new Client({\n    connectionString: conString,\n  });\n  client.connect();\n\n  const execute = (target, callback) => {\n    client.query(`Truncate ${target}`, (err) => {\n      if (err) {\n        client.end();\n        callback(err);\n        // return console.log(err.stack)\n      } else {\n        console.log(`Truncated ${target}`);\n        callback(null, target);\n      }\n    });\n  };\n  execute(targetTable, (err) => {\n    if (err) return console.log(`Error in Truncate Table: ${err}`);\n    var stream = client.query(\n      copyFrom(`COPY ${targetTable} FROM STDIN CSV HEADER`)\n    );\n    var fileStream = fs.createReadStream(outputFile);\n\n    fileStream.on("error", (error) => {\n      console.log(`Error in creating read stream ${error}`);\n    });\n    stream.on("error", (error) => {\n      console.log(`Error in creating stream ${error}`);\n    });\n    stream.on("end", () => {\n      console.log(`Completed loading data into ${targetTable}`);\n      client.end();\n    });\n    fileStream.pipe(stream);\n  });\n};\n\n// Create a readable stream\nconst input = fs.createReadStream(inputFile, { encoding: "utf8" });\nconst output = fs.createWriteStream(outputFile, { encoding: "utf8" });\nconst json2csv = new Json2csvTransform({ fields, unwind: "Transaction" });\n\nconst processor = input.pipe(json2csv).pipe(output);\n\n// You can also listen for events on the conversion and see how the header or the lines are coming out.\njson2csv\n  .on("header", (header) => console.log(header))\n  .on("line", (line) => console.log(line))\n  .on("error", (err) => console.log(err))\n  .on("end", () => {\n    console.log(`Writing csv file, ${outputFile}, has been completed`);\n    // After csv file is created, execute the query to load the data\n    executeQuery(table);\n  });\n'})}),"\n",(0,o.jsx)(e.p,{children:"(2018-04-17)"})]})}function u(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>i});var o=t(96540);const a={},r=o.createContext(a);function s(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);
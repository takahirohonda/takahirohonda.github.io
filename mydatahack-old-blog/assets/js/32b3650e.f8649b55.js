"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[4371],{4452:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=t(74848),r=t(28453);const s={sidebar_position:8},a="Converting CSV to JSON and Loading it to Postgres with Node.js",i={id:"data-ingestion/csv-to-json-pg-node",title:"Converting CSV to JSON and Loading it to Postgres with Node.js",description:"To convert csv to json, Node has an awesome module, csvtojson. It takes a json file and convert it to csv asynchronously. Once we convert csv to json, let\u2019s load it to a Postgres table with jsonb data type. Postgres supports JSON data and you can query it (see the previous blog about ingesting json into Postgres here). We are going to use pg-copy-streams to bulk load the json file into Postgres (see Bulk Loading Postgres with Node.js).",source:"@site/docs/data-ingestion/8.csv-to-json-pg-node.md",sourceDirName:"data-ingestion",slug:"/data-ingestion/csv-to-json-pg-node",permalink:"/docs/data-ingestion/csv-to-json-pg-node",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Converting JSON to CSV and Loading it to Postgres with Node.js",permalink:"/docs/data-ingestion/json-to-csv-to-pg-node"},next:{title:"Bulk Loading Postgres with Node.js",permalink:"/docs/data-ingestion/bulk-load-pg-node"}},c={},l=[];function d(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"converting-csv-to-json-and-loading-it-to-postgres-with-nodejs",children:"Converting CSV to JSON and Loading it to Postgres with Node.js"}),"\n",(0,o.jsx)(e.p,{children:"To convert csv to json, Node has an awesome module, csvtojson. It takes a json file and convert it to csv asynchronously. Once we convert csv to json, let\u2019s load it to a Postgres table with jsonb data type. Postgres supports JSON data and you can query it (see the previous blog about ingesting json into Postgres here). We are going to use pg-copy-streams to bulk load the json file into Postgres (see Bulk Loading Postgres with Node.js)."}),"\n",(0,o.jsx)(e.p,{children:"Setup"}),"\n",(0,o.jsx)(e.p,{children:"Let\u2019s create a project folder and install all the required module."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"mkdir node-json-load\ncd node-json-load\nnpm init\nnpm i pg -ES\nnpm i pg-copy-streams -ES\nnpm i csvtojson -ES\n"})}),"\n",(0,o.jsx)(e.p,{children:"We also need to create a table in Postgres with the jsonb data type."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE usermanaged.customer (\n     DATA jsonb\n);\n"})}),"\n",(0,o.jsx)(e.p,{children:"Code"}),"\n",(0,o.jsx)(e.p,{children:"We are getting the connection details from config.json. See Bulk Loading Postgres with Node.js for further information on how to load data into Postgres."}),"\n",(0,o.jsx)(e.p,{children:"The key is to call executeQuery() after calling writeFileSync(). This is because writeFileSync() is a synchronous function and the query gets executed only after completing the json file creation. The json file creating happens as a callback function. JSON conversion happens asynchronously. After it is completed with the \u2018done\u2019 event, we can start writing the converted results into a file."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'// Import required modules\nconst csv = require("csvtojson");\nconst path = require("path");\nconst fs = require("fs");\nconst { Client } = require("pg");\nconst copyFrom = require("pg-copy-streams").from;\nconst config = require("./config.json");\n\n// Setting file path\nconst inputFile = path.join(__dirname, "/data/customer.csv");\nconst outputFile = path.join(__dirname, "/data/customer.json");\n\n// target table\nvar table = "usermanaged.customer";\n\n// Getting connectin parameters from config.json\nconst host = config.host;\nconst user = config.user;\nconst pw = config.pw;\nconst db = config.db;\nconst port = config.port;\n\nconst conString = `postgres://${user}:${pw}@${host}:${port}/${db}`;\n\nconst executeQuery = (targetTable) => {\n  console.log("Starting executeQuery function");\n  // Connecting to Database\n  const client = new Client({\n    connectionString: conString,\n  });\n  client.connect();\n\n  const execute = (target, callback) => {\n    client.query(`Truncate ${target}`, (err) => {\n      if (err) {\n        client.end();\n        callback(err);\n        // return console.log(err.stack)\n      } else {\n        console.log(`Truncated ${target}`);\n        callback(null, target);\n      }\n    });\n  };\n  execute(targetTable, (err) => {\n    if (err) return console.log(`Error in Truncate Table: ${err}`);\n    var stream = client.query(copyFrom(`COPY ${targetTable} FROM STDIN`));\n    var fileStream = fs.createReadStream(outputFile);\n\n    fileStream.on("error", (error) => {\n      console.log(`Error in creating read stream ${error}`);\n    });\n    stream.on("error", (error) => {\n      console.log(`Error in creating stream ${error}`);\n    });\n    stream.on("end", () => {\n      console.log(`Completed loading data into ${targetTable}`);\n      client.end();\n    });\n    fileStream.pipe(stream);\n  });\n};\n\nconst main = (inputPath, outputPath) => {\n  console.log(`Converting ${inputPath} to JSON.`);\n  const convCsv = (inputP, outputP, callback) => {\n    buff = "";\n    csv()\n      .fromFile(inputP)\n      .on("data", (data) => {\n        buff += data.toString("utf8");\n      })\n      .on("done", (error) => {\n        // if error happens, callback with error\n        if (error) return callback(error);\n        // if no error, callback with the converted data\n        console.log("Finished conversion.");\n        callback(null, buff);\n      });\n  };\n  convCsv(inputPath, outputPath, (error, data) => {\n    // if error happens, gives error message and code stops here.\n    if (error) return console.error(`Error in csv conversion: ${error}`);\n    // if no error, write file\n    fs.writeFileSync(outputPath, data);\n    console.log(`File created as ${outputPath}`);\n    executeQuery(table);\n  });\n};\n\nmain(inputFile, outputFile);\n'})}),"\n",(0,o.jsx)(e.p,{children:"(2018-04-17)"})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>i});var o=t(96540);const r={},s=o.createContext(r);function a(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);
"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[3733],{16302:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=t(74848),s=t(28453);const r={sidebar_position:14},o="How Postgres JSON Query Handles Missing Key",i={id:"Infrastructure/DBA/pg-json-query-missing-key",title:"How Postgres JSON Query Handles Missing Key",description:"When we transform JSON to a structured format with a programming language in JSON data ingestion, we have to handle missing key. This is because JSON is schema-less and it doesn\u2019t always have the same keys in all records as opposed to relational database tables.",source:"@site/docs/Infrastructure/DBA/14.pg-json-query-missing-key.md",sourceDirName:"Infrastructure/DBA",slug:"/Infrastructure/DBA/pg-json-query-missing-key",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Infrastructure/DBA/pg-json-query-missing-key",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Index JSON In Postgres",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Infrastructure/DBA/index-json-pgres"},next:{title:"How To Create User Credentials And Grant Privileges In Postgres",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Infrastructure/DBA/pg-user-credentials"}},c={},d=[];function l(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"how-postgres-json-query-handles-missing-key",children:"How Postgres JSON Query Handles Missing Key"}),"\n",(0,a.jsx)(e.p,{children:"When we transform JSON to a structured format with a programming language in JSON data ingestion, we have to handle missing key. This is because JSON is schema-less and it doesn\u2019t always have the same keys in all records as opposed to relational database tables."}),"\n",(0,a.jsx)(e.p,{children:"In Python, the missing key handling looks like this."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"try:\n    tmp.append(record['info']['postcode'])\nexcept KeyError:\n    tmp.append('NA')\n"})}),"\n",(0,a.jsx)(e.p,{children:"In the previous post, we examined Postgres JSON support and discussed how we could use it as a new JSON ingestion strategy (New JSON Data Ingestion Strategy By Using the Power of Postgres)."}),"\n",(0,a.jsx)(e.p,{children:"The first question comes to mind is how Postgres handles missing key when you are used to transforming JSON in a programming language."}),"\n",(0,a.jsx)(e.p,{children:"I start with the conclusion. Postgres puts null value when the key is missing. It also puts null value when the key value is null. This is awesome because the database can handle the missing key without being specific about key error handling."}),"\n",(0,a.jsx)(e.p,{children:"Let\u2019s have take a look."}),"\n",(0,a.jsx)(e.p,{children:"Record Example"}),"\n",(0,a.jsx)(e.p,{children:"We have 6 JSON records."}),"\n",(0,a.jsx)(e.p,{children:"Complete record\nNote is null\nNote key is missing\nPayment is null\nPayment Type key is missing\nPayment is missing\nJSON File"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'[\n  {\n    "Id": 100,\n    "Name": "John",\n    "TransactionId": "tran1",\n    "Transaction": [\n      {\n        "ItemId": "a100",\n        "price": 200\n      },\n      {\n        "ItemId": "a110",\n        "price": 200\n      }\n    ],\n    "Subscriber": true,\n\n    "Payment": {\n      "Type": "Credit-Card",\n      "Total": 400,\n      "Success": true\n    },\n    "Note": "1st Complete Record"\n  },\n  {\n    "Id": 101,\n    "Name": "Tom",\n    "TransactionId": "tran2",\n    "Transaction": [\n      {\n        "ItemId": "a100",\n        "price": 200\n      },\n      {\n        "ItemId": "a110",\n        "price": 200\n      }\n    ],\n    "Subscriber": true,\n\n    "Payment": {\n      "Type": "Debit-Card",\n      "Total": 400,\n      "Success": true\n    },\n    "Note": null\n  },\n  {\n    "Id": 102,\n    "Name": "Margaret",\n    "TransactionId": "tran3",\n    "Transaction": [\n      {\n        "ItemId": "a100",\n        "price": 200\n      },\n      {\n        "ItemId": "a110",\n        "price": 200\n      }\n    ],\n    "Subscriber": true,\n\n    "Payment": {\n      "Type": "Credit-Card",\n      "Total": 400,\n      "Success": true\n    }\n  },\n  {\n    "Id": 103,\n    "Name": "Dylan",\n    "TransactionId": "tran4",\n    "Transaction": [\n      {\n        "ItemId": "a100",\n        "price": 200\n      },\n      {\n        "ItemId": "a110",\n        "price": 200\n      }\n    ],\n    "Subscriber": true,\n    "Payment": null,\n    "Note": "Payment is Null"\n  },\n  {\n    "Id": 104,\n    "Name": "Oliver",\n    "TransactionId": "tran5",\n    "Transaction": [\n      {\n        "ItemId": "a100",\n        "price": 200\n      },\n      {\n        "ItemId": "a110",\n        "price": 200\n      }\n    ],\n    "Subscriber": true,\n\n    "Payment": {\n      "Total": 400,\n      "Success": true\n    },\n    "Note": "Payment Type is missing"\n  },\n  {\n    "Id": 105,\n    "Name": "Sarah",\n    "TransactionId": "tran6",\n    "Transaction": [\n      {\n        "ItemId": "a100",\n        "price": 200\n      },\n      {\n        "ItemId": "a110",\n        "price": 200\n      }\n    ],\n    "Subscriber": true,\n    "Note": "Payment is missing"\n  }\n]\n'})}),"\n",(0,a.jsx)(e.p,{children:"Loading to Postgres with Python"}),"\n",(0,a.jsx)(e.p,{children:"Let\u2019s load this to Postgres with a target table as usermanaged.transaction."}),"\n",(0,a.jsx)(e.p,{children:"Make sure to create the table with data type jsonb. It is more optimised for queries."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE usermanaged.transaction\n(\nDATA jsonb\n);\n"})}),"\n",(0,a.jsx)(e.p,{children:"You can use the Python code below to load the data into the table."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'import json\nimport psycopg2\n\nconnection_string = "dbname=\'<dbname>\' user=\'<user>\' host=\'<uri>\' password=\'<pw>\'"\ntable_name = "usermanaged.transaction"\n\ndef pg_insert(connection_string, table_name, json_obj):\n    try:\n        conn = psycopg2.connect(connection_string)\n        print("Connecting to Database")\n        cur = conn.cursor()\n\n        cur.execute("Truncate {} Cascade;".format(table_name))\n        print("Truncated {}".format(table_name))\n\n        for record in json_obj:\n            cur.execute("INSERT INTO {} VALUES (\'{}\')".format(table_name, json.dumps(record)))\n            cur.execute("commit;")\n\n        print("Inserted data into {}".format(table_name))\n        conn.close()\n        print("DB connection closed.")\n    except Exception as e:\n        print(\'Error {}\'.format(str(e)))\n\nf = open(\'./transaction_example.json\')\nf_json = json.load(f)\n\npg_insert(connection_string, table_name, f_json)\n'})}),"\n",(0,a.jsx)(e.p,{children:"Postgres Query"}),"\n",(0,a.jsx)(e.p,{children:"Let\u2019s query the table to see how Postgres handles missing keys."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"SELECT\ndata->>'Id' AS id\n,data->>'Name' AS name\n,data->>'TransactionId' AS transactionid\n,jsonb_array_elements(data->'Transaction')->>'ItemId' AS itemid\n,jsonb_array_elements(data->'Transaction')->>'price' AS price\n,data->>'Subscriber' AS subscriber\n,data->'Payment'->>'Type' AS payment_type\n,data->'Payment'->>'Total' AS payment_total\n,data->'Payment'->>'Success' AS payment_success\n,data->>'Note' AS note\n,data->>'Whatever' AS non_existing\nFROM usermanaged.transaction;\n"})}),"\n",(0,a.jsx)(e.p,{children:"Results"}),"\n",(0,a.jsx)(e.p,{children:"As you can see, the missing key is set to null. If you have a key that does not exist in any record, it creates a column with null values. When the key value is null, it also sets the value to null."}),"\n",(0,a.jsx)(e.p,{children:"(2018-02-20)"})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>i});var a=t(96540);const s={},r=a.createContext(s);function o(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);
"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[67],{1249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(74848),a=n(28453);const r={sidebar_position:19},s="New JSON Data Ingestion Strategy by Using the Power of Postgres",i={id:"data-ingestion/pg-json",title:"New JSON Data Ingestion Strategy by Using the Power of Postgres",description:"Postgres always had a JSON support with somehow limited capability before the 9.2 version added the native JSON support. The release of version 9.3 has really taken the JSON feature to the next level with additional constructor and extractor methods. The capability of querying and transforming the JSON data type with Postgres gives you the new strategy to ingest JSON data from APIs or NoSQL databases.",source:"@site/docs/data-ingestion/19.pg-json.md",sourceDirName:"data-ingestion",slug:"/data-ingestion/pg-json",permalink:"/mydatahack-old-blog/mydatahack-old-blog/data-ingestion/pg-json",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"Comprehensive Guide to Download Files From S3 with Python",permalink:"/mydatahack-old-blog/mydatahack-old-blog/data-ingestion/s3-python"},next:{title:"How To Ingest AES Encrypted Data With Python",permalink:"/mydatahack-old-blog/mydatahack-old-blog/data-ingestion/aes-encrypted-data-python"}},d={},c=[];function h(e){const t={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"new-json-data-ingestion-strategy-by-using-the-power-of-postgres",children:"New JSON Data Ingestion Strategy by Using the Power of Postgres"}),"\n",(0,o.jsx)(t.p,{children:"Postgres always had a JSON support with somehow limited capability before the 9.2 version added the native JSON support. The release of version 9.3 has really taken the JSON feature to the next level with additional constructor and extractor methods. The capability of querying and transforming the JSON data type with Postgres gives you the new strategy to ingest JSON data from APIs or NoSQL databases."}),"\n",(0,o.jsx)(t.p,{children:"To ingest JSON into a data warehouse, we traditionally use a programming language or ETL tool to transform JSON into a structured table format and upload it into a database table. When you think about it, this is not efficient. JSON is schema-less while the database table requires strictly defined schema. This makes transformation cumbersome especially when the schema often changes per record. Any change in the source JSON structure also requires additional development effort."}),"\n",(0,o.jsx)(t.p,{children:"The ability to query and transform native JSON data type with Postgres enables us to load the JSON file as it is and use SQL to query or transform later. In this way, you can just adjust the query as new business requirement comes without further development effort."}),"\n",(0,o.jsx)(t.p,{children:"Postgres has two data types for JSON, json and jsonb. For query, I recommend to use jsonb because it is simply faster and can be indexed for complex queries (see indexing in postgres here). The json data type stores data in a row format while jsonb stores data in a custom binary format. But, what does it mean? The json data type needs to load and parse the entire JSON blob each time while jsonb does not need to parse the entire JSON blob every time you query it. In a nutshell, jsonb is optimised for queries. For further detail, there is a good blog post here."}),"\n",(0,o.jsx)(t.p,{children:"Well, let\u2019s check out how it works!"}),"\n",(0,o.jsx)(t.p,{children:"Example"}),"\n",(0,o.jsx)(t.p,{children:"Let\u2019s use the same dataset from the previous example where we ingested JSON data from MongoDB How to get data from MongoDB with Python."}),"\n",(0,o.jsx)(t.p,{children:"In that example, we first pulled the data and transformed into a structured format with Python. Instead of transforming it, we can load each record directly into Postgres as it is. Then, we can use SQL to create the structured data."}),"\n",(0,o.jsx)(t.p,{children:"In some sense, the way we ingested data in How to get data from MongoDB with Python is a traditional way of creating structured tables from Json. Using the same will make it a good comparison between two methods."}),"\n",(0,o.jsx)(t.p,{children:"In the previous post, we ingested the restaurant collection like below to create structured tables. Here, we will basically replicate it except that the final output is views of those two tables."}),"\n",(0,o.jsx)(t.p,{children:"Record Example"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img",src:n(19291).A+"",width:"650",height:"612"})}),"\n",(0,o.jsx)(t.p,{children:"Data Model"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img",src:n(96922).A+"",width:"967",height:"560"})}),"\n",(0,o.jsx)(t.p,{children:"Table Creation"}),"\n",(0,o.jsx)(t.p,{children:"Each row corresponds to a JSON record. We only need one column with the data type of jsonb."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE mongodb.restaurants_json (\n\nDATA jsonb\n\n);\n"})}),"\n",(0,o.jsx)(t.p,{children:"Data Load"}),"\n",(0,o.jsx)(t.p,{children:"We will use Python to insert JSON record into the table. I can present two different approaches. The first approach is to query the data from MongoDB and insert the record one by one. The second approach is to write the ingested data into a flat file and call copy command. When you do a bulk upload, this approach is faster."}),"\n",(0,o.jsx)(t.p,{children:"If you need to have a recap on how to ingest MongoDB data, you can refer to How to get data from MongoDB with Python."}),"\n",(0,o.jsx)(t.p,{children:"Whatever approach you take, you need to have a table with all the JSON records loaded in one column as below."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img",src:n(61093).A+"",width:"1042",height:"555"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Approach 1: Insert"})}),"\n",(0,o.jsxs)(t.p,{children:["This is pretty straight forward. Note that if you have \u2018 in the dataset, you will get an error. I replaced it with ",(0,o.jsx)(t.code,{children:"<>"}),". As the record is inserted one by one, this takes longer than the bulk upload from a flat file."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'mongo_uri = \'mongodb://<user>:<pw>@<uri>:27017/test\'\nconnection_string = "dbname=\'<dbname>\' user=\'<user>\' host=\'<uri>\' password=\'<pw>\'"\ntable_name = \'mongodb.restaurants_json\'\nimport pymongo\nfrom pymongo import MongoClient\nimport psycopg2\nfrom bson.json_util import dumps\n\ndef get_data(uri):\n    mongo_uri = uri\n    client = MongoClient(mongo_uri)\n    db = client.test\n    restaurants = db.restaurants\n    print(\'Total Record for the collection: \' + str(restaurants.count()))\n    return restaurants\n\ndef pg_insert(connection_string, table_name, collection):\n    try:\n        conn = psycopg2.connect(connection_string)\n        print("Connecting to Database")\n        cur = conn.cursor()\n\n        cur.execute("Truncate {} Cascade;".format(table_name))\n        print("Truncated {}".format(table_name))\n\n        for record in collection.find():\n            record = dumps(record)\n            cur.execute(("INSERT INTO {} VALUES (\'{}\')".format(table_name, str(record).replace("\'", "<>"))))\n            cur.execute("commit;")\n\n        print("Inserted data into {}".format(table_name))\n        conn.close()\n        print("DB connection closed.")\n    except Exception as e:\n        print(\'Error {}\'.format(str(e)))\n\npg_insert(connection_string, table_name, get_data(mongo_uri))\n'})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Approach 2: Bulk Upload"})}),"\n",(0,o.jsxs)(t.p,{children:["Each record is a row written as a long string. Once the file is generated, use copy_expert() to upload the file. It seems ",(0,o.jsx)(t.code,{children:"WITH CSV Quote e\u2019\\x01\u2019 Delimiter e\u2019\\02\u2019"})," works the best for the copy command. I was getting a lot of errors without these conditions."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"mongo_uri = 'mongodb://<user>:<pw>@<uri>:27017/test'\nconnection_string = \"dbname='<dbname>' user='<user>' host='<uri>' password='<pw>'\"\ntable_name = 'mongodb.restaurants_json'\nfile_path = '/tmp/restaurants_json.csv'\nimport pymongo\nfrom pymongo import MongoClient\nimport psycopg2\nfrom bson.json_util import dumps\n\ndef write_json(uri, file_path):\n    mongo_uri = uri\n    client = MongoClient(mongo_uri)\n    db = client.test\n    restaurants = db.restaurants\n    print('Total Record for the collection: ' + str(restaurants.count()))\n\n    f = open(file_path, 'w')\n\n    for record in restaurants.find():\n        record = dumps(record)\n        f.write(record + '\\n')\n    f.close()\n\ndef pg_load(connection_string, table_name, file_path):\n    try:\n        conn = psycopg2.connect(connection_string)\n        print(\"Connecting to Database\")\n        cur = conn.cursor()\n\n        f = open(file_path, \"r\")\n\n        cur.execute(\"Truncate {} Cascade;\".format(table_name))\n        print(\"Truncated {}\".format(table_name))\n        cur.copy_expert(\"copy {} FROM STDIN WITH CSV quote e'\\x01' delimiter e'\\x02'\".format(table_name), f)\n        cur.execute(\"commit;\")\n        print(\"Loaded data into {}\".format(table_name))\n\n        conn.close()\n        print(\"DB connection closed.\")\n    except Exception as e:\n        print('Error {}'.format(str(e)))\n\nwrite_json(mongo_uri, file_path)\npg_load(connection_string, table_name, file_path)\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Create Views With Postgres JSON Functions"})}),"\n",(0,o.jsxs)(t.p,{children:["Once the table is loaded, real fun begins! We can simply write SQL to query and transform the JSON records. The way we query JSON with Postgres is to map the key to the value with ",(0,o.jsx)(t.code,{children:"->"})," or ",(0,o.jsx)(t.code,{children:"->>"})," operators."]}),"\n",(0,o.jsxs)(t.p,{children:["There are only a few things you need to know to get it started. Make sure that you understand how to map key to the value and the difference between ",(0,o.jsx)(t.code,{children:"->"})," and ",(0,o.jsx)(t.code,{children:"->>"})," (",(0,o.jsx)(t.code,{children:"->"})," returns JSON object and ",(0,o.jsx)(t.code,{children:"->>"})," returns text) because the data type is important to use other JSON functions."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"jsonb_array_elements()"})," is the God-sent function which expands array into multiple rows. If we are to do this transformation in a programming language, we have to use loop. This function makes querying nested JSON so much easier. Note that the function takes only jsonb data type, not string. Therefore, use ",(0,o.jsx)(t.code,{children:"->"})," to get the array from the key."]}),"\n",(0,o.jsx)(t.p,{children:"It is probably a good idea to read this tutorial first to get the idea. For further reference, I always use Postgres documentation here. I am using a few string functions. Here is the reference."}),"\n",(0,o.jsx)(t.p,{children:"Main Table (Restaurant_VW)"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"CREATE VIEW mongodb.restaurants_vw AS\nSELECT\n    SUBSTRING(DATA ->> '_id', 11, 24) AS id,\n    DATA -> 'address' ->> 'building' AS address_building,\n    REPLACE(split_part(DATA -> 'address' ->> 'coord', ',', 1), '[', '') AS address_coord1,\n    REPLACE(split_part(DATA -> 'address' ->> 'coord', ',', 2), ']', '') AS address_coord2,\n    DATA -> 'address' ->> 'street' AS address_street,\n    DATA -> 'address' ->> 'zipcode' AS address_zipcode,\n    DATA ->> 'borough' AS borough,\n    DATA ->> 'cuisine' AS cuisine ,\n    DATA ->> 'name' AS name,\n    DATA ->> 'restaurant_id' AS restaurant_id\nFROM mongodb.restaurants_json;\n"})}),"\n",(0,o.jsx)(t.p,{children:"Child Table (Grades_VW)"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"CREATE VIEW mongodb.grades_vw AS\nSELECT\n    SUBSTRING(DATA ->> '_id', 11, 24) AS id,\n    to_timestamp(\n    split_part(\n        translate(jsonb_array_elements(DATA -> 'grades') ->> 'date', '{}', '')\n        , ': ', 2)::BIGINT / 1000\n    ) at TIME zone 'UTC'\n    AS DATE,\n    jsonb_array_elements(DATA -> 'grades') ->> 'grade' AS grade,\n    jsonb_array_elements(DATA -> 'grades') ->> 'score' AS score\nFROM mongodb.restaurants_json;\nNow check out the view! We have the same output with the traditional method described here. I think this is more flexible and easier when you have JSON file changing dynamically and business requirements are changing fast. If you are using Postgres, I would definitely recommend you to try it.\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"Select * From mongodb.restaurants_vw;"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img",src:n(17108).A+"",width:"1176",height:"414"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"Select * From mongodb.grades_vw;"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img",src:n(11767).A+"",width:"598",height:"316"})}),"\n",(0,o.jsx)(t.p,{children:"(2018-02-16)"})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},19291:(e,t,n)=>{n.d(t,{A:()=>o});const o="data:image/webp;base64,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"},96922:(e,t,n)=>{n.d(t,{A:()=>o});const o="data:image/webp;base64,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"},61093:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/img-3-79bc8cd601176c0c1b568d01c8b3c6bc.webp"},17108:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/img-4-7d4eda89c97be88128b9f7ec69d23e93.webp"},11767:(e,t,n)=>{n.d(t,{A:()=>o});const o="data:image/webp;base64,UklGRrYTAABXRUJQVlA4TKoTAAAvVcJOAD8FOZIkRVJULzP+8Ln6a7EqMDPT3UD3VKvhuLbtVDkR3JnqkBKY0SZ9UAVNuPt3gYR8t7W1N82TkASHyvTOHsKDeF1X3iLnVOFMUmD+wxdtayx2yGiNLay14CCjlXOcwoAxkIALuOIMZgAL+kCCrv+04KzzCT/UBf9p4ek99c4STOkX7VYBRtzf2m4056xQ5myGR62QOOf/+5J7SFEUFHVHSiiwlxROUqusgWYJI5TAPBUemnoJgxLwVCCneKbnrUHgRYSI5SuD5fHcNJHWKRGRfLXBBCGGd577FtKVG5HSHjwBLuBbgy0qClJokGAPGHjmoAiwNfQRQsBYQ5DWigghX00wR6BKogQbWTCRrsdESfkfBiPAkVZLRguBZ7FHrq4YJfC7UvVkFII+ci0YDeLM+ohAPYmCjZAx8A6ygi/gLMYADQQYgwqQaJBhD9aACRh4eoAAanACLXBgab6es8aBvUxJWbLljPf5eErtmz44G4RtyVKq9GPpkvRbosPAiAUGiNxXsauktDBdXMGTOhg5YxwDadu0/m1v+yVExATgHRgAla+sxMGiH2ihzBbxxsImd9o+tXF8pVTJYThWQG3A3UGXijnpqLpUzORJxaoyB0qlyV/qaOXJ/n6//X07Bmkd0X9IjCQ5kRI1J1jvDTeb9DQvD8+2LW+jbZtdllDK8ERXAxdYLtMFw8zMzMxj52Iutxe4Qc1ELkQp/c9j37ZtP47zTM4zw4cj+i+JkSSxbUYQHQo03Tt7PB6lCxa0f/t5h2tzxT8Guc4eg+VLPeuEEBrR2PrQhsqV41kdyrG5ArX1yeFvYlpxL94brPwXypv5Y/l371a12LOFYzm3rpo4lm/aOHf0WB6vB4GZef/Wh84GN8FYYTN4m6qh3x8LbEDYumoeGDACYF4Omntq+Kr5E1Ut8owctEPTXh96bbgWNHf3xqvmdl+19ch+v4mQt4mab9HAir5v7ukNEAExLwPN76/yFfQMF5Bl6A7Cl/rQ3QNoEmQs2UzeJi+OD4e83LSRspMnxiECYl4ZKSSNFpS/+lg5PoxNgoxVNie+rP4RI2ReFitPDyp8BT2DLC+ExZMh+UfGa0NDMMZGkbFkc/C2oE0WWs4KKDCvnDaxIfEu+2E0Cj6xoRYWcjiRyVjeJM3ba0VCQhJoE7gywBMhMX+Df09/ogWD/W+dPimaGLdNv2USnSJz69uqT7V/FEbw0ca3ARJT00rbn8NOSsdbwegGkD8VqkrnRqXZVqqJ7w1MkfDLKSHJTaJs6qWtG64o6alQCzdtvGqiBSAVKnNp80Mbtt5z/lg2y1pXZTCRpjVNHBNToggNET6jN6AmxmEOz9zusD8M4SJPn8rjgW/jVQS0MSnETBMQxhFXhFXSBLMCmkTZ1IWIL7T0VKiF1vz+apw1EWNbPmKfsbVsvgSZCNOa2EQf7cg4nUMXWlcNroTXWzQpzIjmnt5AnwKbECgxRHRgbjdPnyL4siaYJTeJ8qkLEVv4ElN9hn5/08aqlkjduwMy0aY1gejDYY0WaOhzmLm7N7275Z7Ba8PeVEOasaKUGCIYEBh5ogvBlzXBLLlJlEldoLgiStQjbz1yYkMdiE8v9g92detDkQoQ53YPvXbjPRuTlRSimi3jq6QBTHKTKJO6QDGFKzEVChJhHfSTw9WqJ4f9pnpk3JnWRFOiPDQYxoHVr4bhzqtwWgohsOgUCtQwW6yAEN+X06cIvqwJZslNomzqgsQTvuRUqIn9Ie4BgFSozKXNUmLOE05rMqxNMCXKWeC1gGn+hIHClCcIAQdAPMBf4P/icdPGpBDx/0vI6VMEX9IEswKaRNnUhYgvco2/+ypOSiua9/Q54tsRMYRP8G3Vp9o/cqDZ6GmQMAqdkcQgYUJ7BrWmwfKlnjXOk/RTGrq9nA8KXejl/25r5OnDve0z/+qdXENcvs4wy/TDaxpdY/UAkUWQWSDbG7gnkmCC8CRIgdJGAT3GN5plgAREXJKEvItAKwLEMboHpcrJiDy2736g4fQbOuKZvSHLt6zOF7Y3pp/YZgjI5epCQMusmV80IgCJRan7Cqj7iq/Tfxw1wlKkjWL6mRf+OtrQARIQmShJwDtGk+hFgDjF9IN5jVJJGRHH1vwTIt6RfqluL+TNDs8PtwFXDJlEoGYpACWS0JmD4fiAPfmauWu1HVGlLOLoPxwEx3SABEQmShKIUKORAUWAOMWZ7TpPJWVE4Gwipg9jB32hl/N2OrhO/7GXb/nK1B1FLjjr5O1IF8i6AHmml3/zDujCwYYDiCxMZq4G4Z6QbJSZzmB4GFHQpUBNLlAMaeLegOhxOwgQxUDEJUnQuxi0mRe2JYM4BB1BZYk3cI+hF/oZ7s3QQssZwMz8a5S4pp+Q3diZ3qidmEOeG2dOwogs9PAOILEQmbXWINyThWd5IqYz27mJGND0YYgIKSjYRJFRRC+3QzEQmShJyDsJsp2VAuIcM3uT4iwqIw6j+qiTQaf/SG3CSG75dBtx4ciA6ESfAX07HQ8OILEgmbVYE++pZw+i5gVFFMKQFGE4ki40yltQgAa/ncIiEyWJIi0UxDm6lqCDpQmbkLOoRmidFzvQHfB4wBHRhdOBFoL6UmTr/wjt97Y/w55u+QrJSDTgwohYSFGMyCgaaoECCga4WgGxic7gzFRdL5NRSUOygjLiNmew27twEq4EUejHdubCk5Sgw5Vn1hjS1Y1sp1gHEFmYDHpXCCGs8JsOyMTfhhHxClIUs0JGET31YTJOfQHpkJB3EVeWwa1kEIc4sx0NLEHi6Sw4ED+5BvqVHe+sobMiyEbRzEUDdqILVwR6nN+zn+YBIgtdRzgSoYgriMNGSBFN3/tFiJYpCtmEjCL6GCEQmahJ0DsPBOx7YZAM4gzcHSdtXExGRlVLilr/qRodYR46Ryr+0bi+zh6N5UstoXXr3EhikDChPYNa02D5Us+a5inz8GuehE4v5wNCi738v5FmnjrUa8/+s3dqLXH56jPL1CNrmx1j9QCRRZBZIO0m7okkmCA8CVKgtFFID4GN6agZaLFnjzFFSntSaIReBIhjdA6UJ8xB7ZgEsX0mhGItJmDy9REZzeyeZu7fvKq52G5OPT5iCMjlajGgZdbsL5sRgMSi1HkZ1HnZ1+QfxoywFGmjmH72+b+NOVFTWOSwJCWHEY3QiwJxiqkH8tryBDmoHZOwieRiRMHb0i/V7YW82eH5wQhwxZBJBGqWAlAiCfUPhOMD9uRr9s5VdkSVsoij/2CkM+ZEwGFB0FGWKDQiLALEKfrtxUF5ghyYx8SC7R4ImDokTkS5Td3O5B96+eavTZ0x5IKzTm4jXSDrBEjYzW/fBi0eaDqAyMJk1myCcE9INsZMfQwPIwq6HKjJBYohTbwB0dN2HHXOCki0Q9yA9iTRaE+zz48kgzgEHUGlnbeVR9Lo3p+n2svss9xlcNY7YwAz+88x4pp6XHZj/d6YnZhDnpv9UzAiC+cjB5BYiMxaaxDuycKzPBFTv81+G9DUIYgIKSjYRJFR/baWckICcbsQDVv0nW1Um5UC4hyzeyzOqlH3dUp0MNVHnVoLYxc0wEhu/mSEuHAcQ3Siz4ATHB0PDiCxIJm1WBPvCUfszHRAxx3CkBRh8JQuNMpZiKgDfNsDMhKwloFjFokgztGxBB1YhrIPElQjxM7rD2NoAA+vHBFd6G5QmsyXIlv3B2i/t/8F9nTz10hGokESRsRCimSJpxq2idQhgAJSX91nZb3MWYcR7vKTddDRx25v8RRcCYIo4W3iopOgoMOVZ9ca0jXNbKdYBxBZmKyZs63gnvgKG5n42zAiXkGK5BVumvISEySidoA67chnxJVl4E0GcYh+GxNWKSqMJ6SUgNl/whnXLgx2vr2WzooguxJgLhqwE124ItDj/J79NA8QWeg6wpEIRVxBHDJCimjqvs9DtExRyCZkFNGTOOqcMwLR0ECTErBAoz3ZUZAM4gbyHZiw8RJYGVUtKWr9p0J0hHmYO1Lxj+b1dfZoLl/qySqHatM8T6rWrZgdqrp8KANdwAINyhIqt1pnNVS9HMhh+5TRuhWyQ9UpH0phUeUQskSUW8XmUPVyQDZB1roVskPViUCFhUYKKEDE5lD1ciCKsofZoarLhyog0Q7JEkSE5lD1ciCH7Y/5WozaoarargSCdiEsYSFzqHo5EDXavhVBdqgyjKyhKq3cTjbRAplDVedA2hE9SSE7VFUCFZD8SjaRkDlUdQ4EcdhYlYZ5yA5VkUAHqAvjQmEJN3xkDlWZA0kUefU9GWaHqlM+FIFoaMCkChGZQ9XNwahqSdF4itZ/h2rrv0M1hKSfoXWoRtQNJQTGiyFF5VCNcVwUT+5lAa1D1a8bSgjCT0kabK2xGqpRjgui6JXZfrQOVb9uKCHEuUW2wnOoDrk1abFuMD0ArkM1shIRa3ZPFCkoh2qU43J4koYBSB2qaWI8Scq2QnSoVs/rciiy8A/UDlVZMRWEeESC1rKtyByqjuNi6L427jNrMViHavSCUypJ2VZ4DlUzZH1PVo3gOlSjFfUkW/E5VM0QCFqHarQEniQlW0E5VKMcH1UtKRpb8ZP/NVRb/x2qoae5Q1WSsOWDGl9JtCtJkTlUsRrFMg8UKymqp0M1TWz5oEZVEkVLNCkwh6q1G6vvIo4HUYWeDtW0BVs+qFGVRGPiReZQnb43uPRIHEm/sjJp7lCVgbHlg5pUSfTCQSaF5lDthmZSf+EWZ7tU3qFK2PQOVQjQE/spLGFSbA7VrqiTJs92qbtDlbF580GNqapKltACmUPVOoa/X80Jv3CosnjzQQUxnja6Al8Gy8H3ciQOcIkU3yPlHaqEzeBQ5ThZ6kmWqLqosByq3PNcWWTBVk0fvkfKO1QZjS0f1MhKooCgCqIic6jSdd+oaknRmIuf/K+h2vrvUC3y0NPcoSpJ6B2qFGDs/aB6iLo5VKEyh60Eo5iMdJZYDdWyWktRRR2qaaJ3qOoAZVhkjIeol0NVGPXH7vFTSEaoBRQrgrX0VdShWsriv8491g3VAaqw0MicPUQW15dbcLm+olK/ZLR95kkeVHeoysDoHaoQIEoBcTt0EVkcqo6NbJ+Ui8gI3xvrklGRp/uTS/PKO1QJm96hCgGiGEjVzHIRWRyqrs22fKUvIiPUApaQekY7RN0dqoxN71DlAGPvBzV58X9nxO3R75tsE6IkobEvoZXN2EB1hyqL3KEKfQv0LgqIy/s5iJX3snCHAe8J7EvoflCNCeUdqoRN71DlAGPuBzUCkceh6hbGLcr3uj3WVC2g4B1Z/xhNqrxDldEoHaqOou8HVSMq51Clvt7ulb6QjFAL+Mn/Gqo/aldDtWGe0uzFEcgOVR01AVHIMTVUPSYfVFuPKmSHqohaFtahkGNqqHpZPqhFD7ND1eGlsDDkqHh9LB/U7n3YDlWOOmcGwqqqUTVUvSUfVOtGY6AdqsoJBuLIhSVM6mP5oD5JQ4DsUBVRy99kL1ZVjaqh6if5oFL8hexQVakUQD/jqqoVXUOVlVqI4kkWQgDtUCUnJBBGXtk1VFkxgxwCMT1qhypHnTPXPRViKAKaSsoHtfXfodr671At8hBStA7VuHsg1e5JEqzZsOJd+aAa7pztWxFah6p3D6RUHEeaIkmCrVb+xLvyQU0uxNXa+kJ2qDq8CMTuSZKp+1aZ5/6VD+qTLJQ9zA5Vp3xoX7unSZqDttUW9a98UMOTSswL2aHKMCYCYvcckoEdvX6SD6p1tZPK7xFkhyrCeBVTyRRJEo4bK30IMx9UUWZe2A5VlUAFRN5IEmqams0Gy433YqzUQhJrMWyHqkigB8QRcKB5lZ3j/Ssf1DIPIUPrUI27B9KpQ9IUIlGXRUDzQW39d6j+qF0N1aZ5tj/m3yNvqNOpdIrYarCGKjUYaRj/1Vysxd5Qp1PpFLHVXw3VsupHEbXC2Jr3hjqdyniIrdZqqIoGtWT1JFXdocqEjHU6jfirnMpqRTVYQ5XagTSM33aYfUyV79teIqR3qHKAMX+VU6WarKG6FO+IOJR5WHs8r7tDlevZMThUZcVUr3uTd4haizVUtUvS+gzaG+p0Sk7JHFdqDVVt6L7O9mvft71fjBuDwaEKccb9VU6l6q+GKjcYifnLZ+o7VDEWUodqjGT50zwqe44arKFKORtVLSkaY/GT/zVUW/8dqkk/rTdw9YM6nWqnsvYTmUOVb4GVBbstwcFIB65q4OoHdTolp4hE2gTMocqNigW7LcHBWKXMar1q/aBOpxRPTFVVaA5VyLO02QOGNHDV26HKhDLqdIpOxVRVxeVQFdwiyQw079teImRwqConGIicUiTsJyqHqur9BY9Ud6iab3RF1OmU9hRTVRVfnU6lMXQ24r7tZSecoZhL0sx1VkNVfZXHsIOp3Le9ikJMnU7JqZiqqtgcqp12EIiZEuqvef37tvcbj0NVvE9G5U/JqYiqqsgcqu69FLf+O1Qb7RyqjfIk/bS22SGBdqhe4KgJSIaMbOwMMoeqlwM6CFq31jY7JF+o06n/2+4FZ1Yk94NK0Lq1ttkh+UKdTmXIHptv5YNaO74BCByqMup0Gvvb7r1wvoMzH1RxgHaoZsZlIItcSzgDMx9UeSB2qAqYyPtB5RZJbiFzqDo5kAdih6pIYOz9oOoW+WyGzKGqcyAQxA5VkUAPyF0ht5A5VGUOJALBoSqiTqdKkq1e7we19d+h2s7gUA0="},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var o=n(96540);const a={},r=o.createContext(a);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);
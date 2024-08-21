"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[1315],{69509:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(74848),o=n(28453);const s={sidebar_position:15},r="How to Bulk Load Data into PostgreSQL with Python",i={id:"data-ingestion/pg-python",title:"How to Bulk Load Data into PostgreSQL with Python",description:"Bulk loading with the copy command from a CSV file is the fastest option to load a large table with Postgres. In fact, loading data from a flat file is the fastest option in any relational databases. When you have a large table and need to load it to another database, the fastest way is to unload it to a flat file and upload it to the database table.",source:"@site/docs/data-ingestion/15.pg-python.md",sourceDirName:"data-ingestion",slug:"/data-ingestion/pg-python",permalink:"/mydatahack-old-blog/mydatahack-old-blog/data-ingestion/pg-python",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"How to Bulk Load Data into MySQL with Python",permalink:"/mydatahack-old-blog/mydatahack-old-blog/data-ingestion/mysql-python"},next:{title:"Event-Driven Data Ingestion with AWS Lambda (S3 to RDS)",permalink:"/mydatahack-old-blog/mydatahack-old-blog/data-ingestion/lambda-s3-rds-python"}},l={},d=[];function c(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"how-to-bulk-load-data-into-postgresql-with-python",children:"How to Bulk Load Data into PostgreSQL with Python"}),"\n",(0,a.jsx)(e.p,{children:"Bulk loading with the copy command from a CSV file is the fastest option to load a large table with Postgres. In fact, loading data from a flat file is the fastest option in any relational databases. When you have a large table and need to load it to another database, the fastest way is to unload it to a flat file and upload it to the database table."}),"\n",(0,a.jsx)(e.p,{children:"Let\u2019s first import all the necessary modules. The code here works for both Python 2.7 and 3. The psycopg2 module is pretty much your best friends to connect to Postgres with Python."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import psycopg2\nimport pandas as pd\nimport sys\n"})}),"\n",(0,a.jsx)(e.p,{children:"Exporting Table to CSV"}),"\n",(0,a.jsx)(e.p,{children:"Let\u2019s export a table to a csv file. To export an entire table, you can use select * on the target table. Panda\u2019s read_sql function will convert the query result into Pandas\u2019 dataframe. To create a CSV file, you can use to_csv on the dataframe."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"def table_to_csv(sql, file_path, dbname, host, port, user, pwd):\n    '''\n    This function creates a csv file from PostgreSQL with query\n    '''\n    try:\n        conn = psycopg2.connect(dbname=dbname, host=host, port=port,\\\n         user=user, password=pwd)\n        print(\"Connecting to Database\")\n        # Get data into pandas dataframe\n        df = pd.read_sql(sql, conn)\n        # Write to csv file\n        df.to_csv(file_path, encoding='utf-8', header = True,\\\n         doublequote = True, sep=',', index=False)\n        print(\"CSV File has been created\")\n        conn.close()\n\n    except Exception as e:\n        print(\"Error: {}\".format(str(e)))\n        sys.exit(1)\n\n# Execution Example with transaction table\nsql = 'Select * From sf.transaction'\nfile_path = '/tmp/transaction.csv'\ndbname = 'db name'\nhost = 'host url'\nport = '5432'\nuser = 'username'\npwd = 'password'\n\ntable_to_csv(sql, file_path, dbname, host, port, user, pwd)\n"})}),"\n",(0,a.jsx)(e.p,{children:"Importing CSV to Table"}),"\n",(0,a.jsx)(e.p,{children:"The copy_expert function will give you good option to copy a CSV file. The function takes the input file path, target table and connection details. Note that the column order should be the same between the CSV file and the table."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"def pg_load_table(file_path, table_name, dbname, host, port, user, pwd):\n    '''\n    This function upload csv to a target table\n    '''\n    try:\n        conn = psycopg2.connect(dbname=dbname, host=host, port=port,\\\n         user=user, password=pwd)\n        print(\"Connecting to Database\")\n        cur = conn.cursor()\n        f = open(file_path, \"r\")\n        # Truncate the table first\n        cur.execute(\"Truncate {} Cascade;\".format(table_name))\n        print(\"Truncated {}\".format(table_name))\n        # Load table from the file with header\n        cur.copy_expert(\"copy {} from STDIN CSV HEADER QUOTE '\\\"'\".format(table_name), f)\n        cur.execute(\"commit;\")\n        print(\"Loaded data into {}\".format(table_name))\n        conn.close()\n        print(\"DB connection closed.\")\n\n    except Exception as e:\n        print(\"Error: {}\".format(str(e)))\n        sys.exit(1)\n\n# Execution Example\nfile_path = '/tmp/restaurants.csv'\ntable_name = 'usermanaged.restaurants'\ndbname = 'db name'\nhost = 'host url'\nport = '5432'\nuser = 'username'\npwd = 'password'\npg_load_table(file_path, table_name, dbname, host, port, user, pwd)\n"})}),"\n",(0,a.jsx)(e.p,{children:"(2018-03-30)"})]})}function p(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(c,{...t})}):c(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>i});var a=n(96540);const o={},s=a.createContext(o);function r(t){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),a.createElement(s.Provider,{value:e},t.children)}}}]);
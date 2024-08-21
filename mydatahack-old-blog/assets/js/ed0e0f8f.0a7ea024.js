"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[3681],{48181:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(74848),a=n(28453);const r={sidebar_position:11},i="How to Ingest FullStory Data Export Extracts with Python",s={id:"data-ingestion/fullstory-data-python",title:"How to Ingest FullStory Data Export Extracts with Python",description:"If you are interested in user tracking on your website, FullStory is a pretty good option. You can sign up for the free version here. The free version includes heaps of cool features. When you first sign up, you can try all the Pro Edition features for 2 weeks, too.",source:"@site/docs/data-ingestion/11.fullstory-data-python.md",sourceDirName:"data-ingestion",slug:"/data-ingestion/fullstory-data-python",permalink:"/mydatahack-old-blog/docs/data-ingestion/fullstory-data-python",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"A Comprehensive Guide for Reading and Writing JSON with Python",permalink:"/mydatahack-old-blog/docs/data-ingestion/json-with-python"},next:{title:"How to Bulk Load Data with JDBC and Python",permalink:"/mydatahack-old-blog/docs/data-ingestion/jdbc-python"}},l={},c=[];function d(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"how-to-ingest-fullstory-data-export-extracts-with-python",children:"How to Ingest FullStory Data Export Extracts with Python"}),"\n",(0,o.jsx)(e.p,{children:"If you are interested in user tracking on your website, FullStory is a pretty good option. You can sign up for the free version here. The free version includes heaps of cool features. When you first sign up, you can try all the Pro Edition features for 2 weeks, too."}),"\n",(0,o.jsx)(e.p,{children:"From data analytics perspective, FullStory gives us the user behaviour data as it collects clicks on the html elements. Analysing data will give us more insights into customer experience on your website and more. The first step is to ingest the data from it."}),"\n",(0,o.jsx)(e.p,{children:"FullStory has a simple REST API to extract the click data. First, you retrieve a list with data export ids after a target date. By using the id, you can extract the actual click data. Once you make the GET request, the data comes in the gz format. So, all you have to do it to write it to a gz file from the results of the API request."}),"\n",(0,o.jsx)(e.p,{children:"In this example, we are loading JSON data into Postgres database. You need to have Postgres table with one column with the jsonb data type as the target table."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE fullstory.data_export (\n    data_column jsonb\n);\n"})}),"\n",(0,o.jsx)(e.p,{children:"Code"}),"\n",(0,o.jsx)(e.p,{children:"The code is written in Python 3."}),"\n",(0,o.jsx)(e.p,{children:"(1) Required modules"}),"\n",(0,o.jsx)(e.p,{children:"First of all, let\u2019s import all the required modules."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"import requests\nfrom time import strptime, mktime\nimport gzip\nimport json\nimport psycopg2\nimport sys\n"})}),"\n",(0,o.jsx)(e.p,{children:"(2) Set required variables"}),"\n",(0,o.jsx)(e.p,{children:"API credential needs to be created (see the instruction here). We are going to set variables for Postgres connections."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"api_token = 'api_token'\ndbname = 'dbname'\nuser = 'user'\nhost = 'host url'\npw = 'password'\nconnection_string = \"dbname='{}' user='{}' host='{}' password='{}'\"\\\n.format(dbname, user, host, pw)\n"})}),"\n",(0,o.jsx)(e.p,{children:"(3) Converting local date to UNIX Epoch"}),"\n",(0,o.jsx)(e.p,{children:"This function converts local date to the epoch timestamp format. For further timestamp conversion into epoch with Python, you can check out the reference here."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"def datetime_converter(datetime_string):\n    '''\n    The function should be used when both server and input datatime string\n    is in the local time.\n    '''\n    # (1) Convert to datetime format\n    target_timestamp = strptime(datetime_string, '%Y-%m-%d %H:%M:%S')\n    # (2) mktime creates epoch time from the local time\n    mktime_epoch = mktime(target_timestamp)\n    print(int(mktime_epoch)) # convert to integer to remove decimal\n    return int(mktime_epoch)\n"})}),"\n",(0,o.jsx)(e.p,{children:"(4) Obtain the list of Data Export."}),"\n",(0,o.jsx)(e.p,{children:"You first need to get the list of Data Export after the target date."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"def get_list(target_date):\n    '''This function obtain List of data export\n    from the target date onwards.'''\n    output = None\n    headers = {'Authorization':'Basic {}'.format(api_token)}\n    uri = 'https://export.fullstory.com/api/v1/export/list?start={}'\\\n    .format(datetime_converter('2018-03-29 00:00:00'))\n    # Call get list API\n    r = requests.get(uri, headers=headers)\n    status_code = r.status_code\n    # Check status code\n    if status_code == 200:\n        print('List API call has been successful.')\n        output = r.json()\n        # print(output)\n    else:\n        print('List API call unsuccessful with status code:\\\n         {}'.format(status_code))\n\n    return output\n"})}),"\n",(0,o.jsx)(e.p,{children:"(5) Get Data Export"}),"\n",(0,o.jsx)(e.p,{children:"The function below uses the Data Export Id to retrieve the data and then creates a gz file. Once the gz file is created, the create_file() function creates a JSON file that is ready for database upload. I am adding the list id to all the records. This may help for troubleshooting or testing."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"def get_data_export(id, file_path):\n    '''Get data export with the specified Id'''\n    headers = {'Authorization':'Basic {}'.format(api_token)}\n    uri = 'https://export.fullstory.com/api/v1/export/get?id={}'.format(str(id))\n    r = requests.get(uri, headers=headers)\n    status_code = r.status_code\n    if status_code == 200:\n        print('Returned header from API call: ')\n        print(r.headers)\n\n        with gzip.open(file_path, 'wb') as f:\n            for chunk in r.iter_content(chunk_size=1024):\n                f.write(chunk)\n        print('gz file has been created as {}'.format(file_path))\n    else:\n        print('Get DataExport Api Call unsuccessful with status code:\\\n         {}'.format(status_code))\n\ndef create_file(input_path, output_path, list_id):\n    '''Create Json & Csv File from Input File'''\n    f =  gzip.open('/tmp/DataExport.json.gz', 'r')\n    json_out = json.load(f)\n    print('Check the Json content: \\n' + str(json_out[0]))\n    # for Python 3. Unless encoding, get UnicodeEncodeError\n    output = open(output_path, 'w', encoding='utf8')\n    for line in json_out:\n        line['list_id'] = list_id\n        output.write(json.dumps(line))\n        output.write('\\n')\n    print('Completed File Creation')\n"})}),"\n",(0,o.jsx)(e.p,{children:"(6) Upload JSON file to Postgres"}),"\n",(0,o.jsx)(e.p,{children:"The function simply copies the JSON file to Postgres."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"def pg_load(connection_string, table_name, file_path):\n    '''\n    This function load a flat file to PG Table with Jsonb data type.\n    '''\n    try:\n        conn = psycopg2.connect(connection_string)\n        print(\"Connecting to Database\")\n        cur = conn.cursor()\n        f = open(file_path, \"r\")\n        cur.copy_expert(\"copy {} FROM STDIN WITH CSV quote e'\\x01' delimiter e'\\x02'\".format(table_name), f)\n        cur.execute(\"commit;\")\n        print(\"Loaded data into {}\".format(table_name))\n        conn.close()\n        print(\"DB connection closed.\")\n\n    except Exception as e:\n        print('Error {}'.format(str(e)))\n"})}),"\n",(0,o.jsx)(e.p,{children:"(7) Put it all together"}),"\n",(0,o.jsx)(e.p,{children:"The get_list() function retrieves a list of Data Exports. In the main function, we will loop the list."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"def main(start_date, target_table):\n   # (1) Get response from the target_date\n   list_response = get_list(start_date)\n   for i in list_response['exports']:\n       id = i['Id']\n       print('Target Id is {}'.format(id))\n       # (2) Create gz file from get api\n       gz_file_path = '/tmp/fullstory/DataExport.json.gz'\n       get_data_export(id, gz_file_path)\n       # (3) Convert gz file into json file for upload\n       json_file_path = '/tmp/fullstory/data_export_{}.json'.format(id)\n       create_file(gz_file_path, json_file_path, id)\n       # (4) Upload to PG\n       pg_load(connection_string, target_table, json_file_path)\n\n# Execution\nstart_date = '2018-03-29 00:00:00'\ntarget_table = 'fullstory.data_export'\nmain(start_date, target_table)\nNext Step\n"})}),"\n",(0,o.jsx)(e.p,{children:"You can make the ingestion pattern as incremental. For example, you can write the list to the database and retrieve the max stop time and pass it as the target date. A little bit of customisation to the code above will enable you to do incremental ingestion. See how you go!"}),"\n",(0,o.jsx)(e.p,{children:"(2018-04-01)"})]})}function p(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>s});var o=n(96540);const a={},r=o.createContext(a);function i(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:i(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);
"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[6187],{79639:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=t(74848),a=t(28453);const i={sidebar_position:16},s="Event-Driven Data Ingestion with AWS Lambda (S3 to RDS)",r={id:"data-ingestion/lambda-s3-rds-python",title:"Event-Driven Data Ingestion with AWS Lambda (S3 to RDS)",description:"In the previous post, we discussed how to move data from the source S3 bucket to the target whenever a new file is created in the source bucket by using AWS Lambda function. In this post, I will show you how to use Lambda to execute data ingestion from S3 to RDS whenever a new file is created in the source bucket. AWS Lambda supports a few different programming languages. We will use Python 3.6 here.",source:"@site/docs/data-ingestion/16.lambda-s3-rds-python.md",sourceDirName:"data-ingestion",slug:"/data-ingestion/lambda-s3-rds-python",permalink:"/mydatahack-old-blog/docs/data-ingestion/lambda-s3-rds-python",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"How to Bulk Load Data into PostgreSQL with Python",permalink:"/mydatahack-old-blog/docs/data-ingestion/pg-python"},next:{title:"Event-Driven Data Ingestion with AWS Lambda (S3 to S3)",permalink:"/mydatahack-old-blog/docs/data-ingestion/lambda-s3-s3-python"}},c={},d=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"event-driven-data-ingestion-with-aws-lambda-s3-to-rds",children:"Event-Driven Data Ingestion with AWS Lambda (S3 to RDS)"}),"\n",(0,o.jsx)(n.p,{children:"In the previous post, we discussed how to move data from the source S3 bucket to the target whenever a new file is created in the source bucket by using AWS Lambda function. In this post, I will show you how to use Lambda to execute data ingestion from S3 to RDS whenever a new file is created in the source bucket. AWS Lambda supports a few different programming languages. We will use Python 3.6 here."}),"\n",(0,o.jsx)(n.p,{children:"To access RDS with the lambda function, your lambda function need to access the VPC where RDS reside by giving the right permission to the function. You also need to tell the function which VPC to access and which security group within the VPC to use. It is actually simpler than it sounds and I will cover all of these here. AWS has a documentation on how to configure lambda function to access RDS here, which I referred to write this post."}),"\n",(0,o.jsx)(n.p,{children:"Scenario"}),"\n",(0,o.jsx)(n.p,{children:"Let\u2019s think about a near real-time ingestion scenario. You have an application that does data dump in S3 every 15 minutes in JSON. Your requirement is to grab the data from S3, transform it and write it to Postgres RDS every time a new file comes to the bucket."}),"\n",(0,o.jsx)(n.p,{children:"Ingestion Details"}),"\n",(0,o.jsx)(n.p,{children:"As an example, let\u2019s use the JSON example data used here (How Postgres JSON Query Handles Missing Key). This data was also used in the previous Lambda post (Event-Driven Data Ingestion with AWS Lambda (S3 to S3)). Essentially, we will change the target from S3 to Postgres RDS. As an ingestion method, we will load the data as JSON into Postgres. We discussed this ingestion method here (New JSON Data Ingestion Strategy by Using the Power of Postgres)."}),"\n",(0,o.jsx)(n.p,{children:"Prerequisites"}),"\n",(0,o.jsx)(n.p,{children:"Mac or Linux machine with Python 3.6 development environment.\nVirtual environment for this lambda function with psycopg2-binary installed\nPostgres RDS with target schema and table (e.g. usermanaged.transaction)\nSource S3 Bucket (e.g. lambda.test.source)\nIf you have a Windows machine, I struggled to get psycopg2 working in lambda when I push the function from there. I recommend to use a Linux virtual box to develop lambda function if you are using Windows. Lambda function runs on Linux EC2 and developing code in the similar OS environment is better for a script language like Python."}),"\n",(0,o.jsx)(n.p,{children:"To set up Python development environment in Linux, we have instructions."}),"\n",(0,o.jsx)(n.p,{children:"How to Install Python 3 and Create Virtual Environment in Centos, Redhat and Amazon Linux\nHow to Install Python 3 and Create Virtual Environment In Ubuntu\nTo launch Postgres RDS, see the post below. You need to create a table with one column with the jsonb data type."}),"\n",(0,o.jsx)(n.p,{children:"How To Launch Postgres RDS With AWS Command Line Interface (CLI)\nYou need to create a table with one column with the jsonb data type. See the post below for the data set and table creation."}),"\n",(0,o.jsx)(n.p,{children:"How Postgres JSON Query Handles Missing Key\nCode"}),"\n",(0,o.jsx)(n.p,{children:"We will use the config file for database connection details. For the target schema and table name, we will set environment variables when we deploy the function. Save the file as db_config.py."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'db_username = "<user name>"\ndb_password = "<password>"\ndb_name = "<database name>"\ndb_endpoint = "<rds endpoint>"\n'})}),"\n",(0,o.jsx)(n.p,{children:"The main function is handler(). The file is saved as MoveS3ToPg.py, which will be the lambda function name."}),"\n",(0,o.jsx)(n.p,{children:"The bucket name and key are retrieved from the event. S3 event is a JSON file that contains bucket name and object key."}),"\n",(0,o.jsx)(n.p,{children:"The code retrieves the target file and transform it to a csv file. Then, it uploads to Postgres with copy command. For the detailed explanation on this ingestion pattern, refer to New JSON Data Ingestion Strategy by Using the Power of Postgres."}),"\n",(0,o.jsx)(n.p,{children:"For database parameters, import db_config.py with import statement and retrieve the value. Schema and table names are set as environment variables which can be retrieved by os.environ."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import boto3\nimport botocore\nimport psycopg2\nimport os\nimport json\nimport db_config\n\ndbname = db_config.db_name\nuser = db_config.db_username\nhost = db_config.db_endpoint\npassword = db_config.db_password\nschema = os.environ['targetSchema']\ntable = os.environ['targetTable']\n\nconnection_string = \"dbname='{}' user='{}' host='{}' password='{}'\"\\\n    .format(dbname, user, host, password)\n\nclient = boto3.client('s3', 'ap-southeast-2', \\\nconfig=botocore.config.Config(s3={'addression_style':'path'}))\n\n# check\nprint(dbname, user, host, password, schema, table, connection_string)\n\ndef pg_load(connection_string, table_name, file_path):\n    try:\n        conn = psycopg2.connect(connection_string)\n        print(\"Connecting to Database\")\n        cur = conn.cursor()\n        # Open the input file for copy\n        f = open(file_path, \"r\")\n        # Load csv file into the table\n        cur.copy_expert(\"copy {} FROM STDIN WITH CSV quote e'\\x01' delimiter e'\\x02'\".format(table_name), f)\n        cur.execute(\"commit;\")\n        print(\"Loaded data into {}\".format(table_name))\n        conn.close()\n        print(\"DB connection closed.\")\n\n    except Exception as e:\n        print('Error {}'.format(str(e)))\n\ndef transform_json(input_path, output_path):\n    # Open the input file and load as json\n    input = open(input_path, 'r')\n    json_file = json.load(input)\n    # Open the output file and create csv file for db upload\n    output = open(output_path, 'w')\n    for record in json_file:\n        output.write(json.dumps(record))\n        output.write('\\n')\n    output.close()\n    print('Transformed {} to {}'.format(input_path, output_path))\n\ndef handler(event, context):\n    # Get the info from the S3 Put event\n    for record in event['Records']:\n        bucket_name = record['s3']['bucket']['name']\n        key = record['s3']['object']['key']\n        local_path = '/tmp/' + key.split('/')[-1]\n        # Download file from S3\n        client.download_file(bucket_name, key, local_path)\n        print(\"Downloaded s3 file, {}, to {}\".format(key, local_path))\n        # Transform the file\n        output_path = '/tmp/output.csv'\n        transform_json(local_path, output_path)\n        # Load csv to Postgres\n        pg_load(connection_string, schema+'.'+table, output_path)\n"})}),"\n",(0,o.jsx)(n.p,{children:"S3 Put Event JSON Example"}),"\n",(0,o.jsx)(n.p,{children:"Whenever the file is created in the source bucket, it will send the JSON file to the lambda function. This is used to test the function manually. You need to change a few parameters (like bucket or object name) to suit your set up."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "Records": [\n    {\n      "eventVersion": "2.0",\n      "eventSource": "aws:s3",\n      "awsRegion": "us-west-2",\n      "eventTime": "1970-01-01T00:00:00.000Z",\n      "eventName": "ObjectCreated:Put",\n      "userIdentity": {\n        "principalId": "AIDAJDPLRKLG7UEXAMPLE"\n      },\n      "requestParameters": {\n        "sourceIPAddress": "127.0.0.1"\n      },\n      "responseElements": {\n        "x-amz-request-id": "C3D13FE58DE4C810",\n        "x-amz-id-2": "FMyUVURIY8/IgAtTv8xRjskZQpcIZ9KG4V5Wp6S7S/JRWeUWerMUE5JgHvANOjpD"\n      },\n      "s3": {\n        "s3SchemaVersion": "1.0",\n        "configurationId": "testConfigRule",\n        "bucket": {\n          "name": "sourcebucket",\n          "ownerIdentity": {\n            "principalId": "A3NL1KOZZKExample"\n          },\n          "arn": "arn:aws:s3:::sourcebucket"\n        },\n        "object": {\n          "key": "HappyFace.jpg",\n          "size": 1024,\n          "eTag": "d41d8cd98f00b204e9800998ecf8427e",\n          "versionId": "096fKKXTRTtl3on89fVO.nfljtsv6qko"\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Summary Steps"}),"\n",(0,o.jsx)(n.p,{children:"Create VPC Endpoint for Amazon S3\nCreate a custom policy for the function (e.g. s3_to_pg_lambda)\nAttached the policy to the role used for the function (e.g. s3_to_pg_lambda)\nCreate a function and config file.\nPackage the code with the required libraries and the config file\nDeploy the function\nTest the function by manually invoking it\nAdd permission for the function to access S3 bucket\nConfigure event in the source bcuket\nTest the function by S3 PUT request.\nSteps"}),"\n",(0,o.jsx)(n.p,{children:"(1) Create VPC Endpoint for Amazon S3"}),"\n",(0,o.jsx)(n.p,{children:"To access S3 from Lambda function executed within a VPC, I needed to configure VPC Endpoint for S3. How to access S3 from a VPC depends on your setup. Your VPC might already allows access to S3 without creating an endpoint (e.g. using Internet Gateway or NAT). I am using the environment created here (How to Create Your Own Personal Data Science Computing Environment In AWS). In this set up, the best approach is to create the endpoint."}),"\n",(0,o.jsx)(n.p,{children:"If the lambda function times out before downloading the file from S3, you have the access configuration issue."}),"\n",(0,o.jsx)(n.p,{children:"(2) Create a custom policy for the function"}),"\n",(0,o.jsx)(n.p,{children:"Lambda function needs to get data from S3 and access to RDS within a VPC. For RDS access, you need EC2 actions to create ENIs (used to execute the function within the specified VPC) and CloudWatch Logs action to write logs. For this, you can use the pre-made AWSLambdaVPCAccessExecutionRole. The policy looks like below. I simply added a few S3 action permissions to AWSLambdaVPCAccessExecutionRole. Use this to create a custom policy."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:GetObject", "s3:ListBucket"],\n      "Resource": "*"\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "logs:CreateLogGroup",\n        "logs:CreateLogStream",\n        "logs:PutLogEvents",\n        "ec2:CreateNetworkInterface",\n        "ec2:DescribeNetworkInterfaces",\n        "ec2:DeleteNetworkInterface"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"(3) Create a new lambda execution role and attach the policy"}),"\n",(0,o.jsx)(n.p,{children:"Once the policy is created, you need to create a new lambda execution role and attach the policy to it."}),"\n",(0,o.jsx)(n.p,{children:"(4) Create a function and config file"}),"\n",(0,o.jsx)(n.p,{children:"Refer to the config file and code above. The name of the main python file should be the name of the function."}),"\n",(0,o.jsx)(n.p,{children:"(5) Package the code with the required libraries and the config file"}),"\n",(0,o.jsx)(n.p,{children:"Go to the site-packages folder of the virtual environment where the lambda function was developed. Zip the entire content. Add both config and main function files."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd /home/user/python3/lambda_pg/lib/python3.6/site-packages\nzip -r9 /home/user/tmp/MoveS3ToPg.zip *\ncd /home/user/tmp/\nzip -g MoveS3ToPg.zip MoveS3ToPg.py\nzip -g MoveS3ToPg.zip db_config.py\n"})}),"\n",(0,o.jsx)(n.p,{children:"(6) Deploy the function"}),"\n",(0,o.jsx)(n.p,{children:"Make sure to have the vpc-config parameter with all the subnets of the RDS subnet group. The security group cannot be the same as RDS. This is because AWS resources cannot connect within the same security group. Use the default security group for the VPC. It usually works."}),"\n",(0,o.jsx)(n.p,{children:"If you have multiple environment variables as in this example, use double-quote to wrap the variables."}),"\n",(0,o.jsxs)(n.p,{children:["The handler should be set as ",(0,o.jsx)(n.code,{children:"{function-name}.{main-function-name-in-the-code}"}),". The role is the custom role created in step 3."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'aws lambda create-function \\\n--region ap-southeast-2 \\\n--function-name MoveS3ToPg \\\n--zip-file fileb://MoveS3ToPg.zip \\\n--role arn:aws:iam::<account no>:role/s3_to_pg_lambda \\\n--environment Variables="{targetSchema=usermanaged,targetTable=transaction}" \\\n--vpc-config SubnetIds=subnet-xxxxxx1,subnet-xxxxxx6,SecurityGroupIds=sg-1aaaaa1 \\\n--handler MoveS3ToPg.handler \\\n--runtime python3.6 \\\n--timeout 10 \\\n--memory-size 1024\n'})}),"\n",(0,o.jsx)(n.p,{children:"If you need to update the function, use the update-function-code command below."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"aws lambda update-function-code \\\n--function-name MoveS3ToPg \\\n--region ap-southeast-2 \\\n--zip-file fileb://MoveS3ToPg.zip\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you need to update the config (such as vpc-config or environment variables), use the update-function-configuration command."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"aws lambda update-function-configuration \\\n--function-name MoveS3ToPg \\\n--region ap-southeast-2 \\\n--vpc-config SubnetIds=subnet-xxxxxx1,subnet-xxxxxx6,SecurityGroupIds=sg-1aaaaa1\n"})}),"\n",(0,o.jsx)(n.p,{children:"(7) Test the function by manually invoking it"}),"\n",(0,o.jsx)(n.p,{children:"Use the lambda invoke command. The payload is the S3 event Json file you created manually from the example above."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"aws lambda invoke \\\n--invocation-type Event \\\n--function-name MoveS3ToPg \\\n--region ap-southeast-2 \\\n--payload file://inputFile.txt \\\n"})}),"\n",(0,o.jsx)(n.p,{children:"outputfile.txt"}),"\n",(0,o.jsx)(n.p,{children:"(8) Add permission for the function to access S3 bucket"}),"\n",(0,o.jsx)(n.p,{children:"Run lambda add-permission command. Without the permission, you cannot configure lambda event in the source bucket."}),"\n",(0,o.jsx)(n.p,{children:"(9) Configure event in the source bucket."}),"\n",(0,o.jsx)(n.p,{children:"Whenever the put request happens, you are sending the event to the lambda function."}),"\n",(0,o.jsx)(n.p,{children:"(10) Test the function by S3 PUT request."}),"\n",(0,o.jsx)(n.p,{children:"You can use the aws cli to upload the file to the target bucket and check if the lambda function executes correctly."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"aws s3 cp ./source_file.json s3://lambda.test.source/today/source_file.json"}),"\nError Handling"]}),"\n",(0,o.jsx)(n.p,{children:"When the permissions, execution role, VPC access to S3, security group or subnets are not configured correctly, your function will timeout. This means the function will max out the default execution time limit and stop execution."}),"\n",(0,o.jsx)(n.p,{children:"If your function starts timing out after successful executions, you may need to re-deploy the function. Then, it will be fixed."}),"\n",(0,o.jsx)(n.p,{children:"(2018-03-13)"})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(96540);const a={},i=o.createContext(a);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);
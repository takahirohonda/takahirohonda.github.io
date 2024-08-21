"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[1750],{56931:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=n(74848),i=n(28453);const a={sidebar_position:18},s="Comprehensive Guide to Download Files From S3 with Python",c={id:"data-ingestion/s3-python",title:"Comprehensive Guide to Download Files From S3 with Python",description:"Using AWS SDK for Python can be confusing. First of all, there seems to be two different ones (Boto and Boto3). Even if you choose one, either one of them seems to have multiple ways to authenticate and connect to AWS services. Googling solutions can quickly become confusing as you may find different variations of code examples. If you are just getting into AWS, this can be scary. In this post, I will explain the different and give you the code examples that work by using the example of downloading files from S3.",source:"@site/docs/data-ingestion/18.s3-python.md",sourceDirName:"data-ingestion",slug:"/data-ingestion/s3-python",permalink:"/mydatahack-old-blog/mydatahack-old-blog/data-ingestion/s3-python",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"Event-Driven Data Ingestion with AWS Lambda (S3 to S3)",permalink:"/mydatahack-old-blog/mydatahack-old-blog/data-ingestion/lambda-s3-s3-python"},next:{title:"New JSON Data Ingestion Strategy by Using the Power of Postgres",permalink:"/mydatahack-old-blog/mydatahack-old-blog/data-ingestion/pg-json"}},r={},l=[];function d(e){const o={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"comprehensive-guide-to-download-files-from-s3-with-python",children:"Comprehensive Guide to Download Files From S3 with Python"}),"\n",(0,t.jsx)(o.p,{children:"Using AWS SDK for Python can be confusing. First of all, there seems to be two different ones (Boto and Boto3). Even if you choose one, either one of them seems to have multiple ways to authenticate and connect to AWS services. Googling solutions can quickly become confusing as you may find different variations of code examples. If you are just getting into AWS, this can be scary. In this post, I will explain the different and give you the code examples that work by using the example of downloading files from S3."}),"\n",(0,t.jsx)(o.p,{children:"Boto is the older version of Python AWS SDK. Boto3 is the newer version. Boto3 doesn\u2019t mean it is for Python 3. It works for Python 2.6 or 2.7. All the code provided in this post will work for both Python versions. As Boto3 is rewritten from ground up, the code you write with boto3 is different from Boto. You can read further about the change made in Boto3 here."}),"\n",(0,t.jsx)(o.p,{children:"Generally speaking, you should use Boto3 if you are writing new programs. It is the new and improved version of Boto. I personally find it more efficient and easier to use. You also need to know Boto to maintain legacy code."}),"\n",(0,t.jsx)(o.p,{children:"Before you start, you need to install boto and boto3. All the code work for both Python 2.7 and 3. You can use either one of them"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"pip install boto\npip install boto3\n"})}),"\n",(0,t.jsx)(o.p,{children:"(1) Downloading S3 Files With Boto3"}),"\n",(0,t.jsx)(o.p,{children:"Boto3 provides super-easy way to configure credentials and access to AWS resources. To connect to S3, you can either create a S3 resorce or S3 client. Resource is an object-oriented interface to AWS and provides higher-level abstraction while Client is a low-level interface to AWS whose methods map close to 1:1 with service APIs."}),"\n",(0,t.jsx)(o.p,{children:"1-1. Using Resource"}),"\n",(0,t.jsx)(o.p,{children:"You can create s3 resources with boto3.resource(\u2018s3\u2019). It will use the AWS credentials configured in your AWS CLI (see here). This is perfect when you want to use the code between different environments as the credentials come from environment variable and you do not need to hardcode it. Once you have the resources, create the bucket object and use the download_file method. This page shows different s3 methods that you can use with resource."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-python",children:"import boto3\nimport botocore\n\ndef download_file_with_resource(bucket_name, key, local_path):\n    s3 = boto3.resource('s3')\n    s3.Bucket(bucket_name).download_file(key, local_path)\n    print('Downloaded File with boto3 resource')\n\nbucket_name = '<your bucket name>'\nkey = '<folder\u2026/filename>'\nlocal_path = '<e.g. ./log.txt>'\n\ndownload_file_with_resource(bucket_name, key, local_path)\n"})}),"\n",(0,t.jsx)(o.p,{children:"Here is the troubleshooting tip for 404 error: An error occurred (404) when calling the HeadObject operation: Not Found."}),"\n",(0,t.jsx)(o.p,{children:"You first need to make sure you have the correct bucket & key names. If you still get this error after triple-checking bucket name and object key, make sure your key does not start with \u2018/\u2019. For example, key = \u2018/2018-02-27/log.txt\u2019 should be key = \u20182018-02-27/log.txt\u2019 in the code above."}),"\n",(0,t.jsx)(o.p,{children:"1-2. Using Client"}),"\n",(0,t.jsx)(o.p,{children:"With Client, you can specify the credentials. As opposed to Boto, you do not need to specify the region. Boto3 handles it for you. You can also configure multiple credentials in AWS CLI and choose it to connect to non-default S3 with client. This documentation here is for further details on configuring credentials. This page shows the list of methods you can use with client. Note that download_file method argument is different from the one used with resource."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-python",children:"import boto3\nimport botocore\n\ndef download_file_with_client(access_key, secret_key, bucket_name, key, local_path):\n    client = boto3.client('s3',\\\n                            aws_access_key_id=access_key,\\\n                            aws_secret_access_key=secret_key,\\\n                            )\n    client.download_file(bucket_name, key, local_path)\n    print('Downloaded frile with boto3 client')\n\naccess_key = '<Access Key>'\nsecret_key = '<Secret Key>'\nbucket_name = '<your bucket name>'\nkey = '<folder\u2026/filename>'\nlocal_path = '<e.g. ./log.txt>'\n\ndownload_file_with_client(access_key, secret_key, bucket_name, key, local_path)\n"})}),"\n",(0,t.jsx)(o.p,{children:"(2) Downloading S3 Files With Boto"}),"\n",(0,t.jsx)(o.p,{children:"Boto requires more parameters compared to Boto3 and you need to know a little bit more about the package to make it work."}),"\n",(0,t.jsx)(o.p,{children:"Here are some common errors and how to handle them."}),"\n",(0,t.jsx)(o.p,{children:"Error 1:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"sl.CertificateError: hostname your.bucket.name.s3.amazonaws.com\u2019 doesn\u2019t match either of \u2018*.s3.amazonaws.com\u2019, \u2018s3.amazonaws.com\u2019\n"})}),"\n",(0,t.jsx)(o.p,{children:"You will get this error when your bucket contain \u2018.\u2019 Without specifying OrdinaryCallingFormat() in connect_s3()."}),"\n",(0,t.jsx)(o.p,{children:"Error 2:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"Cannot resolve boto.exception.S3ResponseError: S3ResponseError: 301 Moved Permanently\n"})}),"\n",(0,t.jsx)(o.p,{children:"You will get this error without specifying the host with region if you are not using one of the default US region. Otherwise, it will use s3.amazonaws.com as a host name which assumes your bucket is created in the default US region. Alternatively, you can use boto.s3.connect_to_region() to specify the region."}),"\n",(0,t.jsx)(o.p,{children:"Here is the further reference on Python S3 with Boto."}),"\n",(0,t.jsx)(o.p,{children:"2-1. Using boto.connect_s3() and default credentials"}),"\n",(0,t.jsx)(o.p,{children:"Let\u2019s start with using the default credential configures with AWS CLI. This is the equivalent of the first code in Boto3. You can see how simplified Boto3 is."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-python",children:"import boto\nimport boto.s3.connection\n\ndef download_data(region, bucket_name, key, local_path):\n\n    conn = boto.connect_s3(\n        host='s3-{}.amazonaws.com'.format(region),\\\n        calling_format = boto.s3.connection.OrdinaryCallingFormat())\n\n    bucket = conn.get_bucket(bucket_name)\n    key = bucket.get_key(key)\n    key.get_contents_to_filename(local_path)\n    print('Downloaded File {} to {}'.format(key, local_path))\n\nregion = '<Region e.g. ap-southeast-2>'\nbucket_name = '<your bucket name>'\nkey = '<folder\u2026/filename>'\nlocal_path = '<e.g. ./log.txt>'\n\ndownload_data(region, bucket_name, key, local_path)\n"})}),"\n",(0,t.jsx)(o.p,{children:"2-2. Using boto.connect_s3() with custom credentials"}),"\n",(0,t.jsx)(o.p,{children:"Of course you can configure the credential within the code."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-python",children:"import boto\nimport boto.s3.connection\ndef download_data_connect_s3(access_key, secret_key, region, bucket_name, key, local_path):\n    conn = boto.connect_s3(aws_access_key_id = access_key,\\\n        aws_secret_access_key = secret_key,\\\n        host='s3-{}.amazonaws.com'.format(region),\\\n        calling_format = boto.s3.connection.OrdinaryCallingFormat()\\\n        )\n\n    bucket = conn.get_bucket(bucket_name)\n    key = bucket.get_key(key)\n    key.get_contents_to_filename(local_path)\n    print('Downloaded File {} to {}'.format(key, local_path))\n\nregion = '<Region e.g. ap-southeast-2>'\naccess_key = '<Access Key>'\nsecret_key = '<Secret Key>'\nbucket_name = '<your bucket name>'\nkey = '<folder\u2026/filename>'\nlocal_path = '<e.g. ./log.txt>'\n\ndownload_data_connect_s3(access_key, secret_key, region, bucket_name, key, local_path)\n"})}),"\n",(0,t.jsx)(o.p,{children:"2-3. Using boto.s3.connect_to_region()"}),"\n",(0,t.jsx)(o.p,{children:"The main difference from connect_s3() is that this function takes region as an argument while the region had to be defined in the host url in connect_s3(). This is slightly simpler implementation to specify the region."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-python",children:"import boto\nimport boto.s3.connection\ndef download_data_connect_to_region(region, access_key, secret_key, bucket_name, key, local_path):\n    '''This will use connect_to_region() function in boto'''\n    conn = boto.s3.connect_to_region(\n            region_name=region,\n            aws_access_key_id=access_key,\n            aws_secret_access_key=secret_key,\n            calling_format=boto.s3.connection.OrdinaryCallingFormat()\n            )\n    bucket = conn.get_bucket(bucket_name)\n    key = bucket.get_key(key)\n    key.get_contents_to_filename(local_path)\n    print('Downloaded File {} to {}'.format(key, local_path))\n\nregion = '<Region e.g. ap-southeast-2>'\naccess_key = '<Access Key>'\nsecret_key = '<Secret Key>'\nbucket_name = '<your bucket name>'\nkey = '<folder\u2026/filename>'\nlocal_path = '<e.g. ./log.txt>'\n"})}),"\n",(0,t.jsx)(o.p,{children:"download_data_connect_to_region(region, access_key, secret_key, bucket_name, key, local_path)\nHope this clarifies a few things!"}),"\n",(0,t.jsx)(o.p,{children:"If you are interested in moving data to S3 and Redshift, check out this post: Data Engineering in S3 and Redshift with Python."}),"\n",(0,t.jsx)(o.p,{children:"(2018-02-25)"})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>c});var t=n(96540);const i={},a=t.createContext(i);function s(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:o},e.children)}}}]);
"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[8394],{40364:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"data-engineering","metadata":{"permalink":"/data-engineering/data-engineering","source":"@site/data-engineering/2023-06-08-introduction/index.md","title":"Data Engineering Blogs List","description":"List of Topics","date":"2023-06-08T00:00:00.000Z","tags":[{"label":"data engineering","permalink":"/data-engineering/tags/data-engineering"}],"readingTime":0.09,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"data-engineering","title":"Data Engineering Blogs List","tags":["data engineering"]},"unlisted":false,"nextItem":{"title":"Sending XML Payload and Converting XML Response to JSON with Node.js","permalink":"/data-engineering/data-engineering/data-ingestion/Node-xml-to-json"}},"content":"## List of Topics\\n\\n### ETL\\n\\n- [Informatica](../../docs/category/informatica)\\n\\n- [DataStage](../../docs/category/datastage)\\n\\n- [Talend](../../docs/category/talend)\\n\\n### Data Ingestion\\n\\n- [Data Ingestion](../../docs/category/data-ingestion)"},{"id":"data-engineering/data-ingestion/Node-xml-to-json","metadata":{"permalink":"/data-engineering/data-engineering/data-ingestion/Node-xml-to-json","source":"@site/data-engineering/data-ingestion/2020-04-03-node-xml-to-json.md","title":"Sending XML Payload and Converting XML Response to JSON with Node.js","description":"Here is the quick Node.js example of interacting with a rest API endpoint that takes XML string as a payload and return with XML string as response. Once we get the response, we will convert it to a JSON object.","date":"2020-04-03T00:00:00.000Z","tags":[{"label":"Data Engineering","permalink":"/data-engineering/tags/data-engineering"},{"label":"Data Ingestion","permalink":"/data-engineering/tags/data-ingestion"},{"label":"Node.js","permalink":"/data-engineering/tags/node-js"},{"label":"QAS","permalink":"/data-engineering/tags/qas"},{"label":"XML","permalink":"/data-engineering/tags/xml"}],"readingTime":1.34,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"data-engineering/data-ingestion/Node-xml-to-json","title":"Sending XML Payload and Converting XML Response to JSON with Node.js","tags":["Data Engineering","Data Ingestion","Node.js","QAS","XML"]},"unlisted":false,"prevItem":{"title":"Data Engineering Blogs List","permalink":"/data-engineering/data-engineering"},"nextItem":{"title":"Sending XML Payload and Converting XML Response to JSON with Python","permalink":"/data-engineering/data-engineering/data-ingestion/python-xml-to-json"}},"content":"Here is the quick Node.js example of interacting with a rest API endpoint that takes XML string as a payload and return with XML string as response. \x3c!-- truncate --\x3eOnce we get the response, we will convert it to a JSON object.\\n\\nFor this example, we will use the old-school QAS (Quick Address Search). Although Experian moved to a more modern endpoint EDQ (Experian Data Quality), the endpoint is still available. Note that you need to sign up for a license. The purpose of this post is just to show how to interact with a rest API that uses XML. You can use this example for your own use case.\\n\\nFirs of all, we use two dependencies, `axios` for making API calls and `xml2js` for converting xml string to JSON. Make sure that the xml string doesn\u2019t contain any new line.\\n\\nThen, you can pass xml as a string in the payload. When the response comes back as a xml string, you can convert it to JSON.\\n\\n```js\\nconst axios = require(\\"axios\\");\\nconst parseString = require(\\"xml2js\\").parseString;\\n\\nconst qas_token = \\"<add your token>\\";\\nconst soap_action = \\"http://www.qas.com/OnDemand-2011-03/DoSearch\\";\\nconst xml =\\n  \'<?xml version=\\"1.0\\" encoding=\\"UTF-8\\" ?> \\\\\\n<soapenv:Envelope xmlns:soapenv=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ond=\\"http://www.qas.com/OnDemand-2011-03\\">\\\\\\n  <soapenv:Header>\\\\\\n    <ond:QAQueryHeader />\\\\\\n  </soapenv:Header>\\\\\\n  <soapenv:Body>\\\\\\n    <ond:QASearch>\\\\\\n      <ond:Country>AUS</ond:Country>\\\\\\n      <ond:Engine Flatten=\\"true\\" Intensity=\\"Close\\" PromptSet=\\"Default\\" Threshold=\\"5\\" Timeout=\\"10000\\">Intuitive</ond:Engine>\\\\\\n      <ond:Layout></ond:Layout>\\\\\\n      <ond:Search>101 Colll</ond:Search>\\\\\\n    </ond:QASearch>\\\\\\n  </soapenv:Body>\\\\\\n</soapenv:Envelope>\';\\n\\nconst options = {\\n  method: \\"post\\",\\n  url: \\"https://ws.ondemand.qas.com/ProOnDemand/V3/ProOnDemandService.asmx?WSDL=\\",\\n  headers: {\\n    \\"Content-Type\\": \\"text/xml\\",\\n\\n    \\"Auth-Token\\": qas_token,\\n    SOAPAction: soap_action,\\n  },\\n  data: xml,\\n};\\n\\naxios(options)\\n  .then((response) => {\\n    console.log(response.data);\\n    parseString(response.data, (err, result) => {\\n      console.log(result);\\n      // console.log(JSON.stringify(result[\'soap:Envelope\'][\'soap:Body\']))\\n      var searchResult =\\n        result[\\"soap:Envelope\\"][\\"soap:Body\\"][0][\\"QASearchResult\\"][0][\\n          \\"QAPicklist\\"\\n        ][0][\\"PicklistEntry\\"];\\n      searchResult.forEach((item) => {\\n        console.dir(item);\\n      });\\n    });\\n  })\\n  .catch((err) => {\\n    console.log(err);\\n  });\\n```"},{"id":"data-engineering/data-ingestion/python-xml-to-json","metadata":{"permalink":"/data-engineering/data-engineering/data-ingestion/python-xml-to-json","source":"@site/data-engineering/data-ingestion/2020-04-03-python-xml-to-json.md","title":"Sending XML Payload and Converting XML Response to JSON with Python","description":"If you need to interact with a REST endpoint that takes a XML string as a payload and returns another XML string as a response, this is the quick guide if you want to use Python.","date":"2020-04-03T00:00:00.000Z","tags":[{"label":"Data Engineering","permalink":"/data-engineering/tags/data-engineering"},{"label":"Data Ingestion","permalink":"/data-engineering/tags/data-ingestion"},{"label":"Python","permalink":"/data-engineering/tags/python"},{"label":"QAS","permalink":"/data-engineering/tags/qas"},{"label":"XML","permalink":"/data-engineering/tags/xml"}],"readingTime":0.915,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"data-engineering/data-ingestion/python-xml-to-json","title":"Sending XML Payload and Converting XML Response to JSON with Python","tags":["Data Engineering","Data Ingestion","Python","QAS","XML"]},"unlisted":false,"prevItem":{"title":"Sending XML Payload and Converting XML Response to JSON with Node.js","permalink":"/data-engineering/data-engineering/data-ingestion/Node-xml-to-json"},"nextItem":{"title":"Downloading All Public GitHub Gist Files","permalink":"/data-engineering/data-engineering/data-ingestion/download-github-gist"}},"content":"If you need to interact with a REST endpoint that takes a XML string as a payload and returns another XML string as a response, this is the quick guide if you want to use Python.\x3c!-- truncate --\x3e\\n\\nIf you want to do it with Node.js, you can check out the post here.\\n\\nJust like the example with Node.js, we will use QAS endpoint (see more info on this in the intro of the node.js version post).\\n\\nThe idea is very simple. We will pass the XML payload as a string and convert the response XML string to a dictionary by using xmltodict and parse it to JSON. For an API call, we use the requests module.\\n\\n```python\\nimport requests, json, xmltodict\\n\\nrequest_url = \'https://ws.ondemand.qas.com/ProOnDemand/V3/ProOnDemandService.asmx?WSDL=\'\\nqas_token = \'<add your token>\'\\nsoap_action = \'http://www.qas.com/OnDemand-2011-03/DoSearch\'\\nheaders = {\\n  \'Content-Type\':\'text/xml\',\\n  \'Auth-Token\':qas_token,\\n  \'SOAPAction\': soap_action\\n  }\\n\\nxml = \'<?xml version=\\"1.0\\" encoding=\\"UTF-8\\" ?>\\\\\\n<soapenv:Envelope xmlns:soapenv=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ond=\\"http://www.qas.com/OnDemand-2011-03\\">\\\\\\n  <soapenv:Header>\\\\\\n    <ond:QAQueryHeader />\\\\\\n  </soapenv:Header>\\\\\\n  <soapenv:Body>\\\\\\n    <ond:QASearch>\\\\\\n      <ond:Country>AUS</ond:Country>\\\\\\n      <ond:Engine Flatten=\\"true\\" Intensity=\\"Close\\" PromptSet=\\"Default\\" Threshold=\\"5\\" Timeout=\\"10000\\">Intuitive</ond:Engine>\\\\\\n      <ond:Layout></ond:Layout>\\\\\\n      <ond:Search>101 Colll</ond:Search>\\\\\\n    </ond:QASearch>\\\\\\n  </soapenv:Body>\\\\\\n</soapenv:Envelope>\'\\n\\n\\nr = requests.post(request_url, data=xml, headers=headers)\\njson_results = json.dumps(xmltodict.parse(r.text))\\nprint(json_results)\\n```\\n\\nThat\u2019s it. Pretty easy!"},{"id":"data-engineering/data-ingestion/download-github-gist","metadata":{"permalink":"/data-engineering/data-engineering/data-ingestion/download-github-gist","source":"@site/data-engineering/data-ingestion/2019-07-25-download-github-gist.md","title":"Downloading All Public GitHub Gist Files","description":"I used to use plug-ins to render code blocks for this blog. Yesterday, I decided to move all the code into GitHub Gist and inject them from there.  Using a WordPress plugin to render code blocks can be problematic when update happens. Plugins might not be up to date. It can break the site as most of the plugins are server-site rendering. That is exactly what happened to me with WordPress 5.2 update.","date":"2019-07-25T00:00:00.000Z","tags":[{"label":"Data Engineering","permalink":"/data-engineering/tags/data-engineering"},{"label":"Data Ingestion","permalink":"/data-engineering/tags/data-ingestion"},{"label":"API Data Ingestion","permalink":"/data-engineering/tags/api-data-ingestion"},{"label":"GitHub Gist","permalink":"/data-engineering/tags/git-hub-gist"},{"label":"PythonL","permalink":"/data-engineering/tags/python-l"}],"readingTime":1.405,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"data-engineering/data-ingestion/download-github-gist","title":"Downloading All Public GitHub Gist Files","tags":["Data Engineering","Data Ingestion","API Data Ingestion","GitHub Gist","PythonL"]},"unlisted":false,"prevItem":{"title":"Sending XML Payload and Converting XML Response to JSON with Python","permalink":"/data-engineering/data-engineering/data-ingestion/python-xml-to-json"},"nextItem":{"title":"Loading Data Frame to Relational Database with R","permalink":"/data-engineering/data-engineering/data-ingestion/loading-data-frame-to-relational-database-with-r"}},"content":"I used to use plug-ins to render code blocks for this blog. Yesterday, I decided to move all the code into GitHub Gist and inject them from there. \x3c!-- truncate --\x3e Using a WordPress plugin to render code blocks can be problematic when update happens. Plugins might not be up to date. It can break the site as most of the plugins are server-site rendering. That is exactly what happened to me with WordPress 5.2 update.\\n\\nNow I am in the process of moving all the code examples to GitHub Gist. In this way, I don\u2019t need to worry about plugins and give greater accessibility to those snippets.\\n\\nTo download all the files from Git Gist, you need to write a small code. This cannot be done from UI. Luckily, GitHub Gist version 3 API is pretty nice. This task can be done easily.\\n\\nHere is the example of Python code that downloads all my GitHub Gist files. I\u2019m happy for you to use or modify any code snippets for your own projects. You can also use it for your own gists by changing the username.\\n\\n```python\\n# Download all public gist for a user\\n# by using v3 gist api (https://developer.github.com/v3/gists/)\\n\\nimport requests, json\\nheaders = {\\"content-type\\" : \\"application/json\\"}\\nurl = \'https://api.github.com/users/mydatahack/gists\'\\nr = requests.get(url, headers = headers)\\nmetadata_file = \'./data/my_gist_list.json\'\\n# Getting metadata\\nprettyJson = json.dumps(r.json(), indent=4, sort_keys=True)\\nf = open(metadata_file, \'w\')\\nf.write(prettyJson)\\n\\nprint(\'Metadata obtained as {}\'.format(metadata_file))\\n\\n# Downloading files\\ndata = r.json()\\ncounter = 0\\nfor i in data:\\n    files_node = i[\'files\']\\n    file_name = [k for k in files_node][0]\\n    r = requests.get(files_node[file_name][\'raw_url\'])\\n    f = open(\'./data/{}\'.format(file_name), \'w\')\\n    f.write(r.text)\\n    f.close()\\n    print(\'Downloaded {}\'.format(file_name))\\n    counter += 1\\n\\nprint(\'{} files successfully downloaded.\'.format(counter))\\n```"},{"id":"data-engineering/data-ingestion/loading-data-frame-to-relational-database-with-r","metadata":{"permalink":"/data-engineering/data-engineering/data-ingestion/loading-data-frame-to-relational-database-with-r","source":"@site/data-engineering/data-ingestion/2019-06-13-df-to-rd-with-r.md","title":"Loading Data Frame to Relational Database with R","description":"Once you create a data frame with R, you may need to load it to a relational database for data persistence. You might have a data transformation batch job written in R and want to load database in a certain frequency.","date":"2019-06-13T00:00:00.000Z","tags":[{"label":"Data Engineering","permalink":"/data-engineering/tags/data-engineering"},{"label":"Data Ingestion","permalink":"/data-engineering/tags/data-ingestion"},{"label":"Database","permalink":"/data-engineering/tags/database"},{"label":"ODBC","permalink":"/data-engineering/tags/odbc"},{"label":"R","permalink":"/data-engineering/tags/r"},{"label":"RODBC","permalink":"/data-engineering/tags/rodbc"},{"label":"Truncate and Load","permalink":"/data-engineering/tags/truncate-and-load"}],"readingTime":1.785,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"data-engineering/data-ingestion/loading-data-frame-to-relational-database-with-r","title":"Loading Data Frame to Relational Database with R","tags":["Data Engineering","Data Ingestion","Database","ODBC","R","RODBC","Truncate and Load"]},"unlisted":false,"prevItem":{"title":"Downloading All Public GitHub Gist Files","permalink":"/data-engineering/data-engineering/data-ingestion/download-github-gist"},"nextItem":{"title":"Exporting LaunchDarkly Flag List into a CSV File with Python","permalink":"/data-engineering/data-engineering/data-ingestion/export-launch-darkly-flags"}},"content":"Once you create a data frame with R, you may need to load it to a relational database for data persistence. \x3c!--truncate--\x3eYou might have a data transformation batch job written in R and want to load database in a certain frequency.\\n\\nHere, I created a function to load data into a relational database. I opted to use RODBC because it is probably the easiest way to interact with databases with R. As long as you install and configure ODBC for whatever database you are using, this should work.\\n\\nRODBC has many functions that does database operations for you. The insertion is taken care of by the sqlSave method. RODBC has fantastic documentation so that you can check what options are available.\\n\\nFunction Parameters\\n\\nThe function below takes 6 parameters.\\n\\ndsn: data source name that you configured for ODBC.\\n\\nuser: database user name.\\n\\npw: database password.\\n\\ntableName: Name of the table including the schema\\n\\ndf: R data frame\\n\\ncolumnTypes: List of SQL column types.\\n\\nUsage\\n\\nCall the function like this:\\n\\n```r\\ndsn = \\"my-database-dsn\\"\\ndbUser = \\"user\\"\\ndbPass = \\"password\\"\\ntableName = \\"datamart.customer_dim\\"\\ndf = dataFrameCreated\\ncolumnTypes <- list(account_name=\\"varchar(255)\\", customer_id=\\"int\\", last_updated=\\"date\\")\\n\\ndbLoader(dsn, dbUser, dbPass, \\"usermanaged.session_budget_2018\\", dfTransformed, columnTypes)\\n```\\n\\nFunction: dbLoader\\n\\nI could probably make drop table SQL statement as a parameter so that it can be used for any database. In this function, it is hard coded. The statement should work for most databases. Most of databases have the same drop statement syntax.\\n\\nThe db load pattern is the classic truncate and load. You can customise it to make it to upsert.\\n\\n```r\\n# Arguments - dsn: data source name for ODBC, user: db username, pw: password, df: Input DataFrame,\\n#             tableName: Output table name, columnTypes: list of column definition\\n\\ndbLoader <- function(dsn, user, pw, tableName, df, columnTypes) {\\n\\n  channel <- odbcConnect(dsn, uid=user, pwd=pw)\\n  print(\'Database connection initiated.\')\\n  tableName <- tableName\\n  dropSQL <- sprintf(\'Drop Table If Exists %s;\', tableName)\\n\\n  # Drop Table If exists\\n  sqlQuery(channel, dropSQL)\\n  print(sprintf(\'Executed %s\', dropSQL))\\n\\n  # Insert Data\\n  sqlSave(channel, df, tablename=tableName, fast=T, colnames=F, rownames = F, varTypes=columnTypes)\\n  print(sprintf(\'DataFrame has been inserted into %s\', tableName ))\\n\\n  # Close DB connection\\n  close(channel)\\n  print(\'DB connection closed.\')\\n}\\n```"},{"id":"data-engineering/data-ingestion/export-launch-darkly-flags","metadata":{"permalink":"/data-engineering/data-engineering/data-ingestion/export-launch-darkly-flags","source":"@site/data-engineering/data-ingestion/2019-06-12-export-launch-darkly-flags.md","title":"Exporting LaunchDarkly Flag List into a CSV File with Python","description":"At the moment, LaunchDarkly does not have functionality to export a list of flags as csv or excel file. This can change very near future (it may already have the functionality by the time you are reading this post). The workaround is to use API to ingest the data.","date":"2019-06-12T00:00:00.000Z","tags":[{"label":"Data Engineering","permalink":"/data-engineering/tags/data-engineering"},{"label":"Data Ingestion","permalink":"/data-engineering/tags/data-ingestion"},{"label":"LaunchDarkly","permalink":"/data-engineering/tags/launch-darkly"},{"label":"Python","permalink":"/data-engineering/tags/python"}],"readingTime":1.535,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"data-engineering/data-ingestion/export-launch-darkly-flags","title":"Exporting LaunchDarkly Flag List into a CSV File with Python","tags":["Data Engineering","Data Ingestion","LaunchDarkly","Python"]},"unlisted":false,"prevItem":{"title":"Loading Data Frame to Relational Database with R","permalink":"/data-engineering/data-engineering/data-ingestion/loading-data-frame-to-relational-database-with-r"}},"content":"At the moment, LaunchDarkly does not have functionality to export a list of flags as csv or excel file. This can change very near future (it may already have the functionality by the time you are reading this post). The workaround is to use API to ingest the data. \x3c!--truncate--\x3e\\n\\nHere is the quick and dirty Python script to do it. You can replace the API key and endpoint and use it straight away!\\n\\nI included epoch time conversion functions, too.\\n\\nThe catch is that I am not sure about the maximum number of flags we can get. I had about 140 flags and there was no pagenation. Documentation doesn\u2019t really mention it, either. So, if you see the pagination in JSON file, you need to do a loop to get the next page.\\n\\n```python\\nimport json, requests\\nimport time\\nfrom time import strptime, strftime, mktime, gmtime, localtime\\nurl = \'https://app.launchdarkly.com/api/v2/flags/default?env=production\'\\ntoken = \\"your api token\\"\\nheaders = {\\"Authorization\\": token, \'Content-Type\':\'application/json\'}\\n\\n\\nr = requests.get(url, headers=headers)\\nprettyJson = json.dumps(r.json(), indent=4, sort_keys=True)\\nprint(r.status_code)\\n# print(r.headers)\\n# print(prettyJson)\\n\\nf = open(\'./data/feature_flag_list.json\', \'w\')\\nf.write(prettyJson)\\nprint(\'file feature_flag_list.json created!\')\\nprint(\'Starting transformation\')\\n\\ndef epoch_to_stamp(epochtime):\\n    \'\'\'This function converts epochtime to timestamp\'\'\'\\n    return time.strftime(\'%Y-%m-%d %H:%M:%S\', time.gmtime(epochtime/1000.0))\\n\\ndef convert_epoch_to_local(epoch):\\n    \'\'\'Converting epoch to local time\'\'\'\\n    return strftime(\'%Y-%m-%d %H:%M:%S\', localtime(epoch))\\n\\nfeatureFlagList = []\\nrepsonse = r.json()\\nitems = repsonse[\'items\']\\nfor i in items:\\n  tmp = []\\n  tmp.append(i[\\"name\\"])\\n  tmp.append(i[\\"key\\"])\\n  tmp.append(i[\\"kind\\"])\\n  tmp.append(epoch_to_stamp(i[\\"creationDate\\"]))\\n  tmp.append(epoch_to_stamp(i[\\"environments\\"][\\"production\\"][\\"lastModified\\"]))\\n  tmp.append(str(i[\\"environments\\"][\\"production\\"][\\"on\\"]))\\n  try:\\n    tmp.append(i[\\"_maintainer\\"][\\"email\\"])\\n  except KeyError:\\n    tmp.append(\'NA\')\\n  featureFlagList.append(tmp)\\n\\nheaders = [\'name\',\'key\',\'kind\',\'creationDate\',\'lastModified\',\'flagValue\', \'email\']\\n\\ncsv = open(\'./data/feature_flag_list.csv\', \'w\')\\n\\ncsv.write(\',\'.join(headers)+\'\\\\n\')\\nfor i in featureFlagList:\\n  csv.write(\',\'.join(i)+\'\\\\n\')\\n\\nprint(\'feature_flag_list.csv created!\')\\ncsv.close()\\n```\\n\\nBut, wait. I\u2019ve got something even better.\\n\\nI created a React Feature Flag dashboard with TypeScript with AWS Cognito authentication. You can clone the repo and add the appropriate config file as in README. Then, you will have an awesome serverless web dashboard to visualise your flags.\\n\\nCheck out the repo here: launch-darkly-flag-dashboard"}]}}')}}]);
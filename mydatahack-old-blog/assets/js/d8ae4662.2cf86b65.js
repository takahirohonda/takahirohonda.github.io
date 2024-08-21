"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[7347],{50142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(74848),i=n(28453);const o={sidebar_position:24},s="How To Ingest Data From Liveperson With Python",r={id:"data-ingestion/liveperson-python",title:"How To Ingest Data From Liveperson With Python",description:"Engagment History API let you grab livechat interaction data from Liveperson. It is based on the REST architecture and uses OAuth1.0. You first need to retrieve API Keys. In this example, I am using the requests and requests_oauthlib modules to make API calls from Python. Liveperson offers a good code examples and this is a good place to start.",source:"@site/docs/data-ingestion/24.liveperson-python.md",sourceDirName:"data-ingestion",slug:"/data-ingestion/liveperson-python",permalink:"/docs/data-ingestion/liveperson-python",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"tutorialSidebar",previous:{title:"How To Get Data From Liveperson And Create Aggregated Table With R",permalink:"/docs/data-ingestion/liveperson-data-r"},next:{title:"How To Get Data From SharePoint With Python",permalink:"/docs/data-ingestion/sharepoint-python"}},p={},c=[];function d(e){const t={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"how-to-ingest-data-from-liveperson-with-python",children:"How To Ingest Data From Liveperson With Python"}),"\n",(0,a.jsx)(t.p,{children:"Engagment History API let you grab livechat interaction data from Liveperson. It is based on the REST architecture and uses OAuth1.0. You first need to retrieve API Keys. In this example, I am using the requests and requests_oauthlib modules to make API calls from Python. Liveperson offers a good code examples and this is a good place to start."}),"\n",(0,a.jsx)(t.p,{children:"The resulting JSON file include all the attributes associated with live chat activities (like agent stats, customer feedback, transcripts, customer\u2019s behaviour on the website and so on). To convert it into structured tables, you need to create a data model. CSV files can be inserted into a database."}),"\n",(0,a.jsx)(t.p,{children:"If you are interested in using Liveperson with R, check out this post: How To Get Liveperson Data With R."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Data Model"})}),"\n",(0,a.jsx)(t.p,{children:"In the info node, you can find \u2018engagementId\u2019. All the tables can be tied with this. I also think it is a good idea to bring \u2018startTime\u2019 from the info node into all the tables. Depending on how your Liveperson is configured, the number of tables would be different. But, you always need a base table which contains unique engagement id per row so that you can create one to many relationships."}),"\n",(0,a.jsx)(t.p,{children:"In this example, I choose interaction and post chat survey tables for simplification. The interaction table has a primary key engagement_id. Post chat survey typically contains multiple questions. This means one interaction can have many post chat survey records. We will add the engagement_id as the foreign key to the interaction table to handle this one-to-many relationship. By using the same method, you can create a data model for all the attributes."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"img",src:n(259).A+"",width:"497",height:"264"})}),"\n",(0,a.jsx)(t.p,{children:"Gocha!"}),"\n",(0,a.jsx)(t.p,{children:"The start and end date parameters are in epochtime millisecond. The function convert_to_epochtime converts date in string into epochtime.\nSome of the timestamp fields has epochtime. I created a function to convert epochtime back to timestamp.\nAPI limit is 100 records. We need to increment offset parameter in while loop until we get all the records.\nSome field does not exist all the time, which requires you to handle the key error with try-except (for example, \u2018mcs\u2019 in the interaction node).\nIt is better to use pipe instead of comma because some values contain comma.\nLet\u2019s put them together. Here it comes!"}),"\n",(0,a.jsx)(t.p,{children:"Code"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import requests\nfrom requests_oauthlib import OAuth1\nfrom requests_oauthlib import OAuth1Session\nimport time\nimport json\nfrom datetime import datetime\nimport sys\n\n# (1) Enter date_string in 2000-01-01 format and convert to epochtime millisecond\ndef convert_to_epochtime(date_string):\n    try:\n        epoch = int(time.mktime(time.strptime(date_string, \'%Y-%m-%d\'))) * 1000\n        return epoch\n    except ValueError:\n        print(\'Invalid string format. Make sure to use %Y-%m-%d\')\n        quit()\n\n# (2) This function converts epochtime to timestamp\ndef epoch_to_stamp(epochtime):\n    return time.strftime(\'%Y-%m-%d %H:%M:%S\', time.gmtime(epochtime/1000.0))\n\n# (3) create a table according to header and table_name\ndef create_table(header, table_name, staging_table_lst):\n    write_file = \'./\' + table_name + ".csv"\n    file = open(write_file, \'w\')\n    file.write(\'|\'.join(header)+ \'\\n\')\n\n    for i in staging_table_lst:\n        for j in range(0, len(i)):\n            file.write(\'|\'.join(i[j]) + \'\\n\')\n    print("Created {}.csv".format(table_name))\n\n# (4) Methods to create tables\ndef staging_interaction(results):\n    \'\'\'This method is for staging interaction table per export\'\'\'\n    outcome = []\n    for i in results[\'interactionHistoryRecords\']:\n        tmp = []\n        tmp.append(str(i["info"][\'engagementId\']))\n        tmp.append(str(i[\'info\'][\'endReason\']))\n        try:\n            tmp.append(str(i["info"]["mcs"]))\n        except KeyError:\n            tmp.append(\'\')\n        tmp.append(str(i["info"]["agentFullName"]))\n        tmp.append(str(i["info"]["isAgentSurvey"]))\n        tmp.append(str(i["info"]["agentGroupId"]))\n        tmp.append(str(i["info"]["startReasonDesc"]))\n        try:\n            tmp.append(str(i["info"]["chatStartUrl"]))\n        except KeyError:\n            tmp.append(\'\')\n        try:\n            tmp.append(str(i["info"]["chatStartPage"]))\n        except KeyError:\n            tmp.append(\'\')\n        tmp.append(str(i["info"]["engagementSequence"]))\n        tmp.append(str(i["info"]["chatRequestedTime"][0:23]))\n        tmp.append(str(i["info"]["isPostChatSurvey"]))\n        tmp.append(str(i["info"]["skillId"]))\n        try:\n            tmp.append(str(i["info"]["alertedMCS"]))\n        except KeyError:\n            tmp.append(\'\')\n        tmp.append(str(i["info"]["agentNickName"]))\n        tmp.append(str(i["info"]["endReasonDesc"]))\n        tmp.append(str(i["info"]["endTime"][0:23]))\n        tmp.append(epoch_to_stamp(i["info"]["startTimeL"]))\n        tmp.append(str(i["info"]["skillName"]))\n        tmp.append(epoch_to_stamp(i["info"]["endTimeL"]))\n        tmp.append(str(i["info"]["ended"]))\n        tmp.append(str(i["info"]["isPreChatSurvey"]))\n        tmp.append(i["info"]["visitorId"])\n        try:\n            tmp.append(i["info"]["visitorName"])\n        except KeyError:\n            tmp.append(\'\')\n        tmp.append(str(i["info"]["isInteractive"]))\n        tmp.append(str(i["info"]["agentId"]))\n        tmp.append(str(i["info"]["startReason"]))\n        tmp.append(str(i["info"]["isPartial"]))\n        tmp.append(str(i["info"]["agentGroupName"]))\n        tmp.append(str(i["info"]["duration"]))\n        tmp.append(str(i["info"]["sharkEngagementId"]))\n        tmp.append(str(i["info"]["startTime"][0:23]))\n        tmp.append(str(i["info"]["accountId"]))\n        tmp.append(str(i["info"]["interactive"]))\n        tmp.append(str(i["info"]["engagementSet"]))\n        tmp.append(str(i["info"]["agentLoginName"]))\n        try:\n            tmp.append(str(i["info"]["chatMCS"]))\n        except KeyError:\n            tmp.append(\'\')\n        tmp.append(str(i["info"]["chatDataEnriched"]))\n        tmp.append(str(i["info"]["channel"]))\n        outcome.append(tmp)\n    return outcome\n\ndef create_interaction(lst):\n    \'\'\'This method will create a table\'\'\'\n    # Create Header\n    header = ["engagementId","endReason", "mcs", "agentFullName", "isAgentSurvey", \\\n    "agentGroupId", "startReasonDesc", "chatStartUrl", "chatStartPage", "engagementSequence",\\\n    "chatRequestedTime", "isPostChatSurvey", "skillId", "alertedMCS", "agentNickName",\\\n    "endReasonDesc","endTime","startTimeL","skillName","endTimeL", "ended", "isPreChatSurvey",\\\n    "visitorId", "isInteractive", "agentId", "startReason", "isPartial", "agentGroupName", \\\n    "duration", "sharkEngagementId", "startTime", "accountId", "interactive","engagementSet",\\\n    "agentLoginName", "chatMCS", "chatDataEnriched", "channel"]\n\n    create_table(header, "interaction", lst)\n\ndef staging_postchat(results):\n    \'\'\'This method is for staging campaign table per export\'\'\'\n    outcome = []\n    for i in results[\'interactionHistoryRecords\']:\n        try:\n            survey = i["surveys"]\n            try:\n                post_chat = survey[\'postChat\']\n                for j in post_chat:\n                    tmp = []\n                    tmp.append(i["info"][\'engagementId\'])\n                    tmp.append(i["info"][\'startTime\'][0:23])\n                    tmp.append(j["scope"])\n                    tmp.append(str(j["surveyID"]))\n                    tmp.append(j["displayName"])\n                    tmp.append(str(j["questionID"]))\n                    tmp.append(str(epoch_to_stamp(int(j["timeL"]))))\n                    tmp.append((j["value"].replace(\'|\', \'\')).replace(\'\\\\\', \'\'))\n                    tmp.append(j["time"][0:23])\n                    tmp.append(j["name"])\n                    outcome.append(tmp)\n            except KeyError:\n                # print("No postChat record exists at {}".format(i["info"][\'engagementId\']))\n                pass\n        except KeyError:\n            pass\n    return outcome\n\ndef create_postchat(lst):\n    \'\'\'This method will create a table\'\'\'\n    # Create Header\n    header = ["engagementId", "startTime","scope", "surveyID", "displayName", "source", \\\n    "questionID", "timeL", "value", "time", "name"]\n\n    create_table(header, "surveys_postchat", lst)\n\n# (5) Main method\ndef main(consumer_key, consumer_secret, access_token, \\\n                access_token_secret, start_date, end_date):\n    \'\'\'This function will return json file for LivePerson Data\n        during the specified period of time\'\'\'\n\n    # Convert start_date and end_date to epoch milliseconds\n    start = convert_to_epochtime(start_date)\n    end = convert_to_epochtime(end_date)\n\n    # create a client to recieve data\n    client = requests.session()\n\n    # set header, body and parameters\n    post_header = {\'content-type\': \'application/json\'}\n    # params = {\'offset\': \'0\'}\n    body = {\'start\':{\'from\': start, \'to\': end}}\n\n    # Create an auth request\n    oauth = OAuth1(consumer_key, \\\n            client_secret=consumer_secret, \\\n            resource_owner_key=access_token, \\\n            resource_owner_secret=access_token_secret, \\\n            signature_method=\'HMAC-SHA1\', \\\n            signature_type=\'auth_header\')\n\n    offset = 0\n    count = 100\n    record_no = 1\n    dir_path = \'./\'\n\n    # Tables\n    interaction = []\n    postchat = []\n\n    while count == 100:\n        # Define URI for API call with dynamic offset value\n        baseURI = \'https://sy.enghist.liveperson.net/interaction_history/api/account/<Account No>\\\n                            /interactions/search?offset={}&limit=100\'.format(str(offset))\n        response = client.post(url=baseURI, headers=post_header, data=json.dumps(body), auth=oauth)\n        results = json.loads(response.content.decode())\n        # create tables)\n        interaction.append(staging_interaction(results))\n        postchat.append(staging_postchat(results))\n\n        # convert to pretty json format\n        pretty = json.dumps(results, indent=4)\n\n        file_name = "/{}_{}.txt".format(start_date,  str(record_no))\n        file_name_path = dir_path + file_name\n        with open(file_name_path, "w") as text_file:\n            text_file.write(pretty)\n        print("Created file No.{}".format(str(record_no)))\n        count = len(results[\'interactionHistoryRecords\'])\n        offset += 100\n        record_no += 1\n\n    # Create Tables\n    create_interaction(interaction)\n    create_postchat(postchat)\n\n# (6) Execute\nif __name__ == \'__main__\':\n\n    consumer_key = sys.argv[1]\n    consumer_secret = sys.argv[2]\n    access_token = sys.argv[3]\n    access_token_secret = sys.argv[4]\n    start_date = sys.argv[5]\n    end_date = sys.argv[6]\n\n    main(consumer_key, consumer_secret, access_token, \\\n    access_token_secret, start_date, end_date)\n'})}),"\n",(0,a.jsx)(t.p,{children:"(2017-11-18)"})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},259:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/output-example-3734e97b6457e8fcc783058ba6e5f1d0.webp"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(96540);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);
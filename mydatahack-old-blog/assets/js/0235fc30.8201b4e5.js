"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[3301],{88429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=n(74848),i=n(28453);const o={slug:"data-engineering/data-ingestion/download-github-gist",title:"Downloading All Public GitHub Gist Files",tags:["Data Engineering","Data Ingestion","API Data Ingestion","GitHub Gist","PythonL"]},s=void 0,r={permalink:"/data-engineering/data-engineering/data-ingestion/download-github-gist",source:"@site/data-engineering/data-ingestion/2019-07-25-download-github-gist.md",title:"Downloading All Public GitHub Gist Files",description:"I used to use plug-ins to render code blocks for this blog. Yesterday, I decided to move all the code into GitHub Gist and inject them from there.  Using a WordPress plugin to render code blocks can be problematic when update happens. Plugins might not be up to date. It can break the site as most of the plugins are server-site rendering. That is exactly what happened to me with WordPress 5.2 update.",date:"2019-07-25T00:00:00.000Z",tags:[{label:"Data Engineering",permalink:"/data-engineering/tags/data-engineering"},{label:"Data Ingestion",permalink:"/data-engineering/tags/data-ingestion"},{label:"API Data Ingestion",permalink:"/data-engineering/tags/api-data-ingestion"},{label:"GitHub Gist",permalink:"/data-engineering/tags/git-hub-gist"},{label:"PythonL",permalink:"/data-engineering/tags/python-l"}],readingTime:1.405,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"data-engineering/data-ingestion/download-github-gist",title:"Downloading All Public GitHub Gist Files",tags:["Data Engineering","Data Ingestion","API Data Ingestion","GitHub Gist","PythonL"]},unlisted:!1,prevItem:{title:"Sending XML Payload and Converting XML Response to JSON with Python",permalink:"/data-engineering/data-engineering/data-ingestion/python-xml-to-json"},nextItem:{title:"Loading Data Frame to Relational Database with R",permalink:"/data-engineering/data-engineering/data-ingestion/loading-data-frame-to-relational-database-with-r"}},d={authorsImageUrls:[]},l=[];function g(e){const t={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"I used to use plug-ins to render code blocks for this blog. Yesterday, I decided to move all the code into GitHub Gist and inject them from there.  Using a WordPress plugin to render code blocks can be problematic when update happens. Plugins might not be up to date. It can break the site as most of the plugins are server-site rendering. That is exactly what happened to me with WordPress 5.2 update."}),"\n",(0,a.jsx)(t.p,{children:"Now I am in the process of moving all the code examples to GitHub Gist. In this way, I don\u2019t need to worry about plugins and give greater accessibility to those snippets."}),"\n",(0,a.jsx)(t.p,{children:"To download all the files from Git Gist, you need to write a small code. This cannot be done from UI. Luckily, GitHub Gist version 3 API is pretty nice. This task can be done easily."}),"\n",(0,a.jsx)(t.p,{children:"Here is the example of Python code that downloads all my GitHub Gist files. I\u2019m happy for you to use or modify any code snippets for your own projects. You can also use it for your own gists by changing the username."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# Download all public gist for a user\n# by using v3 gist api (https://developer.github.com/v3/gists/)\n\nimport requests, json\nheaders = {\"content-type\" : \"application/json\"}\nurl = 'https://api.github.com/users/mydatahack/gists'\nr = requests.get(url, headers = headers)\nmetadata_file = './data/my_gist_list.json'\n# Getting metadata\nprettyJson = json.dumps(r.json(), indent=4, sort_keys=True)\nf = open(metadata_file, 'w')\nf.write(prettyJson)\n\nprint('Metadata obtained as {}'.format(metadata_file))\n\n# Downloading files\ndata = r.json()\ncounter = 0\nfor i in data:\n    files_node = i['files']\n    file_name = [k for k in files_node][0]\n    r = requests.get(files_node[file_name]['raw_url'])\n    f = open('./data/{}'.format(file_name), 'w')\n    f.write(r.text)\n    f.close()\n    print('Downloaded {}'.format(file_name))\n    counter += 1\n\nprint('{} files successfully downloaded.'.format(counter))\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(96540);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);
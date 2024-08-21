"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[2279],{45303:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=t(74848),o=t(28453);const s={slug:"data-engineering/data-ingestion/Node-xml-to-json",title:"Sending XML Payload and Converting XML Response to JSON with Node.js",tags:["Data Engineering","Data Ingestion","Node.js","QAS","XML"]},i=void 0,r={permalink:"/mydatahack-old-blog/data-engineering/data-engineering/data-ingestion/Node-xml-to-json",source:"@site/data-engineering/data-ingestion/2020-04-03-node-xml-to-json.md",title:"Sending XML Payload and Converting XML Response to JSON with Node.js",description:"Here is the quick Node.js example of interacting with a rest API endpoint that takes XML string as a payload and return with XML string as response. Once we get the response, we will convert it to a JSON object.",date:"2020-04-03T00:00:00.000Z",tags:[{label:"Data Engineering",permalink:"/mydatahack-old-blog/data-engineering/tags/data-engineering"},{label:"Data Ingestion",permalink:"/mydatahack-old-blog/data-engineering/tags/data-ingestion"},{label:"Node.js",permalink:"/mydatahack-old-blog/data-engineering/tags/node-js"},{label:"QAS",permalink:"/mydatahack-old-blog/data-engineering/tags/qas"},{label:"XML",permalink:"/mydatahack-old-blog/data-engineering/tags/xml"}],readingTime:1.34,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"data-engineering/data-ingestion/Node-xml-to-json",title:"Sending XML Payload and Converting XML Response to JSON with Node.js",tags:["Data Engineering","Data Ingestion","Node.js","QAS","XML"]},unlisted:!1,prevItem:{title:"Data Engineering Blogs List",permalink:"/mydatahack-old-blog/data-engineering/data-engineering"},nextItem:{title:"Sending XML Payload and Converting XML Response to JSON with Python",permalink:"/mydatahack-old-blog/data-engineering/data-engineering/data-ingestion/python-xml-to-json"}},l={authorsImageUrls:[]},d=[];function c(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Here is the quick Node.js example of interacting with a rest API endpoint that takes XML string as a payload and return with XML string as response. Once we get the response, we will convert it to a JSON object."}),"\n",(0,a.jsx)(n.p,{children:"For this example, we will use the old-school QAS (Quick Address Search). Although Experian moved to a more modern endpoint EDQ (Experian Data Quality), the endpoint is still available. Note that you need to sign up for a license. The purpose of this post is just to show how to interact with a rest API that uses XML. You can use this example for your own use case."}),"\n",(0,a.jsxs)(n.p,{children:["Firs of all, we use two dependencies, ",(0,a.jsx)(n.code,{children:"axios"})," for making API calls and ",(0,a.jsx)(n.code,{children:"xml2js"})," for converting xml string to JSON. Make sure that the xml string doesn\u2019t contain any new line."]}),"\n",(0,a.jsx)(n.p,{children:"Then, you can pass xml as a string in the payload. When the response comes back as a xml string, you can convert it to JSON."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const axios = require("axios");\nconst parseString = require("xml2js").parseString;\n\nconst qas_token = "<add your token>";\nconst soap_action = "http://www.qas.com/OnDemand-2011-03/DoSearch";\nconst xml =\n  \'<?xml version="1.0" encoding="UTF-8" ?> \\\n<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ond="http://www.qas.com/OnDemand-2011-03">\\\n  <soapenv:Header>\\\n    <ond:QAQueryHeader />\\\n  </soapenv:Header>\\\n  <soapenv:Body>\\\n    <ond:QASearch>\\\n      <ond:Country>AUS</ond:Country>\\\n      <ond:Engine Flatten="true" Intensity="Close" PromptSet="Default" Threshold="5" Timeout="10000">Intuitive</ond:Engine>\\\n      <ond:Layout></ond:Layout>\\\n      <ond:Search>101 Colll</ond:Search>\\\n    </ond:QASearch>\\\n  </soapenv:Body>\\\n</soapenv:Envelope>\';\n\nconst options = {\n  method: "post",\n  url: "https://ws.ondemand.qas.com/ProOnDemand/V3/ProOnDemandService.asmx?WSDL=",\n  headers: {\n    "Content-Type": "text/xml",\n\n    "Auth-Token": qas_token,\n    SOAPAction: soap_action,\n  },\n  data: xml,\n};\n\naxios(options)\n  .then((response) => {\n    console.log(response.data);\n    parseString(response.data, (err, result) => {\n      console.log(result);\n      // console.log(JSON.stringify(result[\'soap:Envelope\'][\'soap:Body\']))\n      var searchResult =\n        result["soap:Envelope"]["soap:Body"][0]["QASearchResult"][0][\n          "QAPicklist"\n        ][0]["PicklistEntry"];\n      searchResult.forEach((item) => {\n        console.dir(item);\n      });\n    });\n  })\n  .catch((err) => {\n    console.log(err);\n  });\n'})})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(96540);const o={},s=a.createContext(o);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);
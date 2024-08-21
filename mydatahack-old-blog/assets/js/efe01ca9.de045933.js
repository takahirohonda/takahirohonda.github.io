"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[1679],{19006:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=r(74848),s=r(28453);const o={sidebar_position:52},a="Sorting JSON Array by Multiple Keys with JavaScript",i={id:"Web/Frontend/json-array-sort",title:"Sorting JSON Array by Multiple Keys with JavaScript",description:"JavaScript\u2019s sort() method sorts the elements of an array. Sort() takes callback where you can specify sorting rules.",source:"@site/docs/Web/Frontend/52.json-array-sort.md",sourceDirName:"Web/Frontend",slug:"/Web/Frontend/json-array-sort",permalink:"/docs/Web/Frontend/json-array-sort",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:52,frontMatter:{sidebar_position:52},sidebar:"tutorialSidebar",previous:{title:"How to Set up React Test with Mocha and Enzyme for TypeScript",permalink:"/docs/Web/Frontend/mocha-enzyme-ts"},next:{title:"Uploading File from Browser to S3 with JavaScript",permalink:"/docs/Web/Frontend/upload-file-to-s3"}},c={},d=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sorting-json-array-by-multiple-keys-with-javascript",children:"Sorting JSON Array by Multiple Keys with JavaScript"}),"\n",(0,t.jsx)(n.p,{children:"JavaScript\u2019s sort() method sorts the elements of an array. Sort() takes callback where you can specify sorting rules."}),"\n",(0,t.jsx)(n.p,{children:"By writing a small callback function, array of JSON data can be easily sorted. In this example, we use the JSON array that has name and sore. We will sort this date first by score in a descending order and then alphabetical order by name if two people have the same score."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'[\n  { name: "John", score: "432" },\n  { name: "Joe", score: "125" },\n  { name: "Zoe", score: "320" },\n  { name: "Ziggy", score: "532" },\n  { name: "Dave", score: "211" },\n  { name: "Sarah", score: "621" },\n  { name: "Alex", score: "320" },\n];\n'})}),"\n",(0,t.jsx)(n.p,{children:"Now, here is the call back function that first sort by the first key and second key if the first key has the same value."}),"\n",(0,t.jsx)(n.p,{children:"When the first key comparison is equal, it goes into the second sorting logic. For descending order sorting, we can return -1 when the first key is bigger than the second key. If you swap the returning value, the sorting order becomes ascending. Magic!"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"function rankingSorter(firstKey, secondKey) {\n  return function (a, b) {\n    if (a[firstKey] > b[firstKey]) {\n      return -1;\n    } else if (a[firstKey] < b[firstKey]) {\n      return 1;\n    } else {\n      if (a[secondKey] > b[secondKey]) {\n        return 1;\n      } else if (a[secondKey] < b[secondKey]) {\n        return -1;\n      } else {\n        return 0;\n      }\n    }\n  };\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now, all you need to do is to use this function in a callback for sort()."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'data.sort(rankingSorter("score", "name"));'})}),"\n",(0,t.jsx)(n.p,{children:"Let\u2019s check out how this can be used in the front end. I used pure JavaScript to inject HTML elements. I never really use this method, but sometimes fun to get back to the classic javascripting! To write the injection part, I referred to this page."}),"\n",(0,t.jsx)(n.p,{children:"It sorts the JSON array and output as a list."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Ranking\n    1. Name: Sarah, Score: 621\n    2. Name: Ziggy, Score: 532\n    3. Name: John, Score: 432\n    4. Name: Zoe, Score: 320\n    5. Name: Alex, Score: 320\n    6. Name: Dave, Score: 211\n    7. Name: Joe, Score: 125\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<body>\n  <h3>Ranking</h3>\n  <p></p>\n  <ol id="ranking"></ol>\n\n  <script>\n    var data = [\n      { name: "John", score: "432" },\n      { name: "Joe", score: "125" },\n      { name: "Zoe", score: "320" },\n      { name: "Ziggy", score: "532" },\n      { name: "Dave", score: "211" },\n      { name: "Sarah", score: "621" },\n      { name: "Alex", score: "320" },\n    ];\n\n    function rankingSorter(firstKey, secondKey) {\n      return function (a, b) {\n        if (a[firstKey] > b[firstKey]) {\n          return -1;\n        } else if (a[firstKey] < b[firstKey]) {\n          return 1;\n        } else {\n          if (a[secondKey] > b[secondKey]) {\n            return 1;\n          } else if (a[secondKey] < b[secondKey]) {\n            return -1;\n          } else {\n            return 0;\n          }\n        }\n      };\n    }\n\n    var sorted = data.sort(rankingSorter("score", "name"));\n    var containerDiv = document.getElementById("ranking");\n\n    for (var i = 0; i < sorted.length; i++) {\n      var output = "Name: " + sorted[i].name + ", Score: " + sorted[i].score;\n      var list = document.createElement("li");\n      list.innerHTML = output;\n      containerDiv.appendChild(list);\n    }\n  <\/script>\n</body>\n'})}),"\n",(0,t.jsx)(n.p,{children:"(2019-02-24)"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(96540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
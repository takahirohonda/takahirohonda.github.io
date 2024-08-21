"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[8922],{22458:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(74848),s=n(28453);const i={sidebar_position:1},o="When To Use FirstOrDefault with Linq Expression",l={id:"Web/DotNet/linq-first-or-default",title:"When To Use FirstOrDefault with Linq Expression",description:"FirstOrDefault is a Linq expression that returns the first element of a sequence or a default value (which is usually null) when no element is found. First is similar, but throws an error when no element is found. FirstOrDefault is usually preferred to First because it does not throw an error unless you are sure that First is the better option.",source:"@site/docs/Web/DotNet/1.linq-first-or-default.md",sourceDirName:"Web/DotNet",slug:"/Web/DotNet/linq-first-or-default",permalink:"/docs/Web/DotNet/linq-first-or-default",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:".Net",permalink:"/docs/category/net"},next:{title:"inter-server-hosting",permalink:"/docs/Web/DotNet/inter-server-hosting"}},a={},u=[];function h(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"when-to-use-firstordefault-with-linq-expression",children:"When To Use FirstOrDefault with Linq Expression"}),"\n",(0,r.jsx)(e.p,{children:"FirstOrDefault is a Linq expression that returns the first element of a sequence or a default value (which is usually null) when no element is found. First is similar, but throws an error when no element is found. FirstOrDefault is usually preferred to First because it does not throw an error unless you are sure that First is the better option."}),"\n",(0,r.jsx)(e.p,{children:"FirstOrDefault can be used instead of Where when the first element is always used. The difference is that FirstOrDefault returns an element while Where returns a list. Then, you need to get the first element in the list. For example, the condition is filtering the primary key and therefore it returns only one record. If that is the case, FirstOrDefault is better than Where because FirstOrDefault will return null when there is no record. It would be easier to do null check."}),"\n",(0,r.jsx)(e.p,{children:"Let\u2019s see the example that illustrates that FirstOrDefault is more elegant than Where when we need to do null check on the filtered list."}),"\n",(0,r.jsx)(e.p,{children:"As you can see, using Where would be too awkward. Where returns a list with one element. To check if the list is empty or not, you have to check the count. To return a list, you need to pick the first element."}),"\n",(0,r.jsx)(e.p,{children:"On the other hand, FirstOrDefault returns an element, not a list with one element. The refactored code is more elegant."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-C#",children:'using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\npublic class FirstOrDefaultOrWhere\n{\n\tpublic static MyModel GetModel()\n\t{\n\t\tList<MyModel> modelList = new List<MyModel>\n\t\t{\n\t\t\tnew MyModel\n\t\t\t{\n\t\t\t\tProperty = "hey",\n\t\t\t\tPropertyNumber = 1\n\t\t\t}\n\t\t};\n\n\t\t// Before Refactor\n\t\t// this returns List<MyModel>\n\t\tvar newList = modelList.Where(x => x.PropertyNumber == 1).ToList();\n\t\tif (newList.Count() > 0)\n\t\t{\n\t\t\tvar firstList = newList[0]\n\t\t\tConsole.WriteLine("newList is not null");\n\t\t\treturn firstList;\n\t\t}\n\n\t\t// After Refactor by using FirstOrDefault()\n\t\t// FirstOrDefault returns MyModel.\n\t\t// If no list item meets the condition, it returns null\n\t\tvar filterdByFirstOrDefault = modelList.FirstOrDefault(x => x.PropertyNumber == 1);\n\t\tif (filterdByFirstOrDefault != null)\n\t\t{\n\t\t\tConsole.WriteLine("filteredByFirstOrDefault list is not null");\n\t\t\treturn filterdByFirstOrDefault;\n\t\t}\n\t}\n\n\tpublic class MyModel\n\t{\n\t\tpublic string Property { get; set; }\n\t\tpublic int PropertyNumber { get; set; }\n\t}\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"(2020-02-28)"})]})}function c(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(h,{...t})}):h(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function o(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);
"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[8414],{86513:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>h,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(74848),t=n(28453);const a={sidebar_position:7},s="How to fix the error: \u201cCannot use GraphQLSchema \u201c[object GraphQLSchema]\u201d from another module or realm.\u201d",i={id:"Web/Node.js/cannot-use-graphqlschema-error",title:"How to fix the error: \u201cCannot use GraphQLSchema \u201c[object GraphQLSchema]\u201d from another module or realm.\u201d",description:"When I created a lambda function with Typescript and GraphQL support with the apollo-server-lambda module (see the repo here), I got the error. It took me a while to figure out how to fix it, but finally I did by adding a module to webpack.",source:"@site/docs/Web/Node.js/7.cannot-use-graphqlschema-error.md",sourceDirName:"Web/Node.js",slug:"/Web/Node.js/cannot-use-graphqlschema-error",permalink:"/docs/Web/Node.js/cannot-use-graphqlschema-error",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Node.js Libraries for Protecting GraphQL APIs",permalink:"/docs/Web/Node.js/protect-graphql-api-node"},next:{title:"JavaScript Workout",permalink:"/docs/Web/Node.js/javascript-workout"}},h={},d=[];function c(e){const o={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"how-to-fix-the-error-cannot-use-graphqlschema-object-graphqlschema-from-another-module-or-realm",children:"How to fix the error: \u201cCannot use GraphQLSchema \u201c[object GraphQLSchema]\u201d from another module or realm.\u201d"}),"\n",(0,r.jsx)(o.p,{children:"When I created a lambda function with Typescript and GraphQL support with the apollo-server-lambda module (see the repo here), I got the error. It took me a while to figure out how to fix it, but finally I did by adding a module to webpack."}),"\n",(0,r.jsxs)(o.p,{children:["The solution for this issue is to add ",(0,r.jsx)(o.a,{href:"https://www.npmjs.com/package/webpack-node-externals",children:"Webpack node modules externals"}),". When bundling with Webpack for the backend \u2013 you usually don\u2019t want to bundle its node_modules dependencies. This library creates an externals function that ignores node_modules when bundling in Webpack."]}),"\n",(0,r.jsx)(o.p,{children:"When I googled this error, there was no good solutions. Error indicate that we need to have the resolve property in package.json and specify the version of the graphql module. But, that didn\u2019t help. It really took me a long time to figure this out because I was going down the wrong path. So, I decided to write a post for the other people who have the same issue. There you go, resolving this error is fairy simple!"}),"\n",(0,r.jsx)(o.p,{children:"Error"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:'Failure: Cannot use GraphQLSchema "[object GraphQLSchema]" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.\nError: Cannot use GraphQLSchema "[object GraphQLSchema]" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.\n'})}),"\n",(0,r.jsx)(o.p,{children:"(2021-01-30)"})]})}function l(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>i});var r=n(96540);const t={},a=r.createContext(t);function s(e){const o=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);
"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[462],{41765:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=s(74848),o=s(28453);const r={sidebar_position:49},c="Adding CSS Support for TypeScript React",i={id:"Web/Frontend/css-suppport-ts-react",title:"Adding CSS Support for TypeScript React",description:"Let\u2019s extend the previously build Webpack TypeScript React project to include CSS support. For a small application or widget, it is better to bundle CSS with JavaScript code. This post focuses on getting Bootstrap and styled-jsx working for a React project with TypeScript.",source:"@site/docs/Web/Frontend/49.css-suppport-ts-react.md",sourceDirName:"Web/Frontend",slug:"/Web/Frontend/css-suppport-ts-react",permalink:"/mydatahack-old-blog/docs/Web/Frontend/css-suppport-ts-react",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:49,frontMatter:{sidebar_position:49},sidebar:"tutorialSidebar",previous:{title:"Getting Redux DevTools to Work with TypeScript",permalink:"/mydatahack-old-blog/docs/Web/Frontend/redux-dev-tools-ts"},next:{title:"Setting up Custom Webpack for TypeScript React",permalink:"/mydatahack-old-blog/docs/Web/Frontend/custom-webpack"}},a={},d=[];function p(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"adding-css-support-for-typescript-react",children:"Adding CSS Support for TypeScript React"}),"\n",(0,n.jsx)(t.p,{children:"Let\u2019s extend the previously build Webpack TypeScript React project to include CSS support. For a small application or widget, it is better to bundle CSS with JavaScript code. This post focuses on getting Bootstrap and styled-jsx working for a React project with TypeScript."}),"\n",(0,n.jsx)(t.p,{children:"Styled-jsx enables us to inject CSS style as a react component. You can create a react component returns the style tag with inline css. See example here."}),"\n",(0,n.jsx)(t.p,{children:"(1) Install dependencies"}),"\n",(0,n.jsx)(t.p,{children:"npm i --save bootstrap\nnpm i --save-dev style-loader css-loader\nnpm i styled-jsx --save\n(2) Update webpack.config"}),"\n",(0,n.jsx)(t.p,{children:"We need to add style-loader and css-loader. The style-loader must be loaded first. Otherwise, you will get an error."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'module: {\n    rules: [\n      { test: /\\.tsx?$/, exclude: /node_modules/, loader: "ts-loader"},\n      { test: /\\.js$/, use: ["source-map-loader"], enforce: "pre" },\n      { test: /\\.css$/, use: [\'style-loader\', \'css-loader\']}\n    ]\n  },\n'})}),"\n",(0,n.jsx)(t.p,{children:"(3) Adding bootstrap support"}),"\n",(0,n.jsx)(t.p,{children:"create css folder in the public folder and import with bootstrap.css file first, then import it in index.tsx file where you have ReactDom.render() method. In this way, bootstrap will get compiled into a bundle."}),"\n",(0,n.jsx)(t.p,{children:"bootstrap.css"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-css",children:'@import "../../node_modules/bootstrap/dist/css/bootstrap.css";\n'})}),"\n",(0,n.jsx)(t.p,{children:"index.tsx"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import "../public/css/bootstrap.css";\n'})}),"\n",(0,n.jsx)(t.p,{children:"(4) Get styled-jsx work"}),"\n",(0,n.jsx)(t.p,{children:"Styled-jsx takes two attributes in the style element, jsx and global as style jsx global. As TypeScript does not know their types, it complains. To add types for these attributes, we can add the definitions in the custom.d.ts file in the src folder."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import "react";\ndeclare module "react" {\n  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {\n    jsx?: string;\n    global?: string;\n  }\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Everything should work smoothly now. For more complete example, please check out this repo."}),"\n",(0,n.jsx)(t.p,{children:"(2019-03-11)"})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>i});var n=s(96540);const o={},r=n.createContext(o);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
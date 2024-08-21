"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[2887],{712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var s=n(74848),o=n(28453);const r={sidebar_position:50},c="Setting up Custom Webpack for TypeScript React",i={id:"Web/Frontend/custom-webpack",title:"Setting up Custom Webpack for TypeScript React",description:"The easiest way to get started with React on TypeScript is to use create-react-app for TypeScript. As create-react-app uses webpack, you can eject config files by running npm run eject for further customisation.",source:"@site/docs/Web/Frontend/50.custom-webpack.md",sourceDirName:"Web/Frontend",slug:"/Web/Frontend/custom-webpack",permalink:"/docs/Web/Frontend/custom-webpack",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Adding CSS Support for TypeScript React",permalink:"/docs/Web/Frontend/css-suppport-ts-react"},next:{title:"How to Set up React Test with Mocha and Enzyme for TypeScript",permalink:"/docs/Web/Frontend/mocha-enzyme-ts"}},a={},p=[];function d(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"setting-up-custom-webpack-for-typescript-react",children:"Setting up Custom Webpack for TypeScript React"}),"\n",(0,s.jsx)(t.p,{children:"The easiest way to get started with React on TypeScript is to use create-react-app for TypeScript. As create-react-app uses webpack, you can eject config files by running npm run eject for further customisation."}),"\n",(0,s.jsx)(t.p,{children:"What about building the project and webpack config from scratch? It is sometimes good to give it a go because you understand a little bit more about TypeScript React configuration. In this post, we will go through the steps to set up custom webpack for a TypeScript React project."}),"\n",(0,s.jsx)(t.p,{children:"(1) Setting up folder"}),"\n",(0,s.jsx)(t.p,{children:"Here is the folder structure we use."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"- root\n    - src\n        -components\n    - public\n    - dist\n    - test\n"})}),"\n",(0,s.jsx)(t.p,{children:"(2) Install dependencies"}),"\n",(0,s.jsx)(t.p,{children:"For all the React related modules, you need to add corresponding @type modules."}),"\n",(0,s.jsx)(t.h1,{id:"install-typescript",children:"install TypeScript"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"npm i --save-dev typescript"})}),"\n",(0,s.jsx)(t.h1,{id:"install-webpack",children:"install webpack"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm i --save-dev webpack\nnpm i --save-dev webpack-dev-server\nnpm i --save-dev webpack-cli\n\n# install react and associated tools\nnpm i --save react react-dom @types/react @types/react-dom\nnpm i --save-dev ts-loader source-map-loader uglifyjs-webpack-plugin\nnpm i --save-dev source-map-loader\n\n# install redux\nnpm install -S redux react-redux @types/react-redux\n\n# install react router\nnpm i -S react-router-dom @types/react-router-dom\n"})}),"\n",(0,s.jsx)(t.p,{children:"(3) Add Webpack config"}),"\n",(0,s.jsx)(t.p,{children:"The bare minimum webpack config to get you started!"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'const HtmlWebPackPlugin = require("html-webpack-plugin");\nconst MiniCssExtractPlugin = require("mini-css-extract-plugin");\n\nmodule.exports = {\n  mode: process.env.NODE_ENV === "production" ? "production" : "development",\n  devtool: "inline-source-map",\n  entry: "./src/index.tsx",\n  output: {\n    path: __dirname + "/dist",\n    filename: "bundle.js",\n  },\n  devServer: {\n    inline: true,\n    contentBase: "./public",\n    // historyApiFallback: true,\n    port: 3000,\n  },\n  resolve: {\n    extensions: [".ts", ".tsx", ".js"],\n  },\n  module: {\n    rules: [\n      { test: /\\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" },\n      { test: /\\.js$/, use: ["source-map-loader"], enforce: "pre" },\n      { test: /\\.css$/, use: ["style-loader", "css-loader"] },\n    ],\n  },\n  plugins: [\n    new HtmlWebPackPlugin({\n      template: "./public/index.html",\n      filename: "index.html",\n    }),\n    new MiniCssExtractPlugin({ filename: "app.css" }),\n  ],\n};\n'})}),"\n",(0,s.jsx)(t.p,{children:"(4) Add tsconfig"}),"\n",(0,s.jsx)(t.p,{children:"On the root directly you need to add a tsconfig.json file. With TypeScript, you do not need Babel. TypeScript compiler converts the code into the version of JavaScript that runs on the browser."}),"\n",(0,s.jsx)(t.p,{children:"If you need to import Json data directly from .json file, you need to set resolveJsonModule=true. The most importantly, skipLibCheck = true will make compilation time much faster for hot loading. Without this parameter, compilation takes noticeably longer and you will probably feel frustrated."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "outDir": "./dist/",\n    "sourceMap": true,\n    "noImplicitAny": true,\n    "module": "commonjs",\n    "target": "es5",\n    "jsx": "react",\n    "resolveJsonModule": true,\n    "skipLibCheck": true\n  },\n  "include": ["./src/**/*"],\n  "exclude": ["./test/**/*"]\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"(5) Add scripts in package.json"}),"\n",(0,s.jsx)(t.p,{children:"We can now add script to develop and build React application in package.json file."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'"start": "webpack-dev-server --open",\n"devbuild": "webpack --mode development",\n"build": "webpack --mode production",\n'})}),"\n",(0,s.jsx)(t.p,{children:"(6) File name consideration"}),"\n",(0,s.jsx)(t.p,{children:"With JavaScript, React works on both .js and .jsx extensions. With TypeScript, React only works on .tsx extension. For React components, make sure to use .tsx. The rest of the utility functions, you can use .ts extension."}),"\n",(0,s.jsx)(t.p,{children:"(7) Next Steps"}),"\n",(0,s.jsx)(t.p,{children:"Check out the complete React-Redux example in TypeScript here. To set up unit test with Mocha and Enzyme, check out the post here."}),"\n",(0,s.jsx)(t.p,{children:"(2019-03-11)"})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var s=n(96540);const o={},r=s.createContext(o);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
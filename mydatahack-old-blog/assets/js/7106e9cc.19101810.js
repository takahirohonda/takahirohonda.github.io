"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[7141],{78571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(74848),s=n(28453);const a={sidebar_position:18},r="Adding Custom Font to Storybook",i={id:"Web/Frontend/custom-font-storybook",title:"Adding Custom Font to Storybook",description:"Most of the design systems have custom fonts. Let\u2019s see how we can bring them to Storybook. Once the font is in, we can start using it in canvas by adding CSS. My example storybook repo is here.",source:"@site/docs/Web/Frontend/18.custom-font-storybook.md",sourceDirName:"Web/Frontend",slug:"/Web/Frontend/custom-font-storybook",permalink:"/docs/Web/Frontend/custom-font-storybook",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"Using Parcel Bundler for TypeScript React App",permalink:"/docs/Web/Frontend/parcel-bundler"},next:{title:"Using Font Files Downloaded From Google Font",permalink:"/docs/Web/Frontend/use-google-font"}},c={},d=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"adding-custom-font-to-storybook",children:"Adding Custom Font to Storybook"}),"\n",(0,o.jsx)(t.p,{children:"Most of the design systems have custom fonts. Let\u2019s see how we can bring them to Storybook. Once the font is in, we can start using it in canvas by adding CSS. My example storybook repo is here."}),"\n",(0,o.jsx)(t.p,{children:"First of all, we need to add a font folder and add all the font files as well as the css file with font-face declarations."}),"\n",(0,o.jsx)(t.p,{children:"Then, we need to move this folder into the storybook-static folder (where the built artifacts go). In order to do this, we can write a custom webpack config file and add it.storybook folder. We use copy-webpack-plugin to move static assets here. This custom webpack.config.js file will be called during storybook build. Make sure that you have the correct input and output path."}),"\n",(0,o.jsx)(t.p,{children:"Once this is added, you can see the font folder appearing in the storybook-static folder after successful build."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const CopyWebpackPlugin = require("copy-webpack-plugin");\n\nmodule.exports = async ({ config }) => {\n  // fonts\n  config.plugins.push(\n    new CopyWebpackPlugin({\n      patterns: [\n        {\n          from: path.resolve(__dirname, "../src/fonts/Lato"),\n          to: "fonts/Lato",\n        },\n      ],\n    })\n  );\n\n  return config;\n};\n'})}),"\n",(0,o.jsxs)(t.p,{children:["To use font in the Canvas, we need to add font to preview-head.html. Canvas is an iframe which can be customised by editing the files prefixed as ",(0,o.jsx)(t.code,{children:"preview-"})," (preview-head.html, preview-body.html, preview.js and so on). In this case, we add a custom style, in preview-head.html as below. If the component is already using the same font family, adding @font-face will enable font for that component. Alternatively, we can create a class to access the font and add the class to html elements."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:"<style>\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: url('fonts/Lato/Lato-Regular.ttf') format('truetype');\n}\n\n.custom-font {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n}\n</style>\n"})}),"\n",(0,o.jsx)(t.p,{children:"(2021-04-24)"})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var o=n(96540);const s={},a=o.createContext(s);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);
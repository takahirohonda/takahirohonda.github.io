"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[3811],{29161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(74848),s=n(28453);const i={sidebar_position:24},a="Dispatching Custom Events for Front End Analytics Application",c={id:"Web/Frontend/dispatch-custom-event",title:"Dispatching Custom Events for Front End Analytics Application",description:"so on, we can dispatch an custom event whenever user does action on the page. For example, we can dispatch a custom event to indicate the user clicked certain button on the page.",source:"@site/docs/Web/Frontend/24.dispatch-custom-event.md",sourceDirName:"Web/Frontend",slug:"/Web/Frontend/dispatch-custom-event",permalink:"/docs/Web/Frontend/dispatch-custom-event",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"tutorialSidebar",previous:{title:"Making Personal Portfolio Site with Jekyll",permalink:"/docs/Web/Frontend/jekyll-portfolio-site"},next:{title:"Adding Polyfills in TypeScript App",permalink:"/docs/Web/Frontend/polyfill-ts-app"}},r={},d=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"dispatching-custom-events-for-front-end-analytics-application",children:"Dispatching Custom Events for Front End Analytics Application"}),"\n",(0,o.jsx)(t.p,{children:"so on, we can dispatch an custom event whenever user does action on the page. For example, we can dispatch a custom event to indicate the user clicked certain button on the page."}),"\n",(0,o.jsx)(t.p,{children:"Event can be emitted from the custom object that is exposed globally."}),"\n",(0,o.jsx)(t.p,{children:"Then, the analytics application can listen to the event and do something like this."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'mysite.events.on("widget:opened", function () {\n  // Whatever the analytics function provided by the vendor\n  whatever.function.sendData("widget:opened");\n});\n'})}),"\n",(0,o.jsx)(t.p,{children:"The easiest way to do this is to use node.js events. For example, we have a global namespace called mysite. We can add events object that is the EventEmitter."}),"\n",(0,o.jsx)(t.p,{children:"Then, we can simply emit event when the element is clicked. This works on most browsers including IE11."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'import { EventEmitter } from "events";\nmysite.events = new EventEmitter();\n\ndocument.targetElem.addEventListener("click", () => {\n  mysite.events.emit("widget:opened");\n});\n'})}),"\n",(0,o.jsx)(t.p,{children:"Because events are from node.js, you may need to use plugins in the bundler to use the module. For example, if you are using rollup, you need to use rollup-plugin-node-builtins."}),"\n",(0,o.jsx)(t.p,{children:"The alternative is to dispatch a custom event. It is not as clean as emitting event, but it also works."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const widgetOpenEvent = new CustomEvent("widget:opened");\ndocument.targetElem.addEventListener("click", () => {\n  document.dispatchEvent(widgetOpenEvent);\n});\n'})}),"\n",(0,o.jsx)(t.p,{children:"Then, analytics code can attach an event listener to the document to listen to this custom event. Note that CutomEvent requires a polyfill if you need to make it work with IE11."}),"\n",(0,o.jsx)(t.p,{children:"(2020-08-28)"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var o=n(96540);const s={},i=o.createContext(s);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);
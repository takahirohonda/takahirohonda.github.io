"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[1881],{56938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(74848),a=r(28453);const o={sidebar_position:8},s="How to fix react-day-picker flickering hover state between mouseenter and mouseleave",i={id:"Web/Frontend/react-day-picker-flicker-bug",title:"How to fix react-day-picker flickering hover state between mouseenter and mouseleave",description:"I had an issue with react-day-picker flickering hover state between mouseenter and mouseleave when the cursor was on the edge of the day I was trying to select. This is not a bug in the library. It was the custom style I added to the hover state that was causing the issue. In my case, I had to override border-radius of the .DayPicker-Day element.",source:"@site/docs/Web/Frontend/8.react-day-picker-flicker-bug.md",sourceDirName:"Web/Frontend",slug:"/Web/Frontend/react-day-picker-flicker-bug",permalink:"/mydatahack-old-blog/docs/Web/Frontend/react-day-picker-flicker-bug",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Moving away from React.FC and React.VFC",permalink:"/mydatahack-old-blog/docs/Web/Frontend/move-away-react-fc-vfc"},next:{title:"Using yarn link to develop React library locally",permalink:"/mydatahack-old-blog/docs/Web/Frontend/yarn-link"}},c={},d=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-to-fix-react-day-picker-flickering-hover-state-between-mouseenter-and-mouseleave",children:"How to fix react-day-picker flickering hover state between mouseenter and mouseleave"}),"\n",(0,n.jsxs)(t.p,{children:["I had an issue with ",(0,n.jsx)(t.code,{children:"react-day-picker"})," flickering hover state between ",(0,n.jsx)(t.code,{children:"mouseenter"})," and ",(0,n.jsx)(t.code,{children:"mouseleave"})," when the cursor was on the edge of the day I was trying to select. This is not a bug in the library. It was the custom style I added to the hover state that was causing the issue. In my case, I had to override ",(0,n.jsx)(t.code,{children:"border-radius"})," of the ",(0,n.jsx)(t.code,{children:".DayPicker-Day"})," element."]}),"\n",(0,n.jsx)(t.p,{children:"This fixed my issue. The fix is so specific to the component I was working on because I overrode the default style. If you\u2019re stuck with this issue, it\u2019s worth a try."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-css",children:".DayPicker-wrapper .DayPicker-Body .DayPicker-Day {\n  border-radius: 0px;\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"(2022-04-27)"})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(96540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
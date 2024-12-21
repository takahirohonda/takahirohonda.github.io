"use strict";(self.webpackChunkdocusaurus_portfolio_site=self.webpackChunkdocusaurus_portfolio_site||[]).push([[1458],{2299:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(5893),i=t(1151);const r={title:"Quick CSS/ Tailwind Reminders",sidebar_position:96},l=void 0,c={id:"current/quick-css-tailwind-reminder/index",title:"Quick CSS/ Tailwind Reminders",description:"1. Make the height full screen on the page. The height should stay the same even the inner content height grows. Make sure to have the main content centred.",source:"@site/my-learning-notes/current/95-quick-css-tailwind-reminder/index.md",sourceDirName:"current/95-quick-css-tailwind-reminder",slug:"/current/quick-css-tailwind-reminder/",permalink:"/tk-blog/my-learning-notes/current/quick-css-tailwind-reminder/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:96,frontMatter:{title:"Quick CSS/ Tailwind Reminders",sidebar_position:96},sidebar:"firstDocSidebar",previous:{title:"Current",permalink:"/tk-blog/my-learning-notes/category/current"},next:{title:"Deploying PWA to GitPage with React and Vite",permalink:"/tk-blog/my-learning-notes/current/pwa-vite-gitpage/"}},o={},d=[];function a(e){const n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Make the height full screen on the page. The height should stay the same even the inner content height grows. Make sure to have the main content centred."}),"\n"]})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<html lang="en">\n  <body className="bg-primary-black text-white">\n    <div className="min-h-screen">\n      <div className="container h-screen flex flex-col items-center px-[16px]">\n        <nav>\n          ...\n          <nav>\n            <main className="flex flex-col justify-center h-full"></main>\n          </nav>\n        </nav>\n      </div>\n    </div>\n  </body>\n</html>\n'})})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Align items in the middle when ",(0,s.jsx)(n.code,{children:"flex-row"})," and ",(0,s.jsx)(n.code,{children:"flex-col"}),". Also vertically center the content when ",(0,s.jsx)(n.code,{children:"flex-row"})," and ",(0,s.jsx)(n.code,{children:"flex-col"}),"."]}),"\n"]})}),(0,s.jsxs)(n.p,{children:["2-1. ",(0,s.jsx)(n.code,{children:"flex justify-center"})," -> ",(0,s.jsx)(n.code,{children:"justify-content: center"})," is used for x axis."]}),(0,s.jsxs)(n.p,{children:["2-2. ",(0,s.jsx)(n.code,{children:"flex flex-col items-center"})," -> the css to align items will be reversed when ",(0,s.jsx)(n.code,{children:"flex-col"}),"."]}),(0,s.jsxs)(n.p,{children:["2-3. ",(0,s.jsx)(n.code,{children:"flex items-center"})," -> ",(0,s.jsx)(n.code,{children:"align-items: center"})," is used for y axis."]}),(0,s.jsxs)(n.p,{children:["2-4. ",(0,s.jsx)(n.code,{children:"flex items-center"})]}),(0,s.jsxs)(n.p,{children:["This is so far the best cheat sheet for flex: ",(0,s.jsx)(n.a,{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",children:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"}),"."]})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"What are the default breakpoints in tailwind?"}),"\n"]})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sm (640px) max-width: 640px;\nmd (768px) max-width: 768px;\nlg (1024px) max-width: 1024px;\nxl (1280px) max-width: 1280px;\n2xl (1536px) max-width: 1536px;\n"})}),(0,s.jsx)(n.p,{children:"We can add new breakpoints like this:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"module.exports = {\n  theme: {\n    extend: {\n      screens: {\n        '3xl': '1920px',\n      },\n    },\n  },\n  plugins: [],\n}\n"})}),(0,s.jsx)(n.p,{children:"Other breakpoint examples..."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export const BREAKPOINT = {\n  XS: 640, // tablet - portrait\n  SM: 768, // tablet - landscape\n  MD: 1024, // laptop - smaller\n  LG: 1280, // laptop - medium\n  XL: 1536, // desktop\n  XXL: 1920, // desktop - extra wide\n} as const\n"})})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"What are the differences between replaced elements (like iframe, img, video, embed, fencedframe) and block level containers (like div, p)"}),"\n"]})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Replaced Elements"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Has an intrinsic size defined by its content or attributes (e.g., width and height)."}),"\n",(0,s.jsx)(n.li,{children:"Won't automatically stretch to fit its container unless something like width 100% is applied."}),"\n",(0,s.jsx)(n.li,{children:"Isolated and rendered separately by the browser, making it less responsive to flexbox rules without additional CSS."}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element",children:"https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Block Elements"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A div is a non-replaced block-level element that follows standard CSS rules for layout."}),"\n",(0,s.jsx)(n.li,{children:"A div automatically stretches to the width of its parent unless constrained by styles (e.g., max-width, flex-basis, or width)."}),"\n",(0,s.jsx)(n.li,{children:"It works well with flexbox, grid, and other layout systems because it has no intrinsic size."}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>l});var s=t(7294);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
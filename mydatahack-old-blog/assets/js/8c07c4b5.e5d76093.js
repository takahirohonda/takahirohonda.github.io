"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[249],{89541:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=t(74848),a=t(28453);const o={sidebar_position:13},i="How to Make Scalable SVG React Components",r={id:"Web/Frontend/scalable-svg-react-component",title:"How to Make Scalable SVG React Components",description:"SVG stands for Scalable Vector Graphic. The svg image can scale up and down according the size of the outer container as long as the image width is set to 100%. Let\u2019s explore how we can make a React illustration component that supports multiple size by scaling up and down.",source:"@site/docs/Web/Frontend/13.scalable-svg-react-component.md",sourceDirName:"Web/Frontend",slug:"/Web/Frontend/scalable-svg-react-component",permalink:"/mydatahack-old-blog/docs/Web/Frontend/scalable-svg-react-component",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Learning CSS Grid",permalink:"/mydatahack-old-blog/docs/Web/Frontend/learning-css-grid"},next:{title:"Using act() in Jest Unit Tests with React-Dom",permalink:"/mydatahack-old-blog/docs/Web/Frontend/act-jest-test"}},l={},c=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"how-to-make-scalable-svg-react-components",children:"How to Make Scalable SVG React Components"}),"\n",(0,s.jsx)(n.p,{children:"SVG stands for Scalable Vector Graphic. The svg image can scale up and down according the size of the outer container as long as the image width is set to 100%. Let\u2019s explore how we can make a React illustration component that supports multiple size by scaling up and down."}),"\n",(0,s.jsx)(n.p,{children:"Firstly, we create an illustration container component that is used for all the svg illustration components. This wrapper component has three sizes, small, medium, large according to the design spec."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import React from "react";\nimport styles from "./styles.scss";\n\nexport enum IllustrationSize {\n  Small = "small",\n  Medium = "medium",\n  Large = "large",\n}\n\nexport type IllustrationContainerProps = {\n  size?: IllustrationSize;\n};\n\nexport const IllustrationContainer: React.FC<IllustrationContainerProps> = ({\n  children,\n  size = IllustrationSize.Small,\n}) => <div className={styles[size]}>{children}</div>;\n'})}),"\n",(0,s.jsx)(n.p,{children:"styles.scss defines the size variation."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:".small {\n  width: 57px;\n  height: 57px;\n}\n\n.medium {\n  width: 114px;\n  height: 114px;\n}\n\n.large {\n  width: 177px;\n  height: 177px;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"By using this wrapper, we can add any svg that scales according to the design size spec in the container component."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import React, { SVGAttributes } from \'react\';\nimport { IllustrationContainer, IllustrationContainerProps } from \'../IllustrationContainer\';\nimport styles from \'./styles.scss\';\n\nexport type MyllustrationProps = SVGAttributes<SVGElement> &\n  Omit<IllustrationContainerProps, \'children\'> & {\n    title?: string;\n    desc?: string;\n  };\n\nexport const MyIllustration: React.VFC<MyllustrationProps> = ({\n  title,\n  desc,\n  className,\n  ...props\n}) => (\n  <IllustrationContainer {...props}>\n    <svg\n      className={styles.scalableSvg}\n      role="img"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n      width="61"\n      height="61"\n      viewBox="0 0 61 61"\n    >\n      {title && <title>{title}</title>}\n      {desc && <desc>{desc}</desc>}\n      <path\n        ... />\n\n    </svg>\n  </IllustrationContainer>\n);\n\nRocketIllustration.displayName = \'RocketIllustration\';\n'})}),"\n",(0,s.jsx)(n.p,{children:"To make svg scalable, the key is to set width 100% with a block display. Then, the image will scale according to the outer container."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:".scalableSvg {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"(2021-10-14)"})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(96540);const a={},o=s.createContext(a);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
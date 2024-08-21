"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[4804],{37084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=n(74848),o=n(28453);const s={sidebar_position:3},a="yup conditional validation example",r={id:"Web/Frontend/yup-conditional",title:"yup conditional validation example",description:"Here\u2019s an example of a Yup validation logic where the first input field is optional but, if filled, it must contain only alphabetic characters, and the second input field is required:",source:"@site/docs/Web/Frontend/3.yup-conditional.md",sourceDirName:"Web/Frontend",slug:"/Web/Frontend/yup-conditional",permalink:"/docs/Web/Frontend/yup-conditional",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Fixing it.only type error in Jest",permalink:"/docs/Web/Frontend/it-only-type-error-jest"},next:{title:"How to set up auto-fix on save by using the project\u2019s Eslint config with VS Code",permalink:"/docs/Web/Frontend/auto-fix-on-save-vscode-eslint"}},l={},d=[];function c(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"yup-conditional-validation-example",children:"yup conditional validation example"}),"\n",(0,i.jsx)(t.p,{children:"Here\u2019s an example of a Yup validation logic where the first input field is optional but, if filled, it must contain only alphabetic characters, and the second input field is required:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:'import * as Yup from "yup";\nconst validationSchema = Yup.object().shape({\n  firstField: Yup.string().matches(/^[A-Za-z]*$/, {\n    message: "First field must contain only alphabetic characters",\n    excludeEmptyString: true,\n  }),\n  secondField: Yup.string().when("firstField", {\n    is: (value) => value && value.length > 0,\n    then: Yup.string().required(\n      "Second field is required when first field is filled"\n    ),\n  }),\n});\n\nexport default validationSchema;\n'})}),"\n",(0,i.jsx)(t.p,{children:"In the updated code, we\u2019re using the matches method from Yup to enforce that the firstField must contain only alphabetic characters. The regular expression checks if the string consists only of uppercase and lowercase letters. The excludeEmptyString option is set to true to ensure that an empty string is not considered a valid value for the first field."}),"\n",(0,i.jsx)(t.p,{children:"If the firstField is filled, the secondField is still required using the when method. This means that the second input field will be required only when the first input field is filled, and it will not be required if the first field is left empty."}),"\n",(0,i.jsx)(t.p,{children:"By implementing this validation logic, you can have an optional first input field that, if filled, must contain only alphabetic characters, and a second input field that is required when the first field is filled."}),"\n",(0,i.jsx)(t.p,{children:"(2023-06-05)"})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
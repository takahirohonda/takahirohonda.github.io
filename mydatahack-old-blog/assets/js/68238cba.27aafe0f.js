"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[920],{62314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=n(74848),o=n(28453);const i={sidebar_position:41},a="Using Lexical this in JavaScript Class Method with ES6 Arrow Functions",r={id:"Web/Frontend/lexical-this-js-class",title:"Using Lexical this in JavaScript Class Method with ES6 Arrow Functions",description:"The way JavaScript handles scope is unique. It makes the language so fascinating to learn. It is so different from any other major programming languages. JavaScript has many quirks that make it so fascinating, such as its asynchronous nature, event loops, prototypes, closure and so on. I think this is one of them. It is often misunderstood and misused. But, once you understand how this works, it will take you to the next level.",source:"@site/docs/Web/Frontend/41.lexical-this-js-class.md",sourceDirName:"Web/Frontend",slug:"/Web/Frontend/lexical-this-js-class",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Web/Frontend/lexical-this-js-class",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41},sidebar:"tutorialSidebar",previous:{title:"Why Address Bar Is Not Hidden \u2013 Android App with TWA",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Web/Frontend/adressbar-not-hidden-android-twa"},next:{title:"Calling Async Function in Action with Redux-Thunk",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Web/Frontend/redux-thunc-async"}},c={},l=[];function h(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"using-lexical-this-in-javascript-class-method-with-es6-arrow-functions",children:"Using Lexical this in JavaScript Class Method with ES6 Arrow Functions"}),"\n",(0,s.jsx)(t.p,{children:"The way JavaScript handles scope is unique. It makes the language so fascinating to learn. It is so different from any other major programming languages. JavaScript has many quirks that make it so fascinating, such as its asynchronous nature, event loops, prototypes, closure and so on. I think this is one of them. It is often misunderstood and misused. But, once you understand how this works, it will take you to the next level."}),"\n",(0,s.jsx)(t.p,{children:"In this post, we focus on the scoping of this changes with ES6 arrow functions compared to the old way in the context of a class method."}),"\n",(0,s.jsx)(t.p,{children:"You can see the Past Posts section on the right side of this website (you need to scroll down a bit further) and it has a Show more option (at least, for now. It may be different by the time you are reading this post). That toggler is in fact injected by JavaScript (the real code is actually written in TypeScript, which I will show you at the end)."}),"\n",(0,s.jsx)(t.p,{children:"The class creates a div with the onclick event handler. Now, check out how it is written without an arrow function."}),"\n",(0,s.jsx)(t.p,{children:"In JavaScript class, this points to the class object. When new is used to create the toggler object, it attaches this to the class object itself. this inside the class method points to the objects within the class. Therefore, you have access to node by this.node. So far, so good."}),"\n",(0,s.jsx)(t.p,{children:"Take a look at the addEventListener in the render method. If you are using the regular function expression in the callback, this will fall out of scope. This is because this belongs to the call site, which is not the instantiated object itself, but the actual HTML dom (this.node in this case) as this is where event gets triggered. Therefore, if you try to access the clickHandler() with this, JavaScript engine will throw clickHandler not a function TypeError. Hence, we have to attach this to another variable so that the call back function has access to _this."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'class ArchiveToggler {\n  constructor(node) {\n    this.node = node;\n  }\n\n  clickHandler() {\n    const targetElem = document.querySelector(".mdh-custom-archive");\n    const showButton = document.querySelector(".archive-show-more");\n    targetElem.classList.toggle("active");\n    showButton.classList.toggle("active");\n    if (showButton.classList.contains("active")) {\n      showButton.value = "";\n      showButton.innerHTML = "---- Show less ----";\n    } else {\n      showButton.value = "";\n      showButton.innerHTML = "---- Show more ----";\n    }\n  }\n\n  render() {\n    const div = document.createElement("div");\n    const divContent = document.createTextNode("---- Show more ----");\n    div.appendChild(divContent);\n    div.classList.add("archive-show-more");\n    // for regular javascript this falls out of scope, hence _this = this\n    const _this = this;\n    div.addEventListener("click", function () {\n      _this.clickHandler();\n    });\n    this.node.insertAdjacentElement("afterend", div);\n  }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"As mentioned above, this results in not a function TypeError because this falls out of the scope within the callback."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"render() {\n  const div = document.createElement('div');\n  const divContent = document.createTextNode('---- Show more ----');\n  div.appendChild(divContent);\n  div.classList.add('archive-show-more');\n  // for regular javascript this falls out of scope\n  // hence TypeError on click\n  div.addEventListener('click', function() {\n    this.clickHandler();\n  });\n  this.node.insertAdjacentElement('afterend', div);\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Here comes the ES6 arrow function expression. The syntactical difference is just the surface. The real difference is it creates lexical scope within the function, which was not possible with pre ES6 language specification."}),"\n",(0,s.jsx)(t.p,{children:"Let\u2019s refactor the render method. You see this within the arrow function can still reference the object within the class. This is cool."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"render() {\n  const div = document.createElement('div');\n  const divContent = document.createTextNode('---- Show more ----');\n  div.appendChild(divContent);\n  div.classList.add('archive-show-more');\n  // this does not fall out of scope with arrow function\n  div.addEventListener('click', () => {\n    this.clickHandler();\n  });\n  this.node.insertAdjacentElement('afterend', div);\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Now all you need to do is instantiate the class and call render method."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'const targetNode = document.querySelector(".mdh-custom-archive");\nconst archiveToggler = new ArchiveToggler(targetNode);\narchiveToggler.render();\n'})}),"\n",(0,s.jsx)(t.p,{children:"As mentioned above, the actual implementation for the archive toggler on this website is done in TypeScript (at the time this post was written). This will probably change in the near future. Here is the code just for fun."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"import {\n  ARCHIVE_SHOW_MORE,\n  ARCHIVE_SHOW_LESS,\n  ARCHIVE_UL_CLASS_NAME,\n  ARCHIVE_TOGGLE_CLASS_NAME\n} from './constant';\n\nexport namespace toggles {\n  export class ArchiveToggler {\n\n    private targetNode: HTMLElement;\n\n    constructor(targetNode: HTMLElement) {\n      this.targetNode = targetNode;\n    }\n\n    private clickHandler(): void {\n      const targetElem: HTMLElement | null = document.querySelector(`.${ARCHIVE_UL_CLASS_NAME}`);\n      const showButton: HTMLElement  | null = document.querySelector(`.${ARCHIVE_TOGGLE_CLASS_NAME}`);\n        if (targetElem && showButton) {\n          targetElem.classList.toggle('active');\n          showButton.classList.toggle('active');\n        if (showButton.classList.contains('active')) {\n          showButton.innerHTML = '';\n          showButton.innerHTML = ARCHIVE_SHOW_LESS;\n        } else {\n          showButton.innerHTML = '';\n          showButton.innerHTML = ARCHIVE_SHOW_MORE;\n        }\n      }\n    }\n\n    render(): void {\n      // Create the element\n      const div = document.createElement('div');\n      const divContent = document.createTextNode(ARCHIVE_SHOW_MORE);\n      div.appendChild(divContent);\n      div.classList.add(ARCHIVE_TOGGLE_CLASS_NAME);\n      // Adding event handler\n      div.addEventListener('click', () => {\n        this.clickHandler();\n      });\n      // Insert element\n      this.targetNode.insertAdjacentElement('afterend', div);\n    }\n  }\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"My advice is to embrace arrow functions and use it whenever. Let the transpiler handle the older browser support."}),"\n",(0,s.jsx)(t.p,{children:"Lastly, arrow functions\u2019s lexical scoping opened up more possibilities to write JavaScript in a new way. Take property initialiser for example. It is an experimental ES6 JavaScript feature that let you write class in a slightly different way by taking advantage of arrow function\u2019s lexical scope. You can check out this post where I use it to refactor React class component."}),"\n",(0,s.jsx)(t.p,{children:"(2019-08-09)"})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(96540);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
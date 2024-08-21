"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[9620],{48962:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(74848),s=t(28453);const i={sidebar_position:35},l="Better Way to Attach Event Listener with Vanilla JS",o={id:"Web/Frontend/attache-event-listener",title:"Better Way to Attach Event Listener with Vanilla JS",description:"Let\u2019s discuss a better way to attach event listeners to a bunch of HTML elements selected by a class name with vanilla JavaScript. With jQuery, this is super easy. You just select the elements by a class name and use .on(). jQuery will handle event listener attachments to multiple elements.",source:"@site/docs/Web/Frontend/35.attache-event-listener.md",sourceDirName:"Web/Frontend",slug:"/Web/Frontend/attache-event-listener",permalink:"/docs/Web/Frontend/attache-event-listener",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35},sidebar:"tutorialSidebar",previous:{title:"Releasing Multiple PWAs to GooglePlay By Using a Single GitHub Page Root",permalink:"/docs/Web/Frontend/release-multiple-pwas"},next:{title:"Replacing Local Storage with IndexedDB",permalink:"/docs/Web/Frontend/indexdb"}},r={},c=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"better-way-to-attach-event-listener-with-vanilla-js",children:"Better Way to Attach Event Listener with Vanilla JS"}),"\n",(0,a.jsx)(n.p,{children:"Let\u2019s discuss a better way to attach event listeners to a bunch of HTML elements selected by a class name with vanilla JavaScript. With jQuery, this is super easy. You just select the elements by a class name and use .on(). jQuery will handle event listener attachments to multiple elements."}),"\n",(0,a.jsx)(n.p,{children:"How can we do this with vanilla JS? The first thing comes to my mind is use querySelectorAll() and for..of.. loop to attach event listeners in all the elements. It works. But, it\u2019s not very elegant. Now that the browsers offer better set of APIs, doing this with vanilla JS is as easy as jQuery."}),"\n",(0,a.jsx)(n.p,{children:"Let\u2019s have a look."}),"\n",(0,a.jsx)(n.p,{children:"Suppose you have a form with radio button group. By selecting a radio input, you want to trigger an action. In the example below, it has a list of cities and, for the sake of demo, let\u2019s console log the city whenever you pick the radio button."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<form class="my-form">\n  <fieldset class="input-field" role="radiogroup" tabindex="0">\n    <legend class="form-label">Venue Location</legend>\n    <div class="radio-button-container">\n      <div class="radio-button-group" tabindex="0">\n        <input\n          type="radio"\n          class="radio-input"\n          id="sydney"\n          name="venue"\n          value="Sydney"\n        />\n        <label class="radio-label" for="sydney">\n          <span class="ph-tick"></span>\n          Sydney\n        </label>\n      </div>\n      <div class="radio-button-group" tabindex="0">\n        <input\n          type="radio"\n          class="radio-input"\n          id="melbourne"\n          name="venue"\n          value="melbourne"\n        />\n        <label class="radio-label" for="melbourne">\n          <span class="ph-tick"></span>\n          Melbourne\n        </label>\n      </div>\n      <div class="radio-button-group" tabindex="0">\n        <input\n          type="radio"\n          class="radio-input"\n          id="adelaide"\n          name="venue"\n          value="adelaide"\n        />\n        <label class="radio-label" for="adelaide">\n          <span class="ph-tick"></span>\n          Adelaide\n        </label>\n      </div>\n      <div class="radio-button-group" tabindex="0">\n        <input\n          type="radio"\n          class="radio-input"\n          id="brisbane"\n          name="venue"\n          value="brisbane"\n        />\n        <label class="radio-label" for="brisbane">\n          <span class="ph-tick"></span>\n          Brisbane\n        </label>\n      </div>\n      <div class="radio-button-group" tabindex="0">\n        <input\n          type="radio"\n          class="radio-input"\n          id="perth"\n          name="venue"\n          value="perth"\n        />\n        <label class="radio-label" for="perth">\n          <span class="ph-tick"></span>\n          Perth\n        </label>\n      </div>\n    </div>\n  </fieldset>\n</form>\n'})}),"\n",(0,a.jsx)(n.p,{children:"With jQuery, this is easy."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'$(".radio-input").change((e) => {\n  console.log(`${e.target.value} is picked`);\n});\n'})}),"\n",(0,a.jsx)(n.p,{children:"Now, my first instinct to do this with vanilla JS is to use querySelectorAll() and attach event listener in a for loop."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const radioInputs = document.querySelectorAll(".radio-input");\n\nfor (let input of radioInputs) {\n  input.addEventListener("change", (e) => {\n    console.log(`${e.target.value} is picked`);\n  });\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Hummm\u2026 It doesn\u2019t look elegant and for loop is a waste of computation. Can we do this better?"}),"\n",(0,a.jsx)(n.p,{children:"In fact, you can do this better with Element.closest(). The closest() goes up the dom tree and find any parent that matches selector string. Check this out."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'document.querySelector(".my-form").addEventListener("change", (e) => {\n  if (e.target.closest(".radio-input") !== null) {\n    console.log(`${e.target.value} is picked`);\n  }\n});\n'})}),"\n",(0,a.jsx)(n.p,{children:"This pattern can be used, for example, for a header nav. If you have a multiple elements that you want to trigger events, you can attach event listener once in that header nav div and make closest() do the work instead of creating multiple event listeners."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'// Instead of calling addEventListerner 3 times...\ndocument.querySelector(".header-right-nav").addEventListener("click", (e) => {\n  funcForHeaderRightNavClick(e);\n});\ndocument.querySelector(".header-left-nav").addEventListener("click", (e) => {\n  funcForHeaderLeftNavClick(e);\n});\ndocument.querySelector(".nav-menu").addEventListener("click", (e) => {\n  funcForHeaderNavMenuClick(e);\n});\n\n// We could attach event listener to a header section...\ndocument.querySelector(".header").addEventListener("click", (e) => {\n  if (event.target.closest(".header-right-nav") !== null) {\n    funcForHeaderRightNavClick(e);\n  }\n  if (event.target.closest(".header-left-nav") !== null) {\n    funcForHeaderLeftNavClick(e);\n  }\n  if (event.target.closest(".nav-menu") !== null) {\n    funcForHeaderNavMenuClick(e);\n  }\n});\n'})}),"\n",(0,a.jsx)(n.p,{children:"(2019-11-10)"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var a=t(96540);const s={},i=a.createContext(s);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);
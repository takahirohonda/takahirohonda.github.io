"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[7937],{98323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(74848),s=n(28453);const o={sidebar_position:57},c="Unit Testing React Form with Jest and Enzyme",a={id:"Web/Frontend/react-jst-enzyme",title:"Unit Testing React Form with Jest and Enzyme",description:"Jest is a JavaScript unit testing framework created by Facebook. I usually use mocha for unit testing Node.js code,, but when it comes to testing React, Jest combined with Enzyme is pretty much the best. Enzyme is a JavaScript utility library created by Airbnb. It lets you simulate DOM rendering and actions on the components and integrates well with Jest.",source:"@site/docs/Web/Frontend/57.react-jst-enzyme.md",sourceDirName:"Web/Frontend",slug:"/Web/Frontend/react-jst-enzyme",permalink:"/mydatahack-old-blog/docs/Web/Frontend/react-jst-enzyme",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:57,frontMatter:{sidebar_position:57},sidebar:"tutorialSidebar",previous:{title:"React Unit Test Code Snippets with Jest and Enzyme",permalink:"/mydatahack-old-blog/docs/Web/Frontend/unit-test-code-snippet-jest-enzyme"},next:{title:"When My Webpack 4 Server Suddenly Stopped Working",permalink:"/mydatahack-old-blog/docs/Web/Frontend/webpack-4-server-issue"}},r={},l=[];function u(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"unit-testing-react-form-with-jest-and-enzyme",children:"Unit Testing React Form with Jest and Enzyme"}),"\n",(0,i.jsx)(t.p,{children:"Jest is a JavaScript unit testing framework created by Facebook. I usually use mocha for unit testing Node.js code,, but when it comes to testing React, Jest combined with Enzyme is pretty much the best. Enzyme is a JavaScript utility library created by Airbnb. It lets you simulate DOM rendering and actions on the components and integrates well with Jest."}),"\n",(0,i.jsx)(t.p,{children:"In this post, I am focusing on testing React form. When I first started writing unit tests on React form components, I spent a bit of time investigating and experimenting different ways. I especially struggled to write a unit test on multi-select and checkbox component. So, here it is."}),"\n",(0,i.jsx)(t.p,{children:"Focus"}),"\n",(0,i.jsx)(t.p,{children:"Testing a simple text input\nTesting checkbox\nTesting Multi-select options.\nTesting alert() function on form submit.\nComplete Solution"}),"\n",(0,i.jsx)(t.p,{children:"This blog focuses purely on unit test code. You can check out the complete solutions here: react-form-unit-test-example."}),"\n",(0,i.jsx)(t.p,{children:"Unit Test Code"}),"\n",(0,i.jsx)(t.p,{children:"Here is the main Form component to be tested."}),"\n",(0,i.jsx)(t.p,{children:"(1) Testing Text Input"}),"\n",(0,i.jsx)(t.p,{children:"Testing text input is relatively simple. First mount the component with Enzyme\u2019s mount function, then set the value and simulate the change. When there are multiple input fields, we can use .at(0) to find the input element by index."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:'it("Should capture firstname correctly onChange", function () {\n  const component = mount(<Form />);\n  const input = component.find("input").at(0);\n  input.instance().value = "hello";\n  input.simulate("change");\n  expect(component.state().firstname).toEqual("hello");\n});\n'})}),"\n",(0,i.jsx)(t.p,{children:"(2) Testing Checkbox"}),"\n",(0,i.jsx)(t.p,{children:"For checkbox, assign the value for checked instead of value and then simulate change."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:'it("Should capture checkbox ticked correctly onChange", function () {\n  const component = mount(<Form />);\n  const input = component.find("input").at(3);\n  input.instance().checked = true;\n  input.simulate("change");\n  expect(component.state().subscribed).toEqual(true);\n});\n'})}),"\n",(0,i.jsx)(t.p,{children:"(3) Testing Multi-Select"}),"\n",(0,i.jsx)(t.p,{children:"To test multi-select, you need to set the individual option\u2019s selected property to true. This solution works."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"const component = mount(<Form />);\nconst input = component.find('select').at(0);\nconst optionEnglish = component.find('option').at(0);\noptionEnglish.instance().selected = true;\nconst optionGerman = component.find('option').at(3);\noptionGerman.instance().selected = true;\ninput.simulate('change')\nexpect(component.find('select').at(0).props().value).toEqual(['English', 'German']);\nSimulating change on the select element as below doesn\u2019t work.\n\ninput.simulate('change', {target: {selectedOptions: ['Japanese', 'French']}});\ninput.instance().value = ['Japanese', 'French'];\ninput.simulate('select', {target: input.instance()});\n"})}),"\n",(0,i.jsx)(t.p,{children:"(4) Testing alert() on Submit"}),"\n",(0,i.jsx)(t.p,{children:"On submit, it will call the alert function with all the input values (see here). To test this logic, we need to mock window.alert function and check if it is called with the correct argument, including all the input values. First, set the state and simulate submit. Then, check to see if mocked alert function is called with the value from the state."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:'const state = { firstname: "hello", lastname: "world" };\nconst expectedArg = "Firstname: hello, Lastname: world";\nconst component = mount(<Form />);\nwindow.alert = jest.fn();\ncomponent.setState(state);\ncomponent.find("form").simulate("submit");\nexpect(window.alert).toHaveBeenCalledWith(expectedArg);\n'})}),"\n",(0,i.jsx)(t.p,{children:"(2019-01-03)"})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
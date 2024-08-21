"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[6134],{14992:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=t(74848),s=t(28453);const o={sidebar_position:42},i="Calling Async Function in Action with Redux-Thunk",r={id:"Web/Frontend/redux-thunc-async",title:"Calling Async Function in Action with Redux-Thunk",description:"Redux-thunk is a simple middleware that enables you to call functions in redux action.",source:"@site/docs/Web/Frontend/42.redux-thunc-async.md",sourceDirName:"Web/Frontend",slug:"/Web/Frontend/redux-thunc-async",permalink:"/docs/Web/Frontend/redux-thunc-async",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:42,frontMatter:{sidebar_position:42},sidebar:"tutorialSidebar",previous:{title:"Using Lexical this in JavaScript Class Method with ES6 Arrow Functions",permalink:"/docs/Web/Frontend/lexical-this-js-class"},next:{title:"Setting up Unit Tests for React with Mocha, JSDOM and Enzyme",permalink:"/docs/Web/Frontend/mocha-jsdom-enzyme-react"}},c={},l=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"calling-async-function-in-action-with-redux-thunk",children:"Calling Async Function in Action with Redux-Thunk"}),"\n",(0,a.jsx)(n.p,{children:"Redux-thunk is a simple middleware that enables you to call functions in redux action."}),"\n",(0,a.jsx)(n.p,{children:"Thunk means function returning function. In JavaScript programming, we use thunk all the time although we may not use the name. Wikipedia has a simple example of thunk if you are interested. As the name suggests, redux-thunk is a thunk used as a middleware to inject the logic into action dispatching."}),"\n",(0,a.jsx)(n.p,{children:"The use case is very simple. Use it when you want to call async function before dispatching the action. See the example below to retrieve the account information from a remote endpoint then update the store. Wouldn\u2019t it be nice if we can do this in action?"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"export const getPersonalData = (payload) => (dispatch) => {\n  // Make AJAX call\n  return postRequest(payload)\n    .then((response) => {\n      // Once AJAX call is successful, update the store\n      dispatch(setPersonalData(response));\n    })\n    .catch((err) => dispatch(apiCallNotSuccess()));\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"By default, redux dispatch method only takes object. See the source code for the dispatch method below. The function above will cause error. It will tell you that only object can be dispatched and even tell you to use custom middleware for async action."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"function dispatch(action) {\n  if (!isPlainObject(action)) {\n    throw new Error(\n      'Actions must be plain objects. ' +\n        'Use custom middleware for async actions.'\n    )\n}\n  ...\n"})}),"\n",(0,a.jsx)(n.p,{children:"Redux-thunk is basically a custom middleware that allows function to be passed to dispatcher and get rid of the error that you get from the native dispatch function in redux."}),"\n",(0,a.jsx)(n.p,{children:"Redux-thunk source code is famous for its brevity. Size does not matter here. It does the magic of bringing async functions into action."}),"\n",(0,a.jsx)(n.p,{children:"This is the current redux-thunk source code."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:'function createThunkMiddleware(extraArgument) {\n  return ({ dispatch, getState }) =>\n    (next) =>\n    (action) => {\n      if (typeof action === "function") {\n        return action(dispatch, getState, extraArgument);\n      }\n\n      return next(action);\n    };\n}\n\nconst thunk = createThunkMiddleware();\nthunk.withExtraArgument = createThunkMiddleware;\n\nexport default thunk;\n'})}),"\n",(0,a.jsx)(n.p,{children:"Awesome, now you know what redux-thunk is and when to use it. It\u2019s time to set it up"}),"\n",(0,a.jsx)(n.p,{children:"Setting up redux-thunk"}),"\n",(0,a.jsx)(n.p,{children:"Setting up is as easy as the module itself. All you need to do is to install the redux-thunk module and apply it as a middleware in the index file."}),"\n",(0,a.jsx)(n.p,{children:"Installation"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"npm i \u2013save redux-thunk"})}),"\n",(0,a.jsx)(n.p,{children:"Index.js"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:'import React from "react";\nimport ReactDom from "react-dom";\nimport App from "./App";\nimport "../public/css/bootstrap.css";\nimport "../public/css/custom.css";\nimport { Provider } from "react-redux";\nimport { createStore, compose, applyMiddleware } from "redux";\nimport reducer from "./reducers";\nimport thunk from "redux-thunk";\n\nlet composeEnhancers;\ncomposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;\n\nlet store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));\n\nReactDom.render(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById("root")\n);\n'})}),"\n",(0,a.jsx)(n.p,{children:"Let\u2019s start writing action with async functions. Here are some examples. The argument can be just dispatch or dispatch + getState or dispatch + getState + your custom arguments. This gives a lot of flexibility and can add cool logic to your action."}),"\n",(0,a.jsx)(n.p,{children:"Action.js"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"export const setPersonalData = (personalData) => {\n  return {\n    type: UPDATE_PesonalData,\n    personalData,\n  };\n};\n\nexport const getPersonalData = (payload) => (dispatch) => {\n  // Update the store on the status of API call (optional)\n  dispatch(apiCallInProgress());\n  // Make AJAX call\n  return postRequest(payload)\n    .then((response) => {\n      // Once AJAX call is successful, update the store\n      dispatch(setPersonalData(response));\n      // Then indicate apiCall was successful (optional)\n      dispatch(apiCallSuccess());\n    })\n    .catch((err) => dispatch(apiCallNotSuccess()));\n};\n\nexport const getPersonalData = (payload) => (dispatch, getState) => {\n  // Update the store on the status of API call (optional)\n  dispatch(apiCallInProgress());\n  // Make AJAX call\n  return postRequest(payload)\n    .then((response) => {\n      // we can transform response data with current state retrived with getState\n      // with fictitious transformData function takes response and current state.\n      const newState = transformData(response, getState);\n      // Once AJAX call is successful, update the store\n      dispatch(setPersonalData(newState));\n      // Then indicate apiCall was successful (optional)\n      dispatch(apiCallSuccess());\n    })\n    .catch((err) => dispatch(apiCallNotSuccess()));\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"(2019-07-07)"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(96540);const s={},o=a.createContext(s);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);
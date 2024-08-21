"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[983],{9216:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=a(74848),i=a(28453);const o={slug:"data-science/machine-learning/how-to-save-machine-learning-models-in-r",title:"How To Save Machine Learning Models In R",tags:["Data Science","Machine Learning","Save Models","R"]},s=void 0,r={permalink:"/data-science/data-science/machine-learning/how-to-save-machine-learning-models-in-r",source:"@site/data-science/machine-learning/2018-01-05-save-r-model.md",title:"How To Save Machine Learning Models In R",description:"Once you finish training the model and are happy with it, you may need to consider saving the model. Otherwise, you will loose the model once you close the session. The model you create in R session is not persistent, only existing in the memory temporarily. Most of the time, training is a time-consuming process. Without saving the model, you have to run the training algorithm again and again. This is especially not good to happen in production.",date:"2018-01-05T00:00:00.000Z",tags:[{label:"Data Science",permalink:"/data-science/tags/data-science"},{label:"Machine Learning",permalink:"/data-science/tags/machine-learning"},{label:"Save Models",permalink:"/data-science/tags/save-models"},{label:"R",permalink:"/data-science/tags/r"}],readingTime:2.47,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"data-science/machine-learning/how-to-save-machine-learning-models-in-r",title:"How To Save Machine Learning Models In R",tags:["Data Science","Machine Learning","Save Models","R"]},unlisted:!1,prevItem:{title:"Predict Internet Popularity By Optimising Neural Networks With R",permalink:"/data-science/data-science/machine-learning/predict-internet-popularity-by-optimising-neural-networks-with-r"},nextItem:{title:"How To Deploy Spark Applications In AWS With EMR and Data Pipeline",permalink:"/data-science/data-science/infra/how-to-deploy-spark-applications-in-aws-with-emr-and-data-pipeline"}},l={authorsImageUrls:[]},d=[{value:"save() and load()",id:"save-and-load",level:3},{value:"saveRDS() and readRDS()",id:"saverds-and-readrds",level:3}];function c(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Once you finish training the model and are happy with it, you may need to consider saving the model. Otherwise, you will loose the model once you close the session. The model you create in R session is not persistent, only existing in the memory temporarily. Most of the time, training is a time-consuming process. Without saving the model, you have to run the training algorithm again and again. This is especially not good to happen in production."}),"\n",(0,t.jsx)(n.p,{children:"In production, it is ideal to have a trained model saved and your code are only loading and using it to predict the outcome on the new dataset."}),"\n",(0,t.jsx)(n.p,{children:"There are two ways to save and load models in R. Let\u2019s have a look at them."}),"\n",(0,t.jsx)(n.h3,{id:"save-and-load",children:"save() and load()"}),"\n",(0,t.jsx)(n.p,{children:"You can save named object to a file and load it in the later session. With save(), you have to load it with the same name. Here is the example of saving the optimised neural networks model created in the previous post. The model name is model_nnet."}),"\n",(0,t.jsx)(n.p,{children:"Let\u2019s save the model. If you want to deploy it, you can push .rda file with your code to production."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-R",children:'save(model_nnet, file = "/tmp/model_nnet.rda")\n'})}),"\n",(0,t.jsx)(n.p,{children:"Once you successfully save it, close the current R session. Then, you can load it back in the new session. It\u2019s ready for use."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-R",children:'load(file = "/tmp/model_nnet.rda")\n'})}),"\n",(0,t.jsx)(n.h3,{id:"saverds-and-readrds",children:"saveRDS() and readRDS()"}),"\n",(0,t.jsx)(n.p,{children:"saveRDS() does not save the object name. Therefore, when you load it back, you can name it whatever you want (see below). While you can save many objects into a file with save(), saveRDS() only saves one object at a time as it is a lower-level function. saveRDS() also serialise an R object, which some people say better. But, most of the time, it really doesn\u2019t matter. The model saved with save() and saveRDS() is the same. You will get the same predictive outcome."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-R",children:'saveRDS(model_nnet, file = "/tmp/model_nnet2.rda")\n'})}),"\n",(0,t.jsx)(n.p,{children:"As mentioned above, you can load it with whatever name you want (in this case, loaded as model2)."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-R",children:'model2 <- readRDS("/tmp/model_nnet2.rda")\n'})}),"\n",(0,t.jsx)(n.p,{children:"Check to see if both models are loaded."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'> ls()\n> [1] "model_nnet" "model2"\n> For sanity check, you can plot them.\n\nplotnet(model_nnet)\nplotnet(model2)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Common Warning Handling"}),"\n",(0,t.jsx)(n.p,{children:"When you try to save the model with either save() or saveRDS(), you may get the warnings such as \u2018display list redraw incomplete\u2019 and \u2018invalid graphics state\u2019 as below."}),"\n",(0,t.jsx)(n.p,{children:"Warning messages:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"1: In doTryCatch(return(expr), name, parentenv, handler) :\ndisplay list redraw incomplete\n2: In doTryCatch(return(expr), name, parentenv, handler) :\ninvalid graphics state\n3: In doTryCatch(return(expr), name, parentenv, handler) :\ninvalid graphics state\n"})}),"\n",(0,t.jsx)(n.p,{children:"When you have these warnings, you need to reset your graphic device by running dev.off(). For example, if you have a plot in the R Studio viewer, you will probably get them. Once you reset it with dev.off(), you can save the model without warning."}),"\n",(0,t.jsx)(n.p,{children:"Yep, now you are an expert in saving R models!"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>r});var t=a(96540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
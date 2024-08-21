"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[4157],{26468:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(74848),r=a(28453);const i={slug:"data-science/machine-learning/predict-internet-popularity-by-optimising-neural-networks-with-r",title:"Predict Internet Popularity By Optimising Neural Networks With R",tags:["Data Science","Machine Learning","caret","Hyper Parameter Search","Neural Networks","nnet","R"]},s=void 0,o={permalink:"/data-science/data-science/machine-learning/predict-internet-popularity-by-optimising-neural-networks-with-r",source:"@site/data-science/machine-learning/2018-01-05-internet-popularity-r.md",title:"Predict Internet Popularity By Optimising Neural Networks With R",description:"Writing code to do machine learning is easy. What makes it difficult is the optimisation. By large, there are two ways to optimise your model.",date:"2018-01-05T00:00:00.000Z",tags:[{label:"Data Science",permalink:"/data-science/tags/data-science"},{label:"Machine Learning",permalink:"/data-science/tags/machine-learning"},{label:"caret",permalink:"/data-science/tags/caret"},{label:"Hyper Parameter Search",permalink:"/data-science/tags/hyper-parameter-search"},{label:"Neural Networks",permalink:"/data-science/tags/neural-networks"},{label:"nnet",permalink:"/data-science/tags/nnet"},{label:"R",permalink:"/data-science/tags/r"}],readingTime:9.83,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"data-science/machine-learning/predict-internet-popularity-by-optimising-neural-networks-with-r",title:"Predict Internet Popularity By Optimising Neural Networks With R",tags:["Data Science","Machine Learning","caret","Hyper Parameter Search","Neural Networks","nnet","R"]},unlisted:!1,prevItem:{title:"Predict Internet Popularity By Optimising Neural Networks With Python",permalink:"/data-science/data-science/machine-learning/predict-internet-popularity-by-optimising-neural-networks-with-python"},nextItem:{title:"How To Save Machine Learning Models In R",permalink:"/data-science/data-science/machine-learning/how-to-save-machine-learning-models-in-r"}},l={authorsImageUrls:[]},c=[{value:"Neural Networks Hyperparameter Search",id:"neural-networks-hyperparameter-search",level:3},{value:"Comparing It With Default NN Model",id:"comparing-it-with-default-nn-model",level:3},{value:"Should We Normalise the Dataset?",id:"should-we-normalise-the-dataset",level:3},{value:"Further Grid Search",id:"further-grid-search",level:3},{value:"Your Turn",id:"your-turn",level:3},{value:"Reference",id:"reference",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Writing code to do machine learning is easy. What makes it difficult is the optimisation. By large, there are two ways to optimise your model."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Feature selection & transformation"}),"\n",(0,n.jsx)(t.li,{children:"Model parameter optimisation"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Both are hard-core topics and neither can be covered in this post. Feature selection and transformation often require subject matter expertise on top of statistical computation."}),"\n",(0,n.jsx)(t.p,{children:"In this blog, I want to focus on parameter optimisation by using the power of the caret package. The caret package makes it easy to do hyper parameter search. The model parameter optimisation is often called hyperparameter optimisation. We search and optimise over all possible parameter values for the model and pick the ones perform the best (the best hyperparameter set)."}),"\n",(0,n.jsx)(t.p,{children:"Here are some of the commonly used for hyperparameter search strategies."}),"\n",(0,n.jsx)(t.p,{children:"Grid Search (Not as efficient, but easy)\nRandom Search (Efficient in certain scenarios)\nBayesian Optimisation (Efficient in general)\nThe default search method for caret is grid search which will be used here. Another question is which parameters to search. This depends on the method or package you use."}),"\n",(0,n.jsx)(t.h3,{id:"neural-networks-hyperparameter-search",children:"Neural Networks Hyperparameter Search"}),"\n",(0,n.jsx)(t.p,{children:"Neural networks has many different flavours. I chose the nnet package because it uses the often-called vanilla neural net (a.k.a the single layer back-propagation network or single layer perceptron) and is simpler to tune hyperparameters compared to other more complicated neural networks. In this method, you don\u2019t need to determine the number of layers as it has only one. What you need to do is to choose the size of the neurons in the hidden layer."}),"\n",(0,n.jsx)(t.p,{children:"The bigger neuron size you use, the more complicated the model become. Therefore, more neurons tend to become over-fitting. Of course, this is dependent on the dataset. It is only determined by experimentation. However, smaller size is a good rule of thumb."}),"\n",(0,n.jsxs)(t.p,{children:["Neural networks sound complicated and magical. But, if you deconstruct them, they are basically non-linear statistical model. Hence, we should try to optimise the regularisation parameter. ",(0,n.jsx)(t.code,{children:"nnet"})," has a parameter called decay for regularisation. In short, regularisation prevent over-fitting by penalising over-fitted training models."]}),"\n",(0,n.jsxs)(t.p,{children:["We will set hyperparameter ranges for size and decay for ",(0,n.jsx)(t.code,{children:"nnet"})," optimisation."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Sampling"})}),"\n",(0,n.jsx)(t.p,{children:"Another thing you have to consider is sampling. Again, there are a few different ways like Random Sub Sampling, Stratified Sampling or Cross Validation. In this example, I will use the classic k-fold cross validation method (where k = 10). A sampling method and parameters can be specified in the trControl parameter in the train function in caret."}),"\n",(0,n.jsx)(t.p,{children:"K-fold Cross Validation split the training data into k pieces. Then, it uses k minus 1 folds to estimate a model and test it on the remaining 1 fold (called validation set) for each candidate parameter values. With grid search, it will calculate the average accuracy per parameter set to produce the best set."}),"\n",(0,n.jsx)(t.p,{children:"The drawback of grid search is that you are assuming a possible range for the hyperparameter set. Therefore, you cannot reach it when it exists outside of your pre-defined set. But, it\u2019s a good place to start."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Dataset"})}),"\n",(0,n.jsx)(t.p,{children:"I am using the data set Online News Popularity Data Set from the UCI Machine Learning repository. The dataset was used in the publication here. Each row is an online news article containing a bunch of attributes as well as the numbers of social media shares. There are 58 features and what you predict is a binary classifier of the article, \u2018popular\u2019 or \u2018unpopular\u2019. The classification category was made by setting the threshold of 1400 shares. This number was chosen in the paper because it produced a balanced popular/unpopular class distribution (Fernandes et al. 2015). The goal is to predict if the article is popular or not by using the available features."}),"\n",(0,n.jsxs)(t.p,{children:["In the paper, they used Python\u2019s ",(0,n.jsx)(t.code,{children:"scikit-learn"})," to do Random Forest, Adaptive Boosting, Support Vector Machine, K_Nearest Neighbour and Na\xefve Bayes. We can use their results as a benchmark to test our neural networks model performance."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Code"})}),"\n",(0,n.jsx)(t.p,{children:"(1) Install and import required libraries."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-R",children:"library(caret)\nlibrary(nnet)\nlibrary(e1071)\nlibrary(NeuralNetTools)\nlibrary(doParallel)\nlibrary(ROCR)\n"})}),"\n",(0,n.jsx)(t.p,{children:"(2) Download csv file here. Load the data and create a target field which contains a binary classifier(popular and unpopular). I used 1400 as the threshold as in Fernandes et al. 2015. I removed non-predictors according to the article."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-R",children:'shares <- read.csv("/tmp/OnlineNewsPopularity.csv")\nshares$Popularity <- as.factor(ifelse(shares$shares >= 1400, "popular", "unpopular"))\nshares2 <- shares[, -c(1, 2, 61)\n'})}),"\n",(0,n.jsx)(t.p,{children:"(3) Split the data set into training and testing with seed for repeatability."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-R",children:"set.seed(1000)\ninTrain <- createDataPartition(shares2$Popularity, p=0.7, list=F)\ntrain <- shares2[inTrain, ]\ntest <- shares2[-inTrain, ]]\n"})}),"\n",(0,n.jsx)(t.p,{children:"(4) Now, it\u2019s time for training and predicting! You can set the sampling methods with the trainControl function and pass it as the trControl parameter in the train function. I defined the tuneGrid as 3 size and 3 decay options. The caret package will conduct the accuracy search to find the best combo. The final values used for the model were size = 1 and decay = 0.1 (you can see this by typing model_nnet in the console)."}),"\n",(0,n.jsx)(t.p,{children:"The caret package supports parallel processing. R by default uses only a single UPC. Parallel processing will enable you to do computation with all the CPUs in your computer. It is easy to set it up. For Windows, you need to use the doParallel package. Once you register the cores with the registerDoParallel function, caret will execute it automatically."}),"\n",(0,n.jsx)(t.p,{children:"You can visualise the model by the plotnet function from NeuralNetTools."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-R",children:"set.seed(1000)\n# Set up Parallel Computing\ncl <- makeCluster(4)\nregisterDoParallel(cl)\n\n# Train with caret\nnumFolds <- trainControl(method = 'cv', number = 10, classProbs = TRUE, verboseIter = TRUE,\n                         preProcOptions = list(thresh = 0.75, ICAcomp = 3, k = 5))\n\nmodel_nnet<- train(Popularity~., data=train, method='nnet', trace=F,\n                   preProcess = c('center', 'scale'), trControl = numFolds,\n                   tuneGrid=expand.grid(.size=c(1,5,10), .decay=c(0,0.001,0.1)))\n\n# Plot model and predict\nplotnet(model_nnet)\ntrain_pred <- predict(model_nnet, newdata=train, type=\"raw\")\ntest_pred <- predict(model_nnet, newdata=test, type=\"raw\")\nHere are some notes for errors and warnings when you are training the model.\n\nThe linout parameter cannot be True. You will get the error message, \u2018entropy fit only for logistic units\u2019. The default value for linout is FALSE.\n"})}),"\n",(0,n.jsx)(t.p,{children:"In trainControl(), summaryFunction=twoClassSummary will result in a warning: The metric \u201cAccuracy\u201d was not in the result set. ROC will be used instead.\u201d This parameter can be omitted. It will use Accuracy by default for categorical prediction."}),"\n",(0,n.jsx)(t.p,{children:"(5) In R, you can use confusionMatrix() to evaluate the model. It will give you the performance metrics such as accuracy, balanced accuracy, sensitivity, specificity and so on. I created a custom function for evaluation because accuracy, precision, recall, F1 and AUC were used in the paper and I wanted to get the same metrics for benchmarking."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-R",children:"evaluate <- function(pred, actual){\n  tab <- table(pred, actual$Popularity)\n  tp <- tab[1,1]\n  tn <- tab[2,2]\n  fp <- tab[2,1]\n  fn <- tab[1,2]\n  accuracy <- (tp + tn)/(tp + tn + fp + fn)\n  precision <- tp/(tp+fp)\n  recall <- tp/(tp + fn)\n  F1 <- 2*(precision*recall)/(precision+recall)\n\n  actual_label <- ifelse(actual$Popularity=='popular', 1, 0)\n  pred_label <- ifelse(pred=='popular', 1, 0)\n  pred_OCR= ROCR::prediction(pred_label, actual_label)\n  perf = performance(pred_OCR, 'tpr', 'fpr')\n  plot(perf)\n  AUC <- as.numeric(performance(pred_OCR, \"auc\")@y.values)\n  print(\"Prediction Evaluation Outcome\")\n  eval <- as.data.frame(cbind(round(accuracy, 2), round(precision, 2), round(recall, 2), round(F1, 2), round(AUC, 2)))\n  colnames(eval) = c('accuracy','precision','recall','F1','AUC')\n  print(eval)\n}\n\nevaluate(train_pred, train)\nevaluate(test_pred, test)\n\n# Confusion Matrix from caret package for evaluation\n# Only for accuracy\nconfusionMatrix(train_pred, train$Popularity)$overall[1]\nconfusionMatrix(test_pred, test$Popularity)$overall[1]\n# confusion matrix and all the metrics\nconfusionMatrix(train_pred, train$Popularity)\nconfusionMatrix(test_pred, test$Popularity)\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Output"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"nnet model",src:a(30793).A+"",width:"1114",height:"747"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"evaluation",src:a(18193).A+"",width:"352",height:"151"})}),"\n",(0,n.jsx)(t.h3,{id:"comparing-it-with-default-nn-model",children:"Comparing It With Default NN Model"}),"\n",(0,n.jsx)(t.p,{children:"What if we used the model without any optimisation? Check out the outcome. It is pretty much as good as random picks. Now, you see the power of the simple caret optimisation!"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-R",children:'model_default <- nnet(Popularity~., data=train, size=1)\nplotnet(model_default)\n\ntrain_pred_default <- predict(model_default, newdata=train, type="class")\ntest_pred_default <- predict(model_default, newdata=test, type="class")\n\nevaluate(train_pred_default, train)\nevaluate(test_pred_default, test)\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"evaluation 2",src:a(67828).A+"",width:"352",height:"148"})}),"\n",(0,n.jsx)(t.h3,{id:"should-we-normalise-the-dataset",children:"Should We Normalise the Dataset?"}),"\n",(0,n.jsx)(t.p,{children:"It really depends on the data. The nnet package generally performs fine without normalisation unless you have features in completely different scale. Normalisation is usually recommended for Neural Networks for better accuracy and faster training speed."}),"\n",(0,n.jsx)(t.p,{children:"Well, let\u2019s test it. nnet takes factor and numeric values as features. In the first example, all field types are numeric. Here, I converted categorical variables into factors and normalised other numeric fields."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-R",children:"# Normalising data\nindex <- c(12:17, 30:37, 59)\ncolnames(shares2[,index]) # checking the selected columns by index\ntmp_df1 <- as.data.frame(scale(shares2[, -index]))\ntmp_df2 <- lapply(shares2[, index], as.factor)\nshares_norm <- cbind(tmp_df2, tmp_df1)\n\n# create training and testing set. Use the partition created above\nset.seed(1000)\ninTrain <- createDataPartition(shares2$Popularity, p=0.7, list=F)\ntrain_norm <- shares_norm[inTrain, ]\ntest_norm <- shares_norm[-inTrain, ]\n\n# train & predict\nset.seed(1000)\ncl <- makeCluster(4)\nregisterDoParallel(cl)\nnumFolds <- trainControl(method = 'cv', number = 10, classProbs = TRUE, verboseIter = TRUE,\n                         preProcOptions = list(thresh = 0.75, ICAcomp = 3, k = 5))\n\nmodel_nnet_norm <- train(Popularity~., data=train_norm, method='nnet', trace=F,\n                         preProcess = c('center', 'scale'), trControl = numFolds,\n                         tuneGrid=expand.grid(.size=c(1,5,10), .decay=c(0,0.001,0.1)))\n\nmodel_nnet_norm # The final values used for the model were size = 1 and decay = 0.\n\ntrain_pred_norm <- predict(model_nnet_norm, newdata=train_norm, type=\"raw\")\ntest_pred_norm <- predict(model_nnet_norm, newdata=test_norm, type=\"raw\")\n\nevaluate(train_pred_norm, train_norm)\nevaluate(test_pred_norm, test_norm)\n"})}),"\n",(0,n.jsx)(t.p,{children:"Testing accuracy is slightly worse. But, overall it is similar. I think it is still good to test on the normalised dataset when you are modelling with neural networks. Normalised data usually give us a different model. In this case, the final values used for the model were size = 1 and decay = 0."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"evaluation 3",src:a(78839).A+"",width:"365",height:"149"})}),"\n",(0,n.jsx)(t.p,{children:"Let\u2019s Benchmark!"}),"\n",(0,n.jsx)(t.p,{children:"Here is the performance metric table from the paper (Fernandes et al. 2015). Our model has the same accuracy as AdaBoost and SVM. It preformed slightly worse then RF. We beat them in Precision (0.7). However, I don\u2019t think our model is superior because we have quite low AUC compared to all the models in the paper. Overall, I am happy with what I got. You can really see what simple optimisation can make difference!"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"benchmark",src:a(49920).A+"",width:"1030",height:"243"})}),"\n",(0,n.jsx)(t.h3,{id:"further-grid-search",children:"Further Grid Search"}),"\n",(0,n.jsx)(t.p,{children:"My hyperparameter range for the size was (1, 5, 10) and 1 became the best hyperparameter. OK, 5 neuron was probably too over-fitting. But, Isn\u2019t 1 neuron too simple? Surely, having a few extra neurons would lead to better performance? I decided to investigate it further by setting size range to (1, 2, 3, 4)."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-R",children:"set.seed(1000)\ncl <- makeCluster(4)\nregisterDoParallel(cl)\nnumFolds <- trainControl(method = 'cv', number = 10, classProbs = TRUE, verboseIter = TRUE,\n                         preProcOptions = list(thresh = 0.75, ICAcomp = 3, k = 5))\n\nmodel_nnet<- train(Popularity~., data=train, method='nnet', trace=F,\n                   preProcess = c('center', 'scale'), trControl = numFolds,\n                   tuneGrid=expand.grid(.size=c(1,2,3,4), .decay=c(0.001,0.01,0.1)))\nmodel_nnet\nplotnet(model_nnet)\nplotnet(model2)\ntrain_pred <- predict(model_nnet, newdata=train, type=\"raw\")\ntest_pred <- predict(model_nnet, newdata=test, type=\"raw\")\n\nevaluate(train_pred, train)\nevaluate(test_pred, test)\n"})}),"\n",(0,n.jsx)(t.p,{children:"The best hyperparameters turned out to be size = 4 and decay = 0.1. With these parameters, I didn\u2019t see any improvement on test dataset prediction. I even observed the model was overfitting. Generally speaking, complex neural networks tend to overfit. This exercise somehow reminded me of Occam\u2019s razor. By paraphrasing it, the simplest is the best given everything is the same. I think Occam\u2019s razor is often sited in machine learning as the reminder that simpler is often better."}),"\n",(0,n.jsx)(t.p,{children:"Performance for size = 4 and decay = 0.1 is below:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"evaluation 4",src:a(47642).A+"",width:"384",height:"149"})}),"\n",(0,n.jsx)(t.h3,{id:"your-turn",children:"Your Turn"}),"\n",(0,n.jsx)(t.p,{children:"Can we further optimise Neural Network model here by using different search or sampling methods?\nR has other neural network packages like neuralnet or RSNNS. Do they perform better than nnet?\nCheck all the models supported by the caret package. We can basically do all the methods used in the paper. See if we can use these methods and benchmark against the results?"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-R",children:"library(caret)\nnames(getModelInfo())\n"})}),"\n",(0,n.jsx)(t.p,{children:"Fun!"}),"\n",(0,n.jsx)(t.h3,{id:"reference",children:"Reference"}),"\n",(0,n.jsxs)(t.p,{children:["Fernandes, P. Vinagre and P. Cortez. A Proactive Intelligent Decision Support System for Predicting the Popularity of Online News. Proceedings of the 17th EPIA 2015 \u2013 Portuguese Conference on Artificial Intelligence, September, Coimbra, Portugal (",(0,n.jsx)(t.a,{href:"https://repositorium.sdum.uminho.pt/bitstream/1822/39169/1/main.pdf",children:"https://repositorium.sdum.uminho.pt/bitstream/1822/39169/1/main.pdf"}),")"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},18193:(e,t,a)=>{a.d(t,{A:()=>n});const n="data:image/webp;base64,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"},67828:(e,t,a)=>{a.d(t,{A:()=>n});const n="data:image/webp;base64,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"},78839:(e,t,a)=>{a.d(t,{A:()=>n});const n="data:image/webp;base64,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"},47642:(e,t,a)=>{a.d(t,{A:()=>n});const n="data:image/webp;base64,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"},30793:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/nnet-model-82b4005ac1614715c54615b93bdbd010.webp"},49920:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/performance-benchmark-ea38c24d2c5f25bf7d3e11d4a48a41bd.webp"},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var n=a(96540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
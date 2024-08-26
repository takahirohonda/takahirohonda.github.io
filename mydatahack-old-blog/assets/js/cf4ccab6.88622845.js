"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[4539],{66165:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=t(74848),i=t(28453);const a={slug:"data-science/visualisation/how-to-do-sentiment-analysis-on-your-favourite-book-with-r",title:"How To Do Sentiment Analysis On Your Favourite Book With R",tags:["Data Science","R","Sentiment Analysis","Text Analytics Visualisation"]},o=void 0,r={permalink:"/mydatahack-old-blog/data-science/data-science/visualisation/how-to-do-sentiment-analysis-on-your-favourite-book-with-r",source:"@site/data-science/visualisation/2018-01-03-sentiment-analysis.md",title:"How To Do Sentiment Analysis On Your Favourite Book With R",description:"I love dissecting and analysing my favourite books by reading them again and again, discussing them with my like-minded friends, getting to know the authors and reading other people\u2019s writings about them.  My obsession with books lead me to thinking, how can I visualise them in interesting ways? Making Word Cloud is an easy and fun way to visualise your favourite book as in the previous post. In this post, we will go down deeper into the world of text analytics by using sentiment analysis. I will show you how to split the text by sentence, conduct sentence-wise sentiment analysis and create an interactive plot that shows how sentiment changes as the story progresses.",date:"2018-01-03T00:00:00.000Z",tags:[{label:"Data Science",permalink:"/mydatahack-old-blog/data-science/tags/data-science"},{label:"R",permalink:"/mydatahack-old-blog/data-science/tags/r"},{label:"Sentiment Analysis",permalink:"/mydatahack-old-blog/data-science/tags/sentiment-analysis"},{label:"Text Analytics Visualisation",permalink:"/mydatahack-old-blog/data-science/tags/text-analytics-visualisation"}],readingTime:7.485,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"data-science/visualisation/how-to-do-sentiment-analysis-on-your-favourite-book-with-r",title:"How To Do Sentiment Analysis On Your Favourite Book With R",tags:["Data Science","R","Sentiment Analysis","Text Analytics Visualisation"]},unlisted:!1,prevItem:{title:"How To Deploy Spark Applications In AWS With EMR and Data Pipeline",permalink:"/mydatahack-old-blog/data-science/data-science/infra/how-to-deploy-spark-applications-in-aws-with-emr-and-data-pipeline"},nextItem:{title:"How To Create a Word Cloud For Your Favourite Book With R",permalink:"/mydatahack-old-blog/data-science/data-science/visualisation/how-to-create-a-word-cloud-for-your-favourite-book-with-r"}},l={authorsImageUrls:[]},d=[{value:"Summary Steps",id:"summary-steps",level:3},{value:"Steps",id:"steps",level:3},{value:"Discussion",id:"discussion",level:2}];function c(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"I love dissecting and analysing my favourite books by reading them again and again, discussing them with my like-minded friends, getting to know the authors and reading other people\u2019s writings about them.  My obsession with books lead me to thinking, how can I visualise them in interesting ways? Making Word Cloud is an easy and fun way to visualise your favourite book as in the previous post. In this post, we will go down deeper into the world of text analytics by using sentiment analysis. I will show you how to split the text by sentence, conduct sentence-wise sentiment analysis and create an interactive plot that shows how sentiment changes as the story progresses."}),"\n",(0,s.jsx)(n.p,{children:"There are many different ways to do sentiment analysis. The easiest way is to split the sentence by word and score each word by looking up word sentiment dictionary. The tidytext packages in R has a build in function to do a basic sentiment analysis. The package documentation from CRAN shows sentiment analysis on Jane Austin text. This one with Harry Potter is also fun to read. For more advanced Natural Language Processing (NLP), you can use Stanford CoreNLP, which is very powerful, but cumbersome to use and can be slow at a time."}),"\n",(0,s.jsx)(n.p,{children:"In this post, I am using sentimentr. The package is fast and super easy to use. It does sentence-wise sentiment analysis by using dictionary lookup and valence shifter. With valence shifter, it updates the normal word sentiment dictionary look up score with the score by looking at polarised word (such as really or hardly). It reflects the sentiment more accurately than just scoring individual words. It also has the get_sentense function to splice the text into sentences by using regular expressions."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"sentimentr"})," package really makes sentiment analysis pop and accessible. I really love using it."]}),"\n",(0,s.jsx)(n.p,{children:"Sentence analysis on literature is hard because of slang, unconventional style and expressions, unambiguous sentence separation, sarcasms, jokes and so on. Despite the outcome is not perfect, you\u2019ll have a lot of fun!"}),"\n",(0,s.jsx)(n.p,{children:"As the continuation from the previous post, I am using one of my favourite book, On The Road by the greatest Beat hero Jack Kerouac."}),"\n",(0,s.jsx)(n.p,{children:"Ok, let\u2019s code!"}),"\n",(0,s.jsx)(n.h3,{id:"summary-steps",children:"Summary Steps"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Download a pdf file and convert it into text."}),"\n",(0,s.jsx)(n.li,{children:"Create a data frame with row per sentence and do clean up."}),"\n",(0,s.jsx)(n.li,{children:"Further split the sentence by get_sentence() and create a new data frame"}),"\n",(0,s.jsx)(n.li,{children:"Get sentiment per sentence."}),"\n",(0,s.jsxs)(n.li,{children:["Plot the sentiment by ",(0,s.jsx)(n.code,{children:"plotly"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Check the results and have fun!"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,s.jsxs)(n.p,{children:["(1) Get the pdf file of On The Road from ",(0,s.jsx)(n.code,{children:"freeditorial.com"})," and use ",(0,s.jsx)(n.code,{children:"pdftools"})," to convert it to text. This step is the same as in the previous post."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-R",children:'library(pdftools)\ndownload.file("https://freeditorial.com/en/books/on-the-road/downloadbookepub/pdf",\n"/tmp/on_the_road.pdf", mode = "wb")\ntxt <- pdf_text(\'/tmp/on_the_road.pdf\')\n'})}),"\n",(0,s.jsx)(n.p,{children:"(2) Create the first data frame with row by sentence. For sentiment analysis, cleaning up the text has to be a little bit more diligent than just making a word cloud. You just need to look at your text file to determine what is needed. The regular expression is the way to go to clean up the text data. Use online resource for detailed examples as well as a quick reference. Make sure to test your regex with a short example!"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-R",children:"lines <- ''\nfor (i in 2:length(txt)) {\ntmp <- gsub('\\r\\n', ' ', txt[i]) # \\r\\n for Windows, \\n for Linux\nlines <- paste(lines, tmp, sep=' ')\n}\n\nvec <- strsplit(lines, '\\\\.')\ndf <- data.frame(vec)\n\ndf <- as.data.frame(df[-c(nrow(df), nrow(df)-1), ]) # Remove Last 2 lines\ncolnames(df)[1] = 'line' # Rename Columns\n\ndf$line <- gsub(\"\xab\", \"\", gsub(\"\xbb\", \"\", df$line))\ndf$line <- gsub('^\\\\s+PART\\\\s+[A-Z]+\\\\s+', '', df$line)\ndf$line <- as.character(trimws(df$line, 'both'))\ndf$line <- gsub('^[1-5]\\\\s{2,}', '',  df$line)\ndf$line <- gsub('- -, ', '',df$line)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["(3) Further split the sentences by the power of get_sentences function. This step is necessary to get a sentiment score per sentence according to the ",(0,s.jsx)(n.code,{children:"sentimentr"})," package. The sentiment function in ",(0,s.jsx)(n.code,{children:"sentimentr"})," may returns more than one sentiment score per sentence if you do not do this."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-R",children:"library(sentimentr)\nsentence <- c()\nfor (line in df$line) {\ntmp <- get_sentences(line)\nfor(i in 1:length(tmp[[1]])) {\nsentence_tmp <- tmp[[1]][i]\nsentence <- c(sentence, sentence_tmp)\n}\n}\n\ndf_sentr <- data.frame(sentence)\ndf_sentr$sentence <- as.character(df_sentr$sentence)\n(4) Once your data frame is ready, do the scoring with sentiment(). Add negative, positive and neutral indicator for visualisation.\n\nsentiment <- sentiment(df_sentr$sentence)\n\ndf_sentr$sentiment <- as.numeric(sentiment$sentiment)\ndf_sentr$pntag <- ifelse(sentiment$sentiment == 0, 'Neutral',\nifelse(sentiment$sentiment > 0, 'Positive',\n                                ifelse(sentiment$sentiment < 0, 'Negative', 'NA')))\n"})}),"\n",(0,s.jsxs)(n.p,{children:["(5) You can plot it with base R plot function. I like using Plotly because it becomes interactive. The x-axis shows the progress of the story and the y-axis shows the sentiment. Positive, negative and neutral sentiments are colour-coded. Once you hover the mouse over the dot, you can see the sentence. The ",(0,s.jsx)(n.code,{children:"magrittr"})," package enables the magic of the pipe (%>%) operation."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"base R plot"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-R",children:"plot(df_sentr$sentiment, type='l', pch=3)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"plotly- more fun"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-R",children:"ax <- list(\ntitle = \"Sentence\",\nzeroline = FALSE,\nshowline = FALSE,\nshowticklabels = FALSE\n)\n\nlibrary(plotly)\nlibrary(magrittr)\nplot_ly(data = df_sentr, x = ~sentence, y = ~sentiment, color = ~pntag,\ntype = 'scatter', mode = 'markers') %>% layout(xaxis = ax)\nplot_ly(data = df_sentr, y = ~sentiment, color = ~pntag,\ntype = 'scatter', mode = 'markers') %>% layout(xaxis = ax)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Output Example"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Output",src:t(86393).A+"",width:"941",height:"846"})}),"\n",(0,s.jsx)(n.p,{children:"(6) Let\u2019s check what is the most positive and the most negative and calculate the average sentiment score. I also created csv files with sentiment score above 1 and below -1."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Check max and min sentiments"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-R",children:"df_sentr$sentence[which.max(df_sentr$sentiment)]\ndf_sentr$sentence[which.min(df_sentr$sentiment)]\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Get average"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-R",children:"mean(df_sentr$sentiment)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Check positive and negative sentences"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-R",children:'check_pos <- subset(df_sentr, df_sentr$sentiment >= 1.0)\ncheck_pos <- check_pos[order(check_pos$sentiment, decreasing = T),]\nwrite.csv(check_pos, "positive.csv")\ncheck_neg <- subset(df_sentr, df_sentr$sentiment <= -1.0)\ncheck_neg <- check_neg[order(check_neg$sentiment, decreasing = F),]\nwrite.csv(check_neg, "negative.csv")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"discussion",children:"Discussion"}),"\n",(0,s.jsx)(n.p,{children:"The average sentiment score was 0.024. All the highs and lows must have cancelled each other out, coming out slightly positive just like life in general."}),"\n",(0,s.jsx)(n.p,{children:"The most positive moment in the story according to sentimentr is absolutely gold."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"I think Marylou was very, very wise leaving you, Dean, said Galatea"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Yeah, that\u2019s pretty much the best decision! On a more serious note, this is the prime example of the effect of using valence shifter in the sentiment algorithm. It has two positive polarised words (very, very) on a positive word (wise). Very twice really amplified the positive sentiment on this sentence."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Not sure about the most negative one. But, this is also the fun part, getting misplaced sentiment by an algorithm."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"He showed me rooming houses where he stayed, railroad hotels, poolhalls, diners, sidings where he jumped off the engine for grapes, Chinese restaurants where he ate, park"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Looking at the results, I think it performed well overall despite questionable sores here and there. To be fair, On The Road is a difficult one to run sentiment algorithm because it is written in a stream-of-consciousness style with many unique expressions and unclear sentence break points."}),"\n",(0,s.jsx)(n.p,{children:"Here are the top 6 positive sentences. No.2 is the classic Dean Moriarty haunted by his own madness. No.4 and 5 are questionable. No.6 is absolutely yes, I think."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"I think Marylou was very, very wise leaving you, Dean, said Galatea"}),"\n",(0,s.jsx)(n.li,{children:"Hmm, ah, yes, excellent, splendid, harrumph, egad!"}),"\n",(0,s.jsx)(n.li,{children:"It certainly was pleasant, said Hingham, looking away"}),"\n",(0,s.jsx)(n.li,{children:"Doll, Dorothy and Roy Johnson, a girl from Buffalo, Wyoming, who was Dorothy\u2019s friend, Stan, Tim Gray, Babe, me, Ed Dunkel, Tom Snark, and several others, thirteen in all"}),"\n",(0,s.jsx)(n.li,{children:"There\u2019s one last thing I want to know \u2013 But, dear Sal, you\u2019re listening, you\u2019re sitting there, we\u2019ll ask Sal"}),"\n",(0,s.jsx)(n.li,{children:"Absolutely, now, yes?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here are the bottom 6 negative sentences. Yeah, it certainly shows some low moments in the book despite of some questionable entries. No. 5 is another classic Dean Moriarty."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"He showed me rooming houses where he stayed, railroad hotels, poolhalls, diners, sidings where he jumped off the engine for grapes, Chinese restaurants where he ate, park benches where he met girls, and certain places where he\u2019d done nothing but sit and wait around"}),"\n",(0,s.jsx)(n.li,{children:"There was something paralyzed about his movements, and he did nothing about leaving the doorway, but just stood in it, muttering, Stan, and Don\u2019t go, and looking after us anxiously as we rounded the comer"}),"\n",(0,s.jsx)(n.li,{children:"Then the third day began having a terrible series of waking nightmares, and the were so absolutely horrible and grisly and green that I lay there doubled up with my hands around my knees, saying, \u2018Oh, oh, oh, ah, oh"}),"\n",(0,s.jsx)(n.li,{children:"Offisah, I heard Dean say in the most unctuous and ridiculous tones, offisah, I was only buttoning my flah"}),"\n",(0,s.jsx)(n.li,{children:"And the one to my left here, older, more sure of himself but sad"}),"\n",(0,s.jsx)(n.li,{children:"But this foolish gang was bending onward"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Wow, what a fun I had!"}),"\n",(0,s.jsx)(n.p,{children:"Now, you are ready for sentiment analysis on your favourite book!"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},86393:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/sentiment-graph-7fdc2d98047ceb7ee287a23f63a87c54.webp"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(96540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
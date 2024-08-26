"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[504],{19460:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=i(74848),o=i(28453);const r={sidebar_position:1},s="Getting Started with Lisp",a={id:"Infrastructure/Opinions/lisp",title:"Getting Started with Lisp",description:"There are good reasons why you want to learn Lisp. As Paul Graham said, the reason why you want to learn it is the same as the reason why you want to learn Latin. You probably won\u2019t use Latin. But, the knowledge will enrich your experience with the language you use daily. You don\u2019t need to learn Lisp to write the next big app or get your dream programming job, but knowing it will make you a better programmer.",source:"@site/docs/Infrastructure/Opinions/1.lisp.md",sourceDirName:"Infrastructure/Opinions",slug:"/Infrastructure/Opinions/lisp",permalink:"/mydatahack-old-blog/docs/Infrastructure/Opinions/lisp",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Opinions",permalink:"/mydatahack-old-blog/docs/category/opinions"},next:{title:"The Most Frustrating Thing About Being a Cloud Native Developer",permalink:"/mydatahack-old-blog/docs/Infrastructure/Opinions/cloud-native-dev-frustration"}},l={},c=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"getting-started-with-lisp",children:"Getting Started with Lisp"}),"\n",(0,t.jsx)(n.p,{children:"There are good reasons why you want to learn Lisp. As Paul Graham said, the reason why you want to learn it is the same as the reason why you want to learn Latin. You probably won\u2019t use Latin. But, the knowledge will enrich your experience with the language you use daily. You don\u2019t need to learn Lisp to write the next big app or get your dream programming job, but knowing it will make you a better programmer."}),"\n",(0,t.jsx)(n.p,{children:"Here are some inspirations you need to get started with Lisp."}),"\n",(0,t.jsx)(n.p,{children:"Beating the averages by Paul Graham\nHow To Become a Hacker by Eric Steven Raymond\nOk, now you are inspired and want to learn Lisp. Then, the problem is that Lisp has dialects. We need to choose one."}),"\n",(0,t.jsx)(n.p,{children:"Lisp these days has three major dialects, Common Lisp, Scheme, and Clojure. They are similar and different. Here are some of the important differences that you may want to consider when you choose which one. At the end of the day, it really doesn\u2019t matter which one you pick unless you need to work on a project that uses one of them. If you are learning it to broaden your programming knowledge, any of them is fine. In this post, I chose Common Lisp because I don\u2019t want to have anything to do with JVM and it seems to be used in a real world scenario more."}),"\n",(0,t.jsx)(n.p,{children:"Common Lisp\n\u2013 Paradigm agnostic (both functional and OOP).\n\u2013 Used more in real world problems."}),"\n",(0,t.jsx)(n.p,{children:"Scheme\n\u2013 Similar to Common Lisp.\n\u2013 Used more in an academic context, like computer science and programming language research."}),"\n",(0,t.jsx)(n.p,{children:"Clojure\n\u2013 Favours functional programming.\n\u2013 Runs on JVM (this is good and bad\u2026)"}),"\n",(0,t.jsx)(n.p,{children:"Get started with Common Lisp"}),"\n",(0,t.jsx)(n.p,{children:"(1) Install SBCL"}),"\n",(0,t.jsx)(n.p,{children:"Use command line for Linux and Mac. Use LispStick for Windows. SBCL (Steel Bank Common Lisp) is a high performance Common Lisp compiler. It provides an interactive environment and runs Lisp through the command line."}),"\n",(0,t.jsx)(n.h1,{id:"mac",children:"mac"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"brew install sbcl"})}),"\n",(0,t.jsx)(n.h1,{id:"linux",children:"linux"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"sudo apt-get install sbcl"})}),"\n",(0,t.jsx)(n.p,{children:"(2) Install Quicklisp (package manager)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -o /tmp/ql.lisp http://beta.quicklisp.org/quicklisp.lisp\n\nsbcl --no-sysinit --no-userinit --load /tmp/ql.lisp \\\n       --eval '(quicklisp-quickstart:install :path \"~/.quicklisp\")' \\\n       --eval '(ql:add-to-init-file)' \\\n       --quit\n"})}),"\n",(0,t.jsx)(n.p,{children:"(3) Run it in an interactive mode"}),"\n",(0,t.jsxs)(n.p,{children:["We can just type ",(0,t.jsx)(n.code,{children:"sbcl"})," in the bash. Then run whatever. Here is the hello world!"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'(format t "Hello World")\nYou can exit from REPL by calling quit.\n\n(quit)\n'})}),"\n",(0,t.jsx)(n.p,{children:"(4) Run it from a file"}),"\n",(0,t.jsx)(n.p,{children:"Create a file with .lisp. For an IDE, VS code with lips extension will be sufficient to start with."}),"\n",(0,t.jsx)(n.p,{children:"fib.lisp"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'(defun fib(n)\n  "Retun the nth Fibonaccie number."\n  (if (< n 2)\n    n\n    (+ (fib ( - n 1))\n      (fib (- n 2))\n    )\n  )\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Then, run the function with ",(0,t.jsx)(n.code,{children:"sbcl"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"sbcl --load fib.lisp"})}),"\n",(0,t.jsx)(n.p,{children:"Then, run the function in the console."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"(fib 30)"})}),"\n",(0,t.jsx)(n.p,{children:"(5) Compiling Lisp"}),"\n",(0,t.jsx)(n.p,{children:"Lisp is both compiled and interpreted language. We can run it interpreted or compiled."}),"\n",(0,t.jsx)(n.p,{children:"Start the REPL and this will run the function in an interpreted way."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'(load "fib.lisp")'})}),"\n",(0,t.jsxs)(n.p,{children:["This will compile the file in the same folder. It will create ",(0,t.jsx)(n.code,{children:"fib.fasl"})," file."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'(load (compile-file "fib.lisp"))'})}),"\n",(0,t.jsx)(n.p,{children:"Once you have the file, you can load the compiled file."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"sbcl --load fib.fasl"})}),"\n",(0,t.jsx)(n.p,{children:"Ok, that\u2019s the basic. This will give you enough to get started with Lisp!"}),"\n",(0,t.jsx)(n.p,{children:"(2020-11-16)"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[7764],{58788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>m,toc:()=>r});var a=n(74848),s=n(28453);const o={sidebar_position:6},i="6. Alternative to Squash Commit",m={id:"Git/squash-commit-alternative",title:"6. Alternative to Squash Commit",description:"If we have three commits that we want to squash as below, we can simply use git reset, add and commit to squash those changes into one commit.",source:"@site/docs/Git/6-squash-commit-alternative.md",sourceDirName:"Git",slug:"/Git/squash-commit-alternative",permalink:"/mydatahack-old-blog/docs/Git/squash-commit-alternative",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5. Find a Remote Branch and Fetch it to Local with Git",permalink:"/mydatahack-old-blog/docs/Git/fetch-remote-branch"},next:{title:"7. How to Add Private Key to SSH Agent with Git Bash",permalink:"/mydatahack-old-blog/docs/Git/add-private-key-ssh-agent"}},c={},r=[];function d(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"6-alternative-to-squash-commit",children:"6. Alternative to Squash Commit"}),"\n",(0,a.jsx)(t.p,{children:"If we have three commits that we want to squash as below, we can simply use git reset, add and commit to squash those changes into one commit."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"commit edba792d5ea2aec40f413a23bf539fa25270da65\nAuthor: mdh\nDate:   Thu Feb 27 09:00:16 2020 +1100\n\n    Updated model3\n\ncommit 8ea10ef480c8cde59b2d78ae0fbe5367f877e59d\nAuthor: mdh\nDate:   Thu Feb 27 08:59:51 2020 +1100\n\n    Updated model 2\n\ncommit d5da1aed0b45d546e95e9bc01207d73a115ef337\nAuthor: mdh\nDate:   Thu Feb 27 08:59:20 2020 +1100\n\n    updated model\n\ncommit 7bd22703c418ffa9bd92cbbb06fb92926776211e\nAuthor: mdh\nDate:   Thu Feb 27 08:58:36 2020 +1100\n\n    initial commit\n</pre>\n\nFirst, we reset to the initial commit. Reset unstage the change, but the change still remains.\n\n```bash\n$ git reset 7bd22703c418ffa9bd92cbbb06fb92926776211e\nUnstaged changes after reset:\nM       CsvProcessor/Models/UniversityRankingModel.cs\nM       CsvProcessor/Program.cs\n"})}),"\n",(0,a.jsx)(t.p,{children:"Then, we can add and commit as usual. It will create a single commit with all the changes."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"commit dc41d5ae2950b962c5cc5313caa1160429db8d25 (HEAD -> squash-test)\nAuthor: mdh\nDate:   Thu Feb 27 09:21:25 2020 +1100\n\n    model update\n\ncommit 7bd22703c418ffa9bd92cbbb06fb92926776211e\nAuthor: mdh\nDate:   Thu Feb 27 08:58:36 2020 +1100\n\n    initial commit\n"})}),"\n",(0,a.jsx)(t.p,{children:"Of course, you can try to rebase -i on the number of commit or sha"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"> git rebase -i HEAD~3 (this means rebasing in the last 3 commits)\nor\n> git rebase -i [SHA]\nor simply rebase to the master to see all the branch commit\n> git rebase -i master\n"})}),"\n",(0,a.jsx)(t.p,{children:"On the vim editor we can make the beginning of the commit as pick and the rest as squash. As rebasing changed the commit history, you need to force push to the remote branch."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pick 5641b70 model update1\nsquash 3c5fe33 model update2\nsquash 83b7e45 model update3\n\n# Rebase 7bd2270..83b7e45 onto 7bd2270 (3 commands)\n#\n# Commands:\n# p, pick <commit> = use commit\n# r, reword <commit> = use commit, but edit the commit message\n# e, edit <commit> = use commit, but stop for amending\n# s, squash <commit> = use commit, but meld into previous commit\n# f, fixup <commit> = like \"squash\", but discard this commit's log message\n# x, exec <command> = run command (the rest of the line) using shell\n# d, drop <commit> = remove commit\n# l, label <label> = label current HEAD with a name\n# t, reset <label> = reset HEAD to a label\n# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]\n# .       create a merge commit using the original merge commit's\n# .       message (or the oneline, if no original merge commit was\n# .       specified). Use -c <commit> to reword the commit message.\n"})}),"\n",(0,a.jsx)(t.p,{children:"(2020-02-28)"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>m});var a=n(96540);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function m(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);
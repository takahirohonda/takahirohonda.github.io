"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[303],{82323:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var a=t(74848),o=t(28453);const s={sidebar_position:18},i="How To Launch an EC2 Instance From AMI in AWS",r={id:"Infrastructure/AWS/rds-subnet",title:"How To Launch an EC2 Instance From AMI in AWS",description:"Let\u2019s launch an Linux EC2 Instance From AMI. In this example, I am launching Linux Centos 7 from Amazone Machine Image. You can choose whichever OS you want for the use case we\u2019ve been working on here.",source:"@site/docs/Infrastructure/AWS/18.rds-subnet.md",sourceDirName:"Infrastructure/AWS",slug:"/Infrastructure/AWS/rds-subnet",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Infrastructure/AWS/rds-subnet",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"How To Launch RDS Instance In a Specific Subnet",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Infrastructure/AWS/ec2-ami"},next:{title:"How To Attach EBS Volume to EC2 Linux Instance In AWS",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Infrastructure/AWS/ebs-volume-to-ec2"}},c={},h=[];function p(e){const n={h1:"h1",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"how-to-launch-an-ec2-instance-from-ami-in-aws",children:"How To Launch an EC2 Instance From AMI in AWS"}),"\n",(0,a.jsx)(n.p,{children:"Let\u2019s launch an Linux EC2 Instance From AMI. In this example, I am launching Linux Centos 7 from Amazone Machine Image. You can choose whichever OS you want for the use case we\u2019ve been working on here."}),"\n",(0,a.jsx)(n.p,{children:"As a reminder, this is the plan. We are going to launch EC2 in Subnet A in availability zone 1. The public IP address is Elastic IP Address."}),"\n",(0,a.jsx)(n.p,{children:"Big Picture"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"img",src:t(1766).A+"",width:"912",height:"732"})}),"\n",(0,a.jsx)(n.p,{children:"This is a step in How To Create Your Personal Data Science Computing Environment In AWS."}),"\n",(0,a.jsx)(n.p,{children:"Steps"}),"\n",(0,a.jsx)(n.p,{children:"(1) Go to EC2 Dashboard and click Launch Instance."}),"\n",(0,a.jsx)(n.p,{children:"(2) Go to Comminity AMIs and Search for Amazone Linux."}),"\n",(0,a.jsx)(n.p,{children:"You will see many options. I went with amzn-ami-hvm-2017.09.1.20180115-x86_64-gp2. It is a 64 bit and EBS as a root device. You can choose whichever you like."}),"\n",(0,a.jsx)(n.p,{children:"(3) Choose Instance Type."}),"\n",(0,a.jsx)(n.p,{children:"You can choose the appropriate instance type. I am choosing t2.micro as it is eligible for free tier. For our use case (see here), t2.micro is not good enough as this box is for training machine learning algorithm. For the purpose of working out infrastructure set up, let\u2019s start with t2.micro. For further information about EC2 instance type, check here."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"img",src:t(49671).A+"",width:"732",height:"205"})}),"\n",(0,a.jsx)(n.p,{children:"(4) Configure Instance Details"}),"\n",(0,a.jsx)(n.p,{children:"You need to choose the correct VPC and Subnet. You also need to create the IAM role for EC2 instance with the AdministratorAccess policy. For further explanation about IAM Role, you can check out here. This can be done from Create new IAM role option."}),"\n",(0,a.jsx)(n.p,{children:"Disable auto-assign public IP as we are using Elastic IP for this instance."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"img",src:t(95972).A+"",width:"838",height:"535"})}),"\n",(0,a.jsx)(n.p,{children:"(5) Add Storage"}),"\n",(0,a.jsx)(n.p,{children:"I am going with default of 8GB SSD. If you need more storage, it is better to use Elastic Block Store. Step 10 will describe how to attache EBS volume to EC2."}),"\n",(0,a.jsx)(n.p,{children:"(6) Add Tags"}),"\n",(0,a.jsx)(n.p,{children:"This is optional. For our use case, it is not necessary. In an enterprise environment, tagging is absolutely necessary to manage resources."}),"\n",(0,a.jsx)(n.p,{children:"(7) Attach the existing security group"}),"\n",(0,a.jsx)(n.p,{children:"We have created a security group here (How To Configure Network Access Control Lists (NACLs) and Security Groups in AWS). Let\u2019s attach it."}),"\n",(0,a.jsx)(n.p,{children:"(8) Create a key pair"}),"\n",(0,a.jsx)(n.p,{children:"For SSH access to the instance, you need to create public and private key. Make sure to keep the private key file securely."}),"\n",(0,a.jsx)(n.p,{children:"(9) Create Elastic IP address and associate it with EC2 Instance"}),"\n",(0,a.jsx)(n.p,{children:"First of all, you need to create an Elastic IP address from VPC dashboard. This step should be straight forward. Then, associate it with the EC2 you just launched."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"img",src:t(12053).A+"",width:"562",height:"221"})}),"\n",(0,a.jsx)(n.p,{children:"(10) Try SSH access from desktop"}),"\n",(0,a.jsx)(n.p,{children:"Use the private key you downloaded and connect to the instance with SSH. For the host IP address, you can use the elastic IP you associated with the instance in the previous step. This should be straight forward. If you have any trouble, AWS has an extensive trouble shoot guide here."}),"\n",(0,a.jsx)(n.p,{children:"For Amazon Linux, the user name is ec2-user for the root account."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"img",src:t(50186).A+"",width:"718",height:"224"})}),"\n",(0,a.jsx)(n.p,{children:"(11) Attach EBS Volume"}),"\n",(0,a.jsx)(n.p,{children:"This is optional. Basically, you can create EBS and attach to the instance. For the details, go to this: How To Attach EBS Volume to EC2 Linux Instance In AWS."}),"\n",(0,a.jsx)(n.p,{children:"Great! We now have a Linux server running."}),"\n",(0,a.jsx)(n.p,{children:"Let\u2019s go back to How To Create Your Personal Data Science Computing Environment In AWS to complete the rest of the steps!"}),"\n",(0,a.jsx)(n.p,{children:"(2018-01-27)"})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},1766:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/img-1-9ad434ae56fc3be82534f44012a7437f.webp"},49671:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/img-2-620f5a61bbdec33f7efe880f1a317e89.webp"},95972:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/img-3-51f42a6a5a79860b4658a6c416083fcd.webp"},12053:(e,n,t)=>{t.d(n,{A:()=>a});const a="data:image/webp;base64,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"},50186:(e,n,t)=>{t.d(n,{A:()=>a});const a="data:image/webp;base64,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"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(96540);const o={},s=a.createContext(o);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);
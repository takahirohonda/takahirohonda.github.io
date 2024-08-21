"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[4216],{39545:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var a=t(74848),o=t(28453);const i={sidebar_position:15},s="How To Launch EC2 With Bootstrap in AWS",r={id:"Infrastructure/AWS/ec2-bootstrap",title:"How To Launch EC2 With Bootstrap in AWS",description:"When you launch an AWS resource (EC2 or RDS), you will have an instance with a default configuration. Then, you have to install software and do custom configuration to bring it to a certain state. Bootstrapping enables you to script software installation and configuration and execute it while launching the instance. Being able to bootstrap EC2 is the first step to become the practitioner of the Infrastructure-as-Code philosophy in AWS.",source:"@site/docs/Infrastructure/AWS/15.ec2-bootstrap.md",sourceDirName:"Infrastructure/AWS",slug:"/Infrastructure/AWS/ec2-bootstrap",permalink:"/docs/Infrastructure/AWS/ec2-bootstrap",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"How To Launch Postgres RDS With AWS Command Line Interface (CLI)",permalink:"/docs/Infrastructure/AWS/postgres-aws-cli"},next:{title:"How To Configure Network Access Control Lists (NACLs) and Security Groups in AWS",permalink:"/docs/Infrastructure/AWS/nacl-aws"}},c={},u=[];function d(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"how-to-launch-ec2-with-bootstrap-in-aws",children:"How To Launch EC2 With Bootstrap in AWS"}),"\n",(0,a.jsx)(e.p,{children:"When you launch an AWS resource (EC2 or RDS), you will have an instance with a default configuration. Then, you have to install software and do custom configuration to bring it to a certain state. Bootstrapping enables you to script software installation and configuration and execute it while launching the instance. Being able to bootstrap EC2 is the first step to become the practitioner of the Infrastructure-as-Code philosophy in AWS."}),"\n",(0,a.jsx)(e.p,{children:"This entry is a bonus step from How To Create Your Personal Data Science Computing Environment In AWS. In the post, we have a manual step to launch an EC2 instance and install and configure Anaconda environment. In AWS, you can do everything with a piece of code!"}),"\n",(0,a.jsx)(e.p,{children:"In the post above, we launched an EC2 instance and installed Anaconda3. Then we installed the psycopg2 package for the Postgres DB connection. Let\u2019s automate this process."}),"\n",(0,a.jsx)(e.p,{children:"There are two ways of bootstrapping. The first way is to add the script to the user data field in advanced details in Step3: Configure Instance Details when you launch it manually from AWS Management Console. The second way is to use AWS CLI to code everything up without going into the console."}),"\n",(0,a.jsx)(e.p,{children:"Let\u2019s get it started! Any additional information, you can refer to the AWS documentation here."}),"\n",(0,a.jsx)(e.p,{children:"(1) Bootstrapping EC2 with User data"}),"\n",(0,a.jsx)(e.p,{children:"You can simply add the script when you launch the instance from the management console for advanced configuration details in step 3 as below."}),"\n",(0,a.jsx)(e.p,{children:"For further information on launching EC2 instance, you can refer How To Launch an EC2 Instance From AMI in AWS."}),"\n",(0,a.jsx)(e.p,{children:"Make sure to enable Auto-assign Public IP. If you disable it, you cannot download anything and yum update won\u2019t work."}),"\n",(0,a.jsx)(e.p,{children:"Here is the script. AWS recommends to run yum update. I am using curl here. You can also use wget. They are basically the same. The script will be run as the root user. Therefore, you should omit sudo. The scrip below is for Amazon Linux. Other linux may use different code. I tested on Centos7 and it runs fine. Not sure with Ubuntu or other ones."}),"\n",(0,a.jsx)(e.p,{children:"You can use -b for silent installation of Anaconda (meaning you do not need to type yes for license agreement) and -p for specifying the installation directory."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"#!/bin/bash\nyum update -y\nmkdir /anaconda\ncd /anaconda\ncurl -O https://repo.continuum.io/archive/Anaconda3-5.0.1-Linux-x86_64.sh\nbash Anaconda3-5.0.1-Linux-x86_64.sh -b -p /anaconda/anaconda3\n/anaconda/anaconda3/bin/pip install --upgrade pip\n/anaconda/anaconda3/bin/pip install psycopg2\n"})}),"\n",(0,a.jsx)(e.p,{children:"(2) Bootstrapping EC2 with AWS CLI"}),"\n",(0,a.jsx)(e.p,{children:"If you are an AWS engineer, you cannot live without AWS Command Line Interface (CLI). It is a command line tool which enables you to do many things you would do in the management console with terminal commands. For installation and basic instruction, see here."}),"\n",(0,a.jsx)(e.p,{children:"Once you install it, you first need to configure it. It is a relatively easy step. The reference is here."}),"\n",(0,a.jsx)(e.p,{children:"Let\u2019s code up the launch and configuration of EC2 with AWS CLI."}),"\n",(0,a.jsx)(e.p,{children:"In this section, we will use 3 commands for EC2, run-instances (for launching an EC2), associate-address (for associating an Elastic IP to the launched instance) and terminate-instance (for terminating the instance)."}),"\n",(0,a.jsx)(e.p,{children:"run-instances"}),"\n",(0,a.jsxs)(e.p,{children:["You need to save the launch script as a text file. In the example below, you need to run the launch command from where you save the text file (e.g. ",(0,a.jsx)(e.code,{children:"cd /scripts/"}),"). The ",(0,a.jsx)(e.code,{children:"file://"})," prefix is necessary."]}),"\n",(0,a.jsx)(e.p,{children:"Another key point is to make sure you have the associate-public-ip-address option. Without it, nothing gets installed. Rest are perhaps self-explanatory. Just need to get the right security group, subnet, instance type, keys and so on."}),"\n",(0,a.jsx)(e.p,{children:"Once the instance is up and running, you can ssh to the instance to see if the anaconda is installed as specified. So cool, isn\u2019t it?"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"aws ec2 run-instances --image-id ami-942dd1f6 --count 1 \\\n--instance-type t2.micro --key-name mydatahack-ec2 \\\n--iam-instance-profile Name=ec2-admin --subnet-id <subnet id> \\\n--security-group-ids <sg id> --associate-public-ip-address \\\n--user-data file://ec2_anaconda_install.txt\nassociate-address\n"})}),"\n",(0,a.jsx)(e.p,{children:"Once your instance is ready, you can associate an Elastic IP address. Note that you cannot associate it unless you have a running instance."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"aws ec2 associate-address --instance-id <your ec2> --allocation-id <your Elastic IP>\nterminate-instances\n"})}),"\n",(0,a.jsx)(e.p,{children:"Yeah, you can terminate the instance with a line of command!"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"aws ec2 terminate-instances --instance-ids <your ec2>\n"})}),"\n",(0,a.jsx)(e.p,{children:"OK, you can launch a bootstrapped EC2 instance with a line of code now. The same thing can be done with RDS. Have a look at the post here: How To Launch Postgres RDS With AWS Command Line Interface (CLI)."}),"\n",(0,a.jsx)(e.p,{children:"(2018-02-06)"})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>r});var a=t(96540);const o={},i=a.createContext(o);function s(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);
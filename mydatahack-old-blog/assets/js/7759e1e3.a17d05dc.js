"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[6333],{9973:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(74848),a=t(28453);const o={sidebar_position:12},i="Creating Publicly Accessible RDS with CloudFormation",s={id:"Infrastructure/AWS/rds-cloud-formation",title:"Creating Publicly Accessible RDS with CloudFormation",description:"AWS CloudFormation let us create AWS resources with JSON or YAML files. With CloudFormation, you can create and update your AWS infrastructure by code.",source:"@site/docs/Infrastructure/AWS/12.rds-cloud-formation.md",sourceDirName:"Infrastructure/AWS",slug:"/Infrastructure/AWS/rds-cloud-formation",permalink:"/mydatahack-old-blog/docs/Infrastructure/AWS/rds-cloud-formation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Setting up Custom Domain Name with SSL Certificate for your S3 Website",permalink:"/mydatahack-old-blog/docs/Infrastructure/AWS/custom-domain-name-ssl-cert-s3"},next:{title:"How to Make RDS in Private Subnet Accessible From the Internet",permalink:"/mydatahack-old-blog/docs/Infrastructure/AWS/rds-private-subnet"}},u={},c=[];function l(e){const n={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"creating-publicly-accessible-rds-with-cloudformation",children:"Creating Publicly Accessible RDS with CloudFormation"}),"\n",(0,r.jsx)(n.p,{children:"AWS CloudFormation let us create AWS resources with JSON or YAML files. With CloudFormation, you can create and update your AWS infrastructure by code."}),"\n",(0,r.jsx)(n.p,{children:"In the previous post, we discuss how we can create publicly available RDS (How to Make RDS in Private Subnet Accessible From the Internet). In this post, let\u2019s create a CloudFormation template for the public RDS stack."}),"\n",(0,r.jsx)(n.p,{children:"We are going to use YAML file for the template because it is easier to manage than JSON. In fact, writing CloudFormation template in JSON is much harder as you need to worry about curly brackets and quotations."}),"\n",(0,r.jsx)(n.p,{children:"What to create"}),"\n",(0,r.jsx)(n.p,{children:"From the previous post, we are creating the first design (diagram below). This one has more resources than the second one and would be more interesting to code."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(93046).A+"",width:"1253",height:"891"})}),"\n",(0,r.jsx)(n.p,{children:"Resources"}),"\n",(0,r.jsx)(n.p,{children:"List of resources we are creating with CloudFormation is below."}),"\n",(0,r.jsx)(n.p,{children:"VPC\nPublic Subnets\nPrivate Subnets\nRDS\nNetwork Load Balancer\nLoad Balancer Target Group\nRoute Tables\nSecurity Groups\nLimitations on Target Group RDS IP Address Mapping"}),"\n",(0,r.jsx)(n.p,{children:"The vanilla CloudFormation does not support getting IP address of the RDS instance. The GetAtt function only returns the endpoint address with Endpoint.Address. For Network Load Balancer, the target group has to be an IP address. Therefore, the mapping of RDS IP address to the target group cannot be done with just using the simple CloudFormation template (there are workarounds you can do by using SDK or custom resources). For this post, let\u2019s keep it simple and accept this as a limitation."}),"\n",(0,r.jsx)(n.p,{children:"Once it creates all the resources, you need to do nslookup to obtain the IP address of RDS from the endpoint, then create target with the IP and port in target group."}),"\n",(0,r.jsx)(n.p,{children:"Using DNS"}),"\n",(0,r.jsx)(n.p,{children:"If you have your own domain name, you can create a hosted zone and map the Load Balancer as Alias as a record set. In this way, you do not need to change the client connection details every time the stack gets updated or recreated."}),"\n",(0,r.jsx)(n.p,{children:"Parameter File"}),"\n",(0,r.jsx)(n.p,{children:"At the moment, CloudFormation does not support YAML as an external parameter file format. The parameter file is set up as below and will be referenced in the main template. I added the example range. You can update CIDR ranges for VPC and each subnet as you like."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "ParameterKey": "VpcCidr",\n    "ParameterValue": "10.5.0.0/16"\n  },\n  {\n    "ParameterKey": "DbPublic1ACidr",\n    "ParameterValue": "10.5.4.0/24"\n  },\n  {\n    "ParameterKey": "DbPublic1BCidr",\n    "ParameterValue": "10.5.5.0/24"\n  },\n  {\n    "ParameterKey": "DbPublic1CCidr",\n    "ParameterValue": "10.5.6.0/24"\n  },\n  {\n    "ParameterKey": "DbPrivate1ACidr",\n    "ParameterValue": "10.5.1.0/24"\n  },\n  {\n    "ParameterKey": "DbPrivate1BCidr",\n    "ParameterValue": "10.5.2.0/24"\n  },\n  {\n    "ParameterKey": "DbPrivate1CCidr",\n    "ParameterValue": "10.5.3.0/24"\n  }\n]\n'})}),"\n",(0,r.jsx)(n.p,{children:"Execution"}),"\n",(0,r.jsx)(n.p,{children:"Once the template is ready, we can run the command below from the folder where you keep your template and parameter files."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"aws cloudformation create-stack ^\n--stack-name create-public-db ^\n--template-body file://main_final.yaml ^\n--parameters file://parameters.json\n"})}),"\n",(0,r.jsx)(n.p,{children:"Template"}),"\n",(0,r.jsx)(n.p,{children:"Here is the actual template. Fill the CIDR range and try running it in your AWS environment. Using CloudFormation does not cost you. But, the resources created will cost. The example only uses the resources from free-tier (the first 12 months one). Even if you ran out of the free tier credit, the cost should be minimal. Have a go!"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"AWSTemplateFormatVersion: '2010-09-09'\n# Parameters for external parameter file reference\nParameters:\n  VpcCidr:\n    Description: CIDR block for the main VPC\n    Type: String\n  DbPublic1ACidr:\n    Description: CIDR block for Public Subnet 1\n    Type: String\n  DbPublic1BCidr:\n    Description: CIDR block for Public Subnet 2\n    Type: String\n  DbPublic1CCidr:\n    Description: CIDR block for Public Subnet 3\n    Type: String\n  DbPrivate1ACidr:\n    Description: CIDR block for Private Subnet 1\n    Type: String\n  DbPrivate1BCidr:\n    Description: CIDR block for Private Subnet 2\n    Type: String\n  DbPrivate1CCidr:\n    Description: CIDR block for Private Subnet 3\n    Type: String\n\nResources:\n  # (1) Define VPC\n  DbPublicVpc:\n    Type: AWS::EC2::VPC\n    Properties:\n      CidrBlock: !Ref 'VpcCidr'\n      EnableDnsSupport: true\n      EnableDnsHostnames: true\n      InstanceTenancy: default\n      Tags:\n      - Key: Name\n        Value: public-db-practice\n\n  # (3) Create Subnets\n  #  public subnets\n  DbPublic1A:\n    Type: AWS::EC2::Subnet\n    Properties:\n      VpcId: !Ref DbPublicVpc\n      CidrBlock: !Ref 'DbPublic1ACidr'\n      AvailabilityZone: ap-southeast-2a\n      Tags:\n        - Key: Name\n          Value: subnet1A-public-db-practice\n\n  DbPublic1B:\n    Type: AWS::EC2::Subnet\n    Properties:\n      VpcId: !Ref DbPublicVpc\n      CidrBlock: !Ref 'DbPublic1BCidr'\n      AvailabilityZone: ap-southeast-2b\n      Tags:\n        - Key: Name\n          Value: subnet1B-public-db-practice\n\n  DbPublic1C:\n    Type: AWS::EC2::Subnet\n    Properties:\n      VpcId: !Ref DbPublicVpc\n      CidrBlock: !Ref 'DbPublic1CCidr'\n      AvailabilityZone: ap-southeast-2c\n      Tags:\n        - Key: Name\n          Value: subnet1C-public-db-practice\n\n  # (3-2) Private Subnets\n  DbPrivate1A:\n    Type: AWS::EC2::Subnet\n    Properties:\n      VpcId: !Ref DbPublicVpc\n      CidrBlock: !Ref 'DbPrivate1ACidr'\n      AvailabilityZone: ap-southeast-2a\n      Tags:\n        - Key: Name\n          Value: subnet2A-public-db-practice\n\n  DbPrivate1B:\n    Type: AWS::EC2::Subnet\n    Properties:\n      VpcId: !Ref DbPublicVpc\n      CidrBlock: !Ref 'DbPrivate1BCidr'\n      AvailabilityZone: ap-southeast-2b\n      Tags:\n        - Key: Name\n          Value: subnet2B-public-db-practice\n\n  DbPrivate1C:\n    Type: AWS::EC2::Subnet\n    Properties:\n      VpcId: !Ref DbPublicVpc\n      CidrBlock: !Ref 'DbPrivate1CCidr'\n      AvailabilityZone: ap-southeast-2c\n      Tags:\n        - Key: Name\n          Value: subnet2V-public-db-practice\n\n  # Internet Gateway\n  InternetGatewayPrivateDb:\n    Type: AWS::EC2::InternetGateway\n    Properties:\n      Tags:\n        - Key: type\n          Value: cloudformation-practice\n\n  gw1:\n    Type: AWS::EC2::VPCGatewayAttachment\n    Properties:\n      VpcId: !Ref DbPublicVpc\n      InternetGatewayId: !Ref InternetGatewayPrivateDb\n\n  # Route Table\n  PublicSubnetRoute:\n    Type: AWS::EC2::RouteTable\n    Properties:\n      VpcId: !Ref DbPublicVpc\n      Tags:\n        - Key: Name\n          Value: Public-Route\n\n  PrivateSubnetRoute:\n    Type: AWS::EC2::RouteTable\n    Properties:\n      VpcId: !Ref DbPublicVpc\n      Tags:\n        - Key: Name\n          Value: Private-Route\n\n  # Associate Internate Gateway to Route Table\n  SubnetRoutePublic1A:\n    Type: AWS::EC2::SubnetRouteTableAssociation\n    Properties:\n      SubnetId: !Ref DbPublic1A\n      RouteTableId: !Ref PublicSubnetRoute\n\n  SubnetRoutePublic1B:\n    Type: AWS::EC2::SubnetRouteTableAssociation\n    Properties:\n      SubnetId: !Ref DbPublic1B\n      RouteTableId: !Ref PublicSubnetRoute\n\n  SubnetRoutePublic1C:\n    Type: AWS::EC2::SubnetRouteTableAssociation\n    Properties:\n      SubnetId: !Ref DbPublic1C\n      RouteTableId: !Ref PublicSubnetRoute\n\n  SubnetRoutePrivate1A:\n    Type: AWS::EC2::SubnetRouteTableAssociation\n    Properties:\n      SubnetId: !Ref DbPrivate1A\n      RouteTableId: !Ref PrivateSubnetRoute\n\n  SubnetRoutePrivate1B:\n    Type: AWS::EC2::SubnetRouteTableAssociation\n    Properties:\n      SubnetId: !Ref DbPrivate1B\n      RouteTableId: !Ref PrivateSubnetRoute\n\n  SubnetRoutePrivate1C:\n    Type: AWS::EC2::SubnetRouteTableAssociation\n    Properties:\n      SubnetId: !Ref DbPrivate1C\n      RouteTableId: !Ref PrivateSubnetRoute\n\n  # Assign routing rule to route tables (default rule does not need to be assigned)\n  PublicRoute1:\n    Type: AWS::EC2::Route\n    Properties:\n      DestinationCidrBlock: 0.0.0.0/0\n      RouteTableId: !Ref PublicSubnetRoute\n      GatewayId: !Ref InternetGatewayPrivateDb\n\n  # Create DB Subnet Group\n  DbSubnetGroup:\n    Type: AWS::RDS::DBSubnetGroup\n    Properties:\n      DBSubnetGroupDescription: For Launching RDS\n      DBSubnetGroupName: db-subnet-group\n      SubnetIds:\n      - !Ref DbPrivate1A\n      - !Ref DbPrivate1B\n      - !Ref DbPrivate1C\n\n  # Create DB Security Group\n  DbSecurityGroup:\n    Type: AWS::EC2::SecurityGroup\n    Properties:\n      GroupDescription: For RDS Instance\n      VpcId: !Ref DbPublicVpc\n      Tags:\n      - Key: Name\n        Value: RDS-SecurityGroup\n\n  # Attach Secuirty Group Rule\n  DbIngress1:\n    Type: AWS::EC2::SecurityGroupIngress\n    Properties:\n      GroupId: !Ref DbSecurityGroup\n      IpProtocol: tcp\n      FromPort: '5432'\n      ToPort: '5432'\n      CidrIp: !Ref 'VpcCidr'\n\n  # Create Postgres Instance\n  PostgresRDS:\n    Type: \"AWS::RDS::DBInstance\"\n    Properties:\n      AllocatedStorage: 20\n      AvailabilityZone: ap-southeast-2b\n      DBInstanceClass: db.t2.micro\n      DBInstanceIdentifier: Postgres-RDS\n      DBName: mydatahack\n      DBSubnetGroupName: !Ref DbSubnetGroup\n      Engine: postgres\n      MasterUsername: mydatahack\n      MasterUserPassword: mydatahackrocks\n      MultiAZ: false\n      Port: 5432\n      PubliclyAccessible: false\n      Tags:\n        - Key: Name\n          Value: RDS-Postgres\n      VPCSecurityGroups:\n        - !Ref DbSecurityGroup\n\n  # Create Load Balancer\n  NetworkLoadBalancer:\n    Type: \"AWS::ElasticLoadBalancingV2::LoadBalancer\"\n    Properties:\n      Scheme: internet-facing\n      Subnets:\n        - !Ref DbPublic1A\n        - !Ref DbPublic1B\n        - !Ref DbPublic1C\n      Tags:\n        - Key: Name\n          Value: rds-load-balancer\n      Type: network\n      IpAddressType: ipv4\n      Tags:\n        - Key: Name\n          Value: rds-load-balancer\n\n  NLBListener:\n    Type: AWS::ElasticLoadBalancingV2::Listener\n    Properties:\n      DefaultActions:\n      - Type: forward\n        TargetGroupArn: !Ref TargetGroup\n      LoadBalancerArn: !Ref NetworkLoadBalancer\n      Port: 5432\n      Protocol: TCP\n\n  TargetGroup:\n    Type: AWS::ElasticLoadBalancingV2::TargetGroup\n    Properties:\n      HealthCheckIntervalSeconds: 30\n      HealthCheckProtocol: TCP\n      HealthCheckTimeoutSeconds: 10\n      HealthyThresholdCount: 3\n      Name: RdsTarget\n      Port: 5432\n      Protocol: TCP\n      TargetGroupAttributes:\n        - Key: deregistration_delay.timeout_seconds\n          Value: '20'\n      TargetType: ip\n      #Targets:\n      #- Id: RDS doesn't return IP address with !GetAtt Not supported by CloudFormation\n      #  Port: 5432\n      UnhealthyThresholdCount: 3\n      VpcId: !Ref DbPublicVpc\n"})}),"\n",(0,r.jsx)(n.p,{children:"(2018-07-08)"})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},93046:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/RDS-with-Network-Load-Balancer-a4c437f0e88110fbd26d6cb045f8162e.webp"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(96540);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
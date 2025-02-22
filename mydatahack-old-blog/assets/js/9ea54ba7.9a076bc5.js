"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[4933],{84333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(74848),o=n(28453);const i={sidebar_position:20},r="How To Ingest AES Encrypted Data With Python",s={id:"data-ingestion/aes-encrypted-data-python",title:"How To Ingest AES Encrypted Data With Python",description:"To ingest encrypted data into DWH, we may ingest the data as it is or decrypt and load it to the database, depending on the business requirements. It is always good to know how to decrypt encrypted data. There are many encryption methods. Encryption usually happens at the application (either client or server) and encrypted data get passed to the database. It is up to your business requirements to ingest the encrypted data into DWH as it is or decrypt it before loading. There are also may ways to decrypt data in data ingestion process. SQL has its own decryption functions. You can decrypt it with ETL tools or programming language.",source:"@site/docs/data-ingestion/20.aes-encrypted-data-python.md",sourceDirName:"data-ingestion",slug:"/data-ingestion/aes-encrypted-data-python",permalink:"/mydatahack-old-blog/docs/data-ingestion/aes-encrypted-data-python",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"New JSON Data Ingestion Strategy by Using the Power of Postgres",permalink:"/mydatahack-old-blog/docs/data-ingestion/pg-json"},next:{title:"How To Convert Non-UTC Timestamp Into UNIX Epoch Time In Python",permalink:"/mydatahack-old-blog/docs/data-ingestion/convert-non-utc-to-unix-python"}},c={},d=[];function h(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"how-to-ingest-aes-encrypted-data-with-python",children:"How To Ingest AES Encrypted Data With Python"}),"\n",(0,a.jsx)(t.p,{children:"To ingest encrypted data into DWH, we may ingest the data as it is or decrypt and load it to the database, depending on the business requirements. It is always good to know how to decrypt encrypted data. There are many encryption methods. Encryption usually happens at the application (either client or server) and encrypted data get passed to the database. It is up to your business requirements to ingest the encrypted data into DWH as it is or decrypt it before loading. There are also may ways to decrypt data in data ingestion process. SQL has its own decryption functions. You can decrypt it with ETL tools or programming language."}),"\n",(0,a.jsx)(t.p,{children:"We will use Python here as it offers a pretty good crypto solutions which enable you to perform crypt tasks without knowing too much about how it works. To narrow out scope, we will focus on most widely used encryption algorithm, AES (Advanced Encryption Standard) encryption."}),"\n",(0,a.jsx)(t.p,{children:"AES is secure enough (apparently US uses it for securing sensitive but unclassified material) and I have seen it is used quite often to protect customer personal information in ecommerce applications. For example, the website captures personal information on the form and the application encrypts it with AES algorithm before passing it the database. In this way, the customer\u2019s personal information is stored in the encrypted format for privacy protection. To decrypt the data, you need the key."}),"\n",(0,a.jsx)(t.p,{children:"AES encryption is a type of symetric-key algorithms. Encryption happens by using a key and an initialisation vector. AES is a block cipher that encrypts data on a per-block basis and uses keys that are 16, 24 or 32 bytes (128, 192, or 256 bits) and the initialization vector lengths of 16 bytes (128 bits) which can be randomly generated at encryption. You can check out the online tool to encrypt and decrypt with different methods here. If you are interested in in-depth mechanism, this blog article is a good read."}),"\n",(0,a.jsx)(t.p,{children:"AES encryption is often used for encrypting files or content in the storage device as well as for personal information for ecommerce applications. For example AWS uses 256-bit AES for the S3 server-side encryption, default server-side Glacier encryption and EBS volume encryption."}),"\n",(0,a.jsxs)(t.p,{children:["The encrypted value for a personal data such as email is a string of random characters, which look like 0GSnnvEk16lFmuSVfmTRjgVQfm70pH0Cgda3Abu+LmiWmnwa88Hci2NPRl51rwHe. The first 16 letters are the initialisation vector, called IV. By using IV and the encryption key, we can decrypt it to the actual email like ",(0,a.jsx)(t.a,{href:"mailto:datahack@datahack.com",children:"datahack@datahack.com"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"We will use the Crypto package which is a great cryptography toolkit for Python. For AES, we will use Crypto.Cipher.AES. It also has a Random module to create an initialisation vector (IV) randomly for encryption."}),"\n",(0,a.jsx)(t.p,{children:"The code examples below work for both Python 2.7 and 3."}),"\n",(0,a.jsx)(t.p,{children:"Scenario"}),"\n",(0,a.jsx)(t.p,{children:"You have an encryption key and an encrypted customer email address below. The email was encrypted by 128-bit AES (AES-128). Let\u2019s decrypt this."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"key = 'LyfZTeBjLOmjTsoq'\nstring = 't-QGGHNPkGR2vSXR1J7fYIfUQE7L5RBbmNkUHi9Nh8e2EV1JSe4GNbjypaX8_o92'\n"})}),"\n",(0,a.jsx)(t.p,{children:"AES128 uses first 16 characters as the initialisation vector. In the cipher function, you can use the key and the first 16 character to decrypt the rest of the string. The unpad() function will remove the white space if there are any. Urlsafe_b64decode usually works better than just using b64decode."}),"\n",(0,a.jsxs)(t.p,{children:["Here is the function. The decrypted email address is ",(0,a.jsx)(t.a,{href:"mailto:john.west@mydatahack.com",children:"john.west@mydatahack.com"}),". It can be used to decrypt any value in the column when you ingest the data."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from Crypto import Random\nfrom Crypto.Cipher import AES\nimport base64\n\ndef decrypt(key, string, block_size):\n    unpad = lambda s : s[:-ord(s[len(s)-1:])]\n    string = base64.urlsafe_b64decode(string)\n    iv = string[:block_size]\n    cipher = AES.new(key, AES.MODE_CBC, iv )\n    return unpad(cipher.decrypt(string[block_size:]))\n\nkey = 'LyfZTeBjLOmjTsoq'\nstring = 't-QGGHNPkGR2vSXR1J7fYIfUQE7L5RBbmNkUHi9Nh8e2EV1JSe4GNbjypaX8_o92'\n\nprint(decrypt(key, string, 16))\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Now, let\u2019s take a look at encryption. We have the email address, ",(0,a.jsx)(t.a,{href:"mailto:john.west@mydatahack.com",children:"john.west@mydatahack.com"})," and encryption key, LyfZTeBjLOmjTsoq. We can use the below function to encrypt it with AES-128."]}),"\n",(0,a.jsx)(t.p,{children:"The most important part is to make the string multiple of the block size (depending on the bits of AES). The block size for AES-128 is 16. The pad() function just does that."}),"\n",(0,a.jsx)(t.p,{children:"The initialisation vector is generated randomly. Hence, you will get a different encrypted string each time you run the function. As the first 16 letters are used for decryption, you will always get the same original value when you decrypt it."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"def encrypt(key, string, block_size):\n    # makes string multiple of 16\n    pad = lambda s: s + (block_size - len(s) % block_size) * chr(block_size - len(s) % block_size)\n    string = pad(string)\n    iv = Random.new().read(AES.block_size)\n    cipher = AES.new(key, AES.MODE_CBC, iv)\n    return base64.urlsafe_b64encode(iv + cipher.encrypt(string))\n\nkey = 'LyfZTeBjLOmjTsoq'\nstring = 'john.west@mydatahack.com'\n\nprint(encrypt(key, string, 16))\n"})}),"\n",(0,a.jsx)(t.p,{children:"(2018-02-16)"})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var a=n(96540);const o={},i=a.createContext(o);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);
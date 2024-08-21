"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[380],{45992:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=o(74848),s=o(28453);const a={sidebar_position:4},n="How to Restore AdventureWorks to SQL Server Express",i={id:"Infrastructure/DBA/restore-adventure-works-sql-server",title:"How to Restore AdventureWorks to SQL Server Express",description:"Once you have SQL Server Express installed on your local machine, you may want to load some example data so that you can play around with it. After all, what\u2019s good with the database without data!",source:"@site/docs/Infrastructure/DBA/4.restore-adventure-works-sql-server.md",sourceDirName:"Infrastructure/DBA",slug:"/Infrastructure/DBA/restore-adventure-works-sql-server",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Infrastructure/DBA/restore-adventure-works-sql-server",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to Manually Create Database Backup for SQL Server",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Infrastructure/DBA/create-db-backup"},next:{title:"How to Connect to Locally Installed SQL Server Express with JDBC",permalink:"/mydatahack-old-blog/mydatahack-old-blog/Infrastructure/DBA/sql-server-jdbc"}},d={},l=[];function c(e){const t={h1:"h1",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"how-to-restore-adventureworks-to-sql-server-express",children:"How to Restore AdventureWorks to SQL Server Express"}),"\n",(0,r.jsx)(t.p,{children:"Once you have SQL Server Express installed on your local machine, you may want to load some example data so that you can play around with it. After all, what\u2019s good with the database without data!"}),"\n",(0,r.jsx)(t.p,{children:"MySQL comes with the Sakila database upon installation. SQL Server\u2019s equivalent would be AdventureWorks sample database. It doesn\u2019t come with the default installation, but you can download the back up file and restore it."}),"\n",(0,r.jsx)(t.p,{children:"For SQL Server 2017 Express, you should download the OLAP version of AdventureWorks2017.bak. At the bottom of the download link, it has a section called Restore backup. It explains how to restore the database from the backup file with SQL Server Management Studio."}),"\n",(0,r.jsx)(t.p,{children:"When I first tried it from the management studio\u2019s restore database option, nothing happened after selecting the right backup file. No error message. It looked like it worked, but no database got created."}),"\n",(0,r.jsx)(t.p,{children:"So, I ran restore database statement to see what happens and finally got the error message: Operating System error 5 (Access is Denied) when the server was trying to access the backup file."}),"\n",(0,r.jsx)(t.p,{children:"restore database AdventureWorks from disk = 'C:\\tmp\\AdventureWorks2017.bak';\nOperating System error 5 (Access is Denied) is caused by the server not having right access privilege to the backup file. This is because the current SQL Server user does not have the access rights to the file. To fix this issue, you need to log on as the user with the right access to the backup file (yourself, admin and so on)."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"img",src:o(19977).A+"",width:"409",height:"301"})}),"\n",(0,r.jsx)(t.p,{children:"Once log on as the admin user, I was able to restore the database from the management studio UI."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"img",src:o(42060).A+"",width:"853",height:"455"})}),"\n",(0,r.jsx)(t.p,{children:"(2018-11-11)"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},19977:(e,t,o)=>{o.d(t,{A:()=>r});const r="data:image/webp;base64,UklGRnQOAABXRUJQVlA4TGgOAAAvmAFLAP/kuLZtpTm4O4wyJikmTaTEVOEuIxYFZOiGrNeGg9i2VWV/d4mAew36QB2qUMLdG7h9u25j21aVfb/7/zlEbnXQAQXQJE0QuWsJbh+58x9AEWWbPsfzxHEmjjOGYTMMm2k6mqSmy3IigBpFEZrmURRBD13yJCjDPGpLOUUBzIkow7V1ky9BrQEITBMIFiD7QhS0oQDNgQIaOUwHI0AO1uALlOwHYIsaYIMD7s87KoAyToASKhBRr9dNl301Se7zeejzn+fz6nY7ud/PRNTtdjJSxPv7hKjL/826uhSEY/oGSQGUeWYMKt7JWc2eAGUFETh6TFHwSYcqgAI6gD7TdGiaqc9Hmv4XqCGgCgVhByYF8X3WCCgBFXiRA1pKAIoDQDyfT6CoAARjgAo8X/EugjIoibxUvQOC5+8MAeyh7FydrikCQfMDAuowPVx26L4QgXFBl0CAscMMICAHArrAxGTSg8A0HM0wNwae56h2OAw6TEIX1gTV8yIoePz/z3HabNtmclQXTHqvLsTYlgvCO+5O79rjgCi9obisDnwESzg+Fg7SI9kchZYeIPC3Zn7f32+2abVyI6L/smjbitvmEKvGBeU+JtlikJVPvQGIO/ZHpf56JCHUSeSkik5dqd1TWp9RSq1offDRaVlPbM6sRJR98DulVKW+WtK6XSURe6aZFrYnVIvx2lUA5SXA+GPTucapF46cVs8kxMnbTrI9RU/hXVN6/Et9hnK1vULIemLnTn8pmmwuvl0hZSTizCrsqb57CiWhWox34H4QyeRFh0vLQ/enF3RyP/Ee2tYnlkNa27yxiHri/1t1y5ahV+wLFnpd2hMaJZlWXyGYri7AM+qETvAn8oM1XVWeKdTgWWQ9enxOUfV6f8//K5CDXMfuKSgAbtkO9Jm/rGiZOuwWjRJN6y9JgEnWOEUl6dk5VZVMV9RKW3ko5MAVqy2PeFo9rXWCP7EeNluvqIo+g5whZD2QjVWbc5Dn7YqgA8rMk1Nu2fxlPOCBCuYhLStcEqhFzShflFe12ip0DDv43WrJ7kkw1VG0qlAG84g/PKOzAtbGSl1E1jM+x6oHZdvB20uCDoZTtnPTfne1xIoAaRnfBXsSjGLx4D9EedQg88Kn25LpHBQyPlfNJ9QprRP2xH5TJ78cRQ+IOVM9U2UHMQm3bAf11f1XsLLzmoi1TTO1GE/caO3mwJUKmiqzi5mbT55Tx7TOSpB/UKpXdXu1ZH8BRBP1UGPJGd9015SWdGABcMsWAFmQt4jY/glGoWZ62QF5QPB3VbYnF6wBpyKaR7xgN1nZERxzoNxLH3Oqkp7xOdZkQn5LOliORJWN8dqkp70ios+sHhKEraBmiOaAjCMb4H1GRTa1LQRRK/DxLpc872id0gfb2Ae5PdOJWk91LF3ZWmN9jyoWWtvi5s5k4i2ZrdBxKPouFhu8ObNRpjveQzg3+Vlwu18C3KhHY6sXl5iS46py/4IugZCISUhLj+HZdS8uY0qpUYeNFO6ilMWiCbJ8pzrUQUpsQqZBY5Gsd0im5IqkbjBMIiPTQU7ejqCx5cHPYjJmzS8vjTpAoRzZhGQ2KfHQZ6b8dlScSoJ1L6PIydsRjI22RrFKNbaHw3eHY0rt+2x41jflhz6zGtaHHvqM1bFvlfIdG6oW66hHNGF7aMoDKB/UoYIt/0Mddnt4Vqk30LBEGQihktjgzKRvB/9lVfyw1aNEsGYpHyGrBWmhYPWrs8qnirzvMxDfWBSVrXuJISWvwUSXExkzoLyklA9WobT0GL7vs2DdNmpD1qx3/PKdpD9YRh/l7U+XoKyVBy4t+lAHwEwoCENLPuUF6hFMMC2fVIN88KCCJz6zVf6i4GG2JUpLLWPJZyYt+qCigVizgsEQoKZFksatDvbZRLGJy7TaXGRpBokbJoeQvGVIdE9OZMiAw7PWWLCK5Ut6UOI89JmN9+FnP116s/EmK17WpJZfXrJp3OBAynvi5iLmBeoRTKAE+vAzVpCF+gzqtl+SAMOSPtYHahnghsiQJQ99xuqPKE1QABIvLio69JEGUEBpSYkb4yAbM6cIOZGFFDCCVakyppRSo5axV+48fPfPvq1SYEXrlYHQUGpd5p4InF8XEUwww3dfvtND+VAzQUEEwLDE34SVByAvwZCosKIpSGMKBCh7BLlMJTyJTJycYoiJLMKsShmq8QEU5QdHzbl3PuNtUGNx1DT+Tu0FC9KIgD3qyQyjCVb2O/CujTeZoADiLTcQarXAsGR502YkSEaTAFKxPWQqgnU5K1AMU4Bgo2ZAbnmJHQlZ4iYKJi8l+pgjkRHwoFVlkJYeWz1S/jy2fnBoggM5JRIcP0exaPomCl4Av86hh9RTfoN8zH5UAE0bw4oapVxImFlFx3GSzEzyDKgY42bZ6sYxXBpTwGDNOdjNWz2WuInCkjeANzyORPYMM81H+1Baxs44QJVLRJ7zjUNWDDue0qfr7nkqqOUnos39ITJxw4oCHd/1UWTO0R3Xne16GApGz2nObHK68yKznuttbCtF4mOl1Os9CR//Rituvd4TcGFe7Z6ieMrG1Qcf+Tdp2fbPbV8rVckIcbpII31y7QzwbPSiGrzETk5DB88i9Vspcj9YCfs+44JYr/MinXVprXudA6yV9fEKxbtgZWA4ffDJT+cruv5bKRvE6SLt2I181ls46Y0JIZykxPO3Qq8zC/fnrZ0CLwEXdn66reQChWQZ7IUQejYvbQ+xF0rqkuw4oFtEgHV6yL3OH42a1osdyC+/EbInS8TpIpV6NrEnFs7jczle1j0hIXjWvZZalgnWPSZI6nWmDq7O89hyQPkvBbmQJeJ0kUp9j9gT6+iSDDtpI/TZAqxjlgQ5+lBbym90DPPK7g2D1BUF4Tuq6OwjdKCzHIHOSUeXpOk0MBRuoHeRcPSh4uGuIz/YRlvYN8O8aQz0cXKoc1LskuxAGthnK3kGQ0LoKsb9dCRtWgqzo5gV3gnztN4eOrsks05jEX4DhlP7Psc+WwEztu95EPQ863Xm9DDn6G78pXjM/nTQUzg3pmdwG/5zHYk+7zoNzQU1GFI8tSbIaPZ9o5RP1JTaO2NqJKr5+EyRBkeH1ZYpXlOS0VzwTbDGhz4uN3fQ2jtFGygGzR2TFC+SDKzBQ3ztnSLOz2tRsbUTBJTxSSH3PDzj8MgVt7Y28TczfO9MofYs0Gh9DBIoRxDB01Lq+76hJaVGTPEl3TWCCi6x1gjqYU4FbfjPzSk8ZV1PwlNPvWfdU0/1Hthn2jobLxLNPq/Qo8EdtbBBUsrnzyb6PPtCGkWj2ecVM9wP+Uca/AEqEHS9AAEbNDVht4evKjWCtdY5WBeWkYVwfDiPIG6YxDYfnymYLFBuM7gHcQ3WHb7qG2PDiQPgBHEgtnDC4rqo0ZC2CddgXZIRYcgoF2c9xTIIpzwwGW3jGqxbhDl6FB4iwdrEjtDU1pAdoROou2uH3R6QCoDY4ucxhv6P/ssIOxoMsdEETIsHcQ3W9Uihz8JxqSgOxRY03E+07mFOnt7ijKe6stM5yXtd2B3NTUzXc0edrpdAO9xTPQWOhL4pn6fQ9R4b/qN1T+KBR4/ysn30LEF0DxPtRjCecrhegvzuoDvahV1e0qXvPGLD/5UFb8BdWVBcg6ZnWFlw+KpSClZCST5qs88rgER4KAXLPgk5K+Vu0UdZ5wQWCLQK4JrbyS4mWHyBBQIn+ibgmtvJLiZYeD28DuI1t5NbTLDABokAu+Z2SosJFsiVBSOC19xOcTHBwriyYBTYNbdTXEzwGvfKghv+cysidIbce/lL3l1rQB/NjHsqj8mraw0IZCZ58xmdSy53GL665iUzBre5MALDcQs0zc0PzCQA01ewqY20Rkz8wdEQ/vwyAYOpm5v/q169qnxjVe6doWFt6TLeXyog0LDCYM2LPzgao7d8lBAs2xIQ7LWChwZCGnOYBaSikT+I34Khk8B8Lj8804w1BlcClPDB1Khjgd/zUrfaOMdidhY1Zd1IUpjaS30TfDA1LyBpvnxGqT34hzJa/WTTf9RrV1RlvP+T/q+UquQTgW2/vmFfIRNHJg/fE8I3xYXjSPagZjNIYHA0o7wEWmrCht12b4qeOty/my0Gj03X90zXVz/5nbmKrq+WcsgDR/QFn3/p0oGw9o5fvgNmy1zG40jmIEOsN/7gaFaPgzWvRYoYrEH1UoLF7y8R/aVx8v0O6sgheMvFWrLwg5mfJt9qvgVTMpp4HOkiH2zHH5u2cfOU8sCkRO2VOw7f8zO0bIOTeBzpHkC2n1k99Oi0jZePBHT4YB7TfGDEnH1npkmzZb5Y8rvNqaC2Uj/2l+oULwdZUOxTpYFDDB116HhCnzhH2DfJ7mHO0d36iqcy43KZnLs6x3sZcjlMfl2do4cZaLjhP9eUaPZ5XW+KYb4A304zQbrdFMOcAUbQecnR5TrocojyQCje5ByFm+CD6Pm90A2GwuDoQk1tzZNucm4Sxs2zQfRDwr3Q4e3RFWtgVKl0k3PskgJsEL3jltsy6alXosQrFBvxJufYEz6IPuvU9/z68lw1SrwCgeMm556DO51jg+iFiaAweLuWvZcPXFktRYpXIHDc5ByMm+eD6I0wddoEdPEHomBtOmg8W/F6ubsMNNzwnwJP9/wibtfApxhu+M+1JrreFMP8I1DKT5Vmn1cIpxiaQCm17AAvMJQyhbCDrjYYGucfjBZvq7EzUYWCe3E+B5/kiZeug+mf3wxOskvTkS4rwQpIdI5o8YNqpesPz8KveuYbfmk6D+e6BYNhonNE05j+UTTA5k6cS8iveiZqsLDZbMnNEU1twlSx4OGZRHkuuTmiqU0xVAUkyGX8w7PEJVibSHSOaPHbmBrtCP/wLPGAJVUSmyNauF5O/613Bww0vNaMMeaGSzaMmmK44T+3IscA"},42060:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/img-2-2cdabfd14b1de923153e99269d460e25.webp"},28453:(e,t,o)=>{o.d(t,{R:()=>n,x:()=>i});var r=o(96540);const s={},a=r.createContext(s);function n(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
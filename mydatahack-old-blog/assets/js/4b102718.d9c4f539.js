"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[2340],{38088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(74848),s=n(28453);const a={sidebar_position:12},r="How To Install a List of Python Packages From a Text File",i={id:"Infrastructure/Miscellaneous/py-package-text-file",title:"How To Install a List of Python Packages From a Text File",description:"Installing all the required Python packages one by one can be time consuming. When you are setting up multiple development environments or creating a virtual environment, you can have a list of Python packages in a text file and install them all together by pip.",source:"@site/docs/Infrastructure/Miscellaneous/12.py-package-text-file.md",sourceDirName:"Infrastructure/Miscellaneous",slug:"/Infrastructure/Miscellaneous/py-package-text-file",permalink:"/mydatahack-old-blog/docs/Infrastructure/Miscellaneous/py-package-text-file",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"How To Resolve Refusing to serve hidden directory, via 404 Error with Jupyter notebook.",permalink:"/mydatahack-old-blog/docs/Infrastructure/Miscellaneous/jupyter-error"},next:{title:"Resolving PackageNotFoundError: Packages missing in current channels",permalink:"/mydatahack-old-blog/docs/Infrastructure/Miscellaneous/package-not-found"}},l={},c=[];function u(e){const t={code:"code",h1:"h1",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"how-to-install-a-list-of-python-packages-from-a-text-file",children:"How To Install a List of Python Packages From a Text File"}),"\n",(0,o.jsx)(t.p,{children:"Installing all the required Python packages one by one can be time consuming. When you are setting up multiple development environments or creating a virtual environment, you can have a list of Python packages in a text file and install them all together by pip."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Steps"})}),"\n",(0,o.jsx)(t.p,{children:"(1) Create a text file called requirements.txt and list the packages you want to install as below. The number indicates the version of the packages."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img",src:n(28967).A+"",width:"307",height:"224"})}),"\n",(0,o.jsx)(t.p,{children:"(2) Go to the directory where you have your requirements.txt (below example is when you have the file in the tmp folder)."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"cd /tmp/"})}),"\n",(0,o.jsx)(t.p,{children:"(3) Run the pip install command as below (sudo for Linux, not required for Windows)."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"sudo pip install -r requirements.txt"})}),"\n",(0,o.jsx)(t.p,{children:"(2017-11-20)"})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28967:(e,t,n)=>{n.d(t,{A:()=>o});const o="data:image/webp;base64,UklGRmwlAABXRUJQVlA4IGAlAACQegCdASozAeAAPnU0lkgkoqIhJZdbeJAOiWdu/Fd4o8ADL4WEca7isgPj/4jGsune1oNnqI/+nT/26PdE/+f/////8L39T/7XsAeet6Y3rYf//Ulvx39a/sfhz/dP6B+PvnD4o/I37X+zf96/aj8UfoL/O8C/U3mD/KPsN92/tn7afm7+R/17/B/jt5j/JT+n9QL8k/k396/LL+8/R48b5KfF/9L1AvU35r/jP7v+O/zEfI/7v/Aft17j/WT/Z/2r8i/sA/kX9I/1f3M/PneYfiv+t7AH88/uH/W/wP+g/cj6h/7P/sf5j/Kfut7dPo//tf574Bv5h/Wv+N/gP8p78ntC/eD2sv3JKuPmxi619KSBesSUzmT/oB/OKnOZZjl9Pi3LTt9LN4rb7cna/KPudXYnhrRTQ5soJgTAJeIyCw3SxdUm4tPWndSLgex2IJPmjlzcgI93ZToT5UI5zt6MGsipVAefHHj6AD/DUt3FRAgNLSgb2cVE8N0fRVG8MM+hByJdnDm/lPqgypPQnvw2RB0LSEVp1/kroOZdVFg1qFPQ+xngA1YOpGt+Kq2a4W+Qg305plfzi8r5zCISbeqjnsKDDdobnzBRRcJwPQ4Yb4auITv93jHciR7AtW3+UXXgOHDRAeoHMWbsRNQnfGcsdObu6hyz0fQDOkPbqBvv5SvoKXUbyMqkRjWHGbaQq/8bz4PLylHvDJQbhNPIs3DDU+01UuRlWyICbEoiPwSCXtowJLSkbPSTk8OZL6Z38pAL6s373RVUlaeNg25HuRzSDDhxutvZ6xjU8K4i4fM+Oej65LRyns7uZ6jRUJTWZf8Sv7tSwgwE1St2HqVEa2QiQ5xjeshCWaeRYXXrLEkoMsfWTqhdGOnRUbv4kIeHIotzJBe/DkzVgxewC7W36I8nG0ft1hN6sQ8VQVIKftMWaeJdYQ5qnOnsTcFC2WA3aWqWuRV55rsvhSYD1EnYNYhqkDCdsyUmwobzMu29wxtMjjEuQhgOqIesogXLl5OqWLNPIsLmetG/lu9OepBC7iOLk4xIlWFYr85q7sqjWbsRQ4XY/ZwtzhMbKf32dlWRjh1wfF9wSlz0XOGj3JWLmar2Z9rYs08izdPk11sDcxrhhSX+cJZqRC+gwsPhj1pEBfsp93+t/Ywg8QBwnEZqOUYwurSZogBJFvV72IRMmFYgVGCiNe5rYihsp2U5DGqJJ8WjIFCNSnMllXur/PzQUCM3aPfT3PNoJWwCPfpp5Fmv8Mpktr8DzedoyVoEIz0n2mc31ykWkwfO8cB03BDeypKm1u7kyw1HT+n7tC18wAD+8k/Gi5cs4bZfXB5JRoA8XCUym7JoP4bpSAmvKfxr2Xq9AWGqNQgnsTUoB5JxDwh6G7V8Ai8uQMrX4b2SW4Y3VRye+6BOTjPHrXsnChi/rm3OQ2ZnY/+3Td7/rk7Vz7V+41z59tYwsjEvPU5z9PHw0D1rujh7TeDuFeiwlVhHiYxJNL5SIyAZFnuieDiOlXKM8tbVRMSwhdGSOrAKSiNJczEM43qDMhCAmoCqMwS+idoYKQVtwLVZARIcJR5GZnJfwWfq+NhH2jK17dJ/ux7O4wWr2vXbqyJkUXdCD+NQxqlSa03DdvMktFbv63oyUBU3BPApDXQTD/o4wRMqCDYgZR4KD0NE+7NrOXe0YhloAg7YPaOoY62lARx1hAzt0DLB4H7qi3UgsRnWuFdlgGylhELyaGcU0zYE2iQPH/7/86zVuozQqG+GfxBkKLRNofwPk+gvwwb3J0x8SIQLAg0soPioTF+Niad/0/zr4T2c0bcvG7yHNplYysT/Hh3/jQC/4lXgWbiNWlXI/NawGeKviGBQmB1DPBBnICtBMg0jqZHR5eVuvahQyGct58dK1IkN8RDg8ity9+Duq+aW1oMz5NbXAFjn8dHpnrdxZzc1R2cxP2MiggVo0ludFwWEUNcD2tFoaJx74Il54xD23xTRVeKpm+/Vb5tOSr4p/0/ZOcDv99HSHzj6fwuqkn5VCJqQ1PBm1YKyvyaXEvFeQnNUojvqKNx4/bWCSn4LiQalhzcLGf/nAGtFnH41TONmqqGsY2NYTXfKBhlr0whcJJFdjImi6v9YSgovHkGAq0m/Y3LgybEb5D9XQR8Y6xVP18BuBP8SWfvX5Cv/FrWh39xTUohwVjmJS1PIO76FWfPFBVgdz8m8IVAMFAWAb52QXiXn2rST1AMYAsRqzr8rzmD83qOb5Rl3y/FGNqfK5l+0eeQM0kOXh3Qg7LdzCVy8Hh3cTwVOKyRTX+hhgLeyzPQIEDQqa4QkgRMTVecns2BHv779+kgsLCV0MJLJqVZNPbpJ+z+xsU1p40Kz69FI/qEhHYyAZBHEQEq86w5Iq1KKBpI0dvYGsAliH7Jr8UMPB+z/EWziGVf5mfbWodXuOnGLU2eZkNtiA8+jxa41s1cXbSAiu67FaN7FccLWl3blnaIDAFluqC6z8LBfPiZ2SGXLuro3ekjL5hDcoh+JQ5XmO7tV1lxv+YSKDPMY7Wd+reJZXqtaU3Wt8O9AONJymPBMg4LdXakxZg4PA6EcdVMAucNJmKcr+ZCZXLvXapay/77dA4hLKu3d8FkQfRvlVbJ9fvNq6YDKipIf6E/oqLcZjyOUVj4puNmChJnapY+rBx4igJ5hhGPya7ey69+N+MTkdStkmsb/R0rYnktbsOuvMNhWa8SnswZZGM5U/3I9G7pO2A1YBF0jPxE3/zJGt21bOEkzjYqyVrdFc7POUzSoC8sQJ/zl7zP5yfQ4XHSLjaa0E5oFZdpthaAUE1cR8QDkFsVEm6q6SyKykyVMUeXQ+TF1He3wrLsNyEYUH36Sim335ZCKWufMbAGSZUqoeOoyBEtAIk9olG7qCKMfSo7QJ9wUXjkOKagavrShDLfsSH1378ksdUCdEQ2Z2pKq4/N1bETb1Qp052GV5BP53wN1i8GAVFCZjRcyhhrkzlTKKlmCYVloxWNuryZDHaVW20gkB0itkjAGaZncL5bf0RuchhAwYHQDNWlsUnykSLUjMPIAWCeaJtcwo/92eRw5IRXY/JvzWkFmGKdP4dj1ZivS890YnqIQP/FKyIKWCDQmlGAH0nSnHu0iUPd1TL2nO0l0rNZ3yU3sAr0Wq1umdShHFMgVt/Zjb8ZCZdcKg7lwWzXdUANcJn3sQFCKQKc+Sir+V3nfvnUa8PC3hfAzVe+FM1nsjLZCAI88WQfCMS9ZrTRR0SPubFMHk3g0PJaANclegAKUrDXYsIeKf2zSU8eGPJP0hj8XePZQX9N6Qpo6WqOSak5zPvwJ/0sp6+lXan2t2yEwl1tQc5U3pphNa/bbaxphazu04vPoWcSM1JQ63kQv69Km/6fItii5nXn0TBT2CyIsY4teQ865yChdVLLmuEJJ0oHYMhZwYuj4f+HkNdxDV0bk6v41q5znypVEHQ1DyGUorvH0N5CUaxh7wZNc++kha3YuGJ6F2LwzjlmT7Q4fc7v4Hf1++/l9QCALdPMzb6C5dIpe/Tdm3foncyVWSDPMA0/JcRQwil/n1C9QivYws0gUszHPK/FzR4QCtLt90BkwLppXowzQPMFZAWUCED/o9I6U9VsakZKfZvZrWlvOd2ThCqZxa4YreMp0aAtjys/nZ85PKMz7GXzi3M6mKmzo/Sh7MrtyHa0TGUWnu69cl6bOFHo3E+xfAL3rMWVgr/ZgJQ3VXvV2ng6hHjrUHcukfAlYhYPWP1sWVWAigIU3eIPS9MdiaJmJJXYm9qyoqQq6amHhi0hXROn7WF3x+Tcs/Zy6XN5xcLTGzROyroDsc6SxAkk2vf4trwK9F8B0YhSK4EfYeeVDP84TvZshThCPyr/RkY3tgTXqc2ToSo2SUCdd5LuP9KANQrQ1TRM9NLaAMZMutu5PP78zsoe/WTtB03HFs0TL1KXXxzt1inncHtBYXCMLJTBnA3Vx7SjzyFqZllrMyjsxBU7mJ1qk0B52lx/F2GlSwI4DB0gifoCbIEEpZBDtEZZNK7doY/OoKza25hJi6zYDlOjRN7zgQo11ybMnX4sFubHtuKcm7MCEhQ3Y5UkhbqDd+fg2Oj6qzIaeuzXkoucpIg+tkYFv+7CFIWv3amky3xWZTMXMpxqybFxW/B6/N1gZXIOPjAMiFAEHsLF4ac8t1PMi1GvG4AXXCWQXljWT73MYcNlzpCNAJvOM5VEzwIStapEz+HBnChppH6AxsXZ/7Cp8vazEjOzI8QYkUrXLk/kc67P4UC+aMsOWGemlqIrBqEKTXAOHXpF3S2ng+0GLk2T9VtXsrB3f4pXfjsIPIzllBgnuEUnQycMDQctvR7FxvcVsyyjiX9U1XFuKpTr7NTfL8sR4ib8+Vk+B6AzfIW+rnFuvE2Yd8LefpjBW51aZW3rE2WNT4rzChHlxfDed3rkm7wPZyat2TH73524eojDWwvJnOFhyp7LP2cKvoVwwCvoCgclzOb6DLiQh7QZwsUt34fxvAlZPUtdZGme9/sELpZxgJ1ZA+QXgySTBQnb3I+rl7VTHWsc13vDB8x+ydopoNF4vztUAjvFYmf8kAe4RoP6bpWPJTbEHoKDhswafPN8ocRelmjw304yHX2SGP61IKkU98mOlBt3+wwuoVW1vqVWSWqOQbncfVn9xnusdUILWmu1iI2o3szp+23aQob86Ux28vmr8/d3PA7pFKGzrRp70LGjVUAIzsmhyHusyS6FYO/fZz+/B+1IB9EX+hdtjKI446dcmFRgD357O6dA5gC9mUvBEsitb+Gj572t+ZgP7rqckzK55ntTNmT3qoKTR8e7R1HuqoY8f6jf/9PzCMVHovxSUR+dY69KiOVMAPLLlo5bq4w8ufJIsxj9RnKY5HUeFTC9GbR+lrQLMy5JVUkIBrYWj+b8pIUD9SfIzWzM0Rh9iwbgR87K3zm+pcPJGyGaZWuJx4cK43ujj8CxAFkY4exBTVS5aV82JqSDOXTY12YouxtNE1ZfgAKTBjCEulCxcEsgN66c/EO2CWRjtYuZ9YqoQ9x7YjoFX8Nynq6EkI/ND3QtJNYG3jlsX0mGVfAc2hUVov9TCuhv2dlDtrhMQkqfOZdDPBzQvjA9x4j8NATDb9GL6ANcGwIySqOu84hcTFKVPxJ+1V0+UXxLAMuLfBcdlADeA7dHNVFcXye6Yv413c5sepFRYjMFHTPhx/uQhLtS5uR2xGhPC8MjtmOigmZwDKP4DFE8MaUxfjaOp2CLI+runoqmiAyvWcB+YbMXFEi4/DFuzmFtvDlYK/FCSSTJckwaL/XBIGa4gPxrQEZG1RwaXxAkAIIo6Gulu19TNBs6TQL07ZE4hzoGYY9ukuBEXDBthcusN/KE+ByAymPhwZ6gIT3npwPJn+HRdlQzy2phyrh+I+ACiBNForazPAP8wJ/kZZCgun4HoV78kQ91S9XqrplU56vzR7GYWI2KnHasio9isEwIkAU2HggqfiIEGkl6LecelNJMIBjGdfh0FwhKrVMW9sYESxijpN3kog90qhytsgoaQOE4fADvfQ8ycqB+Yfvw3jq0ZBu43ej/c7pYfs6ddBgC2NG+54ydBng5yicpzvI079SUDVxJsXlpKm21xUE+zG0063n007PpqnaigypDJNxOeMup1ZVJrBCZ96lDkv6N7MpvbFKxvmGhMNzNfdv6uuwWWdNjA4MUSjcmSpU70Dm+DxXrds0DMkANz85pgC1o94YnKY5M8lmV8H4QdYgL7wbBbcyjD7JMsqShNPc/1/lYSLPn0PnRGay7uW+p0sWjmJyfNk43lm7igk1vTz2gJ4L/u1bBvbHujGzeWshGOuFGQQb8WfvhZGPWMmDtKck2fF1yNr/WPub+n03ZO/kvxJlGTG9odGjpUCX2s+LGD4pKu12AmyPqKVdXDSNWXXSLE9/36tFLu7RLNGxpCJE5TZqFLfB5s2WClaEWjhC4caG6we9hEYb6VyCETTfbMFkxDww3Jdh3srknEddmKIqlg3JVP6t0YLPNEAMMVz68pJAs0OWkPoIic0rXdDHNISTuDyY6JqFsbtibtPgMH29v+CBe92i/FSWDf8ZkI2cM7oSgcJcKgNOKOI+VOB9/TuQ8unBjqjz/SAzEpZvWkTZxOdts2UyfgGxcRQ4c6EXnplCR77vLDQSOy3FIL6Wb6MOolOk0C8JMTIXYGdcksRf7X0BJs78XeNooxkxEE30Gw1JYb80GdazRRjLpVj/VJsj/aTH1pUNeumP18pG4oYNVt+9d8aE5HDYTuF162Cusf78vSAdNrqYU3tJv0LnG+vXQ1p0CjxrvTXhWsvcXAOS60BbyjJr0ZJNFardCYvj7kR2oA8s/74MflNSatMTNvVP1zjMWS80n+QXoC5yKOTbKnEhJF/KY5rLc9conK6hn0j3zKH0+NuXye0d0UF8WGigczqk3zXTAm4kJ9v04nC+m01QNNs8v0AQlFSV+b3SOpWI5I1hO5Gv8r9yjCIaUCQPZH9K3cNfhSeA7ZYw1xN6IPLnUjYFBCXg2Cr+BrU1k9LYPHWsRw7ZpafyanrTtMdZGTCxmLfQoFiQ9aEZLUfVjrGqkflz99WFRAdHzl8HJg/reIHztdc+W62w7TCcrtYaa2sUd8u6dIICfi7A+yoV5GT0g9mx7IpBvb8ye8EZpnj4eHZz+3tOcPQB2bIF5h89rQ5iVe4xAk38DRxNdWGpNFU1tHPqcf9V+kQO7w2RkMrFl6DdA3Fo7qc099l5ghQv9Skv9qmNdkfUX3vvhIR7stqvzwTiCtzGnay5sR/T4FEJte+gTz+LCauo7rTe/yQaBTrgAQHB94nbG/ncrNl9B+o+RtJFVPAjZKe2oX0Ms0Qq1NH9K+JuRlbSvYU4QqrQw0YF6EK1MVnBm/mR+xOuXmemmF7zI8faczcf6JN2kfgZpK4vVxZ2Zz5RU5s5w/8p7Wl63fmc6oKcHxRNC854DhUZNBG0FGJmUC/OttD3LBmW37LJMHVUam7lldxKJbsLgowCQFHY4Qi+p7SlKc/YV6RKRY+fn/mKvM+uPEdo/eJi/u0S50qokZMeuHYBZnCG1WOpeuYAeDpm1msgfj7USjoI/beAdgoZ7Po9MWAh74+sg6TMQKfRWCGd5MwN32vgTeX8G4/4SJ89YNV84r2zNXBDsOmxc5xoNE8/mNIg/CTKdqIoUSOo16qQl1wZ4R/l9twYI/cIopB6VCAtJ7+eSbu9hgCZnpUApD72mHr031fppNfzOCRaiCmS/8NKo97yc7ZpGDqJPA574KSAcMI+TBT9yU8r6/4zfB3MAQoVoWv6FdUiT6pNukjOle1SfHNd4HsIGgr/IHgJYImLRo93hXeRe0rEM1f7beIe4m4JTJGn6sHQ7WJpz/MApZFRW3XKeBPKK5vvaiYW8crEQBzaCp1PGXefheQXS+mV0tKmA2eltlUaDHgrkMydxzHA/jNIKJz09FkNa+1DAT9BHVLEeq7AW3RJLT13eNUuUir1RTRHiO+v9MRdfkp7OXdxTtFy7ykZ6Ogi9vr4c8/cgalqxI7qZXAX9SUDV+qWM+wNAfHiMkBLVDad7CvQNRsdKg11zS1Kv7bLUbXAjeLIxn9RKHRbBXVRCWkhTQJFnIQJX60r46I+V1KRFY/T+Z09iVb2sSQFumApg1UWyHg/ZW9RreuPQ6gSTBbcGIiEOtlhSfC9/iBtoCTFEmZhPWlBld7caCeRoHEYUVsjiiYRKbeFQAg6dCQMATVoh3/CXtVIG6gn2JsWV2o+hW8HEh/gKoeQJXdTxni+EKPicz5mc6F2lGD3py8QWB+SZFFC2oWxx9EB+53tFsWALJjE0SNyjAor4YUxJM+bJdeqz5Xoz/BmgRfB+d1tYkbLhG91d7KMWPF4ZHaLTBp4BNtBYUu8WpWGLi70HayJ0rgEDfeVWfXhkBHpPEslUgpQMhDQL4dCRGHqFYajTb4XIpDygfXgyVfDz+KrCpZKLJWBXK2v0JWqrULJTB6R91aYOnydgDmDRwSDa7Pj1/uEPpgPSG2swbVNAf1VQjYSG/QPQ1lMFirUHaCC8cJx3dVQaWUoCPWtfpkXPRCfgFAavOMwkQDtB8mh35wmHasif8YrMeyEPkd4hfSVAI4qa+r0vUeJPPTlQ264Jw6+cYWC9k+JeLfSpLjOYCeGZc9qc3YhT4ocEBc/EUjZgGtG5mAuR8oc0S+8/1PJPuAmx7C6MvZ7x9bJWTCCKZQyH9oI8/J6XG7vnnmnCN7fVQYix+KP7ZEjX8Mzu9hcjICykaT58xLpn4H+trLrgHQxieVlB2Df3UwuuIdZEHfYtGYr7vlOQ211r2DZ/x9OU3Jg4ewhfwr1nWohNljgLMvN38eYUCJo7yM1VaW42kzmgHsktEE/ps5fifT7DaTQQkZ3t1UapZcYT26vLRggPfT6UoxA4fgrmH/LZbIMSicdnpVJGH1aBiIWPYYrXvU6D89BmZ/PnMTKe2ePuIAnysfydXFL7MX/sCHsrbF4zka9i/+Li4Fb8aL3KPmSWtxODPllqtFJuCXR4W40u+Ow4x2ZlEpeN1w4pLauRYOAhV7nMXiLChSnFCr6bgbYQPJ0IRMJaor5OzUSgzaFeDnj7jJiknWH2vnKaeIA+aF17nNCVe55bxHxJpXz6U+MpG/JKa3hCQzz2Z29dj53kDqiUK1c+RT6gyuQLF6e8yJfWdyYbNT3ftXDNnebZ1VoduGv78PfHjEB3MlZvcqJ7qPpoOQEnI7/9kBS5n3WfACO/NDc5I/nImwbWCzgHZUq5Zyu5WaMm5QRHIdNERS4pumb74qVCgMl/1DkOXr4268ZuY+JIwiasBk4/WUGx7K+AOm1xl8QBP0cei5ycc7aJlrm/2FxZfa1WwxMofjzZof84OIo8TxvH/vUyweItZvfyc38mXR5eBwXoa0/EZmFWn6NnsRskwDQOkg/un2LbfJSDYjslSLEEWajbAXP9+bYGxB5xf9kHO+YvF8fqbkMeUajnVpQ7QEkdjaKmt28aTwH1qZwFFYx5u4PP1e2pWzvzbbRmgT4tM1nGWYFDMYvvV9AuoHQhJAU1KzjXui/ZI+OjKL48fNNjSGW8kzqZ16523vytMVtioSVZi2kGySXrh8ZtVcLD9UZ796xCCbqzLAMmdOoxXHfTgzBK9QioKZAXLnVkLmK2x2Irll9WDLGk/htmOE7CaV4ywjpqaW0DuTpZyxJj+pFr0kSHP0W6XuhlJXOu0C43Hxs0cjNhvSqyy/ZuoL+aVOsfUm52RZ2durEYY66eNDAFe5RS+irDm0vVurRj9wwvaGg1eAkX273oYbJLXqHSahevmdLR99nCQhDvyBVFioC9VZiLEmlGKNp7nYY2EkA3G0frKosckL8COsFPAUZY6UpQmzV+R5a9BcR6rsBbdEktPXd41RA8/1PJPuAmx7C6Mu3Xx1VjeMBTFY5rXPub2aBGxK8TCf6LsQH2vWxdqF6lUUxaI7s2b8w2jG6QFXN3mYKcJ71skmnH9d1tlzHmqpmmb5BQ42poFVd4BzBI3533Ao5o5KHIxSl5kePlmk5R+vts/psidln0I9cezrgxQHZZHfll1/xrdleXloKHdG6um8D7b4XiiRJDEy4dB4Fm5gLsJPwvpI+wWmdtCUtaUxXvs+eocPm+c8HscflASHbNdgs4ktSUgGvWrDmauNVmG9am1cjwlDqFaxQqINNzkA26SSDHlkNxdASbTuma9fqaycfCc7K1Iuw4IvLRuFOC38yZpO4vFzBjWt9lsl5/z9I/kHnsFFiDgaUnhjenIaG2KdccywDZSwiF5NDNzDCDNv1DZykmw5FocWkwtwZxKLXUsXkGBF++budcACqu9UtDnLxl6f/O9GxFwkiyiILpXH4gG+Tv1UITLVP5xpYWu4ZyZJyFBDKRI2SxZD14Fl7co2PpcHexfxVxkbo7K1vQCqY5C9hK3bpUoDnjnVEAAr10mUqHxDcm6jLW8YLaj9T1yUyAJQFvE/my6gAn8nTw9JVXbecYHVGu6js19VwGwVRznpH0JTPNk1WyJENmISEbfQLF+RJzQ3pejIxXw4rK18KbF0v96rfvfMN1focACpwZCY+LisuMPBDFhnHjlO5gHFmCeBDE5YWp+b9zN1e02PKR5gPAa2YgdUw+bwl6PGMDETyOdImM+uiGkn4AYaYdmb+N6i3k8SV2H/4Uw5Ff24VtNRWWXf6acGAfBiahcJLmLiRkfK+pJgRMaPXtAdoe2fbzhGFQyGuHk0pNPS8qbxDOEidjIBkErSpneo2n249vRegnVplHDZU4QK8OKj0i1wk32JgXAQEaq/rS/Z1bSK0mB39mJGE2Qd1AgQq/GKUWQIdG3Wk3S06tSqg2RByUE7h5zFmzqrksfWQJbBIKbDwQVPxECDSS9FvOPMlVKQi9incixvSiJX2jsBVghEjxq0e2fxbw1LfCKlg9qDu5dd+IB64WiOtTsFSnNHyIWf0KwSZn3/uwRuv9w/V+JyTQ+AWI3Ygl92KSzs+Fx0mDTjxEE6iVgRU+sbLw/Shn8OmAFO02wffpBrFMinCTMuAzuV1bk2CgG+0FTk1K7lG/jhWpLaPzyQAjl4n8NG20vSBciHdcVRm4uZB/0Cv8PWIYgYrjtfObUpYUe0xec9o5HkiSlCFRiAogU1p1tTPOYSmwZgEzda/BjO65haXW1iZS5XnLIQRbgbIO1i2qDv4CrUxtUXUJ1wAjsKP4je/zv+eH1lZ8AQIyspKSRm9Lo13v008gScWiUF7f0gBi6I4eGGWvLKuS+2BxCDozeck91kguRTOMNa2JDruscFmXm/hx3Bj/9GG2Zc6Z+z2oeLg8ulR5b+RfG1uzxIURlx8fwPEOLCpJgoKDbJ60dpbUV7qHj5pvYcJ7X9RvdVye0ma+vElj9Pn6A9ezQaXI6f4BtsDghMkCvmZr2qOSsRospIYP6SPsYTf+HH6+gApsyu8uxZkZZIAG9wwKGkwRfJ4JwSZMVvAZcp9ngsgeNehXCk7/OydumbOmxKrKJajZZxmWsN1UZnTL0UnQ3fSp0HTjqOWGN3P4E053+IVRRw+OGoLy+uqGZq4uR1Mvh4BuiWn2Dx0s4dhZP8oqx+2pU4jraEXcv9T0HTN2kSzaVjDPGI7R7CqVZH7DOVhX4803fEcWgkBM16p3xNWqjc97VDGisMA20IFOwgMZlvGQUbsAtr/BXTtwZtUAkvFz9tKUHANtEmAKsMFETXPc18svskpNq9xh9luO1eF482RGlS9dauD2YKydPnUWhgBj4kFsZdQUCyPYe0GtWswmy93vwU2/e+bqWnncm9THJ/RJTzo9NFST8zxpxUHJGzsu2zNKfhVXOmWzFqpXTBGp77meLIrYvZCDn9eavOSNo0hVESyV2IMxZisXTWFL2kTvCr/wB4lI+uPmi+917gVBZEKfVvoPswm4MtOSyma7hKaBstqC5SIQDvF5dnAhGUEBDIXx+Nib55V4gd+HnU066MQO9BXIp/tkQu5XmxJoArQRexThHxc4L/MrMB3dmG6HYqOIzUXGq9Zi3YCoyrZsIbHZ0RkXrKcZA6Ztr+mg380JHHamyqFAzQIQKindxHIMKQlcLkf7UqO1Cl36vFgwEDcnOvjQmqpHs7nKjxCdVJDmfF0whetts0LF8tk885ERWv8A05hPdV2GXWUuQFgy5z6kSU9yoxtlYFtekWN2KEeOweo3H4uaxtOx0f2k+jEX5TILcECB6zRAMcu8KfYtAsnsPn3zGy5QZn8HrPQKVzkj7Bm6Z/X+1fbKIgbaJXTjPbZLevKH+O/PTv7BzXyILddekvSEP86da4VNSIJMojRXckMhQNd+Oh08xDD+oeEweHHBirTHaVmTstaMGdaIdyn/mR0Qam0yzI/NZLfU/8AHEDQqvXKhASwV5OKTkVAsIYZyz+hpp9BOBU1xnkdoNnnFmU7URTX+UYbl7X92FkiZ8EGuDemm777hJtboIQ2t9nHNYp9X8oHYRCyk+a//8mihvdHFtN2UW1DIKuPGyT1o/30Gi8j5tkH/DevMD057H96L8/q8JicG0rxIhB/I3mC+DGu4NFZqEq/G9ypTzJE84t+Zd6rkkf995Or//RNANrdkESZ19WsxAR3esrmcAKnW86LYkQD8YEGjnD0/QR1SxHquwFt0SS09d3jVRh+4eC2JAp7xHfRVTpkKqsylYiKsoQ4319RSwom3paVLJqA+1dwhpjfyoWOfdG+oBIy95XTF6RdzdMzQa98voBk/RUDu1pLV5RhapYy9SX1lYgkpgjSGlfo+2xpTJb49nNN/uWtBFxjeTCX7x0WKQ+gNulvNVlOSdAMpz5VJUo9myCXHbMMwGbU5ja7RV1PR421BZNwm6ftFHkGe2dAyfwyK3vHlswosVLhvDTIppO8Y5WJ1fumyvTfEIXlcbJ1yS/3kfuZ19o5f29wiXXjzRqyeB2+EYR7IFS6Kz6wCCRqkh4mGCXCRGCKSzQgOiy7NYgOoGIDvg+Ree9AWfmV2HgBFz0ImTrmZOz0W0Hj22yv1avpKL/YTkDoanrNVF3Xh7sYO62sSNlwje6u9lGLHi8MjtFpg08Am2gsJQP0RtGN0LEwsyvL2dgsyIKx0gilIZumMhKlnoj6VobPeHASHpYLpJT556HtYjQrb/IUxXfg8FQ84YgKl3plmngCycDE+a+CekaTahFslxU3H+87WnWB4xnZQ+54ICI9kpjYtotCbIONkCtac9rQJu7+E6rSB9PsBsrx93LrObTU7MAAAA"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var o=n(96540);const s={},a=o.createContext(s);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[1167],{16736:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=n(74848),o=n(28453);const r={sidebar_position:1},i="How To Resolve \u2018Failed to load the JNI shared library\u2019 Error",s={id:"ETL/Talend/jni-shared-lib-error",title:"How To Resolve \u2018Failed to load the JNI shared library\u2019 Error",description:"When you try to open Talend application, you might get the error message below. Let\u2019s resolve it.",source:"@site/docs/ETL/Talend/1.jni-shared-lib-error.md",sourceDirName:"ETL/Talend",slug:"/ETL/Talend/jni-shared-lib-error",permalink:"/docs/ETL/Talend/jni-shared-lib-error",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Talend",permalink:"/docs/category/talend"},next:{title:"How To Resolve OutOfMemoryError: Java heap space",permalink:"/docs/ETL/Talend/java-heap-space-error"}},l={},d=[];function h(e){const a={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"how-to-resolve-failed-to-load-the-jni-shared-library-error",children:"How To Resolve \u2018Failed to load the JNI shared library\u2019 Error"}),"\n",(0,t.jsx)(a.p,{children:"When you try to open Talend application, you might get the error message below. Let\u2019s resolve it."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"Failed to load the JNI shared library \u201cC:\\IBM\\InformationServer/jdk32\\jre\\bin\\j9vm\\jvm.dll\u201d.\n"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"error",src:n(38748).A+"",width:"347",height:"156"})}),"\n",(0,t.jsx)(a.p,{children:"Talend (both free and licensed) requires Java 1.8. If you still have Java 1.7, you need to upgrade it to 1.8 and set the Java_Home path to the new version."}),"\n",(0,t.jsx)(a.p,{children:"When you install IBM DataStage, it sets the JRE path to its own Java JRE on version 1.7. The error happens because any Eclipse-based application like Talend tries to use the default JRE path even when your computer only has 1.8 Java. To override the default path, you need to add a few lines. in the configuration setting (Talend-Studio-win-x86_64.ini or TOS_DI-win-x86_64.ini) file."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"-vm\nC:\\Program Files\\Java\\jdk1.8.0_101\\bin\\javaw.exe\n-vmargs\n-Dosgi.requiredJavaVersion=1.8\n"})}),"\n",(0,t.jsx)(a.p,{children:"The config file has the same name as the application. It is found here:"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"config",src:n(87459).A+"",width:"592",height:"42"})}),"\n",(0,t.jsx)(a.p,{children:"How can I find my JER path?"}),"\n",(0,t.jsx)(a.p,{children:"Here are the steps for finding the JER path on your computer (Windows)"}),"\n",(0,t.jsx)(a.p,{children:"(1) Type Java in the search"}),"\n",(0,t.jsx)(a.p,{children:"(2) Choose \u2018About Java\u2019 or \u2018Configure Java\u2019"}),"\n",(0,t.jsx)(a.p,{children:"(3) Once you go into Java Control Panel, hit the Java tab and click \u2018View\u2019."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"control panel",src:n(55609).A+"",width:"538",height:"570"})}),"\n",(0,t.jsx)(a.p,{children:"(4) You will see your JREs. You can copy and paste the right path into the Talend config file."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Java Runtime Environment Settings",src:n(71102).A+"",width:"573",height:"340"})}),"\n",(0,t.jsx)(a.p,{children:"(2017-08-16)"})]})}function c(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},38748:(e,a,n)=>{n.d(a,{A:()=>t});const t="data:image/webp;base64,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"},55609:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/talend_javapath_2-06f8f3cdb33c1b57d2822c6da6121e81.webp"},71102:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/talend_javapath_3-21b08de437a8cbb2e1fabfc979c2215e.webp"},87459:(e,a,n)=>{n.d(a,{A:()=>t});const t="data:image/webp;base64,UklGRpQJAABXRUJQVlA4TIgJAAAvT0IKAEcGu7ZtY8863/fj02//sdkAS0iNKclO3n+8xT47aAKObVvLmvO+H3e32h1K5sH8GADzgC4VXVp39+Rdt7Ftq8q+7/3/cY0gcocGKIQCqJEiaMAlckld353/HgDd/yQlgADqP1AIAqAkIAiAAiUBQShQCBIkgIH9CYUDKRkwGHApHP5jhMEKIyuIQ9Gf3MnFPGFkmQl0AVfwxDW4AekIPhNoYAQwIOvr98v5ef/68qeAXPEdcP/7+HO68sHFmLMRCIJhJsyEmQiCYSbycV8+7qt4USEp0lJIPRHFK/gEZxjFMQZcIn7ELch/n8EFnI2C+vYP/VtRQaSxrCCONCSFwfiOf1hQr8U9d8fd+fr7kVSWuzoEcNIFXGIIuIKkBiYghxbgBA64Ahd4+3qJUmWQ0wckvqj5II8WOEEXWBSj/zg6yL6/ovMkqNrHwxHQwxTQxREcAGNba0AfUzCagbFNQA8wcnaKA4YWe7hjhR7o4pUMyGsDrtFpfu3FVqYISUshSSmQFANmIi4GzET52/pqGGk5LMlv+NJ5fL1acOeWmfdxWLeJZvqFLqAlf/12sQl5Lq1FuZco/zZoFTzufG+vYVx1scYaNWwH1vfO/VXS9Goryr05hyDbpvMH/xEiYhF0wAxwbG1b4oz7xN3da3f3bMBdyiyAKrKTn4lL7Z5sK2Gs4TDnrz744SWi/4zcRlKUhlnm00r5AG3btt22TQp+B4Lre+wfYAsUxJ/QO6XIlRnuvXeTYeTH9FCFeVP5seDsc+4FQiJ+Sg5wUSL6L9G17SCVNgkJjuVt6rVF7ZkP8HCwGLyWGcg0eBGNFwCOLAA28aE6g7w50KQTYkxwobRxvnCJV4AGLNg8aA/IgvD4C4AGYojb4fVntO14ugFngj/wqAus3gGVhTeffWwbGN5blOGSjxfJmkkKCqVbzBb8yfLFjjdecm7QihldtxNxIfPTcqWnkpSWTIAJlXXFWbseE/SvA9O6siJvLAguVOOzlZlYZX4onXOh4cXA3ohVrgd9kkrENdu8ZHj6BRhok5kJX+D9RcVyW3izo8OHXW/4jSDk7myBWArb69zb+NgWK5wpLLx0GcP0Oh2Nz3Wwqo/3LER+qHR0MQcdf/LrBaLIzQXmn8h7aMWMrpzqUQGc7sHpDIhqVtiazA8HVehk1r2MtYjORC5JYBiAgv7NlEuQk7Lw5rYqPbJBY6AgBCrp0LwodPi0/XpHLGxs/tf9jGES0mvDGd/wzSL4Qn6FOl5gYC0SxpMjdU8uummkFXGSzMpfaxlRLYNQ1eD8fux7mbisgaCuEnHUFAdTYvEGqT5XrMbVOzuqpgLnvK5BZbgdt3Plnzgtkxk9f/3Ruzu3weY2SDOFhedV1oCvTTylwNA1DQOzCDS9ugdfQ4RJxRJHaeIZDVr+sb0cPpyOr7ZiDp3vxBKHDBjVDi+5iJ2JwEmNrmfNOZjbrmvdg0kvxCuNZn+mkPseOVq0kFGj6WGl4Gnbw+ZN8Vlty8aWlk92dDcn7sQS/P7uwbu6G+vm7m9+4jZModxazRrOs7FOpxdjgzJXswiV3CRkOlipKEV8S7NSTHk9MBBXqH8cLNdCehcYMKn1B/X4bMXOhPiTSBiQ2MVqP/RA7zpd6Yzfxl5XQ98TfRfimejeNeFBMghpNlUd3r0t8qKIGeZxlca1/uqPeh+IuLLwuI9uFLfpHVDmNAY2b2qQBoVbsWQ27Tz2ro80MIrgDTvpGOBlSzUOY5wJmkGnYBuXax4GBsxqnjKzPETYBFcuuxWAq6zxUXvWm1zca+h7pUH7LOvVcV6l8ZQHwXC+yZDeYjLZ3bJ8uHnx9tm+5++ftiXAnHAPuuRFuIJBIvTRNGMaHu/RbRhC45RvFoFq4zo2gBp84lrhVc483MUc1A9fbZkwqLH3Ap7JQNzOPz53sJtU7HuRanQx52/bJGyw2ICMl5/fL+VAKYDpkVpswl8Um92W6nWXHvsuVwnhIH4SlfxrafblCqv3s6gZDH6D1viGncioqAUdgEnBgMkOxMJWpsqrs1yO1IRJrR9RzbAzyQclzbziAXnNyW7QkvueNZ0WLbZL+j3qwCWAuCOlAL/3uo1fdm0p0tCYht978a8e6HETUPa71Ye7cNv/ho+CTCGD8CfLg1bVOFfUOg2tREjBuVDQccUBkGLSKz3lgBXWdyTdUPvHOhYY1E46F3rCmbBw+3ill071vFx4ykrlzTrYyRc7hr7nzdeKPX0a/BP+ziOz2ObAokkwmILWR3CtZSky87Naxc70L/I79KkBIG2k9sWjblJSsM7m7ZMLoo1rFhdqaJ9A/C/FNmOWJcxl8yJ8U70uXXj1uYkqPsR0oLvLZcNpzxZM1nMh9HDA57UspxgfM0wuxGQ0HGyPy86ecdJkD4JnF0pjDiLo00+uljkIYVWMCnYsMgAaKeYg8Hdecy+44sekqYdxXs3ZS5JqDoJI6lN6fIyRNnsQLNlwtjLlINYiWslinYPgi2fIbkoCuEqJyaaWgxgvhZ6Ovzb+6tMkqJO0fg2aqZUP0Mkp5yCoYRu6vjTf7nX/T46RBnsQ0iKQSA05iP3He7QQ2DoHoSjK1+NyfJRNKwfhT0LbQs0QlPxTzkFI2w1CiK01Edd2PGrxILIIFmiQcxCji3v7oW0Ogr3CCNXjaNDCVVEgm1IOQsp6GQIO2neuYqusjtTCGr765MVOwlAE3AqQTXzhzv1KerNDujmI5gappDhvSeSEAt4O165HLR5EFoGBBkMOAm/T7HMQbDr1m0hLR2BkAGTTykEIA6gp4CCtAqV7PcEiShyKKBthnf0M7ixyEMl2oh99SyK+7ZE2exC8OmniYzkInFapRBLkIPKIj2nfH8eakWTtchBJdqYF6QiOqeKuShyKGC9F0AnOXZ/Bg1RzEPRHdWXRkijNioQCvn2PijyIjOK4mIPYC9NjghxEUFfm+VKYU3t2OQjLh1MlhVDE1IWYXJhBUs1BSKtDS4axvhzfDkglHkQm7XigQcpBsNiBdQ6CfZhU/o9FrbCuG2XTykFo6aCZKeBgOoChuibSCEVMo6CpGNJFaF3986SbgxhalYRYWS/Mz82Khu9Imz0IzC5AoEHMQeCdtnUOouY5T7ht92IOTJwka52DsDoVl12pPBNe6dwRPNOvmFROGooYOf7/ZjTeGj4+C7BYR7o5CH/y/173lJl4EPO7wTdMGbwd1tXUVpS3FrXk57YdejISD2KeWRu0spjn5OHJvGL243f/gbcR"},28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>s});var t=n(96540);const o={},r=t.createContext(o);function i(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);
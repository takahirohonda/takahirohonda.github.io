"use strict";(self.webpackChunkgatsby_portfolio_site_example=self.webpackChunkgatsby_portfolio_site_example||[]).push([[164],{6840:function(n,s,a){a.r(s);var e=a(4552),t=a(1504),l=a(3132);const p=n=>{let{children:s,pageContext:a}=n;return t.createElement(l.K,{pageContext:a},s)};function o(n){const s=Object.assign({h1:"h1",ol:"ol",li:"li",p:"p",div:"div",h2:"h2"},(0,e.MN)(),n.components);return t.createElement(t.Fragment,null,t.createElement(s.h1,null,"(1) Trouble shoot"),"\n",t.createElement(s.ol,null,"\n",t.createElement(s.li,null,"StaticImage component doesn't work in the mdx file."),"\n"),"\n",t.createElement(s.p,null,"No, it just doesn't work. You need to create a tsx component and import it to mdx file."),"\n",t.createElement(s.ol,{start:"2"},"\n",t.createElement(s.li,null,"Compilation fails with system error."),"\n"),"\n",t.createElement(s.p,null,"Just run ",t.createElement(s.div,{dangerouslySetInnerHTML:{__html:'<code class="language-text">yarn clean</code>'}}),"."),"\n",t.createElement(s.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">$ gatsby develop\n⠙ compile gatsby files\nlibc++abi: terminating due to uncaught exception of <span class="token builtin class-name">type</span> std::__1::system_error: mutex lock failed: Invalid argument\nerror Command failed with signal <span class="token string">"SIGABRT"</span><span class="token builtin class-name">.</span></code></pre></div>'}}),"\n",t.createElement(s.h1,null,"(2) Customisation"),"\n",t.createElement(s.h2,null,"Adding tailwind"),"\n",t.createElement(s.ol,null,"\n",t.createElement(s.li,null,"Install dependencies"),"\n"),"\n",t.createElement(s.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> tailwindcss postcss autoprefixer gatsby-plugin-postcss\nnpx tailwindcss init <span class="token parameter variable">-p</span></code></pre></div>'}}),"\n",t.createElement(s.ol,{start:"2"},"\n",t.createElement(s.li,null,"Enable the Gatsby PostCSS plugin in gatsby-config.js."),"\n"),"\n",t.createElement(s.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">\'gatsby-plugin-postcss\'</span><span class="token punctuation">,</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(s.ol,{start:"3"},"\n",t.createElement(s.li,null,"Configure template paths in tailwind.config.js."),"\n"),"\n",t.createElement(s.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token comment">/** @type {import(\'tailwindcss\').Config} */</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">"./src/pages/**/*.{js,jsx,ts,tsx}"</span><span class="token punctuation">,</span>\n    <span class="token string">"./src/components/**/*.{js,jsx,ts,tsx}"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(s.ol,{start:"4"},"\n",t.createElement(s.li,null,"Add the tailwind directive to global.css"),"\n"),"\n",t.createElement(s.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="css"><pre class="language-css"><code class="language-css"><span class="token atrule"><span class="token rule">@tailwind</span> base<span class="token punctuation">;</span></span>\n<span class="token atrule"><span class="token rule">@tailwind</span> components<span class="token punctuation">;</span></span>\n<span class="token atrule"><span class="token rule">@tailwind</span> utilities<span class="token punctuation">;</span></span></code></pre></div>'}}),"\n",t.createElement(s.ol,{start:"5"},"\n",t.createElement(s.li,null,"Import CSS file in gatsby-browser.js."),"\n"),"\n",t.createElement(s.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token string">\'./src/styles/global.css\'</span></code></pre></div>'}}))}s.default=function(n){return void 0===n&&(n={}),t.createElement(p,n,t.createElement(o,n))}},3132:function(n,s,a){a.d(s,{K:function(){return l}});var e=a(728),t=a(7624);const l=n=>{let{children:s,pageContext:a}=n;const{title:l,description:p}=a.frontmatter;return(0,t.jsx)(e._,{siteTitle:l,description:p,children:s})}},4552:function(n,s,a){a.d(s,{MN:function(){return l}});var e=a(1504);const t=e.createContext({});function l(n){const s=e.useContext(t);return e.useMemo((()=>"function"==typeof n?n(s):{...s,...n}),[s,n])}}}]);
//# sourceMappingURL=component---src-posts-gatsby-gatsby-reference-mdx-94b712c353b1f425a241.js.map
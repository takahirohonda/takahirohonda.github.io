if(!self.define){let i,n={};const a=(a,e)=>(a=new URL(a+".js",e).href,n[a]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=a,i.onload=n,document.head.appendChild(i)}else i=a,importScripts(a),n()})).then((()=>{let i=n[a];if(!i)throw new Error(`Module ${a} didn’t register its module`);return i})));self.define=(e,o)=>{const c=i||("document"in self?document.currentScript.src:"")||location.href;if(n[c])return;let f={};const d=i=>a(i,c),r={module:{uri:c},exports:f,require:d};n[c]=Promise.all(e.map((i=>r[i]||d(i)))).then((i=>(o(...i),f)))}}define(["./workbox-1be04862"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"assets/index-BDe1FybM.css",revision:null},{url:"assets/index-CHIFBIm8.js",revision:null},{url:"favicon/android-icon-144x144.png",revision:"16889af73df2af8484aaa6361a98e249"},{url:"favicon/android-icon-192x192.png",revision:"134637e3458044f00d13cb3a3e0d8691"},{url:"favicon/android-icon-36x36.png",revision:"f0068a847e801fe01ca8cc66135d2f1f"},{url:"favicon/android-icon-48x48.png",revision:"41c16aa59f0fcd7fa7361646cd0e2fc1"},{url:"favicon/android-icon-72x72.png",revision:"adcef420e4dad0aabd09b18fa8b4baba"},{url:"favicon/android-icon-96x96.png",revision:"76dc297ed978023694814b8936dbf749"},{url:"favicon/apple-icon-114x114.png",revision:"80667af786892090f0b25ac66385de31"},{url:"favicon/apple-icon-120x120.png",revision:"937393ebfa1f13ebd344ae66e6a66276"},{url:"favicon/apple-icon-144x144.png",revision:"16889af73df2af8484aaa6361a98e249"},{url:"favicon/apple-icon-152x152.png",revision:"6b665fdb850acb23170ece1629262241"},{url:"favicon/apple-icon-180x180.png",revision:"82a29db6e76d3132e8e5c5699f726bb3"},{url:"favicon/apple-icon-57x57.png",revision:"1282ab339eb2c788642b4865ebe96f05"},{url:"favicon/apple-icon-60x60.png",revision:"1b126ee5c1934e9aa0d90480c25d838f"},{url:"favicon/apple-icon-72x72.png",revision:"adcef420e4dad0aabd09b18fa8b4baba"},{url:"favicon/apple-icon-76x76.png",revision:"6fa0c255f5059b979de5793da802affb"},{url:"favicon/apple-icon-precomposed.png",revision:"ab05a6d58f85b4447db908dd3a6054ac"},{url:"favicon/apple-icon.png",revision:"ab05a6d58f85b4447db908dd3a6054ac"},{url:"favicon/favicon-16x16.png",revision:"73047ded55ba3bb7c0179bebb85b69af"},{url:"favicon/favicon-32x32.png",revision:"bded61ca4831fee23d897156dc3a3aea"},{url:"favicon/favicon-96x96.png",revision:"76dc297ed978023694814b8936dbf749"},{url:"favicon/favicon.ico",revision:"e18c1ef26135d6b6a60ea9fe0cf70c58"},{url:"favicon/ms-icon-144x144.png",revision:"16889af73df2af8484aaa6361a98e249"},{url:"favicon/ms-icon-150x150.png",revision:"76dfc9515fd690528218085d7084eae3"},{url:"favicon/ms-icon-310x310.png",revision:"c788e1687f0318aedf80bacb8e100ecb"},{url:"favicon/ms-icon-70x70.png",revision:"a07bcda9458137dbfc3d2bcd0eaaa988"},{url:"index.html",revision:"fb72879136ad596e60b93738a50dd2d9"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon/android-icon-144x144.png",revision:"16889af73df2af8484aaa6361a98e249"},{url:"favicon/android-icon-192x192.png",revision:"134637e3458044f00d13cb3a3e0d8691"},{url:"favicon/android-icon-36x36.png",revision:"f0068a847e801fe01ca8cc66135d2f1f"},{url:"favicon/android-icon-48x48.png",revision:"41c16aa59f0fcd7fa7361646cd0e2fc1"},{url:"favicon/android-icon-72x72.png",revision:"adcef420e4dad0aabd09b18fa8b4baba"},{url:"favicon/android-icon-96x96.png",revision:"76dc297ed978023694814b8936dbf749"},{url:"manifest.webmanifest",revision:"fb05876e50120b91af62e5ba6055d298"}],{}),i.cleanupOutdatedCaches(),i.registerRoute(new i.NavigationRoute(i.createHandlerBoundToURL("index.html")))}));

if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const a=e=>n(e,c),d={module:{uri:c},exports:r,require:a};i[c]=Promise.all(s.map((e=>d[e]||a(e)))).then((e=>(o(...e),r)))}}define(["./workbox-0bb2c59d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/auxiliaryVerbs-BtmVS8hk.js",revision:null},{url:"assets/conversations-Bg6_21FF.js",revision:null},{url:"assets/main-CaQy_8-V.js",revision:null},{url:"assets/questions-CE79GQl-.js",revision:null},{url:"assets/simpleExpressions-DjEFyB5H.js",revision:null},{url:"assets/utils-CpwQHAiC.css",revision:null},{url:"assets/utils-DwXe3Evf.js",revision:null},{url:"assets/verbs-BDyBGVJc.js",revision:null},{url:"auxiliary-verbs.html",revision:"dab38f5d99a87ac2d3d53d791f9b1a3a"},{url:"conversations.html",revision:"617a2282746311eaacbe7321b9221005"},{url:"favicon.ico",revision:"1d52fad2873e43f1b61cb37774b2a77b"},{url:"icons/android-icon-144x144.png",revision:"260790af2a024be7ebd0e7270353a559"},{url:"icons/android-icon-192x192.png",revision:"97501dbb8e1cc618772f9c44238117cd"},{url:"icons/android-icon-36x36.png",revision:"3640b21fd9449135e568dcb88e2b0039"},{url:"icons/android-icon-48x48.png",revision:"601b757ae6004f71b62bbc7768cc66fb"},{url:"icons/android-icon-72x72.png",revision:"25a19e5be6d9554d86f60889e879cdf0"},{url:"icons/android-icon-96x96.png",revision:"fdb5dde2a824ed8109c0a2fd5d8cd044"},{url:"icons/apple-icon-114x114.png",revision:"8e0500da24eb94622f4c808f966ebf0f"},{url:"icons/apple-icon-120x120.png",revision:"2ab7c20336b275b82ae9ee0b7bc71e48"},{url:"icons/apple-icon-144x144.png",revision:"260790af2a024be7ebd0e7270353a559"},{url:"icons/apple-icon-152x152.png",revision:"e707731f8c8d99e298bfcad8cddd8f40"},{url:"icons/apple-icon-180x180.png",revision:"272ed3cf2cea07eaae3e1124851ec0d6"},{url:"icons/apple-icon-57x57.png",revision:"f5a740d741552f8bca6e4b774b074baa"},{url:"icons/apple-icon-60x60.png",revision:"1b06bfa385253aad5739a57bdd070971"},{url:"icons/apple-icon-72x72.png",revision:"25a19e5be6d9554d86f60889e879cdf0"},{url:"icons/apple-icon-76x76.png",revision:"7af471bcdf00990b8e3692ef4e16aa41"},{url:"icons/apple-icon-precomposed.png",revision:"490ee6925f0b8e574a7b4a5fbe6c0b43"},{url:"icons/apple-icon.png",revision:"490ee6925f0b8e574a7b4a5fbe6c0b43"},{url:"icons/favicon-16x16.png",revision:"1044f1eebc34cb01e3c6e2fb4d8e44bf"},{url:"icons/favicon-32x32.png",revision:"9805eeb2a8e616bcaa39c9776184828f"},{url:"icons/favicon-96x96.png",revision:"fdb5dde2a824ed8109c0a2fd5d8cd044"},{url:"icons/favicon.ico",revision:"caebf8915df350ee49d007fc75974323"},{url:"icons/ms-icon-144x144.png",revision:"260790af2a024be7ebd0e7270353a559"},{url:"icons/ms-icon-150x150.png",revision:"3d434b8f460d539bc2a7d9fae79cebf5"},{url:"icons/ms-icon-310x310.png",revision:"2cb1d15da57df40d0d5e1c6ca87324a0"},{url:"icons/ms-icon-70x70.png",revision:"919b168c8b537b74a4a6a15835444734"},{url:"index.html",revision:"a4da576d81da57c78061165b71b75b45"},{url:"questions.html",revision:"d59452ef145ca250f45740e1fe0d03c6"},{url:"registerSW.js",revision:"58f89ed6b2f0df3e38ed2497647e76f9"},{url:"simple-expressions.html",revision:"191a924a5c2831aa8a4ccf7dc7607e0d"},{url:"verbs.html",revision:"2d66ad0078120d8bf6455b463b8ed39b"},{url:"manifest.webmanifest",revision:"1aa36fa2109b503971f82b1e2251b8ca"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

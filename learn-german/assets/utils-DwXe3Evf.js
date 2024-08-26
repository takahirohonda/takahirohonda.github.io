(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const a=new SpeechSynthesisUtterance;a.lang="de";function h(c,e){const n=new DocumentFragment;c.map((t,o)=>{n.appendChild(d(`(${o+1}) ${t}`))});const r=document.getElementById(e);r==null||r.appendChild(n)}function d(c){const e=document.createElement("li"),n=document.createElement("span"),r=document.createTextNode(c);n.appendChild(r),e.appendChild(n);const t=c.replace(/^\(\d+\)/,""),o=l([p(t),u(t)]);return e.appendChild(o),e.classList.add("flex","justify-between","gap-[4px]"),e}function p(c){const e=document.createElement("button"),n=document.createTextNode("Speak");return e.appendChild(n),e.onclick=()=>{i(c)},e.classList.add("min-w-[100px]","max-h-[32px]","p-[4px]","bg-red-600","border-1","rounded","border-red-800","hover:bg-red-900"),e}function u(c){const e=document.createElement("button"),n=document.createTextNode("Test Speech");return e.classList.add("min-w-[100px]","max-h-[32px]","p-[4px]","bg-emerald-600","border-1","rounded","border-emerald-700","hover:bg-cyan-800"),e.appendChild(n),e.onclick=()=>{g(c)},e}function l(c){const e=document.createElement("div");e.classList.add("flex","flex-col","gap-[8px]","md:flex-row");const n=new DocumentFragment;return c.map(r=>{n.appendChild(r)}),e.appendChild(n),e}function i(c){a.text=c,speechSynthesis.speak(a)}function m(){i("Genau")}function f(){i("Nein")}function g(c){const e=window.SpeechRecognition||window.webkitSpeechRecognition,n=new e;n.continuous=!1,n.lang="de",n.start(),n.onresult=r=>{const t=r.results[0][0].transcript.toLowerCase(),o=c.toLowerCase().replace(/[^a-z0-9\säöüÄÖÜß]/g,"").trim();console.log(`checking the recognised outcome: ${t}`),console.log(`checking target sentence: ${o}`),t===o?m():(f(),alert(`That sounded like '${t}' Target sentence is '${o}'`)),n.stop()}}export{h as c};
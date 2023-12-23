(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();let n=[];const c=o=>{n=[...n,{id:crypto.randomUUID(),text:o,done:!1}]},u=()=>{const o=document.querySelector("#input"),r=document.querySelector("#add"),s=document.querySelector("#todo"),d=e=>{let t="";e.map(i=>{t+=`
				<li id="${i.id}">
					${i.text}
				</li>
			`}),s.innerHTML=t};r==null||r.addEventListener("click",()=>{c(o==null?void 0:o.value),d(n),o.value=""}),d(n)};document.querySelector("#app").innerHTML=`
  <div>
    <h1>todo.ts</h1>
    <div>
      <input id="input" type="text" placeholder="things to do" />
      <button id="add">Add</button>
    </div>
    <div>
      <ul id="todo">
      </ul>
    </div>
  </div>
`;u();

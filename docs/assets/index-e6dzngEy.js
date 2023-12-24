(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();let i=[];const l=n=>{i=[...i,{id:crypto.randomUUID(),text:n,done:!1}]},u=n=>{i=i.map(o=>o.id===n?{...o,done:!o.done}:o)},a=()=>{const n=document.querySelector("#input"),o=document.querySelector("#add"),s=document.querySelector("#todo"),c=e=>{let t="";e.map(r=>{t+=`
				<li id="${r.id}">
					<label>
						<input type="checkbox" class="checkbox" ${r.done?"checked":""} />
						${r.text}
					</label>
				</li>
			`}),s.innerHTML=t};o==null||o.addEventListener("click",()=>{l(n==null?void 0:n.value),c(i),n.value=""}),s.addEventListener("change",function(e){var r;const t=e.target;if((r=t.classList)!=null&&r.contains("checkbox")){const d=t.closest("li");u(d.id)}}),c(i)};document.querySelector("#app").innerHTML=`
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
`;a();

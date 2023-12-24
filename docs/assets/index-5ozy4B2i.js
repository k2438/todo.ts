(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();let i=[];const l=r=>{i=[...i,{id:crypto.randomUUID(),text:r,done:!1}]},u=r=>{i=i.map(o=>o.id===r?{...o,done:!o.done}:o)},a=r=>{i=i.filter(o=>o.id!==r)},f=()=>{const r=document.querySelector("#input"),o=document.querySelector("#add"),s=document.querySelector("#todo"),c=e=>{let t="";e.map(n=>{t+=`
				<li id="${n.id}">
					<label>
						<input type="checkbox" class="checkbox" ${n.done?"checked":""} />
						${n.text}
					</label>
					<button class="delete">×</button>
				</li>
			`}),s.innerHTML=t};o==null||o.addEventListener("click",()=>{l(r==null?void 0:r.value),c(i),r.value=""}),s.addEventListener("change",function(e){var n;const t=e.target;if((n=t.classList)!=null&&n.contains("checkbox")){const d=t.closest("li");u(d.id)}}),s.addEventListener("click",function(e){var n;const t=e.target;if((n=t.classList)!=null&&n.contains("delete")){const d=t.closest("li");a(d.id),c(i)}}),c(i)};document.querySelector("#app").innerHTML=`
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
`;f();

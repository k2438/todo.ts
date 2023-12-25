(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();let c=[],u="all";const f=n=>{c=[...c,{id:crypto.randomUUID(),text:n,done:!1}]},p=n=>{c=c.map(o=>o.id===n?{...o,done:!o.done}:o)},g=n=>{c=c.filter(o=>o.id!==n)},m=n=>{u=n},y=()=>{const n=document.querySelector("#input"),o=document.querySelector("#add"),l=document.querySelector("#filter"),d=document.querySelector("#todos"),e=(t,s="all")=>{let r="";t.map(i=>{s==="todo"&&i.done===!0||s==="done"&&i.done===!1||(r+=`
				<li id="${i.id}">
					<label>
						<input type="checkbox" class="checkbox" ${i.done?"checked":""} />
						${i.text}
					</label>
					<button class="delete">×</button>
				</li>
			`)}),d.innerHTML=r};o==null||o.addEventListener("click",()=>{f(n==null?void 0:n.value),e(c,u),n.value=""}),d.addEventListener("change",function(t){var r;const s=t.target;if((r=s.classList)!=null&&r.contains("checkbox")){const i=s.closest("li");p(i.id)}}),d.addEventListener("click",function(t){var r;const s=t.target;if((r=s.classList)!=null&&r.contains("delete")){const i=s.closest("li");g(i.id),e(c)}}),l.addEventListener("click",function(t){const r=t.target.id;m(r),e(c,r),l.querySelectorAll("span").forEach(function(a){a.id===r?a.className="select":a.className=""})}),e(c,u)},h=document.querySelector("#app");h.innerHTML=`
  <div id="container">
    <h1>todo.ts</h1>
    <div>
      <input id="input" type="text" placeholder="things to do" />
      <button id="add">Add</button>
    </div>
    <div id="filter">
      <span id="all" class="select">All</span>
      <span id="todo" class="">Todo</span>
      <span id="done" class="">Done</span>
    </div>
    <div>
      <ul id="todos">
      </ul>
    </div>
  </div>
`;y();

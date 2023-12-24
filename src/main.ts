import './style.css'
import { setupTodo } from './todo'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
`
setupTodo()
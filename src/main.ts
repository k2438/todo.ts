import './style.css'
import { setupTodo } from './todo'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
`
setupTodo()
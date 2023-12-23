import { Todo } from "./types"
import { todos, addTodo } from "./actions"

export const setupTodo = () => {
	const input = document.querySelector<HTMLInputElement>('#input')!
	const add = document.querySelector<HTMLButtonElement>('#add')!
	const ul = document.querySelector<HTMLButtonElement>('#todo')!

	const setTodos = (todos: Array<Todo>) => {
		let lists = ''
		todos.map(todo => {
			lists += `
				<li id="${todo.id}">
					${todo.text}
				</li>
			`
		})
		ul.innerHTML = lists
	}
	
	add?.addEventListener('click', () => {
		addTodo(input?.value)
		setTodos(todos)
		input.value = ''
	})

	setTodos(todos)
}
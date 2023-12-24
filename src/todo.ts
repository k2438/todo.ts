import { Todo } from "./types"
import { todos, addTodo, toggleTodo } from "./actions"

export const setupTodo = () => {
	const input = document.querySelector<HTMLInputElement>('#input')!
	const add = document.querySelector<HTMLButtonElement>('#add')!
	const ul = document.querySelector<HTMLButtonElement>('#todo')!

	const setTodos = (todos: Array<Todo>) => {
		let lists = ''
		todos.map(todo => {
			lists += `
				<li id="${todo.id}">
					<label>
						<input type="checkbox" class="checkbox" ${todo.done ? "checked": ''} />
						${todo.text}
					</label>
				</li>
			`
		})
		ul.innerHTML = lists
	}
	
	// Add todo
	add?.addEventListener('click', () => {
		addTodo(input?.value)
		setTodos(todos)
		input.value = ''
	})

	// Toggle todo
	ul.addEventListener('change', function (event) {
		const target = event.target as HTMLElement
    if (target.classList?.contains('checkbox')) {
			const targetTodo = target.closest('li') as HTMLLIElement
			toggleTodo(targetTodo.id)
    }
	})
	
	setTodos(todos)
}
import { Todo, Status } from "./types"
import {
	todos,
	status,
	addTodo,
	toggleTodo,
	deleteTodo,
	filterTodos,
} from "./actions"

export const setupTodo = () => {
	const input = document.querySelector<HTMLInputElement>('#input')!
	const add = document.querySelector<HTMLButtonElement>('#add')!
	const filter = document.querySelector<HTMLDivElement>('#filter')!
	const ul = document.querySelector<HTMLButtonElement>('#todos')!

	const setTodos = (todos: Todo[], status: Status = 'all') => {
		let lists = ''
		todos.map(todo => {
			if (status === 'todo' && todo.done === true) return
			if (status === 'done' && todo.done === false) return 
			lists += `
				<li id="${todo.id}">
					<label>
						<input type="checkbox" class="checkbox" ${todo.done ? "checked": ''} />
						${todo.text}
					</label>
					<button class="delete">×</button>
				</li>
			`
		})
		ul.innerHTML = lists
	}
	
	// Add todo
	add?.addEventListener('click', () => {
		addTodo(input?.value)
		setTodos(todos, status)
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

	// Delete todo
	ul.addEventListener('click', function (event) {
		const target = event.target as HTMLElement
		if (target.classList?.contains('delete')) {
			const targetTodo = target.closest('li') as HTMLLIElement
			deleteTodo(targetTodo.id)
			setTodos(todos)
		}
	})

	// Filter todo
	filter.addEventListener('click', function (event) {
		// display todo
		const target = event.target as HTMLElement
		const targetStatus = target.id as Status
		filterTodos(targetStatus)
		setTodos(todos, targetStatus)
		
		// class name
		const children = filter.querySelectorAll('span')
		children.forEach(function(child) {
			if (child.id === targetStatus) {
				child.className = 'select'
			} else {
				child.className = ''
			}
		})
	})
	
	setTodos(todos, status)
}
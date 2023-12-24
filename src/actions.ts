import { Todo, Status } from "./types"

export let todos: Todo[] = []
export let status: Status = 'all'

export const addTodo = (text: string) => {
	todos = [
		...todos,
		{
			id: crypto.randomUUID(),
			text: text,
			done: false,
		}
	]
}

export const toggleTodo = (id: string) => {
	todos = todos.map(todo => {
		if (todo.id === id) {
			return { ...todo, done: !todo.done }
		}
		return todo
	})
}

export const deleteTodo = (id: string) => {
	todos = todos.filter(todo => todo.id !== id)
}

export const filterTodos = (filterStatus: Status) => {
	status = filterStatus
}
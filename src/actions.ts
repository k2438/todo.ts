import { Todo } from "./types"

export let todos: Todo[] = []

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
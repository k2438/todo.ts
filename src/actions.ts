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
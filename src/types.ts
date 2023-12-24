export type Todo = {
	id: string;
	text: string;
	done: boolean;
}

export type Status = 'all' | 'todo' | 'done'
import {Schema, model} from 'mongoose';

export interface TodoModel {
	title: string;
	completed: boolean;
}

export const todoModel = model('Todo', new Schema<TodoModel>({
	title: {
		type: 'String',
	},
	completed: {
		type: 'Boolean',
		default: false,
	},
}));

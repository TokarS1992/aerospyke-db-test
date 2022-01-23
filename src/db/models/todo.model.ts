import {Schema, model} from 'mongoose';

export interface TodoModel {
	taskName: string;
	completed: boolean;
	finished: boolean;
}

export const todoModel = model('Todo', new Schema<TodoModel>({
	taskName: {
		type: 'String',
		required: true,
	},
	completed: {
		type: 'Boolean',
		default: false,
	},
	finished: {
		type: 'Boolean',
		default: false,
	},
}));

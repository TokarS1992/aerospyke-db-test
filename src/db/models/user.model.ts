import {Schema, model} from 'mongoose';

export interface UserModel {
	firstName: string;
	lastName: string;
	address: string;
	email: string;
	birthDay: Date;
	// templates: string[];
}

const schema = new Schema<UserModel>({
	firstName: {
		type: 'String',
		required: true,
	},
	lastName: {
		type: 'String',
		required: false,
	},
	address: {
		type: 'String',
		required: true,
	},
	email: {
		type: 'String',
		required: true,
	},
	// templates: {
	// 	type: [String],
	// 	required: true,
	// 	default: [],
	// },
});

export const userModel = model('User', schema);

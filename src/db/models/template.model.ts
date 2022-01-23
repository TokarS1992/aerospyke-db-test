import {Schema, model} from 'mongoose';

export interface TemplateModel {
	text: string;
	textToHtml: string;
	isValid: boolean;
}

export const templateModel = model('Template', new Schema<TemplateModel>({
	text: {
		type: 'String',
		required: true,
	},
	textToHtml: {
		type: 'String'
	},
	isValid: {
		type: 'Boolean'
	},
}));

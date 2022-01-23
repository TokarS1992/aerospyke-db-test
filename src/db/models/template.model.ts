import {Schema, model} from 'mongoose';

export interface TemplateModel {
	text: string;
	textToHtml: string;
	isValid: boolean;
}

const schema = new Schema<TemplateModel>({
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
});

export const templateModel = model('Template', schema);

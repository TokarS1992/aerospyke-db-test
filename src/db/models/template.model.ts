import {Schema, model} from 'mongoose';

export interface TemplateModel {
	text: string;
	html: string;
	isValid: boolean;
}

const schema = new Schema({

});

export const templateModel = model('Template', schema);

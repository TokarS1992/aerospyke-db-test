import {BaseTemplate} from "./Template";
import {TemplateModel} from "../db/models/template.model";

export interface TemplateData extends BaseTemplate {
	templates: TemplateModel[];
}

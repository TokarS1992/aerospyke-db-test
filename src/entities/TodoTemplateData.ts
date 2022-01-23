import {BaseTemplate} from "./BaseTemplate";
import {TodoModel} from "../db/models/todo.model";

export interface TodoTemplateData extends BaseTemplate {
	todos: TodoModel[];
}

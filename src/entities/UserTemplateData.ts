import {BaseTemplate} from "./Template";
import {UserModel} from "../db/models/user.model";

export interface UserTemplateData extends BaseTemplate {
	users: UserModel[];
}

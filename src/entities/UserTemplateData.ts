import {BaseTemplate} from "./BaseTemplate";
import {UserModel} from "../db/models/user.model";

export interface UserTemplateData extends BaseTemplate {
	users: any[];
}

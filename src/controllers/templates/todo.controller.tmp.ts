import {Get, JsonController, Render} from "routing-controllers";
import {TemplateUtils} from "./utils";
import {ENavBar} from "../../entities/NavBarMetaData";
import {todoModel} from "../../db/models";
import {TodoTemplateData} from "../../entities/TodoTemplateData";

@JsonController()
export class TodoControllerTmp {
	@Get('/')
  @Render('pages/todos')
  public async getIndexTmp(): Promise<TodoTemplateData> {
    const todos = await todoModel.find({});
    const navBarMetadata = TemplateUtils.setActiveByName(ENavBar.TODOS);

		return {
      title: ENavBar.TODOS,
      todos,
      navBarMetadata,
    };
  }
}

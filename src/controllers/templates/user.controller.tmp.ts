import {Get, JsonController, Render} from 'routing-controllers';
import {userModel} from '../../db/models';
import {UserTemplateData} from "../../entities/UserTemplateData";
import {TemplateUtils} from "./utils";
import {ENavBar} from "../../entities/NavBarMetaData";

@JsonController()
export class UserControllerTmp {
  @Get('/users')
  @Render('pages/users.hbs')
  public async getUsersTmp(): Promise<UserTemplateData> {
    const users = await userModel.find({});
    const navBarMetadata = TemplateUtils.setActiveByName(ENavBar.USERS);
    console.log(Array.isArray(users));

    return {
      title: ENavBar.USERS,
      users: users,
      navBarMetadata,
    };
  }
}

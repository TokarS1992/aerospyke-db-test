import {Controller, Get, Render} from 'routing-controllers';
import 'reflect-metadata';
import {userModel} from '../../db/models';

@Controller()
export class UserControllerTmp {
@Get('/users')
  @Render('pages/users.hbs')
  public async getUsersTmp() {
    const users = await userModel.find({});

    return {
      title: 'Users',
      users,
    };
  }
}

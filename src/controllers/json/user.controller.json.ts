import {Get, JsonController, Param} from 'routing-controllers';
import 'reflect-metadata';

@JsonController()
export class UserControllerJson {
  @Get('/users/:id')
  public getOne(@Param('id') id: number) {
      return `This action returns user # ${id}`;
  }
}

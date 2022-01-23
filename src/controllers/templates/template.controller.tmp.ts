import {Controller, Get, Render} from 'routing-controllers';
import 'reflect-metadata';

@Controller()
export class TemplateControllerTmp {
  @Get('/')
  @Render('pages/index.hbs')
  public getIndexTmp() {
    return {
      title: 'Templates',
    };
  }
}

import {Get, JsonController, Render} from 'routing-controllers';
import 'reflect-metadata';
import {TemplateData} from "../../entities/TemplateData";
import {templateModel} from "../../db/models";
import {TemplateUtils} from "./utils";
import {ENavBar} from "../../entities/NavBarMetaData";

@JsonController()
export class TemplateControllerTmp {
  // @Get('/')
  // @Render('pages/index.hbs')
  // public async getIndexTmp(): Promise<TemplateData> {
  //   const templates = await templateModel.find({});
  //   const navBarMetadata = TemplateUtils.setActiveByName(ENavBar.TEMPLATES);
  //
  //   return {
  //     title: ENavBar.TEMPLATES,
  //     templates,
  //     navBarMetadata,
  //   };
  // }
}

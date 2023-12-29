import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Query,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ProjectDto } from './project.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('all')
  getAll() {
    return this.appService.getAll();
  }

  @Post('create')
  create(@Body() project: ProjectDto) {
    return this.appService.create(project);
  }

  @Patch('update')
  update(@Body() project: ProjectDto, @Query('id') id: string) {
    return this.appService.update(project, id);
  }

  @Delete('delete')
  delete(@Query('id') id: string) {
    return this.appService.delete(id);
  }
}

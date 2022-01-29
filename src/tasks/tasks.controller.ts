import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  //Get Tasks
  @Get()
  getTasks(): any[] {
    return this.taskService.getTasks();
  }

  //Get One Task
  @Get(':id')
  getOneTask(@Param('id') id: string): any {
    return this.taskService.getOneTask(id);
  }
}

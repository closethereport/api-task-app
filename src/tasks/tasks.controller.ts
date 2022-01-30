import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  //Create Task
  @Post()
  createTask(@Body() body: any): any[] {
    return this.taskService.createTask(body);
  }

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

  //Delete Task 
  @Delete(':id')
  deleteTask(
      @Param('id') id: string
  ): string {
    return this.taskService.deleteTask(id)
  }
}

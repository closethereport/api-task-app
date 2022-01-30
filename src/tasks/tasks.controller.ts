import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { timeStamp } from 'console';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  //Create Task
  @Post()
  createTask(@Body() body: Task): Task[] {
    return this.taskService.createTask(body);
  }

  //Get Tasks
  @Get()
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  //Get One Task
  @Get(':id')
  getOneTask(@Param('id') id: string): Task {
    return this.taskService.getOneTask(id);
  }

  //Update Task
  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() body: Task): Task {
    return this.taskService.updateTask(id, body);
  }

  //Delete Task
  @Delete(':id')
  deleteTask(@Param('id') id: string): string {
    return this.taskService.deleteTask(id);
  }
}

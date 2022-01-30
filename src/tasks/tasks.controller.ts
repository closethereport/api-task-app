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
  async createTask(@Body() body: Task): Promise<Task[]> {
    const task = await this.taskService.createTask(body);
    return task;
  }

  //Get Tasks
  @Get()
  async getTasks(): Promise<Task[]> {
    const task = await this.taskService.getTasks();
    return task;
  }

  //Get One Task
  @Get(':id')
  async getOneTask(@Param('id') id: string): Promise<Task> {
    const task = await this.taskService.getOneTask(id);
    return task;
  }

  //Update Task
  @Patch(':id')
  async updateTask(@Param('id') id: string, @Body() body: Task): Promise<Task> {
    const task = this.taskService.updateTask(id, body);
    return task;
  }

  //Delete Task
  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<string> {
    const taskId = await this.taskService.deleteTask(id);
    return taskId;
  }
}

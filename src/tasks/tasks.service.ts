import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { title } from 'process';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      id: 'First',
      title: 'Task number one',
      description: 'First Simple task for my app',
    },
    {
      id: 'Second',
      title: 'Task number two',
      description: 'Second Simple task for my app',
    },
    {
      id: 'Third',
      title: 'Task number three',
      description: 'Third Simple task for my app',
    },
  ];

  //Create Task
  async createTask(task: Task): Promise<Task[]> {
    if (task.title === '' || task.description === '') {
      throw new BadRequestException();
    }

    const taskToCreate: Task = await {
      id: new Date().getTime().toString(),
      title: task.title,
      description: task.description,
    };

    this.tasks.push(taskToCreate);

    return [...this.tasks];
  }

  //Get All Tasks
  async getTasks(): Promise<Task[]> {
    return await [...this.tasks];
  }

  //Get One Task
  async getOneTask(id: string): Promise<Task> {
    const task = await this.findTask(id);

    if (!task) {
      throw new NotFoundException();
    }

    return { ...task };
  }

  //Update Task
  async updateTask(id: string, task: Task): Promise<Task> {
    if (task.title === '' || task.description === '')
      throw new BadRequestException();

    const index = await this.tasks.findIndex((t) => t.id === id);
    this.tasks[index] = { ...this.tasks[index], ...task };

    return { ...this.tasks[index] };
  }

  //Delete Task
  async deleteTask(id: string): Promise<string> {
    const task = await this.findTask(id);

    if (!task) {
      throw new NotFoundException();
    }

    const index = await this.tasks.indexOf(task);
    this.tasks.splice(index, 1);

    return id;
  }

  private async findTask(id: string): Promise<Task> {
    const task = await this.tasks.find((t) => t.id === id);
    return task;
  }
}

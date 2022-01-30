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
  createTask(task: Task): Task[] {
    if (task.title === '' || task.description === '') {
      throw new BadRequestException();
    }

    const taskToCreate: Task = {
      id: new Date().getTime().toString(),
      title: task.title,
      description: task.description,
    };

    this.tasks.push(taskToCreate);

    return [...this.tasks];
  }

  //Get All Tasks
  getTasks(): Task[] {
    return [...this.tasks];
  }

  //Get One Task
  getOneTask(id: string): Task {
    const task = this.findTask(id);

    if (!task) {
      throw new NotFoundException();
    }

    return { ...task };
  }

  //Update Task
  updateTask(id: string, task: Task): Task {
    if (task.title === '' || task.description === '')
      throw new BadRequestException();

    const index = this.tasks.findIndex((t) => t.id === id);
    this.tasks[index] = { ...this.tasks[index], ...task };

    return { ...this.tasks[index] };
  }

  //Delete Task
  deleteTask(id: string): string {
    const task = this.findTask(id);

    if (!task) {
      throw new NotFoundException();
    }

    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);

    return id;
  }

  private findTask(id: string) {
    const task = this.tasks.find((t) => t.id === id);
    return task;
  }
}

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { title } from 'process';

@Injectable()
export class TasksService {
  tasks: any[] = [
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
  createTask(task: any): any[] {
    if (task.title === '' || task.description === '') {
      throw new BadRequestException();
    }

    const taskToCreate: any = {
      id: new Date().getTime().toString(),
      title: task.title,
      description: task.description,
    };

    this.tasks.push(taskToCreate);

    return [...this.tasks];
  }

  //Get All Tasks
  getTasks(): any[] {
    return [...this.tasks];
  }

  //Get One Task
  getOneTask(id: string): any {
    const task = this.findTask(id);

    if (!task) {
      throw new NotFoundException();
    }

    return { ...task };
  }

  //Delete One Task
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

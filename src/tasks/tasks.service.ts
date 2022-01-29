import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  tasks: any[] = [
    {
      id: 'First',
      title: 'Task number one',
      description: 'First Simple task for my app'
    },
    {
      id: 'Second',
      title: 'Task number two',
      description: 'Second Simple task for my app'
    },
    {
      id: 'Third',
      title: 'Task number three',
      description: 'Third Simple task for my app'
    },
  ];

  //Get All Tasks
  getTasks(): any[] {
      return [...this.tasks]
  }



}

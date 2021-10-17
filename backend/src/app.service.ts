import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tasks } from './tasks';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Tasks)
    private readonly TasksRepository: Repository<Tasks>,
  ) {}

  async addTodo(text: string): Promise<string> {
    const task = new Tasks();
    task.text = text;
    task.isDone = false;
    return (await this.TasksRepository.save(task)).uid;
  }

  async markTodo(uid: string): Promise<string> {
    const task = new Tasks();
    task.uid = uid;
    task.isDone = true;
    return (await this.TasksRepository.save(task)).uid;
  }

  async getTodos(): Promise<Tasks[]> {
    return await this.TasksRepository.find();
  }

  async deleteTodo(uid: string): Promise<void> {
    await this.TasksRepository.delete({uid: uid});
  }
}

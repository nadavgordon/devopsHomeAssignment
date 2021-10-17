import {
  Controller,
  Post,
  Body,
  Request,
  Get,
  Delete,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Tasks } from './tasks';
import { createParamDecorator, ExecutionContext, BadRequestException } from '@nestjs/common';
import * as rawBody from "raw-body";


export const PlainBody = createParamDecorator(async (_, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest<import("express").Request>();
    if (!req.readable) { throw new BadRequestException("Invalid body"); }

    const body = (await rawBody(req)).toString("utf8").trim();
    return body;
})


export class NewTaskDto {
  text!: string;
}

export class MarkTaskDto {
  uid!: string;
}

export class TaskToDeleteDTo {
  uid!: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/addTodo')
  async addTodo(
    @Request() req: any,
    @PlainBody()text: string
  ): Promise<string> {
    return await this.appService.addTodo(text);
  }

  @Put('/markTodo')
  async markTodo(
    @Request() req: any,
    @PlainBody() uid: string
  ): Promise<string> {
    return await this.appService.markTodo(uid);
  }

  @Get('/getTodos')
  async getTodos(): Promise<Tasks[]> {
    return this.appService.getTodos();
  }

  @Delete('/deleteTodo')
  async deleteTodo(
    @Request() req: any,
    @PlainBody() uid: string
  ): Promise<void> {
    this.appService.deleteTodo(uid);
  }
}

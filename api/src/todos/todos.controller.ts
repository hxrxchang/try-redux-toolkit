import { Controller, Get, Post, Body, Put } from '@nestjs/common';

interface Todo {
  text: string;
}

@Controller('api/todos')
export class TodosController {
  todos: Todo[] = [{ text: 'sample' }];

  @Get()
  getTodos(): Todo[] {
    return this.todos;
  }

  @Post()
  postTodo(@Body() todo: Todo): Todo[] {
    this.todos.push(todo);
    return this.getTodos();
  }
}

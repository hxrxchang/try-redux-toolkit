import { Controller, Get, Post, Body } from '@nestjs/common';

interface Todo {
  text: string;
  isCompleted: boolean;
}

@Controller('api/todos')
export class TodosController {
  todos: Todo[] = [{ text: 'sample', isCompleted: false }];

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

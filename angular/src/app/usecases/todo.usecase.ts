import { Injectable } from '@angular/core';
import { TodoRepository } from '../repositories/todo.repository';
import { AppStore } from '../store/app.store';
import { saveTodoList } from '../store/todo.slice';

@Injectable({
  providedIn: 'root',
})
export class TodoUsecase {
  constructor(
    private todoRepository: TodoRepository,
    private store: AppStore,
  ) {}

  async initialize() {
    const todo = await this.todoRepository.fetchTodo().toPromise();
    this.store.dispatch(saveTodoList(todo));
  }
}

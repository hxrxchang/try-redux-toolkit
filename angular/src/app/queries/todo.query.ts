import { Injectable } from '@angular/core';
import { AppStore } from '../store/app.store';
import { Observable } from 'rxjs';
import { Todo } from '../model';

@Injectable({
  providedIn: 'root',
})
export class TodoQuery {
  constructor(private store: AppStore) {}

  selectTodo(): Observable<Todo[]> {
    return this.store.select(state => state.todo);
  }
}

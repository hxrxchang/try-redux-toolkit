import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoRepository {
  constructor(private http: HttpClient) {}

  fetchTodo() {
    return this.http.get<Todo[]>(`${environment.apiUrl}/api/todos`);
  }
}

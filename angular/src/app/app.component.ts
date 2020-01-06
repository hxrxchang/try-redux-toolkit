import { Component, OnInit } from '@angular/core';
import { TodoUsecase } from './usecases/todo.usecase';
import { TodoQuery } from './queries/todo.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private todoUsecase: TodoUsecase, private todoQuery: TodoQuery) {}

  todos$ = this.todoQuery.selectTodo();

  ngOnInit() {
    this.todos$.subscribe(todo => console.log(todo));
    this.todoUsecase.initialize();
  }
}

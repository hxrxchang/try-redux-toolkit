import { TestBed } from '@angular/core/testing';

import { TodoRepository } from './todo.repository';

describe('TodoRepository', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const type: TodoRepository = TestBed.get(TodoRepository);
    expect(type).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TodoQuery } from './todo.query';

describe('TodoQuery', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const type: TodoQuery = TestBed.get(TodoQuery);
    expect(type).toBeTruthy();
  });
});

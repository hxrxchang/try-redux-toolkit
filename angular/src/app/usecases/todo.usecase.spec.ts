import { TestBed } from '@angular/core/testing';

import { TodoUsecase } from './todo.usecase';

describe('TodoUsecase', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const type: TodoUsecase = TestBed.get(TodoUsecase);
    expect(type).toBeTruthy();
  });
});

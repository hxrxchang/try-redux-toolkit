import { TestBed } from '@angular/core/testing';

import { AppStore } from './app.store';

describe('AppStore', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const type: AppStore = TestBed.get(AppStore);
    expect(type).toBeTruthy();
  });
});

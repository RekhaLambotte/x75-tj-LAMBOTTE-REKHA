import { TestBed } from '@angular/core/testing';

import { CanQuitMyFormGuard } from './can-quit-my-form.guard';

describe('CanQuitMyFormGuard', () => {
  let guard: CanQuitMyFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanQuitMyFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

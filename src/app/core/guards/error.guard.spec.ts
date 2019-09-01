import { TestBed, async, inject } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ErrorGuard } from './error.guard';

describe('ErrorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [ErrorGuard]
    });
  });

  it('should create error guard', inject([ErrorGuard], (guard: ErrorGuard) => {
    expect(guard).toBeTruthy();
  }));
});

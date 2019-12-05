import { TestBed, inject } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { ErrorGuard } from './error.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ErrorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ErrorGuard]
    });
  });

  it('should create error guard', inject([ErrorGuard], (guard: ErrorGuard) => {
    expect(guard).toBeTruthy();
  }));
});

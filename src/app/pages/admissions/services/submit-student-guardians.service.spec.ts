import { TestBed } from '@angular/core/testing';

import { SubmitStudentGuardiansService } from './submit-student-guardians.service';

describe('SubmitStudentGuardiansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmitStudentGuardiansService = TestBed.get(SubmitStudentGuardiansService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SubmitStudentIdentificationService } from './submit-student-identification.service';

describe('SubmitStudentIdentificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmitStudentIdentificationService = TestBed.get(SubmitStudentIdentificationService);
    expect(service).toBeTruthy();
  });
});

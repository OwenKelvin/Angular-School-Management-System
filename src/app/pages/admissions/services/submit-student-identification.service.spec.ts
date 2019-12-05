import { TestBed } from '@angular/core/testing';

import { SubmitStudentIdentificationService } from './submit-student-identification.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SubmitStudentIdentificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: SubmitStudentIdentificationService = TestBed.get(SubmitStudentIdentificationService);
    expect(service).toBeTruthy();
  });
});

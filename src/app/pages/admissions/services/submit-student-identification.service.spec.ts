import { TestBed } from '@angular/core/testing';

import { SubmitStudentIdentificationService } from './submit-student-identification.service';
import { HttpClientModule } from '@angular/common/http';

describe('SubmitStudentIdentificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: SubmitStudentIdentificationService = TestBed.get(SubmitStudentIdentificationService);
    expect(service).toBeTruthy();
  });
});

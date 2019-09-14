import { TestBed } from '@angular/core/testing';

import { StudentIdNumberService } from './student-id-number.service';

describe('StudentIdNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentIdNumberService = TestBed.get(StudentIdNumberService);
    expect(service).toBeTruthy();
  });
});

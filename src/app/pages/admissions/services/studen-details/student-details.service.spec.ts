import { TestBed } from '@angular/core/testing';

import { StudentDetailsService } from './student-details.service';

describe('StudentDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentDetailsService = TestBed.get(StudentDetailsService);
    expect(service).toBeTruthy();
  });
});

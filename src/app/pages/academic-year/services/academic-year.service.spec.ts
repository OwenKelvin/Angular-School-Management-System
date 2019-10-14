import { TestBed } from '@angular/core/testing';

import { AcademicYearService } from './academic-year.service';

describe('AcademicYearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcademicYearService = TestBed.get(AcademicYearService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { StudentDetailsService } from './student-details.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StudentDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: StudentDetailsService = TestBed.get(StudentDetailsService);
    expect(service).toBeTruthy();
  });
});

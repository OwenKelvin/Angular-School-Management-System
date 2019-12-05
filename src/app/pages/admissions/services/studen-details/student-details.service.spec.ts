import { TestBed } from '@angular/core/testing';

import { StudentDetailsService } from './student-details.service';
import { HttpClientModule } from '@angular/common/http';

describe('StudentDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: StudentDetailsService = TestBed.get(StudentDetailsService);
    expect(service).toBeTruthy();
  });
});

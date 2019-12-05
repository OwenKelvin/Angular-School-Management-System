import { TestBed } from '@angular/core/testing';

import { StudentIdNumberService } from './student-id-number.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StudentIdNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: StudentIdNumberService = TestBed.get(StudentIdNumberService);
    expect(service).toBeTruthy();
  });
});

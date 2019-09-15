import { TestBed } from '@angular/core/testing';

import { StudentIdNumberService } from './student-id-number.service';
import { HttpClientModule } from '@angular/common/http';

describe('StudentIdNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: StudentIdNumberService = TestBed.get(StudentIdNumberService);
    expect(service).toBeTruthy();
  });
});

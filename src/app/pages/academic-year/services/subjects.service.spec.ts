import { TestBed } from '@angular/core/testing';

import { SubjectsService } from './subjects.service';
import { HttpClientModule } from '@angular/common/http';

describe('SubjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: SubjectsService = TestBed.get(SubjectsService);
    expect(service).toBeTruthy();
  });
});

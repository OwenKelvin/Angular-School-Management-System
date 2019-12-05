import { TestBed } from '@angular/core/testing';

import { SubjectsService } from './subjects.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SubjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: SubjectsService = TestBed.get(SubjectsService);
    expect(service).toBeTruthy();
  });
});

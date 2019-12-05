import { TestBed } from '@angular/core/testing';

import { SubjectCategoryService } from './subject-category.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SubjectCategoryService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: SubjectCategoryService = TestBed.get(SubjectCategoryService);
    expect(service).toBeTruthy();
  });
});

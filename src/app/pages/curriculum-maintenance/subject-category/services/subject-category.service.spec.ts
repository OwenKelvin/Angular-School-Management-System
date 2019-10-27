import { TestBed } from '@angular/core/testing';

import { SubjectCategoryService } from './subject-category.service';
import { HttpClientModule } from '@angular/common/http';

describe('SubjectCategoryService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: SubjectCategoryService = TestBed.get(SubjectCategoryService);
    expect(service).toBeTruthy();
  });
});

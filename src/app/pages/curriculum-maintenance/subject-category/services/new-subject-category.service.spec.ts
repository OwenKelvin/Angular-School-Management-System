import { TestBed } from '@angular/core/testing';

import { NewSubjectCategoryService } from './new-subject-category.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NewSubjectCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: NewSubjectCategoryService = TestBed.get(NewSubjectCategoryService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NewSubjectCategoryService } from './new-subject-category.service';
import { HttpClientModule } from '@angular/common/http';

describe('NewSubjectCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: NewSubjectCategoryService = TestBed.get(NewSubjectCategoryService);
    expect(service).toBeTruthy();
  });
});

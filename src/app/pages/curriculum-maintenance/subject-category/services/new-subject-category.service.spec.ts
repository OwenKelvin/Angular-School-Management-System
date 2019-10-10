import { TestBed } from '@angular/core/testing';

import { NewSubjectCategoryService } from './new-subject-category.service';

describe('NewSubjectCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewSubjectCategoryService = TestBed.get(NewSubjectCategoryService);
    expect(service).toBeTruthy();
  });
});

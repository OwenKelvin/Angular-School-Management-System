import { TestBed } from '@angular/core/testing';

import { SubjectCategoryService } from './subject-category.service';

describe('SubjectCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubjectCategoryService = TestBed.get(SubjectCategoryService);
    expect(service).toBeTruthy();
  });
});

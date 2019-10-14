import { TestBed } from '@angular/core/testing';

import { ClassLevelCategoryService } from './class-level-category.service';

describe('ClassLevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassLevelCategoryService = TestBed.get(ClassLevelCategoryService);
    expect(service).toBeTruthy();
  });
});

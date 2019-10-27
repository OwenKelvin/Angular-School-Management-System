import { TestBed } from '@angular/core/testing';

import { ClassLevelCategoryService } from './class-level-category.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ClassLevelCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ClassLevelCategoryService = TestBed.get(ClassLevelCategoryService);
    expect(service).toBeTruthy();
  });
});

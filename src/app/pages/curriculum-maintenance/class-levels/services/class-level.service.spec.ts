import { TestBed } from '@angular/core/testing';

import { ClassLevelService } from './class-level.service';

describe('ClassLevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassLevelService = TestBed.get(ClassLevelService);
    expect(service).toBeTruthy();
  });
});

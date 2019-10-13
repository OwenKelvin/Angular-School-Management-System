import { TestBed } from '@angular/core/testing';

import { UnitLevelService } from './unit-level.service';

describe('UnitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitLevelService = TestBed.get(UnitLevelService);
    expect(service).toBeTruthy();
  });
});

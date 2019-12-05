import { TestBed } from '@angular/core/testing';

import { UnitLevelService } from './unit-level.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UnitService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: UnitLevelService = TestBed.get(UnitLevelService);
    expect(service).toBeTruthy();
  });
});

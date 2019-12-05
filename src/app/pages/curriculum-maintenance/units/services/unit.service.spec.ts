import { TestBed } from '@angular/core/testing';

import { UnitService } from './unit.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UnitService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: UnitService = TestBed.get(UnitService);
    expect(service).toBeTruthy();
  });
});

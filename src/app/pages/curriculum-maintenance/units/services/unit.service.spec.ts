import { TestBed } from '@angular/core/testing';

import { UnitService } from './unit.service';
import { HttpClientModule } from '@angular/common/http';

describe('UnitService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: UnitService = TestBed.get(UnitService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ReligionService } from './religion.service';
import { HttpClientModule } from '@angular/common/http';

describe('ReligionService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: ReligionService = TestBed.get(ReligionService);
    expect(service).toBeTruthy();
  });
});

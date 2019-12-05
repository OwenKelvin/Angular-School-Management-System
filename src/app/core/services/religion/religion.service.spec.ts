import { TestBed } from '@angular/core/testing';

import { ReligionService } from './religion.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ReligionService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: ReligionService = TestBed.get(ReligionService);
    expect(service).toBeTruthy();
  });
});

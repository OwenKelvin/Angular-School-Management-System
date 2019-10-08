import { TestBed } from '@angular/core/testing';

import { ReligionService } from './religion.service';

describe('ReligionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReligionService = TestBed.get(ReligionService);
    expect(service).toBeTruthy();
  });
});

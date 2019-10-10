import { TestBed } from '@angular/core/testing';

import { GuardianService } from './guardian.service';

describe('GuardianService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardianService = TestBed.get(GuardianService);
    expect(service).toBeTruthy();
  });
});

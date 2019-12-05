import { TestBed } from '@angular/core/testing';

import { GuardianService } from './guardian.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GuardianService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: GuardianService = TestBed.get(GuardianService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GuardianService } from './guardian.service';
import { HttpClientModule } from '@angular/common/http';

describe('GuardianService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: GuardianService = TestBed.get(GuardianService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GenderService } from './gender.service';
import { HttpClientModule } from '@angular/common/http';

describe('GenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: GenderService = TestBed.get(GenderService);
    expect(service).toBeTruthy();
  });
});

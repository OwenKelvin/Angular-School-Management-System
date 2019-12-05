import { TestBed } from '@angular/core/testing';

import { GenderService } from './gender.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: GenderService = TestBed.get(GenderService);
    expect(service).toBeTruthy();
  });
});

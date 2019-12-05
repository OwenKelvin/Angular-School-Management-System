import { TestBed } from '@angular/core/testing';

import { AllowedPhoneNumbersService } from './allowed-phone-numbers.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AllowedPhoneNumbersService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: AllowedPhoneNumbersService = TestBed.get(
      AllowedPhoneNumbersService
    );
    expect(service).toBeTruthy();
  });
});

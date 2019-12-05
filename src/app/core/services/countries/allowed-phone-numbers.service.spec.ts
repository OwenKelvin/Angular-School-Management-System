import { TestBed } from '@angular/core/testing';

import { AllowedPhoneNumbersService } from './allowed-phone-numbers.service';
import { HttpClientModule } from '@angular/common/http';

describe('AllowedPhoneNumbersService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: AllowedPhoneNumbersService = TestBed.get(
      AllowedPhoneNumbersService
    );
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AllowedPhoneNumbersService } from './allowed-phone-numbers.service';

describe('AllowedPhoneNumbersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllowedPhoneNumbersService = TestBed.get(AllowedPhoneNumbersService);
    expect(service).toBeTruthy();
  });
});

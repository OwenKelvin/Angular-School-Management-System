import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

describe('AuthenticateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, StoreModule.forRoot({})]
  }));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});

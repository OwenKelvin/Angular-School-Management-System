import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AuthenticateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, StoreModule.forRoot({})]
  }));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
  // it('should have a login function that calls http with correct parameters', () => {
  //   const store = jasmine.createSpyObj({ dispatch: () => { } });
  //   // tslint:disable-next-line:arrow-return-shorthand
  //   const http = jasmine.createSpyObj(new HttpClient({handle: jasmine.createSpy()}));
  //   const config = jasmine.createSpyObj({ post: () => { } });
  //   const service = new AuthenticationService(store, http, config);
  //   service.login({ username: 'user', password: 'password', rememberMe: true });
  //   expect(http.post).toHaveBeenCalled();
  // });
});

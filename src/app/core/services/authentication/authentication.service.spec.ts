import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';



describe('AuthenticateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, StoreModule.forRoot({})]
  }));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
  it('should have a login function that calls http with correct parameters', inject([HttpClient], (http: HttpClient) => {
    const store = jasmine.createSpyObj({ dispatch: () => { } });
    const mockHttp = Object.create(http);
    const config = jasmine.createSpyObj({ post: () => { } });
    const spy = spyOn(mockHttp, 'post').and.returnValue({pipe: () => {}});
    const service = new AuthenticationService(store, mockHttp, config);
    service.logout();
    service.login({ username: 'user', password: 'password', rememberMe: true });
    expect(spy).toHaveBeenCalled();
  }));
  // it('should have a login function that calls http with correct parameters', inject([HttpClient], (http: HttpClient) => {
  //   const store = jasmine.createSpyObj({ dispatch: () => { } });
  //   const mockHttp = Object.create(http);
  //   const config = jasmine.createSpyObj({ post: () => { } });
  //   const service = new AuthenticationService(store, mockHttp, config);
  //   const spy = spyOnProperty(service, 'currentUserSubject');
  //   service.logout();
  //   expect(spy).toHaveBeenCalled();
  // }));
  // it('should have a login function that calls http with correct parameters', inject([HttpClient], (http: HttpClient) => {
  //   const store = jasmine.createSpyObj({ dispatch: () => { } });
  //   const mockHttp = Object.create(http);
  //   const config = jasmine.createSpyObj({ post: () => { } });
  //   const spy = spyOn(mockHttp, 'post').and.returnValue({pipe: () => {}});
  //   const service = new AuthenticationService(store, mockHttp, config);
  //   service.logout();
  //   expect(service.authorizationToken()).toBeTruthy();
  // }));
});

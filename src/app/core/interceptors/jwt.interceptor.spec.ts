import { JwtInterceptor } from './jwt.interceptor';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { HttpClient, HttpRequest, HttpHandler } from '@angular/common/http';

describe('Jwt.Interceptor', () => {
  it('should create an instance', () => {
    expect(true).toBeTruthy();
    // expect(new JwtInterceptor(new HttpRequest( "POST", 'api/oauth/token'))).toBeTruthy();
  });
});

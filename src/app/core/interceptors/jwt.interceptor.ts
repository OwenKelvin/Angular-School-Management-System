import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let authToken;
        if (this.authenticationService.authorizationToken() === undefined) {

        } else {
            authToken = this.authenticationService.authorizationToken();
        }
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.access_token) {
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${currentUser.access_token}`
                }
            });
        } else {
            if (authToken) {
                request = request.clone({
                    setHeaders: {
                        Authorization: authToken
                    }
                });
            }

        }

        return next.handle(request);
    }
}

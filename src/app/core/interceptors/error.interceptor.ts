import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IMessage } from 'src/app/shared/services/message/message.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    private message: IMessage;
    constructor(
        private store: Store<any>,
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 500) {
                this.message =  {
                    message: err.statusText,
                    type: 'error',
                    status: err.status,
                    help: err.error
                };
            }
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                this.router.navigate(['/login']);
            }
            const error = err.error.message || err.statusText;

            this.store.dispatch({
                type: '[APP STATE] show dialog',
                payload: this.message
            });

            return throwError(error);
        }));
    }
}

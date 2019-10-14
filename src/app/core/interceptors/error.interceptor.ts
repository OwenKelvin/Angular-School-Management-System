import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IMessage } from 'src/app/shared/services/message/message.service';
import { TOGGLE_DIALOGUE } from 'src/app/store/reducers';

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
            const error = err.statusText || err.error.message;
            if (err.status === 500) {
                this.message = {
                    message: err.statusText,
                    type: 'error',
                    status: err.status,
                    help:  err.error.message
                };
            }
            if (err.status === 422) {
                this.message = {
                    message: err.statusText + ': ' + err.error.message,
                    type: 'error',
                    status: err.status,
                    help: Object.values(err.error.errors).join(', ')
                };
            }
            if (err.status === 404) {
                this.message = {
                    message: err.statusText,
                    type: 'error',
                    status: err.status,
                    help: 'The URl "' + err.url + '" is invalid, If this is an error kindly contact the admin'
                };
            }
            if (err.status === 403) {
                this.message = {
                    message: err.statusText + ': ' + err.error.message,
                    type: 'error',
                    status: err.status,
                    help: err.message
                };
            }
            if (err.status === 401) {
                this.message = {
                    message: error,
                    type: 'error',
                    status: err.status,
                    help: err.error.message
                };
                this.authenticationService.logout();
                this.router.navigate(['/login']);
            }
            if (err.status === 400 || err.status === 405) {
                this.message = {
                    message: error,
                    type: 'error',
                    status: err.status,
                    help: err.error.message
                };
            }
            this.store.dispatch({
                type: TOGGLE_DIALOGUE,
                payload: this.message
            });

            return throwError(error);
        }));
    }
}

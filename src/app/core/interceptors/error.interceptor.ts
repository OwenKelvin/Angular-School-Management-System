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
            const error = err.statusText || err.error.message;
            if (err.status === 500) {
                this.message = {
                    message: err.statusText,
                    type: 'error',
                    status: err.status,
                    help: err.error
                };
            }
            console.log(err)
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
            this.store.dispatch({
                type: '[APP STATE] show dialog',
                payload: this.message
            });

            return throwError(error);
        }));
    }
}

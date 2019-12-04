import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SHOW_SUCCESS_MESSAGE } from 'src/app/store/actions/app.action';
import { tap } from 'rxjs/operators';

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {
    constructor(
        private store: Store<any>,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
                if (request.method !== 'GET' && event instanceof HttpResponse) {
                    this.store.dispatch({
                        type: SHOW_SUCCESS_MESSAGE,
                        payload: true
                    });
                }
                const eventStatus = event instanceof HttpResponse && (event.status === 201 || event.status === 200);
                if (request.method !== 'GET' && eventStatus) {
                    this.store.dispatch({
                        type: SHOW_SUCCESS_MESSAGE,
                        payload: true
                    });
                }
            })
        );
    }
}

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Config {
    apiUrl: string;
    clientSecret: string;
    clientId: string;
    grantType: string;
    constructor() {
        this.grantType = 'password';
        this.apiUrl = 'http://127.0.0.1:1234';
        this.clientSecret = '26pjlPu5AYZxJNpaf69wzOWDHvQHZnsIWKYFCDxA';
        this.clientId = '4';
        // this.apiUrl = 'http://127.0.0.1:1000';
    }
}

/* global process: writable */
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
        this.apiUrl = process.env.CLIENT_API_URL || 'http://127.0.0.1:1234';
        this.clientSecret = process.env.CLIENT_KEY || 'UgU3WoukiA0Hlz1u3J5CM6xEhekJXzihSkIV63b0';
        this.clientId = process.env.CLIENT_ID || '2';
        // this.apiUrl = 'http://127.0.0.1:1000';
    }
}

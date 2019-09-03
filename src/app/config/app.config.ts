import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Config {
    apiUrl: string;
    constructor() {
        // this.apiUrl = 'http://127.0.0.1:1234';
        this.apiUrl = 'http://127.0.0.1:1000';
    }
}

import { Injectable } from '@angular/core';
import { Config } from 'src/app/config/app.config';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReligionService {

  constructor(private config: Config, private http: HttpClient) { }
  getAll(): Observable<any> {
    const url = `${this.config.apiUrl}/api/religions/all`;
    return this.http.get<any>(url)
      .pipe(map(data => {
        return data;
      },
        error => {
          // Error Has been captured by interceptor
        }
      ));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from 'src/app/config/app.config';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentIdNumberService {

  constructor(
    private config: Config,
    private http: HttpClient
    ) { }
  get(idNumber: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const url = `${this.config.apiUrl}/api/student/id-number?q=${idNumber}`;
    return this.http.get(url, httpOptions).pipe(map(data => {
      return data;
    },
    error => {
      console.log(error);
    }
  ));
  }
}

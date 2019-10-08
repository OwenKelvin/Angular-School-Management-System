import { Injectable } from '@angular/core';
import { Config } from 'src/app/config/app.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllowedPhoneNumbersService {

  constructor(private config: Config, private http: HttpClient) { }
  getAllowedCountries(): Observable<any> {
    const url = `${this.config.apiUrl}/api/phones/allowed-countries`;
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

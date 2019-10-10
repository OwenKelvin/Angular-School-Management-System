import { Injectable } from '@angular/core';
import { Config } from 'src/app/config/app.config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuardianService {

  constructor(
    private config: Config,
    private http: HttpClient,
  ) { }
  getGuardiansFor(studentId: string) {
    const url = `${this.config.apiUrl}/api/student/guardians/?q=${studentId}`;
    return this.http.get(url).pipe(map(data => {
      return data;
    },
      error => {
        // Error Has been captured by interceptor
      }
    ));
  }
}

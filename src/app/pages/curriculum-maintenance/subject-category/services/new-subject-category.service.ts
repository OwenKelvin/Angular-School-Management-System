import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/app/config/app.config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewSubjectCategoryService {

  constructor(
    private http: HttpClient,
    private config: Config
  ) { }
  submit(data: any): Observable<any> {
    const url = `${this.config.apiUrl}/api/curriculum/subject-categories`;
    return this.http.post<any>(url, data).pipe(map(user => {
      return user;
    }));
  }
}

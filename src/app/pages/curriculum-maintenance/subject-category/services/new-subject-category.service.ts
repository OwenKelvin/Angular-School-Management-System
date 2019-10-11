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
    let url = `${this.config.apiUrl}/api/curriculum/unit-categories`;
    if (data.id) {
      url += '/' + data.id;
      return this.http.patch<any>(url, data).pipe(map(res => {
        return res;
      }));
    } else {
      return this.http.post<any>(url, data).pipe(map(res => {
        return res;
      }));
    }
  }
}

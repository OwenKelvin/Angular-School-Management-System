import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/app/config/app.config';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import IClassLevel from '../create-class-level/create-class-level.component';

@Injectable({
  providedIn: 'root'
})
export class ClassLevelService {
  constructor(private http: HttpClient, private config: Config) {}
  get(id) {
    const url = `${this.config.apiUrl}/api/curriculum/class-levels/${id}`;
    return this.http.get<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
  submit(data: IClassLevel) {
    let url = `${this.config.apiUrl}/api/curriculum/class-levels`;
    if (data.id) {
      url += '/' + data.id;
      return this.http.patch<any>(url, { ...data }).pipe(
        map(res => {
          return res;
        })
      );
    } else {
      return this.http
        .post<any>(url, {
          ...data,
          class_level_category_id: data.classLevelCategory
        })
        .pipe(
          map(res => {
            return res;
          })
        );
    }
  }
  delete(id: number): Observable<any> {
    const url = `${this.config.apiUrl}/api/curriculum/class-levels/${id}`;
    return this.http.delete<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/app/config/app.config';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import IClassLevelCategory from '../create-class-level-category/create-class-level-category.component';

@Injectable({
  providedIn: 'root'
})
export class ClassLevelCategoryService {
  constructor(private http: HttpClient, private config: Config) { }
  getAll() {
    const url = `${this.config.apiUrl}/api/curriculum/class-level-categories`;
    return this.http.get<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
  get(data: { id: number, classLevel?: 0 | 1}) {
    const { id, classLevel } = data;
    let url = `${this.config.apiUrl}/api/curriculum/class-level-categories/${id}`;
    if (classLevel === 1) {
      url += '/?class_level=1';
    }
    return this.http.get<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
  submit(data: IClassLevelCategory) {
    let url = `${this.config.apiUrl}/api/curriculum/class-level-categories`;
    if (data.id) {
      url += '/' + data.id;
      return this.http.patch<any>(url, { ...data }).pipe(
        map(res => {
          return res;
        })
      );
    } else {
      return this.http.post<any>(url, { ...data}).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  delete(id: number): Observable<any> {
    const url = `${this.config.apiUrl}/api/curriculum/class-level-categories/${id}`;
    return this.http.delete<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
}

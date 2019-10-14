import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/app/config/app.config';
import { map } from 'rxjs/operators';
import { IUnitCategory } from '../view-subject-categories/view-subject-categories.component';

@Injectable({
  providedIn: 'root'
})
export class SubjectCategoryService {

  constructor(
    private http: HttpClient,
    private config: Config
  ) { }
  get(data) {
    const { units, id } = data;
    const url = `${this.config.apiUrl}/api/curriculum/unit-categories/${id}?units=1`;
    return this.http.get<any>(url).pipe(map(res => {
      return res as unknown;
    })) as Observable<IUnitCategory>;
  }
  getActive() {
    const url = `${this.config.apiUrl}/api/curriculum/unit-categories/?active=1`;
    return this.http.get<any>(url).pipe(map(res => {
      return res as unknown;
    })) as Observable<IUnitCategory[]>;
  }
  getAll(): Observable<IUnitCategory[]> {
    const url = `${this.config.apiUrl}/api/curriculum/unit-categories`;
    return this.http.get<any>(url).pipe(map(res => {
      return res as unknown;
    })) as Observable<IUnitCategory[]>;
  }
  deleteItem(id): Observable<any> {
    const url = `${this.config.apiUrl}/api/curriculum/unit-categories/${id}`;
    return this.http.delete<any>(url).pipe(map(res => {
      return res;
    }));
  }
}

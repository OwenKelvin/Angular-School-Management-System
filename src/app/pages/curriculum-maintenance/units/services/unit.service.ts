import { Injectable } from '@angular/core';
import IUnitForm from '../create-unit/create-unit.component';
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/app/config/app.config';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  constructor(private http: HttpClient, private config: Config) {}
  get(data) {
    const { includeUnitLevels, id, includeClassLevels } = data;
    let url = `${this.config.apiUrl}/api/curriculum/units/${id}/?`;
    if (includeUnitLevels === 1) {
      url += `include_unit_levels=${includeUnitLevels}`;
      if (includeClassLevels) {
        url += `&include_class_levels=${includeClassLevels}`;
      }
    } else if (includeClassLevels) {
      url += `include_class_levels=${includeClassLevels}`;
    }
    return this.http.get<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
  submit(data: IUnitForm) {
    let url = `${this.config.apiUrl}/api/curriculum/units`;
    if (data.id) {
      url += '/' + data.id;
      return this.http
        .patch<any>(url, { ...data, unit_category_id: data.unitCategory })
        .pipe(
          map(res => {
            return res;
          })
        );
    } else {
      return this.http
        .post<any>(url, { ...data, unit_category_id: data.unitCategory })
        .pipe(
          map(res => {
            return res;
          })
        );
    }
  }
  getAll(data = { unitLevel: null }): Observable<any> {
    const { unitLevel } = data;
    let url = `${this.config.apiUrl}/api/curriculum/units/`;
    if (unitLevel) {
      url += `?unit_levels=1`;
    }

    return this.http.get<any>(url).pipe(
      map(
        res => {
          return res.map(item => {
            return { ...item, abbr: item.abbreviation };
          });
        },
        error => {
          // Error Has been captured by interceptor
        }
      )
    );
  }
  delete(id: number): Observable<any> {
    const url = `${this.config.apiUrl}/api/curriculum/units/${id}`;
    return this.http.delete<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
}

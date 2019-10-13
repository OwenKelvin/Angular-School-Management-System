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
  constructor(private http: HttpClient, private config: Config) { }
  get(id, includeUnitLevels = 0) {
    const url = `${this.config.apiUrl}/api/curriculum/units/${id}/?include_unit_levels=${includeUnitLevels}`;
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
      return this.http.patch<any>(url, { ...data, unit_category_id: data.unitCategory }).pipe(
        map(res => {
          return res;
        })
      );
    } else {
      return this.http.post<any>(url, { ...data, unit_category_id: data.unitCategory }).pipe(
        map(res => {
          return res;
        })
      );
    }
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

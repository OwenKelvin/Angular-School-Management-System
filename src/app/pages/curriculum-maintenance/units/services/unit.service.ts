import { Injectable } from '@angular/core';
import IUnitForm from '../create-unit/create-unit.component';
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/app/config/app.config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  constructor(private http: HttpClient, private config: Config) {}
  submit(data: IUnitForm) {
    let url = `${this.config.apiUrl}/api/curriculum/units`;
    if (data.id) {
      url += '/' + data.id;
      return this.http.patch<any>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    } else {
      return this.http.post<any>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
}

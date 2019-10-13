import { Injectable } from '@angular/core';
import IUnitForm from '../create-unit/create-unit.component';
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/app/config/app.config';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitLevelService {
  constructor(private http: HttpClient, private config: Config) { }
  delete(id: number): Observable<any> {
    const url = `${this.config.apiUrl}/api/curriculum/unit-levels/${id}`;
    return this.http.delete<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
}

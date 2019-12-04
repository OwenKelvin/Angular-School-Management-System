import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/app/config/app.config';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcademicYearService {
  constructor(private http: HttpClient, private config: Config) {}
  getAll() {
    const url = `${this.config.apiUrl}/api/academic-years`;
    return this.http.get<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
  getFilter(data: { active: boolean } = { active: false }) {
    const { active } = data;
    let url = `${this.config.apiUrl}/api/academic-years/?`;
    if (active) {
      url += 'active=1';
    }
    return this.http.get<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
  get(data: { id: number; classLevels: 1 }) {
    const { id, classLevels } = data;
    let url = `${this.config.apiUrl}/api/academic-years/${id}/?`;
    if (classLevels === 1) {
      url += 'class_levels=1';
    }

    return this.http.get<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
  save(data) {
    let url = `${this.config.apiUrl}/api/academic-years`;
    if (data.id) {
      url += '/' + data.id;
      return this.http
        .patch<any>(url, {
          ...data,
          start_date: data.startDate,
          end_date: data.endDate
        })
        .pipe(
          map(res => {
            return res;
          })
        );
    } else {
      return this.http
        .post<any>(url, {
          ...data,
          start_date: data.startDate,
          end_date: data.endDate
        })
        .pipe(
          map(res => {
            return res;
          })
        );
    }
  }
  delete(id: number): Observable<any> {
    const url = `${this.config.apiUrl}/api/academic-years/${id}`;
    return this.http.delete<any>(url).pipe(
      map(res => {
        return res;
      })
    );
  }
}

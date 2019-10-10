import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from 'src/app/config/app.config'; import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { STUDENT_GUARDIANS_CREATED } from '../store/actions/pages.actions';

@Injectable({
  providedIn: 'root'
})
export class SubmitStudentGuardiansService {

  constructor(
    private http: HttpClient,
    private config: Config,
    private store: Store<any>) { }
  submit(data: any): Observable<any> {
    const submitData = {
      id: data.id,
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      middle_name: data.middleName,
      other_names: data.otherNames,
      date_of_birth: data.dateOfBirth,
      student_school_id_number: data.idNumber,
      birth_cert_number: data.birthCertNumber,
      gender_id: data.gender,
      religion_id: data.religion,
      phone: data.phone,
      student_id: data.student_id,
      relation: data.relation

    };
    let url = `${this.config.apiUrl}/api/admissions/students/guardians`;

    if (data.id) {
      url = `${url}/${data.id}`;
      return this.http.patch<any>(url, submitData).pipe(map(user => {
        return user;
      }));
    } else {
      return this.http.post<any>(url, submitData).pipe(map(user => {
        return user;
      }));
    }
  }
}

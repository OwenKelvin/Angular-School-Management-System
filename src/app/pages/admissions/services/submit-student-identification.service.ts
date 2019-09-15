import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from 'src/app/config/app.config';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SubmitStudentIdentificationService {

  constructor(
    private http: HttpClient,
    private config: Config) { }
  submit(data: any): Observable<any> {
    const submitData = {
      first_name: data.firstName,
      last_name: data.lastName,
      middle_name: data.middleName,
      other_names: data.otherNames,
      date_of_birth: data.dateOfBirth,
      student_school_id_number: data.idNumber,
      birth_cert_number: data.birth_cert_number

    };
    console.log(submitData);
    const url = `${this.config.apiUrl}/api/admissions/students/identification`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<any>(url, submitData, httpOptions).pipe(map(user => {
      return user;
    }));
  }
}

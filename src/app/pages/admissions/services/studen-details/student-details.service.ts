import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Config } from 'src/app/config/app.config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
export interface IStudentDetails {
  first_name: string;
  last_name: string;
  middle_name?: string;
  other_names?: string;
  birth_cert_number?: string;
  date_of_birth?: string;
  name_prefix_id?: string;
}

@Injectable({
  providedIn: 'root'
})

export class StudentDetailsService {

  constructor(
    private config: Config,
    private http: HttpClient,
  ) { }
  getIdentificationInfo(idNumber): Observable<IStudentDetails> | undefined{
    const url = `${this.config.apiUrl}/api/student/id-number/identification-details?q=${idNumber}`;
    return this.http.get<IStudentDetails>(url).pipe(map(data => {
      return data;
    },
      error => {
        // Error Has been captured by interceptor
      }
    ));



    const v: IStudentDetails = {
      first_name: 'OWEN',
      last_name: 'Kelvin',
      middle_name: '',
      other_names: '',
      date_of_birth: '2019-01-01',
      birth_cert_number: '4446466',
    };
    return of(v);

  }
}

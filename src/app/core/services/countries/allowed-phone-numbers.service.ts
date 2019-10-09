import { Injectable } from '@angular/core';
import { Config } from 'src/app/config/app.config';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllowedPhoneNumbersService {
  lib: any;
  phoneUtil: any;
  constructor(private config: Config, private http: HttpClient) {
    this.lib = require('google-libphonenumber');
    this.phoneUtil = this.lib.PhoneNumberUtil.getInstance();
  }
  getAllowedCountries(): Observable<any> {
    const url = `${this.config.apiUrl}/api/phones/allowed-countries`;
    return this.http.get<any>(url)
      .pipe(map(data => {
        return data;
      },
        error => {
          // Error Has been captured by interceptor
        }
      ));
  }
  getAllCountryCodes(): Observable<any> {
    const countries = require('google-libphonenumber').shortnumbermetadata.countryCodeToRegionCodeMap['0'];
    return of(countries.map(country => {
      const code = this.phoneUtil.getCountryCodeForRegion(country);
      return { code, country };
    }).sort((a, b) => {
      const nameA = a.country.toUpperCase(); // ignore upper and lowercase
      const nameB = b.country.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    }));
  }
  isValidPhoneNumber(phoneNumber) {
    try {
      const testNumber = this.phoneUtil.parseAndKeepRawInput('+' + phoneNumber, 'KE');
      return this.phoneUtil.isPossibleNumber(testNumber);
    } catch (err) {
      return false;
    }

  }
}

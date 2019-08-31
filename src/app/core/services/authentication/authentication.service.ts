import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserInterface } from '../../interfaces/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Config } from './../../../config/app.config';
import { OauthInterface } from '../../interfaces/oauth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserInterface>;
  public currentUser: Observable<UserInterface>;
  constructor(private http: HttpClient, private config: Config) {
    this.currentUserSubject = new BehaviorSubject<UserInterface>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserInterface {
    return this.currentUserSubject.value;
  }

  login({username, password, rememberMe}) {
    const loginData: OauthInterface = {
      grant_type : 'password',
      client_id : '2',
      client_secret : 'VxyKc8YkIfrvaZOFO2gnuSxEUIzRJCZ9nXwkZD27',
      remember_me: rememberMe,
      username,
      password,
      scope : '',
    };
    const url = `${this.config.apiUrl}/api/oauth/token`;
    // fetch(url, {method: 'POST', headers: {
    //   'Content-Type': 'application/json'
    // }, body: JSON.stringify(loginData)})
    // .then(res => {
    // })
    // .catch(error => {
    // });
    // return this.http.post<any>(url, loginData)
    //   .subscribe(user => {
    //     alert(user)
    //     localStorage.setItem('currentUser', JSON.stringify(user));
    //     this.currentUserSubject.next(user);
    //     return user;
    //   });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post<any>(`${this.config.apiUrl}/api/oauth/token`, loginData, httpOptions)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));




  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}

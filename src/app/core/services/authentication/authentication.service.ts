import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserInterface } from '../../interfaces/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Config } from './../../../config/app.config';
import { OauthInterface } from '../../interfaces/oauth.interface';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserInterface>;
  public currentUser: Observable<UserInterface>;
  constructor(
    private store: Store<any>,
    private http: HttpClient,
    private config: Config) {
    this.currentUserSubject = new BehaviorSubject<UserInterface>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserInterface {
    return this.currentUserSubject.value;
  }

  login({ username, password, rememberMe }) {
    const loginData: OauthInterface = {
      grant_type: this.config.grantType,
      client_id: this.config.clientId,
      client_secret: this.config.clientSecret,
      remember_me: rememberMe,
      username,
      password,
      scope: '',
    };
    const url = `${this.config.apiUrl}/api/oauth/token`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post<any>(url, loginData, httpOptions)
      .pipe(map(user => {

        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);

        this.store.dispatch({
          type: '[APP STATE] show dialog',
          payload: null
        });

        return user;
      },
        error => {
          console.log(error);
        }

      ));
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}

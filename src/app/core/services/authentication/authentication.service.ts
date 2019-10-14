import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { UserInterface } from '../../interfaces/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Config } from './../../../config/app.config';
import { OauthInterface } from '../../interfaces/oauth.interface';
import { Store, select } from '@ngrx/store';
import { TOGGLE_DIALOGUE } from 'src/app/store/reducers';

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
        this.store.dispatch({
          type: '[APP STATE] user details',
          payload: user
        });
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);

        this.store.dispatch({
          type: TOGGLE_DIALOGUE,
          payload: null
        });

        this.currentUserDetails().subscribe();

        return user;
      },
        error => {
          // Error Has been captured by interceptor
        }

      ));
  }

  currentUserDetails(): Observable<any> {
    const url = `${this.config.apiUrl}/api/user`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<any>(url, httpOptions)
      .pipe(map(user => {
        this.store.dispatch({
          type: '[APP STATE] set logged in user',
          payload: user
        });
        this.currentUserSubject.next(user);

        return user;
      },
        error => {
          // Error Has been captured by interceptor
        }

      ));
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  authorizationToken(): string | undefined {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return `Bearer ${currentUser.access_token}`;
    }

  }
}

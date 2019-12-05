import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthenticationService } from '../services/authentication/authentication.service';

describe('AuthGuard', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, StoreModule.forRoot(reducer)],
      providers: [AuthGuard]
    });
  }));

  it('should create auth guard', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
  it('should return true if current user ', () => {
    const next = jasmine.createSpyObj({queryParams: ''});
    const state = jasmine.createSpyObj({url: ''});
    const router = jasmine.createSpyObj({ navigate: () => { } });
    const authenticationServive = jasmine.createSpyObj({
      currentUserValue: true
    });
    const authGuard = new AuthGuard(router, authenticationServive);
    expect(authGuard.canActivate(next, state)).toBeTruthy();
  });
  it('should return false if no current user ', inject([AuthenticationService], (authenticationServive: AuthenticationService) => {
    const next = jasmine.createSpyObj({queryParams: ''});
    const state = jasmine.createSpyObj({url: ''});
    const router = jasmine.createSpyObj({ navigate: () => { } });
    const auth: AuthenticationService = Object.create(authenticationServive, {
      currentUserValue : { value: false}
    });
    const authGuard = new AuthGuard(router, auth);
    expect(authGuard.canActivate(next, state)).toBeFalsy();
    expect(router.navigate).toHaveBeenCalled();
  }));
});

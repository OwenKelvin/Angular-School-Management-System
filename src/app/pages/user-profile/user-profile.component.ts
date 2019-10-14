import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: { first_name: string };
  constructor(
    private router: Router,
    private store: Store<any>,
    private auth: AuthenticationService) { }

  ngOnInit() {
    this.user = { first_name: '' };
    this.store.pipe(select(state => state.app)).subscribe(app => {
      if (!app) {
        this.auth.currentUserDetails().subscribe(user => {
          this.user = user;
        });
      } else {
        if (app.user) {
          this.user = app.user;
        }

      }
    });
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}

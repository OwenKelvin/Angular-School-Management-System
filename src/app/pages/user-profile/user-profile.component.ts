import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthenticationService) { }

  ngOnInit() {
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}

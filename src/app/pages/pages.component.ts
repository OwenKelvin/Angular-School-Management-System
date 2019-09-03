import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication/authentication.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.less']
})
export class PagesComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }
  isSidebarOpen: boolean;
  ngOnInit() {
    this.isSidebarOpen = false;
  }
  openedChangeHandler(event: boolean) {
    this.isSidebarOpen = event;
  }
  logout() {
    this.auth.logout();
  }

}

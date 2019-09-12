import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication/authentication.service';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.less']
})
export class PagesComponent implements OnInit {

  constructor(
    private store: Store<any>,
    private auth: AuthenticationService) { }
  isSidebarOpen: boolean;
  ngOnInit() {
    this.isSidebarOpen = false;
    this.store.pipe(select('app')).subscribe(
      sidebar => {
        if (sidebar) {
          this.isSidebarOpen = sidebar = sidebar.app.showSideBar;
        } else {
          // this.isSidebarOpen = true;
        }
      }
    );
  }
  openedChangeHandler(event: boolean) {
    this.isSidebarOpen = event;
  }
  logout() {
    this.auth.logout();
  }
  toggleSideBar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.store.dispatch({
      type: '[APP STATE] toggle side bar',
      payload: this.isSidebarOpen
    });
  }
}

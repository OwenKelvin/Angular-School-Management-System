import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.less']
})
export class PagesComponent implements OnInit {

  constructor(
    private store: Store<any>
  ) { }
  isSidebarOpen: boolean;
  ngOnInit() {
    this.isSidebarOpen = false;
    this.store.pipe(select('app')).subscribe(
      sidebar => {
        if (sidebar) {
          this.isSidebarOpen = sidebar = sidebar.showSideBar;
        }
      }
    );
  }
  openedChangeHandler(event: boolean) {
    this.isSidebarOpen = event;
  }
  toggleSideBar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.store.dispatch({
      type: '[APP STATE] toggle side bar',
      payload: this.isSidebarOpen
    });
  }
}

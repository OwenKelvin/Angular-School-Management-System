import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.less']
})
export class PagesComponent implements OnInit {

  constructor() { }
  isSidebarOpen: boolean;
  ngOnInit() {
    this.isSidebarOpen = false;
  }
  openedChangeHandler(event: boolean) {
    this.isSidebarOpen = event;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesService } from '../core/services/routes/routes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private routerLinks: RoutesService) { }

  ngOnInit() {
    console.log(this.routerLinks.getRoutes());
  }

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private router: Router) { }
  getRoutes(): object {
    let returnObj = {};
    this.router.config.filter(route => {
      return route.path !== '' && !/(\*)(\*)/i.test(route.path);
    }).map(route => {
      const obj = {};
      const key = `${route.path}`;
      const component = route.component;
      obj[key] = component;
      return obj;
    }).forEach(route => {
      returnObj = { ...route, ...returnObj };
    });
    return returnObj;
  }
}

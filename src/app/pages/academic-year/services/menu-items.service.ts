import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  constructor() { }
  getItems(): object {
    const items: object = {
      preIcon: 'date_range',
      label: 'Academic Years',
      postIcon: 'arrow_right',
      children: [{
        preIcon: 'calendar_today',
        label: 'Academic Year Management',
        children: [{
          preIcon: 'calendar_today',
          label: 'New Academic Year',
          postIcon: 'add_chart',
          routerLink: '/academic-year/create'
        }],
      }]
    };

    return items;
  }
}

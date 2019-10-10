import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  constructor() { }

  getItems(): object {
    const items: object = {
      preIcon: 'drive_file_rename_outline',
      label: 'Curriculum Management',
      postIcon: 'arrow_right',
      children: [{
        preIcon: 'border_color',
        label: 'Subject Categories Maintenance',
        children: [{
          preIcon: 'border_color',
          label: 'View Subject Categories',
          postIcon: 'remove_red_eye',
          routerLink: '/curriculum/subject-categories/view'
        }, {
          preIcon: 'border_color',
          label: 'Create Subject Category',
          postIcon: 'edit',
          routerLink: '/curriculum/subject-categories/create'
        }],
      }]
    };

    return items;
  }
}

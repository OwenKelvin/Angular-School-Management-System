import { Injectable } from '@angular/core';

export const VIEW_UNIT_CURRICULUM = '/curriculum/units/view';
export const CREATE_UNIT_CURRICULUM = '/curriculum/units/create';
export const CREATE_UNIT_CATEGORY_CURRICULUM = '/curriculum/subject-categories/create';
export const EDIT_UNIT_CATEGORY_CURRICULUM = (id: string | number) => {
  return '/curriculum/subject-categories/edit/' + id;
};
export const VIEW_UNIT_CATEGORY_CURRICULUM = (id: string | number) => {
  return '/curriculum/subject-categories/view/' + id;
};
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
          routerLink: CREATE_UNIT_CATEGORY_CURRICULUM
        }],
      }, {
        preIcon: 'book',
        label: 'Subject/Unit Management',
        postIcon: '',
        children: [{
          preIcon: 'book',
          label: 'Create Subjects/Units',
          postIcon: 'remove_red_eye',
          routerLink: VIEW_UNIT_CURRICULUM
        }, {
          preIcon: 'book',
          label: 'View Subjects/Units',
          postIcon: 'remove_red_eye',
          routerLink: CREATE_UNIT_CURRICULUM
        }]
      }]
    };

    return items;
  }
}

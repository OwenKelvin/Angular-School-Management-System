import { Injectable } from '@angular/core';

export const EDIT_CLASS_LEVEL_CURRICULUM = (id: string | number) => {
  return '/curriculum/class-levels/edit/' + id;
};
export const EDIT_CLASS_LEVEL_CATEGORY_CURRICULUM = (id: string | number) => {
  return '/curriculum/class-level-categories/edit/' + id;
};
export const VIEW_CLASS_LEVEL_CATEGORY_CURRICULUM = (id: string | number) => {
  return '/curriculum/class-level-categories/view/' + id;
};

export const VIEW_UNITS_CURRICULUM = '/curriculum/units/view';
export const CREATE_UNIT_CURRICULUM = '/curriculum/units/create';
export const VIEW_CLASS_LEVELS_CURRICULUM = '/curriculum/class-levels/view';
export const CREATE_CLASS_LEVEL_CURRICULUM = '/curriculum/class-levels/create';
export const VIEW_CLASS_LEVEL_CATEGORIES_CURRICULUM = '/curriculum/class-level-categories/view';
export const CREATE_CLASS_LEVEL_CATEGORY_CURRICULUM =
  '/curriculum/class-level-categories/create';
export const CREATE_UNIT_CATEGORY_CURRICULUM =
  '/curriculum/subject-categories/create';
export const EDIT_UNIT_CATEGORY_CURRICULUM = (id: string | number) => {
  return '/curriculum/subject-categories/edit/' + id;
};
export const VIEW_UNIT_CATEGORY_CURRICULUM = (id: string | number) => {
  return '/curriculum/subject-categories/view/' + id;
};
export const EDIT_UNIT_CURRICULUM = (id: string | number) => {
  return '/curriculum/units/edit/' + id;
};
export const VIEW_UNIT_CURRICULUM = (id: string | number) => {
  return '/curriculum/units/view/' + id;
}; // EDIT_CLASS_LEVEL_UNIT_CURRICULUM

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
  constructor() {}

  getItems(): object {
    const items: object = {
      preIcon: 'drive_file_rename_outline',
      label: 'Curriculum Management',
      postIcon: 'arrow_right',
      children: [
        {
          preIcon: 'border_color',
          label: 'Subject Categories Maintenance',
          children: [
            {
              preIcon: 'border_color',
              label: 'View Subject Categories',
              postIcon: 'remove_red_eye',
              routerLink: '/curriculum/subject-categories/view'
            },
            {
              preIcon: 'border_color',
              label: 'Create Subject Category',
              postIcon: 'edit',
              routerLink: CREATE_UNIT_CATEGORY_CURRICULUM
            }
          ]
        },
        {
          preIcon: 'book',
          label: 'Subject/Unit Management',
          postIcon: '',
          children: [
            {
              preIcon: 'book',
              label: 'Create Subjects/Units',
              postIcon: 'remove_red_eye',
              routerLink: CREATE_UNIT_CURRICULUM
            },
            {
              preIcon: 'book',
              label: 'View Subjects/Units',
              postIcon: 'remove_red_eye',
              routerLink: VIEW_UNITS_CURRICULUM
            }
          ]
        },
        {
          preIcon: 'directions_bike',
          label: 'Class Levels',
          children: [
            {
              preIcon: 'border_color',
              label: 'View Class Levels',
              postIcon: 'remove_red_eye',
              routerLink: VIEW_CLASS_LEVELS_CURRICULUM
            },
            {
              preIcon: 'border_color',
              label: 'Create Class Level',
              postIcon: 'remove_red_eye',
              routerLink: CREATE_CLASS_LEVEL_CURRICULUM
            }
          ]
        },
        {
          preIcon: 'directions_bike',
          label: 'Class Level Categories',
          children: [
            {
              preIcon: 'border_color',
              label: 'View Class Level Category',
              postIcon: 'remove_red_eye',
              routerLink: VIEW_CLASS_LEVEL_CATEGORIES_CURRICULUM
            },
            {
              preIcon: 'border_color',
              label: 'Create Class Level Category',
              postIcon: 'add',
              routerLink: CREATE_CLASS_LEVEL_CATEGORY_CURRICULUM
            }
          ]
        }
      ]
    };

    return items;
  }
}

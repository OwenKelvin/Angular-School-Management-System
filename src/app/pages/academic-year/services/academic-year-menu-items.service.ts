import { Injectable } from '@angular/core';
export const VIEW_ACADEMIC_YEARS = '/academic-year/view';
export const CREATE_ACADEMIC_YEAR = '/academic-year/create';
export const VIEW_ACADEMIC_YEAR = id => '/academic-year/view/' + id;

@Injectable({
  providedIn: 'root'
})
export class AcademicYearMenuItemsService {
  constructor() {}
  getItems(): object {
    const items: object = {
      preIcon: 'date_range',
      label: 'Academic Years',
      postIcon: 'arrow_right',
      children: [
        {
          preIcon: 'calendar_today',
          label: 'Academic Year Management',
          children: [
            {
              preIcon: 'calendar_today',
              label: 'View Academic Years',
              postIcon: 'remove_red_eye',
              routerLink: VIEW_ACADEMIC_YEARS
            },
            {
              preIcon: 'calendar_today',
              label: 'New Academic Year',
              postIcon: 'add_chart',
              routerLink: CREATE_ACADEMIC_YEAR
            }
          ]
        }
      ]
    };

    return items;
  }
}

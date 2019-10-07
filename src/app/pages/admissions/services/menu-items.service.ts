import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  constructor() { }

  getItems(): object {
    const items: object = {
      preIcon: 'group_add',
      label: 'Admission',
      postIcon: 'arrow_right',
      children: [{
        preIcon: 'perm_identity',
        label: 'Student Admission',
        // postIcon: 'arrow_right',
        children: [
          {
            preIcon: 'perm_identity',
            label: 'View Students',
            postIcon: 'remove_red_eye',
            routerLink: '/admissions/students/view'
          },
          {
            preIcon: 'perm_identity',
            label: 'New Student Registration',
            postIcon: 'person_add',
            routerLink: '/admissions/students/add'
          },
          {
            preIcon: 'perm_identity',
            label: 'Edit Student Details',
            postIcon: 'edit',
            routerLink: '/admissions/students/edit'
          }
        ]
      }, {
        preIcon: 'perm_identity',
        label: 'Staff Admission',
        // postIcon: 'arrow_right',
        children: [{
          preIcon: 'perm_identity',
          label: 'View Staffs',
          postIcon: 'remove_red_eye',
          routerLink: '/admissions/staff/view'
        }, {
          preIcon: 'perm_identity',
          label: 'New Staff Registration',
          postIcon: 'person_add',
          routerLink: '/admissions/staff/add'
        }, {
          preIcon: 'perm_identity',
          label: 'Edit Staff Details',
          postIcon: 'edit',
          routerLink: '/admissions/staff/edit'
        }
        ]
      }
      ]
    };

    return items;
  }
}

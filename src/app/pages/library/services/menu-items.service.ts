import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  constructor() { }
  getItems(): object {
    const items: object = {
      preIcon: 'local_library',
      label: 'Library',
      postIcon: 'arrow_right',
      children: [{
        preIcon: 'my_library_books',
        label: 'Search Catalogue',
        postIcon: 'search',
        routerLink: '/library/search-catalogue'
        // children: []
      }, {
        preIcon: 'account_box',
        label: 'My Account',
        // postIcon: 'arrow_right',
        children: [{
          preIcon: 'account_box',
          label: 'My Checked Out Books',
          postIcon: 'remove_red_eye',
        }, {
          preIcon: 'history',
          label: 'My Borrowing History',
          postIcon: 'remove_red_eye',
        }, {
          preIcon: 'bookmark',
          label: 'My Held Books',
          postIcon: 'remove_red_eye',
        }]
      }, {
        preIcon: 'supervisor_account',
        label: 'Admin',
        // postIcon: 'arrow_right',
        children: [{
          preIcon: 'book',
          label: 'Books Management',
          // postIcon: 'arrow_right',
          children: [{
            preIcon: 'book',
            label: 'View Books',
            postIcon: 'add'
          }, {
            preIcon: 'book',
            label: 'Add Books',
            postIcon: 'remove_red_eye'
          }, {
            preIcon: 'book',
            label: 'Edit Existing Books',
            postIcon: 'edit'
          }]
        }, {
          preIcon: 'edit',
          label: 'Book Author Management',
          // postIcon: 'arrow_right',
          children: [{
            preIcon: 'edit',
            label: 'View Authors',
            postIcon: 'add'
          }, {
            preIcon: 'edit',
            label: 'Add Authors',
            postIcon: 'remove_red_eye'
          }, {
            preIcon: 'edit',
            label: 'Edit Existing Author',
            postIcon: 'edit'
          }]
        }, {
          preIcon: 'publish',
          label: 'Book Publisher Management',
          postIcon: 'arrow_right',
          children: [{
            preIcon: 'publish',
            label: 'View Publishers',
            postIcon: 'add'
          }, {
            preIcon: 'publish',
            label: 'Add Publishers',
            postIcon: 'remove_red_eye'
          }, {
            preIcon: 'publish',
            label: 'Edit Existing Publisher',
            postIcon: 'edit'
          }]
        }, {
          preIcon: 'publish',
          label: 'User Management',
          postIcon: 'arrow_right',
          children: [{
            preIcon: 'publish',
            label: 'View Users',
            postIcon: 'add'
          }, {
            preIcon: 'publish',
            label: 'User Management',
            postIcon: 'add'
          }]
        }
        ]
      },
      ]
    };

    return items;
  }
}

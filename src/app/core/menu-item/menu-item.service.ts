import { Injectable } from '@angular/core';
import { MenuItemsService as LibraryMenus } from 'src/app/pages/library/services/menu-items.service';
import { MenuItemsService as AdmissionsMenus } from 'src/app/pages/admissions/services/menu-items.service';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
  private allMenus: object[] = [];
  constructor(
    private librayMenus: LibraryMenus,
    private admissionsMenus: AdmissionsMenus
  ) { }
  get(): object[] {
    this.allMenus = [];
    this.allMenus.push(this.admissionsMenus.getItems());
    this.allMenus.push(this.librayMenus.getItems());
    return this.allMenus;
  }
}

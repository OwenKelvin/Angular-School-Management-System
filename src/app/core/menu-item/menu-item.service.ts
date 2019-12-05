import { Injectable } from '@angular/core';
import { MenuItemsService as LibraryMenus } from 'src/app/pages/library/services/menu-items.service';
import { MenuItemsService as AdmissionsMenus } from 'src/app/pages/admissions/services/menu-items.service';
import { AcademicYearMenuItemsService as AcademicYearMenus } from 'src/app/pages/academic-year/services/academic-year-menu-items.service';
import { MenuItemsService as CurriculumMaintenanceMenus } from 'src/app/pages/curriculum-maintenance/services/menu-items.service';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
  private allMenus: object[] = [];
  constructor(
    private librayMenus: LibraryMenus,
    private admissionsMenus: AdmissionsMenus,
    private academicYearMenus: AcademicYearMenus,
    private curriculumMaintenanceMenus: CurriculumMaintenanceMenus
  ) { }
  get(): object[] {
    this.allMenus = [];
    this.allMenus.push(this.admissionsMenus.getItems());
    this.allMenus.push(this.librayMenus.getItems());
    this.allMenus.push(this.academicYearMenus.getItems());
    this.allMenus.push(this.curriculumMaintenanceMenus.getItems());
    return this.allMenus;
  }
}

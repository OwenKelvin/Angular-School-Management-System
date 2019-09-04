import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from '../../pages.component';
import { StaffComponent } from './staff.component';
import { ViewStaffsComponent } from './view-staffs/view-staffs.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';

const routes: Routes = [
  {
    path: 'admissions',
    component: PagesComponent,
    children: [{
      path: 'staff',
      children: [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        component: StaffComponent,
        pathMatch: 'full'
      }, {
        path: 'view',
        component: ViewStaffsComponent,
        pathMatch: 'full'
      }, {
        path: 'add',
        component: AddStaffComponent,
        pathMatch: 'full'
      }, {
        path: 'edit',
        component: EditStaffComponent,
        pathMatch: 'full'
      }
      ]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }

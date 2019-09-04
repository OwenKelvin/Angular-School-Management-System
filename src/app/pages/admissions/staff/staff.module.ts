import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ViewStaffsComponent } from './view-staffs/view-staffs.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { StaffComponent } from './staff.component';


@NgModule({
  declarations: [AddStaffComponent, ViewStaffsComponent, EditStaffComponent, StaffComponent],
  imports: [
    CommonModule,
    StaffRoutingModule
  ],
  exports: [
    StaffComponent
  ]
})
export class StaffModule { }

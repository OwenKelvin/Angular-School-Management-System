import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionsRoutingModule } from './admissions-routing.module';
import { AdmissionsComponent } from './admissions.component';
import { StudentsModule } from './students/students.module';
import { StaffModule } from './staff/staff.module';


@NgModule({
  declarations: [AdmissionsComponent],
  imports: [
    CommonModule,
    AdmissionsRoutingModule,
    StudentsModule,
    StaffModule
  ],
  exports: []
})
export class AdmissionsModule { }

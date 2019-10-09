import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionsRoutingModule } from './admissions-routing.module';
import { AdmissionsComponent } from './admissions.component';
import { StudentsModule } from './students/students.module';
import { StaffModule } from './staff/staff.module';
import { StoreModule } from '@ngrx/store';
import * as fromAdmissions from './store/reducers';

@NgModule({
  declarations: [AdmissionsComponent],
  imports: [
    CommonModule,
    AdmissionsRoutingModule,
    StudentsModule,
    StaffModule,
    // StoreModule.forFeature(fromAdmissions.admissionsFeatureKey, fromAdmissions.reducers, { metaReducers: fromAdmissions.metaReducers })
    StoreModule.forFeature(fromAdmissions.admissionsFeatureKey, fromAdmissions.reducer)
  ],
  exports: [
    StudentsModule,
    StaffModule,
  ],
})

export class AdmissionsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionsRoutingModule } from './admissions-routing.module';
import { AdmissionsComponent } from './admissions.component';
import { StudentsModule } from './students/students.module';
import { StaffModule } from './staff/staff.module';
import { StoreModule } from '@ngrx/store';
import * as fromAdmissions from './store/reducers';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from 'src/app/core/interceptors/jwt.interceptor';
import { ErrorInterceptor } from 'src/app/core/interceptors/error.interceptor';

@NgModule({
  declarations: [AdmissionsComponent],
  imports: [
    CommonModule,
    AdmissionsRoutingModule,
    StudentsModule,
    StaffModule,
    StoreModule.forFeature(fromAdmissions.admissionsFeatureKey, fromAdmissions.reducers, { metaReducers: fromAdmissions.metaReducers })
  ],
  exports: [],
})

export class AdmissionsModule { }

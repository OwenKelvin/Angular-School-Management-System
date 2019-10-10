import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { LibraryModule } from './library/library.module';
import { AdmissionsModule } from './admissions/admissions.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CoreModule } from '../core/core.module';
import { AcademicYearModule } from './academic-year/academic-year.module';
import { CurriculumMaintenanceModule } from './curriculum-maintenance/curriculum-maintenance.module';

@NgModule({
  declarations: [PagesComponent, HomeComponent, UserProfileComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    LibraryModule,
    AdmissionsModule,
    CoreModule,
    AcademicYearModule,
    CurriculumMaintenanceModule
  ],
  exports: []
})
export class PagesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicYearRoutingModule } from './academic-year-routing.module';
import { AcademicYearComponent } from './academic-year.component';
import { CreateAcademicYearComponent } from './create-academic-year/create-academic-year.component';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { CoreModule } from 'src/app/core/core.module';
import { ViewAcademicYearComponent } from './view-academic-year/view-academic-year.component';
import { ViewAcademicYearsComponent } from './view-academic-years/view-academic-years.component';


@NgModule({
  declarations: [AcademicYearComponent, CreateAcademicYearComponent, ViewAcademicYearComponent, ViewAcademicYearsComponent],
  imports: [
    CommonModule,
    AcademicYearRoutingModule,
    CustomMaterialModule,
    CoreModule
  ], exports: []
})
export class AcademicYearModule { }

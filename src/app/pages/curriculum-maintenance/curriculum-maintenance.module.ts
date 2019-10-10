import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumMaintenanceRoutingModule } from './curriculum-maintenance-routing.module';
import { CurriculumMaintenanceComponent } from './curriculum-maintenance.component';
import { SubjectCategoryComponent } from './subject-category/subject-category.component';
import { CreateSubjectCategoryComponent } from './subject-category/create-subject-category/create-subject-category.component';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CurriculumMaintenanceComponent, SubjectCategoryComponent, CreateSubjectCategoryComponent],
  imports: [
    CommonModule,
    CurriculumMaintenanceRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule
  ]
})
export class CurriculumMaintenanceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumMaintenanceRoutingModule } from './curriculum-maintenance-routing.module';
import { CurriculumMaintenanceComponent } from './curriculum-maintenance.component';
import { SubjectCategoryComponent } from './subject-category/subject-category.component';
import { CreateSubjectCategoryComponent } from './subject-category/create-subject-category/create-subject-category.component';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ViewSubjectCategoriesComponent } from './subject-category/view-subject-categories/view-subject-categories.component';
import { ViewSubjectCategoryComponent } from './subject-category/view-subject-category/view-subject-category.component';
import { CreateUnitComponent } from './units/create-unit/create-unit.component';
import { MessageComponent } from 'src/app/core/message/message.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    CurriculumMaintenanceComponent,
    SubjectCategoryComponent,
    CreateSubjectCategoryComponent,
    ViewSubjectCategoriesComponent,
    ViewSubjectCategoryComponent,
    CreateUnitComponent,
  ],
  imports: [
    CommonModule,
    CurriculumMaintenanceRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    CoreModule,
    FormsModule
  ]
})
export class CurriculumMaintenanceModule {}

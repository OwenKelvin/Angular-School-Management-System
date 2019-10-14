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
import { ViewUnitComponent } from './units/view-unit/view-unit.component';
import { ViewUnitsComponent } from './units/view-units/view-units.component';
import { ClassLevelsComponent } from './class-levels/class-levels.component';
import { CreateClassLevelComponent } from './class-levels/create-class-level/create-class-level.component';
import { CreateClassLevelCategoryComponent } from './class-levels/create-class-level-category/create-class-level-category.component';
import { ViewClassLevelsComponent } from './class-levels/view-class-levels/view-class-levels.component';
import { ViewClassLevelCategoriesComponent } from './class-levels/view-class-level-categories/view-class-level-categories.component';
import { ViewClassLevelCategoryComponent } from './class-levels/view-class-level-category/view-class-level-category.component';
import { ViewClassLevelComponent } from './class-levels/view-class-level/view-class-level.component';

@NgModule({
  declarations: [
    CurriculumMaintenanceComponent,
    SubjectCategoryComponent,
    CreateSubjectCategoryComponent,
    ViewSubjectCategoriesComponent,
    ViewSubjectCategoryComponent,
    CreateUnitComponent,
    ViewUnitComponent,
    ViewUnitsComponent,
    ClassLevelsComponent,
    CreateClassLevelComponent,
    CreateClassLevelCategoryComponent,
    ViewClassLevelsComponent,
    ViewClassLevelCategoriesComponent,
    ViewClassLevelCategoryComponent,
    ViewClassLevelComponent,
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

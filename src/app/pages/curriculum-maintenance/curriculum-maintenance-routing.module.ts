import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { PagesComponent } from '../pages.component';
import { CurriculumMaintenanceComponent } from './curriculum-maintenance.component';
import { SubjectCategoryComponent } from './subject-category/subject-category.component';
import { CreateSubjectCategoryComponent } from './subject-category/create-subject-category/create-subject-category.component';
import { ViewSubjectCategoryComponent } from './subject-category/view-subject-category/view-subject-category.component';
import { ViewSubjectCategoriesComponent } from './subject-category/view-subject-categories/view-subject-categories.component';
import { CreateUnitComponent } from './units/create-unit/create-unit.component';
import { ViewUnitComponent } from './units/view-unit/view-unit.component';
import { ViewUnitsComponent } from './units/view-units/view-units.component';
import { CreateClassLevelComponent } from './class-levels/create-class-level/create-class-level.component';
import { CreateClassLevelCategoryComponent } from './class-levels/create-class-level-category/create-class-level-category.component';
import { ViewClassLevelsComponent } from './class-levels/view-class-levels/view-class-levels.component';
import { ViewClassLevelCategoriesComponent } from './class-levels/view-class-level-categories/view-class-level-categories.component';
import { ViewClassLevelCategoryComponent } from './class-levels/view-class-level-category/view-class-level-category.component';
import { ViewClassLevelComponent } from './class-levels/view-class-level/view-class-level.component';

const routes: Routes = [
  {
    path: 'curriculum',
    canActivate: [AuthGuard],
    component: PagesComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: CurriculumMaintenanceComponent
      },
      {
        path: 'subject-categories',
        canActivate: [AuthGuard],
        // component: CurriculumMaintenanceComponent
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: SubjectCategoryComponent
          },
          {
            path: 'view',
            canActivate: [AuthGuard],
            component: ViewSubjectCategoriesComponent
          },
          {
            path: 'create',
            canActivate: [AuthGuard],
            component: CreateSubjectCategoryComponent
          },
          {
            path: 'edit/:id',
            canActivate: [AuthGuard],
            component: CreateSubjectCategoryComponent
          },
          {
            path: 'view/:id',
            canActivate: [AuthGuard],
            component: ViewSubjectCategoryComponent
          }
        ]
      },
      {
        path: 'units',
        canActivate: [AuthGuard],
        children: [
          {
            path: 'create',
            canActivate: [AuthGuard],
            component: CreateUnitComponent
          },
          {
            path: 'view',
            canActivate: [AuthGuard],
            component: ViewUnitsComponent
          },
          {
            path: 'edit/:id',
            canActivate: [AuthGuard],
            component: CreateUnitComponent
          },
          {
            path: 'view/:id',
            canActivate: [AuthGuard],
            component: ViewUnitComponent
          }
        ]
      },
      {
        path: 'class-levels',
        canActivate: [AuthGuard],
        children: [
          {
            path: 'create',
            canActivate: [AuthGuard],
            component: CreateClassLevelComponent
          },
          {
            path: 'view',
            canActivate: [AuthGuard],
            component: ViewClassLevelsComponent
          },
          {
            path: 'edit/:id',
            canActivate: [AuthGuard],
            component: CreateClassLevelComponent
          },
          {
            path: 'view/:id',
            canActivate: [AuthGuard],
            component: ViewClassLevelComponent
          }
        ]
      },
      {
        path: 'class-level-categories',
        canActivate: [AuthGuard],
        children: [
          {
            path: 'create',
            canActivate: [AuthGuard],
            component: CreateClassLevelCategoryComponent
          },
          {
            path: 'view',
            canActivate: [AuthGuard],
            component: ViewClassLevelCategoriesComponent
          },
          {
            path: 'edit/:id',
            canActivate: [AuthGuard],
            component: CreateClassLevelCategoryComponent
          },
          {
            path: 'view/:id',
            canActivate: [AuthGuard],
            component: ViewClassLevelCategoryComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumMaintenanceRoutingModule {}

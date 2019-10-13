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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumMaintenanceRoutingModule {}

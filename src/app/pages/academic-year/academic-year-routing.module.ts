import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { PagesComponent } from '../pages.component';
import { AcademicYearComponent } from './academic-year.component';
import { CreateAcademicYearComponent } from './create-academic-year/create-academic-year.component';
import { ViewAcademicYearComponent } from './view-academic-year/view-academic-year.component';
import { ViewAcademicYearsComponent } from './view-academic-years/view-academic-years.component';

const routes: Routes = [
  {
    path: 'academic-year',
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
        component: AcademicYearComponent
      },
      {
        path: 'view',
        canActivate: [AuthGuard],
        component: ViewAcademicYearsComponent
      },
      {
        path: 'view/:id',
        canActivate: [AuthGuard],
        component: ViewAcademicYearComponent
      },
      {
        path: 'create',
        canActivate: [AuthGuard],
        component: CreateAcademicYearComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicYearRoutingModule {}

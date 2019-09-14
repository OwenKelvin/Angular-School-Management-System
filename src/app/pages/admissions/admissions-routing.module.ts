import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionsComponent } from './admissions.component';
import { PagesComponent } from '../pages.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';


const routes: Routes = [{
  path: 'admissions',
  canActivate: [AuthGuard],
  component: PagesComponent ,
  children: [{
    path: '',
    canActivate: [AuthGuard],
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: AdmissionsComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionsComponent } from './admissions.component';
import { PagesComponent } from '../pages.component';


const routes: Routes = [{
  path: 'admissions',
  component: PagesComponent ,
  children: [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    component: AdmissionsComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionsRoutingModule { }

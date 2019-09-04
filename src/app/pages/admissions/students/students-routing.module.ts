import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from '../../pages.component';
import { StudentsComponent } from './students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { EditStudentComponent } from './edit-student/edit-student.component';


const routes: Routes = [
  {
    path: 'admissions',
    component: PagesComponent,
    children: [{
      path: 'students',
      children: [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        component: StudentsComponent,
        pathMatch: 'full'
      }, {
        path: 'view',
        component: ViewStudentsComponent,
        pathMatch: 'full'
      }, {
        path: 'add',
        component: AddStudentComponent,
        pathMatch: 'full'
      }, {
        path: 'edit',
        component: EditStudentComponent,
        pathMatch: 'full'
      }
      ]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }

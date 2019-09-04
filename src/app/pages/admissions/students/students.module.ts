import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { StudentsComponent } from './students.component';


@NgModule({
  declarations: [AddStudentComponent, EditStudentComponent, ViewStudentsComponent, StudentsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ],
  exports: [StudentsComponent]
})
export class StudentsModule { }

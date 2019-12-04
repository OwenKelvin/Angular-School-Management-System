import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { StudentsComponent } from './students.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { StudentIdentificationFormComponent } from './student-identification-form/student-identification-form.component';
import { IdentificationDetailsComponent } from './view-student/identification-details/identification-details.component';
import { StudentGuardianFormComponent } from './student-guardian-form/student-guardian-form.component';
import { OrdinalPipe } from 'src/app/shared/pipes/ordinal.pipe';
import { StudentAcademicYearAllocationComponent } from './student-academic-year-allocation/student-academic-year-allocation.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    CoreModule
  ],
  exports: [StudentsComponent],
  declarations: [
    OrdinalPipe,
    AddStudentComponent,
    EditStudentComponent,
    ViewStudentsComponent,
    StudentsComponent,
    StudentIdentificationFormComponent,
    IdentificationDetailsComponent,
    StudentGuardianFormComponent,
    StudentAcademicYearAllocationComponent],
})
export class StudentsModule { }

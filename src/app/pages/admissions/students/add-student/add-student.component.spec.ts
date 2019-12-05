import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentComponent } from './add-student.component';
import { MatCommonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentIdentificationFormComponent } from '../student-identification-form/student-identification-form.component';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentGuardianFormComponent } from '../student-guardian-form/student-guardian-form.component';
import { OrdinalPipe } from 'src/app/shared/pipes/ordinal.pipe';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/store/reducers';
import { StudentAcademicYearAllocationComponent } from '../student-academic-year-allocation/student-academic-year-allocation.component';
import { SelectComponent } from 'src/app/core/select/select.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddStudentComponent', () => {
  let component: AddStudentComponent;
  let fixture: ComponentFixture<AddStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCommonModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CustomMaterialModule,
        HttpClientTestingModule,
        StoreModule.forRoot(reducer)
      ],
      declarations: [
        SelectComponent,
        AddStudentComponent,
        StudentIdentificationFormComponent,
        StudentGuardianFormComponent,
        OrdinalPipe,
        StudentAcademicYearAllocationComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

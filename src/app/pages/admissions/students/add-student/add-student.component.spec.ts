import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentComponent } from './add-student.component';
import { MatTabsModule, MatExpansionModule, MatIconModule, MatCommonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentIdentificationFormComponent } from '../student-identification-form/student-identification-form.component';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentGuardianFormComponent } from '../student-guardian-form/student-guardian-form.component';
import { OrdinalPipe } from 'src/app/shared/pipes/ordinal.pipe';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/store/reducers';

describe('AddStudentComponent', () => {
  let component: AddStudentComponent;
  let fixture: ComponentFixture<AddStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCommonModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CustomMaterialModule,
        HttpClientModule,
        StoreModule.forRoot(reducer)
      ],
      declarations: [ AddStudentComponent, StudentIdentificationFormComponent, StudentGuardianFormComponent, OrdinalPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

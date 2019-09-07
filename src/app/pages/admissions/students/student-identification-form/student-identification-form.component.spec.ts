import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIdentificationFormComponent } from './student-identification-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatDatepickerModule } from '@angular/material';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('StudentIdentificationFormComponent', () => {
  let component: StudentIdentificationFormComponent;
  let fixture: ComponentFixture<StudentIdentificationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        CustomMaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      declarations: [ StudentIdentificationFormComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIdentificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

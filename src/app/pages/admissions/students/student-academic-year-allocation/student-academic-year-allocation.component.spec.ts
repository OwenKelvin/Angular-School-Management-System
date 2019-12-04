import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAcademicYearAllocationComponent } from './student-academic-year-allocation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SelectComponent } from 'src/app/core/select/select.component';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('StudentAcademicYearAllocationComponent', () => {
  let component: StudentAcademicYearAllocationComponent;
  let fixture: ComponentFixture<StudentAcademicYearAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        CustomMaterialModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [StudentAcademicYearAllocationComponent, SelectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAcademicYearAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGuardianFormComponent } from './student-guardian-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdinalPipe } from 'src/app/shared/pipes/ordinal.pipe';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { MatIconModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/pages/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('StudentGuardianFormComponent', () => {
  let component: StudentGuardianFormComponent;
  let fixture: ComponentFixture<StudentGuardianFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CustomMaterialModule,
        MatIconModule,
        StoreModule.forRoot(reducer),
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [StudentGuardianFormComponent, OrdinalPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGuardianFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcademicYearComponent } from './create-academic-year.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { SelectComponent } from 'src/app/core/select/select.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../../admissions/store/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateAcademicYearComponent', () => {
  let component: CreateAcademicYearComponent;
  let fixture: ComponentFixture<CreateAcademicYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CustomMaterialModule,
        HttpClientModule,
        StoreModule.forRoot(reducer)
      ],
      declarations: [CreateAcademicYearComponent, SelectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAcademicYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

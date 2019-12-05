import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcademicYearComponent } from './view-academic-year.component';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewAcademicYearComponent', () => {
  let component: ViewAcademicYearComponent;
  let fixture: ComponentFixture<ViewAcademicYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomMaterialModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [ ViewAcademicYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAcademicYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

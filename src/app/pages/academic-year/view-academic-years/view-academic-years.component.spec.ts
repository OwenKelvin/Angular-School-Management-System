import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcademicYearsComponent } from './view-academic-years.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ViewAcademicYearsComponent', () => {
  let component: ViewAcademicYearsComponent;
  let fixture: ComponentFixture<ViewAcademicYearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ ViewAcademicYearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAcademicYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

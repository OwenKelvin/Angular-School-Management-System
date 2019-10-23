import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcademicYearComponent } from './view-academic-year.component';

describe('ViewAcademicYearComponent', () => {
  let component: ViewAcademicYearComponent;
  let fixture: ComponentFixture<ViewAcademicYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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

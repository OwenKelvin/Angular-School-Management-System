import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubjectCategoriesComponent } from './view-subject-categories.component';

describe('ViewSubjectCategoriesComponent', () => {
  let component: ViewSubjectCategoriesComponent;
  let fixture: ComponentFixture<ViewSubjectCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubjectCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubjectCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

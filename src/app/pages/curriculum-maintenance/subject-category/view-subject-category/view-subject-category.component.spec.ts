import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubjectCategoryComponent } from './view-subject-category.component';

describe('ViewSubjectCategoryComponent', () => {
  let component: ViewSubjectCategoryComponent;
  let fixture: ComponentFixture<ViewSubjectCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubjectCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubjectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

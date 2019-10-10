import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubjectCategoryComponent } from './create-subject-category.component';

describe('CreateSubjectCategoryComponent', () => {
  let component: CreateSubjectCategoryComponent;
  let fixture: ComponentFixture<CreateSubjectCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubjectCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubjectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassLevelCategoryComponent } from './create-class-level-category.component';

describe('CreateClassLevelCategoryComponent', () => {
  let component: CreateClassLevelCategoryComponent;
  let fixture: ComponentFixture<CreateClassLevelCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateClassLevelCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClassLevelCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

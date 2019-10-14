import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassLevelCategoriesComponent } from './view-class-level-categories.component';

describe('ViewClassLevelCategoriesComponent', () => {
  let component: ViewClassLevelCategoriesComponent;
  let fixture: ComponentFixture<ViewClassLevelCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClassLevelCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClassLevelCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

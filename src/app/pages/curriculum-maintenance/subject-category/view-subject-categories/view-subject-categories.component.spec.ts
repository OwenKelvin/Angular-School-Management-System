import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubjectCategoriesComponent } from './view-subject-categories.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewSubjectCategoriesComponent', () => {
  let component: ViewSubjectCategoriesComponent;
  let fixture: ComponentFixture<ViewSubjectCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CustomMaterialModule, HttpClientTestingModule],
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

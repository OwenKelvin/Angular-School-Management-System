import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassLevelCategoryComponent } from './create-class-level-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/pages/admissions/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateClassLevelCategoryComponent', () => {
  let component: CreateClassLevelCategoryComponent;
  let fixture: ComponentFixture<CreateClassLevelCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CustomMaterialModule,
        StoreModule.forRoot(reducer),
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [CreateClassLevelCategoryComponent]
    }).compileComponents();
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

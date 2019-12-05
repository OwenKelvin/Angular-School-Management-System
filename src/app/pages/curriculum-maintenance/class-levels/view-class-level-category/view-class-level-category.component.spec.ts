import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassLevelCategoryComponent } from './view-class-level-category.component';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { MessageComponent } from 'src/app/core/message/message.component';
import { CreateClassLevelComponent } from '../create-class-level/create-class-level.component';
import { SelectComponent } from 'src/app/core/select/select.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewClassLevelCategoryComponent', () => {
  let component: ViewClassLevelCategoryComponent;
  let fixture: ComponentFixture<ViewClassLevelCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomMaterialModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        ViewClassLevelCategoryComponent,
        MessageComponent,
        CreateClassLevelComponent,
        SelectComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClassLevelCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

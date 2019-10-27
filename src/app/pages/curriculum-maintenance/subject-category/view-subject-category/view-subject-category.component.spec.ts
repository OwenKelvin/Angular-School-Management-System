import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubjectCategoryComponent } from './view-subject-category.component';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { MatChipsModule } from '@angular/material';
import { CreateUnitComponent } from '../../units/create-unit/create-unit.component';
import { SelectComponent } from 'src/app/core/select/select.component';
import { MessageComponent } from 'src/app/core/message/message.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewSubjectCategoryComponent', () => {
  let component: ViewSubjectCategoryComponent;
  let fixture: ComponentFixture<ViewSubjectCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomMaterialModule, MatChipsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [ ViewSubjectCategoryComponent, CreateUnitComponent, SelectComponent, MessageComponent ]
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

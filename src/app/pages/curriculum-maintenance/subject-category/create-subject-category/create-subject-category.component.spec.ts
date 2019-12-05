import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubjectCategoryComponent } from './create-subject-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { CreateUnitComponent } from '../../units/create-unit/create-unit.component';
import { SelectComponent } from 'src/app/core/select/select.component';
import { MessageComponent } from 'src/app/core/message/message.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/pages/admissions/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef } from '@angular/material';

describe('CreateSubjectCategoryComponent', () => {
  let component: CreateSubjectCategoryComponent;
  let fixture: ComponentFixture<CreateSubjectCategoryComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };


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
      declarations: [
        CreateSubjectCategoryComponent,
        CreateUnitComponent,
        SelectComponent,
        MessageComponent
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        }
      ]
    }).compileComponents();
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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassLevelComponent } from './create-class-level.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/pages/store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { SelectComponent } from 'src/app/core/select/select.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateClassLevelComponent', () => {
  let component: CreateClassLevelComponent;
  let fixture: ComponentFixture<CreateClassLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducer),
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CustomMaterialModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [CreateClassLevelComponent, SelectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClassLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

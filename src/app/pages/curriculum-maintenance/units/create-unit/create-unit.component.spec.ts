import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUnitComponent } from './create-unit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { SelectComponent } from 'src/app/core/select/select.component';
import { MessageComponent } from 'src/app/core/message/message.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/pages/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateUnitComponent', () => {
  let component: CreateUnitComponent;
  let fixture: ComponentFixture<CreateUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CustomMaterialModule,
        HttpClientTestingModule,
        StoreModule.forRoot(reducer),
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [CreateUnitComponent, SelectComponent, MessageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

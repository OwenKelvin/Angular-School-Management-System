import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUnitComponent } from './view-unit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessageComponent } from 'src/app/core/message/message.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewUnitComponent', () => {
  let component: ViewUnitComponent;
  let fixture: ComponentFixture<ViewUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CustomMaterialModule, SharedModule, HttpClientTestingModule],
      declarations: [ ViewUnitComponent, MessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

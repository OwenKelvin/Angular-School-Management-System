import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUnitsComponent } from './view-units.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { MessageComponent } from 'src/app/core/message/message.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewUnitsComponent', () => {
  let component: ViewUnitsComponent;
  let fixture: ComponentFixture<ViewUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CustomMaterialModule, SharedModule, HttpClientTestingModule],
      declarations: [ ViewUnitsComponent, MessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

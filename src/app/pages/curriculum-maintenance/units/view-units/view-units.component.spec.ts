import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUnitsComponent } from './view-units.component';

describe('ViewUnitsComponent', () => {
  let component: ViewUnitsComponent;
  let fixture: ComponentFixture<ViewUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUnitsComponent ]
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

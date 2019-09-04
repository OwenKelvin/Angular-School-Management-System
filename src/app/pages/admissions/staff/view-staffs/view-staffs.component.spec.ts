import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStaffsComponent } from './view-staffs.component';

describe('ViewStaffsComponent', () => {
  let component: ViewStaffsComponent;
  let fixture: ComponentFixture<ViewStaffsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStaffsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

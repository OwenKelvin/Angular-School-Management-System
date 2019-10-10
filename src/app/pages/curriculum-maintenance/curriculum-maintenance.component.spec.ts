import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumMaintenanceComponent } from './curriculum-maintenance.component';

describe('CurriculumMaintenanceComponent', () => {
  let component: CurriculumMaintenanceComponent;
  let fixture: ComponentFixture<CurriculumMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

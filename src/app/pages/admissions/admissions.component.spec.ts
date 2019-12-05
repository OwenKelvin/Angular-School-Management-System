import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionsComponent } from './admissions.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdmissionsComponent', () => {
  let component: AdmissionsComponent;
  let fixture: ComponentFixture<AdmissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule],
      declarations: [ AdmissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

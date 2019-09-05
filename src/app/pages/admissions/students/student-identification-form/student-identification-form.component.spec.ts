import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIdentificationFormComponent } from './student-identification-form.component';

describe('StudentIdentificationFormComponent', () => {
  let component: StudentIdentificationFormComponent;
  let fixture: ComponentFixture<StudentIdentificationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentIdentificationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIdentificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGuardianFormComponent } from './student-guardian-form.component';

describe('StudentGuardianFormComponent', () => {
  let component: StudentGuardianFormComponent;
  let fixture: ComponentFixture<StudentGuardianFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentGuardianFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGuardianFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

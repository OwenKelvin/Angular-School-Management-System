import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassLevelsComponent } from './class-levels.component';

describe('ClassLevelsComponent', () => {
  let component: ClassLevelsComponent;
  let fixture: ComponentFixture<ClassLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

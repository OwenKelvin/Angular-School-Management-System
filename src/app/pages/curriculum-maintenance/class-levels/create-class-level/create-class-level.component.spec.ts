import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassLevelComponent } from './create-class-level.component';

describe('CreateClassLevelComponent', () => {
  let component: CreateClassLevelComponent;
  let fixture: ComponentFixture<CreateClassLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateClassLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClassLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

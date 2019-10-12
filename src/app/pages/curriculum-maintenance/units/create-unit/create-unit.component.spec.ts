import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUnitComponent } from './create-unit.component';

describe('CreateUnitComponent', () => {
  let component: CreateUnitComponent;
  let fixture: ComponentFixture<CreateUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

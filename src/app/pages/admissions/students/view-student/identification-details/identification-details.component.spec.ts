import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationDetailsComponent } from './identification-details.component';

describe('IdentificationDetailsComponent', () => {
  let component: IdentificationDetailsComponent;
  let fixture: ComponentFixture<IdentificationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

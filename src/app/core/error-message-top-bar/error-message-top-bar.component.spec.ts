import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageTopBarComponent } from './error-message-top-bar.component';

describe('ErrorMessageTopBarComponent', () => {
  let component: ErrorMessageTopBarComponent;
  let fixture: ComponentFixture<ErrorMessageTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMessageTopBarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessageTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

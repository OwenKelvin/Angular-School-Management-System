import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMenuWrapperComponent } from './mat-menu-wrapper.component';

describe('MatMenuWrapperComponent', () => {
  let component: MatMenuWrapperComponent;
  let fixture: ComponentFixture<MatMenuWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatMenuWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatMenuWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

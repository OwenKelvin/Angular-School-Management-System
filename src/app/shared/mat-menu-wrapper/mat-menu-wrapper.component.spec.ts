import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMenuWrapperComponent } from './mat-menu-wrapper.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

describe('MatMenuWrapperComponent', () => {
  let component: MatMenuWrapperComponent;
  let fixture: ComponentFixture<MatMenuWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule, MatIconModule, RouterTestingModule],
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

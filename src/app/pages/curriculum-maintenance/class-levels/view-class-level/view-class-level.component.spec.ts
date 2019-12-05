import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassLevelComponent } from './view-class-level.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewClassLevelComponent', () => {
  let component: ViewClassLevelComponent;
  let fixture: ComponentFixture<ViewClassLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ViewClassLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClassLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

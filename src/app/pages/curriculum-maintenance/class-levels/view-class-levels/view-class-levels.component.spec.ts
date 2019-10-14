import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassLevelsComponent } from './view-class-levels.component';

describe('ViewClassLevelsComponent', () => {
  let component: ViewClassLevelsComponent;
  let fixture: ComponentFixture<ViewClassLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClassLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClassLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBooksComponent } from './view-books.component';

describe('ViewBooksComponent', () => {
  let component: ViewBooksComponent;
  let fixture: ComponentFixture<ViewBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

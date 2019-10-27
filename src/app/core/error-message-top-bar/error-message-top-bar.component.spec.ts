import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageTopBarComponent } from './error-message-top-bar.component';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { StoreModule } from '@ngrx/store';

describe('ErrorMessageTopBarComponent', () => {
  let component: ErrorMessageTopBarComponent;
  let fixture: ComponentFixture<ErrorMessageTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomMaterialModule, StoreModule.forRoot({})],
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

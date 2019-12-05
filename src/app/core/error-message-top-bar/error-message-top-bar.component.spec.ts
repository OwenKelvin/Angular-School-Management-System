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
      declarations: [ErrorMessageTopBarComponent],
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
  it('should call dispatch method when "closeDialog" is called', () => {
    const store = jasmine.createSpyObj({ dispatch: () => { } });
    const errorMessageTopBarComponent = new ErrorMessageTopBarComponent(store);
    errorMessageTopBarComponent.closeDialog();
    expect(store.dispatch).toHaveBeenCalled();
  });
  it('should have as showMessage = true when "openDialog" is called', () => {
    const store = jasmine.createSpyObj({ dispatch: () => { } });
    const errorMessageTopBarComponent = new ErrorMessageTopBarComponent(store);
    errorMessageTopBarComponent.openDialog();
    expect(errorMessageTopBarComponent.showMessage).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarComponent } from './snackbar.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/store/reducers';

describe('SnackbarComponent', () => {
  let component: SnackBarComponent;
  let fixture: ComponentFixture<SnackBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomMaterialModule, StoreModule.forRoot(reducer)],
      declarations: [SnackBarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

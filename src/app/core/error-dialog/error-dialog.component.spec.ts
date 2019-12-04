import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDialogComponent } from './error-dialog.component';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('ErrorDialogComponent', () => {
  let component: ErrorDialogComponent;
  let fixture: ComponentFixture<ErrorDialogComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close'),
    afterClosed: () => jasmine.createSpyObj('afterClosed', ['subscribe'])
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomMaterialModule, MatDialogModule],
      declarations: [ErrorDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {}},
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

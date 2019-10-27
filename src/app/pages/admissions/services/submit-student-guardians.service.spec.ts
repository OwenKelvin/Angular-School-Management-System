import { TestBed } from '@angular/core/testing';

import { SubmitStudentGuardiansService } from './submit-student-guardians.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../store/reducers';

describe('SubmitStudentGuardiansService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, StoreModule.forRoot(reducer)]
  }));

  it('should be created', () => {
    const service: SubmitStudentGuardiansService = TestBed.get(SubmitStudentGuardiansService);
    expect(service).toBeTruthy();
  });
});

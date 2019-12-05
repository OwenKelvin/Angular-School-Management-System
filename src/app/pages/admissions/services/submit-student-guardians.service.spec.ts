import { TestBed } from '@angular/core/testing';

import { SubmitStudentGuardiansService } from './submit-student-guardians.service';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SubmitStudentGuardiansService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, StoreModule.forRoot(reducer)]
  }));

  it('should be created', () => {
    const service: SubmitStudentGuardiansService = TestBed.get(SubmitStudentGuardiansService);
    expect(service).toBeTruthy();
  });
});

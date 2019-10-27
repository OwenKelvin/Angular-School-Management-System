import { TestBed } from '@angular/core/testing';

import { AcademicYearService } from './academic-year.service';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { HttpClientModule } from '@angular/common/http';

describe('AcademicYearService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [CustomMaterialModule, HttpClientModule]
  }));

  it('should be created', () => {
    const service: AcademicYearService = TestBed.get(AcademicYearService);
    expect(service).toBeTruthy();
  });
});

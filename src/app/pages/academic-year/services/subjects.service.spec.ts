import { TestBed } from '@angular/core/testing';

import { SubjectsService } from './subjects.service';

describe('SubjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubjectsService = TestBed.get(SubjectsService);
    expect(service).toBeTruthy();
  });
});

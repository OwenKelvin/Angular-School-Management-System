import { TestBed } from '@angular/core/testing';

import { AcademicYearMenuItemsService } from './academic-year-menu-items.service';

describe('MenuItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcademicYearMenuItemsService = TestBed.get(
      AcademicYearMenuItemsService
    );
    expect(service).toBeTruthy();
  });
});

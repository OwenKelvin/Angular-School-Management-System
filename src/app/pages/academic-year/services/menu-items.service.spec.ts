import { TestBed } from '@angular/core/testing';

import { MenuItemsService } from './academic-year-menu-items.service';

describe('MenuItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuItemsService = TestBed.get(MenuItemsService);
    expect(service).toBeTruthy();
  });
});

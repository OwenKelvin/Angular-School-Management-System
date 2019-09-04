import { TestBed } from '@angular/core/testing';

import { MenuItemService } from './menu-item.service';

describe('MenuItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuItemService = TestBed.get(MenuItemService);
    expect(service).toBeTruthy();
  });
});

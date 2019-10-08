import { TestBed } from '@angular/core/testing';

import { HttpCacheService } from './http-cache.service';

describe('HttpCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpCacheService = TestBed.get(HttpCacheService);
    expect(service).toBeTruthy();
  });
});

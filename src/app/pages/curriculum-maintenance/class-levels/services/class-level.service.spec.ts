import { TestBed } from '@angular/core/testing';

import { ClassLevelService } from './class-level.service';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';

describe('ClassLevelService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    })
  );

  it('should be created', () => {
    const service: ClassLevelService = TestBed.get(ClassLevelService);
    expect(service).toBeTruthy();
  });
});

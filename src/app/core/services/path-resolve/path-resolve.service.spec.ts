import { TestBed } from '@angular/core/testing';

import { PathResolveService } from './path-resolve.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('PathResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule
    ],
    providers: [RouterTestingModule]
  }));

  it('should be created', () => {
    const service: PathResolveService = TestBed.get(PathResolveService);
    expect(service).toBeTruthy();
  });
});

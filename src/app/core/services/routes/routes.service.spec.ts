import { TestBed } from '@angular/core/testing';

import { RoutesService } from './routes.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('RoutesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [
    ]
  }));

  it('should be created', () => {
    const service: RoutesService = TestBed.get(RoutesService);
    expect(service).toBeTruthy();
  });
});

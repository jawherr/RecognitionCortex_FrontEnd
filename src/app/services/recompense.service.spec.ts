import { TestBed } from '@angular/core/testing';

import { RecompenseService } from './recompense.service';

describe('RecompenseService', () => {
  let service: RecompenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecompenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

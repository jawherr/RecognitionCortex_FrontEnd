import { TestBed } from '@angular/core/testing';

import { SoldeService } from './solde.service';

describe('SoldeService', () => {
  let service: SoldeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoldeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

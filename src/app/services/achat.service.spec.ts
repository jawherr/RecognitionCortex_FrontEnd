import { TestBed } from '@angular/core/testing';

import { AchatService } from './achat.service';

describe('AchatService', () => {
  let service: AchatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

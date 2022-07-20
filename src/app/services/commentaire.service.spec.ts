import { TestBed } from '@angular/core/testing';

import { CommentaireService } from './commentaire.service';

describe('CommentaireService', () => {
  let service: CommentaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

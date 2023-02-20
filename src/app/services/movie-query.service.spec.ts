import { TestBed } from '@angular/core/testing';

import { MovieQueryService } from './movie-query.service';

describe('MovieQueryService', () => {
  let service: MovieQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

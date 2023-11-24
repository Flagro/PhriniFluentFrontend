import { TestBed } from '@angular/core/testing';

import { WordGroupsService } from './word-groups.service';

describe('WordGroupsService', () => {
  let service: WordGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CommentStatePageService } from './comment-state-page.service';

describe('CommentStatePageService', () => {
  let service: CommentStatePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentStatePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

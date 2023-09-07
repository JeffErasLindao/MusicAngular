import { TestBed } from '@angular/core/testing';

import { DatasongService } from './datasong.service';

describe('DatasongService', () => {
  let service: DatasongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

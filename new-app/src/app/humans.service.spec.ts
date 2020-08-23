import { TestBed } from '@angular/core/testing';

import { HumansService } from './humans.service';

describe('HumansService', () => {
  let service: HumansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HumansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

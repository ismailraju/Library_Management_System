import { TestBed } from '@angular/core/testing';

import { NormsService } from './norms.service';

describe('NormsService', () => {
  let service: NormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { W360Service } from './w360.service';

describe('W360Service', () => {
  let service: W360Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(W360Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Svc1Service } from './svc1.service';

describe('Svc1Service', () => {
  let service: Svc1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

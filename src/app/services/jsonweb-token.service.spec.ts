import { TestBed } from '@angular/core/testing';

import { JSONWebTokenService } from './jsonweb-token.service';

describe('JSONWebTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JSONWebTokenService = TestBed.get(JSONWebTokenService);
    expect(service).toBeTruthy();
  });
});

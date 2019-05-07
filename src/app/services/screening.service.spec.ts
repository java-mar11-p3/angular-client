import { TestBed } from '@angular/core/testing';

import { ScreeningService } from './screening.service';

describe('ScreeningService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScreeningService = TestBed.get(ScreeningService);
    expect(service).toBeTruthy();
  });
});

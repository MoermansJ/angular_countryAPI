import { TestBed } from '@angular/core/testing';

import { CountryServiceTsService } from './country-service.ts.service';

describe('CountryServiceTsService', () => {
  let service: CountryServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

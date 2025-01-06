import { TestBed } from '@angular/core/testing';

import { SearchAllServiceService } from './search-all-service.service';

describe('SearchAllServiceService', () => {
  let service: SearchAllServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchAllServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

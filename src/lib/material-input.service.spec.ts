import { TestBed } from '@angular/core/testing';

import { MaterialInputService } from './material-input.service';

describe('MaterialInputService', () => {
  let service: MaterialInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

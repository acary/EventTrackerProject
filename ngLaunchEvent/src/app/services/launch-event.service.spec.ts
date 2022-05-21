import { TestBed } from '@angular/core/testing';

import { LaunchEventService } from './launch-event.service';

describe('LaunchEventService', () => {
  let service: LaunchEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { OnecourseService } from './onecourse.service';

describe('OnecourseService', () => {
  let service: OnecourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnecourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

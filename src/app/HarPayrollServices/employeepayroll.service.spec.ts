import { TestBed } from '@angular/core/testing';

import { EmployeepayrollService } from './employeepayroll.service';

describe('EmployeepayrollService', () => {
  let service: EmployeepayrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeepayrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

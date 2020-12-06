import { TestBed } from '@angular/core/testing';

import { OrderResourceServiceService } from './order-resource-service.service';

describe('OrderResourceServiceService', () => {
  let service: OrderResourceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderResourceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

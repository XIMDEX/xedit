import { TestBed, inject } from '@angular/core/testing';

import { DamService } from './dam.service';

describe('DamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DamService]
    });
  });

  it('should be created', inject([DamService], (service: DamService) => {
    expect(service).toBeTruthy();
  }));
});

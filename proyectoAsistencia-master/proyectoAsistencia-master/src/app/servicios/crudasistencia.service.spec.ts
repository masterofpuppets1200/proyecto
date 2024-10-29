import { TestBed } from '@angular/core/testing';

import { AsistenciaService } from './crudasistencia.service';

describe('CrudasistenciaService', () => {
  let service: AsistenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsistenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

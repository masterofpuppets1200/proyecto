import { TestBed } from '@angular/core/testing';

import { ServiciosAsignaturaService } from './servicios/servicios-asignatura.service';

describe('ServiciosAsignaturaService', () => {
  let service: ServiciosAsignaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosAsignaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

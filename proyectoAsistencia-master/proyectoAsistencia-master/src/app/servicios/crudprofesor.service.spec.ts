import { TestBed } from '@angular/core/testing';

import { CrudprofesorService } from './crudprofesor.service';

describe('CrudprofesorService', () => {
  let service: CrudprofesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudprofesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodigoAlumnoQrPage } from './codigo-alumno-qr.page';

describe('CodigoAlumnoQrPage', () => {
  let component: CodigoAlumnoQrPage;
  let fixture: ComponentFixture<CodigoAlumnoQrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoAlumnoQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

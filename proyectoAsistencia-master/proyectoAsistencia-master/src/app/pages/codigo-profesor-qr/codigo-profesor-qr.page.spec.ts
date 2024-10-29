import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodigoProfesorQRPage } from './codigo-profesor-qr.page';

describe('CodigoProfesorQRPage', () => {
  let component: CodigoProfesorQRPage;
  let fixture: ComponentFixture<CodigoProfesorQRPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoProfesorQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoAlumnoPage } from './listado-alumno.page';

describe('ListadoAlumnoPage', () => {
  let component: ListadoAlumnoPage;
  let fixture: ComponentFixture<ListadoAlumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

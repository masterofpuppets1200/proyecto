import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaCursoAlumnoPage } from './lista-curso-alumno.page';

describe('ListaCursoAlumnoPage', () => {
  let component: ListaCursoAlumnoPage;
  let fixture: ComponentFixture<ListaCursoAlumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCursoAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

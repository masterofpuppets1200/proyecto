import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaCursoProfesorPage } from './lista-curso-profesor.page';

describe('ListaCursoProfesorPage', () => {
  let component: ListaCursoProfesorPage;
  let fixture: ComponentFixture<ListaCursoProfesorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCursoProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

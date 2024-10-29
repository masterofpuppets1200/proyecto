import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoProfePage } from './listado-profe.page';

describe('ListadoProfePage', () => {
  let component: ListadoProfePage;
  let fixture: ComponentFixture<ListadoProfePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoProfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

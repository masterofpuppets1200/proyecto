import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformesProfesorPage } from './informes-profesor.page';

describe('InformesProfesorPage', () => {
  let component: InformesProfesorPage;
  let fixture: ComponentFixture<InformesProfesorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

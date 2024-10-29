import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCursoAlumnoPage } from './lista-curso-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCursoAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCursoAlumnoPageRoutingModule {}

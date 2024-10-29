import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoAlumnoPage } from './listado-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoAlumnoPageRoutingModule {}

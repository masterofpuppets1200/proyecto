import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCursoProfesorPage } from './lista-curso-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCursoProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCursoProfesorPageRoutingModule {}

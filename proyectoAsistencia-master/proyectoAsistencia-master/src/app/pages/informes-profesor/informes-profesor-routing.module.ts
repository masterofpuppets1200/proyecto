import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformesProfesorPage } from './informes-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: InformesProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformesProfesorPageRoutingModule {}

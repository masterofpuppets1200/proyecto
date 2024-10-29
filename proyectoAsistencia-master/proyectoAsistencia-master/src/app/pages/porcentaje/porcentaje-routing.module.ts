import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorcentajePage } from './porcentaje.page';

const routes: Routes = [
  {
    path: '',
    component: PorcentajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorcentajePageRoutingModule {}

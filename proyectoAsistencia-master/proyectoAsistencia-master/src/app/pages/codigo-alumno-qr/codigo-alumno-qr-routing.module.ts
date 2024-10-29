import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigoAlumnoQrPage } from './codigo-alumno-qr.page';

const routes: Routes = [
  {
    path: '',
    component: CodigoAlumnoQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodigoAlumnoQrPageRoutingModule {}

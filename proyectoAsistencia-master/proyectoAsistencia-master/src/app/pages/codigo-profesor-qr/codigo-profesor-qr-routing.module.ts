import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigoProfesorQRPage } from './codigo-profesor-qr.page';

const routes: Routes = [
  {
    path: '',
    component: CodigoProfesorQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodigoProfesorQRPageRoutingModule {}

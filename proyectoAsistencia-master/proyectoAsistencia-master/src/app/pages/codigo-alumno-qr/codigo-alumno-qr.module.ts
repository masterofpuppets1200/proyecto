import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigoAlumnoQrPageRoutingModule } from './codigo-alumno-qr-routing.module';

import { CodigoAlumnoQrPage } from './codigo-alumno-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigoAlumnoQrPageRoutingModule
  ],
  declarations: [CodigoAlumnoQrPage]
})
export class CodigoAlumnoQrPageModule {}

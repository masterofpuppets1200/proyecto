import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorcentajePageRoutingModule } from './porcentaje-routing.module';

import { PorcentajePage } from './porcentaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorcentajePageRoutingModule
  ],
  declarations: [PorcentajePage]
})
export class PorcentajePageModule {}

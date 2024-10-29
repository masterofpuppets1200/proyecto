import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoProfePageRoutingModule } from './listado-profe-routing.module';

import { ListadoProfePage } from './listado-profe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoProfePageRoutingModule
  ],
  declarations: [ListadoProfePage]
})
export class ListadoProfePageModule {}

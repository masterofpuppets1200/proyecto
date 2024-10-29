import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoAlumnoPageRoutingModule } from './listado-alumno-routing.module';

import { ListadoAlumnoPage } from './listado-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoAlumnoPageRoutingModule
  ],
  declarations: [ListadoAlumnoPage]
})
export class ListadoAlumnoPageModule {}

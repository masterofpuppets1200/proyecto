import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCursoAlumnoPageRoutingModule } from './lista-curso-alumno-routing.module';

import { ListaCursoAlumnoPage } from './lista-curso-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCursoAlumnoPageRoutingModule
  ],
  declarations: [ListaCursoAlumnoPage]
})
export class ListaCursoAlumnoPageModule {}

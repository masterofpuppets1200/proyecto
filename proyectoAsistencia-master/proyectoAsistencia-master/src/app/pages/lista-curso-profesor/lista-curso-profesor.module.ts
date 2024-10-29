import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCursoProfesorPageRoutingModule } from './lista-curso-profesor-routing.module';

import { ListaCursoProfesorPage } from './lista-curso-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCursoProfesorPageRoutingModule
  ],
  declarations: [ListaCursoProfesorPage]
})
export class ListaCursoProfesorPageModule {}

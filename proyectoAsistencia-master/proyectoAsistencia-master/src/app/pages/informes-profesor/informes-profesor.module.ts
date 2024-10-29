import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformesProfesorPageRoutingModule } from './informes-profesor-routing.module';

import { InformesProfesorPage } from './informes-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformesProfesorPageRoutingModule
  ],
  declarations: [InformesProfesorPage]
})
export class InformesProfesorPageModule {}

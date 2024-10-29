import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigoProfesorQRPageRoutingModule } from './codigo-profesor-qr-routing.module';

import { CodigoProfesorQRPage } from './codigo-profesor-qr.page';

import { QrCodeModule } from 'ng-qrcode';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigoProfesorQRPageRoutingModule,
    QrCodeModule
  ],
  declarations: [CodigoProfesorQRPage]
})
export class CodigoProfesorQRPageModule {}

import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController, Platform } from '@ionic/angular';
import { Html5Qrcode } from 'html5-qrcode';

@Component({
  selector: 'app-codigo-alumno-qr',
  templateUrl: './codigo-alumno-qr.page.html',
  styleUrls: ['./codigo-alumno-qr.page.scss'],
})
export class CodigoAlumnoQrPage implements OnInit {
  isSupported = false;
  barcodes: Barcode[] = [];
  scannerId = 'reader'; // Contenedor para escáner en el navegador
  html5QrCode: Html5Qrcode | null = null;

  constructor(private alertController: AlertController, private platform: Platform) {}

  ngOnInit() {
    this.platform.ready().then(async () => {
      if (this.platform.is('capacitor')) {
        const result = await BarcodeScanner.isSupported();
        this.isSupported = result.supported;
      } else {
        // Inicializa html5-qrcode si no está en un dispositivo móvil
        this.html5QrCode = new Html5Qrcode(this.scannerId);
        this.isSupported = true;
      }
    });
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }

    if (this.platform.is('capacitor') && this.isSupported) {
      const { barcodes } = await BarcodeScanner.scan();
      this.barcodes.push(...barcodes);
    } else if (this.html5QrCode) {
      this.html5QrCode.start(
        { facingMode: 'environment' },
        {
          fps: 10,
          qrbox: { width: 500, height: 500 },
        },
        (decodedText: string) => {
          alert(`Código QR escaneado: ${decodedText}`);
          this.html5QrCode?.stop();
        },
        (errorMessage: string) => {
          console.error('Error de escaneo:', errorMessage);
        }
      ).catch((err: any) => console.error('Error al iniciar el escáner', err));
    }
  }

  async requestPermissions(): Promise<boolean> {
    if (this.platform.is('capacitor')) {
      const { camera } = await BarcodeScanner.requestPermissions();
      return camera === 'granted' || camera === 'limited';
    }
    return true; 
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permiso denegado',
      message: 'Por favor, otorga el permiso de cámara para usar el escáner.',
      buttons: ['OK'],
    });
    await alert.present();
  }
}

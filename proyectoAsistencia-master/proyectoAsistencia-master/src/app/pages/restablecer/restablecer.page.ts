import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  formulario: FormGroup;
  constructor(private alertController: AlertController, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.required],
      nuevaContrasena: ['', [Validators.required, Validators.minLength(6)]],
    });
   }

  nuevacontrasena:string=''
  ngOnInit() {
  }

  async restablecerContrasena() {
    if (this.formulario.valid) {
      const { usuario, nuevaContrasena } = this.formulario.value;

      // Aquí debes validar si el usuario existe (puedes usar localStorage o una API)
      const usuarioAlmacenado = localStorage.getItem('usuario1'); // Ejemplo de usuario
      if (usuarioAlmacenado === usuario) {
        // Cambiar la contraseña en el almacenamiento
        localStorage.setItem('contrasena', nuevaContrasena);
        console.log("Contraseña restablecida exitosamente");
        this.presentAlert("Éxito", "Contraseña restablecida exitosamente.");
      } else {
        this.presentAlert("Error", "Usuario no encontrado.");
      }
    } else {
      this.presentAlert("Error", "Por favor, completa todos los campos correctamente.");
    }
  }
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}

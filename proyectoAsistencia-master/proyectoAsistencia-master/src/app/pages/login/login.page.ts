import { Component, OnInit, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formulario: FormGroup;
  

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}
  nombre:String='';
  constraseña:String='';
  
  validar() {
    if (this.formulario.valid) {
      const { nombre, password } = this.formulario.value;
      
      if (nombre === "armando" && password === "barreda") {
        console.log("Bienvenido");
        localStorage.setItem("usuario1", nombre);
        this.navCtrl.navigateForward(['/listado-profe']) ;
      } 
      if (nombre==="julio" && password === "tapia") {
        console.log("Bienvenido");
        localStorage.setItem("usuario2", nombre);
        this.navCtrl.navigateForward(['/listado-alumno']) ;
      } 
    } else {
      
    }
  }

  async presentAlert(message: string = 'usuario/contraseña incorrecto') {
    const alert = await this.alertController.create({
      header: '',
      subHeader: 'Usuario incorrecto',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}


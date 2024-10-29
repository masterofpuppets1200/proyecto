import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sala-espera',
  templateUrl: './sala-espera.page.html',
  styleUrls: ['./sala-espera.page.scss'],
})
export class SalaEsperaPage implements OnInit {

  tiempoRestante: number = 120; // 120 segundos = 2 minutos
  progreso: number = 1; // Progreso completo al 100% inicialmente
  tiempoTexto: string = '02:00'; // Tiempo mostrado inicialmente

  constructor() { }

  ngOnInit() {
    this.iniciarTemporizador();
  }

  iniciarTemporizador() {
    const intervalo = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--;
        this.actualizarTiempoTexto();
        this.actualizarProgreso();
      } else {
        clearInterval(intervalo); // Detiene el temporizador cuando llega a 0
      }
    }, 1000); // Actualiza cada segundo (1000 ms)
  }

  actualizarTiempoTexto() {
    const minutos = Math.floor(this.tiempoRestante / 60);
    const segundos = this.tiempoRestante % 60;
    this.tiempoTexto = 
      (minutos < 10 ? '0' + minutos : minutos) + 
      ':' + 
      (segundos < 10 ? '0' + segundos : segundos);
  }

  actualizarProgreso() {
    this.progreso = this.tiempoRestante / 120; // Actualiza el progreso (de 1 a 0)
  }
}


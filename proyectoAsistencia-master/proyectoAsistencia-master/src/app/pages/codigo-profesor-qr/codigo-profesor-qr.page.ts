import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigo-profesor-qr',
  templateUrl: './codigo-profesor-qr.page.html',
  styleUrls: ['./codigo-profesor-qr.page.scss'],
})
export class CodigoProfesorQRPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.valorQR=JSON.stringify(this.valorQRJSON)
  }

  valorQR:string='hola joto'
  valorQRJSON={
    codigocurso:'001',codigoprofesor:'003',fecha:'23/10/2024',
  }
}

import { Component, OnInit } from '@angular/core';
import { ServiciosAsignaturaService } from 'src/app/servicios/servicios-asignatura.service';

@Component({
  selector: 'app-listado-profe',
  templateUrl: './listado-profe.page.html',
  styleUrls: ['./listado-profe.page.scss'],
})
export class ListadoProfePage implements OnInit {

  constructor(public hh: ServiciosAsignaturaService) { }
  // LISTA ASIGNATURA
  TodaAsignatura: any[] = [];
  // SECCIONES ALMACENADAS POR ID DE ASIGNATURAS **CAMBIAR**
  SeccionesPorAsignatura: { [key: string]: any[] } = {};
  // Objeto que almacenará los alumnos por sección, usando el ID de la asignatura y el código de la sección **CAMBIAR**
  AlumnosPorSeccion: { [key: string]: { [key: string]: any[] } } = {};
  // Objeto que almacenará asistencia de los alumnos por sección, usando el ID de la asignatura, el código de la sección y el ID del alumno **CAMBIAR**
  AsistenciaPorAlumno: { [key: string]: { [key: string]: { [key: string]: any[] } } } = {};

  usuario1: string | null = '';

  consulta() {
    this.hh.obtenerTodasLasAsignaturas().subscribe(data =>{ 
      this.TodaAsignatura = data;
     });
  }

  ngOnInit() {
   this.consulta();

  }



}

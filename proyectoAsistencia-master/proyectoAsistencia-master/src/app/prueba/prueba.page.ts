import { Component, OnInit } from '@angular/core';
import { ServiciosAsignaturaService } from '../servicios/servicios-asignatura.service'; 

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  // Constructor para inyectar el servicio
  constructor(public hh: ServiciosAsignaturaService) { }
  filtradaAsignaturas: any[];

  // LISTA ASIGNATURA
  TodaAsignatura: any[] = [];

  // SECCIONES ALMACENADAS POR ID DE ASIGNATURAS
  SeccionesPorAsignatura: { [key: string]: any[] } = {};

  // Objeto que almacenará los alumnos por sección, usando el ID de la asignatura y el código de la sección
  AlumnosPorSeccion: { [key: string]: { [key: string]: any[] } } = {};

  // Objeto que almacenará asistencia de los alumnos por sección, usando el ID de la asignatura, el código de la sección y el ID del alumno
  AsistenciaPorAlumno: { [key: string]: { [key: string]: { [key: string]: any } } } = {};

  usuario1: string | null = '';

  // Método para consultar asignaturas, secciones y alumnos
  consulta() {
    this.hh.obtenerTodasLasAsignaturas().subscribe(data => {
      this.TodaAsignatura = data; 

      this.TodaAsignatura.forEach(curso => {
        // Inicializa SeccionesPorAsignatura[curso.id] si no está definido
        if (!this.SeccionesPorAsignatura[curso.id]) {
          this.SeccionesPorAsignatura[curso.id] = [];
        }

        this.hh.obtenerSeccionesPorAsignatura(curso.id).subscribe(secciones => {
          this.SeccionesPorAsignatura[curso.id] = secciones;

          secciones.forEach(seccion => {
            // Inicializa AlumnosPorSeccion[curso.id][seccion.id] si no está definido
            if (!this.AlumnosPorSeccion[curso.id]) {
              this.AlumnosPorSeccion[curso.id] = {};
            }
            if (!this.AlumnosPorSeccion[curso.id][seccion.id]) {
              this.AlumnosPorSeccion[curso.id][seccion.id] = []; // Inicializar como arreglo
            }

            this.hh.obtenerAlumnosPorSeccion(curso.id, seccion.id).subscribe(alumnos => {
              this.AlumnosPorSeccion[curso.id][seccion.id] = alumnos;

              // Obtener asistencia para cada alumno
              alumnos.forEach(alumno => {
                this.hh.obtenerEstadoAsistenciaAlumno(curso.id, seccion.id, alumno.id).subscribe(asistencia => {
                  if (!this.AsistenciaPorAlumno[curso.id]) {
                    this.AsistenciaPorAlumno[curso.id] = {};
                  }
                  if (!this.AsistenciaPorAlumno[curso.id][seccion.id]) {
                    this.AsistenciaPorAlumno[curso.id][seccion.id] = {};
                  }

                  // Verificar que la asistencia es un arreglo antes de asignarla
                  if (Array.isArray(asistencia)) {
                    this.AsistenciaPorAlumno[curso.id][seccion.id][alumno.id] = asistencia;
                  } else {
                    this.AsistenciaPorAlumno[curso.id][seccion.id][alumno.id] = []; // Asignar un arreglo vacío si no es un arreglo
                  }
                });
              });
            });
          });
        });
      });
    });
  }
  filtrarPorAsignatura(event: any) {
    const asignaturaId = event.detail.value;
    console.log("ID seleccionada:", asignaturaId); // Verifica el ID seleccionado

    if (asignaturaId) {
      this.filtradaAsignaturas = this.TodaAsignatura.filter(asignatura => {
        console.log("Filtrando asignatura:", asignatura); // Verifica cada asignatura
        return asignatura.id === asignaturaId;
      });
    } else {
      this.filtradaAsignaturas = this.TodaAsignatura; // Mostrar todas si no hay selección
    }

    console.log("Filtrada Asignaturas:", this.filtradaAsignaturas); // Verifica las asignaturas filtradas
  }

  
  // Método del ciclo de vida OnInit
  ngOnInit() {
    this.consulta();
  }
}

import { Component, OnInit } from '@angular/core';
import { ServiciosAsignaturaService } from 'src/app/servicios/servicios-asignatura.service';
@Component({
  selector: 'app-listado-alumno',
  templateUrl: './listado-alumno.page.html',
  styleUrls: ['./listado-alumno.page.scss'],

})
export class ListadoAlumnoPage implements OnInit {
  menuType: string = 'overlay';
  filtradaAsignaturas: any[];

  constructor(public hh: ServiciosAsignaturaService) { }

// LISTA ASIGNATURA
TodaAsignatura: any[] = [];

// SECCIONES ALMACENADAS POR ID DE ASIGNATURAS
SeccionesPorAsignatura: { [key: string]: any[] } = {};

// Objeto que almacenará los alumnos por sección, usando el ID de la asignatura y el código de la sección
AlumnosPorSeccion: { [key: string]: { [key: string]: any[] } } = {};

// Objeto que almacenará asistencia de los alumnos por sección, usando el ID de la asignatura, el código de la sección y el ID del alumno
AsistenciaPorAlumno: { [key: string]: { [key: string]: { [key: string]: any } } } = {};


  usuario2: string | null = '';


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
    const searchTerm = event.target.value.toLowerCase(); 
    if (searchTerm) {
      this.filtradaAsignaturas = this.TodaAsignatura.filter(asignatura => {
        const secciones = this.SeccionesPorAsignatura[asignatura.id] || [];
        // Verificar si el nombre de la asignatura o de alguna sección contiene el término de búsqueda
        return asignatura.nombre.toLowerCase().includes(searchTerm) ||
          secciones.some(seccion => seccion.id.toString().includes(searchTerm));
      });
    } else {
      this.filtradaAsignaturas = this.TodaAsignatura; // Mostrar todas si no hay búsqueda
    }
    console.log("Filtrada Asignaturas:", this.filtradaAsignaturas); // Para verificar las asignaturas filtradas
  }
  ngOnInit(){
    this.usuario2 = localStorage.getItem('usuario2');
  } 
}

  

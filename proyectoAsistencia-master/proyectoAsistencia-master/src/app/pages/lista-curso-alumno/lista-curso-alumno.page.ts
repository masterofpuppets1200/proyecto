import { Component, OnInit } from '@angular/core';
import { ServiciosAsignaturaService } from 'src/app/servicios/servicios-asignatura.service';

@Component({
  selector: 'app-lista-curso-alumno',
  templateUrl: './lista-curso-alumno.page.html',
  styleUrls: ['./lista-curso-alumno.page.scss'],
})
export class ListaCursoAlumnoPage implements OnInit {
  filtradaAsignaturas: any[] = [];

  constructor(public hh: ServiciosAsignaturaService) { }

  // LISTA ASIGNATURA
  TodaAsignatura: any[] = [];

  // SECCIONES ALMACENADAS POR ID DE ASIGNATURAS
  SeccionesPorAsignatura: { [key: string]: any[] } = {};
  datosCurso: { asignatura: string; seccion: string }[] = [];
  AlumnosPorSeccion: { [key: string]: { [key: string]: any[] } } = {};
  AsistenciaPorAlumno: { [key: string]: { [key: string]: { [key: string]: any } } } = {};
  usuario1: string | null = '';

  consulta() {
    this.hh.obtenerTodasLasAsignaturas().subscribe(data => {
      this.TodaAsignatura = data;

      this.TodaAsignatura.forEach(curso => {
        if (!this.SeccionesPorAsignatura[curso.id]) {
          this.SeccionesPorAsignatura[curso.id] = [];
        }

        this.hh.obtenerSeccionesPorAsignatura(curso.id).subscribe(secciones => {
          console.log('seccion:', secciones);
          const seccionesFiltradas = secciones.filter(seccion => {
            console.log('profesor', seccion.profesor);
            return seccion.profesor; // Asegúrate de que haya un profesor
          });

          this.SeccionesPorAsignatura[curso.id] = seccionesFiltradas;

          seccionesFiltradas.forEach(seccion => {
            if (!this.AlumnosPorSeccion[curso.id]) {
              this.AlumnosPorSeccion[curso.id] = {};
            }
            if (!this.AlumnosPorSeccion[curso.id][seccion.id]) {
              this.AlumnosPorSeccion[curso.id][seccion.id] = [];
            }

            this.hh.obtenerAlumnosPorSeccion(curso.id, seccion.id).subscribe(alumnos => {
              this.AlumnosPorSeccion[curso.id][seccion.id] = alumnos; // Se almacenan todos los alumnos

              alumnos.forEach(alumno => {
                this.hh.obtenerEstadoAsistenciaAlumno(curso.id, seccion.id, alumno.id).subscribe(asistencia => {
                  if (!this.AsistenciaPorAlumno[curso.id]) {
                    this.AsistenciaPorAlumno[curso.id] = {};
                  }
                  if (!this.AsistenciaPorAlumno[curso.id][seccion.id]) {
                    this.AsistenciaPorAlumno[curso.id][seccion.id] = {};
                  }
                  if (!this.AsistenciaPorAlumno[curso.id][seccion.id][alumno.id]) {
                    this.AsistenciaPorAlumno[curso.id][seccion.id][alumno.id] = [];
                  }

                  this.AsistenciaPorAlumno[curso.id][seccion.id][alumno.id] = asistencia;
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
      // Filtrar asignaturas según el término de búsqueda
      this.filtradaAsignaturas = this.TodaAsignatura.filter(asignatura => {
        const secciones = this.SeccionesPorAsignatura[asignatura.id] || [];

        // Verificar si la asignatura o alguna sección coincide con el término de búsqueda
        const seccionesCoincidentes = secciones.filter(seccion => 
          seccion.id.toString().includes(searchTerm) || 
          seccion.profesor.toLowerCase().includes(searchTerm)
        );

        // Devolver verdadero si la asignatura coincide o si hay secciones coincidentes
        return asignatura.id.toLowerCase().includes(searchTerm) || seccionesCoincidentes.length > 0;
      });
      
      // Ahora, para cada asignatura coincidente, mantenemos solo las secciones relevantes
      this.filtradaAsignaturas.forEach(asignatura => {
        asignatura.seccionesFiltradas = this.SeccionesPorAsignatura[asignatura.id].filter(seccion => 
          seccion.id.toString().includes(searchTerm) || 
          seccion.profesor.toLowerCase().includes(searchTerm)
        );
      });

    } else {
      // Si no hay término de búsqueda, mostrar todas las asignaturas
      this.filtradaAsignaturas = this.TodaAsignatura.map(asignatura => ({
        ...asignatura,
        seccionesFiltradas: this.SeccionesPorAsignatura[asignatura.id] || []
      }));
    }

    console.log("Filtrada Asignaturas:", this.filtradaAsignaturas);
}

  ngOnInit() {
    this.consulta();
  }
}





/* this.datosCurso.push({
  asignatura: curso.nombre,
  seccion: seccion.id,
});
 */
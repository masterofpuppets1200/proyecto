import { Component, OnInit } from '@angular/core';
import { CrudprofesorService } from 'src/app/servicios/crudprofesor.service';
import { Observable } from 'rxjs';


// Define la interfaz para la asistencia
export interface Asistencia {
  // Define aquí las propiedades que esperas en la asistencia
  fecha: string;
  estado: string; // o el tipo que corresponda
}

@Component({
  selector: 'app-lista-curso-profesor',
  templateUrl: './lista-curso-profesor.page.html',
  styleUrls: ['./lista-curso-profesor.page.scss'],
})
export class ListaCursoProfesorPage implements OnInit {

  AsistenciaPorAlumno: { [key: string]: { [key: string]: { [key: string]: Asistencia } } } = {};
  usuario1: string | null = '';
  filtradaAsignaturas: any[];

  constructor(public cPService: CrudprofesorService) { }

  ngOnInit() {
    this.usuario1 = localStorage.getItem('usuario1');
    this.consultaa();
    /* this.consulta(); */
  }
  listaaisgnatura: any[] = []; // Cambia Observable<any>[] a any[]
  listaSecciones: any[] = [];


  // guarda las asignaturas  tod
  TodaAsignatura: any[] = [];
  // SECCIONES ALMACENADAS POR ID DE ASIGNATURAS
  SeccionesPorAsignatura: { [key: string]: any[] } = {};
  // ALUMNOS POR SECCION Y ASIGNATURA
  AlumnosPorSeccion: { [key: string]: { [key: string]: any[] } } = {};

  


  // entender la consulta para que se haga mas facil : tomas 
  consultaa() {
    this.cPService.consultaBasica().subscribe(asignatura => {
      this.TodaAsignatura = asignatura;

      asignatura.forEach(asignaturaNombre => {
        // Asegúrate de que el objeto existe antes de asignar secciones
        this.SeccionesPorAsignatura[asignaturaNombre.id] = [];

        this.cPService.consultaSecciones(asignaturaNombre.id).subscribe(seccion => {
          this.SeccionesPorAsignatura[asignaturaNombre.id] = seccion;

          seccion.forEach(secc => {
            // Inicializa el arreglo para cada sección
            if (!this.AlumnosPorSeccion[asignaturaNombre.id]) {
              this.AlumnosPorSeccion[asignaturaNombre.id] = {};
            }
            this.AlumnosPorSeccion[asignaturaNombre.id][secc.id] = [];

            this.cPService.consultaalumnos(asignaturaNombre.id, secc.id).subscribe(infoAlumno => {
              this.AlumnosPorSeccion[asignaturaNombre.id][secc.id] = infoAlumno;
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
  
        // Filtrar las secciones que coinciden con el término de búsqueda
        const seccionesCoincidentes = secciones.filter(seccion => 
          seccion.id.toString().toLowerCase().includes(searchTerm)
        );
  
        // Guardar solo las secciones que coinciden con la búsqueda
        asignatura.seccionesFiltradas = seccionesCoincidentes;
  
        // Mostrar la asignatura solo si coincide o tiene secciones coincidentes
        return asignatura.id.toLowerCase().includes(searchTerm) || seccionesCoincidentes.length > 0;
      });
    } else {
      // Si no hay término de búsqueda, mostrar todas las asignaturas y sus secciones
      this.filtradaAsignaturas = this.TodaAsignatura.map(asignatura => ({
        ...asignatura,
        seccionesFiltradas: this.SeccionesPorAsignatura[asignatura.id] || []
      }));
    }
  
    console.log("Filtrada Asignaturas:", this.filtradaAsignaturas);
  }
  
  
  
}

















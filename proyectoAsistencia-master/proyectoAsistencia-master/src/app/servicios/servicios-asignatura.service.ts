import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiciosAsignaturaService {

  constructor(private afs: AngularFirestore) { }

  

  // Obtener todas las asignaturas (Devuelve ID y atributos)
  obtenerTodasLasAsignaturas() {
    return this.afs.collection('asignatura')
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }
  
  // Obtener secciones de una asignatura (Devuelve ID y atributos)
  obtenerSeccionesPorAsignatura(nomAsignatura: string) {
    return this.afs.collection('asignatura').doc(nomAsignatura)
      .collection("seccion")
      .snapshotChanges()
      .pipe(  //PIPE Y MAP ES PARA OBTENER EL DOCUMENTO 
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  // Obtener alumnos filtrados por sección
  obtenerAlumnosPorSeccion(nomAsignatura: string, codSeccion: string) {
    return this.afs.collection('asignatura').doc(nomAsignatura)
      .collection("seccion").doc(codSeccion)
      .collection("alumnos")
      .snapshotChanges()
      .pipe(  
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  // Obtener el estado de asistencia de un alumno
  obtenerEstadoAsistenciaAlumno(nomAsignatura: string, codSeccion: string, nomAlumno: string) {
    return this.afs.collection('asignatura').doc(nomAsignatura)
      .collection("seccion").doc(codSeccion)
      .collection("alumnos").doc(nomAlumno).collection("asistencia")
      .valueChanges();
  }
  
}

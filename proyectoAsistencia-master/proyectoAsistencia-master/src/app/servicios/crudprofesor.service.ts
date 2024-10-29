import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudprofesorService {

  constructor(public afs: AngularFirestore) { }

  // Obtener todas las asignaturas
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

  // Obtener secciones de una asignatura
  obtenerSeccionesPorAsignatura(nomAsignatura: string) {
    return this.afs.collection('asignatura').doc(nomAsignatura)
      .collection("seccion")
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  // Obtener profesores filtrados por sección
  obtenerProfesoresPorSeccion(nomAsignatura: string, codSeccion: string) {
    return this.afs.collection('asignatura').doc(nomAsignatura)
      .collection("seccion").doc(codSeccion)
      .collection("profesor")
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  
  consultaBasica() {
    return this.afs.collection('asignatura')
    
    .snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any; 
        const id = a.payload.doc.id;
        return { id, ...data }; 
      }))
    );
  }

  consultaSecciones(asignaturaid:string) {
    return this.afs.collection('asignatura').doc(asignaturaid).collection('seccion')

    .snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any; 
        const id = a.payload.doc.id;
        return { id, ...data }; 
      }))
    );
  }

  consultaalumnos(asignaturaid:string,seccionid:string) {
    return this.afs.collection('asignatura').doc(asignaturaid).collection('seccion').doc(seccionid).collection('alumnos')
    .snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any; 
        const id = a.payload.doc.id;
        return { id, ...data }; 
      }))
    );
  }
  
  consultahorario(asignaturaid:string,seccionid:string,alumnoid:string) {
    return this.afs.collection('asignatura').doc(asignaturaid).collection
    ('seccion').doc(seccionid).collection
    ('alumnos').doc(alumnoid).collection('horario')


    .snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any; 
        const id = a.payload.doc.id;
        return { id, ...data }; 
      }))
    );
  }
}
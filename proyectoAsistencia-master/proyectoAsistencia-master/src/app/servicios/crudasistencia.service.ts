// src/app/services/asistencia.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  actualizarAsignatura(asignaturaId: string, arg1: { clasesPresentes: any; }) {
    throw new Error('Method not implemented.');
  }
  obtenerPorcentajeAsistencia(asignaturaId: string): import("rxjs").Observable<number> {
    throw new Error('Method not implemented.');
  }
    obtenerasistencia() {
    throw new Error('Method not implemented.');
  }

  constructor(private afs: AngularFirestore) { }

  obtnerasistencia(nomAsignatura: string, codSeccion: string, Nombalum : string) {
    return this.afs.collection('asignatura').doc(nomAsignatura)
      .collection("seccion").doc(codSeccion)
      .collection("alumnos").doc(Nombalum).collection("asistencia")
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  obtenerAsignaturas() {
    return this.afs.collection('asignaturas').snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }
}

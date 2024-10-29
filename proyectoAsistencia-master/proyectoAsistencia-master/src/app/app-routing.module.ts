import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'listado-alumno',
    loadChildren: () => import('./pages/listado-alumno/listado-alumno.module').then( m => m.ListadoAlumnoPageModule)
  },
  {
    path: 'informes-profesor',
    loadChildren: () => import('./pages/informes-profesor/informes-profesor.module').then( m => m.InformesProfesorPageModule)
  },
  {
    path: 'codigo-profesor-qr',
    loadChildren: () => import('./pages/codigo-profesor-qr/codigo-profesor-qr.module').then( m => m.CodigoProfesorQRPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./pages/restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'listado-profe',
    loadChildren: () => import('./pages/listado-profe/listado-profe.module').then( m => m.ListadoProfePageModule)
  },
  {
    path: 'codigo-alumno-qr',
    loadChildren: () => import('./pages/codigo-alumno-qr/codigo-alumno-qr.module').then( m => m.CodigoAlumnoQrPageModule)
  },
  {
    path: 'lista-curso-profesor',
    loadChildren: () => import('./pages/lista-curso-profesor/lista-curso-profesor.module').then( m => m.ListaCursoProfesorPageModule)
  },
  {
    path: 'lista-curso-alumno',
    loadChildren: () => import('./pages/lista-curso-alumno/lista-curso-alumno.module').then( m => m.ListaCursoAlumnoPageModule)
  },
  {
    path: 'sala-espera',
    loadChildren: () => import('./pages/sala-espera/sala-espera.module').then( m => m.SalaEsperaPageModule)
  },
  {
    path: 'registro-asistencia',
    loadChildren: () => import('./pages/registro-asistencia/registro-asistencia.module').then( m => m.RegistroAsistenciaPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'porcentaje',
    loadChildren: () => import('./pages/porcentaje/porcentaje.module').then( m => m.PorcentajePageModule)
  },
  {
    path: 'prueba',
    loadChildren: () => import('./prueba/prueba.module').then( m => m.PruebaPageModule)
  },
  
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },

  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

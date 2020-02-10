import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'listar-personas',
    loadChildren: () => import('./pages/listar-personas/listar-personas.module').then( m => m.ListarPersonasPageModule)
  },
  {
    path: 'buscar-personas',
    loadChildren: () => import('./pages/buscar-personas/buscar-personas.module').then( m => m.BuscarPersonasPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'peliculas',
    loadChildren: () => import('./pages/peliculas/peliculas.module').then( m => m.PeliculasPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'pagina-inicio',
    loadChildren: () => import('./pages/pagina-inicio/pagina-inicio.module').then( m => m.PaginaInicioPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'buscar-peliculas',
    loadChildren: () => import('./pages/buscar-peliculas/buscar-peliculas.module').then( m => m.BuscarPeliculasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

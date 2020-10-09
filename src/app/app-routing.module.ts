import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';
import { ActorlistadoComponent } from './componentes/actorlistado/actorlistado.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  {path: '' , component: PrincipalComponent},
  {path: 'actor/listado' , component: ActorlistadoComponent},
  {path: 'peliculas/alta' , component: PeliculaAltaComponent},
  {path: 'actor/actorpelicula' , component: ActorPeliculaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

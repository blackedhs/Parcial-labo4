import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorlistadoComponent } from './componentes/actorlistado/actorlistado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  {path: '' , component: PrincipalComponent},
  {path: 'actor/listado' , component: ActorlistadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

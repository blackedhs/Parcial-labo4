import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MidbService } from './servicio/midb.service';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, NgForm } from '@angular/forms';
import { AltaComponent } from './componentes/alta/alta.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { AltaActorComponent } from './componentes/alta-actor/alta-actor.component';
import { ActorlistadoComponent } from './componentes/actorlistado/actorlistado.component';
import { BorrarComponent } from './componentes/borrar/borrar.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    AltaComponent,
    TablaComponent,
    NavbarComponent,
    DetalleComponent,
    ModificarComponent,
    TablaPaisesComponent,
    AltaActorComponent,
    ActorlistadoComponent,
    BorrarComponent,
    PeliculaAltaComponent,
    ActorPeliculaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule 
  ],
  providers: [MidbService],
  bootstrap: [AppComponent]
})
export class AppModule { }

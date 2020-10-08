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

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    AltaComponent,
    TablaComponent,
    NavbarComponent,
    DetalleComponent,
    ModificarComponent
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

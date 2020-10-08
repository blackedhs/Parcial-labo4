import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Usuario } from 'src/app/clases/usuario';
import { MidbService } from 'src/app/servicio/midb.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public user = new Usuario();
  public usuarios = [];
  public detalle = new Usuario;
  public modificar = new Usuario;
  constructor(public db: MidbService) { }

  ngOnInit(): void {
    this.db.getdb('nombre').snapshotChanges().subscribe(listaTabla => {
      this.usuarios = [];
      listaTabla.forEach(element => {
        const x = element.payload.toJSON();
        x['$key'] = element.key;
        this.usuarios.push(x);
      });
      console.log(this.usuarios.length);
    });
    // lleno la base con datos desde mock
    // this.db.mockAlta('nombre');
  }
  onModificar(objeto:object){
    this.modificar = objeto as Usuario;
  }
  onDetalle(objeto:object){
    this.detalle = objeto as Usuario;
  }
  
}

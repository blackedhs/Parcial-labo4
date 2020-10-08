import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { MidbService } from 'src/app/servicio/midb.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  @Input()  public user = new Usuario();
  constructor(public db: MidbService) { }

  ngOnInit(): void {
    this.db.getdb('paises');
  }
  onModificar(objeto:object){
    const x = objeto as Usuario;
    this.db.updatedb(x.$key,{
      nombre: x.nombre,
      apellido: x.apellido,
      email: x.email
    });
  }
  onCancel(){
    this.user = new Usuario();
  }
}

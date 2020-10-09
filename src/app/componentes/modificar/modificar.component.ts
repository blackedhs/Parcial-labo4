import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Usuario } from 'src/app/clases/usuario';
import { MidbService } from 'src/app/servicio/midb.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  @Input()  public actor = new Actor();
  @Output() public limpiar = new EventEmitter();
  constructor(public db: MidbService) { }

  ngOnInit(): void {
  }
  onModificar(objeto:object){
    const x = objeto as Actor;
    this.db.updatedb(x.$key,{
      nombre: x.nombre,
      apellido: x.apellido,
      sexo: x.sexo,
      fecha: x.fecha,
      nacionalidad: x.nacionalidad
    });
    this.onCancel();
  }
  onCancel(){
    this.actor = new Actor();
    this.limpiar.emit();
  }
}

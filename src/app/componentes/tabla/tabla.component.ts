import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MidbService } from 'src/app/servicio/midb.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @Input() public usuarios;
  @Output() public modificar = new EventEmitter();
  @Output() public detalle = new EventEmitter();
  constructor(public db: MidbService) { }

  ngOnInit(): void {
  }
  onBorrar(objeto: object) {
    this.db.deletedb(objeto['$key']);
  }
  onModificar(objeto: object) {
    this.modificar.emit(objeto);
  }
  onDetalle(objeto: object){
    this.detalle.emit(objeto);
  }
}

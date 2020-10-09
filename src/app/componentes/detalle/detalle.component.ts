import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  @Input() public actor = new Actor();
  @Output() public limpiar = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onLimpiar(){
    this.limpiar.emit();
  }
}

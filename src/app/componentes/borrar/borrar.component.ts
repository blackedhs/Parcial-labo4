import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { MidbService } from 'src/app/servicio/midb.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {
  @Input() public actor = new Actor();
  @Output() public limpiar = new EventEmitter();
  constructor(public db:MidbService) { }

  ngOnInit(): void {
  }
  onBorrar(){
    this.db.deletedb(this.actor.$key);
    this.onCancel();
  }
  onCancel(){
    this.limpiar.emit();
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { element } from 'protractor';
import { MidbService } from 'src/app/servicio/midb.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  public paises
  @Output() public paisSelected= new EventEmitter();
  constructor(public db: MidbService) { }

  ngOnInit(): void {
    this.db.mock().subscribe(element => this.paises= element);
  }
  onPais(pais){
    this.paisSelected.emit(pais);
  }
}

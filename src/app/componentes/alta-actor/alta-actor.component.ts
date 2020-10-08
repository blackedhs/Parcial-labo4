import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { MidbService } from 'src/app/servicio/midb.service';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {
  public actor = new Actor();
  constructor(public db: MidbService) { }

  ngOnInit(): void {
  }
  onGuardar() {
    this.db.getdb('actores');
    setTimeout(() =>this.db.setdb(this.actor), 2000)
  }
  onTablaPais(pais){
    this.actor.nacionalidad = pais.name;
  }

}

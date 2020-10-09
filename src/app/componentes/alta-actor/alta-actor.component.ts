import { Component, Input, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Actor } from 'src/app/clases/actor';
import { MidbService } from 'src/app/servicio/midb.service';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {
  public actor = new Actor();
  public count = 0;
  constructor(public db: MidbService) { }
  
  ngOnInit(): void {
  }
  onGuardar() {
    this.db.getdb('peliculas').snapshotChanges().subscribe(element =>
      element.forEach(()=>
      this.count++
      ));
    setTimeout(() =>{
      this.actor.id= this.count + 1;
      this.db.setdb(this.actor)
      this.count = 0;
      this.actor =new Actor();
    }, 2000);
  }
  onTablaPais(pais){
    this.actor.nacionalidad = pais.name;
  }

}

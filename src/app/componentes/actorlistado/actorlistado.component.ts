import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { MidbService } from 'src/app/servicio/midb.service';

@Component({
  selector: 'app-actorlistado',
  templateUrl: './actorlistado.component.html',
  styleUrls: ['./actorlistado.component.css']
})
export class ActorlistadoComponent implements OnInit {
  public actores: any;
  public borrar= new Actor();
  public select= new Actor();
  public modificar= new Actor();
  public detalle= new Actor();

  constructor(public db: MidbService) { }

  ngOnInit(): void {
    this.db.getdb('actores').snapshotChanges().subscribe(listaTabla => {
      this.actores = [];
      listaTabla.forEach(element => {
        const x = element.payload.toJSON();
        x['$key'] = element.key;
        this.actores.push(x);
      });
    });
  }
  onSelect(object){
    this.select = object;
  }
}

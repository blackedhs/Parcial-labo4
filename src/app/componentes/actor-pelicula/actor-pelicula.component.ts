import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { MidbService } from 'src/app/servicio/midb.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {
  public actores = [];
  public peliculas = [];
  public show = false;
  constructor(public db: MidbService) { }

  ngOnInit(): void {
    this.db.getdb('actores').snapshotChanges().subscribe(element => {
      this.actores = [];
      element.forEach(item => {
        const x = item.payload.toJSON();
        x['$key'] = item.key
        this.actores.push(x);});
    });
  }
  onSelect(actor){
    this.show = true;
    this.db.getdb('peliculas').snapshotChanges().subscribe(element => {
      this.peliculas = [];
      element.forEach(item => this.peliculas.push(item.payload.toJSON()) );
      this.peliculas = this.peliculas.filter(element=> element.actor == actor.nombre);
    });
  }
}

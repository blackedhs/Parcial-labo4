import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Pelicula } from 'src/app/clases/pelicula';
import { MidbService } from 'src/app/servicio/midb.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  public pelicula = new Pelicula();
  public count = 0;
  public listado = [];
  constructor(public db:MidbService) { }

  ngOnInit(): void {
    this.db.getdb('actores').snapshotChanges().subscribe(listaTabla => {
        this.listado = [];
        listaTabla.forEach(element => {
          const x = element.payload.toJSON();
          x['$key'] = element.key;
          this.listado.push(x);
        });
      });
  }
  onGuardar(){
    this.db.getdb('peliculas').snapshotChanges().subscribe(element =>
      element.forEach(()=>
      this.count++
      ));
    setTimeout(() =>{
      this.pelicula.id= this.count + 1;
      this.db.setdb(this.pelicula)
      this.count = 0;
      this.pelicula =new Pelicula();
    }, 2000);
  }
  onTabla(actor){
    this.pelicula.actor = actor.nombre;
  }
}

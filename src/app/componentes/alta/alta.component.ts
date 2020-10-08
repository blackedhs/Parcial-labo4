import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { MidbService } from 'src/app/servicio/midb.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
  public user = new Usuario();
  constructor(public db: MidbService) { }

  ngOnInit(): void {
  }
  onGuardar(objeto: object) {
    this.db.setdb(objeto);
  }
}

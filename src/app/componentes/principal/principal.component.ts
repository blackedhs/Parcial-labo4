import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { MidbService } from 'src/app/servicio/midb.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public user = new Usuario();
  public usuarios = [];
  constructor(public db: MidbService) { }

  ngOnInit(): void {
    this.db.getdb('usuarios').snapshotChanges().subscribe(listaTabla =>{ 
      this.usuarios = [];
      listaTabla.forEach(element => {
        const x= element.payload.toJSON();
        x['$key']=element.key;
        this.usuarios.push(x);
      })
    }
      );
  }
  onGuardar(objeto:object){
    this.db.setdb(objeto)
  }
  onBorrar(objeto:object){
      this.db.deletedb(objeto['$key']);
  }
  onModificar(objeto:object){
  
  }


}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MidbService {
  public list : AngularFireList<any>;
  constructor(public fire: AngularFireDatabase) { }
  getdb(coleccion: string){
    this.list = this.fire.list(coleccion);
    return this.list;
  }
  setdb(objeto:object){
    this.list.push(objeto);
  }
  updatedb(key:string, objeto:object){
    this.list.update(key,objeto);
  }
  deletedb(key:string){
    this.list.remove(key);
  }
}

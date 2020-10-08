import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class MidbService {
  public list: AngularFireList<any>;
  public mockList: any;
  constructor(public fire: AngularFireDatabase, public http: HttpClient) { }
  getdb(coleccion: string) {
    this.list = this.fire.list(coleccion);
    return this.list;
  }
  setdb(objeto: object) {
    this.list.push(objeto);
  }
  updatedb(key: string, objeto: object) {
    this.list.update(key, objeto);
  }
  deletedb(key: string) {
    this.list.remove(key);
  }
  mockAlta(coleccion: string) {
    this.getdb(coleccion);
    const x = this.http.get('https://my.api.mockaroo.com/nombre.json?key=a90b84e0').subscribe(element =>
      this.mockList = element);
    setTimeout(() => {
      this.mockList.forEach(element => {
        this.setdb(element);
      });
    }, 4000)
    return this.list;
  }
}

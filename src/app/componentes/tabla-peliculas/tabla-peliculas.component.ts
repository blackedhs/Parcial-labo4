import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.css']
})
export class TablaPeliculasComponent implements OnInit {
  @Input() public peliculas: any;
  constructor() { }

  ngOnInit(): void {
  }

}

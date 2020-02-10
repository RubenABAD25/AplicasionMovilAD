import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/home/models/peliculas';
import { PeliculaServiceService } from 'src/app/servicios/pelicula-service.service';

@Component({
  selector: 'app-buscar-peliculas',
  templateUrl: './buscar-peliculas.page.html',
  styleUrls: ['./buscar-peliculas.page.scss'],
})
export class BuscarPeliculasPage implements OnInit {

  peliculas: Pelicula[] = [];
  texto = '';
  constructor(private service: PeliculaServiceService) { }

  ngOnInit() {
   
  }


  async onSearchChange(event) {
    console.log(event.detail.value);
    
    this.service.buscarPeliculaTexto(event.detail.value).subscribe(res => {
      this.peliculas = res; 
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../home/models/peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculaServiceService {

  constructor(private http: HttpClient) { }


  listarPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>('http://localhost:8080/Peliculas/srv/pelicula/list');
  }

  buscarPelicula(id: number):Observable<Pelicula> {
    return this.http.get<Pelicula>(`http://localhost:8080/Peliculas/srv/pelicula/obtenerPelicula?id=${id}`);
  }


  buscarPeliculaTexto(texto: string):Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(`http://localhost:8080/Peliculas/srv/pelicula/peliNombre?nombre=${texto}`);
  }

}

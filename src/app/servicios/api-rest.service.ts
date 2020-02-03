import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../pages/buscar-personas/persona';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  private url: string='http://localhost:8080/Webservices/srv/actores/leerActores';
  private url1: string='http://localhost:8080/Webservices/srv/actores/leer';
  constructor(private http: HttpClient) { }
  async getLista(){
    let response = await fetch(this.url);
    let data = await response.json();
    console.log(data);
    return data;
  }

  getData(): Observable<[]> {
    return this.http.get<[]>(this.url);
  }

  obtenerDatos(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.url1}?id=${id}`);
  }

}
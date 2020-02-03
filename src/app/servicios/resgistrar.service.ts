import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Usuario } from '../pages/login/usuario';
import { Observable } from 'rxjs';
import { Respuesta } from './respuesta';

@Injectable({
  providedIn: 'root'
})
export class ResgistrarService {
  private url: string='http://localhost:8080/logeo/srv/practicas/registrar';
  private headers= new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { }


  registrar(usuario: Usuario):Observable<Respuesta>{
    return this.http.post<Respuesta>(this.url,usuario, {headers: this.headers});
  }
}

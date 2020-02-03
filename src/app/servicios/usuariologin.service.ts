import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginPage } from '../pages/login/login.page';
import { Observable } from 'rxjs';
import { Respuesta } from './respuesta';
import { Usuario } from '../pages/login/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariologinService {
  [x: string]: any;
  private url: string='http://localhost:8080/logeo/srv/practicas/logeo';
  private headers= new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http: HttpClient) { }

  Login(usuario: Usuario):Observable<Respuesta>{
    return this.http.post<Respuesta>(this.url,usuario, {headers: this.headers});
  }
  async presentToast(mensaje: string) {
    const toast = await this.taostCtrl.create({
      message: mensaje,
      duration: 1000
    });
    toast.present();
  }

}

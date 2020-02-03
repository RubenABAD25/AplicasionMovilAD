import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuariologinService } from 'src/app/servicios/usuariologin.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: Usuario = new  Usuario();

  constructor(private service: UsuariologinService,
              private taostCtrl: ToastController,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.service.Login(this.usuario).subscribe(response => {
      if(response.respuesta === 'existe') {
        this.presentToast('Logueado correctamente');
        this.router.navigate(['/peliculas']);
      } else if(response.respuesta === 'No entity found for query') {
        this.presentToast('Datos incorrectos');
      } else {
        this.presentToast('Error');
      }
      
    })
  }

  async presentToast(mensaje: string) {
    const toast = await this.taostCtrl.create({
      message: mensaje,
      duration: 1000
    });
    toast.present();
  }

}

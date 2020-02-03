import { Component, OnInit } from '@angular/core';
import { Usuario } from '../login/usuario';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ResgistrarService } from 'src/app/servicios/resgistrar.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  private user:Usuario = new Usuario();
  constructor(private servicio: ResgistrarService,
    private taostCtrl: ToastController,
    private router: Router) { }

  ngOnInit() {
  }


  registrar(){
    this.servicio.registrar(this.user).subscribe(response =>{
      if(response.respuesta === 'ok') {
        this.presentToast('Registro  correctamente');
        this.router.navigate(['/login']);
      } else if(response.respuesta === 'error') {
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

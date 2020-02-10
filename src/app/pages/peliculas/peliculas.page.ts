import { Component, OnInit } from '@angular/core';
import { PeliculaServiceService } from 'src/app/servicios/pelicula-service.service';
import { Pelicula } from '../../home/models/peliculas';
import { ModalController, MenuController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/components/detalle/detalle.component';
import { Componentes } from '../../home/models/interfaces';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  peliculas: Pelicula[] = [];

  componentes: Componentes[] = [];

  constructor(private service: PeliculaServiceService, private modal: ModalController, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.listarPeliculas();
  }

  listarPeliculas() {
    this.service.listarPeliculas().subscribe(res => {
      console.log(res, 'eeee');
      this.peliculas = res;
      
    });
  }

  async ver(id: number) {
    const m = await this.modal.create({
      component: DetalleComponent,
      componentProps: {
        id: id
      }
    });
    m.present();
  }


  openMenu() {
    this.menuCtrl.toggle();
  }

}

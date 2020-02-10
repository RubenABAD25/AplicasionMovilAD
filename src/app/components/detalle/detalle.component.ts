import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PeliculaServiceService } from 'src/app/servicios/pelicula-service.service';
import { Pelicula } from 'src/app/home/models/peliculas';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input("id") id;
  pelicula: Pelicula;
  constructor(private modal: ModalController, private service: PeliculaServiceService) { }

  ngOnInit() {
    console.log(this.id);
    this.buscarPelicula();
  }


  buscarPelicula() {
    this.service.buscarPelicula(this.id).subscribe(res => {
      this.pelicula = res;
    });
  }

  cerrar() {
    this.modal.dismiss();
  }

}

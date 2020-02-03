import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../../servicios/api-rest.service';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.page.html',
  styleUrls: ['./listar-personas.page.scss'],
})
export class ListarPersonasPage implements OnInit {
  public dataReset: any[] = [];

  constructor(private service: ApiRestService) { }

  ngOnInit() {
    this.listar();
  }
  async getDatos() {
    await this.service.getLista().then(data => { 
      this.dataReset = data 
    });
  }

  listar() {
    this.service.getData().subscribe(respuesta => {
      this.dataReset = respuesta;
    });
  }
}
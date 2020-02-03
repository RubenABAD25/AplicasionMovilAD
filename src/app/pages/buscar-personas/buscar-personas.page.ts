import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { ApiRestService } from 'src/app/servicios/api-rest.service';

@Component({
  selector: 'app-buscar-personas',
  templateUrl: './buscar-personas.page.html',
  styleUrls: ['./buscar-personas.page.scss'],
})
export class BuscarPersonasPage implements OnInit {
persona:Persona = new Persona();
id:number;


  constructor(private service: ApiRestService) { }

  ngOnInit() {
  }

  buscar() {
    this.service.obtenerDatos(this.id).subscribe(res =>{
      this.persona=res;
      console.log(res.nombre+" "+res.apellidos);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';
import { Observable } from 'rxjs';
import { Componentes } from 'src/app/home/models/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componentes[]>;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.componentes = this.service.getMenu();
  }

}

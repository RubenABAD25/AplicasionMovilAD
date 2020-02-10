import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componentes } from '../home/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenu() {
    return this.http.get<Componentes[]>('/assets/data/menu.json');
  }
}

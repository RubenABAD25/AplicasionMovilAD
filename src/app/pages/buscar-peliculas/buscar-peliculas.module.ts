import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarPeliculasPageRoutingModule } from './buscar-peliculas-routing.module';

import { BuscarPeliculasPage } from './buscar-peliculas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarPeliculasPageRoutingModule
  ],
  declarations: [BuscarPeliculasPage]
})
export class BuscarPeliculasPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarPersonasPageRoutingModule } from './buscar-personas-routing.module';

import { BuscarPersonasPage } from './buscar-personas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarPersonasPageRoutingModule
  ],
  declarations: [BuscarPersonasPage]
})
export class BuscarPersonasPageModule {}

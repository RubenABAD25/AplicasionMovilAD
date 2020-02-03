import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarPersonasPage } from './buscar-personas.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarPersonasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarPersonasPageRoutingModule {}

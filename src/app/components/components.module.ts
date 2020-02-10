import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  entryComponents: [DetalleComponent, MenuComponent],
  declarations: [DetalleComponent, MenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [DetalleComponent, MenuComponent]
})
export class ComponentsModule { }

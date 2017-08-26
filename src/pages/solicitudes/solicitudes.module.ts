import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Solicitudes } from './solicitudes';

@NgModule({
  declarations: [
    Solicitudes,
  ],
  imports: [
    IonicPageModule.forChild(Solicitudes),
  ],
})
export class SolicitudesModule {}

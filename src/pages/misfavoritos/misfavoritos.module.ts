import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Misfavoritos } from './misfavoritos';

@NgModule({
  declarations: [
    Misfavoritos,
  ],
  imports: [
    IonicPageModule.forChild(Misfavoritos),
  ],
})
export class MisfavoritosModule {}

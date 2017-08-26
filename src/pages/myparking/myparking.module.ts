import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Myparking } from './myparking';

@NgModule({
  declarations: [
    Myparking,
  ],
  imports: [
    IonicPageModule.forChild(Myparking),
  ],
})
export class MyparkingModule {}

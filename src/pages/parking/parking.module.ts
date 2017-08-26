import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Parking } from './parking';

@NgModule({
  declarations: [
    Parking,
  ],
  imports: [
    IonicPageModule.forChild(Parking),
  ],
})
export class ParkingModule {}

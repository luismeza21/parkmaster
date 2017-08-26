import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-misfavoritos',
  templateUrl: 'misfavoritos.html',
})
export class Misfavoritos {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Misfavoritos');
  }

}

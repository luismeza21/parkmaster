import { detailParqueadero } from './parqueadero';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
//Firebase
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'page-myparking',
  templateUrl: 'myparking.html',
})
export class Myparking {


  public parqueaderos: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alerCtrl: AlertController,
    public modalCtrl: ModalController,
    public db: AngularFireDatabase) {
    this.parqueaderos = db.list('/parqueadero');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Myparking');
  }

  createParquedero() {
    let modal = this.modalCtrl.create(detailParqueadero);
    modal.present();
  }

}

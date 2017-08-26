import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController, ModalController } from 'ionic-angular';
//Firebase
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
@Component({
    templateUrl: 'parqueadero.html',
})
export class detailParqueadero {


    public parqueaderos: FirebaseListObservable<any>;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public alerCtrl: AlertController,
        public viewCtrl: ViewController,
        public modalCtrl: ModalController,
        public db: AngularFireDatabase) {
        this.parqueaderos = db.list('/parqueadero');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Myparking');
    }


    NewParquedero(nombre, estado) {
        this.parqueaderos.push({
            nombre: nombre,
            estado: estado
        }).then(newHorario => {
            this.navCtrl.pop();
        }, error => {
            console.log(error);
        });
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}

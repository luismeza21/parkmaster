import { Component } from '@angular/core';
import {
    ModalController,
    Platform,
    NavParams,
    ViewController,
    AlertController,
    LoadingController,
    ToastController,
    NavController
} from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
    templateUrl: 'horario.html'
})

export class HorarioPage {


    public horarioId: number;

    public horario: FirebaseListObservable<any>;
    public parqueaderoKey: string;

    //model Horario
    public comentario: string;
    public horaInicio: any;
    public horaFin: any;
    public parqueadero: any;
    public fecha: any;
    public estado: any;

    constructor(public platform: Platform,
        public params: NavParams,
        public navCtrl: NavController,
        public viewCtrl: ViewController,
        public alertCtrl: AlertController,
        public loadCtrl: LoadingController,
        public toastCtrl: ToastController,
        public db: AngularFireDatabase) {

        this.horario = db.list('/horario');

        this.horarioId = params.get('horarioId');
    }


    addHorario() {
        if (this.comentario != "") {
            this.horario.push({
                comentario: this.comentario,
                horaInicio: this.horaInicio,
                horaFin: this.horaFin,
                parqueadero: this.parqueadero,
                fecha: this.fecha,
                estado: this.estado
            });
            this.navCtrl.pop();
            this.showToast('Horario agregado con exito');
        } else {
            this.showToast('falta comentario');
        }

    }

    showToast(msj) {
        let toast = this.toastCtrl.create({
            message: msj,
            duration: 3000,
            position: 'bottom'
        });
    }
  

    dismiss() {
        this.viewCtrl.dismiss();
    }
}

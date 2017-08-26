import { HorarioPage } from './horario';
import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { DateFormatPipe } from 'angular2-moment';
//Firebase
import {FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';
@Component({
  selector: 'page-parking',
  templateUrl: 'parking.html',
})
export class Parking {

  public horarios: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public modalCtrl: ModalController,
   public actionSheetCtrl: ActionSheetController,
   public alertCtrl: AlertController,
   public db: AngularFireDatabase) {
     this.horarios = db.list('/horario');
  }

  ionViewDidLoad() {
    console.log(' Parking');
  }

  showOptions(horarioId) {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Que deseas hacer?',
    buttons: [
      {
        text: 'Eliminar Horario',
        role: 'destructive',
        handler: () => {
          this.removeHorario(horarioId);
        }
      },{
        text: 'Actualizar Horario',
        handler: () => {
          this.updateHorario(horarioId);
        }
      },{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}

  createHorario(){
    let modal = this.modalCtrl.create(HorarioPage);
    modal.present();
  }


  removeHorario(horarioId){
    this.horarios.remove(horarioId);
  }

  updateHorario(horarioId){
 this.navCtrl.push(HorarioPage,{horarioId: horarioId});
}


}

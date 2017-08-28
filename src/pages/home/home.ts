import { ListparkingPage } from './../listparking/listparking';
import { FindparkingPage } from './../findparking/findparking';
import { Myparking } from './../myparking/myparking';
import { searchPage } from './search';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public search = [];
  public ubicacion: any = false;

  constructor(
    public navCtrl: NavController,
  ) {
    this.search = [
      {
        titulo: 'Donde estás buscando ?',
        icon: 'locate',
        color: '#0CA9EA'
      }

    ];
  }

  buscarParqueadero(){
    if(this.ubicacion == true){
      this.navCtrl.push(FindparkingPage);
    }else{
       this.navCtrl.push(ListparkingPage);
    }
      
     
  }

  openDetailSearch(search){
    this.navCtrl.push(searchPage, { search: search });
  }

  publicarParqueadero(){
    this.navCtrl.push(Myparking);
  }


}

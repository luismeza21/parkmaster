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
     this.navCtrl.push(FindparkingPage);
  }

  openDetailSearch(search){
    this.navCtrl.push(searchPage, { search: search });
  }

  publicarParqueadero(){
    this.navCtrl.push(Myparking);
  }


}

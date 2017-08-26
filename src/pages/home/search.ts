import { Component } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';


@Component({
    selector: 'searchdetail',
    templateUrl: 'searchdetail.html'
})
export class searchPage {
    public search: any;
    constructor(public navCtrl: NavController, params: NavParams) {

      this.search = params.data
    }


}
